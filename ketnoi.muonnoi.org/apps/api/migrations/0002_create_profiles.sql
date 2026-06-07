-- Migration: Create profiles table (extended user info)
-- Date: 2026-06-05

CREATE TABLE IF NOT EXISTS profiles (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL UNIQUE,
  relationship_goal TEXT,               -- long_term | marriage | friendship | casual
  values TEXT,                          -- JSON array: ["honesty", "family", ...]
  interests TEXT,                       -- JSON array
  languages TEXT,                       -- JSON array
  education TEXT,
  occupation TEXT,
  height INTEGER,                       -- cm
  religion TEXT,
  drinking TEXT,                        -- never | sometimes | often
  smoking TEXT,                         -- never | sometimes | often
  want_children TEXT,                   -- yes | no | maybe
  photos TEXT,                          -- JSON array of photo URLs
  boundary_preferences TEXT,            -- JSON: {message_frequency, meetup_speed, ...}
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now')),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_profiles_user_id ON profiles(user_id);
CREATE INDEX IF NOT EXISTS idx_profiles_goal ON profiles(relationship_goal);
