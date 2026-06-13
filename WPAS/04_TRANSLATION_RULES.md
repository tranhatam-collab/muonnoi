# P3 — TRANSLATION AUDIT
# P3 — TRANSLATION AUDIT

**System:** Website Production Acceptance System (WPAS)
**Version:** 1.0
**Created:** 2026-06-08
**Scope:** Toàn bộ hệ sinh thái website

---

## Mục tiêu

Bước này rất nhiều team fail.

Kiểm tra từng dòng VI/EN để đảm bảo:
- Translation chính xác
- Context phù hợp
- Consistent toàn hệ thống

---

## Quy tắc cốt lõi

**Tất cả translation phải từ MASTER LANGUAGE CODEX.**

**Không được:**
- ❌ Tự dịch
- ❌ Dùng Google Translate
- ❌ Dùng AI translate không có context
- ❌ Tự sáng tác translation

---

## 1-to-1 Mapping Rule

### Quy tắc

Mỗi term VI phải map 1-to-1 với EN.

**Ví dụ FAIL:**
- Trang A: "Doanh nghiệp" → "Business"
- Trang B: "Doanh nghiệp" → "Company"
- Trang C: "Doanh nghiệp" → "Enterprise"

**Ví dụ PASS:**
- Toàn hệ: "Doanh nghiệp" → "Business"

---

## Context Consistency Rule

### Quy tắc

Cùng context, cùng translation.

**Ví dụ FAIL:**
- Context button: "Đăng ký" → "Register"
- Context form: "Đăng ký" → "Sign Up"
- Context email: "Đăng ký" → "Join"

**Ví dụ PASS:**
- Context button: "Đăng ký" → "Register"
- Context form: "Đăng ký" → "Register"
- Context email: "Đăng ký" → "Register"

---

## Translation Quality Rules

### Accuracy

**Quy tắc:** Translation phải chính xác nghĩa.

**Ví dụ FAIL:**
- VI: "Khởi động đối thoại" → EN: "Start Dialog" (sai ngữ nghĩa)
- VI: "Xem điểm vào" → EN: "See Entry Point" (không tự nhiên)

**Ví dụ PASS:**
- VI: "Khởi động đối thoại" → EN: "Start Dialogue"
- VI: "Xem điểm vào" → EN: "View Entry Point"

### Naturalness

**Quy tắc:** Translation phải tự nhiên trong ngôn ngữ đích.

**Ví dụ FAIL:**
- VI: "Đăng ký" → EN: "Sign Up For An Account" (quá dài)
- VI: "Đăng nhập" → EN: "Log Into Your Account" (quá dài)

**Ví dụ PASS:**
- VI: "Đăng ký" → EN: "Register"
- VI: "Đăng nhập" → EN: "Log In"

### Consistency

**Quy tắc:** Cùng term phải cùng translation.

**Ví dụ FAIL:**
- VI: "Cộng đồng" → EN: "Community" (trang A)
- VI: "Cộng đồng" → EN: "Communities" (trang B)

**Ví dụ PASS:**
- VI: "Cộng đồng" → EN: "Community" (toàn hệ)

---

## Special Cases

### Technical Terms

**Quy tắc:** Technical terms giữ nguyên hoặc có quy tắc rõ ràng.

**Ví dụ:**
- "AI" → "AI" (không dịch)
- "API" → "API" (không dịch)
- "Dashboard" → "Dashboard" (hoặc "Bảng điều khiển" nếu quy định)

### Brand Names

**Quy tắc:** Brand names không dịch.

**Ví dụ:**
- "Trần Hà Tâm" → "Trần Hà Tâm" (không dịch)
- "IAI" → "IAI" (không dịch)

### Acronyms

**Quy tắc:** Acronyms giữ nguyên hoặc có quy tắc rõ ràng.

**Ví dụ:**
- "CTA" → "CTA" (hoặc "Call to Action" nếu quy định)
- "SEO" → "SEO" (không dịch)

---

## Translation Process

### Quy trình chuẩn

1. **Check MASTER LANGUAGE CODEX**
   - Term đã có trong codex?
   - Có → Dùng translation từ codex
   - Không → Request thêm vào codex

2. **Không tự dịch**
   - Không dùng Google Translate
   - Không dùng AI translate không có context
   - Không tự sáng tác

3. **Context check**
   - Translation phù hợp context?
   - Consistent với các trang khác?

4. **Review**
   - Native speaker review (nếu có thể)
   - QA check translation

---

## Checklist P3

### 1-to-1 Mapping
- [ ] Mỗi term VI map 1-to-1 với EN
- [ ] Không có nhiều translation khác nhau
- [ ] Consistent toàn hệ thống

### Context Consistency
- [ ] Cùng context, cùng translation
- [ ] Không có context-specific translation khác nhau

### Translation Quality
- [ ] Translation chính xác nghĩa
- [ ] Translation tự nhiên
- [ ] Translation consistent

### Special Cases
- [ ] Technical terms có quy tắc
- [ ] Brand names không dịch
- [ ] Acronyms có quy tắc

### Process
- [ ] Check MASTER LANGUAGE CODEX trước
- [ ] Không tự dịch
- [ ] Context check
- [ ] Review

---

## Fail Criteria

**FAIL nếu:**
- Term có nhiều translation khác nhau
- Context không consistent
- Translation không chính xác
- Translation không tự nhiên
- Dev tự dịch, tự sáng tác

**PASS nếu:**
- 1-to-1 mapping tuân thủ
- Context consistent
- Translation quality tốt
- Process tuân thủ

---

## Authority

**Nguồn chân lý:** `/WPAS/04_TRANSLATION_RULES.md`
**Mọi translator, AI Agent, Dev phải tuân thủ.**
**Không được tự dịch, tự sáng tác translation.**
