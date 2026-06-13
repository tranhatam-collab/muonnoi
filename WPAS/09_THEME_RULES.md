# THEME / LIGHT-DARK MODE RULES
# THEME / LIGHT-DARK MODE RULES

**System:** Website Production Acceptance System (WPAS)
**Version:** 1.0
**Created:** 2026-06-08
**Scope:** Toàn bộ hệ sinh thái website

---

## Mục tiêu

Tất cả website, dự án và sau này đều áp dụng 3 lựa chọn theme:
- **Sáng (Light)**
- **Tối (Dark)**
- **Tự động (Auto)** - theo hệ thống người dùng đang dùng

---

## Quy tắc cốt lõi

### 1. Bắt buộc 3 lựa chọn

**Mọi website phải có 3 chế độ:**
- ✅ Light Mode (Sáng)
- ✅ Dark Mode (Tối)
- ✅ Auto Mode (Tự động theo hệ thống)

**Không được:**
- ❌ Chỉ có Light Mode
- ❌ Chỉ có Dark Mode
- ❌ Chỉ có Auto Mode
- ❌ Tự ý thêm chế độ khác

---

### 2. Giữ nguyên màu sắc người dùng

**Quy tắc:** Màu sắc của người dùng vẫn giữ nguyên, chỉ điều chỉnh cho khớp với chiều chế độ.

**Ví dụ:**
- Nếu người dùng chọn Light Mode → giao diện luôn sáng
- Nếu người dùng chọn Dark Mode → giao diện luôn tối
- Nếu người dùng chọn Auto Mode → theo hệ thống (sáng/tối theo OS)

**Không được:**
- ❌ Bắt buộc người dùng dùng chế độ cụ thể
- ❌ Ignore preference của người dùng
- ❌ Tự động đổi chế độ khi người dùng không muốn

---

### 3. Đồng bộ trong mọi giao diện

**Quy tắc:** Bắt buộc đồng bộ trong mọi giao diện trang, bất cứ đang nằm ở đâu đều có nút lựa chọn.

**Touchpoints bắt buộc:**
- ✅ Header (desktop + mobile)
- ✅ Footer
- ✅ Settings/Preferences (nếu có)
- ✅ Dashboard (nếu có)
- ✅ App shell (nếu có app)

**Ví dụ FAIL:**
- Chỉ có ở header, không có ở footer
- Chỉ có ở desktop, không có ở mobile
- Chỉ có ở settings, không có ở trang chính

**Ví dụ PASS:**
- Có ở header, footer, settings
- Có ở cả desktop và mobile
- Dễ tìm, dễ dùng

---

### 4. Vị trí nút lựa chọn

**Quy tắc:** Nút lựa chọn theme phải dễ tìm và dễ dùng.

**Vị trí khuyến nghị:**
- Header: Icon sun/moon/auto
- Footer: Link "Theme" hoặc icon
- Settings: Dropdown hoặc toggle

**Ví dụ FAIL:**
- Nút ẩn sâu trong menu
- Nút không rõ chức năng
- Nút không có icon

**Ví dụ PASS:**
- Icon rõ ràng (sun/moon/auto)
- Dễ tìm
- Tooltip rõ ràng

---

### 5. Lưu preference của người dùng

**Quy tắc:** Preference của người dùng phải được lưu và áp dụng khi quay lại.

**Lưu trữ:**
- ✅ LocalStorage (web)
- ✅ Cookie (web)
- ✅ User preference (nếu có account)

**Kiểm tra:**
- ✅ Người dùng chọn Light →下次访问 vẫn Light
- ✅ Người dùng chọn Dark →下次访问 vẫn Dark
- ✅ Người dùng chọn Auto →下次访问 vẫn Auto

**Ví dụ FAIL:**
- Preference không được lưu
- Preference bị reset khi reload
- Preference không được áp dụng

**Ví dụ PASS:**
- Preference được lưu
- Preference được áp dụng khi quay lại
- Preference consistent

---

## Implementation Rules

### CSS Variables

**Quy tắc:** Dùng CSS variables để quản lý theme.

**Ví dụ:**
```css
:root {
  --bg-primary: #ffffff;
  --text-primary: #000000;
  --accent: #0066cc;
}

[data-theme="dark"] {
  --bg-primary: #000000;
  --text-primary: #ffffff;
  --accent: #4da6ff;
}

@media (prefers-color-scheme: dark) {
  :root[data-theme="auto"] {
    --bg-primary: #000000;
    --text-primary: #ffffff;
    --accent: #4da6ff;
  }
}
```

### JavaScript Logic

**Quy tắc:** JavaScript phải xử lý 3 chế độ đúng.

**Ví dụ:**
```javascript
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

function initTheme() {
  const saved = localStorage.getItem('theme') || 'auto';
  setTheme(saved);
}
```

### Accessibility

**Quy tắc:** Theme phải accessible.

**Kiểm tra:**
- ✅ Contrast ratio ≥ 4.5:1 (WCAG AA)
- ✅ Focus states rõ ràng trong cả 2 chế độ
- ✅ Text dễ đọc trong cả 2 chế độ
- ✅ Icon dễ thấy trong cả 2 chế độ

---

## Checklist Theme Rules

### 3 Chế độ
- [ ] Light Mode có
- [ ] Dark Mode có
- [ ] Auto Mode có
- [ ] Không có chế độ khác

### Đồng bộ
- [ ] Có ở header (desktop + mobile)
- [ ] Có ở footer
- [ ] Có ở settings (nếu có)
- [ ] Có ở dashboard (nếu có)

### Vị trí
- [ ] Nút dễ tìm
- [ ] Icon rõ ràng
- [ ] Tooltip rõ ràng

### Lưu preference
- [ ] Preference được lưu (LocalStorage/Cookie)
- [ ] Preference được áp dụng khi quay lại
- [ ] Preference consistent

### Implementation
- [ ] CSS variables đúng
- [ ] JavaScript logic đúng
- [ ] Accessibility (contrast ≥ 4.5:1)

---

## Fail Criteria

**FAIL nếu:**
- Chỉ có 1 hoặc 2 chế độ
- Không có ở tất cả touchpoints
- Preference không được lưu
- Contrast ratio < 4.5:1
- Implementation sai

**PASS nếu:**
- Có 3 chế độ (Light, Dark, Auto)
- Đồng bộ ở tất cả touchpoints
- Preference được lưu và áp dụng
- Contrast ratio ≥ 4.5:1
- Implementation đúng

---

## Severity

### P0 Blocker — Không được deploy
- Chỉ có 1 chế độ
- Không có nút lựa chọn
- Preference không được lưu

### P1 Major — Phải sửa trước release
- Không đồng bộ ở tất cả touchpoints
- Contrast ratio < 4.5:1
- Implementation sai

### P2 Minor — Có thể sửa sau release
- Icon không rõ ràng
- Tooltip không rõ ràng
- UX không tối ưu

---

## Authority

**Nguồn chân lý:** `/WPAS/09_THEME_RULES.md`
**Mọi designer, dev, QA phải tuân thủ.**
**Không được deploy nếu theme rules không pass.**
