# DAUTU.MUONNOI.ORG · WALLET LEDGER SPEC 2026

> **Investment Member Ledger** — Sổ cái đầu tư thành viên

---

## 1. MỤC TIÊU

Ví của `dautu.muonnoi.org` **không phải** ví tiền tự do, **không phải** ví crypto, **không phải** ví thanh toán đại chúng.

**Tên chuẩn:** Investment Member Ledger — Sổ cái đầu tư thành viên

**Mục tiêu:**
- ghi nhận tiền thật sau đối soát
- theo dõi khoản đầu tư theo dự án
- theo dõi trạng thái sử dụng vốn
- hiển thị chứng từ
- tạo audit trail
- tách tiền đầu tư khỏi credit tiêu dùng
- tránh hiểu nhầm đây là ví tiền có thể rút/chuyển tự do

---

## 2. NGUYÊN TẮC KẾ TOÁN

**Bắt buộc:**
- append-only ledger
- không sửa transaction đã confirmed
- correction bằng reversal entry
- mọi thay đổi có audit log
- mọi transaction có idempotency key
- mọi khoản tiền gắn với pháp nhân nhận tiền
- không trộn tiền giữa dự án
- không trộn tiền đầu tư với platform credit

---

## 3. LOẠI SỐ DƯ

Không dùng một trường `balance` duy nhất. Dùng các bucket:

### 3.1. `cash_pending`
Tiền user đã báo chuyển hoặc hệ thống đã nhận tín hiệu, nhưng kế toán chưa xác nhận.
Không được tính là vốn đã nhận chính thức.

### 3.2. `cash_confirmed`
Tiền đã đối soát thành công ở tài khoản pháp nhân.

### 3.3. `capital_committed`
Khoản tiền nhà đầu tư đã cam kết vào một dự án cụ thể.

### 3.4. `capital_deployed`
Khoản đã được dự án phân bổ/sử dụng theo báo cáo.

### 3.5. `capital_unallocated`
Khoản đã nhận nhưng chưa phân bổ vào hạng mục chi cụ thể.

### 3.6. `platform_credit`
Credit nội bộ có thể dùng cho dịch vụ/web nếu chính sách cho phép.
Không phải tiền mặt. Không mặc định rút được.

### 3.7. `refund_pending`
Khoản đang chờ hoàn, hủy, điều chỉnh hoặc reversal.

### 3.8. `locked_amount`
Khoản bị khóa do dispute, compliance review, chargeback, AML, sai thông tin, hoặc legal hold.

---

## 4. TRANSACTION STATUS

```
draft
submitted
payment_instruction_issued
payment_reported
pending_reconciliation
confirmed
allocated
deployed
reversed
refund_pending
refunded
rejected
locked
cancelled
```

---

## 5. TRANSACTION TYPES

```
interest_submission
commitment_created
payment_instruction_issued
bank_transfer_reported
payment_confirmed
capital_committed
capital_allocated
capital_deployed
platform_credit_granted
platform_credit_spent
refund_requested
refund_approved
refund_executed
manual_adjustment
reversal
legal_hold
unlock
```

---

## 6. DOUBLE-ENTRY LOGIC

Mỗi giao dịch tài chính thật phải ghi tối thiểu 2 dòng ledger.

### Ví dụ: nhận tiền đã đối soát
**Debit:** `legal_entity_bank_clearing`  
**Credit:** `investor_cash_confirmed`

### Ví dụ: phân bổ vào dự án
**Debit:** `investor_cash_confirmed`  
**Credit:** `project_capital_committed`

### Ví dụ: dự án sử dụng vốn
**Debit:** `project_capital_committed`  
**Credit:** `project_capital_deployed`

### Ví dụ: cấp platform credit
**Debit:** `project_or_entity_credit_expense`  
**Credit:** `investor_platform_credit`

### Ví dụ: user dùng platform credit
**Debit:** `investor_platform_credit`  
**Credit:** `platform_service_revenue_or_offset`

---

## 7. DATA MODEL

### 7.1. `legal_entities`

```sql
CREATE TABLE legal_entities (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  country TEXT NOT NULL,
  entity_type TEXT NOT NULL,
  registration_number TEXT,
  tax_id TEXT,
  status TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);
```

### 7.2. `investors`

```sql
CREATE TABLE investors (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  investor_type TEXT NOT NULL,
  country_of_residence TEXT NOT NULL,
  nationality TEXT,
  kyc_status TEXT NOT NULL,
  kyb_status TEXT,
  aml_status TEXT,
  risk_profile_status TEXT NOT NULL,
  investor_status TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);
```

