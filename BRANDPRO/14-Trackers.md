# 14 — Trackers: Budget, Risk Register, Content Calendar, Asset Version Log, KPI Scorecard, Product Brand Metrics

> 6 tracker thiết yếu để vận hành brand. Lưu ý: tất cả nên triển khai trên **Google Sheets / Airtable / Notion Database**, không trên file Markdown. File này là **schema** cho việc tạo trên tool.

---

## A. HƯỚNG DẪN

- Mỗi tracker có: **schema cột** (cấu trúc) + **rule điền** (quy tắc) + **report format** (cách báo cáo).
- Owner: Project Manager / Brand Guardian.
- Cadence: hàng ngày (Asset Version, Content Calendar) hoặc hàng tuần (Budget, Risk, KPI).
- Mọi tracker phải **link với nhau** (foreign key) — không tách rời.

---

## B. TRACKER #1 — BUDGET TRACKER

### B.1 Schema

```
COLUMN                        TYPE        REQUIRED    NOTE
-------------------------------------------------------------------------------
ID                            ID auto     YES         B-001, B-002, ...
Category                      Select      YES         Forensics / Strategy / Identity / Product / Web / SEO / Legal / Photo / Other
Item                          Text        YES         Mô tả ngắn
Budgeted (VND)                Currency    YES         Số duyệt ban đầu
Actual spent (VND)            Currency    YES         Số đã chi
Variance (%)                  Formula     -           = (Actual - Budgeted) / Budgeted × 100
Status                        Select      YES         Planned / Committed / Spent / Cancelled
Vendor / Person               Text        NO          Ai thực hiện
PO / Invoice                  Text        NO          Số hóa đơn
Date committed                Date        YES         Ngày duyệt
Date paid                     Date        NO          Ngày chi thực
Owner                         Person      YES         Ai chịu trách nhiệm
Linked task                   Reference   NO          Link tới task quản lý
Notes                         Text        NO
-------------------------------------------------------------------------------
```

### B.2 Rule điền

- Mỗi line item >= 500k VND mới track riêng. Dưới đó gộp "Misc".
- Variance > +15% -> require Founder approval.
- Variance < -15% -> ghi note tại sao.
- Status `Committed` = đã ký hợp đồng / PO. `Spent` = đã chi tiền.
- Mỗi quý reconcile với kế toán.

---

## C. TRACKER #2 — RISK REGISTER

### C.1 Schema

```
COLUMN                        TYPE        REQUIRED    NOTE
-------------------------------------------------------------------------------
ID                            ID auto     YES         R-001, R-002, ...
Risk description              Text        YES         Mô tả rủi ro
Category                      Select      YES         Brand / Legal / Financial / Tech / Market / Ops
Probability (1-5)             Number      YES         1=Rare, 5=Almost certain
Impact (1-5)                  Number      YES         1=Negligible, 5=Catastrophic
Risk Score                    Formula     -           = Probability × Impact
Status                        Select      YES         Active / Mitigated / Closed / Escalated
Mitigation plan               Text        YES         Kế hoạch giảm thiểu
Owner                         Person      YES         Ai theo dõi
Due date                      Date        NO          Deadline mitigation
Last review                   Date        YES         Ngày review gần nhất
-------------------------------------------------------------------------------
```

### C.2 Risk Score mapping

| Score | Mức | Hành động |
|-------|-----|-----------|
| 20-25 | Critical | Escalate to Founder ngay, weekly review |
| 12-16 | High | Mitigation plan bắt buộc, bi-weekly review |
| 6-9 | Medium | Monitor, monthly review |
| 1-4 | Low | Accept, log only |

---

## D. TRACKER #3 — CONTENT CALENDAR

### D.1 Schema

```
COLUMN                        TYPE        REQUIRED    NOTE
-------------------------------------------------------------------------------
ID                            ID auto     YES         C-001, ...
Content title                 Text        YES         Tiêu đề
Format                        Select      YES         Blog / Social / Email / Video / Podcast / Web update
Channel                       Select      YES         Web / FB / IG / LinkedIn / X / YouTube / Email
Language                      Select      YES         VI / EN / Both
Status                        Select      YES         Idea / Draft / Review / Scheduled / Published
Publish date                  Date        YES         Ngày publish
Owner                         Person      YES         Content writer
Reviewer                      Person      YES         Brand Guardian / SEO
Linked pillar                 Select      YES         Pillar 1-5 (link tới content strategy)
SEO keyword                   Text        NO          Target keyword
Performance metric            Text        NO          Views / CTR / Engagement (điền sau publish)
-------------------------------------------------------------------------------
```

