# AUDIT & PLAN: Chỗ Chơi Muôn Nơi (chochoi.muonnoi.org)
## Step 1: Analyze + Step 2: Plan (7 phần)
**Ngày:** 2026-06-12
**Tác giả:** Devin AI Agent
**Phạm vi:** chochoi.muonnoi.org, trochoi.muonnoi.org, plays.muonnoi.org, root homepage

---

## Step 1: ANALYZE — Hiện trạng, Gap, Phạm vi ảnh hưởng

### 1.1 Cấu trúc hiện tại

- **chochoi.muonnoi.org** hiện là "ChoChoi Muôn Nơi · Play Ecosystem" — đúng hướng nhưng chưa đủ mạnh về định vị "Chỗ Chơi" (nơi vui chơi giải trí). Brand name còn lẫn lộn tiếng Việt/không dấu.
- **trochoi.muonnoi.org** hiện là "Trò Chơi Muôn Nơi · Real-life Games & Quests" — tập trung offline/real-life, có cơ chế proof receipt, phù hợp là module con của chochoi.
- **plays.muonnoi.org** — game online/digital, chưa có source trong repo này, nhưng được reference trong chochoi hiện tại. Là module con digital play.
- **sukien.muonnoi.org, giaitri.muonnoi.org, challenge.muonnoi.org** — chưa có public surface, đang là conceptual links.

### 1.2 Brand Core lệch so với thesis

| Thesis đã chốt | Hiện trạng chochoi |
|---|---|
| Chỗ Chơi Muôn Nơi = vertical cấp 1 | ChoChoi Muôn Nơi = chưa rõ cấp 1 hay portal |
| plays = digital play | Đúng, nhưng plays chưa có surface rõ trong repo |
| trochoi = real-life play | Đúng, nhưng navigation chưa rõ hierarchy |
| sukien = event play | Chưa có surface |
| giaitri = entertainment | Chưa có surface |
| challenge = challenge layer | Chưa có surface |

**Lệch chính:**
1. Brand name "ChoChoi" (không dấu) chưa phát huy tài sản ngôn ngữ "Chỗ Chơi" (có dấu, mang nghĩa "nơi để chơi").
2. Chưa khẳng định chochoi là **vertical cấp 1** (standalone destination) thay vì chỉ là portal tổng hợp.
3. CTAs chưa đủ conversion-focused cho người mới.

### 1.3 Điểm mạnh hiện có

- Đã có 5 nhánh được định nghĩa rõ: real-life, digital, events, entertainment, challenge.
- Đã phân biệt rõ plays vs trochoi vs chochoi.
- Có cơ chế proof receipt cho real-life loop.
- Có theme system, responsive, accessibility base.

### 1.4 Điểm yếu thiết kế & UX

1. **Hero chưa đủ mạnh:** H1 "ChoChoi Muôn Nơi" không dùng "Chỗ Chơi Muôn Nơi" — bỏ lỡ cơ hội ghi nhớ brand.
2. **Thiếu personality:** Chưa có màu sắc riêng cho vertical play — cần năng lượng vui tươi hơn nhưng vẫn giữ premium/trust.
3. **Thiếu preview/live content:** Chưa có section "Đang diễn ra", "Sắp tới", "Top challenge".
4. **CTA chính lẫn lộn:** 4 buttons ngang hàng trong hero, không có primary rõ ràng.

### 1.5 SEO & Song ngữ

- Title cần chuyển từ "ChoChoi" sang "Chỗ Chơi Muôn Nơi".
- Meta description cần nhấn mạnh "chỗ chơi thật sự của muonnoi.org".
- Cần hreflang và alternate cho EN.

### 1.6 Kiến trúc thông tin

```
chochoi.muonnoi.org (vertical cấp 1)
├── plays.muonnoi.org (module cấp 2 — digital)
├── trochoi.muonnoi.org (module cấp 2 — real-life)
├── sukien.muonnoi.org (module cấp 2 — events)
├── giaitri.muonnoi.org (module cấp 2 — entertainment)
└── challenge.muonnoi.org (module cấp 2 — competition)
```

Cần làm rõ hierarchy này trong UI.

### 1.7 Motion / Animation

- Nên thêm: reveal cards, subtle bounce cho CTA, floating badges, gentle pulse cho "live now".
- Không dùng hiệu ứng ồn ào — giữ calm nhưng playful.

### 1.8 Phạm vi ảnh hưởng trực tiếp

**P0 (fix ngay):**
- chochoi.muonnoi.org
- trochoi.muonnoi.org
- muonnoi.org (root homepage — update link và description)

**P1 (sau này):**
- plays.muonnoi.org (khi có source)
- sukien.muonnoi.org
- giaitri.muonnoi.org
- challenge.muonnoi.org

---

## Step 2: PLAN — 7 Phần

### 1. Design Upgrade Plan

**Brand identity chochoi:**
- Primary accent: `#FF6B35` (warm orange — năng lượng, vui, khác biệt với brand purple chính)
- Secondary: `#FFD93D` (playful yellow)
- Giữ background dark/light system hiện có.
- Mark/logo: "CC" → giữ nhưng có thể có animation nhẹ.

