# KẾT NỐI MUÔN NƠI — ĐẶC TẢ HỒ SƠ & GHÉP ĐÔI

**Mã:** `KETNOI_MUONNOI_PROFILE_AND_MATCHING_SPEC_2026`
**Phiên bản:** v1.0 — DRAFT
**Ngày:** 2026-06-05
**Tiền đề:** RESEARCH_REPORT + PRODUCT_PLAN + PRIVACY_SAFETY_SPEC

---

## 1. TRIẾT LÝ HỒ SƠ

Hồ sơ không phải "ảnh + tuổi + bio". Hồ sơ Kết Nối Muôn Nơi là **Trust + Intent + Life Compatibility Profile** — khó fake (học từ Hinge, app ít bot/scam nhất nhờ prompt-based).

---

## 2. CẤU TRÚC HỒ SƠ CHUẨN (8 khối)

### A. Identity
tên hiển thị · tuổi · thành phố/vùng · ngôn ngữ · quốc gia đang sống · verified status · last active **dạng mờ** (không exact)

### B. Intent (chọn rõ — không trộn nhu cầu)
- Tìm hiểu nghiêm túc
- Tìm bạn đời
- Tìm bạn đồng hành
- Tìm bạn đi cùng / travel companion
- Tìm bạn học / phát triển bản thân
- Chưa chắc, muốn trò chuyện tử tế

> Không trộn người tìm hookup với người tìm kết hôn mà không có filter.

### C. Relationship readiness
sẵn sàng hẹn hò chưa · muốn tiến chậm/nhanh · muốn gặp offline sau bao lâu · ranh giới cá nhân · điều không chấp nhận

### D. Values
gia đình · sự nghiệp · học tập · sức khỏe · tâm linh/tôn giáo (nếu muốn) · tài chính · con cái · sống ở đâu · lối sống

### E. Life rhythm
sáng/tối · ở nhà/ra ngoài · du lịch nhiều/ít · giao tiếp hằng ngày/ít · hoạt động yêu thích

### F. Safety & trust
phone verified · photo/liveness verified · ID verified (optional) · community trust score · report history (KHÔNG public, chỉ nội bộ) · date safety preferences

### G. Conversation prompts (có chiều sâu)
- "Một điều tôi đang học để trở thành người tốt hơn là..."
- "Một mối quan hệ lành mạnh với tôi nghĩa là..."
- "Tôi cảm thấy được tôn trọng khi..."
- "Tôi muốn cùng người kia xây dựng..."
- "Một ranh giới tôi muốn được tôn trọng là..."

### H. Photos
- Tối thiểu 1 ảnh mặt rõ + 1 ảnh toàn thân lịch sự + 1 ảnh đời sống thật
- Video intro 10–20 giây (tùy chọn)
- Không filter nặng
- Watermark "verified photo" nếu qua liveness

---

## 3. THUẬT TOÁN GHÉP ĐÔI (Intent-first)

### 3.1 Nguyên tắc
- **Intent là filter cứng đầu tiên** — không bao giờ ghép trái mục tiêu quan hệ.
- Không tối ưu match count. Tối ưu **chất lượng tương thích**.
- Minh bạch: user hiểu vì sao được gợi ý (không black-box).

### 3.2 Các tầng tương thích (thứ tự ưu tiên)

| Tầng | Yếu tố | Loại |
|------|--------|------|
| 1 | **Intent match** | Filter cứng |
| 2 | **Verified trust tier** | Filter cứng (tier thấp thấy ít hơn) |
| 3 | **Location comfort** | Filter mềm (vùng mờ, không exact) |
| 4 | **Values alignment** | Điểm tương thích |
| 5 | **Life rhythm** | Điểm tương thích |
| 6 | **Relationship readiness** | Điểm tương thích |
| 7 | **Boundaries respect** | Loại trừ nếu xung đột |

### 3.3 Cơ chế phân phối
- **No infinite deck.** Mỗi ngày **5–12 gợi ý chất lượng**.
- Gợi ý kèm **lý do tương thích ngắn** ("cùng mục tiêu xây dựng gia đình", "nhịp sống tương đồng").
- Không ghép lại người đã pass/block.

### 3.4 Chống cơ chế gây nghiện / tổn thương
- KHÔNG hot ranking, body score, desirability score.
- KHÔNG "ai thích bạn" trả phí.
- KHÔNG read receipt ép trả lời.
- Conversation intent + **timeout nhẹ** chống ghosting (nhắc nhẹ, không phạt).

---

## 4. AN TOÀN NỮ GIỚI TRONG GHÉP ĐÔI
- Nữ kiểm soát ai được nhắn trước (cấu hình theo region — chốt ở PRODUCT_PLAN mục 8).
- Người chưa verify (tier thấp) bị giới hạn khả năng tiếp cận.
- Boundaries khai báo ở khối C/F được hệ tôn trọng tự động (lọc người vi phạm).

---

## 5. SONG NGỮ & ĐỊA PHƯƠNG HÓA
- Toàn bộ profile fields + prompts có VI/EN.
- `ketnoi` (VN) hiển thị VI-first; `meet` (global) EN-first.
- Prompts dịch giữ nguyên chiều sâu, không dịch máy thô.

---

## 6. CHECKLIST HOÀN THIỆN HỒ SƠ (gating)
- [ ] Đủ Identity + Intent + tối thiểu 3 ảnh → mới được hiển thị.
- [ ] Tier ≥ 2 (Real Person) → mới được nhắn.
- [ ] Ít nhất 2 prompt trả lời → tăng chất lượng match.
- [ ] Boundaries khai báo → kích hoạt auto-respect filter.

---

## 7. QUYỀN RIÊNG TƯ TRONG HỒ SƠ (liên kết PRIVACY spec)
- KHÔNG hiển thị: exact location, SĐT, email, thu nhập.
- last active dạng mờ.
- report history chỉ nội bộ.
- Screenshot có cảnh báo.

---

*DRAFT — chờ founder chốt (đặc biệt an toàn nữ giới theo region + cross-region matching) trước khi LOCK + dev handoff.*
