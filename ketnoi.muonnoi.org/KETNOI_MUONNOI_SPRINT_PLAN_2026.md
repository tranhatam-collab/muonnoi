# SPRINT PLAN — KẾT NỐI MUÔN NƠI

**Phiên bản:** v0.1 — 2026  
**Trạng thái:** Draft — Áp dụng khi Phase 0 GATE pass  
**Sprint duration:** 2 tuần  
**Tiền đề:** `KETNOI_MUONNOI_DEV_ROADMAP_2026.md`

---

## Sprint Template

Mỗi sprint có cấu trúc:
- **Sprint Goal:** 1 câu mô tả kết quả mong muốn
- **Stories:** List với point (Fibonacci: 1,2,3,5,8,13)
- **Owner:** Dev lead + Safety review nếu có P0
- **Definition of Done:** Theo template chuẩn
- **Review Demo:** Link hoặc mô tả
- **Retrospective Action:** 1–2 improvements

---

## Phase 0 — Pháp lý & nền móng (Tháng 1–2)

### Sprint 0.1 — Legal & Compliance (W1–2)
- **Goal:** Legal memo và TIA dossier hoàn thành
- **Stories:**
  - UK OSA risk assessment (8)
  - PDPL TIA dossier (VN Bộ Công an) (13)
  - Chọn legal counsel UK + VN, ký hợp đồng (5)
- **Owner:** Founder + Legal counsel
- **DoD:** Memo có chữ ký counsel, dossier nộp Bộ Công an

### Sprint 0.2 — DB & Infra (W3–4)
- **Goal:** 2-region DB chạy staging
- **Stories:**
  - Setup DB VN (Postgres + PostGIS) (8)
  - Setup DB Global (Postgres + PostGIS) (8)
  - Replication + backup test (5)
  - Network isolation + IAM (5)
- **Owner:** Backend/DevOps

### Sprint 0.3 — Verify Prototype (W5–6)
- **Goal:** verify.iai.one ZK prototype hoạt động
- **Stories:**
  - ZK wrapper architecture (8)
  - Age gate + liveness prototype (13)
  - Selfie match test (5)
  - Auto-delete ảnh gốc sau 30 ngày (3)
- **Owner:** Safety/Backend

### Sprint 0.4 — Legal Docs (W7–8)
- **Goal:** Terms + Privacy + Safety Policy v0.1 approved
- **Stories:**
  - Draft Terms of Service (VN + Global) (8)
  - Draft Privacy Policy (8)
  - Draft Safety Policy (5)
  - Founder review + legal approval (5)
- **Owner:** Founder + Legal

---

## Phase 1 — MVP (Tháng 3–5)

### Sprint 1.1 — Web Skeleton (Tháng 3 W1–2)
- **Goal:** Astro web có auth và landing
- **Stories:**
  - Astro + React islands scaffold (5)
  - Auth: magic link + passkey prototype (13)
  - Landing page (VI/EN) (5)
  - Age gate (3)
  - SEO: hreflang + sitemap (3)
- **Owner:** Frontend

### Sprint 1.2 — Profile Form (Tháng 3 W3–4)
- **Goal:** User tạo profile Trust+Intent+Compatibility
- **Stories:**
  - Profile schema + DB migration (8)
  - Profile form UI (8)
  - Intent selection (3)
  - Values + Life Rhythm form (5)
  - Privacy settings (3)
- **Owner:** Frontend + Backend

### Sprint 1.3 — Verification Tier 1–3 (Tháng 4 W1–2)
- **Goal:** Xác minh email + phone + selfie/liveness
- **Stories:**
  - Email verification (3)
  - Phone verification (3)
  - Selfie upload + storage (5)
  - Liveness check integration (13)
  - Verified badge (3)
- **Owner:** Backend + Safety

### Sprint 1.4 — Matching v0.1 (Tháng 4 W3–4)
- **Goal:** 5–12 gợi ý/ngày theo intent
- **Stories:**
  - Matching algorithm v0.1 (intent + geo-mờ) (13)
  - Daily limit engine (5)
  - Suggestion card UI (5)
  - Like/Pass/Interest flow (5)
- **Owner:** Backend + Frontend

### Sprint 1.5 — Chat (Tháng 5 W1–2)
- **Goal:** WebSocket chat với safety features
- **Stories:**
  - WebSocket server self-hosted (13)
  - Chat UI (8)
  - Money Request Shield (8)
  - Off-platform Warning (5)
  - Report trong chat (3)
- **Owner:** Backend + Frontend

### Sprint 1.6 — Safe Date + Polish (Tháng 5 W3–4)
- **Goal:** Safe Date Mode hoạt động + QA pass
- **Stories:**
  - Safe Date planning form (8)
  - Check-in/check-out (5)
  - Panic shortcut (5)
  - Geo mờ (PostGIS) (5)
  - Hard-delete account (3)
  - QA + Security audit (8)
