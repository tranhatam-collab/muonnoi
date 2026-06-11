# KẾT NỐI MUÔN NƠI — AUDIT VẬN HÀNH ĐỘC LẬP
# Operational Readiness Audit — "Vận hành sản phẩm thật 100% cần gì nữa?"

> **Ngày:** 2026-06-11
> **Người audit:** Claude agent (đọc code thật + docs, không chấm suông)
> **Phạm vi:** `ketnoi.muonnoi.org` + `henho.muonnoi.org` + apps/web + apps/api
> **Câu hỏi:** Để vận hành sản phẩm truyền thông/kết nối thật 100%, còn thiếu gì?
> **Điểm vận hành thật:** **~45–50%** (MVP kỹ thuật mạnh, nhưng monetization + trust-safety ops + deploy domain + legal sign-off chưa xong)

> ⚠️ Không phải lời khuyên pháp lý. Phần legal sign-off (gift economy, age, content) cần luật sư thật.

---

## 1. ✅ ĐÃ BUILD THẬT (verify bằng đọc code — ghi nhận công bằng)

Đây là build **thật, vượt xa docs-only**. Bằng chứng:

| Mảng | Trạng thái | Bằng chứng |
|------|-----------|-----------|
| **Web app** | ✅ 45 file nguồn | Astro 5 + React 19, 23 trang (VI+EN), PWA (manifest+sw), components (Hero/Login/Register/Profile/MatchCard/ChatWindow/AuthGuard/NotificationBell) |
| **API** | ✅ 18 file nguồn | Hono/CF Worker, routes: auth, user, match, chat, verify, safety, notification, health; middleware auth/rate-limit/error |
| **Auth** | ✅ Live | Magic-link end-to-end (tested), WebAuthn (COSE/CBOR) |
| **DB** | ✅ 10 bảng D1 | users, profiles, sessions, matches, conversations, messages, notifications, **reports, blocks, audit_logs** |
| **Matching** | ✅ | suggestions + like/pass + connections |
| **Chat real-time** | ✅ | Durable Object WebSocket |
| **Safety pipeline** | ✅ một phần | safety route scam-check trên message |
| **Hạ tầng** | ✅ | Pages + Worker live, KV, R2 bucket, D1, CI (`.github/workflows/deploy.yml`), test (vitest+playwright), audit scripts (security/i18n/a11y) |
| **Verification levels** | ✅ migration | `0007_add_verification_levels` |

→ **MVP kết nối/dating chạy được.** Đây là tài sản thật, không phải giấy.

---

## 2. 🔴 KHOẢNG CÁCH DOCS ↔ CODE (cái được viết nhưng KHÔNG được build)

Vấn đề lớn nhất: **38 docs (nhiều file 10–20k từ) nhưng nhiều phần cốt lõi 0% code.**

| Tính năng | Docs | Code | Khoảng cách |
|-----------|:----:|:----:|-------------|
| **Gift economy (quà/điểm/sao)** | 3 file ~33k từ | ❌ **KHÔNG bảng, KHÔNG route** | grep: 0 bảng wallet/points/gift trong migrations; 0 route payment/gift trong API |
| **9-level membership** | 14k từ spec | ❌ Không bảng membership/level | Chỉ có `verification_levels` (khác) |
| **Thanh toán (pay.iai.one)** | nhiều | ❌ Chưa wire | Không route payment |
| **Moderation operations** | manual đầy đủ | ⚠️ Data layer có (reports/blocks/audit_logs), **thiếu admin tooling** | Không thấy admin/dashboard UI |
| **Age assurance** | policy doc | ⚠️ Chưa rõ enforce | Không thấy age-gate trong code |
| **CSAM detection** | nhắc trong safety | ❌ Chưa thấy | R2 nhận ảnh nhưng không thấy hash-scan |

→ **Monetization core (gift) = 0%.** Đây là doanh thu chính của sản phẩm truyền thông kiểu này, nhưng chưa có 1 dòng code.

---

## 3. 🟠 LỖI TRIỂN KHAI / DEPLOY (chặn "vận hành thật")

