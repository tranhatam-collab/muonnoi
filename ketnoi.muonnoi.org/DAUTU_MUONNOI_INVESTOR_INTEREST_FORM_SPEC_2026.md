# SPEC FORM QUAN TÂM ĐẦU TƯ — DAUTU.MUONNOI.ORG

Phiên bản: v0.1 — 2026  
Trạng thái: Draft Proposed — Chờ Founder khóa

---

## 1. Vị trí form

- **URL:** `dautu.muonnoi.org/interest/`
- **Truy cập:** Public (không cần đăng nhập).
- **Mục đích:** Thu thập thông tin quan tâm, không phải giao dịch đầu tư.

---

## 2. Trường bắt buộc

| # | Trường | Loại | Validation |
|---|---|---|---|
| 1 | Họ tên | text | Không để trống, tối thiểu 2 từ |
| 2 | Email | email | Format hợp lệ, không temp/disposable |
| 3 | Quốc gia cư trú | dropdown | ISO 3166-1 alpha-2 |
| 4 | Số điện thoại | tel | Không để trống, format theo quốc gia |
| 5 | Dự án quan tâm | multi-select | Chọn từ danh sách dự án hiện có |
| 6 | Loại nhà đầu tư | select | Individual / Corporate / Fund / Angel / Strategic |
| 7 | Mức quan tâm dự kiến | select | <5.000 USD / 5.000–25.000 / 25.000–100.000 / 100.000+ |
| 8 | Xác nhận đã đọc rủi ro | checkbox | Bắt buộc tick |
| 9 | Xác nhận đây chưa phải giao dịch đầu tư | checkbox | Bắt buộc tick |
| 10 | Đồng ý được liên hệ | checkbox | Bắt buộc tick |

---

## 3. Trường tùy chọn

| # | Trường | Loại |
|---|---|---|
| 11 | Mục tiêu quan tâm | text area |
| 12 | Kinh nghiệm đầu tư startup | select (Có/Không) |
| 13 | Nguồn biết đến Muôn Nơi | select |
| 14 | Ngôn ngữ ưu tiên liên hệ | select (vi/en/zh/ko/ja/fr/es) |

---

## 4. Xử lý sau submit

1. **Auto-reply email:** Cảm ơn + xác nhận đây chưa phải giao dịch.
2. **Internal notification:** Gửi đến invest@muonnoi.org.
3. **CRM entry:** Lưu vào hệ thống quản lý investor (nếu có).
4. **Review SLA:** Đội phụ trách review trong 5 ngày làm việc.
5. **Không nhận tiền:** Form này không có chức năng thanh toán.

---

## 5. UI/UX yêu cầu

- Form rõ ràng, không dark pattern ép tick.
- Checkbox rủi ro phải hiển thị đầy đủ text, không ẩn trong link.
- Không lưu thông tin nhạy cảm (passport, ID) qua form public.
- reCAPTCHA hoặc tương đương để chống spam.

---

**Đầu Tư Muôn Nơi**
