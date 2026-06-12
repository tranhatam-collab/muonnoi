# TRANG CHỦ MUÔN NƠI — AUDIT + ĐỀ XUẤT HOÀN THIỆN
# Homepage Audit & Completion Proposal — www.muonnoi.org

> **Ngày:** 2026-06-12
> **Người audit:** Claude agent (đọc HTML live + probe toàn bộ subdomain)
> **Trạng thái:** ĐỀ XUẤT — chờ Founder duyệt TRƯỚC khi build
> **Câu hỏi gốc:** "Vào cái là ở lại ngay" — trang chủ phải tổ chức thế nào, không được thiếu gì?

---

## 0. KẾT LUẬN 1 DÒNG

Trang chủ hiện tại **là một bảng trạng thái nội bộ (ops/status dashboard), không phải cửa ngõ cho người lạ**. Nó *nói VỀ kế hoạch* (brand gate, điểm chốt, lộ trình hôm nay, investment lane) thay vì *CHO THẤY hệ sinh thái đang sống*. Trong khi đó **10 sản phẩm đã LIVE thật** (plays 100 trò chơi, Kết Nối, Cuộc Sống, Người Việt, Học Tập, Nhà Chung, Đầu Tư…) lại gần như không xuất hiện. → Người vào không thấy gì để **dùng ngay**, nên không có lý do ở lại.

---

## 1. AUDIT TRANG CHỦ HIỆN TẠI (bằng chứng)

**Đọc HTML live `https://www.muonnoi.org/` (15KB):**

| Yếu tố | Hiện trạng | Vấn đề |
|--------|-----------|--------|
| **Định danh trang** | "Trang chủ cộng đồng vận hành theo đời sống thật" + status "đã thực hiện / đang mở / tiếp theo" | Đây là **báo cáo tiến độ**, không phải landing thu hút |
| **Hero** | "Hạ tầng số cho đời sống thật · social-first · privacy-first · module-first" | **Trừu tượng, jargon** — người lạ không hiểu *ở đây làm được gì* trong 5 giây |
| **CTA chính** | 4 nút ngang nhau: Xem kế hoạch / Xem lộ trình / Xem đầu tư / Đọc tuyên ngôn | **Không có 1 hành động chính**; cả 4 đều "đọc tài liệu kế hoạch", không cái nào "dùng sản phẩm" |
| **Link ra sản phẩm** | Chỉ 3 link ngoài: nguoiviet, app/join | **Bỏ quên** plays, ketnoi, cuocsong, hoctap, dautu, ai (đều đang live!) |
| **Nội dung thân trang** | "Brand gate", "Điểm chốt mới", "Investment lane", "Lộ trình và công bố hôm nay", "Thông báo ngày 11/05" | **Meta-process nội bộ** — visitor không quan tâm brand gate hay team status |
| **Bằng chứng sống** | Không có số liệu thật (vd "100 trò chơi"), không preview, không "đang hoạt động" | Không có tín hiệu *hệ thống đang sống* |
| **Song ngữ** | Có scaffold i18n-vi/en | ✅ Giữ — điểm cộng |

**Chẩn đoán:** Trang chủ trả lời câu hỏi *"team đang làm gì?"* — nhưng người vào hỏi *"tôi được gì ở đây, ngay bây giờ?"*. Lệch đối tượng.

---

## 2. THỰC TẾ HỆ SINH THÁI (tài sản trang chủ đang bỏ phí)

**Probe toàn bộ subdomain 2026-06-12:**

### ✅ ĐANG LIVE (200) — đây là "hàng" để khoe
| Subdomain | Là gì | Sức hút |
|-----------|-------|---------|
| `plays.muonnoi.org` | **100 trò chơi** chơi được ngay | ⭐ Hook mạnh nhất — chơi không cần đăng ký |
| `ketnoi.muonnoi.org` | Kết Nối — mạng cộng đồng người Việt | Sản phẩm xã hội thật |
| `cuocsong.muonnoi.org` | Cuộc Sống — hướng dẫn đời sống thật | Nội dung giá trị |
| `nguoiviet.muonnoi.org` | Người Việt — hành trình "đi xa để quay về" | Câu chuyện cảm xúc |
| `hoctap.muonnoi.org` | Học Tập Muôn Nơi | Giáo dục |
| `ai.muonnoi.org` | Nhà Chung — cộng đồng + AI | Khác biệt |
| `dautu.muonnoi.org` | Đồng hành công nghệ cộng đồng (interest portal) | Trust/đối tác |
| `app.muonnoi.org` | App social core | Đăng ký/đăng nhập |
| `docs.muonnoi.org` | Tài liệu | Minh bạch |

