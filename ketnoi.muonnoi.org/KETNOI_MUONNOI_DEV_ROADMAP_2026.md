# LỘ TRÌNH DEV LIÊN TỤC — KẾT NỐI MUÔN NƠI

**Phiên bản:** v0.1 — 2026  
**Trạng thái:** Draft Proposed — Chờ Founder khóa 8 quyết định còn lại  
**Subdomain:** ketnoi.muonnoi.org  
**Tiền đề:** `KETNOI_MUONNOI_PRODUCT_PLAN_2026` + `henho.muonnoi.org/KETNOI_MUONNOI_PRODUCT_PLAN_2026`

---

## 1. Stack kỹ thuật đã chốt

| Lớp | Công nghệ | Ghi chú |
|---|---|---|
| **Web** | Astro + React islands | Static-first, SEO, hydration có chọn lọc |
| **Mobile** | React Native + Expo SDK 53+ | Cross-platform, hot reload, OTA updates |
| **API** | Node.js (tRPC/REST) + Cloudflare Workers | "Hub + Cells" — hub central + cells regional |
| **Database** | PostgreSQL 2 region + PostGIS | VN residency + Global (EU/US). Không cross-pollinate mặc định |
| **Chat** | WebSocket self-hosted | Không dùng third-party SDK lưu data ngoài |
| **Verification** | `verify.iai.one` self-hosted | Zero-Knowledge: không lưu ID gốc. Alias: verify.muonnoi.org |
| **Media** | R2/S3 encryption at rest | Ảnh, video intro, verified photo watermark |
| **Auth** | Magic link + passkey (WebAuthn) | Không password, khôi phục bằng email + device key |
| **Infra** | Cloudflare (CDN + Workers + R2) | Edge deployment, DDoS protection, geo-routing |
| **Monitoring** | OpenTelemetry + self-hosted hoặc Datadog | Logs, traces, metrics. Không bán user data qua analytics |

---

## 2. Tổ chức dev team

| Phase | Team size | Vai trò |
|---|---|---|
| Phase 0 | 2–3 người | Founder + 1 Backend/DevOps + 1 Frontend |
| Phase 1 | 4–6 người | + 1 Mobile (RN/Expo) + 1 Safety/ML + 1 QA |
| Phase 2 | 6–8 người | + 1 Community/Events dev + 1 Data analyst |
| Phase 3 | 8–10 người | + 1 Global/i18n + 1 Monetization + 1 Growth |
| v1.0 | 12–15 người | Full teams per region, dedicated security engineer |

---

## 3. Phase 0 — Pháp lý & nền móng (Tháng 1–2) ⚠️ GATE

**Mục tiêu:** Không viết code sản phẩm. Chỉ xây nền móng pháp lý, infra, compliance.

| Tuần | Sprint | Deliverable | Owner | Risks |
|---|---|---|---|---|
| W1–2 | Legal review | UK OSA risk assessment + PDPL TIA dossier (Bộ Công an) | Legal counsel | Chưa chọn luật sư UK + VN |
| W3–4 | DB setup | 2 region DB (VN + Global EU/US), PostGIS geo-mờ, replication | Backend/DevOps | Delay cloud provider approval |
| W5–6 | Verify infra | `verify.iai.one` ZK prototype: age gate + liveness + selfie match | Safety/Backend | Chưa chọn provider (tự xây vs Yoti/Persona) |
| W7–8 | Legal docs | Terms + Privacy Policy 3 region (VN, UK/EU, US) | Legal + Product | Phụ thuộc legal counsel SLA |

**Gate exit criteria:**
- [ ] Legal memo signed off bởi UK counsel + VN counsel
- [ ] DB 2 region chạy staging, data residency test passed
- [ ] verify.iai.one prototype qua test: age + liveness + không lưu ID gốc
- [ ] Terms + Privacy Policy v0.1 approved
- [ ] Subdomain + SSL + CDN configured

---

## 4. Phase 1 — MVP (Tháng 3–5)

**Mục tiêu:** Web + Mobile có thể đăng ký, xác minh, tạo profile, matching cơ bản, chat an toàn.

### Sprint 1–2: Web Foundation (Tháng 3)

| Story | Point | Priority |
|---|---|---|
| Astro web skeleton (ketnoi + meet) | 8 | P0 |
| Auth: magic link + passkey prototype | 8 | P0 |
| Landing page (song ngữ vi/en) | 5 | P0 |
| Age gate (18+, geo block) | 5 | P0 |
| SEO: hreflang, sitemap, meta tags | 3 | P0 |

