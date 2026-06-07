import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import { healthRoutes } from './routes/health';
import { authRoutes } from './routes/auth';
import { userRoutes } from './routes/user';
import { matchRoutes } from './routes/match';
import { chatRoutes } from './routes/chat';
import { safetyRoutes } from './routes/safety';
import { verifyRoutes } from './routes/verify';
import { notificationRoutes } from './routes/notification';
import { errorHandler } from './middleware/error';
import { rateLimiter } from './middleware/rate-limit';
import { ChatRoom } from './lib/chatroom';

export { ChatRoom };

export interface Env {
  DB: D1Database;
  KV: KVNamespace;
  BUCKET: R2Bucket;
  CHAT_ROOM: DurableObjectNamespace;
  ENVIRONMENT: string;
  JWT_SECRET: string;
  MAIL_API_URL?: string;
  MAIL_API_KEY?: string;
  APP_ORIGIN?: string;
  VERIFY_API_URL?: string;
  PAY_API_URL?: string;
  PAY_API_KEY?: string;
}

export type AppContext = {
  Bindings: Env;
  Variables: { user?: Record<string, unknown> };
};

const app = new Hono<AppContext>();

// Global middleware
app.use('*', logger());
app.use('*', cors({
  origin: [
    'https://ketnoi.muonnoi.org',
    'https://localhost:4321',
    'http://localhost:4321',
  ],
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));
app.use('*', rateLimiter);

// WebSocket chat rooms (Durable Objects)
app.get('/ws/chat/:roomId', async (c) => {
  const roomId = c.req.param('roomId');
  const userId = c.req.query('userId') || 'anonymous';
  const id = c.env.CHAT_ROOM.idFromName(roomId);
  const room = c.env.CHAT_ROOM.get(id);
  const url = new URL(c.req.url);
  url.searchParams.set('userId', userId);
  return room.fetch(url.toString(), c.req.raw);
});

// Health check (no auth required)
app.route('/health', healthRoutes);

// API routes
app.route('/api/v1/auth', authRoutes);
app.route('/api/v1/users', userRoutes);
app.route('/api/v1/matches', matchRoutes);
app.route('/api/v1/chat', chatRoutes);
app.route('/api/v1/safety', safetyRoutes);
app.route('/api/v1/verify', verifyRoutes);
app.route('/api/v1/notifications', notificationRoutes);

// Error handling
app.onError(errorHandler);

// 404 fallback
app.notFound((c) => {
  return c.json({
    success: false,
    error: 'Not Found',
    message: 'The requested resource does not exist',
    path: c.req.path,
  }, 404);
});

export default app;
