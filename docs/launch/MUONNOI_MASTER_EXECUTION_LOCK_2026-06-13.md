# MUÔN NƠI — MASTER EXECUTION LOCK 2026-06-13
# File khóa tổng kế hoạch · Từng trang · Từng subdomain · Verified state

> **Vai trò:** Đây là **file khóa duy nhất** cho mọi việc còn lại. Khi mâu thuẫn với bất kỳ task list / report nào khác → **file này thắng**.
> **Nguồn gốc:** Khóa theo `MUONNOI_MASTER_THESIS_2026` + `MUONNOI_HOMEPAGE_FOUNDER_LOCK_2026` + state **verified live 2026-06-13**.
> **Người lập:** Claude agent (đọc canonical plan thật + probe live thật, không từ report).
> **Trạng thái:** LOCKED FOR DEV. Không được tự ý đổi tổng kế hoạch. Mọi thay đổi lớn phải Founder duyệt.

---

## 0. LUẬT CHƠI BẮT BUỘC (đọc trước khi làm bất cứ gì)

1. **"Deploy thành công" ≠ "live".** Wrangler báo `✨ Success` kể cả khi site crash. **BẮT BUỘC `curl https://<domain-thật>/` và grep marker** trước khi nói xong. Không verify = chưa xong.
2. **1 domain = 1 Pages project = 1 lệnh deploy.** Cấm `wrangler pages deploy .` (deploy nhầm root). Cấm 2 project cho 1 domain.
3. **Không đẻ report.** Cập nhật trạng thái vào **chính file này** (cột Trạng thái). Cấm tạo file `*_AUDIT/*_COMPLETION/*_PROGRESS` mới ở root.
4. **Không lệch tổng kế hoạch.** Mỗi surface phải đúng vai trò canonical ở Mục 4. Không tự thêm/đổi định vị.
5. **Cái bẫy lớn nhất (Master Thesis):** *"collection of websites without a core usage loop"* — nhiều subdomain/nhiều docs nhưng không có lý do quay lại social core. **Mọi việc phải phục vụ core usage loop, không phải đẻ thêm vỏ.**

---

## 1. ĐỊNH NGHĨA KHÓA (không bàn lại)

- **Muôn Nơi = Social Life OS** cho người thật, cộng đồng thật, AI hữu ích, trust layer rõ ràng.
- Public: *"Muôn Nơi — mạng xã hội đời sống cho người thật và AI hữu ích."*
- `muonnoi.org` = **brand + navigation + worldview shell**. `app.muonnoi.org` = **social core** (account, feed, cộng đồng, trust, AI).
- **5 trụ nguyên thủy:** Muốn Nói (app) · Muốn Học (hoctap) · Muốn Làm (lamviec) · Muốn Sống (nhachung) · Muốn Chơi (chochoi).
- **3 wedge đầu tiên:** Người Việt Muôn Nơi (cảm xúc/cộng đồng) · Nhà Chung/Living · Học & Làm/Opportunity. (Đà Lạt/du lịch = proof mechanism, không phải wedge cấp 1.)
- **Spine bắt buộc để định giá $10M+:** 1 danh tính Muôn Nơi (SSO) mở mọi cửa + trust/verify layer nhìn thấy được. (Founder đã xác nhận hướng $10M→$1B.)

---

## 2. TRẠNG THÁI LIVE TOÀN HỆ (VERIFIED 2026-06-13 — single source of truth)

