# DAUTU_MUONNOI_VERIFY_GATE_AND_MEMBER_ONLY_PAYMENT_FLOW_2026

> **Trạng thái:** Dev-ready content pack cho team dev/content/product/ops triển khai.
> **Phạm vi:** dautu.muonnoi.org, dautu.nhachung.org, invest.iai.one và các tài liệu liên quan.
> **Lưu ý bắt buộc:** Đây không phải tư vấn pháp lý, thuế, kế toán hoặc đầu tư. Trước khi public hoặc ký tài liệu ràng buộc, phải có rà soát pháp lý riêng.
> **Không được claim:** đã deploy, đã legal-reviewed, đã production-ready, đã được phép chào bán đầu tư công khai.


## I. Phán quyết vận hành

Số tài khoản, mã QR chuyển khoản, hướng dẫn thanh toán hoặc tài liệu strategic capital không được hiển thị trên public page.

Chỉ hiển thị sau khi:

1. người quan tâm đăng ký thành viên;
2. người quan tâm xác thực qua verify.iai.one;
3. hồ sơ được phân loại đúng lane;
4. hồ sơ được người phụ trách duyệt;
5. hệ thống mở đúng thông tin theo lane.

## II. Luồng tổng

```text
Public page
→ Interest form
→ Member account
→ verify.iai.one
→ KYC / KYB / representative verification
→ Lane classification
→ Manual review
→ Approved member portal
→ Payment or private document visibility, if applicable
```

## III. Verify gate áp dụng cho ai

- nhà đầu tư cá nhân trực tuyến;
- doanh nghiệp trực tuyến;
- người yêu cầu strategic review;
- người xin tài liệu sâu hơn;
- người cần payment instructions.

## IV. Không cho phép

- xem tài khoản công khai rồi tự chuyển tiền;
- chuyển tiền với nhãn “đầu tư” trên public page;
- bỏ qua bước qualification;
- hiển thị tài khoản trước verify;
- mở private overview trước khi phân loại lane;
- mở strategic documents cho visitor.

## V. Lane behavior

### Lane A — Tài trợ / Grant / Đồng hành cộng đồng

Có thể yêu cầu:

- xác thực email;
- số điện thoại;
- tổ chức nếu là doanh nghiệp;
- mục tiêu tài trợ;
- chứng từ tài trợ;
- thông tin xuất biên nhận / hóa đơn nếu có.

Bank/payment info chỉ hiển thị sau khi member được duyệt vào lane này.

### Lane B — Partnership / Co-development

Yêu cầu:

- hồ sơ tổ chức;
- người đại diện;
- năng lực hợp tác;
- lĩnh vực;
- khu vực triển khai;
- mục tiêu hợp tác;
- xác thực qua verify.iai.one nếu cần ký kết hoặc truy cập tài liệu riêng.

Không hiển thị số tài khoản nếu chưa có proposal hoặc agreement phù hợp.

### Lane C — Strategic Capital / Qualified Review

Bắt buộc:

- member account;
- verify.iai.one;
- identity verification với cá nhân;
- business verification với doanh nghiệp;
- representative authority check;
- risk acknowledgement;
- private review approval;
- legal / tax / accounting review trước tài liệu ràng buộc.

Không hiển thị bank account, cap table, valuation, equity docs, term sheet hoặc transfer instructions trước khi hồ sơ được duyệt.

## VI. Member roles

```text
visitor
registered_member
verified_individual
verified_business
lane_a_approved
lane_b_approved
lane_c_under_review
lane_c_approved
admin
reviewer
legal_reviewer
finance_reviewer
```

## VII. Data model đề xuất

### interest_requests

```sql
id
created_at
full_name
email
phone
country
organization_name
organization_type
lane_requested
project_interest
message
status
utm_source
utm_campaign
```

### member_profiles

```sql
id
user_id
full_name
email
phone
country
member_type
organization_name
verification_status
verify_case_id
created_at
updated_at
```

### lane_reviews

```sql
id
member_id
lane
status
reviewer_id
risk_level
notes
approved_at
rejected_at
reason
```

### payment_visibility_grants

```sql
id
member_id
lane
legal_entity
payment_info_id
granted_by
granted_at
expires_at
status
```

### legal_entities

```sql
id
name
country
entity_type
role
status
public_display_allowed
verified_by_legal
```

### payment_infos

```sql
id
legal_entity_id
bank_name
account_name
account_number_encrypted
branch
currency
purpose
lane_allowed
visibility_status
created_at
updated_at
```

Account number phải mã hóa at rest.

## VIII. API endpoints đề xuất

```text
POST /api/interest
POST /api/member/register
GET  /api/member/me
POST /api/verify/start
GET  /api/verify/status
POST /api/lane-review/request
GET  /api/lane-review/status
GET  /api/member/payment-info
POST /api/admin/lane-review/:id/approve
POST /api/admin/lane-review/:id/reject
POST /api/admin/payment-visibility/grant
POST /api/admin/payment-visibility/revoke
```

## IX. Payment info visibility rule

```text
IF user.role is visitor:
  deny payment info

IF user.role is registered_member AND verification_status != verified:
  deny payment info

IF lane_review.status != approved:
  deny payment info

IF payment_visibility_grant.status != active:
  deny payment info

IF current_date > grant.expires_at:
  deny payment info

ELSE:
  display only lane-specific payment instructions
```

## X. Audit log bắt buộc

Mọi lần mở hoặc xem payment info phải log:

```text
user_id
member_id
lane
payment_info_id
legal_entity_id
timestamp
ip_hash
user_agent_hash
reason
reviewer_id
grant_id
```

Không log raw account number.

## XI. UI trạng thái khóa

### Chưa đăng ký

Thông tin thanh toán hoặc chuyển khoản không hiển thị công khai. Vui lòng đăng ký thành viên và chọn đúng hình thức quan tâm để được hướng dẫn theo quy trình phù hợp.

CTA: **Đăng Ký Thành Viên**

### Đã đăng ký nhưng chưa verify

Bạn cần hoàn tất xác thực qua verify.iai.one trước khi hệ thống có thể mở tài liệu hoặc hướng dẫn riêng.

CTA: **Xác Thực Qua verify.iai.one**

### Đang review

Hồ sơ của bạn đang được xem xét. Team phụ trách sẽ phản hồi sau khi phân loại lane và kiểm tra thông tin phù hợp.

### Đã duyệt đúng lane

Hệ thống chỉ hiển thị thông tin phù hợp với lane đã duyệt. Không hiển thị thông tin của lane khác.

## XII. Dev acceptance criteria

- Public page không render bank account hoặc QR.
- API không trả payment info cho visitor.
- API không trả payment info cho unverified member.
- API không trả payment info nếu lane review chưa approved.
- Payment info được mã hóa at rest.
- Mọi view payment info có audit log.
- Admin có thể grant/revoke visibility.
- verify.iai.one case id được lưu.
- UI hiển thị đúng trạng thái locked / pending / approved.
- Không có CTA “Đầu Tư Ngay”.

## XIII. Stop condition

Nếu verify.iai.one chưa sẵn sàng, lane strategic capital phải ở trạng thái waitlist/private manual only. Không được mở automatic payment info visibility.
