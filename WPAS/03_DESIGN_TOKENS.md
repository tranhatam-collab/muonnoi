# DESIGN TOKENS STANDARD
# DESIGN TOKENS STANDARD

**System:** Website Production Acceptance System (WPAS)
**Version:** 1.0
**Created:** 2026-06-08
**Scope:** Toàn bộ hệ sinh thái website

---

## Mục tiêu

Định nghĩa design tokens chuẩn cho toàn hệ sinh thái để đảm bảo consistency.

---

## Color Tokens

### Brand Colors

| Token | Hex | Usage | WCAG Rule |
|-------|-----|-------|-----------|
| --brand-primary | #0066cc | CTA / active states | Min contrast 4.5:1 on light bg |
| --brand-secondary | #004499 | Secondary actions | Min contrast 4.5:1 on light bg |
| --brand-accent | #ff6600 | Highlight only | Không dùng cho body text |

### Semantic Colors

| Token | Hex | Usage | WCAG Rule |
|-------|-----|-------|-----------|
| --success | #22c55e | Success states | Min contrast 4.5:1 |
| --warning | #f59e0b | Warning states | Min contrast 4.5:1 |
| --danger | #ef4444 | Destructive only | Min contrast 4.5:1 |
| --info | #3b82f6 | Information only | Min contrast 4.5:1 |

### Surface Colors

| Token | Hex | Usage | WCAG Rule |
|-------|-----|-------|-----------|
| --surface-bg | #ffffff | Main background | N/A |
| --surface-bg-alt | #f8f9fa | Alternate background | N/A |
| --surface-bg-dark | #1a1a1a | Dark mode background | N/A |
| --surface-border | #e5e7eb | Borders | N/A |

### Text Colors

| Token | Hex | Usage | WCAG Rule |
|-------|-----|-------|-----------|
| --text-primary | #000000 | Body text | Min contrast 7:1 on light bg |
| --text-secondary | #666666 | Secondary text | Min contrast 4.5:1 on light bg |
| --text-tertiary | #999999 | Tertiary text | Min contrast 3:1 on light bg |
| --text-inverse | #ffffff | Text on dark bg | Min contrast 7:1 on dark bg |

---

## Typography Tokens

### Font Family

| Token | Value | Usage |
|-------|-------|-------|
| --font-family-base | "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif | Body text |
| --font-family-heading | "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif | Headings |
| --font-family-mono | "JetBrains Mono", "Fira Code", monospace | Code |

### Font Sizes

| Token | Desktop | Mobile | Weight | Line-height |
|-------|---------|--------|--------|-------------|
| --text-h1 | 48px | 36px | 700 | 1.1 |
| --text-h2 | 36px | 28px | 700 | 1.15 |
| --text-h3 | 28px | 24px | 600 | 1.2 |
| --text-h4 | 24px | 20px | 600 | 1.25 |
| --text-body | 16px | 16px | 400 | 1.6 |
| --text-small | 14px | 14px | 400 | 1.5 |
| --text-caption | 12px | 12px | 400 | 1.4 |

### Font Weights

| Token | Value | Usage |
|-------|-------|-------|
| --font-weight-light | 300 | Light emphasis |
| --font-weight-regular | 400 | Body text |
| --font-weight-medium | 500 | Medium emphasis |
| --font-weight-semibold | 600 | Subheadings |
| --font-weight-bold | 700 | Headings |

### Line Heights

| Token | Value | Usage |
|-------|-------|-------|
| --line-height-tight | 1.1 | Headings |
| --line-height-normal | 1.5 | Body text |
| --line-height-relaxed | 1.75 | Long text |

### Letter Spacing

| Token | Value | Usage |
|-------|-------|-------|
| --letter-spacing-tight | -0.02em | Headings |
| --letter-spacing-normal | 0em | Body text |
| --letter-spacing-wide | 0.02em | Uppercase text |

---

## Spacing Tokens

| Token | Value | Usage |
|-------|-------|-------|
| --space-xs | 4px | Small gaps |
| --space-sm | 8px | Small spacing |
| --space-md | 16px | Medium spacing |
| --space-lg | 24px | Large spacing |
| --space-xl | 32px | Extra large spacing |
| --space-2xl | 48px | Section spacing |
| --space-3xl | 64px | Page spacing |

---

## Border Radius Tokens

| Token | Value | Usage |
|-------|-------|-------|
| --radius-sm | 4px | Small elements |
| --radius-md | 8px | Buttons, cards |
| --radius-lg | 12px | Large cards |
| --radius-xl | 16px | Modals |
| --radius-full | 9999px | Pills, circles |

---

## Shadow Tokens

| Token | Value | Usage |
|-------|-------|-------|
| --shadow-sm | 0 1px 2px rgba(0,0,0,0.05) | Small elevation |
| --shadow-md | 0 4px 6px rgba(0,0,0,0.1) | Medium elevation |
| --shadow-lg | 0 10px 15px rgba(0,0,0,0.1) | Large elevation |
| --shadow-xl | 0 20px 25px rgba(0,0,0,0.15) | Extra elevation |

---

## Animation Tokens

| Token | Value | Usage |
|-------|-------|-------|
| --duration-fast | 150ms | Quick transitions |
| --duration-normal | 300ms | Normal transitions |
| --duration-slow | 500ms | Slow transitions |
| --ease-in | cubic-bezier(0.4, 0, 1, 1) | Ease in |
| --ease-out | cubic-bezier(0, 0, 0.2, 1) | Ease out |
| --ease-in-out | cubic-bezier(0.4, 0, 0.2, 1) | Ease in-out |

---

## Z-Index Tokens

| Token | Value | Usage |
|-------|-------|-------|
| --z-dropdown | 1000 | Dropdowns |
| --z-sticky | 1020 | Sticky elements |
| --z-fixed | 1030 | Fixed elements |
| --z-modal-backdrop | 1040 | Modal backdrop |
| --z-modal | 1050 | Modal content |
| --z-popover | 1060 | Popovers |
| --z-tooltip | 1070 | Tooltips |

---

## Breakpoint Tokens

| Token | Value | Usage |
|-------|-------|-------|
| --breakpoint-xs | 390px | iPhone SE |
| --breakpoint-sm | 430px | iPhone Pro Max |
| --breakpoint-md | 768px | iPad |
| --breakpoint-lg | 1024px | iPad Pro |
| --breakpoint-xl | 1440px | Desktop 1080p |
| --breakpoint-2xl | 1920px | Desktop 1440p |

---

## Usage Rules

### Color Rules
- Màu semantic (success, warning, danger) không được lẫn với màu brand nếu chưa được chốt
- Không được tự thêm màu mới vào brand palette
- Màu phải có WCAG contrast ≥ 4.5:1

### Typography Rules
- Không được dùng font weight không có trong tokens
- Không được tự thêm font size mới
- Line height phải theo tokens

### Spacing Rules
- Không được dùng spacing không có trong tokens
- Spacing phải consistent toàn hệ thống

### Border Radius Rules
- Không được dùng border radius không có trong tokens
- Border radius phải consistent theo element type

---

## Authority

**Nguồn chân lý:** `/WPAS/03_DESIGN_TOKENS.md`
**Mọi designer, dev phải tuân thủ.**
**Không được tự thêm token mới không được phê duyệt.**
