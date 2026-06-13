# DAUTU_MUONNOI_LEDGER_AND_DOUBLE_ENTRY_IMPLEMENTATION_SPEC_2026

**Ngày:** 2026-06-12  
**Trạng thái:** Dev-ready implementation spec  
**Phạm vi:** `dautu.muonnoi.org`  
**Mục đích:** Khóa sổ cái đầu tư thành viên theo hướng append-only, double-entry, audit-first.  
**Lưu ý:** Không phải chuẩn mực kế toán pháp lý cuối. Accounting team phải chốt chart of accounts, tax treatment và month-end procedures trước khi go-live tiền thật.

---

## I. PHÁN QUYẾT CHÍNH

Tên chuẩn của module này là:

**Investment Member Ledger**  
**Sổ cái đầu tư thành viên**

### Không được gọi là:
- ví đầu tư tự do
- e-wallet
- cash wallet
- bank wallet
- crypto wallet
- ví rút tiền

### Mục tiêu đúng:
- ghi nhận tiền thật sau đối soát
- theo dõi vốn theo dự án
- theo dõi trạng thái phân bổ / sử dụng
- hiển thị chứng từ và báo cáo
- tạo audit trail
- tách tiền đầu tư khỏi credit tiêu dùng

---

## II. NGUYÊN TẮC KHÔNG THỎA HIỆP

1. **Append-only ledger**
2. **Confirmed entries không được edit / delete**
3. Sửa sai bằng **reversal transaction**
4. Mọi thay đổi phải có **audit log**
5. Mọi transaction phải có **idempotency_key**
6. Mọi dòng tiền phải gắn:
   - investor
   - project (nếu có)
   - legal entity
   - instrument
7. Không trộn tiền đầu tư với membership/payment consumer flow
8. Không trộn tiền giữa các dự án
9. Không có một trường `balance` duy nhất làm source of truth
10. Ledger là source of truth cho số dư hiển thị

---

## III. BUCKETS / SỐ DƯ PHẢI TÁCH RIÊNG

Không dùng một field `balance`.
Hệ thống phải tính từ ledger hoặc materialized read model theo các bucket sau.

### 3.1. `cash_pending`
Tiền đã được báo chuyển hoặc có tín hiệu nhận, nhưng kế toán chưa confirm.

### 3.2. `cash_confirmed`
Tiền đã đối soát xong ở tài khoản pháp nhân.

### 3.3. `capital_committed`
Khoản đã gắn vào dự án / cam kết theo dự án.

### 3.4. `capital_deployed`
Khoản đã được dự án sử dụng / hạch toán theo báo cáo.

### 3.5. `capital_unallocated`
Khoản đã nhận nhưng chưa phân bổ vào hạng mục cụ thể.

### 3.6. `platform_credit`
Credit nội bộ nếu chính sách cho phép.

**Quy tắc hiển thị bắt buộc:**
- không phải tiền mặt
- không mặc định rút được
- không tự động chuyển được
- không phải tiền gửi ngân hàng

### 3.7. `refund_pending`
Khoản đang chờ hoàn / hủy / điều chỉnh / reversal

### 3.8. `locked_amount`
Khoản bị khóa do mismatch, dispute, compliance review, legal hold, AML hold

---

## IV. TRANSACTION STATUS

Danh sách trạng thái chuẩn:

- `draft`
- `submitted`
- `payment_instruction_issued`
- `payment_reported`
- `pending_reconciliation`
- `confirmed`
- `allocated`
- `deployed`
- `reversed`
- `refund_pending`
- `refunded`
- `rejected`
- `locked`
- `cancelled`

**Quy tắc:**
- `confirmed` trở lên = immutable business record
- chuyển trạng thái phải có audit log
- `locked` không được unlock bởi cùng người tạo lock nếu không có dual control

---

## V. TRANSACTION TYPES

- `interest_submission`
- `commitment_created`
- `payment_instruction_issued`
- `bank_transfer_reported`
- `payment_confirmed`
- `capital_committed`
- `capital_allocated`
- `capital_deployed`
- `platform_credit_granted`
- `platform_credit_spent`
- `refund_requested`
- `refund_approved`
- `refund_executed`
- `manual_adjustment`
- `reversal`
- `legal_hold`
- `unlock`

