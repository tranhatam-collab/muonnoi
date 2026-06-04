# MUONNOI.ORG — LIFE QUEST OS UPGRADE PROPOSAL
> **Date:** 2026-06-05
> **Auditor:** Cascade + Founder Verification
> **Status:** PENDING FOUNDER APPROVAL
> **Scope:** Synchronize, clean obsolete, and upgrade LQOS plan to match verified system state
> **Supersedes:** All prior LQOS master plans (to be marked `STATUS_SUPERSEDED` upon approval)

---

## 1. EXECUTIVE SUMMARY

Hệ thống Muonnoi.org hiện ở **trạng thái partial-live**: 8 subdomain public shell hoạt động, `plays.muonnoi.org` 100 game deployed, API auth/reg 201 OK — nhưng Life Quest OS vẫn là **plan trên giấy**, chưa có landing page, backend schema, hay quest content cụ thể.

**Điểm số audit sau verify (evidence-based):**

| Tiêu chí | Điểm | Điều chỉnh từ audit gốc |
|---|---|---|
| Chiến lược & Tầm nhìn | 8/10 | Giữ nguyên |
| Tính nhất quán nội bộ | 6/10 | +1 (sau khi phân biệt `QUEST_TAXONOMY_V1.md` schema vs content) |
| Tính khả thi kỹ thuật | 5/10 | Giữ nguyên (thiếu spec receipt, KYC tier chưa locked) |
| Tính khả thi vận hành | 4/10 | Giữ nguyên |
| Dev task list | 6/10 | Giữ nguyên (path repo chưa lock) |
| Mobile readiness | 3/10 | Stub RN+Expo tồn tại nhưng chưa buildable |
| **Trung bình** | **5.3/10** | Dưới ngưỡng production-ready; cần 6 tuần focused execution cho soft launch |

**Nguyên tắc của proposal này:**
1. Evidence first — mọi claim phải có verify command/output.
2. No inference — không suy luận "có thể" từ "đã có".
3. Founder owns decisions — Cascade đề xuất, Founder duyệt.
4. Ship then perfect — v0.1 đơn giản, roadmap rõ ràng cho v0.2/v1.0.

---

## 2. CORRECTIONS TO PREVIOUS CASCADE AUDIT

Cascade audit 2026-06-04 chính xác về phần lớn, nhưng có **4 inaccuracy** sau khi Founder verify. Đã sửa trong proposal này.

| # | Claim Cascade (sai) | Verify thật | Correction |
|---|---------------------|-------------|------------|
| 1 | `COMPLETION_REPORT_2026-05-18.md` + `INFRASTRUCTURE_READY_2026-05-18.md` nên đánh dấu SUPERSEDED | **Đã có `STATUS_SUPERSEDED_BY` từ 2026-05-19** (trước audit) | Không cần đánh dấu lại. Chỉ cần xác nhận status hiện tại. |
| 2 | `QUEST_TAXONOMY_DULICH_DALAT_V1.md` MISSING hoàn toàn | **`docs/quests/QUEST_TAXONOMY_V1.md` TỒN TẠI** (28 dòng, schema type/status/proof) — nhưng **30-quest Đà Lạt detail thực sự MISSING** | Cascade conflate 2 file khác nhau: schema tồn tại, content chưa viết. |
| 3 | Mobile scaffold "0 dòng code" | **`apps/mobile/App.tsx` = 13 LOC stub** + `package.json` với expo 51, RN 0.74, expo-router, zustand, tanstack-query | Mobile là "scaffold + deps + stub navigator", không phải empty. Vẫn chưa buildable. |
| 4 | 8 subdomain LIVE, chỉ `www.nguoiviet` broken | **8 LIVE** (www, app, docs, ai, cuocsong, nguoiviet, lamviec, plays) + **2 BROKEN** (`dulich`, `hoctap` → HTTP 000) + `api.` apex 404 by design | Thêm 2 broken endpoint cần fix trước launch. |

