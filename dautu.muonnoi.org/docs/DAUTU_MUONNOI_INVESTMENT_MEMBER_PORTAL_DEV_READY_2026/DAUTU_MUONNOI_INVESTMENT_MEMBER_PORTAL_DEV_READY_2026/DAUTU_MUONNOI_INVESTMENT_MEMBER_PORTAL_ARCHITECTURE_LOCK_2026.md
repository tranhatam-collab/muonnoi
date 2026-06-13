# DAUTU_MUONNOI_INVESTMENT_MEMBER_PORTAL_ARCHITECTURE_LOCK_2026

**Ngày:** 2026-06-12  
**Trạng thái:** Dev-ready architecture lock  
**Phạm vi:** `dautu.muonnoi.org`  
**Mục đích:** Khóa kiến trúc gốc cho Investment Member Portal dùng chung cho các dự án trong hệ Muôn Nơi.  
**Lưu ý:** Đây là tài liệu triển khai cho Dev / Product / Legal / Accounting. Không phải ý kiến pháp lý, thuế, kế toán hoặc đầu tư được cấp phép.

---

## I. PHÁN QUYẾT CHIẾN LƯỢC

`dautu.muonnoi.org` không còn được xem là landing page đơn thuần.

Từ bản này trở đi, hệ đúng phải là:

**Public Interest Portal**  
→ **Member Registration**  
→ **Investor Profile & Eligibility Review**  
→ **Project Room**  
→ **Deal Room**  
→ **Payment Instruction Gate**  
→ **Investment Ledger**  
→ **Reporting & Audit**

### Không được vận hành như:
- trang bán cổ phần công khai
- crowdfunding tự do
- self-serve investment app
- ví thanh toán mở
- ví crypto
- cổng nhận tiền công khai
- công cụ hứa ROI, cổ tức, hoàn vốn, thanh khoản

### Cách hiểu đúng:
- **Public layer** chỉ để giới thiệu dự án, giải thích rủi ro, nhận quan tâm
- **Member layer** mới mở hồ sơ dự án sâu hơn
- **Investor review layer** quyết định ai được xem gì
- **Deal room** chỉ mở khi đủ điều kiện
- **Ledger** là sổ cái đầu tư thành viên, không phải ví tiêu dùng

---

## II. SẢN PHẨM 5 LỚP BẮT BUỘC

### 2.1. Public Layer

**Route:**
- `/`
- `/projects`
- `/legal`
- `/risk`
- `/process`
- `/faq`
- `/interest`

**Mục tiêu:**
- giới thiệu hệ dự án
- trình bày posture và governance
- giải thích lane
- tiếp nhận interest
- không nhận tiền

**Được phép:**
- hiển thị dự án
- hiển thị tầm nhìn
- hiển thị process
- hiển thị legal disclosure
- cho gửi form quan tâm

**Không được phép:**
- public số tài khoản
- public QR thanh toán
- public ROI / định giá / cổ phần
- public term sheet
- public payment instruction
- cho self-serve payment

### 2.2. Member Layer

**Route:**
- `/member`
- `/member/profile`
- `/member/kyc`
- `/member/projects`
- `/member/projects/:projectId`
- `/member/wallet`
- `/member/ledger`
- `/member/reports`
- `/member/documents`
- `/member/payment-instructions`
- `/member/review-status`
- `/member/eligibility`
- `/member/risk-profile`

**Điều kiện mở:**
- user đã đăng nhập
- email/phone verified
- profile thành viên cơ bản hoàn tất
- investor profile hoàn tất ở mức phù hợp
- risk acknowledgement đã chấp nhận
- đã được project/lane mở quyền tương ứng

**Mục tiêu:**
- cho user xem dữ liệu của chính mình
- nộp hồ sơ đầu tư
- xin quyền xem project room
- xem trạng thái review
- xem ledger read-only
- xem báo cáo được phép xem
- xem payment instruction chỉ sau khi được duyệt

### 2.3. Investor Review Layer

