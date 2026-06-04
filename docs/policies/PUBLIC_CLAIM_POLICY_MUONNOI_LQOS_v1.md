# PUBLIC CLAIM POLICY — MUONNOI LQOS v1
> **Date:** 2026-06-05
> **Status:** LOCKED — DO NOT ALTER WITHOUT FOUNDER APPROVAL
> **Locked By:** Founder, 2026-06-05
> **Scope:** All public-facing content, social media, press, and team communications about Life Quest OS

---

## 1. PRINCIPLE

**Under-promise, over-deliver.**

Muonnoi is a pilot. We do not claim what we have not built. We do not claim what we have not tested. We do not claim what we have not verified with evidence.

Every public claim must pass:
```
claim → evidence → file → command/output → status
```

---

## 2. APPROVED CLAIMS (Can Say)

### v0.1 Pilot Phase (Current)

| Claim | Evidence Required | Approved? |
|-------|------------------|-----------|
| "Đang chuẩn bị pilot Đà Lạt" | Pilot lock file exists | ✅ YES |
| "Đường Muôn Nơi là nhánh Travel Quest đầu tiên" | Strategy doc exists | ✅ YES |
| "Hệ đang xây quest, proof, host, safety và trust layer" | Tracker shows active work | ✅ YES |
| "v0.1 tập trung vào trải nghiệm được chọn lọc" | Pilot lock scope defined | ✅ YES |
| "Sống thật, đi thật, gặp người thật, ghi lại bằng chứng thật" | Core value statement | ✅ YES |
| "Pilot nội bộ có kiểm soát" | Invite-only beta | ✅ YES |
| "Một thành phố: Đà Lạt" | Pilot lock | ✅ YES |
| "Không public monetization ở v0.1" | Payment policy | ✅ YES |
| "Signed JSON receipt cho proof" | Receipt spec v0.1 | ✅ YES |
| "Host là independent contractor, đã qua KYC" | Host protocol | ✅ YES |

### Post-v0.1 (After 01/08/2026, if gates pass)

| Claim | Evidence Required | Approved? |
|-------|------------------|-----------|
| "Soft launch nội bộ tại Đà Lạt" | 6 hard gates pass | ⏳ AFTER GATES |
| "10 host đã onboarded" | D1 query: 10 active hosts | ⏳ AFTER GATES |
| "10 quest live" | CMS: 10 active quests | ⏳ AFTER GATES |
| "Proof upload hoạt động" | Smoke test passed | ⏳ AFTER GATES |

---

## 3. PROHIBITED CLAIMS (Cannot Say)

### Always Prohibited (Any Phase)

| Prohibited Claim | Why | If Used |
|------------------|-----|---------|
| "Live toàn quốc" | Only Đà Lạt pilot | Founder review + public correction |
| "Đã có mạng lưới host xác minh toàn diện" | Only 10 host pilot | Founder review + public correction |
| "Có bảo hiểm bundled cho mọi người dùng" | No insurance in v0.1 | Founder review + legal risk |
| "Người chơi có thể kiếm tiền" | No monetization in v0.1 | Founder review + false advertising |
| "Đảm bảo trải nghiệm an toàn tuyệt đối" | No absolute safety guarantee | Founder review + liability risk |
| "Đảm bảo thu nhập cho host" | No income guarantee | Founder review + false advertising |
| "Đã có VC/blockchain receipt" | Only Signed JSON v0.1 | Founder review + misrepresentation |
| "Pilot đang chạy" | Not until dulich.muonnoi.org HTTP 200 | Founder review + public correction |
| "Production-ready platform" | v0.1 is beta pilot | Founder review + misrepresentation |
| "Nationwide host system" | Only Đà Lạt | Founder review + public correction |
| "AI-generated quests" | Manual quest content only | Founder review + misrepresentation |
| "Verified national network" | Only local pilot | Founder review + public correction |

### Conditional Prohibitions

| Claim | Allowed When | Prohibited Until |
|-------|-------------|------------------|
| "Live" | After soft launch + Founder approval | dulich.muonnoi.org HTTP 200 + 6 gates pass |
| "Đang chạy" | After soft launch + Founder approval | dulich.muonnoi.org HTTP 200 + 6 gates pass |
| "Đã triển khai" | After soft launch + Founder approval | dulich.muonnoi.org HTTP 200 + 6 gates pass |
| "Blockchain receipt" | After v0.2 (Q4 2026) | Before Merkle root anchor live |
| "W3C VC" | After v1.0 (H1 2027) | Before DID + JWT implementation |
| "Insurance bundled" | After insurance partner signed (H2 2027) | Before LOI from insurer |
| "Paid experiences" | After payment system live (post-v0.1) | Before payment QA pass |
| "Mobile app in stores" | After native app published (2027) | Before iOS/Android store approval |

