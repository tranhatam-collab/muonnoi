import type { D1Database } from '@cloudflare/workers-types';

// User operations
export async function createUser(
  db: D1Database,
  data: {
    id: string;
    email: string;
    nickname: string;
    age: number;
    gender?: string;
  }
) {
  return db.prepare(
    `INSERT INTO users (id, email, nickname, age, gender, created_at, updated_at)
     VALUES (?, ?, ?, ?, ?, datetime('now'), datetime('now'))`
  ).bind(data.id, data.email, data.nickname, data.age, data.gender || null).run();
}

export async function getUserByEmail(db: D1Database, email: string) {
  return db.prepare('SELECT * FROM users WHERE email = ?').bind(email).first();
}

export async function getUserById(db: D1Database, id: string) {
  return db.prepare('SELECT * FROM users WHERE id = ?').bind(id).first();
}

export async function updateUser(
  db: D1Database,
  id: string,
  data: Partial<{
    nickname: string;
    bio: string;
    age: number;
    gender: string;
    location: string;
    avatar_url: string;
    verification_tier: string;
    verification_level: number;
    trust_score: number;
    membership_tier: string;
    intent_verified: number;
    safe_date_ready: number;
    profile_depth: number;
  }>
) {
  const fields: string[] = [];
  const values: unknown[] = [];

  if (data.nickname !== undefined) { fields.push('nickname = ?'); values.push(data.nickname); }
  if (data.bio !== undefined) { fields.push('bio = ?'); values.push(data.bio); }
  if (data.age !== undefined) { fields.push('age = ?'); values.push(data.age); }
  if (data.gender !== undefined) { fields.push('gender = ?'); values.push(data.gender); }
  if (data.location !== undefined) { fields.push('location = ?'); values.push(data.location); }
  if (data.avatar_url !== undefined) { fields.push('avatar_url = ?'); values.push(data.avatar_url); }
  if (data.verification_tier !== undefined) { fields.push('verification_tier = ?'); values.push(data.verification_tier); }
  if (data.verification_level !== undefined) { fields.push('verification_level = ?'); values.push(data.verification_level); }
  if (data.trust_score !== undefined) { fields.push('trust_score = ?'); values.push(data.trust_score); }
  if (data.membership_tier !== undefined) { fields.push('membership_tier = ?'); values.push(data.membership_tier); }
  if (data.intent_verified !== undefined) { fields.push('intent_verified = ?'); values.push(data.intent_verified); }
  if (data.safe_date_ready !== undefined) { fields.push('safe_date_ready = ?'); values.push(data.safe_date_ready); }
  if (data.profile_depth !== undefined) { fields.push('profile_depth = ?'); values.push(data.profile_depth); }

  if (fields.length === 0) return { success: true, changes: 0 };

  fields.push('updated_at = datetime(\'now\')');
  values.push(id);

  return db.prepare(
    `UPDATE users SET ${fields.join(', ')} WHERE id = ?`
  ).bind(...values).run();
}

// Session operations
export async function createSession(
  db: D1Database,
  data: {
    id: string;
    userId: string;
    tokenType: string;
    expiresAt: string;
    ipAddress?: string;
    userAgent?: string;
  }
) {
  return db.prepare(
    `INSERT INTO sessions (id, user_id, token_type, expires_at, ip_address, user_agent)
     VALUES (?, ?, ?, ?, ?, ?)`
  ).bind(data.id, data.userId, data.tokenType, data.expiresAt, data.ipAddress || null, data.userAgent || null).run();
}

export async function getSessionById(db: D1Database, id: string) {
  return db.prepare(
    `SELECT * FROM sessions WHERE id = ? AND revoked_at IS NULL`
  ).bind(id).first();
}

export async function revokeSession(db: D1Database, id: string) {
  return db.prepare(
    `UPDATE sessions SET revoked_at = datetime('now') WHERE id = ?`
  ).bind(id).run();
}

// Match operations
export async function getMatchByUsers(db: D1Database, userId1: string, userId2: string) {
  const [a, b] = [userId1, userId2].sort();
  return db.prepare('SELECT * FROM matches WHERE user_id_1 = ? AND user_id_2 = ?')
    .bind(a, b).first();
}

export async function createMatch(
  db: D1Database,
  data: { id: string; userId1: string; userId2: string; compatibilityScore?: number; sharedValues?: string[] }
) {
  const [a, b] = [data.userId1, data.userId2].sort();
  return db.prepare(
    `INSERT INTO matches (id, user_id_1, user_id_2, compatibility_score, shared_values, created_at)
     VALUES (?, ?, ?, ?, ?, datetime('now'))`
  ).bind(data.id, a, b, data.compatibilityScore || null, data.sharedValues ? JSON.stringify(data.sharedValues) : null).run();
}

