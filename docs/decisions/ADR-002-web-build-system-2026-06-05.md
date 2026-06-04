# ADR-002: Web Build System for Muonnoi.org
> **Date:** 2026-06-05
> **Status:** ACCEPTED — Founder approved (R6)
> **Deciders:** Founder, Cascade
> **Context:** Life Quest OS upgrade proposal

---

## CONTEXT

Muonnoi.org has 10+ subdomains with different needs:
- Public/content sites (SEO-first, multi-language, static HTML)
- App/auth-heavy sites (forms, state management, SPA)

Current state: flat HTML static files, no build pipeline. Maintenance at 10+ subdomains is unsustainable.

---

## DECISION

Split by subdomain type:

| Type | Build System | Subdomains |
|------|-------------|------------|
| **Public / Content / SEO** | **Astro** | www, cuocsong, nguoiviet, dulich, hoctap, docs |
| **App / Auth / State-heavy** | **Vite + React SPA** | app, lamviec |

---

## RATIONALE

### Why Astro for Public Sites

| Need | Astro | Vite | 11ty |
|------|:-----:|:----:|:----:|
| SEO-first (SSG/SSR HTML) | ✅ | ❌ SPA | ✅ |
| i18n routing (hreflang) | ✅ built-in | ❌ manual | ⚠️ manual |
| Multi-route content | ✅ | ⚠️ overkill | ✅ |
| Component islands (React/Vue) | ✅ | ✅ | ❌ |
| Image optimization | ✅ built-in | ❌ plugin | ⚠️ plugin |
| Fit public shell + content hubs | ✅ | ❌ | ⚠️ |

Astro is the best fit for content-heavy, SEO-critical public pages.

### Why Vite+React for App Sites

| Need | Vite+React | Astro | 11ty |
|------|:----------:|:-----:|:----:|
| SPA routing | ✅ | ⚠️ islands | ❌ |
| Auth state (JWT, OAuth) | ✅ | ⚠️ | ❌ |
| Form-heavy UI | ✅ | ⚠️ | ❌ |
| Real-time updates | ✅ | ❌ | ❌ |
| Existing React components | ✅ | ❌ | ❌ |

Vite+React is the best fit for auth-heavy, interactive applications.

---

## CONSEQUENCES

### Positive
- SEO improvement for public sites (SSG HTML)
- Faster builds with Astro for content
- Familiar React ecosystem for app developers
- Image optimization out of the box
- i18n routing built-in for Astro

### Negative
- Two build systems to maintain (Astro + Vite)
- Team needs to know both frameworks
- Slightly more complex CI/CD

### Mitigation
- Document both systems in `docs/dev/`
- Shared components via web components or design tokens
- Common CI pattern: `npm run build` → `wrangler pages deploy`

---

## IMPLEMENTATION PLAN

### Phase 1: Astro Scaffold (dulich.muonnoi.org)
- Create `sites/dulich/` with Astro minimal template
- Configure i18n (vi + en)
- Deploy placeholder to Pages
- Verify: `curl -I https://dulich.muonnoi.org` → HTTP 200

### Phase 2: Vite+React Scaffold (app.muonnoi.org)
- Confirm existing `app.muonnoi.org/apps/web/` uses Vite
- Standardize build config
- Document SPA routing pattern

### Phase 3: Migrate Remaining Public Sites
- www.muonnoi.org
- cuocsong.muonnoi.org
- nguoiviet.muonnoi.org
- hoctap.muonnoi.org
- docs.muonnoi.org

---

## REJECTED ALTERNATIVES

| Alternative | Reason Rejected |
|-------------|-----------------|
| Single Vite for all | SPA is bad for SEO; public sites need SSG |
| Single Astro for all | Astro islands are awkward for complex auth flows |
| 11ty for all | No component system; harder for team to adopt |
| Next.js for all | Overkill; requires Node.js server; Cloudflare Pages prefers static |

---

> **ADR locked 2026-06-05. Build system decision is final for v0.1 pilot.**