**Ghi chú:** Các inaccuracy không thay đổi kết luận audit (LQOS chưa sẵn sàng execute), nhưng ảnh hưởng đến action plan cụ thể.

---

## 3. VERIFIED SYSTEM STATE

### 3.1 Ecosystem Layer Map (đã verify live)

| Layer | Subdomain | Status | Evidence |
|-------|-----------|--------|----------|
| Public Shell | `www.muonnoi.org` | ✅ LIVE | HTTP 200 |
| | `cuocsong.muonnoi.org` | ✅ LIVE | HTTP 200 |
| | `nguoiviet.muonnoi.org` | ✅ LIVE | HTTP 200 |
| Social Core | `app.muonnoi.org` | ✅ LIVE | OAuth login OK |
| AI/Support | `ai.muonnoi.org` | ✅ LIVE | Pages project active |
| Docs | `docs.muonnoi.org` | ✅ LIVE | HTTP 200 |
| Game Platform | `plays.muonnoi.org` | ✅ LIVE | 78+ game refs trong HTML |
| Work | `lamviec.muonnoi.org` | ✅ LIVE | HTTP 200 |
| **Travel Quest** | `dulich.muonnoi.org` | ❌ **BROKEN** | HTTP 000 / timeout |
| **Learning Quest** | `hoctap.muonnoi.org` | ❌ **BROKEN** | HTTP 000 / timeout |
| API | `api.muonnoi.org` | ⚠️ Partial | `/api/*` work; apex `/` 404 |

### 3.2 Codebase Evidence

| Component | Path | State | Verified |
|-----------|------|-------|----------|
| Web public shell | `public/` root + `app.muonnoi.org/apps/web/` | Flat HTML static, no build pipeline | ✅ |
| Mobile RN+Expo | `apps/mobile/` | `App.tsx` 13 LOC stub, `src/` 6 items, deps locked | ✅ |
| Mobile Capacitor legacy | `app.muonnoi.org/mobile-shell/` | `capacitor.config.ts`, `ios/`, `android/`, `package.json` còn sót | ✅ |
| Quest schema | `docs/quests/QUEST_TAXONOMY_V1.md` | 28 dòng schema (type/status/proof) — **không có content** | ✅ |
| Receipt spec | *(không tìm thấy)* | MISSING | ✅ |
| KYC tier def | *(không tìm thấy)* | MISSING | ✅ |
| Payment compliance spec | *(không tìm thấy)* | MISSING | ✅ |
| 4 zip archives in `lqos.muonnoi.org/` | `.zip` x4 | Chưa unzip, chưa review nội dung | ✅ |

### 3.3 Continuous Audit Plan Sync

`reports/MUONNOI_CONTINUOUS_DEV_AUDIT_PLAN_2026-06-02.md` đặt:
- **Phase 0-1:** Tuần 1-2 (đang chạy)
- **Phase 2 (Mobile Lock):** Tuần 3-4 → kết thúc ~23/06
- **Phase 3 (Subdomain Rollout):** Tuần 5-6 → kết thúc ~30/06
- **Phase 4 (LQOS Pilot):** Tuần 7+ → bắt đầu ~01/07

Proposal này **đồng bộ hoàn toàn** với audit plan trên.

---

## 4. SIX RECOMMENDATIONS FOR FOUNDER APPROVAL

### R1. Soft Launch Date: 01/08/2026 ✅ RECOMMEND

**Rationale:** Dependency chain từ Continuous Audit Plan: Phase 4 bắt đầu ~01/07, cần 4 tuần để onboard host, seed quest content, test proof upload, fix bug. 01/08/2026 là điểm cận biên thực tế.

**Hard Gates (nếu 1 trong 4 chưa pass → delay 2 tuần):**
1. ≥10 Local Host onboarded + KYC Tier 3 hoàn tất
2. ≥10 quest content live trong CMS
3. Proof upload endpoint pass smoke test (R2 + D1)
4. Insurance hotline + safety SOP ký sẵn

