# QUY TRÌNH VẬN HÀNH CHUẨN
# QUY TRÌNH VẬN HÀNH CHUẨN

**System:** Website Production Acceptance System (WPAS)
**Version:** 1.0
**Created:** 2026-06-08
**Scope:** Toàn bộ hệ sinh thái website

---

## Mục tiêu

Quy trình vận hành chuẩn cho mọi team dev để đảm bảo consistency toàn hệ sinh thái.

---

## Quy Trình 12 Bước

### 1. Build

**Mục tiêu:** Build code cho staging/production.

**Steps:**
- [ ] Pull latest code
- [ ] Install dependencies
- [ ] Run build script
- [ ] Verify build output
- [ ] Check build errors

**Output:** Build artifacts

---

### 2. Self Audit

**Mục tiêu:** Dev tự audit code trước khi QA.

**Steps:**
- [ ] Check P0-P9 checklist
- [ ] Run automation rules
- [ ] Fix P0/P1 issues
- [ ] Document findings
- [ ] Create evidence pack draft

**Output:** Self audit report

---

### 3. AI Audit

**Mục tiêu:** AI agent audit code để catch issues dev miss.

**Steps:**
- [ ] Run AI audit script
- [ ] Check P0-P9 checklist
- [ ] Run automation rules
- [ ] Document findings
- [ ] Flag P0/P1 issues

**Output:** AI audit report

---

### 4. Human QA

**Mục tiêu:** QA manual check để catch automation miss.

**Steps:**
- [ ] Review self audit report
- [ ] Review AI audit report
- [ ] Manual check P0-P9
- [ ] Collect evidence
- [ ] Document findings

**Output:** QA report + evidence pack

---

### 5. Production Gate

**Mục tiêu:** Quyết định PASS/FAIL cho production.

**Steps:**
- [ ] Review all audit reports
- [ ] Check P0 blockers
- [ ] Check evidence completeness
- [ ] Make PASS/FAIL decision
- [ ] Document decision

**Output:** Production gate decision

---

### 6. Release Candidate

**Mục tiêu:** Tạo release candidate cho staging.

**Steps:**
- [ ] Tag release version
- [ ] Create release branch
- [ ] Deploy to staging
- [ ] Verify staging
- [ ] Create release notes

**Output:** Release candidate

---

### 7. Staging

**Mục tiêu:** Test trên staging environment.

**Steps:**
- [ ] Deploy to staging
- [ ] Smoke test
- [ ] Integration test
- [ ] E2E test
- [ ] Performance test
- [ ] Security test

**Output:** Staging test report

---

### 8. Founder Review

**Mục tiêu:** Founder review staging trước production.

**Steps:**
- [ ] Founder access staging
- [ ] Founder review UI/UX
- [ ] Founder review content
- [ ] Founder review brand
- [ ] Founder approval/rejection

**Output:** Founder approval

---

### 9. Production Deploy

**Mục tiêu:** Deploy to production.

**Steps:**
- [ ] Schedule deploy window
- [ ] Notify stakeholders
- [ ] Backup production
- [ ] Deploy to production
- [ ] Verify production
- [ ] Monitor errors

**Output:** Production deployment

---

### 10. Post Deploy Verification

**Mục tiêu:** Verify production sau deploy.

**Steps:**
- [ ] Smoke test production
- [ ] Check critical flows
- [ ] Monitor error logs
- [ ] Check performance
- [ ] Check SEO
- [ ] Check analytics

**Output:** Post deploy verification report

---

### 11. Release Report

**Mục tiêu:** Document release cho archive.

**Steps:**
- [ ] Fill release report template
- [ ] Include all audit reports
- [ ] Include evidence pack
- [ ] Include sign-offs
- [ ] Archive release

**Output:** Release report

---

### 12. Archive Evidence

**Mục tiêu:** Archive evidence cho future reference.

