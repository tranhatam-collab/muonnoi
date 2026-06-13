# SECURITY RULES SETUP
# Security headers cho WPAS

> **Ngày:** 2026-06-13
> **Project:** Muôn Nơi
> **Scope:** Toàn bộ hệ sinh thái website

---

## 1. SECURITY HEADERS

**Required headers:**
- X-Content-Type-Options
- X-Frame-Options
- Referrer-Policy
- Permissions-Policy
- Strict-Transport-Security
- Content-Security-Policy

---

## 2. CLOUDFLARE PAGES HEADERS

**Tạo `_headers` file trong `apps/web/public/`:**

```txt
/*
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
  Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net; img-src 'self' data: https:; font-src 'self' https://cdn.jsdelivr.net; connect-src 'self' https://*.muonnoi.org https://mail.iai.one; frame-ancestors 'none'; base-uri 'self'; form-action 'self'
```

---

## 3. CLOUDFLARE PAGES DASHBOARD

**Setup headers trong Cloudflare Pages dashboard:**
1. Go to Cloudflare Pages dashboard
2. Select project `muonnoi`
3. Go to Settings → Headers
4. Add headers above

---

## 4. VERIFY HEADERS

**Verify headers với curl:**
```bash
curl -I https://www.muonnoi.org
```

**Expected output:**
```
HTTP/2 200
content-type: text/html;charset=utf-8
x-content-type-options: nosniff
x-frame-options: DENY
referrer-policy: strict-origin-when-cross-origin
permissions-policy: camera=(), microphone=(), geolocation=()
strict-transport-security: max-age=31536000; includeSubDomains; preload
content-security-policy: default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net; img-src 'self' data: https:; font-src 'self' https://cdn.jsdelivr.net; connect-src 'self' https://*.muonnoi.org https://mail.iai.one; frame-ancestors 'none'; base-uri 'self'; form-action 'self'
```

---

## 5. EVIDENCE

**Security rules evidence:**
- [ ] _headers file created
- [ ] Headers configured in Cloudflare Pages dashboard
- [ ] Headers verified with curl -I
- [ ] All required headers present
- [ ] CSP policy configured
- [ ] HSTS configured

---

## 6. STATUS

**Security rules:** ⏳ Cần tạo _headers file
**Headers:** ⏳ Cần configure trong Cloudflare Pages dashboard
**Verification:** ⏳ Cần verify với curl -I

---

**Security rules setup pending.**
**Cần tạo _headers file.**
