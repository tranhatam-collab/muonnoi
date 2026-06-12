# NGUOIVIET_MUONNOI_PUBLIC_SITE_STRUCTURE_AND_DEV_HANDOFF_2026

**Ngày:** 2026-06-12  
**Trạng thái:** Dev Handoff Draft  
**Phạm vi:** `nguoiviet.muonnoi.org` + liên kết `duongsaotoasang.com`  
**Mục đích:** Chuyển chiến lược thành cấu trúc build cụ thể cho team dev / content / ops.

---

## I. PHÁN QUYẾT TRIỂN KHAI

### 1.1. Build target

Team **không được** build `nguoiviet.muonnoi.org` như:

- một landing page 1 trang
- một news site
- một social feed
- một site chỉ để form đăng ký
- một site lẫn lộn cộng đồng, donor, đầu tư, chương trình

Team **phải** build theo cấu trúc:

> **Institutional Public Surface**  
> đủ rõ để:
> - giới thiệu mission
> - hiển thị programs
> - mở donor / partner / volunteer lanes
> - kể impact stories
> - hiển thị governance
> - dẫn flow sang flagship programs

### 1.2. Production posture

Giai đoạn này là:

- public-facing
- legal-safe
- donor/partner/volunteer ready
- governance visible
- program-first
- not investment portal
- not public fundraising engine with bank details

---

## II. IA / SITEMAP ĐỀ XUẤT CHO NGUOIVIET.MUONNOI.ORG

## 2.1. Public core routes

| Route | Vai trò |
|------|---------|
| `/` | Homepage |
| `/mission` | Sứ mệnh, lý do tồn tại, cộng đồng phục vụ |
| `/programs` | Danh sách chương trình |
| `/programs/duong-sao-toa-sang` | Card / bridge sang flagship |
| `/chapters` | Khu vực / hub / chapter model |
| `/support` | Donor / sponsor / partner support overview |
| `/volunteer` | Volunteer / mentor lane |
| `/partners` | Partner / co-development lane |
| `/governance` | Governance, disclosures, policies |
| `/stories` | Impact stories / approved case studies |
| `/faq` | FAQ |
| `/legal` | Legal-safe disclosures |

## 2.2. Optional second-wave routes

| Route | Vai trò |
|------|---------|
| `/reports` | Impact reports |
| `/apply` | Member / chapter / program interest |
| `/scholarships` | Sponsored seats / scholarship overview |
| `/community-guidelines` | Code of conduct |
| `/contact` | Contact page |

---

## III. HOMEPAGE STRUCTURE

## 3.1. Section order

### Section 1 — Hero
- Người Việt Muôn Nơi là gì
- 1 câu mission
- 1 câu định vị
- CTA:
  - Xem chương trình
  - Trở thành đối tác
  - Đồng hành cùng sáng kiến

### Section 2 — Vấn đề / vì sao tồn tại
Nói rõ các khoảng trống:
- người trẻ thiếu định hướng và cơ hội
- diaspora thiếu hạ tầng kết nối có tổ chức
- cộng đồng thiếu chương trình dài hạn, có governance
- thiếu cầu nối giữa học tập, công nghệ, cộng đồng và cơ hội thực tế

### Section 3 — 3–4 chương trình trọng điểm
Trong đó DSTS là card đầu tiên

### Section 4 — Ways to support
- donor / sponsor
- mentor / volunteer
- partner / co-development
- chapter / local collaboration

### Section 5 — Stories / impact
- case study cards
- only approved stories
- no overclaim

### Section 6 — Governance
- principles
- reporting
- disclosure
- legal-safe wording

### Section 7 — CTA cuối
- Khám phá chương trình
- Đề xuất hợp tác
- Tài trợ một chương trình / một suất
- Trở thành mentor

---

## IV. PROGRAMS PAGE

## 4.1. Program card model

Mỗi program card bắt buộc có:

- tên chương trình
- dành cho ai
- đầu ra mong đợi
- trạng thái: Live / Pilot / Planned
- cách tham gia
- có lane nào phù hợp: mentor / volunteer / sponsor / partner
- CTA riêng

## 4.2. Program priority order

1. Đường Sao Tỏa Sáng
2. Chương trình học tập / công nghệ
3. Chương trình việc làm / chuyển đổi nghề
4. Chương trình cộng đồng / nhà chung / chapters

---

## V. SUPPORT PAGE

## 5.1. Public-safe support lanes

Page `/support` chỉ được mở các lane sau:

1. Tài trợ chương trình
2. Tài trợ một suất / sponsored seat
3. Partnership / co-development
4. Volunteer / mentor support
5. Chapter support
6. Request private discussion

