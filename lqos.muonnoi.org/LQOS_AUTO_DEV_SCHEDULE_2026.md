# LQOS AUTO DEV SCHEDULE 2026
> **Date:** 2026-06-05
> **Status:** ACTIVE — Auto-run enabled per Founder directive
> **Scope:** Continuous development from 2026-06-05 until soft launch (target 01/08/2026)
> **Directive:** Founder: "Lên lịch tự động dev liên tục cho tới khi xong dự án này, deploy xong báo cáo tôi biết tôi sẽ DNS domain"

---

## SPRINT STRUCTURE

| Sprint | Duration | Start | End | Focus |
|--------|----------|-------|-----|-------|
| **Sprint 0** | 24 hours | 2026-06-05 | 2026-06-06 | Foundation: lock files, tracker, DNS fix |
| **Sprint 1** | 3 days | 2026-06-06 | 2026-06-09 | Specs: pilot, template, receipt, KYC, protocol, safety |
| **Sprint 2** | 7 days | 2026-06-09 | 2026-06-16 | Content + Dev: 10 quests, landing, placeholder, ADR |
| **Sprint 3** | 2 weeks | 2026-06-16 | 2026-06-30 | Backend: proof endpoint, host onboarding, receipt API, R2/D1 |
| **Sprint 4** | 2 weeks | 2026-06-30 | 2026-07-14 | Frontend: host dashboard, quest CMS, beta invite, XP display |
| **Sprint 5** | 2 weeks | 2026-07-14 | 2026-07-28 | Integration: E2E test, safety drill, host training, soft launch prep |
| **Soft Launch** | — | 2026-08-01 | — | Internal launch Đà Lạt (if 6 hard gates pass) |

---

## SPRINT 0 — FOUNDATION (24h) — 2026-06-05 → 2026-06-06

### Phase 0.1: Immediate (Cascade AI)
- [x] Mark 6 files SUPERSEDED
- [x] Unzip 4 archives → `_extracted/2026-06-05/`
- [x] Create `FOUNDER_DECISION_MEMO_LQOS_2026-06-05.md`
- [x] Create `MUONNOI_DALAT_PILOT_LOCK_2026-08.md`
- [x] Create `LQOS_RELEASE_TRACKER_2026.md`
- [x] Create `QUEST_CONTENT_TEMPLATE_v1.md`
- [x] Create `TECH_SPEC_RECEIPTS_v0.1.md`
- [x] Create `KYC_TIER_AND_HOST_VERIFICATION_POLICY.md`
- [x] Create `LOCAL_HOST_OPERATING_PROTOCOL_v1.md`
- [x] Create `SAFETY_INCIDENT_MATRIX_v1.md`
- [x] Create `TRAVEL_COMPLIANCE_AND_SAFETY_POLICY_VN.md`
- [x] Create `PUBLIC_CLAIM_POLICY_MUONNOI_LQOS_v1.md`
- [x] Create `ADR-002-web-build-system-2026-06-05.md`
- [x] Update KYC policy with `verify.iai.one` integration

### Phase 0.2: DNS/Fix (Founder/Dev)
- [ ] Fix `dulich.muonnoi.org` → HTTP 200 placeholder
- [ ] Fix `hoctap.muonnoi.org` → HTTP 200 placeholder
- [ ] Archive Capacitor legacy (`mobile-shell/` → `_archive/`)
- [ ] Add `GET /` health endpoint to `api.muonnoi.org`

### Phase 0.3: Canonical v2 Docs (Cascade AI)
- [ ] Write `MUONNOI_LQOS_STRATEGY_v2.md`
- [ ] Write `MUONNOI_LQOS_PRODUCT_PLAN_v2.md`
- [ ] Write `MUONNOI_LQOS_TECH_SPEC_v2.md`

**Deliverable:** 16 files created + 3 canonical docs + 2 DNS fixes

---

## SPRINT 1 — SPECS LOCK (3 days) — 2026-06-06 → 2026-06-09

### Day 1 (2026-06-06)
| Time | Task | Owner |
|------|------|-------|
| 09:00 | Founder reviews 10 created files | Founder |
| 12:00 | Founder feedback + corrections | Founder |
| 14:00 | Cascade applies corrections | Cascade |
| 17:00 | Founder sign-off on corrected files | Founder |
| 18:00 | Tracker update (files → PASS) | Cascade |

