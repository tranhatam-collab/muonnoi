# SAFETY INCIDENT MATRIX v1
> **Date:** 2026-06-05
> **Status:** LOCKED — DO NOT ALTER WITHOUT FOUNDER APPROVAL
> **Locked By:** Founder, 2026-06-05
> **Scope:** All Muonnoi Life Quest OS activities, pilot phase (Đà Lạt, 2026-08)

---

## 1. INCIDENT LEVELS

### Level 1 — Low Severity

| Field | Definition |
|-------|-----------|
| **Description** | Minor issue. Host can handle on-site without external help. |
| **Examples** | • Scratch, blister, minor cut<br>• User feels unwell (headache, nausea)<br>• Weather change affecting quest comfort<br>• Lost personal item (phone, wallet) — found quickly |
| **First Responder** | Host |
| **Response Time** | Immediate (on-site) |
| **User Communication** | Host explains situation, offers solution |
| **Host Suspension** | No |
| **Internal Logging** | Host logs in app within 2 hours |
| **Reopen Criteria** | N/A (resolved on-site) |

### Level 2 — Medium Severity

| Field | Definition |
|-------|-----------|
| **Description** | Requires support from Ops Lead or external help. Host cannot handle alone. |
| **Examples** | • Moderate injury (sprain, cut needing stitches)<br>• User lost/separated from group >30 min<br>• Host-user conflict (argument, discomfort, harassment claim)<br>• Property damage (broken equipment)<br>• User medical condition flare-up |
| **First Responder** | Host → escalates to Ops Lead within 15 min |
| **Response Time** | Ops Lead responds within 30 min |
| **User Communication** | Ops Lead contacts user within 1 hour |
| **Host Suspension** | Temporary (until investigation complete, max 7 days) |
| **Internal Logging** | Incident report filed within 2 hours |
| **Reopen Criteria** | If user requests review or new evidence emerges |

### Level 3 — High Severity

| Field | Definition |
|-------|-----------|
| **Description** | Serious incident with potential legal, medical, or reputational consequences. |
| **Examples** | • Serious injury requiring hospital<br>• Host/user harassment or assault<br>• Fraud or theft<br>• Legal involvement (police)<br>• Data breach of user personal data<br>• Host operating while intoxicated |
| **First Responder** | Host → immediate safety → Ops Lead → Founder |
| **Response Time** | Founder notified within 30 minutes |
| **User Communication** | Founder or Ops Lead contacts user within 1 hour. Written follow-up within 4 hours. |
| **Host Suspension** | Immediate. Investigation before any reinstatement. |
| **Internal Logging** | Full incident report within 4 hours. Police report (if applicable) attached. |
| **Reopen Criteria** | New evidence, legal proceeding, or user appeal |
| **Pilot Impact** | **Pilot MAY BE PAUSED** pending investigation |

### Level 4 — Emergency

| Field | Definition |
|-------|-----------|
| **Description** | Life-threatening or catastrophic event. Immediate external emergency response required. |
| **Examples** | • Life-threatening injury<br>• Natural disaster during quest<br>• Violence with weapon<br>• Missing person >2 hours<br>• Fire, flood, landslide<br>• Terrorism or mass violence |
| **First Responder** | Call 115/113 immediately. Host ensures immediate safety. |
| **Response Time** | Founder notified immediately (phone call, not message) |
| **User Communication** | Founder speaks to affected parties. NO ONE ELSE makes public statement. |
| **Host Suspension** | Immediate. Permanent deactivation if host at fault. |
| **Internal Logging** | Full report within 4 hours. External investigation if needed. |
| **Reopen Criteria** | External investigation or legal proceeding |
| **Pilot Impact** | **PILOT STOPS IMMEDIATELY** until Founder clears restart |

---

## 2. ESCALATION CHAIN

```
User / Witness
    |
    v
Host (always first responder)
    |
    +-- Level 1 --> Host resolves --> Log --> Done
    |
    +-- Level 2 --> Host calls Ops Lead
    |                  |
    |                  v
    |              Ops Lead coordinates
    |                  |
    |                  +-- Resolves --> Log --> Done
    |                  |
    |                  +-- Needs Founder --> Escalate
    |                                     |
    v                                     v
Level 3/4 --> Host calls 115/113 if needed
                  |
                  v
              Ops Lead (within 15 min)
                  |
                  v
              Founder (within 30 min)
                  |
                  +-- Decides: continue / pause / stop
                  |
                  v
              External authorities (if needed)
```

**Communication Channels:**
- **Host → Ops Lead:** Muonnoi safety hotline (phone)
- **Ops Lead → Founder:** Phone call (not message) for Level 3+
- **Founder → User:** Direct phone call
- **Public/media:** ONLY Founder speaks. No one else authorized.

---

## 3. HOST SUSPENSION RULES

| Incident Level | Immediate Suspension? | Investigation Duration | Max Suspension |
|----------------|------------------------|----------------------|----------------|
| Level 1 | No | N/A | N/A |
| Level 2 | Temporary (auto) | 3-7 days | 14 days |
| Level 3 | Yes | 7-14 days | Until investigation complete |
| Level 4 | Yes | External investigation | Permanent if fault confirmed |

