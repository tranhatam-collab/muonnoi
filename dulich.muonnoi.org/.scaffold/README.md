# dulich.muonnoi.org — Astro Scaffold Placeholder

> **Status:** SCAFFOLD PENDING — awaiting Astro init per ADR-002
> **Build system:** Astro (decided in `docs/decisions/ADR-002-web-build-system-2026-06-05.md`)
> **Cloudflare Pages project:** `dulich-muonnoi-org` (to be created)
> **DNS status:** ❌ HTTP 000 (Cloudflare CNAME pending, Founder action required)

---

## Init steps (when ready)

```bash
cd dulich.muonnoi.org
npm create astro@latest . -- --template basics --typescript strict --no-install --no-git
npm install
npm install @astrojs/sitemap @astrojs/tailwind @astrojs/cloudflare

# Astro config (astro.config.mjs):
# - output: 'static'
# - integrations: [sitemap(), tailwind(), cloudflare()]
# - site: 'https://dulich.muonnoi.org'
# - i18n: { defaultLocale: 'vi', locales: ['vi', 'en'] }
```

## Pages to build (Sprint 2 — 2026-06-09 → 16)

| Page | Route | Content source |
|------|-------|----------------|
| Homepage | `/` | Hero + 10 quest cards (from `docs/quests/dulich-dalat/`) |
| Quest detail | `/quests/[slug]/` | Markdown content collection |
| Host page | `/host/` | KYC tier explainer + apply form |
| About | `/about/` | Pilot context (Đà Lạt 01/08/2026) |
| Legal | `/legal/` | ToS, privacy per `docs/policies/` |

## DNS unblock (Founder)

1. Cloudflare → muonnoi.org zone → DNS
2. Add CNAME: `dulich` → `dulich-muonnoi-org.pages.dev` (Proxy: ON)
3. Cloudflare → Pages → Create project `dulich-muonnoi-org` if not exists
4. Cloudflare → Pages → `dulich-muonnoi-org` → Custom domains → Add `dulich.muonnoi.org`

Verify after propagation:
```bash
dig +short dulich.muonnoi.org   # expect Cloudflare IP
curl -sI https://dulich.muonnoi.org/   # expect HTTP/2 200
```

---

**Created:** 2026-06-05 by Claude agent (Sprint 1 prep, ADR-002 alignment)
