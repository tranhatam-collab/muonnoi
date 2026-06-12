export interface Env {
  D1: D1Database;
  JWT_SECRET: string;
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

async function verifyJWT(token: string, secret: string): Promise<{ sub: string; email: string; role?: string } | null> {
  try {
    const [header, payload, signature] = token.split('.');
    if (!header || !payload || !signature) return null;
    const encoder = new TextEncoder();
    const key = await crypto.subtle.importKey('raw', encoder.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['verify']);
    const valid = await crypto.subtle.verify('HMAC', key, base64urlDecode(signature), encoder.encode(`${header}.${payload}`));
    if (!valid) return null;
    const data = JSON.parse(new TextDecoder().decode(base64urlDecode(payload)));
    if (data.exp && Date.now() / 1000 > data.exp) return null;
    return { sub: data.sub, email: data.email, role: data.role };
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

function base64urlEncode(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  let binary = '';
  for (let i = 0; i < bytes.byteLength; i++) binary += String.fromCharCode(bytes[i]);
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

async function signJWT(payload: Record<string, unknown>, secret: string, expiresIn = 86400): Promise<string> {
  const header = base64urlEncode(new TextEncoder().encode(JSON.stringify({ alg: 'HS256', typ: 'JWT' })));
  const body = base64urlEncode(new TextEncoder().encode(JSON.stringify({ ...payload, iat: Math.floor(Date.now() / 1000), exp: Math.floor(Date.now() / 1000) + expiresIn })));
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey('raw', encoder.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const signature = base64urlEncode(await crypto.subtle.sign('HMAC', key, encoder.encode(`${header}.${body}`)));
  return `${header}.${body}.${signature}`;
}

function generateOTP(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// POST /api/auth/login — Request OTP
export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;
  const origin = request.headers.get('Origin');

  let body: Record<string, unknown>;
  try { body = await request.json() as Record<string, unknown>; } catch {
    return json({ ok: false, error: 'Invalid JSON' }, 400, origin);
  }

  const email = String(body.email || '').trim().toLowerCase();
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ ok: false, error: { code: 'INVALID_EMAIL', message: 'Email không hợp lệ' } }, 400, origin);
  }

  const otp = generateOTP();
  const otpExpiry = Math.floor(Date.now() / 1000) + 300; // 5 minutes

  // Store OTP in D1 (simple implementation)
  await env.D1.prepare(
    `INSERT INTO otp_sessions (email, otp, expires_at, created_at)
     VALUES (?, ?, ?, datetime('now'))
     ON CONFLICT(email) DO UPDATE SET otp=excluded.otp, expires_at=excluded.expires_at, created_at=excluded.created_at`
  ).bind(email, otp, otpExpiry).run();

  // Create or update user
  const userId = `u_${email.replace(/[^a-z0-9]/g, '_')}`;
  await env.D1.prepare(
    `INSERT INTO users (id, email, status, created_at, updated_at)
     VALUES (?, ?, 'pending', datetime('now'), datetime('now'))
     ON CONFLICT(id) DO UPDATE SET updated_at=datetime('now')`
  ).bind(userId, email).run();

  // In real: send email via mail.iai.one
  // For now: return OTP in response (sandbox mode only)
  return json({ ok: true, message: 'OTP sent', otp: otp, _note: 'OTP returned for sandbox testing only. In production, email via mail.iai.one' }, 200, origin);
};

// POST /api/auth/verify-otp — Verify OTP + issue JWT
export const onRequestVerify: PagesFunction<Env> = async (context) => {
  const { request, env } = context;
  const origin = request.headers.get('Origin');

  let body: Record<string, unknown>;
  try { body = await request.json() as Record<string, unknown>; } catch {
    return json({ ok: false, error: 'Invalid JSON' }, 400, origin);
  }

  const email = String(body.email || '').trim().toLowerCase();
  const otp = String(body.otp || '');

  if (!email || !otp) return json({ ok: false, error: 'Email và OTP bắt buộc' }, 400, origin);

  const session = await env.D1.prepare(
    'SELECT otp, expires_at FROM otp_sessions WHERE email = ?'
  ).bind(email).first<{ otp: string; expires_at: number }>();

  if (!session) return json({ ok: false, error: 'OTP không tồn tại hoặc đã hết hạn' }, 401, origin);
  if (session.otp !== otp) return json({ ok: false, error: 'OTP không đúng' }, 401, origin);
  if (Math.floor(Date.now() / 1000) > session.expires_at) return json({ ok: false, error: 'OTP đã hết hạn' }, 401, origin);

  // OTP valid — issue JWT
  const userId = `u_${email.replace(/[^a-z0-9]/g, '_')}`;
  const user = await env.D1.prepare('SELECT id, email, status FROM users WHERE id = ?').bind(userId).first<{ id: string; email: string; status: string }>();

  if (!user) return json({ ok: false, error: 'User not found' }, 404, origin);

  // Check admin whitelist
  const whitelist = (env.ADMIN_WHITELIST || '').split(',').map(s => s.trim().toLowerCase()).filter(Boolean);
  const isAdmin = whitelist.includes(email);

  const accessToken = await signJWT({ sub: user.id, email: user.email, role: isAdmin ? 'admin' : 'member' }, env.JWT_SECRET, 86400);
  const refreshToken = crypto.randomUUID();

  // Store refresh token
  await env.D1.prepare(
    `INSERT INTO refresh_tokens (token, user_id, expires_at, created_at)
     VALUES (?, ?, ?, datetime('now'))`
  ).bind(refreshToken, user.id, Math.floor(Date.now() / 1000) + 604800).run();

  // Mark user approved if pending
  if (user.status === 'pending') {
    await env.D1.prepare("UPDATE users SET status = 'approved' WHERE id = ?").bind(user.id).run();
  }

  // Clean up OTP
  await env.D1.prepare('DELETE FROM otp_sessions WHERE email = ?').bind(email).run();

  return json({ ok: true, data: { accessToken, refreshToken, user: { id: user.id, email: user.email, role: isAdmin ? 'admin' : 'member' } } }, 200, origin);
};

// POST /api/auth/refresh — Refresh access token
export const onRequestRefresh: PagesFunction<Env> = async (context) => {
  const { request, env } = context;
  const origin = request.headers.get('Origin');

  let body: Record<string, unknown>;
  try { body = await request.json() as Record<string, unknown>; } catch {
    return json({ ok: false, error: 'Invalid JSON' }, 400, origin);
  }

  const refreshToken = String(body.refreshToken || '');
  if (!refreshToken) return json({ ok: false, error: 'Refresh token required' }, 400, origin);

  const tokenRow = await env.D1.prepare(
    'SELECT user_id FROM refresh_tokens WHERE token = ? AND expires_at > ?'
  ).bind(refreshToken, Math.floor(Date.now() / 1000)).first<{ user_id: string }>();

  if (!tokenRow) return json({ ok: false, error: 'Invalid or expired refresh token' }, 401, origin);

  const user = await env.D1.prepare('SELECT id, email FROM users WHERE id = ?').bind(tokenRow.user_id).first<{ id: string; email: string }>();
  if (!user) return json({ ok: false, error: 'User not found' }, 404, origin);

  const whitelist = (env.ADMIN_WHITELIST || '').split(',').map(s => s.trim().toLowerCase()).filter(Boolean);
  const isAdmin = whitelist.includes(user.email);

  const newAccessToken = await signJWT({ sub: user.id, email: user.email, role: isAdmin ? 'admin' : 'member' }, env.JWT_SECRET, 86400);

  return json({ ok: true, data: { accessToken: newAccessToken } }, 200, origin);
};

// POST /api/auth/logout — Revoke refresh token
export const onRequestLogout: PagesFunction<Env> = async (context) => {
  const { request, env } = context;
  const origin = request.headers.get('Origin');

  let body: Record<string, unknown>;
  try { body = await request.json() as Record<string, unknown>; } catch {
    return json({ ok: false, error: 'Invalid JSON' }, 400, origin);
  }

  const refreshToken = String(body.refreshToken || '');
  if (refreshToken) {
    await env.D1.prepare('DELETE FROM refresh_tokens WHERE token = ?').bind(refreshToken).run();
  }

  return json({ ok: true, message: 'Logged out' }, 200, origin);
};

// GET /api/auth/me — Current user
export const onRequestGet: PagesFunction<Env> = async (context) => {
  const { request, env } = context;
  const origin = request.headers.get('Origin');

  const auth = request.headers.get('Authorization') || '';
  const token = auth.replace('Bearer ', '').trim();

  const payload = await verifyJWT(token, env.JWT_SECRET);
  if (!payload) return json({ ok: false, error: 'Unauthorized' }, 401, origin);

  const user = await env.D1.prepare('SELECT id, email, status, created_at FROM users WHERE id = ?').bind(payload.sub).first<{ id: string; email: string; status: string; created_at: string }>();
  if (!user) return json({ ok: false, error: 'User not found' }, 404, origin);

  return json({ ok: true, data: { ...user, role: payload.role || 'member' } }, 200, origin);
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
