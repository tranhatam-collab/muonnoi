# DAUTU_MUONNOI_PAYMENT_INSTRUCTION_AND_RECONCILIATION_POLICY_2026

**Ngày:** 2026-06-12  
**Trạng thái:** Dev-ready policy  
**Phạm vi:** `dautu.muonnoi.org` + `pay.iai.one` integration boundary  
**Mục đích:** Khóa payment instruction gate, reconciliation workflow, mismatch/refund/reversal policy.  
**Lưu ý:** Đây là policy triển khai nội bộ. Không thay thế hướng dẫn của luật sư, kế toán, kiểm toán hoặc compliance officer.

---

## I. PHÁN QUYẾT CHÍNH

Từ bản này trở đi:

### 1. Public page không bao giờ được hiển thị thông tin thanh toán thật
Không public:
- bank account
- QR
- transfer memo tự do
- payment link tự do
- “đầu tư ngay”

### 2. Payment instruction chỉ là tài liệu giao dịch đã phê duyệt
Một `payment_instruction` chỉ được tạo và hiển thị khi:
- investor phù hợp
- project phù hợp
- legal lane approved
- accounting lane approved
- entity receiver đã được map
- source instruction lấy từ hồ sơ đã kiểm chứng trong `pay.iai.one`

### 3. Reconciliation là bước bắt buộc trước ledger confirm
Không có chuyện:
- user báo đã chuyển tiền
- hệ thống auto tăng số dư
- ledger tự confirmed không qua đối soát

---

## II. PAYMENT INSTRUCTION GATE

### 2.1. Điều kiện để user được request payment instruction
User phải:
- đăng nhập
- verified basic account
- investor profile completed
- risk accepted
- được project/lane approve ít nhất ở mức phù hợp
- không bị legal hold / AML hold / lock

### 2.2. Điều kiện để admin phát hành instruction
Admin/manager chỉ được issue instruction khi:
- project có `payment_enabled = 1`
- legal entity receiver được phê duyệt
- instrument phù hợp đã được map
- amount được approved
- currency được approved
- expiry được set
- reference code được sinh duy nhất
- checker khác maker nếu policy yêu cầu

### 2.3. Nội dung payment instruction
Phải có:
- `instruction_id`
- `investor_id`
- `project_id`
- `legal_entity_id`
- `instrument_code`
- `currency`
- `amount_approved`
- `reference_code`
- `expires_at`
- `warning_text`
- `issued_by`
- `issued_at`

**Warning text bắt buộc:**
- chỉ chuyển đúng tài khoản được hiển thị trong instruction đã phê duyệt
- không chuyển nếu instruction hết hạn
- không chuyển nếu số tiền/currency/reference khác instruction
- hệ thống không ghi nhận thanh toán gửi sai tài khoản / sai reference
- đây không phải giao dịch public self-serve

---

## III. SOURCE OF TRUTH — PAY.IAI.ONE

**Quy tắc:**
1. `dautu.muonnoi.org` không được hard-code bank account trong frontend.
2. Thông tin thanh toán chỉ lấy từ record đã kiểm chứng trong `pay.iai.one`.
3. `pay.iai.one` phải được xem là source of truth cho:
   - receiver identity
   - payment rail
   - account destination
   - reference pattern
   - instruction validity
4. Nếu `pay.iai.one` không trả record verified → không mở instruction.

**Trạng thái gợi ý từ pay layer:**
- `verified`
- `active`
- `inactive`
- `suspended`
- `expired`
- `legal_hold`

**No-go:**  
Nếu record payment receiver không ở trạng thái verified + active, instruction không được issue.

---

## IV. REFERENCE CODE POLICY

**Bắt buộc:**
- unique toàn hệ theo instruction
- đủ dài, khó đoán
- gắn được với investor + project + instrument nhưng không lộ toàn bộ logic nội bộ

**Quy tắc:**
- 1 instruction = 1 reference code
- không tái sử dụng reference code cũ cho payment mới
- expired instruction không tái sử dụng reference cũ
- reference mismatch → vào manual review / locked

**Gợi ý format:**  
`MN-{project_short}-{YYYYMM}-{random}`

Không encode trực tiếp thông tin nhạy cảm.

---

## V. PAYMENT STATES

### Instruction states
- `draft`
- `pending_approval`
- `issued`
- `expired`
- `cancelled`
- `fulfilled`
- `locked`

### Payment reporting / reconciliation states
- `payment_reported`
- `pending_reconciliation`
- `matched`
- `mismatched`
- `confirmed`
- `rejected`
- `locked`
- `refund_pending`
- `refunded`

---

## VI. ACCOUNTING RECONCILIATION WORKFLOW

### Step 1 — Payment reported
Nguồn có thể từ:
- user upload proof / report
- banking import
- manual accounting entry

**Dữ liệu tối thiểu:**
- sender name
- amount
- currency
- payment date
- bank statement line / proof
- reference code
- receiving entity
- project (nếu match được)

**Sau bước này:**
- tạo `transaction` ở trạng thái `payment_reported` hoặc `pending_reconciliation`
- chưa tăng `cash_confirmed`

### Step 2 — Match attempt
Hệ thống / accounting cố match theo:
1. exact reference code
2. exact amount
3. exact currency
4. đúng entity receiver
5. đúng instruction đang active hoặc chưa expired trong khung chấp nhận

**Kết quả:**
- `matched`
- `mismatched`
- `locked`

### Step 3 — Accounting draft
`accounting_operator` tạo draft reconciliation:
- gắn `payment_instruction_id`
- gắn `legal_entity_id`
- gắn `project_id`
- gắn `instrument_code`
- attach `document_id`
- set `status = pending_reconciliation`