**Lưu ý:**  
`manual_adjustment` không được dùng để sửa transaction confirmed theo kiểu overwrite. Nó chỉ là transaction mới có kiểm soát.

---

## VI. DOUBLE-ENTRY LOCK

Mỗi giao dịch tài chính thật phải tạo **ít nhất 2 dòng ledger** trong cùng `entry_group_id`.

### 6.1. Quy tắc cân bằng
- tổng `debit` = tổng `credit` trong mỗi `entry_group_id`
- currency phải đồng nhất trong `entry_group_id`
- amount > 0
- một transaction có thể tạo nhiều cặp entry, nhưng phải cân bằng tổng

### 6.2. Ví dụ chuẩn

**A. Nhận tiền đã đối soát**  
Debit `legal_entity_bank_clearing`  
Credit `investor_cash_confirmed`

**B. Phân bổ vào dự án**  
Debit `investor_cash_confirmed`  
Credit `project_capital_committed`

**C. Dự án sử dụng vốn**  
Debit `project_capital_committed`  
Credit `project_capital_deployed`

**D. Cấp platform credit**  
Debit `project_or_entity_credit_expense`  
Credit `investor_platform_credit`

**E. User dùng platform credit**  
Debit `investor_platform_credit`  
Credit `platform_service_revenue_or_offset`

**F. Reversal**  
Không sửa entry cũ. Tạo transaction mới đảo chiều:
- debit account cũ thành credit
- credit account cũ thành debit

---

## VII. DATA MODEL CHUẨN

### 7.1. `legal_entities`
- `id TEXT PRIMARY KEY`
- `name TEXT NOT NULL`
- `country TEXT NOT NULL`
- `entity_type TEXT NOT NULL`
- `registration_number TEXT`
- `tax_id TEXT`
- `status TEXT NOT NULL`
- `created_at TEXT NOT NULL`
- `updated_at TEXT NOT NULL`

### 7.2. `investors`
- `id TEXT PRIMARY KEY`
- `user_id TEXT NOT NULL`
- `investor_type TEXT NOT NULL`
- `country_of_residence TEXT NOT NULL`
- `nationality TEXT`
- `kyc_status TEXT NOT NULL`
- `kyb_status TEXT`
- `aml_status TEXT`
- `risk_profile_status TEXT NOT NULL`
- `investor_status TEXT NOT NULL`
- `created_at TEXT NOT NULL`
- `updated_at TEXT NOT NULL`

### 7.3. `projects`
- `id TEXT PRIMARY KEY`
- `slug TEXT UNIQUE NOT NULL`
- `name TEXT NOT NULL`
- `status TEXT NOT NULL`
- `primary_legal_entity_id TEXT NOT NULL`
- `investment_status TEXT NOT NULL`
- `currency_default TEXT NOT NULL`
- `created_at TEXT NOT NULL`
- `updated_at TEXT NOT NULL`

### 7.4. `investment_rooms`
- `id TEXT PRIMARY KEY`
- `project_id TEXT NOT NULL`
- `visibility_status TEXT NOT NULL`
- `legal_review_status TEXT NOT NULL`
- `accounting_review_status TEXT NOT NULL`
- `payment_enabled INTEGER NOT NULL DEFAULT 0`
- `created_at TEXT NOT NULL`
- `updated_at TEXT NOT NULL`

### 7.5. `investment_access`
- `id TEXT PRIMARY KEY`
- `investor_id TEXT NOT NULL`
- `project_id TEXT NOT NULL`
- `access_status TEXT NOT NULL`
- `approved_by TEXT`
- `approved_at TEXT`
- `created_at TEXT NOT NULL`
- `updated_at TEXT NOT NULL`
- `UNIQUE(investor_id, project_id)`

