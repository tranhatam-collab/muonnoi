-- Migration: Create investor_interest table for dautu.muonnoi.org
-- Created: 2026-06-05
-- Purpose: Store investor interest form submissions

CREATE TABLE IF NOT EXISTS investor_interest (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    country TEXT NOT NULL,
    investor_type TEXT NOT NULL,
    project_interest TEXT NOT NULL,
    amount_range TEXT,
    risk_acknowledged INTEGER NOT NULL DEFAULT 0,
    not_transaction_acknowledged INTEGER NOT NULL DEFAULT 0,
    contact_allowed INTEGER NOT NULL DEFAULT 0,
    status TEXT NOT NULL DEFAULT 'new',
    notes TEXT,
    assigned_to TEXT,
    contacted_at TEXT,
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

-- Indexes for common queries
CREATE INDEX IF NOT EXISTS idx_investor_interest_email ON investor_interest(email);
CREATE INDEX IF NOT EXISTS idx_investor_interest_status ON investor_interest(status);
CREATE INDEX IF NOT EXISTS idx_investor_interest_project ON investor_interest(project_interest);
CREATE INDEX IF NOT EXISTS idx_investor_interest_created_at ON investor_interest(created_at DESC);

-- Status values: new, reviewing, approved, rejected, contacted, converted, dormant