### 7.3. `projects`

```sql
CREATE TABLE projects (
  id TEXT PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  status TEXT NOT NULL,
  primary_legal_entity_id TEXT NOT NULL,
  investment_status TEXT NOT NULL,
  currency_default TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);
```

### 7.4. `investment_rooms`

```sql
CREATE TABLE investment_rooms (
  id TEXT PRIMARY KEY,
  project_id TEXT NOT NULL,
  visibility_status TEXT NOT NULL,
  legal_review_status TEXT NOT NULL,
  accounting_review_status TEXT NOT NULL,
  payment_enabled INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);
```

### 7.5. `investment_access`

```sql
CREATE TABLE investment_access (
  id TEXT PRIMARY KEY,
  investor_id TEXT NOT NULL,
  project_id TEXT NOT NULL,
  access_status TEXT NOT NULL,
  approved_by TEXT,
  approved_at TEXT,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  UNIQUE(investor_id, project_id)
);
```

### 7.6. `payment_instructions`

```sql
CREATE TABLE payment_instructions (
  id TEXT PRIMARY KEY,
  investor_id TEXT NOT NULL,
  project_id TEXT NOT NULL,
  legal_entity_id TEXT NOT NULL,
  currency TEXT NOT NULL,
  amount_approved INTEGER NOT NULL,
  reference_code TEXT UNIQUE NOT NULL,
  instruction_status TEXT NOT NULL,
  expires_at TEXT,
  issued_by TEXT NOT NULL,
  issued_at TEXT NOT NULL,
  created_at TEXT NOT NULL
);
```

### 7.7. `transactions`

```sql
CREATE TABLE transactions (
  id TEXT PRIMARY KEY,
  investor_id TEXT NOT NULL,
  project_id TEXT,
  legal_entity_id TEXT NOT NULL,
  payment_instruction_id TEXT,
  transaction_type TEXT NOT NULL,
  status TEXT NOT NULL,
  currency TEXT NOT NULL,
  amount INTEGER NOT NULL,
  reference_code TEXT,
  idempotency_key TEXT UNIQUE NOT NULL,
  document_id TEXT,
  created_by TEXT NOT NULL,
  approved_by TEXT,
  approved_at TEXT,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);
```

**Amount lưu bằng minor unit:**
- VND: đồng
- USD: cents
- EUR: cents

### 7.8. `ledger_entries`

```sql
CREATE TABLE ledger_entries (
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
  created_at TEXT NOT NULL
);
```

**Constraint:**
- tổng debit = tổng credit cho mỗi `entry_group_id`
- không cho delete entry confirmed
- reversal bằng transaction mới

### 7.9. `documents`

```sql
CREATE TABLE documents (
  id TEXT PRIMARY KEY,
  owner_type TEXT NOT NULL,
  owner_id TEXT NOT NULL,
  document_type TEXT NOT NULL,
  storage_url TEXT NOT NULL,
  hash_sha256 TEXT NOT NULL,
  uploaded_by TEXT NOT NULL,
  created_at TEXT NOT NULL
);
```

### 7.10. `project_reports`

```sql
CREATE TABLE project_reports (
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
  status TEXT NOT NULL,
  published_at TEXT,
  created_at TEXT NOT NULL
);
```

### 7.11. `audit_logs`

```sql
CREATE TABLE audit_logs (
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
  created_at TEXT NOT NULL
);
```

---

## 8. RBAC

### Roles

```
public
member
investor_pending
investor_approved
accounting_operator
accounting_manager
legal_reviewer
project_manager
admin
super_admin
auditor_readonly
```

### Permissions

- **member:** xem dữ liệu của chính mình
- **investor_approved:** xem project room được duyệt
- **accounting_operator:** nhập đối soát draft
- **accounting_manager:** approve confirmed transaction
- **legal_reviewer:** mở legal lane
- **project_manager:** upload report dự án
- **auditor_readonly:** xem audit/log/report, không sửa
- **super_admin:** không được tự approve giao dịch do chính mình tạo nếu không có dual control

---

## 9. DUAL CONTROL

**Các hành động bắt buộc 2 người:**
- approve payment instruction
- confirm received payment
- approve refund
- reverse confirmed transaction
- unlock legal hold
- publish investment report
- enable payment for project

---

## 10. API ENDPOINTS v0.1

