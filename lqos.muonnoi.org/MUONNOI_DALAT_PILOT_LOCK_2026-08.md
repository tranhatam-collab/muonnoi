# MUONNOI DALAT PILOT LOCK
> **Pilot Name:** Đường Muôn Nơi — Đà Lạt Soft Launch
> **City:** Đà Lạt, Lâm Đồng, Việt Nam
> **Soft Launch Date:** 01/08/2026 (internal only)
> **Status:** LOCKED — DO NOT ALTER WITHOUT FOUNDER APPROVAL
> **Locked By:** Founder, 2026-06-05
> **File Owner:** Cascade (AI Pair Programmer)

---

## 1. PILOT SCOPE INCLUDED

What is IN this pilot:

| # | Item | Detail |
|---|------|--------|
| 1 | **Quest system** | Đường Muôn Nơi (travel quest) only |
| 2 | **City** | Đà Lạt, Lâm Đồng |
| 3 | **Content** | 10 quests live in CMS (written from `QUEST_CONTENT_TEMPLATE_v1.md`) |
| 4 | **Hosts** | 10 Local Host onboarded + KYC Tier 3 completed |
| 5 | **Users** | ~30 beta users (invite-only, no public registration) |
| 6 | **Proof types** | photo + text + GPS (no video for v0.1) |
| 7 | **Receipt** | Signed JSON v0.1 (SHA-256 + Ed25519, D1 + R2) |
| 8 | **Points** | XP + Trust (read-only display, no marketplace) |
| 9 | **Landing** | `dulich.muonnoi.org` — Astro static site, bilingual VI/EN |
| 10 | **Safety** | Hotline active + SOP signed by all hosts |
| 11 | **Review** | Host accepts/rejects proof; user reviews host (1-5 + text) |
| 12 | **Legal posture** | Experience introduction platform; host is independent contractor |

---

## 2. PILOT SCOPE EXCLUDED

What is OUT of this pilot (do NOT build, do NOT promise):

| # | Item | Reason |
|---|------|--------|
| 1 | **Học Đời backend** | Content landing only, no mission engine |
| 2 | **Family Mission** | Pilot năm 2027 |
| 3 | **Paid revenue / monetization** | v0.1 = operational economics test only, no public pricing |
| 4 | **W3C VC / Blockchain anchor** | Receipt v0.1 only |
| 5 | **Full KYC automation** | Tier 3 = manual offline process |
| 6 | **Insurance bundle** | Emergency hotline + safety SOP only; insurance partner = H2 2027 |
| 7 | **Video proof upload** | photo + text + GPS only (R2 cost + bandwidth) |
| 8 | **Public social feed** | No public timeline, no viral loops, no follower count |
| 9 | **AI quest generation** | Manual quest content only |
| 10 | **Nationwide expansion** | Đà Lạt only; no other cities until T10/2026 |
| 11 | **Credit/Earning marketplace** | XP + Trust display only; no cash payout to host in v0.1 |
| 12 | **iOS/Android native app in store** | Web PWA + invite link; native app = Phase 2 |

---

## 3. TARGET NUMBERS (Soft Launch, 01/08/2026)

| Metric | Target | Stretch | Measurement |
|--------|--------|---------|-------------|
| Local Host onboarded | 10 | 15 | KYC Tier 3 completed + SOP signed |
| Quests live | 10 | 12 | CMS seeded + host assigned |
| Beta users | 30 | 50 | Invite link activated |
| Quest completions | 20 | 30 | User submitted proof |
| Verified proofs | 10 | 20 | Host accepted proof |
| Host satisfaction | ≥7/10 | ≥8/10 | Post-quest survey (1 question) |
| Safety incidents | 0 | 0 | Incident log file |
| Public claim violations | 0 | 0 | Content audit by Founder |

**No-go if safety incident > 0.**

---

## 4. HARD GATES (Must ALL pass before soft launch announced)

| Gate | Criteria | Verify Command | Owner |
|------|----------|----------------|-------|
| G1 | `dulich.muonnoi.org` HTTP 200 | `curl -I https://dulich.muonnoi.org` | Dev |
| G2 | ≥10 host KYC Tier 3 done | `SELECT COUNT(*) FROM hosts WHERE kyc_tier = 3 AND status = 'active'` | Ops |
| G3 | ≥10 quest content live | `SELECT COUNT(*) FROM quests WHERE status = 'active' AND city = 'dalat'` | Content |
| G4 | Proof upload smoke test pass | `POST /api/proofs` → 201 + R2 URL returned | Dev |
| G5 | Safety hotline + SOP signed | File `qa/safety/dalat-sop-signed-2026-08.pdf` exists | Founder |
| G6 | Receipt spec v0.1 locked | `TECH_SPEC_RECEIPTS_v0.1.md` signed by Founder | Cascade |
| G7 | No public "Live" claim | `grep -r "[Ll]ive\|[Đđ]ang chạy" dulich.muonnoi.org/public/` = 0 | Content |

**If ANY gate fails on 2026-07-28 → delay 2 weeks (new date: 15/08/2026).**

---

## 5. NO-GO CONDITIONS (Automatic stop)

Pilot STOPS if:

1. **Safety incident** with police/hospital involvement → stop, investigate, Founder decides restart.
2. **Host fraud** ≥2 confirmed cases (fake proof, ghost quest) → pause onboarding, review KYC.
3. **Data breach** of user personal data → stop, incident response, notify affected users.
4. **Legal notice** from tourism authority → stop, consult lawyer, do NOT operate until cleared.
5. **Founder withdrawal** — Founder has sole authority to halt pilot at any time, no justification required.

---

## 6. ROLES & OWNERS

| Role | Person | Responsibility | Escalation |
|------|--------|---------------|------------|
| **Pilot Owner** | Founder | Final decision, go/no-go, public claim approval | — |
| **Product Lead** | (TBD) | Quest content, user flow, feature priority | Founder |
| **Tech Lead** | (TBD) | API, schema, receipt, proof upload, infra | Founder |
| **Ops Lead** | (TBD) | Host onboarding, KYC execution, safety SOP | Founder |
| **Content Lead** | (TBD) | Quest writing, landing copy, bilingual review | Founder |
| **AI Assistant** | Cascade | Spec writing, audit, evidence verification, documentation | Founder |

**All leads report to Founder. No decision made without Founder sign-off during pilot phase.**

---

## 7. COMMUNICATION RULES

| Channel | Use For | Response Time |
|---------|---------|---------------|
| Dev daily standup | Blockers, yesterday/today | Sync 15 min |
| Founder async | Decisions, scope change, public claim | 24h |
| Incident hotline | Safety, emergency, legal | Immediate |
| Content review | Copy, public page, bilingual | 48h |
| Evidence log | File status, verify command, output | Real-time in tracker |

---

## 8. REVISION HISTORY

| Date | Change | By |
|------|--------|-----|
| 2026-06-05 | Initial lock | Founder |
| | | |

---

> **This file is LOCKED. Any change requires Founder approval and a new row in Revision History.**
