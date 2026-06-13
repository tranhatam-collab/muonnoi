# DAUTU.MUONNOI.ORG · LEDGER & DOUBLE-ENTRY IMPLEMENTATION SPEC 2026

> **Implementation-ready spec for dev team.** Copy SQL and function signatures directly.

---

## 1. LEDGER ENTRY TYPES (Account Codes)

```
asset_legal_entity_bank_clearing     -- Tiền tại ngân hàng pháp nhân
asset_legal_entity_bank_operating    -- Tài khoản vận hành
asset_cash_pending                   -- Tiền chờ đối soát
asset_cash_confirmed                 -- Tiền đã đối soát

liability_investor_cash_confirmed    -- Nợ nhà đầu tư (đã nhận)
liability_investor_capital_committed -- Nợ nhà đầu tư (đã cam kết)
liability_project_capital_committed  -- Nợ dự án (vốn cam kết)
liability_project_capital_deployed -- Nợ dự án (vốn đã dùng)
liability_investor_platform_credit   -- Credit nội bộ nhà đầu tư
liability_refund_pending             -- Hoàn tiền đang chờ

equity_platform_credit_expense       -- Chi phí credit cấp ra
revenue_platform_service             -- Doanh thu dịch vụ

expense_project_capital_deployed     -- Chi vốn dự án
expense_project_operating            -- Chi phí vận hành dự án
```

---

## 2. DOUBLE-ENTRY TEMPLATES

### 2.1. Deposit Confirmed
```sql
-- Debit
INSERT INTO ledger_entries (id, transaction_id, entry_group_id, account_code, direction, currency, amount, ...)
VALUES ('le_...', 'tx_...', 'leg_tx_...', 'asset_legal_entity_bank_clearing', 'debit', 'VND', 10000000, ...);

-- Credit
INSERT INTO ledger_entries (id, transaction_id, entry_group_id, account_code, direction, currency, amount, ...)
VALUES ('le_...', 'tx_...', 'leg_tx_...', 'liability_investor_cash_confirmed', 'credit', 'VND', 10000000, ...);
```

### 2.2. Investment Committed
```sql
-- Debit: liability_investor_cash_confirmed (giảm)
INSERT INTO ledger_entries (...) VALUES ('le_...', 'tx_...', 'leg_tx_...', 'liability_investor_cash_confirmed', 'debit', 'VND', 5000000, ...);

-- Credit: liability_project_capital_committed (tăng)
INSERT INTO ledger_entries (...) VALUES ('le_...', 'tx_...', 'leg_tx_...', 'liability_project_capital_committed', 'credit', 'VND', 5000000, ...);
```

### 2.3. Capital Deployed
```sql
-- Debit: liability_project_capital_committed (giảm)
INSERT INTO ledger_entries (...) VALUES ('le_...', 'tx_...', 'leg_tx_...', 'liability_project_capital_committed', 'debit', 'VND', 2000000, ...);

-- Credit: liability_project_capital_deployed (tăng)
INSERT INTO ledger_entries (...) VALUES ('le_...', 'tx_...', 'leg_tx_...', 'liability_project_capital_deployed', 'credit', 'VND', 2000000, ...);
```

### 2.4. Platform Credit Granted
```sql
-- Debit: equity_platform_credit_expense
INSERT INTO ledger_entries (...) VALUES ('le_...', 'tx_...', 'leg_tx_...', 'equity_platform_credit_expense', 'debit', 'VND', 500000, ...);

-- Credit: liability_investor_platform_credit
INSERT INTO ledger_entries (...) VALUES ('le_...', 'tx_...', 'leg_tx_...', 'liability_investor_platform_credit', 'credit', 'VND', 500000, ...);
```

### 2.5. Platform Credit Spent
```sql
-- Debit: liability_investor_platform_credit (giảm)
INSERT INTO ledger_entries (...) VALUES ('le_...', 'tx_...', 'leg_tx_...', 'liability_investor_platform_credit', 'debit', 'VND', 100000, ...);

-- Credit: revenue_platform_service
INSERT INTO ledger_entries (...) VALUES ('le_...', 'tx_...', 'leg_tx_...', 'revenue_platform_service', 'credit', 'VND', 100000, ...);
```

