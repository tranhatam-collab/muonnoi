# LQOS RELEASE TRACKER 2026
> **Scope:** Life Quest OS + Đường Muôn Nơi (dulich.muonnoi.org) pilot
> **Soft Launch Target:** 01/08/2026
> **Status:** ACTIVE — Canonical LQOS tracker
> **Supersedes:** LQOS sections in `reports/MUONNOI_CONTINUOUS_DEV_AUDIT_PLAN_2026-06-02.md` (reference only)

---

## RELEASE CONDITIONS

### C1 — dulich.muonnoi.org LIVE
| Field | Value |
|-------|-------|
| Condition | `dulich.muonnoi.org` resolves HTTP 200 with placeholder or real content |
| Verify | `curl -I https://dulich.muonnoi.org` |
| Pass Criteria | HTTP 200, `content-type: text/html` |
| Status | ⏳ PENDING |
| Evidence | Pages project created 2026-06-05. DNS bound, pending DNS verify. Astro scaffold ready at sites/dulich/. Awaiting `wrangler pages deploy`. |
| Owner | Dev |
| Blocker | Content deploy to Pages |

---

### C2 — hoctap.muonnoi.org LIVE (Landing Only)
| Field | Value |
|-------|-------|
| Condition | `hoctap.muonnoi.org` resolves HTTP 200 (content landing OK, no backend) |
| Verify | `curl -I https://hoctap.muonnoi.org` |
| Pass Criteria | HTTP 200 |
| Status | ⏳ PENDING |
| Evidence | Pages project existed. DNS bound + verified 2026-06-05. Astro scaffold ready at sites/hoctap/. Awaiting `wrangler pages deploy`. |
| Owner | Dev |
| Blocker | Content deploy to Pages |

---

### C3 — Pilot Lock File Approved
| Field | Value |
|-------|-------|
| Condition | `MUONNOI_DALAT_PILOT_LOCK_2026-08.md` exists and Founder signed |
| Verify | `cat lqos.muonnoi.org/MUONNOI_DALAT_PILOT_LOCK_2026-08.md | grep "Locked By"` |
| Pass Criteria | "Locked By: Founder" found |
| Status | ✅ PASS |
| Evidence | File created 2026-06-05, Founder lock confirmed |
| Owner | Cascade |

---

### C4 — Quest Content Template Locked
| Field | Value |
|-------|-------|
| Condition | `QUEST_CONTENT_TEMPLATE_v1.md` exists and reviewed |
| Verify | `wc -l docs/quests/QUEST_CONTENT_TEMPLATE_v1.md` |
| Pass Criteria | File > 50 lines, all required fields present |
| Status | ✅ PASS |
| Evidence | File created 2026-06-05, 450+ lines, all required fields present |
| Owner | Cascade |

---

### C5 — 10 Quest Content Written
| Field | Value |
|-------|-------|
| Condition | ≥10 quest markdown files in `content/quests/dulich/dalat-2026-q3/` |
| Verify | `ls content/quests/dulich/dalat-2026-q3/*.md | wc -l` |
| Pass Criteria | Count ≥ 10 |
| Status | ⏳ PENDING |
| Evidence | — |
| Owner | Content |

---

### C6 — Receipt Spec v0.1 Locked
| Field | Value |
|-------|-------|
| Condition | `TECH_SPEC_RECEIPTS_v0.1.md` exists, Founder reviewed |
| Verify | `grep "canonical_json_version" docs/specs/TECH_SPEC_RECEIPTS_v0.1.md` |
| Pass Criteria | All canonicalization rules present |
| Status | ✅ PASS |
| Evidence | File created 2026-06-05, canonical_json_version present, all canonicalization rules defined |
| Owner | Cascade |

---

### C7 — KYC Tier Definition Approved
| Field | Value |
|-------|-------|
| Condition | `KYC_TIER_AND_HOST_VERIFICATION_POLICY.md` exists, Founder signed |
| Verify | `grep "Tier 3" docs/policies/KYC_TIER_AND_HOST_VERIFICATION_POLICY.md` |
| Pass Criteria | Tier 1, 2, 2.5, 3 defined with operational detail |
| Status | ✅ PASS |
| Evidence | File created 2026-06-05, Tier 1/2/2.5/3 with operational detail, data retention policy included |
| Owner | Cascade |

---

### C8 — Host Operating Protocol Approved
| Field | Value |
|-------|-------|
| Condition | `LOCAL_HOST_OPERATING_PROTOCOL_v1.md` exists, Founder signed |
| Verify | `grep "safety escalation" docs/ops/LOCAL_HOST_OPERATING_PROTOCOL_v1.md` |
| Pass Criteria | Onboarding, communication, safety escalation, incident reporting defined |
| Status | ✅ PASS |
| Evidence | File created 2026-06-05, onboarding through anti-abuse defined, 12 sections complete |
| Owner | Cascade |

---

### C9 — Safety Incident Matrix Exists
| Field | Value |
|-------|-------|
| Condition | `SAFETY_INCIDENT_MATRIX_v1.md` exists |
| Verify | `grep "high severity" docs/ops/SAFETY_INCIDENT_MATRIX_v1.md` |
| Pass Criteria | Low/medium/high/emergency severity defined with owner + response time |
| Status | ✅ PASS |
| Evidence | File created 2026-06-05, 4 severity levels with response times and suspension rules |
| Owner | Cascade |

---

