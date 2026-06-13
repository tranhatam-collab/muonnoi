# 06 — Verbal Identity: Voice, Tone, Naming Convention, Product Copy, Do/Don't List

> Verbal identity là **lớp khóa thứ 3** chống nhầm lẫn (sau ngữ nghĩa và thị giác). 90% brand Việt thất bại ở đây — viết tên mình theo 4 kiểu trên 4 kênh.

---

## A. HƯỚNG DẪN

- Verbal identity bao phủ: **voice** (tính cách giọng) · **tone** (sắc thái theo context) · **naming convention** (cách viết tên brand, sản phẩm, feature) · **product copy** (UI strings, microcopy, notifications) · **do/don't word list** · **mẫu câu chuẩn**.
- Owner: Copywriter trưởng. Approver: Brand Strategist + Founder.
- **Tech note:** DX (Developer Experience) Voice là một layer riêng cho API docs, SDK, CLI, README, technical blog.

---

## B. VOICE — Tính cách giọng (4 trục)

Voice là **cố định** — không đổi theo context.

```
TRỤC 1: Hài hước  <——————●——————>  Nghiêm túc
TRỤC 2: Thân mật  <——————●——————>  Lịch sự xa cách
TRỤC 3: Cảm xúc   <——————●——————>  Sự thật/dữ liệu
TRỤC 4: Khiêm tốn <——————●——————>  Tự tin/quyết đoán
```

### Template điền
```
VOICE — <<Brand>>

Trục 1 (Hài hước <-> Nghiêm túc):       <<-3 -2 -1 0 +1 +2 +3>>   Vị trí: <<...>>
Trục 2 (Thân mật <-> Lịch sự):           <<-3 -2 -1 0 +1 +2 +3>>   Vị trí: <<...>>
Trục 3 (Cảm xúc <-> Sự thật):            <<-3 -2 -1 0 +1 +2 +3>>   Vị trí: <<...>>
Trục 4 (Khiêm tốn <-> Tự tin):          <<-3 -2 -1 0 +1 +2 +3>>   Vị trí: <<...>>

DIỄN GIẢI 1 CÂU:
"Brand nói chuyện như <<...>>: <<5 tính từ>>."
```

### Ví dụ (<<Brand>> — EdTech)
```
Trục 1: -1   (hơi nghiêng nhẹ về thân thiện vui, không phải comedian)
Trục 2: -2   (thân mật rõ rệt — gọi "em", "mình" với học sinh)
Trục 3: 0    (cân bằng — vừa khích lệ cảm xúc, vừa show số liệu tiến bộ)
Trục 4: -1   (khiêm tốn nhẹ — không tự khen, để kết quả tự nói)

DIỄN GIẢI:
"<<Brand>> nói chuyện như cô gia sư trẻ tận tâm: kiên nhẫn, sáng rõ, ấm áp, khoa học, khích lệ."
```

---

## C. TONE — Sắc thái theo Context

Tone **thay đổi** theo tình huống. Voice cố định, tone linh hoạt.

| Context | Tone | Lý do |
|---------|------|-------|
| Onboarding | Ấm áp + chậm rãi | User chưa quen, cần dẫn dắt |
| Hướng dẫn tính năng | Rõ ràng + cụ thể | Cần làm theo được ngay |
| Báo lỗi (error) | Bình tĩnh + có giải pháp | Đừng đổ lỗi user, đưa hành động kế tiếp |
| Chúc mừng thành công | Cụ thể + không phóng đại | "Em làm tốt bước X" hơn "Tuyệt vời!" |
| Email khẩn | Nghiêm túc + minh bạch | Khủng hoảng cần tin tưởng |
| Marketing / Social | Vui + có nhân cách | Cạnh tranh chú ý cần năng lượng |
| Customer support | Đồng cảm + giải pháp | Khách hàng đang khó chịu |
| Legal / hợp đồng | Trung tính + chính xác | Pháp lý không có chỗ cho voice |
| Sa thải / chia tay | Chân thành + tôn trọng | Khoảnh khắc nhạy cảm |
| **API doc / README** | **Rõ ràng + ngắn gọn + có ví dụ** | Developer cần hiểu nhanh, không cần cảm xúc |
| **CLI output** | **Ngắn + actionable + có mã lỗi** | Developer cần parse được |

### Template điền
```
TONE PALETTE — <<Brand>>

| Context                | Tone                  | Mẫu câu mở đầu              |
|------------------------|----------------------|------------------------------|
| Onboarding             | <<...>>              | "<<...>>"                    |
| Error message          | <<...>>              | "<<...>>"                    |
| Success state          | <<...>>              | "<<...>>"                    |
| Marketing social       | <<...>>              | "<<...>>"                    |
| API doc / README       | <<...>>              | "<<...>>"                    |
| CLI output             | <<...>>              | "<<...>>"                    |
```

---

## D. NAMING CONVENTION

### D.1 Brand name usage

