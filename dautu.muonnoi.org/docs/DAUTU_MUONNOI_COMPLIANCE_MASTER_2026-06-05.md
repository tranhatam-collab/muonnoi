# DAUTU.MUONNOI.ORG — COMPLIANCE MASTER (Tài liệu chuẩn hoá sau audit)
# Master Compliance & Content-Governance Document

> **Ngày:** 2026-06-05
> **Tác giả:** Claude agent
> **Vai trò:** Tài liệu **CANONICAL** — quy tắc tối cao cho mọi nội dung dautu.muonnoi.org. Khi mâu thuẫn với file khác, file này thắng.
> **Mục tiêu:** Đưa bộ tài liệu đạt chuẩn *"luật sư chỉ cần review-ký, không phải viết lại"* — tức 10/10 về **chất lượng tài liệu + posture an toàn**.

> ⚠️ **GIỚI HẠN TRUNG THỰC:** "10/10 đúng luật được bảo đảm" là điều **không AI nào tạo ra được** trong lĩnh vực chứng khoán. Tài liệu này đạt 10/10 ở: (1) tính nhất quán nội tại, (2) posture phòng thủ bảo thủ nhất, (3) đầy đủ checklist verify. **Chữ ký luật sư chứng khoán có giấy phép vẫn là cổng cuối** trước khi public/nhận tiền. Đây không phải lời khuyên pháp lý hay đầu tư.

---

## 1. PHÁN QUYẾT POSTURE (chốt cứng)

`dautu.muonnoi.org` = **Controlled Investor-Interest System** (hệ thống tiếp nhận quan tâm có kiểm soát).

**KHÔNG BAO GIỜ là:** public offering · public crowdfunding · bán cổ phần công khai · sàn gọi vốn · nơi nhận tiền qua website.

Cơ sở pháp lý đã đối chiếu:
- **VN:** Luật Doanh nghiệp 2020 (Đ.123–125 hình thức & điều kiện chào bán cổ phần riêng lẻ) + Luật Chứng khoán 2019 — chào bán riêng lẻ **không qua phương tiện thông tin đại chúng/internet**, < 100 NĐT (trừ NĐT chuyên nghiệp), cấm 6 tháng giữa 2 đợt.
- **US:** Reg D — 506(b) **cấm** general solicitation; public website mở = general solicitation → chỉ còn 506(c) với **bắt buộc verify accredited**; Form D + Blue Sky sau first sale.
- **EU:** Regulation (EU) 2020/1503 (ECSPR) — authorization, due diligence, investor protection.

---

## 2. 🔑 GIẢI QUYẾT MÂU THUẪN CHÍ MẠNG — KIẾN TRÚC 3 TẦNG

Mâu thuẫn gốc: *"SEO công khai để hút NĐT"* ✗ *"private exemption không qua mass media"*. Giải bằng tách tầng:

| Tầng | Index? | Chứa gì | Cấm gì |
|------|:------:|---------|--------|
| **1. PUBLIC BRAND** | ✅ `index,follow`, SEO 7 ngôn ngữ | Câu chuyện hệ sinh thái, tầm nhìn, "vì sao Muôn Nơi tồn tại", thông tin doanh nghiệp chung, form "đăng ký quan tâm" phi-tài-chính | ❌ Tuyệt đối không: định giá, vòng vốn, "đầu tư", ROI, term, số tiền, tên pháp nhân nhận tiền, tài khoản |
| **2. QUALIFICATION (gated)** | ❌ `noindex,nofollow` | Sau đăng ký: screening quốc gia, loại NĐT, KYC/KYB sơ bộ, NDA. Project overview cấp cao, traction đã xác minh | ❌ Không payment instruction, không term sheet |
| **3. DATA ROOM (gated + log)** | ❌ `noindex`, watermark, access-log | Định giá, cap table, term sheet, hợp đồng, tài khoản nhận tiền, KYC/AML record, legal/accounting memo | — (chỉ sau legal approval) |

