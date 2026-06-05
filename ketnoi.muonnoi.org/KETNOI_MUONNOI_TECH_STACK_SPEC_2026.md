# SPEC STACK KỸ THUẬT — KẾT NỐI MUÔN NƠI

**Phiên bản:** v0.1 — 2026  
**Trạng thái:** Draft — Chờ Founder chốt 8 quyết định  
**Subdomain:** ketnoi.muonnoi.org, meet.muonnoi.org  
**Tiền đề:** `KETNOI_MUONNOI_DEV_ROADMAP_2026.md`

---

## 1. Tổng quan kiến trúc

```
┌─────────────────────────────────────────────────────────────┐
│                        CDN / Edge                           │
│              Cloudflare (Pages + Workers + R2)              │
│         DDoS | WAF | Geo-routing | Cache | SSL              │
└──────────────────┬──────────────────────┬─────────────────────┘
                   │                      │
        ┌──────────▼──────────┐  ┌───────▼────────┐
        │   Web (Astro+React) │  │  Mobile (RN)   │
        │  ketnoi.muonnoi.org │  │   Expo SDK 53+ │
        │  meet.muonnoi.org   │  │                │
        └──────────┬──────────┘  └───────┬────────┘
                   │                      │
                   └──────────┬───────────┘
                              │
              ┌───────────────▼───────────────┐
              │     API Layer (Hub + Cells)   │
              │   Cloudflare Workers (Edge)   │
              │   Node.js tRPC/REST (Core)    │
              └───────────────┬───────────────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        │                     │                     │
   ┌────▼────┐          ┌────▼────┐         ┌─────▼─────┐
   │  DB VN  │          │ DB Global│         │  Verify   │
   │Postgres │          │ Postgres │         │iai.one ZK │
   │+PostGIS │          │+PostGIS  │         │           │
   └────┬────┘          └────┬────┘         └─────┬─────┘
        │                    │                     │
        └────────────────────┼─────────────────────┘
                             │
                    ┌────────▼────────┐
                    │  Supporting Svcs│
                    │ Chat WS | R2/S3 │
                    │ Authn | Authz   │
                    │ Monitoring      │
                    └─────────────────┘
```

---

## 2. Chi tiết từng lớp

### 2.1. Web Frontend

| Trường | Giá trị |
|---|---|
| Framework | Astro 5.x (static-first, content-driven) |
| Islands | React 19 (interactive components: form, chat, verification) |
| Styling | Tailwind CSS 4.x + shadcn/ui |
| i18n | Astro i18n + react-intl |
| SEO | Sitemap, hreflang, JSON-LD, meta tags auto-generated |
| Performance | LCP <2.5s, CLS <0.1, TBT <200ms |
| Accessibility | WCAG 2.1 AA |
| SSR/SSG | Landing = SSG. App routes = SSR với edge caching |

**Subdomains:**
- `ketnoi.muonnoi.org` — VN market, VI-first
- `meet.muonnoi.org` — Global, EN-first
- `henho.muonnoi.org` — SEO redirect → ketnoi

### 2.2. Mobile

| Trường | Giá trị |
|---|---|
| Framework | React Native 0.76+ |
| Tooling | Expo SDK 53+ (EAS Build, EAS Update OTA) |
| Navigation | Expo Router (file-based) |
| State | Zustand + TanStack Query |
| Storage | AsyncStorage (local) + SecureStore (sensitive) |
| Push | Expo Push (phase 1), OneSignal/Firebase (phase 3) |
| Deeplink | Expo Linking + universal links |

**Release strategy:**
- Phase 1: PWA (Astro web có manifest + service worker)
- Phase 2: iOS TestFlight + Android internal testing
- Phase 3: App Store + Play Store

### 2.3. API Layer (Hub + Cells)

| Trường | Giá trị |
|---|---|
| Edge | Cloudflare Workers (TypeScript, Wrangler) |
| Core API | Node.js 22 + Fastify / tRPC |
| Protocol | HTTP/2 + WebSocket (chat realtime) |
| Auth | JWT (short-lived) + Refresh token rotation |
| Rate limit | Per-user, per-IP, per-endpoint (Cloudflare + app-level) |
| CORS | Strict whitelist |

