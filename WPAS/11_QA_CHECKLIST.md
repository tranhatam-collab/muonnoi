# QA CHECKLIST
# QA CHECKLIST

**System:** Website Production Acceptance System (WPAS)
**Version:** 1.0
**Created:** 2026-06-08
**Scope:** Toàn bộ hệ sinh thái website

---

## Mục tiêu

Checklist tổng hợp cho QA để kiểm tra website trước khi production.

---

## Pre-QA Checklist

### Environment
- [ ] Staging environment có
- [ ] Database staging có
- [ ] API staging có
- [ ] Payment staging có (nếu có bán hàng)
- [ ] Email staging có (nếu có email)

### Access
- [ ] QA access credentials có
- [ ] Admin access credentials có
- [ ] Test data có
- [ ] Test accounts có

---

## P0 — Brand Consistency QA

### Domain
- [ ] URL production đúng
- [ ] Canonical URL đúng
- [ ] Sitemap đúng domain
- [ ] Robots.txt đúng domain
- [ ] OG:URL đúng domain
- **Evidence:** curl -I, screenshot, link sitemap/robots

### Logo
- [ ] Header logo đúng (desktop)
- [ ] Header logo đúng (mobile)
- [ ] Footer logo đúng
- [ ] OG image đúng
- [ ] PWA icon đúng
- [ ] Favicon đúng
- [ ] Email template logo đúng
- [ ] PDF export logo đúng
- **Evidence:** Screenshot từng touchpoint + asset path

### Brand Name
- [ ] Tên thương hiệu đúng chuẩn
- [ ] Không có variant khác
- [ ] Document trong BRAND_CODEX
- [ ] Search toàn repo không có variant khác
- **Evidence:** Search result + BRAND_CODEX link

### Color
- [ ] Primary color đúng hex
- [ ] Secondary color đúng hex
- [ ] Accent color đúng hex
- [ ] Background colors đúng
- [ ] Text colors đúng
- [ ] CSS variables đúng
- **Evidence:** CSS variables screenshot + design tokens

### Typography
- [ ] Font family đúng
- [ ] Font weights đúng
- [ ] Font sizes đúng (H1, H2, H3, body, small)
- [ ] Line heights đúng
- [ ] Letter spacing đúng
- **Evidence:** CSS source + screenshot

---

## P1 — Language Audit QA

### Language Codex
- [ ] MASTER LANGUAGE CODEX tồn tại
- [ ] File vi.json hoặc LANGUAGE_CODEX_MASTER_VI.md có
- [ ] File en.json hoặc LANGUAGE_CODEX_MASTER_EN.md có
- [ ] Tất cả terms có cặp VI/EN
- [ ] Không có duplicate terms
- **Evidence:** Link file + screenshot content

### Bilingual Consistency
- [ ] Mỗi term có 1 cặp VI/EN duy nhất
- [ ] Không có lung tung translation
- [ ] Context consistent
- **Evidence:** Translation consistency report

### Diacritic Rules
- [ ] Vietnamese full diacritics
- [ ] Vietnamese đúng chính tả
- [ ] English natural
- [ ] English consistent capitalization
- **Evidence:** Screenshot bilingual pages

### Translation Rules
- [ ] 1-to-1 mapping
- [ ] Context consistent
- [ ] No self-translation
- **Evidence:** Translation audit report

---

## P2 — Content Consistency QA

### Content Rules
- [ ] Không overclaim
- [ ] Không thần thánh hóa
- [ ] Không giật tít
- [ ] Không quảng cáo quá mức
- **Evidence:** Content audit report

### Content Structure
- [ ] Hierarchy đúng (H1 → H2 → H3)
- [ ] Title, Description, CTA đồng bộ
- [ ] Không nhảy cấp heading
- **Evidence:** Hierarchy audit report

### Content Quality
- [ ] Clarity (rõ ràng, dễ hiểu)
- [ ] Accuracy (chính xác)
- [ ] Relevance (phù hợp audience)
- **Evidence:** Content quality report

### Scope Coverage
- [ ] Landing page
- [ ] Blog posts
- [ ] Documentation
- [ ] FAQ
- [ ] Legal pages
- [ ] Pricing page
- [ ] Checkout flow
- [ ] Email templates
- [ ] Dashboard
- [ ] App UI
- **Evidence:** Screenshot từng page

---

## P3 — Translation Audit QA

### 1-to-1 Mapping
- [ ] Mỗi term VI map 1-to-1 với EN
- [ ] Không có nhiều translation khác nhau
- [ ] Consistent toàn hệ thống
- **Evidence:** 1-to-1 mapping report

