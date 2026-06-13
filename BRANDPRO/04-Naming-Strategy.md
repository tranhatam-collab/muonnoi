# 04 — Naming Strategy: Quyết định Tên & Chiến lược Va chạm

> Sau khi Risk Matrix (file 03) đã quyết định "giữ / đổi / modifier / mua", file này dẫn quá trình **chốt tên cuối** + **chiến lược coexist** với các đối thủ trùng tên.

---

## A. HƯỚNG DẪN

- Naming là quyết định **dài hạn nhất** của brand. Đổi tên sau 2 năm = đập đi làm lại 70% tài sản brand.
- Workshop naming nên có **3–5 người**: founder, strategist, copywriter, 1–2 stakeholder ngoài team.
- Tên cuối phải pass **6 tiêu chí** + **3 test thực địa** + **code repo check** trước khi lock.

---

## B. 6 TIÊU CHÍ đánh giá tên (Naming Rubric)

Mỗi candidate name chấm điểm 1–5 trên 6 tiêu chí. Tổng điểm >= 24/30 mới đủ shortlist.

| # | Tiêu chí | 1 (Tệ) | 3 (Khá) | 5 (Xuất sắc) |
|---|----------|--------|---------|--------------|
| 1 | **Memorable** | Khó nhớ sau 1 lần nghe | Nhớ sau 3–4 lần | Nhớ ngay lần đầu |
| 2 | **Distinctive** | Trùng nhiều brand | Có vài trùng nhẹ | Duy nhất trong ngành |
| 3 | **Available** | .com taken + TM blocked | .com available, vài social taken | Tất cả TLD chính + 12+ social + repo available |
| 4 | **Scalable** | Bó hẹp 1 sản phẩm/khu vực | Mở rộng giới hạn | Mở rộng đa ngành/đa quốc gia |
| 5 | **Transcreatable** | Khó đọc/viết ở 1+ ngôn ngữ target | Đọc OK nhưng có liên tưởng lệch | Đọc đúng + ý nghĩa trung tính cả 3 ngôn ngữ |
| 6 | **Pronounceable** | Người không bản xứ phát âm sai > 50% | Sai 20–40% | Sai < 10%, phonetic test PASS |

### Template chấm điểm

| Candidate | Mem | Dis | Ava | Sca | Trans | Pro | Tổng /30 | Shortlist? |
|-----------|-----|-----|-----|-----|-------|-----|----------|------------|
| <<Name 1>> | | | | | | | | [ ] |
| <<Name 2>> | | | | | | | | [ ] |
| <<Name 3>> | | | | | | | | [ ] |

---

## C. 3 TEST thực địa + Code Check

### Test 1 — Recall Test
- Mời 10 người không biết brand. Đọc tên + 1 câu mô tả ngành. 24h sau hỏi lại.
- **Pass:** >= 7/10 nhớ chính xác chính tả.

### Test 2 — Type Test
- Mời 10 người gõ tên brand vào address bar **không nhìn ghi sẵn**, chỉ nghe đọc.
- **Pass:** >= 8/10 gõ đúng từ lần đầu.

### Test 3 — Voice Test (Trợ lý giọng nói)
- "Hey Siri, search for `<<tên brand>>`" / "OK Google, tell me about `<<tên brand>>`".
- Test trên 3 thiết bị: iPhone, Android, Google Home.
- **Pass:** assistant nhận đúng >= 8/10 lần.

### Test 4 — Code Repo Check (Tech)
- Kiểm tra GitHub org, npm/PyPI package, Docker Hub, Homebrew tap.
- **Pass:** >= 80% registries available.

---

## D. Quyết định cuối — Naming Decision Document

```
NAMING DECISION — <<Tên dự án>>
Ngày: <<YYYY-MM-DD>>

I. CANDIDATES ĐÃ XEM XÉT

| # | Tên | Tổng rubric | Recall | Type | Voice | Code | Quyết định |
|---|-----|-------------|--------|------|-------|------|------------|
| 1 | <<>> | /30 | /10 | /10 | /10 | /10 | shortlist / loại |
| 2 | <<>> | /30 | /10 | /10 | /10 | /10 | shortlist / loại |
| 3 | <<>> | /30 | /10 | /10 | /10 | /10 | CHỌN |

II. TÊN CUỐI

Tên đầy đủ: <<...>>
Cách viết duy nhất (legal): <<...>>
Cách viết display (logo): <<...>>
Phát âm chuẩn (IPA): /<<...>>/
Cách phát âm Việt hóa: <<...>>

III. NGUỒN GỐC & CÂU CHUYỆN
- Ý nghĩa: <<...>>
- Nguồn cảm hứng: <<...>>
- Câu chuyện 30 giây: <<...>>

IV. RÀNG BUỘC SỬ DỤNG
- KHÔNG được viết: <<...>>
- KHÔNG được dịch sang: <<...>>
- KHÔNG được rút gọn thành: <<...>>
- Trong code (repo name): <<...>> (kebab-case / camelCase / snake_case)
- Package name (npm/PyPI): <<...>>

V. NGƯỜI DUYỆT

Founder/Brand Owner: __________     Ngày: <<YYYY-MM-DD>>
Brand Strategist:    __________     Ngày: <<YYYY-MM-DD>>
Legal:               __________     Ngày: <<YYYY-MM-DD>>
Dev/Tech Lead (nếu tech): __________ Ngày: <<YYYY-MM-DD>>
```

---

**Người duyệt:** __________     **Ngày duyệt:** <<YYYY-MM-DD>>
