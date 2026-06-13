# SEVERITY MATRIX
# SEVERITY MATRIX

**System:** Website Production Acceptance System (WPAS)
**Version:** 1.0
**Created:** 2026-06-08
**Scope:** Toàn bộ hệ sinh thái website

---

## Mục tiêu

Định nghĩa severity levels để team không cãi nhau cái gì là blocker.

---

## Severity Levels

### P0 Blocker — Không được deploy

**Definition:** Critical issues preventing production deployment.

**Examples:**
- Sai domain production
- Canonical sai domain
- Sitemap sai domain
- Logo sai thương hiệu
- Entity/brand name sai nghiêm trọng
- Public page dùng nhầm thương hiệu dự án khác
- Payment không secure
- Không có terms/privacy page
- Lighthouse score < 50
- Security header critical missing (CSP)

**Action:** BLOCK release, fix immediately.

**Timeline:** Must fix before deploy.

---

### P1 Major — Phải sửa trước release

**Definition:** Important issues affecting user experience or trust.

**Examples:**
- Favicon sai
- OG image sai
- Màu lệch brand
- Font không đúng hệ
- Footer/header không đồng nhất
- Pricing không rõ
- Checkout flow không smooth
- Email không brand consistent
- Refund policy không có
- Lighthouse score 50-89
- Accessibility score < 90

**Action:** Fix before release, can deploy if workaround exists.

**Timeline:** Must fix within current sprint.

---

### P2 Minor — Có thể sửa sau release nếu không ảnh hưởng trust

**Definition:** Minor issues not affecting core functionality or trust.

**Examples:**
- Spacing logo chưa đều
- Một vài icon thiếu size phụ
- Alt text logo chưa hoàn chỉnh
- Subject line email không tối ưu
- CTA email không rõ
- Refund timeline không rõ
- Lighthouse score 90-94
- Performance score 90-94

**Action:** Fix in next sprint, can deploy.

**Timeline:** Fix within 2 sprints.

---

### P3 Trivial — Có thể backlog

**Definition:** Trivial issues not affecting user experience.

**Examples:**
- Tài liệu nội bộ chưa cập nhật
- Comment code chưa tối ưu
- Variable naming không consistent
- Code formatting không perfect

**Action:** Backlog, fix when time permits.

**Timeline:** No deadline.

---

## Severity by Phase

### P0 — Brand Consistency

| Issue | Severity | Rationale |
|-------|----------|-----------|
| Sai domain production | P0 | Critical brand damage |
| Canonical sai domain | P0 | SEO critical |
| Sitemap sai domain | P0 | SEO critical |
| Logo sai thương hiệu | P0 | Brand damage |
| Entity name sai | P0 | Legal critical |
| Favicon sai | P1 | UX minor |
| OG image sai | P1 | Social sharing minor |
| Màu lệch brand | P1 | Brand consistency minor |
| Font không đúng hệ | P1 | Brand consistency minor |
| Spacing logo chưa đều | P2 | Visual polish |

### P1 — Language Audit

| Issue | Severity | Rationale |
|-------|----------|-----------|
| Không có MASTER LANGUAGE CODEX | P0 | System critical |
| Term có nhiều translation khác nhau | P1 | User confusion |
| Vietnamese thiếu diacritics | P1 | Brand damage |
| English không natural | P2 | UX minor |
| Diacritic rules không tuân thủ | P1 | Brand damage |

### P2 — Content Consistency

| Issue | Severity | Rationale |
|-------|----------|-----------|
| Overclaim nghiêm trọng | P0 | Legal/trust critical |
| Thần thánh hóa | P1 | Trust damage |
| Giật tít | P1 | Trust damage |
| Quảng cáo quá mức | P1 | Trust damage |
| Hierarchy sai | P2 | SEO minor |
| Title/Description/CTA không đồng bộ | P2 | SEO minor |

### P3 — Translation Audit

| Issue | Severity | Rationale |
|-------|----------|-----------|
| Dev tự dịch, tự sáng tác | P0 | System critical |
| 1-to-1 mapping không tuân thủ | P1 | User confusion |
| Context không consistent | P1 | User confusion |
| Translation không chính xác | P1 | User confusion |
| Translation không tự nhiên | P2 | UX minor |

### P4 — Content Structure

| Issue | Severity | Rationale |
|-------|----------|-----------|
| Hierarchy sai nghiêm trọng | P1 | SEO/accessibility |
| Meta tags thiếu | P1 | SEO critical |
| Canonical URL sai | P0 | SEO critical |
| Title/Description/CTA không đồng bộ | P2 | SEO minor |

### P5 — UX Audit

| Issue | Severity | Rationale |
|-------|----------|-----------|
| Text tràn trên mobile | P1 | UX critical |
| Button < 44px trên mobile | P1 | UX critical |
- Navigation không hoạt động | P0 | UX critical |
- Có scroll ngang | P1 | UX critical |
- Button lệch | P2 | Visual polish |
- Menu lỗi | P0 | UX critical |

### P6 — PWA Audit

| Issue | Severity | Rationale |
|-------|----------|-----------|
- Manifest không có | P1 | PWA not working |
- Thiếu icon sizes | P1 | PWA not working |
- Service worker không hoạt động | P1 | PWA not working |
- Offline page không có | P2 | PWA minor |
- Install prompt không hoạt động | P2 | PWA minor |
- Splash screen không có | P2 | PWA minor |

### P7 — Technical Audit

| Issue | Severity | Rationale |
|-------|----------|-----------|
- 404/500 page không có | P1 | UX critical |
- Redirect loops | P0 | UX critical |
- Thiếu security headers | P0 | Security critical |
- Cache policy sai | P1 | Performance critical |
- robots.txt/sitemap.xml sai | P0 | SEO critical |
- Canonical URL sai | P0 | SEO critical |
- Lighthouse score < 50 | P0 | Performance critical |
- Lighthouse score 50-89 | P1 | Performance major |

### P8 — Commerce Audit (nếu có)

| Issue | Severity | Rationale |
|-------|----------|-----------|
- Payment không secure | P0 | Security critical |
- Entity name sai trong invoice/terms | P0 | Legal critical |
- Không có refund policy | P0 | Legal critical |
- Không có terms | P0 | Legal critical |
- Pricing không rõ | P1 | UX major |
- Checkout flow không smooth | P1 | UX major |
- Email không brand consistent | P1 | Brand damage |
- Webhook không xử lý | P1 | Functionality major |

### P9 — Legal Audit

| Issue | Severity | Rationale |
|-------|----------|-----------|
- Không có terms page | P0 | Legal critical |
- Không có privacy page | P0 | Legal critical |
- Entity name sai | P0 | Legal critical |
- Jurisdiction không rõ | P1 | Legal major |
- Liability không rõ | P1 | Legal major |

---

## Severity Escalation

### Escalation Rules
- P0: Escalate to Founder/Owner immediately
- P1: Escalate to Tech Lead within 24 hours
- P2: Escalate to Tech Lead within 1 week
- P3: Backlog, no escalation

### Resolution Timeline
- P0: Fix immediately (within hours)
- P1: Fix within current sprint (days)
- P2: Fix within 2 sprints (weeks)
- P3: Fix when time permits (months)

---

## Authority

**Nguồn chân lý:** `/WPAS/06_SEVERITY_MATRIX.md`
**Mọi dev, QA, Tech Lead phải tuân thủ.**
**Không được deploy nếu có P0 blocker.**
