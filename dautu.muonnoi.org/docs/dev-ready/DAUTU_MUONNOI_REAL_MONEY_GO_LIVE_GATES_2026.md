# DAUTU.MUONNOI.ORG · REAL MONEY GO-LIVE GATES 2026

> **Không mở nhận tiền thật nếu chưa pass tất cả gate.** Mỗi gate cần evidence + sign-off.

---

## GATE 1 — LEGAL ENTITY MATRIX

| # | Item | Evidence Required | Status |
|---|------|-------------------|--------|
| 1.1 | VIET CAN NEW CORP (US) — Đăng ký hoạt động | Certificate of Incorporation | ☐ |
| 1.2 | CP Giáo dục Truyền thông Việt Can New (VN) — Giấy phép | ĐKKD / Mã số thuế | ☐ |
| 1.3 | CP Giáo dục Hành Trình Kasan (VN) — Giấy phép | ĐKKD / Mã số thuế | ☐ |
| 1.4 | Tài khoản ngân hàng của từng pháp nhân | Bank confirmation letter | ☐ |
| 1.5 | Pháp nhân được phép nhận tiền đã khóa | Legal opinion letter | ☐ |
| 1.6 | Không trộn tài khoản giữa các pháp nhân | Bank statement sample | ☐ |

**Gate 1 Pass:** 6/6 checked + legal counsel sign-off

---

## GATE 2 — CAPITAL INSTRUMENT MATRIX

| # | Item | Evidence Required | Status |
|---|------|-------------------|--------|
| 2.1 | Xác định loại instrument: SAFE / Convertible Note / Equity / Revenue Share | Term sheet template | ☐ |
| 2.2 | Legal review instrument template | Lawyer sign-off | ☐ |
| 2.3 | Tax treatment xác định | Tax advisor opinion | ☐ |
| 2.4 | Không hứa ROI / cổ tức / hoàn vốn | Review all offering docs | ☐ |
| 2.5 | Risk disclosure complete | Risk disclosure document | ☐ |
| 2.6 | Subscription agreement template | Lawyer sign-off | ☐ |

**Gate 2 Pass:** 6/6 checked

---

## GATE 3 — ACCOUNTING SOP

| # | Item | Evidence Required | Status |
|---|------|-------------------|--------|
| 3.1 | Chart of accounts final | COA document | ☐ |
| 3.2 | Journal entry templates | SOP document | ☐ |
| 3.3 | Reconciliation procedure | SOP document | ☐ |
| 3.4 | Month-end close procedure | SOP document | ☐ |
| 3.5 | Reporting template (investor + management) | Sample reports | ☐ |
| 3.6 | Backup & disaster recovery | DR test evidence | ☐ |

**Gate 3 Pass:** 6/6 checked + CPA sign-off

---

## GATE 4 — PAYMENT INFRASTRUCTURE

| # | Item | Evidence Required | Status |
|---|------|-------------------|--------|
| 4.1 | pay.iai.one integration tested | Test transaction evidence | ☐ |
| 4.2 | Webhook signature verify working | Unit test pass | ☐ |
| 4.3 | Replay guard working | Unit test pass | ☐ |
| 4.4 | Idempotency key working | Unit test pass | ☐ |
| 4.5 | Payment instruction gate tested | E2E test pass | ☐ |
| 4.6 | Bank account in pay.iai.one verified | pay.iai.one confirmation | ☐ |

**Gate 4 Pass:** 6/6 checked + dev lead sign-off

---

## GATE 5 — KYC / AML

| # | Item | Evidence Required | Status |
|---|------|-------------------|--------|
| 5.1 | KYC provider contracted | Contract | ☐ |
| 5.2 | KYC flow tested | Test user evidence | ☐ |
| 5.3 | AML policy written | Policy document | ☐ |
| 5.4 | AML training completed | Training record | ☐ |
| 5.5 | STR (Suspicious Transaction Report) procedure | SOP document | ☐ |
| 5.6 | PDPL compliance (data protection) | DPIA document | ☐ |

