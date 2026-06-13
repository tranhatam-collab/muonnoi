# DAUTU_MUONNOI_REAL_MONEY_GO_LIVE_GATES_2026

**Ngày:** 2026-06-12  
**Trạng thái:** Go-live gates lock  
**Phạm vi:** `dautu.muonnoi.org`  
**Mục đích:** Khóa toàn bộ điều kiện GO / NO-GO trước khi mở nhận tiền thật.  
**Lưu ý:** Đây là gate nội bộ bắt buộc cho Dev / Legal / Accounting / Founder. Không có gate nào được “coi như pass” nếu chưa có bằng chứng.

---

## I. PHÁN QUYẾT CHÍNH

`dautu.muonnoi.org` được phép build portal ngay.

Nhưng:

**Không được mở real-money flow**  
cho tới khi toàn bộ gate dưới đây đều **PASS có bằng chứng**.

### Câu khóa:
- Build portal: **GO**
- Build member layer: **GO**
- Build ledger core: **GO**
- Build payment instruction gate ở trạng thái khóa: **GO**
- Nhận tiền thật / show bank details / confirm ledger capital: **NO-GO** cho đến khi pass toàn bộ gate

---

## II. 4 NHÓM GATE LỚN

1. **Legal Gates**
2. **Accounting & Ledger Gates**
3. **Product & Security Gates**
4. **Operational Evidence Gates**

Chỉ khi cả 4 nhóm đều PASS thì mới được bật production real-money flow.

---

## III. LEGAL GATES

### L-1. Legal Entity Matrix Approved
Phải có:
- danh sách entity receiver hợp lệ
- vai trò từng entity
- country scope
- status hoạt động
- người phê duyệt cuối

**Evidence bắt buộc:**
- file legal entity matrix
- founder sign-off
- legal reviewer sign-off

### L-2. Capital Instrument Matrix Approved
Phải có:
- loại giao dịch được phép
- quốc gia áp dụng
- loại investor phù hợp
- entity receiver
- accounting treatment
- refund policy
- reporting obligation

**Evidence:**
- matrix file versioned
- legal sign-off
- accounting sign-off

### L-3. Risk Disclosure Approved
Phải có:
- public risk disclosure
- member risk acknowledgement
- deal room risk pack

**Evidence:**
- final legal copy
- production screenshot / content file path
- approval record

### L-4. Jurisdiction Review Complete
Phải xác định rõ:
- quốc gia nào được mở
- quốc gia nào bị chặn
- lane nào được xem gì
- jurisdiction nào cần hold/manual review

**Evidence:**
- country rules matrix
- legal reviewer note
- implementation proof trong code/config

### L-5. No Public Securities-Style Leak
Phải xác minh:
- không public ROI
- không public valuation / equity / term sheet
- không CTA “Đầu tư ngay”
- không public bank details

**Evidence:**
- grep report
- page screenshots
- reviewer sign-off

---

## IV. ACCOUNTING & LEDGER GATES

### A-1. Chart of Accounts Approved
Phải có:
- account codes cho cash pending / confirmed / committed / deployed / credit / locked / refund
- debit/credit mapping theo transaction type

**Evidence:**
- chart file
- accounting sign-off

### A-2. Double-Entry Logic Pass
Phải xác minh:
- every entry group balanced
- confirmed transaction post đúng
- no single-sided entry

**Evidence:**
- automated test pass
- sample transactions
- reconciliation screenshot/log

### A-3. Confirmed Immutability Pass
Phải xác minh:
- confirmed transaction không edit được
- confirmed transaction không delete được
- reversal transaction hoạt động

**Evidence:**
- test output
- policy doc
- code path / migration / trigger proof

### A-4. Reconciliation SOP Approved
Phải có:
- maker/checker flow
- mismatch handling
- refund flow
- reversal flow
- lock/unlock flow
- SLA

**Evidence:**
- signed SOP
- admin flow screenshots
- dry-run record

### A-5. Period Close / Snapshot Ready
Phải có:
- daily export
- snapshot hash
- month-end close rule
- restore test plan

**Evidence:**
- backup job config
- export example
- DR note

---

## V. PRODUCT & SECURITY GATES

### P-1. Public / Member / Deal Room Separation Pass
Phải xác minh:
- public không thấy member/private content
- project room tách deal room
- member chưa approved không thấy payment instruction thật

**Evidence:**
- route matrix
- screenshots theo role
- auth tests

### P-2. RBAC Pass
Phải xác minh:
- member chỉ xem dữ liệu của mình
- accounting/operator/manager/legal/auditor tách quyền rõ
- super admin không bypass dual control một cách nguy hiểm