## 5.2. Không được có

- bank account public
- QR thanh toán public
- “đầu tư ngay”
- “góp vốn”
- ROI
- equity
- valuation
- term sheet

---

## VI. GOVERNANCE PAGE

Bắt buộc phải có 6 khối:

1. Mission and public-benefit direction
2. Operating principles
3. Safeguarding / privacy / consent
4. Story / image / participant consent logic
5. Reporting commitment
6. Legal posture disclosure

---

## VII. FORMS TEAM DEV PHẢI BUILD

## 7.1. Form list

| Form | Route | Purpose |
|------|------|---------|
| Program interest | `/apply` or program-specific | Người muốn tham gia chương trình |
| Volunteer / mentor form | `/volunteer` | Mentor / volunteer lane |
| Partner form | `/partners` | Partnership / co-development |
| Sponsor support form | `/support` | Sponsor / donor lane |
| Contact form | `/contact` | General inquiries |

## 7.2. Common fields

- full_name
- email
- country
- city / region
- lane_of_interest
- program_of_interest
- why_are_you_reaching_out
- consent checkbox
- legal acknowledgement

## 7.3. Lane selector values

- Tôi muốn tham gia chương trình
- Tôi muốn làm mentor / volunteer
- Tôi muốn đồng hành tài trợ
- Tôi muốn hợp tác triển khai
- Tôi muốn mở chapter / hub
- Tôi muốn trao đổi riêng

---

## VIII. DSTS BRIDGE RULE

`nguoiviet.muonnoi.org` **không được** copy toàn bộ nội dung DSTS lên site umbrella.

Nó phải chỉ làm:

- summary
- role in mission
- CTA bridge sang `duongsaotoasang.com`

Lý do:
- tránh duplicate content
- tránh loãng brand
- giữ đúng hierarchy

---

## IX. DESIGN / UX REQUIREMENTS

1. **Institutional clarity first** — không làm rối như social app.
2. **Typography clean** — nghiêm túc, dễ đọc.
3. **No fake urgency** — không countdown, không ép chuyển đổi.
4. **Program cards > hype banners**
5. **Governance visible**
6. **Legal footer on every page**
7. **Story cards only if consent approved**
8. **Bilingual-ready structure** — dù có thể launch tiếng Việt trước

---

## X. DEV BLOCKERS / P0

Team không được deploy public nếu còn một trong các lỗi sau:

1. Homepage không có governance/disclosure path
2. Support page còn CTA kiểu đầu tư / góp vốn
3. Có bank details public
4. Không có legal footer
5. Program cards không ghi trạng thái Live / Pilot / Planned
6. Story pages dùng ảnh/người thật chưa có consent logic
7. DSTS bridge làm sai hierarchy
8. Partner / sponsor / volunteer forms không có legal acknowledgement

---

## XI. CONTENT / CMS STRUCTURE

## 11.1. Content types

- Site pages
- Program cards
- Stories
- Reports
- FAQ items
- Partner/support lanes
- Disclosures

## 11.2. Story schema

- title
- slug
- summary
- person_type
- region
- program
- consent_status
- evidence_status
- public_safe_version
- featured_image_status
- publish_status

No `consent_status = approved` → no publish.

---

## XII. BUILD PHASES

## Phase 1 — 7 days
- homepage
- mission
- programs
- support
- volunteer
- partners
- governance
- legal
- footer legal-safe

## Phase 2 — 14 days
- DSTS bridge page
- stories
- FAQ
- forms
- chapter model page

## Phase 3 — 30 days
- reports
- CMS/content flow
- consent-gated story pipeline
- analytics
- internal review workflow

---

## XIII. OWNER MAP

| Lane | Owner |
|------|-------|
| Information architecture | Product |
| Content structure | Content lead |
| Legal-safe wording | Founder + legal reviewer |
| Forms & routes | Dev |
| Story consent workflow | Ops |
| Governance page | Product / Founder |
| DSTS bridge | Product + Content |

---

## XIV. KẾT LUẬN

Team dev phải hiểu rõ:

`nguoiviet.muonnoi.org` **không phải** site marketing thông thường.  
Nó là **public institutional surface** của một sáng kiến cộng đồng toàn cầu đang hình thành.

Vì vậy, build priority là:

1. rõ mission
2. rõ programs
3. rõ lanes
4. rõ governance
5. rõ disclosures
6. rõ bridge sang flagship program

**Câu chốt:**  
Muốn site này có đẳng cấp, phải build theo logic tổ chức đang hình thành — không phải logic chiến dịch landing page ngắn hạn.