### 7.6. `payment_instructions`
- `id TEXT PRIMARY KEY`
- `investor_id TEXT NOT NULL`
- `project_id TEXT NOT NULL`
- `legal_entity_id TEXT NOT NULL`
- `instrument_code TEXT NOT NULL`
- `currency TEXT NOT NULL`
- `amount_approved INTEGER NOT NULL`
- `reference_code TEXT UNIQUE NOT NULL`
- `instruction_status TEXT NOT NULL`
- `expires_at TEXT`
- `issued_by TEXT NOT NULL`
- `issued_at TEXT NOT NULL`
- `created_at TEXT NOT NULL`

### 7.7. `transactions`
- `id TEXT PRIMARY KEY`
- `investor_id TEXT NOT NULL`
- `project_id TEXT`
- `legal_entity_id TEXT NOT NULL`
- `instrument_code TEXT NOT NULL`
- `payment_instruction_id TEXT`
- `transaction_type TEXT NOT NULL`
- `status TEXT NOT NULL`
- `currency TEXT NOT NULL`
- `amount INTEGER NOT NULL`
- `reference_code TEXT`
- `idempotency_key TEXT UNIQUE NOT NULL`
- `document_id TEXT`
- `created_by TEXT NOT NULL`
- `approved_by TEXT`
- `approved_at TEXT`
- `created_at TEXT NOT NULL`
- `updated_at TEXT NOT NULL`

**Minor unit rule:**
- VND = đồng
- USD = cents
- EUR = cents

### 7.8. `ledger_entries`
- `id TEXT PRIMARY KEY`
- `transaction_id TEXT NOT NULL`
- `entry_group_id TEXT NOT NULL`
- `account_code TEXT NOT NULL`
- `direction TEXT NOT NULL CHECK(direction IN ('debit','credit'))`
- `currency TEXT NOT NULL`
- `amount INTEGER NOT NULL CHECK(amount > 0)`
- `investor_id TEXT`
- `project_id TEXT`
- `legal_entity_id TEXT`
- `created_at TEXT NOT NULL`

**Constraint logic:**
- entry group phải cân bằng debit/credit
- confirmed ledger entries không delete
- corrections qua reversal transaction mới

### 7.9. `documents`
- `id TEXT PRIMARY KEY`
- `owner_type TEXT NOT NULL`
- `owner_id TEXT NOT NULL`
- `document_type TEXT NOT NULL`
- `storage_url TEXT NOT NULL`
- `hash_sha256 TEXT NOT NULL`
- `uploaded_by TEXT NOT NULL`
- `created_at TEXT NOT NULL`

### 7.10. `project_reports`
- `id TEXT PRIMARY KEY`
- `project_id TEXT NOT NULL`
- `report_period TEXT NOT NULL`
- `report_type TEXT NOT NULL`
- `summary TEXT NOT NULL`
- `capital_received INTEGER NOT NULL DEFAULT 0`
- `capital_allocated INTEGER NOT NULL DEFAULT 0`
- `capital_deployed INTEGER NOT NULL DEFAULT 0`
- `currency TEXT NOT NULL`
- `document_id TEXT`
- `status TEXT NOT NULL`
- `published_at TEXT`
- `created_at TEXT NOT NULL`

### 7.11. `audit_logs`
- `id TEXT PRIMARY KEY`
- `actor_id TEXT NOT NULL`
- `actor_role TEXT NOT NULL`
- `action TEXT NOT NULL`
- `target_type TEXT NOT NULL`
- `target_id TEXT NOT NULL`
- `before_json TEXT`
- `after_json TEXT`
- `ip_hash TEXT`
- `user_agent_hash TEXT`
- `created_at TEXT NOT NULL`

---

## VIII. READ MODEL / WALLET SUMMARY

UI member không được query raw ledger trực tiếp cho mọi màn hình.  
Nên có read model để hiển thị nhanh.

`member_wallet_summary` nên tính:
- total_confirmed
- total_pending
- total_committed
- total_allocated
- total_deployed
- total_platform_credit
- total_locked
- total_refund_pending

**Quy tắc:**
- read model chỉ là projection
- source of truth vẫn là `ledger_entries` + `transactions`

---

## IX. IMMUTABILITY ENFORCEMENT

### 9.1. Ở mức ứng dụng
Cấm:
- sửa amount của transaction confirmed
- đổi currency của transaction confirmed
- đổi project/entity của transaction confirmed
- xóa ledger entry confirmed

