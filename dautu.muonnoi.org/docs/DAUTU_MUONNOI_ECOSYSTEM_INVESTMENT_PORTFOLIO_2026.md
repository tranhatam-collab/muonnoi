# HỒ SƠ ĐẦU TƯ TỔNG THỂ — HỆ SINH THÁI MUÔN NƠI

**Phiên bản:** v1.0 — 2026
**Trạng thái:** Investment Interest Open — Mở cổng quan tâm đầu tư
**Cổng:** dautu.muonnoi.org
**Pháp nhân:** Công ty CP Giáo dục Hành Trình Kasan (VN) | VIET CAN NEW CORP (US)
**Không phải:** Chào bán chứng khoán. Không cam kết lợi nhuận.

---

> **Tuyên bố pháp lý:** Tài liệu này chỉ nhằm mục đích cung cấp thông tin. Không phải lời chào bán chứng khoán. Không phải cam kết lợi nhuận. Mọi con số định giá, dự báo doanh thu chỉ mang tính tham khảo nội bộ.

---

## EXECUTIVE SUMMARY — TẠI SAO NHÀ ĐẦU TƯ NÊN QUAN TÂM NGAY

Muôn Nơi không phải một startup đơn lẻ. Muôn Nơi là **hệ sinh thái 9 dự án** công nghệ được thiết kế để cùng tăng trưởng, chia sẻ hạ tầng, và tạo network effect.

| Yếu tố | Giá trị |
|---|---|
| **Tổng TAM** | 65+ tỷ USD (dating + travel + lifestyle + work + education + community + family + gaming + diaspora) |
| **Tổng nhu cầu vốn** | 1.5M – 3.0M USD cho 9 dự án (giai đoạn seed/pre-seed) |
| **Trạng thái** | 2 dự án có kế hoạch hoàn chỉnh, 7 dự án có concept + architecture map |
| **Hạ tầng chung** | Cloudflare Workers, D1, R2, Google OAuth, pay.iai.one — dùng chung cho cả 9 |
| **Pháp nhân** | 3 entity đã xác định (VN + US) |
| **Đội ngũ** | Founder + 1 tech lead + contractors |

**Đây là cơ hội đầu tư vào một portfolio tech startups với shared infrastructure — chi phí phát triển thấp hơn 60% so với 9 startup độc lập.**

---

## 1. PORTFOLIO 9 DỰ ÁN

| # | Dự án | Slug | Định vị | TAM | Trạng thái | Nhu cầu vốn |
|---|---|---|---|---|---|---|
| 1 | **Kết Nối Muôn Nơi** | ketnoi | Dating/Relationship app xác minh thật | 12B USD | Founder Review Ready | 250K–500K USD |
| 2 | **Đường Muôn Nơi** | dulich | Travel quest + local experience platform | 8B USD | Concept | 150K–300K USD |
| 3 | **Plays Muôn Nơi** | plays | Gaming + entertainment có trách nhiệm | 200B USD | Concept | 100K–200K USD |
| 4 | **Cuộc Sống Muôn Nơi** | cuocsong | Lifestyle + wellness platform | 4B USD | Concept | 150K–300K USD |
| 5 | **Người Việt Muôn Nơi** | nguoiviet | Diaspora community + cultural bridge | 2B USD | Concept | 100K–200K USD |
| 6 | **Family Muôn Nơi** | family | Family management + household OS | 5B USD | Concept | 200K–400K USD |
| 7 | **Học Tập Muôn Nơi** | hoctap | Learning-in-community platform | 350B USD | Concept | 150K–300K USD |
| 8 | **Làm Việc Muôn Nơi** | lamviec | Remote work + freelance marketplace | 4B USD | Concept | 200K–400K USD |
| 9 | **Nhà Chung Muôn Nơi** | nhachung | Community Operating System (co-living) | 50B USD | Build 63/100 | 300K–600K USD |

**Tổng nhu cầu vốn: 1.6M – 3.2M USD**

---

## 2. SYNERGY GIỮA 9 DỰ ÁN

### 2.1. Shared Infrastructure (Tiết kiệm 60% dev cost)

| Hạ tầng | Cách dùng chung |
|---|---|
| **Auth** | Google OAuth + Magic Link — dùng cho cả 9 dự án |
| **Payment** | pay.iai.one — Stripe, PayOS, MoMo, ZaloPay |
| **Storage** | R2 Cloudflare — media, documents, receipts |
| **AI** | ai.muonnoi.org — AI assistant cho cả 9 dự án |
| **Verify** | verify.iai.one — xác minh danh tính chung |
| **Email** | mail.iai.one — 8 templates bilingual |
| **CDN** | Cloudflare Pages + Workers — global edge |

### 2.2. User Cross-Over (Network Effect)

