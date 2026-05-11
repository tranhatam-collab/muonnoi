# Muon Noi LQOS Homepage Deploy Plan

Date: 2026-05-11
Source package: `lqos.muonnoi.org`
Scope: `apps/web/public` public homepage and minimum route support.

## Verdict

HOMEPAGE_LQOS_UPDATE_APPLIED

STATIC_VERIFY_PASS

PRODUCTION_DEPLOY_PASS

## Evidence checked

- `lqos.muonnoi.org/MUONNOI_PUBLIC_LAUNCH_PACKAGE_2026.md`
- `MUONNOI_DEV_HANDOFF_PACKAGE_2026.zip`
- `muonnoi.org_planing.zip`
- Current public shell: `apps/web/public`

## Applied scope

- Updated `apps/web/public/index.html` with Life Quest OS launch copy.
- Added homepage sections: hero, three locks, Life Quest OS, ecosystem modules, pilot callout, principles, partner bridge, final footer.
- Added minimal no-dead-link route shells:
  - `/quests/`
  - `/quests/dulich/`
  - `/host/`
  - `/partners/`
- Updated `apps/web/public/assets/ui.css` with LQOS homepage components.
- Updated `_redirects` and `sitemap.xml`.

## Verification

- Static parse passed for:
  - `apps/web/public/index.html`
  - `apps/web/public/quests/index.html`
  - `apps/web/public/quests/dulich/index.html`
  - `apps/web/public/host/index.html`
  - `apps/web/public/partners/index.html`
- CSP scan found no inline `<script>`, inline `<style>`, or `style=""` in the updated homepage and new route shells.
- Local route smoke returned HTTP 200 for `/`, `/quests/`, `/quests/dulich/`, `/host/`, and `/partners/`.

## Deploy evidence

- Cloudflare Pages project: `muonnoi`
- Preview deploy: `https://b80b409d.muonnoi.pages.dev`
- Production branch deploy: `https://060ba36e.muonnoi.pages.dev`
- Live `https://muonnoi.org/` returns HTTP 200 and contains the new Life Quest OS homepage copy.
- Live routes return HTTP 200:
  - `https://muonnoi.org/quests/`
  - `https://muonnoi.org/quests/dulich/`
  - `https://muonnoi.org/host/`
  - `https://muonnoi.org/partners/`

## Not in this deploy

- Full manifesto page.
- Full about page.
- Full press kit.
- Investment portal.
- Project portal.

These remain in the handoff package and should be handled as separate content pages after homepage deploy verification.

## Team command

Platform:
Deploy `apps/web/public` as the root public shell after static verification passes.

Web:
Keep the new homepage static, CSP-safe, and free of inline JavaScript.

Content:
Continue page expansion from the package in this order: manifesto, about, full quests, host, partners, press.

QA:
Verify homepage, `/quests/`, `/quests/dulich/`, `/host/`, and `/partners/` return 200 after deploy.

## Hard stop

Do not claim the whole public site is complete from this homepage deploy. This release updates the homepage and minimum linked route shells only.
