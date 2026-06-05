# OMDALA Autonomous Backend Platform 2026

> **Status:** PLAN — FOUNDER APPROVED DRAFT  
> **Date:** 2026-06-05 13:48 UTC+7  
> **Scope:** Replace Supabase + Render + vendor-dependent backends with self-controlled infrastructure  
> **Subdomain:** `infra.omdala.com`  
> **Author:** Founder directive  
> **Auditor:** Cascade AI

---

## 1. EXECUTIVE SUMMARY

Build a unified, sovereign backend platform under `infra.omdala.com` to serve:

| Target System | Current Dependency | Replacement Target |
|---------------|-------------------|-------------------|
| `computer.iai.one` | Supabase Auth + DB | Keycloak + PostgreSQL |
| `aiagent.iai.one` | Supabase + Render Workers | Agent Control Plane + pgvector |
| `maytinhai.org` | Cloudflare Workers + D1 | Hybrid: keep CF, add infra backup |
| `maytinhai.com` | Cloudflare Pages | Keep CF Pages, add infra auth bridge |
| `tranhatam.com` | Cloudflare Workers + D1 | Keep CF, add infra auth bridge |
| `aiaccountingloop.com` | Multiple workers + D1 | Consolidate via infra gateway |

**Golden Rule:** “100% automation” means automated operations, backup, deploy, monitoring, and recovery. Dangerous actions (delete data, rotate secrets, deploy production, restore database) require human approval gates.

---

## 2. SUBDOMAIN ARCHITECTURE

```
infra.omdala.com
│
├── api.infra.omdala.com          → API Gateway (Caddy/Traefik + Node/Python)
├── auth.infra.omdala.com         → Keycloak / Auth.js (OAuth2/OIDC provider)
├── db.infra.omdala.com           → PostgreSQL 17 (private, no public ingress)
├── storage.infra.omdala.com      → MinIO (S3-compatible) + R2 fallback
├── cache.infra.omdala.com        → Valkey/Redis (sessions, rate limits, queues)
├── queue.infra.omdala.com        → BullMQ / custom queue over Valkey
├── jobs.infra.omdala.com         → Worker fleet (Node/Python containers)
├── monitor.infra.omdala.com    → Uptime Kuma + Grafana + Loki
├── admin.infra.omdala.com        → Admin console (read-only by default)
├── backup.infra.omdala.com       → Backup index + restore portal (approval-gated)
└── vault.infra.omdala.com        → Secret management (HashiCorp Vault or equivalent)
```

**Network Segmentation:**
- **Public tier:** `api`, `auth`, `storage` (read-only public buckets)
- **Protected tier:** `admin`, `backup`, `monitor` (VPN or IP-whitelist)
- **Private tier:** `db`, `cache`, `queue`, `vault` (no public ingress, internal Docker network only)

---

## 3. TECHNOLOGY STACK

| Layer | Tool | Rationale | Monthly Cost (est.) |
|-------|------|-----------|---------------------|
| **VPS** | Hetzner CX42 (8 vCPU / 16 GB) or Contabo | Germany/Singapore region, NVMe SSD | €15–30 |
| **Reverse Proxy** | Caddy v2 | Automatic HTTPS, simpler than Traefik for single-node | €0 |
| **Database** | PostgreSQL 17 + pgvector extension | Core replacement for Supabase DB | €0 (self-hosted) |
| **Auth** | Keycloak 25 (Quarkus) | Multi-tenant, enterprise-grade, OAuth2/OIDC | €0 |
| **Object Storage** | Cloudflare R2 (primary) → MinIO (warm) | R2 is cheaper than S3, zero egress to CF | ~$5–20 |
| **Cache / Queue** | Valkey 8 (Redis fork) | Drop-in replacement, better OSS license | €0 |
| **Worker Engine** | Node.js 22 + BullMQ | Familiar stack, BullMQ over Redis/Valkey | €0 |
| **Cron / Scheduler** | GitHub Actions + server-side cron | GitOps-native scheduling | €0 |
| **Workflow** | n8n (self-hosted) | Visual workflow, simpler than Temporal for current scale | €0 |
| **Monitoring** | Uptime Kuma + Grafana + Loki | Lightweight, no Prometheus needed for single-node | €0 |
| **Backup** | pg_dump + WAL-G + R2/B2 | Point-in-time recovery, encrypted | ~$5 |
| **Secrets** | HashiCorp Vault (dev mode) or Doppler | Short-term: Vault dev. Long-term: Vault HA. | €0 (dev) |

