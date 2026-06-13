# 03 — Risk Matrix: Chấm điểm Va chạm + Cây Quyết định

> Đây là **gate quan trọng nhất** của Phase 1. Founder ký duyệt Risk Matrix là cột mốc bắt buộc trước khi vào Phase 2.

---

## A. HƯỚNG DẪN

- Risk Matrix lượng hóa độ nguy hiểm của **mỗi va chạm** đã phát hiện trong file 02.
- Mỗi va chạm chấm 3 trục -> Tổng điểm -> Ánh xạ vào hành động.
- Không nên có > 5 va chạm "HIGH" cùng lúc — nếu có, **xem xét đổi tên**.
- Phải có **chữ ký người duyệt** (founder hoặc brand owner).

---

## B. RUBRIC — 3 trục chấm điểm

### Trục 1 — Cùng ngành / Khác ngành (Industry Overlap)

| Điểm | Tiêu chí |
|------|----------|
| **3 (HIGH)** | Đối thủ va chạm hoạt động cùng ngành cốt lõi (cùng sản phẩm/dịch vụ, cùng đối tượng khách hàng). |
| **2 (MED)** | Đối thủ ở ngành liền kề (khách hàng có thể nhầm vì cùng "lĩnh vực rộng"). |
| **1 (LOW)** | Đối thủ ở ngành hoàn toàn khác. |

### Trục 2 — Chồng lấn địa lý (Geographic Overlap)

| Điểm | Tiêu chí |
|------|----------|
| **3 (HIGH)** | Đối thủ hoạt động ở thị trường target chính của mình. |
| **2 (MED)** | Đối thủ ở thị trường liền kề (cùng khu vực, không cùng quốc gia). |
| **1 (LOW)** | Đối thủ ở thị trường không liên quan (khác châu lục). |

### Trục 3 — Độ mạnh SEO/Brand của đối thủ (SEO Strength)

| Điểm | Tiêu chí |
|------|----------|
| **3 (HIGH)** | DR/DA >= 50, có Knowledge Panel, top 3 SERP, social verified, hoạt động > 5 năm. |
| **2 (MED)** | DR/DA 20–50, hoạt động 1–5 năm, có content nhưng chưa thống trị SERP. |
| **1 (LOW)** | DR/DA < 20, parking domain, không hoạt động, social không verified. |

### Tổng điểm và phân loại

| Tổng (3 trục) | Mức độ | Hành động đề xuất |
|---------------|--------|-------------------|
| **8–9** | CRITICAL | Đổi tên hoặc thêm modifier có nghĩa. KHÔNG cố giữ. |
| **6–7** | HIGH | Giữ tên + chiến lược đè SEO 18 tháng + mua defensive domains + sẵn sàng pháp lý. |
| **4–5** | MEDIUM | Giữ tên + brand wall (entity SEO mạnh) + monitoring. |
| **3** | LOW | Giữ tên, dựng brand wall standard. |

---

## C. TEMPLATE — Bảng Risk Matrix

| # | Loại va chạm | Tên/URL đối thủ | Trục 1 | Trục 2 | Trục 3 | Tổng | Mức | Hành động |
|---|--------------|-----------------|--------|--------|--------|------|-----|-----------|
| 1 | Domain `.com` | <<URL>> | <<>> | <<>> | <<>> | <<>> | <<>> | <<>> |
| 2 | Domain `.net` | <<URL>> | | | | | | |
| 3 | TM cùng class | <<số đơn>> | | | | | | |
| 4 | SERP top 3 | <<URL>> | | | | | | |
| 5 | LinkedIn company | <<URL>> | | | | | | |
| 6 | App store | <<URL>> | | | | | | |
| 7 | YouTube channel | <<URL>> | | | | | | |
| 8 | Maps/local biz | <<URL>> | | | | | | |
| 9 | Phonetic confusion | <<brand bị nhầm>> | | | | | | |
| 10 | Social handle | <<URL>> | | | | | | |
| 11 | GitHub/repo name | <<URL>> | | | | | | |
| 12 | npm/package name | <<URL>> | | | | | | |

---

## D. Cây quyết định (Decision Tree)

```
Có va chạm CRITICAL (8-9)?
 ├── YES -> ĐỔI TÊN hoặc thêm MODIFIER
 │         (đi vào file 04 — Naming Strategy)
 │
 └── NO  -> Có va chạm HIGH (6-7)?
              ├── YES -> Va chạm là DOMAIN .com cùng ngành?
              │         ├── YES -> Cân nhắc 2 nhánh:
              │         │         (a) MUA domain đối thủ (đàm phán)
              │         │         (b) THÊM MODIFIER + đè SEO 18 tháng
              │         └── NO  -> GIỮ TÊN + đè SEO + brand wall mạnh
              │
              └── NO  -> Tất cả MEDIUM/LOW?
                        └── GIỮ TÊN + brand wall standard
```

---

## E. Quy tắc chọn Modifier (nếu phải thêm)

Modifier là từ thêm vào tên gốc để tách bạch.

**NÊN chọn modifier có:**
- Ý nghĩa độc lập (là từ thật, có nghĩa riêng).
- Liên kết với ngành một cách tự nhiên.
- Dài 1–2 âm tiết.
- Đọc được trong cả VI và EN.

**VÍ DỤ TỐT:** <<Brand>> **AI** (modifier có nghĩa, liên quan ngành)
**VÍ DỤ TỆ:** <<Brand>> **Official** (modifier vô nghĩa, không bảo vệ TM)

---

## F. Đàm phán mua domain (nếu chọn nhánh a)

### F.1 Template đàm phán

| Bước | Hành động | Người làm | Deadline | Kết quả |
|------|-----------|-----------|----------|---------|
| 1 | Tìm chủ domain qua WHOIS + email/LinkedIn | Ops | <<...>> | Contact info |
| 2 | Gửi offer đầu tiên (thấp hơn 30% budget) | Founder | <<...>> | Phản hồi |
| 3 | Thương lượng qua escrow (Dan.com, Sedo) | Legal | <<...>> | Giá chốt |
| 4 | Chuyển domain về registrar của mình | Dev/Ops | <<...>> | Domain owned |
| 5 | Redirect 301 về domain chính | Dev | <<...>> | Redirect live |

---

**Người duyệt:** __________     **Ngày duyệt:** <<YYYY-MM-DD>>
