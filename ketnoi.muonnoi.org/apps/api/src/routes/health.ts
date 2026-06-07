import { Hono } from 'hono';
import type { AppContext } from '../index';

export const healthRoutes = new Hono<AppContext>();

healthRoutes.get('/', async (c) => {
  const checks = {
    api: 'ok',
    timestamp: new Date().toISOString(),
    version: '0.1.0',
    environment: c.env.ENVIRONMENT,
  };

  // Optional: check D1 connectivity
  let db = 'ok';
  try {
    await c.env.DB.prepare('SELECT 1').first();
  } catch {
    db = 'degraded';
  }

  const status = db === 'ok' ? 200 : 503;

  return c.json({
    success: true,
    status: db === 'ok' ? 'healthy' : 'degraded',
    checks: { ...checks, db },
  }, status);
});
