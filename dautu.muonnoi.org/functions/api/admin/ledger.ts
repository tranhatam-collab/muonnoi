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

// GET /api/admin/ledger
export const onRequestGet: PagesFunction<Env> = async (context) => {
  const { request, env } = context;
  const origin = request.headers.get('Origin');
  const admin = await verifyAdmin(request, env);
  if (!admin) return json({ ok: false, error: 'Forbidden' }, 403, origin);

  const url = new URL(request.url);
  const limit = Math.min(parseInt(url.searchParams.get('limit') || '50', 10), 100);

  const ledger = await env.D1.prepare(
    `SELECT l.*, t.transaction_type, t.status as tx_status
     FROM ledger_entries l
     JOIN transactions t ON l.transaction_id = t.id
     ORDER BY l.created_at DESC LIMIT ?`
  ).bind(limit).all<Record<string, unknown>>();

  return json({ ok: true, data: ledger.results }, 200, origin);
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