### R2. Scope Soft Launch: Chỉ Đường Muôn Nơi (dulich) ✅ RECOMMEND

**Rationale:** Focus = win. 1 quest system, 1 city (Đà Lạt), ~30 beta users. Đo được conversion, proof rate, host satisfaction. Mở thêm Học Đời/Family sớm sẽ pha loãng resource và làm chậm cả 2.

**Không mở:** `hoctap.muonnoi.org` content landing có thể deploy cùng tuần nhưng không cần backend mission engine.

### R3. Receipt v0.1: Signed JSON (KHÔNG dùng W3C VC vội) ✅ RECOMMEND

**Rationale:** Founder cần ship, không cần perfect. W3C VC + blockchain anchor là roadmap v0.2/v1.0.

**Spec v0.1 cụ thể:**
```json
{
  "version": "0.1",
  "issued_at": "2026-08-XXTXX:XX:XXZ",
  "user_id": "uuid",
  "quest_id": "uuid",
  "host_id": "uuid",
  "proof_type": "photo|text|gps|video",
  "proof_url": "https://r2.muonnoi.org/...",
  "location": {"lat": 12.345, "lng": 108.456, "accuracy_m": 10},
  "hash": "sha256:abc123...",
  "signature": "ed25519:sig456..."
}
```
- Hash: SHA-256 của canonical JSON (sorted keys, no whitespace).
- Signature: Ed25519 sign bằng platform key.
- Public key published tại `https://muonnoi.org/.well-known/receipt-pubkey.json`.
- Revocation: `revoked_at` timestamp + reason enum trong DB (soft-revoke, không cần blockchain).
- Storage: D1 (metadata) + R2 (raw proof file).

**Roadmap nâng cấp:**
- v0.2 (Q4 2026): Blockchain anchor — Merkle root anchor lên Stellar/Polygon mỗi 24h.
- v1.0 (H1 2027): W3C VC JWT với `did:web:muonnoi.org`, revocation list.

### R4. KYC 3 Tier + Tier 2.5 Content Creator ✅ RECOMMEND

| Tier | Name | Requirements | Time | Use For |
|------|------|------------|------|---------|
| 1 | Email | Email verify + phone OTP | 2 min | Default user |
| 2 | ID Online | Tier 1 + CCCD/CMND + selfie + liveness check | 5 min | Host applicant |
| **2.5** | **Verified Creator** | Tier 2 + industry verify (LinkedIn/portfolio) | 10 min | **Content creator / educator (Học Đời)** |
| 3 | Local Host | Tier 2 + offline interview + 4h training + reference check | 1-2 days | **Local Host live** |

**Rationale:** Tier 2.5 cho phép onboard educator (Học Đời) mà không cần offline interview nặng nề. Giữ Tier 3 strict cho host có trách nhiệm pháp lý trực tiếp với khách.

### R5. Archive Capacitor Legacy ✅ RECOMMEND (with condition)

**Pre-condition:** Verify không còn import Capacitor trong active source (ngoài `mobile-shell/`).
```bash
grep -rn "from ['\"]@capacitor" app.muonnoi.org/ --include="*.ts" --include="*.tsx" | grep -v node_modules | grep -v mobile-shell
```
Nếu output rỗng → archive an toàn.

**Action:**
- Move `app.muonnoi.org/mobile-shell/` → `_archive/mobile-shell-capacitor-legacy-2026-06-05/`
- KHÔNG xoá — giữ reference UI/CSP/config cho team.
- Update `docs/launch/MUONNOI_MOBILE_TEAM_HANDOFF_INDEX_2026-05-12.md` thêm note archive location.
- iOS gate (C3) verify path chuyển sang `apps/mobile/ios/` (RN+Expo).

### R6. ADR-002 Web Build System: Astro (public) + Vite+React (app) ✅ RECOMMEND

