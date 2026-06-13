-- SEED DATA FOR DEMO & TESTING
-- Run after 0003_wallet_ledger_system.sql
-- WARNING: Remove before production

-- 1. LEGAL ENTITIES
INSERT INTO legal_entities (id, name, country, entity_type, registration_number, tax_id, status, created_at, updated_at) VALUES
('e_vietcan', 'VIET CAN NEW CORP', 'US', 'corp', 'DEL-2024-001', 'US-TAX-001', 'active', datetime('now'), datetime('now')),
('e_vietcanvn', 'Công ty Cổ phần Giáo dục Truyền thông Việt Can New', 'VN', 'corp', '0312345678', 'VN-TAX-001', 'active', datetime('now'), datetime('now')),
('e_kasan', 'Công ty Cổ phần Giáo dục Hành Trình Kasan', 'VN', 'corp', '0318765432', 'VN-TAX-002', 'active', datetime('now'), datetime('now'));

-- 2. PROJECTS
INSERT INTO projects (id, slug, name, description, status, investment_status, primary_legal_entity_id, currency_default, target_raise, created_at, updated_at) VALUES
('p_dsts', 'dsts', 'Đường Sao Toả Sáng', 'Nền tảng lưu giữ, xác thực, kết nối và lan tỏa câu chuyện người Việt toàn cầu', 'founder_review', 'interest', 'e_kasan', 'VND', 250000000, datetime('now'), datetime('now')),
('p_computer', 'computer', 'AI Computer Ecosystem', 'computer.iai.one · maytinhai.org · academy.iai.one', 'build', 'not_open', 'e_vietcan', 'VND', 500000000, datetime('now'), datetime('now')),
('p_plays', 'plays', 'Plays Muôn Nơi', 'Gaming platform có trách nhiệm', 'pilot_preparing', 'interest', 'e_vietcanvn', 'VND', 150000000, datetime('now'), datetime('now'));

-- 3. INVESTMENT ROOMS
INSERT INTO investment_rooms (id, project_id, visibility_status, legal_review_status, accounting_review_status, payment_enabled, nda_required, created_at, updated_at) VALUES
('r_dsts', 'p_dsts', 'members_only', 'pending', 'pending', 0, 1, datetime('now'), datetime('now')),
('r_plays', 'p_plays', 'hidden', 'pending', 'pending', 0, 0, datetime('now'), datetime('now'));

-- 4. DEMO USERS (passwords not stored - use magic link in real)
-- In real: users table managed by verify.iai.one or auth system
-- Here we seed investors directly for demo

-- 5. INVESTORS (demo)
INSERT INTO investors (id, user_id, investor_type, country_of_residence, nationality, source_of_funds, investment_objective, risk_tolerance, kyc_status, aml_status, risk_profile_status, investor_status, created_at, updated_at) VALUES
('inv_demo_1', 'user_demo_1', 'individual', 'VN', 'VN', 'thu nhập cá nhân', 'tài trợ dự án cộng đồng', 'moderate', 'verified', 'cleared', 'completed', 'approved', datetime('now'), datetime('now')),
('inv_demo_2', 'user_demo_2', 'individual', 'US', 'VN', 'thu nhập cá nhân', 'đầu tư dài hạn', 'aggressive', 'pending', 'cleared', 'pending', 'pending', datetime('now'), datetime('now')),
('inv_demo_3', 'user_demo_3', 'enterprise', 'VN', 'VN', 'lợi nhuận doanh nghiệp', 'hợp tác chiến lược', 'conservative', 'verified', 'cleared', 'completed', 'approved', datetime('now'), datetime('now'));

-- 6. WALLETS
INSERT INTO wallets (id, user_id, currency, cash_pending, cash_confirmed, capital_committed, capital_deployed, capital_unallocated, platform_credit, refund_pending, locked_amount, status, created_at, updated_at) VALUES
('w_demo_1', 'user_demo_1', 'VND', 0, 50000000, 30000000, 10000000, 10000000, 5000000, 0, 0, 'active', datetime('now'), datetime('now')),
('w_demo_2', 'user_demo_2', 'VND', 10000000, 0, 0, 0, 0, 0, 0, 0, 'active', datetime('now'), datetime('now')),
('w_demo_3', 'user_demo_3', 'VND', 0, 200000000, 150000000, 50000000, 0, 0, 0, 0, 'active', datetime('now'), datetime('now'));

-- 7. INVESTMENTS
INSERT INTO investments (id, wallet_id, user_id, project_id, amount, currency, status, investment_type, instrument, terms, expected_return, started_at, returned_amount, notes, created_at, updated_at) VALUES
('invest_1', 'w_demo_1', 'user_demo_1', 'p_dsts', 30000000, 'VND', 'active', 'equity', 'SAFE', '{"valuation_cap":5000000000,"discount":15}', '{"type":"equity_appreciation","timeline":"3-5_years"}', datetime('now'), 0, 'Đầu tư seed cho DSTS', datetime('now'), datetime('now')),
('invest_2', 'w_demo_3', 'user_demo_3', 'p_dsts', 150000000, 'VND', 'active', 'revenue_share', NULL, '{"share_percent":10,"duration":"24_months"}', '{"type":"revenue_share","timeline":"24_months"}', datetime('now'), 0, 'Hợp tác doanh nghiệp', datetime('now'), datetime('now'));