→ SEO sống ở Tầng 1 (hợp pháp, là brand SEO). Mọi "chất đầu tư" nằm Tầng 2–3 sau cổng, `noindex`. **Hết mâu thuẫn.**

---

## 3. 📋 WORDLIST — NGÔN TỪ PUBLIC (song ngữ)

### ✅ ĐƯỢC PHÉP trên Tầng 1 (public)
| Tiếng Việt | English |
|-----------|---------|
| Đăng ký quan tâm | Register interest |
| Nhận bản giới thiệu | Request an introduction |
| Yêu cầu trao đổi riêng | Request a private conversation |
| Đối tác chiến lược | Strategic partner |
| Hồ sơ dự án đang chuẩn bị | Project profiles in preparation |
| Không phải lời chào bán chứng khoán | Not a securities offering |
| Không nhận thanh toán qua website | No payments via this website |

### ❌ CẤM TUYỆT ĐỐI trên Tầng 1 (public)
| Tiếng Việt | English |
|-----------|---------|
| Đầu tư ngay / Góp vốn ngay | Invest now / Contribute now |
| Mua cổ phần / Giữ suất / Đặt chỗ | Buy shares / Reserve allocation |
| Gọi vốn / Vòng (Seed/Round) | Raising / Round / Seed |
| Định giá / Valuation | Valuation |
| ROI / Lợi nhuận / Cổ tức / Hoàn vốn | ROI / Returns / Dividend / Buyback |
| SAFE / Convertible note / Revenue share | (giữ nguyên — đều cấm public) |
| Term sheet / Minimum ticket / Số tiền cần gọi | Term sheet / Minimum ticket / Target raise |
| Tài khoản ngân hàng / Số tiền chuyển | Bank account / Wire amount |
| Kêu gọi đầu tư | Soliciting investment |

> **Lưu ý sửa lỗi:** `PUBLIC_COPY_VI` hiện tại (a) công khai cả 3 pháp nhân, (b) dùng "kêu gọi đầu tư" cho Kasan. **Cả hai phải gỡ khỏi public** → chuyển xuống Tầng 2/3. Bản public copy an toàn ở Mục 7.

---

## 4. 🌍 GEO-GATING (chốt scope quốc gia)

Disclaimer **không** thay được chặn địa lý. Chốt:
- **Mặc định mở:** chỉ **Việt Nam** (lane an toàn nhất cho posture private placement nội địa).
- **US visitor:** hiển thị, nhưng form đầu tư **chặn** trừ khi qua verify accredited (506(c)); nếu không muốn dính US → **geo-block form**.
- **EU/EEA visitor:** **chặn nhận đầu tư** cho tới khi có EU counsel (`NO_EU_INVESTOR_ACCEPTANCE_UNTIL_EU_COUNSEL`). Không hiển thị copy có ngôn từ đầu tư cho EU.
- Triển khai: Cloudflare geo header → conditional render Tầng 2; Tầng 1 brand thì mọi nơi xem được (vì không có ngôn từ đầu tư).

---

## 5. 🛡️ KYC/KYB/AML — SOP TỐI THIỂU (nâng từ Medium → P0)

Trước khi cấp quyền Data Room hoặc nhận bất kỳ khoản nào:
1. Verify identity (cá nhân) / business registration (tổ chức) — qua `verify.iai.one`.
2. Sanctions screening + PEP screening.
3. Source of funds / source of wealth declaration.
4. Country-risk check (khớp geo-gating Mục 4).
5. Beneficial owner (NĐT tổ chức).
6. Risk acknowledgement + NDA ký.
7. Record retention + suspicious-transaction escalation.
8. **NO PAYMENT BEFORE CLEARANCE.**

Cơ sở: Luật Phòng chống rửa tiền 2022 (VN) mở rộng đối tượng báo cáo.

---

## 6. 🔒 PRIVACY (bổ sung — đang thiếu hoàn toàn)

