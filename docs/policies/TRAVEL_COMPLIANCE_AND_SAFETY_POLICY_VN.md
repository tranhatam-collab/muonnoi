# TRAVEL COMPLIANCE AND SAFETY POLICY — VIETNAM
> **Date:** 2026-06-05
> **Status:** LOCKED — PENDING LEGAL REVIEW
> **Locked By:** Founder, 2026-06-05
> **Scope:** Muonnoi Life Quest OS pilot in Vietnam (Đà Lạt, 2026-08)
> **Legal Review Deadline:** 2026-06-10 (Founder to consult lawyer)

---

## 1. LEGAL POSTURE OF MUONNOI (PILOT PHASE)

### What Muonnoi Is (v0.1)
- A **technology platform** connecting users with independent local hosts
- An **experience introduction and matching service**
- A **quest-based community travel layer**

### What Muonnoi Is NOT (v0.1)
- A travel agency or tour operator
- An employer of hosts
- A guarantor of safety or experience quality
- An insurance provider
- A booking intermediary handling user funds (v0.1: no payment)

### Legal Role Clarification

```
User <---> Muonnoi Platform <---> Local Host
          (matching + verification + safety protocol)

Host is independent contractor.
User is independent participant.
Muonnoi is platform operator.
```

**This role definition is critical.** It determines:
- What licenses Muonnoi needs (or doesn't need)
- What liability Muonnoi carries (or doesn't carry)
- What insurance is required (or not required)
- What compliance obligations apply

---

## 2. REGULATORY FRAMEWORK (VIETNAM)

### Relevant Laws (to be verified by lawyer)

| Law/Regulation | Relevance | Current Assessment |
|----------------|-----------|------------------|
| **Law on Tourism 2017** | Travel business licensing | May apply if Muonnoi is deemed "travel business" |
| **Decree 168/2017/ND-CP** | Travel business conditions | Defines tour operator, travel agency, tourist guide |
| **Law on Enterprise 2020** | Business registration | Muonnoi entity must be registered |
| **Cybersecurity Law 2018** | Data collection, user info | Applies to platform collecting user data |
| **Decree 13/2023/ND-CP** | Personal data protection | Applies to KYC photos, user data |
| **Civil Code 2015** | Liability, contracts | Governs host agreement, user agreement |

### Open Legal Questions (for lawyer review)

1. **Is "experience introduction platform" a "travel business" under Law on Tourism 2017?**
   - If YES: Muonnoi needs travel business license.
   - If NO: Muonnoi operates as tech platform.
   - **Current position:** Argue NO — Muonnoi does not organize tours, does not employ guides, does not set prices.

2. **Does Muonnoi need a tourist guide license for hosts?**
   - If YES: All Tier 3 hosts need guide license.
   - If NO: Hosts operate as independent community members.
   - **Current position:** Hosts are not "tourist guides" — they are local community members sharing personal experiences.

3. **What is Muonnoi's liability if a host causes injury?**
   - Platform liability vs. host liability vs. user assumption of risk.
   - **Current position:** Host is independent contractor, liable for own actions. User acknowledges risk in Terms of Service.

4. **Is KYC photo collection compliant with Decree 13/2023 (personal data protection)?**
   - Consent required?
   - Data retention limits?
   - Cross-border transfer restrictions?
   - **Current position:** Obtain explicit consent, retain minimum data, store in VN (Cloudflare edge), delete on request.

5. **Does v0.1 (no payment) change regulatory requirements?**
   - If no payment: fewer financial regulations apply.
   - If payment introduced later: payment regulations apply.
   - **Current position:** v0.1 pilot is free/beta. No payment = simpler compliance.

---

## 3. HOST INDEPENDENT CONTRACTOR FRAMEWORK

### Host Agreement (v0.1)

Key clauses:

| Clause | Wording |
|--------|---------|
| **Independent Contractor** | "Host is an independent contractor, not an employee, agent, or partner of Muonnoi." |
| **No Employment** | "Muonnoi does not control how, when, or where Host conducts quest activities." |
| **No Guarantee** | "Muonnoi does not guarantee any income, bookings, or user participation." |
| **Own Equipment** | "Host uses own equipment, vehicle, and resources. Muonnoi provides platform only." |
| **Liability** | "Host is responsible for their own actions during quest. Host carries own risk." |
| **Insurance** | "Host acknowledges no insurance is provided by Muonnoi in v0.1. Host may obtain own insurance." |
| **Termination** | "Either party may terminate with 7 days notice. Muonnoi may deactivate immediately for safety violations." |
| **Data Use** | "Host grants Muonnoi license to use quest photos and reviews for marketing." |

### Host vs. Employee Checklist

To maintain independent contractor status, Muonnoi must NOT:
- [ ] Set host working hours
- [ ] Require host to use specific equipment
- [ ] Prohibit host from working with other platforms
- [ ] Pay host salary or hourly wage
- [ ] Provide benefits (health insurance, pension)
- [ ] Control host's method of conducting quest

Muonnoi CAN:
- [ ] Verify host identity (KYC)
- [ ] Provide safety protocol (SOP)
- [ ] Set content standards (quest template)
- [ ] Remove host for violations
- [ ] Collect and display user reviews

---

## 4. USER TERMS OF SERVICE (PILOT)

### Key Clauses for v0.1

| Clause | Wording |
|--------|---------|
| **Beta Status** | "Muonnoi v0.1 is a pilot/beta program. Features, availability, and support are limited." |
| **Independent Hosts** | "Hosts are independent contractors, not Muonnoi employees. Muonnoi verifies identity but does not guarantee quality or safety." |
| **Assumption of Risk** | "User voluntarily participates in physical activities. User acknowledges inherent risks (walking, eating local food, outdoor conditions)." |
| **No Insurance** | "Muonnoi does not provide travel insurance, accident insurance, or liability coverage in v0.1. User is responsible for their own insurance." |
| **Proof System** | "User submits proof of quest completion. Muonnoi issues receipt. Proof is subject to host review." |
| **Age Limit** | "User must be ≥13 years old. Users 13-17 require guardian consent." |
| **Data Collection** | "Muonnoi collects: email, phone, KYC documents (if host), GPS (opt-in), photos (proof submission). See Privacy Policy." |
| **Cancellation** | "User can cancel up to 24h before quest for full refund (if paid). Within 24h: no refund. Host no-show: user receives apology + priority rebooking." |
| **Dispute** | "Disputes resolved through Muonnoi internal process first. If unresolved, Vietnamese law applies. Jurisdiction: courts in city where quest took place." |

---

## 5. SAFETY AND INSURANCE (V0.1)

### Insurance Status

| Type | v0.1 Status | Future Plan |
|------|-------------|-------------|
| Platform liability insurance | ❌ Not obtained | Q4 2026: obtain general liability |
| Host accident insurance | ❌ Not provided | H1 2027: partner with Bảo Việt/PJICO |
| User travel insurance | ❌ Not provided | H1 2027: offer as opt-in |
| Emergency medical | ⚠️ Hotline only | H2 2027: partner with clinic network |

### Safety Measures (v0.1)

1. **Host Safety Training:** All Tier 3 hosts complete 4-hour safety module
2. **Emergency Hotline:** 24/7 phone line for incident reporting
3. **Host SOP:** `LOCAL_HOST_OPERATING_PROTOCOL_v1.md` defines safety procedures
4. **Incident Matrix:** `SAFETY_INCIDENT_MATRIX_v1.md` defines escalation
5. **GPS Tracking:** User opt-in GPS share during quest (for long/remote quests)
6. **First Aid:** Host required to carry basic first aid kit
7. **Weather Monitoring:** Quest cancelled if severe weather forecast

### User Acknowledgment

Before joining quest, user must check:
- [ ] "I understand this is a pilot/beta program."
- [ ] "I understand hosts are independent, not Muonnoi employees."
- [ ] "I understand there is no insurance provided."
- [ ] "I understand physical activities carry inherent risks."
- [ ] "I have read the safety notes for this quest."

---

## 6. FOOD SAFETY (HOST MEALS)

If quest includes host-prepared meals:

### Host Obligations
- Host declares ingredients used (for allergy awareness)
- Host prepares food in clean environment
- Host discloses if food is homemade vs. purchased
- User declares allergies/restrictions before quest

### Platform Role
- Muonnoi does not inspect host kitchen
- Muonnoi provides allergy declaration template
- User assumes risk of eating host-prepared food
- First-time host meal quest: Ops Lead visits host before approval

### Incident
- Food poisoning → Level 2 incident (host responsibility)
- Host must cease meal quests until investigation complete

---

## 7. PAYMENT AND TAX (V0.1)

### v0.1: No Payment
- Pilot is free for users
- Hosts are not paid
- No cash changes hands through platform
- If host offers paid add-on (e.g., buy craft from host), it is host-user private transaction

### Future Payment (post-v0.1)
When payment introduced:
- Muonnoi may collect payment on behalf of host
- Host receives payout minus platform fee
- Tax responsibility: host reports income (Muonnoi provides 1099-equivalent summary)
- Muonnoi may need payment service provider license

---

## 8. COMPLIANCE CHECKLIST

Before soft launch (01/08/2026):

### Legal
- [ ] Lawyer review of platform legal posture (2026-06-10)
- [ ] Lawyer confirms no travel agency license needed for v0.1
- [ ] Host agreement drafted and reviewed
- [ ] User ToS drafted and reviewed
- [ ] Privacy policy compliant with Decree 13/2023

### Safety
- [ ] Emergency hotline active
- [ ] Host safety training completed for all 10 pilot hosts
- [ ] First aid kits distributed
- [ ] Incident matrix team trained
- [ ] Nearest hospital/clinic identified for each quest

### Data
- [ ] KYC consent form explicit and bilingual
- [ ] Data retention policy published
- [ ] User data deletion process documented
- [ ] R2 restricted bucket access audited

### Operational
- [ ] Host independent contractor status maintained (no employee-like controls)
- [ ] User assumption of risk clearly communicated
- [ ] No "insurance bundled" claim in any public material
- [ ] No "guaranteed safe" claim in any public material

---

## 9. RISK MITIGATION SUMMARY

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Regulatory: deemed travel agency | Medium | High | Lawyer review, maintain platform posture, no tour packaging |
| Liability: host injury claim | Low | High | Host agreement, user ToS, independent contractor status |
| Data: KYC photo breach | Low | Medium | Restricted R2, encryption, retention policy |
| Safety: serious incident | Low | High | Training, SOP, hotline, incident matrix, insurance roadmap |
| Reputational: "fake live" claim | Medium | High | No public "live" claims until gates pass (see `MUONNOI_DALAT_PILOT_LOCK_2026-08.md`) |

---

## 10. LEGAL REVIEW ACTION ITEMS

**Founder must complete by 2026-06-10:**

1. Consult lawyer specializing in:
   - Vietnam tourism law
   - Platform liability
   - Personal data protection (Decree 13/2023)

2. Ask lawyer specifically:
   - Is Muonnoi's "platform" model legally distinct from "travel agency"?
   - What is our liability exposure for host actions?
   - Do we need any license for v0.1 (no payment, no employment)?
   - Is our KYC data collection compliant?

3. Deliverables from lawyer:
   - Written opinion on platform vs. travel agency
   - Recommended host agreement clauses
   - Recommended user ToS clauses
   - Data compliance checklist

4. After lawyer review:
   - Update this policy
   - Draft `LOCAL_HOST_AGREEMENT_v1.pdf`
   - Draft `USER_TERMS_OF_SERVICE_v1.md`
   - Founder signs off on all legal documents

---

> **Policy locked 2026-06-05. Legal review required by 2026-06-10 before operational.**
> **No Local Host activated, no public page published, until legal review complete.**
