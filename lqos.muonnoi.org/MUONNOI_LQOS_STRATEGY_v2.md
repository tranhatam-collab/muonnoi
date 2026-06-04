# MUONNOI LQOS STRATEGY v2
> **Date:** 2026-06-05
> **Status:** LOCKED — DO NOT ALTER WITHOUT FOUNDER APPROVAL
> **Locked By:** Founder, 2026-06-05
> **Audience:** Founder, Investors, Board
> **Supersedes:** All prior LQOS strategy documents

---

## 1. VISION

**Muonnoi Life Quest OS** is a proof-based system for real-world experiences.

We do not build another social network. We build a social operating system where:
- **Real actions** matter more than virtual likes
- **Verifiable proof** creates trust
- **Local hosts** are independent community members, not tour operators
- **Safety and ethics** come before growth

**Core principle:** Sống thật, đi thật, gặp người thật, ghi lại bằng chứng thật.

---

## 2. WHAT WE ARE NOT

To avoid misalignment, we explicitly state what Muonnoi is NOT:

| We Are NOT | Why | Consequence If We Become This |
|------------|-----|------------------------------|
| Tour operator | We don't organize tours; we match users with independent hosts | Requires travel license, higher liability |
| Travel agency | We don't book flights/hotels; we focus on local experiences | Diverts from core mission |
| Gamification platform | No points addiction, no leaderboards, no FOMO loops | Violates anti-addiction principle |
| Social network | No follower counts, no viral algorithms, no engagement metrics | Becomes what we oppose |
| Cryptocurrency project | No tokens, no speculative economy, no blockchain for v0.1 | Distracts from real value |
| Employment platform | Hosts are independent contractors, not employees | Employment law complexity |
| Insurance company | We don't provide insurance in v0.1 | Regulatory burden |

---

## 3. QUEST SYSTEMS (7 Total, 3 Active in Year 1)

### Active in Year 1 (2026-2027)

| # | System | Vietnamese | Launch | Description |
|---|--------|-----------|--------|-------------|
| 1 | **Đường Muôn Nơi** | Du lịch có chủ đích | Aug 2026 | Travel quests: local experiences, host-led, proof-based |
| 2 | **Học Đời** | Học từ người thật | Oct 2026 | Learning quests: skills, crafts, knowledge from real practitioners |
| 3 | **Family Mission** | Nhiệm vụ gia đình | Dec 2026 | Family quests: activities for parents and children together |

### Future (2027+)

| # | System | Vietnamese | Target |
|---|--------|-----------|--------|
| 4 | **Một Ngày Khỏe** | Sức khỏe | Q2 2027 |
| 5 | **Việc Có Lý** | Làm việc có ý nghĩa | Q3 2027 |
| 6 | **Vườn Sáng Tạo** | Sáng tạo | Q4 2027 |
| 7 | **Cộng Đồng** | Hoạt động cộng đồng | H1 2028 |

**Rule:** No new quest system launches until previous system has ≥50 active quests and ≥20 verified hosts.

---

## 4. PILOT: ĐÀ LẠT v0.1 (01/08/2026)

### Scope
- **One city:** Đà Lạt, Lâm Đồng
- **One system:** Đường Muôn Nơi
- **10 quests:** Handcrafted, host-assigned, template-driven
- **10 hosts:** KYC Tier 3 verified, trained, SOP-signed
- **~30 beta users:** Invite-only, no public registration

### What v0.1 Is
- Pilot with controlled scope
- Proof-of-concept for quest + proof + receipt flow
- Operational economics test (no monetization)
- Host readiness validation
- Safety protocol validation

### What v0.1 Is NOT
- Full platform
- Public launch
- Revenue-generating
- Nationwide
- Automated (all quests manually curated)

---

## 5. TRUST ARCHITECTURE

### Layers

```
User Trust
    ↑
Proof Verification (host review)
    ↑
Receipt (SHA-256 + Ed25519 signature)
    ↑
KYC (4-tier: 1/2/2.5/3)
    ↑
Safety Protocol (incident matrix, SOP)
    ↑
Platform Integrity (evidence-first, no false claims)
```

### Trust Principles
1. **Evidence over claims:** Every statement must have proof
2. **Host independence:** Hosts are verified, not controlled
3. **User autonomy:** Users choose, participate, verify
4. **Transparency:** Public key for receipt verification, open tracker
5. **Safety first:** Any safety concern stops the system

---

