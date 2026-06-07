import { Hono } from 'hono';
import type { AppContext } from '../index';
import { requireAuth } from '../middleware/auth';

export const notificationRoutes = new Hono<AppContext>();
notificationRoutes.use('*', requireAuth);

// Get user's notifications
notificationRoutes.get('/', async (c) => {
  const user = c.get('user')!;
  const db = c.env.DB;

  const { results } = await db
    .prepare('SELECT * FROM notifications WHERE user_id = ? ORDER BY created_at DESC LIMIT 50')
    .bind(user.id)
    .all<Record<string, unknown>>();

  return c.json({
    success: true,
    data: (results || []).map((n) => ({
      id: n.id,
      type: n.type,
      title: n.title,
      body: n.body,
      read: n.read === 1,
      createdAt: n.created_at,
    })),
  });
});

// Mark notification as read
notificationRoutes.post('/:id/read', async (c) => {
  const user = c.get('user')!;
  const db = c.env.DB;
  const id = c.req.param('id');

  await db
    .prepare('UPDATE notifications SET read = 1 WHERE id = ? AND user_id = ?')
    .bind(id, user.id)
    .run();

  return c.json({ success: true });
});

// Mark all as read
notificationRoutes.post('/read-all', async (c) => {
  const user = c.get('user')!;
  const db = c.env.DB;

  await db
    .prepare('UPDATE notifications SET read = 1 WHERE user_id = ?')
    .bind(user.id)
    .run();

  return c.json({ success: true });
});

// Create notification (internal use)
export async function createNotification(
  db: D1Database,
  userId: string,
  type: string,
  title: string,
  body?: string
): Promise<void> {
  await db
    .prepare('INSERT INTO notifications (id, user_id, type, title, body) VALUES (?, ?, ?, ?, ?)')
    .bind(crypto.randomUUID(), userId, type, title, body || '')
    .run();
}
