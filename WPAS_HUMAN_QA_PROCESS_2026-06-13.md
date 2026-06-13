# HUMAN QA PROCESS
# Human QA process cho WPAS

> **Ngày:** 2026-06-13
> **Project:** Muôn Nơi
> **Owner:** Founder (QA)
> **Approver:** Founder

---

## Mục tiêu

QA manual check để catch automation miss.

---

## Quy trình Human QA

### Step 1: Review self audit report

**Mục tiêu:** QA review Self Audit report để catch issues dev miss.

**Steps:**
- [ ] Đọc Self Audit report
- [ ] Review P0/P1 issues
- [ ] Verify fixes applied
- [ ] Check remaining issues (P2, P3)
- [ ] Document findings

**Output:** QA review of Self Audit

**Evidence:** QA review report

---

### Step 2: Review AI audit report

**Mục tiêu:** QA review AI Audit report để catch issues AI miss.

**Steps:**
- [ ] Đọc AI Audit report
- [ ] Review P0/P1 issues
- [ ] Verify issues dev miss
- [ ] Check remaining issues (P2, P3)
- [ ] Document findings

**Output:** QA review of AI Audit

**Evidence:** QA review report

---

### Step 3: Manual check P0-P9

**Mục tiêu:** QA manual check P0-P9 để catch automation miss.

**Steps:**
- [ ] Manual check P0 (Brand Consistency)
- [ ] Manual check P1 (Language Audit)
- [ ] Manual check P2 (Content Consistency)
- [ ] Manual check P3 (Translation Audit)
- [ ] Manual check P4 (Content Structure)
- [ ] Manual check P5 (UX Audit)
- [ ] Manual check P6 (PWA Audit)
- [ ] Manual check P7 (Technical Audit)
- [ ] Manual check P8 (Commerce Audit — nếu có)
- [ ] Manual check P9 (Legal Audit)
- [ ] Document findings

**Output:** QA manual check report

**Evidence:** QA manual check report

---

### Step 4: Collect evidence

**Mục tiêu:** QA collect evidence cho P0-P9.

**Steps:**
- [ ] Collect evidence cho P0 (Brand Consistency)
- [ ] Collect evidence cho P1 (Language Audit)
- [ ] Collect evidence cho P2 (Content Consistency)
- [ ] Collect evidence cho P3 (Translation Audit)
- [ ] Collect evidence cho P4 (Content Structure)
- [ ] Collect evidence cho P5 (UX Audit)
- [ ] Collect evidence cho P6 (PWA Audit)
- [ ] Collect evidence cho P7 (Technical Audit)
- [ ] Collect evidence cho P8 (Commerce Audit — nếu có)
- [ ] Collect evidence cho P9 (Legal Audit)
- [ ] Organize evidence pack

**Output:** Evidence pack

**Evidence:** Evidence pack folder

---

### Step 5: Document findings

**Mục tiêu:** QA document findings để Production Gate review.

**Steps:**
- [ ] Tạo QA report
- [ ] List tất cả issues found
- [ ] List tất cả issues automation miss
- [ ] List remaining issues (P2, P3)
- [ ] Assign severity (P0-P3)
- [ ] Make PASS/FAIL recommendation

**Output:** QA report + evidence pack

**Evidence:** QA report + evidence pack

---

## Decision Gate

### Gate 3: Human QA

**Criteria:** No P0 blockers, evidence complete

**Decision:**
- PASS → Continue to Production Gate
- FAIL → Fix issues, retry

---

## Timeline

**Review self audit report:** 30-60 minutes
**Review AI audit report:** 30-60 minutes
**Manual check P0-P9:** 2-4 hours
**Collect evidence:** 1-2 hours
**Document findings:** 30-60 minutes

**Total:** 4-8 hours

---

## Authority

**Nguồn chân lý:** `/WPAS/00_WORKFLOW_PROCESS.md` (Step 4)
**Mọi QA phải tuân thủ quy trình này.**
**Không được chuyển sang Production Gate nếu Human QA FAIL.**

---

**Human QA process setup complete.**
