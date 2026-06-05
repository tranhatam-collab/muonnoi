# SỔ TAY VẬN HÀNH KIỂM DUYỆT VÀ AN TOÀN — KẾT NỐI MUÔN NƠI

Phiên bản: v0.1 — 2026  
Trạng thái: Draft Proposed — Chờ Founder khóa  
Subdomain: ketnoi.muonnoi.org  
Đối tượng: Moderation Team, Safety Team, Founder

---

## 1. Tổ chức đội moderation

### 1.1. Cấu trúc đề xuất (v0.1)

| Vai trò | Số lượng | Ca làm việc | Yêu cầu |
|---|---|---|---|
| Safety Lead | 1 | Toàn thời gian | Kinh nghiệm trust & safety 3+ năm |
| Moderator | 2–3 | Xoay ca (24/7 coverage nếu có thể) | Training 40 giờ trước khi làm việc độc lập |
| AI Triage | 1 (system) | 24/7 | Rule engine phân loại report |
| On-call Emergency | 1 luôn có | Luân phiên | Xử lý panic alert, CSAM |

### 1.2. Training bắt buộc
- 8 giờ: Chính sách Muôn Nơi (Terms, Privacy, Safety, Gift Policy).
- 8 giờ: Nhận biết CSAM, grooming, romance scam.
- 8 giờ: Xử lý report, evidence collection, escalation.
- 8 giờ: Trauma-informed response (không victim-blame).
- 8 giờ: Luật địa phương (VN, nếu global thì thêm EU/US).

---

## 2. Quy trình xử lý report

### 2.1. Nhận report

| Kênh | SLA | Cách thức |
|---|---|---|
| In-app report | Phản hồi tự động trong 1 phút | Acknowledgment message |
| Email safety@ | 4 giờ làm việc | Ticket system |
| Emergency panic | 15 phút | On-call alert |
| CSAM | 1 giờ | Immediate escalation |

### 2.2. Phân loại (Triage)

| Mức | Mô tả | Thời gian xử lý |
|---|---|---|
| P0 — Emergency | CSAM, violence threat, imminent harm | <1 giờ |
| P1 — High | Scam confirmed, harassment, underage | <4 giờ |
| P2 — Medium | Spam, policy violation, AI content | <24 giờ |
| P3 — Low | Dispute, appeal, general concern | <7 ngày |

### 2.3. Hành động

| Vi phạm | Hành động lần 1 | Hành động lặp lại |
|---|---|---|
| Spam nhẹ | Cảnh báo | Hạn chế tính năng 7 ngày |
| AI profile image | Yêu cầu thay ảnh, hạ verification | Khóa tài khoản |
| Quấy rối | Khóa chat 7 ngày, required quiz | Khóa tài khoản 30 ngày / vĩnh viễn |
| Romance scam | Khóa tài khoản, đóng băng quà | Ban vĩnh viễn, báo cáo cơ quan chức năng |
| CSAM | Ban vĩnh viễn, báo cáo NCMEC, xóa data | — |
| Underage | Khóa tài khoản, xóa data | — |

---

## 3. Evidence và Documentation

### 3.1. Thu thập bằng chứng
- Screenshot report với timestamp.
- Log chat (nếu còn trong retention window 90 ngày).
- Profile info, IP log (nếu cần cho law enforcement).
- Lịch sử hành vi của người bị report.

### 3.2. Lưu trữ
- Evidence lưu trữ encrypted, chỉ Safety Lead và Legal Counsel truy cập.
- Retention: 1 năm sau khi case đóng (hoặc theo yêu cầu pháp lý).

---

## 4. Appeal Process

### 4.1. Người dùng appeal
- Form trong app hoặc email appeal@muonnoi.org.
- Yêu cầu: lý do, bằng chứng (nếu có).

### 4.2. Review
- Moderator khác review (không phải người ban ban đầu).
- Safety Lead phê duyệt nếu nghiêm trọng.

### 4.3. SLA
- Non-emergency: 7 ngày.
- Emergency/wrongful ban: 24 giờ.

### 4.4. Kết quả
- Thông báo rõ lý do uphold hoặc overturn.
- Nếu overturn: khôi phục tài khoản, xin lỗi, có thể bồi thường điểm nội bộ.

---

## 5. KPI Moderation

| KPI | Mục tiêu | Cách đo |
|---|---|---|
| P0 response time | <1 giờ | Timestamp report → action |
| P1 response time | <4 giờ | Timestamp report → action |
| False ban rate | <2% | Appeal overturned / total bans |
| User satisfaction (report) | >70% | Post-resolution survey |
| Moderator burnout | Giảm | Rotation, mental health support |

---

## 6. Liên hệ

- Email moderation: safety@muonnoi.org
- Email emergency: emergency@muonnoi.org

---

**Kết Nối Muôn Nơi**  
Gặp người thật. Hiểu nhau thật. Tôn trọng ranh giới thật.