**Chức năng:**
- phân loại cá nhân / doanh nghiệp / quỹ
- xác định quốc gia cư trú / pháp nhân liên quan
- kiểm legal lane phù hợp
- kiểm KYC / KYB / AML khi áp dụng
- xác định level access
- quyết định mở project room hay deal room

**Trạng thái đề xuất:**
- `draft`
- `profile_incomplete`
- `submitted`
- `pending_review`
- `requires_more_info`
- `legal_review`
- `accounting_review`
- `approved_project_room`
- `approved_deal_room`
- `payment_eligible`
- `rejected`
- `locked`

### 2.4. Deal Room Layer

**Route:**
- `/member/deal-room/:projectId`

**Chỉ mở khi:**
- investor được approved
- project được approved cho lane này
- legal lane approved
- accounting lane approved nếu có payment
- NDA / acknowledgement / risk acceptance đã hoàn tất nếu cần

**Có thể chứa:**
- pitch deck
- project memo
- financial model
- legal documents
- risk disclosure
- payment instruction
- signed agreements
- reporting schedule

**Không mở nếu chưa đủ:**
- jurisdiction clearance
- investor suitability
- entity routing
- payment lane approval

### 2.5. Admin / Accounting / Legal Layer

**Route:**
- `/admin`
- `/admin/investors`
- `/admin/projects`
- `/admin/transactions`
- `/admin/reconciliation`
- `/admin/reports`
- `/admin/audit`
- `/admin/legal-review`

**Bắt buộc:**
- private only
- RBAC
- audit log immutable
- dual control cho các hành động nhạy cảm

---

## III. LEGAL ENTITY MATRIX — KHÓA Ở MỨC KIẾN TRÚC

Các pháp nhân và vai trò phải được map rõ trong code và database. Không được để UI hoặc admin nhập tùy ý.

**Entity roles hiện dùng trong kiến trúc:**
- điều phối quốc tế
- đại diện thanh toán / vận hành trong nước
- đơn vị phát triển / kêu gọi / đồng phát triển dự án

**Quy tắc:**
1. Mỗi `project` phải có `primary_legal_entity_id`.
2. Mỗi `payment_instruction` phải gắn `legal_entity_id`.
3. Mỗi `transaction` confirmed phải gắn đúng `legal_entity_id`.
4. Không được chuyển tiền vào entity không được map trong hệ.
5. Không được dùng “một tài khoản chung cho mọi dự án” ở tầng product logic.

---

## IV. CAPITAL INSTRUMENT MATRIX — BẮT BUỘC THÊM

Trước khi mở real-money flow, phải có bảng loại giao dịch chuẩn.

**Bảng đề xuất:**
- `instrument_code`
- `instrument_name`
- `instrument_type`
- `allowed_countries`
- `eligible_investor_types`
- `legal_entity_receiver`
- `public_allowed`
- `deal_room_required`
- `lawyer_signoff_required`
- `accounting_treatment`
- `refund_policy`
- `reporting_obligation`

**Mục đích:**
- tránh trộn tài trợ, hợp tác, commitment, capital contribution, service prepayment
- tránh mỗi admin hiểu một kiểu
- để legal/accounting/dev dùng chung một source of truth

---

## V. PROJECT MODEL

Mỗi dự án trong hệ Muôn Nơi phải có investment room riêng.

**Ví dụ:**
- Kết Nối Muôn Nơi
- Plays Muôn Nơi
- Đường Muôn Nơi
- Cuộc Sống Muôn Nơi
- Người Việt Muôn Nơi
- Family Muôn Nơi
- Học Tập Muôn Nơi
- Làm Việc Muôn Nơi
- Nhà Chung Muôn Nơi
- các dự án mới

**Trạng thái dự án chuẩn:**
- `draft_plan`
- `founder_review_ready`
- `legal_review_required`
- `accounting_review_required`
- `build_started`
- `pilot_preparing`
- `pilot_live`
- `investment_interest_open`
- `legal_investment_review`
- `investment_round_open`
- `closed`

**Quy tắc:**  
Chỉ được dùng `investment_round_open` khi có legal approval tương ứng.

---

## VI. USER FLOW CHUẨN