| Context | Đúng | Sai |
|---------|------|-----|
| Trong văn bản | <<...>> | <<...>> |
| Trong URL / handle | <<...>> | <<...>> |
| Trong code / dev (variable) | <<...>> | <<...>> |
| Trong hợp đồng / legal | <<...>> | <<...>> |
| Trong meta title (SEO) | <<...>> | <<...>> |
| Trong package name (npm/PyPI) | <<...>> | <<...>> |

### D.2 Product / Feature naming rules

```
CÁC ĐẶT TÊN SẢN PHẨM/FEATURE:

Pattern chung: <<[Brand] [Product] [Feature] / [Brand]-[product]-[feature]>>
Ví dụ: <<Brand>> Math Tutor / <<brand>>-math-tutor

QUY TẮC:
- [ ] Tất cả product name phải bắt đầu bằng brand name (Branded House) hoặc [ ] Không (House of Brands).
- [ ] Feature dùng camelCase trong code: <<...>>
- [ ] Feature dùng Title Case trong UI: <<...>>
- [ ] Không dùng từ chung làm feature name: "Chat", "Message", "Settings" -> phải có prefix brand hoặc modifier.
```

---

## E. PRODUCT COPY — UI Strings & Microcopy

### E.1 Nguyên tắc viết UI copy

1. **Ngắn hơn 2 dòng** — nếu dài hơn, cắt hoặc dùng tooltip.
2. **Bắt đầu bằng động từ** — "Lưu thay đổi" hơn "Thay đổi của bạn sẽ được lưu".
3. **Không dùng "Xin lỗi" khi không phải lỗi hệ thống** — "Bạn chưa có dữ liệu" hơn "Xin lỗi, không có dữ liệu".
4. **Số liệu cụ thể** — "Còn 3 bước" hơn "Sắp xong".
5. **Không dùng chữ in hoa toàn bộ** — trừ khi là acronym hoặc warning ngắn.

### E.2 Template — Error States

| Error type | Tiêu đề | Mô tả | CTA |
|------------|---------|-------|-----|
| 404 | <<...>> | <<...>> | <<...>> |
| 500 | <<...>> | <<...>> | <<...>> |
| Network fail | <<...>> | <<...>> | <<...>> |
| Permission denied | <<...>> | <<...>> | <<...>> |
| Empty state | <<...>> | <<...>> | <<...>> |
| Form validation | <<...>> | <<...>> | <<...>> |

### E.3 Template — Onboarding Microcopy

| Step | Tiêu đề | Mô tả | CTA chính | CTA phụ |
|------|---------|-------|-----------|---------|
| 1 | <<...>> | <<...>> | <<...>> | <<...>> |
| 2 | <<...>> | <<...>> | <<...>> | <<...>> |
| 3 | <<...>> | <<...>> | <<...>> | <<...>> |

---

## F. DO / DON'T WORD LIST

### F.1 Marketing & Brand Copy

| ❌ DON'T | ✅ DO | Lý do |
|----------|-------|-------|
| "Đột phá" | "<<...>>" | Không có bằng chứng |
| "Thành công 100%" | "<<...>>" | Claim không kiểm chứng được |
| "VIP" | "<<...>>" | Gợi MLM/gambling |
| "Ngay lập tức" | "<<...>>" | Không thực tế |
| "Rẻ nhất" | "<<...>>" | Cạnh tranh giá không bền vững |

### F.2 Product & UI Copy

| ❌ DON'T | ✅ DO | Lý do |
|----------|-------|-------|
| "Xin lỗi, đã xảy ra lỗi" | "Không tải được. Thử lại?" | Ngắn gọn, không đổ lỗi |
| "Click here" | "Bắt đầu bài học" | Action rõ ràng, có context |
| "Submit" | "Gửi bài làm" | Cụ thể |
| "Invalid input" | "Nhập số điện thoại 10 chữ số" | Chỉ cách sửa |
| "Loading..." | "Đang chuẩn bị bài học cho em..." | Có thương hiệu, có thông tin |

### F.3 Developer Experience (DX) Copy

| ❌ DON'T | ✅ DO | Lý do |
|----------|-------|-------|
| "Something went wrong" | "Error 422: Invalid parameter `user_id`. Expected UUID v4." | Actionable, parseable |
| "Please refer to docs" | "See `/docs/api/v2/users#create`" | Link cụ thể |
| "You can use this feature" | "Enable with `LUMIO_FEATURE_X=1`" | Code-first |

---

## G. MẪU CÂU CHUẨN (8 Context)

| # | Context | Mẫu câu chuẩn |
|---|---------|---------------|
| 1 | Chào đón user mới | "<<...>>" |
| 2 | Giới thiệu tính năng mới | "<<...>>" |
| 3 | Báo lỗi | "<<...>>" |
| 4 | Chúc mừng thành tựu | "<<...>>" |
| 5 | Yêu cầu hành động | "<<...>>" |
| 6 | Giải thích lý do giá/tính năng | "<<...>>" |
| 7 | Phản hồi phàn nàn | "<<...>>" |
| 8 | Tạm biệt / chia tay | "<<...>>" |

---

**Người duyệt:** __________     **Ngày duyệt:** <<YYYY-MM-DD>>
