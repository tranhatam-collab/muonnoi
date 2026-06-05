# AUDIT PHÁP NHÂN & CORPORATE STRUCTURE — KẾT NỐI MUÔN NƠI

**Người thực hiện:** Chuyên gia tư vấn pháp lý độc lập
**Ngày audit:** 05/06/2026
**Mức độ rủi ro:** Cao (4/10)

---

## 1. VẤN ĐỀ: 3 PHÁP NHÂN KHÔNG CÓ MÔ HÌNH QUAN HỆ RÕ RÀNG

Hồ sơ nêu:
- **Công ty Cổ phần Giáo dục Hành Trình Kasan (VN)** — Pháp nhân phụ trách
- **Công ty Cổ phần Giáo dục Truyền Thông Việt Can New (VN)** — Đại diện thanh toán
- **VIET CAN NEW CORP (US)** — Điều phối quốc tế

### 1.1. Vấn đề pháp lý nghiêm trọng

1. **Không có sơ đồ holding company.** Nhà đầu tư cần biết: họ đầu tư vào **công ty nào**, nhận cổ phần **công ty nào**, và cấu trúc này có **tax efficiency** không.
2. **Payment agent khác operating company** tạo rủi ro **transfer pricing** và **mất kiểm soát dòng tiền.** Nếu Viet Can New (VN) thu tiền nhưng Kasan (VN) là entity sở hữu sản phẩm, cần hợp đồng dịch vụ quản lý (MSA) rõ ràng.
3. **US Corp không có mối quan hệ pháp lý** với 2 công ty VN được nêu. Nếu founder dùng US Corp để ký SAFE với NĐT quốc tế, nhưng tài sản IP nằm ở VN → NĐT US không có recourse lên VN entity.

### 1.2. So sánh best practice cho startup SEA gọi vốn quốc tế

```
Tầng 1: Holding Company (Delaware C-Corp hoặc Singapore Pte. Ltd.)
    → Sở hữu 100% các entity địa phương
    → NĐT đầu tư vào Holding, nhận cổ phần Holding
    → Điều khoản bảo vệ áp dụng ở tầng này

Tầng 2: Operating Subsidiaries
    → VN: Công ty CP Kết Nối Muôn Nơi (hoặc Kasan nếu đổi tên/scope)
    → US: VIET CAN NEW CORP (nếu cần presence US)
    → Global: Singapore hoặc UK entity (nếu mở EU/UK)

Tầng 3: Payment & KYC Agent
    → Có thể là VN entity hoặc thuê third-party (Stripe, Payoneer)
    → Không nên tách payment agent ra khỏi operating company
      nếu không có lý do tax/compelling
```

### 1.3. Khuyến nghị

- **Option A (Khuyến nghị):** Thành lập **Singapore Holding Pte. Ltd.** → sở hữu 100% VN Operating Co. → NĐT đầu tư vào Singapore. Lý do: Tax treaty network, regulatory stability, familiar to SEA investors.
- **Option B:** Dùng **Delaware C-Corp** làm topco nếu target NĐT US. Cần có VIE hoặc direct ownership ở VN.
- **Option C (Tối thiểu):** Làm rõ mối quan hệ pháp lý giữa 3 entity hiện tại qua hợp đồng: MSA, IP Assignment, Intercompany Loan, Nominee Agreement.

---

## 2. VẤN ĐỀ: TÊN PHÁP NHÂN KHÔNG PHẢN ÁNH BUSINESS

"Giáo dục Hành Trình Kasan" và "Giáo dục Truyền Thông Việt Can New" — tên không liên quan đến dating/relationship tech.

**Hệ quả:** Khi gọi vốn, nhà đầu tư sẽ tra ĐKKD và thấy ngành nghề "giáo dục" thay vì "công nghệ thông tin" hoặc "dịch vụ mạng xã hội".

**Khuyến nghị:** Đổi tên hoặc thành lập entity mới có ngành nghề phù hợp. Ví dụ:
- Công ty CP Kết Nối Muôn Nơi
- Công ty CP Công nghệ Kết Nối IAI

---

## 3. CẤU TRÚC ĐỀ XUẤT CHO KẾT NỐI

```
Singapore Holding Pte. Ltd. (IAI One Holding)
    └── 100% Công ty CP Kết Nối Muôn Nơi (VN Operating)
            ├── Sở hữu IP: app, brand, tech
            ├── Nhận doanh thu
            ├── Chi phí vận hành
            └── Phát hành cổ phần (nếu không dùng SG Holding)

Nhà đầu tư đầu tư vào Singapore Holding
    → Nhận cổ phần Singapore Holding
    → Không trực tiếp sở hữu VN entity (indirect)
```

**Ưu điểm:**
- Singapore có tax treaty với VN → giảm withholding tax dividend
- SEA investors quen thuộc với Singapore structure
- Regulatory framework ổn định
- Có thể dùng cho future rounds (Series A, B)

**Chi phí ước tính:**
- Setup Singapore Pte. Ltd.: 3,000–5,000 SGD
- Annual compliance: 1,500–3,000 SGD/năm
- VN subsidiary registration: 50–100 triệu VNĐ

---

**Kết Nối Muôn Nơi**  
Corporate Structure Audit — Cần chốt entity + holding structure trước khi mở vòng.
