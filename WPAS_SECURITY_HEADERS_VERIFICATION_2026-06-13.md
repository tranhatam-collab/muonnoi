# SECURITY HEADERS VERIFICATION
# Verify security headers cho WPAS

> **Ngày:** 2026-06-13
> **Project:** Muôn Nơi
> **URL:** https://www.muonnoi.org

---

## 1. CURRENT HEADERS

**curl -I https://www.muonnoi.org output:**
```
HTTP/2 200
date: Sat, 13 Jun 2026 16:11:27 GMT
content-type: text/html; charset=utf-8
access-control-allow-origin: *
cache-control: no-store
strict-transport-security: max-age=31536000; includeSubDomains; preload
content-security-policy: default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'none'; form-action 'self'; img-src 'self' data:; font-src 'self' data:; style-src 'self'; script-src 'self'; connect-src 'self' https://api.muonnoi.org; manifest-src 'self'; worker-src 'self'; upgrade-insecure-requests
cross-origin-embedder-policy: require-corp
cross-origin-opener-policy: same-origin
cross-origin-resource-policy: same-origin
permissions-policy: accelerometer=(), autoplay=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()
referrer-policy: no-referrer
x-content-type-options: nosniff
x-frame-options: DENY
```

---

## 2. REQUIRED HEADERS CHECKLIST

| Header | Required | Current | Status |
|--------|----------|---------|--------|
| X-Content-Type-Options | nosniff | nosniff | ✅ |
| X-Frame-Options | DENY | DENY | ✅ |
| Referrer-Policy | strict-origin-when-cross-origin | no-referrer | ❌ |
| Permissions-Policy | camera=(), microphone=(), geolocation=() | accelerometer=(), autoplay=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=() | ✅ (more strict) |
| Strict-Transport-Security | max-age=31536000; includeSubDomains; preload | max-age=31536000; includeSubDomains; preload | ✅ |
| Content-Security-Policy | default-src 'self' + cdn.jsdelivr.net | default-src 'self' (no cdn.jsdelivr.net) | ❌ |

---

## 3. ISSUES

**Issue 1: Referrer-Policy**
- Current: no-referrer
- Required: strict-origin-when-cross-origin
- Action: Update _headers file

**Issue 2: Content-Security-Policy**
- Current: default-src 'self' (no cdn.jsdelivr.net)
- Required: default-src 'self' + cdn.jsdelivr.net
- Action: Update _headers file

---

## 4. FIX

**Update _headers file:**
- Change Referrer-Policy: no-referrer → strict-origin-when-cross-origin
- Add cdn.jsdelivr.net to CSP (img-src, font-src, style-src, script-src)

**Deploy again:**
- Commit changes
- Push to origin/main
- Cloudflare Pages auto-deploy
- Verify headers again

---

## 5. EVIDENCE

**Security headers evidence:**
- [x] _headers file exists
- [x] Headers configured
- [x] Headers verified with curl -I
- [x] Most required headers present
- [ ] Referrer-Policy needs fix
- [ ] CSP needs fix
- [ ] Deploy again to apply fixes

---

## 6. STATUS

**Security rules:** ⏳ Partially complete
**Headers:** ⏳ Need fix (Referrer-Policy + CSP)
**Verification:** ⏳ Need redeploy + verify

---

**Security headers partially complete.**
**Need fix Referrer-Policy + CSP.**
**Need redeploy to apply fixes.**
