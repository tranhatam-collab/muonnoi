# AI AUDIT PROCESS
# AI Audit process cho WPAS

> **Ngày:** 2026-06-13
> **Project:** Muôn Nơi
> **Owner:** AI Agent (AI)
> **Approver:** Founder

---

## Mục tiêu

AI agent audit code để catch issues dev miss.

---

## Quy trình AI Audit

### Step 1: Run AI audit script

**Mục tiêu:** AI Agent chạy audit script để catch issues tự động.

**Steps:**
- [ ] Đọc codebase
- [ ] Run AI audit script (grep, search, analyze)
- [ ] Check P0-P9 checklist
- [ ] Flag P0/P1 issues
- [ ] Document findings

**Output:** AI audit report

**Evidence:** AI audit script output

---

### Step 2: Check P0-P9 checklist

**Mục tiêu:** AI Agent check QA Checklist để catch issues dev miss.

**Steps:**
- [ ] Đọc QA Checklist (WPAS/11_QA_CHECKLIST.md)
- [ ] Tự check từng item P0-P9
- [ ] So sánh với Self Audit results
- [ ] Mark items PASS/FAIL/PARTIAL
- [ ] Document findings

**Output:** AI audit checklist

**Evidence:** QA Checklist filled by AI

---

### Step 3: Run automation rules

**Mục tiêu:** AI Agent chạy automation rules để catch issues tự động.

**Steps:**
- [ ] Run lint script (nếu có)
- [ ] Run typecheck script (nếu có)
- [ ] Run build script
- [ ] Fix automation errors
- [ ] Document findings

**Output:** Automation report

**Evidence:** Lint/typecheck/build output

---

### Step 4: Document findings

**Mục tiêu:** AI Agent document findings để QA review.

**Steps:**
- [ ] Tạo AI audit report
- [ ] List tất cả issues found
- [ ] List tất cả issues dev miss
- [ ] List remaining issues (P2, P3)
- [ ] Assign severity (P0-P3)

**Output:** AI audit report

**Evidence:** AI audit report

---

### Step 5: Flag P0/P1 issues

**Mục tiêu:** AI Agent flag P0/P1 issues để dev fix.

**Steps:**
- [ ] Flag P0 issues (blockers)
- [ ] Flag P1 issues (major)
- [ ] Assign owner cho mỗi issue
- [ ] Set deadline cho mỗi issue
- [ ] Document flagging

**Output:** Issue flagging report

**Evidence:** Issue tracking

---

## Decision Gate

### Gate 2: AI Audit

**Criteria:** No P0 blockers

**Decision:**
- PASS → Continue to Human QA
- FAIL → Fix issues, retry

---

## Timeline

**AI audit script:** 30-60 minutes
**Check P0-P9 checklist:** 30-60 minutes
**Automation rules:** 15-30 minutes
**Document findings:** 15-30 minutes
**Flag P0/P1 issues:** 15-30 minutes

**Total:** 1.5-3 hours

---

## Authority

**Nguồn chân lý:** `/WPAS/00_WORKFLOW_PROCESS.md` (Step 3)
**Mọi AI agent phải tuân thủ quy trình này.**
**Không được chuyển sang Human QA nếu AI Audit FAIL.**

---

**AI Audit process setup complete.**
