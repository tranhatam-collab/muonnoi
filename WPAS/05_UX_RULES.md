# P5 — UX AUDIT
# P5 — UX AUDIT

**System:** Website Production Acceptance System (WPAS)
**Version:** 1.0
**Created:** 2026-06-08
**Scope:** Toàn bộ hệ sinh thái website

---

## Mục tiêu

Kiểm tra UX trên tất cả breakpoints để đảm bảo:
- Mobile (390px, 430px)
- Tablet (768px, 1024px)
- Desktop (1440px, 1920px)

Không được:
- Text tràn
- Button lệch
- Scroll ngang
- Menu lỗi

---

## Breakpoints

### Quy tắc bắt buộc

**Kiểm tra tất cả breakpoints:**
- 390px (iPhone SE)
- 430px (iPhone 14 Pro Max)
- 768px (iPad)
- 1024px (iPad Pro)
- 1440px (Desktop 1080p)
- 1920px (Desktop 1440p)

---

## Mobile UX Rules

### Text

**Quy tắc:** Text không được tràn.

**Kiểm tra:**
- ✅ H1, H2, H3 không tràn
- ✅ Body text không tràn
- ✅ Button text không tràn
- ✅ Form labels không tràn
- ✅ Card titles không tràn

**Ví dụ FAIL:**
- H1 quá dài, tràn ra ngoài màn hình
- Button text bị cắt

**Ví dụ PASS:**
- Text wrap đúng
- Font size phù hợp mobile

### Buttons

**Quy tắc:** Button phải dễ tap (min 44px height).

**Kiểm tra:**
- ✅ Button height ≥ 44px
- ✅ Button padding đủ
- ✅ Button không quá gần nhau
- ✅ Button full-width trên mobile (nếu cần)

**Ví dụ FAIL:**
- Button quá nhỏ (< 44px)
- Button quá gần nhau (hard to tap)

**Ví dụ PASS:**
- Button height 44-48px
- Button padding 12-16px
- Button spacing 8-12px

### Navigation

**Quy tắc:** Navigation phải dễ dùng trên mobile.

**Kiểm tra:**
- ✅ Hamburger menu hoạt động
- ✅ Menu drawer dễ đóng/mở
- ✅ Menu items dễ tap
- ✅ Back button hoạt động

**Ví dụ FAIL:**
- Menu không responsive
- Menu items quá nhỏ
- Menu không đóng được

**Ví dụ PASS:**
- Hamburger menu hoạt động
- Menu items dễ tap
- Menu dễ đóng/mở

### Forms

**Quy tắc:** Form phải dễ điền trên mobile.

**Kiểm tra:**
- ✅ Input height ≥ 44px
- ✅ Input padding đủ
- ✅ Labels rõ ràng
- ✅ Error messages rõ ràng
- ✅ Submit button dễ tap

**Ví dụ FAIL:**
- Input quá nhỏ
- Labels không rõ
- Error messages không rõ

**Ví dụ PASS:**
- Input height 44-48px
- Labels rõ ràng
- Error messages rõ ràng

---

## Tablet UX Rules

### Layout

**Quy tắc:** Layout phải phù hợp tablet.

**Kiểm tra:**
- ✅ Grid layout 2-column (nếu cần)
- ✅ Sidebar không chiếm quá nhiều space
- ✅ Content không quá rộng
- ✅ Navigation dễ dùng

**Ví dụ FAIL:**
- Layout quá rộng cho tablet
- Sidebar chiếm quá nhiều space
- Navigation không responsive

**Ví dụ PASS:**
- Grid layout 2-column
- Sidebar phù hợp
- Navigation responsive

---

## Desktop UX Rules

### Layout

**Quy tắc:** Layout phải phù hợp desktop.

**Kiểm tra:**
- ✅ Max-width container
- ✅ Content không quá rộng
- ✅ Navigation dễ dùng
- ✅ Hover states hoạt động

**Ví dụ FAIL:**
- Content quá rộng (hard to read)
- Navigation không responsive
- Hover states không hoạt động

**Ví dụ PASS:**
- Max-width 1200-1400px
- Content dễ đọc
- Navigation dễ dùng

---

## Common UX Issues

### Scroll Ngang

**Quy tắc:** Không được scroll ngang.

**Kiểm tra:**
- ✅ Không có scroll ngang trên mobile
- ✅ Không có scroll ngang trên tablet
- ✅ Không có scroll ngang trên desktop (trừ khi cần thiết)

**Ví dụ FAIL:**
- Content tràn ra ngoài, gây scroll ngang

**Ví dụ PASS:**
- Content wrap đúng
- Không scroll ngang

### Button Lệch

**Quy tắc:** Button phải align đúng.

**Kiểm tra:**
- ✅ Button align center/left/right đúng
- ✅ Button không lệch khỏi container
- ✅ Button spacing đều

**Ví dụ FAIL:**
- Button lệch khỏi container
- Button spacing không đều

**Ví dụ PASS:**
- Button align đúng
- Button spacing đều

### Menu Lỗi

**Quy tắc:** Menu phải hoạt động đúng.

**Kiểm tra:**
- ✅ Hamburger menu hoạt động
- ✅ Dropdown menu hoạt động
- ✅ Menu items dễ click/tap
- ✅ Menu đóng đúng

**Ví dụ FAIL:**
- Menu không hoạt động
- Menu không đóng
- Menu items không hoạt động

**Ví dụ PASS:**
- Menu hoạt động đúng
- Menu dễ dùng

---

## Checklist P5

### Mobile (390px, 430px)
- [ ] Text không tràn
- [ ] Button height ≥ 44px
- [ ] Navigation hoạt động
- [ ] Form dễ điền
- [ ] Không scroll ngang

### Tablet (768px, 1024px)
- [ ] Layout phù hợp
- [ ] Grid layout 2-column
- [ ] Navigation responsive
- [ ] Content không quá rộng

### Desktop (1440px, 1920px)
- [ ] Max-width container
- [ ] Content dễ đọc
- [ ] Navigation dễ dùng
- [ ] Hover states hoạt động

### Common Issues
- [ ] Không scroll ngang
- [ ] Button align đúng
- [ ] Menu hoạt động đúng

---

## Fail Criteria

**FAIL nếu:**
- Text tràn trên bất kỳ breakpoint
- Button < 44px trên mobile
- Navigation không hoạt động
- Có scroll ngang
- Button lệch
- Menu lỗi

**PASS nếu:**
- Tất cả breakpoints kiểm tra
- Text không tràn
- Button ≥ 44px trên mobile
- Navigation hoạt động
- Không scroll ngang
- Button align đúng
- Menu hoạt động

---

## Authority

**Nguồn chân lý:** `/WPAS/05_UX_RULES.md`
**Mọi designer, dev, QA phải tuân thủ.**
**Không được deploy nếu UX không pass.**