### Sprint 3–4: Profile + Verification (Tháng 3–4)

| Story | Point | Priority |
|---|---|---|
| Profile Trust+Intent+Compatibility form | 13 | P0 |
| Verification 5 tier (Guest → Community Verified) | 13 | P0 |
| Selfie + liveness check integration | 8 | P0 |
| Photo upload + R2/S3 + watermark "verified" | 5 | P1 |
| Profile privacy settings (what’s public/private) | 5 | P0 |

### Sprint 5–6: Matching + Chat (Tháng 4–5)

| Story | Point | Priority |
|---|---|---|
| Intent-based matching algorithm v0.1 | 13 | P0 |
| Daily limit: 5–12 suggestions/user | 5 | P0 |
| WebSocket chat self-hosted | 13 | P0 |
| Chat safety: Money Request Shield | 8 | P0 |
| Off-platform Warning (Telegram/WhatsApp) | 5 | P0 |
| Report + block + appeal form | 5 | P0 |

### Sprint 7–8: Safe Date + Polish (Tháng 5)

| Story | Point | Priority |
|---|---|---|
| Safe Date Mode: date plan, check-in/out, panic shortcut | 13 | P0 |
| Geo mờ (PostGIS: vùng, không exact distance) | 5 | P0 |
| Hard-delete account + data | 5 | P0 |
| AI Safety Assistant v0.1 (profile suggestions + red flags) | 8 | P1 |
| CMS nội dung giáo dục an toàn | 3 | P1 |
| QA + Security audit pass | 8 | P0 |

**Gate exit criteria:**
- [ ] Đăng ký → xác minh cấp 2 → tạo profile → matching → chat → report: end-to-end flow hoạt động
- [ ] Safe Date Mode hoạt động trên web
- [ ] Money Request Shield chặn được 80%+ test cases scam
- [ ] QA pass: no critical bugs, no P0 security issues
- [ ] Pen-test cơ bản (OWASP Top 10) pass

---

## 5. Phase 2 — Pilot Đà Lạt (Tháng 6–7)

**Mục tiêu:** Free hoàn toàn. Xây liquidity. Test community events. Không monetization.

| Sprint | Focus | Deliverables |
|---|---|---|
| 9 | Community integration | Local Hosts profile, quest system, community guidelines |
| 10 | Event system | Speed-dating offline: đăng ký, check-in, matching sau event, feedback form |
| 11 | Mobile PWA + app store prep | Expo build, iOS TestFlight, Android APK, store screenshots |
| 12 | Analytics + feedback | Retention tracking, event NPS, safety incident report, user interviews |

**Gate exit criteria:**
- [ ] 500+ users đăng ký pilot
- [ ] 70%+ user đạt verification cấp 2+
- [ ] 1+ event offline thành công (an toàn, phản hồi tích cực)
- [ ] 0 serious safety incident
- [ ] Retention 7-day >30%

---

## 6. Phase 3 — Monetize + Mở rộng (Tháng 8–12)

**Mục tiêu:** Subscription tiện ích. Mở rộng global qua meet.muonnoi.org. Đo retention, an toàn, verify rate.

| Sprint | Focus | Deliverables |
|---|---|---|
| 13–14 | Subscription system | Basic/Plus/Premium/Elite tiers, không đụng ghép đôi. Payment qua pay.iai.one |
| 15–16 | Gift economy v0.1 | 9 nhóm quà × 3 món đầu tiên, purchase flow, không cash-out |
| 17–18 | Global expansion | meet.muonnoi.org EN-first, EU/US legal review, GDPR compliance, i18n full |
| 19–20 | AI Safety Assistant v1.0 | Red flag detection, scam summary, consent reminders, appeal support |
| 21–22 | Advanced matching | Compatibility score, relationship readiness, values alignment |
| 23–24 | Analytics + reporting | Retention 30/90, verify rate, safety SLA, scam block rate, meaningful connections |

**Gate exit criteria:**
- [ ] 5.000+ active users
- [ ] 5–10% paying user rate
- [ ] Monthly revenue >5.000 USD
- [ ] Retention 30-day >25%
- [ ] Safety SLA: 100% emergency <4 giờ, 100% high <24 giờ
- [ ] Scam block rate >70%

