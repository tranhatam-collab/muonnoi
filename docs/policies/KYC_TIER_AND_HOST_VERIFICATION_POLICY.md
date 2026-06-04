# KYC TIER AND HOST VERIFICATION POLICY
> **Date:** 2026-06-05
> **Status:** LOCKED — DO NOT ALTER WITHOUT FOUNDER APPROVAL
> **Locked By:** Founder, 2026-06-05
> **Scope:** All Muonnoi users, host applicants, and Local Hosts
> **Legal Review:** REQUIRED before Tier 3 operational (Founder to consult lawyer by 2026-06-10)

---

## 1. TIER OVERVIEW

| Tier | Name | Requirements | Time | Use For | Verification Method |
|------|------|------------|------|---------|---------------------|
| **1** | Email Verified | Email verify + phone OTP | 2 min | Default user (join quests, submit proof) | Automated |
| **2** | ID Verified | Tier 1 + CCCD/CMND + selfie + liveness | 5 min | Host applicant (apply to be host) | Automated + manual review |
| **2.5** | Verified Creator | Tier 2 + industry verify (LinkedIn/portfolio) | 10 min | Content creator / educator (Học Đời) | Manual review |
| **3** | Local Host | Tier 2 + offline interview + 4h training + reference check | 1–2 days | **Local Host live** (lead real-world quests) | Manual + in-person |

---

## 2. TIER 1 — EMAIL VERIFIED

### Requirements
- Valid email address
- Phone number (VN format: +84...)
- Email verification link clicked
- Phone OTP entered correctly

### Process
1. User enters email + phone
2. System sends email verification link (expires 24h)
3. System sends SMS OTP (expires 5 min)
4. Both verified → Tier 1 active

### Data Collected
| Field | Storage | Retention |
|-------|---------|-----------|
| Email | D1, hashed (bcrypt) | Until account deletion |
| Phone | D1, encrypted (AES-256-GCM) | Until account deletion |
| Verification timestamps | D1 | Until account deletion |

### Limitations
- Cannot apply to be host
- Cannot create quests
- Can join quests, submit proof, earn XP/Trust

---

## 3. TIER 2 — ID VERIFIED

### Requirements
- All Tier 1 requirements
- CCCD/CMND (front + back) photo
- Selfie photo
- Liveness check (blink detection via camera)

### Process
1. User uploads CCCD front + back (JPEG/PNG, max 5MB each)
2. System forwards documents to `verify.iai.one` API for OCR + face match + liveness verification
3. `verify.iai.one` returns: extracted data, face match score, liveness result
4. If `verify.iai.one` confidence ≥ 80%: automated approval within minutes
5. If confidence < 80%: manual review by Ops Lead within 72h
6. Muonnoi stores verification result, not raw documents (see Data Retention)

### External Provider: verify.iai.one
- **API endpoint:** `https://verify.iai.one/api/v1/verify`
- **What it handles:** OCR, face match, liveness detection, document authenticity
- **What Muonnoi handles:** Decision (approve/reject/manual review), data storage policy, user communication
- **Fallback:** If verify.iai.one is unavailable → manual Ops Lead review within 72h
- **Cost:** Platform absorbs per-verification fee

### Data Collected
| Field | Storage | Retention | Encryption |
|-------|---------|-----------|------------|
| CCCD front photo | R2 (restricted bucket) | 2 years after deactivation | AES-256-GCM |
| CCCD back photo | R2 (restricted bucket) | 2 years after deactivation | AES-256-GCM |
| Selfie photo | R2 (restricted bucket) | 2 years after deactivation | AES-256-GCM |
| OCR extracted text | D1 | 2 years after deactivation | None (metadata only) |
| Face match score | D1 | 2 years after deactivation | None |
| Liveness result | D1 | 2 years after deactivation | None |

### Restricted Bucket Policy
- R2 bucket: `muonnoi-kyc-documents`
- No public access
- Access log enabled
- Only `kyc-service` worker can read/write
- Quarterly access audit

### Limitations
- Can apply to be host (enters Tier 3 pipeline)
- Cannot lead quests yet
- Cannot be paid

---

## 4. TIER 2.5 — VERIFIED CREATOR

### Requirements
- All Tier 2 requirements
- LinkedIn profile OR portfolio URL (for educators, artists, writers)
- Industry verification: Ops Lead checks credentials manually
- Content sample (if applicable: video, article, course outline)

### Process
1. User provides LinkedIn URL or portfolio link
2. Ops Lead verifies within 5 business days:
   - Profile exists and matches identity
   - Credentials relevant to quest system applied
   - No red flags (fake credentials, impersonation)
3. If content sample required: user uploads sample
4. Ops Lead approves or requests more info
5. Approval → Tier 2.5 active

### Data Collected
| Field | Storage | Retention |
|-------|---------|-----------|
| LinkedIn URL | D1 | Until account deletion |
| Portfolio URL | D1 | Until account deletion |
| Content sample | R2 | 1 year after deactivation |
| Reviewer notes | D1 | 2 years after deactivation |