### Day 2 (2026-06-07)
| Time | Task | Owner |
|------|------|-------|
| 09:00 | Write 10 quest content Đà Lạt (batch 1: 5 quests) | Content + Cascade |
| 14:00 | Review quest content against template | Founder |
| 17:00 | Corrections applied | Cascade |

### Day 3 (2026-06-08)
| Time | Task | Owner |
|------|------|-------|
| 09:00 | Write 10 quest content Đà Lạt (batch 2: 5 quests) | Content + Cascade |
| 14:00 | All 10 quests seeded in `content/quests/dulich/dalat-2026-q3/` | Cascade |
| 17:00 | Founder sign-off on quest content | Founder |
| 18:00 | Tracker C5 → PASS | Cascade |

**Deliverable:** 10 quest content approved + all spec files signed

---

## SPRINT 2 — CONTENT + LANDING (7 days) — 2026-06-09 → 2026-06-16

### Day 1-3: Astro Scaffold
| # | Task | Owner | Output |
|---|------|-------|--------|
| 1 | Astro minimal template for `dulich.muonnoi.org` | Web | `sites/dulich/` scaffold |
| 2 | i18n config (vi + en) | Web | `astro-i18next` configured |
| 3 | Placeholder landing page | Web | `index.html` with "Đang chuẩn bị pilot" |
| 4 | Deploy to Cloudflare Pages | DevOps | DNS resolves HTTP 200 |
| 5 | Verify: `curl -I https://dulich.muonnoi.org` | Cascade | Evidence logged |

### Day 4-5: Quest Pages
| # | Task | Owner | Output |
|---|------|-------|--------|
| 6 | Quest listing page | Web | `/quests` route |
| 7 | Individual quest page (from template) | Web | `/quests/[slug]` route |
| 8 | Bilingual content rendering | Web | VI/EN switch |

### Day 6-7: Hoctap Placeholder
| # | Task | Owner | Output |
|---|------|-------|--------|
| 9 | Hoctap placeholder landing | Web | `sites/hoctap/` → Pages |
| 10 | Verify: `curl -I https://hoctap.muonnoi.org` | Cascade | Evidence logged |

**Deliverable:** dulich + hoctap HTTP 200 + quest pages scaffolded

---

## SPRINT 3 — BACKEND (2 weeks) — 2026-06-16 → 2026-06-30

### Week 1: Database + Storage
| # | Task | Owner | Spec |
|---|------|-------|------|
| 1 | D1 schema: `quests`, `hosts`, `users`, `proofs`, `receipts` | Dev | `TECH_SPEC_v2.md` §DB |
| 2 | R2 bucket: `muonnoi-proofs` | DevOps | Wrangler config |
| 3 | R2 restricted bucket: `muonnoi-kyc-documents` | DevOps | IAM policy |
| 4 | D1 migration + rollback test | Dev | `migrations/` folder |
| 5 | Backup automation: daily D1 export to R2 | DevOps | Cron trigger |

### Week 2: API Endpoints
| # | Task | Owner | Spec |
|---|------|-------|------|
| 6 | `POST /api/proofs` — upload photo/text/GPS | Dev | `TECH_SPEC_RECEIPTS_v0.1.md` |
| 7 | `GET /api/receipts/{id}` — public verification | Dev | Receipt spec |
| 8 | `POST /api/hosts/register` — onboarding app | Dev | `KYC_TIER_POLICY.md` |
| 9 | `POST /api/hosts/review-proof` — accept/reject | Dev | `HOST_PROTOCOL_v1.md` §5 |
| 10 | `GET /.well-known/receipt-pubkey.json` | Dev | Receipt spec §4.3 |
| 11 | Ed25519 key generation + secret storage | Dev | Cloudflare Secrets |

**Deliverable:** All API endpoints responding, R2/D1 live, backup automated

---

## SPRINT 4 — FRONTEND (2 weeks) — 2026-06-30 → 2026-07-14

### Week 1: Host + Quest Tools
| # | Task | Owner | Output |
|---|------|-------|--------|
| 1 | Host dashboard: login, view assigned quests | Web | `/host/dashboard` |
| 2 | Host proof review: accept/reject + reason | Web | `/host/proofs` |
| 3 | Quest CMS: add/edit quest (admin) | Web | `/admin/quests` |
| 4 | User quest browsing: list, filter, detail | Web | `/quests` |

