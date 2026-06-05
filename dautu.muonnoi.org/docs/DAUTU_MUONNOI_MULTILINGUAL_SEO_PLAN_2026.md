# SEO ĐA NGÔN NGỮ — DAUTU.MUONNOI.ORG

Phiên bản: v0.2 — 2026 (sửa sau audit)
Trạng thái: Draft Proposed — Chờ Founder khóa

> 🔴 **RÀNG BUỘC PHÁP LÝ BẮT BUỘC (sửa 2026-06-05) — đọc trước khi triển khai:**
>
> SEO đa ngôn ngữ **CHỈ** áp dụng cho **TẦNG PUBLIC BRAND** (câu chuyện hệ sinh thái, tầm nhìn, thông tin doanh nghiệp). Index công khai một trang có nội dung **đầu tư** (định giá, vòng vốn, "đầu tư", term, tài khoản) = **general solicitation** (US, phá vỡ 506(b)) = **"chào bán qua phương tiện thông tin đại chúng/internet"** (VN, phá vỡ điều kiện chào bán riêng lẻ).
>
> **QUY TẮC:**
> - Trang public brand: `index,follow` + 7 ngôn ngữ — ✅ OK, **không chứa ngôn từ đầu tư**.
> - Mọi trang/route có nội dung đầu tư (qualification, private review, data room): **`noindex,nofollow`**, **KHÔNG** SEO, **KHÔNG** sitemap.
> - Tham chiếu quy tắc đầy đủ: `DAUTU_MUONNOI_COMPLIANCE_MASTER_2026-06-05.md` (3-tier governance + wordlist).
>
> Bảng ngôn ngữ bên dưới giữ nguyên về kỹ thuật hreflang nhưng **chỉ cho tầng brand**.

---

## 1. Ngôn ngữ triển khai

| Mã | Ngôn ngữ | Thư mục |
|---|---|---|
| vi-VN | Tiếng Việt | `/` (root) |
| en | English | `/en/` |
| zh-Hans | 简体中文 | `/zh/` |
| ko | 한국어 | `/ko/` |
| ja | 日本語 | `/ja/` |
| fr | Français | `/fr/` |
| es | Español | `/es/` |

---

## 2. Title & Meta Description chuẩn

### Trang chủ dautu

| Ngôn ngữ | Title | Meta Description |
|---|---|---|
| vi | Đầu Tư Muôn Nơi · Cổng quan tâm đầu tư hệ sinh thái Muôn Nơi | Đầu Tư Muôn Nơi là cổng thông tin dành cho nhà đầu tư và đối tác quan tâm đến các dự án trong hệ sinh thái Muôn Nơi. Nội dung không cấu thành lời chào bán chứng khoán hoặc cam kết lợi nhuận. |
| en | Muon Noi Investment · Investor Interest Portal for the Muon Noi Ecosystem | Muon Noi Investment is an investor interest portal for projects across the Muon Noi ecosystem. The information does not constitute a securities offering, investment advice, or a promise of return. |
| zh | Muon Noi 投资 · Muon Noi 生态系统投资者兴趣门户 | Muon Noi 投资是面向 Muon Noi 生态系统内项目的投资者兴趣门户。该信息不构成证券发行、投资建议或回报承诺。 |
| ko | Muon Noi 투자 · Muon Noi 생태계 투자자 관심 포털 | Muon Noi 투자는 Muon Noi 생태계 전반의 프로젝트를 위한 투자자 관심 포털입니다. 해당 정보는 증권 발행, 투자 자문 또는 수익 약속을 구성하지 않습니다. |
| ja | Muon Noi 投資 · Muon Noi エコシステム投資家関心ポータル | Muon Noi 投資は、Muon Noi エコシステム全体のプロジェクト向けの投資家関心ポータルです。この情報は、証券の募集、投資助言、またはリターンの約束を構成するものではありません。 |
| fr | Investissement Muon Noi · Portail d'intérêt des investisseurs pour l'écosystème Muon Noi | L'investissement Muon Noi est un portail d'intérêt pour les investisseurs couvrant les projets de l'écosystème Muon Noi. Ces informations ne constituent pas une offre de titres, un conseil en investissement ou une promesse de rendement. |
| es | Inversión Muon Noi · Portal de interés de inversores para el ecosistema Muon Noi | La Inversión Muon Noi es un portal de interés para inversores que abarca proyectos del ecosistema Muon Noi. Esta información no constituye una oferta de valores, asesoramiento de inversión o promesa de retorno. |

---

## 3. Hreflang

```html
<link rel="alternate" hreflang="vi-VN" href="https://dautu.muonnoi.org/" />
<link rel="alternate" hreflang="en" href="https://dautu.muonnoi.org/en/" />
<link rel="alternate" hreflang="zh-Hans" href="https://dautu.muonnoi.org/zh/" />
<link rel="alternate" hreflang="ko" href="https://dautu.muonnoi.org/ko/" />
<link rel="alternate" hreflang="ja" href="https://dautu.muonnoi.org/ja/" />
<link rel="alternate" hreflang="fr" href="https://dautu.muonnoi.org/fr/" />
<link rel="alternate" hreflang="es" href="https://dautu.muonnoi.org/es/" />
<link rel="alternate" hreflang="x-default" href="https://dautu.muonnoi.org/en/" />
```

---

## 4. Canonical

| Trang | Canonical |
|---|---|
| vi | `https://dautu.muonnoi.org/` |
| en | `https://dautu.muonnoi.org/en/` |
| x-default | `https://dautu.muonnoi.org/en/` |

---

## 5. Robots & Sitemap

```
Sitemap: https://dautu.muonnoi.org/sitemap-index.xml
```

Sitemap con theo ngôn ngữ như ketnoi.muonnoi.org.

---

**Đầu Tư Muôn Nơi**