### Context Consistency
- [ ] Cùng context, cùng translation
- [ ] Không có context-specific translation khác nhau
- **Evidence:** Context consistency report

### Translation Quality
- [ ] Translation chính xác nghĩa
- [ ] Translation tự nhiên
- [ ] Translation consistent
- **Evidence:** Translation quality report

### Process
- [ ] Check MASTER LANGUAGE CODEX trước
- [ ] Không tự dịch
- [ ] Context check
- [ ] Review
- **Evidence:** Process checklist

---

## P4 — Content Structure QA

### Hierarchy
- [ ] H1 → H2 → H3 đúng
- [ ] Không nhảy cấp
- [ ] Heading levels consistent
- **Evidence:** Hierarchy audit report

### Meta Tags
- [ ] Title tag có
- [ ] Meta description có
- [ ] OG tags đầy đủ
- [ ] Twitter tags đầy đủ
- [ ] Canonical URL có
- [ ] Hreflang có (nếu bilingual)
- **Evidence:** Meta tags audit report

### CTA Consistency
- [ ] Title, Description, CTA đồng bộ
- [ ] CTA language consistent
- [ ] CTA action clear
- **Evidence:** CTA audit report

---

## P5 — UX Audit QA

### Mobile (390px, 430px)
- [ ] Text không tràn
- [ ] Button height ≥ 44px
- [ ] Navigation hoạt động
- [ ] Form dễ điền
- [ ] Không scroll ngang
- **Evidence:** Screenshot mobile (390px, 430px)

### Tablet (768px, 1024px)
- [ ] Layout phù hợp
- [ ] Grid layout 2-column
- [ ] Navigation responsive
- [ ] Content không quá rộng
- **Evidence:** Screenshot tablet (768px, 1024px)

### Desktop (1440px, 1920px)
- [ ] Max-width container
- [ ] Content dễ đọc
- [ ] Navigation dễ dùng
- [ ] Hover states hoạt động
- **Evidence:** Screenshot desktop (1440px, 1920px)

### Common Issues
- [ ] Không scroll ngang
- [ ] Button align đúng
- [ ] Menu hoạt động đúng
- **Evidence:** UX audit report

---

## P6 — PWA Audit QA

### Manifest
- [ ] manifest.webmanifest tồn tại
- [ ] Link tag trong HTML
- [ ] JSON valid
- [ ] Tất cả fields bắt buộc có
- **Evidence:** Manifest file + validation

### Icons
- [ ] 72x72 icon
- [ ] 96x96 icon
- [ ] 128x128 icon
- [ ] 144x144 icon
- [ ] 152x152 icon
- [ ] 192x192 icon
- [ ] 384x384 icon
- [ ] 512x512 icon
- [ ] Icon quality tốt
- [ ] Icon consistent
- **Evidence:** Icon inventory + screenshot

### Service Worker
- [ ] sw.js tồn tại
- [ ] Service worker đăng ký
- [ ] Service worker hoạt động
- [ ] Cache strategy đúng
- **Evidence:** Service worker log + cache report

### Offline
- [ ] Offline page có
- [ ] Thông báo rõ ràng
- [ ] Brand consistent
- [ ] Retry hoạt động
- **Evidence:** Offline page screenshot

### Install
- [ ] Install prompt hoạt động
- [ ] Icon đúng
- [ ] Name đúng
- [ ] Description đúng
- **Evidence:** Install prompt screenshot

### Splash Screen
- [ ] Splash screen có
- [ ] Icon đúng
- [ ] Background color đúng
- [ ] Brand consistent
- **Evidence:** Splash screen screenshot

---

## P7 — Technical Audit QA

### Error Pages
- [ ] 404 page có
- [ ] 404 brand consistent
- [ ] 500 page có
- [ ] 500 brand consistent
- **Evidence:** Screenshot 404/500

### Redirects
- [ ] Redirect rules đúng
- [ ] Không redirect loops
- [ ] HTTP → HTTPS
- [ ] www/non-www consistent
- **Evidence:** Redirect test report

### Security Headers
- [ ] X-Content-Type-Options
- [ ] X-Frame-Options
- [ ] Referrer-Policy
- [ ] Permissions-Policy
- [ ] Strict-Transport-Security
- [ ] Content-Security-Policy
- **Evidence:** curl -I headers

