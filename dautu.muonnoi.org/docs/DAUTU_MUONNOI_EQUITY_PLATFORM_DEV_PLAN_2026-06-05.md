# DAUTU.MUONNOI.ORG — KẾ HOẠCH DEV NỀN TẢNG HUY ĐỘNG VỐN CỔ PHẦN
# Equity Capital-Raising Platform — Dev Handoff Plan

> **Ngày:** 2026-06-05
> **Tác giả:** Claude agent
> **Hướng:** Equity thật — công ty cổ phần huy động vốn bằng **chào bán / mua bán / chuyển nhượng cổ phần** (đúng quyền pháp lý của CTCP).
> **Đối tượng:** Dev team build `dautu.muonnoi.org`.
> **Phụ thuộc canonical:** `DAUTU_MUONNOI_COMPLIANCE_MASTER_2026-06-05.md` (3-tier governance vẫn áp dụng cho tầng public).

> ⚠️ **Giới hạn:** Tôi không phải luật sư chứng khoán. Tài liệu thiết kế hệ thống + đối chiếu khung luật công khai. Mỗi đợt chào bán cụ thể vẫn cần **nghị quyết ĐHĐCĐ/HĐQT + luật sư ký**. Phần đăng ký với UBCKNN (nếu chào bán công chúng) là bắt buộc theo luật.

---

## 1. CƠ SỞ PHÁP LÝ — CTCP ĐƯỢC HUY ĐỘNG VỐN BẰNG CỔ PHẦN

**Khẳng định:** Công ty cổ phần (CTCP) **được pháp luật cho phép** phát hành, chào bán, mua bán, chuyển nhượng cổ phần để huy động vốn. Đây là quyền cốt lõi của loại hình CTCP.

Cơ sở (Luật Doanh nghiệp 2020 — 59/2020/QH14):
- **Điều 111–114:** CTCP, vốn điều lệ chia thành cổ phần; quyền phát hành cổ phần các loại.
- **Điều 123 — Chào bán cổ phần:** 3 hình thức hợp pháp:
  1. **Chào bán cho cổ đông hiện hữu** (existing shareholders, quyền ưu tiên mua).
  2. **Chào bán riêng lẻ** (private placement — Điều 125).
  3. **Chào bán ra công chúng** (public offering — theo Luật Chứng khoán 2019).
- **Điều 125 — Chào bán riêng lẻ (CTCP chưa đại chúng):** điều kiện: (a) **KHÔNG qua phương tiện thông tin đại chúng**; (b) cho **dưới 100 nhà đầu tư** (không kể NĐT chứng khoán chuyên nghiệp) **HOẶC** chỉ cho NĐT chuyên nghiệp. Phương án chào bán phải ghi rõ loại, số lượng, mệnh giá, điều kiện chuyển nhượng, phương thức & thời hạn thanh toán. Cổ đông hiện hữu được ưu tiên mua trước.
- **Điều 120(3) — Hạn chế cổ đông sáng lập:** cổ phần phổ thông của CĐ sáng lập bị **hạn chế chuyển nhượng 3 năm** kể từ ngày cấp ĐKKD (tự do giữa các CĐ sáng lập; bán cho người ngoài phải ĐHĐCĐ chấp thuận).
- **Điều 127 — Chuyển nhượng cổ phần:** cổ phần **tự do chuyển nhượng**, trừ hạn chế tại Điều 120(3) và hạn chế ghi trong Điều lệ (phải nêu rõ trên cổ phiếu).

→ **Hệ thống phải mã hoá đúng các điều này** (xem Mục 6 — Compliance Engine).

---

## 2. NÚT THẮT PHÁP LÝ CỐT LÕI (phải hiểu trước khi build)

> **"Chào bán công khai trên website cho công chúng" ≠ tự do.**

