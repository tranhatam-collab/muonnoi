-- Migration: Create sessions table
-- Date: 2026-06-05

CREATE TABLE IF NOT EXISTS sessions (
  id TEXT PRIMARY KEY,                  -- Session token
  user_id TEXT NOT NULL,
  token_type TEXT DEFAULT 'magic_link', -- magic_link | passkey | refresh
  expires_at TEXT NOT NULL,             -- ISO 8601 timestamp
  ip_address TEXT,
  user_agent TEXT,
  created_at TEXT DEFAULT (datetime('now')),
  revoked_at TEXT,                      -- NULL = active
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_sessions_user_id ON sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_sessions_expires ON sessions(expires_at);
CREATE INDEX IF NOT EXISTS idx_sessions_revoked ON sessions(revoked_at);
