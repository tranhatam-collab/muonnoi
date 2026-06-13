# `_artifacts/` — Master Index v2.0

> 22 artefact điền-được-ngay. Mỗi artefact map tới: phase / gate / owner / khi dùng.

---

## A. Bảng index theo thứ tự artefact

| # | File | Phase | Gate | Owner | Approver | Cadence |
|---|------|-------|------|-------|----------|---------|
| 01 | Founder-Brief-blank.md | Pre — Bước 1 | — | Brand Strategist | Founder | 1 lần / fork |
| 02 | Risk-Matrix-blank.md | Phase 1 | Gate 1 | Brand Strategist | Founder | 1 lần / fork (tái chạy mỗi Annual Review) |
| 03 | Naming-Decision-blank.md | Phase 2 | Gate 2 | Brand Strategist | Founder + Legal | 1 lần / fork |
| 04 | Brand-Pillars-Card-blank.md | Phase 2 | Gate 2 | Brand Strategist | Founder | 1 lần / fork (tái xem Annual) |
| 05 | Style-Lock-blank.md | Phase 2 | Gate 2 | Brand Guardian | Founder | 1 lần (lock vĩnh viễn) |
| 06 | Brand-Guardian-Charter-blank.md | Phase 5 | Gate 5 | Founder | Founder + Guardian | 1 lần (renew yearly) |
| 07 | Schema-Organization.json | Phase 4 | Gate 4 | Web Dev | SEO | 1 lần (update khi entity thay đổi) |
| 08 | Domain-Tracker.csv | Phase 2-5 | — | Ops | Founder | Continuous (renew tracking) |
| 09 | Trademark-Tracker.csv | Phase 5 | Gate 5 | Legal | Founder | Continuous (theo lifecycle TM) |
| 10 | Risk-Register.csv | All phases | — | Brand Guardian | Founder | Continuous (review hằng tháng) |
| 11 | Brand-Quiz-blank.md | Post-Day 120 | — | Brand Guardian | — | Mỗi onboarding + Annual cho team |
| 12 | Quarterly-Audit-Form-blank.md | Post-Day 120 | — | Brand Guardian | Founder | 4 lần / năm |
| 13 | Approval-Request-Form.md | Post-Day 120 | — | Submitter | Brand Guardian | Mỗi asset Tier 2-3 |
| 14 | Defensive-Domain-Checklist.md | Phase 2 | — | Ops | Founder | 1 lần (review yearly) |
| 15 | Phonetic-Test-Protocol.md | Phase 1 | — | Brand Strategist | — | 1 lần / candidate name |
| 16 | Crisis-Activation-Form.md | Any time | — | Crisis Lead | Founder | On-demand (khi crisis) |
| 17 | Brand-Health-Survey.md | Annual | — | Brand Guardian | Founder | 1 lần / năm |
| 18 | Annual-Review-Form.md | Annual | — | Brand Guardian | Founder | 1 lần / năm |
| 19 | Product-Copy-Blank.md | Phase 4 | Gate 4 | Copywriter + PM | Brand Guardian | 1 lần (update khi feature mới) |
| 20 | API-Naming-Blank.md | Phase 4 | Gate 4 | Dev Lead + PM | Brand Guardian | 1 lần (update khi API v3+) |
| 21 | Design-Token-Template.json | Phase 3-4 | Gate 3 | Designer + Dev | Brand Guardian | 1 lần (update khi rebrand) |
| 22 | Onboarding-Copy-Blank.md | Phase 4 | Gate 4 | Copywriter + PM | Brand Guardian | 1 lần / product (update khi onboarding thay đổi) |

---

## B. Bảng theo gate / cổng duyệt

### Gate 1 (Day 14) — Risk Matrix duyệt

**Cần điền:**
- [ ] 02-Risk-Matrix-blank.md
- [ ] 15-Phonetic-Test-Protocol.md (đầu vào trục 3)
- [ ] 10-Risk-Register.csv (cập nhật risk mới phát hiện)

**Người ký:** Founder + Brand Strategist + (Legal nếu CRITICAL)

### Gate 2 (Day 28) — Tên + Pillars lock

**Cần điền:**
- [ ] 03-Naming-Decision-blank.md
- [ ] 04-Brand-Pillars-Card-blank.md
- [ ] 05-Style-Lock-blank.md
- [ ] 14-Defensive-Domain-Checklist.md (Tier 1 mua xong)

**Người ký:** Founder + Brand Strategist + Legal

### Gate 3 (Day 56) — Brand Book v1 + Design Token v0.1

