# DAUTU.MUONNOI.ORG · INVESTMENT MEMBER PORTAL MASTER PLAN 2026

> **Bản triển khai cho team Dev / Legal / Accounting.** Đây là bản định hướng thực thi, chưa thay thế ý kiến luật sư hoặc kế toán được cấp phép. Với sản phẩm nhận tiền thật, nguyên tắc bắt buộc là: không public self-serve investment, không nhận tiền nếu chưa đủ hồ sơ pháp lý, không trộn ví đầu tư với ví thanh toán tiêu dùng.
>
> Ở Mỹ, các đợt chào bán chứng khoán phải đăng ký hoặc có miễn trừ hợp lệ; với Reg D Rule 506(c), có thể quảng bá công khai nhưng chỉ bán cho nhà đầu tư accredited đã được xác minh hợp lý.

---

## 1. PHÁN QUYẾT SẢN PHẨM

`dautu.muonnoi.org` không chỉ là landing page. Đây là **Investment Member Portal** dùng chung cho các dự án thuộc hệ Muôn Nơi.

**Trang public** chỉ dùng để:
- công bố dự án
- tiếp nhận quan tâm
- giải thích rủi ro

**Lớp thành viên** sau đăng ký/xác minh mới được xem:
- phòng đầu tư theo từng dự án
- hồ sơ đầu tư
- hướng dẫn thanh toán riêng
- sổ cái đầu tư
- lịch sử giao dịch
- báo cáo sử dụng vốn
- chứng từ
- trạng thái phê duyệt
- quyền chi tiêu nội bộ nếu được phép

**Không được vận hành như:**
- trang bán cổ phần công khai
- crowdfunding tự do
- ví tiền mở
- ví crypto
- app đầu tư tự động cho mọi người
- nơi hứa ROI, cổ tức, hoàn vốn hoặc thanh khoản

---

## 2. PHÁP NHÂN VÀ VAI TRÒ

### 2.1. Pháp nhân điều phối quốc tế

**VIET CAN NEW CORP**, United States

Vai trò:
- điều phối quốc tế
- hợp tác quốc tế
- quản lý quan hệ nhà đầu tư quốc tế nếu được phê duyệt
- nhận giao dịch quốc tế khi có hồ sơ pháp lý phù hợp

### 2.2. Đại diện thanh toán/vận hành trong nước

**Công ty Cổ phần Giáo dục Truyền thông Việt Can New**

Vai trò:
- đại diện thanh toán pháp lý trong nước tại Việt Nam
- vận hành dòng tiền nội địa khi hồ sơ được phê duyệt
- đối soát thanh toán nội địa
- phối hợp kế toán, chứng từ, báo cáo

### 2.3. Đơn vị đầu tư, kêu gọi đầu tư và phát triển dự án

**Công ty Cổ phần Giáo dục Hành Trình Kasan**

Vai trò:
- đơn vị đầu tư
- kêu gọi đầu tư
- phát triển dự án
- đồng phát triển dự án trong hệ Muôn Nơi
- chịu trách nhiệm hồ sơ dự án theo phạm vi được phê duyệt

---

## 3. NGUYÊN TẮC PHÁP LÝ KHÔNG THOẢ HIỆP

1. Public page không được có nút "Đầu tư ngay".
2. Không public số tài khoản ngân hàng, QR code, hướng dẫn chuyển khoản.
3. Không public cổ phần, định giá, ROI, cổ tức, hoàn vốn.
4. Không dùng từ "cam kết lợi nhuận".
5. Không nhận tiền tự động từ public user.
6. Mỗi khoản tiền thật phải có:
   - nhà đầu tư được xác minh
   - dự án được duyệt
   - pháp nhân nhận tiền
   - hồ sơ pháp lý
   - risk acknowledgement
   - payment instruction riêng
   - đối soát
   - ledger entry
   - chứng từ
7. Mỗi quốc gia mở thanh toán cần legal/accounting review riêng.
8. Tài khoản thanh toán chỉ lấy từ hồ sơ đã kiểm duyệt trong `pay.iai.one`.
9. Không trộn tiền đầu tư với điểm, quà, membership hoặc ví tiêu dùng.

---

## 4. KIẾN TRÚC LỚP SẢN PHẨM

### 4.1. Public Layer

**Route:**
- `/`
- `/projects`
- `/legal`
- `/risk`
- `/process`
- `/faq`
- `/interest`

**Cho phép:**
- xem tầm nhìn
- xem danh mục dự án
- đọc cảnh báo rủi ro
- gửi form quan tâm

**Không cho phép:**
- xem điều khoản đầu tư chi tiết
- xem tài khoản thanh toán
- xem data room
- chuyển tiền
- tự động trở thành nhà đầu tư

### 4.2. Member Layer

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

**Chỉ mở khi:**
- user đăng nhập
- email/phone verified
- investor profile completed
- risk acknowledgement accepted
- dự án cho phép user xem

### 4.3. Investor Review Layer

**Route:**
- `/member/review-status`
- `/member/eligibility`
- `/member/risk-profile`

**Dùng cho:**
- phân loại cá nhân/doanh nghiệp/quỹ
- xác minh quốc gia
- kiểm tra giới hạn pháp lý
- KYC/KYB/AML nếu cần
- phê duyệt quyền xem data room

### 4.4. Deal Room Layer

**Route:**
- `/member/deal-room/:projectId`

**Chỉ mở khi:**
- investor approved
- project approved
- legal lane approved
- payment lane approved
- NDA hoặc acknowledgement đã ký nếu cần

