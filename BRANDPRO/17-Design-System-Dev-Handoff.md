# 17 — Design System & Developer Handoff: Tokens, Components, Figma Structure, Code Conventions

> Design system là **single source of truth** cho cả design và code. Không có nó, mỗi screen sẽ khác nhau 5%, và sau 1 năm brand sẽ có 20 "màu xanh".

---

## A. HƯỚNG DẪN

- Design system không phải là **UI kit** — nó là **hệ thống quy tắc** + component + token + documentation.
- Owner: Designer trưởng (design) + Tech Lead (code). Approver: Founder + PM.
- Tooling khuyến nghị: **Figma** (design) + **Storybook / Ladle** (dev) + **GitHub** (version control).
- Design tokens phải xuất ra JSON theo W3C Design Tokens Format.

---

## B. DESIGN TOKENS

### B.1 Token categories

| Category | Examples | File |
|----------|----------|------|
| Color | `color.primary.500`, `color.semantic.error` | tokens/color.json |
| Typography | `type.body.m`, `type.heading.h1` | tokens/typography.json |
| Spacing | `space.4`, `space.8` | tokens/spacing.json |
| Border | `border.radius.md`, `border.width.thin` | tokens/border.json |
| Shadow | `shadow.md`, `shadow.lg` | tokens/shadow.json |
| Motion | `motion.duration.fast`, `motion.easing.default` | tokens/motion.json |
| Z-index | `zIndex.dropdown`, `zIndex.modal` | tokens/zindex.json |
| Breakpoint | `breakpoint.mobile`, `breakpoint.desktop` | tokens/breakpoint.json |

### B.2 Token naming convention

```
category.subcategory.modifier

Ví dụ:
- color.primary.500
- color.primary.400 (light variant)
- color.primary.600 (dark variant)
- type.heading.h1
- type.body.m
- space.4 (16px = 4 × 4px base)
```

### B.3 Token value formats

| Token type | Format | Ví dụ |
|------------|--------|-------|
| Color | HEX hoặc OKLCH | `#3B5BFE` hoặc `oklch(55% 0.2 264)` |
| Font size | px/rem | `16px` / `1rem` |
| Spacing | px | `16px` |
| Duration | ms | `200ms` |
| Easing | cubic-bezier | `cubic-bezier(0.4, 0, 0.2, 1)` |

### B.4 Token template (JSON)

Xem artefact `_artifacts/21-Design-Token-Template.json`.

---

## C. COMPONENT SYSTEM

### C.1 Component principles

1. **Atomic design**: Atom -> Molecule -> Organism -> Template -> Page.
2. **Composition over inheritance**: Component nhỏ, kết hợp thay vì prop phức tạp.
3. **Props consistency**: Mọi component phải có ít nhất `variant`, `size`, `disabled`, `className` (hoặc tương đương).
4. **Accessibility first**: Mọi component phải pass WCAG AA.

### C.2 Component checklist

Mỗi component trong design system phải có:

- [ ] Figma component với variants đầy đủ.
- [ ] Design spec (token usage, spacing, behavior).
- [ ] Code implementation (Storybook story + test).
- [ ] Accessibility audit (keyboard navigation, screen reader, color contrast).
- [ ] Usage documentation (when to use, when NOT to use).
- [ ] Responsive behavior (mobile / tablet / desktop).

### C.3 Core components (MVP v1)

| Category | Components |
|----------|------------|
| Foundation | Color swatches, Type scale, Spacing scale, Shadow scale |
| Layout | Container, Grid, Stack, Divider |
| Input | Button, Text Input, Textarea, Select, Checkbox, Radio, Switch, Slider |
| Display | Card, Badge, Tag, Avatar, Icon |
| Feedback | Alert, Toast, Modal, Tooltip, Progress, Skeleton |
| Navigation | Header, Footer, Nav, Breadcrumb, Tabs, Pagination |
| Data | Table, List, Empty State, Error State |
| Media | Image, Video, Carousel |

---

## D. FIGMA STRUCTURE

### D.1 File organization

