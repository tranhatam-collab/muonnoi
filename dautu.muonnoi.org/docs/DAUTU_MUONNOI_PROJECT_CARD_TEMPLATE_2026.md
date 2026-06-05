# TEMPLATE CARD DỰ ÁN — DAUTU.MUONNOI.ORG

Phiên bản: v0.1 — 2026  
Trạng thái: Draft Proposed — Chờ Founder khóa

---

## 1. Cấu trúc card dự án

Mỗi dự án hiển thị dưới dạng card trên trang chủ và trang danh mục.

### Trường bắt buộc

| Trường | Loại | Giới hạn |
|---|---|---|
| Tên dự án | string | Tối đa 50 ký tự |
| Slug | string | a-z, 0-9, hyphen; dùng cho URL `/projects/<slug>/` |
| Mô tả 1 câu | string | Tối đa 140 ký tự |
| Trạng thái | enum | 1 trong 11 trạng thái chuẩn |
| Pháp nhân phụ trách | enum | Viet Can New Corp / CP Giáo dục Truyền Thông Việt Can New / CP Giáo dục Hành Trình Kasan |
| Loại quan tâm | multi-select | Đầu tư / Hợp tác / Tài trợ / Đồng phát triển |
| Mức sẵn sàng pháp lý | string | Tối đa 200 ký tự |

### Trường tùy chọn

| Trường | Loại |
|---|---|
| Logo/icon | SVG hoặc PNG 1:1 |
| Ảnh đại diện | JPG/PNG 16:9 |
| Subdomain | URL |
| Nhu cầu đầu tư | text |
| Hình thức quan tâm chi tiết | text |
| CTA | "Xem hồ sơ" / "Gửi quan tâm" / "Sắp mở" |

---

## 2. Màu trạng thái (UI Guide)

| Trạng thái | Màu badge | Ý nghĩa UI |
|---|---|---|
| Concept | gray | Chưa khả thi |
| Draft Plan | blue | Đang hoạch định |
| Founder Review | yellow | Chờ duyệt |
| Founder Approved | green-light | Đã duyệt, sẵn sàng build |
| Build Started | purple | Đang dev |
| Pilot Preparing | orange | Sắp test |
| Pilot Live | teal | Đang test |
| Investment Interest Open | green | Mở quan tâm |
| Legal Investment Review | red-light | Đang legal review |
| Investment Round Open | red | Mở vòng đầu tư |
| Closed | dark | Đóng |

---

## 3. Ví dụ card: Kết Nối Muôn Nơi

```
┌─────────────────────────────────────────┐
│  [Logo]  Kết Nối Muôn Nơi               │
│  ketnoi.muonnoi.org                     │
│                                         │
│  Nền tảng kết nối con người đã xác minh │
│  ưu tiên sự thật, an toàn, ranh giới.   │
│                                         │
│  Trạng thái: Founder Review Ready       │
│  Pháp nhân: CP Giáo dục Hành Trình Kasan│
│  Quan tâm: Đầu tư, Đồng phát triển      │
│                                         │
│  [Xem hồ sơ dự án →]                   │
└─────────────────────────────────────────┘
```

---

**Đầu Tư Muôn Nơi**
