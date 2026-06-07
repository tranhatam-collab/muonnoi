import { Hono } from 'hono';
import type { AppContext } from '../index';
import { sendMagicLink, verifyMagicLink, logout, getCurrentUser } from '../lib/auth';

export const authRoutes = new Hono<AppContext>();

// Register with profile → create user + send magic link
authRoutes.post('/register', async (c) => {
  const { email, nickname, age, gender, city } = await c.req.json<{
    email: string;
    nickname: string;
    age: number;
    gender: string;
    city: string;
  }>();

  if (!email || !email.includes('@') || !nickname || !age || !gender) {
    return c.json({ success: false, error: 'Missing required fields' }, 400);
  }
  if (age < 18) {
    return c.json({ success: false, error: 'Must be 18 or older' }, 403);
  }

  const existing = await c.env.DB.prepare('SELECT id FROM users WHERE email = ?').bind(email).first();
  if (existing) {
    return c.json({ success: false, error: 'Email already registered' }, 409);
  }

  const userId = crypto.randomUUID();
  await c.env.DB.prepare(
    `INSERT INTO users (id, email, nickname, age, gender, location, status, created_at, updated_at)
     VALUES (?, ?, ?, ?, ?, ?, 'active', datetime('now'), datetime('now'))`
  ).bind(userId, email, nickname, age, gender, city || null).run();

  const ipAddress = c.req.header('CF-Connecting-IP');
  const userAgent = c.req.header('User-Agent');

  const result = await sendMagicLink(
    c.env.DB,
    c.env.MAIL_API_URL || '',
    c.env.MAIL_API_KEY || '',
    c.env.APP_ORIGIN || 'https://ketnoi.muonnoi.org',
    email,
    ipAddress,
    userAgent
  );

  const isDev = c.env.ENVIRONMENT === 'development';

  return c.json({
    success: true,
    message: result.mailSent ? 'Magic link sent to your email' : 'Magic link generated (email queued)',
    ...(isDev && { token: result.token, expiresAt: result.expiresAt }),
    ...(result.mailError && { mailError: result.mailError }),
  });
});

// Request magic link (existing user)
authRoutes.post('/magic-link', async (c) => {
  const { email } = await c.req.json<{ email: string }>();

  if (!email || !email.includes('@')) {
    return c.json({ success: false, error: 'Invalid email' }, 400);
  }

  const ipAddress = c.req.header('CF-Connecting-IP');
  const userAgent = c.req.header('User-Agent');

  const result = await sendMagicLink(
    c.env.DB,
    c.env.MAIL_API_URL || '',
    c.env.MAIL_API_KEY || '',
    c.env.APP_ORIGIN || 'https://ketnoi.muonnoi.org',
    email,
    ipAddress,
    userAgent
  );

  // In development, return the token directly
  const isDev = c.env.ENVIRONMENT === 'development';

  return c.json({
    success: true,
    message: result.mailSent ? 'Magic link sent to your email' : 'Magic link generated (email queued)',
    ...(isDev && { token: result.token, expiresAt: result.expiresAt }),
    ...(result.mailError && { mailError: result.mailError }),
  });
});

// Verify magic link token
authRoutes.post('/verify-magic-link', async (c) => {
  const { token } = await c.req.json<{ token: string }>();

  if (!token) {
    return c.json({ success: false, error: 'Token required' }, 400);
  }

  const result = await verifyMagicLink(c.env.DB, token);

  if (!result.success) {
    return c.json(result, 401);
  }

  return c.json({
    success: true,
    message: 'Authenticated successfully',
    token: result.token,
    expiresAt: result.expiresAt,
  });
});

// Get current authenticated user
authRoutes.get('/me', async (c) => {
  const authHeader = c.req.header('Authorization');
  const token = authHeader?.replace('Bearer ', '');

  if (!token) {
    return c.json({ success: false, error: 'Unauthorized' }, 401);
  }

  const user = await getCurrentUser(c.env.DB, token);

  if (!user) {
    return c.json({ success: false, error: 'Session expired or invalid' }, 401);
  }

  return c.json({
    success: true,
    data: {
      id: user.id,
      email: user.email,
      nickname: user.nickname,
      verificationTier: user.verification_tier,
      verificationLevel: user.verification_level || 1,
      trustScore: user.trust_score || 0,
      membershipTier: user.membership_tier || 'free',
      intentVerified: user.intent_verified === 1,
      safeDateReady: user.safe_date_ready === 1,
      status: user.status,
    },
  });
});

// Passkey registration (WebAuthn) - TODO: implement
authRoutes.post('/passkey/register/start', async (c) => {
  return c.json({
    success: true,
    message: 'Registration options generated (placeholder)',
  });
});

authRoutes.post('/passkey/register/finish', async (c) => {
  return c.json({
    success: true,
    message: 'Passkey registered (placeholder)',
  });
});

// Passkey authentication - TODO: implement
authRoutes.post('/passkey/authenticate/start', async (c) => {
  return c.json({
    success: true,
    message: 'Authentication options generated (placeholder)',
  });
});

authRoutes.post('/passkey/authenticate/finish', async (c) => {
  return c.json({
    success: true,
    message: 'Authenticated with passkey (placeholder)',
  });
});

// Logout
authRoutes.post('/logout', async (c) => {
  const authHeader = c.req.header('Authorization');
  const token = authHeader?.replace('Bearer ', '');

  if (token) {
    await logout(c.env.DB, token);
  }

  return c.json({
    success: true,
    message: 'Logged out',
  });
});
