# 16 — Product Brand System: Feature Naming, In-App Copy, Onboarding Branding, Error/Empty States

> Product là **điểm chạm brand quan trọng nhất** — user dành 90% thời gian trong app, không phải trên website hay social. File này lock brand trong product layer.

---

## A. HƯỚNG DẪN

- Product Brand System bao phủ: **feature naming** · **UI microcopy** · **onboarding flow** · **error/empty/success states** · **notification copy** · **beta/waitlist branding** · **API/SDK naming**.
- Owner: Product Manager + Copywriter. Approver: Brand Strategist + Founder.
- Mọi product copy phải truy nguyên về **Verbal Identity (file 06)** và **Brand Pillars (file 05)**.
- **Không dùng placeholder text (Lorem Ipsum)** trong bất kỳ prototype nào — nó sẽ vào production.

---

## B. FEATURE NAMING CONVENTION

### B.1 Decision tree

```
Feature cần đặt tên?
├── Có brand prefix? (ví dụ: "<<Brand>> AI Math")
│   ├── YES -> Branded House: <<Brand>> <<Feature>>
│   └── NO  -> House of Brands: <<Feature>> độc lập
│
└── Feature là core product hay sub-tool?
    ├── Core product -> Tên riêng, có thể không cần prefix
    └── Sub-tool/feature -> Prefix + descriptive name
```

### B.2 Naming rules

1. **Một từ duy nhất** cho mỗi feature — không dùng synonym (VD: "Bài học" và "Lesson" phải map 1:1).
2. **Không dùng từ chung làm feature name** — "Chat" phải là "<<Brand>> Chat" hoặc "Study Room".
3. **Đặt tên trước khi vẽ UI** — tên quyết định navigation, không phải ngược lại.
4. **Kiểm tra trong câu** — "Tôi đang dùng <<feature>>" phải nghe tự nhiên.

### B.3 Feature Registry

| Feature ID | Feature Name (VI) | Feature Name (EN) | Code name | Type | Parent product | Status |
|------------|-------------------|-------------------|-----------|------|----------------|--------|
| FEAT-001 | <<...>> | <<...>> | <<camelCase>> | Core/Sub/Tool | <<...>> | Active/Deprecated/Planned |
| FEAT-002 | <<...>> | <<...>> | <<camelCase>> | ... | <<...>> | ... |

---

## C. ONBOARDING BRANDING

### C.1 Onboarding principles

- Mục tiêu onboarding không phải "giới thiệu app" — mà là **đưa user đến "aha moment"** càng nhanh càng tốt.
- Mỗi bước onboarding phải có: **context** (tại sao) + **action** (làm gì) + **payoff** (được gì).
- Tone: ấm áp, dẫn dắt, không áp lực.

### C.2 Template — Onboarding Flow

| Step | Screen | Headline (VI) | Headline (EN) | Body (VI) | Body (EN) | CTA (VI) | CTA (EN) | Skip? |
|------|--------|---------------|---------------|-----------|-----------|----------|----------|-------|
| 1 | Welcome | <<...>> | <<...>> | <<...>> | <<...>> | <<...>> | <<...>> | [ ] |
| 2 | Profile | <<...>> | <<...>> | <<...>> | <<...>> | <<...>> | <<...>> | [x] |
| 3 | First action | <<...>> | <<...>> | <<...>> | <<...>> | <<...>> | <<...>> | [ ] |
| 4 | Success | <<...>> | <<...>> | <<...>> | <<...>> | <<...>> | <<...>> | — |

### C.3 Progress indicator

- [ ] Percentage (0%, 25%, 50%, 75%, 100%)
- [ ] Step count ("Bước 1/4")
- [ ] Checklist ("[x] Chọn môn  [ ] Làm bài đầu tiên")
- [ ] Story-based ("Em đã có sách và bút. Bây giờ chọn môn học nhé.")

---

## D. ERROR, EMPTY & SUCCESS STATES

### D.1 Error states

