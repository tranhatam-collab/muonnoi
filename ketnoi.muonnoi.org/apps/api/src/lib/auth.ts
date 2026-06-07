import type { D1Database } from '@cloudflare/workers-types';
import { getUserByEmail, getUserById, createUser, createSession, getSessionById, revokeSession, logAudit } from './db';
import { sendMagicLinkEmail } from './mail';

// Generate a secure random token
export function generateToken(length = 32): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const randomValues = new Uint8Array(length);
  crypto.getRandomValues(randomValues);
  for (let i = 0; i < length; i++) {
    result += chars[randomValues[i] % chars.length];
  }
  return result;
}

// Magic link flow
export async function sendMagicLink(
  db: D1Database,
  mailApiUrl: string,
  mailApiKey: string,
  appOrigin: string,
  email: string,
  ipAddress?: string,
  userAgent?: string
) {
  // Check if user exists
  let user = await getUserByEmail(db, email);

  // Generate token
  const token = generateToken(32);
  const expiresAt = new Date(Date.now() + 15 * 60 * 1000).toISOString(); // 15 minutes

  if (!user) {
    // Create placeholder user (will be activated on first login)
    const userId = crypto.randomUUID();
    await createUser(db, {
      id: userId,
      email,
      nickname: email.split('@')[0],
      age: 18, // Will be updated during onboarding
    });
    user = { id: userId };
  }

  // Create session token
  await createSession(db, {
    id: token,
    userId: user.id as string,
    tokenType: 'magic_link',
    expiresAt,
    ipAddress,
    userAgent,
  });

  // Send email via mail.iai.one
  const mailResult = await sendMagicLinkEmail(mailApiUrl, mailApiKey, email, token, appOrigin);

  return { token, expiresAt, mailSent: mailResult.success, mailError: mailResult.error };
}

// Verify magic link
export async function verifyMagicLink(db: D1Database, token: string) {
  const session = await getSessionById(db, token);

  if (!session) {
    return { success: false, error: 'Invalid or expired token' };
  }

  const now = new Date().toISOString();
  const expiresAt = session.expires_at as string;
  if (expiresAt < now) {
    return { success: false, error: 'Token expired' };
  }

  // Revoke the magic link token (one-time use)
  await revokeSession(db, token);

  // Create a new session token for the user
  const newToken = generateToken(32);
  const sessionExpiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(); // 7 days

  await createSession(db, {
    id: newToken,
    userId: session.user_id as string,
    tokenType: 'session',
    expiresAt: sessionExpiresAt,
  });

  await logAudit(db, {
    userId: session.user_id as string,
    action: 'login',
    entityType: 'user',
    entityId: session.user_id as string,
    metadata: { method: 'magic_link' },
  });

  return {
    success: true,
    token: newToken,
    expiresAt,
    userId: session.user_id,
  };
}

// Logout
export async function logout(db: D1Database, token: string) {
  await revokeSession(db, token);
  return { success: true };
}

// Get current user from token
export async function getCurrentUser(db: D1Database, token: string) {
  const session = await getSessionById(db, token);
  if (!session) return null;

  const now = new Date().toISOString();
  const expiresAt = session.expires_at as string;
  if (expiresAt < now) {
    await revokeSession(db, token);
    return null;
  }

  return getUserById(db, session.user_id as string);
}
