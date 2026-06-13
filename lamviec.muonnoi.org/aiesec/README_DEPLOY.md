# AIESEC × Thai Lam Dalat Living Lab 2026

Bộ HTML dev-ready cho route:

```txt
lamviec.muonnoi.org/aiesec
```

## 1. Cấu trúc file

```txt
/aiesec/
  index.html
  assets/
    styles.css
    app.js
  docs/
    master-plan.html
    pilot-cohort.html
    legal-ops.html
    mou-handoff.html
  worker-example.js
  README_DEPLOY.md
```

## 2. Route đề xuất

```txt
/aiesec/                         -> index.html
/aiesec/docs/master-plan.html     -> Master Plan
/aiesec/docs/pilot-cohort.html    -> Pilot Cohort 3 Volunteers
/aiesec/docs/legal-ops.html       -> Legal & Operations Checklist
/aiesec/docs/mou-handoff.html     -> MOU & Program Handoff
```

## 3. Đổi access key

Mở file:

```txt
assets/app.js
```

Tìm dòng:

```js
const ACCESS_KEY = "CHANGE_THIS_KEY";
```

Thay `CHANGE_THIS_KEY` bằng key thật do Trần Hà Tâm tự đặt.

## 4. Cảnh báo bảo mật quan trọng

Bản hiện tại là **khóa mềm frontend**. Người biết kỹ thuật có thể xem source để tìm key nếu chỉ deploy tĩnh.

Nếu muốn khóa thật:

1. Không để key trong file JS public.
2. Dùng Cloudflare Worker/API để xác thực key ở backend.
3. Lưu form vào D1 / Google Sheet / CRM.
4. Dùng session/cookie signed token để mở tài liệu.
5. Chặn crawl bằng `noindex`, auth middleware hoặc Cloudflare Access.

## 5. Form bắt buộc

Người xem phải nhập:

- Access key — bắt buộc
- Họ tên đầy đủ — bắt buộc
- Số điện thoại — bắt buộc
- Email — bắt buộc
- Tên tổ chức — không bắt buộc

## 6. SEO / privacy

Vì đây là tài liệu làm việc private, khuyến nghị:

```html
<meta name="robots" content="noindex,nofollow">
```

Có thể thêm vào các trang nếu muốn không cho Google index.

## 7. Acceptance gate trước khi public link

- [ ] Đã đổi ACCESS_KEY.
- [ ] Đã quyết định khóa mềm hay khóa backend thật.
- [ ] Đã xác định nơi lưu lead form.
- [ ] Đã kiểm tra mobile.
- [ ] Đã kiểm tra tất cả link nội bộ.
- [ ] Đã xác định có cần `noindex,nofollow` không.
- [ ] Đã rà lại tên pháp nhân Công ty TNHH Thái Lâm và người ký.
