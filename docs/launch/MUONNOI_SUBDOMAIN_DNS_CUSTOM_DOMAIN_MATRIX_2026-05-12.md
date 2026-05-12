# MUONNOI SUBDOMAIN DNS AND CUSTOM DOMAIN MATRIX · 2026-05-12

## Scope
This file locks the current evidence matrix for planned Muonnoi domains before more public links or deployments are promoted.

Evidence time: `2026-05-12 06:52 +07`

Evidence commands used:
- `wrangler pages project list`
- `wrangler pages deployment list --project-name=muonnoi`
- `dig +short <host>`
- `curl -I -L --max-time 15 -s <url>`

Additional evidence on `2026-05-13 +07`:
- `dig +short cuocsong.muonnoi.org` returned no answer.
- `wrangler pages project list | rg -i "cuoc|song|cuocsong"` returned no matching Pages project or custom-domain entry.
- Local repo scan found only legacy Người Việt archive references and no dedicated `cuocsong.muonnoi.org` source tree.

## Cloudflare Pages projects confirmed
| Project | Custom domains visible in Pages list | State |
|---|---|---|
| `muonnoi` | `muonnoi.org`, `www.muonnoi.org`, `muonnoi.pages.dev` | `PASS` |
| `app-muonnoi-org` | `app.muonnoi.org`, `www.app.muonnoi.org`, `app-muonnoi-org.pages.dev` | `PASS` |
| `docs-muonnoi-org` | `docs.muonnoi.org`, `www.docs.muonnoi.org`, `docs-muonnoi-org.pages.dev` | `PASS` |
| `muonnoi-org` | `muonnoi-org.pages.dev` only | `LEGACY_OR_STAGING_ONLY` |
| `muonnoi-node` | `node.muonnoi.org`, `www.node.muonnoi.org`, `muonnoi-node.pages.dev` | `PASS_BUT_NOT_PUBLIC_PRIMARY` |
| `visamuonnoi-org` | `visamuonnoi-org.pages.dev` only | `OUT_OF_SCOPE_FOR_CURRENT_PUBLIC_LINKS` |
| `visamuonnoi-org-web` | `visamuonnoi-org-web.pages.dev` only | `OUT_OF_SCOPE_FOR_CURRENT_PUBLIC_LINKS` |
| `nguoiviet-muonnoi-org` | `nguoiviet-muonnoi-org.pages.dev`; custom domain `nguoiviet.muonnoi.org` attached but pending DNS update from Wix → Pages | `LIVE_PAGES_PENDING_DNS_SWAP` |

## Host evidence matrix
| Host | Planned role | DNS evidence | HTTP evidence | Pages custom-domain evidence | Current decision |
|---|---|---|---|---|---|
| `muonnoi.org` | root public shell | `104.21.93.187` | `https://www.muonnoi.org/` returned `200` | `muonnoi` project includes root and www | `LIVE_PRIMARY` |
| `www.muonnoi.org` | root canonical public shell | `104.21.93.187` | `https://www.muonnoi.org/` returned `200` | `muonnoi` project includes root and www | `LIVE_PRIMARY` |
| `app.muonnoi.org` | app and social core | `172.67.214.1` | `https://app.muonnoi.org/` returned `200` | `app-muonnoi-org` project includes app and www.app | `LIVE_LINK_ALLOWED` |
| `docs.muonnoi.org` | documentation hub | `104.21.93.187` | `https://docs.muonnoi.org/` returned `200` | `docs-muonnoi-org` project includes docs and www.docs | `LIVE_LINK_ALLOWED` |
| `ai.muonnoi.org` | AI/workflow support | `172.67.214.1` | `https://ai.muonnoi.org/` returned `200` | not visible as Pages custom domain in current Pages list | `LIVE_BUT_CUSTOM_DOMAIN_SOURCE_NOT_LOCKED` |
| `api.muonnoi.org` | Worker API | `172.67.214.1` | `https://api.muonnoi.org/api/health` returned `200`; `/health` returned `404` | Worker route in `ai.muonnoi.org/workers/api/wrangler.toml` | `LIVE_API_HEALTH_PATH_LOCKED` |
| `lamviec.muonnoi.org` | work/operator gateway | `104.21.93.187` | `https://lamviec.muonnoi.org/` returned `200` | no Pages custom-domain row visible in current Pages list | `LIVE_BUT_SOURCE_AND_CUSTOM_DOMAIN_NOT_LOCKED` |
| `lqos.muonnoi.org` | Life Quest OS draft surface | `115.146.121.120` | HTTPS probe ended with TLS error code `35` | no Pages custom-domain row visible | `DO_NOT_LINK_PRIMARY` |
| `dautu.muonnoi.org` | investment lane | `115.146.121.120` | HTTPS probe ended with TLS error code `35` | no Pages custom-domain row visible | `DO_NOT_LINK_PRIMARY` |
| `duan.muonnoi.org` | project lane | `115.146.121.120` | HTTPS probe timed out with code `28` | no Pages custom-domain row visible | `DO_NOT_LINK_PRIMARY` |
| `family.muonnoi.org` | family layer | `115.146.121.120` | HTTPS probe ended with TLS error code `35` | no Pages custom-domain row visible | `DO_NOT_LINK_PRIMARY` |
| `dulich.muonnoi.org` | travel quest pilot | no DNS answer in this check | not probed as live route | no Pages custom-domain row visible | `DO_NOT_LINK_PRIMARY` |
| `hoctap.muonnoi.org` | learning quest layer | not yet checked in this run | not yet checked in this run | no Pages custom-domain row visible | `DO_NOT_LINK_PRIMARY` |
| `suckhoe.muonnoi.org` | health quest layer | not yet checked in this run | not yet checked in this run | no Pages custom-domain row visible | `DO_NOT_LINK_PRIMARY` |
| `sangtao.muonnoi.org` | creation quest layer | not yet checked in this run | not yet checked in this run | no Pages custom-domain row visible | `DO_NOT_LINK_PRIMARY` |
| `congdong.muonnoi.org` | community quest layer | not yet checked in this run | not yet checked in this run | no Pages custom-domain row visible | `DO_NOT_LINK_PRIMARY` |
| `nguoiviet.muonnoi.org` | Vietnamese Global Journey layer (Người Việt Muôn Nơi) | currently CNAME `pointing.wixdns.net` (legacy Wix) | preview at `https://nguoiviet-muonnoi-org.pages.dev/` returned `200`; custom domain attached on 2026-05-12, status `pending` (CNAME not set) | `nguoiviet-muonnoi-org` Pages project includes custom domain row (pending DNS) | `PENDING_DNS_SWAP_FROM_WIX_TO_PAGES` |
| `cuocsong.muonnoi.org` | living-practice layer (Cuộc Sống Muôn Nơi) | no DNS answer on 2026-05-13 | not probed as live route because DNS is not configured | no Pages project or custom-domain row matched `cuoc/song/cuocsong` | `PLANNED_NOT_CONFIGURED` |
| `trust.muonnoi.org` | trust and complaints layer | not yet checked in this run | not yet checked in this run | no Pages custom-domain row visible | `DO_NOT_LINK_PRIMARY` |
| `nhachung.muonnoi.org` | housing/community layer | not yet checked in this run | not yet checked in this run | no Pages custom-domain row visible | `DO_NOT_LINK_PRIMARY` |
| `node.muonnoi.org` | node/technical lane | `104.21.93.187` | not probed in this run | `muonnoi-node` project includes node and www.node | `LIVE_BUT_NOT_PUBLIC_PRIMARY` |