| # | Lỗi | Bằng chứng | Hệ quả |
|---|-----|-----------|--------|
| 1 | **Domain thật chỉ là placeholder** | `ketnoi.muonnoi.org` → HTTP 200 nhưng là trang tĩnh "Đang phát triển"; app thật ở `450f182b.ketnoi-muonnoi-web.pages.dev` | Sản phẩm **không nằm trên địa chỉ thật** của nó |
| 2 | **henho.muonnoi.org chết** | HTTP 000 | Sub-brand dating không live |
| 3 | **File DAUTU lẫn trong ketnoi** | 12 file `DAUTU_*` nằm trong `ketnoi.muonnoi.org/` | Sai thư mục (thuộc dautu), gây nhiễu, lộ tài liệu đầu tư trong repo sản phẩm |
| 4 | **`wrangler.toml` rỗng** | chỉ `[build] command=""` | Domain root không build app, chỉ serve index.html tĩnh |

---

## 4. 🟠 MÂU THUẪN NỘI TẠI TRONG DOCS

| Mâu thuẫn | Chi tiết |
|-----------|----------|
| **Gift peg** | `GIFT_ECONOMY_LEGAL_REVIEW` nói "1 USD = 100 điểm" là **"SAI. NGUY HIỂM. PHẢI XÓA"**; nhưng `GIFTS_POINTS_AND_REFUND_POLICY` (bản cũ) vẫn ghi peg 1 USD = 100 điểm. → **Phải purge peg ở MỌI file + UI trước khi build.** |
| **WebAuthn** | DEV_PROGRESS Sprint 1.2 ghi "skeleton only", Sprint 1.3 ghi "full implementation" — claim không nhất quán, cần verify thật. |
| **Scope "truyền thông"** | Sản phẩm build là **kết nối 1:1 (dating/match/chat)**; nhưng "sản phẩm truyền thông" thường gợi ý **content/feed/post/creator/broadcast** — lớp này 0% build. **Cần Founder chốt: truyền thông = nhắn tin (đã có) hay media/nội dung (chưa có)?** |

---

## 5. 🔴 LỖ HỔNG PHÁP LÝ — TRUST & SAFETY (bắt buộc cho sản phẩm truyền thông thật)

Sản phẩm có UGC + chat + ảnh (R2) + 18+ → các nghĩa vụ **bắt buộc** sau đang thiếu hoặc chưa enforce:

1. **Age assurance thật** — 18+ social/dating. UK OSA (25/07/2025) yêu cầu "highly effective age assurance", phạt tới 10% doanh thu. → Policy có, **enforce trong code chưa thấy**.
2. **CSAM zero-tolerance** — có ảnh upload = **bắt buộc** hash-scan + report cơ chế. → Chưa thấy implement.
3. **Moderation operations thật** — có bảng reports/blocks nhưng **thiếu admin dashboard + SLA + human queue** để xử lý báo cáo. Manual có, tooling chưa.
4. **Gift + romance-scam** — gift legal review tự nhận "scammer dùng gift làm nóng nạn nhân" cần velocity limit + relationship-duration check. → Gift chưa build nên các chốt này cũng chưa.
5. **Privacy/data** — có Privacy Policy doc; cần verify enforce: data retention 90 ngày, quyền xoá thật, cross-border (Nghị định 13/2023 + GDPR nếu EU).
6. **Legal sign-off gift economy** — framing "gói hỗ trợ + điểm nội bộ không peg" là đúng hướng, nhưng **rủi ro "virtual currency"** vẫn cần luật sư ký trước khi nhận tiền.

---

## 6. 📋 CHECKLIST HOÀN THIỆN ĐỂ "VẬN HÀNH THẬT 100%" (ưu tiên)

### P0 — Chặn vận hành (làm trước)
- [ ] **Deploy app thật lên `ketnoi.muonnoi.org`** (thay placeholder; wire wrangler/Pages custom domain) — _đang ở pages.dev_
- [ ] **Dọn 12 file DAUTU** khỏi ketnoi (chuyển về `dautu.muonnoi.org/docs/`)
- [ ] **Purge gift peg "1 USD = 100 điểm"** ở mọi doc + UI (theo legal review)
- [ ] **Age assurance enforce trong code** (gate 18+ khi đăng ký) — nghĩa vụ pháp lý
- [ ] **CSAM scan** cho mọi ảnh upload (hash-match + report path) — nghĩa vụ pháp lý
- [ ] **Moderation admin tooling** (queue xử lý reports/blocks + SLA) — đã có data layer