```
Người dùng Kết Nối (dating)
    ↓ có partner → cần Family (quản lý gia đình)
    ↓ muốn du lịch → Đường (travel)
    ↓ muốn học → Học Tập (learning)
    ↓ muốn làm việc → Làm Việc (remote work)
    ↓ muốn giải trí → Plays (gaming)
    ↓ muốn sống cộng đồng → Nhà Chung (co-living)
    ↓ là người Việt ở nước ngoài → Người Việt (diaspora)
```

**Network effect:** Mỗi user 1 dự án → tự nhiên dùng 2-3 dự án khác → CAC giảm 40%.

### 2.3. Revenue Cross-Subsidy

| Dự án | Revenue tiềm năng | Cross-subsidy |
|---|---|---|
| Kết Nối | Subscription + gift + Safe Date | Subsidize Học Tập + Làm Việc |
| Nhà Chung | Subscription 7 tiers + affiliate | Subsidize Family + Cuộc Sống |
| Đường | Booking fee + local host | Subsidize Người Việt + Plays |
| Học Tập | Course + mentor | Break-even nhanh, đào tạo dev |

---

## 3. PHÁP NHÂN & CORPORATE STRUCTURE

```
VIET CAN NEW CORP (Delaware C-Corp)
    └── 100% Công ty CP Giáo dục Truyền Thông Việt Can New (VN)
            ├── Đại diện thanh toán & vận hành VN
            └── 100% Công ty CP Giáo dục Hành Trình Kasan (VN)
                    └── Đơn vị đầu tư, kêu gọi, phát triển
```

| Entity | Quốc gia | Vai trò |
|---|---|---|
| **VIET CAN NEW CORP** | US | Điều phối quốc tế, nhận đầu tư nước ngoài |
| **CP Giáo dục Truyền Thông Việt Can New** | VN | Đại diện thanh toán, vận hành, nhân sự |
| **CP Giáo dục Hành Trình Kasan** | VN | Đầu tư, kêu gọi, phát triển sản phẩm |

**Khuyến nghị cải thiện:** Xem xét lập Singapore Holding Pte. Ltd. để tối ưu tax treaty và quen thuộc với SEA investors.

---

## 4. ĐỊNH GIÁ TỔNG THỂ (PRE-MONEY)

| Phương pháp | Giá trị | Áp dụng |
|---|---|---|
| **Portfolio Discount** | 5M–8M USD | Pre-revenue, 2 projects with plans, shared infra |
| **Sum of Parts** | 6M–10M USD | 9 projects × 600K–1M average |
| **Venture Capital Method** | 8M–12M USD | Exit 50M–100M / 10x return |
| **Berkus Method** | 3M–5M USD | Sound idea + prototype + team |

**Đề xuất chốt:** Pre-money **5M–7M USD** cho toàn portfolio, SAFE cap **8M USD**.

---

## 5. CẤU TRÚC DEAL ĐỀ XUẤT

| Thành phần | Khuyến nghị |
|---|---|
| **Instrument** | SAFE (Simple Agreement for Future Equity) |
| **Valuation Cap** | 8.000.000 USD (portfolio) |
| **Discount** | 20% |
| **MFN** | Có |
| **Raise** | 1.000.000 – 1.500.000 USD (Round 0) |
| **Pro-rata** | Có — cho phép tham gia vòng sau |
| **Use of proceeds** | Phân bổ theo % cho từng dự án theo priority |

### Phân bổ vốn đề xuất

| Dự án | % vốn | Số tiền (1M raise) | Priority |
|---|---|---|---|
| Nhà Chung | 25% | 250K | P0 — Đang build, gần MVP nhất |
| Kết Nối | 20% | 200K | P0 — Plan hoàn chỉnh, sẵn sàng dev |
| Đường | 10% | 100K | P1 — Concept rõ, TAM lớn |
| Làm Việc | 10% | 100K | P1 — Xu hướng remote work |
| Học Tập | 10% | 100K | P1 — Break-even nhanh |
| Family | 8% | 80K | P2 — Synergy với Kết Nối + Nhà Chung |
| Cuộc Sống | 7% | 70K | P2 — Lifestyle trend |
| Người Việt | 5% | 50K | P2 — Diaspora niche |
| Plays | 5% | 50K | P3 — TAM lớn nhưng cạnh tranh khốc liệt |

---

## 6. RỦI RO TỔNG THỂ

