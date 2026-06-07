-- Migration: Create users table
-- Date: 2026-06-05

CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,                    -- UUID v4
  email TEXT NOT NULL UNIQUE,             -- Login email
  email_verified INTEGER DEFAULT 0,       -- 0 = unverified, 1 = verified
  nickname TEXT NOT NULL,                 -- Display name
  avatar_url TEXT,                        -- Profile photo URL
  verification_tier TEXT DEFAULT 'basic', -- basic | verified | trusted | premium
  status TEXT DEFAULT 'active',         -- active | suspended | banned | deleted
  role TEXT DEFAULT 'member',             -- member | moderator | admin
  age INTEGER CHECK (age >= 18),          -- Must be 18+
  gender TEXT,                            -- male | female | non_binary | prefer_not_to_say
  location TEXT,                          -- City/region
  bio TEXT,                               -- Short description
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now')),
  last_login_at TEXT
);

-- Index for email lookups
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_users_status ON users(status);
CREATE INDEX IF NOT EXISTS idx_users_verification ON users(verification_tier);
