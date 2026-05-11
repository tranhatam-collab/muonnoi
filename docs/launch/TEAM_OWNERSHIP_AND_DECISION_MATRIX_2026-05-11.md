# Muonnoi Team Ownership And Decision Matrix

Date: 2026-05-11
Scope: Life Quest OS mobile Sprint 0 / Sprint 1.

Extension: public launch, docs/subdomain rollout, payment/email gate and security/infra lanes.

## Final decision owner

Founder/Product Owner owns final product direction, launch timing, trust policy and public claim language.

## Team ownership

Product:
- Owns quest scope, user value, MVP definition, success metrics and launch wording.
- Can approve user-facing copy, quest acceptance criteria and module priority.

Mobile:
- Owns iOS/Android app shell, navigation, mobile UX, native permissions, push, camera, location and offline draft behavior.
- Can approve implementation details when they do not change product scope or privacy boundaries.

API/AI:
- Owns API contracts, proof pipeline, AI pre-review, validation state, idempotency and audit logging.
- Can approve response shapes only after Mobile and QA confirm client handling.

Platform:
- Owns environments, deploy/release lane, app signing, secrets, rollback and incident controls.
- Can block release if build, credentials, observability or rollback readiness is missing.

QA/Trust:
- Owns release gates, abuse scenarios, permission tests, proof integrity and complaint flow validation.
- Can block release if any P0/P1 trust, privacy or lifecycle gate fails.

Web/Public:
- Owns root public pages, internal links, sitemap, redirects, public route matrix and shared public UI consistency.
- Can block a page publish if CTA, copy, metadata, route or claim-safety is incomplete.

Docs:
- Owns docs.muonnoi.org structure, versioned package publishing, changelog and cross-file consistency.
- Can block team handoff if source-of-truth files conflict.

Security/Legal:
- Owns source protection, ASVS/CIS baseline, data protection, investment wording, proof/reward safety and incident policy.
- Can block public or production release if legal, privacy, payment, reward or evidence claims are unsafe.

## Decision rules

- Product scope change requires Product + Mobile + API sign-off.
- Privacy or permission change requires Product + Platform + QA sign-off.
- API contract change requires API + Mobile + QA sign-off.
- Store submission change requires Product + Platform + QA sign-off.
- Release go/no-go requires all team leads to mark their lane `PASS` or `BLOCKED_WITH_REASON`.
- Public launch copy requires Product + Web/Public + Legal/Security sign-off.
- Cloudflare deploy requires Platform + Web/Public + QA sign-off.
- Payment/email go-live requires Platform + API + QA + Security sign-off.
- Subdomain homepage publish requires Web/Public + Platform + Docs + QA sign-off.

## Escalation

P0:
- auth/session broken
- proof upload broken
- private data exposed
- payment/token promise accidentally introduced
- release rollback unavailable

P1:
- mobile crash on main flow
- permission prompt unclear
- push notification wrong or spam-like
- offline conflict unresolved
- validation state inconsistent

P2:
- copy polish
- non-critical visual defects
- secondary route cleanup
