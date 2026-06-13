# AUDIT & GAP ANALYSIS — dautu.muonnoi.org
## Deployed vs Master Plan — 2026-06-12

---

## EXECUTIVE SUMMARY

| | Đã deploy | Master Plan yêu cầu | Gap |
|---|-----------|----------------------|-----|
| **Public pages** | 8 routes | 7 routes | ✅ OK (+1 extra) |
| **Member pages** | 4 routes | 10 routes | ⚠️ 6 missing |
| **Admin pages** | 1 route | 8 routes | ⚠️ 7 missing |
| **Database tables** | 17 tables | 17 tables | ✅ OK |
| **API endpoints** | 11 endpoints | 25 endpoints | ⚠️ 14 missing |
| **Auth system** | JWT skeleton | Full auth + KYC | ⚠️ Missing KYC, passkey |
| **Payment flow** | Skeleton | Full integration | ⚠️ Missing webhook handler |
| **Ledger** | Schema + basic functions | Full double-entry + validation | ⚠️ Missing balance verify |
| **Admin dashboard** | Interest queue only | Full CRUD + reporting | ⚠️ 7 screens missing |
| **Seed data** | None | Required for test | ⚠️ Missing |

**Overall: 60% complete — GO for dev continuation, NO-GO for real money.**

---

## DETAILED GAP ANALYSIS

### 1. PUBLIC LAYER — 95% ✅

| Route | Status | Ghi chú |
|-------|--------|---------|
| `/` | ✅ Live | Homepage OK |
| `/projects` | ✅ Live | `/du-an.html` |
| `/projects/dsts` | ✅ Live | DSTS brief page |
| `/legal` | ✅ Live | Legal footer OK |
| `/risk` | ⚠️ Partial | Nằm trong `/hinh-thuc-dong-hanh` |
| `/process` | ✅ Live | `/quy-trinh-review.html` |
| `/faq` | ✅ Live | FAQ page OK |
| `/interest` | ✅ Live | `/dang-ky-quan-tam.html` |

**Thiếu:**
- [ ] `/risk` page riêng (hiện gộp vào `/hinh-thuc-dong-hanh`)
- [ ] SEO meta tags chưa optimized cho từng project

---

### 2. MEMBER LAYER — 40% ⚠️

| Route | Status | Ghi chú |
|-------|--------|---------|
| `/member` | ✅ Live | Dashboard + wallet buckets |
| `/member/profile` | ❌ Missing | Chưa có HTML riêng |
| `/member/investor-profile` | ❌ Missing | Chưa có KYC form |
| `/member/wallet` | ✅ Live | Tích hợp trong `/member/index.html` |
| `/member/ledger` | ✅ Live | Tích hợp trong `/member/index.html` |
| `/member/investments` | ✅ Live | Tích hợp trong `/member/index.html` |
| `/member/investments/:id` | ❌ Missing | Chưa có detail page |
| `/member/reports` | ❌ Missing | Chưa có report list |
| `/member/documents` | ❌ Missing | Chưa có document list |
| `/member/payment-instructions` | ❌ Missing | Chưa có PI page |

**Thiếu:**
- [ ] Login/register page (magic link / passkey)
- [ ] Investor profile form (cá nhân/doanh nghiệp/quỹ)
- [ ] KYC upload (CMND/CCCD, proof of address)
- [ ] Risk acknowledgement page
- [ ] Project detail page cho member
- [ ] Document viewer
- [ ] Payment instruction display page
- [ ] Deal room page (pitch deck, memo, term sheet)

---

### 3. ADMIN LAYER — 15% ⚠️

| Route | Status | Ghi chú |
|-------|--------|---------|
| `/admin/investors` | ⚠️ Partial | `interest.html` có investor queue |
| `/admin/investors/:id` | ❌ Missing | Chưa có detail view |
| `/admin/projects` | ❌ Missing | Chưa có project management |
| `/admin/transactions` | ❌ Missing | Chưa có transaction list |
| `/admin/reconciliation` | ❌ Missing | Chưa có reconciliation UI |
| `/admin/reports` | ❌ Missing | Chưa có report management |
| `/admin/audit` | ❌ Missing | Chưa có audit log viewer |
| `/admin/legal-review` | ❌ Missing | Chưa có legal review queue |