### 🔶 LỖI / REGRESSION (phải fix trước khi link)
- `dulich.muonnoi.org` → **000** (custom domain chết, dù `dulich-muonnoi-org.pages.dev` = 200) — **regression**, cần rebind.
- `lamviec.muonnoi.org` → 308 (redirect, cần xác nhận đích).

### ❌ CHƯA SỐNG (000) — KHÔNG được link primary (brand red-line)
`henho, lqos, family, suckhoe, sangtao, congdong, nhachung, trust` → tất cả 000.

**→ Trang chủ phải khoe nhóm ✅, tuyệt đối không link nhóm ❌ làm CTA chính.**

---

## 3. NGUYÊN TẮC "VÀO LÀ Ở LẠI" (vì sao homepage hiện tại fail)

Người ở lại khi trong **5 giây đầu** thấy 3 thứ:
1. **Hiểu ngay đây là gì** (1 câu người thường hiểu, không jargon).
2. **Thấy thứ dùng được NGAY** (không phải tài liệu kế hoạch — mà sản phẩm thật, bấm vào chơi/xem được liền).
3. **Tin đây là thật, đang sống** (bằng chứng: số liệu, "đang hoạt động", preview).

Homepage hiện tại đưa **kế hoạch + status + investment** lên đầu → vi phạm cả 3. "Plays 100 trò chơi" (hook mạnh nhất, chơi không cần đăng ký) bị giấu hoàn toàn.

---

## 4. ĐỀ XUẤT CẤU TRÚC TRANG CHỦ MỚI (không được thiếu phần nào)

> Thứ tự = thứ tự ưu tiên cuốn người ở lại. Mỗi phần ghi rõ **bắt buộc/lý do**.

### **Phần 1 — HERO (bắt buộc)**
- **1 câu giá trị người thường hiểu** (không "hạ tầng số… module-first"). Gợi ý:
  > *"Muôn Nơi — nơi người Việt khắp nơi sống thật, chơi thật, học thật và kết nối thật. Mở cái nào dùng được cái đó, ngay hôm nay."*
- **1 CTA CHÍNH** (nổi bật, brand-approved): **"Mở hệ sinh thái"** → cuộn xuống lưới sản phẩm sống.
- **1 CTA phụ**: "Chơi thử ngay" → plays (hook không-cần-đăng-ký).
- **Tín hiệu sống**: dòng nhỏ "9 sản phẩm đang hoạt động · 100 trò chơi · song ngữ VI/EN".
- Giữ toggle VI/EN + theme.

### **Phần 2 — LƯỚI SẢN PHẨM SỐNG ("Vào được ngay") (BẮT BUỘC — đây là phần giữ chân chính)**
Lưới card 9 sản phẩm ✅ live. Mỗi card:
- Tên + 1 dòng *làm được gì* + badge **"Đang hoạt động"** + nút "Mở →".
- Sắp xếp theo sức hút: **Plays (chơi ngay) → Kết Nối → Người Việt → Cuộc Sống → Học Tập → Nhà Chung → App → Đầu Tư → Docs**.
- **Đây là thứ homepage hiện đang THIẾU hoàn toàn** và là lý do số 1 khiến người rời đi.

### **Phần 3 — BẰNG CHỨNG SỐNG (bắt buộc, evidence-led theo brand)**
Dải số thật, không phóng đại: "100 trò chơi · 9 subdomain live · song ngữ · privacy-first, không tracker". (Chỉ số đo được, đúng brand red-line "không phóng đại chỉ số".)

### **Phần 4 — VÌ SAO MUÔN NƠI (ngắn, có hồn)**
3 trục (social-first / privacy-first / module-first) **diễn giải bằng lợi ích người dùng**, không bằng thuật ngữ. Kèm 1 dòng câu chuyện 7 tầng/hành trình. Đây là phần "tin & ở lại lâu hơn".

### **Phần 5 — AN TOÀN & RIÊNG TƯ (khác biệt cốt lõi — bắt buộc)**
"Không tracker. Không bán dữ liệu. Người thật, việc thật." → đây là điểm bán khác mọi nền tảng, phải nói rõ ở homepage.

