# 02 — Brand Forensics: Điều tra Va chạm trước khi Thiết kế

> Mục tiêu: dựng **bản đồ va chạm thương hiệu** trên 6 trục — domain, SERP, trademark, social, phonetic, code repo — để đầu vào của Risk Matrix (file 03) không bị thiếu.

---

## A. HƯỚNG DẪN

- Pha này là **bắt buộc** trước mọi hoạt động thiết kế.
- Mỗi audit là một bảng có thể điền trên Google Sheet/Airtable.
- Quy tắc bằng chứng: mỗi dòng audit phải có **nguồn URL + ngày kiểm tra**.
- Thời gian tối thiểu: **5 ngày** cho VN + EN. Đa thị trường: 8–10 ngày.

---

## B. AUDIT 1 — Domain Sweep

### B.1 Phạm vi quét

**TLD chính:** `.com` `.net` `.org` `.co` `.io` `.ai` `.app` `.dev` `.vn` `.com.vn` `.tech` `.global` `.world`

**TLD ngành (nếu áp dụng):**
- F&B: `.menu` `.cafe` `.restaurant`
- Edtech: `.academy` `.school` `.education`
- Fintech: `.finance` `.money` `.bank`
- Health: `.health` `.clinic`
- Media: `.media` `.news` `.tv`

**Biến thể tên cần quét:**
- Có gạch nối: `tenbrand-vn.com`
- Số thay chữ: `tenbr4nd.com`
- Số nhiều / ít: `tenbrand.com` vs `tenbrands.com`
- Viết tắt: `tb.com`
- Tiền tố/hậu tố: `gettenbrand.com`, `tenbrandapp.com`, `tenbrandhq.com`, `mytenbrand.com`

### B.2 Template bảng

| Domain | Status | Owner (WHOIS) | Active site? | Industry | Traffic | Threat | Hành động |
|--------|--------|---------------|--------------|----------|---------|--------|-----------|
| `<<tên>>.com` | Taken/Available | <<...>> | Yes/No/Parked | <<...>> | Low/Med/High | High/Med/Low | Buy / Coexist / Avoid |
| `<<tên>>.vn` | ... | ... | ... | ... | ... | ... | ... |

### B.3 Output bắt buộc

- [ ] Bảng quét tối thiểu **20 domain biến thể**.
- [ ] Liệt kê 3–5 typosquatting domain đáng mua phòng vệ (xem file 11).

---

## C. AUDIT 2 — SERP Fingerprint

### C.1 Phạm vi

Search tên brand trên: Google.com (EN), Google.com.vn, Bing, Baidu (nếu target TQ), DuckDuckGo, Google Images, Google Maps, LinkedIn, App Store + Play Store, YouTube.

### C.2 Quy trình

1. Incognito/private mode.
2. Search tên chính xác trong dấu ngoặc kép `"tên brand"`.
3. Chụp ảnh 3 trang đầu (30 kết quả).
4. Liệt kê: **top 10 entity**, ngành, độ mạnh (DR/DA).
5. Search không ngoặc kép -> so sánh.

### C.3 Template

```
Engine: <<...>>      Locale: <<...>>      Ngày: <<YYYY-MM-DD>>
Top 10 kết quả:
1. <<Tên>> — <<URL>> — Ngành: <<...>> — DR/DA: <<...>>
2. ...
Knowledge Panel xuất hiện cho: <<entity nào>>
```

---

## D. AUDIT 3 — Trademark Check

### D.1 Template

| Cơ quan | Class | Số đơn | Tên đơn | Status | Ngày nộp | Chủ sở hữu | Va chạm? |
|---------|-------|--------|---------|--------|----------|------------|----------|
| IPVN | <<...>> | <<...>> | <<...>> | Đã cấp/Đang xử lý/Từ chối | <<...>> | <<...>> | Có/Không |
| WIPO | <<...>> | <<...>> | <<...>> | ... | ... | ... | ... |
| USPTO | <<...>> | <<...>> | <<...>> | ... | ... | ... | ... |

---

## E. AUDIT 4 — Social Handle Audit (15 nền tảng)

| Nền tảng | Handle ideal | Status | URL | Followers | Active? | Hành động |
|----------|--------------|--------|-----|-----------|---------|-----------|
| Facebook / Meta | @<<...>> | Available/Taken | <<...>> | <<...>> | Yes/No | Register/Negotiate/Avoid |
| Instagram | @<<...>> | ... | ... | ... | ... | ... |
| LinkedIn | company/<<...>> | ... | ... | ... | ... | ... |
| X (Twitter) | @<<...>> | ... | ... | ... | ... | ... |
| YouTube | @<<...>> | ... | ... | ... | ... | ... |
| TikTok | @<<...>> | ... | ... | ... | ... | ... |
| Threads | @<<...>> | ... | ... | ... | ... | ... |
| Pinterest | @<<...>> | ... | ... | ... | ... | ... |
| GitHub | <<...>> | ... | ... | ... | ... | ... |
| GitLab | <<...>> | ... | ... | ... | ... | ... |
| npm / PyPI / Cargo | <<...>> | ... | ... | ... | ... | ... |
| Discord | <<...>> | ... | ... | ... | ... | ... |
| Telegram | <<...>> | ... | ... | ... | ... | ... |
| Reddit | r/<<...>> | ... | ... | ... | ... | ... |
| App Store (bundle ID) | com.<<...>> | ... | ... | ... | ... | ... |

---

## F. AUDIT 5 — Phonetic Clash Test

### F.1 Template

| Ngôn ngữ | Người test | Nghe được | Phát âm lại | Liên tưởng đến brand khác? | Ghi chú |
|----------|------------|-----------|-------------|-----------------------------|---------|
| Tiếng Việt | <<...>> | <<...>> | <<...>> | Có/Không — brand: <<...>> | <<...>> |
| Tiếng Anh | <<...>> | <<...>> | <<...>> | Có/Không — brand: <<...>> | <<...>> |
| Tiếng Trung | <<...>> | <<...>> | <<...>> | Có/Không — brand: <<...>> | <<...>> |

---

## G. AUDIT 6 — Code Repo / Package Name (Tech)

### G.1 Template

| Registry | Name ideal | Status | Owner (nếu taken) | Last update | Hành động |
|----------|------------|--------|-------------------|-------------|-----------|
| GitHub org | `<<...>>` | Available/Taken | <<...>> | <<...>> | Create/Negotiate/Modify |
| npm package | `<<...>>` | ... | ... | ... | ... |
| PyPI | `<<...>>` | ... | ... | ... | ... |
| Docker Hub | `<<...>>` | ... | ... | ... | ... |
| Homebrew tap | `<<...>>` | ... | ... | ... | ... |
| VS Code extension | `<<...>>` | ... | ... | ... | ... |

---

## H. TỔNG HỢP OUTPUT

Sau 6 audit, tổng hợp thành input cho file 03 (Risk Matrix):

| Va chạm | Loại | Mức độ (High/Med/Low) | Cần hành động gì? |
|---------|------|----------------------|-------------------|
| <<...>> | Domain / SERP / TM / Social / Phonetic / Code | <<...>> | <<...>> |

---

**Người duyệt:** __________     **Ngày duyệt:** <<YYYY-MM-DD>>