### Cache Policy
- [ ] Static assets cache lâu
- [ ] HTML cache ngắn
- [ ] Cache headers đúng
- **Evidence:** Cache headers report

### SEO
- [ ] robots.txt có
- [ ] sitemap.xml có
- [ ] Canonical URL đúng
- [ ] Domain đúng
- **Evidence:** robots.txt + sitemap.xml content

### Lighthouse
- [ ] Performance ≥ 90
- [ ] SEO ≥ 90
- [ ] Accessibility ≥ 90
- [ ] Best Practices ≥ 90
- **Evidence:** Lighthouse report

---

## P8 — Commerce Audit QA (nếu có bán hàng)

### Pricing
- [ ] Pricing page có
- [ ] Giá rõ ràng
- [ ] Currency rõ ràng
- [ ] Billing cycle rõ ràng
- [ ] Features rõ ràng
- [ ] CTA rõ ràng
- **Evidence:** Pricing page screenshot

### Checkout
- [ ] Checkout page có
- [ ] Form fields rõ ràng
- [ ] Payment methods rõ ràng
- [ ] Order summary rõ ràng
- [ ] Terms checkbox có
- [ ] Validation hoạt động
- **Evidence:** Checkout flow screenshot

### Payment
- [ ] Payment secure
- [ ] Payment methods rõ
- [ ] Payment flow smooth
- [ ] Error handling đúng
- [ ] Webhook xử lý đúng
- **Evidence:** Payment test report

### Invoice
- [ ] Invoice template có
- [ ] Entity name đúng
- [ ] Invoice number rõ
- [ ] Items rõ
- [ ] Total rõ
- [ ] Brand consistent
- **Evidence:** Invoice sample

### Email
- [ ] Order confirmation email
- [ ] Payment confirmation email
- [ ] Invoice email
- [ ] Refund email
- [ ] Brand consistent
- [ ] Subject line rõ
- **Evidence:** Email templates

### Refund
- [ ] Refund policy có
- [ ] Conditions rõ
- [ ] Process rõ
- [ ] Timeline rõ
- **Evidence:** Refund policy screenshot

### Terms
- [ ] Terms page có
- [ ] Entity name đúng
- [ ] Jurisdiction rõ
- [ ] Liability rõ
- [ ] Payment terms rõ
- **Evidence:** Terms screenshot

---

## P9 — Legal Audit QA

### Legal Pages
- [ ] Terms page có
- [ ] Privacy page có
- [ ] Cookie policy có (nếu cần)
- [ ] Entity name đúng
- [ ] Jurisdiction rõ
- [ ] Liability rõ
- [ ] Bilingual (nếu site bilingual)
- **Evidence:** Legal pages screenshot

### Entity Disclosure
- [ ] Entity name consistent
- [ ] Legal entity type đúng
- [ ] Address đúng
- [ ] Contact đúng
- **Evidence:** Entity verification report

---

## Post-QA Checklist

### Bug Report
- [ ] Tất cả bugs documented
- [ ] Bugs categorized (P0/P1/P2)
- [ ] Bugs assigned
- [ ] Bugs tracked

### Evidence Pack
- [ ] Tất cả evidence collected
- [ ] Evidence organized
- [ ] Evidence accessible
- [ ] Evidence versioned

### Sign-off
- [ ] QA sign-off
- [ ] Developer sign-off
- [ ] Designer sign-off (nếu có)
- [ ] Legal sign-off (nếu có)
- [ ] Founder/Owner sign-off

---

## QA Report Template

```
Website: [domain]
Date: [YYYY-MM-DD]
QA Engineer: [Name]

P0 — Brand Consistency: [PASS/FAIL]
P1 — Language Audit: [PASS/FAIL]
P2 — Content Consistency: [PASS/FAIL]
P3 — Translation Audit: [PASS/FAIL]
P4 — Content Structure: [PASS/FAIL]
P5 — UX Audit: [PASS/FAIL]
P6 — PWA Audit: [PASS/FAIL]
P7 — Technical Audit: [PASS/FAIL]
P8 — Commerce Audit: [PASS/FAIL] (nếu có)
P9 — Legal Audit: [PASS/FAIL]

Bugs Found: [number]
P0 Blockers: [number]
P1 Major: [number]
P2 Minor: [number]

Evidence Pack: [Link]
Recommendation: [PASS/FAIL/CONDITIONAL]
```

---

## Authority

**Nguồn chân lý:** `/WPAS/11_QA_CHECKLIST.md`
**Mọi QA phải tuân thủ.**
**Không được sign-off nếu checklist không pass.**
