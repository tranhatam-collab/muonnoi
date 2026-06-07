import type { MiddlewareHandler } from 'hono';
import type { AppContext } from '../index';

// Simple in-memory rate limiter (per request, not global)
// For production, use KV or a proper rate limiting service
export const rateLimiter: MiddlewareHandler<AppContext> = async (c, next) => {
  const clientIP = c.req.header('CF-Connecting-IP') || 'unknown';
  const path = c.req.path;
  const key = `rate_limit:${clientIP}:${path}`;

  // Check KV for rate limit (if available)
  try {
    const kv = c.env.KV;
    const current = await kv.get(key);
    const now = Date.now();
    const windowMs = 60 * 1000; // 1 minute
    const maxRequests = 60;

    if (current) {
      const data = JSON.parse(current);
      if (data.count >= maxRequests && now - data.start < windowMs) {
        return c.json({
          success: false,
          error: 'Rate limit exceeded',
          retryAfter: Math.ceil((windowMs - (now - data.start)) / 1000),
        }, 429);
      }

      if (now - data.start > windowMs) {
        // Reset window
        await kv.put(key, JSON.stringify({ count: 1, start: now }), { expirationTtl: 60 });
      } else {
        // Increment
        await kv.put(key, JSON.stringify({ count: data.count + 1, start: data.start }), { expirationTtl: 60 });
      }
    } else {
      await kv.put(key, JSON.stringify({ count: 1, start: now }), { expirationTtl: 60 });
    }
  } catch {
    // KV not available (dev mode), allow through
  }

  await next();
};