**Total Estimated Monthly:** €30–60 ($35–70)

---

## 4. DEPLOYMENT ROADMAP — P0 to P100

### P0 — Foundation Lock (Week 1)

**Goal:** Server is alive, domain resolves, SSL works, repo ready.

| # | Task | Owner | Acceptance Criteria |
|---|------|-------|-------------------|
| P0.1 | Choose and provision VPS | Team A | SSH access, UFW enabled, non-root user |
| P0.2 | Point `infra.omdala.com` → VPS IP | Team A | DNS resolves within 300s, Cloudflare proxy ON |
| P0.3 | Install Docker + Docker Compose v2 | Team A | `docker compose version` ≥ 2.24 |
| P0.4 | Install Caddy + obtain SSL | Team A | `https://infra.omdala.com/health` returns 200 |
| P0.5 | Create repo `omdala-infra` | Team A | GitHub repo, branch protection, `main` only |
| P0.6 | Write `.env.example` + `.gitignore` | Team A | No secrets in git, `git-secrets` hook installed |
| P0.7 | Configure firewall | Team A | Only 22, 80, 443 inbound; internal network isolated |

**Gate:** `curl -fsS https://infra.omdala.com/health && echo "PASS" || echo "FAIL"`

---

### P1 — Database Sovereignty (Week 2)

**Goal:** PostgreSQL is running, schema migrated, backup automated, restore tested.

| # | Task | Owner | Acceptance Criteria |
|---|------|-------|-------------------|
| P1.1 | Deploy PostgreSQL 17 + pgvector in Docker | Team B | `psql` connect via internal network |
| P1.2 | Create roles: `app`, `readonly`, `migration`, `backup` | Team B | Principle of least privilege applied |
| P1.3 | Initialize schema from Supabase export | Team B | All tables + indexes recreated |
| P1.4 | Daily `pg_dump` to R2 bucket `omdala-prod-backups` | Team B | Cron job at 02:00 UTC, retention 30 days |
| P1.5 | Weekly WAL-G base backup | Team B | Full physical backup every Sunday |
| P1.6 | **Restore test on staging DB** | Team B | **MANDATORY: restore from backup, verify row counts match** |
| P1.7 | Create read-only MCP user for AI agents | Team B | `mcp_readonly` role, limited to specific schemas |

**Gate:** Restore test must pass. Without verified restore, backup is not considered complete.

---

### P2 — Authentication Replacement (Week 3)

**Goal:** Keycloak is running, first realm created, OAuth apps registered.

| # | Task | Owner | Acceptance Criteria |
|---|------|-------|-------------------|
| P2.1 | Deploy Keycloak 25 (Quarkus) in Docker | Team C | Admin console reachable at `auth.infra.omdala.com/admin` |
| P2.2 | Create realm `OMDALA` | Team C | Realm isolated from master |
| P2.3 | Define roles: `superadmin`, `tenant_admin`, `developer`, `user`, `agent` | Team C | Role hierarchy documented |
| P2.4 | Register OAuth2 client for `computer.iai.one` | Team C | Client ID + secret in Vault, not in git |
| P2.5 | Register OAuth2 client for `maytinhai.org` | Team C | Redirect URIs whitelisted |
| P2.6 | Configure SMTP for Keycloak (via mail.iai.one) | Team C | Email verification flow works |
| P2.7 | Session timeout: 24h access / 30d refresh | Team C | Security policy enforced |

**Decision:** Use Keycloak as canonical auth. Auth.js is allowed per-app only for frontend convenience, but all sessions must validate against Keycloak tokens.

