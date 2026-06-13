# 19 — Competitive Moat & Tech Positioning: Network Effects, Data Moat, Integration, Switching Costs

> Positioning trong file 05 (Brand Pillars) trả lời "who are we vs competitors". File này trả lời **"why us and why now"** ở layer tech — đặc biệt quan trọng cho SaaS, platform, và tech product.

---

## A. HƯỚNG DẪN

- Competitive Moat analysis phải được thực hiện **trước khi quyết định architecture và roadmap sản phẩm**.
- Owner: Product Manager + Brand Strategist. Approver: Founder.
- Timing: **Pha 2** (cùng với Positioning + Brand Architecture).
- Mục tiêu: xác định **lợi thế bền vững** mà đối thủ khó copy trong 12–24 tháng.

---

## B. 7 LOẠI MOAT CHO TECH PRODUCT

### B.1 Network Effects

> Giá trị sản phẩm tăng khi số lượng user tăng.

| Type | Definition | Examples | Độ bền |
|------|------------|----------|--------|
| Direct network effects | Nhiều user = nhiều giá trị cho mỗi user (mạng xã hội) | Facebook, LinkedIn | Rất bền |
| Indirect network effects | Nhiều user A thu hút user B (marketplace) | Airbnb, Uber | Bền |
| Two-sided network | Cung và cầu cùng tăng | Stripe, Shopify | Bền |
| Data network effects | Nhiều data = AI/model tốt hơn | TikTok, Google | Rất bền |

**Template đánh giá:**
```
Network Effects Assessment — <<Brand>>

Có network effects không? [ ] Có  [ ] Không  [ ] Tiềm năng
Loại: <<Direct / Indirect / Two-sided / Data>>

Metric:
- Số user hiện tại: <<...>>
- Số user cần để đạt critical mass: <<...>>
- Tốc độ tăng trưởng user/tháng: <<...>>

Moat strength: <<Weak / Medium / Strong>>
Vì sao: <<...>>
```

---

## B.2 Data Moat

> Tích lũy dữ liệu độc quyền mà đối thủ không có hoặc khó thu thập.

**Template đánh giá:**
```
Data Moat Assessment — <<Brand>>

Loại data độc quyền:
[ ] User behavior data
[ ] Transaction data
[ ] Content data
[ ] Sensor / IoT data
[ ] Domain-specific knowledge graph

Khả năng thu thập của đối thủ:
[ ] Dễ dàng — họ có thể thu thập trong 3–6 tháng
[ ] Trung bình — cần 12–18 tháng
[ ] Khó — cần > 24 tháng hoặc không thể vì regulatory / relationship

Data flywheel:
Càng nhiều user -> càng nhiều data -> AI/model tốt hơn -> UX tốt hơn -> nhiều user hơn
[ ] Có flywheel  [ ] Không có
```

---

## B.3 Integration Moat (Ecosystem Lock-in)

> Sản phẩm trở thành hub mà các tool khác tích hợp vào.

**Template đánh giá:**
```
Integration Moat Assessment — <<Brand>>

Số integration hiện có: <<...>>
Số integration đối thủ chính có: <<...>>

Integration depth:
[ ] Shallow — API read-only
[ ] Medium — API read-write
[ ] Deep — Embedded widget / white-label / bi-directional sync

Đối thủ có thể replicate integrations trong bao lâu?
[ ] < 6 tháng
[ ] 6–12 tháng
[ ] > 12 tháng (vì relationship / exclusive deal)
```

---

## B.4 Switching Costs

> Chi phí (tiền, thời gian, công sức) để user chuyển sang đối thủ.

| Type | Mô tả | Metric |
|------|-------|--------|
| Data migration | User phải export/import data | Thời gian + risk mất data |
| Workflow relearning | Team phải học tool mới | Thời gian training |
| Integration rebuild | Phải setup lại integration với các tool khác | Engineering hours |
| Contract lock | Annual contract, penalty nếu rời sớm | % user on annual plan |
| Customization loss | Config, templates, automation phải rebuild | Số giờ để rebuild |