| Surface | Vai trò canonical | HTTP | Thực tế |
|---------|-------------------|:----:|---------|
| www.muonnoi.org | Brand shell / homepage | **200** | ✅ Homepage Founder-lock LIVE (vừa fix middleware 1101) |
| app.muonnoi.org | **Social Core** (Muốn Nói) | 200 | ✅ Live (auth riêng — chưa SSO toàn hệ) |
| hoctap.muonnoi.org | Muốn Học | 200 | ✅ Live |
| lamviec.muonnoi.org | Muốn Làm | **308** | 🔶 Next.js app cũ; `/aiesec` hỏng (xem Mục 5) |
| nhachung.muonnoi.org | **Muốn Sống** (trụ) | **000** | ❌ CHẾT. (Nội dung "Nhà Chung" đang ở `ai.muonnoi.org` — **lệch domain**) |
| chochoi.muonnoi.org | **Muốn Chơi** (trụ) | **000** | ❌ CHẾT. (Game đang ở `plays.muonnoi.org` — **lệch tên**) |
| plays.muonnoi.org | Play (đang dùng) | 200 | ✅ 100 game live — nhưng tên canonical là `chochoi` |
| ketnoi.muonnoi.org | Muốn Kết Nối | 200 | ✅ MVP social chạy; monetization 0% |
| nguoiviet.muonnoi.org | Wedge #1 | 200 | ✅ Live |
| verify.muonnoi.org | **Muốn Tin** (trust infra) | **000** | ❌ CHẾT — moat chính chưa có |
| truyenthong.muonnoi.org | **Muốn Lan Tỏa** (media) | **000** | ❌ CHẾT |
| cuocsong.muonnoi.org | Living guide | 200 | ✅ Live |
| dulich.muonnoi.org | Travel proof (Đà Lạt) | **000** | ❌ CHẾT (regression — pages.dev còn sống) |
| dautu.muonnoi.org | Strategic capital portal | 200 | ✅ Bilingual live; portal 60%, NO-GO real money |
| ai.muonnoi.org | Nhà Chung / AI | 200 | ✅ Live (nên hợp nhất domain với nhachung) |
| docs.muonnoi.org | Docs | 200 | ✅ Live |
| api.muonnoi.org | API | 404 | ✅ By design (/api/* hoạt động) |
| henho/family/lqos/trochoi | Phase sau | 000 | ❌ Chưa build — KHÔNG link primary |

**Tóm tắt:** 10 surface sống thật; **4 trụ/infra canonical chết** (nhachung, chochoi, verify, truyenthong); 2 lệch domain/tên (chochoi↔plays, nhachung↔ai); dulich regression.

---

## 3. HOMEPAGE — 11 SECTION (verified, có cái còn thiếu)

Founder lock yêu cầu 11 section. Trạng thái live www.muonnoi.org:

| Section | Yêu cầu | Live? | Việc |
|---------|---------|:-----:|------|
| S1 Hero | H1 + CTA "Vào MXH Muôn Nơi" + "Tôi muốn làm gì hôm nay?" | ✅ | OK |
| **S2 Bạn muốn làm gì hôm nay** | Intent picker (nói/học/làm/sống/chơi/đi/kết nối/lan tỏa/đồng hành) | ❌ **THIẾU** (grep=0) | **PHẢI THÊM** — đây là entry chính |
| S3 MN là gì + "Tự do tuyệt đối từ bên trong" | ✅ | OK |
| S4 Social Core (app) | ✅ | OK |
| S5 Trust Layer | ✅ (trustStrip) | OK |
| S6 Hệ sinh thái map | ✅ (ecosystemMap) | OK — sửa link tới surface SỐNG, bỏ surface 000 |
| S7 Real-life Loop | ✅ | OK |
| S8 Dành cho ai | ✅ | OK |
| S9 Dự án nổi bật (6–9 card) | ⚠️ kiểm | Card chỉ trỏ surface 200; gắn badge "đang hoạt động" |
| S10 Governance/Legal posture | ✅ | OK — không hứa thu nhập, không bank public |
| S11 Bắt đầu (3 bước) + CTA lặp | ✅ (finalCTA) | OK |

**Việc homepage P0:** thêm **S2 intent picker**; rà S6/S9 chỉ trỏ surface 200 (cấm link nhachung/chochoi/verify/truyenthong/dulich đang 000).

---

## 4. KHÓA VIỆC THEO TỪNG SURFACE

> Mỗi surface: vai trò → gap thật → việc → ưu tiên → nghiệm thu. Cập nhật cột Trạng thái NGAY TRONG FILE NÀY.

### P0 — Cửa ngõ & spine (quyết định giá trị)
| # | Surface | Việc bắt buộc | Nghiệm thu (verify lệnh) |
|---|---------|---------------|--------------------------|
| 1 | **www homepage** | Thêm S2 intent picker; S6/S9 chỉ trỏ surface 200; giữ Founder-lock | `curl www.muonnoi.org \| grep "Bạn muốn làm gì"` > 0 |
| 2 | **SSO spine** | 1 danh tính Muôn Nơi: gộp auth `app` + `ketnoi` về 1 identity; các vertical SSO vào | Đăng nhập 1 lần dùng được app + ketnoi |
| 3 | **verify.muonnoi.org** | Build trust/verify layer (moat #1): verified badge, anti-bot, report/appeal | `curl verify.muonnoi.org` = 200 + có verify flow |

### P1 — 5 trụ nguyên thủy phải sống đúng tên
| # | Surface | Việc | Nghiệm thu |
|---|---------|------|-----------|
| 4 | **chochoi.muonnoi.org** | Quyết: đổi `plays`→`chochoi` HOẶC map chochoi→plays content. Trụ "Chơi" phải sống đúng tên canonical | `curl chochoi.muonnoi.org` = 200 |
| 5 | **nhachung.muonnoi.org** | Hợp nhất: nội dung Nhà Chung (đang ở `ai`) lên đúng `nhachung` (trụ Sống). Quyết ai/nhachung domain | `curl nhachung.muonnoi.org` = 200 |
| 6 | **lamviec.muonnoi.org** | Fix domain (Mục 5) + chuẩn hóa trụ "Làm" | `curl lamviec.muonnoi.org/aiesec/` = 200 |
| 7 | **truyenthong.muonnoi.org** | Build trụ "Lan Tỏa" (media/comms infra) — hoặc hoãn chính thức nếu chưa tới | 200 hoặc gỡ khỏi "trụ live" |
| 8 | **dulich.muonnoi.org** | Fix regression (rebind custom domain → pages.dev đang 200) | `curl dulich.muonnoi.org` = 200 |

### P1 — Vertical đang sống: hoàn thiện core loop
| # | Surface | Việc | Nghiệm thu |
|---|---------|------|-----------|
| 9 | **ketnoi.muonnoi.org** | Monetization gift economy đúng legal (no peg, no cash-out) + age-gate + CSAM scan + moderation tooling; SSO vào | Gift flow + safety live; SSO OK |
| 10 | **app.muonnoi.org** | Là social core thật: feed/post/follow/notify/report + daily return loop + AI assist | Core loop dùng được hằng tuần |
| 11 | plays/hoctap/cuocsong/nguoiviet | Giữ live; gắn vào SSO + ecosystem map; không regress | Vẫn 200 sau mỗi deploy |

### P1 — dautu (strategic capital) — giữ posture an toàn
| # | Surface | Việc | Nghiệm thu |
|---|---------|------|-----------|
| 12 | **dautu.muonnoi.org** | Hoàn thiện member (40%→) + admin (12%→) + ledger double-entry verify + KYC; **KHÔNG mở real-money** tới khi pass go-live gates + luật sư ký | Real-money gates `REAL_MONEY_GO_LIVE_GATES` đủ tick + counsel |

### P2 — Phase sau (KHÔNG link primary tới khi 200)
henho · family · lqos · trochoi · suckhoe · sangtao · congdong · trust → giữ 000, không khoe ở homepage.

---

## 5. BLOCKER ĐANG MỞ: lamviec.muonnoi.org/aiesec

- **Thực tế:** `lamviec.muonnoi.org` gắn **project Pages cũ (Next.js "Sống tự do - Làm việc muôn nơi")**; `/aiesec` → 308 `/vi-vn/aiesec` → trống.
- Nội dung aiesec mới **chỉ sống ở preview** `43349d58.lamviec-muonnoi-org.pages.dev/aiesec/` (200).
- **Fix (1 trong 2, Founder/Platform quyết):**
  - **A (sạch):** Cloudflare → gỡ custom domain `lamviec.muonnoi.org` khỏi project cũ → gắn vào project chứa aiesec. (Lưu ý: đừng làm chết app "Làm Việc" hiện có — nếu app cũ vẫn cần, phải gộp aiesec vào CÙNG project, không tách đôi.)
  - **B:** Đưa nội dung aiesec vào đúng project đang phục vụ lamviec, deploy chung.
- **Nghiệm thu:** `curl https://lamviec.muonnoi.org/aiesec/` = 200 + có anti-copy + footer liên hệ.
- ⚠️ **Không tạo project thứ 2 cho 1 domain** (đúng luật Mục 0.2).

---

## 6. KỶ LUẬT DEPLOY & OPS (khóa cứng — bài học 1101)

- **Bài học gốc:** mọi "deploy hỏng" suốt cycle = `functions/_middleware.ts` sai chữ ký `onRequest(context, next)` → crash 1101 → che toàn site. Đã fix. **Middleware/Functions phải đúng signature Pages: `onRequest(context)` + `context.next()`.**
- **Lệnh deploy chuẩn (khóa):**
  ```bash
  wrangler pages deploy apps/web/public --project-name=muonnoi --branch=main --commit-dirty=true
  # rồi BẮT BUỘC:
  curl -s https://www.muonnoi.org/ | grep -c mn-ecosystemMap   # > 0 mới là xong
  ```
- **Cấm:** `deploy .` (root); file `wrangler.toml` trong thư mục served; 2 project/1 domain.
- **Git:** dọn submodule `app/docs.muonnoi.org` (lock file) + không để file rác root. Cây git sạch trước mỗi release.
- **Report sprawl:** đã xóa 19 file rác — giữ vậy. Trạng thái cập nhật vào file này.

---

## 7. THỨ TỰ LÀM ĐÚNG (growth logic: clarity → entry → trust → belonging → return)

1. **P0-1** Homepage S2 + S6/S9 trỏ surface sống (cửa ngõ hoàn chỉnh).
2. **P0-2** SSO spine (1 danh tính) — xương sống định giá.
3. **P0-3 / P1-3** verify layer (moat) bắt đầu.
4. **P1-6** lamviec/aiesec domain fix (blocker đang mở).
5. **P1-8** dulich rebind (regression).
6. **P1-4/5** chochoi + nhachung đúng tên/domain (5 trụ sống đủ).
7. **P1-9/10** ketnoi monetization+safety, app core loop.
8. **P1-12** dautu member/admin/ledger (không real-money).
9. **P1-7** truyenthong (hoặc hoãn chính thức).

---

## 8. NGHIỆM THU TOÀN CỤC (Definition of Done)
- [ ] `curl www.muonnoi.org \| grep "Bạn muốn làm gì"` > 0 (S2 live)
- [ ] Homepage S6/S9 không còn link tới surface 000
- [ ] SSO: 1 lần đăng nhập dùng app + ketnoi
- [ ] verify.muonnoi.org = 200 với verify flow
- [ ] 5 trụ đều 200 đúng tên canonical (app/hoctap/lamviec/nhachung/chochoi)
- [ ] dulich + lamviec/aiesec = 200 trên domain thật
- [ ] ketnoi: gift legal + age + CSAM + moderation live
- [ ] dautu real-money vẫn KHÓA tới khi gates + counsel
- [ ] Mỗi surface: verify trên domain thật sau deploy
- [ ] Git sạch; không report sprawl mới

---

## 9. QUYẾT ĐỊNH CẦN FOUNDER CHỐT (chặn việc)
1. **chochoi vs plays:** đổi tên `plays`→`chochoi`, hay giữ `plays` làm tên thật và bỏ `chochoi` khỏi canonical?
2. **nhachung vs ai:** trụ "Sống" ở domain nào — `nhachung` hay giữ `ai`? (đang lệch)
3. **truyenthong:** build ngay (trụ thứ 8) hay hoãn chính thức (ghi PLANNED, không khoe trụ)?
4. **SSO:** đồng ý đây là P0 xương sống, làm trước ketnoi monetization?
5. **lamviec/aiesec:** chọn fix A hay B ở Mục 5? (và app "Làm Việc" cũ có giữ không?)

→ Chốt 5 điểm này, team chạy theo đúng thứ tự Mục 7. Không lệch tổng kế hoạch.

---

**Khóa bởi:** Claude agent · 2026-06-13 · verified live + canonical thesis.
**Cập nhật trạng thái:** sửa trực tiếp cột Trạng thái trong file này, KHÔNG tạo report mới.
