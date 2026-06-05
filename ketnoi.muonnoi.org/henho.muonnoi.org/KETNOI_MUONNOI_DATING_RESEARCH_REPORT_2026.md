# KẾT NỐI MUÔN NƠI — BÁO CÁO NGHIÊN CỨU HỢP NHẤT

**Mã:** `KETNOI_MUONNOI_DATING_RESEARCH_REPORT_2026`
**Phiên bản:** v1.0
**Ngày:** 2026-06-05
**Trạng thái:** Báo cáo nền — đầu vào cho PRODUCT_PLAN, PRIVACY_SAFETY_SPEC, PROFILE_AND_MATCHING_SPEC

---

## 0. PHÁN QUYẾT NỀN TẢNG

**Không làm dating app kiểu Tinder/Bumble.** Làm **Relationship & Trust Layer của Muôn Nơi**: kết nối nghiêm túc, an toàn, có xác minh, có ranh giới, có mục đích — không swipe gây nghiện, không khai thác cô đơn để bán premium.

### Định vị một câu
> Kết Nối Muôn Nơi là **lớp kết nối quan hệ an toàn, có xác minh, có ranh giới, có mục đích và có trách nhiệm** trong hệ Muôn Nơi.

- **Tên VI:** Kết Nối Muôn Nơi
- **Tên EN:** Muon Noi Connect
- **Tagline VI:** Gặp người thật. Hiểu nhau thật. Tôn trọng ranh giới thật.
- **Tagline EN:** Meet real people. Build real trust. Respect real boundaries.

---

## 1. CẤU TRÚC SUBDOMAIN (HỢP NHẤT — CHỐT)

| Subdomain | Vai trò | Ngôn ngữ | Region/DB |
|-----------|---------|----------|-----------|
| **`ketnoi.muonnoi.org`** | **Main product** + app chính VN | VI-first | VN residency (PDPL) |
| **`meet.muonnoi.org`** | App quốc tế / English alias | EN-first | Global (EU/US) |
| **`henho.muonnoi.org`** | SEO gateway + Vietnamese landing | VI + EN | Static, no PII |

**Logic định tuyến:**
- `henho` = cổng SEO bắt từ khóa "hẹn hò" → redirect theo geo/lang.
- `geo = VN` hoặc `lang = vi` → `ketnoi.muonnoi.org`
- `geo = non-VN` hoặc `lang = en` → `meet.muonnoi.org`
- hreflang + canonical giữa 3 domain để tránh phạt duplicate-content.

> **Lý do đặt `ketnoi` làm chính:** "hẹn hò" quá hẹp và dễ bị hiểu là casual dating; "kết nối" rộng hơn (tình yêu, bạn đời, bạn đồng hành, bạn đi, bạn học, gia đình tương lai), an toàn, đúng tinh thần Muôn Nơi — vẫn chứa hẹn hò bên trong.

---

## 2. SÁU VẤN ĐỀ LỚN CỦA DATING APP HIỆN NAY (+ bài học)

| # | Vấn đề | Bằng chứng | Bài học cho Muôn Nơi |
|---|--------|-----------|----------------------|
| 2.1 | **Swipe fatigue / kiệt sức cảm xúc** | App biến người thành lựa chọn tiêu dùng; Bumble đang cố giảm phụ thuộc swipe, dùng AI kết nối sâu hơn | Không swipe vô tận; không tối ưu match count / time spent |
| 2.2 | **Romance scam** | FTC + FBI: hồ sơ giả → xây lòng tin → xin tiền (vé máy bay, phẫu thuật, đầu tư, crypto) | Chặn chuyển tiền; cảnh báo off-platform, đầu tư/crypto; review khi đề nghị vay |
| 2.3 | **Fake profiles / bot / catfishing** | Phân tích review 2026: fake/bot/scam là nhóm phàn nàn lớn; report "không tác dụng" | Verification nhiều tầng (ảnh thật, liveness, phone/email, ID optional, community trust, report SLA) |
| 2.4 | **Quấy rối / stalking / repeat offender** | Block không đủ vì tạo tài khoản mới được; case an toàn phụ nữ, report chậm | Repeat-offender detection, device/phone risk signals, panic/report flow, safety check-in |
| 2.5 | **Bảo mật dữ liệu nhạy cảm** | Forensic: khôi phục được chat ở ≥1/2 app kiểm tra; đôi khi lộ dữ liệu người gần | Data minimization; retention chat ngắn + mã hóa; export/delete rõ; không public vị trí chính xác |
| 2.6 | **AI làm scam nguy hiểm hơn** | LLM tự động hóa hội thoại scam tình cảm, tạo lòng tin/compliance cao hơn người; safety filter phát hiện kém | KHÔNG dùng AI làm "người yêu ảo"; AI chỉ là safety assistant / red-flag detector |

---

## 3. RỦI RO PHÁP LÝ (CẬP NHẬT 2026 — quan trọng)

### 3.1 Cập nhật then chốt: Việt Nam đã đổi luật
- **PDPD (NĐ 13/2023) đã bị thay thế** bởi **PDPL — Luật 91/2025/QH15**, hiệu lực **01/01/2026**, kèm **Nghị định 356/2025/NĐ-CP** (ban hành 31/12/2025).
- PDPL nâng từ nghị định lên **luật**, lần đầu có **chế tài tài chính cụ thể**:
  - Chuyển dữ liệu xuyên biên giới trái phép: **tới 5% doanh thu năm trước** hoặc **3 tỷ VND**.
  - Mua bán dữ liệu cá nhân: tới **10 lần khoản thu lợi**.
  - Vi phạm khác: trần **3 tỷ VND**.
