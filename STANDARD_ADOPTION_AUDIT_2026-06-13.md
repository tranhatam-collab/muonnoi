# MUÔN NƠI — AUDIT ÁP DỤNG CHUẨN WPAS + BRANDPRO v2.0
# Audit hiện tại so với 2 bộ chuẩn vận hành

> **Ngày audit:** 2026-06-13
> **Bộ chuẩn:**
> - WPAS (Website Production Acceptance System) — 12 file quy trình production
> - Brandpro v2.0 — 20 file brand strategy + governance
> **Mục tiêu:** Tạo kế hoạch áp dụng chuẩn cho toàn team (muonnoi.org + các sub)

---

## 1. TÓM TẮT 2 BỘ CHUẨN

### 1.1 WPAS — Quy trình vận hành production (12 file)

**Triết lý:** "Deploy thành công ≠ live" — phải verify production thật với evidence.

**12 file WPAS:**
- `00_WORKFLOW_PROCESS.md` — Quy trình 12 bước (Build → Self Audit → AI Audit → Human QA → Production Gate → Release Candidate → Staging → Founder Review → Production Deploy → Post Deploy Verification → Release Report → Archive Evidence)
- `01_BRAND_CODEX.md` — Brand consistency rules
- `02_LANGUAGE_CODEX.md` — Language codex (VI/EN)
- `03_CONTENT_RULES.md` — Content rules (no overclaim, no thần thánh hóa)
- `03_DESIGN_TOKENS.md` — Design tokens
- `04_BRAND_REGISTRY.md` — Brand registry
- `04_TRANSLATION_RULES.md` — Translation rules (1-to-1 mapping)
- `05_EVIDENCE_MATRIX.md` — Evidence bắt buộc cho mỗi phase
- `05_UX_RULES.md` — UX rules (mobile/tablet/desktop)
- `06_PWA_RULES.md` — PWA rules (manifest, icons, service worker)
- `06_SEVERITY_MATRIX.md` — Severity levels (P0-P9)
- `07_AUTOMATION_RULES.md` — Automation rules
- `07_SECURITY_RULES.md` — Security rules
- `08_COMMERCE_RULES.md` — Commerce rules (nếu có)
- `09_THEME_RULES.md` — Theme rules
- `10_PRODUCTION_GATE.md` — Production gate criteria
- `11_QA_CHECKLIST.md` — QA checklist (P0-P9)
- `12_RELEASE_REPORT_TEMPLATE.md` — Release report template

**Quy trình 12 bước:**
1. Build
2. Self Audit (dev tự audit)
3. AI Audit (AI agent audit)
4. Human QA (QA manual check)
5. Production Gate (quyết định PASS/FAIL)
6. Release Candidate (tag release)
7. Staging (test trên staging)
8. Founder Review (Founder review staging)
9. Production Deploy (deploy to production)
10. Post Deploy Verification (verify production)
11. Release Report (document release)
12. Archive Evidence (archive evidence pack)

**Severity Matrix:**
- P0 Blocker — Không được deploy (sai domain, sai logo, Lighthouse < 50)
- P1 Major — Phải sửa trước release (favicon sai, OG image sai, Lighthouse 50-89)
- P2 Minor — Có thể sửa sau release (spacing chưa đều, Lighthouse 90-94)
- P3 Trivial — Có thể backlog (comment code chưa tối ưu)

**Evidence Matrix:**
- Mỗi phase phải có evidence bắt buộc (screenshot, report, curl output)
- Không có evidence = chưa PASS

---

### 1.2 Brandpro v2.0 — Bộ kit brand strategy (20 file)

**Triết lý:** "Logic trước Mỹ thuật" — quyết định chiến lược trước khi vẽ logo.

