# QA EVIDENCE PACK — dautu.muonnoi.org

**Ngày:** 2026-06-12
**Deploy ID:** 20e96606
**Alias:** https://main.dautu-muonnoi-org.pages.dev
**Preview:** https://20e96606.dautu-muonnoi-org.pages.dev
**Custom Domain:** https://dautu.muonnoi.org
**Project:** dautu-muonnoi-org
**Branch:** audit-landingpage (production)

---

## A. ROUTE VERIFICATION — CUSTOM DOMAIN (17/17)

```bash
BASE="https://dautu.muonnoi.org"
```

| # | Route | Status | Ghi chú |
|---|-------|--------|---------|
| 1 | `/` | 200 | Homepage — public posture đúng |
| 2 | `/du-an` | 200 | 3 dự án ưu tiên |
| 3 | `/hinh-thuc-dong-hanh` | 200 | 3 lane — A/B/C |
| 4 | `/quy-trinh-review` | 200 | 9 bước review |
| 5 | `/governance` | 200 | Pháp nhân & governance |
| 6 | `/faq` | 200 | 10 câu hỏi |
| 7 | `/dang-ky-quan-tam` | 200 | Form + acknowledgement |
| 8 | `/legal` | 200 | Tuyên bố pháp lý đầy đủ |
| 9 | `/member/` | 200 | Member portal — noindex |
| 10 | `/member/verify` | 200 | Verify gate — noindex |
| 11 | `/member/review-status` | 200 | Review status — noindex |
| 12 | `/member/payment-info` | 200 | Payment info — locked UI — noindex |
| 13 | `/admin/interest.html` | 302 | Redirect về / (chặn public) |
| 14 | `/admin/members.html` | 302 | Redirect về / (chặn public) |
| 15 | `/admin/lane-reviews.html` | 302 | Redirect về / (chặn public) |
| 16 | `/admin/payment-visibility.html` | 302 | Redirect về / (chặn public) |
| 17 | `/admin/audit.html` | 302 | Redirect về / (chặn public) |

**Kết quả:** 17/17 route đúng policy mong muốn.

---

## B. SECURITY HEADERS — CUSTOM DOMAIN (8/8)

```bash
curl -I https://dautu.muonnoi.org/
```

| Header | Giá trị | Status |
|--------|---------|--------|
| Strict-Transport-Security | max-age=63072000; includeSubDomains; preload | ✅ |
| Content-Security-Policy | default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; frame-ancestors 'none'; base-uri 'self'; form-action 'self' | ✅ |
| X-Content-Type-Options | nosniff | ✅ |
| X-Frame-Options | DENY | ✅ |
| Referrer-Policy | strict-origin-when-cross-origin | ✅ |
| Permissions-Policy | accelerometer=(), ambient-light-sensor=(), autoplay=(), battery=(), camera=(), ... | ✅ |
| Cross-Origin-Opener-Policy | same-origin | ✅ |
| Cross-Origin-Resource-Policy | same-origin | ✅ |

---

## C. ROBOTS / NOINDEX

| Page | robots meta | Status |
|------|-------------|--------|
| `/` | Không có (index OK) | ✅ |
| `/member/*` | `<meta name="robots" content="noindex, nofollow">` | ✅ |
| `/admin/*` | `<meta name="robots" content="noindex, nofollow">` | ✅ |
| `robots.txt` | `Allow: /` + `Sitemap: https://dautu.muonnoi.org/sitemap.xml` | ✅ |

---

## D. FORBIDDEN LANGUAGE SCAN

```bash
grep -RniE "Đầu Tư Ngay|Mua Cổ Phần|Góp Vốn Ngay|Nhận ROI|Đặt Suất|Chuyển Khoản Đầu Tư|cam kết lợi nhuận cố định|cổ tức đảm bảo"
```

**Kết quả:** Các từ chỉ xuất hiện trong ngữ cảnh:
- Danh sách "Không phù hợp" (loại trừ)
- FAQ giải thích tại sao không
- Legal disclaimer

**Không có forbidden CTA nào dưới dạng kêu gọi hành động.**

---

