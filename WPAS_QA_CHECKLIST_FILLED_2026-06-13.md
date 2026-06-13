# QA CHECKLIST — FILLED
# QA Checklist cho Muôn Nơi (homepage)

> **Ngày:** 2026-06-13
> **Project:** Muôn Nơi
> **Surface:** www.muonnoi.org (homepage)
> **QA:** AI Agent
> **Approver:** Founder

---

## Pre-QA Checklist

### Environment
- [x] Staging environment có (Cloudflare Pages Preview)
- [ ] Database staging có (N/A — static site)
- [ ] API staging có (N/A — static site)
- [ ] Payment staging có (N/A — không có bán hàng)
- [ ] Email staging có (N/A — không có email)

### Access
- [x] QA access credentials có (public site)
- [ ] Admin access credentials có (N/A — không có admin)
- [ ] Test data có (N/A — static site)
- [ ] Test accounts có (N/A — không có accounts)

---

## P0 — Brand Consistency QA

### Domain
- [x] URL production đúng (https://www.muonnoi.org)
- [x] Canonical URL đúng (https://www.muonnoi.org)
- [x] Sitemap đúng domain (https://www.muonnoi.org/sitemap.xml)
- [x] Robots.txt đúng domain (https://www.muonnoi.org/robots.txt)
- [x] OG:URL đúng domain (https://www.muonnoi.org)
- **Evidence:** curl -I https://www.muonnoi.org, screenshot, link sitemap/robots

### Logo
- [x] Header logo đúng (desktop)
- [ ] Header logo đúng (mobile) — ⏳ Need verify
- [x] Footer logo đúng
- [x] OG image đúng
- [ ] PWA icon đúng — ⏳ Need verify
- [x] Favicon đúng
- [ ] Email template logo đúng — ⏳ N/A — không có email
- [ ] PDF export logo đúng — ⏳ N/A — không có PDF
- **Evidence:** Screenshot từng touchpoint + asset path

### Brand Name
- [x] Tên thương hiệu đúng chuẩn (Muôn Nơi)
- [x] Không có variant khác
- [ ] Document trong BRAND_CODEX — ⏳ Need create
- [x] Search toàn repo không có variant khác
- **Evidence:** Search result + BRAND_CODEX link

### Color
- [x] Primary color đúng hex (#000000)
- [x] Secondary color đúng hex (#ffffff)
- [x] Accent color đúng hex (#3b82f6)
- [x] Background colors đúng
- [x] Text colors đúng
- [x] CSS variables đúng
- **Evidence:** CSS variables screenshot + design tokens

### Typography
- [x] Font family đúng (Inter)
- [x] Font weights đúng (400, 500, 600, 700)
- [x] Font sizes đúng (H1, H2, H3, body, small)
- [x] Line heights đúng
- [x] Letter spacing đúng
- **Evidence:** CSS source + screenshot

---

## P1 — Language Audit QA

### Language Codex
- [ ] MASTER LANGUAGE CODEX tồn tại — ⏳ Need create
- [ ] File vi.json hoặc LANGUAGE_CODEX_MASTER_VI.md có — ⏳ Need create
- [ ] File en.json hoặc LANGUAGE_CODEX_MASTER_EN.md có — ⏳ Need create
- [ ] Tất cả terms có cặp VI/EN — ⏳ Need create
- [ ] Không có duplicate terms — ⏳ Need create
- **Evidence:** Link file + screenshot content

### Bilingual Consistency
- [ ] Mỗi term có 1 cặp VI/EN duy nhất — ⏳ Need create
- [ ] Không có lung tung translation — ⏳ Need create
- [ ] Context consistent — ⏳ Need create
- **Evidence:** Translation consistency report

### Diacritic Rules
- [x] Vietnamese full diacritics
- [x] Vietnamese đúng chính tả
- [ ] English natural — ⏳ Need verify
- [ ] English consistent capitalization — ⏳ Need verify
- **Evidence:** Screenshot bilingual pages

### Translation Rules
- [ ] 1-to-1 mapping — ⏳ Need create
- [ ] Context consistent — ⏳ Need create
- [ ] No self-translation — ⏳ Need create
- **Evidence:** Translation audit report

---

## P2 — Content Consistency QA

### Content Rules
- [x] Không overclaim
- [x] Không thần thánh hóa
- [x] Không giật tít
- [x] Không quảng cáo quá mức
- **Evidence:** Content audit report

### Content Structure
- [x] Hierarchy đúng (H1 → H2 → H3)
- [x] Title, Description, CTA đồng bộ
- [x] Không nhảy cấp heading
- **Evidence:** Hierarchy audit report

### Content Quality
- [x] Clarity (rõ ràng, dễ hiểu)
- [x] Accuracy (chính xác)
- [x] Relevance (phù hợp audience)
- **Evidence:** Content quality report

### Scope Coverage
- [x] Landing page
- [ ] Blog posts — ⏳ N/A — không có blog
- [x] Documentation (docs.muonnoi.org)
- [x] FAQ (trong homepage)
- [x] Legal pages (terms, privacy)
- [ ] Pricing page — ⏳ N/A — không có pricing
- [ ] Checkout flow — ⏳ N/A — không có checkout
- [ ] Email templates — ⏳ N/A — không có email
- [ ] Dashboard — ⏳ N/A — không có dashboard
- [ ] App UI — ⏳ N/A — không có app UI trên homepage
- **Evidence:** Screenshot từng page

---

## P3 — Translation Audit QA

### 1-to-1 Mapping
- [ ] Mỗi term VI map 1-to-1 với EN — ⏳ Need create
- [ ] Không có nhiều translation khác nhau — ⏳ Need create
- [ ] Consistent toàn hệ thống — ⏳ Need create
- **Evidence:** 1-to-1 mapping report

### Context Consistency
- [ ] Cùng context, cùng translation — ⏳ Need create
- [ ] Không có context-specific translation khác nhau — ⏳ Need create
- **Evidence:** Context consistency report

### Translation Quality
- [ ] Translation chính xác nghĩa — ⏳ Need create
- [ ] Translation tự nhiên — ⏳ Need create
- [ ] Translation consistent — ⏳ Need create
- **Evidence:** Translation quality report

### Process
- [ ] Check MASTER LANGUAGE CODEX trước — ⏳ Need create
- [ ] Không tự dịch — ⏳ Need create
- [ ] Context check — ⏳ Need create
- [ ] Review — ⏳ Need create
- **Evidence:** Process checklist

---

## P4 — Content Structure QA

### Hierarchy
- [x] H1 → H2 → H3 đúng
- [x] Không nhảy cấp
- [x] Heading levels consistent
- **Evidence:** Hierarchy audit report

### Meta Tags
- [x] Title tag có
- [x] Meta description có
- [x] OG tags đầy đủ
- [ ] Twitter tags đầy đủ — ⏳ Need verify
- [x] Canonical URL có
- [ ] Hreflang có (nếu bilingual) — ⏳ Need implement
- **Evidence:** Meta tags audit report

### CTA Consistency
- [x] Title, Description, CTA đồng bộ
- [x] CTA language consistent
- [x] CTA action clear
- **Evidence:** CTA audit report

---

## P5 — UX Audit QA

### Mobile (390px, 430px)
- [ ] Text không tràn — ⏳ Need verify
- [ ] Button height ≥ 44px — ⏳ Need verify
- [ ] Navigation hoạt động — ⏳ Need verify
- [ ] Form dễ điền — ⏳ N/A — không có form
- [ ] Không scroll ngang — ⏳ Need verify
- **Evidence:** Screenshot mobile (390px, 430px)

### Tablet (768px, 1024px)
- [ ] Layout phù hợp — ⏳ Need verify
- [ ] Grid layout 2-column — ⏳ Need verify
- [ ] Navigation responsive — ⏳ Need verify
- [ ] Content không quá rộng — ⏳ Need verify
- **Evidence:** Screenshot tablet (768px, 1024px)

### Desktop (1440px, 1920px)
- [x] Max-width container
- [x] Content dễ đọc
- [x] Navigation dễ dùng
- [x] Hover states hoạt động
- **Evidence:** Screenshot desktop (1440px, 1920px)

### Common Issues
- [x] Không scroll ngang
- [x] Button align đúng
- [x] Menu hoạt động đúng
- **Evidence:** UX audit report

---

## P6 — PWA Audit QA

### Manifest
- [x] manifest.webmanifest tồn tại
- [x] Link tag trong HTML
- [x] JSON valid
- [x] Tất cả fields bắt buộc có
- **Evidence:** Manifest file + validation

### Icons
- [ ] 72x72 icon — ⏳ Need verify
- [ ] 96x96 icon — ⏳ Need verify
- [ ] 128x128 icon — ⏳ Need verify
- [ ] 144x144 icon — ⏳ Need verify
- [ ] 152x152 icon — ⏳ Need verify
- [ ] 192x192 icon — ⏳ Need verify
- [ ] 384x384 icon — ⏳ Need verify
- [ ] 512x512 icon — ⏳ Need verify
- [ ] Icon quality tốt — ⏳ Need verify
- [ ] Icon consistent — ⏳ Need verify
- **Evidence:** Icon inventory + screenshot

### Service Worker
- [ ] sw.js tồn tại — ⏳ Need verify
- [ ] Service worker đăng ký — ⏳ Need verify
- [ ] Service worker hoạt động — ⏳ Need verify
- [ ] Cache strategy đúng — ⏳ Need verify
- **Evidence:** Service worker log + cache report

### Offline
- [ ] Offline page có — ⏳ Need verify
- [ ] Thông báo rõ ràng — ⏳ Need verify
- [ ] Brand consistent — ⏳ Need verify
- [ ] Retry hoạt động — ⏳ Need verify
- **Evidence:** Offline page screenshot

### Install
- [ ] Install prompt hoạt động — ⏳ Need verify
- [ ] Icon đúng — ⏳ Need verify
- [ ] Name đúng — ⏳ Need verify
- [ ] Description đúng — ⏳ Need verify
- **Evidence:** Install prompt screenshot

### Splash Screen
- [ ] Splash screen có — ⏳ Need verify
- [ ] Icon đúng — ⏳ Need verify
- [ ] Background color đúng — ⏳ Need verify
- [ ] Brand consistent — ⏳ Need verify
- **Evidence:** Splash screen screenshot

---

## P7 — Technical Audit QA

### Error Pages
- [x] 404 page có
- [x] 404 brand consistent
- [ ] 500 page có — ⏳ Need verify
- [ ] 500 brand consistent — ⏳ Need verify
- **Evidence:** Screenshot 404/500

### Redirects
- [x] Redirect rules đúng
- [x] Không redirect loops
- [x] HTTP → HTTPS
- [x] www/non-www consistent
- **Evidence:** Redirect test report

### Security Headers
- [x] X-Content-Type-Options
- [x] X-Frame-Options
- [x] Referrer-Policy
- [x] Permissions-Policy
- [x] Strict-Transport-Security
- [x] Content-Security-Policy
- **Evidence:** curl -I headers

### Cache Policy
- [x] Static assets cache lâu
- [x] HTML cache ngắn
- [x] Cache headers đúng
- **Evidence:** Cache headers report

### SEO
- [x] robots.txt có
- [x] sitemap.xml có
- [x] Canonical URL đúng
- [x] Domain đúng
- **Evidence:** robots.txt + sitemap.xml content

### Lighthouse
- [ ] Performance ≥ 90 — ⏳ Need run
- [ ] SEO ≥ 90 — ⏳ Need run
- [ ] Accessibility ≥ 90 — ⏳ Need run
- [ ] Best Practices ≥ 90 — ⏳ Need run
- **Evidence:** Lighthouse report

---

## P8 — Commerce Audit (nếu có)

N/A — không có commerce

---

## P9 — Legal Audit

### Legal pages
- [x] Legal pages screenshot (terms, privacy)
- [x] Entity disclosure
- **Evidence:** Legal pages screenshot

---

## SUMMARY

**P0 — Brand Consistency:** ✅ Mostly complete (mobile logo, PWA icon need verify)
**P1 — Language Audit:** ⏳ Need create MASTER LANGUAGE CODEX
**P2 — Content Consistency:** ✅ Complete
**P3 — Translation Audit:** ⏳ Need create translation system
**P4 — Content Structure:** ✅ Mostly complete (Twitter tags, hreflang need verify)
**P5 — UX Audit:** ⏳ Need verify mobile/tablet
**P6 — PWA Audit:** ⏳ Need verify PWA features
**P7 — Technical Audit:** ✅ Mostly complete (Lighthouse need run)
**P8 — Commerce Audit:** N/A
**P9 — Legal Audit:** ✅ Complete

**Overall Status:** ⏳ Partially complete — Need verify remaining items

---

**QA Checklist filled.**
**Mostly complete for static homepage.**
**Need verify remaining items.**