**Gate 5 Pass:** 6/6 checked + compliance officer sign-off

---

## GATE 6 — DUAL CONTROL

| # | Item | Evidence Required | Status |
|---|------|-------------------|--------|
| 6.1 | Admin roles defined | RBAC matrix | ☐ |
| 6.2 | Admin whitelist configured | wrangler secret evidence | ☐ |
| 6.3 | 2-person approval tested | Test transaction evidence | ☐ |
| 6.4 | Self-approval blocked | Unit test pass | ☐ |
| 6.5 | Audit log captures all dual control actions | Log review | ☐ |
| 6.6 | Admin cannot override without partner | Integration test pass | ☐ |

**Gate 6 Pass:** 6/6 checked

---

## GATE 7 — E2E DRY RUN

| # | Item | Evidence Required | Status |
|---|------|-------------------|--------|
| 7.1 | End-to-end interest → deposit → confirm → ledger | Screen recording | ☐ |
| 7.2 | End-to-end investment → approve → report | Screen recording | ☐ |
| 7.3 | Refund flow tested | Screen recording | ☐ |
| 7.4 | Mismatch handling tested | Screen recording | ☐ |
| 7.5 | Admin dashboard tested | Screen recording | ☐ |
| 7.6 | Member dashboard tested | Screen recording | ☐ |
| 7.7 | Load test (100 concurrent users) | Load test report | ☐ |

**Gate 7 Pass:** 7/7 checked

---

## GATE 8 — SECURITY

| # | Item | Evidence Required | Status |
|---|------|-------------------|--------|
| 8.1 | Penetration test completed | Pen test report | ☐ |
| 8.2 | CSP / HSTS / COOP / CORP headers | curl -I evidence | ☐ |
| 8.3 | No secrets in frontend | grep scan evidence | ☐ |
| 8.4 | Rate limiting configured | Wrangler config | ☐ |
| 8.5 | DDoS protection enabled | Cloudflare WAF evidence | ☐ |
| 8.6 | Encrypted document storage | R2 encryption evidence | ☐ |

**Gate 8 Pass:** 6/6 checked

---

## GATE 9 — COMMUNICATIONS

| # | Item | Evidence Required | Status |
|---|------|-------------------|--------|
| 9.1 | Investor welcome email template | Template review | ☐ |
| 9.2 | Payment confirmation email | Template review | ☐ |
| 9.3 | Report notification email | Template review | ☐ |
| 9.4 | Support channel defined | Support SOP | ☐ |
| 9.5 | Incident response plan | IRP document | ☐ |
| 9.6 | Escalation matrix | Escalation doc | ☐ |

**Gate 9 Pass:** 6/6 checked

---

## GATE 10 — FOUNDER SIGN-OFF

| # | Item | Signatory | Status |
|---|------|-----------|--------|
| 10.1 | Legal review complete | Lawyer | ☐ |
| 10.2 | Accounting review complete | CPA | ☐ |
| 10.3 | Security review complete | Security lead | ☐ |
| 10.4 | Compliance review complete | Compliance officer | ☐ |
| 10.5 | Product review complete | Product lead | ☐ |
| 10.6 | Founder final approval | Founder | ☐ |

**Gate 10 Pass:** 6/6 signed

---

## GO / NO-GO DECISION

```
GO  = All 10 gates pass + evidence + signatures
HOLD = Any gate incomplete
NO-GO = Any gate failed (fix and re-audit)
```

**Current Status:** NO-GO — Gates 1–10 all pending

---

## EVIDENCE PACK LOCATION

All evidence stored in:
- `/docs/evidence/gate-{1-10}/`
- R2 bucket: `dautu-muonnoi-org-evidence`
- Git commit: tag `go-live-evidence-YYYY-MM-DD`

---

> **Status:** LOCKED — 2026-06-12
> **Next review:** After each phase complete
