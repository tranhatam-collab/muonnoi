# 12 — Governance: Brand Guardian, Asset Hub, Audit, Approval Workflow

> Brand book chỉ có giá trị nếu được **enforce**. File này là phần dài hạn nhất — không có deadline, vĩnh viễn.

---

## A. HƯỚNG DẪN

- Governance là khung **vận hành brand sau Day 120**. Không có nó, brand book trở thành "tài liệu để trên kệ".
- Owner: Brand Guardian (vai trò mới được bổ nhiệm).
- Approver: Founder.
- Cadence:
  - **Hằng ngày**: enforce qua approval workflow.
  - **Hằng tuần**: brand mention review, asset request review.
  - **Hằng quý**: Quarterly Audit (mục E).
  - **Hằng năm**: Annual Brand Review (mục F).

---

## B. BRAND GUARDIAN ROLE

### B.1 Charter

```
═══════════════════════════════════════════════════════════
BRAND GUARDIAN CHARTER — <<Brand>>
═══════════════════════════════════════════════════════════

PURPOSE:
Đảm bảo mọi điểm chạm thương hiệu (visual, verbal, behavioral, product)
nhất quán với Brand Book v<<...>>.

REPORTS TO: <<Founder / CMO>>
TYPE: Có thể full-time hoặc một phần vai trò marketing/design lead.

AUTHORITY:
- Quyền veto bất kỳ asset/copy public nào trước khi publish.
- Quyền yêu cầu sửa/take down asset đã public nếu vi phạm brand book.
- Quyền duyệt update brand book (phối hợp với Founder + Designer).
- Quyền chi tiêu trong giới hạn ngân sách brand maintenance.
- Quyền bổ nhiệm/từ chối vendor / agency / freelancer cho brand work.
- Quyền triệu tập Crisis Team khi có brand crisis (file 11 mục E).

RESPONSIBILITIES (8):
1. Sở hữu Brand Book (file 08) — version control + update.
2. Duyệt mọi asset/copy có brand mention trước khi public.
3. Onboard nhân viên mới về brand (5 buổi đầu trong 30 ngày).
4. Brief agency/freelancer khi outsource.
5. Chủ trì Quarterly Audit (mục E).
6. Quản lý Asset Hub (mục C).
7. Phản ứng đầu tiên khi crisis brand (file 11 mục E) — trong 1h từ alert.
8. Báo cáo monthly cho Founder.

KPIs:
- 100% asset public có review log
- 0 brand violation lan rộng > 24h
- >= 95% nhân viên onboard pass brand quiz sau 30 ngày
- Quarterly Audit hoàn thành đúng hạn
- Brand consistency score (rubric mục E.4) >= 85/100

FORBIDDEN:
- Tự thay đổi pillar/positioning/visual core mà không qua Founder.
- Không duyệt asset của chính mình (conflict — phải có cross-review).

═══════════════════════════════════════════════════════════
Ký bổ nhiệm:
- Founder: __________     Ngày: <<...>>
- Brand Guardian: __________     Ngày: <<...>>
═══════════════════════════════════════════════════════════
```

### B.2 Onboarding Brand Guardian

```
TUẦN 1:
[ ] Đọc toàn bộ 20 file Brandpro
[ ] Họp 1-on-1 với Founder + Brand Strategist
[ ] Test brand quiz (mục G) — pass 100%

TUẦN 2:
[ ] Setup Asset Hub (mục C)
[ ] Setup Approval Workflow (mục D)
[ ] Review toàn bộ approved assets hiện có

TUẦN 3:
[ ] Brief agency/freelancer đầu tiên (shadow)
[ ] Duyệt asset đầu tiên (shadow + feedback)

TUẦN 4:
[ ] Chạy Quarterly Audit thử (shadow)
[ ] Báo cáo monthly đầu tiên cho Founder
```

---

## C. ASSET HUB

### C.1 Structure