**Template đánh giá:**
```
Switching Costs Assessment — <<Brand>>

Ước tính thời gian để user chuyển sang đối thủ:
[ ] < 1 ngày (không có switching cost)
[ ] 1–7 ngày
[ ] 1–4 tuần
[ ] 1–3 tháng
[ ] > 3 tháng

Chi phí tài chính (nếu có):
[ ] Không có
[ ] < 1 tháng subscription
[ ] 1–3 tháng subscription
[ ] > 3 tháng subscription + migration cost
```

---

## B.5 Brand Moat

> Brand recognition và trust làm user chọn mình dù đối thủ có feature tương tự.

**Template đánh giá:**
```
Brand Moat Assessment — <<Brand>>

Brand awareness (unprompted) trong target audience: <<...>>%
Brand trust score: <<...>>/10
NPS: <<...>>

So với đối thủ chính:
- Awareness gap: <<...>>% (chúng ta cao hơn/thấp hơn bao nhiêu)
- Trust gap: <<...>>

Moat strength: <<Weak / Medium / Strong>>
```

---

## B.6 Technical / Algorithm Moat

> Công nghệ độc quyền, patent, hoặc algorithm khó replicate.

**Template đánh giá:**
```
Tech Moat Assessment — <<Brand>>

Có patent không? [ ] Có  [ ] Không  [ ] Đang nộp
Số patent: <<...>>
Algorithm độc quyền: [ ] Có  [ ] Không
Tech stack khó replicate vì: <<...>>
Performance advantage: <<...>>x nhanh hơn/cheaper hơn đối thủ
```

---

## B.7 Regulatory / Compliance Moat

> Giấy phép, compliance, hoặc regulatory approval khó đạt.

**Template đánh giá:**
```
Regulatory Moat Assessment — <<Brand>>

Cần giấy phép hoặc compliance nào? <<...>>
Thời gian để đối thủ đạt: <<...>>
Chi phí để đạt: <<...>>
[ ] Regulatory là barrier to entry đáng kể
```

---

## C. MOAT SUMMARY MATRIX

| Moat Type | Strength (1-10) | Độ bền (months to replicate) | Cần invest thêm? |
|-----------|-------------------|----------------------------|------------------|
| Network Effects | <<...>> | <<...>> | [ ] Có  [ ] Không |
| Data Moat | <<...>> | <<...>> | [ ] Có  [ ] Không |
| Integration Moat | <<...>> | <<...>> | [ ] Có  [ ] Không |
| Switching Costs | <<...>> | <<...>> | [ ] Có  [ ] Không |
| Brand Moat | <<...>> | <<...>> | [ ] Có  [ ] Không |
| Tech Moat | <<...>> | <<...>> | [ ] Có  [ ] Không |
| Regulatory Moat | <<...>> | <<...>> | [ ] Có  [ ] Không |

**Tổng Moat Score:** <<sum / 70>>
**Moat chính (top 2):** <<...>> và <<...>>
**Cần strengthen:** <<...>>

---

## D. POSITIONING STATEMENT — TECH LAYER

Dựa trên moat chính, viết positioning ở layer tech:

```
TECH POSITIONING — <<Brand>>

Mục tiêu: <<...>>

Khác biệt cốt lõi (không phải feature list):
"Chúng tôi là <<...>> vì <<moat chính>>."

Đối thủ khó copy vì:
1. <<...>> (cần <<...>> tháng để replicate)
2. <<...>> (cần <<...>> tháng để replicate)

Khi nào moat này sẽ yếu đi:
<<...>> (và chúng ta cần xây moat tiếp theo là <<...>>)
```

---

**Người duyệt:** __________     **Ngày duyệt:** <<YYYY-MM-DD>>
