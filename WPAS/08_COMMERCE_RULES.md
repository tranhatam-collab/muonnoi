# P8 — COMMERCE AUDIT
# P8 — COMMERCE AUDIT

**System:** Website Production Acceptance System (WPAS)
**Version:** 1.0
**Created:** 2026-06-08
**Scope:** Toàn bộ hệ sinh thái website có bán hàng

---

## Mục tiêu

Nếu website có bán hàng, kiểm tra toàn bộ commerce flow:
- Pricing
- Checkout
- Payment
- Invoice
- Email
- Refund
- Terms

---

## Pricing

### Quy tắc

**Pricing phải rõ ràng và consistent.**

**Kiểm tra:**
- ✅ Pricing page có
- ✅ Giá rõ ràng (không ẩn phí)
- ✅ Currency rõ ràng (VND, USD, etc.)
- ✅ Billing cycle rõ ràng (monthly, yearly, one-time)
- ✅ Features mỗi plan rõ ràng
- ✅ CTA rõ ràng (Mua ngay, Đăng ký)
- ✅ Bilingual (nếu site bilingual)

**Ví dụ FAIL:**
- Giá không rõ
- Ẩn phí
- Currency không rõ
- Billing cycle không rõ

**Ví dụ PASS:**
- Giá rõ ràng
- Không ẩn phí
- Currency rõ ràng
- Billing cycle rõ ràng

---

## Checkout Flow

### Quy tắc

**Checkout flow phải smooth và rõ ràng.**

**Kiểm tra:**
- ✅ Checkout page có
- ✅ Form fields rõ ràng
- ✅ Payment methods rõ ràng
- ✅ Order summary rõ ràng
- ✅ Terms checkbox có
- ✅ Validation hoạt động
- ✅ Error messages rõ ràng
- ✅ Bilingual (nếu site bilingual)

**Ví dụ FAIL:**
- Form fields không rõ
- Payment methods không rõ
- Order summary không rõ
- Không có terms checkbox

**Ví dụ PASS:**
- Form fields rõ ràng
- Payment methods rõ ràng
- Order summary rõ ràng
- Terms checkbox có

---

## Payment

### Quy tắc

**Payment phải secure và reliable.**

**Kiểm tra:**
- ✅ Payment gateway secure (HTTPS)
- ✅ Payment methods supported rõ ràng
- ✅ Payment flow smooth
- ✅ Error handling đúng
- ✅ Webhook handling đúng
- ✅ Payment confirmation rõ ràng

**Ví dụ FAIL:**
- Payment không secure
- Payment methods không rõ
- Webhook không xử lý
- Error handling sai

**Ví dụ PASS:**
- Payment secure
- Payment methods rõ
- Webhook xử lý đúng
- Error handling đúng

---

## Invoice

### Quy tắc

**Invoice phải rõ ràng và legal compliant.**

**Kiểm tra:**
- ✅ Invoice template có
- ✅ Entity name đúng
- ✅ Invoice number rõ ràng
- ✅ Date rõ ràng
- ✅ Items rõ ràng
- ✅ Total rõ ràng
- ✅ Currency rõ ràng
- ✅ Payment terms rõ ràng
- ✅ Brand consistent

**Ví dụ FAIL:**
- Entity name sai
- Invoice number không rõ
- Items không rõ
- Brand không consistent

**Ví dụ PASS:**
- Entity name đúng
- Invoice number rõ
- Items rõ
- Brand consistent

---

## Email

### Quy tắc

**Email template phải rõ ràng và brand consistent.**

**Kiểm tra:**
- ✅ Order confirmation email có
- ✅ Payment confirmation email có
- ✅ Invoice email có
- ✅ Refund email có
- ✅ Brand consistent
- ✅ Subject line rõ ràng
- ✅ CTA rõ ràng
- ✅ Bilingual (nếu site bilingual)

**Ví dụ FAIL:**
- Email không có
- Brand không consistent
- Subject line không rõ
- CTA không rõ

