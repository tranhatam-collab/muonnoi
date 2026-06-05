# MASTER PLAN — DAUTU.MUONNOI.ORG

Phiên bản: v0.1 — 2026  
Trạng thái: Plan Ready | Content Draft Ready | Legal Review Required | Accounting Review Required | Not Public Securities Offering | Not Payment-Ready Until pay.iai.one Confirmation  
Subdomain: dautu.muonnoi.org

---

## Phán quyết vận hành

**dautu.muonnoi.org phải là:**
- Cổng quan tâm đầu tư, thẩm định nhà đầu tư, công bố dự án, thu hồ sơ và điều phối giao dịch đầu tư có điều kiện.

**Không được là:**
- Trang bán cổ phần công khai.
- Trang hứa lợi nhuận.
- Trang nhận tiền tự động từ mọi người.
- Trang crowdfunding mở tự do.

**US context (SEC Rule 506(c)):** Nếu có general solicitation, người mua phải là accredited investors và issuer xác minh hợp lý trạng thái đó.

---

## 1. Pháp nhân

| Vai trò | Pháp nhân | Quốc gia |
|---|---|---|
| Điều phối quốc tế | **VIET CAN NEW CORP** | United States |
| Đại diện thanh toán & vận hành VN | **Công ty CP Giáo dục Truyền Thông Việt Can New** | Việt Nam |
| Đầu tư, kêu gọi đầu tư, phát triển | **Công ty CP Giáo dục Hành Trình Kasan** | Việt Nam |

**Nguyên tắc thanh toán:** Nước nào mở thanh toán thì dùng pháp nhân, tài khoản và điều kiện pháp lý phù hợp tại nước đó.  
**Tài khoản chính thức:** Chỉ lấy từ tài liệu đã kiểm duyệt trong hệ `pay.iai.one`. Không gõ thủ công trên landing page.

---

## 2. Mục tiêu trang

Phục vụ nhiều dự án trong hệ sinh thái Muôn Nơi. Mỗi dự án có trang riêng tại `/projects/<slug>/`.

| Dự án | Slug |
|---|---|
| Kết Nối Muôn Nơi | `ketnoi` |
| Đường Muôn Nơi | `dulich` |
| Plays Muôn Nơi | `plays` |
| Cuộc Sống Muôn Nơi | `cuocsong` |
| Người Việt Muôn Nơi | `nguoiviet` |
| Family Muôn Nơi | `family` |
| Học Tập Muôn Nơi | `hoctap` |
| Làm Việc Muôn Nơi | `lamviec` |
| Nhà Chung Muôn Nơi | `nhachung` |

---

## 3. Route chuẩn

```
dautu.muonnoi.org/
  /                         Trang chủ đầu tư
  /projects/                 Danh mục dự án
  /projects/ketnoi/          Kết Nối Muôn Nơi
  /projects/plays/           Plays Muôn Nơi
  /projects/dulich/          Đường Muôn Nơi
  /projects/family/          Family Muôn Nơi
  /projects/nhachung/        Nhà Chung Muôn Nơi
  /legal/                    Công bố pháp lý
  /risk/                     Cảnh báo rủi ro
  /process/                  Quy trình quan tâm đầu tư
  /eligibility/              Điều kiện nhà đầu tư
  /interest/                 Form quan tâm
  /data-room/                Gated data room
  /payment/                  Hướng dẫn thanh toán đã kiểm duyệt
  /faq/                      Câu hỏi thường gặp
  /contact/                  Liên hệ
```

---

## 4. Trạng thái dự án chuẩn (11 trạng thái)

| # | Trạng thái | Ý nghĩa |
|---|---|---|
| 1 | Concept | Ý tưởng |
| 2 | Draft Plan | Có kế hoạch draft |
| 3 | Founder Review | Founder đang xem xét |
| 4 | Founder Approved | Founder đã duyệt |
| 5 | Build Started | Đang phát triển |
| 6 | Pilot Preparing | Chuẩn bị thử nghiệm |
| 7 | Pilot Live | Thử nghiệm với người dùng thật |
| 8 | Investment Interest Open | Mở cổng quan tâm đầu tư |
| 9 | Legal Investment Review | Đang legal review đầu tư |
| 10 | Investment Round Open | Mở vòng đầu tư (nghiêm ngặt) |
| 11 | Closed | Đóng |

**Investment Round Open** chỉ khi có đủ:
- Pháp nhân nhận tiền rõ.
- Hồ sơ đầu tư rõ.
- Legal review xong.
- Điều kiện nhà đầu tư rõ.
- Tài khoản thanh toán chính thức.
- Hợp đồng/thỏa thuận/term sheet phù hợp.
- KYC/KYB/AML nếu cần.

---

## 5. Cấu trúc trang chủ

### Hero
- **Headline:** Đầu Tư Muôn Nơi
- **Sub:** Cổng quan tâm đầu tư cho các dự án công nghệ, đời sống, giáo dục, cộng đồng và niềm tin số trong hệ sinh thái Muôn Nơi.
- **CTA:** Xem danh mục dự án | Gửi thông tin quan tâm | Đọc cảnh báo rủi ro | Xem pháp nhân

### Section 1 — Vì sao Muôn Nơi cần đầu tư
> Muôn Nơi đang xây một hệ sinh thái nhiều lớp: kết nối con người thật, đời sống thật, học tập thật, làm việc thật, du lịch thật, gia đình thật, giải trí có trách nhiệm và hạ tầng xác minh niềm tin số.