- **Owner:** Full team

---

## Phase 2 — Pilot Đà Lạt (Tháng 6–7)

### Sprint 2.1 — Community (W1–2)
- **Goal:** Local Hosts + quest system
- **Stories:**
  - Local Host profile (5)
  - Quest/karma system (8)
  - Community guidelines page (3)
- **Owner:** Frontend + Backend

### Sprint 2.2 — Event System (W3–4)
- **Goal:** Đăng ký + check-in event offline
- **Stories:**
  - Event creation (admin) (5)
  - Event registration (3)
  - Digital check-in/check-out (5)
  - Post-event feedback form (3)
- **Owner:** Full team

### Sprint 2.3 — Mobile PWA (W5–6)
- **Goal:** PWA hoạt động trên iOS + Android
- **Stories:**
  - PWA manifest + service worker (3)
  - Push notification (Expo push) (5)
  - Mobile responsive polish (5)
  - iOS TestFlight build (5)
- **Owner:** Mobile/Frontend

### Sprint 2.4 — Analytics (W7–8)
- **Goal:** Tracking retention + safety metrics
- **Stories:**
  - Retention dashboard (8)
  - Safety incident report (5)
  - Event NPS (3)
  - User interview script (3)
- **Owner:** Data + Product

---

## Phase 3 — Monetize + Mở rộng (Tháng 8–12)

### Sprint 3.1–3.2 — Subscription (Tháng 8)
- **Goal:** 4 tiers subscription hoạt động
- **Stories:**
  - Subscription schema + billing (13)
  - Basic/Plus/Premium/Elite feature gating (8)
  - Payment integration (pay.iai.one) (8)
  - Upgrade/downgrade flow (5)

### Sprint 3.3–3.4 — Gift Economy v0.1 (Tháng 9)
- **Goal:** 9 nhóm × 3 món đầu tiên
- **Stories:**
  - Gift catalog DB (5)
  - Purchase flow (8)
  - Gift sending UI (5)
  - No cash-out enforcement (3)

### Sprint 3.5–3.6 — Global (Tháng 10)
- **Goal:** meet.muonnoi.org EN-first
- **Stories:**
  - i18n full 7 ngôn ngữ (13)
  - EU/US legal review (8)
  - GDPR compliance features (8)
  - Global matching (opt-in consent) (5)

### Sprint 3.7–3.8 — AI Safety v1.0 (Tháng 11)
- **Goal:** Red flag + scam detection + appeal support
- **Stories:**
  - Red flag ML model (13)
  - Scam pattern summary (8)
  - Consent reminder bot (5)
  - Appeal support UI (5)

### Sprint 3.9–3.10 — Advanced Matching (Tháng 12)
- **Goal:** Compatibility score + relationship readiness
- **Stories:**
  - Compatibility algorithm (13)
  - Relationship readiness assessment (8)
  - Values alignment matching (8)
  - Analytics dashboard v1.0 (5)

---

## Definition of Done (Mọi sprint)

- [ ] Code reviewed (1 reviewer minimum)
- [ ] Unit tests pass (coverage >70% business logic)
- [ ] Integration tests pass cho critical paths
- [ ] Security scan pass (SAST + dependency audit)
- [ ] i18n keys đầy đủ (vi + en)
- [ ] Accessibility check (web only)
- [ ] Performance budget check (LCP <2.5s, CLS <0.1)
- [ ] Documentation updated
- [ ] Demo cho stakeholder
- [ ] No P0 bugs open

---

## Velocity Tracking

| Phase | Sprint | Est. Points | Actual | Notes |
|---|---|---|---|---|
| 0 | 0.1 | 26 | | Legal dependent |
| 0 | 0.2 | 26 | | Infra dependent |
| 0 | 0.3 | 29 | | Verify provider dependent |
| 0 | 0.4 | 26 | | Legal dependent |
| 1 | 1.1 | 29 | | |
| 1 | 1.2 | 27 | | |
| 1 | 1.3 | 27 | | |
| 1 | 1.4 | 28 | | |
| 1 | 1.5 | 37 | | Chat complex |
| 1 | 1.6 | 34 | | QA heavy |
| 2 | 2.1 | 16 | | |
| 2 | 2.2 | 16 | | |
| 2 | 2.3 | 18 | | |
| 2 | 2.4 | 19 | | |
| 3 | 3.1–3.2 | 34 | | |
| 3 | 3.3–3.4 | 21 | | |
| 3 | 3.5–3.6 | 34 | | |
| 3 | 3.7–3.8 | 31 | | |
| 3 | 3.9–3.10 | 34 | | |

---

**Kết Nối Muôn Nơi**  
Sprint Plan — 2-week cadence, safety review mọi sprint có P0.