**20 file Brandpro:**
- `00-README.md` — Hướng dẫn dùng kit
- `01-Master-Plan.md` — Roadmap 120 ngày + RACI + Milestone
- `02-Brand-Forensics.md` — Audit domain, SERP, TM, social, phonetic
- `03-Risk-Matrix.md` — Risk matrix + decision tree
- `04-Naming-Strategy.md` — Naming strategy + collision strategy
- `05-Brand-Pillars.md` — Mission, Vision, Values, Positioning, Persona
- `06-Verbal-Identity.md` — Voice, tone, naming convention, product copy
- `07-Visual-Identity-Spec.md` — Logo, color, typo, design tokens
- `08-Brand-Book-Outline.md` — Brand book outline
- `09-Bilingual-Messaging.md` — Messaging matrix VI/EN + product UI strings
- `10-SEO-Entity-Plan.md` — Entity SEO, schema, hreflang
- `11-Legal-Defense.md` — Trademark + defensive domains
- `12-Governance.md` — Brand Guardian, Asset Hub, Audit, Approval Workflow
- `13-Briefs-Templates.md` — 7 brief templates
- `14-Trackers.md` — Budget, Risk Register, Content Calendar, Asset Version Log, KPI Scorecard, Product Brand Metrics
- `15-Application-Playbook.md` — Hướng dẫn áp kit
- `16-Product-Brand-System.md` — Feature naming, in-app copy, onboarding branding
- `17-Design-System-Dev-Handoff.md` — Design tokens, components, Figma-to-code
- `18-Brand-Architecture.md` — Master/sub/endorsed brand framework
- `19-Competitive-Moat.md` — Tech positioning: network effects, data moat

**5 pha (120 ngày):**
- Pha 1 — ĐIỀU TRA (Day 1 → Day 14): Forensics + Risk Matrix
- Pha 2 — CHIẾN LƯỢC (Day 15 → Day 28): Naming + Brand Pillars + Architecture + Moat
- Pha 3 — IDENTITY (Day 29 → Day 56): Verbal + Visual + Brand Book + Design Token
- Pha 4 — PRODUCT, LOCALIZATION & DIGITAL (Day 57 → Day 90): Bilingual + SEO + Product Copy + Design System
- Pha 5 — PHÒNG THỦ & VẬN HÀNH (Day 91 → Day 120): Trademark + Governance

**Governance:**
- Brand Guardian role (veto quyền, enforce brand book)
- Asset Hub (structure + access matrix)
- Approval Workflow (Tier 0-3)
- Quarterly Audit (Q1 visual, Q2 verbal, Q3 digital, Q4 product)
- Annual Brand Review

**Trackers:**
- Budget Tracker
- Risk Register
- Content Calendar
- Asset Version Log
- KPI Scorecard
- Product Brand Metrics (NEW in v2.0)

---

## 2. AUDIT HIỆN TẠI MUÔN NƠI

### 2.1 Có gì

✅ **Master Execution Lock** (`docs/launch/MUONNOI_MASTER_EXECUTION_LOCK_2026-06-13.md`)
- Định nghĩa surface priority (P0-P1)
- Deployment verification rules ("Deploy thành công ≠ live")
- State tracking từng surface
- Homepage Founder lock (11 section)

✅ **Canonical docs** (15 file trong `docs/`)
- Domain map
- Surface definitions
- Project status

✅ **Live surfaces** (10 surface sống thật)
- www, app, hoctap, lamviec, ketnoi, nguoiviet, cuocsong, dautu, ai, docs

---

### 2.2 Thiếu gì so với WPAS

❌ **Quy trình production acceptance**
- Không có quy trình 12 bước WPAS
- Không có Self Audit / AI Audit / Human QA
- Không có Production Gate
- Không có Staging environment
- Không có Founder Review staging
- Không có Post Deploy Verification
- Không có Release Report
- Không có Archive Evidence

❌ **QA infrastructure**
- Không có QA Checklist (P0-P9)
- Không có Severity Matrix
- Không có Evidence Matrix
- Không có automation rules
- Không có security rules
- Không have PWA rules

❌ **Brand consistency enforcement**
- Không có BRAND_CODEX
- Không có LANGUAGE_CODEX
- Không have CONTENT_RULES
- Không có TRANSLATION_RULES
- Không có DESIGN_TOKENS