```
Figma Project: <<Brand>> Design System
├── 00-Documentation
│   └── Cover + README + Changelog
├── 01-Foundation
│   ├── Color
│   ├── Typography
│   ├── Spacing
│   ├── Iconography
│   └── Shadow / Border / Motion
├── 02-Components
│   ├── Atoms
│   ├── Molecules
│   └── Organisms
├── 03-Patterns
│   ├── Forms
│   ├── Tables
│   └── Cards
├── 04-Templates
│   ├── Page layouts
│   └── Responsive breakpoints
└── 05-Archive
    └── Deprecated components
```

### D.2 Component naming in Figma

```
Category/Component/Variant/Size/State

Ví dụ:
- Input/Text/Default/Medium/Rest
- Input/Text/Default/Medium/Hover
- Input/Text/Default/Medium/Focus
- Input/Text/Default/Medium/Error
- Input/Text/Default/Medium/Disabled
```

---

## E. DEV HANDOFF

### E.1 From Figma to Code

| Figma element | Code equivalent | Notes |
|---------------|-----------------|-------|
| Auto Layout | Flexbox / CSS Grid | Export direction + gap + padding |
| Component | React/Vue/Svelte component | 1:1 mapping |
| Variant | Component props | Prop name = variant name |
| Style (color, type) | Design token | Không hardcode HEX trong code |
| Frame | div / section | Semantic HTML khi có thể |

### E.2 Handoff checklist

Designer trước khi handoff:
- [ ] Tất cả layers đã được đặt tên rõ ràng (không "Frame 234").
- [ ] Auto Layout đã được sử dụng đúng (không absolute position trừ khi cần).
- [ ] Tokens đã được áp dụng (không hardcode).
- [ ] Responsive behavior đã được thể hiện (mobile frame tối thiểu).
- [ ] Dev Mode đã bật (Figma Dev Mode / Zeplin / Figma-to-code plugin).

Developer sau khi nhận:
- [ ] Confirm token mapping với designer.
- [ ] Implement responsive behavior đúng breakpoints.
- [ ] Test accessibility (keyboard, screen reader, contrast).
- [ ] Review với designer trước khi merge.

---

## F. CODE CONVENTIONS

### F.1 File naming

```
// React/Vue/Angular
components/
  Button/
    Button.tsx
    Button.stories.tsx
    Button.test.tsx
    Button.module.css

// Token files
tokens/
  color.json
  typography.json
  spacing.json
```

### F.2 CSS / Styling

- [ ] Dùng design token variables, không hardcode.
- [ ] Không dùng `!important` (trừ khi override third-party).
- [ ] BEM hoặc CSS Modules hoặc Scoped CSS — tùy framework, nhưng phải consistent.

### F.3 Accessibility (A11y)

- [ ] Mọi interactive element có focus state rõ ràng.
- [ ] Mọi form có label liên kết với input.
- [ ] Mọi image có alt text (trừ khi decorative -> alt="").
- [ ] Color contrast >= 4.5:1 cho text, >= 3:1 cho UI elements.
- [ ] Keyboard navigation hoạt động đầy đủ.

---

## G. GOVERNANCE & CONTRIBUTION

### G.1 Design system governance

| Decision | Who decides | Process |
|----------|-------------|---------|
| Add new component | Designer + Tech Lead | Proposal -> Review -> Approve -> Implement |
| Deprecate component | Brand Guardian + Tech Lead | Announce 30 days trước -> Migrate -> Archive |
| Update token value | Designer + Founder | Must pass a11y check + brand consistency check |
| Emergency fix | Tech Lead | Fix -> Review retroactively within 48h |

### G.2 Contribution guidelines

```
1. Mở Proposal (Notion/GitHub issue) mô tả component/token cần thêm/sửa.
2. Thảo luận với Designer + Tech Lead.
3. Design Figma component + spec.
4. Code implementation + Storybook story + test.
5. Accessibility audit.
6. Brand Guardian review.
7. Merge vào main branch.
8. Update changelog + documentation.
```

---

**Người duyệt:** __________     **Ngày duyệt:** <<YYYY-MM-DD>>