**Thiếu:**
- [ ] Admin login page
- [ ] Project CRUD (status management)
- [ ] Transaction reconciliation UI
- [ ] Ledger viewer (double-entry display)
- [ ] Report upload + publish UI
- [ ] Audit log search/filter
- [ ] Payment instruction generator
- [ ] Dashboard overview (charts, stats)

---

### 4. API LAYER — 45% ⚠️

| Endpoint | Status | Auth | Ghi chú |
|----------|--------|------|---------|
| `GET /api/wallet` | ✅ | Member | Bucket display OK |
| `GET /api/wallet/history` | ✅ | Member | Transaction list OK |
| `POST /api/wallet/deposit` | ⚠️ | Member | Skeleton, chưa test real pay.iai.one |
| `GET /api/investments` | ✅ | Member | List OK |
| `GET /api/investments/:id` | ❌ | Member | Detail endpoint missing |
| `POST /api/investments` | ✅ | Member | Create OK |
| `GET /api/member/reports` | ❌ | Member | Missing |
| `POST /api/interest` | ✅ | Public | Interest form OK |
| `GET /api/admin/investors` | ✅ | Admin | List OK |
| `POST /api/admin/investors/:id/approve` | ✅ | Admin | Approve OK |
| `GET /api/admin/transactions` | ✅ | Admin | List OK |
| `POST /api/admin/transactions/:id/confirm` | ✅ | Admin | Confirm + ledger OK |
| `GET /api/admin/ledger` | ✅ | Admin | Ledger view OK |
| `GET /api/admin/audit-logs` | ✅ | Admin | Audit view OK |
| `POST /api/webhook/payment` | ❌ | Webhook | Missing handler |
| `POST /api/auth/login` | ❌ | Public | Missing |
| `POST /api/auth/refresh` | ❌ | Public | Missing |
| `POST /api/auth/logout` | ❌ | Public | Missing |
| `POST /api/member/profile` | ❌ | Member | Missing |
| `POST /api/member/investor-profile` | ❌ | Member | Missing |
| `POST /api/member/projects/:id/request-access` | ❌ | Member | Missing |
| `POST /api/admin/project-reports` | ❌ | Admin | Missing |
| `POST /api/admin/project-reports/:id/publish` | ❌ | Admin | Missing |
| `POST /api/admin/payment-instructions/:id/approve` | ❌ | Admin | Missing |
| `GET /api/projects` | ❌ | Public | Missing |
| `GET /api/projects/:slug` | ❌ | Public | Missing |

**Thiếu:**
- [ ] Auth endpoints (login/refresh/logout)
- [ ] Webhook handler for pay.iai.one
- [ ] Member profile endpoints
- [ ] Project public endpoints
- [ ] Report management endpoints
- [ ] Payment instruction endpoints
- [ ] Document upload endpoints

---

### 5. DATABASE — 70% ⚠️

| Table | Status | Ghi chú |
|-------|--------|---------|
| `legal_entities` | ✅ Created | Empty — cần seed |
| `investors` | ✅ Created | Empty — cần seed |
| `projects` | ✅ Created | Empty — cần seed |
| `investment_rooms` | ✅ Created | Empty |
| `investment_access` | ✅ Created | Empty |
| `wallets` | ✅ Created | Auto-create on first wallet fetch |
| `payment_instructions` | ✅ Created | Empty |
| `transactions` | ✅ Created | Empty |
| `ledger_entries` | ✅ Created | Empty |
| `investments` | ✅ Created | Empty |
| `investment_reports` | ✅ Created | Empty |
| `project_reports` | ✅ Created | Empty |
| `orders` | ✅ Created | Empty |
| `withdrawals` | ✅ Created | Empty |
| `documents` | ✅ Created | Empty |
| `audit_logs` | ✅ Created | Auto-populated on actions |
| `admin_actions` | ✅ Created | Empty |

**Thiếu:**
- [ ] Seed data cho test
- [ ] `users` table (dùng chung với hệ sinh thái?)
- [ ] `sessions` / `refresh_tokens` table
- [ ] `kyc_documents` table (nếu tách từ `documents`)
- [ ] Trigger: auto-update wallet on ledger entry
- [ ] Trigger: balance verification before commit
- [ ] Function: recalculate wallet from ledger

---

