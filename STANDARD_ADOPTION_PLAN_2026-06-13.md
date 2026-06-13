# MUÔN NƠI — KẾ HOẠCH ÁP DỤNG CHUẨN WPAS + BRANDPRO v2.0
# Kế hoạch áp dụng chuẩn cho toàn team (muonnoi.org + các sub)

> **Ngày lập:** 2026-06-13
> **Dựa trên:** `STANDARD_ADOPTION_AUDIT_2026-06-13.md`
> **Mục tiêu:** Áp dụng 2 bộ chuẩn vận hành cho toàn team trong 8 tuần
> **Timeline:** 4 phase × 2 tuần = 8 tuần (bắt đầu tuần này)
> **Budget:** Lean (< 200tr) — AI Agent làm hết, tối thiểu chi phí
> **Brand Guardian:** AI Agent toàn bộ

---

## 0. QUYẾT ĐỊNH FOUNDER (ĐÃ DUYỆT 2026-06-13)

### 0.1 Budget level

**Founder decision:** ✅ **Lean** (< 200tr) — Tối đa hiệu quả, tối thiểu chi phí, nhờ AI làm hết

**Chi tiết:**
- AI Agent làm hết mọi việc (WPAS + Brandpro)
- Founder/PM review và duyệt
- Không cần design system riêng (dùng UI kit có sẵn)
- Budget: ~80–160tr (theo audit) nhưng AI làm hết nên thực tế ~0

### 0.2 Timeline

**Founder decision:** ✅ **8 tuần** — Bắt đầu tuần này

**Chi tiết:**
- Phase 1: Week 1-2 (WPAS Adoption)
- Phase 2: Week 3-6 (Brandpro Foundation)
- Phase 3: Week 7-8 (Governance & Trackers)
- Phase 4: Bỏ (Lean không cần Tech Product Branding)

### 0.3 Brand Guardian

**Founder decision:** ✅ **AI Agent toàn bộ**

**Chi tiết:**
- AI Agent đóng vai trò Brand Guardian
- AI Agent enforce brand consistency
- AI Agent review và duyệt asset/copy
- AI Agent run Quarterly Audit
- Founder duyệt quyết định lớn

---

## 1. PHASE 1 — WPAS ADOPTION (2 tuần) — BẮT ĐẦU TUẦN NÀY

**Mục tiêu:** Thiết lập quy trình production acceptance.

**Owner:** AI Agent (Dev Lead + PM)
**Approver:** Founder

### Week 1 — Setup Infrastructure

**Day 1-2:**
- [x] Copy 18 file WPAS vào `muonnoi.org/WPAS/` ✅ (đã làm)
- [ ] Đọc toàn bộ WPAS (đặc biệt `00_WORKFLOW_PROCESS.md`, `11_QA_CHECKLIST.md`, `06_SEVERITY_MATRIX.md`, `05_EVIDENCE_MATRIX.md`)
- [ ] Team training về WPAS (AI Agent training Founder)
- [ ] Founder duyệt WPAS adoption

**Day 3-4:**
- [ ] Tạo staging environment (Cloudflare Pages preview)
- [ ] Setup automation rules (lint, typecheck, build)
- [ ] Setup security rules (CSP, headers)
- [ ] Test staging environment

**Day 5:**
- [ ] Tạo QA Checklist (P0-P9) — điền theo template
- [ ] Tạo Severity Matrix (P0-P9) — điền theo template
- [ ] Tạo Evidence Matrix — điền theo template
- [ ] Founder duyệt QA infrastructure

### Week 2 — Setup Process

**Day 6-7:**
- [ ] Tạo Production Gate criteria — điền theo template
- [ ] Tạo Release Report template — điền theo template
- [ ] Tạo Archive Evidence structure — điền theo template
- [ ] Founder duyệt production gate

**Day 8-9:**
- [ ] Setup Self Audit process — AI Agent tự audit trước khi QA
- [ ] Setup AI Audit process — AI Agent audit code
- [ ] Setup Human QA process — Founder manual check
- [ ] Team training về QA process

**Day 10:**
- [ ] Deploy thử theo quy trình 12 bước (test deploy homepage)
- [ ] Verify production thật (curl + grep marker)
- [ ] Collect evidence pack
- [ ] Tạo release report thử
- [ ] Founder duyệt quy trình WPAS

**Output:**
- ✅ Quy trình WPAS live
- ✅ Staging environment live
- ✅ QA process live
- ✅ Deploy verified