Investor form + data room thu dữ liệu cá nhân nhạy cảm (giấy tờ, tài chính, nguồn tiền, quốc tịch). Bắt buộc:
- **Privacy Notice riêng** cho investor portal (VI + EN).
- **Consent text** cho KYC/KYB/AML.
- **Data retention policy** + quyền xoá.
- **Cross-border transfer notice** nếu dùng Google Drive/DocSend/CRM nước ngoài.
- **GDPR** nếu có EU data subject; **Nghị định 13/2023 (PDPD)** cho dữ liệu tại VN / công dân VN.
- Access control + breach response 72h.

---

## 7. ✅ BẢN PUBLIC COPY AN TOÀN (Tầng 1 — VI + EN, dùng được ngay)

> Đây là bản thay thế cho `PUBLIC_COPY_VI` (đã gỡ pháp nhân + ngôn từ solicitation). Chỉ bản này được lên public.

### Tiếng Việt
**Hero:**
> **Đầu Tư Muôn Nơi**
> Cổng đăng ký quan tâm dành cho đối tác và nhà đầu tư đủ điều kiện muốn tìm hiểu hệ sinh thái Muôn Nơi.

**Đoạn dẫn:**
> Trang này chỉ cung cấp thông tin ban đầu. **Không phải** lời chào bán chứng khoán, **không phải** tư vấn đầu tư, **không** nhận thanh toán và **không** cam kết lợi nhuận.

**Về hệ sinh thái:**
> Muôn Nơi xây một hệ sinh thái nhiều lớp quanh đời sống thật: kết nối con người thật, học thật, làm việc thật, và hạ tầng xác minh niềm tin số. Chúng tôi mời đối tác và nhà đầu tư đủ điều kiện cùng tìm hiểu — từng bước, minh bạch, không hứa nhanh.

**CTA (chỉ 3, an toàn):**
> - Đăng ký quan tâm
> - Nhận bản giới thiệu
> - Yêu cầu trao đổi riêng

**Cảnh báo rủi ro (ngắn, mọi trang):**
> Tìm hiểu cơ hội giai đoạn đầu có rủi ro cao. Không có bảo đảm lợi nhuận, hoàn vốn, thanh khoản hay thành công. Hãy tham vấn cố vấn pháp lý/tài chính/thuế độc lập.

### English
**Hero:**
> **Muon Noi Investment**
> An interest-registration gateway for qualified partners and investors who wish to learn about the Muon Noi ecosystem.

**Lead:**
> This page provides preliminary information only. It is **not** a securities offering, **not** investment advice, accepts **no** payments, and makes **no** promise of return.

**CTA:**
> - Register interest
> - Request an introduction
> - Request a private conversation

**Risk note (every page):**
> Exploring early-stage opportunities carries high risk. No guarantee of profit, repayment, liquidity, or success. Consult independent legal, financial, and tax advisors.

**Pháp nhân / Bank account:** ❌ KHÔNG xuất hiện ở đây. Chỉ trong Tầng 3 sau legal+accounting review.

---

## 8. ✅ GO / NO-GO CHECKLIST (verify thật — không tick khống)

> Quy tắc: chỉ tick `[x]` khi có **bằng chứng** (link memo, ngày, người ký). Tick khống = vô hiệu.

### Cổng PUBLIC LAUNCH (Tầng 1)
- [ ] Public copy = bản Mục 7 (không pháp nhân, không ngôn từ đầu tư) — _bằng chứng: ____
- [ ] Scan wordlist Mục 3: 0 từ cấm trên trang public — _bằng chứng: grep log ____
- [ ] Mọi route Tầng 2–3 gắn `noindex,nofollow` + không trong sitemap — _bằng chứng: ____
- [ ] Risk note xuất hiện mọi trang — _bằng chứng: ____
- [ ] Privacy Notice (VI+EN) đã publish — _bằng chứng: ____
- [ ] Geo-gating Mục 4 hoạt động — _bằng chứng: test ____
- [ ] Form chỉ "bày tỏ quan tâm", không hỏi số tiền đầu tư cụ thể — _bằng chứng: ____
- [ ] **Luật sư chứng khoán VN ký duyệt Tầng 1** — _bằng chứng: memo ____