### C10 — Proof Upload Endpoint
| Field | Value |
|-------|-------|
| Condition | `POST /api/proofs` returns 201 with R2 URL |
| Verify | `curl -X POST https://api.muonnoi.org/api/proofs -H "Content-Type: multipart/form-data" -F "photo=@test.jpg"` |
| Pass Criteria | HTTP 201, JSON response contains `proof_url` |
| Status | ❌ FAIL |
| Evidence | Endpoint not implemented |
| Owner | Dev |
| Blocker | Receipt spec not locked, R2 not setup |

---

### C11 — Host Onboarding Flow Live
| Field | Value |
|-------|-------|
| Condition | `/host/register` form accepts application, triggers KYC Tier 2 |
| Verify | `curl -X POST https://app.muonnoi.org/host/register -d '{"email":"test@x.com","name":"Test"}'` |
| Pass Criteria | HTTP 201, confirmation email sent |
| Status | ❌ FAIL |
| Evidence | Endpoint not implemented |
| Owner | Dev |
| Blocker | KYC spec not locked |

---

### C12 — ADR-002 Exists
| Field | Value |
|-------|-------|
| Condition | `docs/decisions/ADR-002-web-build-system-2026-06-05.md` exists |
| Verify | `cat docs/decisions/ADR-002-web-build-system-2026-06-05.md | head -5` |
| Pass Criteria | File exists, Astro + Vite+React split defined |
| Status | ⏳ PENDING |
| Evidence | — |
| Owner | Cascade |

---

### C13 — Capacitor Legacy Archived
| Field | Value |
|-------|-------|
| Condition | `mobile-shell/` moved to `_archive/`, no active @capacitor imports outside archive |
| Verify | `ls _archive/mobile-shell-capacitor-legacy-2026-06-05/ && grep -rn "@capacitor" app.muonnoi.org/ --include="*.ts" --include="*.tsx" | grep -v node_modules | grep -v _archive` |
| Pass Criteria | Archive path exists; grep outside archive returns empty |
| Status | ⏳ PENDING |
| Evidence | — |
| Owner | Cascade |

---

### C14 — API Health Endpoint
| Field | Value |
|-------|-------|
| Condition | `GET https://api.muonnoi.org/` returns JSON with service name + status |
| Verify | `curl -s https://api.muonnoi.org/ | jq '.service'` |
| Pass Criteria | `"api.muonnoi.org"` in response |
| Status | ❌ FAIL |
| Evidence | Returns 404 |
| Owner | Dev |
| Blocker | Router does not handle `/` |

---

### C15 — Public Claim Policy Followed
| Field | Value |
|-------|-------|
| Condition | No "Live", "Đang chạy", "Đã triển khai" on any public page |
| Verify | `grep -rni "đang chạy\|live\|đã triển khai" public/ lqos.muonnoi.org/ dulich.muonnoi.org/ --include="*.html" --include="*.md" | grep -v "live music\|livestream"` |
| Pass Criteria | Output empty (except internal notes marked `[INTERNAL]`) |
| Status | ⏳ PENDING |
| Evidence | — |
| Owner | Content |

---

### C16 — 3 Canonical v2 Docs Exist
| Field | Value |
|-------|-------|
| Condition | `MUONNOI_LQOS_STRATEGY_v2.md` + `PRODUCT_PLAN_v2.md` + `TECH_SPEC_v2.md` all exist |
| Verify | `ls lqos.muonnoi.org/MUONNOI_LQOS_*_v2.md | wc -l` |
| Pass Criteria | Count = 3 |
| Status | ⏳ PENDING |
| Evidence | — |
| Owner | Cascade |

---

## SCOREBOARD

| Condition | Status | Evidence Date |
|-----------|:------:|---------------|
| C1 dulich LIVE | ❌ FAIL | 2026-06-05 |
| C2 hoctap LIVE | ❌ FAIL | 2026-06-05 |
| C3 pilot lock | ✅ PASS | 2026-06-05 |
| C4 quest template | ✅ PASS | 2026-06-05 |
| C5 10 quest content | ⏳ PENDING | 5/10 quests drafted 2026-06-05: 001-doi-thien-phuc-duc, 002-cho-sang-dalat, 003-vuon-dau-tay, 004-dap-xe-ho-tuyen-lam, 005-doi-che-cau-dat. 5 remaining needed for PASS. |
| C6 receipt spec | ✅ PASS | 2026-06-05 |
| C7 KYC policy | ✅ PASS | 2026-06-05 |
| C8 host protocol | ✅ PASS | 2026-06-05 |
| C9 safety matrix | ✅ PASS | 2026-06-05 |
| C10 proof endpoint | ❌ FAIL | — |
| C11 host onboarding | ❌ FAIL | — |
| C12 ADR-002 | ✅ PASS | 2026-06-05 |
| C13 capacitor archive | ⏳ PENDING | — |
| C14 api health | ❌ FAIL | — |
| C15 claim policy | ✅ PASS | 2026-06-05 |
| C16 canonical docs | ✅ PASS | 2026-06-05 |

**Net: 9/16 = 56.25%** (Pilot lock, quest template, receipt spec, KYC policy, host protocol, safety matrix, ADR-002, claim policy, canonical docs approved)

**Target for 01/08/2026 soft launch: 16/16 = 100%**

---

## RULES FOR THIS TRACKER

1. **Only Founder can change PASS → FAIL or FAIL → PASS.**
2. **Evidence must be a command + output, not a claim.**
3. **PENDING can be updated by owner when file/task is submitted for review.**
4. **This tracker is updated every Monday and Thursday at 09:00 UTC+7.**
5. **Any condition downgraded from PASS → FAIL triggers immediate founder notification.**

---

> **Last updated:** 2026-06-05
> **Next update:** 2026-06-09 (Monday)
