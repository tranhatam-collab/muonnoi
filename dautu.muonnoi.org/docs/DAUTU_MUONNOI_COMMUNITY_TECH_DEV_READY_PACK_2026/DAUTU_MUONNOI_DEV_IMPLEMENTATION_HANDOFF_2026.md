# DAUTU_MUONNOI_DEV_IMPLEMENTATION_HANDOFF_2026

> **Trạng thái:** Dev-ready content pack cho team dev/content/product/ops triển khai.
> **Phạm vi:** dautu.muonnoi.org, dautu.nhachung.org, invest.iai.one và các tài liệu liên quan.
> **Lưu ý bắt buộc:** Đây không phải tư vấn pháp lý, thuế, kế toán hoặc đầu tư. Trước khi public hoặc ký tài liệu ràng buộc, phải có rà soát pháp lý riêng.
> **Không được claim:** đã deploy, đã legal-reviewed, đã production-ready, đã được phép chào bán đầu tư công khai.


## I. Build objective

Build `dautu.muonnoi.org` as a public-safe Community Technology Initiative portal with:

- clear public positioning;
- 3 flagship project sections;
- 3-lane interest form;
- legal-safe footer;
- no public investment/payment flow;
- verify.iai.one gate for individual/corporate investor review;
- member-only payment info visibility after approval.

## II. Required public pages

```text
/
 /du-an
 /hinh-thuc-dong-hanh
 /quy-trinh-review
 /governance
 /faq
 /dang-ky-quan-tam
 /legal
```

## III. Required member pages

```text
/member
/member/verify
/member/review-status
/member/payment-info
```

## IV. Required admin pages

```text
/admin/interest
/admin/members
/admin/lane-reviews
/admin/payment-visibility
/admin/audit
```

## V. Public page sections

1. Hero.
2. Vì sao chương trình này cần có.
3. Ba dự án ưu tiên.
4. Ba hình thức đồng hành.
5. Quy trình review.
6. Pháp nhân vận hành.
7. Tài khoản và thanh toán.
8. Ai phù hợp.
9. Ai không phù hợp.
10. FAQ.
11. Legal disclosure.
12. Final CTA.

## VI. Form fields

### Required

```text
full_name
email
country
lane_requested
project_interest
message
privacy_acknowledgement
no_public_offering_acknowledgement
```

### Optional

```text
phone
organization_name
organization_type
website
expected_collaboration_size
need_private_overview
need_nda
```

### Lane choices

```text
Tài trợ / grant / đồng hành cộng đồng
Partnership / co-development
Strategic capital review
Đối tác giáo dục
Đối tác công nghệ
Đối tác tuyển dụng / việc làm
Yêu cầu private overview
```

## VII. Legal acknowledgements

User must check:

```text
Tôi hiểu rằng trang này không phải lời mời chào bán chứng khoán, không phải chào mời đầu tư đại chúng, không phải tư vấn đầu tư và không bảo đảm lợi nhuận.
```

For strategic capital lane, add:

```text
Tôi hiểu rằng mọi nội dung liên quan strategic capital chỉ được xem xét sau khi đăng ký thành viên, xác thực qua verify.iai.one và được duyệt vào quy trình private review.
```

## VIII. Public CTA taxonomy

Allowed:

```text
Gửi Quan Tâm Đồng Hành
Đề Xuất Hợp Tác
Đăng Ký Strategic Review
Tài Trợ Chương Trình Giáo Dục Công Nghệ
Yêu Cầu Trao Đổi Riêng
Đăng Ký Thành Viên Để Được Xác Thực
```

Forbidden:

```text
Đầu Tư Ngay
Mua Cổ Phần
Góp Vốn Ngay
Nhận ROI
Đặt Suất Đầu Tư
Chuyển Khoản Đầu Tư
Mua cổ phần từ cộng đồng
```

## IX. Legal entities display

```text
Trong nước:
Công Ty Cổ Phần Giáo Dục Và BĐS IAI

Quốc tế:
Công Ty Cổ Phần Đầu Tư Việt Úc Toàn Cầu
```

Display note:

```text
Thông tin pháp nhân, quyền ký kết, quyền nhận tài trợ, quyền hợp tác, quyền chào bán cổ phần và nghĩa vụ pháp lý liên quan cần được xác nhận theo hồ sơ doanh nghiệp và tư vấn pháp lý trước khi ký bất kỳ tài liệu ràng buộc nào.
```

## X. Bank account rule

```text
No bank account on public page.
No QR code on public page.
No transfer instruction on public page.
```

Only member-only and verify-gated.

## XI. Integration with verify.iai.one

Required states:

```text
not_started
pending
verified
failed
expired
manual_review_required
```

For strategic capital review:

```text
verification_status must be verified
lane_review.status must be approved
payment_visibility_grant.status must be active
```

## XII. Security requirements

- Encrypt payment account number at rest.
- Do not expose raw account number via public APIs.
- Do not log raw bank account.
- Gate member payment info API.
- Add audit log for all payment info views.
- Admin revoke must take effect immediately.
- Set payment visibility grant expiration.
- Rate-limit interest form.
- Add spam protection.
- Do not send sensitive docs by public email.

## XIII. Acceptance tests

### Public safety

- Visit `/` as anonymous user: no bank info, no ROI, no equity, no term sheet.
- Search page text: no forbidden CTA.
- Footer legal disclosure visible.

### Form

- Submit form without lane: error.
- Strategic capital lane requires acknowledgement.
- Form submission creates interest_request.

### Member

- Registered but unverified member cannot see payment info.
- Verified but not lane-approved member cannot see payment info.
- Lane-approved member without grant cannot see payment info.
- Active grant displays only allowed lane payment info.

### Admin

- Admin can approve/reject lane review.
- Admin can grant/revoke payment visibility.
- Audit log records every payment info view.

## XIV. Definition of done

MVP done only when:

- all MVP pages exist;
- public copy installed;
- 3-lane form works;
- legal footer installed;
- no bank info public;
- verify gate route exists;
- payment info gate implemented or disabled;
- admin review exists or manual fallback exists;
- forbidden CTA scan passes;
- Founder review passed;
- legal review pending or completed clearly marked.

## XV. Deployment stop condition

Do not deploy if any of these are true:

- Public page contains bank account or QR.
- Public page says “Đầu Tư Ngay”.
- Public page contains ROI, valuation, equity percentage, term sheet.
- Strategic capital lane bypasses verify.iai.one.
- Payment info can be accessed by unverified member.
- Legal footer missing.
- Form does not separate lanes.
