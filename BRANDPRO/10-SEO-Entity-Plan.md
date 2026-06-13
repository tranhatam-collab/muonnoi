# 10 — SEO Entity Plan: Entity SEO, hreflang, Schema, Content Pillars, Backlinks

> Mục tiêu: khi user gõ tên brand, **Knowledge Panel + 5 kết quả đầu** đều thuộc về mình. Đây là cách "đè SEO" hợp pháp khi có domain trùng tên.

---

## A. HƯỚNG DẪN

- File này là **kế hoạch 90 ngày** entity SEO + nền tảng kéo dài 18 tháng.
- Đầu vào: file 03 (Risk Matrix) + file 04 (Naming Strategy) + file 09 (Bilingual Messaging).
- Owner: SEO Specialist. Approver: Brand Strategist + Web Developer trưởng.
- KPI tối thiểu sau 90 ngày: **branded search > 500/tháng**, top 3 SERP cho tên brand chính ở thị trường VN, schema validate sạch.

---

## B. ENTITY SEO — Tạo entity riêng cho brand

### B.1 Checklist tạo entity

Mỗi mục dưới = một entity hub trỏ về domain chính qua `sameAs`:

```
[ ] Wikidata               (canonical entity registry, FREE)
[ ] Wikipedia              (chỉ khi đủ notability — 3+ secondary sources)
[ ] Google Business Profile (cho tất cả brand có địa chỉ vật lý)
[ ] LinkedIn Company Page  (verified, 100% complete)
[ ] Crunchbase             (cho tech startup)
[ ] Bloomberg/Forbes profile (nếu có press)
[ ] Industry directories   (G2/Capterra cho B2B SaaS, TripAdvisor cho hospitality, etc.)
[ ] Apple App Store / Google Play (nếu có app)
[ ] GitHub Organization    (nếu là tech)
[ ] Social verified (>= 5 nền tảng)
    [ ] Facebook
    [ ] Instagram
    [ ] LinkedIn
    [ ] X (Twitter)
    [ ] YouTube
[ ] OpenCorporates / Local business registry (legal verification)
```

### B.2 Spec điền cho mỗi entity

```
ENTITY: <<Tên platform>>
URL: <<...>>
Username/Handle: <<...>>
Verified: <<Yes/No>>
Description (NHẤT QUÁN <= 160 ký tự):
"<<...>>"
Logo: <<URL/path>>
Banner/Cover: <<URL/path>>
Categories: <<...>>
Founded date: <<YYYY-MM-DD>>
Same description as: schema.org `description`
Backlink to: <<canonical domain>>
Owner: <<email/người>>
Last updated: <<YYYY-MM-DD>>
```

### B.3 Wikidata setup

Wikidata là **canonical entity registry** — Google ưu tiên đọc Wikidata để build Knowledge Panel.

```
Wikidata Item Setup:

LABEL (multi-language):
- vi: <<Tên brand>>
- en: <<Tên brand>>

DESCRIPTION (<= 250 chars):
- vi: <<mô tả ngắn 1 dòng>>
- en: <<short description>>

ALIASES (cách viết khác):
- <<...>>

INSTANCE OF: <<...>> (Q...)

OFFICIAL WEBSITE: <<URL>>

SOCIAL ACCOUNTS (sameAs):
- Facebook: <<...>>
- Instagram: <<...>>
- LinkedIn: <<...>>
- X: <<...>>
- YouTube: <<...>>
- GitHub: <<...>> (nếu tech)
```

---

## C. SCHEMA.ORG + JSON-LD

### C.1 Bắt buộc trên mọi trang

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "<<...>>",
  "url": "<<...>>",
  "logo": "<<...>>",
  "sameAs": [
    "<<...>>",
    "<<...>>"
  ],
  "description": "<<...>>",
  "foundingDate": "<<YYYY-MM-DD>>",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "<<...>>"
  }
}
```

### C.2 hreflang implementation

```
<link rel="alternate" hreflang="vi" href="https://<<domain>>/vi/<<page>>" />
<link rel="alternate" hreflang="en" href="https://<<domain>>/en/<<page>>" />
<link rel="alternate" hreflang="x-default" href="https://<<domain>>/en/<<page>>" />
```

Kiểm tra: [ ] Validate qua Google Search Console
Kiểm tra: [ ] Không có page nào missing hreflang
Kiểm tra: [ ] Không có self-referencing canonical conflict

---

## D. CONTENT PILLAR PLAN

### D.1 Pillar structure

Mục tiêu: 10 bài đầu trong 90 ngày.

| Pillar | Topic | Format | Keyword chính | Owner | Deadline |
|--------|-------|--------|---------------|-------|----------|
| 1 | <<...>> | Blog | <<...>> | <<...>> | <<...>> |
| 2 | <<...>> | Guide | <<...>> | <<...>> | <<...>> |
| ... | | | | | |

### D.2 Backlink strategy

| Nguồn | Loại | DR/DA target | Action | Deadline |
|-------|------|--------------|--------|----------|
| <<...>> | Guest post | >= 30 | Pitch topic | <<...>> |
| <<...>> | Directory | >= 40 | Submit listing | <<...>> |
| <<...>> | Press | >= 50 | Pitch story | <<...>> |

---

**Người duyệt:** __________     **Ngày duyệt:** <<YYYY-MM-DD>>