**Quy tắc:**  
operator chỉ tạo draft, không tự confirm final.

### Step 4 — Manager review
`accounting_manager` review:
- reference
- amount
- currency
- sender
- entity
- project
- instruction validity
- document proof
- legal/accounting restrictions nếu có

**Kết quả:**
- `confirmed`
- `rejected`
- `locked`
- `requires_more_info`

### Step 5 — Ledger posting
Chỉ sau confirm:
- transaction status → `confirmed`
- double-entry ledger được ghi
- member dashboard được update
- audit log được tạo

**Không bao giờ:**
- ghi ledger confirmed trước manager approval
- expose confirmed balance trước reconciliation hoàn tất

---

## VII. PAYMENT MISMATCH POLICY

**Ví dụ mismatch:**
- sai reference
- thiếu reference
- sai amount
- sai currency
- sai entity receiver
- instruction hết hạn
- sender name không khớp ở mức đáng ngờ
- suspected duplicate payment

**Xử lý:**
1. set `status = locked` hoặc `mismatched`
2. không tạo `cash_confirmed`
3. không tạo `capital_committed`
4. tạo case note trong admin
5. yêu cầu manual review / investor clarification

**Chỉ sau clear:**
- mới được tiếp tục reconcile
- hoặc reject / refund workflow nếu cần

---

## VIII. REFUND POLICY

### Refund không được tự động
Refund chỉ được xử lý sau:
- legal approval (khi cần)
- accounting approval
- entity approval nếu policy yêu cầu
- audit log
- reversal entry

**Refund states**
- `refund_requested`
- `refund_under_review`
- `refund_approved`
- `refund_executed`
- `refund_rejected`

**Bắt buộc:**
- không overwrite transaction gốc
- refund = transaction mới + reversal / offset entries
- attach chứng từ hoàn tiền nếu có

---

## IX. REVERSAL POLICY

### Reversal dùng khi:
- confirm sai
- mapping sai project/entity
- accounting correction cần đảo giao dịch
- compliance/legal hold yêu cầu đảo ghi nhận

**Quy tắc:**
- reversal phải do transaction mới thực hiện
- maker và checker khác nhau
- transaction gốc vẫn giữ nguyên lịch sử
- member UI phải thể hiện rõ record cũ + reversal, không “biến mất”

---

## X. SLA / ESCALATION

**Đề xuất SLA:**
- `payment_reported` → `pending_reconciliation`: trong 1 ngày làm việc
- `pending_reconciliation` → `confirmed/rejected/locked`: trong 2 ngày làm việc
- `mismatch/locked` → first response: trong 2 ngày làm việc
- `refund_requested` → initial review: trong 3 ngày làm việc

**Escalation:**
- quá SLA 1: nhắc accounting operator
- quá SLA 2: escalate accounting manager
- legal/compliance case: escalate legal reviewer
- stale instruction + unresolved payment: auto lock case

---

## XI. PAYMENT INSTRUCTION UI POLICY

### Member được thấy:
- instruction status
- approved amount
- currency
- reference code
- expiry
- warnings
- instruction issue date
- payment reported status
- reconciliation status

### Member không được thấy nếu chưa đủ gate:
- bank details thật
- raw settlement details
- alternative accounts
- manual bypass instructions

### Trước khi được approve:
Trang `/member/payment-instructions` chỉ hiển thị:
- vì sao đang khóa
- cần làm gì tiếp theo
- trạng thái eligibility / review

---

## XII. ADMIN UI POLICY

### Admin views bắt buộc:
- instruction queue
- reconciliation queue
- mismatch / locked queue
- refund queue
- reversal queue
- aging dashboard

### Mỗi record phải thấy:
- maker
- checker
- created_at
- updated_at
- source document
- linked transaction(s)
- linked ledger entry group(s)
- audit trail

---

## XIII. API v0.1

### Member
- `POST /api/member/projects/:id/request-payment-instruction`
- `GET /api/member/payment-instructions`
- `GET /api/member/payment-instructions/:id`

### Admin / Accounting
- `GET /api/admin/payment-instructions`
- `POST /api/admin/payment-instructions/:id/approve`
- `GET /api/admin/reconciliation`
- `POST /api/admin/transactions/:id/confirm`
- `POST /api/admin/transactions/:id/reverse`
- `POST /api/admin/refunds/:id/approve`
- `POST /api/admin/refunds/:id/execute`

**Rules:**
- no member-side confirm endpoint
- no public payment endpoint
- no auto-confirm endpoint exposed without auth + role check

---

## XIV. TEST CASES BẮT BUỘC

1. User chưa approved → không thấy instruction thật
2. Approved user → thấy instruction đúng project/entity
3. Expired instruction → không dùng lại được
4. Sai amount → mismatch
5. Sai reference → locked
6. Confirm thành công → ledger post đúng
7. Confirm sai → reversal workflow chạy được
8. Refund không thể execute nếu chưa approve
9. Bank detail không rò ở public HTML
10. `pay.iai.one` record không verified → instruction không issue

---

## XV. GO / NO-GO

### GO khi:
- pay source-of-truth mapping ready
- instruction UI gate ready
- reconciliation draft / confirm / lock flow pass
- mismatch policy pass
- reversal / refund flow pass
- no public bank details
- dual control mock pass

### NO-GO khi:
- bank details còn lộ công khai
- instruction hard-code trong frontend
- payment confirm không qua accounting manager
- mismatch vẫn được auto confirm
- refund overwrite record cũ
- reversal không audit được

---

**Kết luận chốt:**  
Bản này khóa payment instruction và reconciliation theo hướng legal-safe, accounting-safe, không public self-serve. Team dev chỉ được mở real-money sau khi `pay.iai.one`, accounting SOP và dual control được chốt xong.
