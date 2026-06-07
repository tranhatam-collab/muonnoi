import { Hono } from 'hono';
import type { AppContext } from '../index';
import { requireAuth } from '../middleware/auth';
import { getMatchesForUser, getConversationByMatch, createConversation, getMessages, createMessage, getUserById } from '../lib/db';

export const chatRoutes = new Hono<AppContext>();
chatRoutes.use('*', requireAuth);

// Get conversations list
chatRoutes.get('/conversations', async (c) => {
  const user = c.get('user')!;
  const db = c.env.DB;

  const { results: matches } = await getMatchesForUser(db, user.id as string, 'matched');
  const conversations = await Promise.all(
    (matches || []).map(async (m: Record<string, unknown>) => {
      const otherId = m.user_id_1 === user.id ? m.user_id_2 : m.user_id_1;
      const other = await getUserById(db, otherId as string);
      const conv = await getConversationByMatch(db, m.id as string);
      return {
        id: conv?.id || m.id,
        matchId: m.id,
        partnerId: otherId,
        partnerNickname: other?.nickname || 'User',
        partnerPhoto: other?.avatar_url || '',
        lastMessage: conv?.last_message_preview || '',
        lastMessageAt: conv?.last_message_at || m.matched_at,
        unreadCount: (m.user_id_1 === user.id ? conv?.user_1_unread : conv?.user_2_unread) || 0,
      };
    })
  );

  return c.json({
    success: true,
    data: conversations,
  });
});

// Get messages in a conversation
chatRoutes.get('/conversations/:id/messages', async (c) => {
  const convId = c.req.param('id');
  const user = c.get('user')!;
  const db = c.env.DB;

  const { results } = await getMessages(db, convId, 50);
  const messages = (results || []).map((msg: Record<string, unknown>) => ({
    id: msg.id,
    senderId: msg.sender_id,
    content: msg.content,
    sentAt: msg.created_at,
    isRead: msg.status === 'read',
    scamFlags: msg.scam_flags ? JSON.parse(msg.scam_flags as string) : undefined,
  }));

  return c.json({
    success: true,
    data: messages.reverse(),
  });
});

// Send a message
chatRoutes.post('/conversations/:id/messages', async (c) => {
  const convId = c.req.param('id');
  const user = c.get('user')!;
  const { content } = await c.req.json<{ content: string }>();
  const db = c.env.DB;

  if (!content || content.trim().length === 0) {
    return c.json({ success: false, error: 'Message cannot be empty' }, 400);
  }

  if (content.length > 2000) {
    return c.json({ success: false, error: 'Message too long. Max 2000 chars.' }, 400);
  }

  // Basic scam pattern check
  const scamPatterns = [
    { pattern: /\b(zalo|facebook|fb|telegram|tg)\b.*\d{9,}/i, reason: 'off-platform contact' },
    { pattern: /\b(chuyển tiền|chuyen khoan|bank|visa)\b/i, reason: 'financial request' },
    { pattern: /\b(đầu tư|dau tu|invest|crypto|bitcoin)\b/i, reason: 'investment scam' },
  ];
  const flags = scamPatterns.filter((p) => p.pattern.test(content)).map((p) => p.reason);

  const msgId = crypto.randomUUID();
  await createMessage(db, {
    id: msgId,
    conversationId: convId,
    senderId: user.id as string,
    content,
    scamFlags: flags.length > 0 ? flags : undefined,
  });

  return c.json({
    success: true,
    data: {
      id: msgId,
      senderId: user.id,
      content,
      sentAt: new Date().toISOString(),
      scamFlags: flags.length > 0 ? flags : undefined,
    },
  });
});

// Report message
chatRoutes.post('/messages/:id/report', async (c) => {
  const msgId = c.req.param('id');
  const user = c.get('user')!;
  const { reason } = await c.req.json<{ reason: string }>();
  const db = c.env.DB;

  if (!reason) {
    return c.json({ success: false, error: 'Reason required' }, 400);
  }

  await createMessage(db, {
    id: crypto.randomUUID(),
    conversationId: 'system-report',
    senderId: user.id as string,
    content: `Report: message ${msgId} — ${reason}`,
  });

  return c.json({
    success: true,
    message: 'Report submitted',
    msgId,
    reason,
  });
});