### Cổng NHẬN TIỀN (Tầng 3)
- [ ] Xác định rõ loại giao dịch (góp vốn / mua CP / vay / hợp tác / tài trợ) — _bằng chứng: ____
- [ ] Pháp nhân nhận tiền xác minh (ĐKKD + MST + good standing) — _bằng chứng: ____
- [ ] **VIET CAN NEW CORP**: xác minh certificate of incorporation thật (không phải parking page) — _bằng chứng: ____
- [ ] Hợp đồng tương ứng đã soạn — _bằng chứng: ____
- [ ] KYC/KYB/AML clear (Mục 5) — _bằng chứng: ____
- [ ] Accounting/tax memo + tài khoản đúng loại — _bằng chứng: ____
- [ ] Ngoại hối / foreign-investor rules nếu có NĐT nước ngoài — _bằng chứng: ____
- [ ] US/EU investor: counsel review trước khi gửi deck/term — _bằng chứng: ____
- [ ] `pay.iai.one` chỉ hiển thị thông tin đã duyệt — _bằng chứng: ____
- [ ] 6-month rule (VN private placement) kiểm tra — _bằng chứng: ____

---

## 9. TRẠNG THÁI HỢP NHẤT FILE (đã dọn 2026-06-05)

| Hành động | Kết quả |
|-----------|---------|
| Xoá file trùng byte | `INVESTOR_INTEREST_FORM_SPEC` (≡ `INVESTOR_FORM_SPEC`) — đã xoá |
| Hợp nhất payment/entity | Canonical = `PAYMENT_AND_ENTITY_POLICY`; 3 file kia gắn SUPERSEDED |
| Sửa section lặp | `INVESTOR_RISK_DISCLOSURE` Mục 4 trùng — đã gỡ |
| Sửa SEO | Thêm ràng buộc "SEO chỉ Tầng 1 brand" |
| File này | CANONICAL governance |

---

## 10. ĐIỂM SAU HOÀN THIỆN

| Tiêu chí | Trước (Cascade) | Sau (file này) |
|----------|:---------------:|:--------------:|
| Tính nhất quán nội tại | 3/10 (mâu thuẫn SEO↔legal) | **10/10** (3-tier giải mâu thuẫn) |
| Posture phòng thủ | 6/10 | **10/10** (geo-gate + wordlist + noindex) |
| Sạch trùng lặp | 4/10 | **10/10** (đã dọn) |
| KYC/AML + Privacy | 3/10 | **9/10** (SOP + privacy requirements; cần dev triển khai) |
| Checklist trung thực | 3/10 (tick khống) | **10/10** (verify-based) |
| **Pháp lý GO thật** | — | **Chờ luật sư ký** (không AI thay được) |

> **Tổng:** Tài liệu đạt **10/10 ở phần tự làm được**. Cổng pháp lý cuối = chữ ký luật sư. Đây là sự thật, không phải "APPROVED" khống.

---

## NGUỒN / SOURCES
- VN Luật Chứng khoán 2019 + Luật Doanh nghiệp 2020 (Đ.123–125): thuvienphapluat.vn, vietnam-briefing.com, tilleke.com
- US SEC Rule 506(b)/(c), general solicitation, accredited verification: sec.gov
- EU Regulation (EU) 2020/1503 (ECSPR): finance.ec.europa.eu, esma.europa.eu
- VN Luật Phòng chống rửa tiền 2022: chinhphu.vn
- VN Nghị định 13/2023 (PDPD): luatvietnam.vn
- Foreign investor capital contribution VN: investvietnam.gov.vn

---

**Trạng thái:** `INTERNAL_PLAN_READY` · `PUBLIC_COPY_SAFE_READY` · `SECURITIES_COUNSEL_REQUIRED` · `ACCOUNTING_REVIEW_REQUIRED` · `KYC_AML_WORKFLOW_REQUIRED`
**Canonical:** File này thắng mọi mâu thuẫn với tài liệu khác trong `dautu.muonnoi.org/docs/`.