| Muốn làm | Pháp lý |
|----------|---------|
| Website công khai mời công chúng mua cổ phần | = **chào bán ra công chúng** → **BẮT BUỘC đăng ký UBCKNN** (Luật CK 2019), có bản cáo bạch, kiểm toán, trở thành **công ty đại chúng** (vốn ≥ 30 tỷ + ≥100 NĐT nắm ≥10%). KHÔNG thể làm như landing page thường. |
| Huy động vốn nhanh, không muốn thành công ty đại chúng | = **chào bán riêng lẻ** → **KHÔNG được dùng website công khai để chào mời**; chỉ < 100 NĐT / NĐT chuyên nghiệp; phương án được ĐHĐCĐ duyệt. |
| Mỗi dự án có "cổ phần riêng" | → mỗi dự án = **một pháp nhân CTCP riêng (project SPV)** phát hành cổ phần của chính nó. "Dự án" không phải pháp nhân nên không tự phát hành cổ phần được. |

**Kết luận thiết kế:** `dautu.muonnoi.org` **KHÔNG** chào bán công khai cổ phần trên trang public. Mô hình hợp pháp & khả thi nhất hiện nay tại VN:

> **Tầng public = thương hiệu + thu hút quan tâm (không chào bán).**
> **Tầng gated = chào bán riêng lẻ thật** cho NĐT đã qualified (<100 / chuyên nghiệp), có hợp đồng đăng ký mua cổ phần (share subscription), sổ cổ đông, theo phương án ĐHĐCĐ duyệt.

Đây **vẫn là huy động vốn bằng cổ phần thật** — chỉ là làm đúng kênh riêng lẻ thay vì công khai trái luật.

---

## 3. KIẾN TRÚC PHÁP NHÂN — MÔ HÌNH PROJECT-SPV

```
                 MUÔN NƠI HOLDING (CTCP mẹ)
                          │  sở hữu % các SPV
       ┌──────────────────┼──────────────────┐
   SPV Dự án A         SPV Dự án B         SPV Dự án C
   (CTCP riêng)        (CTCP riêng)        (CTCP riêng)
   phát hành CP A      phát hành CP B      phát hành CP C
   cho NĐT dự án A     cho NĐT dự án B     cho NĐT dự án C
```

- Mỗi **dự án kêu gọi vốn = 1 CTCP (SPV)** riêng → phát hành "cổ phần riêng của dự án đó" hợp pháp.
- NĐT mua cổ phần của **SPV dự án**, không phải mua "phần ảo".
- Holding mẹ giữ % chi phối + nền tảng chung.
- Ưu điểm: rủi ro cách ly từng dự án; cap table rõ; NĐT biết chính xác sở hữu gì.
- 3 pháp nhân hiện có (VIET CAN NEW CORP / Truyền Thông Việt Can New / Hành Trình Kasan) cần luật sư xếp vào sơ đồ này: ai là holding, ai là operator, ai là SPV phát hành.

**Quốc tế (nếu nhận NĐT nước ngoài):** SPV có thể đặt tại pháp nhân nước ngoài (vd US C-Corp/Delaware) cho NĐT quốc tế, song song SPV VN cho NĐT trong nước — luật sư quyết "ai phát hành cho ai" để tránh xung đột ngoại hối + securities.

---

## 4. BA CON ĐƯỜNG HỢP PHÁP (chọn theo giai đoạn)

| Con đường | Khi nào | Cho phép chào công khai? | Gánh nặng |
|-----------|---------|:------------------------:|-----------|
| **A. Chào bán riêng lẻ** (VN Đ.125 / US Reg D 506) | NGAY — giai đoạn đầu | ❌ Không | Nhẹ: phương án + ĐHĐCĐ + <100 NĐT + hợp đồng. **Khuyến nghị build trước.** |
| **B. Crowdfunding có giấy phép** (US Reg CF/Reg A+, EU ECSPR 2020/1503) | Khi muốn gọi công khai NĐT lẻ quốc tế | ✅ Có (qua portal/CSP được cấp phép, có trần ~$5M US CF / €5M EU) | Trung bình: cần intermediary được cấp phép. **VN chưa có khung equity-crowdfunding trưởng thành → không áp cho NĐT VN đại chúng.** |
| **C. Chào bán ra công chúng** (VN UBCKNN / US Reg A+ lớn / IPO) | Khi đủ lớn, đủ minh bạch | ✅ Có | Nặng: đăng ký, cáo bạch, kiểm toán, công ty đại chúng. |

