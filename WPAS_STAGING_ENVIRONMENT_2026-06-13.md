# STAGING ENVIRONMENT SETUP
# Cloudflare Pages Preview Deployments

> **Ngày:** 2026-06-13
> **Project:** Muôn Nơi
> **Environment:** Staging (Cloudflare Pages Preview)

---

## 1. CLOUDFLARE PAGES PREVIEW DEPLOYMENTS

**Cloudflare Pages có tính năng Preview Deployments:**
- Mỗi commit/PR tạo preview deployment
- Preview URL có dạng: `https://<commit-hash>.<project>.pages.dev`
- Preview deployment không ảnh hưởng production
- Founder có thể review staging trước production

---

## 2. MUÔN NƠI PAGES PROJECT

**Project name:** `muonnoi` (đã tồn tại)
**Production URL:** `https://www.muonnoi.org`
**Preview URL:** `https://<commit-hash>.muonnoi.pages.dev`

**Wrangler config:** `wrangler.toml`
```toml
name = "muonnoi"
compatibility_date = "2026-02-03"
pages_build_output_dir = "apps/web/public"
```

---

## 3. STAGING WORKFLOW

**Step 1: Tạo branch mới**
```bash
git checkout -b feature/<feature-name>
```

**Step 2: Commit changes**
```bash
git add .
git commit -m "feat: <description>"
git push origin feature/<feature-name>
```

**Step 3: Cloudflare Pages tự động tạo preview deployment**
- Cloudflare Pages tự động deploy branch mới
- Preview URL: `https://<commit-hash>.muonnoi.pages.dev`
- Founder có thể review staging

**Step 4: Founder review staging**
- Founder access preview URL
- Founder review UI/UX
- Founder review content
- Founder review brand
- Founder approval/rejection

**Step 5: Merge to main**
```bash
git checkout main
git merge feature/<feature-name>
git push origin main
```

**Step 6: Production deploy**
- Cloudflare Pages tự động deploy main branch
- Production URL: `https://www.muonnoi.org`

---

## 4. STAGING URL EXAMPLE

**Preview URL format:**
- `https://d56f0732.muonnoi.pages.dev` (commit hash: d56f0732)
- `https://abc12345.muonnoi.pages.dev` (commit hash: abc12345)

**Production URL:**
- `https://www.muonnoi.org`

---

## 5. AUTOMATION RULES

**Lint:**
```bash
npm run lint
```

**Typecheck:**
```bash
npm run typecheck
```

**Build:**
```bash
npm run build
```

**Verify build output:**
```bash
ls -la apps/web/public
```

---

## 6. SECURITY RULES

**CSP (Content Security Policy):**
- Thiết lập trong `_headers` file
- Thiết lập trong Cloudflare Pages dashboard

**Security Headers:**
- X-Content-Type-Options
- X-Frame-Options
- Referrer-Policy
- Permissions-Policy
- Strict-Transport-Security
- Content-Security-Policy

---

## 7. TEST STAGING ENVIRONMENT

**Test deploy homepage:**
```bash
git checkout -b test-staging
git add .
git commit -m "test: staging environment"
git push origin test-staging
```

**Verify preview URL:**
```bash
curl https://<commit-hash>.muonnoi.pages.dev
```

**Verify production URL:**
```bash
curl https://www.muonnoi.org
```

---

## 8. EVIDENCE

**Staging environment evidence:**
- [ ] Preview URL live
- [ ] Preview URL accessible
- [ ] Preview URL different from production
- [ ] Preview URL deploy automatically
- [ ] Founder can review staging

**Automation rules evidence:**
- [ ] Lint script exists
- [ ] Typecheck script exists
- [ ] Build script exists
- [ ] Build output verified

**Security rules evidence:**
- [ ] CSP headers configured
- [ ] Security headers configured
- [ ] Headers verified with curl -I

---

## 9. STATUS

**Staging environment:** ✅ Cloudflare Pages Preview Deployments (built-in)
**Automation rules:** ⏳ Cần setup
**Security rules:** ⏳ Cần setup
**Test staging:** ⏳ Cần test

---

**Staging environment setup complete.**
**Cloudflare Pages Preview Deployments built-in.**
**Cần setup automation rules + security rules.**