**Layout sections:**
1. Hero — H1 "Chỗ Chơi Muôn Nơi", sub "Chỗ chơi thật sự của Muôn Nơi — digital, real-life, sự kiện, giải trí, thử thách", CTA primary "Khám phá ngay", CTA secondary "Tham gia challenge".
2. 5 Nhánh — cards rõ ràng với visual icon/color khác nhau.
3. Live Now / Coming Soon — preview nội dung đang diễn ra.
4. How it works — 3 bước: Tìm → Chơi → Nhận Proof.
5. Trust layer — an toàn, xác minh, không scam.
6. CTA bottom — "Bắt đầu chơi".

### 2. File Change Plan

| File | Action | Lý do |
|---|---|---|
| `chochoi.muonnoi.org/public/index.html` | Rewrite | Chuyển brand sang "Chỗ Chơi", thêm sections |
| `trochoi.muonnoi.org/public/index.html` | Edit | Update link về chochoi, thêm hierarchy indicator |
| `muonnoi.org/index.html` | Edit | Update link chochoi trong ecosystem + hero |
| `chochoi.muonnoi.org/_headers` | Keep | Đã có |
| `chochoi.muonnoi.org/_redirects` | Keep | Đã có |
| `trochoi.muonnoi.org/_headers` | Keep | Đã có |
| `trochoi.muonnoi.org/_redirects` | Keep | Đã có |

### 3. Visual Direction theo Page/Subdomain

| Page | Mood | Color accent | Key visual |
|---|---|---|---|
| chochoi.muonnoi.org | Playful but trustworthy | Orange `#FF6B35` | Cards với icon, live badges |
| trochoi.muonnoi.org | Real-life, grounded | Green `#30D158` | Map/location cues, proof receipts |
| plays.muonnoi.org | Digital, modern | Cyan `#22D3EE` | Game cards, leaderboard |
| sukien.muonnoi.org | Eventful, communal | Purple `#7C5CFF` | Calendar, event cards |
| giaitri.muonnoi.org | Creative, expressive | Pink `#FF2D92` | Media thumbnails, show cards |
| challenge.muonnoi.org | Competitive, focused | Red `#FF453A` | Progress bars, ranks |

### 4. Animation Plan

- **Hero text:** Fade-in + slight translateY on load.
- **Cards:** Stagger reveal (0.1s delay each) on scroll.
- **Live badges:** Gentle pulse animation (CSS animation, not JS).
- **CTA primary:** Subtle hover scale (1.03) + shadow.
- **Trust icons:** Fade-in sequence.

### 5. SEO Plan

- Title: `Chỗ Chơi Muôn Nơi — chỗ chơi thật sự của muonnoi.org`
- Description: `Chỗ Chơi Muôn Nơi là hệ sinh thái vui chơi giải trí của Muôn Nơi: game online, trò chơi đời sống, sự kiện, giải trí, thử thách. Không scam, không quảng cáo lạm dụng.`
- Canonical: `https://chochoi.muonnoi.org/`
- Schema: Update Organization → include `parentOrganization` to Muôn Nơi.
- Add alternate hreflang en/vi.
- All internal links use absolute HTTPS.

### 6. Local Test Plan

- Open file directly in browser (no server needed for static HTML).
- Check responsive: 320px, 768px, 1024px, 1440px.
- Verify all links are absolute and correct.
- Check contrast ratios (WCAG AA).
- Validate HTML via W3C validator (manual check).
- Verify meta tags via Facebook Sharing Debugger / Twitter Card Validator (after deploy).

### 7. Risk List

| Risk | Severity | Mitigation |
|---|---|---|
| plays.muonnoi.org không có source trong repo | Medium | Cập nhật link reference, đánh dấu "external", follow up sau |
| sukien/giaitri/challenge chưa có surface | Low | Tạo placeholder shell khi cần, đánh dấu "coming soon" trong chochoi |
| Brand "ChoChoi" → "Chỗ Chơi" có thể confuse users đã bookmark | Low | Dùng canonical + redirect nếu cần, nhưng vì là subdomain nên ổn |
| Thay đổi nhiều file cùng lúc | Medium | Commit từng file, test từng bước, rollback plan qua git |
| CSS `/assets/ui.css` có thể không resolve | Low | Kiểm tra deploy path, nếu cần thì inline critical styles |

---

## Quyết định chốt

1. **chochoi.muonnoi.org = Chỗ Chơi Muôn Nơi** — vertical cấp 1, định vị rõ.
2. **5 nhánh con:** plays (digital), trochoi (real-life), sukien (events), giaitri (entertainment), challenge (competition).
3. **Trochoi là module cấp 2** dưới chochoi, không phải vertical ngang hàng.
4. **Root homepage** phải reflect đúng hierarchy này trong ecosystem section.
5. **Mọi người phải đọc và làm đúng** — kể cả AI agents sau này.