### 6. SECURITY — 60% ⚠️

| Item | Status | Ghi chú |
|------|--------|---------|
| TLS | ✅ | Cloudflare default |
| HSTS | ✅ | Configured |
| CSP | ✅ | Configured |
| X-Frame-Options | ✅ | DENY |
| CORS | ⚠️ | API CORS origin chưa lock strict |
| JWT auth | ⚠️ | Skeleton, chưa có refresh token |
| Admin whitelist | ⚠️ | Skeleton, chưa set secret |
| 2FA/passkey | ❌ | Missing |
| Rate limiting | ❌ | Missing |
| Secret redaction | ✅ | sanitizeLog trong payment API |
| Webhook HMAC | ⚠️ | Skeleton, chưa test với real secret |
| Audit log | ✅ | Auto-write on actions |
| Pen test | ❌ | Not done |

**Thiếu:**
- [ ] Strict CORS (only dautu.muonnoi.org)
- [ ] Refresh token rotation
- [ ] 2FA for admin
- [ ] Rate limiting (Cloudflare WAF rules)
- [ ] Real webhook secret test
- [ ] Penetration test

---

### 7. EXTERNAL INTEGRATIONS — 40% ⚠️

| Service | Status | Ghi chú |
|---------|--------|---------|
| pay.iai.one | ⚠️ | Skeleton API calls, chưa test real transaction |
| verify.iai.one | ⚠️ | Audit log skeleton, chưa test real callback |
| mail.iai.one | ⚠️ | Email notification skeleton |
| KYC provider | ❌ | Chưa chọn / chưa tích hợp |
| R2 (documents) | ❌ | Chưa tạo bucket |

**Thiếu:**
- [ ] Real payment test (sandbox)
- [ ] verify.iai.one callback handler
- [ ] KYC provider selection + integration
- [ ] R2 bucket + upload API

---

### 8. COMPLIANCE — 30% ⚠️

| Item | Status | Ghi chú |
|------|--------|---------|
| Legal disclaimer | ✅ | Footer OK |
| Risk disclosure | ⚠️ | Gộp vào form, chưa có page riêng |
| Privacy policy | ⚠️ | Chưa có PDPL-specific |
| KYC flow | ❌ | Chưa có |
| AML policy | ❌ | Chưa viết |
| DPIA | ❌ | Chưa làm |
| Go-live gates | ✅ | Documented (all pending) |

**Thiếu:**
- [ ] KYC/AML policy document
- [ ] PDPL compliance assessment
- [ ] DPIA (Data Protection Impact Assessment)
- [ ] Legal counsel review
- [ ] Tax advisor review

---

## PRIORITY MATRIX

### P0 — Blocker for any real money
1. [ ] Legal review complete (Gate 1 + 2)
2. [ ] KYC provider integration (Gate 5)
3. [ ] Webhook handler for payment confirmation
4. [ ] Admin auth + whitelist enforced
5. [ ] Seed data for test E2E

### P1 — Required for member portal launch
6. [ ] Login/register page
7. [ ] Investor profile form
8. [ ] Member project list + detail
9. [ ] Payment instruction display
10. [ ] Auth endpoints (login/refresh/logout)

### P2 — Required for admin operations
11. [ ] Admin dashboard overview
12. [ ] Project management CRUD
13. [ ] Transaction reconciliation UI
14. [ ] Report upload + publish
15. [ ] Audit log viewer

### P3 — Nice to have
16. [ ] Deal room page
17. [ ] Document viewer
18. [ ] Notification system
19. [ ] Analytics dashboard
20. [ ] Mobile responsive admin

---

## RECOMMENDATION

**Immediate (this week):**
- Seed data for test
- Auth endpoints
- Webhook handler
- KYC provider selection

**Short-term (next 2 weeks):**
- Member profile + KYC form
- Login/register page
- Admin dashboard screens
- Real payment sandbox test

**Medium-term (next month):**
- Legal review
- Penetration test
- E2E dry run all gates
- Compliance documentation

**Go-live decision:**
- Only after ALL 10 gates pass with evidence
- Estimate: 4–6 weeks minimum

---

> **Audit by:** Devin AI Agent
> **Date:** 2026-06-12
> **Status:** INTERNAL — FOUNDER REVIEW REQUIRED
