# P1 — LANGUAGE AUDIT
# P1 — LANGUAGE AUDIT

**System:** Website Production Acceptance System (WPAS)
**Version:** 1.0
**Created:** 2026-06-08
**Scope:** Toàn bộ hệ sinh thái website

---

## Mục tiêu

Đây là bước **cực kỳ quan trọng**.

Đảm bảo ngôn ngữ đồng nhất 100% trên toàn bộ hệ sinh thái.

Nếu không khóa lớp này, sau khi hệ có 20–50 website và nhiều AI Agent cùng làm việc, chỉ riêng sự không thống nhất ngôn ngữ đã tạo ra hàng nghìn lỗi nhỏ rất khó sửa về sau.

---

## Quy tắc cốt lõi

**Toàn bộ hệ sinh thái chỉ có 1 nguồn chân lý ngôn ngữ:**

- `/content/vi.json` (hoặc `LANGUAGE_CODEX_MASTER_VI.md`)
- `/content/en.json` (hoặc `LANGUAGE_CODEX_MASTER_EN.md`)

**Mọi website, mọi AI Agent, mọi Dev, mọi Content Writer đều phải lấy từ đó.**

**Không được:**
- ❌ Tự dịch
- ❌ Tự đặt tên
- ❌ Tự sáng tác CTA
- ❌ Tự viết content

---

## Bilingual Consistency

### Quy tắc

Mỗi term phải có 1 cặp VI/EN duy nhất.

**Ví dụ SAI:**
- Trang A: "Khởi động đối thoại" / "Start Dialogue"
- Trang B: "Khởi động đối thoại" / "Start dialog"
- Trang C: "Khởi động đối thoại" / "Begin dialogue"
- Trang D: "Khởi động đối thoại" / "Open dialogue"

**Ví dụ ĐÚNG:**
- Toàn hệ: "Khởi động đối thoại" / "Start Dialogue"

---

## MASTER LANGUAGE CODEX

### Cấu trúc

```json
{
  "common": {
    "start_dialogue": {
      "vi": "Khởi động đối thoại",
      "en": "Start Dialogue"
    },
    "view_entry_point": {
      "vi": "Xem điểm vào",
      "en": "View Entry Point"
    },
    "continue_at_hub": {
      "vi": "Tiếp tục tại Hub",
      "en": "Continue at Hub"
    },
    "explore_related_layer": {
      "vi": "Xem lớp liên quan",
      "en": "Explore Related Layer"
    }
  },
  "cta": {
    "register": {
      "vi": "Đăng ký",
      "en": "Register"
    },
    "login": {
      "vi": "Đăng nhập",
      "en": "Log In"
    },
    "join_community": {
      "vi": "Tham gia cộng đồng",
      "en": "Join Community"
    }
  },
  "navigation": {
    "home": {
      "vi": "Trang chủ",
      "en": "Home"
    },
    "about": {
      "vi": "Về chúng tôi",
      "en": "About"
    },
    "contact": {
      "vi": "Liên hệ",
      "en": "Contact"
    }
  }
}
```

---

## Quy tắc đặt tên

### CTA Buttons

**Ví dụ SAI:**
- "Join Community"
- "Join The Community"
- "Become A Member"
- "Sign Up Now"

**Ví dụ ĐÚNG:**
- Chọn 1: "Join Community"
- Dùng toàn hệ thống

### Navigation

**Ví dụ SAI:**
- "Home" / "Homepage" / "Main"
- "About" / "About Us" / "Our Story"

**Ví dụ ĐÚNG:**
- Chọn 1: "Home" / "About"
- Dùng toàn hệ thống

### Form Labels

**Ví dụ SAI:**
- "Email Address" / "Email" / "Your Email"
- "Password" / "Your Password" / "Enter Password"

**Ví dụ ĐÚNG:**
- Chọn 1: "Email" / "Password"
- Dùng toàn hệ thống

---

## Diacritic Rules

### Vietnamese

**Bắt buộc:**
- ✅ Full diacritics (có dấu)
- ✅ Đúng chính tả
- ✅ Không viết tắt (trừ khi có quy tắc)

**Ví dụ:**
- ✅ "Đăng ký" (không "Dang ky")
- ✅ "Đăng nhập" (không "Dang nhap")
- ✅ "Trang chủ" (không "Trang chu")

### English

**Bắt buộc:**
- ✅ Natural English
- ✅ Grade 8-10 reading level
- ✅ Consistent capitalization
- ✅ No jargon unless defined

**Ví dụ:**
- ✅ "Log In" (Title Case)
- ✅ "log in" (lowercase verb)
- ✅ "Sign up" (verb) / "Sign Up" (button)

---

## Translation Rules

### 1-to-1 Mapping

Mỗi term VI phải map 1-to-1 với EN.

**Ví dụ SAI:**
- VI: "Doanh nghiệp" → EN: "Business" (trang A)
- VI: "Doanh nghiệp" → EN: "Company" (trang B)

**Ví dụ ĐÚNG:**
- VI: "Doanh nghiệp" → EN: "Business" (toàn hệ)

### Context Consistency

Cùng context, cùng translation.

**Ví dụ SAI:**
- Context button: "Đăng ký" → "Register"
- Context form: "Đăng ký" → "Sign Up"

**Ví dụ ĐÚNG:**
- Context button: "Đăng ký" → "Register"
- Context form: "Đăng ký" → "Register"

---

## Checklist P1

### Language Codex
- [ ] MASTER LANGUAGE CODEX tồn tại
- [ ] Có file vi.json hoặc LANGUAGE_CODEX_MASTER_VI.md
- [ ] Có file en.json hoặc LANGUAGE_CODEX_MASTER_EN.md
- [ ] Tất cả terms có cặp VI/EN
- [ ] Không có duplicate terms

### Bilingual Consistency
- [ ] Mỗi term có 1 cặp VI/EN duy nhất
- [ ] Không có lung tung translation
- [ ] Context consistent

### Diacritic Rules
- [ ] Vietnamese full diacritics
- [ ] Vietnamese đúng chính tả
- [ ] English natural
- [ ] English consistent capitalization

### Translation Rules
- [ ] 1-to-1 mapping
- [ ] Context consistent
- [ ] No self-translation

---

## Fail Criteria

**FAIL nếu:**
- Không có MASTER LANGUAGE CODEX
- Term có nhiều translation khác nhau
- Vietnamese thiếu diacritics
- English không natural
- Dev tự dịch, tự sáng tác

**PASS nếu:**
- MASTER LANGUAGE CODEX tồn tại
- Tất cả terms có cặp VI/EN duy nhất
- Diacritic rules tuân thủ
- Translation rules tuân thủ

---

## Authority

**Nguồn chân lý:** `/WPAS/02_LANGUAGE_CODEX.md`
**Mọi website, AI Agent, Dev, Content Writer phải tuân thủ.**
**Không được tự dịch, tự đặt tên, tự sáng tác.**
