# KIẾN TRÚC SEO ĐA NGÔN NGỮ — KẾT NỐI MUÔN NƠI

Phiên bản: v0.1 — 2026  
Trạng thái: Draft Proposed — Chờ Founder khóa  
Subdomain: ketnoi.muonnoi.org

---

## 1. Nguyên tắc

- Tiếng Việt (`vi-VN`) là ngôn ngữ gốc pháp lý và nội dung.
- 6 ngôn ngữ còn lại triển khai **song song từ đầu**, không dịch sau.
- Không dùng `?lang=en` query string.
- Mỗi phiên bản có URL riêng và `hreflang` rõ ràng.

---

## 2. Ngôn ngữ triển khai

| Mã | Ngôn ngữ | Thư mục | Locale |
|---|---|---|---|
| `vi-VN` | Tiếng Việt | `/` (root) | vi-VN |
| `en` | English | `/en/` | en |
| `zh-Hans` | 简体中文 | `/zh/` | zh-CN, zh-SG |
| `ko` | 한국어 | `/ko/` | ko-KR |
| `ja` | 日本語 | `/ja/` | ja-JP |
| `fr` | Français | `/fr/` | fr-FR, fr-CA |
| `es` | Español | `/es/` | es-ES, es-MX |

---

## 3. Cấu trúc URL

| Trang | vi-VN | en | zh | ko | ja | fr | es |
|---|---|---|---|---|---|---|---|
| Trang chủ | `/` | `/en/` | `/zh/` | `/ko/` | `/ja/` | `/fr/` | `/es/` |
| Điều khoản | `/dieu-khoan` | `/en/terms` | `/zh/条款` | `/ko/이용약관` | `/ja/利用規約` | `/fr/conditions` | `/es/terminos` |
| Privacy | `/quyen-rieng-tu` | `/en/privacy` | `/zh/隐私` | `/ko/개인정보` | `/ja/プライバシー` | `/fr/confidentialite` | `/es/privacidad` |
| Safety | `/an-toan` | `/en/safety` | `/zh/安全` | `/ko/안전` | `/ja/安全性` | `/fr/securite` | `/es/seguridad` |
| Investment | `/dau-tu` | `/en/invest` | `/zh/投资` | `/ko/투자` | `/ja/投資` | `/fr/investir` | `/es/invertir` |

---

## 4. Redirect & Alias

| Alias | Redirect đến | Loại |
|---|---|---|
| `henho.muonnoi.org` | `ketnoi.muonnoi.org/` | 301 Permanent |
| `meet.muonnoi.org` | `ketnoi.muonnoi.org/en/` | 301 Permanent |
| `dautu.muonnoi.org` | `ketnoi.muonnoi.org/dau-tu` | 301 Permanent (vi) |
| `dautu.muonnoi.org/en` | `ketnoi.muonnoi.org/en/invest` | 301 Permanent |

---

## 5. Hreflang & Canonical

Mỗi trang phải có:
```html
<link rel="canonical" href="https://ketnoi.muonnoi.org/en/" />
<link rel="alternate" hreflang="vi-VN" href="https://ketnoi.muonnoi.org/" />
<link rel="alternate" hreflang="en" href="https://ketnoi.muonnoi.org/en/" />
<link rel="alternate" hreflang="zh-Hans" href="https://ketnoi.muonnoi.org/zh/" />
<link rel="alternate" hreflang="ko" href="https://ketnoi.muonnoi.org/ko/" />
<link rel="alternate" hreflang="ja" href="https://ketnoi.muonnoi.org/ja/" />
<link rel="alternate" hreflang="fr" href="https://ketnoi.muonnoi.org/fr/" />
<link rel="alternate" hreflang="es" href="https://ketnoi.muonnoi.org/es/" />
<link rel="alternate" hreflang="x-default" href="https://ketnoi.muonnoi.org/en/" />
```

**x-default:** English (vì là ngôn ngữ quốc tế phổ biến nhất).

---

## 6. Sitemap

- `sitemap-index.xml` chứa 7 sitemap con:
  - `sitemap-vi.xml`
  - `sitemap-en.xml`
  - `sitemap-zh.xml`
  - `sitemap-ko.xml`
  - `sitemap-ja.xml`
  - `sitemap-fr.xml`
  - `sitemap-es.xml`

Mỗi sitemap có `hreflang` annotations.

---

## 7. Robots.txt

```
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/
Disallow: /_next/

Sitemap: https://ketnoi.muonnoi.org/sitemap-index.xml
```

---

## 8. Kỹ thuật triển khai (Dev Note)

| Framework | Cách triển khai |
|---|---|
| Next.js App Router | `app/[lang]/layout.tsx` + `generateStaticParams` |
| Nuxt.js | `pages/[lang]/index.vue` + `i18n` module |
| React (CRA) | Sub-path routing + language context |
| Static HTML | Folder structure: `/en/index.html`, `/zh/index.html` |

---

**Kết Nối Muôn Nơi**  
Gặp người thật. Hiểu nhau thật. Tôn trọng ranh giới thật.