---

## E. TRACKER #4 — ASSET VERSION LOG

### E.1 Schema

```
COLUMN                        TYPE        REQUIRED    NOTE
-------------------------------------------------------------------------------
ID                            ID auto     YES         A-001, ...
Asset name                    Text        YES         Tên file
Type                          Select      YES         Logo / Photo / Video / Banner / PDF / Figma / Code
Version                       Text        YES         v1.0, v1.1, ...
Change description            Text        YES         Thay đổi gì?
Changed by                    Person      YES         Ai thay đổi
Approved by                   Person      YES         Ai duyệt
Date                          Date        YES         Ngày thay đổi
Location                      URL/Text    YES         Đường dẫn file
Status                        Select      YES         Active / Deprecated / Archived
-------------------------------------------------------------------------------
```

---

## F. TRACKER #5 — KPI SCORECARD

### F.1 Schema

| KPI | Target | Current | Trend | Owner | Review cadence |
|-----|--------|---------|-------|-------|----------------|
| Branded search volume/tháng | >= 500 | <<...>> | ↑/↓/→ | SEO | Monthly |
| SERP rank (brand name) | Top 3 | <<...>> | ↑/↓/→ | SEO | Weekly |
| Knowledge Panel | Yes | <<...>> | — | SEO | Monthly |
| Social followers (total) | <<...>> | <<...>> | ↑/↓/→ | Social | Weekly |
| Website traffic (organic) | <<...>> | <<...>> | ↑/↓/→ | SEO | Monthly |
| Content publish rate | >= 10/month | <<...>> | ↑/↓/→ | Content | Monthly |
| Brand consistency score | >= 85/100 | <<...>> | ↑/↓/→ | Brand Guardian | Quarterly |

---

## G. TRACKER #6 — PRODUCT BRAND METRICS (NEW in v2.0)

> Đo brand health trong product layer — không chỉ marketing metrics.

### G.1 Schema

| Metric | Definition | Target | Tool / Source | Owner | Cadence |
|--------|------------|--------|---------------|-------|---------|
| Onboarding completion rate | % user hoàn thành onboarding | >= 70% | Analytics | PM | Weekly |
| Time-to-first-value (TTFV) | Phút từ sign up đến first "aha" moment | <<...>> | Analytics | PM | Weekly |
| Error message comprehension | % user hiểu error và thực hiện action đúng | >= 80% | UX testing | PM | Monthly |
| Empty state CTA click rate | % user click CTA trên empty state | >= 30% | Analytics | PM | Weekly |
| Feature name recall | % user nhớ đúng tên feature sau 1 tuần | >= 60% | User survey | PM | Quarterly |
| In-app NPS | NPS score từ in-app survey | >= 40 | Product | PM | Monthly |
| Branded organic search ratio | % organic search là branded vs non-branded | >= 40% | Search Console | SEO | Monthly |
| Word-of-mouth coefficient | % new signups từ referral / invite | >= 15% | Analytics | Growth | Monthly |
| Design system adoption | % UI dùng component từ design system | >= 90% | Figma / Code audit | Designer | Quarterly |
| API doc satisfaction | % dev đánh giá API doc >= 4/5 | >= 80% | Dev survey | Dev Lead | Quarterly |

### G.2 Product Brand Health Score formula

```
Product Brand Health Score =
  (Onboarding completion × 0.15)
+ (Error comprehension × 0.15)
+ (Empty state CTA rate × 0.10)
+ (Feature name recall × 0.10)
+ (In-app NPS normalized × 0.15)
+ (Branded search ratio × 0.15)
+ (Design system adoption × 0.10)
+ (API doc satisfaction × 0.10)

Scale: 0–100
Target: >= 75
```

---

**Người duyệt:** __________     **Ngày duyệt:** <<YYYY-MM-DD>>