### Step 1 — Public Interest
User gửi form:
- họ tên
- email
- số điện thoại
- quốc gia cư trú
- loại người quan tâm
- dự án quan tâm
- mức quan tâm dự kiến
- risk acknowledgement
- xác nhận đây chưa phải giao dịch đầu tư

### Step 2 — Member Registration
- email
- phone
- password/passkey
- country
- consent
- privacy acknowledgement

### Step 3 — Investor Profile
- investor type
- country of residence
- nationality
- source of funds
- risk tolerance
- preferred currency
- related legal entity nếu là doanh nghiệp/quỹ

### Step 4 — Eligibility Review
Hệ thống + admin kiểm:
- jurisdiction
- investor type
- legal lane
- KYC / KYB / AML
- project access scope
- instrument suitability

### Step 5 — Project Room Access
User được xem:
- project overview
- risk disclosure
- use of funds
- milestones
- team
- legal status
- selected documents

### Step 6 — Payment Instruction
Chỉ sau approval:
- entity receiver
- purpose
- approved amount
- currency
- reference code
- expiry
- warnings
- instruction source từ `pay.iai.one`

### Step 7 — Payment Received
Accounting đối soát:
- bank statement
- reference code
- amount
- sender
- entity
- project
- date
- document proof

### Step 8 — Ledger Recording
Sau confirm:
- tạo transaction
- ghi ledger entries
- attach document
- set confirmed
- hiển thị cho member

### Step 9 — Project Reporting
Định kỳ:
- vốn đã nhận
- vốn đã phân bổ
- vốn đã sử dụng
- milestones
- founder update
- accounting report
- risk update
- supporting documents nếu được phép xem

---

## VII. MVP v0.1 — BẮT BUỘC GIỮ NHỎ

### Public MVP
- homepage
- project list
- risk disclosure
- legal entity page
- process page
- investor interest form

### Member MVP
- login / register
- investor profile
- project access request
- wallet summary read-only
- ledger history read-only
- review status
- locked payment-instruction UI
- report list

### Admin MVP
- investor review queue
- project management
- transaction reconciliation draft
- ledger approval flow
- document upload
- audit log

**Không làm trong v0.1:**
- auto-invest
- public payment
- internal trading
- secondary transfer
- crypto wallet
- public ROI calculator
- self-serve cash withdrawal
- public investor chat room

---

## VIII. SECURITY + GOVERNANCE

**Bắt buộc:**
- TLS
- secure session
- RBAC
- 2FA / passkey cho admin
- audit log immutable
- no public bank details
- CSP
- no secret in frontend
- encrypted document storage
- document hash verification
- rate limit
- daily export backup

**Dual control bắt buộc cho:**
- approve payment instruction
- confirm received payment
- approve refund
- reverse confirmed transaction
- unlock legal hold
- publish project report
- enable payment for project

---

## IX. DEV CHỈ ĐẠO KHÓA

1. Dừng coi `dautu.muonnoi.org` là landing page.
2. Build nó như **Investment Member Portal**.
3. Public chỉ nhận interest, không nhận tiền.
4. Member sau xác minh mới thấy phòng đầu tư, ledger và báo cáo.
5. “Wallet” phải là ledger summary, không phải ví thanh toán.
6. Mọi khoản tiền thật phải có entity, hồ sơ, đối soát, ledger, chứng từ.
7. Không mở real-money flow nếu chưa legal/accounting approve.

---

## X. GO / NO-GO Ở MỨC KIẾN TRÚC

### GO khi:
- legal entity matrix approved nội bộ
- capital instrument matrix có draft
- risk disclosure approved
- admin RBAC ready
- audit log ready
- no public bank leak
- no forbidden CTA
- payment gate chưa mở public

### NO-GO khi:
- chưa rõ entity receiver
- chưa có instrument matrix
- chưa có review workflow
- còn số tài khoản public
- còn CTA đầu tư công khai
- team định build self-serve investment

---

**Kết luận chốt:**  
Bản này khóa `dautu.muonnoi.org` thành **Investment Member Portal architecture**, đủ để Product / Dev / Legal / Accounting dùng làm nguồn sự thật chung trước khi vào ledger và real-money flow.
