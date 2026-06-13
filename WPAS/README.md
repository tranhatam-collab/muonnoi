# WPAS — Website Production Acceptance System
# WPAS — Website Production Acceptance System

**Version:** 1.0
**Created:** 2026-06-08
**Scope:** Toàn bộ hệ sinh thái website

---

## Mục tiêu

Website Production Acceptance System (WPAS) là hệ thống thống nhất để đảm bảo mọi website trong hệ sinh thái:
- Tranhatam.com
- Vetuonglai.com
- Computer.iai.one
- AIagent.iai.one
- Maytinhai.org
- AIAccountingLoop.com
- Omdala.com
- Muonnoi.org
- Duongsaotoasang.com
- Nguyenlananh.com
- Nhachung.org
- Và mọi website sau này

đều đạt chuẩn quality trước khi LIVE.

---

## Quy tắc cốt lõi

**Không cho phép bất kỳ website nào:**
- LIVE
- DEPLOY
- PRODUCTION

nếu chưa vượt qua:
- P0 — Brand Consistency Audit
- P1 — Language Audit
- P2 — Content Consistency Audit
- P3 — Translation Audit
- P4 — Content Structure Audit
- P5 — UX Audit
- P6 — PWA Audit
- P7 — Technical Audit
- P8 — Commerce Audit (nếu có bán hàng)
- P9 — Legal Audit
- P10 — Production Readiness Audit

100%.

---

## Cấu trúc WPAS

```
WPAS/
├── 00_WORKFLOW_PROCESS.md          # Quy trình vận hành chuẩn 12 bước
├── 01_BRAND_CODEX.md              # Quy tắc brand consistency
├── 02_LANGUAGE_CODEX.md            # Quy tắc language audit
├── 03_CONTENT_RULES.md             # Quy tắc content consistency
├── 03_DESIGN_TOKENS.md            # Design tokens chuẩn
├── 04_TRANSLATION_RULES.md        # Quy tắc translation audit
├── 04_BRAND_REGISTRY.md           # Registry brand cho từng website
├── 05_UX_RULES.md                 # Quy tắc UX audit
├── 05_EVIDENCE_MATRIX.md          # Evidence requirements
├── 06_PWA_RULES.md                # Quy tắc PWA audit
├── 06_SEVERITY_MATRIX.md          # Severity levels (P0/P1/P2/P3)
├── 07_AUTOMATION_RULES.md         # Automation rules cho AI/dev
├── 07_SECURITY_RULES.md           # Quy tắc technical audit
├── 08_COMMERCE_RULES.md           # Quy tắc commerce audit
├── 09_THEME_RULES.md              # Quy tắc Light/Dark/Auto mode
├── 10_PRODUCTION_GATE.md          # Production gate checklist
├── 11_QA_CHECKLIST.md             # QA checklist tổng hợp
└── 12_RELEASE_REPORT_TEMPLATE.md  # Release report template
```

---

## Các Phase Audit

### P0 — Brand Consistency Audit
Kiểm tra nhận diện thương hiệu:
- Domain consistency
- Logo consistency
- Brand name consistency
- Color consistency
- Typography consistency

**File:** `01_BRAND_CODEX.md`

### P1 — Language Audit
Kiểm tra ngôn ngữ:
- MASTER LANGUAGE CODEX
- Bilingual consistency
- Diacritic rules
- Translation rules

**File:** `02_LANGUAGE_CODEX.md`

### P2 — Content Consistency Audit
Kiểm tra content:
- Không overclaim
- Không thần thánh hóa
- Không giật tít
- Không quảng cáo quá mức
- Content structure

**File:** `03_CONTENT_RULES.md`

### P3 — Translation Audit
Kiểm tra translation:
- 1-to-1 mapping
- Context consistency
- Translation quality
- Process tuân thủ

**File:** `04_TRANSLATION_RULES.md`

### P4 — Content Structure Audit
Kiểm tra structure:
- Hierarchy (H1 → H2 → H3)
- Title/Description/CTA đồng bộ
- Meta tags

**File:** `03_CONTENT_RULES.md`

### P5 — UX Audit
Kiểm tra UX:
- Mobile (390px, 430px)
- Tablet (768px, 1024px)
- Desktop (1440px, 1920px)
- Không scroll ngang
- Button align
- Menu hoạt động

**File:** `05_UX_RULES.md`

### P6 — PWA Audit
Kiểm tra PWA:
- Manifest
- Icon sizes
- Service worker
- Offline page
- Install prompt
- Splash screen

**File:** `06_PWA_RULES.md`

### P7 — Technical Audit
Kiểm tra technical:
- 404/500 pages
- Redirects
- Security headers
- Cache policy
- robots.txt
- sitemap.xml
- Canonical URL
- Lighthouse scores

**File:** `07_SECURITY_RULES.md`

### P8 — Commerce Audit (nếu có bán hàng)
Kiểm tra commerce:
- Pricing
- Checkout
- Payment
- Invoice
- Email
- Refund
- Terms

