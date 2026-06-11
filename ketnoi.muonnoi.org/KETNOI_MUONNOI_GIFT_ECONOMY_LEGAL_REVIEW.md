# XEM XÉT PHÁP LÝ HỆ THỐNG QUÀ VÀ ĐIỂM NỘI BỘ — KẾT NỐI MUÔN NƠI

Phiên bản: v0.1 — 2026  
Trạng thái: Draft Proposed — Chờ Founder khóa và Legal Counsel review  
Subdomain: ketnoi.muonnoi.org

---

## 1. Khuyến nghị quan trọng nhất

**KHÔNG NEO GIÁ TRỊ ĐIỂM VÀO ĐỒNG TIỀN THỰC.**

Bản draft trước ghi:

> "[tỷ lệ neo tiền — đã xóa theo legal review]"

**SAI. NGUY HIỂM. PHẢI XÓA.**

---

## 2. Định nghĩa đúng: Gói Hỗ Trợ Nền Tảng

### 2.1. Người dùng mua gì?

Người dùng **không mua điểm**.

Người dùng mua **gói hỗ trợ nền tảng** (Platform Support Package).

Ví dụ:
- "Gói Cộng Đồng Nhỏ" — 2 USD
- "Gói Cộng Đồng Vừa" — 5 USD
- "Gói Cộng Đồng Lớn" — 10 USD

### 2.2. Nền tảng cấp gì?

Nền tảng **cấp điểm nội bộ** (Internal Points) như một phần quà tri ân.

Ví dụ:
- Gói 2 USD → nhận 200 điểm nội bộ
- Gói 5 USD → nhận 550 điểm nội bộ
- Gói 10 USD → nhận 1.200 điểm nội bộ

**Khác biệt pháp lý cực lớn:**
- Không có tỷ giá cố định.
- Không có quyền đổi ngược.
- Điểm là phần thưởng nội bộ, không phải hàng hóa.

### 2.3. Điểm là gì?

- **Không phải tiền tệ.**
- **Không phải stored value.**
- **Không phải virtual currency theo luật thanh toán.**
- **Không có giá trị bên ngoài nền tảng.**
- **Không đổi được thành tiền mặt, crypto, hoặc voucher bên ngoài.**
- **Không chuyển nhượng được cho người khác ngoài việc tặng quà trong nền tảng.**

---

## 3. Phân loại pháp lý

### 3.1. Không phải tiền điện tử (Not Cryptocurrency)
- Không blockchain.
- Không decentralized.
- Không mining, staking, yield.
- Không trade trên sàn.

### 3.2. Không phải stored value / prepaid access
- Theo US Code 15 USC 1693o: prepaid access có thể nạp, rút, chuyển.
- Điểm Muôn Nơi: không rút, không chuyển ra ngoài, không đổi thành tiền.

### 3.3. Không phải gambling
- Không yếu tố may rủi.
- Không thưởng tiền mặt.
- Người dùng chọn quà cụ thể để tặng.

### 3.4. Không phải chứng khoán (Not Security)
- Không đầu tư.
- Không hứa hẹn lợi nhuận.
- Không quyền sở hữu trong công ty.

---

## 4. Chính sách hoàn tiền (Refund)

### 4.1. Gói hỗ trợ nền tảng
- **Không hoàn tiền** sau 14 ngày nếu điểm đã được cấp.
- Có thể hoàn tiền trong 14 ngày nếu chưa sử dụng điểm nào (cooling-off period).

### 4.2. Quà đã gửi
- **Không hoàn tiền** vì điểm đã chuyển cho người nhận.
- Ngoại lệ: scam xác nhận, gian lận, lỗi kỹ thuật.

### 4.3. Quà bị report scam
- Nếu quà được gửi trong bối cảnh scam (romance scam, extortion):
- Người nhận bị khóa, quà bị đóng băng.
- Người gửi có thể được cấp lại điểm (not refund, mà là credit nội bộ).

---

## 5. Thuế và AML

### 5.1. Thuế GTGT / VAT
- Gói hỗ trợ nền tảng có thể chịu thuế GTGT/VAT tùy quốc gia.
- Điểm nội bộ không chịu thuế riêng (vì không phải hàng hóa độc lập).

### 5.2. AML (Anti-Money Laundering)
- Vì không cash-out, rủi ro AML thấp.
- Nếu mở cash-out trong tương lai (không có trong kế hoạch v0.1): phải tuân thủ KYC đầy đủ cho người nhận tiền.

### 5.3. Bookkeeping
- Doanh thu: từ gói hỗ trợ nền tảng.
- COGS: chi phí đối tác voucher (nếu có).
- Điểm nội bộ không ghi nhận là liability trên bảng cân đối kế toán (vì không có nghĩa vụ đổi ra tiền).

---

## 6. Rủi ro còn lại

| # | Rủi ro | Mức độ | Giảm thiểu |
|---|---|---|---|
| 1 | Cơ quan quản lý có thể vẫn xem điểm là "virtual currency" | Trung bình | Tư vấn luật sư trước launch; sẵn sàng điều chỉnh wording |
| 2 | User hiểu nhầm điểm có giá trị tiền tệ | Thấp | Messaging rõ trong app: "Điểm không có giá trị tiền tệ" |
| 3 | Scammer dùng gift để "làm nóng" nạn nhân | Trung bình | Velocity limits, relationship duration checks, pattern detection |
| 4 | Đối tác voucher yêu cầu thanh toán thực | Thấp | Hợp đồng với đối tác rõ ràng; điểm chỉ đổi voucher, không tiền mặt |

---

## 7. Wording chuẩn (Approved)

### 7.1. Không dùng
- ❌ "Mua điểm"
- ❌ "[tỷ lệ neo tiền — đã xóa]"
- ❌ "Nạp tiền"
- ❌ "Rút tiền"
- ❌ "Chuyển điểm"
- ❌ "Đổi điểm thành tiền"

### 7.2. Dùng
- ✅ "Hỗ trợ nền tảng"
- ✅ "Nhận điểm nội bộ"
- ✅ "Điểm tri ân"
- ✅ "Quà nội bộ"
- ✅ "Không có giá trị tiền tệ"

---

## 8. Liên hệ

- Email pháp lý: legal@muonnoi.org
- Email tài chính: billing@muonnoi.org

---

**Kết Nối Muôn Nơi**  
Gặp người thật. Hiểu nhau thật. Tôn trọng ranh giới thật.