**Nội dung:**
- pitch deck
- project memo
- financial model
- legal documents
- term sheet nếu có
- risk disclosure
- payment instruction
- signed agreements
- reporting schedule

### 4.5. Admin / Accounting / Legal Layer

**Route:**
- `/admin`
- `/admin/investors`
- `/admin/projects`
- `/admin/transactions`
- `/admin/reconciliation`
- `/admin/reports`
- `/admin/audit`
- `/admin/legal-review`

**Không public. Bắt buộc auth + RBAC + audit log.**

---

## 5. CÁC DỰ ÁN ĐƯỢC QUẢN LÝ

Mỗi dự án trong hệ Muôn Nơi có thể có investment room riêng:
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

**Mỗi dự án phải có trạng thái:**
- Draft Plan
- Founder Review Ready
- Legal Review Required
- Accounting Review Required
- Build Started
- Pilot Preparing
- Pilot Live
- Investment Interest Open
- Legal Investment Review
- Investment Round Open
- Closed

**Chỉ được dùng `Investment Round Open` khi có legal approval.**

---

## 6. LUỒNG NGƯỜI DÙNG ĐẦU TƯ

### Step 1 — Public Interest

Người dùng gửi form:
- họ tên
- email
- số điện thoại
- quốc gia cư trú
- loại người quan tâm: cá nhân / doanh nghiệp / quỹ
- dự án quan tâm
- mức quan tâm dự kiến
- xác nhận đã đọc cảnh báo rủi ro
- xác nhận đây chưa phải giao dịch đầu tư

### Step 2 — Member Registration

Tạo tài khoản:
- email
- phone
- password/passkey
- country
- consent
- privacy acknowledgement

### Step 3 — Investor Profile

Nhập:
- cá nhân/doanh nghiệp/quỹ
- quốc gia cư trú
- quốc tịch
- nguồn tiền
- mục tiêu đầu tư
- mức chịu rủi ro
- loại tiền
- pháp nhân liên quan nếu là doanh nghiệp/quỹ

### Step 4 — Eligibility Review

Hệ thống và admin kiểm:
- quốc gia
- loại nhà đầu tư
- dự án được phép xem
- legal lane
- KYC/KYB
- AML nếu cần
- investor limits nếu áp dụng

### Step 5 — Project Room Access

User được mở:
- project overview
- risk disclosure
- use of funds
- milestones
- team
- legal status
- documents

### Step 6 — Payment Instruction

Chỉ hiện sau approval:
- pháp nhân nhận tiền
- mục đích thanh toán
- mã tham chiếu
- số tiền được phê duyệt
- đơn vị tiền
- thời hạn thanh toán
- cảnh báo không chuyển sai tài khoản
- instruction lấy từ `pay.iai.one`

### Step 7 — Payment Received

Accounting đối soát:
- bank statement
- reference code
- amount
- sender
- currency
- entity
- project
- date
- document proof

### Step 8 — Ledger Recording

Sau khi đối soát:
- tạo transaction
- tạo ledger entry
- gắn chứng từ
- status `confirmed`
- hiển thị trong member dashboard

### Step 9 — Project Reporting

Dự án định kỳ cập nhật:
- số vốn nhận
- số vốn đã phân bổ
- số vốn đã sử dụng
- hạng mục chi
- milestone
- chứng từ liên quan
- báo cáo founder/accounting
- cảnh báo thay đổi kế hoạch

---

## 7. MODULE BẮT BUỘC CHO MVP v0.1

### Public
- homepage
- project list
- risk disclosure
- investor interest form
- legal entity page
- process page

### Member
- login/register
- investor profile
- project access request
- wallet summary read-only
- ledger history read-only
- payment instruction locked UI
- report list

### Admin
- investor review queue
- project management
- transaction reconciliation
- ledger entry approval
- document upload
- audit log

---

## 8. KHÔNG LÀM TRONG v0.1

- không auto-invest
- không public payment
- không secondary transfer
- không marketplace cổ phần
- không internal trading
- không crypto wallet
- không cash withdrawal tự động
- không investor chat room public
- không ROI calculator public
- không push notification "đầu tư ngay"

---

## 9. GO / NO-GO

**GO khi:**
- legal entity matrix approved
- risk disclosure approved
- wallet ledger spec approved
- accounting workflow approved
- admin RBAC ready
- payment instruction gate ready
- audit log ready
- no public bank leak
- no forbidden CTA
- legal review complete for active investment flow

**NO-GO nếu:**
- chưa có legal review
- chưa có accounting review
- chưa có payment gate
- chưa có ledger immutability
- chưa có admin approval workflow
- còn số tài khoản public
- còn CTA đầu tư public
- chưa rõ pháp nhân nhận tiền

---

## 10. CHỈ ĐẠO NGẮN CHO TEAM

1. Dừng coi dautu.muonnoi.org là landing page đơn thuần.
2. Thiết kế lại thành Investment Member Portal.
3. Public chỉ nhận quan tâm, không nhận tiền.
4. Member sau xác minh mới thấy phòng đầu tư và ví/sổ cái.
5. Ví là ledger kế toán, không phải ví thanh toán tự do.
6. Mỗi khoản tiền thật phải có pháp nhân, hồ sơ, đối soát, ledger, chứng từ.
7. Không deploy real-money flow nếu chưa legal/accounting approve.

---

> **Trạng thái tài liệu:** MASTER_PLAN · INTERNAL_USE · DO_NOT_CLAIM_LEGAL_REVIEWED · NOT_A_PUBLIC_SECURITIES_OFFERING_DOCUMENT
