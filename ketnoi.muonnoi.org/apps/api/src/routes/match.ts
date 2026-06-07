import { Hono } from 'hono';
import type { AppContext } from '../index';
import { requireAuth } from '../middleware/auth';
import { getMatchesForUser, getMatchByUsers, createMatch, updateMatchLike, getUserById } from '../lib/db';

export const matchRoutes = new Hono<AppContext>();
matchRoutes.use('*', requireAuth);

// Get daily match suggestions
matchRoutes.get('/suggestions', async (c) => {
  const user = c.get('user')!;
  const db = c.env.DB;

  // MVP: return existing pending matches for this user
  const { results } = await getMatchesForUser(db, user.id as string, 'pending');
  const enriched = await Promise.all(
    (results || []).map(async (m: Record<string, unknown>) => {
      const otherId = m.user_id_1 === user.id ? m.user_id_2 : m.user_id_1;
      const other = await getUserById(db, otherId as string);
      return {
        id: m.id,
        userId: otherId,
        nickname: other?.nickname || 'User',
        compatibility: m.compatibility_score || 0,
        sharedValues: m.shared_values ? JSON.parse(m.shared_values as string) : [],
        photoUrl: other?.avatar_url || '',
      };
    })
  );

  return c.json({
    success: true,
    data: enriched,
  });
});

// Like a match
matchRoutes.post('/:id/like', async (c) => {
  const matchId = c.req.param('id');
  const user = c.get('user')!;
  const db = c.env.DB;

  const match = await getMatchByUsers(db, user.id as string, matchId);
  if (!match) {
    // Create match record on first interaction
    await createMatch(db, {
      id: crypto.randomUUID(),
      userId1: user.id as string,
      userId2: matchId,
    });
  }

  const result = await updateMatchLike(db, user.id as string, matchId, 1);

  return c.json({
    success: true,
    message: result.mutual ? 'It is a match!' : 'Like recorded',
    matchId,
    isMutual: result.mutual,
  });
});

// Pass on a match
matchRoutes.post('/:id/pass', async (c) => {
  const matchId = c.req.param('id');
  const user = c.get('user')!;
  const db = c.env.DB;

  const match = await getMatchByUsers(db, user.id as string, matchId);
  if (!match) {
    await createMatch(db, {
      id: crypto.randomUUID(),
      userId1: user.id as string,
      userId2: matchId,
    });
  }

  await updateMatchLike(db, user.id as string, matchId, -1);

  return c.json({
    success: true,
    message: 'Pass recorded',
    matchId,
  });
});

// Get mutual matches (connections)
matchRoutes.get('/connections', async (c) => {
  const user = c.get('user')!;
  const db = c.env.DB;

  const { results } = await getMatchesForUser(db, user.id as string, 'matched');
  const enriched = await Promise.all(
    (results || []).map(async (m: Record<string, unknown>) => {
      const otherId = m.user_id_1 === user.id ? m.user_id_2 : m.user_id_1;
      const other = await getUserById(db, otherId as string);
      return {
        id: m.id,
        userId: otherId,
        nickname: other?.nickname || 'User',
        photoUrl: other?.avatar_url || '',
        matchedAt: m.matched_at,
      };
    })
  );

  return c.json({
    success: true,
    data: enriched,
  });
});