- Phạm vi mở rộng: bao phủ **mọi dữ liệu thu thập tại VN bất kể quốc tịch**, kể cả **xử lý dữ liệu công dân VN trên server ngoài VN**.
- Phải nộp **TIA (Đánh giá Tác động Chuyển Dữ liệu)** cho **Bộ Công an** — nay nộp **một lần** rồi cập nhật.

> **→ Hệ quả:** Dữ liệu người dùng VN (qua `ketnoi`) cần **data residency VN**. Đây là lý do kỹ thuật để tách region VN khỏi global.

### 3.2 Ma trận tuân thủ đa khu vực (vì chọn "global ngay")

| Khu vực | Luật | Age-assurance | Phạt tối đa |
|---------|------|--------------|-------------|
| **UK** | Online Safety Act 2023 | **HEAA bắt buộc** — tự khai "18+" KHÔNG còn hợp lệ | **10% doanh thu toàn cầu** / £18M + lãnh đạo tù tới 2 năm |
| **EU/EEA** | GDPR + DSA | risk-based (DSA) | tới 4% doanh thu toàn cầu (GDPR) |
| **US** | FTC Act + CA AB 1043 | age-bracket signal từ OS/app store | theo từng vụ |
| **Vietnam** | PDPL 91/2025 + NĐ 356/2025 | xác minh thật | 5% doanh thu (xuyên biên giới) |

### 3.3 Bài học từ vụ FTC vs OkCupid/Match
- FTC đề xuất **lệnh 20 năm + bồi thường $14M** vì OkCupid tuồn **~3 triệu ảnh riêng tư** cho công ty AI Clarifai, **không cho opt-out**.
- **→ Red-line tuyệt đối:** Verification phải **Zero-Knowledge, self-hosted**, KHÔNG để bên thứ ba chạm vào dữ liệu sinh trắc.

### 3.4 Danh mục P0 (không thể bỏ qua)
- **An toàn trẻ vị thành niên:** 18+ only, age gate, ID/liveness khi nghi ngờ, CSAM zero tolerance, mandatory report flow.
- **Consent & quấy rối:** cấm ảnh nhạy cảm không yêu cầu, ép gặp, đe dọa, stalking, doxxing, revenge porn, trafficking.
- **Romance scam / tài chính:** cấm/cảnh báo xin tiền, vay, crypto/investment pitch, link ví, "emergency money", kéo sang Telegram/WhatsApp quá sớm.
- **Quyền riêng tư:** data minimization, delete account/chats, block/report, hidden mode, no exact location, no tracking ads, privacy by default.
- **App Store / Google Play:** tuân thủ rule dating + user-generated content.

---

## 4. NHỮNG ĐIỀU NGƯỜI DÙNG GHÉT NHẤT (+ cách làm khác)

| Vấn đề | Tác hại | Muôn Nơi làm khác |
|--------|---------|-------------------|
| Swipe vô tận | Mệt, nghiện, hời hợt | Giới hạn match mỗi ngày |
| Fake profile | Mất niềm tin | Verification nhiều tầng |
| Ghosting | Mất năng lượng | Conversation intent + timeout nhẹ |
| Paywall vô lý | Cảm giác bị bóp reach | Minh bạch thuật toán, không bán "tàng hình/hiện hình" |
| Scammer | Mất tiền, tổn thương | Anti-scam detector + money request warning |
| Quấy rối | Nguy hiểm | Report SLA + repeat-offender detection |
| Lộ vị trí | Stalking | Không hiện distance chính xác |
| AI giả tạo | Mất authenticity | AI chỉ hỗ trợ, không giả danh |
| Bị ban sai | Mất tài khoản | Appeal process rõ |
| Match sai nhu cầu | Lãng phí | Intent-first profile |

---

## 5. TÍCH HỢP HỆ MUÔN NƠI

```
ketnoi.muonnoi.org (main)  +  meet.muonnoi.org (global)  +  henho.muonnoi.org (SEO)
  ↔ app.muonnoi.org       : account / social core
  ↔ verify.iai.one        : verification LÕI (alias: verify.muonnoi.org)
  ↔ family.muonnoi.org    : long-term / family values
  ↔ dulich.muonnoi.org    : safe travel companion
  ↔ cuocsong.muonnoi.org  : life profile
  ↔ hoctap.muonnoi.org    : learning interests
  ↔ congdong.muonnoi.org  : community contribution
```

> **Verification:** lõi kỹ thuật chạy trên **`verify.iai.one`** (dùng chung toàn hệ IAI), expose alias **`verify.muonnoi.org`** cho người dùng Muôn Nơi. Điểm khác biệt cốt lõi: kết nối dựa trên **đời sống thật + tín nhiệm thật**, không chỉ ảnh.

---

## 6. SEO SONG NGỮ

**Tiếng Việt:** ứng dụng hẹn hò nghiêm túc · hẹn hò an toàn · hẹn hò người Việt · tìm bạn đời · kết nối nghiêm túc · hẹn hò không lừa đảo · hẹn hò có xác minh · hẹn hò Muôn Nơi

**English:** safe dating app · serious relationship app · verified dating app · privacy-first dating · anti-scam dating app · meaningful dating · relationship app · Vietnamese dating app global

---

## 7. BẢY ĐIỀU KHÔNG ĐƯỢC LÀM (kết luận)

1. Không swipe vô tận.
2. Không bán cô đơn.
3. Không khai thác dữ liệu nhạy cảm.
4. Không cho scammer sống dễ.
5. Không dùng AI để giả người.
6. Không hứa tìm được tình yêu.
7. Không biến con người thành hàng hóa.

---

*Báo cáo nền hoàn tất. Đầu vào cho 3 spec tiếp theo.*
