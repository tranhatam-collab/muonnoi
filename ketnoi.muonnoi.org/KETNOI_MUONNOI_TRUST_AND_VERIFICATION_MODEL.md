# MÔ HÌNH TÍN NHIỆM VÀ XÁC MINH — KẾT NỐI MUÔN NƠI

Phiên bản: v0.1 — 2026  
Trạng thái: Draft Proposed — Chờ Founder khóa  
Subdomain: ketnoi.muonnoi.org

---

## 1. Nguyên tắc: Không gộp tất cả vào một thang đo

Trước đây, bản draft gộp tất cả (membership, trust, verification, contribution, safety) vào một hệ thống 9 cấp độ. Điều này dễ gây hiểu lầm "pay-to-date" hoặc "pay-to-match".

**Khắc phục:** Tách thành **5 thang đo độc lập**, mỗi thang đo thể hiện một khía cạnh khác nhau của người dùng.

---

## 2. Thang đo 1 — Membership Level (1–9)

**Ý nghĩa:** Đo lường **quyền truy cập tính năng** và **độ sâu tham gia** vào nền tảng.

Không phản ánh độ "tốt" của người dùng. Chỉ phản ánh họ đã mở khóa những gì.

| Level | Tên | Điều kiện | Quyền chính |
|---|---|---|---|
| 1 | Guest | Email + nickname + age gate | Xem landing, tạo profile nháp |
| 2 | Verified | Email + phone + selfie/liveness | Profile giới hạn, gửi interest (5/ngày) |
| 3 | Trusted | + Verify.iai.one infrastructure | Chat, matching (5–12/ngày), quà nhóm 1–3 |
| 4 | Profile Ready | + Profile đầy đủ + video intro | Quà nhóm 1–5, profile badge |
| 5 | Intent Clear | + Chọn intent + Safety Agreement | Filter theo intent, prompts sâu |
| 6 | Safe Date Ready | + Quiz an toàn + contact tin cậy | Safe Date planning, check-in/check-out |
| 7 | Community Member | + 90 ngày sạch + 3 sao | Nhóm kết nối, event nhỏ, quà nhóm 1–7 |
| 8 | Relationship Builder | + Assessment sâu + 180 ngày sạch | Compatibility profile, private journey |
| 9 | Elite Trust | + 365 ngày sạch + manual review | Event riêng, concierge nhẹ |

**Nguyên tắc:** Không có "mua level". Level 9 không mua được. Có thể có gói trả phí tùy chọn nhưng không bắt buộc cho bất kỳ level nào.

---

## 3. Thang đo 2 — Trust Level (0–1000)

**Ý nghĩa:** Đo lường **mức độ tin cậy của cộng đồng** đối với người dùng này.

Không hiển thị public. Chỉ dùng nội bộ cho matching algorithm và moderation.

| Khoảng | Ý nghĩa | Tác động |
|---|---|---|
| 0–199 | Mới / Chưa đủ dữ liệu | Giới hạn visibility, cảnh báo khi tương tác |
| 200–499 | Tin cậy cơ bản | Visibility bình thường |
| 500–749 | Tin cậy tốt | Ưu tiên nhẹ trong matching |
| 750–899 | Tin cậy cao | Ưu tiên matching, mở một số tính năng đặc biệt |
| 900–1000 | Tin cậy xuất sắc | Có thể làm mentor/người giới thiệu |

**Cách tính:**
- +Points: report sạch, hoàn thành Safe Date reflection, nhận sao, thời gian hoạt động tích cực.
- –Points: bị report, vi phạm terms, dùng AI content, scam behavior.

**Không thể mua trust score.**

---

## 4. Thang đo 3 — Verification Level (0–5)

**Ý nghĩa:** Đo lường **mức độ xác minh danh tính**.

| Level | Tên | Yêu cầu |
|---|---|---|
| 0 | None | Chưa xác minh gì |
| 1 | Contact | Email + phone verified |
| 2 | Real Person | + Selfie/liveness + photo consistency |
| 3 | Deep Verified | + Verify.iai.one infrastructure + risk check |
| 4 | ID Verified | + Government ID (tùy quốc gia, optional) |
| 5 | Community Verified | + Manual review + event attendance |