---

### P3 — Object Storage Consolidation (Week 3–4)

**Goal:** R2 buckets structured, MinIO ready for warm migration.

| # | Task | Owner | Acceptance Criteria |
|---|------|-------|-------------------|
| P3.1 | Create R2 buckets: `omdala-prod-assets`, `omdala-prod-user-files`, `omdala-prod-backups`, `omdala-prod-private` | Team D | CORS configured per bucket |
| P3.2 | Deploy MinIO (single-node, for warm cache) | Team D | S3-compatible endpoint on internal network |
| P3.3 | Sync existing Supabase Storage → R2 | Team D | `rclone sync` verified, checksums match |
| P3.4 | Signed URL generation endpoint in API Gateway | Team D | URLs expire in 15 min, tenant-scoped |

---

### P4 — API Gateway (Week 4)

**Goal:** Central API layer handles routing, auth verification, audit.

| # | Task | Owner | Acceptance Criteria |
|---|------|-------|-------------------|
| P4.1 | Deploy API Gateway container (`api.infra.omdala.com`) | Team D | `/health` returns 200 + timestamp + git hash |
| P4.2 | JWT verification middleware (Keycloak public key) | Team D | Reject invalid tokens, pass valid claims |
| P4.3 | Tenant routing middleware | Team D | Header `X-Tenant-ID` routes to correct DB schema |
| P4.4 | Billing webhook endpoints | Team D | Idempotency key + HMAC signature verification |
| P4.5 | Job dispatch endpoint | Team D | Push to Valkey queue, return job ID |
| P4.6 | File signed URL endpoint | Team D | Tenant-scoped, rate-limited |
| P4.7 | AI usage logging endpoint | Team D | Async write to `ai_usage` table |
| P4.8 | Audit log middleware | Team D | Every request logged: user, tenant, endpoint, timestamp, IP |

---

### P5 — Worker & Cron Engine (Week 4–5)

**Goal:** Background jobs run reliably, retry logic in place.

| # | Task | Owner | Acceptance Criteria |
|---|------|-------|-------------------|
| P5.1 | Deploy worker fleet (3 replicas min) | Team D | BullMQ consumers active |
| P5.2 | Job types: `backup`, `email`, `ai_task`, `report`, `cleanup`, `usage_aggregation` | Team D | Each has dedicated queue + retry policy |
| P5.3 | Dead letter queue (DLQ) for failed jobs | Team D | After 3 retries, move to DLQ, alert admin |
| P5.4 | GitHub Actions for scheduled jobs | Team D | `backup-test.yml`, `security-audit.yml` |
| P5.5 | Cron expression validation | Team D | No overlapping job executions |

---

### P6 — AI Agent Control Plane (Week 5–6)

**Goal:** aiagent.iai.one runs on controlled infrastructure.

| # | Task | Owner | Team E | Acceptance Criteria |
|---|------|--------|--------|-------------------|
| P6.1 | Task schema: `agent_tasks` table | Team E | CRUD + status machine |
| P6.2 | Agent run schema: `agent_runs` | Team E | Links to task, model, cost |
| P6.3 | Tool call schema: `tool_calls` | Team E | Input/output JSON, latency |
| P6.4 | Approval gate schema: `approval_requests` | Team E | Required for: deploy, delete, restore, secret rotate |
| P6.5 | Evidence log schema: `evidence_logs` | Team E | Immutable, signed |
| P6.6 | Model router + cost tracking | Team E | Per-tenant quota, rate limit |
| P6.7 | Agent role separation | Team E | Planner, Context, Code, DB, Deploy, Verifier, Reporter |

**Critical:** No single agent may perform destructive actions without Verifier approval.

---

### P7 — Monitoring & Alerting (Week 5–6)

**Goal:** Full visibility, proactive alerts.

