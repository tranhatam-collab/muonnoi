# 15 — Application Playbook: Cách Áp Kit vào Brand Thật + Walkthrough Mẫu

> File này là **bản hướng dẫn vận hành** kit Brandpro v2.0. Khi bạn (founder, brand owner) giao bất kỳ team nào một thương hiệu thật, đây là quy trình chính xác từng bước.

---

## A. NGUYÊN LÝ ÁP DỤNG

### A.1 Fork — không sửa kit gốc

Mỗi brand thật là một **fork** từ kit gốc:

```
Brandpro-Master-v2/                     <- KIT GỐC, không sửa
└── (40+ file: README + 20 template + 22 artefact)

Brandpro-Forks/
├── <<brand-1>>/              <- FORK cho brand 1
│   ├── 00-FORK-README.md   (sao chép, điền tên brand)
│   ├── 01-Master-Plan.md     (đã điền timeline cụ thể)
│   ├── ...
│   └── /04-brand-assets/     (asset thật)
│
└── <<brand-2>>/              <- FORK cho brand 2
    └── ...
```

Khi kit gốc lên v2.1, các fork đã chạy KHÔNG bị ảnh hưởng. Fork mới thì dùng v2.1.

### A.2 5 Pha — Cổng duyệt cố định

Không bao giờ chuyển pha mà chưa đóng gate. Kit này không phải checklist linh hoạt — nó là quy trình tuần tự.

```
Phase 1 ─ Forensics      -> Gate 1: Risk Matrix duyệt
Phase 2 ─ Strategy       -> Gate 2: Tên + Pillars + Architecture lock
Phase 3 ─ Identity       -> Gate 3: Brand Book v1 + Design Token v0.1
Phase 4 ─ Product+Digital-> Gate 4: Web song ngữ live + Product Copy lock + Design System v1
Phase 5 ─ Defense+Govern -> Gate 5: TM filed + Brand Guardian appointed
```

### A.3 Owner thay đổi theo Pha

```
Phase 1–2: Brand Strategist (chính) + Founder (duyệt)
Phase 3:   Designer trưởng + Copywriter (chính) + Brand Strategist (duyệt)
Phase 4:   SEO + Web Dev + Copywriter + PM (chính) + Brand Strategist (duyệt)
Phase 5:   Legal + Operations (chính) + Founder (duyệt)
Sau Day 120: Brand Guardian (vĩnh viễn)
```

---

## B. KHỞI ĐỘNG MỘT FORK MỚI — 7 BƯỚC

### Bước 1 — Founder Brief (1 buổi, ~2 giờ)

```
INPUT cần từ Founder trước khi làm gì:

1. Tên brand sơ bộ (đã có hay chưa lock?): <<...>>

2. Ngành cốt lõi: <<...>>     (1 câu định nghĩa)

3. Sản phẩm/dịch vụ: <<...>>  (1 đoạn 50 từ)

4. Đối tượng khách hàng:
   - Primary: <<...>>
   - Secondary: <<...>>

5. Thị trường target:
   - Tier 1 (focus): <<VN / SG / US / ...>>
   - Tier 2 (mở rộng 12-24 tháng): <<...>>

6. Ngôn ngữ:
   - Primary: <<VI / EN / ...>>
   - Secondary: <<...>>

7. Ngân sách brand toàn pha 1-5: <<Lean / Standard / Premium>> = <<...>> VND

8. Timeline:
   - Day 1 (khởi động): <<...>>
   - Mong muốn launch: <<...>>

9. Đối thủ cạnh tranh chính (3-5):
   - <<...>>

10. Brand inspiration (3 brand ngưỡng mộ + lý do):
    - <<...>>

11. Constraints / red lines:
    - Không được giống: <<...>>
    - Không được dùng: <<...>>
    - Pháp lý đặc biệt: <<...>>

12. Stakeholders nội bộ + vai trò:
    - <<...>>

13. Tech context (nếu có):
    - Có cần design system không? <<...>>
    - Có SDK/API công khai không? <<...>>
    - Có sub-brand/product line không? <<...>>
```

**Output Bước 1:** Brief signed bởi Founder.

### Bước 2 — Risk Forensics (Day 1–14)

- Chạy 6 audit (file 02): Domain, SERP, TM, Social, Phonetic, Code repo.
- Tổng hợp Risk Matrix (file 03).
- **Gate 1:** Founder ký duyệt.

### Bước 3 — Naming + Strategy (Day 15–28)

- Naming workshop (file 04).
- Brand Pillars workshop (file 05).
- **Nếu tech:** Brand Architecture decision (file 18) + Competitive Moat (file 19).
- **Gate 2:** Founder + Strategist + Legal ký lock.

### Bước 4 — Identity Design (Day 29–56)

- Verbal Identity (file 06).
- Visual Identity Spec (file 07) — bao gồm design token foundation.
- Brand Book v1 (file 08).
- **Gate 3:** Founder + Designer trưởng ký duyệt.

### Bước 5 — Product + Digital (Day 57–90)