**Impact:** Deploy không chuẩn, không verify production thật, không có evidence, không có QA process.

---

### 2.3 Thiếu gì so với Brandpro v2.0

❌ **Brand strategy foundation**
- Không có Brand Forensics (domain, SERP, TM, social, phonetic audit)
- Không có Risk Matrix
- Không có Naming Strategy
- Không có Brand Pillars (Mission, Vision, Values, Positioning, Persona)
- Không có Verbal Identity (voice, tone, naming convention)
- Không có Visual Identity Spec (logo, color, typo, design tokens)
- Không có Brand Book

❌ **Bilingual & localization**
- Không có Bilingual Messaging (VI/EN matrix)
- Không có Product UI strings registry
- Không có Glossary song ngữ
- Không có SEO Entity Plan
- Không có hreflang implementation
- Không have schema.org Organization JSON-LD

❌ **Governance**
- Không có Brand Guardian role
- Không có Asset Hub
- Không có Approval Workflow (Tier 0-3)
- Không có Quarterly Audit
- Không có Annual Brand Review

❌ **Trackers**
- Không có Budget Tracker
- Không có Risk Register
- Không có Content Calendar
- Không có Asset Version Log
- Không có KPI Scorecard
- Không có Product Brand Metrics

❌ **Tech product branding**
- Không có Product Brand System (feature naming, in-app copy, onboarding branding)
- Không có Design System Dev Handoff (design tokens, components, Figma-to-code)
- Không có Brand Architecture (master/sub/endorsed framework)
- Không có Competitive Moat analysis

**Impact:** Không có brand strategy foundation, không có governance, không có trackers, không có bilingual consistency, không có product branding.

---

## 3. GAP ANALYSIS

### 3.1 Gap lớn nhất

**WPAS Gap:**
- Deploy không có QA process → production không verified
- Không có evidence → không biết có gì đang live
- Không have severity matrix → không biết cái gì là blocker
- Không have staging → deploy trực tiếp to production

**Brandpro Gap:**
- Không có brand strategy foundation → brand không có direction
- Không có governance → brand không được enforce
- Không có trackers → không đo được brand health
- Không có bilingual consistency → translation lung tung

### 3.2 Risk hiện tại

**Production Risk:**
- Deploy sai domain (đã từng xảy ra — deploy nhầm `muonnoi-org` thay vì `muonnoi`)
- Deploy sai directory (đã từng xảy ra — deploy `.` thay vì `apps/web/public`)
- Middleware crash (error 1101) → site chết nhưng deploy báo success
- Không verify production thật → không biết có gì đang live

**Brand Risk:**
- Brand name không consistent (nhachung ↔ ai, chochoi ↔ plays)
- Translation không có 1-to-1 mapping
- UI copy không có product copy registry
- Không có brand guardian → brand không được enforce

**Operational Risk:**
- Không có trackers → không đo được KPI
- Không have risk register → không quản lý rủi ro
- Không have budget tracker → không track chi phí
- Không have content calendar → không plan content

---

## 4. KẾ HOẠCH ÁP DỤNG CHUẨN

### 4.1 Phase 1 — WPAS Adoption (2 tuần)

**Mục tiêu:** Thiết lập quy trình production acceptance.

**Week 1:**
- [ ] Copy 18 file WPAS vào `muonnoi.org/WPAS/`
- [ ] Tạo staging environment (Cloudflare Pages preview)
- [ ] Setup automation rules (lint, typecheck, build)
- [ ] Setup security rules (CSP, headers)
- [ ] Tạo QA Checklist (P0-P9)
- [ ] Tạo Severity Matrix (P0-P9)
- [ ] Tạo Evidence Matrix

**Week 2:**
- [ ] Tạo Production Gate criteria
- [ ] Tạo Release Report template
- [ ] Tạo Archive Evidence structure
- [ ] Setup Self Audit process
- [ ] Setup AI Audit process
- [ ] Setup Human QA process
- [ ] Deploy thử theo quy trình 12 bước

**Output:**
- Quy trình WPAS live
- Staging environment live
- QA process live
- Deploy verified