**Ví dụ PASS:**
- Email có
- Brand consistent
- Subject line rõ
- CTA rõ

---

## Refund

### Quy tắc

**Refund policy phải rõ ràng và legal compliant.**

**Kiểm tra:**
- ✅ Refund policy có
- ✅ Refund conditions rõ ràng
- ✅ Refund process rõ ràng
- ✅ Refund timeline rõ ràng
- ✅ Bilingual (nếu site bilingual)
- ✅ Legal compliant

**Ví dụ FAIL:**
- Refund policy không có
- Conditions không rõ
- Process không rõ
- Timeline không rõ

**Ví dụ PASS:**
- Refund policy có
- Conditions rõ
- Process rõ
- Timeline rõ

---

## Terms

### Quy tắc

**Terms of Service phải rõ ràng và legal compliant.**

**Kiểm tra:**
- ✅ Terms page có
- ✅ Entity name đúng
- ✅ Jurisdiction rõ ràng
- ✅ Liability limits rõ ràng
- ✅ Payment terms rõ ràng
- ✅ Refund terms rõ ràng
- ✅ Bilingual (nếu site bilingual)
- ✅ Legal compliant

**Ví dụ FAIL:**
- Terms không có
- Entity name sai
- Jurisdiction không rõ
- Liability không rõ

**Ví dụ PASS:**
- Terms có
- Entity name đúng
- Jurisdiction rõ
- Liability rõ

---

## Checklist P8

### Pricing
- [ ] Pricing page có
- [ ] Giá rõ ràng
- [ ] Currency rõ ràng
- [ ] Billing cycle rõ ràng
- [ ] Features rõ ràng
- [ ] CTA rõ ràng

### Checkout
- [ ] Checkout page có
- [ ] Form fields rõ ràng
- [ ] Payment methods rõ ràng
- [ ] Order summary rõ ràng
- [ ] Terms checkbox có
- [ ] Validation hoạt động

### Payment
- [ ] Payment secure
- [ ] Payment methods rõ
- [ ] Payment flow smooth
- [ ] Error handling đúng
- [ ] Webhook xử lý đúng

### Invoice
- [ ] Invoice template có
- [ ] Entity name đúng
- [ ] Invoice number rõ
- [ ] Items rõ
- [ ] Total rõ
- [ ] Brand consistent

### Email
- [ ] Order confirmation email
- [ ] Payment confirmation email
- [ ] Invoice email
- [ ] Refund email
- [ ] Brand consistent
- [ ] Subject line rõ

### Refund
- [ ] Refund policy có
- [ ] Conditions rõ
- [ ] Process rõ
- [ ] Timeline rõ

### Terms
- [ ] Terms page có
- [ ] Entity name đúng
- [ ] Jurisdiction rõ
- [ ] Liability rõ
- [ ] Payment terms rõ

---

## Fail Criteria

**FAIL nếu:**
- Pricing không rõ
- Checkout flow không smooth
- Payment không secure
- Invoice entity name sai
- Email không brand consistent
- Refund policy không có
- Terms không legal compliant

**PASS nếu:**
- Pricing rõ ràng
- Checkout flow smooth
- Payment secure
- Invoice entity name đúng
- Email brand consistent
- Refund policy có
- Terms legal compliant

---

## Severity

### P0 Blocker — Không được deploy
- Payment không secure
- Entity name sai trong invoice/terms
- Không có refund policy
- Không có terms

### P1 Major — Phải sửa trước release
- Pricing không rõ
- Checkout flow không smooth
- Email không brand consistent
- Webhook không xử lý

### P2 Minor — Có thể sửa sau release
- Subject line email không tối ưu
- CTA email không rõ
- Refund timeline không rõ

---

## Authority

**Nguồn chân lý:** `/WPAS/08_COMMERCE_RULES.md`
**Mọi dev, QA, legal phải tuân thủ.**
**Không được deploy nếu commerce không pass.**
