# DAUTU.MUONNOI.ORG · INVESTMENT MEMBER PORTAL ARCHITECTURE LOCK 2026

> **Dev-Ready Architecture Lock.** Mọi thay đổi schema, API contract, hoặc route phải qua Founder + Architect review.
>
> Status: LOCKED v1.0 — 2026-06-12

---

## 1. SYSTEM OVERVIEW

```
┌─────────────────────────────────────────────────────────────┐
│                     MEMBER-ONLY UI                            │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐            │
│  │   Wallet    │ │ Investment  │ │  Spending   │            │
│  │  Dashboard  │ │   Tracking  │ │  History    │            │
│  └─────────────┘ └─────────────┘ └─────────────┘            │
└─────────────────────┬───────────────────────────────────────┘
                      │ HTTPS / CSP / HSTS / COOP / CORP
┌─────────────────────▼───────────────────────────────────────┐
│           Cloudflare Workers (API Layer)                    │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐       │
│  │ /api/wallet    │ │/api/investments│ │ /api/orders│ │/api/withdraw│
│  │ GET/POST       │ │ GET/POST       │ │ POST       │ │ POST        │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘       │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐       │
│  │/api/admin/... │ │/api/webhook   │ │/api/member   │ │/api/auth    │
│  │ GET/POST       │ │ POST           │ │ GET/POST      │ │ POST        │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘       │
└─────────────────────┬───────────────────────────────────────┘
                      │
┌─────────────────────▼───────────────────────────────────────┐
│                    Data Layer                               │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐     │
│  │   D1     │ │   D1     │ │   D1     │ │   D1     │     │
│  │ wallets  │ │investments│ │transactions│ │ ledger   │     │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘     │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐     │
│  │   D1     │ │   D1     │ │   R2     │ │ Workers  │     │
│  │ projects │ │investors  │ │  audit   │ │  KV      │     │
│  │          │ │           │ │  logs    │ │  cache   │     │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘     │
└─────────────────────────────────────────────────────────────┘
                      │
┌─────────────────────▼───────────────────────────────────────┐
│              External Services                              │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐       │
│  │pay.iai.one│ │verify.iai│ │mail.iai. │ │   KYC   │       │
│  │  PayOS   │ │  .one    │ │  one     │ │ provider│       │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘       │
└─────────────────────────────────────────────────────────────┘
```

---

## 2. AUTH FLOW

```
Public → /login (magic link / passkey)
   → verify.iai.one callback
   → JWT token (24h, rotating refresh)
   → Member Layer
      → Investor Profile (nếu chưa có)
         → KYC gate (if threshold)
            → Eligibility Review (admin)
               → Project Room Access
                  → Payment Instruction (if approved)
```

**Token format:**
- Access: JWT (HS256), 24h
- Refresh: UUID stored in KV, 7d
- Admin: Same JWT + ADMIN_WHITELIST check

---

## 3. ROUTE MAP (LOCKED)

### Public (no auth)
| Route | File | Purpose |
|-------|------|---------|
| `/` | index.html | Homepage |
| `/projects` | projects.html | Project list |
| `/projects/:slug` | [slug]/index.html | Project brief |
| `/legal` | legal.html | Legal disclosure |
| `/risk` | risk.html | Risk disclosure |
| `/process` | process.html | Process explanation |
| `/faq` | faq.html | FAQ |
| `/interest` | interest.html | Interest form |

### Member (auth required)
| Route | Purpose |
|-------|---------|
| `/member` | Dashboard |
| `/member/profile` | User profile |
| `/member/investor-profile` | Investor KYC form |
| `/member/wallet` | Wallet dashboard |
| `/member/ledger` | Transaction history |
| `/member/investments` | Investment list |
| `/member/investments/:id` | Investment detail |
| `/member/reports` | Project reports |
| `/member/documents` | Documents |
| `/member/payment-instructions` | Payment instructions |

### Admin (auth + admin whitelist)
| Route | Purpose |
|-------|---------|
| `/admin/investors` | Investor review queue |
| `/admin/investors/:id` | Investor detail |
| `/admin/projects` | Project management |
| `/admin/transactions` | Transaction reconciliation |
| `/admin/ledger` | Ledger view |
| `/admin/reports` | Report management |
| `/admin/audit-logs` | Audit trail |
| `/admin/legal-review` | Legal review queue |

---

## 4. SCHEMA LOCK

### 4.1. Core Tables (17 tables)

