# DEV AUTO-SCHEDULE — dautu.muonnoi.org
## Complete Portal Build Plan (Auto-generated from Gap Analysis)

> **Status:** AUTO-SCHEDULED — Generated 2026-06-12
> **Scope:** All 7 phases from Master Plan
> **Team estimate:** 2 devs full-time, 4–6 weeks

---

## PHASE 1: FOUNDATION (Week 1)

### Day 1–2: Auth System
- [ ] `POST /api/auth/login` — Magic link / OTP
- [ ] `POST /api/auth/verify-otp` — Verify + issue JWT
- [ ] `POST /api/auth/refresh` — Refresh token rotation
- [ ] `POST /api/auth/logout` — Revoke session
- [ ] `GET /api/auth/me` — Current user profile
- [ ] Member login page (`/login.html`)
- [ ] Store refresh tokens in KV

### Day 3–4: Member Profile
- [ ] `POST /api/member/profile` — Update profile
- [ ] `POST /api/member/investor-profile` — Submit investor info
- [ ] Member profile form (`/member/profile.html`)
- [ ] Investor profile form (`/member/investor-profile.html`)
- [ ] Risk acknowledgement checkbox + legal text

### Day 5: Investor Review
- [ ] `GET /api/member/review-status` — Check status
- [ ] `POST /api/member/projects/:id/request-access` — Request project access
- [ ] Review status page (`/member/review-status.html`)

---

## PHASE 2: WALLET & DEPOSIT (Week 2)

### Day 1–2: Deposit Flow
- [ ] `POST /api/wallet/deposit` — Complete pay.iai.one integration
- [ ] Webhook handler `POST /api/webhook/payment` — Full implementation
- [ ] Test sandbox payment (if pay.iai.one has sandbox)
- [ ] Deposit UI with checkout redirect

### Day 3: Wallet Enhancement
- [ ] `GET /api/wallet` — Add recalculation from ledger
- [ ] Balance verification function
- [ ] Wallet UI improvements (loading states, error handling)

### Day 4: Transaction History
- [ ] `GET /api/wallet/history` — Add filtering (date range, type)
- [ ] Pagination + infinite scroll
- [ ] Export to CSV (member request)

### Day 5: Document Upload
- [ ] R2 bucket setup (`dautu-muonnoi-org-docs`)
- [ ] `POST /api/documents` — Upload KYC/contract docs
- [ ] Document viewer component
- [ ] Document list in member profile

---

## PHASE 3: INVESTMENT & PROJECTS (Week 3)

### Day 1–2: Project System
- [ ] `GET /api/projects` — Public project list
- [ ] `GET /api/projects/:slug` — Public project detail
- [ ] Project detail page (`/projects/:slug.html`)
- [ ] Investment room check (visibility_status)

### Day 3–4: Investment Flow
- [ ] `POST /api/investments` — Complete with validation
- [ ] `GET /api/investments/:id` — Detail endpoint
- [ ] Investment detail page (`/member/investment.html`)
- [ ] Investment report list integration
- [ ] Project report viewer

### Day 5: Payment Instruction
- [ ] `POST /api/admin/payment-instructions` — Generate instruction
- [ ] `GET /api/member/payment-instructions` — List for member
- [ ] Payment instruction display page
- [ ] Reference code auto-generation
- [ ] Expiry date enforcement

---

## PHASE 4: ADMIN DASHBOARD (Week 4)

### Day 1–2: Admin Auth + Overview
- [ ] Admin login page (`/admin/login.html`)
- [ ] Admin dashboard overview (stats, charts)
- [ ] `/admin/index.html` — Dashboard with KPI cards
- [ ] Chart.js / D3 for visualizations

### Day 3: Investor Management
- [ ] `/admin/investors.html` — Full CRUD (already partial)
- [ ] Investor detail modal (`/admin/investor-detail.html`)
- [ ] KYC document review
- [ ] Bulk actions (approve/reject)

### Day 4: Transaction & Ledger
- [ ] `/admin/transactions.html` — Full transaction list
- [ ] `/admin/ledger.html` — Double-entry display
- [ ] Reconciliation UI (bank statement upload)
- [ ] Mismatch handling workflow