### Public
```
GET  /api/projects
GET  /api/projects/:slug
POST /api/interest
GET  /api/risk-disclosure
```

### Member
```
GET  /api/member/profile
POST /api/member/investor-profile
GET  /api/member/projects
POST /api/member/projects/:id/request-access
GET  /api/member/wallet
GET  /api/member/ledger
GET  /api/member/reports
GET  /api/member/documents
```

### Payment Instruction
```
POST /api/member/projects/:id/request-payment-instruction
GET  /api/member/payment-instructions
GET  /api/member/payment-instructions/:id
```

### Admin
```
GET  /api/admin/investors
POST /api/admin/investors/:id/approve
GET  /api/admin/payment-instructions
POST /api/admin/payment-instructions/:id/approve
GET  /api/admin/reconciliation
POST /api/admin/transactions/:id/confirm
POST /api/admin/transactions/:id/reverse
GET  /api/admin/ledger
GET  /api/admin/audit-logs
POST /api/admin/project-reports
POST /api/admin/project-reports/:id/publish
```

---

## 11. MEMBER WALLET UI

**Hiển thị:**
- Tổng đã ghi nhận
- Đang chờ đối soát
- Đã cam kết theo dự án
- Đã phân bổ
- Đã sử dụng theo báo cáo
- Credit nội bộ khả dụng
- Khoản đang khóa/chờ xử lý

**Không hiển thị:**
- Rút tiền ngay
- Chuyển tiền cho người khác
- Trade
- ROI guaranteed
- Expected profit

---

## 12. PROJECT REPORT UI

Mỗi dự án hiển thị:
- vốn đã nhận
- vốn đã phân bổ
- vốn đã sử dụng
- hạng mục sử dụng
- mốc dự án
- báo cáo PDF
- cập nhật founder
- rủi ro mới
- thay đổi kế hoạch
- chứng từ nếu được phép xem

---

## 13. ACCOUNTING WORKFLOW

### Payment Received
1. Admin nhập bank statement item.
2. Hệ thống match reference code.
3. Accounting operator tạo draft transaction.
4. Accounting manager review.
5. Nếu đúng, confirm.
6. Hệ thống ghi ledger.
7. Member nhìn thấy confirmed entry.

### Payment Mismatch
Nếu sai số tiền/reference:
- status `locked`
- yêu cầu manual review
- không ghi capital committed
- thông báo user

### Refund
Refund chỉ sau:
- legal approval
- accounting approval
- entity approval
- audit log
- reversal entry

---

## 14. SECURITY REQUIREMENTS

**Bắt buộc:**
- TLS
- session security
- RBAC
- 2FA/passkey cho admin
- audit log immutable
- no public bank details
- CSP
- no secret in frontend
- encrypted document storage
- signed document hash
- rate limit
- IP/device risk signal cho admin
- daily export backup

---

## 15. ACCEPTANCE GATES

### Static Gate
- no forbidden CTA
- no public bank details
- no ROI promise
- no public investment round unless legal approved

### Member Gate
- user must login
- investor profile completed
- risk accepted
- project access approved

### Payment Gate
- payment instruction only after approval
- instruction has expiry
- instruction has reference code
- source from verified `pay.iai.one` record

### Ledger Gate
- all confirmed transactions balanced
- no edit/delete confirmed entries
- reversal only
- audit log created

### Report Gate
- project report has approver
- capital numbers reconcile with ledger
- report is immutable after publish

---

## 16. DEV IMPLEMENTATION PHASES

### Phase 1 — Safe Static + Interest
- public pages
- project cards
- interest form
- risk disclosure
- no payment

### Phase 2 — Member + Investor Profile
- auth
- profile
- investor status
- project access request

### Phase 3 — Ledger Read Model
- wallet UI
- ledger schema
- read-only history
- admin manual transaction creation

### Phase 4 — Payment Instruction Gate
- instruction request
- admin approval
- no public bank leak

### Phase 5 — Reconciliation
- accounting review
- confirm transaction
- ledger double-entry
- document upload

### Phase 6 — Reporting
- project report
- capital use reporting
- member dashboard

### Phase 7 — Hardening
- legal review
- accounting audit
- security audit
- penetration test
- disaster recovery

**Chỉ deploy real-money flow khi Phase 7 GO.**

---

> **Trạng thái tài liệu:** LEDGER_SPEC · INTERNAL_USE · DO_NOT_CLAIM_LEGAL_REVIEWED · NOT_A_PUBLIC_SECURITIES_OFFERING_DOCUMENT
