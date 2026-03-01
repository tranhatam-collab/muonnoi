# Muôn Nơi (muonnoi.org) — Social-first, Security-first (Locked Baseline)

This repo is the initial locked baseline for:
- muonnoi.org (Cloudflare Pages) — landing + app shell
- api.muonnoi.org (Cloudflare Worker) — API v1, auth, security
- Cloudflare D1 — database migrations
- (Ready) R2 — media pipeline in later steps

Core principles:
- No external libraries. No CDN. No trackers.
- Strict CSP + security headers.
- HttpOnly Secure SameSite session cookies.
- CORS allowlist to APP_ORIGIN only.
- D1-based rate limiting (not memory-based).
- Owner bootstrap (one-time) via secret token.

## Local dev (API)
```bash
cd apps/worker
npm i
npm run dev
