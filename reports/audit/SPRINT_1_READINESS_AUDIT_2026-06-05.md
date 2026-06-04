# Sprint 1 Readiness Audit — 2026-06-05 01:30 ICT

> **Purpose:** Pre-flight audit before Sprint 1 auto-start at 2026-06-06 09:00 UTC+7
> **Auditor:** Claude agent
> **Scope:** Things that need to be ready BEFORE Sprint 1 Day 1 starts

---

## ✅ READY (no Founder action needed)

| # | Item | Evidence |
|---|------|----------|
| 1 | Quest content infrastructure | `docs/quests/dulich-dalat/` with README + 10 stub files (01-10) |
| 2 | dulich.muonnoi.org scaffold placeholder | `dulich.muonnoi.org/.scaffold/README.md` with Astro init steps |
| 3 | hoctap.muonnoi.org scaffold placeholder | `hoctap.muonnoi.org/.scaffold/README.md` |
| 4 | Cron recovery procedure | `reports/audit/CRON_RECOVERY_PROCEDURE_2026-06-05.md` |
| 5 | Audit framework documented | `docs/launch/MUONNOI_FINAL_EXECUTION_PLAN_2026-05-19.md` Section 7 |
| 6 | LQOS 16 files committed | Branch `audit-landingpage` commits 001eb1c9, 570c8e5f, 50b71fc0 |
| 7 | Tracker file alive | `reports/RELEASE_STATUS_2026-05-19.md` with full tick history |

---

## ⚠️ NEEDS FOUNDER ACTION (before Sprint 1 starts)

### 1. DNS unblock (Sprint 1 Day 1 deadline)

| Domain | Current | Target | Action |
|--------|---------|--------|--------|
| `dulich.muonnoi.org` | HTTP 000 | HTTP 200 | Cloudflare CNAME + Pages binding |
| `hoctap.muonnoi.org` | HTTP 000 | HTTP 200 | Same |
| `www.nguoiviet.muonnoi.org` | HTTP 000 | HTTP 200 or 301 | Same |

**Per scaffold READMEs** the steps are written. Estimated 10 min Founder action in Cloudflare dashboard.

### 2. Submodule cleanup — 2 items

**ai.muonnoi.org submodule:**
- ⚠️ **Modified** `workers/api/migrations/0007_mobile_push_tokens.sql` — **P0 RISK**, see `reports/audit/AI_MUONNOI_MIGRATION_0007_RISK_FLAG_2026-06-05.md`
- Untracked `docs/AI_MUONNOI_3_SEO_BILINGUAL_ARTICLES.md` — content article, OK to commit if reviewed

**app.muonnoi.org submodule:**
- Modified `apps/web/join/index.html` — need diff review
- Untracked `apps/web/assets/home.vi.html` — content asset, OK if reviewed

### 3. Legal review (Deadline 2026-06-10)

5 questions in `docs/policies/TRAVEL_COMPLIANCE_AND_SAFETY_POLICY_VN.md` §10 need lawyer answer:
- Insurance requirement for platform model
- Tourism license needed or not for v0.1
- Host independent contractor framework legality
- Payment routing compliance
- Refund policy minimum requirements

### 4. Sign-off on 16 LQOS files

Founder review per `lqos.muonnoi.org/FOUNDER_DECISION_MEMO_LQOS_2026-06-05.md`.

---

## 🔮 ANTICIPATED FOR SPRINT 1 DAY 2-3

When Founder OKs content writer assignment for 10 quest batch:

1. Writer picks slot from `docs/quests/dulich-dalat/README.md`
2. Fills template per `docs/quests/QUEST_CONTENT_TEMPLATE_v1.md`
3. Renames `0N-tbd.md` → `0N-{slug}.md`
4. Commits with `quest(dalat-NN): draft {slug}`
5. Founder reviews → status SIGNED_OFF

**Bottleneck:** Without content writer assignment from Founder, this can't start.

---

## 🤖 CLAUDE AGENT IDLE BEHAVIOR

While waiting for Founder action, Claude will:

1. **Cron `3d04bc7d`** ticks every 30 min, updates tracker
2. **No auto-changes** to LQOS files (frozen pending Founder sign-off)
3. **No auto-fix DNS** (requires Cloudflare credentials Claude doesn't have)
4. **No auto-fix submodule** (requires production data verification)
5. **Report regressions** if any condition transitions PASS→FAIL
6. **Wait for explicit instructions** before starting new tasks

---

## SIGNAL TO START SPRINT 1 ACTIVELY

Founder says any of:
- `"OK all"` → All 16 files approved, content writers assigned
- `"DNS fixed"` → Tracker re-verifies dulich/hoctap/www.nguoiviet
- `"Submodule resolved"` → C8 should return to PASS
- `"Start writing quests"` → Claude starts drafting based on host info

---

## TIMELINE STATUS

| Sprint | Date | Status |
|--------|------|--------|
| Sprint 0.1 (Cascade) | 2026-06-05 | ✅ Complete (16 files) |
| Sprint 0.2 (DNS) | 2026-06-05 → 06 | ⏳ Pending Founder |
| Sprint 0.3 (v2 docs) | 2026-06-05 | ✅ Complete |
| **Sprint 1 Day 1** | **2026-06-06 09:00** | 📋 Founder review files |
| Sprint 1 Day 2 | 2026-06-07 | Content batch 1 |
| Sprint 1 Day 3 | 2026-06-08 | Content batch 2 |
| Sprint 1 close | 2026-06-09 | All 10 quest signed off |

---

**Auditor:** Claude agent
**Filed:** 2026-06-05 01:30 ICT
**Next audit:** Cron tick at :47 (24 min)
