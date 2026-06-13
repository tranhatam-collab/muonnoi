# SELF AUDIT PROCESS
# Self Audit process cho WPAS

> **Ngày:** 2026-06-13
> **Project:** Muôn Nơi
> **Owner:** AI Agent (Dev)
> **Approver:** Founder

---

## Mục tiêu

Dev tự audit code trước khi QA để catch issues sớm.

---

## Quy trình Self Audit

### Step 1: Check P0-P9 checklist

**Mục tiêu:** Dev tự check QA Checklist trước khi QA.

**Steps:**
- [ ] Đọc QA Checklist (WPAS/11_QA_CHECKLIST.md)
- [ ] Tự check từng item P0-P9
- [ ] Mark items PASS/FAIL/PARTIAL
- [ ] Document findings

**Output:** Self audit checklist

**Evidence:** QA Checklist filled by dev

---

### Step 2: Run automation rules

**Mục tiêu:** Dev chạy automation rules để catch issues tự động.

**Steps:**
- [ ] Run lint script (nếu có)
- [ ] Run typecheck script (nếu có)
- [ ] Run build script
- [ ] Fix automation errors
- [ ] Document findings

**Output:** Automation report

**Evidence:** Lint/typecheck/build output

---

### Step 3: Fix P0/P1 issues

**Mục tiêu:** Dev fix P0/P1 issues trước khi QA.

**Steps:**
- [ ] Review P0 issues
- [ ] Fix P0 issues immediately
- [ ] Review P1 issues
- [ ] Fix P1 issues before QA
- [ ] Document fixes

**Output:** Fix report

**Evidence:** Fix log + screenshots

---

### Step 4: Document findings

**Mục tiêu:** Dev document findings để QA review.

**Steps:**
- [ ] Tạo self audit report
- [ ] List tất cả issues found
- [ ] List tất cả fixes applied
- [ ] List remaining issues (P2, P3)
- [ ] Assign severity (P0-P3)

**Output:** Self audit report

**Evidence:** Self audit report

---

### Step 5: Create evidence pack draft

**Mục tiêu:** Dev tạo evidence pack draft để QA review.

**Steps:**
- [ ] Collect evidence cho P0-P9
- [ ] Screenshot domain (curl -I)
- [ ] Screenshot logo (header, footer)
- [ ] Screenshot color (CSS variables)
- [ ] Screenshot typography (CSS source)
- [ ] Asset path checklist

**Output:** Evidence pack draft

**Evidence:** Evidence pack folder

---

## Decision Gate

### Gate 1: Self Audit

**Criteria:** No P0 blockers

**Decision:**
- PASS → Continue to AI Audit
- FAIL → Fix issues, retry

---

## Timeline

**Self Audit:** 30-60 minutes
**Automation Rules:** 15-30 minutes
**Fix P0/P1 issues:** 30-60 minutes
**Document findings:** 15-30 minutes
**Create evidence pack:** 15-30 minutes

**Total:** 1.5-3 hours

---

## Authority

**Nguồn chân lý:** `/WPAS/00_WORKFLOW_PROCESS.md` (Step 2)
**Mọi dev phải tuân thủ quy trình này.**
**Không được chuyển sang AI Audit nếu Self Audit FAIL.**

---

**Self Audit process setup complete.**
