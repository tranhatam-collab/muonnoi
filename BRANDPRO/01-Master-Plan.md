# 01 — Master Plan: Roadmap 120 Ngày + RACI + Milestone

> Mục tiêu: từ Day 1 đến Day 120, đưa một thương hiệu (đặc biệt tech/SaaS/product) từ ý tưởng tên gọi -> bộ nhận diện hoàn chỉnh, design system v1, product copy lock, đăng ký pháp lý, website song ngữ live, governance vận hành.

---

## A. HƯỚNG DẪN

- 120 ngày là **mức tối thiểu** cho tech product có design system. Single-brand SME không cần design system -> có thể rút về 90 ngày (bỏ qua file 16, 17).
- Mỗi pha có **cổng duyệt (gate)** — không chuyển pha nếu chưa đóng gate.
- Mỗi task có Owner duy nhất (R) và Người duyệt duy nhất (A) theo RACI.
- Budget chia 3 mức: **Lean** (< 200tr) / **Standard** (200–800tr) / **Premium** (> 800tr).
- Tất cả ngày đều ghi tuyệt đối (YYYY-MM-DD).

---

## B. TEMPLATE — Roadmap 120 Ngày

### Pha 1 — ĐIỀU TRA (Day 1 -> Day 14)

| Task | File liên quan | Owner | Duration | Output |
|------|----------------|-------|----------|--------|
| Domain sweep toàn TLD + biến thể | 02 | Strategist | 2 ngày | Bảng audit domain |
| SERP fingerprint VI/EN/CN | 02 | SEO | 2 ngày | Screenshot 3 trang đầu |
| Trademark check (WIPO, USPTO, EUIPO, IPVN) | 02 + 11 | Legal | 3 ngày | Báo cáo trademark theo class |
| Social handle audit 15 nền tảng | 02 | Strategist | 1 ngày | Bảng available/taken |
| Phonetic clash test (3 ngôn ngữ) | 02 | Strategist | 1 ngày | Recording + biên bản |
| Tổng hợp Risk Matrix | 03 | Strategist | 2 ngày | Risk Matrix duyệt |
| **(Tech)** Audit repo/package name availability (GitHub, npm, PyPI, etc.) | 02 | Dev | 1 ngày | Bảng available/taken |

**Cong 1 (Day 14):** Founder ký duyệt Risk Matrix. Quyết định: Giữ tên / Đổi tên / Mua domain / Né ngành.

---

### Pha 2 — CHIẾN LƯỢC (Day 15 -> Day 28)

| Task | File | Owner | Duration | Output |
|------|------|-------|----------|--------|
| Naming workshop + đánh giá | 04 | Strategist | 3 ngày | Top 3 candidate names |
| Quyết định cuối + collision strategy | 04 | Founder | 1 ngày | Tên + chiến lược va chạm |
| Mission / Vision / Values | 05 | Founder + Strategist | 2 ngày | Brand pillars draft |
| Positioning statement | 05 | Strategist | 2 ngày | 1 câu định vị |
| Brand persona (archetype) | 05 | Strategist | 2 ngày | 1 archetype + persona card |
| Brand promise + reason-to-believe | 05 | Strategist | 1 ngày | Promise + 3 RTB |
| **(Tech)** Brand Architecture decision | 18 | Founder + Strategist | 2 ngày | Master/sub/endorsed model lock |
| **(Tech)** Competitive Moat analysis | 19 | Strategist + PM | 2 ngày | Moat framework + differentiation |

**Cong 2 (Day 28):** Tên + Positioning + Architecture lock. Đăng ký domain chính + ít nhất 5 defensive domain ngay (xem file 11).

---

### Pha 3 — IDENTITY (Day 29 -> Day 56)

