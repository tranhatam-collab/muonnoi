# AUDIT CẤU TRÚC DEAL, ĐỊNH GIÁ & CAP TABLE — KẾT NỐI MUÔN NƠI

**Người thực hiện:** Chuyên gia tư vấn pháp lý & định giá độc lập
**Ngày audit:** 05/06/2026
**Mức độ rủi ro:** Rất cao (Deal: 2/10, Định giá: 1/10)

---

## 1. VẤN ĐỀ: KHÔNG CÓ CẤU TRÚC DEAL NÀO ĐƯỢC ĐỀ XUẤT

Hồ sơ nêu "Nhu cầu vốn 250K–500K USD" nhưng **không có**:
- Định giá pre-money (valuation)
- Hình thức đầu tư: Equity, Convertible Note, SAFE, hay Revenue Share?
- Phần trăm cổ phần dự kiến bán
- Board structure: Founder giữ bao nhiêu ghế, NĐT có ghế không?
- Protective provisions: Veto rights trên những quyết định gì?
- Information rights: NĐT nhận báo cáo gì, tần suất bao lâu?
- Liquidation preference: 1x non-participating? Participating?
- Anti-dilution: Broad-based weighted average? Full ratchet?

**Đánh giá:** Đây là thiếu sót **nghiêm trọng nhất** của hồ sơ. Không có term sheet outline = founder chưa sẵn sàng đàm phán.

---

## 2. KHUYẾN NGHỊ CẤU TRÚC DEAL CHO ROUND 0 (250K–500K)

| Thành phần | Khuyến nghị | Lý do |
|---|---|---|
| **Instrument** | SAFE (Simple Agreement for Future Equity) | Phổ biến, nhanh, không cần định giá chính xác ngay |
| **Valuation Cap** | 2.000.000 – 2.500.000 USD | Pre-revenue, 1 founder, no traction. 3x-5x của raise. |
| **Discount** | 15–20% | Khuyến khích NĐT vào sớm |
| **MFN** | Có | Nếu có NĐT sau với điều khoản tốt hơn, NĐT SAFE được hưởng |
| **Board** | 2 ghế: Founder + 1 Independent (không phải NĐT Round 0) | Giữ founder control nhưng có governance |
| **Pro-rata** | Có | NĐT Round 0 có quyền tham gia vòng sau để anti-dilute |
| **Information rights** | Báo cáo hàng tháng + tài chính hàng quý | Quyền tối thiểu |
| **Major decision veto** | Không cho Round 0 (quá nhỏ) | Chỉ áp dụng nếu raise >500K hoặc NĐT là lead |

### 2.1. Cảnh báo về VN law

- **SAFE không phải chứng khoán chuyển đổi theo luật VN.** Nếu NĐT là người VN hoặc entity VN, cần cấu trúc thành **khoản vay chuyển đổi** (convertible loan) theo Nghị định 155/2020/NĐ-CP hoặc dùng **cổ phiếu ưu đãi**.
- **NĐT nước ngoài đầu tư vào công ty VN:** Cần **Giấy chứng nhận đăng ký đầu tư (IRC/ERC)** theo Luật Đầu tư 2020. SAFE có thể bị coi là "hợp đồng đầu tư" cần đăng ký.

---

## 3. TERM SHEET OUTLINE (1 TRANG A4)

Tối thiểu phải có trước khi mở vòng:

1. **Pre-money valuation** hoặc SAFE cap: 2.000.000 USD
2. **Amount raising:** 250.000 – 500.000 USD
3. **Amount committed:** _(điền khi có)_
4. **Instrument:** SAFE (YC standard template, adapted for VN law)
5. **Use of proceeds:** Product 30%, T&S/KYC 20%, Legal 15%, SEO 15%, Design 10%, Ops 5%, Reserve 5%
6. **Board composition:** 2 directors (Founder + 1 Independent)
7. **Information rights:** Monthly update + quarterly financials
8. **No-shop / Exclusivity:** 30 days (nếu có lead investor)
9. **Conditions precedent:** Legal review, due diligence, IP assignment

---

## 4. ĐỊNH GIÁ — PHƯƠNG PHÁP

### 4.1. Không dùng
- **DCF:** Không có cash flow ở pre-revenue
- **Comparable Company Analysis:** Public dating app (Match Group, Bumble) có revenue/EBITDA — không comparable với pre-revenue startup

### 4.2. Phương pháp khuyến nghị

| Phương pháp | Mô tả | Đề xuất cho Ketnoi |
|---|---|---|
| **Venture Capital Method** | Target return 10-30x cho seed. Exit 20-50M / 10x = Post-money 2-5M | Post-money 2.4M – 3M |
| **Scorecard Method** | Median SEA seed 1.5M–3M, điều chỉnh: 1 founder (-30%), no traction (-20%), no dev (-20%) | Pre-money 1.0M – 1.8M |
| **Berkus Method** | Sound Idea 500K, Prototype 0 (chưa dev), Quality Management 0 (1 founder), Strategic Relationships 250K, Product Rollout 0 | Max 1.25M |

### 4.3. Đề xuất chốt

```
Pre-money valuation:    1.500.000 – 2.000.000 USD
SAFE Cap:               2.000.000 USD
Discount:               20%
Raise:                  400.000 USD (từ range 250-500K)
Post-money (cap):       2.400.000 USD
Dilution (SAFE):        ~16.67% (chưa tính ESOP)
```

---

## 5. CAP TABLE MẪU

### Pre-money

```
Founder:                100%
```

### Post-SAFE (chưa ESOP)

```
Founder:                83.33%
Seed SAFE holders:      16.67%  (400K / 2.4M)
```

### Post-ESOP 10%

```
Founder:                75.00%  (83.33% * 90%)
ESOP pool:              10.00%  (chưa phân phối)
Seed SAFE holders:      15.00%  (16.67% * 90%)
```

### Sau Series A giả định (5M pre, 2M raise)

```
Founder:                53.57%  (75% * 71.4% sau dilution Series A)
ESOP pool:               7.14%
Seed SAFE holders:      10.71%  (đã chuyển đổi)
Series A investors:     28.57%  (2M / 7M post)
```

**Cảnh báo:** Founder giữ 53.57% sau Series A là **biên an toàn tối thiểu**. Nếu raise nhiều hơn hoặc valuation thấp hơn, founder có thể mất control.

---

## 6. ACTION ITEMS — DEAL STRUCTURE

| # | Hành động | Owner | Deadline |
|---|---|---|---|
| 1 | Chọn instrument: SAFE vs Convertible Loan (nếu NĐT VN) | Legal | 1 tuần |
| 2 | Draft term sheet outline 1 trang | Founder | 3 ngày |
| 3 | Xác định SAFE cap / pre-money | Founder + Advisor | 1 tuần |
| 4 | Tạo cap table pro-forma (Carta / Google Sheets) | Founder | 3 ngày |
| 5 | Legal review term sheet (VN + quốc tế) | External counsel | 2 tuần |
| 6 | Chuẩn bị SAFE template (adapted for VN law) | Legal | 2 tuần |

---

**Kết Nối Muôn Nơi**  
Deal Structure & Valuation Audit — Không có deal structure = không thể đàm phán.