**Rationale:** Nhu cầu LQOS là SEO-first, multi-language, content-heavy. Astro phù hợp hơn Vite SPA.

| Need | Astro | Vite | 11ty |
|------|:-----:|:----:|:----:|
| SEO-first (SSG/SSR HTML) | ✅ | ❌ SPA | ✅ |
| i18n routing (hreflang) | ✅ built-in | ❌ manual | ⚠️ manual |
| Multi-route content (manifesto, about, press) | ✅ | ⚠️ overkill | ✅ |
| Component islands (React/Vue when needed) | ✅ | ✅ | ❌ |
| Image optimization | ✅ built-in | ❌ plugin | ⚠️ plugin |
| Fit public shell + Cuộc Sống + NGUOI VIET | ✅ | ❌ | ⚠️ |

**Split decision:**
- **Public/content sites** (www, cuocsong, nguoiviet, dulich, hoctap, lqos landing): **Astro**
- **App/auth-heavy** (app.muonnoi.org, lamviec.muonnoi.org): **Vite + React SPA**

**File tạo:** `docs/decisions/ADR-002-web-build-system-2026-06-05.md`

---

## 5. THREE NEW FINDINGS (chưa có trong audit gốc)

### Finding A: `dulich.muonnoi.org` + `hoctap.muonnoi.org` HTTP 000

Cả 2 subdomain chính cho LQOS Phase 1 đang **không resolve** (timeout). Phải fix DNS/Pages binding **TRƯỚC** khi viết landing page — nếu không content team viết xong cũng không deploy được.

**Action:** Kiểm tra Cloudflare Pages project + DNS `CNAME`/`AAAA` record. Nếu chưa tạo Pages project → tạo placeholder `index.html` và bind.

### Finding B: `api.muonnoi.org/` apex 404

Không phải bug, là router design (`/api/*` work, `/` 404). Nhưng nên thêm:
```json
GET /
{"service":"api.muonnoi.org","status":"ok","version":"v1","docs":"/openapi.json"}
```
Để consistent với `pay.iai.one` và hỗ trợ health check monitoring.

### Finding C: `docs/quests/QUEST_TAXONOMY_V1.md` chỉ là schema, không phải content

File tồn tại (28 dòng) nhưng chỉ liệt kê 7 quest type + 6 status + 7 proof status. **30-quest Đà Lạt cụ thể là nội dung chưa viết.** Ước tính 2 ngày của 1 content writer để hoàn tất 10 quest đầu (đủ soft launch).

**Action:** Tách thành 2 file:
- `docs/quests/QUEST_TAXONOMY_SCHEMA_v1.md` (schema hiện tại, rename)
- `content/quests/dulich/dalat-2026-q3/` — 10 quest markdown cụ thể

---

## 6. UPGRADE ARCHITECTURE — LQOS v2.0

### 6.1 Document Consolidation

Thay vì 30+ file rời rạc, tạo **3 file canonical** (SAU khi Founder approve 6 recommend):

| File | Content | Audience | Size Target |
|------|---------|--------|-------------|
| `MUONNOI_LQOS_STRATEGY_v2.md` | Vision, 7 quest systems (chỉ 3 active năm 1), phân tích đối thủ, KPI, nguyên tắc | Founder, Investors, Board | 3-5K words |
| `MUONNOI_LQOS_PRODUCT_PLAN_v2.md` | User flow, feature spec, wireframe mô tả, copy VI/EN, CTA logic | Product, Design, Content | 8-12K words |
| `MUONNOI_LQOS_TECH_SPEC_v2.md` | DB schema, API contract, receipt v0.1 spec, KYC tier, payment flow, security | Dev, DevOps, Security | 5-8K words |

**File cũ:** Đánh dấu `SUPERSEDED_BY: MUONNOI_LQOS_*_v2.md` trong header. Không xoá — giữ lịch sử.

