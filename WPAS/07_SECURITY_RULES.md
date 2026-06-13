# P7 — TECHNICAL AUDIT

**System:** Website Production Acceptance System (WPAS)
**Version:** 1.0
**Created:** 2026-06-08
**Scope:** Toàn bộ hệ sinh thái website

---

## Mục tiêu

Kiểm tra technical để đảm bảo:
- 404 page có
- 500 page có
- Redirect đúng
- Security headers đầy đủ
- Cache policy đúng
- Robots.txt đúng
- Sitemap.xml đúng
- Canonical URL đúng
- Lighthouse scores tốt

---

## Error Pages

### 404 Page

**Quy tắc:** 404 page phải có và brand consistent.

**Kiểm tra:**
- ✅ 404.html tồn tại
- ✅ Brand consistent
- ✅ CTA về trang chủ
- ✅ Bilingual (nếu site bilingual)
- ✅ SEO friendly (không redirect 404 về home)

**Ví dụ FAIL:**
- 404 page không có
- 404 redirect về home (bad for SEO)
- Brand không consistent

**Ví dụ PASS:**
- 404 page có
- Brand consistent
- CTA về trang chủ
- Bilingual

### 500 Page

**Quy tắc:** 500 page phải có và brand consistent.

**Kiểm tra:**
- ✅ 500.html tồn tại
- ✅ Brand consistent
- ✅ CTA về trang chủ hoặc retry
- ✅ Bilingual (nếu site bilingual)

**Ví dụ FAIL:**
- 500 page không có
- Brand không consistent

**Ví dụ PASS:**
- 500 page có
- Brand consistent
- CTA về trang chủ hoặc retry

---

## Redirects

### Quy tắc

**Redirect phải đúng và không tạo redirect loops.**

**Kiểm tra:**
- ✅ _redirects file có (nếu dùng Cloudflare Pages)
- ✅ Redirect rules đúng
- ✅ Không có redirect loops
- ✅ HTTP → HTTPS redirect
- ✅ www → non-www hoặc ngược lại (consistent)

**Ví dụ FAIL:**
- Redirect loops
- HTTP không redirect HTTPS
- www/non-www không consistent

**Ví dụ PASS:**
- Redirect rules đúng
- Không redirect loops
- HTTP → HTTPS
- www/non-www consistent

---

## Security Headers

### Quy tắc bắt buộc

**Security headers phải có:**
- ✅ X-Content-Type-Options: nosniff
- ✅ X-Frame-Options: DENY hoặc SAMEORIGIN
- ✅ Referrer-Policy: strict-origin-when-cross-origin
- ✅ Permissions-Policy: geolocation=(), microphone=(), camera=()
- ✅ Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
- ✅ Content-Security-Policy: đầy đủ

**Kiểm tra:**
- ✅ _headers file có (nếu dùng Cloudflare Pages)
- ✅ Tất cả security headers có
- ✅ CSP đầy đủ (default-src, script-src, style-src, img-src, connect-src, frame-src)

**Ví dụ FAIL:**
- Thiếu security headers
- CSP không đầy đủ

**Ví dụ PASS:**
- Tất cả security headers có
- CSP đầy đủ

---

## Cache Policy

### Quy tắc

**Cache policy phải phù hợp với content type.**

**Kiểm tra:**
- ✅ Static assets (CSS, JS, images) cache lâu (immutable 7-30 ngày)
- ✅ HTML cache ngắn (no-cache hoặc max-age=300)
- ✅ API responses cache phù hợp
- ✅ Cache headers đúng

**Ví dụ FAIL:**
- HTML cache quá lâu
- Static assets không cache
- Cache headers sai

**Ví dụ PASS:**
- Static assets cache lâu
- HTML cache ngắn
- Cache headers đúng

---

## Robots.txt

### Quy tắc

**Robots.txt phải đúng và sitemap link đúng.**

**Kiểm tra:**
- ✅ robots.txt tồn tại
- ✅ User-agent: * hoặc cụ thể
- ✅ Allow/Disallow đúng
- ✅ Sitemap link đúng domain

**Ví dụ FAIL:**
- robots.txt không có
- Sitemap link sai domain
- Disallow quá nhiều

**Ví dụ PASS:**
- robots.txt có
- Sitemap link đúng
- Allow/Disallow đúng

---

## Sitemap.xml

### Quy tắc

**Sitemap.xml phải đầy đủ và đúng domain.**

**Kiểm tra:**
- ✅ sitemap.xml tồn tại
- ✅ Tất cả important pages có
- ✅ Domain đúng
- ✅ changefreq và priority phù hợp
- ✅ XML valid

**Ví dụ FAIL:**
- sitemap.xml không có
- Thiếu important pages
- Domain sai
- XML invalid

**Ví dụ PASS:**
- sitemap.xml có
- Đầy đủ pages
- Domain đúng
- XML valid

---

## Canonical URL

### Quy tắc

**Canonical URL phải đúng và consistent.**

**Kiểm tra:**
- ✅ Canonical tag trên tất cả pages
- ✅ Canonical URL đúng domain
- ✅ Canonical URL không có query parameters (trừ khi cần)
- ✅ Canonical URL consistent

**Ví dụ FAIL:**
- Canonical tag thiếu
- Canonical URL sai domain
- Canonical URL có query parameters không cần

**Ví dụ PASS:**
- Canonical tag có
- Canonical URL đúng
- Canonical URL clean

---

## Lighthouse Scores

### Quy tắc

**Lighthouse scores phải đạt:**
- Performance: ≥ 90
- SEO: ≥ 90
- Accessibility: ≥ 90
- Best Practices: ≥ 90

**Kiểm tra:**
- ✅ Performance ≥ 90
- ✅ SEO ≥ 90
- ✅ Accessibility ≥ 90
- ✅ Best Practices ≥ 90

**Ví dụ FAIL:**
- Performance < 90
- SEO < 90
- Accessibility < 90
- Best Practices < 90

**Ví dụ PASS:**
- Tất cả scores ≥ 90

---

## Checklist P7

### Error Pages
- [ ] 404 page có
- [ ] 404 brand consistent
- [ ] 500 page có
- [ ] 500 brand consistent

### Redirects
- [ ] Redirect rules đúng
- [ ] Không redirect loops
- [ ] HTTP → HTTPS
- [ ] www/non-www consistent

### Security Headers
- [ ] X-Content-Type-Options
- [ ] X-Frame-Options
- [ ] Referrer-Policy
- [ ] Permissions-Policy
- [ ] Strict-Transport-Security
- [ ] Content-Security-Policy

### Cache Policy
- [ ] Static assets cache lâu
- [ ] HTML cache ngắn
- [ ] Cache headers đúng

### SEO
- [ ] robots.txt có
- [ ] sitemap.xml có
- [ ] Canonical URL đúng
- [ ] Domain đúng

### Lighthouse
- [ ] Performance ≥ 90
- [ ] SEO ≥ 90
- [ ] Accessibility ≥ 90
- [ ] Best Practices ≥ 90

---

## Fail Criteria

**FAIL nếu:**
- 404 hoặc 500 page không có
- Redirect loops
- Thiếu security headers
- Cache policy sai
- robots.txt hoặc sitemap.xml sai
- Canonical URL sai
- Lighthouse score < 90

**PASS nếu:**
- Error pages có
- Redirect đúng
- Security headers đầy đủ
- Cache policy đúng
- SEO files đúng
- Lighthouse scores ≥ 90

---

## Authority

**Nguồn chân lý:** `/WPAS/07_SECURITY_RULES.md`
**Mọi dev, QA phải tuân thủ.**
**Không được deploy nếu technical không pass.**