**Evidence:**
- Link staging environment
- QA Checklist filled
- Severity Matrix filled
- Evidence Matrix filled
- Production Gate criteria filled
- Release Report template filled
- Archive Evidence structure filled
- Test deploy release report

---

## 2. PHASE 2 — BRANDPRO FOUNDATION (4 tuần) — LEAN VERSION

**Mục tiêu:** Thiết lập brand strategy foundation (Lean — bỏ Phase 4).

**Owner:** AI Agent (Strategist + Designer + Copywriter)
**Approver:** Founder

### Week 1 — Forensics + Risk

**Day 11-12:**
- [x] Copy 20 file Brandpro vào `muonnoi.org/BRANDPRO/` ✅ (đã làm)
- [x] Copy 22 artefact templates vào `muonnoi.org/BRANDPRO/_artifacts/` ✅ (đã làm)
- [ ] Đọc toàn bộ Brandpro (đặc biệt `00-README.md`, `01-Master-Plan.md`, `02-Brand-Forensics.md`, `03-Risk-Matrix.md`)
- [ ] Team training về Brandpro (AI Agent training Founder)
- [ ] Founder duyệt Brandpro adoption

**Day 13-14:**
- [ ] Chạy Brand Forensics (domain, SERP, TM, social, phonetic) — điền file `02-Brand-Forensics.md`
- [ ] Tạo Risk Matrix — điền file `03-Risk-Matrix.md` + artefact `02-Risk-Matrix-blank.md`
- [ ] Founder duyệt Risk Matrix (Gate 1)

**Day 15:**
- [ ] Tổng hợp Brand Forensics report
- [ ] Founder review Forensics + Risk Matrix
- [ ] Quyết định: Giữ tên "Muôn Nơi" / Đổi tên / Mua domain / Né ngành

### Week 2 — Strategy

**Day 16-17:**
- [ ] Tạo Naming Strategy — điền file `04-Naming-Strategy.md` + artefact `03-Naming-Decision-blank.md`
- [ ] Founder duyệt Naming Strategy (Gate 2)
- [ ] Đăng ký domain chính + defensive domains (nếu cần)

**Day 18-19:**
- [ ] Tạo Brand Pillars (Mission, Vision, Values, Positioning, Persona) — điền file `05-Brand-Pillars.md` + artefact `04-Brand-Pillars-Card-blank.md`
- [ ] Founder duyệt Brand Pillars (Gate 2)
- [ ] Tạo Style Lock — điền artefact `05-Style-Lock-blank.md`

**Day 20:**
- [ ] Tạo Brand Architecture (master/sub/endorsed) — điền file `18-Brand-Architecture.md`
- [ ] Tạo Competitive Moat analysis — điền file `19-Competitive-Moat.md`
- [ ] Founder duyệt Architecture + Moat (Gate 2)

### Week 3 — Identity

**Day 21-22:**
- [ ] Tạo Verbal Identity (voice, tone, naming convention, product copy) — điền file `06-Verbal-Identity.md`
- [ ] Founder duyệt Verbal Identity

**Day 23-25:**
- [ ] Tạo Visual Identity Spec (logo, color, typo, design tokens) — điền file `07-Visual-Identity-Spec.md`
- [ ] AI Agent tạo logo concept (3 hướng)
- [ ] Founder duyệt logo concept
- [ ] AI Agent refine logo final

**Day 26-27:**
- [ ] AI Agent tạo color system + typography system
- [ ] AI Agent create design token foundation — điền artefact `21-Design-Token-Template.json`
- [ ] AI Agent create Brand Book v1 — điền file `08-Brand-Book-Outline.md`
- [ ] Founder duyệt Brand Book v1 (Gate 3)

### Week 4 — Bilingual + SEO

**Day 28-29:**
- [ ] Tạo Bilingual Messaging (VI/EN matrix) — điền file `09-Bilingual-Messaging.md`
- [ ] Tạo Product UI strings registry — điền artefact `19-Product-Copy-Blank.md`
- [ ] Tạo Glossary song ngữ (30–50 thuật ngữ)
- [ ] Founder duyệt Bilingual Messaging

**Day 30-31:**
- [ ] Tạo SEO Entity Plan — điền file `10-SEO-Entity-Plan.md`
- [ ] Tạo schema.org Organization JSON-LD — điền artefact `07-Schema-Organization.json`
- [ ] AI Agent implement schema.org on-page
- [ ] AI Agent implement hreflang