### Suspension Types
- **Temporary:** Host cannot lead new quests. Existing quests reassigned or cancelled.
- **Investigation:** Full review of incident, user statements, host statements, evidence.
- **Permanent:** Host account deactivated, KYC data retained per policy, added to internal do-not-rehire list.

### Reinstatement
- Level 2: After investigation clears host + re-verification training (1 hour)
- Level 3: After investigation clears host + full re-verification (Tier 3 process)
- Level 4: No reinstatement if host at fault

---

## 4. INCIDENT REPORT TEMPLATE

Every Level 2+ incident requires a report:

```
# INCIDENT REPORT — {YYYY-MM-DD} — Level {1|2|3|4}

## 1. Basic Info
- Incident ID: INC-{YYYY}-{NNNN} (auto-generated)
- Date/Time: 
- Location: 
- Quest: 
- Host: 
- User(s): 
- Witnesses: 

## 2. What Happened (facts only, no interpretation)
{Free text. Bullet points OK.}

## 3. Immediate Actions Taken
{What host did, what Ops Lead did, what authorities did}

## 4. Current Status
- [ ] Resolved
- [ ] Ongoing
- [ ] Under investigation

## 5. Injuries / Damage
{List any physical injuries, property damage, data breach}

## 6. External Authorities Involved
- [ ] Police (113)
- [ ] Ambulance (115)
- [ ] Fire (114)
- [ ] Tourist police
- [ ] Other: _____

## 7. Evidence
- [ ] Photos
- [ ] Videos
- [ ] Screenshots
- [ ] Medical report
- [ ] Police report
- [ ] Witness statements
- [ ] Other: _____

## 8. Follow-up Needed
{Action items, owners, deadlines}

## 9. Prevention Suggestion
{How to prevent similar incident in future}

## 10. Reporter Info
- Reported by: 
- Date/Time of report: 
- Reviewed by: 
- Review date: 
```

---

## 5. USER COMMUNICATION TEMPLATES

### Level 2 — User Notification

```
Subject: [Muonnoi] Follow-up on your recent quest experience

Dear {user_name},

We are following up on your recent quest "{quest_title}" with host {host_name} on {date}.

We understand there was an issue during your experience. Our operations team is reviewing the situation and will contact you within 24 hours.

Your safety and satisfaction are our top priority. If you need immediate assistance, please contact our safety hotline: {hotline_number}.

Best,
{ops_lead_name}
Muonnoi Operations
```

### Level 3 — User Notification

```
Subject: [Muonnoi] Important update regarding your quest

Dear {user_name},

We are writing to inform you that we are conducting a thorough review of the incident that occurred during your quest "{quest_title}" on {date}.

Our founder, {founder_name}, will contact you personally within the next 4 hours to discuss this matter and ensure you receive appropriate support.

If you need immediate assistance: {hotline_number}

Muonnoi takes every incident seriously. We will keep you updated on our investigation.

{founder_name}
Founder, Muonnoi
```

### Level 4 — User Notification

```
Subject: [Muonnoi] Urgent: Immediate Support

Dear {user_name},

We are deeply concerned about the serious incident that occurred during your quest on {date}. Your well-being is our absolute priority.

Our founder {founder_name} will call you within the next hour. Please ensure your phone is available.

Emergency hotline (24/7): {hotline_number}

We have suspended the associated quest and host pending full investigation. We will provide further updates as they become available.

{founder_name}
Founder, Muonnoi
```

---

## 6. PREVENTION FRAMEWORK

### Before Quest
- [ ] Host has first aid kit
- [ ] Host has emergency contact list
- [ ] Weather checked 24h before
- [ ] User reminded of required gear
- [ ] Host knows nearest hospital/clinic location

### During Quest
- [ ] Host counts users at checkpoints
- [ ] Host checks in with Muonnoi ops every 2 hours (for long quests)
- [ ] GPS tracking enabled (user opt-in)
- [ ] Group stays together; no one left behind

### After Quest
- [ ] Host logs any issues within 2 hours
- [ ] User survey sent (1 question: "Did you feel safe? Y/N + comment")
- [ ] Ops Lead reviews all logs weekly
- [ ] Monthly safety review meeting

---

## 7. CONTACT LIST

| Role | Name | Phone | Backup |
|------|------|-------|--------|
| Founder | (TBD) | (TBD) | (TBD) |
| Ops Lead | (TBD) | (TBD) | (TBD) |
| Safety Hotline | — | +84-XXX-XXX-XXXX | — |
| Emergency (VN) | 115 | — | — |
| Police (VN) | 113 | — | — |
| Fire (VN) | 114 | — | — |
| Tourist Police Đà Lạt | (TBD) | (TBD) | — |
| Hospital Đà Lạt | (TBD) | (TBD) | — |

---

> **Matrix locked 2026-06-05. All hosts must acknowledge before activation.**
