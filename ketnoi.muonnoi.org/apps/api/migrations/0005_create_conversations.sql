-- Migration: Create conversations and messages tables
-- Date: 2026-06-05

CREATE TABLE IF NOT EXISTS conversations (
  id TEXT PRIMARY KEY,
  match_id TEXT NOT NULL UNIQUE,
  user_id_1 TEXT NOT NULL,
  user_id_2 TEXT NOT NULL,
  last_message_at TEXT,
  last_message_preview TEXT,
  user_1_unread INTEGER DEFAULT 0,
  user_2_unread INTEGER DEFAULT 0,
  is_frozen INTEGER DEFAULT 0,          -- 1 = safety freeze (reported)
  created_at TEXT DEFAULT (datetime('now')),
  FOREIGN KEY (match_id) REFERENCES matches(id) ON DELETE CASCADE,
  FOREIGN KEY (user_id_1) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (user_id_2) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS messages (
  id TEXT PRIMARY KEY,
  conversation_id TEXT NOT NULL,
  sender_id TEXT NOT NULL,
  content TEXT NOT NULL,
  content_type TEXT DEFAULT 'text',     -- text | image | gift | system
  status TEXT DEFAULT 'sent',           -- sent | delivered | read
  scam_flags TEXT,                      -- JSON array if flagged
  deleted_at TEXT,                      -- Soft delete
  created_at TEXT DEFAULT (datetime('now')),
  FOREIGN KEY (conversation_id) REFERENCES conversations(id) ON DELETE CASCADE,
  FOREIGN KEY (sender_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_conversations_match ON conversations(match_id);
CREATE INDEX IF NOT EXISTS idx_messages_conversation ON messages(conversation_id);
CREATE INDEX IF NOT EXISTS idx_messages_sender ON messages(sender_id);
CREATE INDEX IF NOT EXISTS idx_messages_created ON messages(created_at);
