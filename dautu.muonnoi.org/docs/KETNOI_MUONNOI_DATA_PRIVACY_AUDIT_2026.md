# AUDIT DATA PRIVACY & SPECIAL CATEGORY DATA — KẾT NỐI MUÔN NƠI

**Người thực hiện:** Chuyên gia tư vấn pháp lý & privacy độc lập
**Ngày audit:** 05/06/2026
**Mức độ rủi ro:** Trung bình (7/10 — design tốt, cần củng cố legal basis)

---

## 1. SPECIAL CATEGORY DATA (GDPR Article 9)

Dating app xử lý nhiều loại **Special Category Data** — yêu cầu **explicit consent**:

| Loại data | Phân loại GDPR | Áp dụng với Ketnoi |
|---|---|---|
| **Biometric data** | Article 9(1) | Selfie, liveness video — **bắt buộc explicit consent** |
| **Data về đời sống tình dục / orientation** | Article 9(1) | Profile hỏi về giới tính, mục tiêu quan hệ, mong muốn gia đình |
| **Mental health / compatibility** | Có thể là health data | Câu hỏi về anxiety, attachment style, personality |
| **Location history** | Không Article 9 nhưng nhạy cảm | PostGIS geo-mờ vẫn là location data cần bảo vệ |
| **Children data** | Additional protection | Nếu có feature gia đình / đồng nuôi dưỡng |

---

## 2. NHỮNG GÌ KHÔNG ĐƯỢC DÙNG LÀM LEGAL BASIS

| Legal Basis | Có thể dùng cho? | Không dùng cho Special Category? |
|---|---|---|
| **Legitimate interest** | Marketing, analytics (non-special) | ❌ Không được cho biometric, orientation |
| **Contract** | Cung cấp dịch vụ | ❌ Không đủ cho biometric |
| **Legal obligation** | Thuế, CSAM reporting | ⚠️ Hạn chế, không phải mục đích chính |
| **Vital interests** | Khẩn cấp y tế | ❌ Không áp dụng |
| **Public task** | Chính phủ | ❌ Không áp dụng cho commercial dating |

**Phải dùng:**
- **Explicit consent** (Article 9(2)(a) GDPR) — tick box riêng, không pre-ticked, có thể withdraw bất kỳ lúc nào

---

## 3. CONSENT FLOW ĐỀ XUẤT

```
User đăng ký
    ↓
[Screen 1] Thông báo data categories cần thu thập
    - "Chúng tôi cần thu thập: email, phone, ảnh, vị trí..."
    - Không yêu cầu tick ở đây, chỉ thông báo
    ↓
[Screen 2] Explicit consent cho biometric (TÁCH RIÊNG)
    - [ ] Tôi đồng ý cho phép xác minh khuôn mặt (liveness + selfie)
    - [ ] Tôi hiểu ảnh gốc sẽ bị xóa sau 30 ngày, chỉ giữ hash
    - Không pre-ticked. Không bundled.
    ↓
[Screen 3] Explicit consent cho matching data (TÁCH RIÊNG)
    - [ ] Tôi đồng ý chia sẻ thông tin: mục tiêu quan hệ, giá trị, lối sống
    - [ ] Tôi hiểu thông tin này dùng để matching, không bán cho bên thứ 3
    - Không pre-ticked.
    ↓
[Screen 4] Explicit consent cho marketing (OPT-IN, KHÔNG BẮT BUỘC)
    - [ ] Tôi đồng ý nhận thông tin về sản phẩm mới (không bắt buộc)
    - Pre-ticked = ❌ Không được. Phải opt-in.
    ↓
[Screen 5] Consent log
    - Timestamp, IP address, browser fingerprint, version của policy
    - Mã hóa lưu trữ, không thể sửa
```

---

## 4. WITHDRAW CONSENT

User có quyền withdraw consent bất kỳ lúc nào:
- **Biometric:** Withdraw = xóa ảnh/hash, mất verified badge
- **Matching data:** Withdraw = không thể matching, profile ẩn
- **Marketing:** Withdraw = ngừng nhận email marketing (vẫn dùng app)

**Không được:** Nếu user withdraw consent biometric → không được block toàn bộ tài khoản. Phải cho phép dùng app ở tier thấp hơn (Guest).

---

## 5. DATA MINIMIZATION

| Data | Cần thiết? | Lưu bao lâu? |
|---|---|---|
| Email | Có (auth) | Đến khi xóa tài khoản |
| Phone | Có (auth + anti-spam) | Đến khi xóa tài khoản |
| Selfie gốc | Không (ZK: chỉ lưu hash) | Xóa sau 30 ngày |
| Liveness video | Không (ZK: chỉ lưu kết quả) | Xóa sau 7 ngày |
| Exact location | Không (chỉ cần vùng/city) | Không lưu exact, chỉ lưu vùng |
| Chat messages | Có (moderation 90 ngày) | 90 ngày rồi auto-delete |
| Profile data (orientation, values) | Có (matching) | Đến khi xóa tài khoản |

---

## 6. CROSS-BORDER TRANSFER

| Tuyến | Cơ chế | Trạng thái | Hành động |
|---|---|---|---|
| VN → Global DB | PDPL: SCC + DPIA + Bộ CA approval | Chưa có | Chuẩn bị hồ sơ |
| EU → VN | GDPR: SCC + TIA (không có adequacy) | Chưa có | SCC + Transfer Impact Assessment |
| UK → VN | UK GDPR: IDTA + TIA | Chưa có | IDTA + TIA |
| User VN access global server | PDPL data localization | Rủi ro | Cell VN lưu 100% PII VN |

---

## 7. ACTION ITEMS — DATA PRIVACY

| # | Hành động | Owner | Deadline |
|---|---|---|---|
| 1 | DPIA template cho dating app (biometric + orientation) | Privacy counsel | 2 tuần |
| 2 | Consent flow UI/UX design (multi-step, không pre-ticked) | Product + Design | 2 tuần |
| 3 | Consent log implementation (immutable) | Dev | Phase 1 |
| 4 | Privacy Policy v0.1 (GDPR + PDPL compliant) | Legal + Product | 2 tuần |
| 5 | Data Processing Agreement (DPA) với third-party | Legal | 1 tháng |
| 6 | Data retention policy (auto-delete schedule) | Legal + Dev | 2 tuần |
| 7 | Cross-border transfer SCC + TIA | Legal | 1 tháng |

---

**Kết Nối Muôn Nơi**  
Data Privacy Audit — Explicit consent cho mọi Special Category. No bundled consent.
