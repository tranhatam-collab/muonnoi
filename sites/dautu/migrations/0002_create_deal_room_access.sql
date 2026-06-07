-- Migration: Create deal_room_access table for gated deal room
-- Created: 2026-06-05
-- Purpose: Manage invited investor access to deal room

CREATE TABLE IF NOT EXISTS deal_room_access (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    investor_interest_id INTEGER NOT NULL,
    email TEXT NOT NULL,
    access_token TEXT NOT NULL UNIQUE,
    password_hash TEXT,
    expires_at TEXT,
    last_accessed_at TEXT,
    access_count INTEGER NOT NULL DEFAULT 0,
    is_active INTEGER NOT NULL DEFAULT 1,
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    updated_at TEXT NOT NULL DEFAULT (datetime('now')),
    FOREIGN KEY (investor_interest_id) REFERENCES investor_interest(id)
);

CREATE INDEX IF NOT EXISTS idx_deal_room_access_token ON deal_room_access(access_token);
CREATE INDEX IF NOT EXISTS idx_deal_room_access_email ON deal_room_access(email);
CREATE INDEX IF NOT EXISTS idx_deal_room_active ON deal_room_access(is_active);
