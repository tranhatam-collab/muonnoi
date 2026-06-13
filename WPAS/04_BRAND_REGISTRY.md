# BRAND REGISTRY
# BRAND REGISTRY

**System:** Website Production Acceptance System (WPAS)
**Version:** 1.0
**Created:** 2026-06-08
**Scope:** Toàn bộ hệ sinh thái website

---

## Mục tiêu

Registry mỗi website với brand standard riêng.

---

## Registry Table

| Site | Canonical Domain | UI Brand Label | Legal Label | Logo Source | Color Token File | Typo Token File | Owner | Status |
|------|------------------|---------------|-------------|-------------|------------------|-----------------|-------|--------|
| Tranhatam.com | tranhatam.com | Trần Hà Tâm | Trần Hà Tâm | /brand/tranhatam/logo-primary.svg | /brand/tranhatam/colors.json | /brand/tranhatam/typography.json | [Owner] | ACTIVE |
| Vetuonglai.com | vetuonglai.com | Vệ Tương Lai | Vệ Tương Lai | /brand/vetuonglai/logo-primary.svg | /brand/vetuonglai/colors.json | /brand/vetuonglai/typography.json | [Owner] | ACTIVE |
| Computer.iai.one | computer.iai.one | Computer.IAI.One | computer.iai.one | /brand/computer/logo-primary.svg | /brand/computer/colors.json | /brand/computer/typography.json | [Owner] | ACTIVE |
| AIagent.iai.one | aiagent.iai.one | AI Agent | aiagent.iai.one | /brand/aiagent/logo-primary.svg | /brand/aiagent/colors.json | /brand/aiagent/typography.json | [Owner] | ACTIVE |
| Maytinhai.org | maytinhai.org | Máy Tính AI | maytinhai.org | /brand/maytinhai/logo-primary.svg | /brand/maytinhai/colors.json | /brand/maytinhai/typography.json | [Owner] | ACTIVE |
| AIAccountingLoop.com | aiaccountingloop.com | AI Accounting Loop | AI Accounting Loop | /brand/aiaccountingloop/logo-primary.svg | /brand/aiaccountingloop/colors.json | /brand/aiaccountingloop/typography.json | [Owner] | ACTIVE |
| Omdala.com | omdala.com | Omdala | omdala.com | /brand/omdala/logo-primary.svg | /brand/omdala/colors.json | /brand/omdala/typography.json | [Owner] | ACTIVE |
| Muonnoi.org | muonnoi.org | Muốn Nói | muonnoi.org | /brand/muonnoi/logo-primary.svg | /brand/muonnoi/colors.json | /brand/muonnoi/typography.json | [Owner] | ACTIVE |
| Duongsaotoasang.com | duongsaotoasang.com | Đường Sáo Tỏa Sáng | Đường Sáo Tỏa Sáng | /brand/duongsaotoasang/logo-primary.svg | /brand/duongsaotoasang/colors.json | /brand/duongsaotoasang/typography.json | [Owner] | ACTIVE |
| Nguyenlananh.com | nguyenlananh.com | Nguyễn Lan Anh | Nguyễn Lan Anh | /brand/nguyenlananh/logo-primary.svg | /brand/nguyenlananh/colors.json | /brand/nguyenlananh/typography.json | [Owner] | ACTIVE |
| Nhachung.org | nhachung.org | Nhà Chung | nhachung.org | /brand/nhachung/logo-primary.svg | /brand/nhachung/colors.json | /brand/nhachung/typography.json | [Owner] | ACTIVE |

---

## Field Definitions

### Canonical Domain
- Domain chuẩn cho website
- Không được có variant khác
- Phải consistent với robots.txt, sitemap.xml, canonical URL

### UI Brand Label
- Tên thương hiệu hiển thị trong UI
- Có thể khác domain (ví dụ: Computer.IAI.One vs computer.iai.one)
- Phải consistent với BRAND_CODEX

### Legal Label
- Tên thương hiệu dùng trong legal documents
- Phải consistent với entity name
- Phải consistent với invoice, receipt

### Logo Source
- Path canonical đến logo SVG
- Phải tồn tại trong /brand/<site>/
- Phải có version và checksum

### Color Token File
- Path đến color tokens JSON
- Phải consistent với DESIGN_TOKENS
- Phải có hex codes cho tất cả colors

### Typo Token File
- Path đến typography tokens JSON
- Phải consistent với DESIGN_TOKENS
- Phải có font family, sizes, weights

### Owner
- Người chịu trách nhiệm cho brand
- Phải duyệt mọi thay đổi brand

### Status
- ACTIVE: Website đang production
- STAGING: Website đang staging
- DEVELOPMENT: Website đang development
- ARCHIVED: Website đã archive

---

## Subdomain Inheritance Rules

### Root Domain
- Root domain = canonical parent brand
- Subdomain inherit brand family từ root

### Allowed Inheritance
Subdomain có thể inherit:
- Logo family
- Color family
- Typography family

### Allowed Override
Subdomain có thể override:
- Utility navigation
- Density
- Dashboard surfaces
- Admin colors
- App shell layout

### Forbidden Override
Subdomain không được override:
- Domain spelling
- Canonical logo source
- Legal entity naming
- Core brand tokens nếu chưa có phê duyệt

---

## Update Rules

### Brand Changes
- Mọi thay đổi brand phải được Owner duyệt
- Phải update Brand Registry
- Phải update asset checksums
- Phải notify tất cả stakeholders

### New Website
- Phải thêm vào Brand Registry
- Phải tạo brand assets
- Phải tạo token files
- Phải assign Owner

---

## Authority

**Nguồn chân lý:** `/WPAS/04_BRAND_REGISTRY.md`
**Mọi brand change phải update registry.**
**Không được deploy nếu registry không updated.**
