# KẾT NỐI MUÔN NƠI — ĐẶC TẢ QUYỀN RIÊNG TƯ & AN TOÀN

**Mã:** `KETNOI_MUONNOI_PRIVACY_SAFETY_SPEC_2026`
**Phiên bản:** v1.0 — DRAFT
**Ngày:** 2026-06-05
**Tiền đề:** RESEARCH_REPORT + PRODUCT_PLAN

---

## 1. NGUYÊN TẮC NỀN

1. **Privacy by default** — mọi mặc định nghiêng về bảo vệ người dùng.
2. **Data minimization** — chỉ thu thập điều thật sự cần.
3. **Zero-Knowledge verification** — xác nhận "18+" và "người thật" mà không lưu ID gốc.
4. **Self-hosted** — không để bên thứ ba chạm dữ liệu sinh trắc (tránh lặp vụ OkCupid/Clarifai).
5. **Right to delete thật** — xóa là xóa, không soft-delete giả.

---

## 2. CƠ CHẾ XÁC MINH (5 TIER)

| Tier | Tên | Yêu cầu | Quyền |
|------|-----|---------|-------|
| **0** | Guest | — | Chỉ xem landing public, KHÔNG xem profile người thật |
| **1** | Basic | email + phone + age confirmation | Tạo hồ sơ nháp |
| **2** | Real Person | selfie/liveness + photo consistency + anti-deepfake basic | Xem & được xem, nhắn giới hạn |
| **3** | Trusted Dating | ID optional/required tùy quốc gia + video intro + behavior history + safety agreement | Đầy đủ tính năng kết nối |
| **4** | Community Verified | manual review (host/event/connector) | Tổ chức meetup được duyệt |

### 2.1 Risk-based waterfall (giảm ma sát)
- **Rủi ro thấp:** facial age estimation (liveness, không cần ID) → vào nhanh.
- **Rủi ro trung bình:** selfie tươi mới + active liveness prompt.
- **Rủi ro cao:** ID + liveness + cooldown; khóa DM/thanh toán tới khi clear.

### 2.2 HEAA cho UK (bắt buộc pháp lý)
- User geo-IP = UK → bắt buộc HEAA (facial age estimation / photo-ID / credit-card / open banking).
- Tự khai "18+" + tick box = KHÔNG hợp lệ dưới Ofcom.

### 2.3 Zero-Knowledge (red-line)
- `verify.iai.one` chỉ lưu **kết quả quyết định** (pass/fail) + audit log.
- Biometric image **hủy ngay sau khi ghi quyết định** (retention = 0).
- Không lớp xử lý bên thứ ba chạm dữ liệu sinh trắc.

---

## 3. AN TOÀN NGƯỜI DÙNG

### 3.1 Chống quấy rối & repeat offender
- **Repeat-offender detection:** device/phone risk signals để chặn tạo lại tài khoản sau ban.
- **Panic/report flow:** nút khẩn cấp, report nhanh trong chat & profile.
- **Report SLA:** cam kết thời gian xử lý; phản hồi cho người report (vì "report không tác dụng" là phàn nàn lớn nhất).
- **An toàn nữ giới:** nữ kiểm soát ai nhắn trước (học Bumble/Fika).

### 3.2 Safe Date Mode
- Gợi ý địa điểm public.
- Share date plan với contact tin cậy.
- Check-in / check-out + panic shortcut.
- After-date reflection + report nhanh.

### 3.3 Money Request Shield
- Phát hiện pattern: "cho mượn tiền / đầu tư crypto / gửi USDT / emergency / vé máy bay / chuyển khoản".
- Hành động: cảnh báo người dùng + có thể tạm giữ chat để xác nhận.

### 3.4 Off-platform Warning
- Cảnh báo khi bị kéo sang Telegram/WhatsApp quá sớm: *"Bạn chưa đủ tín hiệu tin cậy để rời nền tảng. Hãy cẩn trọng với yêu cầu tiền, đầu tư hoặc thông tin cá nhân."*

### 3.5 AI Safety Assistant (giới hạn nghiêm ngặt)
- Được làm: profile coach, gợi ý câu hỏi tử tế, red-flag detector, mismatch summary, nhắc consent, cảnh báo scam.
- KHÔNG được: tán tỉnh thay user, giả danh người dùng, làm "người yêu ảo".

---

## 4. DỮ LIỆU & RETENTION

| Loại dữ liệu | Thu thập | Hiển thị | Retention |
|--------------|----------|----------|-----------|
| Ảnh hồ sơ | Có (mã hóa at rest) | Theo tier | Tới khi user xóa |
| Tin nhắn | Có (mã hóa) | Chỉ 2 bên | **Ngắn** + export/delete rõ |
| Vị trí | Vùng mờ (PostGIS) | KHÔNG exact distance | Không log chi tiết |
| SĐT / email | Có | KHÔNG public | Theo nhu cầu xác minh |
| Biometric | Tạm | KHÔNG | **0 (hủy sau quyết định)** |
| Report history | Có | KHÔNG public, chỉ nội bộ | Theo policy an toàn |

### 4.1 Quyền người dùng (bắt buộc UI)
- Delete account (hard delete + xác nhận).
- Delete chats.
- Export data.
- Block / report.
- Hidden mode.
- Tắt mọi tracking (mặc định tắt).

---

## 5. TUÂN THỦ PHÁP LÝ ĐA KHU VỰC

| Khu vực | Luật | Hành động bắt buộc |
|---------|------|--------------------|
| **UK** | OSA 2023 | HEAA + risk assessment trước launch; content moderation; CSEA report flow. Phạt tới **10% doanh thu toàn cầu**/£18M + tù 2 năm |
| **EU/EEA** | GDPR + DSA | Consent, DSR, DPO, risk-based moderation |
| **US** | FTC + CA AB 1043 | Không share data bên thứ ba kiểu OkCupid; age-bracket signal |
| **Vietnam** | **PDPL 91/2025 + NĐ 356/2025** | **Data residency VN**; TIA dossier nộp Bộ Công an (một lần); consent xuyên biên giới. Phạt tới **5% doanh thu** |

### 5.1 Danh mục P0
- **Child safety:** 18+ only, age gate, ID/liveness khi nghi ngờ, CSAM zero tolerance, mandatory report.
- **Consent & quấy rối:** cấm ảnh nhạy cảm không yêu cầu, ép gặp, đe dọa, stalking, doxxing, revenge porn, trafficking.
- **Tài chính:** cấm/cảnh báo xin tiền, vay, crypto pitch, link ví, emergency money.
- **Riêng tư:** minimization, delete, block/report, hidden mode, no exact location, privacy by default.
- **App Store / Play:** tuân thủ rule dating + UGC.

---

## 6. CHECKLIST KIỂM THỬ AN TOÀN (trước launch)

- [ ] Liveness chống deepfake/mask/injection (mục tiêu chuẩn iBeta PAD L3 nếu dùng provider).
- [ ] UK HEAA "motivated minor không vượt được".
- [ ] Biometric retention = 0 (kiểm tra log).
- [ ] Hard-delete xóa thật trên cả 2 region.
- [ ] Money Request Shield bắt đúng pattern đa ngôn ngữ (VI/EN).
- [ ] Repeat-offender detection chặn tạo lại tài khoản.
- [ ] Report SLA có dashboard đo.
- [ ] Không exact distance ở bất kỳ endpoint nào.
- [ ] PDPL TIA dossier đã nộp + lưu hồ sơ.

---

*DRAFT — cần counsel review trước khi LOCK.*