Already migrated to D1:
- `legal_entities`
- `investors`
- `projects`
- `investment_rooms`
- `investment_access`
- `wallets`
- `payment_instructions`
- `transactions`
- `ledger_entries`
- `investments`
- `investment_reports`
- `project_reports`
- `orders`
- `withdrawals`
- `documents`
- `audit_logs`
- `admin_actions`

### 4.2. Key Constraints (immutable)

1. `ledger_entries`: `entry_group_id` must balance (sum debit = sum credit)
2. `transactions`: `idempotency_key` UNIQUE
3. `payment_instructions`: `reference_code` UNIQUE
4. `investment_access`: UNIQUE(`investor_id`, `project_id`)
5. `wallets`: `user_id` UNIQUE

---

## 5. API CONTRACTS

### 5.1. Member API

```
GET    /api/wallet
Response: { ok: true, data: { id, currency, cash_pending, cash_confirmed, capital_committed, capital_deployed, capital_unallocated, platform_credit, refund_pending, locked_amount, status } }

GET    /api/wallet/history?limit=20&offset=0
Response: { ok: true, data: [{ id, transaction_type, status, currency, amount, reference_code, description, created_at }], meta: { limit, offset } }

POST   /api/wallet/deposit
Body: { amount: number, currency: 'VND' | 'USD' }
Response: { ok: true, data: { transactionId, status: 'pending', checkoutUrl? } }

GET    /api/investments
Response: { ok: true, data: [{ id, project_name, project_slug, amount, currency, status, investment_type, created_at }] }

GET    /api/investments/:id
Response: { ok: true, data: { ...investment, reports: [...] } }

POST   /api/investments
Body: { project_id, amount, currency, investment_type, instrument?, terms? }
Response: { ok: true, data: { investmentId, status: 'pending' } }

GET    /api/member/reports
Response: { ok: true, data: [{ id, project_id, report_period, report_type, status, published_at }] }
```

### 5.2. Admin API

```
GET    /api/admin/investors?status=pending&limit=50&offset=0
Response: { ok: true, data: [...], meta: { status, limit, offset } }

POST   /api/admin/investors/:id/approve
Response: { ok: true, message: 'Investor approved' }

GET    /api/admin/transactions?status=pending&limit=50
Response: { ok: true, data: [...] }

POST   /api/admin/transactions/:id/confirm
Response: { ok: true, message: 'Transaction confirmed and ledger entries created' }

GET    /api/admin/ledger?limit=50
Response: { ok: true, data: [...] }

GET    /api/admin/audit-logs?limit=50
Response: { ok: true, data: [...] }
```

### 5.3. Webhook

```
POST   /api/webhook/payment
Body: { event_type, event_id, intent_id, provider, payload }
Response: { ok: true }
```

---

## 6. ENVIRONMENT VARIABLES

**Required secrets:**
- `JWT_SECRET` — HS256 key
- `PAY_IAI_ONE_API_KEY` — Payment provider
- `PAY_IAI_ONE_TENANT_SECRET` — Tenant verification
- `ADMIN_WHITELIST` — Comma-separated admin emails
- `MAIL_IAI_ONE_API_KEY` — Email service
- `VERIFY_IAI_ONE_API_KEY` — Audit service
- `KYC_PROVIDER_API_KEY` — KYC service

**Public vars:**
- `PAY_IAI_ONE_BASE_URL` = "https://pay.iai.one"
- `PAY_IAI_ONE_TENANT_CODE` = "muonnoi"
- `PAY_IAI_ONE_SITE_CODE` = "dautu"

---

## 7. SECURITY ARCHITECTURE

| Layer | Measures |
|-------|----------|
| Transport | TLS 1.3, HSTS preload, CSP strict |
| Auth | JWT (24h), refresh token (7d), passkey optional |
| Admin | Whitelist + dual control |
| Data | D1 encrypted at rest, no PII in logs |
| Payment | Idempotency key, webhook HMAC verify, replay guard |
| Ledger | Append-only, no DELETE on confirmed entries |

---

## 8. DEPENDENCIES

| Service | Purpose | Status |
|---------|---------|--------|
| Cloudflare Pages | Static hosting | ✅ Live |
| Cloudflare Workers | API functions | ✅ Live |
| D1 | Primary database | ✅ Created |
| KV | Session/cache | ✅ Available |
| R2 | Document storage | ⏳ Pending |
| pay.iai.one | Payment provider | ✅ Skeleton |
| verify.iai.one | Identity/audit | ✅ Skeleton |
| mail.iai.one | Email notifications | ✅ Skeleton |

---

> **LOCKED:** Schema v1.0, API v1.0, Route v1.0 — 2026-06-12
> **Next review:** After Phase 3 (Ledger Read Model) complete
