# Phán Quyết Kiến Trúc — Kết Nối Muôn Nơi

Phiên bản: v1.0 — 2026-06-06  
Trạng thái: **Đã phê duyệt — bắt buộc tuân thủ toàn hệ**

---

## 1. Một sản phẩm duy nhất

| Sai | Đúng |
|---|---|
| 3 sản phẩm riêng (ketnoi, henho, meet) | **1 sản phẩm: ketnoi.muonnoi.org** |
| 3 repo, 3 CMS, 3 DB | **1 repo, 1 CMS, 1 DB** |
| 3 thương hiệu cạnh tranh nội bộ | **1 thương hiệu + 2 SEO aliases** |

### Alias redirects

```
henho.muonnoi.org/*  →  301 →  https://ketnoi.muonnoi.org/:splat
meet.muonnoi.org/*   →  301 →  https://ketnoi.muonnoi.org/en/:splat
```

- `henho.muonnoi.org`: Landing SEO cho từ khoá "hẹn hò", "tìm người yêu", "kết bạn", "hẹn hò nghiêm túc" → redirect về ketnoi.
- `meet.muonnoi.org`: Landing SEO quốc tế cho "meet people", "relationship platform", "verified people", "trusted connections" → redirect về `/en/`.

**Không tạo repo mới.**  
**Không tạo app mới.**  
**Không tạo database mới.**

---

## 2. Tên & định vị

**Tên public:** Kết Nối Muôn Nơi  
**Không phải:** Dating App  

**Định vị:**
> Nền tảng kết nối con người đã xác minh.

**Hero:**
> Gặp người thật. Hiểu nhau thật. Tôn trọng ranh giới thật.

**Subline:**
> Kết Nối Muôn Nơi giúp những người đã xác minh danh tính kết nối với nhau thông qua giá trị sống, mục tiêu, nhịp sống và sự sẵn sàng cho một mối quan hệ lành mạnh.

---

## 3. Cam kết 100% thật

**Cấm tuyệt đối:**
- AI face / AI avatar
- AI girlfriend / AI boyfriend
- Deepfake
- AI voice clone
- Ảnh AI-generated

**Yêu cầu:**
- 100% ảnh thật
- 100% video thật
- 100% người thật

---

## 4. Trust Layer (3 lớp)

| Lớp | Câu hỏi |
|---|---|
| **Identity** | Tôi là ai? |
| **Intent** | Tôi đang tìm gì? |
| **Readiness** | Tôi đã sẵn sàng đến đâu? |

---

## 5. Hệ 9 cấp

| Cấp | Tên hiển thị | Màu nick | Dấu tích | Ý nghĩa |
|---|---|---|---|---|
| 1 | Free | Không màu | Không tick | Chỉ email/nickname |
| 2 | Basic Verified | Bạc `#C8CCD2` | Tick nhỏ xám | Verify Muôn Nơi cơ bản |
| 3 | Identity Verified | Xanh dương `#4DA3FF` | Tick xanh nhỏ | Verify.iai.one |
| 4 | Profile Plus | Xanh lá `#30C97A` | Tick xanh lá | Hồ sơ đầy đủ hơn |
| 5 | Intent Verified | Vàng `#F5C542` | Tick vàng | Xác minh mục tiêu quan hệ |
| 6 | Safe Date Ready | Cam `#FF8A3D` | Tick cam | Có Safe Date readiness |
| 7 | Community Trusted | Đỏ ruby `#E3425F` | Tick đỏ | Có tín nhiệm cộng đồng |
| 8 | Relationship Builder | Tím nhạt `#9B6DFF` | Tick tím lớn | Hồ sơ sâu, lịch sử tốt |
| 9 | Elite Trust | Tím đậm `#4B1FAF` | Tick tím đậm lớn nhất + viền | Cấp cao nhất |

### Quy tắc hiển thị

- **Level 1**: nickname thường, không màu, không tick.
- **Level 2–3**: tick nhỏ.
- **Level 4–6**: tick vừa, màu rõ hơn.
- **Level 7–8**: tick lớn hơn, có viền nhẹ.
- **Level 9**: tick lớn nhất, tím đậm, glow rất nhẹ.

### Phân biệt 3 trục

| Trục | Cách đạt được | Có thể mua? |
|---|---|---|
| **Màu nick** | Cấp hồ sơ / gói / mức xác minh | Có (theo gói) |
| **Dấu tích** | Trạng thái xác minh thật | Không |
| **Trust score** | Hành vi thật, đóng góp cộng đồng | **Không** |

> **Cấp 9 không phải vì mua gói cao nhất.**  
> **Cấp 9 = xác minh cao + hồ sơ sâu + hành vi tốt + đủ điều kiện mở quyền cao cấp.**

---

## 6. Hệ quà tặng → Biểu tượng quan tâm

**Không gọi:** virtual gift  
**Gọi đúng:** Biểu tượng quan tâm

**Ví dụ:**
- Hoa cảm ơn
- Một lời chúc
- Ngôi sao động viên
- Tách trà
- Cuốn sách
- Hành trình mới
- Hạt giống niềm tin

**Quy tắc:**
- 99 món.
- Không có cash out.
- Không có đổi ra tiền.
- Thể hiện sự quan tâm, không mua tình cảm.

---

## 7. Công ty & pháp nhân

| Vai trò | Pháp nhân |
|---|---|
| Đầu tư, kêu gọi đầu tư, phát triển | **Công ty CP Giáo dục Hành Trình Kasan** (VN) |
| Vận hành thanh toán trong nước | **Công ty CP Giáo dục Truyền Thông Việt Can New** (VN) |
| Điều phối quốc tế | **VIET CAN NEW CORP** (US) |

---

## 8. Trang đầu tư

**URL:** `dautu.muonnoi.org/projects/ketnoi/`

**Trạng thái phải ghi:**
> Founder Review Ready · Not Dev Ready · Not Legal Approved · Not Production Ready

**Không được ghi:**
- Live
- Operational
- Production

Vì chưa có bằng chứng.

---

## 9. Ngôn ngữ

```
/       → vi (default)
/en/    → English
/zh/    → Chinese
/ko/    → Korean
/ja/    → Japanese
/fr/    → French
/es/    → Spanish
```

---

## 10. Chỉ đạo cuối cho DEV

1. Không tạo repo mới cho henho.muonnoi.org.
2. Không tạo repo mới cho meet.muonnoi.org.
3. Chỉ có 1 sản phẩm: ketnoi.muonnoi.org.
4. henho và meet là SEO aliases.
5. Tất cả legal, privacy, safety, KYC, gifts, membership dùng chung.
6. Tất cả traffic đổ về ketnoi.muonnoi.org.
7. Mọi dự án cần gọi vốn sẽ xuất hiện tại `dautu.muonnoi.org/projects/<slug>/`.
8. Công ty Hành Trình Kasan là đơn vị đầu tư, kêu gọi đầu tư và phát triển.
9. Công ty Truyền Thông Việt Can New là đơn vị vận hành thanh toán trong nước.
10. VIET CAN NEW CORP là pháp nhân điều phối quốc tế.

---

*Phán quyết này có hiệu lực ngay lập tức. Mọi quyết định thiết kế, code, và triển khai sau ngày 2026-06-06 phải tuân thủ.*
