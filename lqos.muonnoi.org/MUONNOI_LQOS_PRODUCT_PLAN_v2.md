# MUONNOI LQOS PRODUCT PLAN v2
> **Date:** 2026-06-05
> **Status:** LOCKED — DO NOT ALTER WITHOUT FOUNDER APPROVAL
> **Locked By:** Founder, 2026-06-05
> **Audience:** Product, Design, Content
> **Supersedes:** All prior LQOS product documents

---

## 1. USER FLOW (v0.1)

### Guest (No Account)
```
Landing Page (dulich.muonnoi.org)
    ↓
Browse Quests (read-only)
    ↓
See "Beta — Invite Only" CTA
    ↓
Request Invite Form (email)
    ↓
Founder/Team reviews → sends invite link
```

### Beta User (Tier 1)
```
Invite Link → Register (email + phone OTP)
    ↓
Browse Quests
    ↓
View Quest Detail (all fields from template)
    ↓
"Join Quest" Button
    ↓
Confirm: date, meet point, required gear
    ↓
Quest Scheduled → Calendar reminder
    ↓
Day of Quest: Go to meet point, meet host
    ↓
Complete Quest → Submit Proof (24h window)
    ↓
    ├─ Photo upload (max 3, 10MB each)
    ├─ Text reflection (max 2000 chars)
    └─ GPS (auto-capture, opt-in)
    ↓
Host Reviews Proof (accept/reject + reason)
    ↓
    ├─ Accepted → Receipt Generated → XP + Trust awarded
    └─ Rejected → User resubmits (1 retry)
    ↓
User Reviews Host (1-5 + text)
    ↓
Quest Complete → Suggest Next Quest
```

### Host (Tier 3)
```
Apply via /host/register
    ↓
KYC Tier 2 (verify.iai.one API)
    ↓
KYC Tier 3 (interview + training)
    ↓
Activate → Host Dashboard
    ↓
    ├─ View Assigned Quests
    ├─ Review Incoming Proofs
    ├─ Message Users (in-app)
    └─ View Reviews
```

---

## 2. WIREFRAME DESCRIPTION

### 2.1 Landing Page (dulich.muonnoi.org)

**Above the fold:**
- Hero: "Đường Muôn Nơi — Trải nghiệm Đà Lạt có chủ đích" / "Path of Many Places — Intentional Đà Lạt Experiences"
- Sub: "Sống thật, đi thật, gặp người thật"
- CTA: "Tham gia pilot" (→ invite request form)
- Visual: Host portrait + quest photo (with permission)

**Below the fold:**
- 3 featured quests (cards: photo, title, host, duration, difficulty)
- "Làm thế nào nó hoạt động" — 4 steps with icons
- Host story (1 featured host, quote)
- Values section (anti-addiction, privacy, proof)
- FAQ (5 questions)
- Footer: links, language switcher (VI/EN)