| # | Task | Owner | Acceptance Criteria |
|---|------|-------|-------------------|
| P7.1 | Uptime Kuma: monitor all endpoints | Team F | Alert on Telegram/email if down > 2 min |
| P7.2 | Grafana dashboard: API latency, DB health, disk usage | Team F | < 30s load time |
| P7.3 | Loki log aggregation | Team F | Searchable by tenant, endpoint, status code |
| P7.4 | Backup status alert | Team F | Daily success/failure notification |
| P7.5 | Failed job alert | Team F | DLQ depth > 0 triggers alert |
| P7.6 | AI cost alert | Team F | Per-tenant daily budget threshold |
| P7.7 | Security event alert | Team F | Failed auth > 10/min, unusual egress |

---

### P8 — Migration from Supabase/Render (Week 6–8)

**Goal:** Zero-downtime migration, parallel running, gradual cutover.

| # | Task | Owner | Acceptance Criteria |
|---|------|-------|-------------------|
| P8.1 | Export full Supabase schema + data | Team B | `pg_dump` + `supabase db dump` |
| P8.2 | Import into infra PostgreSQL | Team B | Row counts match ±0% |
| P8.3 | Run parallel read-only queries | Team B | Compare results for 48h |
| P8.4 | Migrate smallest app first (`computer.iai.one`) | Team C | Auth + DB fully on infra |
| P8.5 | Migrate `aiagent.iai.one` | Team E | Agent control plane active |
| P8.6 | Migrate auth last (hardest to rollback) | Team C | All apps validate Keycloak tokens |
| P8.7 | Decommission Supabase project (after 30-day burn-in) | Team A | Data archived, billing stopped |

---

### P9 — Automation Hardening (Week 8–10)

**Automated (no approval required):**
- Deploy to staging
- Daily backup + upload
- Health check every 60s
- Alert on anomaly
- Log collection
- Failed job retry (max 3x)
- AI task routing
- Usage report generation
- Cost report (read-only)

**Approval-gated (human required):**
- Delete database or table
- Restore production database
- Rotate production secrets
- Deploy to production
- Change DNS records
- Remove user data (GDPR delete)
- Scale VPS (up/down)
- Open new firewall ports

**Approval mechanism:** GitHub PR with 2 reviewers + Founder veto.

---

## 5. REPOSITORY STRUCTURE

```
omdala-infra/
├── README.md                          # Quick start + architecture diagram
├── LICENSE
├── SECURITY.md                        # Responsible disclosure
│
├── docker-compose.yml                 # All services (single-node v1)
├── docker-compose.prod.yml            # Future: multi-node
├── .env.example                       # All env vars, no secrets
├── .env.vault                         # Encrypted secrets (git-crypt or SOPS)
│
├── infra/
│   ├── caddy/
│   │   ├── Caddyfile                  # Reverse proxy config
│   │   └── snippets/
│   ├── postgres/
│   │   ├── Dockerfile
│   │   ├── init-scripts/              # 01-create-users.sql, 02-create-schemas.sql
│   │   └── pgvector-install.sh
│   ├── keycloak/
│   │   ├── Dockerfile
│   │   ├── realm-export/              # OMDALA-realm.json (no secrets)
│   │   └── themes/
│   ├── valkey/
│   │   └── valkey.conf
│   ├── minio/
│   │   └── docker-entrypoint.sh
│   ├── monitoring/
│   │   ├── uptime-kuma/
│   │   ├── grafana/
│   │   │   ├── dashboards/
│   │   │   └── datasources.yml
│   │   └── loki/
│   │       └── loki-config.yml
│   └── backup/
│       ├── Dockerfile
│       ├── backup-db.sh
│       ├── restore-db.sh
│       └── wal-g-config.yml
│
├── services/
│   ├── api-gateway/
│   │   ├── src/
│   │   ├── Dockerfile
│   │   └── package.json
│   ├── worker/
│   │   ├── src/
│   │   │   ├── jobs/
│   │   │   │   ├── backup.js
│   │   │   │   ├── email.js
│   │   │   │   ├── ai-task.js
│   │   │   │   └── usage-aggregation.js
│   │   ├── Dockerfile
│   │   └── package.json
│   ├── agent-control-plane/
│   │   ├── src/
│   │   ├── Dockerfile
│   │   └── requirements.txt
│   └── admin-console/
│       ├── src/
│       ├── Dockerfile
│       └── package.json
│
├── scripts/
│   ├── bootstrap.sh                   # One-command server setup
│   ├── health-check.sh                # Full stack health check
│   ├── backup-now.sh                  # Manual backup trigger
│   ├── restore-test.sh                # Automated restore verification
│   ├── rotate-secrets.sh              # Approval-gated
│   └── migrate-from-supabase.sh       # Step-by-step migration
│
├── docs/
│   ├── ARCHITECTURE.md                # C4 diagrams, network topology
│   ├── SECURITY.md                    # Threat model, RBAC matrix
│   ├── BACKUP_RESTORE.md              # Runbooks for DR scenarios
│   ├── MIGRATION_FROM_SUPABASE.md     # Detailed migration checklist
│   ├── INCIDENT_RUNBOOK.md            # Pagerduty-style playbooks
│   ├── COST_ESTIMATE.md               # Monthly breakdown
│   └── API_REFERENCE.md               # OpenAPI spec
│
└── .github/
    └── workflows/
        ├── ci.yml                     # Lint, test, build
        ├── deploy-staging.yml         # Auto on merge to develop
        ├── deploy-production.yml      # Approval-gated on merge to main
        ├── backup-test.yml            # Daily restore verification
        ├── security-audit.yml         # Weekly dependency scan
        └── dependency-update.yml      # Renovate-like PRs
```