### 9.2. Ở mức database / guard
Bắt buộc có guard logic:
- không `UPDATE/DELETE` dòng `transactions.status IN ('confirmed','allocated','deployed','reversed','refunded')`
- không `DELETE` `ledger_entries`
- reversal phải là record mới

### 9.3. Snapshot
Bắt buộc có:
- end-of-day ledger export
- daily reconciliation snapshot hash
- monthly close snapshot

---

## X. RBAC CHO LEDGER

**Roles:**
- `member`
- `investor_pending`
- `investor_approved`
- `accounting_operator`
- `accounting_manager`
- `legal_reviewer`
- `project_manager`
- `admin`
- `super_admin`
- `auditor_readonly`

**Quyền:**
- `member`: chỉ xem dữ liệu của chính mình
- `investor_approved`: xem project room được duyệt
- `accounting_operator`: tạo draft reconciliation / upload docs
- `accounting_manager`: confirm / reject / approve reversal
- `legal_reviewer`: đặt legal hold / mở legal lane
- `project_manager`: upload report dự án
- `auditor_readonly`: xem audit / report / ledger read-only
- `super_admin`: không được tự approve giao dịch do chính mình tạo nếu không có dual control

---

## XI. DUAL CONTROL LOCK

Bắt buộc 2 người cho:
- approve payment instruction
- confirm received payment
- approve refund
- reverse confirmed transaction
- unlock legal hold
- publish investment report
- enable payment for project

**Quy tắc:**
- maker != checker
- checker != same session automation actor
- mọi approval phải vào audit log

---

## XII. MEMBER UI REQUIREMENTS

**Hiển thị được:**
- Tổng đã ghi nhận
- Đang chờ đối soát
- Đã cam kết theo dự án
- Đã phân bổ
- Đã sử dụng theo báo cáo
- Credit nội bộ khả dụng
- Khoản đang khóa / chờ xử lý
- Lịch sử ghi nhận theo thời gian

**Không hiển thị:**
- nút rút tiền ngay
- chuyển tiền cho người khác
- trade / sell
- guaranteed ROI
- estimated profit
- live yield

---

## XIII. LEDGER API v0.1

### Member
- `GET /api/member/wallet`
- `GET /api/member/ledger`
- `GET /api/member/reports`
- `GET /api/member/documents`

### Admin / Accounting
- `GET /api/admin/transactions`
- `POST /api/admin/transactions`
- `POST /api/admin/transactions/:id/confirm`
- `POST /api/admin/transactions/:id/reverse`
- `GET /api/admin/ledger`
- `GET /api/admin/audit-logs`

**Rules:**
- member APIs chỉ read-only
- confirmed write actions chỉ ở admin/accounting layer
- reversal không dùng endpoint update record confirmed

---

## XIV. TEST CASES BẮT BUỘC

1. Confirmed transaction không sửa được
2. Confirmed transaction không xóa được
3. Reversal tạo entry đảo chiều đúng
4. Entry group luôn cân bằng debit/credit
5. Sai reference code → không auto confirm
6. Locked amount không tính vào confirmed available
7. Platform credit không hiện như cash withdrawable
8. Project report reconcile đúng với ledger
9. Member không xem được transaction của người khác
10. Auditor readonly không thực hiện action mutation

---

## XV. GO / NO-GO CHO LEDGER

### GO khi:
- double-entry logic pass
- immutability pass
- audit log pass
- read model reconcile đúng
- reversal workflow pass
- RBAC pass
- dual control pass ở mock/internal mode

### NO-GO khi:
- còn edit/delete confirmed transaction
- còn `balance` field là source of truth duy nhất
- chưa có reversal flow
- chưa có audit trail
- platform credit wording gây hiểu nhầm là tiền mặt
- project report không reconcile được với ledger

---

**Kết luận chốt:**  
Bản này khóa phần ledger và double-entry ở mức đủ để team dev build core accounting-grade portal, nhưng chỉ được mở real-money sau khi accounting chart, SOP và legal instrument matrix được chốt cuối.
