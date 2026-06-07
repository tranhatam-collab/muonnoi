-- Migration: Create matches table
-- Date: 2026-06-05

CREATE TABLE IF NOT EXISTS matches (
  id TEXT PRIMARY KEY,
  user_id_1 TEXT NOT NULL,              -- Alphabetically first user_id
  user_id_2 TEXT NOT NULL,              -- Alphabetically second user_id
  user_1_liked INTEGER DEFAULT 0,       -- 0 = pending, 1 = liked, -1 = passed
  user_2_liked INTEGER DEFAULT 0,
  compatibility_score INTEGER,          -- 0-100
  shared_values TEXT,                   -- JSON array
  status TEXT DEFAULT 'pending',        -- pending | matched | blocked | expired
  matched_at TEXT,                      -- When mutual like occurred
  expired_at TEXT,                      -- When match expires (7 days if no message)
  created_at TEXT DEFAULT (datetime('now')),
  FOREIGN KEY (user_id_1) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (user_id_2) REFERENCES users(id) ON DELETE CASCADE,
  UNIQUE(user_id_1, user_id_2)
);

CREATE INDEX IF NOT EXISTS idx_matches_user1 ON matches(user_id_1);
CREATE INDEX IF NOT EXISTS idx_matches_user2 ON matches(user_id_2);
CREATE INDEX IF NOT EXISTS idx_matches_status ON matches(status);
