# KẾT NỐI MUÔN NƠI — KẾ HOẠCH SẢN PHẨM

**Mã:** `KETNOI_MUONNOI_PRODUCT_PLAN_2026`
**Phiên bản:** v1.0 — DRAFT chờ founder chốt
**Ngày:** 2026-06-05
**Tiền đề:** `KETNOI_MUONNOI_DATING_RESEARCH_REPORT_2026`

---

## 1. TẦM NHÌN SẢN PHẨM

Kết Nối Muôn Nơi không phải app match nhanh. Nó là **không gian kết nối nghiêm túc, an toàn, có trách nhiệm** cho người muốn gặp gỡ thật, hiểu nhau thật, xây dựng quan hệ thật. Sản phẩm hoạt động như **Relationship & Trust Layer** của hệ Muôn Nơi.

### Nguyên tắc bất biến (red-lines)
- Không infinite swipe. Không tối ưu time-spent. Không bán cô đơn.
- Privacy by default. Không tracking ads. Không lộ vị trí chính xác.
- AI chỉ làm safety assistant — không giả danh người dùng.
- Verification self-hosted Zero-Knowledge (qua `verify.iai.one`).
- Không pay-to-match.

---

## 2. KIẾN TRÚC HỆ THỐNG

### 2.1 Sơ đồ

```
        henho.muonnoi.org (Astro static — SEO gateway)
                 │ redirect theo geo + lang
        ┌────────┴─────────┐
        ▼                  ▼
 ketnoi.muonnoi.org   meet.muonnoi.org
 (VN, VI-first)       (Global, EN-first)
 Web Astro+React      Web Astro+React
 + Mobile RN/Expo     + Mobile RN/Expo
        │                  │
        ▼                  ▼
 API VN (residency)   API Global (EU/US)
 Postgres VN+PostGIS  Postgres EU+US replica
        └────────┬─────────┘
                 ▼
   verify.iai.one (alias verify.muonnoi.org)
   - Age assurance (HEAA cho UK)
   - Liveness + selfie match
   - Zero-Knowledge: KHÔNG lưu ID gốc
```

### 2.2 Stack

| Lớp | Công nghệ |
|-----|-----------|
| Web | Astro + React islands |
| Mobile | React Native + Expo SDK 53+ |
| API | Node.js (tRPC/REST), Cloudflare Workers + container ("Hub + Cells") |
| DB | PostgreSQL 2 region + PostGIS (geo mờ) |
| Chat | WebSocket self-hosted (không third-party SDK lưu data ngoài) |
| Verify | `verify.iai.one` self-hosted Zero-Knowledge |
| Media | R2/S3 encryption at rest |
| Auth | Magic link + passkey (WebAuthn) |

### 2.3 Tách region
- DB VN và DB global tách biệt vật lý.
- Không cross-pollinate hồ sơ mặc định. Match VN↔global cần **opt-in + consent chuyển dữ liệu** (đáp ứng PDPL).

---

## 3. TÍNH NĂNG CỐT LÕI (khác thị trường)

| # | Tính năng | Mô tả |
|---|-----------|-------|
| 3.1 | **No Infinite Swipe** | Mỗi ngày 5–12 gợi ý chất lượng. Không endless deck. |
| 3.2 | **Intent-first matching** | Match theo mục tiêu quan hệ, lối sống, giá trị, nhịp sống, ranh giới, location comfort, verified trust |
| 3.3 | **Safe Date Mode** | Địa điểm public, share date plan với contact tin cậy, check-in/out, panic shortcut, after-date reflection, report nhanh |
| 3.4 | **Money Request Shield** | Phát hiện "cho mượn tiền / đầu tư crypto / gửi USDT / emergency / vé máy bay / chuyển khoản" → cảnh báo + có thể tạm giữ chat để user xác nhận |
| 3.5 | **Off-platform Warning** | Cảnh báo khi bị kéo sang Telegram/WhatsApp quá sớm |
| 3.6 | **AI Safety Assistant** | Chỉnh profile chân thật, gợi ý câu hỏi tử tế, phát hiện red flags, tóm tắt mismatch, nhắc consent, cảnh báo scam. KHÔNG tán tỉnh thay user |
| 3.7 | **Transparent Appeal** | Lý do phân loại, appeal, review SLA, không ban vĩnh viễn mù mờ trừ abuse nghiêm trọng |

---

## 4. DANH MỤC "KHÔNG ĐƯỢC CÓ"