### 6.2 90-Day Timeline (đồng bộ Continuous Audit Plan)

```
THÁNG 6/2026 (Hiện tại)
├── Tuần 1-2: Phase 0-1 — Lock payment QA, OAuth E2E, repo clean
├── Tuần 3-4: Phase 2 — Mobile Lock (iOS signing, Android SDK, RN buildable)

THÁNG 7/2026
├── Tuần 1-2: Phase 3 — Subdomain fix (dulich + hoctap LIVE), Astro scaffold
├── Tuần 3-4: Phase 4 START — LQOS MVP: quest listing, proof upload (text+photo), XP display

THÁNG 8/2026
├── Tuần 1-2: Phase 4 CONT — Onboard 10 hosts, 10 quests, 30 beta users
├── Tuần 3-4: SOFT LAUNCH ĐÀ LẠT (01/08/2026)
│   ├── Target: 100 registrations, 20 completions, 10 verified proofs
│   ├── Metric: Host satisfaction ≥7/10, 0 safety incidents
│   └── No paid revenue gate for v0.1

THÁNG 9-10/2026
├── Scale: 50 hosts, 100 users, 30 quests
├── Open Học Đời landing (content-only)
├── Receipt v0.1 (Signed JSON) live

THÁNG 11-12/2026
├── Family Mission pilot
├── Receipt v0.2 (Blockchain Anchor)
├── Payment provider #2 (MoMo/ZaloPay)
```

### 6.3 KPI by Phase

| Phase | Target | Không bắt buộc |
|-------|--------|----------------|
| Soft Launch (T8) | 10 hosts onboarded, 10 quests live, 30 beta users, 10 verified proofs, host sat ≥7/10, 0 incidents | Paid revenue, 100% automation, W3C VC |
| Scale (T9-10) | 50 hosts, 100 users, 30 quests, receipt v0.1 stable | Family Mission, blockchain anchor |
| Hardening (T11-12) | Family pilot, 2 payment providers, receipt v0.2 | Full KYC automation, insurance partner locked |

---

## 7. ACTION PLAN (chờ Founder approve)

### Phase 0: Immediate (24h sau approve)

| # | Task | Owner | Output |
|---|------|-------|--------|
| 0.1 | Mark 6 file SUPERSEDED (giữ history) | Cascade | Header updated |
| 0.2 | Unzip 4 zip archives vào `lqos.muonnoi.org/_extracted/2026-06-05/` | Cascade | Inventory list + review note |
| 0.3 | Create `docs/decisions/ADR-002-web-build-system-2026-06-05.md` | Cascade | ADR merged |
| 0.4 | Fix DNS/Pages for `dulich.muonnoi.org` + `hoctap.muonnoi.org` | Founder/Dev | HTTP 200 placeholder |
| 0.5 | Verify Capacitor archive safety (grep check) + move to `_archive/` | Cascade | Path updated, note in handoff index |
| 0.6 | Add `GET /` health endpoint to `api.muonnoi.org` | Dev | JSON response live |

### Phase 1: Soft Launch Prep (Tuần 1-4 sau approve)

| # | Task | Owner | Output |
|---|------|-------|--------|
| 1.1 | Write `MUONNOI_LQOS_STRATEGY_v2.md` + `PRODUCT_PLAN_v2.md` + `TECH_SPEC_v2.md` | Cascade/Claude | 3 file canonical approved |
| 1.2 | Write `QUEST_TAXONOMY_SCHEMA_v1.md` (rename từ existing) + 10 quest Đà Lạt content | Content + Cascade | 10 quest markdown |
| 1.3 | Write `TECH_SPEC_RECEIPTS_v0.1.md` (Signed JSON) | Dev/Cascade | Spec approved |
| 1.4 | Write `KYC_TIER_DEFINITION.md` (4 tier: 1, 2, 2.5, 3) | Product | Spec approved |
| 1.5 | Write `PAYMENT_COMPLIANCE_SPEC.md` (Phase 1: credit-only, no cash payout) | Product | Spec approved |
| 1.6 | Astro scaffold cho `dulich.muonnoi.org` landing page | Web | Deployed to Pages |
| 1.7 | R2 bucket setup + D1 schema migration (quest, host, proof, receipt) | DevOps | Terraform/Wrangler applied |
| 1.8 | Proof upload endpoint: `POST /api/proofs` (text + photo + GPS) | API Dev | HTTP 201, R2 URL returned |