**No:**
- Auto-play video
- Pop-up modal
- Cookie banner (we don't use cookies for tracking)
- Social media feed
- Countdown timer

### 2.2 Quest Detail Page

**Header:**
- Title (VI + EN)
- Subtitle
- Difficulty badge
- Duration
- Max people
- Price (v0.1: "Miễn phí — Pilot")

**Body:**
- Photo gallery (3-5 photos)
- Intent paragraph
- Who fits (bullet list)
- Who not fit (bullet list)
- Logistics: meet point (address + map), time, gear required
- Safety notes (highlighted box)
- Host card: photo, name, bio, languages
- Proof requirements (what user must submit)

**CTA:**
- "Tham gia quest này" (if logged in + beta)
- "Yêu cầu tham gia beta" (if not logged in)
- "Hết chỗ" (if max people reached)

### 2.3 Host Dashboard

**Sidebar:**
- Dashboard
- Quests assigned
- Proofs to review
- Messages
- Settings

**Main: Proofs to Review**
- List: user photo thumbnail, quest name, submitted time
- Click → full proof view (photos, text, GPS map)
- Actions: Accept / Reject + reason text
- Batch action: accept multiple (if trusted user)

### 2.4 User Profile

- Name, avatar
- XP total
- Trust points
- Quests completed (list)
- Receipts (downloadable JSON)
- Settings: language, notifications, delete account

**No:**
- Follower count
- Following count
- Public feed
- Achievement badges (except receipt)

---

## 3. COPY PATTERNS

### Vietnamese Tone
- Warm, respectful, not salesy
- Use "bạn" (you), not "khách hàng" (customer)
- Use "chúng tôi" (we) sparingly; prefer specific names
- No exclamation marks in headlines
- No ALL CAPS
- No emojis in headlines

### English Tone
- Same warmth, translated naturally
- Avoid: "revolutionary", "game-changing", "disruptive"
- Prefer: "thoughtful", "intentional", "real"
- Vietnamese names kept in original with pronunciation guide if needed

### CTA Patterns

| VI | EN | Context |
|----|-----|---------|
| "Tham gia" | "Join" | Quest |
| "Bắt đầu" | "Begin" | Onboarding |
| "Gửi bằng chứng" | "Submit proof" | Proof upload |
| "Xem lại" | "Review" | Host action |
| "Tải xuống" | "Download" | Receipt |
| "Yêu cầu mời" | "Request invite" | Beta |

---

## 4. CTA LOGIC

### Quest Card CTA
```
IF user NOT logged in:
    CTA = "Yêu cầu tham gia beta" → /beta-request
    
IF user logged in AND NOT beta_approved:
    CTA = "Đang chờ duyệt beta" → disabled
    
IF user logged in AND beta_approved AND quest.has_capacity:
    CTA = "Tham gia" → /quests/{slug}/join
    
IF user logged in AND quest.no_capacity:
    CTA = "Hết chỗ" → disabled
    
IF user already joined this quest:
    CTA = "Đã tham gia — Gửi bằng chứng" → /proofs/submit
```

### Proof Submit CTA
```
IF proof.draft AND within_48h:
    CTA = "Gửi bằng chứng" → active
    
IF proof.draft AND after_48h:
    CTA = "Hết hạn gửi" → disabled, tooltip: "Liên hệ host"
    
IF proof.submitted AND host_review_pending:
    CTA = "Đang chờ host xem lại" → disabled
    
IF proof.accepted:
    CTA = "Xem receipt" → /receipts/{id}
    
IF proof.rejected AND retry_available:
    CTA = "Gửi lại" → /proofs/resubmit
```

---

## 5. BETA USER MANAGEMENT

### Invite Flow
1. User fills: name, email, why they want to join (200 chars)
2. System sends: "Đã nhận yêu cầu. Chúng tôi sẽ liên hệ sớm."
3. Founder/team reviews daily
4. Approved → email with unique invite link (7-day expiry)
5. User clicks link → auto-register Tier 1 → redirect to quests

### Beta Criteria (Who Gets Invited)
- Genuine interest in Đà Lạt experiences
- Willing to provide detailed feedback
- Commit to submit proof within 24h
- No red flags (spam, fake email)

### Beta Limit
- Max 50 total beta users
- First 30: primary cohort for soft launch metrics
- Next 20: backup/overflow if first cohort drops out

---

## 6. NOTIFICATIONS (Minimal)

### Email
- Welcome (registration)
- Invite approved
- Quest reminder (24h before)
- Proof accepted + receipt link
- Proof rejected + reason
- Host message (if unread for 4h)

### In-App
- Host proof review notification
- User message from host
- Quest cancellation (if host cancels)

### NO Push Notifications (v0.1)
- No engagement loops
- No "Your friend completed a quest!"
- No daily reminders
- No streak notifications

---

## 7. CONTENT CALENDAR (v0.1)

### Before Launch (July 2026)
- Week 1: Host portraits + stories (3 posts)
- Week 2: Quest location scouting (3 posts)
- Week 3: Values/manifesto content (2 posts)
- Week 4: Behind-the-scenes beta prep (2 posts)

### Launch Week (Aug 1-7, 2026)
- Day 1: "Đang chuẩn bị pilot" (NOT "live")
- Day 2: Host introduction #1
- Day 3: Quest preview #1
- Day 4: Values post
- Day 5: Host introduction #2
- Day 6: User reflection (first beta user)
- Day 7: Week 1 learnings (internal, not public metrics)

**All content approved by Founder before publish.**

---

## 8. A11Y REQUIREMENTS

- WCAG 2.1 AA minimum
- All images have alt text
- Color contrast ≥ 4.5:1
- Keyboard-navigable forms
- Screen reader labels for all interactive elements
- No auto-play media
- Focus visible on all interactive elements

---

## 9. i18n IMPLEMENTATION

### URL Structure
```
/dulich/quests/           → Vietnamese (default)
/en/dulich/quests/       → English
```

### Content Source
- All quest content: bilingual in single file (`QUEST_CONTENT_TEMPLATE_v1.md`)
- UI strings: JSON locale files (`locales/vi.json`, `locales/en.json`)
- Astro i18next for routing and rendering

### Language Switcher
- Footer on all pages
- Persistent preference (localStorage)
- `hreflang` tags for SEO

---

## 10. SUCCESS METRICS (Product)

| Metric | Target | Measurement |
|--------|--------|-------------|
| Quest browse-to-join rate | ≥20% | Join button clicks / quest detail views |
| Proof submission rate | ≥70% | Submitted proofs / completed quests |
| Proof acceptance rate | ≥80% | Accepted proofs / submitted proofs |
| Host response time | ≤4h | Time from proof submit to host review |
| User quest satisfaction | ≥4/5 | Post-quest rating |
| Host satisfaction | ≥7/10 | Weekly host survey |
| Invite-to-activation rate | ≥60% | Activated beta users / invite sent |

---

> **Product plan locked 2026-06-05. All features require Founder sign-off before build.**