| Task | File | Owner | Duration | Output |
|------|------|-------|----------|--------|
| Verbal identity (voice, tone, do/don't) | 06 | Copywriter | 5 ngày | Verbal guide |
| Mood board + art direction | 07 | Designer | 3 ngày | Mood board duyệt |
| Logo concept (3 hướng) | 07 | Designer | 5 ngày | 3 logo concept |
| Logo refinement + final | 07 | Designer | 5 ngày | Logo final + variant |
| Color system + accessibility | 07 | Designer | 2 ngày | Palette + a11y check |
| Typography system | 07 | Designer | 2 ngày | Font pair + scale |
| Iconography + photography style | 07 | Designer | 3 ngày | Icon set v1 + photo brief |
| **(Tech)** Design token foundation | 17 | Designer + Dev | 3 ngày | Token JSON v0.1 (color, spacing, type) |
| Brand book v1 | 08 | Designer | 5 ngày | Brand book PDF + Figma |

**Cong 3 (Day 56):** Brand Book v1 + Design Token v0.1 duyệt. Logo file gốc lưu vào asset hub.

---

### Pha 4 — PRODUCT, LOCALIZATION & DIGITAL (Day 57 -> Day 90)

| Task | File | Owner | Duration | Output |
|------|------|-------|----------|--------|
| Messaging matrix VI/EN (marketing) | 09 | Copywriter | 4 ngày | Matrix điền đủ |
| **(Tech)** Product UI strings matrix VI/EN | 09 + 16 | Copywriter + PM | 4 ngày | UI strings locked |
| Glossary song ngữ (30–50 thuật ngữ) | 09 | Copywriter + Legal | 3 ngày | Glossary lock |
| Tagline VI + EN | 09 | Copywriter | 2 ngày | 1 chính + 2 phụ mỗi ngôn ngữ |
| Website wireframe + content song ngữ | 09 + 13 | Web team | 5 ngày | Wireframe + copy duyệt |
| Schema.org Organization JSON-LD | 10 | Dev | 1 ngày | JSON-LD on-page |
| hreflang implementation | 10 | Dev | 2 ngày | Test passed |
| Entity SEO setup | 10 | SEO | 5 ngày | Tất cả entity live + sameAs |
| Content pillar plan + 10 bài đầu | 10 | Content | 5 ngày | Lịch content 90 ngày |
| **(Tech)** Feature naming convention | 16 | PM + Copywriter | 2 ngày | Feature name registry |
| **(Tech)** Onboarding copy + empty/error states | 16 | Copywriter + PM | 4 ngày | Product Copy artefact filled |
| **(Tech)** Design system v1 (components) | 17 | Designer + Dev | 7 ngày | Figma library + Storybook / dev handoff |
| **(Tech)** API naming convention + SDK branding | 16 + 17 | Dev + PM | 2 ngày | API Naming artefact filled |
| **(Tech)** Beta / waitlist branding | 16 | PM + Designer | 2 ngày | Landing page + email sequence |

**Cong 4 (Day 90):** Website song ngữ live, entity SEO published, Product Copy lock, Design System v1 live.

---

### Pha 5 — PHÒNG THỦ & VẬN HÀNH (Day 91 -> Day 120)

| Task | File | Owner | Duration | Output |
|------|------|-------|----------|--------|
| Nộp đơn trademark đa class | 11 | Legal | 5 ngày | Mã đơn TM |
| Mua đủ defensive domain + redirect | 11 | Ops | 2 ngày | Bảng domain owned |
| Setup brand monitoring | 11 | Ops | 1 ngày | Dashboard monitor |
| Bổ nhiệm Brand Guardian + charter | 12 | Founder | 1 ngày | Charter ký |
| Asset hub setup | 12 | Designer + Ops | 3 ngày | Hub live + access matrix |
| Approval workflow setup | 12 | Ops | 2 ngày | Workflow on Notion/Linear |
| Quarterly audit calendar | 12 | Ops | 1 ngày | Lịch 4 quý |
| **(Tech)** Design system governance + contribution guidelines | 17 | Designer + Dev | 2 ngày | DS governance doc |

**Cong 5 (Day 120):** Bàn giao chính thức. Brand đi vào nhịp Quarterly Audit.

---

## C. RACI Matrix

| Hoạt động | Founder | Strategist | Designer | Copy | PM | SEO | Dev | Legal | Ops |
|-----------|---------|------------|----------|------|-----|-----|-----|-------|-----|
| Risk Matrix | A | R | I | I | I | C | I | C | I |
| Naming decision | A | R | C | C | I | I | I | C | I |
| Positioning | A | R | I | C | C | I | I | I | I |
| Brand Architecture | A | R | C | I | C | I | I | I | I |
| Competitive Moat | A | R | I | I | C | I | C | I | I |
| Logo | A | C | R | I | I | I | I | I | I |
| Verbal identity | I | A | I | R | I | I | I | I | I |
| Product Copy | I | C | I | R | A | I | I | I | I |
| Brand Book | A | C | R | C | I | I | I | I | I |
| Design System | A | C | R | I | C | I | C | I | I |
| Bilingual messaging | I | A | I | R | C | I | C | I | I |
| Entity SEO | I | I | I | I | I | R | C | I | A |
| hreflang/schema | I | I | I | I | I | C | R | I | A |
| Trademark filing | A | I | I | I | I | I | I | R | I |
| Defensive domains | A | C | I | I | I | I | I | I | R |
| Brand Guardian charter | A | C | I | I | I | I | I | C | R |
| Quarterly audit | A | R | C | C | C | C | I | I | C |

> R = Responsible · A = Accountable · C = Consulted · I = Informed

---

## D. Budget khung (VND, ước lượng 2026)

| Hạng mục | Lean | Standard | Premium |
|----------|------|----------|---------|
| Brand strategy + naming | 30–60tr | 80–150tr | 200–500tr |
| Visual identity + brand book | 40–80tr | 120–250tr | 400–1.000tr |
| **Design system v1** | 0* | 50–120tr | 200–400tr |
| **Product copy + UX writing** | 0* | 30–60tr | 100–200tr |
| Bilingual content (homepage + 10 bài) | 15–30tr | 40–80tr | 100–250tr |
| Website song ngữ | 30–80tr | 100–250tr | 400–1.500tr |
| SEO entity setup + 90 ngày content | 20–40tr | 60–120tr | 150–400tr |
| Trademark (5 class, VN + Madrid 3 nước) | 40–80tr | 80–150tr | 200–400tr |
| Defensive domains | 8–15tr | 15–30tr | 30–60tr |
| Photography / video brand asset | 20–50tr | 60–150tr | 200–800tr |
| Asset hub + governance tooling | 5–10tr | 10–25tr | 30–80tr |
| Buffer (15%) | — | — | — |
| **Tổng (chưa buffer)** | **~210–445tr** | **~645–1.385tr** | **~2.010–5.590tr** |

> *Lean = founder/PM tự làm product copy + không xây design system riêng (dùng UI kit có sẵn).
> Chưa bao gồm chi phí quảng bá ra mắt (PR, paid media) — đó là pha 6, ngoài scope kit.

---

## E. Milestone checklist

```
[ ] Day 14   — Risk Matrix duyệt
[ ] Day 28   — Tên + Positioning + Architecture lock + domain mua
[ ] Day 42   — Logo final
[ ] Day 56   — Brand Book v1 + Design Token v0.1 duyệt
[ ] Day 70   — Website song ngữ ready for QA
[ ] Day 77   — Product Copy lock (UI strings, onboarding, errors)
[ ] Day 90   — Website live + entity SEO published + Design System v1
[ ] Day 98   — Trademark đơn nộp
[ ] Day 120  — Bàn giao Brand Guardian + asset hub + DS governance
[ ] Day 180  — Quarterly Audit Q1
```

---

## F. VÍ DỤ (rút gọn — brand giả định "<<Brand>>", EdTech startup)

- **Day 1–14:** Phát hiện `<<domain>>.com` thuộc công ty edtech Canada. `<<domain>>.io` available. Risk Matrix: HIGH domain clash -> thêm modifier "AI".
- **Cong 1:** Đổi tên thành **<<Brand Name>>**. Mua `<<primary-domain>>.com`, `<<domain>>.vn`, `<<domain>>.io`. GitHub `<<repo>>` available. npm `<<package>>` available.
- **Day 28:** Positioning — "<<Positioning statement>>" Architecture: Single brand (chưa có sub-brand).
- **Day 56:** Brand book + design token (primary: #3B5BFE, spacing: 4px base, type: Inter).
- **Day 77:** Product copy lock — onboarding 3 bước ("Chào em", "Chọn môn", "Bắt đầu bài đầu tiên"). Error: "Ồ, đề bài này chưa tải xong — thử lại sau 5 giây nhé." Empty state: "Em chưa làm bài nào. Bắt đầu với bài Toán lớp 8 nhé?"
- **Day 90:** Website lumioai.com live VI/EN, schema Organization, Design System v1 với 20 components.
- **Day 120:** TM class 9+41+42 nộp, Brand Guardian appointed.

---

**Người duyệt:** __________     **Ngày duyệt:** <<YYYY-MM-DD>>