**Lộ trình:** Build hệ cho **A** trước (đa số deal), kiến trúc mở để bật **B/C** sau mà không phải làm lại.

---

## 5. THIẾT KẾ HỆ THỐNG CHO DEV

### 5.1 Tầng (tái dùng 3-tier từ COMPLIANCE_MASTER)
- **Tầng 1 PUBLIC** (`index`, SEO): brand, câu chuyện dự án **không có** giá/term/“mua cổ phần”. CTA: *Đăng ký quan tâm*.
- **Tầng 2 QUALIFICATION** (`noindex`, sau đăng nhập): KYC/KYB, phân loại NĐT (thường/chuyên nghiệp), NDA, country gate.
- **Tầng 3 DEAL ROOM** (`noindex`, log): phương án chào bán, định giá, cap table, **hợp đồng đăng ký mua cổ phần (share subscription agreement)**, thanh toán, sổ cổ đông.

### 5.2 Data model (gợi ý schema D1/Postgres)
```
issuers            (id, type[holding|spv], legal_name, jurisdiction, business_reg_no,
                    charter_capital, is_public_company, status)
projects           (id, issuer_id→issuers, slug, name_vi, name_en, summary,
                    traction_verified, revenue_verified, legal_status, public_visible)
share_classes      (id, issuer_id, name[ordinary|preferred], par_value, currency,
                    voting, dividend_pref, transfer_restriction_rule)
offerings          (id, issuer_id, share_class_id, type[existing|private|public],
                    total_shares, price_per_share, min_ticket, hard_cap, soft_cap,
                    gms_resolution_ref, open_at, close_at, status, jurisdiction_scope)
investors          (id, user_id, type[individual|institutional],
                    accreditation[retail|professional|accredited], country,
                    kyc_status, kyb_status, aml_status, is_founding_shareholder)
subscriptions      (id, offering_id, investor_id, shares_requested, amount,
                    status[interest|qualified|reserved|contracted|paid|allotted|rejected],
                    subscription_agreement_doc, signed_at)
allotments         (id, subscription_id, shares_allotted, certificate_no, allotted_at)
cap_table_entries  (id, issuer_id, investor_id, share_class_id, shares, pct,
                    acquired_via, lock_until)         -- lock_until enforces Đ.120(3)
transfers          (id, share_class_id, from_investor, to_investor, shares, price,
                    status, gms_approval_ref, restriction_check, executed_at)
documents          (id, owner_type, owner_id, kind, url, watermark, access_log)
kyc_records        (id, investor_id, id_verify, sanctions, pep, source_of_funds,
                    beneficial_owner, country_risk, cleared_at)
investor_counter   (offering_id, non_professional_count)  -- enforce <100 (Đ.125)
audit_log          (id, actor, action, entity, ts, evidence)
```

### 5.3 Routes / pages
| Route | Tầng | Nội dung |
|-------|:----:|----------|
| `/`, `/projects/` (public list) | 1 | Brand + project teasers (không giá/term) |
| `/projects/<slug>/` (public) | 1 | Câu chuyện dự án, traction đã xác minh, CTA *Đăng ký quan tâm* |
| `/register-interest` | 1 | Form phi-tài-chính → tạo `investors.status=interest` |
| `/account/kyc` | 2 | KYC/KYB + phân loại NĐT + NDA |
| `/account/qualification` | 2 | Country gate, professional-investor check |
| `/deal/<offering_id>` | 3 | Phương án chào bán, định giá, cap table (gated) |
| `/deal/<offering_id>/subscribe` | 3 | Share subscription flow + e-sign + payment |
| `/account/portfolio` | 3 | Cổ phần đang nắm, certificate, lock status |
| `/account/transfer` | 3 | Yêu cầu chuyển nhượng (qua restriction engine) |