hot ranking · body score · ai girlfriend/boyfriend giả · unlock hidden likes mập mờ · pay-to-boost quá mạnh · read receipt ép trả lời · public follower count · public desirability score · crypto/investment dating rooms · exact distance · screenshot không cảnh báo

---

## 5. MÔ HÌNH DOANH THU (không pay-to-match)

| # | Nguồn | Phù hợp red-line |
|---|-------|------------------|
| 1 | **Subscription tiện ích** (bộ lọc nâng cao, travel mode, ẩn ads, ưu tiên hỗ trợ T&S) — KHÔNG bán lợi thế ghép đôi | ✅ Cao |
| 2 | **Sự kiện ngoài đời** (speed-dating, workshop, meetup cộng đồng — Đà Lạt pilot) | ✅ Cao |
| 3 | **Freemium giai đoạn đầu** (free hoàn toàn để xây liquidity) | ✅ Cao |
| 4 | **Partner/affiliate chọn lọc** (đối tác địa phương, KHÔNG bán data) | ⚠️ Vừa |

**Khuyến nghị LOCK:**
- **Phase 1 (0–6 tháng):** Free hoàn toàn — sống còn cho liquidity.
- **Phase 2 (6–12 tháng):** Subscription tiện ích (không đụng ghép đôi). Subscription chiếm >50% doanh thu thị trường, ổn định nhất.
- **Phase 3 (12 tháng+):** Sự kiện Muôn Nơi.
- **Tránh tuyệt đối:** "hard gate" (bắt trả tiền mới nhắn).

---

## 6. LỘ TRÌNH TRIỂN KHAI

### Phase 0 — Pháp lý & nền móng (Tháng 1–2) ⚠️ GATE
- [ ] Privacy/safety counsel review: UK OSA risk assessment + PDPL TIA dossier (Bộ Công an).
- [ ] 2 region DB (global EU/US + VN residency).
- [ ] `verify.iai.one` Zero-Knowledge (age + liveness, không lưu ID gốc) + alias `verify.muonnoi.org`.
- [ ] Terms + Privacy Policy 3 region.

### Phase 1 — MVP (Tháng 3–5)
- [ ] Astro web (ketnoi + meet) + RN/Expo mobile.
- [ ] Profile Trust+Intent+Life Compatibility (xem PROFILE spec).
- [ ] Verification 5 tier (xem PRIVACY_SAFETY spec).
- [ ] Chat WebSocket self-hosted + an toàn nữ giới.
- [ ] Money Request Shield + Off-platform Warning + Safe Date Mode.
- [ ] Geo mờ (PostGIS) + hard-delete thật.
- [ ] `henho` SEO gateway + redirect + hreflang.

### Phase 2 — Pilot Đà Lạt (Tháng 6–7)
- [ ] Tích hợp cộng đồng Muôn Nơi (Local Hosts, quests).
- [ ] Sự kiện speed-dating offline thử nghiệm.
- [ ] Free hoàn toàn.

### Phase 3 — Monetize + mở rộng (Tháng 8–12)
- [ ] Subscription tiện ích.
- [ ] Mở rộng quốc tế qua `meet`.
- [ ] Đo retention, an toàn, tỷ lệ verify thành công.

---

## 7. CHỈ SỐ THÀNH CÔNG (đo điều đúng, không đo "nghiện")

| Đo | KHÔNG đo |
|----|----------|
| Tỷ lệ verify thành công | Time-spent / session length |
| Tỷ lệ gặp offline an toàn (qua Safe Date Mode) | Match count thuần |
| Tỷ lệ report được xử lý đúng SLA | Daily swipe volume |
| Tỷ lệ scam bị chặn | Số notification gửi đi |
| Retention 30/90 ngày dựa trên kết nối thật | "Addiction" metrics |

---

## 8. QUYẾT ĐỊNH CÒN LẠI CẦN FOUNDER CHỐT

1. **Verify provider:** tự xây hoàn toàn `verify.iai.one`, hay dùng nhà cung cấp HEAA-certified (Yoti/Persona/Shufti, iBeta PAD L3) cho riêng phần UK rồi vẫn giữ Zero-Knowledge?
2. **Cross-region matching:** cho phép VN↔global (opt-in) hay khóa cứng để giảm rủi ro PDPL?
3. **Free Phase 1** kéo dài tới ngưỡng liquidity nào?
4. **An toàn nữ giới ("nữ nhắn trước"):** cả 2 region hay chỉ VN?
5. **Counsel:** chọn luật sư UK (Ofcom) + VN (Bộ Công an/TIA) — cần 2 cố vấn.

---

*DRAFT — chờ duyệt mục 8 trước khi LOCK + dev handoff.*
