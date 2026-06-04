# FOUNDER DECISION MEMO — LQOS UPGRADE
> **Date:** 2026-06-05
> **From:** Founder
> **To:** Cascade, Dev Team, Ops Team
> **Re:** Verdict on MUONNOI_LQOS_UPGRADE_PROPOSAL_2026-06-05.md
> **Status:** APPROVED WITH CONDITIONS

---

## 1. PHÁN QUYẾT

Proposal đạt **7.2/10**. Đúng hướng, đã sửa nhiều điểm sai từ audit trước, evidence-first.

**Không được execute trực tiếp từ proposal này.** Phải đi qua vòng canonicalization. Phải khóa pilot, receipt, KYC, host protocol trước.

---

## 2. DUYỆT 6 RECOMMEND (Q1)

| Rec | Decision | Condition |
|-----|----------|-----------|
| **R1** Soft launch 01/08/2026 | ✅ Duyệt | Chỉ công bố nội bộ. Không public "Live" nếu 4 hard gates chưa pass. |
| **R2** Chỉ Đường Muôn Nơi | ✅ Duyệt | Không mở hoctap + family backend vội. Content landing OK, mission engine không. |
| **R3** Receipt Signed JSON v0.1 | ✅ Duyệt | Không W3C VC, không blockchain anchor sớm. |
| **R4** KYC 4 tier (1, 2, 2.5, 3) | ✅ Duyệt | Thêm data retention policy cho giấy tờ KYC. |
| **R5** Archive Capacitor legacy | ✅ Duyệt | Chỉ archive, không xoá. Giữ reference. |
| **R6** Astro + Vite+React | ✅ Duyệt | Ghi ADR-002 rõ. Public = Astro, App = Vite+React SPA. |

---

## 3. TRACKER SCOPE (Q2)

**Chọn Option A.** Giữ tracker gốc 9-condition sạch. Tạo riêng `LQOS_RELEASE_TRACKER_2026.md`. Không nhét LQOS vào tracker chung.

---

## 4. AI VIẾT FILE CANONICAL (Q3)

**Chọn Option A.** Cascade viết cả 3 file canonical v2 trước để đồng bộ voice và tốc độ. Founder + Dev review sau.

- `MUONNOI_LQOS_STRATEGY_v2.md`
- `MUONNOI_LQOS_PRODUCT_PLAN_v2.md`
- `MUONNOI_LQOS_TECH_SPEC_v2.md`

---

## 5. ĐIỀU KIỆN BẮT BUỘC TRƯỚC EXECUTE

| # | Condition | Owner | Deadline |
|---|-----------|-------|----------|
| 1 | **Không public claim "Live" cho Đường Muôn Nơi** | Cascade/Content | Immediate |
|   | `dulich.muonnoi.org` đang HTTP 000. Chỉ được ghi: "Đang chuẩn bị pilot Đà Lạt". Cấm: Live, Đang chạy, Đã triển khai. | | |
| 2 | **Receipt v0.1 phải khóa trước backend** | Cascade | 2026-06-07 |
|   | Viết `TECH_SPEC_RECEIPTS_v0.1.md` canonicalized. Không viết API proof/receipt khi chưa có spec. | | |
| 3 | **KYC Tier 3 cần legal review** | Founder/Cascade | 2026-06-10 |
|   | Viết `KYC_TIER_AND_HOST_VERIFICATION_POLICY.md`. Tier 3 có offline verification, host safety, travel liability. | | |
| 4 | **Travel compliance không được bỏ qua** | Founder/Cascade | 2026-06-10 |
|   | Viết `TRAVEL_COMPLIANCE_AND_SAFETY_POLICY_VN.md`. Khóa vai trò pháp lý của Muôn Nơi trong pilot. | | |

---

## 6. FILE CẦN TẠO TRƯỚC PHASE 0 (Priority Order)

| # | File | Purpose | Writer |
|---|------|---------|--------|
| 1 | `MUONNOI_DALAT_PILOT_LOCK_2026-08.md` | Khóa pilot scope, no-go, owners | Cascade |
| 2 | `QUEST_CONTENT_TEMPLATE_v1.md` | Template để viết quest thống nhất | Cascade |
| 3 | `LOCAL_HOST_OPERATING_PROTOCOL_v1.md` | Con người thật cần protocol | Cascade |
| 4 | `TECH_SPEC_RECEIPTS_v0.1.md` | Receipt spec canonicalized | Cascade |
| 5 | `KYC_TIER_AND_HOST_VERIFICATION_POLICY.md` | KYC + legal review | Cascade |
| 6 | `LQOS_RELEASE_TRACKER_2026.md` | Tracker riêng cho LQOS | Cascade |
| 7 | `SAFETY_INCIDENT_MATRIX_v1.md` | Escalation + response | Cascade |
| 8 | `MUONNOI_LQOS_STRATEGY_v2.md` | Canonical strategy | Cascade |
| 9 | `MUONNOI_LQOS_PRODUCT_PLAN_v2.md` | Canonical product | Cascade |
| 10 | `MUONNOI_LQOS_TECH_SPEC_v2.md` | Canonical tech | Cascade |

---

## 7. PUBLIC CLAIM POLICY (v0.1)

**Được nói:**
- Pilot, beta, selected hosts, Đà Lạt first
- Đang chuẩn bị, thử nghiệm nội bộ
- Proof-based quest system
- Local host onboarding in progress

**Không được nói:**
- Live, Đang chạy, Đã triển khai
- Verified national network
- Trust layer at scale
- Insurance bundled for all users
- Nationwide host system
- Production-ready platform

**Ai viết nội dung public:** Content team. Founder duyệt trước publish. Không post social nếu chưa qua review.

---

## 8. CRITICAL PATH (Execute Order)

```
1. dulich.muonnoi.org → HTTP 200 placeholder
2. pilot lock file approved
3. quest template locked
4. 10 quest content written
5. proof endpoint (POST /api/proofs)
6. host onboarding flow
7. receipt signed JSON spec locked
8. beta user invite run
9. safety protocol active
10. soft launch (01/08/2026 — nội bộ)
```

**Không đảo thứ tự.** Không viết API trước spec. Không onboard host trước protocol.

---

## 9. ĐIỂM QUAN TRỌNG NHẤT

Từ đây trở đi, mọi báo cáo phải đi theo chuẩn:

```
claim → evidence → file → command/output → status
```

Không dùng "đã có" nếu chưa có bằng chứng chạy thật.

---

> **Không được execute Phase 1 (dev coding) cho đến khi:**
> - 10 file ở mục 6 được Founder sign-off
> - 4 điều kiện ở mục 5 pass
> - `dulich.muonnoi.org` HTTP 200