### 5.4 Luồng đăng ký mua cổ phần (subscription flow)
```
interest → KYC/KYB clear → investor-type classified → country gate pass
 → invited to offering (private) → review phương án + định giá (deal room)
 → sign Share Subscription Agreement (e-sign) → payment via pay.iai.one
 → confirm receipt → board/GMS allotment → certificate issued
 → cap_table updated (+ lock_until nếu áp dụng) → audit_log
```

### 5.5 Tích hợp
- **Thanh toán:** `pay.iai.one` — chỉ hiển thị tài khoản trong Tầng 3 sau legal/accounting duyệt; mỗi giao dịch gắn loại (góp vốn mua cổ phần) + hợp đồng.
- **E-sign:** hợp đồng đăng ký mua cổ phần + NDA.
- **KYC:** `verify.iai.one`.
- **Cap table export:** PDF + CSV cho kế toán/luật sư.

---

## 6. ⚙️ COMPLIANCE ENGINE — PHẦN MỀM TỰ ÉP LUẬT

Đây là điểm khác biệt: **để code enforce luật, không dựa vào con người nhớ.**

| Quy tắc luật | Engine enforce |
|--------------|----------------|
| Đ.125: <100 NĐT không chuyên nghiệp | `investor_counter`: chặn subscription thứ 100 nếu `accreditation=retail`; NĐT chuyên nghiệp không tính |
| Đ.125: không qua mass media | Mọi route Tầng 2–3 `noindex`; wordlist guard chặn từ cấm ở Tầng 1 (CI test) |
| Đ.125: ưu tiên cổ đông hiện hữu | Offering mở **pre-emption window** cho cap_table hiện hữu trước khi mở NĐT mới |
| Đ.120(3): khoá CĐ sáng lập 3 năm | `cap_table.lock_until`; transfer engine từ chối nếu `now < lock_until` (trừ giữa CĐ sáng lập / có ĐHĐCĐ) |
| Đ.127 + Điều lệ: hạn chế chuyển nhượng | Transfer engine đọc `share_classes.transfer_restriction_rule` |
| Phương án ĐHĐCĐ duyệt | Offering không `open` được nếu thiếu `gms_resolution_ref` |
| AML | Subscription không sang `paid` nếu `kyc_records.cleared_at` null |
| Geo (US/EU) | Country gate: US→yêu cầu accredited-verify (506c) hoặc chặn; EU→chặn tới khi có CSP/counsel |
| Chào bán công chúng | Nếu `offering.type=public` → buộc cờ `ubckn_registration_ref` mới `open` được |

---

## 7. QUỐC TẾ (bật khi cần)
- **US:** Reg D **506(c)** cho phép quảng bá nhưng mọi NĐT phải **accredited + verify**; hoặc **Reg CF** (gọi công khai NĐT lẻ ≤ ~$5M/năm qua funding portal đăng ký); **Reg A+** (mini-IPO ≤ $75M). Form D + Blue Sky.
- **EU:** **ECSPR (EU) 2020/1503** — gọi vốn cổ phần công khai ≤ €5M/12 tháng qua **Crowdfunding Service Provider được cấp phép**. Không tự chạy.
- Engine đã có field `jurisdiction_scope` + country gate để bật từng path.

---

## 8. LỘ TRÌNH DEV (phases)

| Phase | Nội dung | Gate ra |
|-------|----------|---------|
| **P1 Public brand** | Astro Tầng 1, project teasers, register-interest form, SEO brand, wordlist CI guard | Luật sư duyệt copy Tầng 1 |
| **P2 Account + KYC** | Auth, KYC/KYB qua verify.iai.one, investor classification, country gate, NDA | KYC/AML SOP chạy |
| **P3 Deal room + subscription** | Offering model, deal room gated, share subscription + e-sign + pay.iai.one, cap table | **Phương án ĐHĐCĐ + luật sư ký 1 deal mẫu** |
| **P4 Cap table + transfer** | Sổ cổ đông, certificate, transfer engine + restriction enforcement | Kế toán + luật sư duyệt transfer flow |
| **P5 Quốc tế / public offering** | Bật 506(c)/Reg CF/ECSPR hoặc đăng ký UBCKNN | Counsel từng vùng |