**Hub + Cells pattern:**
- **Hub:** Routing, auth, global config, cross-cell coordination
- **Cell VN:** User data VN, matching VN, payment VN
- **Cell Global:** User data EU/US, matching global, payment global
- Cells không share DB mặc định. Cross-cell cần explicit opt-in + consent log.

### 2.4. Database

| Trường | Giá trị |
|---|---|
| Engine | PostgreSQL 16 |
| Extensions | PostGIS (geo mờ), pg_trgm (fuzzy search), uuid-ossp |
| ORM | Drizzle ORM (type-safe, lightweight) |
| Migration | Drizzle Kit + SQL review |
| Backup | Daily automated + point-in-time recovery |
| Hosting | Supabase (VN) + Supabase/Neon (Global) hoặc self-hosted |

**Schema chính:**
- `users` — identity, auth, verification tier
- `profiles` — Trust + Intent + Compatibility data
- `matches` — match history, status, metadata
- `conversations` — chat rooms, last message
- `messages` — encrypted at rest
- `reports` — moderation queue, SLA tracking
- `events` — community events, registrations
- `gifts` — gift catalog, transactions
- `subscriptions` — tiers, billing, expiry
- `audit_logs` — security events, admin actions

### 2.5. Chat (Realtime)

| Trường | Giá trị |
|---|---|
| Transport | WebSocket self-hosted (ws library hoặc Socket.io) |
| Message store | PostgreSQL + Redis pub/sub |
| Encryption | TLS 1.3 transit. AES-256 at rest |
| History | Lazy load 50 messages, infinite scroll |
| Presence | Typing indicator, last seen (mờ) |
| Media | Upload → R2/S3 → signed URL |

**Safety features:**
- Message scan trước khi deliver (async, <100ms)
- Money Request Shield: regex + ML model detect từ khóa scam
- Off-platform Warning: detect phone/email/telegram/whatsapp link
- Auto-flag: report count threshold → human review

### 2.6. Verification (verify.iai.one)

| Trường | Giá trị |
|---|---|
| Architecture | Self-hosted microservice |
| ID check | Optional: Yoti / Persona / Shufti (iBeta PAD L3) |
| Liveness | Selfie video + challenge-response |
| Age gate | HEAA-compliant cho UK. Local law cho VN |
| Data handling | Zero-Knowledge: hash ID, không lưu ảnh gốc, auto-delete sau 30 ngày |
| Alias | verify.muonnoi.org → verify.iai.one |

**Flow:**
1. User chụp selfie + giữ CMND (không upload CMND trừ optional ID tier)
2. AI so khớp selfie với liveness video
3. Optional: Third-party verify CMND (hash only)
4. Result: verified badge + trust score update
5. Original images deleted. Only hash + metadata retained.

### 2.7. Media Storage

| Trường | Giá trị |
|---|---|
| Object storage | Cloudflare R2 (primary) hoặc AWS S3 |
| CDN | Cloudflare Images (resize, format auto) |
| Encryption | AES-256 at rest, TLS 1.3 transit |
| Access | Signed URL có expiration (15 phút) |
| Backup | Cross-region replication |
| Moderation | AWS Rekognition / Google Vision (NSFW + deepfake detection) |

### 2.8. Auth

| Trường | Giá trị |
|---|---|
| Method | Magic link email + Passkey (WebAuthn) |
| No password | Không lưu password, không reset password flow |
| Session | JWT (15 phút) + Refresh token (7 ngày, rotate) |
| MFA | Optional TOTP (Authenticator app) |
| Recovery | Email backup + device key backup |
| Social login | Không hỗ trợ Phase 1 (tránh data leak từ Facebook/Google) |

### 2.9. Monitoring & Observability

| Trường | Giá trị |
|---|---|
| Logs | Structured JSON logs → self-hosted Loki hoặc Datadog |
| Metrics | Prometheus + Grafana hoặc Datadog |
| Traces | OpenTelemetry → Jaeger hoặc Datadog APM |
| Error tracking | Sentry (self-hosted hoặc cloud) |
| Analytics | Self-hosted Plausible hoặc PostHog (không Google Analytics) |
| Alerting | PagerDuty / Opsgenie cho P0 incidents |