**Day 32:**
- [ ] Tạo Content pillar plan + 10 bài đầu
- [ ] Founder duyệt SEO Entity Plan (Gate 4)
- [ ] Website song ngữ live, entity SEO published

**Output:**
- ✅ Brand strategy foundation live
- ✅ Brand Book v1 live
- ✅ Bilingual messaging live
- ✅ SEO entity live

**Evidence:**
- Brand Forensics report filled
- Risk Matrix filled + Founder approved
- Naming Strategy filled + Founder approved
- Brand Pillars filled + Founder approved
- Brand Architecture filled + Founder approved
- Competitive Moat filled + Founder approved
- Verbal Identity filled + Founder approved
- Visual Identity Spec filled + Founder approved
- Brand Book v1 filled + Founder approved
- Bilingual Messaging filled + Founder approved
- Product UI strings registry filled
- SEO Entity Plan filled + Founder approved
- schema.org JSON-LD implemented
- hreflang implemented
- Content pillar plan filled

---

## 3. PHASE 3 — GOVERNANCE & TRACKERS (2 tuần) — AI AGENT GUARDIAN

**Mục tiêu:** Thiết lập governance và trackers.

**Owner:** AI Agent (Brand Guardian + PM + Ops)
**Approver:** Founder

### Week 1 — Governance

**Day 33-34:**
- [ ] Founder bổ nhiệm AI Agent làm Brand Guardian
- [ ] Tạo Brand Guardian Charter — điền artefact `06-Brand-Guardian-Charter-blank.md`
- [ ] Founder + AI Agent ký Charter
- [ ] AI Agent onboarding (tuần 1 theo file `12-Governance.md`)

**Day 35-36:**
- [ ] Setup Asset Hub (Notion/Google Drive) — theo structure file `12-Governance.md`
- [ ] Setup access matrix
- [ ] Upload logo, color, typo, design tokens vào Asset Hub
- [ ] Founder duyệt Asset Hub

**Day 37:**
- [ ] Setup Approval Workflow (Tier 0-3) — theo file `12-Governance.md`
- [ ] Tạo Approval Request Form template — điền artefact `13-Approval-Request-Form.md`
- [ ] Founder duyệt Approval Workflow

### Week 2 — Trackers

**Day 38-39:**
- [ ] Tạo Budget Tracker — theo schema file `14-Trackers.md` (Google Sheets / Airtable)
- [ ] Tạo Risk Register — theo schema file `14-Trackers.md` + artefact `10-Risk-Register.csv`
- [ ] Founder duyệt Budget Tracker + Risk Register

**Day 40-41:**
- [ ] Tạo Content Calendar — theo schema file `14-Trackers.md`
- [ ] Tạo Asset Version Log — theo schema file `14-Trackers.md`
- [ ] Founder duyệt Content Calendar + Asset Version Log

**Day 42:**
- [ ] Tạo KPI Scorecard — theo schema file `14-Trackers.md`
- [ ] Tạo Product Brand Metrics — theo schema file `14-Trackers.md`
- [ ] Setup Quarterly Audit calendar
- [ ] AI Agent chạy Quarterly Audit thử (Q4 — Product focus)
- [ ] Founder duyệt Trackers + Quarterly Audit

**Output:**
- ✅ Governance live
- ✅ Trackers live
- ✅ Quarterly audit live

**Evidence:**
- Brand Guardian Charter filled + signed
- Asset Hub live + access matrix
- Approval Workflow live
- Budget Tracker live
- Risk Register live
- Content Calendar live
- Asset Version Log live
- KPI Scorecard live
- Product Brand Metrics live
- Quarterly Audit calendar live
- Quarterly Audit trial report

---

## 4. PHASE 4 — TECH PRODUCT BRANDING (BỎ QUA — LEAN)

**Lean không cần Phase 4:**
- Không xây design system riêng (dùng UI kit có sẵn)
- AI Agent làm product copy trong Phase 2
- Bỏ Phase 4 để tối thiểu chi phí

---

## 5. SUMMARY

### 5.1 Timeline

