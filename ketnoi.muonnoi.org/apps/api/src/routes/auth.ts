import { Hono } from 'hono';
import type { AppContext } from '../index';
import { sendMagicLink, verifyMagicLink, logout, getCurrentUser } from '../lib/auth';
import {
  generateChallenge,
  storeChallenge,
  verifyChallenge,
  base64UrlDecode,
  cborDecode,
  parseAuthenticatorData,
  coseToRawPublicKey,
  importEC2PublicKey,
  verifyWebAuthnSignature,
} from '../lib/webauthn';

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

// Passkey registration (WebAuthn)
authRoutes.post('/passkey/register/start', async (c) => {
  const body = await c.req.json<{ email: string }>();
  const { email } = body;

  // Get or create user
  const user = await getCurrentUser(c.env.DB, email);
  if (!user) {
    return c.json({ success: false, error: 'User not found' }, 404);
  }

  const challenge = generateChallenge(32);
  await storeChallenge(c.env.KV, user.id as string, challenge, 'register', 120);

  return c.json({
    success: true,
    challenge,
    user: {
      id: user.id,
      name: user.email,
      displayName: user.nickname || user.email,
    },
    rp: {
      name: 'Kết Nối Muôn Nơi',
      id: 'ketnoi.muonnoi.org',
    },
    pubKeyCredParams: [{ alg: -7, type: 'public-key' }],
    authenticatorSelection: {
      authenticatorAttachment: 'platform',
      userVerification: 'preferred',
    },
    timeout: 120000,
  });
});

authRoutes.post('/passkey/register/finish', async (c) => {
  const body = await c.req.json<{
    email: string;
    credentialId: string;
    clientDataJSON: string;
    attestationObject: string;
    challenge: string;
  }>();

  const user = await getCurrentUser(c.env.DB, body.email);
  if (!user) {
    return c.json({ success: false, error: 'User not found' }, 404);
  }

  const valid = await verifyChallenge(c.env.KV, user.id as string, body.challenge, 'register');
  if (!valid) {
    return c.json({ success: false, error: 'Invalid or expired challenge' }, 400);
  }

  try {
    const attObjBytes = base64UrlDecode(body.attestationObject);
    const attObj = cborDecode(attObjBytes) as Map<unknown, unknown>;
    const authData = attObj.get('authData') as Uint8Array;
    const parsed = parseAuthenticatorData(authData);

    if (!parsed.cosePublicKey) {
      return c.json({ success: false, error: 'No public key in attestation' }, 400);
    }

    const rawPublicKey = coseToRawPublicKey(parsed.cosePublicKey);
    const publicKeyB64 = btoa(String.fromCharCode(...rawPublicKey));

    await c.env.DB
      .prepare('INSERT INTO passkeys (id, user_id, public_key, counter, created_at) VALUES (?, ?, ?, ?, ?)')
      .bind(body.credentialId, user.id, publicKeyB64, parsed.signCount, new Date().toISOString())
      .run();

    return c.json({
      success: true,
      message: 'Passkey registered successfully',
    });
  } catch (err) {
    return c.json({ success: false, error: (err as Error).message }, 400);
  }
});

// Passkey authentication
authRoutes.post('/passkey/authenticate/start', async (c) => {
  const body = await c.req.json<{ email?: string }>();
  const challenge = generateChallenge(32);

  if (body.email) {
    const user = await getCurrentUser(c.env.DB, body.email);
    if (user) {
      await storeChallenge(c.env.KV, user.id as string, challenge, 'authenticate', 120);
    }
  }

  return c.json({
    success: true,
    challenge,
    rpId: 'ketnoi.muonnoi.org',
    userVerification: 'preferred',
    timeout: 120000,
  });
});

authRoutes.post('/passkey/authenticate/finish', async (c) => {
  const body = await c.req.json<{
    credentialId: string;
    clientDataJSON: string;
    authenticatorData: string;
    signature: string;
    challenge: string;
  }>();

  try {
    // Retrieve stored passkey
    const { results } = await c.env.DB
      .prepare('SELECT * FROM passkeys WHERE id = ?')
      .bind(body.credentialId)
      .all<Record<string, unknown>>();

    const passkey = (results || [])[0];
    if (!passkey) {
      return c.json({ success: false, error: 'Passkey not found' }, 404);
    }

    // Verify challenge
    const userId = passkey.user_id as string;
    const challengeValid = await verifyChallenge(c.env.KV, userId, body.challenge, 'authenticate');
    if (!challengeValid) {
      return c.json({ success: false, error: 'Invalid or expired challenge' }, 400);
    }

    // Import public key and verify signature
    const publicKeyB64 = passkey.public_key as string;
    const rawPublicKey = Uint8Array.from(atob(publicKeyB64), (c) => c.charCodeAt(0));
    const publicKey = await importEC2PublicKey(rawPublicKey);

    const authData = base64UrlDecode(body.authenticatorData);
    const sig = base64UrlDecode(body.signature);
    const valid = await verifyWebAuthnSignature(publicKey, sig, authData, body.clientDataJSON);

    if (!valid) {
      return c.json({ success: false, error: 'Invalid signature' }, 401);
    }

    // Create session
    const sessionToken = crypto.randomUUID();
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString();
    await c.env.DB
      .prepare('INSERT INTO sessions (id, user_id, token_type, expires_at) VALUES (?, ?, ?, ?)')
      .bind(sessionToken, userId, 'session', expiresAt)
      .run();

    return c.json({
      success: true,
      message: 'Authenticated with passkey',
      token: sessionToken,
      expiresAt,
    });
  } catch (err) {
    return c.json({ success: false, error: (err as Error).message }, 400);
  }
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