### **Phần 6 — MINH BẠCH: Kế hoạch · Lộ trình · Đầu tư (ĐẨY XUỐNG ĐÂY)**
Phần status/plan/investment hiện đang ở đầu → **chuyển xuống đây**, gọn lại thành 3 link cho nhóm muốn chiều sâu quản trị (nhà đầu tư, đối tác, báo chí). Vẫn giữ — nhưng **không phải thứ đầu tiên người lạ thấy**.

### **Phần 7 — THAM GIA (bắt buộc, chốt hành động)**
Newsletter + "Tạo tài khoản" (app/join) + Press/About. 1 CTA rõ.

### **Phần 8 — FOOTER**
Điều hướng toàn hệ + song ngữ + claim-safety + link docs/security/manifesto.

---

## 5. KHÔNG ĐƯỢC CÓ TRÊN TRANG CHỦ (brand red-line)
- ❌ Link primary tới subdomain chết (henho/family/suckhoe/… = 000).
- ❌ Ngôn từ hứa lợi nhuận/ROI ở khối đầu tư (giữ "công bố phạm vi hợp tác", không "đầu tư ngay").
- ❌ Jargon thay cho lợi ích ở hero.
- ❌ Hơn 1 H1; thiếu title/description (đang OK — giữ).
- ❌ Để status nội bộ ("điểm chốt", "team status") làm nội dung chính.

---

## 6. YÊU CẦU KỸ THUẬT BẮT BUỘC
- **Song ngữ VI/EN** đầy đủ + `hreflang` (đã có scaffold — mở rộng cho nội dung mới).
- **Tốc độ:** static (Astro/HTML), LCP < 2.5s, không JS nặng ở hero.
- **SEO:** title/description tốt (đang OK), OG image thật, schema.org Organization.
- **A11y:** 1 H1, alt text, contrast WCAG AA, skip-link (đang có "Đi tới nội dung").
- **Mobile-first:** lưới sản phẩm responsive, CTA dễ chạm.
- **Không tracker** (đúng brand) — analytics privacy-first nếu cần.

---

## 7. TIÊU CHÍ NGHIỆM THU (Definition of Done)
- [ ] Hero có 1 câu người thường hiểu + 1 CTA chính.
- [ ] Lưới ≥ 9 sản phẩm live, mỗi cái có badge "đang hoạt động" + link đúng (đã probe 200).
- [ ] 0 link primary tới subdomain 000.
- [ ] Khối plan/investment đẩy xuống dưới sản phẩm.
- [ ] Bằng chứng số liệu thật, không phóng đại.
- [ ] Song ngữ VI/EN parity.
- [ ] dulich regression fix HOẶC tạm ẩn khỏi lưới (không để card dẫn tới 000).
- [ ] Brand lint pass (claim-safety).

---

## 8. QUYẾT ĐỊNH CẦN FOUNDER CHỐT (trước khi tôi build)
1. **Hook chính:** Plays (chơi ngay, mạnh nhất) hay Người Việt (câu chuyện) làm điểm nhấn hero?
2. **Câu hero:** Dùng gợi ý ở Phần 1 hay Founder tự viết 1 câu?
3. **dulich:** Fix rebind ngay (để đưa vào lưới) hay tạm để ngoài?
4. **Đầu tư trên homepage:** Giữ 1 link nhỏ (khuyến nghị) hay bỏ hẳn khỏi homepage?
5. **Phạm vi build:** Tôi viết lại nguyên trang chủ (Astro/static, giữ brand tokens hiện có) — đồng ý không?

→ Chốt 5 điểm này, tôi build trang chủ mới theo đúng cấu trúc Mục 4 + nghiệm thu Mục 7.

---

## NGUỒN / BẰNG CHỨNG
- HTML live `www.muonnoi.org` (đọc 2026-06-12)
- Probe HTTP 21 subdomain (2026-06-12): 10 live, dulich regression, 8 chưa sống
- Brand: `docs/brand/MUONNOI_VERBAL_IDENTITY_AND_BILINGUAL_MESSAGING_2026.md` (CTA chuẩn, claim-safety, red-line)

---
**Trạng thái:** PROPOSAL_READY · chờ Founder chốt 5 quyết định Mục 8 trước khi build.