---

## 7. v1.0 — Global (Năm 2)

| Giai đoạn | Focus |
|---|---|
| Q1 | iOS App Store + Google Play Store launch |
| Q2 | Web-app parity (100% feature match) |
| Q3 | Global bilingual SEO scale (7 ngôn ngữ) |
| Q4 | Legal review theo từng quốc gia mới, KYC provider expansion |

---

## 8. Sprint cadence

- **Sprint duration:** 2 tuần
- **Planning:** Thứ 2 tuần 1, 2 giờ
- **Daily standup:** 15 phút (async nếu remote)
- **Review:** Thứ 6 tuần 2, demo + feedback
- **Retrospective:** Thứ 6 tuần 2, 1 giờ
- **Backlog grooming:** Giữa sprint, 1 giờ

---

## 9. Definition of Done

- [ ] Code reviewed bởi ít nhất 1 người
- [ ] Unit tests pass (coverage >70% cho business logic)
- [ ] Integration tests pass cho critical paths
- [ ] Security scan pass (SAST, dependency audit)
- [ ] Accessibility check (WCAG 2.1 AA cho web)
- [ ] Performance budget: Web vitals LCP <2.5s, CLS <0.1
- [ ] i18n keys đầy đủ (vi + en minimum)
- [ ] Documentation updated (API docs, runbook)
- [ ] Stakeholder demo approved

---

## 10. Security & T&S checklist theo phase

| Phase | Checkpoint |
|---|---|
| Phase 0 | DB encryption at rest + in transit, network isolation, IAM least privilege |
| Phase 1 | Input validation, SQL injection prevention, XSS prevention, CSRF tokens, rate limiting, content moderation API |
| Phase 2 | Event safety protocol, emergency contact system, location privacy audit, manual moderation training |
| Phase 3 | Penetration test, GDPR audit, payment PCI-DSS readiness, SOC 2 Type I prep |
| v1.0 | SOC 2 Type II, bug bounty program, independent security audit |

---

## 11. Công cụ & workflow

| Mục đích | Công cụ |
|---|---|
| Project management | GitHub Projects hoặc Linear |
| Code | GitHub, branch: `main`, `staging`, `feature/*` |
| CI/CD | GitHub Actions → Cloudflare Pages/Workers |
| Design | Figma (design system shared) |
| Docs | Notion / GitHub Wiki / Markdown in repo |
| Communication | Slack/Discord + weekly async updates |
| Testing | Vitest (unit), Playwright (e2e), k6 (load) |

---

## 12. Rủi ro dev & giảm thiểu

| Rủi ro | Giảm thiểu |
|---|---|
| Verify.iai.one quá phức tạp để tự xây | MVP dùng provider HEAA-certified (Yoti/Persona) cho phần liveness, giữ ZK wrapper |
| Chat WebSocket self-hosted khó scale | Bắt đầu với single node, scale horizontally khi >10K concurrent |
| 2-region DB sync issue | Eventual consistency cho non-critical, strong consistency cho auth/profile |
| Expo SDK breaking changes | Pin version, test trên physical device trước release |
| Payment integration delay | Dùng pay.iai.one ngay từ đầu, không tích hợp trực tiếp ngân hàng |

---

## 13. Quyết định Founder cần chốt trước Phase 0

| # | Quyết định | Khuyến nghị |
|---|---|---|
| 1 | Verify provider | Tự xây ZK wrapper + dùng Yoti/Persona cho liveness (iBeta PAD L3) |
| 2 | Cross-region matching | Opt-in + consent chuyển dữ liệu, không mặc định cross |
| 3 | Free Phase 1 | Kéo dài đến 500 verified users hoặc 2 tháng, lấy cái nào đến trước |
| 4 | An toàn nữ giới | Cả 2 region: "nữ nhắn trước" có thể toggle, không bắt buộc |
| 5 | Luật sư | 2 counsel: UK (Ofcom/DSA) + VN (Bộ Công an/TIA) |
| 6 | Cloud provider | Cloudflare chính + AWS backup cho DB |
| 7 | Mobile release | PWA trước, native app sau (giảm scope Phase 1) |
| 8 | Analytics | Self-hosted Plausible hoặc PostHog (không Google Analytics) |

---

**Kết Nối Muôn Nơi**  
Dev Roadmap — Chờ Founder chốt 8 quyết định trước Phase 0.