### Use Cases
- Học Đời educator (teach skills, no physical location requirement)
- Content creator for quest descriptions
- Workshop facilitator (online or small group)

### Limitations
- Can create content quests (Học Đời)
- Cannot lead Đường Muôn Nơi travel quests (requires Tier 3)
- Cannot handle user safety responsibility

---

## 5. TIER 3 — LOCAL HOST

### Requirements
- All Tier 2 requirements
- Offline interview (in-person or video call)
- 4-hour safety training
- 2 reference checks (1 personal + 1 professional)
- SOP acknowledgment signed
- Background check (Founder discretion)

### 5.1 Interview Process

**Interviewer:** Founder or appointed Ops Lead
**Location:** In-person in city (Đà Lạt) or video call if Founder remote
**Duration:** 60-90 minutes

**Interview Components:**

| # | Component | Time | Details |
|---|-----------|------|---------|
| 1 | Background check conversation | 15 min | Personal history, motivation, why they want to be host |
| 2 | Quest-specific knowledge test | 15 min | Ask 5 questions about their proposed quest topic. Must answer 4/5 correctly. |
| 3 | Safety scenario role-play | 20 min | Present 2 scenarios: (a) user sprains ankle, (b) user lost from group. Assess response. |
| 4 | Communication style assessment | 15 min | Observe how they explain a concept. Check: clarity, patience, listening. |
| 5 | SOP briefing + Q&A | 15 min | Walk through `LOCAL_HOST_OPERATING_PROTOCOL_v1.md`. Answer questions. |

**Interview Form:** `docs/forms/KYC_TIER3_INTERVIEW_FORM_v1.md` (to be created)

**Pass/Fail Criteria:**
- Must attend all 5 components
- Quest knowledge: ≥4/5 correct
- Safety scenarios: demonstrates appropriate response (not perfect, but sensible)
- Communication: no red flags (impatience, dismissiveness, arrogance)
- Founder/Ops Lead gut feeling: "Would I trust this person with my family member?"

### 5.2 Training (4 Hours Minimum)

**Format:** In-person workshop or video modules + quiz
**Trainer:** Founder or trained Ops Lead
**Certificate:** Digital certificate upon completion, stored in host profile

**Training Modules:**

| # | Module | Duration | Content |
|---|--------|----------|---------|
| 1 | Muonnoi values + anti-addiction | 30 min | Read manifesto. Discuss: why we don't do gamification, follower counts, engagement loops. |
| 2 | Quest content walkthrough | 60 min | Walk through 3 actual quest templates. Practice explaining to mock user. |
| 3 | Proof acceptance criteria | 30 min | Review 10 example proofs (5 accepted, 5 rejected). Must score 8/10 on quiz. |
| 4 | Safety protocols + emergency | 60 min | First aid basics, emergency contacts, escalation levels, incident reporting. |
| 5 | App usage | 30 min | Host dashboard: accept/reject proof, message user, mark no-show. |
| 6 | Review etiquette + no-show | 30 min | How to write helpful reviews. How to handle no-shows professionally. |

**Training Checklist:** `docs/forms/KYC_TIER3_TRAINING_CHECKLIST_v1.md` (to be created)

**Pass Criteria:**
- Attend all 6 modules (or complete all video modules + quiz)
- Proof quiz: ≥8/10
- SOP acknowledgment signed digitally

### 5.3 Reference Checks

**Count:** 2 references minimum (1 personal + 1 professional)
**Method:** Phone call or email — NOT automated
**Reviewer:** Ops Lead (not the same person who did interview)

**Questions Asked:**
1. "How do you know [applicant]? For how long?"
2. "Would you recommend this person to care for your family member on a trip? Why or why not?"
3. "Have you seen them handle a difficult or stressful situation? What happened?"
4. "Any concerns about their safety awareness, honesty, or reliability?"
5. "Would you want to go on a trip led by this person?"

**Pass Criteria:**
- Both references respond within 7 days
- Neither raises serious concern (safety, dishonesty, unreliability)
- At least 1 reference says "would recommend for family trip"

### 5.4 Background Check (Founder Discretion)

- Standard: no background check for v0.1 (resource constraint)
- Triggered if: reference raises concern, or Founder has gut feeling
- Method: public records search (if available in VN), or third-party service
- Cost: platform absorbs

### 5.5 Activation

After all steps pass:
1. Host signs `LOCAL_HOST_AGREEMENT_v1.pdf`
2. SOP acknowledgment signed
3. Assigned 1-3 quests from available pool
4. Added to host communication channel
5. Given host dashboard access
6. Status: `"active"` in `hosts` table

### 5.6 Data Collected (Tier 3)

| Field | Storage | Retention | Access Control |
|-------|---------|-----------|----------------|
| Interview notes | D1 | 2 years after deactivation | Founder + Ops Lead only |
| Training completion | D1 | 2 years after deactivation | Founder + Ops Lead + Host |
| Reference responses | D1 | 2 years after deactivation | Founder + Ops Lead only |
| Background check result | D1 (if any) | 2 years after deactivation | Founder only |
| Signed agreement | R2 | 5 years | Founder + Ops Lead only |
| SOP acknowledgment | D1 | 2 years after deactivation | Founder + Ops Lead + Host |