## 6. ANTI-ADDICTION DESIGN

### We Do NOT Build
- Infinite scroll feeds
- Push notifications for engagement
- Leaderboards or rankings
- Streaks or daily login rewards
- Social comparison metrics
- FOMO-inducing UI patterns

### We DO Build
- Intentional friction (quests require planning, not impulse)
- Offline-first experiences (phone away during quest)
- Quality over quantity (fewer quests, deeper experiences)
- Reflection prompts (pause and think, not react)
- Human connection (host-user interaction, not app-user)

---

## 7. TECHNOLOGY PRINCIPLES

| Principle | Implementation |
|-----------|----------------|
| Privacy-first | Minimal data collection, user owns proof, delete on request |
| Offline-friendly | Quest content downloadable, GPS works offline |
| Simple receipts | Signed JSON v0.1, not blockchain/DID until v1.0 |
| Cloud-native | Cloudflare Workers + D1 + R2, serverless, edge-deployed |
| Bilingual | All public content in Vietnamese + English |
| No external trackers | No Google Analytics, no Facebook Pixel, no CDN fonts |

---

## 8. COMPETITIVE POSITION

### Competitors (Indirect)

| Competitor | Their Model | Our Differentiation |
|------------|-------------|---------------------|
| Airbnb Experiences | Transactional, host as service provider | Community-first, host as independent member |
| Klook | Tour packages, standardized | Unique local quests, personal stories |
| Meetup | Social gatherings, no proof | Proof-based, verifiable experiences |
| Duolingo | Gamified learning | Real-world learning with human mentors |
| Facebook Groups | Virtual community | Real-world action, not virtual engagement |

### Moat
Our moat is NOT technology. It is:
1. **Host community:** Verified, trained, local, independent
2. **Proof system:** Cryptographic receipts create trust and memory
3. **Values alignment:** Anti-addiction, privacy-first, human-centric
4. **Vietnamese context:** Designed for Vietnam, not imported

---

## 9. KPIs BY PHASE

### v0.1 Pilot (Aug 2026)
- 10 hosts onboarded + KYC3
- 10 quests live
- 30 beta users
- 20 quest completions
- 10 verified proofs
- 0 safety incidents
- Host satisfaction ≥7/10

### Scale (Sep-Oct 2026)
- 50 hosts
- 30 quests
- 100 users
- Receipt v0.1 stable
- 2 quest systems (Đường Muôn Nơi + Học Đời landing)

### Hardening (Nov-Dec 2026)
- Family Mission pilot
- Receipt v0.2 (blockchain anchor)
- 2 payment providers
- Insurance partner LOI

---

## 10. RISK AND MITIGATION

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Regulatory (travel license) | Medium | High | Lawyer review, platform posture, no tour packaging |
| Host recruitment failure | Low | High | Founder network, community outreach, referral program |
| Safety incident | Low | High | Training, SOP, hotline, insurance roadmap |
| Technical failure | Low | Medium | D1 backup, R2 redundancy, health checks |
| Reputational (overclaim) | Medium | High | Public claim policy, Founder review, tracker |
| Competition (copy model) | Medium | Medium | Host community loyalty, proof system complexity |
| Founder bandwidth | High | Medium | Clear delegation, AI assistance, phased execution |

---

## 11. FINANCIAL MODEL (Future)

**v0.1:** No revenue. Platform cost absorbed by Founder.

**v0.2+ (2027):**
- Commission: 15-20% per paid experience
- Host keeps 80-85%
- Platform fee covers: infrastructure, KYC, support, safety
- No subscription for users
- Optional: membership for frequent questers (discounts, early access)

**Not doing:**
- Ads
- Data selling
- Token/crypto
- Premium host listings (all hosts equal)

---

## 12. GOVERNANCE

### Decision Rights
| Decision | Owner |
|----------|-------|
| Public claims | Founder |
| Safety incidents | Founder |
| Host deactivation | Founder + Ops Lead |
| Quest approval | Content Lead + Founder |
| Tech architecture | Tech Lead + Founder |
| Partnerships (insurance, legal) | Founder |
| Feature priority | Product Lead + Founder |
| Budget | Founder |

### Advisory (Future)
- Legal advisor (tourism law, data protection)
- Safety advisor (outdoor activities, first aid)
- Community advisor (local culture, host relations)

---

> **Strategy locked 2026-06-05. No strategic pivot without Founder approval and new strategy document.**