**Steps:**
- [ ] Upload evidence pack to storage
- [ ] Link evidence to release report
- [ ] Update release registry
- [ ] Notify stakeholders
- [ ] Close release

**Output:** Archived evidence

---

## Roles & Responsibilities

### Developer
- Build code
- Self audit
- Fix issues
- Create release candidate
- Deploy to staging/production

### QA
- Human QA
- Collect evidence
- Create QA report
- Verify staging
- Post deploy verification

### AI Agent
- AI audit
- Run automation rules
- Flag issues
- Generate reports

### Designer
- Review UI/UX
- Check brand consistency
- Approve design changes

### Legal
- Review legal pages
- Check entity disclosure
- Approve legal changes

### Founder/Owner
- Founder review staging
- Approve/reject release
- Sign-off production

---

## Decision Gates

### Gate 1: Self Audit
**Criteria:** No P0 blockers
**Decision:** PASS → Continue to AI Audit
**Decision:** FAIL → Fix issues, retry

### Gate 2: AI Audit
**Criteria:** No P0 blockers
**Decision:** PASS → Continue to Human QA
**Decision:** FAIL → Fix issues, retry

### Gate 3: Human QA
**Criteria:** No P0 blockers, evidence complete
**Decision:** PASS → Continue to Production Gate
**Decision:** FAIL → Fix issues, retry

### Gate 4: Production Gate
**Criteria:** All P0-P9 PASS, evidence complete
**Decision:** PASS → Create Release Candidate
**Decision:** FAIL → Fix issues, retry

### Gate 5: Staging
**Criteria:** Staging tests pass
**Decision:** PASS → Continue to Founder Review
**Decision:** FAIL → Fix issues, retry

### Gate 6: Founder Review
**Criteria:** Founder approval
**Decision:** PASS → Deploy to Production
**Decision:** FAIL → Fix issues, retry

### Gate 7: Production Deploy
**Criteria:** Deploy successful, verification pass
**Decision:** PASS → Create Release Report
**Decision:** FAIL → Rollback, fix issues, retry

---

## Timeline

### Typical Release
- Build: 30 minutes
- Self Audit: 1 hour
- AI Audit: 30 minutes
- Human QA: 2-4 hours
- Production Gate: 30 minutes
- Release Candidate: 30 minutes
- Staging: 2-4 hours
- Founder Review: 1-2 hours
- Production Deploy: 30 minutes
- Post Deploy Verification: 1 hour
- Release Report: 30 minutes
- Archive Evidence: 30 minutes

**Total:** 10-15 hours

### Hotfix Release
- Build: 15 minutes
- Self Audit: 30 minutes
- AI Audit: 15 minutes
- Human QA: 1 hour
- Production Gate: 15 minutes
- Release Candidate: 15 minutes
- Staging: 1 hour
- Founder Review: 30 minutes
- Production Deploy: 15 minutes
- Post Deploy Verification: 30 minutes
- Release Report: 15 minutes
- Archive Evidence: 15 minutes

**Total:** 5-6 hours

---

## Rollback Procedure

### When to Rollback
- P0 blocker found post-deploy
- Critical bug affecting users
- Performance degradation
- Security issue
- Founder rejection

### Rollback Steps
1. Notify stakeholders
2. Backup current production
3. Rollback to previous version
4. Verify rollback
5. Monitor errors
6. Document rollback
7. Plan fix

---

## Communication

### Stakeholder Notification
- **Before Deploy:** 24 hours notice
- **During Deploy:** Status updates every 30 minutes
- **After Deploy:** Completion notification
- **Rollback:** Immediate notification

### Communication Channels
- Slack: #releases
- Email: release-notifications@
- Jira: Release tickets

---

## Authority

**Nguồn chân lý:** `/WPAS/00_WORKFLOW_PROCESS.md`
**Mọi team dev phải tuân thủ quy trình này.**
**Không được skip steps unless có Founder approval.**