---

### 4.2 Phase 2 — Brandpro Foundation (4 tuần)

**Mục tiêu:** Thiết lập brand strategy foundation.

**Week 1:**
- [ ] Copy 20 file Brandpro vào `muonnoi.org/BRANDPRO/`
- [ ] Copy 22 artefact templates vào `muonnoi.org/BRANDPRO/_artifacts/`
- [ ] Chạy Brand Forensics (domain, SERP, TM, social, phonetic)
- [ ] Tạo Risk Matrix
- [ ] Founder duyệt Risk Matrix

**Week 2:**
- [ ] Tạo Naming Strategy (giữ tên "Muôn Nơi" hoặc đổi)
- [ ] Tạo Brand Pillars (Mission, Vision, Values, Positioning, Persona)
- [ ] Founder duyệt Brand Pillars
- [ ] Tạo Brand Architecture (master/sub/endorsed)
- [ ] Tạo Competitive Moat analysis

**Week 3:**
- [ ] Tạo Verbal Identity (voice, tone, naming convention)
- [ ] Tạo Visual Identity Spec (logo, color, typo, design tokens)
- [ ] Tạo Brand Book v1
- [ ] Founder duyệt Brand Book v1

**Week 4:**
- [ ] Tạo Bilingual Messaging (VI/EN matrix)
- [ ] Tạo Product UI strings registry
- [ ] Tạo Glossary song ngữ
- [ ] Tạo SEO Entity Plan
- [ ] Tạo schema.org Organization JSON-LD
- [ ] Implement hreflang

**Output:**
- Brand strategy foundation live
- Brand Book v1 live
- Bilingual messaging live
- SEO entity live

---

### 4.3 Phase 3 — Governance & Trackers (2 tuần)

**Mục tiêu:** Thiết lập governance và trackers.

**Week 1:**
- [ ] Bổ nhiệm Brand Guardian
- [ ] Tạo Brand Guardian Charter
- [ ] Setup Asset Hub (Notion/Google Drive)
- [ ] Setup Approval Workflow (Tier 0-3)
- [ ] Tạo Budget Tracker
- [ ] Tạo Risk Register

**Week 2:**
- [ ] Tạo Content Calendar
- [ ] Tạo Asset Version Log
- [ ] Tạo KPI Scorecard
- [ ] Tạo Product Brand Metrics
- [ ] Setup Quarterly Audit calendar
- [ ] Chạy Quarterly Audit thử

**Output:**
- Governance live
- Trackers live
- Quarterly audit live

---

### 4.4 Phase 4 — Tech Product Branding (2 tuần)

**Mục tiêu:** Thiết lập tech product branding.

**Week 1:**
- [ ] Tạo Product Brand System (feature naming, in-app copy, onboarding branding)
- [ ] Tạo Design System Dev Handoff (design tokens, components, Figma-to-code)
- [ ] Tạo API Naming Convention
- [ ] Implement design tokens

**Week 2:**
- [ ] Tạo onboarding copy
- [ ] Tạo empty/error states
- [ ] Tạo beta/waitlist branding
- [ ] Implement product copy vào app

**Output:**
- Product branding live
- Design system live
- Product copy lock

---

## 5. RACI MATRIX

| Activity | Founder | Strategist | Designer | Copy | PM | SEO | Dev | Legal | Ops |
|----------|---------|------------|----------|------|-----|-----|-----|-------|-----|
| WPAS adoption | A | I | I | I | R | I | R | I | I |
| Brand Forensics | A | R | I | I | I | C | I | C | I |
| Risk Matrix | A | R | I | I | I | I | I | C | I |
| Naming Strategy | A | R | C | C | I | I | I | C | I |
| Brand Pillars | A | R | I | C | C | I | I | I | I |
| Brand Architecture | A | R | C | I | C | I | I | I | I |
| Competitive Moat | A | R | I | I | C | I | C | I | I |
| Verbal Identity | I | A | I | R | I | I | I | I | I |
| Visual Identity | A | C | R | I | I | I | I | I | I |
| Brand Book | A | C | R | C | I | I | I | I | I |
| Bilingual Messaging | I | A | I | R | C | I | C | I | I |
| Entity SEO | I | I | I | I | I | R | C | I | A |
| hreflang/schema | I | I | I | I | I | C | R | I | A |
| Brand Guardian charter | A | C | I | I | I | I | I | C | R |
| Asset Hub | A | C | I | I | I | I | I | I | R |
| Approval Workflow | A | C | I | I | I | I | I | I | R |
| Trackers | A | I | I | I | R | C | I | I | C |
| Quarterly Audit | A | R | C | C | C | C | I | I | C |
| Product Brand System | I | C | I | R | A | I | I | I | I |
| Design System | A | C | R | I | C | I | C | I | I |

