# CHÍNH SÁCH ĐẢM BẢO ĐỘ TUỔI — KẾT NỐI MUÔN NƠI

Phiên bản: v0.1 — 2026  
Trạng thái: Draft Proposed — Chờ Founder khóa  
Subdomain: ketnoi.muonnoi.org  
Độ tuổi tối thiểu: 18+

---

## 1. Vấn đề

Self-declaration ("Tôi trên 18 tuổi") **KHÔNG ĐỦ** cho platform có intent quan hệ.

Theo:
- **OSA (UK):** age assurance "highly effective" cho nội dung người lớn.
- **DSA (EU):** age verification cho nền tảng tiếp cận trẻ em.
- **COPPA (Mỹ):** cấm thu thập data trẻ em dưới 13.
- **PDPVN (Việt Nam):** bảo vệ trẻ em trực tuyến.

---

## 2. Phân cấp đảm bảo độ tuổi

### 2.1. Level 1 — Guest (Chưa đăng ký)
- Age gate trước khi vào landing.
- Self-declaration + IP risk signals.
- Chỉ nội dung public, không ảnh user, không nội dung nhạy cảm.

### 2.2. Level 2 — Basic Registration (Membership 1)
- **Yêu cầu:** Email + Phone + Self-declaration.
- Email hợp lệ (không temp/disposable).
- Phone verified qua OTP.
- **Không được chat/match với người đã xác minh.**
- Profile nháp, không public.

### 2.3. Level 3 — Age Verified (Membership 2+)
- **Yêu cầu:** Xác minh độ tuổi qua Verify.muonnoi.org hoặc Verify.iai.one.
- Cách thức:
  - Selfie/liveness + OCR ID (nếu quốc gia cho phép).
  - Hoặc: Credit card age verification (nếu có).
  - Hoặc: Third-party age assurance service (Yoti, Onfido, v.v.).
- Sau khi verify: mới được dating features.

---

## 3. Các phương pháp xác minh độ tuổi

| Phương pháp | Độ tin cậy | Chi phí ước tính | Ghi chú |
|---|---|---|---|
| Self-declaration | Thấp | Miễn phí | Chỉ dùng cho guest viewing |
| Email domain analysis | Thấp | Miễn phí | Chặn email edu dưới đại học |
| Phone OTP | Trung bình | Thấp | Không đủ một mình |
| Selfie + liveness | Cao | Trung bình | Verify.muonnoi.org cấp 2 |
| ID document + OCR | Rất cao | Cao | Verify.iai.one cấp 3 |
| Credit card verification | Cao | Trung bình | Không phổ biến ở VN |
| Third-party age assurance | Rất cao | Cao | Yoti, Onfido |

**Khuyến nghị v0.1:** Selfie/liveness (cấp 2) là minimum viable age assurance. ID verification (cấp 3) là optional nâng cao.

---

## 4. Xử lý vi phạm độ tuổi

### 4.1. Phát hiện user dưới 18
- Nếu report + bằng chứng: khóa tài khoản ngay lập tức.
- Nếu nghi ngờ: yêu cầu re-verify tuổi trong 7 ngày.
- Nếu không verify: khóa tài khoản.

### 4.2. CSAM
- Zero tolerance.
- Khóa tài khoản, xóa nội dung, báo cáo NCMEC/cơ quan chức năng.
- Không cần xác nhận vi phạm trước khi report.

### 4.3. User từ 13–17
- Không được phép đăng ký.
- Nếu phát hiện: xóa tài khoản, xóa dữ liệu theo COPPA/PDPVN.

---

## 5. Liên hệ

- Email an toàn: safety@muonnoi.org

---

**Kết Nối Muôn Nơi**  
Gặp người thật. Hiểu nhau thật. Tôn trọng ranh giới thật.