**Cần điền:**
- (file 08 — Brand Book Outline trực tiếp; không có artefact riêng)
- [ ] 21-Design-Token-Template.json (v0.1)
- [ ] Update 10-Risk-Register.csv
- [ ] Update 08-Domain-Tracker.csv (DNS đã setup)

**Người ký:** Founder + Designer trưởng + Brand Guardian (designate)

### Gate 4 (Day 90) — Web song ngữ live + Product Copy lock + Design System v1

**Cần điền:**
- [ ] 07-Schema-Organization.json (deployed)
- [ ] 19-Product-Copy-Blank.md (filled)
- [ ] 22-Onboarding-Copy-Blank.md (filled)
- [ ] (file 10 mục B — Entity checklist tracker)

**Người ký:** Founder + SEO + Web Dev + PM

### Gate 5 (Day 120) — TM filed + Brand Guardian appointed

**Cần điền:**
- [ ] 06-Brand-Guardian-Charter-blank.md
- [ ] 09-Trademark-Tracker.csv (đã nộp >= 3 class)
- [ ] 14-Defensive-Domain-Checklist.md (Tier 1+2 hoàn tất)
- [ ] 20-API-Naming-Blank.md (locked)

**Người ký:** Founder + Brand Guardian + Legal

---

## C. Bảng theo cadence

### Continuous (mỗi tuần / tháng)

- 08-Domain-Tracker.csv — review monthly
- 09-Trademark-Tracker.csv — review monthly
- 10-Risk-Register.csv — review monthly + adhoc
- 13-Approval-Request-Form.md — mỗi asset Tier 2-3

### Quarterly (mỗi quý)

- 12-Quarterly-Audit-Form-blank.md
- 11-Brand-Quiz-blank.md (cho nhân viên onboarded trong quý)

### Annual (mỗi năm)

- 17-Brand-Health-Survey.md
- 18-Annual-Review-Form.md
- 02-Risk-Matrix-blank.md (tái chạy)
- 11-Brand-Quiz-blank.md (toàn team)
- 06-Brand-Guardian-Charter-blank.md (renew)

### On-demand (khi xảy ra)

- 16-Crisis-Activation-Form.md — khi crisis trigger
- 13-Approval-Request-Form.md — khi có asset cần duyệt
- 11-Brand-Quiz-blank.md — khi onboard nhân viên mới

---

## D. Bảng theo owner

### Founder

- 01-Founder-Brief-blank.md (đầu vào)
- 02-Risk-Matrix-blank.md (duyệt)
- 03-Naming-Decision-blank.md (duyệt cuối)
- 04-Brand-Pillars-Card-blank.md (duyệt)
- 06-Brand-Guardian-Charter-blank.md (bổ nhiệm)
- 16-Crisis-Activation-Form.md (Crisis Lead)
- 18-Annual-Review-Form.md (approve cuối)

### Brand Strategist

- 02-Risk-Matrix-blank.md (chấm)
- 03-Naming-Decision-blank.md (chủ trì)
- 04-Brand-Pillars-Card-blank.md (workshop)
- 15-Phonetic-Test-Protocol.md (chủ trì)

### Brand Guardian

- 05-Style-Lock-blank.md (enforce)
- 10-Risk-Register.csv (sở hữu)
- 11-Brand-Quiz-blank.md (chấm)
- 12-Quarterly-Audit-Form-blank.md (chủ trì)
- 13-Approval-Request-Form.md (reviewer)
- 17-Brand-Health-Survey.md (chạy)
- 18-Annual-Review-Form.md (chủ trì)
- 19-Product-Copy-Blank.md (duyệt)
- 20-API-Naming-Blank.md (duyệt)
- 21-Design-Token-Template.json (duyệt)
- 22-Onboarding-Copy-Blank.md (duyệt)

### Legal / SHTT Agency

- 09-Trademark-Tracker.csv

### Ops

- 08-Domain-Tracker.csv
- 14-Defensive-Domain-Checklist.md

### Web Dev / SEO

- 07-Schema-Organization.json

### Dev Lead / PM

- 20-API-Naming-Blank.md (chủ trì)
- 19-Product-Copy-Blank.md (hỗ trợ)
- 22-Onboarding-Copy-Blank.md (hỗ trợ)

### Designer + Dev

- 21-Design-Token-Template.json (chủ trì)

### Crisis Team (on-demand)

- 16-Crisis-Activation-Form.md

---

## E. Convention mã hiệu (code)