### Week 2: User + Beta
| # | Task | Owner | Output |
|---|------|-------|--------|
| 5 | User quest join + proof submission flow | Web | `/quests/[slug]/join` |
| 6 | XP/Trust display (read-only) | Web | `/profile` |
| 7 | Beta user invite system: link + code | Web | `/beta/invite` |
| 8 | Safety hotline widget (all pages) | Web | Component |

**Deliverable:** Full user + host flows functional, beta invite live

---

## SPRINT 5 — INTEGRATION + LAUNCH PREP (2 weeks) — 2026-07-14 → 2026-07-28

### Week 1: Testing + Safety
| # | Task | Owner | Output |
|---|------|-------|--------|
| 1 | E2E test: join quest → submit proof → host review → receipt | QA | Test report |
| 2 | Safety drill: simulate Level 2 incident | Ops + Founder | Drill report |
| 3 | Host training: all 10 hosts complete 4h workshop | Ops | Certificates |
| 4 | KYC Tier 3: all 10 hosts verified | Ops | D1 records |
| 5 | Legal review completion | Founder + Lawyer | Signed opinion |

### Week 2: Hard Gate Verification
| # | Task | Owner | Verify Command |
|---|------|-------|----------------|
| 6 | Gate G1: `dulich.muonnoi.org` HTTP 200 | Dev | `curl -I https://dulich.muonnoi.org` |
| 7 | Gate G2: ≥10 host KYC3 | Ops | `SELECT COUNT(*) FROM hosts WHERE tier=3` |
| 8 | Gate G3: ≥10 quest live | Content | `SELECT COUNT(*) FROM quests WHERE status='active'` |
| 9 | Gate G4: Proof upload smoke test | Dev | `POST /api/proofs` → 201 |
| 10 | Gate G5: Safety SOP signed | Founder | File check `qa/safety/` |
| 11 | Gate G6: Receipt spec locked | Founder | File `TECH_SPEC_RECEIPTS_v0.1.md` signed |
| 12 | Gate G7: No public "Live" claim | Content | `grep -r` on public pages |

**Deliverable:** All 6 gates pass → GO for soft launch 01/08/2026

---

## SOFT LAUNCH — 01/08/2026

### Internal Launch (Not Public)
- Invite-only beta users (~30)
- 10 Local Host active
- 10 quests live
- Proof upload + receipt system operational
- Safety hotline active
- No monetization, no public marketing

### Launch Day Checklist
- [ ] All 6 hard gates PASS (evidence logged)
- [ ] Founder sends "GO" signal
- [ ] Beta invite links sent
- [ ] Hosts notified, confirmed ready
- [ ] Safety hotline tested
- [ ] No public "Live" claims anywhere
- [ ] Tracker updated: all 16 conditions PASS

---

## AUTO-RUN RULES

1. **Cascade will execute file creation tasks automatically** per Founder directive
2. **Cascade will NOT execute DNS changes, deploys, or infrastructure changes** without explicit Founder command
3. **Cascade will update tracker after each task completion**
4. **Cascade will pause and notify Founder if:**
   - Legal review deadline (2026-06-10) approaches without completion
   - Any hard gate FAILs on verification date
   - Safety incident occurs
   - Founder issues "STOP" command
5. **Cascade will report progress every Monday and Thursday at 09:00 UTC+7**

---

## BLOCKER ESCALATION

| Blocker | Escalation Path | Resolution Time |
|---------|-----------------|-----------------|
| `dulich.muonnoi.org` still HTTP 000 after Day 3 | Founder → Dev | 24h |
| `verify.iai.one` API unavailable | Founder → iai.one support | 48h |
| Lawyer review delays past 2026-06-10 | Founder → Lawyer | 72h |
| Host recruitment < 5 by 2026-07-01 | Founder → Ops | 1 week |
| Receipt spec rejected by Founder | Cascade → Rewrite | 24h |
| Safety incident (any level) | Founder IMMEDIATE | Immediate |

---

## EVIDENCE LOG FORMAT

Every completed task must log:
```
TASK: [description]
DATE: [YYYY-MM-DD HH:MM UTC+7]
OWNER: [name]
STATUS: [done|blocked|skip]
EVIDENCE: [command + output, or file path]
VERIFIED BY: [name]
```

---

> **Schedule locked 2026-06-05. Auto-run enabled. Founder can STOP/PAUSE/ADJUST anytime.**