### Phase 2: Soft Launch Execution (Tuần 5-8)

| # | Task | Owner | Output |
|---|------|-------|--------|
| 2.1 | Host onboarding form + KYC Tier 2→3 workflow | Web | `/host/register` live |
| 2.2 | Quest CMS (admin add/edit quest, assign host) | Web | 10 quests seeded |
| 2.3 | Beta user invite + quest join flow | Mobile/Web | 30 users onboarded |
| 2.4 | Proof review dashboard (host accepts/rejects) | Web | Host tool live |
| 2.5 | XP/Trust point display (read-only) | Web/Mobile | User profile shows points |
| 2.6 | Safety hotline + SOP document signed | Founder | Evidence in `qa/safety/` |

---

## 8. OPEN QUESTIONS FOR FOUNDER

Trước khi Cascade execute, cần Founder trả lời **3 câu hỏi sau** (text ngắn):

### Q1: Approve 6/6 recommend?
- Format trả lời: `OK all` hoặc per-item (`OK R1, R3, R5; R2 delay`)
- Nếu có điều chỉnh, ghi rõ.

### Q2: Scope verifier cron?
- **Option A:** Giữ 9-condition release tracker gốc (muonnoi.org + plays), tách LQOS tracker riêng.
- **Option B:** Mở rộng tracker gốc thêm 3 condition: C10 (`dulich`+`hoctap` live), C11 (ADR exists), C12 (Capacitor archived).
- Đề xuất: **Option A** — giữ tracker gốc clean, tạo `LQOS_RELEASE_TRACKER_2026.md` riêng.

### Q3: Ai viết 3 file canonical v2?
- **Option A:** Cascade viết cả 3 (nhanh, consistent voice).
- **Option B:** Chia — Cascade viết Strategy + Product; Claude/Tech lead viết Tech Spec.
- **Option C:** Founder viết outline; Cascade expand thành full doc.
- Đề xuất: **Option A** để đảm bảo speed + consistency, sau đó Founder edit.

---

## 9. APPENDIX: EVIDENCE LOG

| Claim | Verify Method | Result | Date |
|-------|---------------|--------|------|
| 8 subdomain LIVE | `curl -I` each | 8x HTTP 200 | 2026-06-05 |
| `dulich` + `hoctap` BROKEN | `curl -I` | 2x HTTP 000/timeout | 2026-06-05 |
| `QUEST_TAXONOMY_V1.md` schema only | `wc -l` + content read | 28 lines, no quest detail | 2026-06-05 |
| Mobile stub exists | `cat apps/mobile/App.tsx` + `package.json` | 13 LOC, expo 51, RN 0.74 | 2026-06-05 |
| Capacitor legacy no active import | `grep -r @capacitor` outside mobile-shell | 0 matches | 2026-06-05 |
| `COMPLETION_REPORT` already SUPERSEDED | `grep STATUS_SUPERSEDED` | Found | 2026-06-05 |
| 4 zip in `lqos.muonnoi.org/` | `ls -la *.zip` | 4 files (16K, 18K, 39K, 32K) | 2026-06-05 |
| `api.muonnoi.org/` apex 404 | `curl -I api.muonnoi.org/` | HTTP 404 | 2026-06-05 |

---

> **Proposal này KHÔNG tạo file canonical v2 cho đến khi Founder trả lời Q1-Q3.**
> Sau khi nhận confirm, Cascade sẽ execute Phase 0 trong 24h.
