import { createMiddleware } from 'hono/factory';
import type { AppContext } from '../index';
import { getCurrentUser } from '../lib/auth';

export const requireAuth = createMiddleware<AppContext>(async (c, next) => {
  const authHeader = c.req.header('Authorization');
  const token = authHeader?.replace('Bearer ', '');

  if (!token) {
    return c.json({ success: false, error: 'Unauthorized: No token provided' }, 401);
  }

  const user = await getCurrentUser(c.env.DB, token);

  if (!user) {
    return c.json({ success: false, error: 'Unauthorized: Invalid or expired session' }, 401);
  }

  // Attach user to context for downstream handlers
  c.set('user', user);
  await next();
});