- Bilingual Messaging (file 09) — bao gồm Product UI strings.
- SEO Entity Plan (file 10).
- **Product Brand System** (file 16): feature naming, onboarding copy, error states.
- **Design System v1** (file 17): Figma library + Storybook + dev handoff.
- Website build + content song ngữ.
- **Gate 4:** Founder + SEO + Web Dev + PM ký duyệt.

### Bước 6 — Legal + Defense (Day 91–120)

- Trademark filing (file 11).
- Defensive domains + monitoring.
- Brand Guardian charter (file 12).
- Asset hub + approval workflow setup.
- **Gate 5:** Founder + Guardian + Legal ký.

### Bước 7 — Governance Launch (Day 121+)

- Quarterly Audit calendar (file 12).
- Brand Quiz onboarding (artefact 11).
- Design system governance (file 17).

---

## C. SCALE THEO BUDGET

### C.1 Lean (< 200tr, solo founder hoặc 2-3 người)

**Dùng:** 01, 02, 03, 04, 05, 06, 07, 12 + 8 artefact.
**Bỏ qua:** 08 (Brand Book — dùng Figma file thay vì PDF), 09 (chỉ 1 ngôn ngữ), 10 (tự làm SEO cơ bản), 11 (tự nộp TM nếu được, nhưng có rủi ro), 13-14 (dùng free tools), 16-19 (không có design system riêng, dùng UI kit có sẵn).

### C.2 Standard (200–800tr, team 5–10 người)

**Dùng:** 14 file (thêm 08, 09, 10, 11, 13, 14).
**Bỏ qua:** 18-19 (chưa cần brand architecture hoặc moat deep-dive).

### C.3 Premium (> 800tr, holding/multi-product hoặc Series A+)

**Dùng:** Full 20 file.

---

## D. WALKTHROUGH MẪU — "<<Brand>>" (EdTech, Lean->Standard scale)

### D.1 Background

- **Brand:** <<Brand>> — AI tutor cho học sinh THCS Việt Nam.
- **Market:** VN primary, SG/US secondary (24 tháng).
- **Budget:** Standard (600tr).
- **Team:** Founder (PM), 1 designer, 1 copywriter, 1 dev, 1 SEO freelancer.

### D.2 Phase execution

**Phase 1 (Day 1–14):**
- Audit phát hiện `<<domain>>.com` thuộc edtech Canada (cùng ngành, HIGH threat).
- Risk Matrix: 7/9 HIGH -> thêm modifier "AI".
- GitHub `<<repo>>` available. npm `<<package>>` available.

**Phase 2 (Day 15–28):**
- Naming: **<<Brand>>** (modifier có nghĩa, liên quan ngành).
- Lock: `<<domain>>.com`, `<<domain>>.vn`, `<<domain>>.io`.
- Pillars: Mission (giúp học sinh THCS học toán theo tốc độ riêng) + Vision (2035, mỗi em có gia sư AI 24/7).
- Architecture: Single brand (chưa có sub-brand).

**Phase 3 (Day 29–56):**
- Voice: "cô gia sư trẻ tận tâm" — thân mật, khoa học, khích lệ.
- Design token: primary #3B5BFE, spacing 4px base, type Inter.
- Logo: wordmark "<<Brand>>" với modifier in đậm, monogram "<<...>>".
- Brand Book v1: 65 trang PDF + Notion page.

**Phase 4 (Day 57–90):**
- UI strings: "Chào em" (VI), "Hey there" (EN). Error: "Ồ, đề bài này chưa tải xong — thử lại sau 5 giây nhé."
- Onboarding: 3 bước ("Chào em" -> "Chọn môn" -> "Bắt đầu bài đầu tiên").
- Design System v1: 20 components trên Figma + Storybook.
- Website: <<domain>>.com live VI/EN, schema Organization, hreflang clean.
- Entity: Wikidata item, Crunchbase, LinkedIn, GitHub org.

**Phase 5 (Day 91–120):**
- TM class 9 (phần mềm) + 41 (giáo dục) + 42 (SaaS) nộp tại IPVN + Madrid (US, SG).
- Brand Guardian: Founder kiêm nhiệm (early stage).
- Asset hub: Notion + Figma + Google Drive.

---

## E. GIỚI HẠN AI AGENT

Tôi **làm được**:
- Forensics qua web fetch + search
- Naming + Pillars + Verbal Identity + Product Copy (toàn bộ text-based)
- Schema JSON-LD + hreflang code + Design Token JSON
- Bilingual messaging matrix + glossary + content plan + UI strings
- Brand book content (markdown) + brief + tracker schema
- Brand Architecture framework + Competitive Moat analysis

Tôi **KHÔNG làm được**:
- Thiết kế logo / illustration / photo (cần designer)
- Mua domain / nộp TM / claim Wikidata (cần payment + auth của user)
- Đọc giọng phonetic test (cần người thật)
- Layout PDF brand book đẹp (cần designer)
- Đại diện pháp lý (cần luật sư SHTT)
- Build Storybook / dev component (cần developer)
- Deploy website / setup DNS (cần dev + hosting access)

---

**Người duyệt:** __________     **Ngày duyệt:** <<YYYY-MM-DD>>