export async function updateMatchLike(
  db: D1Database,
  userId: string,
  targetId: string,
  liked: number // 1 = like, -1 = pass
) {
  const [a, b] = [userId, targetId].sort();
  const isUser1 = userId === a;
  const field = isUser1 ? 'user_1_liked' : 'user_2_liked';
  const result = await db.prepare(`UPDATE matches SET ${field} = ?, updated_at = datetime('now') WHERE user_id_1 = ? AND user_id_2 = ?`)
    .bind(liked, a, b).run();

  // Check mutual like
  if (liked === 1) {
    const match = await getMatchByUsers(db, userId, targetId);
    if (match && match.user_1_liked === 1 && match.user_2_liked === 1) {
      await db.prepare(`UPDATE matches SET status = 'matched', matched_at = datetime('now') WHERE id = ?`)
        .bind(match.id).run();
      return { mutual: true, matchId: match.id };
    }
  }
  return { mutual: false, matchId: null };
}

export async function getMatchesForUser(db: D1Database, userId: string, status?: string) {
  const sql = status
    ? `SELECT * FROM matches WHERE (user_id_1 = ? OR user_id_2 = ?) AND status = ? ORDER BY created_at DESC`
    : `SELECT * FROM matches WHERE (user_id_1 = ? OR user_id_2 = ?) ORDER BY created_at DESC`;
  const stmt = status
    ? db.prepare(sql).bind(userId, userId, status)
    : db.prepare(sql).bind(userId, userId);
  return stmt.all();
}

// Conversation & message operations
export async function getConversationByMatch(db: D1Database, matchId: string) {
  return db.prepare('SELECT * FROM conversations WHERE match_id = ?').bind(matchId).first();
}

export async function createConversation(
  db: D1Database,
  data: { id: string; matchId: string; userId1: string; userId2: string }
) {
  return db.prepare(
    `INSERT INTO conversations (id, match_id, user_id_1, user_id_2, created_at)
     VALUES (?, ?, ?, ?, datetime('now'))`
  ).bind(data.id, data.matchId, data.userId1, data.userId2).run();
}

export async function getMessages(db: D1Database, conversationId: string, limit = 50) {
  return db.prepare(
    `SELECT * FROM messages WHERE conversation_id = ? AND deleted_at IS NULL
     ORDER BY created_at DESC LIMIT ?`
  ).bind(conversationId, limit).all();
}

export async function createMessage(
  db: D1Database,
  data: { id: string; conversationId: string; senderId: string; content: string; scamFlags?: string[] }
) {
  return db.prepare(
    `INSERT INTO messages (id, conversation_id, sender_id, content, scam_flags, created_at)
     VALUES (?, ?, ?, ?, ?, datetime('now'))`
  ).bind(data.id, data.conversationId, data.senderId, data.content, data.scamFlags ? JSON.stringify(data.scamFlags) : null).run();
}

// Safety operations
export async function createReport(
  db: D1Database,
  data: { id: string; reporterId: string; reportedId: string; reportType: string; description?: string; evidence?: string[] }
) {
  return db.prepare(
    `INSERT INTO reports (id, reporter_id, reported_id, report_type, description, evidence, created_at)
     VALUES (?, ?, ?, ?, ?, ?, datetime('now'))`
  ).bind(data.id, data.reporterId, data.reportedId, data.reportType, data.description || null, data.evidence ? JSON.stringify(data.evidence) : null).run();
}

export async function createBlock(
  db: D1Database,
  data: { id: string; blockerId: string; blockedId: string; reason?: string }
) {
  return db.prepare(
    `INSERT INTO blocks (id, blocker_id, blocked_id, reason, created_at)
     VALUES (?, ?, ?, ?, datetime('now'))
     ON CONFLICT(blocker_id, blocked_id) DO UPDATE SET reason = excluded.reason, created_at = datetime('now')`
  ).bind(data.id, data.blockerId, data.blockedId, data.reason || null).run();
}

export async function getBlocks(db: D1Database, blockerId: string) {
  return db.prepare('SELECT * FROM blocks WHERE blocker_id = ? ORDER BY created_at DESC')
    .bind(blockerId).all();
}

// Audit log
export async function logAudit(
  db: D1Database,
  data: {
    userId?: string;
    action: string;
    entityType?: string;
    entityId?: string;
    metadata?: Record<string, unknown>;
    ipAddress?: string;
    userAgent?: string;
  }
) {
  return db.prepare(
    `INSERT INTO audit_logs (id, user_id, action, entity_type, entity_id, metadata, ip_address, user_agent)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
  ).bind(
    crypto.randomUUID(),
    data.userId || null,
    data.action,
    data.entityType || null,
    data.entityId || null,
    data.metadata ? JSON.stringify(data.metadata) : null,
    data.ipAddress || null,
    data.userAgent || null
  ).run();
}
