-- Migration: Create safety tables (reports, blocks, audit_logs)
-- Date: 2026-06-05

CREATE TABLE IF NOT EXISTS reports (
  id TEXT PRIMARY KEY,
  reporter_id TEXT NOT NULL,            -- Who reported
  reported_id TEXT NOT NULL,            -- Who was reported
  report_type TEXT NOT NULL,            -- harassment | scam | fake_profile | underage | inappropriate | other
  description TEXT,
  evidence TEXT,                        -- JSON array of message IDs, screenshots
  status TEXT DEFAULT 'open',           -- open | reviewing | resolved | dismissed
  priority TEXT DEFAULT 'medium',       -- low | medium | high | critical
  resolved_by TEXT,                     -- Admin/mod who resolved
  resolution_note TEXT,
  created_at TEXT DEFAULT (datetime('now')),
  resolved_at TEXT,
  FOREIGN KEY (reporter_id) REFERENCES users(id) ON DELETE SET NULL,
  FOREIGN KEY (reported_id) REFERENCES users(id) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS blocks (
  id TEXT PRIMARY KEY,
  blocker_id TEXT NOT NULL,
  blocked_id TEXT NOT NULL,
  reason TEXT,
  created_at TEXT DEFAULT (datetime('now')),
  FOREIGN KEY (blocker_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (blocked_id) REFERENCES users(id) ON DELETE CASCADE,
  UNIQUE(blocker_id, blocked_id)
);

CREATE TABLE IF NOT EXISTS audit_logs (
  id TEXT PRIMARY KEY,
  user_id TEXT,
  action TEXT NOT NULL,                 -- login | logout | report | block | match | message | verify
  entity_type TEXT,                     -- user | match | message | report
  entity_id TEXT,
  metadata TEXT,                        -- JSON
  ip_address TEXT,
  user_agent TEXT,
  created_at TEXT DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_reports_status ON reports(status);
CREATE INDEX IF NOT EXISTS idx_reports_reported ON reports(reported_id);
CREATE INDEX IF NOT EXISTS idx_blocks_blocker ON blocks(blocker_id);
CREATE INDEX IF NOT EXISTS idx_audit_user ON audit_logs(user_id);
CREATE INDEX IF NOT EXISTS idx_audit_action ON audit_logs(action);