### P1 — Monetization (doanh thu)
- [ ] **Build gift economy**: bảng wallet/points/gifts/transactions + route + UI, theo framing legal review (không peg, không cash-out)
- [ ] **Wire pay.iai.one** cho "gói hỗ trợ nền tảng"
- [ ] **Anti-scam gift guards**: velocity limit, relationship-duration check
- [ ] **9-level membership**: nếu giữ — build data model + route; nếu không — bỏ khỏi docs để hết nợ tài liệu

### P2 — Hoàn thiện sản phẩm
- [ ] Chốt scope "truyền thông": dating-only hay thêm content/feed/creator
- [ ] henho.muonnoi.org live (hoặc gộp vào ketnoi)
- [ ] E2E tests full user flow (đang pending)
- [ ] WebAuthn verify thật (claim mâu thuẫn)

### P3 — Legal & launch
- [ ] Luật sư ký: gift economy (virtual-currency risk), Terms, Privacy, age policy
- [ ] Data retention + right-to-erasure enforce + verify
- [ ] Bookkeeping/VAT cho gói hỗ trợ nền tảng (accounting review)

---

## 7. ĐIỂM CHI TIẾT

| Mảng | Điểm | Ghi chú |
|------|:----:|---------|
| Kỹ thuật MVP (auth/match/chat) | 8/10 | Build thật, chạy được |
| Hạ tầng (CI/test/D1/R2/KV) | 8/10 | Đầy đủ, chuyên nghiệp |
| Tài liệu | 7/10 | Phủ rộng nhưng có mâu thuẫn + nợ docs (gift/9-level chưa build) |
| Monetization | 1/10 | Gift economy 0% code |
| Trust & Safety vận hành | 4/10 | Data layer có; age/CSAM/moderation-tooling thiếu |
| Deploy/domain | 3/10 | Domain thật chỉ placeholder |
| Legal readiness | 4/10 | Framing đúng hướng, chưa luật sư ký |
| **Tổng vận hành thật** | **~45–50%** | MVP mạnh, còn monetization + safety-ops + deploy + legal |

---

## 8. KẾT LUẬN THẲNG

Khác hẳn dautu (chỉ docs): **ketnoi có sản phẩm thật chạy được** — đây là điểm mạnh lớn. Nhưng "vận hành thật 100%" thì còn **4 nhóm việc**:

1. **Đưa app thật lên domain thật** (đang trốn ở pages.dev).
2. **Build monetization** (gift economy — doanh thu chính, hiện 0%).
3. **Đóng nghĩa vụ trust-safety bắt buộc** (age + CSAM + moderation tooling) — đây là **rủi ro pháp lý cao nhất** cho sản phẩm truyền thông UGC.
4. **Legal sign-off** gift + age + content.

**Không hời hợt mà nói:** sản phẩm này **gần được** hơn dautu nhiều, nhưng phần "kiếm tiền" và "an toàn người dùng theo luật" — hai thứ quan trọng nhất để **vận hành thật** — lại là phần yếu nhất. Ưu tiên P0 + P1.

---

## NGUỒN
- Bằng chứng nội bộ: đọc `apps/web/src` (45 file), `apps/api/src` (18 file), `apps/api/migrations` (10 bảng), live HTTP probe ketnoi/henho (2026-06-11)
- UK Online Safety Act (age assurance, 10% revenue fine): đã dẫn ở research henho
- VN Nghị định 13/2023 (PDPD), GDPR
- Gift/virtual-currency: `KETNOI_MUONNOI_GIFT_ECONOMY_LEGAL_REVIEW.md` (nội bộ)

---
**Trạng thái:** OPERATIONAL_AUDIT_COMPLETE · ~45–50% · P0 = deploy+age+CSAM+moderation, P1 = gift monetization