## E. BANK / PAYMENT LEAK SCAN

```bash
grep -RniE "số tài khoản|STK|account number|bank|ngân hàng|QR|Vietcombank|Techcombank|ACB|MB Bank|BIDV|VPBank|chuyển khoản|transfer"
```

**Kết quả:** Không có số tài khoản thật, QR code, hoặc hướng dẫn chuyển khoản cụ thể. Các từ chỉ xuất hiện trong ngữ cảnh:
- FAQ: "Tôi có thể xem số tài khoản ở đâu?" → câu trả lời: Không public
- Legal: "Nhận hướng dẫn thanh toán... sau khi duyệt"
- Lane C: "Không public bank details"

---

## F. STATUS BADGES — HOMEPAGE (CUSTOM DOMAIN)

```
CONTENT_PACK_READY
DEPLOYED
CUSTOM_DOMAIN_LIVE
DO_NOT_CLAIM_LEGAL_REVIEWED
NOT_A_PUBLIC_SECURITIES_OFFERING_DOCUMENT
```

**Đánh giá:** Badge không còn mâu thuẫn. `DEPLOYED` thay thế `DO_NOT_CLAIM_DEPLOYED`. `CUSTOM_DOMAIN_LIVE` thay thế `CUSTOM_DOMAIN_PENDING`.

---

## G. FORM COPY

Trang `/dang-ky-quan-tam` hiện ghi:

> "Form đang ở chế độ ghi nhận thử nghiệm — chưa kết nối backend. Nếu cần gửi chính thức, vui lòng liên hệ qua email được công bố sau khi kênh tiếp nhận được xác nhận."

**Đánh giá:** Không còn tạo kỳ vọng "team sẽ phản hồi" khi chưa có backend.

---

## H. ADMIN REDIRECT

`_redirects`:
```
/admin/* / 302
```

**Kết quả:** Tất cả `/admin/*.html` trả 302 về `/`. Không còn mock admin public.

---

## I. CANONICAL & SITEMAP

```html
<link rel="canonical" href="https://dautu.muonnoi.org/">
```

```
robots.txt → Sitemap: https://dautu.muonnoi.org/sitemap.xml
```

**Ghi chú:** Canonical trỏ về custom domain đã live.

---

## J. CÒN PENDING

| # | Item | Trạng thái |
|---|------|-----------|
| 1 | Backend API (`/api/interest`) | PENDING — chưa có |
| 2 | verify.iai.one integration | PENDING — chưa có callback/webhook |
| 3 | Member auth & payment gate server-side | PENDING — chưa có |
| 4 | Admin portal thật | PENDING — chưa có |
| 5 | Audit log thật | PENDING — chưa có |
| 6 | Legal review bởi luật sư | PENDING — badge vẫn `DO_NOT_CLAIM_LEGAL_REVIEWED` |

---

## K. VERDICT

| Hạng mục | Điểm | Ghi chú |
|----------|------|---------|
| Public messaging | 9.2/10 | Rõ, an toàn, đúng thesis |
| Legal-safe posture | 9.0/10 | Tốt, badge đúng, không mâu thuẫn |
| Route/content completeness | 8.5/10 | 17/17 route OK, admin chặn |
| Security headers | 8.5/10 | 8/8 headers có mặt |
| Custom domain / DNS | 8.5/10 | `dautu.muonnoi.org` live, HTTPS OK |
| Admin safety | 8.0/10 | Redirect 302 |
| Backend readiness | 2.0/10 | Mock, chưa production |
| Member gate | 4.0/10 | Logic đúng, chưa auth thật |
| Payment safety | 8.0 static / 3.0 prod | Static locked tốt, chưa server gate |

**Overall: 7.5/10**

---

> **Trạng thái:** APPROVED WITH CONDITIONS — dautu.muonnoi.org đã live với custom domain. Public posture, legal footer, 3-lane form, member locked UI, security headers đã bám đúng legal-safe structure. Admin mock đã bị chặn. Chưa dùng làm production public chính thức cho đến khi backend, auth, verify gate, payment server gate hoàn thiện và legal review xong.
