# Đường Muôn Nơi · Đà Lạt · 10 Quest Đầu Tiên
> **Mục đích:** Quản lý 10 quest đầu tiên cho soft launch 01/08/2026 (Pilot Lock đã chốt).
> **Template:** `docs/quests/QUEST_CONTENT_TEMPLATE_v1.md` (DO NOT ALTER without Founder approval)
> **Sprint:** Sprint 1 Day 2-3 (2026-06-07 → 2026-06-08) — Content + Cascade + Founder sign-off

---

## ASSIGNMENT TRACKER

| # | Slot file | Slug (pending) | Writer | Reviewer | Status | Notes |
|---|-----------|----------------|--------|----------|--------|-------|
| 1 | [01-tbd.md](01-tbd.md) | TBD | TBD | Founder | 🔲 EMPTY | Rename file when slug locked |
| 2 | [02-tbd.md](02-tbd.md) | TBD | TBD | Founder | 🔲 EMPTY | |
| 3 | [03-tbd.md](03-tbd.md) | TBD | TBD | Founder | 🔲 EMPTY | |
| 4 | [04-tbd.md](04-tbd.md) | TBD | TBD | Founder | 🔲 EMPTY | |
| 5 | [05-tbd.md](05-tbd.md) | TBD | TBD | Founder | 🔲 EMPTY | |
| 6 | [06-tbd.md](06-tbd.md) | TBD | TBD | Founder | 🔲 EMPTY | Batch 2 starts here |
| 7 | [07-tbd.md](07-tbd.md) | TBD | TBD | Founder | 🔲 EMPTY | |
| 8 | [08-tbd.md](08-tbd.md) | TBD | TBD | Founder | 🔲 EMPTY | |
| 9 | [09-tbd.md](09-tbd.md) | TBD | TBD | Founder | 🔲 EMPTY | |
| 10 | [10-tbd.md](10-tbd.md) | TBD | TBD | Founder | 🔲 EMPTY | |

**Status legend:** 🔲 EMPTY · 🟡 DRAFT · 🟢 REVIEW · ✅ SIGNED_OFF · 🔴 BLOCKED

---

## WORKFLOW FOR CONTENT WRITERS

1. Pick an EMPTY slot from the table above
2. Update tracker (this README) with your name + new slug
3. Rename `0N-tbd.md` → `0N-{slug}.md` (vd: `01-keo-chai-dalat.md`)
4. Fill in all MANDATORY fields per `docs/quests/QUEST_CONTENT_TEMPLATE_v1.md`:
   - Section 1 METADATA (quest_id, system="dulich", slug, city="Đà Lạt", region="Lâm Đồng", language, created_at, version, author_id)
   - Section 2 QUEST IDENTITY (title_vi, title_en, subtitle_vi, subtitle_en, intent, who_fits, who_not_fit)
   - Section 3 LOGISTICS (duration_min, difficulty, min_age, max_people, group_type, price_vnd, best_time)
   - Section 4 PROOF REQUIREMENTS (proof_types, gps_location, proof_radius_m)
   - Section 5 HOST ROLE (host_required, host_meet_location, host_briefing_minutes)
   - Section 6 SAFETY NOTES (risks, mitigations, emergency_contacts)
   - Section 7 NEARBY SUGGESTIONS (combo_with quest_ids, nearby_attractions)
   - Section 8 WHAT USER RECEIVES (xp_reward, trust_reward, receipt_format)
5. Update status to 🟡 DRAFT
6. Commit with message: `quest(dalat-NN): draft {slug}`
7. Tag Founder for review → status 🟢 REVIEW
8. Founder approves → status ✅ SIGNED_OFF

---

## BATCH SCHEDULE

| Batch | Slots | Target date | Status |
|-------|-------|-------------|--------|
| 1 | 01–05 | 2026-06-07 | ⏳ Pending content writer assignment |
| 2 | 06–10 | 2026-06-08 | ⏳ Pending content writer assignment |

---

## RULES

- **No copy-paste** between quests — each must be genuinely different
- **Brand voice** per `docs/brand/MUONNOI_VERBAL_IDENTITY_AND_BILINGUAL_MESSAGING_2026.md` (avoid: `guaranteed`, `magic`, `viral`, `instant`)
- **Vietnamese diacritics** required (no `Da Lat`, must be `Đà Lạt`)
- **Real locations only** — GPS coords must verify on map. No fake places.
- **Host attribution** — every quest credit the Local Host (host_id required)
- **Safety override** — any quest flagged Level 3+ by Safety Matrix must be paused

---

## CURRENT BLOCKERS

- [ ] Content writers not yet assigned (need Founder approval)
- [ ] 10 quest slugs not yet locked (depends on first 10 host quests selected)
- [ ] `dulich.muonnoi.org` HTTP 000 (DNS issue, separate gate)

---

**Created:** 2026-06-05 by Claude agent (Sprint 1 prep)
**Template lock:** Per Founder 2026-06-05