**Nguyên tắc:**
1. Không đổ lỗi user.
2. Nói rõ lỗi gì (bằng ngôn ngữ user hiểu, không code).
3. Cho hành động tiếp theo.
4. Nếu có thể, thêm brand voice.

### D.2 Template — Error State Library

| Error code / type | Tiêu đề (VI) | Tiêu đề (EN) | Mô tả (VI) | Mô tả (EN) | CTA Primary | CTA Secondary |
|-------------------|--------------|--------------|------------|------------|-------------|---------------|
| 404 | <<...>> | <<...>> | <<...>> | <<...>> | <<...>> | <<...>> |
| 500 | <<...>> | <<...>> | <<...>> | <<...>> | <<...>> | <<...>> |
| Network fail | <<...>> | <<...>> | <<...>> | <<...>> | <<...>> | <<...>> |
| Timeout | <<...>> | <<...>> | <<...>> | <<...>> | <<...>> | <<...>> |
| Validation fail | <<...>> | <<...>> | <<...>> | <<...>> | <<...>> | <<...>> |
| Permission denied | <<...>> | <<...>> | <<...>> | <<...>> | <<...>> | <<...>> |
| Data not found | <<...>> | <<...>> | <<...>> | <<...>> | <<...>> | <<...>> |

### D.3 Empty states

- Empty state không phải "trống" — phải là **cơ hội để educate + engage**.
- Template: "Chưa có [item]" + "Vì sao [item] quan trọng" + "Làm gì để có [item]".

### D.4 Success states

- Success không phải "Tuyệt vời!" — phải **cụ thể về thành tựu**.
- Template: "Em đã [hoàn thành gì] — [kết quả cụ thể]" + CTA tiếp theo.

---

## E. NOTIFICATION COPY

### E.1 Push notification

- <= 40 ký tự cho mobile lock screen.
- Bắt đầu bằng giá trị, không phải tên app.
- Có CTA rõ.

### E.2 Email notification

- Subject: <= 50 ký tự, có giá trị hoặc curiosity.
- Preview text: <= 90 ký tự.
- Body: ngắn, actionable, 1 CTA duy nhất.

### E.3 In-app notification / Toast

- <= 15 từ.
- Auto-dismiss sau 3-5 giây (trừ khi cần action).
- Có icon semantic (success/warning/error/info).

---

## F. BETA / WAITLIST / LAUNCH BRANDING

### F.1 Waitlist landing page

| Section | Content | Tone |
|---------|---------|------|
| Hero | <<Value proposition + scarcity>> | Excited, exclusive |
| Form | <<Email + optional profile>> | Simple, quick |
| Social proof | <<Early testimonials / founder cred>> | Trust-building |
| FAQ | <<3-5 câu phổ biến>> | Helpful, honest |
| Footer | <<Terms / Privacy / Contact>> | Neutral |

### F.2 Beta invite email

- Subject: "<<Brand>> beta — mời em thử"
- Body: "Em là một trong 100 người đầu tiên..."
- CTA: "Bắt đầu" (không "Đăng ký" vì đã đăng ký rồi).

### F.3 Changelog / Release notes

- Format: **Version + Date + Category + Description + Impact**.
- Categories: `[Feature]` `[Improvement]` `[Fix]` `[Breaking]`.
- Tone: Clear, honest, không quảng cáo.

---

## G. API / SDK / CLI BRANDING

### G.1 Naming rules

- API endpoint: `GET /v2/<<resource>>` — consistent, RESTful.
- SDK function: `client.users.create()` — không dùng brand prefix trong function name (không `lumioCreateUser`).
- CLI command: `<<brand-cli>> deploy` — brand prefix cho CLI tool, không cho subcommands.

### G.2 README branding

- Logo: 120px width, linked to website.
- Tagline: 1 câu dưới logo.
- Badges: build status, version, license.
- Getting started: <= 10 dòng code để chạy được.
- Tone: DX Voice (file 06) — clear, code-first, minimal fluff.

---

**Người duyệt:** __________     **Ngày duyệt:** <<YYYY-MM-DD>>
