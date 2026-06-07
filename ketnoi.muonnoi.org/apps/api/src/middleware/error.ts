import type { Context, ErrorHandler } from 'hono';
import type { AppContext } from '../index';

export const errorHandler: ErrorHandler<AppContext> = (err, c) => {
  const isDev = c.env.ENVIRONMENT === 'development';

  console.error('API Error:', err.message, err.stack);

  // Zod validation errors
  if (err.name === 'ZodError') {
    return c.json({
      success: false,
      error: 'Validation Error',
      details: err.message,
    }, 400);
  }

  // D1 errors
  if (err.message?.includes('D1')) {
    return c.json({
      success: false,
      error: 'Database Error',
      message: isDev ? err.message : 'Internal database error',
    }, 500);
  }

  // Default 500
  return c.json({
    success: false,
    error: 'Internal Server Error',
    message: isDev ? err.message : 'Something went wrong',
    ...(isDev && { stack: err.stack }),
  }, 500);
};