**Mục đích:** Người dùng có thể chọn xác minh sâu hơn để tăng credibility, nhưng không bị ép buộc.

---

## 5. Thang đo 4 — Contribution Level (0–100)

**Ý nghĩa:** Đo lường **đóng góp của người dùng cho cộng đồng**.

| Khoảng | Hạng | Điều kiện |
|---|---|---|
| 0–19 | Người mới | Chưa có đóng góp |
| 20–39 | Thành viên tích cực | Tham gia event, hoàn thành quiz, giới thiệu bạn bè |
| 40–59 | Người đóng góp | Tổ chức event nhỏ, viết bài cộng đồng, mentorship nhẹ |
| 60–79 | Người dẫn dắt | Tổ chức workshop, đề cử người phù hợp, moderation support |
| 80–100 | Cộng đồng kiến tạo | Event lớn, content creation, community ambassador |

**Không phải KPI bắt buộc.** Người dùng không cần đạt contribution cao để dùng nền tảng.

---

## 6. Thang đo 5 — Safety Score (0–100)

**Ý nghĩa:** Đo lường **mức độ an toàn của hành vi người dùng**.

| Khoảng | Đánh giá | Hành động hệ thống |
|---|---|---|
| 90–100 | Xuất sắc | Không giới hạn gì |
| 70–89 | Tốt | Theo dõi nhẹ |
| 50–69 | Cần chú ý | Giới hạn một số tính năng, nhắc nhở safety |
| 30–49 | Cảnh báo | Khóa tạm chat/quà, yêu cầu quiz an toàn |
| 0–29 | Nguy hiểm | Khóa tài khoản, review manual, có thể ban |

**Cách tính:**
- –Điểm: bị report quấy rối, scam, money request, off-platform push, AI content.
- +Điểm: hoàn thành safety quiz, sử dụng Safe Date, report behavior xấu (cộng đồng watch).

---

## 7. Mối quan hệ giữa 5 thang đo

```
┌─────────────────────────────────────────────┐
│  Membership Level (1–9)                       │  → Quyền truy cập
│  ┌─────────────────────────────────────┐    │
│  │  Trust Level (0–1000)               │    │  → Matching priority
│  │  ┌─────────────────────────────┐    │    │
│  │  │  Verification Level (0–5)   │    │    │  → Credibility badge
│  │  │  ┌─────────────────────┐    │    │    │
│  │  │  │ Contribution (0–100)│    │    │    │  → Community role
│  │  │  │  ┌─────────────┐    │    │    │    │
│  │  │  │  │ Safety (0–100)│    │    │    │    │  → Risk assessment
│  │  │  │  └─────────────┘    │    │    │
│  │  │  └─────────────────────┘    │    │
│  │  └─────────────────────────────┘    │
│  └─────────────────────────────────────┘
└─────────────────────────────────────────────┘
```

**Ví dụ người dùng:**
- User A: Membership 5, Trust 650, Verification 3, Contribution 25, Safety 85 → Người dùng nghiêm túc, tin cậy, đã xác minh.
- User B: Membership 7, Trust 200, Verification 4, Contribution 60, Safety 40 → Có quyền cao nhưng trust thấp, safety cảnh báo → Cần review.

---

## 8. Không "pay-to-win"

- **Membership:** Có thể có gói trả phí tùy chọn nhưng không mở khóa level 9.
- **Trust:** Không mua được.
- **Verification:** Có phí xác minh nhưng không phải "mua credibility".
- **Contribution:** Chỉ đạt được qua hoạt động thực.
- **Safety:** Không mua được, chỉ duy trì bằng hành vi tử tế.

---

## 9. Liên hệ

- Email: trust@muonnoi.org

---

**Kết Nối Muôn Nơi**  
Gặp người thật. Hiểu nhau thật. Tôn trọng ranh giới thật.
