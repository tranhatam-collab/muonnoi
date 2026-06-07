import { Hono } from 'hono';
import type { AppContext } from '../index';
import { requireAuth } from '../middleware/auth';
import { startVerification, getVerificationStatus } from '../lib/verify';
import { updateUser } from '../lib/db';

export const verifyRoutes = new Hono<AppContext>();

// Apply auth middleware
verifyRoutes.use('*', requireAuth);

// Start verification session
verifyRoutes.post('/start', async (c) => {
  const user = c.get('user')!;
  const body = await c.req.json();

  const apiUrl = c.env.VERIFY_API_URL;
  if (!apiUrl) {
    return c.json({ success: false, error: 'Verification service not configured' }, 503);
  }

  const result = await startVerification(apiUrl, {
    tenantCode: body.tenant_code || 'ketnoi-muonnoi',
    flowKey: body.flow_key || 'identity-v1',
    subjectType: body.subject_type || 'person',
    subjectId: user.id as string,
    email: user.email as string,
    callbackUrl: body.callback_url,
  });

  if (!result.success) {
    return c.json({ success: false, error: result.error }, 502);
  }

  return c.json({
    success: true,
    session: result.session,
  });
});

// Check verification status
verifyRoutes.get('/status/:sessionId', async (c) => {
  const user = c.get('user')!;
  const sessionId = c.req.param('sessionId');

  const apiUrl = c.env.VERIFY_API_URL;
  if (!apiUrl) {
    return c.json({ success: false, error: 'Verification service not configured' }, 503);
  }

  const result = await getVerificationStatus(apiUrl, sessionId);

  if (!result.success) {
    return c.json({ success: false, error: result.error }, 502);
  }

  // If verified, update user tier
  if (result.status === 'approved' && result.tier) {
    await updateUser(c.env.DB, user.id as string, {
      verification_tier: result.tier,
    });
  }

  return c.json({
    success: true,
    status: result.status,
    tier: result.tier,
  });
});