---

## 4. APPROVAL WORKFLOW

### Who Can Write Public Content

| Role | Can Publish? | Review Required? |
|------|-------------|-----------------|
| Founder | ✅ Yes | Self-review |
| Content Lead | ✅ Yes | Founder review for new claims |
| Marketing/PR | ⚠️ Draft only | Founder approval before publish |
| Dev Team | ❌ No | Route through Content Lead |
| AI (Cascade) | ❌ No | Route through Founder |

### Review Checklist

Before ANY public content goes live:

- [ ] Check against Prohibited Claims list (§3)
- [ ] Verify evidence exists for all claims
- [ ] Run `grep -i` on draft for prohibited words: "live", "đang chạy", "toàn quốc", "bảo hiểm", "kiếm tiền", "đảm bảo"
- [ ] Founder sign-off for first-time claims
- [ ] Date stamp and version on all public pages

### Emergency Correction

If prohibited claim is found live:

1. **Immediate:** Remove or correct content
2. **Within 1 hour:** Notify Founder
3. **Within 4 hours:** Post correction if misleading
4. **Log incident:** `qa/claims/YYYY-MM-DD-{claim-description}.md`

---

## 5. SOCIAL MEDIA RULES

### Allowed Posts

| Platform | Allowed Content |
|----------|-----------------|
| Website | Pilot prep updates, host stories, quest previews (beta status) |
| Facebook | Behind-the-scenes, host introductions, values posts |
| Instagram | Photos from quest scouting (with permission), host portraits |
| LinkedIn | Company updates, hiring (when applicable), founder posts |
| Twitter/X | Quick updates, value statements, no feature announcements |
| YouTube | Host interviews, quest location scouting, no "how to book" yet |

### Prohibited Posts

- Any post claiming "live", "launch", "available now" before gates pass
- Screenshots of app with fake data
- User testimonials from people who haven't done quests
- Revenue or growth numbers (not tracked yet)
- Comparisons to competitors (not benchmarked yet)

---

## 6. INTERNAL vs. EXTERNAL LANGUAGE

### Internal (Team Slack, Docs)
- Can use "target", "goal", "plan", "hope", "aim"
- Can discuss future features
- Can mention dates as targets (with caveat)

### External (Public, Press, Social)
- Use "pilot", "beta", "testing", "preparing"
- Use "selected", "invite-only" for user access
- Use "planned for" with dates, not "launching on"
- Never use "guarantee", "promise", "committed to"

---

## 7. PRESS AND MEDIA

### Media Inquiries
- ALL media inquiries routed to Founder
- No one else authorized to speak to press
- Standard response: "We're happy to share our story. Please contact our founder directly."

### Press Kit
- Press kit exists: `docs/press/` (to be created)
- Contains: approved photos, approved quotes, founder bio, company fact sheet
- All quotes pre-approved by Founder
- No off-the-record comments

---

## 8. VIOLATION CONSEQUENCES

| Violation | First Time | Repeat |
|-----------|------------|--------|
| Minor claim overreach (enthusiasm) | Warning + training | Content review required for all posts |
| Moderate claim (implies live/scale) | Public correction + written warning | Restricted from public posting |
| Serious claim (guarantees, revenue, safety) | Public retraction + meeting with Founder | Removal from public-facing role |
| Legal risk claim (insurance, liability) | Immediate removal + legal review | Termination consideration |

---

## 9. QUICK REFERENCE CARD

```
┌─────────────────────────────────────────┐
│  MUONNOI PUBLIC CLAIM CHECK             │
├─────────────────────────────────────────┤
│  BEFORE YOU POST, ASK:                  │
│                                         │
│  1. Do we have evidence?                │
│  2. Is it in the tracker?               │
│  3. Has Founder reviewed?               │
│  4. Are we saying "pilot" not "live"?  │
│  5. No guarantees, no revenue claims?   │
│                                         │
│  IF UNSURE → ASK FOUNDER FIRST          │
└─────────────────────────────────────────┘
```

---

> **Policy locked 2026-06-05. Every team member must acknowledge before public posting.**
