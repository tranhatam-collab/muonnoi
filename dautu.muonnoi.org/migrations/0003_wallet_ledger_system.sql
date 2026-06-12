-- Migration: 0003_wallet_ledger_system.sql
-- Description: Full wallet, investment, ledger, reporting, audit system
-- Date: 2026-06-12
-- Scope: Investment Member Portal for dautu.muonnoi.org

-- 1. LEGAL ENTITIES
CREATE TABLE IF NOT EXISTS legal_entities (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  country TEXT NOT NULL,
  entity_type TEXT NOT NULL, -- corp | llc | partnership | foundation
  registration_number TEXT,
  tax_id TEXT,
  bank_account_encrypted TEXT, -- encrypted bank details
  status TEXT NOT NULL DEFAULT 'active', -- active | inactive | suspended
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

-- 2. INVESTORS (extends users)
CREATE TABLE IF NOT EXISTS investors (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL UNIQUE,
  investor_type TEXT NOT NULL DEFAULT 'individual', -- individual | enterprise | fund
  country_of_residence TEXT NOT NULL,
  nationality TEXT,
  source_of_funds TEXT,
  investment_objective TEXT,
  risk_tolerance TEXT, -- conservative | moderate | aggressive
  kyc_status TEXT NOT NULL DEFAULT 'pending', -- pending | verified | failed | manual_review
  kyb_status TEXT, -- pending | verified | failed (for enterprise/fund)
  aml_status TEXT DEFAULT 'cleared', -- cleared | flagged | review
  risk_profile_status TEXT NOT NULL DEFAULT 'pending',
  investor_status TEXT NOT NULL DEFAULT 'pending', -- pending | approved | rejected | suspended
  approved_by TEXT,
  approved_at TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

-- 3. PROJECTS
CREATE TABLE IF NOT EXISTS projects (
  id TEXT PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  status TEXT NOT NULL DEFAULT 'draft', -- draft | founder_review | legal_review | build | pilot | interest_open | investment_review | round_open | closed
  investment_status TEXT NOT NULL DEFAULT 'not_open', -- not_open | interest | review | round_open | closed
  primary_legal_entity_id TEXT,
  currency_default TEXT NOT NULL DEFAULT 'VND',
  target_raise INTEGER, -- minor unit
  valuation_cap INTEGER, -- minor unit (internal only)
  founded_at TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

-- 4. INVESTMENT ROOMS
CREATE TABLE IF NOT EXISTS investment_rooms (
  id TEXT PRIMARY KEY,
  project_id TEXT NOT NULL,
  visibility_status TEXT NOT NULL DEFAULT 'hidden', -- hidden | members_only | approved_only
  legal_review_status TEXT NOT NULL DEFAULT 'pending', -- pending | approved | rejected
  accounting_review_status TEXT NOT NULL DEFAULT 'pending',
  payment_enabled INTEGER NOT NULL DEFAULT 0,
  nda_required INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

-- 5. INVESTMENT ACCESS
CREATE TABLE IF NOT EXISTS investment_access (
  id TEXT PRIMARY KEY,
  investor_id TEXT NOT NULL,
  project_id TEXT NOT NULL,
  access_status TEXT NOT NULL DEFAULT 'requested', -- requested | approved | rejected | revoked
  approved_by TEXT,
  approved_at TEXT,
  nda_signed INTEGER NOT NULL DEFAULT 0,
  nda_signed_at TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now')),
  UNIQUE(investor_id, project_id)
);

-- 6. WALLETS
CREATE TABLE IF NOT EXISTS wallets (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL UNIQUE,
  currency TEXT NOT NULL DEFAULT 'VND',
  cash_pending INTEGER NOT NULL DEFAULT 0,
  cash_confirmed INTEGER NOT NULL DEFAULT 0,
  capital_committed INTEGER NOT NULL DEFAULT 0,
  capital_deployed INTEGER NOT NULL DEFAULT 0,
  capital_unallocated INTEGER NOT NULL DEFAULT 0,
  platform_credit INTEGER NOT NULL DEFAULT 0,
  refund_pending INTEGER NOT NULL DEFAULT 0,
  locked_amount INTEGER NOT NULL DEFAULT 0,
  status TEXT NOT NULL DEFAULT 'active', -- active | frozen | suspended | closed
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

-- 7. PAYMENT INSTRUCTIONS
CREATE TABLE IF NOT EXISTS payment_instructions (
  id TEXT PRIMARY KEY,
  investor_id TEXT NOT NULL,
  project_id TEXT NOT NULL,
  legal_entity_id TEXT NOT NULL,
  currency TEXT NOT NULL,
  amount_approved INTEGER NOT NULL,
  reference_code TEXT UNIQUE NOT NULL,
  instruction_status TEXT NOT NULL DEFAULT 'draft', -- draft | issued | expired | used | cancelled
  expires_at TEXT,
  issued_by TEXT NOT NULL,
  issued_at TEXT NOT NULL DEFAULT (datetime('now')),
  used_at TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

-- 8. TRANSACTIONS
CREATE TABLE IF NOT EXISTS transactions (
  id TEXT PRIMARY KEY,
  investor_id TEXT NOT NULL,
  project_id TEXT,
  legal_entity_id TEXT NOT NULL,
  wallet_id TEXT,
  payment_instruction_id TEXT,
  transaction_type TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'draft',
  currency TEXT NOT NULL,
  amount INTEGER NOT NULL,
  reference_code TEXT,
  idempotency_key TEXT UNIQUE NOT NULL,
  document_id TEXT,
  description TEXT,
  metadata TEXT, -- JSON
  created_by TEXT NOT NULL,
  approved_by TEXT,
  approved_at TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

-- 9. LEDGER ENTRIES (double-entry)
CREATE TABLE IF NOT EXISTS ledger_entries (
  id TEXT PRIMARY KEY,
  transaction_id TEXT NOT NULL,
  entry_group_id TEXT NOT NULL,
  account_code TEXT NOT NULL,
  direction TEXT NOT NULL CHECK(direction IN ('debit','credit')),
  currency TEXT NOT NULL,
  amount INTEGER NOT NULL CHECK(amount > 0),
  investor_id TEXT,
  project_id TEXT,
  legal_entity_id TEXT,
  description TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

-- 10. INVESTMENTS
CREATE TABLE IF NOT EXISTS investments (
  id TEXT PRIMARY KEY,
  wallet_id TEXT NOT NULL,
  user_id TEXT NOT NULL,
  project_id TEXT NOT NULL,
  amount INTEGER NOT NULL,
  currency TEXT NOT NULL DEFAULT 'VND',
  status TEXT NOT NULL DEFAULT 'pending', -- pending | active | returned | written_off | cancelled
  investment_type TEXT NOT NULL, -- equity | debt | revenue_share | grant | convertible
  instrument TEXT, -- SAFE | convertible_note | equity | loan
  terms TEXT, -- JSON
  expected_return TEXT, -- JSON
  started_at TEXT,
  matured_at TEXT,
  returned_amount INTEGER NOT NULL DEFAULT 0,
  notes TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

-- 11. INVESTMENT REPORTS
CREATE TABLE IF NOT EXISTS investment_reports (
  id TEXT PRIMARY KEY,
  investment_id TEXT NOT NULL,
  project_id TEXT NOT NULL,
  report_period TEXT NOT NULL, -- YYYY-MM
  report_type TEXT NOT NULL, -- financial | operational | milestone | audit
  status TEXT NOT NULL DEFAULT 'draft', -- draft | published | archived
  summary TEXT,
  data TEXT, -- JSON
  attachments TEXT, -- JSON array
  published_by TEXT,
  published_at TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

-- 12. PROJECT REPORTS
CREATE TABLE IF NOT EXISTS project_reports (
  id TEXT PRIMARY KEY,
  project_id TEXT NOT NULL,
  report_period TEXT NOT NULL,
  report_type TEXT NOT NULL,
  summary TEXT NOT NULL,
  capital_received INTEGER NOT NULL DEFAULT 0,
  capital_allocated INTEGER NOT NULL DEFAULT 0,
  capital_deployed INTEGER NOT NULL DEFAULT 0,
  currency TEXT NOT NULL,
  document_id TEXT,
  status TEXT NOT NULL DEFAULT 'draft',
  published_by TEXT,
  published_at TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

-- 13. ORDERS (spending)
CREATE TABLE IF NOT EXISTS orders (
  id TEXT PRIMARY KEY,
  wallet_id TEXT NOT NULL,
  user_id TEXT NOT NULL,
  service_type TEXT NOT NULL, -- membership | mentor_session | event_ticket | merchandise | program_fee
  service_id TEXT,
  project_id TEXT,
  amount INTEGER NOT NULL,
  currency TEXT NOT NULL DEFAULT 'VND',
  status TEXT NOT NULL DEFAULT 'pending', -- pending | paid | cancelled | refunded
  metadata TEXT, -- JSON
  paid_at TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

-- 14. WITHDRAWALS
CREATE TABLE IF NOT EXISTS withdrawals (
  id TEXT PRIMARY KEY,
  wallet_id TEXT NOT NULL,
  user_id TEXT NOT NULL,
  amount INTEGER NOT NULL,
  currency TEXT NOT NULL DEFAULT 'VND',
  bank_name TEXT,
  account_number_hash TEXT, -- hashed
  account_holder TEXT,
  status TEXT NOT NULL DEFAULT 'pending', -- pending | reviewing | approved | rejected | processing | completed | failed
  reason TEXT,
  reviewed_by TEXT,
  reviewed_at TEXT,
  rejection_reason TEXT,
  processed_at TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

-- 15. DOCUMENTS
CREATE TABLE IF NOT EXISTS documents (
  id TEXT PRIMARY KEY,
  owner_type TEXT NOT NULL, -- investor | project | transaction | report
  owner_id TEXT NOT NULL,
  document_type TEXT NOT NULL, -- kyc | contract | receipt | report | audit
  storage_url TEXT NOT NULL,
  hash_sha256 TEXT NOT NULL,
  uploaded_by TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

-- 16. AUDIT LOGS
CREATE TABLE IF NOT EXISTS audit_logs (
  id TEXT PRIMARY KEY,
  actor_id TEXT NOT NULL,
  actor_role TEXT NOT NULL,
  action TEXT NOT NULL,
  target_type TEXT NOT NULL,
  target_id TEXT NOT NULL,
  before_json TEXT,
  after_json TEXT,
  ip_hash TEXT,
  user_agent_hash TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

-- 17. ADMIN ACTIONS (dual control tracking)
CREATE TABLE IF NOT EXISTS admin_actions (
  id TEXT PRIMARY KEY,
  action_type TEXT NOT NULL,
  target_type TEXT NOT NULL,
  target_id TEXT NOT NULL,
  requested_by TEXT NOT NULL,
  approved_by TEXT,
  status TEXT NOT NULL DEFAULT 'pending', -- pending | approved | rejected
  reason TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  approved_at TEXT
);

-- INDEXES
CREATE INDEX IF NOT EXISTS idx_wallet_user ON wallets(user_id);
CREATE INDEX IF NOT EXISTS idx_investor_user ON investors(user_id);
CREATE INDEX IF NOT EXISTS idx_investor_status ON investors(investor_status);
CREATE INDEX IF NOT EXISTS idx_project_slug ON projects(slug);
CREATE INDEX IF NOT EXISTS idx_project_status ON projects(investment_status);
CREATE INDEX IF NOT EXISTS idx_access_investor ON investment_access(investor_id);
CREATE INDEX IF NOT EXISTS idx_access_project ON investment_access(project_id);
CREATE INDEX IF NOT EXISTS idx_tx_investor ON transactions(investor_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_tx_project ON transactions(project_id);
CREATE INDEX IF NOT EXISTS idx_tx_status ON transactions(status);
CREATE INDEX IF NOT EXISTS idx_ledger_tx ON ledger_entries(transaction_id);
CREATE INDEX IF NOT EXISTS idx_ledger_group ON ledger_entries(entry_group_id);
CREATE INDEX IF NOT EXISTS idx_ledger_account ON ledger_entries(account_code);
CREATE INDEX IF NOT EXISTS idx_investment_wallet ON investments(wallet_id);
CREATE INDEX IF NOT EXISTS idx_investment_project ON investments(project_id);
CREATE INDEX IF NOT EXISTS idx_report_investment ON investment_reports(investment_id);
CREATE INDEX IF NOT EXISTS idx_report_project ON project_reports(project_id);
CREATE INDEX IF NOT EXISTS idx_order_wallet ON orders(wallet_id);
CREATE INDEX IF NOT EXISTS idx_withdrawal_wallet ON withdrawals(wallet_id);
CREATE INDEX IF NOT EXISTS idx_withdrawal_status ON withdrawals(status);
CREATE INDEX IF NOT EXISTS idx_document_owner ON documents(owner_type, owner_id);
CREATE INDEX IF NOT EXISTS idx_audit_target ON audit_logs(target_type, target_id);
CREATE INDEX IF NOT EXISTS idx_audit_actor ON audit_logs(actor_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_admin_action ON admin_actions(status, created_at DESC);
