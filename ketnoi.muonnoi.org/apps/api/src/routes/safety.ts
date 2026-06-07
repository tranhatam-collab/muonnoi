import { Hono } from 'hono';
import type { AppContext } from '../index';
import { requireAuth } from '../middleware/auth';
import { createReport, createBlock, getBlocks } from '../lib/db';

export const safetyRoutes = new Hono<AppContext>();

// Public safety check (scam detection)
safetyRoutes.post('/check', async (c) => {
  const { message } = await c.req.json<{ message: string }>();

  if (!message) {
    return c.json({ success: false, error: 'Message required' }, 400);
  }

  const scamPatterns = [
    /\b(zalo|facebook|fb|telegram|tg)\b.*\d{9,}/i,
    /\b(chuyển tiền|chuyen khoan|bank|visa)\b/i,
    /\b(đầu tư|dau tu|invest|crypto|bitcoin)\b/i,
  ];

  const flags = scamPatterns.filter((p) => p.test(message)).map((_, i) => {
    const reasons = ['off-platform contact', 'financial request', 'investment scam'];
    return reasons[i];
  });

  return c.json({
    success: true,
    safe: flags.length === 0,
    flags: flags.length > 0 ? flags : undefined,
  });
});

// Protected routes below
safetyRoutes.use('*', requireAuth);

// Report a user
safetyRoutes.post('/report', async (c) => {
  const user = c.get('user')!;
  const db = c.env.DB;
  const { reportedUserId, reason, details } = await c.req.json<{
    reportedUserId: string;
    reason: string;
    details?: string;
  }>();

  if (!reportedUserId || !reason) {
    return c.json({ success: false, error: 'Missing required fields' }, 400);
  }

  const reportId = crypto.randomUUID();
  await createReport(db, {
    id: reportId,
    reporterId: user.id as string,
    reportedId: reportedUserId,
    reportType: reason,
    description: details,
  });

  return c.json({
    success: true,
    message: 'Report submitted',
    reportId,
  });
});

// Block a user
safetyRoutes.post('/block', async (c) => {
  const user = c.get('user')!;
  const db = c.env.DB;
  const { blockedUserId, reason } = await c.req.json<{ blockedUserId: string; reason?: string }>();

  if (!blockedUserId) {
    return c.json({ success: false, error: 'blockedUserId required' }, 400);
  }

  await createBlock(db, {
    id: crypto.randomUUID(),
    blockerId: user.id as string,
    blockedId: blockedUserId,
    reason,
  });

  return c.json({
    success: true,
    message: 'User blocked',
    blockedUserId,
  });
});

// Get blocked users
safetyRoutes.get('/blocked', async (c) => {
  const user = c.get('user')!;
  const db = c.env.DB;

  const { results } = await getBlocks(db, user.id as string);

  return c.json({
    success: true,
    data: (results || []).map((b: Record<string, unknown>) => ({
      id: b.id,
      blockedUserId: b.blocked_id,
      reason: b.reason,
      createdAt: b.created_at,
    })),
  });
});
