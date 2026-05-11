# MUONNOI DNS AND SUBDOMAIN EXECUTION STATUS · 2026-05-11

## Scope
This status file is the source of truth for subdomain routing and DNS execution priorities across Muonnoi.

## Verified repo-side mappings
1. `muonnoi.org` public shell routes are defined in:
`apps/web/public/_redirects`, `apps/web/public/_headers`
2. `api.muonnoi.org` Worker route is defined in:
`ai.muonnoi.org/workers/api/wrangler.toml` with `custom_domain = true`
3. `ai.muonnoi.org` Pages project config exists in:
`ai.muonnoi.org/wrangler.json`
4. `app.muonnoi.org` route aliases and canonical host redirect are defined in:
`app.muonnoi.org/apps/web/_redirects`
5. `docs.muonnoi.org` route aliases are defined in:
`docs.muonnoi.org/public/_redirects`

## Operational blockers
1. Local DNS verification from this workspace is blocked by environment/network policy.
2. Cloudflare account actions still require valid credential context for final DNS checks and deploy confirmation.
3. `lamviec.muonnoi.org` has content and planning references, but no fully locked repo-side deployment mapping in this root repo yet.

## Team execution split
1. Platform/DevOps:
Lock Cloudflare DNS records and custom-domain status for `muonnoi.org`, `ai.muonnoi.org`, `app.muonnoi.org`, `docs.muonnoi.org`, `api.muonnoi.org`, `lamviec.muonnoi.org`.
2. AI/API:
Keep `api.muonnoi.org` Worker route and CORS/CSP compatibility stable with public shells.
3. Web/Public shell:
Do not link public CTAs to subdomains without live verification; fallback to `/ecosystem/` or `/roadmap/`.
4. QA/Release:
Re-run live URL matrix and capture evidence before calling release-ready.

## URL evidence checklist (must attach per run)
1. HTTPS status for each core host:
`muonnoi.org`, `ai.muonnoi.org`, `app.muonnoi.org`, `docs.muonnoi.org`, `api.muonnoi.org`, `lamviec.muonnoi.org`
2. CSP header check for hosts that call API.
3. Canonical URL check for public homepage + core public routes.
4. Last deploy id and timestamp per app surface.

## Current true state
`DNS_EXECUTION_IN_PROGRESS`
`PUBLIC_SHELL_LINK_HARDENING_APPLIED`
`RELEASE_READY_NOT_CLAIMED`
