# 07 — Visual Identity Spec: Logo, Color, Typography, Design Tokens, Iconography, Photography, Motion

> Bản đặc tả thị giác đầy đủ — designer dùng làm brief, brand book (file 08) lấy từ đây để in. **Thêm design tokens để dev có thể implement chính xác.**

---

## A. HƯỚNG DẪN

- Visual identity **phải xuất phát từ Brand Pillars (file 05) và Verbal Identity (file 06)**.
- Mỗi mục có: nguyên tắc -> spec kỹ thuật -> kiểm thử (test).
- Lưu mọi file gốc trong **Figma project** + **Drive folder /04-brand-assets/**.
- **Design tokens** phải xuất ra JSON theo W3C Design Tokens Format (file 17 và artefact 21).

---

## B. LOGO SYSTEM

### B.1 Loại logo cần thiết kế

| Loại | Khi dùng | Min size |
|------|----------|----------|
| Primary (full) | Mặc định — web header, brand book, business card | 120×40 px digital, 30mm in |
| Secondary (horizontal) | Không gian ngang hẹp | 80×24 px |
| Stacked | Không gian vuông (avatar, icon) | 64×64 px |
| Monogram / Mark | App icon, favicon, social avatar | 48×48 px |
| Wordmark | Email signature, footer | tự do |
| Mono (đen/trắng) | Nền màu, in đen trắng, embossing | — |

### B.2 Spec template

```
LOGO SYSTEM — <<Brand>>

PRIMARY:
- File master: <<đường dẫn .ai / .fig>>
- Format export: SVG, PNG@1x/2x/3x, PDF, EPS
- Tỷ lệ: <<...>> (ví dụ: 3:1 horizontal)
- Clear space: <<X-height>>
- Kích thước tối thiểu: <<digital ___px / in ___mm>>

GRID & PROPORTION:
- Logo construction trên grid <<...>>
- Tâm cân thị giác (optical center)

CLEAR SPACE RULE:
- Vùng không-được-có-element-nào quanh logo: <<đo bằng X-height>>

MIN SIZE RULE:
- Dưới <<X>>px -> dùng monogram thay vì primary
- Dưới <<Y>>px -> không dùng logo, để trống

CO-BRANDING:
- Quy tắc kích thước: cân đối optical
- Khoảng cách giữa 2 logo: <<...>>
```

### B.3 Test bắt buộc

- [ ] Silhouette test: bịt màu, thu xuống 16px, vẫn nhận diện được.
- [ ] Đảo màu test: hoán đổi đen <-> trắng, không vỡ.
- [ ] Print test: in giấy thường + giấy bóng + UV.
- [ ] Embossing test: dập nổi không gian âm vẫn rõ.
- [ ] Single color test: 1 màu duy nhất, vẫn ổn.
- [ ] Background test: trên 5 nền (trắng, đen, xám, photo dày, photo thưa).

### B.4 Quy tắc CẤM với logo

❌ Không nghiêng / xoay logo.
❌ Không đổi màu ngoài bộ palette.
❌ Không thêm shadow / outline / gradient phụ.
❌ Không kéo dãn lệch tỷ lệ.
❌ Không đặt trên nền không đủ contrast (WCAG AA fail).

---

## C. COLOR SYSTEM

### C.1 Cấu trúc palette

```
COLOR SYSTEM — <<Brand>>

PRIMARY:
- P-500 (main): <<HEX>>   |  RGB: <<...>>   |  CMYK: <<...>>   |  PMS: <<...>>
- P-400 (light): <<HEX>>
- P-600 (dark): <<HEX>>

SECONDARY:
- S-500 (main): <<HEX>>   |  RGB: <<...>>   |  CMYK: <<...>>   |  PMS: <<...>>
- S-400 (light): <<HEX>>
- S-600 (dark): <<HEX>>

NEUTRAL:
- N-100 (background): <<HEX>>
- N-200 (surface): <<HEX>>
- N-300 (border): <<HEX>>
- N-400 (placeholder): <<HEX>>
- N-500 (text secondary): <<HEX>>
- N-900 (text primary): <<HEX>>

SEMANTIC:
- Success: <<HEX>>
- Warning: <<HEX>>
- Error: <<HEX>>
- Info: <<HEX>>

ACCESSIBILITY:
- Primary on white: contrast ratio <<...>>:1 (cần >= 4.5:1)
- Primary on dark: contrast ratio <<...>>:1 (cần >= 4.5:1)
```

### C.2 Design Token mapping (for dev)

| Token name | HEX | Usage |
|------------|-----|-------|
| `color.primary.500` | <<HEX>> | Button primary, link |
| `color.primary.400` | <<HEX>> | Button hover |
| `color.primary.600` | <<HEX>> | Button active |
| `color.surface.100` | <<HEX>> | Page background |
| `color.surface.200` | <<HEX>> | Card background |
| `color.text.primary` | <<HEX>> | Headline, body |
| `color.text.secondary` | <<HEX>> | Caption, meta |
| `color.semantic.success` | <<HEX>> | Success state |
| `color.semantic.error` | <<HEX>> | Error state |

---

## D. TYPOGRAPHY SYSTEM

### D.1 Font stack

```
TYPOGRAPHY — <<Brand>>

PRIMARY FONT (headline):
- Family: <<...>>
- Weights: <<...>> (ví dụ: 400, 600, 700)
- Fallback stack: <<...>>
- License: <<...>>

SECONDARY FONT (body):
- Family: <<...>>
- Weights: <<...>>
- Fallback stack: <<...>>
- License: <<...>>

MONOSPACE (code / data):
- Family: <<...>>
- Weights: <<...>>
```

### D.2 Type scale

| Token | Size (px) | Line-height | Weight | Letter-spacing | Usage |
|-------|-----------|-------------|--------|----------------|-------|
| `type.display.l` | <<...>> | <<...>> | <<...>> | <<...>> | Hero headline |
| `type.display.m` | <<...>> | <<...>> | <<...>> | <<...>> | Section headline |
| `type.heading.h1` | <<...>> | <<...>> | <<...>> | <<...>> | Page title |
| `type.heading.h2` | <<...>> | <<...>> | <<...>> | <<...>> | Section title |
| `type.heading.h3` | <<...>> | <<...>> | <<...>> | <<...>> | Card title |
| `type.body.l` | <<...>> | <<...>> | <<...>> | <<...>> | Lead paragraph |
| `type.body.m` | <<...>> | <<...>> | <<...>> | <<...>> | Body text |
| `type.body.s` | <<...>> | <<...>> | <<...>> | <<...>> | Caption, meta |
| `type.label` | <<...>> | <<...>> | <<...>> | <<...>> | Button, badge |
| `type.code` | <<...>> | <<...>> | <<...>> | <<...>> | Code block, inline code |

---

## E. SPACING & LAYOUT SCALE

### E.1 Spacing tokens

| Token | Value | Usage |
|-------|-------|-------|
| `space.1` | 4px | Tight padding |
| `space.2` | 8px | Icon + text gap |
| `space.3` | 12px | Card internal padding |
| `space.4` | 16px | Button padding |
| `space.5` | 24px | Section gap |
| `space.6` | 32px | Component gap |
| `space.8` | 48px | Block gap |
| `space.10` | 64px | Section margin |
| `space.12` | 96px | Page margin |

### E.2 Grid system

- Base grid: <<...>> px (khuyến nghị: 4px hoặc 8px)
- Container max-width: <<...>> px
- Breakpoints: Mobile <<...>> / Tablet <<...>> / Desktop <<...>> / Wide <<...>>

---

## F. ICONOGRAPHY

### F.1 Style

- Style: <<Outline / Filled / Duotone / Custom>>
- Stroke width: <<...>> px
- Corner radius: <<...>> px
- Grid: <<...>> × <<...>> px
- Color: <<monochrome (semantic) / duotone (primary + secondary) / full color>>

### F.2 Set requirements

- [ ] Navigation: <<...>> icons
- [ ] Action: <<...>> icons
- [ ] Social: <<...>> icons
- [ ] Feature: <<...>> icons
- [ ] Empty state: <<...>> icons
- [ ] Payment: <<...>> icons

---

## G. PHOTOGRAPHY & ILLUSTRATION

### G.1 Style

- Photography: <<...>> (ví dụ: candid, natural light, documentary)
- Illustration: <<...>> (ví dụ: flat vector, 3D, hand-drawn)
- Ratio: <<...>>
- Color treatment: <<...>> (ví dụ: warm filter, desaturated, duotone)

### G.2 Do / Don't

| ✅ DO | ❌ DON'T |
|-------|----------|
| <<...>> | <<...>> |

---

## H. MOTION & ANIMATION

### H.1 Principles

- Duration mặc định: <<...>> ms
- Easing mặc định: <<...>> (ví dụ: cubic-bezier(0.4, 0, 0.2, 1))
- Stagger delay: <<...>> ms
- Max animation distance: <<...>> px

### H.2 Motion tokens

| Token | Value | Usage |
|-------|-------|-------|
| `motion.duration.fast` | <<...>> ms | Hover, toggle |
| `motion.duration.normal` | <<...>> ms | Page transition |
| `motion.duration.slow` | <<...>> ms | Hero animation |
| `motion.easing.default` | <<...>> | Default ease |
| `motion.easing.enter` | <<...>> | Enter animation |
| `motion.easing.exit` | <<...>> | Exit animation |

---

**Người duyệt:** __________     **Ngày duyệt:** <<YYYY-MM-DD>>