**NO:** Không dùng Google Analytics, Facebook Pixel, hoặc bất kỳ tool nào bán behavioral data.

---

## 3. Môi trường

| Môi trường | Mục đích | Data |
|---|---|---|
| **Local** | Dev | Fake data, no real PII |
| **Staging** | QA + Demo | Anonymized production-like data |
| **Production** | Live | Real user data, encrypted |

**Branching:**
- `main` → Production (protected, require PR + 2 approvals)
- `staging` → Staging (auto-deploy)
- `feature/*` → Feature branches (CI run, no deploy)
- `hotfix/*` → Emergency fix (direct to main with post-review)

---

## 4. CI/CD Pipeline

```
GitHub Push → GitHub Actions:
  ├── Lint (ESLint + Prettier)
  ├── Type check (tsc --noEmit)
  ├── Unit tests (Vitest, coverage >70%)
  ├── Integration tests (Playwright / API tests)
  ├── Security scan (Snyk, npm audit)
  ├── Build (Astro / Expo / Worker bundle)
  ├── Deploy staging (auto)
  └── Deploy production (manual approval)
```

**Deployment frequency:**
- Web: On-demand (multiple times/day)
- API: 1–2 lần/ngày (staging auto, prod manual)
- Mobile: 1 lần/tuần (TestFlight/Internal), 1 lần/tháng (Store)

---

## 5. API Design Principles

1. **Versioning:** URL path `/api/v1/...`
2. **Pagination:** Cursor-based (không offset)
3. **Idempotency:** POST retries với idempotency key
4. **Rate limiting:** 429 với Retry-After header
5. **Error format:** `{ code, message, details[], request_id }`
6. **No PII in logs:** Log user_id (UUID), không log email/phone/name
7. **Consent header:** Mọi request cross-region cần `X-Data-Consent: true`

---

## 6. Performance Budget

| Metric | Target | Giới hạn |
|---|---|---|
| LCP (Largest Contentful Paint) | <2.0s | <2.5s |
| CLS (Cumulative Layout Shift) | <0.05 | <0.1 |
| TBT (Total Blocking Time) | <150ms | <200ms |
| TTFB (Time to First Byte) | <200ms | <500ms |
| API p95 latency | <200ms | <500ms |
| DB query p95 | <50ms | <100ms |
| Chat message deliver | <100ms | <300ms |
| Image load (thumbnails) | <500ms | <1s |

---

## 7. Dependencies quan trọng

| Package | Version | Mục đích |
|---|---|---|
| astro | ^5.0 | Web framework |
| react | ^19.0 | Interactive islands |
| tailwindcss | ^4.0 | Styling |
| drizzle-orm | ^0.30 | Database ORM |
| fastify | ^5.0 | API server |
| @trpc/server | ^11.0 | Type-safe API |
| react-native | ^0.76 | Mobile framework |
| expo | ^53.0 | Mobile tooling |
| zustand | ^5.0 | State management |
| @tanstack/react-query | ^5.0 | Server state |
| vitest | ^2.0 | Unit testing |
| playwright | ^1.49 | E2E testing |

---

## 8. Rủi ro kỹ thuật & giảm thiểu

| Rủi ro | Khả năng | Giảm thiểu |
|---|---|---|
| Cloudflare Workers giới hạn execution time (30s) | Medium | Tách heavy tasks sang Node.js core API; dùng Workers cho routing + caching |
| PostGIS geo-mờ performance với scale lớn | Medium | Index spatial, partition theo region, cache kết quả |
| WebSocket self-hosted khó scale | Medium | Bắt đầu single node; dùng Redis adapter khi >10K concurrent |
| Expo SDK breaking change | Medium | Pin version, test physical device trước release, EAS Update cho hotfix |
| Zero-Knowledge verify chậm | Low | Async processing, queue (BullMQ/Redis), status polling |
| DB 2-region consistency | Medium | Eventual consistency cho matching; strong consistency cho auth/profile |

---

**Kết Nối Muôn Nơi**  
Tech Stack Spec — Chờ Founder chốt provider verify + analytics + mobile release strategy.
