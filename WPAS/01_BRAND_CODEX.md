# P0 — BRAND CONSISTENCY AUDIT
# P0 — BRAND CONSISTENCY AUDIT

**System:** Website Production Acceptance System (WPAS)
**Version:** 1.0
**Created:** 2026-06-08
**Scope:** Toàn bộ hệ sinh thái website

---

## Mục tiêu

Đảm bảo nhận diện thương hiệu đồng nhất 100% trên toàn bộ hệ sinh thái:
- Tranhatam.com
- Vetuonglai.com
- Computer.iai.one
- AIagent.iai.one
- Maytinhai.org
- AIAccountingLoop.com
- Omdala.com
- Muonnoi.org
- Duongsaotoasang.com
- Nguyenlananh.com
- Nhachung.org
- Và mọi website sau này

---

## Domain Consistency

### Quy tắc

**Domain phải đúng chuẩn:**

| Website | Domain chuẩn | KHÔNG ĐƯỢC |
|---------|-------------|------------|
| Computer.iai.one | computer.iai.one | Computer IAI, ComputerAI, Computer IAI One |
| Vetuonglai.com | vetuonglai.com | Ve Tuong Lai, vetuong-lai.com |
| Maytinhai.org | maytinhai.org | Máy Tính AI, maytinhai.ai |
| Tranhatam.com | tranhatam.com | tran-hatam.com, tranhatam.vn |

**Kiểm tra:**
- ✅ URL chính xác
- ✅ Canonical URL đúng
- ✅ Sitemap đúng domain
- ✅ Robots.txt đúng domain
- ✅ OG:URL đúng domain

---

## Logo Consistency

### Quy tắc

Logo phải đồng nhất trên toàn bộ touchpoints:

**Touchpoints bắt buộc:**
- Header (desktop + mobile)
- Footer
- OG Image (Open Graph)
- Twitter Card Image
- Manifest (PWA)
- PWA Icon (192x192, 512x512)
- Favicons (16x16, 32x32, 180x180)
- Email Templates
- PDF Export
- Invoice
- Receipt

**Kiểm tra:**
- ✅ Cùng file SVG gốc
- ✅ Cùng màu sắc (hex code)
- ✅ C cùng tỷ lệ
- ✅ Cùng spacing
- ✅ Cùng variant (không mix version)

---

## Brand Name Consistency

### Quy tắc

Tên thương hiệu phải có 1 chuẩn duy nhất.

**Ví dụ sai:**
- Computer.IAI.One
- Computer IAI One
- Computer.iai.one
- computer.iai.one

**Ví dụ đúng:**
- Chọn 1 chuẩn duy nhất và dùng toàn hệ thống

**Quy tắc đặt tên:**
1. Chọn 1 chuẩn (case, spacing, punctuation)
2. Document trong BRAND_CODEX
3. Apply toàn hệ thống
4. Không dev tự sáng tác

---

## Color Consistency

### Quy tắc

Màu thương hiệu phải đồng nhất.

**Bắt buộc:**
- Primary color (hex code)
- Secondary color (hex code)
- Accent color (hex code)
- Background colors
- Text colors
- Border colors

**Kiểm tra:**
- ✅ CSS variables
- ✅ Tailwind config
- ✅ Design tokens
- ✅ Brand assets

---

## Typography Consistency

### Quy tắc

Font chữ phải đồng nhất.

**Bắt buộc:**
- Font family
- Font weights
- Font sizes (H1, H2, H3, body, small)
- Line heights
- Letter spacing

**Kiểm tra:**
- ✅ CSS font-family
- ✅ Design system
- ✅ Components

---

## Checklist P0

### Domain
- [ ] URL chính xác
- [ ] Canonical URL đúng
- [ ] Sitemap đúng domain
- [ ] Robots.txt đúng domain
- [ ] OG:URL đúng domain

### Logo
- [ ] Header logo đúng
- [ ] Footer logo đúng
- [ ] OG image đúng
- [ ] PWA icon đúng
- [ ] Favicon đúng
- [ ] Email template logo đúng
- [ ] PDF export logo đúng

### Brand Name
- [ ] Tên thương hiệu đúng chuẩn
- [ ] Không có variant khác
- [ ] Document trong BRAND_CODEX

### Color
- [ ] Primary color đúng hex
- [ ] Secondary color đúng hex
- [ ] Accent color đúng hex
- [ ] Background colors đúng
- [ ] Text colors đúng

### Typography
- [ ] Font family đúng
- [ ] Font weights đúng
- [ ] Font sizes đúng
- [ ] Line heights đúng

---

## Fail Criteria

**FAIL nếu:**
- Domain sai
- Logo khác touchpoint
- Tên thương hiệu không đồng nhất
- Màu không đúng hex code
- Font không đúng family

**PASS nếu:**
- Tất cả checklist ✅
- Không có fail criteria

---

## Authority

**Nguồn chân lý:** `/WPAS/01_BRAND_CODEX.md`
**Mọi dev, AI agent, content writer phải tuân thủ.**
**Không được tự sáng tác, tự thay đổi.**