---

## 6. TEAM ASSIGNMENTS

| Team | Members (suggested) | Scope | Deliverables |
|------|----------------------|-------|--------------|
| **Team A — Infra** | 1 senior DevOps | VPS, DNS, Docker, Caddy, firewall | P0 complete, uptime SLA |
| **Team B — Database** | 1 DBA + 1 backend | PostgreSQL, pgvector, backup, restore | P1 complete, restore test pass |
| **Team C — Auth** | 1 security + 1 backend | Keycloak, OAuth, tenant roles | P2 complete, first login success |
| **Team D — API/Worker** | 2 backend engineers | API Gateway, workers, queues | P4–P5 complete, < 100ms p95 latency |
| **Team E — Agent OS** | 2 AI engineers | Agent control plane, task schema | P6 complete, agent runs isolated |
| **Team F — Monitoring** | 1 SRE + 1 frontend | Uptime, Grafana, alerts | P7 complete, MTTR < 15 min |

---

## 7. SECURITY & COMPLIANCE

### 7.1 Network Security
- **Zero Trust:** No service trusts another by default. mTLS between internal services.
- **Firewall:** UFW + Cloudflare proxy. Only 22 (SSH, key-auth only), 80, 443 inbound.
- **Database:** No public port. Internal Docker network only. pg_hba.conf restricts connections.

### 7.2 Secret Management
- Phase 1: HashiCorp Vault dev mode (single-node, file backend)
- Phase 2: Vault HA (Raft consensus, 3 nodes)
- Phase 3: Auto-rotation for DB credentials, API keys
- **Rule:** No secret in git. Ever. `git-secrets` + pre-commit hook.

### 7.3 Approval Gates (Immutable)
These actions **ALWAYS** require:
1. GitHub PR with 2 approving reviews
2. Founder final approval (veto power)
3. Audit log entry in `approval_requests` table

| Action | Risk | Approval Required |
|--------|------|-------------------|
| Delete database/table | Data loss | 2 reviewers + Founder |
| Restore production DB | Data corruption | 2 reviewers + Founder |
| Rotate production secret | Service outage | 2 reviewers + Founder |
| Deploy to production | Regression | 2 reviewers (Founder auto-approved if CI green) |
| Change DNS | Traffic hijack | 2 reviewers + Founder |
| GDPR delete user | Legal | 2 reviewers + Founder |
| Open firewall port | Attack surface | 2 reviewers + Founder |

---

## 8. MIGRATION PRIORITY MATRIX

