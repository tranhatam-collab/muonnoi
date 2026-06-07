# Deploy Checklist — Kết Nối Muôn Nơi

## 1. API Worker (apps/api)

```bash
cd apps/api
npx wrangler deploy --minify
```

**Env vars cần set trong Cloudflare Dashboard (Worker > Settings > Variables):**

| Var | Mô tả |
|---|---|
| `JWT_SECRET` | Random 64+ chars |
| `MAIL_API_URL` | `https://mail.iai.one` |
| `MAIL_API_KEY` | API key từ mail.iai.one |
| `VERIFY_API_URL` | `https://verify.iai.one` |
| `PAY_API_URL` | `https://pay.iai.one` |
| `PAY_API_KEY` | API key từ pay.iai.one |

## 2. D1 Migrations

```bash
cd apps/api
npx wrangler d1 migrations apply ketnoi-muonnoi-dev --local   # dev
npx wrangler d1 migrations apply ketnoi-muonnoi-dev --remote  # prod
```

Hoặc chạy từng migration:
```bash
npx wrangler d1 execute ketnoi-muonnoi-dev --remote --file=./migrations/0001_create_users.sql
npx wrangler d1 execute ketnoi-muonnoi-dev --remote --file=./migrations/0002_create_profiles.sql
npx wrangler d1 execute ketnoi-muonnoi-dev --remote --file=./migrations/0003_create_sessions.sql
npx wrangler d1 execute ketnoi-muonnoi-dev --remote --file=./migrations/0004_create_matches.sql
npx wrangler d1 execute ketnoi-muonnoi-dev --remote --file=./migrations/0005_create_conversations.sql
npx wrangler d1 execute ketnoi-muonnoi-dev --remote --file=./migrations/0006_create_safety.sql
npx wrangler d1 execute ketnoi-muonnoi-dev --remote --file=./migrations/0007_add_verification_levels.sql
```

## 3. Web Pages (apps/web)

```bash
cd apps/web
npm run build
npx wrangler pages deploy ./dist --project-name=ketnoi-muonnoi-web --branch=main
```

**Note:** Đã thêm `_redirects` vào dist/ cho henho.muonnoi.org và meet.muonnoi.org.

## 4. Đầu Tư Pages (sites/dautu)

```bash
cd sites/dautu
npm run build
npx wrangler pages deploy ./dist --project-name=dautu-muonnoi-org --branch=main
```

## 5. GitHub Actions (tự động)

Đã thêm workflow `.github/workflows/deploy.yml` vào cả 2 repo (ketnoi và dautu).

Cần set secrets trong GitHub repo settings:
- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

Lấy token từ: https://dash.cloudflare.com/profile/api-tokens
