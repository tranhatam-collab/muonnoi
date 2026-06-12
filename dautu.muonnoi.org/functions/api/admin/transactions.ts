export interface Env {
  D1: D1Database;
  JWT_SECRET?: string;
  ADMIN_WHITELIST?: string;
}

function json(data: unknown, status = 200, origin?: string | null): Response {
  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  if (origin) {
    headers['Access-Control-Allow-Origin'] = origin;
    headers['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS';
    headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization';
  }
  return new Response(JSON.stringify(data), { status, headers });
}

async function verifyAdmin(request: Request, env: Env): Promise<{ userId: string; email: string } | null> {
  const auth = request.headers.get('Authorization') || '';
  const token = auth.replace('Bearer ', '').trim();
  if (!token || !env.JWT_SECRET) return null;
  try {
    const [header, payload, signature] = token.split('.');
    if (!header || !payload || !signature) return null;
    const encoder = new TextEncoder();
    const key = await crypto.subtle.importKey(
      'raw', encoder.encode(env.JWT_SECRET),
      { name: 'HMAC', hash: 'SHA-256' }, false, ['verify']
    );
    const valid = await crypto.subtle.verify('HMAC', key, base64urlDecode(signature), encoder.encode(`${header}.${payload}`));
    if (!valid) return null;
    const data = JSON.parse(new TextDecoder().decode(base64urlDecode(payload)));
    if (data.exp && Date.now() / 1000 > data.exp) return null;
    const whitelist = (env.ADMIN_WHITELIST || '').split(',').map(s => s.trim().toLowerCase()).filter(Boolean);
    if (whitelist.length > 0 && !whitelist.includes(data.email?.toLowerCase())) return null;
    return { userId: data.sub, email: data.email };
  } catch {
    return null;
  }
}

function base64urlDecode(str: string): Uint8Array {
  const padding = '='.repeat((4 - (str.length % 4)) % 4);
  const base64 = str.replace(/-/g, '+').replace(/_/g, '/') + padding;
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

// GET /api/admin/transactions
export const onRequestGet: PagesFunction<Env> = async (context) => {
  const { request, env } = context;
  const origin = request.headers.get('Origin');
  const admin = await verifyAdmin(request, env);
  if (!admin) return json({ ok: false, error: 'Forbidden' }, 403, origin);

  const url = new URL(request.url);
  const status = url.searchParams.get('status') || 'pending';
  const limit = Math.min(parseInt(url.searchParams.get('limit') || '50', 10), 100);

  const txs = await env.D1.prepare(
    `SELECT t.*, i.email as investor_email
     FROM transactions t
     JOIN investors inv ON t.investor_id = inv.id
     JOIN users i ON inv.user_id = i.id
     WHERE t.status = ?
     ORDER BY t.created_at DESC LIMIT ?`
  ).bind(status, limit).all<Record<string, unknown>>();

  return json({ ok: true, data: txs.results }, 200, origin);
};

// POST /api/admin/transactions/:id/confirm
export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;
  const origin = request.headers.get('Origin');
  const admin = await verifyAdmin(request, env);
  if (!admin) return json({ ok: false, error: 'Forbidden' }, 403, origin);

  const url = new URL(request.url);
  const txId = url.pathname.split('/').pop();
  if (!txId) return json({ ok: false, error: 'Missing transaction ID' }, 400, origin);

  await env.D1.prepare(
    `UPDATE transactions SET status = 'confirmed', approved_by = ?, approved_at = datetime('now'), updated_at = datetime('now')
     WHERE id = ?`
  ).bind(admin.userId, txId).run();

  const tx = await env.D1.prepare(
    'SELECT wallet_id, amount, transaction_type FROM transactions WHERE id = ?'
  ).bind(txId).first<{ wallet_id: string; amount: number; transaction_type: string }>();

  if (tx && tx.transaction_type === 'deposit') {
    await env.D1.prepare(
      `UPDATE wallets SET cash_confirmed = cash_confirmed + ?, cash_pending = MAX(0, cash_pending - ?), updated_at = datetime('now')
       WHERE id = ?`
    ).bind(tx.amount, tx.amount, tx.wallet_id).run();
  }

  await createLedgerEntries(env, txId, admin.userId);

  await env.D1.prepare(
    `INSERT INTO audit_logs (id, actor_id, actor_role, action, target_type, target_id, created_at)
     VALUES (?, ?, 'admin', 'transaction_confirmed', 'transaction', ?, datetime('now'))`
  ).bind(`audit_${Date.now()}`, admin.userId, txId).run();

  return json({ ok: true, message: 'Transaction confirmed and ledger entries created' }, 200, origin);
};

async function createLedgerEntries(env: Env, txId: string, adminId: string): Promise<void> {
  const tx = await env.D1.prepare(
    `SELECT t.*, w.user_id, p.primary_legal_entity_id as entity_id
     FROM transactions t
     LEFT JOIN wallets w ON t.wallet_id = w.id
     LEFT JOIN projects p ON t.project_id = p.id
     WHERE t.id = ?`
  ).bind(txId).first<Record<string, string | number>>();

  if (!tx) return;

  const groupId = `leg_${txId}`;
  const entries = [];

  if (tx.transaction_type === 'deposit') {
    entries.push(
      { account: 'legal_entity_bank_clearing', direction: 'debit', amount: tx.amount },
      { account: 'investor_cash_confirmed', direction: 'credit', amount: tx.amount }
    );
  } else if (tx.transaction_type === 'investment') {
    entries.push(
      { account: 'investor_cash_confirmed', direction: 'debit', amount: tx.amount },
      { account: 'project_capital_committed', direction: 'credit', amount: tx.amount }
    );
  }

  for (const entry of entries) {
    await env.D1.prepare(
      `INSERT INTO ledger_entries (id, transaction_id, entry_group_id, account_code, direction, currency, amount, investor_id, project_id, legal_entity_id, description, created_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now'))`
    ).bind(
      `le_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
      txId, groupId, entry.account, entry.direction, tx.currency, entry.amount,
      tx.investor_id, tx.project_id, tx.entity_id,
      `${entry.account} ${entry.direction}`
    ).run();
  }
}

export const onRequestOptions: PagesFunction<Env> = async (context) => {
  const origin = context.request.headers.get('Origin');
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': origin || '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
};
