# HREFLANG MATRIX — KẾT NỐI MUÔN NƠI

Phiên bản: v0.1 — 2026  
Trạng thái: Draft Proposed — Chờ Founder khóa

---

## 1. Ma trận hreflang đầy đủ

### 1.1. Trang chủ

| hreflang | URL |
|---|---|
| `vi-VN` | `https://ketnoi.muonnoi.org/` |
| `en` | `https://ketnoi.muonnoi.org/en/` |
| `zh-Hans` | `https://ketnoi.muonnoi.org/zh/` |
| `ko` | `https://ketnoi.muonnoi.org/ko/` |
| `ja` | `https://ketnoi.muonnoi.org/ja/` |
| `fr` | `https://ketnoi.muonnoi.org/fr/` |
| `es` | `https://ketnoi.muonnoi.org/es/` |
| `x-default` | `https://ketnoi.muonnoi.org/en/` |

### 1.2. Đầu tư (dautu)

| hreflang | URL |
|---|---|
| `vi-VN` | `https://dautu.muonnoi.org/` |
| `en` | `https://dautu.muonnoi.org/en/` |
| `zh-Hans` | `https://dautu.muonnoi.org/zh/` |
| `ko` | `https://dautu.muonnoi.org/ko/` |
| `ja` | `https://dautu.muonnoi.org/ja/` |
| `fr` | `https://dautu.muonnoi.org/fr/` |
| `es` | `https://dautu.muonnoi.org/es/` |
| `x-default` | `https://dautu.muonnoi.org/en/` |

---

## 2. Header HTTP (tùy chọn)

```http
Link: <https://ketnoi.muonnoi.org/>; rel="alternate"; hreflang="vi-VN",
      <https://ketnoi.muonnoi.org/en/>; rel="alternate"; hreflang="en",
      <https://ketnoi.muonnoi.org/zh/>; rel="alternate"; hreflang="zh-Hans",
      <https://ketnoi.muonnoi.org/ko/>; rel="alternate"; hreflang="ko",
      <https://ketnoi.muonnoi.org/ja/>; rel="alternate"; hreflang="ja",
      <https://ketnoi.muonnoi.org/fr/>; rel="alternate"; hreflang="fr",
      <https://ketnoi.muonnoi.org/es/>; rel="alternate"; hreflang="es",
      <https://ketnoi.muonnoi.org/en/>; rel="alternate"; hreflang="x-default"
```

---

## 3. HTML <head> Template

```html
<head>
  <meta charset="UTF-8" />
  <title><!-- Title theo ngôn ngữ --></title>
  <meta name="description" content="<!-- Description theo ngôn ngữ -->" />
  <link rel="canonical" href="https://ketnoi.muonnoi.org/en/" />
  <link rel="alternate" hreflang="vi-VN" href="https://ketnoi.muonnoi.org/" />
  <link rel="alternate" hreflang="en" href="https://ketnoi.muonnoi.org/en/" />
  <link rel="alternate" hreflang="zh-Hans" href="https://ketnoi.muonnoi.org/zh/" />
  <link rel="alternate" hreflang="ko" href="https://ketnoi.muonnoi.org/ko/" />
  <link rel="alternate" hreflang="ja" href="https://ketnoi.muonnoi.org/ja/" />
  <link rel="alternate" hreflang="fr" href="https://ketnoi.muonnoi.org/fr/" />
  <link rel="alternate" hreflang="es" href="https://ketnoi.muonnoi.org/es/" />
  <link rel="alternate" hreflang="x-default" href="https://ketnoi.muonnoi.org/en/" />
</head>
```

---

## 4. Kiểm tra lỗi hreflang phổ biến

| Lỗi | Cách tránh |
|---|---|
| Self-referencing missing | Mỗi trang phải có hreflang đến chính nó |
| Bi-directional missing | Nếu A hreflang B, thì B phải hreflang A |
| x-default missing | Luôn có x-default |
| URL tương đối | Dùng absolute URL (https://...) |
| Ngôn ngữ sai code | Dùng `zh-Hans` không phải `zh-CN` |

---

**Kết Nối Muôn Nơi**