---

## 9. GO / NO-GO BỔ SUNG CHO EQUITY (verify thật)
- [ ] Mỗi project-SPV đã thành lập CTCP + ĐKKD + vốn điều lệ rõ — _bằng chứng: ____
- [ ] Phương án chào bán riêng lẻ được **ĐHĐCĐ/HĐQT** thông qua (nghị quyết) — _bằng chứng: ____
- [ ] Hợp đồng đăng ký mua cổ phần được luật sư soạn/duyệt — _bằng chứng: ____
- [ ] `investor_counter` enforce <100 đã test — _bằng chứng: ____
- [ ] `lock_until` (Đ.120(3)) + transfer restriction đã test — _bằng chứng: ____
- [ ] KYC/AML clear trước allotment — _bằng chứng: ____
- [ ] Tầng public scan 0 từ cấm (wordlist) — _bằng chứng: CI ____
- [ ] Nếu chào bán công chúng: **đăng ký UBCKNN** xong — _bằng chứng: ____
- [ ] Secondary transfer marketplace: luật sư xác nhận **không cấu thành hoạt động chứng khoán cần giấy phép** — _bằng chứng: ____

---

## 10. CẢNH BÁO THẲNG CHO TEAM
1. **Đừng** để Tầng 1 public có "mua cổ phần / giá / định giá / suất đầu tư" → biến thành chào bán công chúng trái phép.
2. **Mỗi dự án phải là CTCP thật** mới phát hành cổ phần được; không phát hành "cổ phần" cho thực thể không phải pháp nhân.
3. **Sàn chuyển nhượng thứ cấp** (mua/bán lại cổ phần giữa NĐT) có thể bị xem là **tổ chức thị trường giao dịch chứng khoán** → cần giấy phép. Giai đoạn đầu chỉ làm **transfer request có kiểm soát**, không phải sàn khớp lệnh.
4. Phần "GO live + nhận tiền" = **luật sư chứng khoán ký**. Engine ép luật giúp giảm rủi ro, không thay chữ ký.

---

## NGUỒN / SOURCES
- Luật Doanh nghiệp 2020 (59/2020/QH14) Đ.111–127 — chào bán/chuyển nhượng cổ phần, Đ.120(3) hạn chế CĐ sáng lập, Đ.125 chào bán riêng lẻ: [hethongphapluat.com/Đ.125](https://hethongphapluat.com/luat-doanh-nghiep-2020/dieu-125), [thuvienphapluat.vn](https://thuvienphapluat.vn/phap-luat-doanh-nghiep/cau-hoi-thuong-gap/han-che-chuyen-nhuong-co-phan-doi-voi-co-dong-sang-lap-2103.html), [luatvietnam.vn](https://luatvietnam.vn/pldn/thu-tuc-cty-cp/huong-dan-chao-ban-co-phan-rieng-le-cua-ctcp-chua-dai-chung-3040-80714-legal.html)
- Luật Chứng khoán 2019 — chào bán ra công chúng + công ty đại chúng
- US SEC Reg D 506(b)/(c), Reg CF, Reg A+: sec.gov
- EU Regulation (EU) 2020/1503 (ECSPR): finance.ec.europa.eu

---

**Trạng thái:** EQUITY_DEV_PLAN_READY · BUILD P1 ANYTIME · SECURITIES_COUNSEL_REQUIRED FOR P3+ · UBCKNN_REGISTRATION IF PUBLIC_OFFERING
**Canonical governance:** `DAUTU_MUONNOI_COMPLIANCE_MASTER_2026-06-05.md`