Mỗi artefact khi điền và ký được gán mã hiệu để track:

```
01 -> BR-YYYYMMDD-<<brand-slug>>
02 -> RM-YYYYMMDD-<<brand-slug>>-v<<n>>
03 -> ND-YYYYMMDD-<<brand-slug>>
04 -> BP-YYYYMMDD-<<brand-slug>>-v<<n>>
05 -> SL-YYYYMMDD-<<brand-slug>>
06 -> GC-YYYYMMDD-<<brand-slug>>
07 -> (deployment hash on website source)
08 -> DT-<<brand-slug>>-master
09 -> TM-<<brand-slug>>-master
10 -> RR-<<brand-slug>>-master
11 -> BQ-YYYYMMDD-<<staff-id>>
12 -> QA-YYYYQQ-<<brand-slug>>
13 -> AR-YYYYMMDD-<<asset-slug>>
14 -> DD-YYYYMMDD-<<brand-slug>>
15 -> PT-YYYYMMDD-<<brand-slug>>
16 -> CR-YYYYMMDD-HHMM-<<type-code>>
17 -> BHS-YYYY-<<brand-slug>>
18 -> AR-YYYY-<<brand-slug>> (Annual Review — phân biệt với 13 Approval Request)
19 -> PCR-YYYYMMDD-<<brand-slug>> (Product Copy Registry)
20 -> ANR-YYYYMMDD-<<brand-slug>> (API Naming Registry)
21 -> DTT-YYYYMMDD-<<brand-slug>> (Design Token Template)
22 -> OCR-YYYYMMDD-<<brand-slug>> (Onboarding Copy Registry)
```

---

## F. Sử dụng kết hợp với 20 file template gốc

| Khi cần... | Dùng artefact | Tham chiếu file gốc |
|------------|---------------|---------------------|
| Hiểu triết lý phase | — | 00-README.md, 15-Application-Playbook.md |
| Plan timeline | — | 01-Master-Plan.md |
| Hiểu quy trình audit | 02 / 15 | 02-Brand-Forensics.md |
| Cây quyết định va chạm | 02 | 03-Risk-Matrix.md |
| Naming framework | 03 | 04-Naming-Strategy.md |
| Workshop pillars | 04 | 05-Brand-Pillars.md |
| Voice & tone | — | 06-Verbal-Identity.md |
| Product copy | 19 / 22 | 06-Verbal-Identity.md + 16-Product-Brand-System.md |
| Visual spec | — | 07-Visual-Identity-Spec.md |
| Design tokens | 21 | 07-Visual-Identity-Spec.md + 17-Design-System-Dev-Handoff.md |
| Build brand book | — | 08-Brand-Book-Outline.md |
| Bilingual messaging | — | 09-Bilingual-Messaging.md |
| Product UI strings | 19 | 09-Bilingual-Messaging.md + 16-Product-Brand-System.md |
| Schema deploy | 07 | 10-SEO-Entity-Plan.md |
| Trademark process | 09 / 14 | 11-Legal-Defense.md |
| Crisis | 16 | 11-Legal-Defense.md mục E |
| Brand Guardian | 06 | 12-Governance.md |
| Quarterly audit | 12 | 12-Governance.md mục E |
| Annual review | 17 / 18 | 12-Governance.md mục F |
| Brief vendor | — | 13-Briefs-Templates.md |
| Product brief | — | 13-Briefs-Templates.md (Brief #6) |
| API doc brief | — | 13-Briefs-Templates.md (Brief #7) |
| Tracker schema | 08 / 09 / 10 | 14-Trackers.md |
| Product brand metrics | — | 14-Trackers.md (Tracker #6) |
| Brand architecture | — | 18-Brand-Architecture.md |
| Competitive moat | — | 19-Competitive-Moat.md |

---

## G. Quy trình điền artefact

```
1. Open file artefact tương ứng (mở Markdown/JSON/CSV trong editor)
2. Save As -> folder fork brand cụ thể: Brandpro-Forks/<<brand>>/_artifacts-filled/
3. Đổi tên: <<số>>-<<tên>>-<<brand>>-<<date>>.md
4. Điền tất cả field <<...>> và checkbox [ ]
5. Sign-off — đủ chữ ký
6. Gán code (xem mục E)
7. Lưu vào Asset Hub theo path quy định
8. Update relevant tracker (nếu áp dụng)
```

---

**Index version:** 2.0 — 2026-06-13

**Maintained by:** Brand Guardian (sau khi appointed) hoặc PM (trong Phase 1-5).