| # | Rủi ro | Mức | Giảm thiểu |
|---|---|---|---|
| 1 | Scope quá rộng (9 dự án) | 🔴 High | Phân pha, ưu tiên P0, không mở >3 dự án cùng lúc |
| 2 | Dev resource hạn chế | 🔴 High | Shared infra, outsource non-core, hire theo milestone |
| 3 | Pháp lý cross-border (VN-US) | 🔴 High | Legal counsel VN + US, corporate structure rõ |
| 4 | Không có traction (pre-revenue) | 🔴 High | Nhà Chung 63/100, Kết Nối chưa dev — cần 6 tháng đến pilot |
| 5 | Founder 1 người | 🔴 High | Tìm co-founder/CTO, equity vesting 4 năm |
| 6 | Payment/compliance VN | 🟡 Medium | Pay.iai.one, PDPL, data localization |
| 7 | Cạnh tranh | 🟡 Medium | Network effect + shared infra là moat |
| 8 | Tech debt | 🟡 Medium | Audit liên tục, không build room 10 trước V1 |
| 9 | Regulatory (dating, gaming, travel) | 🟡 Medium | Tùy dự án: OSA (UK), PDPL (VN), FOSTA-SESTA (US) |
| 10 | Burn rate | 🟢 Low-Medium | Shared infra giảm cost 60%, runway 12 tháng |

---

## 7. EXIT STRATEGY TỔNG THỂ

### 7.1. Từng dự án riêng lẻ

| Dự án | Exit khả năng cao nhất | Timeline |
|---|---|---|
| Kết Nối | Acquisition bởi Match Group / Bumble / local player | Năm 4–6 |
| Nhà Chung | Acquisition bởi Notion / Discord / co-living platform | Năm 4–7 |
| Đường | Acquisition bởi Booking / Airbnb / travel unicorn | Năm 5–7 |
| Học Tập | Acquisition bởi edtech platform / merge với LMS | Năm 3–5 |
| Làm Việc | Acquisition bởi remote work platform / Upwork | Năm 4–6 |
| Plays | Acquisition bởi gaming publisher / IP spin-off | Năm 5–7 |

### 7.2. Portfolio exit

| Scenario | Mô tả |
|---|---|
| **A — Platform rollup** | Một PE fund mua toàn portfolio để tích hợp thành super app |
| **B — Strategic partial sale** | Bán 2-3 dự án thành công, giữ lại core |
| **C — IPO (không thực tế trước năm 8)** | Khi revenue >10M USD, profitability |

---

## 8. LỘ TRÌNH TỔNG THỂ

```
Tháng 1–3: Phase 0
    → Legal entity + corporate structure
    → Infra chung (Cloudflare, auth, payment)
    → Nhà Chung MVP + Kết Nối dev start

Tháng 4–6: Phase 1
    → Nhà Chung pilot (2 cộng đồng)
    → Kết Nối MVP (web app, auth, profile)
    → Đường + Làm Việc concept → plan

Tháng 7–9: Phase 2
    → Nhà Chung monetize (subscription)
    → Kết Nối pilot (500 users)
    → Học Tập MVP

Tháng 10–12: Phase 3
    → Series A pitch (revenue >5K/month)
    → Family + Cuộc Sống dev
    → Người Việt + Plays plan lock

Năm 2: Scale
    → 3 dự án có revenue
    → Mobile app cho Kết Nối + Nhà Chung
    → White label cho Nhà Chung
    → Internationalization

Năm 3–5: Exit preparation
    → M&A readiness cho 2-3 dự án
    → Revenue >1M/year
    → Clean cap table, audited financials
```

---

## 9. CTA — CÁCH THAM GIA

### Cho nhà đầu tư:

**[Gửi quan tâm đầu tư →]** dautu.muonnoi.org/interest/

**Hình thức quan tâm:**
- ✅ Đầu tư tài chính (SAFE / Convertible Note)
- ✅ Đồng phát triển (technical co-founder)
- ✅ Tài trợ pháp lý (legal counsel)
- ✅ Tài trợ hạ tầng (cloud credits, tools)
- ✅ Đối tác chiến lược (distribution, users)
- ✅ Mentor / Advisor (equity advisory)

### Quy trình 6 bước:

1. **Xem thông tin** → Đọc hồ sơ dự án quan tâm
2. **Đọc rủi ro** → Cảnh báo rủi ro đầy đủ
3. **Gửi form** → Form quan tâm (không bắt buộc đăng nhập)
4. **Kiểm tra** → Đội phụ trách review profile
5. **Trao đổi riêng** → Nếu phù hợp, mời vào deal room
6. **Giao dịch** → Chỉ sau hồ sơ pháp lý + thanh toán chính thức

---

## 10. PHÁP LÝ & MINH BẠCH

- Không cam kết lợi nhuận, hoàn vốn, thanh khoản
- Không chào bán chứng khoán công khai
- Không nhận tiền tự động từ public page
- Form chỉ là "bày tỏ quan tâm"
- Deal room chỉ mở sau legal review
- Tài khoản thanh toán chỉ công bố trong tài liệu đã kiểm duyệt

---

**Đầu Tư Muôn Nơi**  
Hệ sinh thái 9 dự án · Shared infrastructure · Network effect · 65B+ TAM  
Cổng quan tâm đầu tư — không phải chào bán chứng khoán.
