# Brandpro Master Template v2.0 — CHANGELOG

> Kit version history. Tang minor (2.0 -> 2.1) cho thay doi nho. Tang major (2.x -> 3.0) cho thay doi cau truc / pillar.

---

## [2.0] — 2026-06-13

### Added — 4 new core modules
- `16-Product-Brand-System.md` — Feature naming, in-app copy, onboarding branding, error/empty/success states, notification copy, beta/waitlist branding, API/SDK/CLI branding.
- `17-Design-System-Dev-Handoff.md` — Design tokens (W3C), component system, Figma structure, dev handoff, code conventions, governance & contribution guidelines.
- `18-Brand-Architecture.md` — Master/sub/endorsed/ingredient brand framework + decision tree + visual hierarchy matrix + naming convention for architecture.
- `19-Competitive-Moat.md` — Tech positioning framework: network effects, data moat, integration moat, switching costs, brand moat, tech/algorithm moat, regulatory moat.

### Added — 4 new artefacts
- `_artifacts/19-Product-Copy-Blank.md` — UI strings registry template.
- `_artifacts/20-API-Naming-Blank.md` — API endpoint + SDK function naming convention.
- `_artifacts/21-Design-Token-Template.json` — W3C Design Tokens Format template.
- `_artifacts/22-Onboarding-Copy-Blank.md` — Onboarding flow copy template.

### Changed
- `01-Master-Plan.md`: Timeline 90 -> 120 ngày cho tech product. Thêm Product phase, Design System, Product Copy milestones. RACI thêm PM và Dev columns.
- `02-Brand-Forensics.md`: Thêm Audit 6 — Code Repo / Package Name availability.
- `04-Naming-Strategy.md`: Thêm Test 4 — Code Repo Check. Thêm code naming trong Naming Decision Document.
- `05-Brand-Pillars.md`: Thêm Competitive Frame.
- `06-Verbal-Identity.md`: Thêm Product Copy layer (UI strings, microcopy, notification). Thêm DX Voice (Developer Experience) cho API doc / README / CLI. Thêm product do/don't list.
- `07-Visual-Identity-Spec.md`: Thêm Design Token mapping. Thêm Spacing & Layout Scale. Thêm Motion tokens. Thêm Code font.
- `08-Brand-Book-Outline.md`: Thêm Chương 6 (Design System Snapshot) và Chương 7 (Product Brand Snapshot).
- `09-Bilingual-Messaging.md`: Thêm mục C — Product UI Strings Matrix VI/EN.
- `13-Briefs-Templates.md`: Thêm Brief #6 — Product Brief và Brief #7 — API Documentation Brief.
- `14-Trackers.md`: Thêm Tracker #6 — Product Brand Metrics với 10 metrics + Product Brand Health Score formula.

### Added — Audit layer
- `00-AUDIT-REPORT.md` — Báo cáo audit đầy đủ từ v1.1, ghi rationale cho mọi thay đổi.

### Changed — Philosophy
- Triết lý nền từ 5 nguyên tắc -> 7 nguyên tắc (thêm #6 Product là điểm chạm brand quan trọng nhất, #7 Design system = brand system).

### Stats
- 20 file root template + 22 artefact + 3 file meta (AUDIT-REPORT, QUICKSTART, CHANGELOG) = 45 file tổng.
- ~12.0K dòng template tổng.
- ~380 checklist item.
- ~600 placeholder field.
- Coverage: 5 phase + 5 gate + Quarterly Audit + Annual Review + Crisis + Phonetic Test + Product Brand + Design System + Brand Architecture + Competitive Moat.

---

## [1.1] — 2026-05-06 (Reference: Brandpro v1.1)

### Added — 5 lifecycle artefact
- `_artifacts/15-Phonetic-Test-Protocol.md`
- `_artifacts/16-Crisis-Activation-Form.md`
- `_artifacts/17-Brand-Health-Survey.md`
- `_artifacts/18-Annual-Review-Form.md`
- `_artifacts/INDEX.md`

### Stats
- 18 file root + 19 artefact = 37 file tổng.

---

## [1.0] — 2026-05-06 (Reference: Brandpro v1.1)

### Added — Initial release
- 16 file template theo 5 phase (00 -> 15).
- Triết lý 5 nguyên tắc nền.
- Roadmap 90 ngày + 5 gate + RACI + budget 3 mức.
- Brand Forensics: 5 audit.
- Risk Matrix: rubric 3 trục + cây quyết định.
- Naming Strategy: 6 tiêu chí + 3 test thực địa.
- Brand Pillars: Mission/Vision/Values/Positioning/Persona/Promise.
- Verbal Identity: voice 4 trục + tone palette + naming convention.
- Visual Identity Spec: logo, color, typo, icon, photo, motion, layout.
- Brand Book Outline: cấu trúc 12 chương.
- Bilingual Messaging: matrix VI/EN + glossary + hreflang.
- SEO Entity Plan: Wikidata + Schema + content pillar + backlink.
- Legal Defense: TM + defensive domain + monitoring + crisis.
- Governance: Brand Guardian + Asset Hub + Quarterly Audit.
- Briefs Templates: 5 brief mẫu.
- Trackers: 5 schema tracker.
- Application Playbook: walkthrough <<Brand>> (giả định EdTech) + giới hạn AI agent.

---

## Migration notes

### v1.1 -> v2.0
- Fork đang chạy v1.1 KHÔNG bắt buộc migrate.
- Nếu brand đang ở Phase 3+ và là tech product -> có thể cherry-pick file 16-19 + artefacts 19-22.
- Nếu brand đã Day 90+ -> có thể bổ sung Product Brand Metrics (tracker #6) vào Quarterly Audit tiếp theo.

### Quy tắc fork
1. Mỗi brand thật là một fork độc lập.
2. Kit gốc (folder `_TEMPLATE-MASTER-v2/`) **không sửa khi đã có fork đang chạy**.
3. Update kit gốc -> fork mới dùng version mới, fork cũ giữ nguyên.

---

## Version naming convention

```
v<<major>>.<<minor>>

major: structural change (5 phase -> 6 phase, thêm module core mới)
minor: thêm artefact / cải thiện rubric / fix typo / thêm examples
patch: chỉ dùng nếu cần (vX.Y.Z)

Tag git: brandpro-vX.Y
```