| System | Priority | Complexity | Dependency | Strategy |
|--------|----------|------------|------------|----------|
| `computer.iai.one` | P1 | Low | Auth + DB | Full cutover first |
| `aiagent.iai.one` | P2 | High | Agent control plane | Parallel running 2 weeks |
| `maytinhai.org` | P3 | Medium | Hybrid with CF | Auth bridge, keep CF Workers |
| `tranhatam.com` | P3 | Medium | Hybrid with CF | Auth bridge, keep CF Workers |
| `aiaccountingloop.com` | P4 | High | Multi-worker consolidation | Gradual endpoint migration |

---

## 9. SUCCESS METRICS (P100 Definition)

| Metric | Target | Measurement |
|--------|--------|-------------|
| Uptime (api.infra) | 99.9% | Uptime Kuma |
| DB backup success | 100% (daily) | Backup alert |
| Restore test pass | 100% (weekly) | `restore-test.sh` CI |
| API p95 latency | < 100ms | Grafana |
| Failed job retry | < 0.1% | DLQ depth |
| Auth token validation | < 10ms | API middleware |
| Cost per month | < $100 | Invoice |
| MTTR | < 15 min | Incident log |
| Time to full rollback | < 30 min | DR drill |

---

## 10. RISK REGISTER

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| VPS downtime (Hetzner issue) | Medium | High | Daily backup to R2; cold standby on Contabo |
| Keycloak misconfiguration | Medium | High | Realm export before changes; test realm for experiments |
| Data migration corruption | Low | Critical | Parallel running; checksum validation; rollback script |
| Secret leak in git | Low | Critical | `git-secrets`, SOPS, Vault; quarterly secret rotation |
| Single point of failure (one VPS) | High | High | Phase 2: multi-node Docker Swarm or k3s |
| Supabase decommission too early | Medium | High | 30-day burn-in; keep Supabase read-only before cut |

---

## 11. APPENDIX

### A. Environment Variables (.env.example)

```bash
# Domain
INFRA_DOMAIN=infra.omdala.com
ACME_EMAIL=admin@omdala.com

# Database
POSTGRES_USER=postgres
POSTGRES_PASSWORD=<from_vault>
POSTGRES_DB=omdala_prod
POSTGRES_APP_USER=omdala_app
POSTGRES_READONLY_USER=omdala_readonly

# Keycloak
KEYCLOAK_ADMIN=<from_vault>
KEYCLOAK_ADMIN_PASSWORD=<from_vault>
KEYCLOAK_REALM=OMDALA

# Storage
R2_ACCESS_KEY_ID=<from_vault>
R2_SECRET_ACCESS_KEY=<from_vault>
R2_ENDPOINT=https://<account_id>.r2.cloudflarestorage.com
MINIO_ROOT_USER=<from_vault>
MINIO_ROOT_PASSWORD=<from_vault>

# Monitoring
UPTIME_KUMA_USERNAME=admin
UPTIME_KUMA_PASSWORD=<from_vault>
GRAFANA_ADMIN_PASSWORD=<from_vault>

# Vault
VAULT_ADDR=http://vault:8200
VAULT_TOKEN=<from_vault>
```

### B. One-Command Bootstrap

```bash
git clone git@github.com:tranhatam/omdala-infra.git
cd omdala-infra
./scripts/bootstrap.sh --domain infra.omdala.com --email admin@omdala.com
```

### C. Health Check Script

```bash
#!/bin/bash
# scripts/health-check.sh
set -e

curl -fsS https://infra.omdala.com/health
curl -fsS https://api.infra.omdala.com/health
curl -fsS https://auth.infra.omdala.com/health
docker compose exec postgres pg_isready -U postgres
docker compose exec valkey valkey-cli ping
echo "ALL HEALTH CHECKS PASSED"
```

---

**Next Action:** Founder review → Approve → Create repo `omdala-infra` → Assign Team A to P0.

**Document Version:** 1.0  
**Last Updated:** 2026-06-05  
**Review Cycle:** Weekly until P5, then monthly.