| Phase | Duration | Start | End | Owner | Approver |
|-------|----------|-------|-----|-------|----------|
| Phase 1 — WPAS Adoption | 2 tuần | Day 1 | Day 10 | AI Agent (Dev Lead + PM) | Founder |
| Phase 2 — Brandpro Foundation | 4 tuần | Day 11 | Day 32 | AI Agent (Strategist + Designer + Copy) | Founder |
| Phase 3 — Governance & Trackers | 2 tuần | Day 33 | Day 42 | AI Agent (Brand Guardian + PM + Ops) | Founder |
| Phase 4 — Tech Product Branding | Bỏ | — | — | — | — |
| **Total** | **8 tuần** | **Day 1** | **Day 42** | — | — |

### 5.2 Gates

| Gate | Phase | Criteria | Approver |
|------|-------|----------|----------|
| Gate 1 | Phase 2 Week 1 | Risk Matrix approved | Founder |
| Gate 2 | Phase 2 Week 2 | Naming + Brand Pillars + Architecture + Moat approved | Founder |
| Gate 3 | Phase 2 Week 3 | Brand Book v1 + Design Token v0.1 approved | Founder |
| Gate 4 | Phase 2 Week 4 | Website song ngữ live, entity SEO published, Product Copy lock | Founder |
| Gate 5 | Phase 3 Week 2 | Governance live, Trackers live, Quarterly Audit live | Founder |

### 5.3 Budget (Lean — AI Agent làm hết)

| Hạng mục | Lean |
|----------|------|
| Phase 1 — WPAS Adoption | ~0 (AI Agent làm hết) |
| Phase 2 — Brandpro Foundation | ~0 (AI Agent làm hết) |
| Phase 3 — Governance & Trackers | ~0 (AI Agent làm hết) |
| Phase 4 — Tech Product Branding | 0 (bỏ) |
| **Tổng** | **~0** |

### 5.4 RACI

| Activity | Founder | AI Agent |
|----------|---------|----------|
| Phase 1 — WPAS Adoption | A | R |
| Phase 2 — Brandpro Foundation | A | R |
| Phase 3 — Governance & Trackers | A | R |

> R = Responsible · A = Accountable

---

## 6. RISK MITIGATION

### 6.1 Risk: AI Agent không đủ capability

**Mitigation:**
- Founder review từng gate
- Founder có quyền veto bất kỳ bước nào
- Founder có thể điều chỉnh kế hoạch

### 6.2 Risk: Founder không duyệt brand strategy

**Mitigation:**
- Founder duyệt từng gate (Risk Matrix, Brand Pillars, Brand Book)
- Không chuyển pha nếu chưa đóng gate
- Founder có quyền veto bất kỳ bước nào

### 6.3 Risk: Dev không thích quy trình WPAS

**Mitigation:**
- Giải thích lợi ích: deploy verified, không crash production
- Tự động hóa: automation rules, AI audit
- Founder enforce: quy trình bắt buộc
- AI Agent own Phase 1

### 6.4 Risk: AI Agent Brand Guardian không có authority

**Mitigation:**
- Founder ký Brand Guardian Charter
- AI Agent có quyền veto
- Founder enforce brand consistency
- AI Agent report trực tiếp to Founder

---

## 7. NEXT STEPS

**Ngay bây giờ:**
1. ✅ Founder đã duyệt kế hoạch
2. ✅ Founder đã quyết định Lean + 8 tuần + AI Agent
3. ✅ Founder đã bổ nhiệm AI Agent làm Brand Guardian
4. ✅ Bắt đầu Phase 1 — WPAS Adoption (Day 1)

**Sau khi Founder duyệt:**
1. ✅ Bắt đầu Phase 1 — WPAS Adoption (Day 1)
2. AI Agent training Founder về WPAS (Day 1)
3. Setup staging environment (Day 3)
4. Setup QA infrastructure (Day 5)

---

## 8. AUTHORITY

**Nguồn chân lý:**
- WPAS: `WPAS/` (đã copy)
- Brandpro v2.0: `BRANDPRO/` (đã copy)
- Audit: `STANDARD_ADOPTION_AUDIT_2026-06-13.md`
- Master Execution Lock: `docs/launch/MUONNOI_MASTER_EXECUTION_LOCK_2026-06-13.md`

**Mọi team dev phải tuân thủ quy trình này.**
**Không được deploy nếu không qua WPAS.**
**Không được brand work nếu không qua Brandpro.**
**AI Agent làm hết, Founder duyệt.**

---

**Kế hoạch complete.**
**Founder đã duyệt.**
**Bắt đầu áp dụng dev ngay.**
