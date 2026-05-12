# CUOC SONG MUONNOI QA AND RELEASE CHECKLIST · 2026-05-13

## Gate Status

IMPLEMENTATION_IN_PROGRESS_BLOCKED_ON_RELEASE_GATES

This checklist is prepared for team use. It does not claim that `cuocsong.muonnoi.org` is ready.

## Current Evidence

| Item | Status | Evidence |
|---|---|---|
| Dedicated source tree | `CREATED_LOCAL_NOT_DEPLOYED` | `cuocsong.muonnoi.org/` with static routes, legal pages and static infra files created on 2026-05-13 |
| DNS | `MISSING` | `dig +short cuocsong.muonnoi.org` returned no answer |
| Cloudflare Pages project | `MISSING` | `wrangler pages project list | rg -i "cuoc|song|cuocsong"` returned no match |
| Drive source | `FOUND` | 2 Google Docs in provided Drive folder |
| Claim-safe public copy | `SPRINT1_DRAFT_CREATED` | `/`, `/gioi-thieu/`, `/song-o-nhieu-noi/`, `/cho-va-nhan/`, `/cong-dong/` drafted in VI/EN with no transaction CTA |
| Legal disclaimers | `IMPLEMENTED_TEAM5_ROUTE_REVIEWED` | `/legal/disclaimer/`, `/legal/privacy/` and `/legal/terms/` exist; Team 5 reviewed implemented route set on 2026-05-13 |
| Primary homepage CTA | `BLOCKED` | DNS/source/QA not ready |

## Required Gates Before Public Link

### Gate 1 — Source and ownership

- [x] Source path selected: `cuocsong.muonnoi.org/` or `apps/web/public/cuoc-song/`.
- [x] Source path committed to repo.
- [x] Owner recorded in `docs/launch/MUONNOI_PARALLEL_DEV_COORDINATION_PLAN_2026-05-12.md`.
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

Team 5 pre-implementation review (2026-05-13):
- [x] Banned-claim taxonomy locked (visa/legal/finance/medical/psychology/free-accommodation/fixed-price/fundraising/guaranteed outcomes).
- [x] Disclaimer wording baseline approved for `/legal/disclaimer/`.
- [x] Safe wording baseline approved for Đà Lạt, Nhà Chung and support directory pages.
- [x] Route-level claim scan and disclaimer-link verification for implemented routes completed on 2026-05-13 (intentional `guaranteed` matches appear only inside disclaimer boundaries).

Implemented-route evidence:
- Reviewed routes: `/`, `/gioi-thieu/`, `/song-o-nhieu-noi/`, `/cho-va-nhan/`, `/cong-dong/`, `/legal/disclaimer/`, `/legal/privacy/`, `/legal/terms/`.
- Claim scan found sensitive keywords only in disclaimer/boundary contexts, not as offered services or transaction CTAs.
- Disclaimer path is present across the implemented route set.

Suggested scan:

```bash
rg -n "visa|pháp lý|tài chính|đầu tư|vay|ngân hàng|y tế|tâm lý|tâm linh|miễn phí ăn ở|11 tỷ|2,5 triệu|Đăng ký ngay|#|☎|📞|🌏|🌟" cuocsong.muonnoi.org apps/web/public/cuoc-song
```

Pass condition:

- Any match is intentionally reviewed and either removed or recorded with approval evidence.
- Remaining unchecked boxes apply to routes that are still planned and not yet implemented.

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
- Implemented-route note on 2026-05-13: `/`, `/gioi-thieu/`, `/song-o-nhieu-noi/`, `/cho-va-nhan/`, `/cong-dong/`, `/legal/disclaimer/`, `/legal/privacy/`, `/legal/terms/` all use `Tiếng Việt` and `English`, present `Cuộc Sống Muôn Nơi` as a Muôn Nơi module, and show no `VI` / `EN` shorthand labels in the audited route set.
- Team 4 brand note on 2026-05-13: audited route headers consistently use `Muôn Nơi · Cuộc Sống Muôn Nơi`, English support copy remains descriptive rather than hype-driven, and no implemented page presents Cuộc Sống Muôn Nơi as an independent brand.

### Gate 4 — Route and link smoke

- [x] `/` returns `200`.
- [x] `/gioi-thieu/` returns `200`.
- [x] `/song-o-nhieu-noi/` returns `200`.
- [ ] `/lam-viec/` returns `200`.
- [ ] `/hoc-tap/` returns `200`.
- [x] `/cong-dong/` returns `200`.
- [x] `/cho-va-nhan/` returns `200`.
- [ ] `/ho-tro/` returns `200`.
- [ ] `/nha-chung/` returns `200`.
- [ ] `/da-lat/` returns `200`.
- [ ] `/cau-hoi/` returns `200`.
- [ ] `/lien-he/` returns `200`.
- [x] `/legal/privacy/` returns `200`.
- [x] `/legal/terms/` returns `200`.
- [x] `/legal/disclaimer/` returns `200`.
- [ ] All internal links return `200` or intentional redirect.

Pass condition:

- Route smoke evidence is attached to the release note.
- Local smoke evidence recorded on 2026-05-13 via `python3 -m http.server` + `curl -i http://127.0.0.1:43114/cong-dong/index.html` returning `HTTP/1.0 200 OK`.

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
- No committed release source set.
- Partial route QA only.
- Partial claim-safe public copy only.
- No Cloudflare custom-domain evidence.

## Next Owner Routing

| Blocker | Next owner | Next safe task |
|---|---|---|
| Brand and bilingual verification missing | `Team 4` | Audit naming, diacritics, `Tiếng Việt` / `English` labels and module wording on implemented pages |
| Metadata and internal-link evidence missing | `Team 8` | Check H1, title, description, canonical, `hreflang`, OG and implemented-route links |
| Preview deploy not allowed yet | `Team 7` | Wait for Team 8 evidence, then prepare Pages preview without attaching DNS |
| Intake/email/proof integration blocked | `Team 9` | Stay in contract-note mode until payment, email and proof gates pass |