**Evidence:**
- role matrix
- API tests
- UI screenshots

### P-3. Dual Control Pass
Phải xác minh 2 người khác nhau cho:
- approve payment instruction
- confirm payment
- approve refund
- reverse confirmed transaction
- unlock legal hold
- publish project report

**Evidence:**
- test records
- audit logs
- reviewer sign-off

### P-4. Payment Source-of-Truth Pass
Phải xác minh:
- payment details chỉ lấy từ `pay.iai.one`
- không hard-code account trong frontend
- instruction không issue nếu source không verified

**Evidence:**
- integration doc
- config path
- negative test pass

### P-5. Security Hardening Pass
Bắt buộc:
- TLS
- secure session
- admin 2FA/passkey
- CSP
- no secret in frontend
- rate limit
- document storage protection
- audit logs enabled

**Evidence:**
- curl / headers
- secret scan
- admin auth screenshots
- security checklist signed

---

## VI. OPERATIONAL EVIDENCE GATES

### O-1. No Public Bank Leak
**Evidence:**
- grep report
- manual browser audit
- source scan
- screenshot proof

### O-2. No Forbidden CTA
Không có:
- đầu tư ngay
- mua cổ phần
- góp vốn ngay
- nhận ROI
- đặt suất đầu tư
- chuyển khoản đầu tư

**Evidence:**
- grep report
- public UI screenshots

### O-3. Instruction Locked UI Verified
Trước approval, `/member/payment-instructions` phải chỉ hiển thị locked state.

**Evidence:**
- member pending screenshot
- approved screenshot
- route auth result

### O-4. End-to-End Dry Run Pass
Dry run phải đi qua:
1. public interest
2. member registration
3. investor profile
4. project access request
5. project room access
6. payment instruction request
7. admin approval
8. payment reported
9. reconciliation
10. confirm ledger
11. member sees confirmed record
12. project report publish

**Evidence:**
- dry run checklist
- screenshots/logs
- audit trail export

### O-5. Incident / Rollback Procedure Ready
Phải có:
- pause payment flow switch
- disable project payment switch
- lock investor/project flow
- rollback communication template
- incident owner list

**Evidence:**
- runbook
- admin control screenshots
- test of pause switch

---

## VII. PASS / FAIL RULE

### PASS
Chỉ được đánh PASS khi có:
- file/path cụ thể
- screenshot / curl / test output / audit log
- owner sign-off
- reviewer sign-off nếu cần

### FAIL
FAIL nếu:
- “đã làm rồi” nhưng không có bằng chứng
- còn TODO
- còn mock mà lại ghi production-ready
- còn hard-code payment
- còn public bank details
- còn thiếu legal/accounting reviewer
- còn self-serve investment flow

### Rule:
**Không có bằng chứng = chưa PASS**

---

## VIII. DEPLOYMENT STAGES

### Stage 1 — Safe Public
Được deploy:
- homepage
- project pages
- interest form
- risk / legal / process / faq
- no payment

### Stage 2 — Member Beta
Được deploy:
- auth
- investor profile
- project access request
- wallet summary read-only
- locked payment instruction UI

### Stage 3 — Internal Real-Money Dry Run
Chỉ internal:
- payment instruction issue
- reconciliation
- ledger posting
- reporting
- dual control
- no public roll-out

### Stage 4 — Limited Go-Live
Chỉ khi pass tất cả gate:
- select projects only
- select jurisdictions only
- select investor types only
- enhanced monitoring
- incident response ready

---

## IX. GO / NO-GO CHECKLIST TÓM TẮT

### GO cho build portal nếu:
- kiến trúc portal locked
- member flow locked
- ledger spec locked
- payment gate locked
- no public bank details

### NO-GO cho nhận tiền thật nếu thiếu bất kỳ mục nào:
- legal entity matrix
- capital instrument matrix
- jurisdiction review
- chart of accounts
- reconciliation SOP
- double-entry pass
- immutability pass
- dual control pass
- pay source-of-truth pass
- E2E dry run
- incident rollback plan

---

## X. FOUNDER SIGN-OFF RULE

Chỉ được mở real-money production nếu có đủ:
- Founder approval
- Legal reviewer approval
- Accounting reviewer approval
- Security / ops approval
- Evidence checklist complete

Không một team nào được tự ý bỏ qua gate vì lý do deadline hoặc “cần test live”.

---

**Kết luận chốt:**  
Bản này là khóa GO / NO-GO cuối cùng cho `dautu.muonnoi.org`. Team dev được làm portal ngay, nhưng real-money flow chỉ được mở khi toàn bộ gate pháp lý, kế toán, ledger, security và bằng chứng vận hành đều PASS.