-- 8. TRANSACTIONS
INSERT INTO transactions (id, investor_id, project_id, legal_entity_id, wallet_id, transaction_type, status, currency, amount, reference_code, idempotency_key, description, created_by, approved_by, approved_at, created_at, updated_at) VALUES
('tx_1', 'inv_demo_1', 'p_dsts', 'e_kasan', 'w_demo_1', 'deposit', 'confirmed', 'VND', 50000000, 'REF-001', 'idem_001', 'Nạp tiền vào ví', 'system', 'admin_1', datetime('now'), datetime('now'), datetime('now')),
('tx_2', 'inv_demo_1', 'p_dsts', 'e_kasan', 'w_demo_1', 'investment', 'confirmed', 'VND', 30000000, 'REF-002', 'idem_002', 'Cam kết đầu tư DSTS', 'system', 'admin_1', datetime('now'), datetime('now'), datetime('now')),
('tx_3', 'inv_demo_3', 'p_dsts', 'e_kasan', 'w_demo_3', 'deposit', 'confirmed', 'VND', 200000000, 'REF-003', 'idem_003', 'Nạp tiền doanh nghiệp', 'system', 'admin_1', datetime('now'), datetime('now'), datetime('now')),
('tx_4', 'inv_demo_3', 'p_dsts', 'e_kasan', 'w_demo_3', 'investment', 'confirmed', 'VND', 150000000, 'REF-004', 'idem_004', 'Hợp tác doanh nghiệp DSTS', 'system', 'admin_1', datetime('now'), datetime('now'), datetime('now'));

-- 9. LEDGER ENTRIES (double-entry for tx_1: deposit)
INSERT INTO ledger_entries (id, transaction_id, entry_group_id, account_code, direction, currency, amount, investor_id, project_id, legal_entity_id, description, created_at) VALUES
('le_1_1', 'tx_1', 'leg_tx_1', 'asset_legal_entity_bank_clearing', 'debit', 'VND', 50000000, 'inv_demo_1', 'p_dsts', 'e_kasan', 'Nhận tiền tại ngân hàng', datetime('now')),
('le_1_2', 'tx_1', 'leg_tx_1', 'liability_investor_cash_confirmed', 'credit', 'VND', 50000000, 'inv_demo_1', 'p_dsts', 'e_kasan', 'Ghi nhận tiền nhà đầu tư', datetime('now'));

-- Ledger for tx_2: investment
INSERT INTO ledger_entries (id, transaction_id, entry_group_id, account_code, direction, currency, amount, investor_id, project_id, legal_entity_id, description, created_at) VALUES
('le_2_1', 'tx_2', 'leg_tx_2', 'liability_investor_cash_confirmed', 'debit', 'VND', 30000000, 'inv_demo_1', 'p_dsts', 'e_kasan', 'Chuyển tiền sang cam kết', datetime('now')),
('le_2_2', 'tx_2', 'leg_tx_2', 'liability_project_capital_committed', 'credit', 'VND', 30000000, 'inv_demo_1', 'p_dsts', 'e_kasan', 'Vốn cam kết vào dự án', datetime('now'));

-- 10. PROJECT REPORTS
INSERT INTO project_reports (id, project_id, report_period, report_type, summary, capital_received, capital_allocated, capital_deployed, currency, status, published_at, created_at) VALUES
('rep_1', 'p_dsts', '2026-06', 'financial', 'Báo cáo tài chính tháng 6/2026', 200000000, 150000000, 50000000, 'VND', 'published', datetime('now'), datetime('now'));

-- 11. INVESTMENT REPORTS
INSERT INTO investment_reports (id, investment_id, project_id, report_period, report_type, summary, status, published_at, created_at) VALUES
('irep_1', 'invest_1', 'p_dsts', '2026-06', 'milestone', 'DSTS đã hoàn thành MVP Story Library với 50 stories', 'published', datetime('now'), datetime('now'));

-- 12. AUDIT LOGS
INSERT INTO audit_logs (id, actor_id, actor_role, action, target_type, target_id, after_json, created_at) VALUES
('audit_1', 'admin_1', 'admin', 'transaction_confirmed', 'transaction', 'tx_1', '{"status":"confirmed","amount":50000000}', datetime('now')),
('audit_2', 'admin_1', 'admin', 'investor_approved', 'investor', 'inv_demo_1', '{"investor_status":"approved"}', datetime('now'));

-- 13. INVESTMENT ACCESS
INSERT INTO investment_access (id, investor_id, project_id, access_status, approved_by, approved_at, nda_signed, created_at, updated_at) VALUES
('acc_1', 'inv_demo_1', 'p_dsts', 'approved', 'admin_1', datetime('now'), 1, datetime('now'), datetime('now')),
('acc_2', 'inv_demo_3', 'p_dsts', 'approved', 'admin_1', datetime('now'), 1, datetime('now'), datetime('now')),
('acc_3', 'inv_demo_2', 'p_dsts', 'requested', NULL, NULL, 0, datetime('now'), datetime('now'));
