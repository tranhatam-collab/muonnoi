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
import { errorHandler } from './middleware/error';
import { rateLimiter } from './middleware/rate-limit';

export interface Env {
  DB: D1Database;
  KV: KVNamespace;
  BUCKET: R2Bucket;
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

// Health check (no auth required)
app.route('/health', healthRoutes);

// API routes
app.route('/api/v1/auth', authRoutes);
app.route('/api/v1/users', userRoutes);
app.route('/api/v1/matches', matchRoutes);
app.route('/api/v1/chat', chatRoutes);
app.route('/api/v1/safety', safetyRoutes);
app.route('/api/v1/verify', verifyRoutes);

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
