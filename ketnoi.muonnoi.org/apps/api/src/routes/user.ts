import { Hono } from 'hono';
import type { AppContext } from '../index';
import { requireAuth } from '../middleware/auth';
import { getUserById, updateUser } from '../lib/db';

export const userRoutes = new Hono<AppContext>();

// Apply auth middleware to all /me routes
userRoutes.use('/me/*', requireAuth);

// Get current user profile
userRoutes.get('/me', async (c) => {
  const user = c.get('user')!;
  return c.json({
    success: true,
    data: {
      id: user.id,
      email: user.email,
      nickname: user.nickname,
      avatarUrl: user.avatar_url,
      verificationTier: user.verification_tier,
      status: user.status,
      age: user.age,
      gender: user.gender,
      location: user.location,
      bio: user.bio,
      createdAt: user.created_at,
    },
  });
});

// Update profile
userRoutes.put('/me', async (c) => {
  const user = c.get('user')!;
  const body = await c.req.json();

  const allowed = ['nickname', 'bio', 'age', 'gender', 'location'] as const;
  const updates: Record<string, unknown> = {};
  for (const key of allowed) {
    if (body[key] !== undefined) updates[key] = body[key];
  }

  if (Object.keys(updates).length === 0) {
    return c.json({ success: false, error: 'No valid fields provided' }, 400);
  }

  await updateUser(c.env.DB, user.id as string, updates);

  return c.json({
    success: true,
    message: 'Profile updated',
    data: updates,
  });
});

// Upload avatar
userRoutes.post('/me/avatar', async (c) => {
  const user = c.get('user')!;
  const formData = await c.req.formData();
  const file = formData.get('avatar');

  if (!file || !(file instanceof File)) {
    return c.json({ success: false, error: 'No file uploaded' }, 400);
  }

  if (file.size > 5 * 1024 * 1024) {
    return c.json({ success: false, error: 'File too large. Max 5MB.' }, 400);
  }

  const ext = file.name.split('.').pop()?.toLowerCase();
  if (!['jpg', 'jpeg', 'png', 'webp'].includes(ext || '')) {
    return c.json({ success: false, error: 'Invalid file type. Use jpg, png, or webp.' }, 400);
  }

  const key = `avatars/${user.id}/${Date.now()}.${ext}`;
  await c.env.BUCKET.put(key, file, {
    httpMetadata: { contentType: file.type },
  });

  const bucketName = 'ketnoi-muonnoi-media';
  const avatarUrl = `https://${bucketName}.r2.dev/${key}`;
  await updateUser(c.env.DB, user.id as string, { avatar_url: avatarUrl });

  return c.json({
    success: true,
    message: 'Avatar uploaded',
    data: { avatarUrl },
  });
});

// Get user by ID (public minimal profile)
userRoutes.get('/:id', async (c) => {
  const id = c.req.param('id');
  const user = await getUserById(c.env.DB, id);

  if (!user || user.status !== 'active') {
    return c.json({ success: false, error: 'User not found' }, 404);
  }

  return c.json({
    success: true,
    data: {
      id: user.id,
      nickname: user.nickname,
      verificationTier: user.verification_tier,
      bio: user.bio,
      avatarUrl: user.avatar_url,
    },
  });
});
