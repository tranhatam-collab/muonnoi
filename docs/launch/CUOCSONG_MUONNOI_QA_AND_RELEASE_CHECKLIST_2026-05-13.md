# CUOC SONG MUONNOI QA AND RELEASE CHECKLIST · 2026-05-13

## Gate Status

BLOCKED_BEFORE_IMPLEMENTATION

This checklist is prepared for team use. It does not claim that `cuocsong.muonnoi.org` is ready.

## Current Evidence

| Item | Status | Evidence |
|---|---|---|
| Dedicated source tree | `MISSING` | No `cuocsong.muonnoi.org/` folder in repo |
| DNS | `MISSING` | `dig +short cuocsong.muonnoi.org` returned no answer |
| Cloudflare Pages project | `MISSING` | `wrangler pages project list | rg -i "cuoc|song|cuocsong"` returned no match |
| Drive source | `FOUND` | 2 Google Docs in provided Drive folder |
| Claim-safe public copy | `NOT_STARTED` | Source material requires rewrite |
| Legal disclaimers | `NOT_STARTED` | Required before public route release |
| Primary homepage CTA | `BLOCKED` | DNS/source/QA not ready |

## Required Gates Before Public Link

### Gate 1 — Source and ownership

- [ ] Source path selected: `cuocsong.muonnoi.org/` or `apps/web/public/cuoc-song/`.
- [ ] Source path committed to repo.
- [ ] Owner recorded in `docs/launch/MUONNOI_PARALLEL_DEV_COORDINATION_PLAN_2026-05-12.md`.
- [ ] No unrelated legacy clone folders staged.

Evidence command:

```bash
git status --short
find cuocsong.muonnoi.org -maxdepth 2 -type f
```

Pass condition:

- Only expected source files appear as new or modified.

### Gate 2 — Content and claim safety

- [ ] No old Wix navigation text.
- [ ] No emoji/hashtag marketing blocks.
- [ ] No visa, legal, finance, loan, investment, medical, therapy or crisis-service claims.
- [ ] No free accommodation or free meals claim.
- [ ] No fixed price, donation, fundraising or investment CTA.
- [ ] No sample phone, address or unverified social channel.
- [ ] Every future-state claim uses planned/under review wording.
- [ ] Every regulated-topic page links to `/legal/disclaimer/`.

Suggested scan:

```bash
rg -n "visa|pháp lý|tài chính|đầu tư|vay|ngân hàng|y tế|tâm lý|tâm linh|miễn phí ăn ở|11 tỷ|2,5 triệu|Đăng ký ngay|#|☎|📞|🌏|🌟" cuocsong.muonnoi.org apps/web/public/cuoc-song
```

Pass condition:

- Any match is intentionally reviewed and either removed or recorded with approval evidence.

### Gate 3 — Brand and language

- [ ] Vietnamese pages use full diacritics.
- [ ] English pages are complete, not shorthand summaries.
- [ ] Language labels are `Tiếng Việt` and `English`.
- [ ] No `VI`, `EN`, flag-only or icon-only language switch.
- [ ] `Cuộc Sống Muôn Nơi` is presented as a Muôn Nơi module.
- [ ] Brand tokens follow Muôn Nơi Brandpro v2.0.

Suggested scan:

```bash
rg -n ">\\s*(VI|EN)\\s*<|Vietnamese|Tiếng Việt|English" cuocsong.muonnoi.org apps/web/public/cuoc-song
```

Pass condition:

- Language labels match the locked wording.

### Gate 4 — Route and link smoke

- [ ] `/` returns `200`.
- [ ] `/gioi-thieu/` returns `200`.
- [ ] `/song-o-nhieu-noi/` returns `200`.
- [ ] `/lam-viec/` returns `200`.
- [ ] `/hoc-tap/` returns `200`.
- [ ] `/cong-dong/` returns `200`.
- [ ] `/cho-va-nhan/` returns `200`.
- [ ] `/ho-tro/` returns `200`.
- [ ] `/nha-chung/` returns `200`.
- [ ] `/da-lat/` returns `200`.
- [ ] `/cau-hoi/` returns `200`.
- [ ] `/lien-he/` returns `200`.
- [ ] `/legal/privacy/` returns `200`.
- [ ] `/legal/terms/` returns `200`.
- [ ] `/legal/disclaimer/` returns `200`.
- [ ] All internal links return `200` or intentional redirect.

Pass condition:

- Route smoke evidence is attached to the release note.

### Gate 5 — SEO and metadata

- [ ] One H1 per page.
- [ ] Title present.
- [ ] Description present.
- [ ] Canonical present.
- [ ] `hreflang` or equivalent language link present when bilingual pages ship.
- [ ] OG title and image present.
- [ ] Sitemap includes all routes.
- [ ] Robots file is intentional.

Pass condition:

- Metadata audit shows no missing title, description, canonical or language link.

### Gate 6 — Accessibility basic

- [ ] Main navigation keyboard reachable.
- [ ] Link text is descriptive.
- [ ] Color contrast passes brand baseline.
- [ ] Images have meaningful alt text.
- [ ] Buttons have accessible labels.
- [ ] Text does not overlap at mobile width.

Pass condition:

- Manual or automated accessibility evidence attached.

### Gate 7 — Cloudflare preview

- [ ] Preview deployment URL recorded.
- [ ] Preview returns `200`.
- [ ] Security headers present.
- [ ] Body contains current brand copy.
- [ ] No old source claims appear on preview.

Suggested command:

```bash
PREVIEW_URL="$(rg -o 'https://[^ ]+\\.pages\\.dev' /tmp/cuocsong-pages-deploy.log | head -1)"
curl -I -L --max-time 15 "$PREVIEW_URL/"
curl -L --max-time 15 -s "$PREVIEW_URL/" | rg -n "Cuộc Sống Muôn Nơi|Life Across Places"
```

Pass condition:

- Preview smoke passes before custom domain work starts.

### Gate 8 — DNS and custom domain

- [ ] Cloudflare Pages project or Worker source recorded.
- [ ] `cuocsong.muonnoi.org` custom domain attached.
- [ ] DNS answer recorded.
- [ ] HTTPS header check returns `200` or intentional redirect.
- [ ] Body parity check confirms current copy.
- [ ] DNS matrix updated.

Suggested commands:

```bash
dig +short cuocsong.muonnoi.org
curl -I -L --max-time 15 https://cuocsong.muonnoi.org/
curl -L --max-time 15 -s https://cuocsong.muonnoi.org/ | rg -n "Cuộc Sống Muôn Nơi|Life Across Places"
```

Pass condition:

- DNS matrix decision moves to `LIVE_LINK_ALLOWED`.

## Release Decision

`cuocsong.muonnoi.org` can be linked from the root homepage only when all gates above pass.

Current decision:

`DO_NOT_LINK_PRIMARY`

Reason:

- No DNS.
- No source tree.
- No route QA.
- No claim-safe public copy.
- No Cloudflare custom-domain evidence.