```
ASSET HUB — <<Brand>>

├── 01-Brand-Book/
│   ├── PDF/
│   ├── Notion/Confluence/
│   └── CHANGELOG.md
├── 02-Logo/
│   ├── Master (.ai / .fig)
│   ├── Export/
│   │   ├── SVG/
│   │   ├── PNG@1x-2x-3x/
│   │   ├── PDF/
│   │   └── EPS/
│   └── Variant/
│       ├── Primary/
│       ├── Secondary/
│       ├── Stacked/
│       ├── Monogram/
│       └── Mono/
├── 03-Color/
│   ├── Palette/
│   ├── Accessibility-Report/
│   └── Token-JSON/
├── 04-Typography/
│   ├── Font-Files/
│   ├── License/
│   └── Spec/
├── 05-Photography/
│   ├── Raw/
│   ├── Edited/
│   └── License/
├── 06-Iconography/
│   ├── Source/
│   └── Export/
├── 07-Design-System/
│   ├── Figma/
│   ├── Storybook/
│   └── Token-JSON/
├── 08-Product-Copy/
│   ├── UI-Strings-Registry/
│   ├── Onboarding-Copy/
│   └── Error-States/
├── 09-Templates/
│   ├── Social/
│   ├── Email/
│   ├── Presentation/
│   └── Print/
├── 10-Legal/
│   ├── Trademark-Certificates/
│   ├── Domain-Registry/
│   └── Contracts/
└── 11-Archive/
    └── (assets deprecated)
```

### C.2 Access matrix

| Role | Read | Write | Admin |
|------|------|-------|-------|
| Founder | All | All | Yes |
| Brand Guardian | All | All (except 10-Legal) | Yes |
| Designer | 01-07 | 02-07 | No |
| Copywriter | 01-09 | 08-09 | No |
| Developer | 01-04, 07-08 | 07-08 | No |
| PM | 01-09 | 08 | No |
| External agency | 01-09 (read-only link) | None | No |
| Legal | 10 | 10 | No |

---

## D. APPROVAL WORKFLOW

### D.1 Tier system

| Tier | Asset type | Duyệt bởi | Ghi chú |
|------|------------|-----------|---------|
| Tier 0 (Auto) | Social post từ template có sẵn, email từ template | Không cần duyệt | Log only |
| Tier 1 | Social post custom, blog post, minor web update | Brand Guardian | 24h turnaround |
| Tier 2 | Landing page mới, email sequence, video, print | Brand Guardian + Founder | 48h turnaround |
| Tier 3 | Rebrand element, new logo variant, new product naming | Founder + Brand Guardian + Strategist | 1 tuần |

### D.2 Approval Request Form

Sử dụng artefact `_artifacts/13-Approval-Request-Form.md` cho mọi asset Tier 2-3.

---

## E. QUARTERLY AUDIT

### E.1 Schedule

| Quý | Tháng | Focus area | Owner |
|-----|-------|------------|-------|
| Q1 | Tháng 3 | Visual consistency (logo, color, font) | Designer |
| Q2 | Tháng 6 | Verbal consistency (voice, tone, messaging) | Copywriter |
| Q3 | Tháng 9 | Digital consistency (web, social, SEO) | SEO/Dev |
| Q4 | Tháng 12 | Product consistency (UI copy, design system) | PM + Designer + Dev |

### E.2 Audit checklist (Q4 — Product focus, NEW in v2.0)

- [ ] Design system token còn khớp với brand book không?
- [ ] Có component mới chưa được review bởi Brand Guardian không?
- [ ] UI strings trên app có khớp với Product Copy Registry không?
- [ ] Onboarding flow có thay đổi tone/voice so với lock không?
- [ ] Error messages có actionable và on-brand không?
- [ ] API docs / README có on-brand voice (DX Voice) không?
- [ ] Feature names có tuân thủ naming convention không?

### E.3 Scoring rubric

| Category | Weight | Score (1-10) | Weighted |
|----------|--------|--------------|----------|
| Visual consistency | 25% | | |
| Verbal consistency | 25% | | |
| Digital consistency | 20% | | |
| Product consistency | 20% | | |
| Legal compliance | 10% | | |
| **Total** | **100%** | | **>= 85/100 = PASS** |

### E.4 Action items

Nếu score < 85:
- [ ] Liệt kê tất cả violations.
- [ ] Gán owner và deadline cho mỗi fix.
- [ ] Founder review và approve plan.
- [ ] Re-audit trong 30 ngày.

---

## F. ANNUAL BRAND REVIEW

### F.1 Trigger

- [ ] Score Quarterly Audit < 85 trong 2 quý liên tiếp.
- [ ] Founder yêu cầu strategic review.
- [ ] Competitive landscape thay đổi đáng kể.
- [ ] Brand mở rộng sang thị trường / sản phẩm mới.

### F.2 Framework quyết định

```
Maintain    -> Không thay đổi gì, tiếp tục nhịp hiện tại
Refresh     -> Cập nhật visual (màu, font, photo) nhưng giữ logo + pillars
Refine      -> Điều chỉnh messaging, tone, positioning nhưng giữ logo
Overhaul    -> Thay đổi logo hoặc tên — đây là rebrand, cần budget và timeline riêng
```

---

**Người duyệt:** __________     **Ngày duyệt:** <<YYYY-MM-DD>>