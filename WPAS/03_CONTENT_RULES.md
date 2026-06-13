# P2 — CONTENT CONSISTENCY AUDIT
# P2 — CONTENT CONSISTENCY AUDIT

**System:** Website Production Acceptance System (WPAS)
**Version:** 1.0
**Created:** 2026-06-08
**Scope:** Toàn bộ hệ sinh thái website

---

## Mục tiêu

Kiểm tra toàn bộ content trên website để đảm bảo:
- Không quảng cáo quá mức
- Không overclaim
- Không hứa hẹn
- Không thần thánh hóa
- Không giật tít

---

## Scope

Kiểm tra toàn bộ:

- Landing page
- Blog posts
- Documentation
- FAQ
- Legal pages
- Pricing page
- Checkout flow
- Email templates
- Dashboard
- App UI
- Marketing materials

---

## Content Rules

### 1. No Overclaim

**Quy tắc:** Không được hứa hẹn quá khả năng thực tế.

**Ví dụ FAIL:**
- "AI thông minh nhất thế giới"
- "Giải pháp hoàn hảo 100%"
- "Không bao giờ thất bại"
- "Tăng doanh thu 1000% ngay lập tức"

**Ví dụ PASS:**
- "Một hệ AI Computer được thiết kế để hỗ trợ công việc tri thức"
- "Giải pháp tối ưu hóa quy trình làm việc"
- "Giảm thời gian xử lý 30-50%"
- "Hỗ trợ tăng hiệu suất làm việc"

### 2. No Thần Thánh Hóa

**Quy tắc:** Không được thần thánh hóa sản phẩm/dịch vụ.

**Ví dụ FAIL:**
- "Sản phẩm thay đổi cuộc sống của bạn mãi mãi"
- "Công nghệ đột phá vũ trụ"
- "Giải pháp cứu rỗi nhân loại"

**Ví dụ PASS:**
- "Sản phẩm hỗ trợ cải thiện quy trình làm việc"
- "Công nghệ tối ưu hóa hiệu suất"
- "Giải pháp hỗ trợ doanh nghiệp"

### 3. No Giật Tít

**Quy tắc:** Tiêu đề phải phản ánh nội dung thực tế.

**Ví dụ FAIL:**
- "BÍ MẬT ĐỔI SỐNG MÀ KHÔNG AI BIẾT"
- "CÁCH KIẾM TIỀN TRIỆU ĐÔ TRONG 1 NGÀY"
- "SỰ THẬT VỀ AI MÀ GOOGLE KHÔNG MUỐN BẠN BIẾT"

**Ví dụ PASS:**
- "Cách tối ưu hóa quy trình làm việc với AI"
- "5 chiến lược tăng hiệu suất làm việc"
- "Giới thiệu hệ AI Computer cho doanh nghiệp"

### 4. No Quảng Cáo Quá Mức

**Quy tắc:** Content phải có giá trị thực, không chỉ quảng cáo.

**Ví dụ FAIL:**
- Toàn bài là quảng cáo sản phẩm
- Không có thông tin hữu ích
- Call-to-action quá nhiều
- Spam từ khóa

**Ví dụ PASS:**
- Cung cấp thông tin hữu ích
- CTA phù hợp context
- Từ khóa tự nhiên
- Giá trị thực cho người đọc

---

## Content Structure Rules

### Hierarchy

**Quy tắc:** Không được nhảy cấp heading.

**Ví dụ FAIL:**
```html
<h1>Tiêu đề chính</h1>
<h3>Phần phụ</h3>  <!-- Nhảy từ H1 sang H3 -->
<h5>Chi tiết</h5>  <!-- Nhảy từ H3 sang H5 -->
```

**Ví dụ PASS:**
```html
<h1>Tiêu đề chính</h1>
<h2>Phần chính</h2>
<h3>Chi tiết</h3>
```

### Title Consistency

**Quy tắc:** Title, Description, CTA phải đồng bộ.

**Ví dụ FAIL:**
- Title: "Đăng ký tài khoản"
- Description: "Tạo tài khoản mới để bắt đầu"
- CTA: "Tham gia ngay"

**Ví dụ PASS:**
- Title: "Đăng ký tài khoản"
- Description: "Tạo tài khoản mới để bắt đầu"
- CTA: "Đăng ký"

---

## Content Quality Rules

### Clarity

**Quy tắc:** Content phải rõ ràng, dễ hiểu.

**Kiểm tra:**
- ✅ Câu ngắn, dễ đọc
- ✅ Không jargon không cần thiết
- ✅ Giải thích thuật ngữ nếu dùng
- ✅ Ví dụ cụ thể

### Accuracy

**Quy tắc:** Content phải chính xác.

**Kiểm tra:**
- ✅ Số liệu chính xác
- ✅ Thông tin có thể kiểm chứng
- ✅ Không sai lệch sự thật
- ✅ Update nếu có thay đổi

### Relevance

**Quy tắc:** Content phải phù hợp với target audience.

**Kiểm tra:**
- ✅ Ngôn ngữ phù hợp
- ✅ Ví dụ phù hợp
- ✅ Context phù hợp
- ✅ Tone phù hợp

---

## Checklist P2

### Content Rules
- [ ] Không overclaim
- [ ] Không thần thánh hóa
- [ ] Không giật tít
- [ ] Không quảng cáo quá mức

### Content Structure
- [ ] Hierarchy đúng (H1 → H2 → H3)
- [ ] Title, Description, CTA đồng bộ
- [ ] Không nhảy cấp heading

### Content Quality
- [ ] Clarity (rõ ràng, dễ hiểu)
- [ ] Accuracy (chính xác)
- [ ] Relevance (phù hợp audience)

### Scope Coverage
- [ ] Landing page
- [ ] Blog posts
- [ ] Documentation
- [ ] FAQ
- [ ] Legal pages
- [ ] Pricing page
- [ ] Checkout flow
- [ ] Email templates
- [ ] Dashboard
- [ ] App UI

---

## Fail Criteria

**FAIL nếu:**
- Có overclaim
- Có thần thánh hóa
- Có giật tít
- Quảng cáo quá mức
- Hierarchy sai
- Title/Description/CTA không đồng bộ
- Content không rõ ràng
- Content không chính xác

**PASS nếu:**
- Tất cả content rules tuân thủ
- Hierarchy đúng
- Title/Description/CTA đồng bộ
- Content quality tốt

---

## Authority

**Nguồn chân lý:** `/WPAS/03_CONTENT_RULES.md`
**Mọi content writer, AI Agent, Dev phải tuân thủ.**
**Không được tự sáng tác content vi phạm rules.**
