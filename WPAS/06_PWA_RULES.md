# P6 — PWA AUDIT
# P6 — PWA AUDIT

**System:** Website Production Acceptance System (WPAS)
**Version:** 1.0
**Created:** 2026-06-08
**Scope:** Toàn bộ hệ sinh thái website

---

## Mục tiêu

Kiểm tra PWA (Progressive Web App) để đảm bảo:
- Manifest đúng
- Service worker hoạt động
- Offline page có
- Install prompt hoạt động
- Splash screen có
- Icon sizes đầy đủ

---

## Manifest Rules

### Quy tắc bắt buộc

**Manifest phải có:**
- ✅ name
- ✅ short_name
- ✅ description
- ✅ start_url
- ✅ display (standalone hoặc fullscreen)
- ✅ background_color
- ✅ theme_color
- ✅ icons (multiple sizes)

**Kiểm tra:**
- ✅ File manifest.webmanifest tồn tại
- ✅ Link tag trong HTML: `<link rel="manifest" href="/manifest.webmanifest">`
- ✅ JSON valid
- ✅ Tất cả fields bắt buộc có

**Ví dụ FAIL:**
- Manifest không có
- Manifest thiếu fields
- Manifest JSON invalid

**Ví dụ PASS:**
- Manifest đầy đủ
- JSON valid
- Link tag đúng

---

## Icon Sizes

### Quy tắc bắt buộc

**Icon phải có đủ sizes:**
- 72x72
- 96x96
- 128x128
- 144x144
- 152x152
- 192x192
- 384x384
- 512x512

**Kiểm tra:**
- ✅ Tất cả sizes có
- ✅ Icon quality tốt
- ✅ Icon consistent với brand

**Ví dụ FAIL:**
- Thiếu sizes
- Icon quality kém
- Icon không consistent

**Ví dụ PASS:**
- Đủ sizes
- Icon quality tốt
- Icon consistent

---

## Service Worker Rules

### Quy tắc bắt buộc

**Service worker phải:**
- ✅ Đăng ký đúng
- ✅ Cache assets
- ✅ Offline fallback
- ✅ Update strategy đúng

**Kiểm tra:**
- ✅ File sw.js tồn tại
- ✅ Service worker đăng ký trong HTML
- ✅ Service worker hoạt động
- ✅ Cache strategy đúng

**Ví dụ FAIL:**
- Service worker không có
- Service worker không đăng ký
- Service worker không hoạt động
- Cache strategy sai

**Ví dụ PASS:**
- Service worker có
- Service worker đăng ký
- Service worker hoạt động
- Cache strategy đúng

---

## Offline Page

### Quy tắc bắt buộc

**Offline page phải:**
- ✅ Tồn tại
- ✅ Thông báo offline rõ ràng
- ✅ Brand consistent
- ✅ CTA để retry

**Kiểm tra:**
- ✅ Offline page có
- ✅ Thông báo rõ ràng
- ✅ Brand consistent
- ✅ Retry button hoạt động

**Ví dụ FAIL:**
- Offline page không có
- Thông báo không rõ
- Brand không consistent

**Ví dụ PASS:**
- Offline page có
- Thông báo rõ ràng
- Brand consistent
- Retry hoạt động

---

## Install Prompt

### Quy tắc bắt buộc

**Install prompt phải:**
- ✅ Hoạt động (trên browser hỗ trợ)
- ✅ Icon đúng
- ✅ Name đúng
- ✅ Description đúng

**Kiểm tra:**
- ✅ Install prompt hoạt động
- ✅ Icon đúng
- ✅ Name đúng
- ✅ Description đúng

**Ví dụ FAIL:**
- Install prompt không hoạt động
- Icon sai
- Name sai

**Ví dụ PASS:**
- Install prompt hoạt động
- Icon đúng
- Name đúng
- Description đúng

---

## Splash Screen

### Quy tắc bắt buộc

**Splash screen phải:**
- ✅ Có (nếu có install prompt)
- ✅ Icon đúng
- ✅ Background color đúng
- ✅ Brand consistent

**Kiểm tra:**
- ✅ Splash screen có
- ✅ Icon đúng
- ✅ Background color đúng
- ✅ Brand consistent

**Ví dụ FAIL:**
- Splash screen không có
- Icon sai
- Background color sai

**Ví dụ PASS:**
- Splash screen có
- Icon đúng
- Background color đúng
- Brand consistent

---

## Checklist P6

### Manifest
- [ ] manifest.webmanifest tồn tại
- [ ] Link tag trong HTML
- [ ] JSON valid
- [ ] Tất cả fields bắt buộc có

### Icons
- [ ] 72x72 icon
- [ ] 96x96 icon
- [ ] 128x128 icon
- [ ] 144x144 icon
- [ ] 152x152 icon
- [ ] 192x192 icon
- [ ] 384x384 icon
- [ ] 512x512 icon
- [ ] Icon quality tốt
- [ ] Icon consistent

### Service Worker
- [ ] sw.js tồn tại
- [ ] Service worker đăng ký
- [ ] Service worker hoạt động
- [ ] Cache strategy đúng

### Offline
- [ ] Offline page có
- [ ] Thông báo rõ ràng
- [ ] Brand consistent
- [ ] Retry hoạt động

### Install
- [ ] Install prompt hoạt động
- [ ] Icon đúng
- [ ] Name đúng
- [ ] Description đúng

### Splash Screen
- [ ] Splash screen có
- [ ] Icon đúng
- [ ] Background color đúng
- [ ] Brand consistent

---

## Fail Criteria

**FAIL nếu:**
- Manifest không có hoặc thiếu fields
- Thiếu icon sizes
- Service worker không hoạt động
- Offline page không có
- Install prompt không hoạt động
- Splash screen không có

**PASS nếu:**
- Manifest đầy đủ
- Đủ icon sizes
- Service worker hoạt động
- Offline page có
- Install prompt hoạt động
- Splash screen có

---

## Authority

**Nguồn chân lý:** `/WPAS/06_PWA_RULES.md`
**Mọi dev, QA phải tuân thủ.**
**Không được deploy nếu PWA không pass.**