### Day 5: Reports & Audit
- [ ] `/admin/reports.html` — Report upload + publish
- [ ] `/admin/audit.html` — Audit log viewer (filter/search)
- [ ] `/admin/legal-review.html` — Legal review queue
- [ ] Email notification templates

---

## PHASE 5: RECONCILIATION & REPORTING (Week 5)

### Day 1–2: Reconciliation
- [ ] Bank statement parser (CSV/Excel upload)
- [ ] Auto-match algorithm (reference code)
- [ ] Manual match UI
- [ ] Reconciliation report generation

### Day 3–4: Reporting System
- [ ] `POST /api/admin/project-reports` — Upload report
- [ ] `POST /api/admin/project-reports/:id/publish` — Publish
- [ ] Report template (PDF generation)
- [ ] Capital use tracking (received → allocated → deployed)
- [ ] Milestone tracker

### Day 5: Notification System
- [ ] Email notification for:
  - Payment received
  - Investment approved
  - Report published
  - KYC status change
- [ ] In-app notification (if realtime needed)

---

## PHASE 6: HARDENING (Week 6)

### Day 1–2: Security
- [ ] Rate limiting (Cloudflare WAF rules)
- [ ] 2FA for admin (TOTP)
- [ ] Passkey support (WebAuthn)
- [ ] Secret scan (ensure no API keys in frontend)
- [ ] CSP policy review

### Day 3: Testing
- [ ] Unit tests for all API endpoints
- [ ] Integration tests (auth → deposit → confirm → ledger)
- [ ] E2E tests (Playwright/Cypress)
- [ ] Load test (100 concurrent users)

### Day 4: Documentation
- [ ] API documentation (OpenAPI/Swagger)
- [ ] Admin user guide
- [ ] Member user guide
- [ ] Runbook for operations

### Day 5: Compliance Prep
- [ ] Legal review checklist prep
- [ ] Accounting SOP review
- [ ] KYC/AML documentation
- [ ] Evidence pack preparation

---

## AUTO-TRIGGER CONDITIONS

```
IF legal_review_complete AND accounting_review_complete:
  TRIGGER phase_7_go_live_prep

IF kyc_provider_selected:
  TRIGGER phase_2_fast_track

IF pay_iai_one_sandbox_test_pass:
  TRIGGER phase_2_fast_track

IF any_gate_failed:
  TRIGGER halt_and_fix
  NOTIFY founder + legal + accounting
```

---

## DELIVERABLES BY PHASE

| Phase | Deliverable | Evidence |
|-------|-----------|----------|
| 1 | Auth + Profile | Login works, profile saved |
| 2 | Deposit + Wallet | Sandbox payment test pass |
| 3 | Investment + Projects | E2E investment flow works |
| 4 | Admin Dashboard | Admin can manage all data |
| 5 | Reconciliation | Bank statement auto-match works |
| 6 | Hardening | Pen test + load test pass |
| 7 | Go-Live | All 10 gates pass |

---

## ESTIMATED TIMELINE

| Week | Focus | Key Milestone |
|------|-------|---------------|
| 1 | Foundation | Auth + Profile |
| 2 | Wallet | Deposit works |
| 3 | Investment | E2E investment flow |
| 4 | Admin | Full admin dashboard |
| 5 | Reporting | Reconciliation works |
| 6 | Hardening | All tests pass |
| 7 | Legal Review | Legal counsel sign-off |
| 8 | Go-Live | Real money enabled |

**Total: 6–8 weeks**

---

## RESOURCE REQUIREMENTS

| Resource | Quantity | Cost (USD) |
|----------|----------|------------|
| Senior Full-stack Dev | 1 | 3,000/month |
| Mid-level Dev | 1 | 2,000/month |
| Cloudflare Pro | 1 | 20/month |
| D1 (free tier) | - | 0 |
| R2 (est. 10GB) | - | ~5/month |
| KYC Provider (Onfido) | Per check | ~2/check |
| Email (mail.iai.one) | Internal | 0 |
| Total monthly | - | ~5,025 USD |

---

> **Generated by:** Devin AI Agent
> **Based on:** Gap Analysis + Master Plan + Ledger Spec
> **Status:** AUTO-SCHEDULED — Requires Founder approval to activate
