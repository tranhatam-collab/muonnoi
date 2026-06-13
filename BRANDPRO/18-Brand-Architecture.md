# 18 — Brand Architecture: Master Brand, Sub-Brand, Endorsed Brand, Ingredient Brand

> Khi một tổ chức có nhiều thương hiệu, sản phẩm, hoặc dịch vụ, cần một framework rõ ràng để quyết định **mối quan hệ giữa các brand**. Không có architecture = visual chaos + message dilution.

---

## A. HƯỚNG DẪN

- Brand Architecture quyết định **cấu trúc brand portfolio** của một tổ chức.
- Áp dụng cho: holding company, multi-product startup, platform với nhiều vertical, hoặc brand đang mở rộng sang ngành mới.
- Owner: Brand Strategist + Founder. Approver: Founder + Board (nếu có).
- Timing: **Pha 2** (cùng lúc với Naming + Positioning) — trước khi thiết kế logo cho bất kỳ sub-brand nào.

---

## B. 4 MODELS OF BRAND ARCHITECTURE

### B.1 Branded House (Ngôi nhà thương hiệu)

```
<<MASTER BRAND>>
├── <<Master Brand>> Product A
├── <<Master Brand>> Product B
├── <<Master Brand>> Service X
└── <<Master Brand>> Feature Y

Ví dụ: Google (Google Search, Google Maps, Google Drive)
```

**Khi nào dùng:**
- Master brand đã có equity mạnh.
- Các sản phẩm cùng giá trị cốt lõi.
- Muốn tập trung marketing budget vào 1 brand.

**Rủi ro:**
- Một sản phẩm fail có thể làm tổn hại master brand.
- Khó tiến vào thị trường mà master brand không phù hợp.

---

### B.2 House of Brands (Ngôi nhà của các thương hiệu)

```
<<Parent Company>> (ẩn hoặc B2B only)
├── <<Brand A>> (độc lập)
├── <<Brand B>> (độc lập)
└── <<Brand C>> (độc lập)

Ví dụ: Procter & Gamble (P&G không hiện diện consumer-facing)
```

**Khi nào dùng:**
- Các sản phẩm ở ngành/thị trường khác biệt hoàn toàn.
- Muốn định vị mỗi brand riêng biệt.
- Master brand không có equity consumer.

**Rủi ro:**
- Tốn kém marketing (mỗi brand cần budget riêng).
- Khó cross-sell.

---

### B.3 Endorsed Brand (Thương hiệu được bảo chứng)

```
<<MASTER BRAND>>
├── <<Brand A>> by <<Master Brand>>
├── <<Brand B>> by <<Master Brand>>
└── <<Brand C>> — A <<Master Brand>> Company

Ví dụ: Amazon (Amazon Web Services, Amazon Prime, Amazon Music)
```

**Khi này dùng:**
- Sản phẩm cần chút độc lập nhưng vẫn muốn leverage master brand trust.
- Đang chuyển từ House of Brands sang Branded House (hoặc ngược lại).

---

### B.4 Sub-Brand / Hybrid (Lai ghép)

```
<<MASTER BRAND>>
├── <<Master Brand>> Core
├── <<Sub-Brand 1>> (có visual riêng nhưng link về master)
└── <<Sub-Brand 2>> (có visual riêng nhưng link về master)

Ví dụ: Apple (iPhone, iPad, Mac — mỗi thương hiệu có identity riêng nhưng đều thuộc Apple)
```

**Khi nào dùng:**
- Sản phẩm có đủ lớn để cần identity riêng.
- Muốn giữ master brand ở background nhưng sub-brand có thể đứng một mình trong marketing.

---

## C. DECISION TREE

```
Tổ chức có bao nhiêu product/service?
├── 1 -> Single Brand (không cần file này, bỏ qua)
└── 2+ -> Các product có cùng customer và values?
              ├── YES -> Branded House
              └── NO  -> Các product ở ngành/market khác biệt hoàn toàn?
                             ├── YES -> House of Brands
                             └── NO  -> Endorsed Brand hoặc Hybrid
```

---

## D. VISUAL HIERARCHY MATRIX

| Element | Branded House | House of Brands | Endorsed | Hybrid |
|---------|---------------|-----------------|----------|--------|
| Logo master | Dominant | Hidden/minimal | Medium | Background |
| Logo sub | Không có | Dominant | Small + "by Master" | Medium |
| Color palette | Shared | Independent | Adapted from master | Adapted |
| Typography | Shared | Independent | Adapted | Adapted |
| Messaging tone | Shared | Independent | Adapted | Adapted |
| Domain | sub.master.com | independent.com | sub.master.com hoặc independent | sub.master.com |

---

## E. TEMPLATE — BRAND ARCHITECTURE MAP

```
BRAND ARCHITECTURE — <<Organization Name>>

Model chọn: <<Branded House / House of Brands / Endorsed / Hybrid>>

MASTER BRAND:
- Tên: <<...>>
- Positioning: <<...>>
- Logo: <<...>>
- Domain: <<...>>

SUB-BRANDS / PRODUCTS:

1. <<Sub-brand/Product A>>
   - Mối quan hệ với master: <<...>>
   - Visual link: <<Same logo / Modified logo / Different logo + endorsement>>
   - Color: <<...>>
   - Domain: <<...>>
   - Target: <<...>>
   - Positioning: <<...>>

2. <<Sub-brand/Product B>>
   - Mối quan hệ với master: <<...>>
   - Visual link: <<...>>
   - Color: <<...>>
   - Domain: <<...>>
   - Target: <<...>>
   - Positioning: <<...>>

3. <<Sub-brand/Product C>>
   - ...

DOMAIN MAP:
- master.com -> Homepage tổng
- sub-a.master.com -> Sub-brand A (hoặc sub-a.com nếu independent)
- sub-b.master.com -> Sub-brand B
```

---

## F. NAMING CONVENTION FOR ARCHITECTURE

### F.1 Domain naming

| Model | Pattern | Ví dụ |
|-------|---------|-------|
| Branded House | `product.master.com` | `drive.google.com` |
| House of Brands | `brand-b.com` | `youtube.com` (của Google) |
| Endorsed | `brand-b.com` + footer "by Master" | `aws.amazon.com` |
| Hybrid | `brand-b.master.com` hoặc `brand-b.com` với shared nav | `apple.com/mac` |

### F.2 Logo usage rules

```
Branded House:
- [ ] Mọi sản phẩm dùng logo master.
- [ ] Tên sản phẩm là descriptor, không phải brand riêng.

House of Brands:
- [ ] Mỗi brand có logo riêng.
- [ ] Master logo chỉ xuất hiện ở About page / legal footer.

Endorsed:
- [ ] Sub-brand logo dominant.
- [ ] Master logo xuất hiện với qualifier "by Master".

Hybrid:
- [ ] Sub-brand có logo riêng.
- [ ] Shared visual elements (color accent, icon style) với master.
```

---

**Người duyệt:** __________     **Ngày duyệt:** <<YYYY-MM-DD>>
