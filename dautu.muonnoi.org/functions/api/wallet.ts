export interface Env {
  D1: D1Database;
  JWT_SECRET?: string;
  VERIFY_IAI_ONE_API_KEY?: string;
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

async function verifyAuth(request: Request, env: Env): Promise<{ userId: string; email: string } | null> {
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

// GET /api/wallet — Member xem số dư
export const onRequestGet: PagesFunction<Env> = async (context) => {
  const { request, env } = context;
  const origin = request.headers.get('Origin');
  const user = await verifyAuth(request, env);
  if (!user) return json({ ok: false, error: 'Unauthorized' }, 401, origin);

  const wallet = await env.D1.prepare(
    `SELECT id, currency, cash_pending, cash_confirmed, capital_committed, capital_deployed,
            capital_unallocated, platform_credit, refund_pending, locked_amount, status
     FROM wallets WHERE user_id = ?`
  ).bind(user.userId).first<Record<string, unknown>>();

  if (!wallet) {
    // Auto-create wallet if not exists
    await env.D1.prepare(
      `INSERT INTO wallets (id, user_id, currency, created_at, updated_at)
       VALUES (?, ?, 'VND', datetime('now'), datetime('now'))`
    ).bind(`w_${Date.now()}`, user.userId).run();
    return json({ ok: true, data: { currency: 'VND', cash_pending: 0, cash_confirmed: 0, capital_committed: 0, capital_deployed: 0, capital_unallocated: 0, platform_credit: 0, refund_pending: 0, locked_amount: 0, status: 'active' } }, 200, origin);
  }

  return json({ ok: true, data: wallet }, 200, origin);
};

// GET /api/wallet/history — Lịch sử giao dịch
export const onRequestHistory: PagesFunction<Env> = async (context) => {
  const { request, env } = context;
  const origin = request.headers.get('Origin');
  const user = await verifyAuth(request, env);
  if (!user) return json({ ok: false, error: 'Unauthorized' }, 401, origin);

  const url = new URL(request.url);
  const limit = Math.min(parseInt(url.searchParams.get('limit') || '20', 10), 100);
  const offset = parseInt(url.searchParams.get('offset') || '0', 10);

  const txs = await env.D1.prepare(
    `SELECT id, transaction_type, status, currency, amount, reference_code, description,
            created_at, approved_at
     FROM transactions
     WHERE investor_id = (SELECT id FROM investors WHERE user_id = ?)
     ORDER BY created_at DESC LIMIT ? OFFSET ?`
  ).bind(user.userId, limit, offset).all<Record<string, unknown>>();

  return json({ ok: true, data: txs.results, meta: { limit, offset } }, 200, origin);
};

// POST /api/wallet/deposit — Tạo payment intent nạp tiền
export const onRequestDeposit: PagesFunction<Env> = async (context) => {
  const { request, env } = context;
  const origin = request.headers.get('Origin');
  const user = await verifyAuth(request, env);
  if (!user) return json({ ok: false, error: 'Unauthorized' }, 401, origin);

  let body: Record<string, unknown>;
  try { body = await request.json() as Record<string, unknown>; } catch {
    return json({ ok: false, error: 'Invalid JSON' }, 400, origin);
  }

  const amount = typeof body.amount === 'number' ? body.amount : parseInt(String(body.amount ?? '0'), 10);
  const currency = typeof body.currency === 'string' ? body.currency.toUpperCase() : 'VND';

  if (!amount || amount <= 0) return json({ ok: false, error: { code: 'INVALID_AMOUNT', message: 'amount phải là số dương' } }, 400, origin);

  // Ensure wallet exists
  const wallet = await env.D1.prepare('SELECT id FROM wallets WHERE user_id = ?').bind(user.userId).first<{ id: string }>();
  const walletId = wallet?.id || `w_${Date.now()}`;
  if (!wallet) {
    await env.D1.prepare(
      `INSERT INTO wallets (id, user_id, currency, created_at, updated_at)
       VALUES (?, ?, ?, datetime('now'), datetime('now'))`
    ).bind(walletId, user.userId, currency).run();
  }

  // Get investor_id
  const investor = await env.D1.prepare('SELECT id FROM investors WHERE user_id = ?').bind(user.userId).first<{ id: string }>();
  if (!investor) return json({ ok: false, error: 'Investor profile required. Complete KYC first.' }, 403, origin);

  const txId = `tx_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`;
  const idempotencyKey = `dep_${user.userId}_${amount}_${Math.floor(Date.now() / 60000)}`;

  // Check duplicate
  const existing = await env.D1.prepare(
    'SELECT id, status FROM transactions WHERE idempotency_key = ?'
  ).bind(idempotencyKey).first<{ id: string; status: string }>();

  if (existing) {
    return json({ ok: true, data: { transactionId: existing.id, status: existing.status, replayed: true } }, 200, origin);
  }

  // Get default legal entity
  const entity = await env.D1.prepare(
    "SELECT id FROM legal_entities WHERE status = 'active' ORDER BY created_at LIMIT 1"
  ).first<{ id: string }>();
  const entityId = entity?.id || 'entity_default';

  await env.D1.prepare(
    `INSERT INTO transactions (id, investor_id, legal_entity_id, wallet_id, transaction_type, status, currency, amount, idempotency_key, description, created_by, created_at, updated_at)
     VALUES (?, ?, ?, ?, 'deposit', 'pending', ?, ?, ?, 'Wallet deposit', ?, datetime('now'), datetime('now'))`
  ).bind(txId, investor.id, entityId, walletId, currency, amount, idempotencyKey, user.userId).run();

  // Call pay.iai.one if configured
  let checkoutUrl: string | null = null;
  if (env.PAY_IAI_ONE_API_KEY) {
    try {
      const payBase = (env.PAY_IAI_ONE_BASE_URL || 'https://pay.iai.one').replace(/\/+$/, '');
      const payRes = await fetch(`${payBase}/checkout-session`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${env.PAY_IAI_ONE_API_KEY}` },
        body: JSON.stringify({
          tenant_code: env.PAY_IAI_ONE_TENANT_CODE || 'muonnoi',
          site_code: env.PAY_IAI_ONE_SITE_CODE || 'dautu',
          intent_id: txId,
          amount,
          currency,
          purpose: 'wallet_deposit',
          callback_url: `${(env.PAY_IAI_ONE_CALLBACK_BASE_URL || 'https://dautu.muonnoi.org')}/api/webhook/payment`,
          success_url: `${(env.PAY_IAI_ONE_CALLBACK_BASE_URL || 'https://dautu.muonnoi.org')}/member/wallet?deposit=success`
        })
      });
      if (payRes.ok) {
        const payData = await payRes.json() as Record<string, unknown>;
        checkoutUrl = typeof payData.checkout_url === 'string' ? payData.checkout_url : null;
      }
    } catch (err) {
      console.error('[wallet] pay.iai.one call failed', err);
    }
  }

  return json({ ok: true, data: { transactionId: txId, status: 'pending', checkoutUrl } }, 200, origin);
};

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