---

## 6. BUDGET ESTIMATE

| Hạng mục | Lean | Standard | Premium |
|----------|------|----------|---------|
| WPAS adoption (staging, automation, QA) | 10–20tr | 30–60tr | 80–150tr |
| Brand Forensics + Risk Matrix | 5–10tr | 15–30tr | 40–80tr |
| Brand Pillars + Naming Strategy | 10–20tr | 30–60tr | 80–150tr |
| Visual Identity + Brand Book | 20–40tr | 60–120tr | 200–400tr |
| Bilingual Messaging + SEO Entity | 10–20tr | 30–60tr | 100–200tr |
| Governance + Trackers | 5–10tr | 15–30tr | 40–80tr |
| Product Branding + Design System | 15–30tr | 50–100tr | 150–300tr |
| **Tổng (chưa buffer)** | **~75–150tr** | **~230–460tr** | **~690–1.360tr** |

---

## 7. RISK MITIGATION

### 7.1 Risk: Quá nhiều template, team bị overload

**Mitigation:**
- Phase 1: Chỉ áp dụng WPAS (production acceptance)
- Phase 2: Chỉ áp dụng Brandpro foundation (strategy)
- Phase 3: Áp dụng governance + trackers
- Phase 4: Áp dụng tech product branding
- Mỗi phase 2-4 tuần, không quá nhanh

### 7.2 Risk: Founder không duyệt brand strategy

**Mitigation:**
- Founder duyệt từng gate (Risk Matrix, Brand Pillars, Brand Book)
- Không chuyển pha nếu chưa đóng gate
- Founder có quyền veto bất kỳ bước nào

### 7.3 Risk: Dev không thích quy trình WPAS

**Mitigation:**
- Giải thích lợi ích: deploy verified, không crash production
- Tự động hóa: automation rules, AI audit
- Founder enforce: quy trình bắt buộc

### 7.4 Risk: Brand Guardian không có authority

**Mitigation:**
- Founder ký Brand Guardian Charter
- Brand Guardian có quyền veto
- Founder enforce brand consistency

---

## 8. NEXT STEPS

**Ngay bây giờ:**
1. Founder duyệt kế hoạch này
2. Founder quyết định: Lean / Standard / Premium
3. Founder bổ nhiệm Brand Guardian
4. Founder duyệt timeline (8-10 tuần)

**Sau khi Founder duyệt:**
1. Copy WPAS templates vào `muonnoi.org/WPAS/`
2. Copy Brandpro templates vào `muonnoi.org/BRANDPRO/`
3. Bắt đầu Phase 1 — WPAS Adoption

---

## 9. AUTHORITY

**Nguồn chân lý:**
- WPAS: `/Users/tranhatam/Documents/Devnewproject/tranhatam.com/WPAS/`
- Brandpro v2.0: `/Users/tranhatam/Documents/Devnewproject/Brandpro-all/_TEMPLATE-MASTER-v2/`
- Master Execution Lock: `docs/launch/MUONNOI_MASTER_EXECUTION_LOCK_2026-06-13.md`

**Mọi team dev phải tuân thủ quy trình này.**
**Không được deploy nếu không qua WPAS.**
**Không được brand work nếu không qua Brandpro.**

---

**Audit complete.**
**Waiting for Founder approval.**