### Section 2 — Dự án đang mở quan tâm
- Card mỗi dự án: Tên, mô tả 1 câu, trạng thái, pháp nhân, loại quan tâm (đầu tư/hợp tác/tài trợ/đồng phát triển), mức sẵn sàng pháp lý, CTA "Xem hồ sơ".

### Section 3 — Pháp nhân
Ghi đúng 3 pháp nhân như mục 1.

### Section 4 — Quy trình 6 bước
1. Xem thông tin dự án.
2. Đọc cảnh báo rủi ro.
3. Gửi form quan tâm.
4. Đội phụ trách kiểm tra.
5. Nếu phù hợp, mời vào vòng trao đổi riêng.
6. Chỉ sau hồ sơ pháp lý + thanh toán chính thức mới giao dịch.

### Section 5 — Cảnh báo rủi ro
> Đầu tư vào dự án giai đoạn đầu có rủi ro cao. Nhà đầu tư có thể mất một phần hoặc toàn bộ số tiền. Không có bảo đảm lợi nhuận, hoàn vốn, thanh khoản, chuyển nhượng, hay thành công.

---

## 6. Trang dự án mẫu: Kết Nối Muôn Nơi

| Trường | Nội dung |
|---|---|
| Tên | Kết Nối Muôn Nơi |
| Subdomain | ketnoi.muonnoi.org |
| Định vị | Nền tảng kết nối con người đã xác minh, ưu tiên sự thật, an toàn, ranh giới, chống AI giả mạo, chống lừa đảo, quan hệ có trách nhiệm. |
| Trạng thái | Founder Review Ready / Not Dev Ready / Not Legal Approved / Not Production Ready |
| Nhu cầu | Product, legal, trust & safety, KYC, web app, mobile app, moderation, multilingual SEO. |
| Hình thức quan tâm | Đầu tư, đồng phát triển, tài trợ pháp lý, tài trợ trust & safety, đối tác KYC, đối tác thanh toán. |
| **KHÔNG công bố** | Định giá, cổ phần, lợi nhuận, ROI, quyền mua, điều khoản tài chính — cho đến khi legal review xong. |

---

## 7. SEO đa ngôn ngữ

```
dautu.muonnoi.org/     → vi-VN (gốc)
dautu.muonnoi.org/en/
dautu.muonnoi.org/zh/
dautu.muonnoi.org/ko/
dautu.muonnoi.org/ja/
dautu.muonnoi.org/fr/
dautu.muonnoi.org/es/
```

| Ngôn ngữ | Title | Description |
|---|---|---|
| vi | Đầu Tư Muôn Nơi · Cổng quan tâm đầu tư hệ sinh thái Muôn Nơi | Đầu Tư Muôn Nơi là cổng thông tin dành cho nhà đầu tư... không cấu thành lời chào bán chứng khoán... |
| en | Muon Noi Investment · Investor Interest Portal for the Muon Noi Ecosystem | Muon Noi Investment is an investor interest portal... does not constitute a securities offering... |

---

## 8. File cần tạo cho team

| # | File | Mục đích |
|---|---|---|
| 1 | `DAUTU_MUONNOI_MASTER_PLAN_2026.md` | ✅ Tổng hợp bản chốt (file này) |
| 2 | `DAUTU_MUONNOI_PUBLIC_COPY_VI_2026.md` | Copy chuẩn tiếng Việt cho public page |
| 3 | `DAUTU_MUONNOI_MULTILINGUAL_SEO_PLAN_2026.md` | SEO đa ngôn ngữ cho dautu |
| 4 | `DAUTU_MUONNOI_LEGAL_ENTITY_POLICY_2026.md` | Chính sách pháp nhân và thanh toán |
| 5 | `DAUTU_MUONNOI_INVESTOR_RISK_DISCLOSURE_2026.md` | Cảnh báo rủi ro đầy đủ |
| 6 | `DAUTU_MUONNOI_PROJECT_CARD_TEMPLATE_2026.md` | Template card dự án |
| 7 | `DAUTU_MUONNOI_INVESTOR_INTEREST_FORM_SPEC_2026.md` | Spec form quan tâm |
| 8 | `DAUTU_MUONNOI_DATA_ROOM_ACCESS_POLICY_2026.md` | Chính sách truy cập data room |
| 9 | `DAUTU_MUONNOI_PAYMENT_REFERENCE_POLICY_2026.md` | Chính sách thanh toán đã kiểm duyệt |

---

## 9. Chỉ đạo cho team

1. `dautu.muonnoi.org` là cổng quan tâm đầu tư, không phải trang bán cổ phần công khai.
2. Mọi dự án cần gọi vốn sẽ trỏ về `dautu.muonnoi.org/projects/<slug>/`.
3. **Công ty CP Giáo dục Hành Trình Kasan** là đơn vị đầu tư, kêu gọi, phát triển.
4. **CP Giáo dục Truyền Thông Việt Can New** là đại diện thanh toán/vận hành VN.
5. **VIET CAN NEW CORP** là pháp nhân điều phối quốc tế tại Hoa Kỳ.
6. Tài khoản thanh toán chỉ lấy từ tài liệu đã kiểm duyệt trong `pay.iai.one`.
7. Không ghi lợi nhuận, ROI, hoàn vốn, cổ tức, định giá nếu chưa có legal memo.
8. Không mở nhận tiền tự động từ public page.
9. Form public chỉ là "bày tỏ quan tâm".
10. Deal room chỉ mở sau khi investor đủ điều kiện.

---

**Đầu Tư Muôn Nơi**  
Cổng quan tâm đầu tư — không phải chào bán chứng khoán.
