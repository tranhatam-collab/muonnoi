# muonnoi.org — Dev Log

Cập nhật mới nhất ở đầu file.

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