**File:** `08_COMMERCE_RULES.md`

### P9 — Legal Audit
Kiểm tra legal:
- Terms
- Privacy
- Cookie policy
- Entity disclosure

**File:** `09_LEGAL_AUDIT.md` (chưa tạo, cần thêm)

### P10 — Production Readiness Audit
Kiểm tra production readiness:
- Tất cả P0-P9 PASS
- Evidence complete
- Sign-offs có

**File:** `10_PRODUCTION_GATE.md`

---

## Theme Rules (Mới)

**Quy tắc 3 chế độ:**
- Light Mode (Sáng)
- Dark Mode (Tối)
- Auto Mode (Tự động theo hệ thống)

**Bắt buộc:**
- Đồng bộ trong mọi giao diện
- Lưu preference người dùng
- Accessibility (contrast ≥ 4.5:1)

**File:** `09_THEME_RULES.md`

---

## Files Bổ Sung

### Design Tokens
Design tokens chuẩn cho toàn hệ sinh thái:
- Color tokens
- Typography tokens
- Spacing tokens
- Border radius tokens
- Shadow tokens
- Animation tokens
- Z-index tokens
- Breakpoint tokens

**File:** `03_DESIGN_TOKENS.md`

### Brand Registry
Registry brand cho từng website:
- Canonical domain
- UI brand label
- Legal label
- Logo source
- Color token file
- Typo token file
- Owner
- Status

**File:** `04_BRAND_REGISTRY.md`

### Evidence Matrix
Evidence requirements cho mỗi phase:
- Bằng chứng bắt buộc
- Format
- Evidence pack structure
- Evidence quality rules

**File:** `05_EVIDENCE_MATRIX.md`

### Severity Matrix
Severity levels để team không cãi nhau:
- P0 Blocker (không được deploy)
- P1 Major (phải sửa trước release)
- P2 Minor (có thể sửa sau release)
- P3 Trivial (backlog)

**File:** `06_SEVERITY_MATRIX.md`

### Automation Rules
Automation rules để AI/dev/script kiểm tự động:
- Machine-checkable rules
- Script templates
- CI/CD integration

**File:** `07_AUTOMATION_RULES.md`

---

## Quy Trình Vận Hành

**12 Bước:**
1. Build
2. Self Audit
3. AI Audit
4. Human QA
5. Production Gate
6. Release Candidate
7. Staging
8. Founder Review
9. Production Deploy
10. Post Deploy Verification
11. Release Report
12. Archive Evidence

**File:** `00_WORKFLOW_PROCESS.md`

---

## Authority

**Nguồn chân lý bắt buộc:**
- `/WPAS/01_BRAND_CODEX.md`
- `/WPAS/02_LANGUAGE_CODEX.md`
- `/WPAS/03_DESIGN_TOKENS.md`
- `/WPAS/04_BRAND_REGISTRY.md`
- `/WPAS/05_EVIDENCE_MATRIX.md`
- `/WPAS/06_SEVERITY_MATRIX.md`
- `/WPAS/07_AUTOMATION_RULES.md`
- `/WPAS/00_WORKFLOW_PROCESS.md`

**Mọi dev, AI agent, content writer, designer, QA, legal, founder phải tuân thủ.**

**Không được tự sáng tác, tự dịch, tự thay đổi brand/language/content.**

**Không được deploy nếu WPAS không pass.**

---

## Cách Sử Dụng

### Cho Dev
1. Read `00_WORKFLOW_PROCESS.md` để hiểu quy trình
2. Read phase-specific files (P0-P10)
3. Follow workflow 12 bước
4. Use automation rules trong `07_AUTOMATION_RULES.md`
5. Collect evidence theo `05_EVIDENCE_MATRIX.md`

### Cho QA
1. Read `11_QA_CHECKLIST.md` để hiểu checklist
2. Use severity matrix trong `06_SEVERITY_MATRIX.md`
3. Collect evidence theo `05_EVIDENCE_MATRIX.md`
4. Sign-off khi pass

### Cho AI Agent
1. Read tất cả WPAS files
2. Use automation rules trong `07_AUTOMATION_RULES.md`
3. Check P0-P10 theo rules
4. Flag P0/P1 issues
5. Generate reports

### Cho Founder/Owner
1. Read `10_PRODUCTION_GATE.md` để hiểu gate
2. Review staging trước production
3. Sign-off production deploy
4. Review release report

---

## Status

**Version:** 1.0
**Created:** 2026-06-08
**Status:** Production-ready

**Next Steps:**
1. Áp dụng WPAS cho tranhatam.com
2. Áp dụng WPAS cho các website khác
3. Train team về WPAS
4. Integrate vào CI/CD
5. Monitor và improve

---

## Contact

**Questions:** Contact Founder/Owner
**Issues:** Create issue in project tracker
**Updates:** Follow changelog in releases
