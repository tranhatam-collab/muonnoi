export interface Env {
  D1: D1Database;
  JWT_SECRET?: string;
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

// GET /api/investments
export const onRequestGet: PagesFunction<Env> = async (context) => {
  const { request, env } = context;
  const origin = request.headers.get('Origin');
  const user = await verifyAuth(request, env);
  if (!user) return json({ ok: false, error: 'Unauthorized' }, 401, origin);

  const investor = await env.D1.prepare('SELECT id FROM investors WHERE user_id = ?').bind(user.userId).first<{ id: string }>();
  if (!investor) return json({ ok: false, error: 'Investor profile not found' }, 403, origin);

  const investments = await env.D1.prepare(
    `SELECT i.*, p.name as project_name, p.slug as project_slug
     FROM investments i
     JOIN projects p ON i.project_id = p.id
     WHERE i.user_id = ?
     ORDER BY i.created_at DESC`
  ).bind(user.userId).all<Record<string, unknown>>();

  return json({ ok: true, data: investments.results }, 200, origin);
};

// POST /api/investments
export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;
  const origin = request.headers.get('Origin');
  const user = await verifyAuth(request, env);
  if (!user) return json({ ok: false, error: 'Unauthorized' }, 401, origin);

  let body: Record<string, unknown>;
  try { body = await request.json() as Record<string, unknown>; } catch {
    return json({ ok: false, error: 'Invalid JSON' }, 400, origin);
  }

  const projectId = String(body.project_id || '');
  const amount = typeof body.amount === 'number' ? body.amount : parseInt(String(body.amount || '0'), 10);
  const currency = String(body.currency || 'VND').toUpperCase();
  const investmentType = String(body.investment_type || 'equity');
  const instrument = String(body.instrument || '');
  const terms = typeof body.terms === 'string' ? body.terms : JSON.stringify(body.terms || {});

  if (!projectId || !amount || amount <= 0) {
    return json({ ok: false, error: { code: 'INVALID_PARAMS', message: 'project_id và amount bắt buộc' } }, 400, origin);
  }

  const investor = await env.D1.prepare(
    'SELECT id FROM investors WHERE user_id = ? AND investor_status = ?'
  ).bind(user.userId, 'approved').first<{ id: string }>();
  if (!investor) return json({ ok: false, error: 'Investor not approved. Complete KYC and wait for approval.' }, 403, origin);

  const access = await env.D1.prepare(
    'SELECT access_status FROM investment_access WHERE investor_id = ? AND project_id = ? AND access_status = ?'
  ).bind(investor.id, projectId, 'approved').first();
  if (!access) return json({ ok: false, error: 'Project access not approved' }, 403, origin);

  const wallet = await env.D1.prepare('SELECT id FROM wallets WHERE user_id = ?').bind(user.userId).first<{ id: string }>();
  if (!wallet) return json({ ok: false, error: 'Wallet not found' }, 404, origin);

  const investmentId = `inv_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`;

  await env.D1.prepare(
    `INSERT INTO investments (id, wallet_id, user_id, project_id, amount, currency, status, investment_type, instrument, terms, created_at, updated_at)
     VALUES (?, ?, ?, ?, ?, ?, 'pending', ?, ?, ?, datetime('now'), datetime('now'))`
  ).bind(investmentId, wallet.id, user.userId, projectId, amount, currency, investmentType, instrument, terms).run();

  await env.D1.prepare(
    `INSERT INTO audit_logs (id, actor_id, actor_role, action, target_type, target_id, after_json, created_at)
     VALUES (?, ?, 'investor', 'investment_created', 'investment', ?, ?, datetime('now'))`
  ).bind(`audit_${Date.now()}`, user.userId, investmentId, JSON.stringify({ projectId, amount, currency })).run();

  return json({ ok: true, data: { investmentId, status: 'pending', message: 'Investment request submitted for admin review.' } }, 201, origin);
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