### 2.6. Reversal (Correction)
```sql
-- Original: deposit 10M (wrong amount, should be 1M)
-- Create reversal transaction
INSERT INTO transactions (id, ..., transaction_type, status, amount, ...) VALUES ('tx_rev_...', ..., 'reversal', 'confirmed', 10000000, ...);

-- Reversal entry (opposite of original)
INSERT INTO ledger_entries (...) VALUES ('le_...', 'tx_rev_...', 'leg_tx_rev_...', 'asset_legal_entity_bank_clearing', 'credit', 'VND', 10000000, ...);
INSERT INTO ledger_entries (...) VALUES ('le_...', 'tx_rev_...', 'leg_tx_rev_...', 'liability_investor_cash_confirmed', 'debit', 'VND', 10000000, ...);

-- Correct entry (new transaction)
INSERT INTO transactions (id, ..., transaction_type, status, amount, ...) VALUES ('tx_corr_...', ..., 'deposit', 'confirmed', 1000000, ...);
INSERT INTO ledger_entries (...) VALUES ('le_...', 'tx_corr_...', 'leg_tx_corr_...', 'asset_legal_entity_bank_clearing', 'debit', 'VND', 1000000, ...);
INSERT INTO ledger_entries (...) VALUES ('le_...', 'tx_corr_...', 'leg_tx_corr_...', 'liability_investor_cash_confirmed', 'credit', 'VND', 1000000, ...);
```

---

## 3. BALANCE VERIFICATION FUNCTION

```typescript
// Verify that every entry_group_id balances
async function verifyLedgerBalance(env: Env, entryGroupId: string): Promise<boolean> {
  const result = await env.D1.prepare(
    `SELECT 
      SUM(CASE WHEN direction = 'debit' THEN amount ELSE 0 END) as total_debit,
      SUM(CASE WHEN direction = 'credit' THEN amount ELSE 0 END) as total_credit
     FROM ledger_entries WHERE entry_group_id = ?`
  ).bind(entryGroupId).first<{ total_debit: number; total_credit: number }>();

  return result ? result.total_debit === result.total_credit : false;
}
```

---

## 4. WALLET RECALCULATION

```typescript
// Recalculate wallet buckets from ledger
async function recalculateWallet(env: Env, walletId: string): Promise<void> {
  const sums = await env.D1.prepare(
    `SELECT 
      account_code,
      SUM(CASE WHEN direction = 'debit' THEN amount ELSE 0 END) as debits,
      SUM(CASE WHEN direction = 'credit' THEN amount ELSE 0 END) as credits
     FROM ledger_entries l
     JOIN transactions t ON l.transaction_id = t.id
     WHERE l.wallet_id = ? AND t.status = 'confirmed'
     GROUP BY account_code`
  ).bind(walletId).all<{ account_code: string; debits: number; credits: number }>();

  // Map to wallet buckets
  // cash_confirmed = credits(liability_investor_cash_confirmed) - debits(...)
  // capital_committed = credits(liability_project_capital_committed)
  // etc.
}
```

---

## 5. IMMUTABILITY RULES

```
RULE 1: ledger_entries confirmed = NO DELETE
RULE 2: ledger_entries confirmed = NO UPDATE  
RULE 3: transactions confirmed = status only: confirmed → reversed
RULE 4: corrections via NEW reversal transaction
RULE 5: audit_log for every ledger write
RULE 6: balance check BEFORE commit
```

---

## 6. INDEXES FOR LEDGER PERFORMANCE

```sql
-- Already in migration
CREATE INDEX idx_ledger_group ON ledger_entries(entry_group_id);
CREATE INDEX idx_ledger_account ON ledger_entries(account_code);
CREATE INDEX idx_ledger_investor ON ledger_entries(investor_id, created_at DESC);
CREATE INDEX idx_ledger_project ON ledger_entries(project_id, created_at DESC);

-- Additional for reporting
CREATE INDEX idx_ledger_entity ON ledger_entries(legal_entity_id, account_code, created_at DESC);
CREATE INDEX idx_ledger_period ON ledger_entries(created_at DESC);
```

---

> **Implementation Status:** Schema ✅ | Functions ✅ | Validation ⏳ | Performance test ⏳