---

## 6. DATA RETENTION POLICY

### Retention Periods

| Data Category | Retention | After Retention |
|---------------|-----------|-----------------|
| KYC documents (photos) | 2 years after account deactivation | Secure delete (overwrite + remove from R2) |
| Interview notes | 2 years after host deactivation | Anonymize (remove name, keep aggregate data) |
| Reference responses | 2 years after host deactivation | Delete |
| Training records | 2 years after host deactivation | Anonymize |
| Signed agreements | 5 years | Archive (legal requirement) |
| Account metadata (name, email) | Until account deletion | Delete on request |

### User Rights (VN context)
- User can request deletion of personal data anytime
- Platform processes within 30 days
- Exception: legal obligation (agreements, incident reports) — retain minimum required
- User receives confirmation email upon deletion

### Secure Deletion
- R2 objects: delete + overwrite with zeroes before bucket deletion
- D1 rows: hard delete (not soft delete)
- Backup exports: purge after retention period

---

## 7. RE-VERIFICATION CYCLE

| Tier | Re-verification | Trigger |
|------|-----------------|---------|
| Tier 3 Local Host | Every 12 months | Automatic reminder 30 days before |
| Tier 3 Local Host | Immediate | Incident Level 3+ (see `SAFETY_INCIDENT_MATRIX_v1.md`) |
| Tier 3 Local Host | Immediate | 3 user complaints in 30 days |
| Tier 3 Local Host | Immediate | Inactive for 6 months (no quest led) |
| Tier 3 Local Host | Immediate | Reference check fraud discovered |

### Re-verification Process
1. Updated reference check (1 personal + 1 professional, new contacts)
2. Safety refresher: 1-hour video + quiz
3. Quest content review: re-explain 1 assigned quest
4. Founder or Ops Lead sign-off

### Deactivation Triggers
- Failed re-verification
- 2 confirmed no-shows without notice
- Incident Level 3+ with host fault
- 3+ verified user complaints in 90 days
- Fraud in KYC documents
- Criminal conviction

---

## 8. LEGAL POSTURE (PILOT PHASE)

**This section requires Founder legal review by 2026-06-10.**

### Current Position (v0.1)
- Muonnoi is a **platform connecting users with independent hosts**
- Hosts are **independent contractors**, not employees
- Muonnoi does not operate tours, does not employ guides
- Muonnoi does not guarantee safety, but provides safety protocol and hotline

### Host Agreement Key Clauses
- Host is responsible for their own actions during quest
- Host must follow SOP; deviation is at own risk
- Host is not guaranteed income (v0.1: no payment)
- Host grants Muonnoi license to use quest photos for marketing
- Host can terminate anytime; Muonnoi can deactivate anytime

### User Agreement Key Clauses
- User acknowledges host is independent contractor
- User follows safety instructions from host
- User provides honest proof and review
- User understands v0.1 is pilot with limited support

### Open Legal Questions (for lawyer)
1. Does Muonnoi need travel agency license for "experience introduction platform"?
2. What is liability if host causes injury during quest?
3. Is KYC photo collection compliant with Vietnamese data protection?
4. What insurance is required (if any) for v0.1 pilot?
5. Can Muonnoi hold user funds in escrow (for future paid quests)?

---

## 9. FORMS AND CHECKLISTS

| Form | Purpose | Status |
|------|---------|--------|
| `KYC_TIER3_INTERVIEW_FORM_v1.md` | Structure interview, score consistently | TO CREATE |
| `KYC_TIER3_TRAINING_CHECKLIST_v1.md` | Track training completion | TO CREATE |
| `KYC_TIER3_REFERENCE_CHECK_FORM_v1.md` | Standard reference questions | TO CREATE |
| `LOCAL_HOST_AGREEMENT_v1.pdf` | Legal contract | TO CREATE |

---

## 10. VERIFICATION CHECKLIST

Before activating any Local Host:

- [ ] Tier 1: Email + phone verified
- [ ] Tier 2: CCCD + selfie + liveness passed
- [ ] Tier 3: Interview completed with pass score
- [ ] Tier 3: All 6 training modules completed
- [ ] Tier 3: Proof quiz ≥8/10
- [ ] Tier 3: 2 reference checks completed, both pass
- [ ] Tier 3: Background check (if triggered) clear
- [ ] Tier 3: Signed agreement uploaded to R2
- [ ] Tier 3: SOP acknowledgment signed
- [ ] Tier 3: 1-3 quests assigned from pool
- [ ] Data retention policy acknowledged by host
- [ ] Host added to communication channel
- [ ] Host dashboard access granted

---

> **Policy locked 2026-06-05. Legal review required before Tier 3 operational. No Local Host activated without Founder sign-off on this policy.**