## Latest root deployment evidence
| Deployment | Environment | Branch | Source | Decision |
|---|---|---|---|---|
| `https://95e0ea23.muonnoi.pages.dev` | Production | `main` | `4f73c35` | `ROOT_PUBLIC_SHELL_PRODUCTION_DEPLOYED` |
| `https://e04b01ec.muonnoi.pages.dev` | Preview | `brand/v2.0-voice-and-place` | `4f73c35` | `ROOT_PUBLIC_SHELL_PREVIEW_DEPLOYED` |

Immediate post-deploy note:
- `www.muonnoi.org` header check returned `200`.
- body checks briefly hit local DNS resolution failures after production deploy; rerun body verification after edge/DNS propagation before claiming final custom-domain body parity.

## Public linking rule
Allowed as primary public links now:
- `https://www.muonnoi.org/`
- `https://app.muonnoi.org/`
- `https://docs.muonnoi.org/`
- `https://ai.muonnoi.org/` only with note that custom-domain source still needs lock
- `https://api.muonnoi.org/api/health` only for API health evidence

Not allowed as primary public CTA yet:
- `https://lqos.muonnoi.org/`
- `https://dautu.muonnoi.org/`
- `https://duan.muonnoi.org/`
- `https://family.muonnoi.org/`
- `https://dulich.muonnoi.org/`
- `https://hoctap.muonnoi.org/`
- `https://suckhoe.muonnoi.org/`
- `https://sangtao.muonnoi.org/`
- `https://congdong.muonnoi.org/`
- `https://cuocsong.muonnoi.org/`
- `https://trust.muonnoi.org/`
- `https://nhachung.muonnoi.org/`

Use internal routes instead until each host has Cloudflare custom-domain evidence and a fresh `200` or intentional redirect result:
- `/ecosystem/`
- `/roadmap/`
- `/quests/`
- `/quests/<module>/`
- `/investment/`
- `/plan/`

## Team command
Platform:
- resolve the source ownership for `ai.muonnoi.org` and `lamviec.muonnoi.org`.
- add Cloudflare Pages custom-domain evidence or Worker route evidence for each planned host before public linking.
- keep `cuocsong.muonnoi.org` as `PLANNED_NOT_CONFIGURED` until source, preview, DNS and HTTPS evidence exist.

Web/Public:
- keep planned but unverified subdomains as internal links.
- do not promote `dautu`, `duan`, `family`, `lqos`, `dulich`, `hoctap`, `suckhoe`, `sangtao`, `congdong`, `trust`, or `nhachung` as external CTAs yet.
- do not promote `cuocsong.muonnoi.org` as an external CTA until the Cuộc Sống QA checklist and this DNS matrix both pass.

QA:
- rerun DNS + HTTPS matrix after any DNS/custom-domain change.
- verify canonical, CSP and redirect behavior per host.

## True state
`DNS_CUSTOM_DOMAIN_MATRIX_LOCKED_2026_05_12`
`ROOT_APP_DOCS_CONFIRMED_ON_CLOUDFLARE_PAGES`
`API_HEALTH_PATH_IS_API_HEALTH_NOT_HEALTH`
`PLANNED_SUBDOMAINS_NOT_READY_FOR_PRIMARY_PUBLIC_LINKS`
`RELEASE_READY_NOT_CLAIMED`
