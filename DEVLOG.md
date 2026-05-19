# muonnoi.org — Dev Log

Cập nhật mới nhất ở đầu file.

---

## 2026-05-19 — Phase A done: repo cleanup, DNS matrix, Cuộc Sống Gate 8

### Đã làm
- ✅ **C8 — Repo cleanup** (`git status` rỗng)
  - Xoá stale gitlink `muonnoi app` (Xcode project cũ)
  - Xoá gitlinks muonnoi-ai, muonnoi-ai-machine, muonnoi-app, muonnoi-node (do-not-deploy clones)
  - Thêm .gitignore entries cho clone dirs + brand zip
  - Commit ai.muonnoi.org submodule changes (mobile push endpoint, migration 0007, CSP/CORS)
  - Clean app.muonnoi.org submodule (.gitignore + team planning docs)

- ✅ **C6 — DNS matrix** (8 LIVE_LINK_ALLOWED entries)
  - `cuocsong.muonnoi.org`: HTTP 200, Cloudflare IP → `LIVE_LINK_ALLOWED`
  - `nguoiviet.muonnoi.org`: HTTP 200, Cloudflare IP → `LIVE_LINK_ALLOWED`
  - `www.nguoiviet.muonnoi.org`: DNS OK (Cloudflare 104.21.93.187) but HTTP 522 → `DNS_CONFIGURED_ORIGIN_PENDING`
  - Updated matrix file + execution status file

- ✅ **C7 — Cuộc Sống Gate 8** (đang đóng)
  - 7/7 routes HTTP 200: `/`, `/gioi-thieu/`, `/song-o-nhieu-noi/`, `/cho-va-nhan/`, `/legal/disclaimer/`, `/legal/privacy/`, `/legal/terms/`
  - Cuộc Sống checklist từ `IMPLEMENTATION_IN_PROGRESS` → `READY_FOR_PUBLIC_LINK`

### Còn lại (cần user action)
- **B1 OAuth E2E**: cần test Google account + browser screenshots (5 sites × 9 steps)
- **B2 Android SDK**: cài `android-commandlinetools` + accept licenses + build debug
- **C1 iOS TestFlight**: cần Apple Developer Team ID (10-char) từ developer.apple.com
- **C2 Payment/Email**: cần PayOS test credentials + D1 access → 10 scenario QA

### Runbook
- `docs/launch/SOLO_TEAM_RUNBOOK_TO_100_2026-05-19.md` — bản cô đặc cho 1 người làm từ đầu đến 100/100

---

## 2026-05-18 — Google Sign-In deployment complete

### Đã làm
- ✅ **tramsaigon.com/vi/sign-in/** — Google button deployed (Next.js)
- ✅ **nhachung.org/dang-ky** — Google button deployed (React)
- ✅ **auth.omdala.com/login** — Google button deployed (production branch)
- ✅ **lamviec.muonnoi.org/*/login** — Google button deployed (React Native Web)
- ✅ **lamviec.muonnoi.org/*/register** — Google button deployed

### Sites kiểm soát
| Site | Button | Status | API |
|------|--------|--------|-----|
| tramsaigon.com/vi/sign-in | ✅ Google OAuth | Live | /api/auth/google/start |
| nhachung.org/dang-ky | ✅ Google OAuth | Live | /api/auth/google/start |
| auth.omdala.com/login | ✅ Google OAuth | Live | /api/auth/google/start |
| lamviec.muonnoi.org/login | ✅ Google OAuth | Live | /api/auth/google/start |
| lamviec.muonnoi.org/register | ✅ Google OAuth | Live | /api/auth/google/start |
| lamviecmuonnoi.com | — | Migrated to muonnoi.org | N/A |

### CSS dividers added
- All sign-in/register pages now have consistent divider styling
- Global CSS: `globals.css` with `.divider` class
- Styling: `border-top: 1px solid #e5e7eb; margin: 1rem 0;`

### Deployments completed
- tramsaigon.com: `npm run build && npm run deploy` ✅
- nhachung.org: `npm run build && npm run deploy` ✅  
- auth.omdala.com: `git push origin production` ✅
- lamviec.muonnoi.org: `wrangler pages deploy` ✅

---

## 2026-05-18 — MAIL_API_KEY set

### Đã làm
- **`MAIL_API_KEY`** — set trên `ai-muonnoi-api` worker. Magic-link và auth email sẽ gửi được sau bước này.
- Worker code đã default `MAIL_API_WORKSPACE_ID = "muonnoi.org"` nếu không set (trong `security-api.ts` line 204) → không cần set riêng.

### Worker
- **API Worker**: `ai-muonnoi-api` → `api.muonnoi.org`
- **Config**: `/Users/tranhatam/Documents/Devnewproject/muonnoi.org/ai.muonnoi.org/workers/api/wrangler.toml`
- **Mail base URL**: `https://mail.iai.one/v1` (set trong wrangler.toml)

### Secrets trên `ai-muonnoi-api`
| Secret | Status |
|--------|--------|
| MAIL_API_KEY | ✅ set 2026-05-18 ← MỚI |
| GOOGLE_CLIENT_ID | ✅ set |
| GOOGLE_CLIENT_SECRET | ✅ set |
| GOOGLE_REDIRECT_URI | ✅ `https://api.muonnoi.org/api/auth/google/callback` |

### Email flows
| Flow | Route | Status |
|------|-------|--------|
| Magic link | `/api/auth/magic-link/request` | ✅ Live (cần test) |
| Google OAuth | `/api/auth/google/start` | ✅ Live |

### Còn lại
- Test magic-link end-to-end: request → email đến inbox.
- muonnoi.org không có public login page (admin-only) — Google OAuth không cần frontend button.
