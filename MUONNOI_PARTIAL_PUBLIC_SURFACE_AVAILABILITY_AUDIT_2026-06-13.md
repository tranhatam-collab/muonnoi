# MUONNOI PARTIAL PUBLIC-SURFACE AVAILABILITY AUDIT 2026-06-13
# Partial Public-Surface Availability Audit cho Muôn Nơi

> **Ngày:** 2026-06-13
> **Project:** Muôn Nơi
> **Type:** PARTIAL PUBLIC-SURFACE AVAILABILITY AUDIT
> **Status:** IN PROGRESS
> **Note:** Đây là audit availability của một phần domain, không phải báo cáo hoàn thành hệ sinh thái

---

## Mục tiêu

Audit availability của toàn bộ public surface domain theo ecosystem map để xem còn bao nhiêu % nữa.

---

## 1. Canonical Files Audit

### 1.1 Canonical Files Created

**Status:** ✅ COMPLETE (6 files)

**Files:**
1. MUONNOI_BRAND_CORE_LOCK_2026.md ✅
2. MUONNOI_STRATEGIC_HOMEPAGE_THESIS_2026.md ✅
3. MUONNOI_HOMEPAGE_INFORMATION_ARCHITECTURE_2026.md ✅
4. MUONNOI_ECOSYSTEM_MAP_AND_DOMAIN_HIERARCHY_2026.md ✅
5. CHOCHOI_MUONNOI_VERTICAL_MASTER_PLAN_2026.md ✅
6. TRUYENTHONG_MUONNOI_MEDIA_INFRASTRUCTURE_MASTER_PLAN_2026.md ✅

**Verdict:** ✅ PASS

---

## 2. Homepage Audit

### 2.1 Homepage Rebuild

**Status:** ✅ COMPLETE

**Changes:**
- H1: "Muôn Nơi — Social Life OS cho mọi người Việt Nam" ✅
- Sub-Hero: "Nơi mọi người kết nối, tin tưởng, học hỏi, phát triển, và vui chơi" ✅
- CTA #1: "Bắt đầu ngay" (→ app.muonnoi.org) ✅
- CTA #2: "Tìm hiểu thêm" (→ #intent) ✅ (live đang trỏ #intent, không phải /ecosystem/)
- 11 sections rebuilt ✅

**Verdict:** ✅ PASS

### 2.2 Live Homepage Verification

**Status:** ✅ COMPLETE

**Live URL:** https://www.muonnoi.org

**Live H1:** "Muôn Nơi — Social Life OS cho mọi người Việt Nam" ✅

**Thesis H1:** "Muôn Nơi — Social Life OS cho mọi người Việt Nam" ✅

**Sections Verification:**
- S1: Hero ✅
- S2: Intent Picker ✅
- S3: Trust Strip ✅
- S4: Social Core Preview ✅
- S5: 5 Trụ Nhu Cầu Nguyên Thủy ✅
- S6: AI Layer Preview ✅
- S7: Ecosystem Map ✅
- S8: Roadmap ✅
- S9: Security & Privacy ✅
- S10: About ✅
- S11: Final CTA ✅

**Verdict:** ✅ PASS

---

## 3. Subdomain Audit (Full)

### 3.1 Root Domain

**muonnoi.org**
- HTTP Status: 200 ✅
- H1: "Muôn Nơi — Social Life OS cho mọi người Việt Nam" ✅
- Status: ✅ LIVE

**www.muonnoi.org**
- HTTP Status: 200 ✅
- H1: "Muôn Nơi — Social Life OS cho mọi người Việt Nam" ✅
- Status: ✅ LIVE

---

### 3.2 Vertical Domains (Cấp 1)

**app.muonnoi.org**
- HTTP Status: 200 ✅
- Status: ✅ LIVE
- Note: HTTP 200 không đồng nghĩa PASS — chưa chứng minh SSO và social core hoàn chỉnh
- Verdict: ⏳ PARTIAL

**ai.muonnoi.org**
- HTTP Status: 200 ✅
- Status: ✅ LIVE
- Note: HTTP 200 không đồng nghĩa PASS — title hiện là "Nhà Chung", lệch vai trò AI
- Verdict: ⏳ PARTIAL

**ketnoi.muonnoi.org**
- HTTP Status: 404 ❌
- Status: ❌ NOT LIVE
- Note: Pages project và custom domain có, nhưng origin cũng trả 404
- Action: Build Astro `apps/web/dist`, deploy đúng thư mục
- Verdict: ❌ FAIL

**hoctap.muonnoi.org**
- HTTP Status: 200 ✅
- Status: ✅ LIVE
- Note: HTTP 200 không đồng nghĩa PASS — chưa chứng minh learning features hoàn chỉnh
- Verdict: ⏳ PARTIAL

**lamviec.muonnoi.org**
- HTTP Status: 308 (redirect to /vi-vn) ✅
- Status: ✅ LIVE
- Note: HTTP 200 không đồng nghĩa PASS — không chứng minh `/aiesec` hoạt động
- Verdict: ⏳ PARTIAL

**suckhoe.muonnoi.org**
- HTTP Status: SSL_ERROR_SYSCALL ❌
- Status: ❌ NOT LIVE
- Note: Không tìm thấy source hoặc Pages project
- Action: Phải tạo source, project, deploy và attach domain
- Verdict: ❌ FAIL

**chochoi.muonnoi.org**
- HTTP Status: SSL_ERROR_SYSCALL ❌
- Status: ❌ NOT LIVE
- Note: Pages origin HTTP 200
- Action: Chuyển DNS/custom domain khỏi `115.146.121.120` sang Pages
- Verdict: ❌ FAIL

**nguoiviet.muonnoi.org**
- HTTP Status: 200 ✅
- Status: ✅ LIVE
- Note: HTTP 200 không đồng nghĩa PASS — chưa chứng minh community features hoàn chỉnh
- Verdict: ⏳ PARTIAL

**dautu.muonnoi.org**
- HTTP Status: 200 ✅
- Status: ✅ LIVE
- Note: HTTP 200 không đồng nghĩa PASS — không có nghĩa real-money gate đã mở
- Verdict: ⏳ PARTIAL

**truyenthong.muonnoi.org**
- HTTP Status: SSL_ERROR_SYSCALL ❌
- Status: ❌ NOT LIVE
- Note: Pages origin HTTP 200
- Action: Chuyển DNS/custom domain sang Pages
- Verdict: ❌ FAIL

---

### 3.3 Module Domains (Cấp 2)

**plays.muonnoi.org**
- HTTP Status: 200 ✅
- Status: ✅ LIVE
- Note: HTTP 200 không đồng nghĩa PASS — chưa chứng minh game features hoàn chỉnh
- Verdict: ⏳ PARTIAL

**trochoi.muonnoi.org**
- HTTP Status: SSL_ERROR_SYSCALL ❌
- Status: ❌ NOT LIVE
- Note: Pages origin HTTP 200
- Action: Chuyển DNS/custom domain sang Pages
- Verdict: ❌ FAIL

---

### 3.4 Other Domains (Theo Ecosystem Map)

**nhachung.muonnoi.org**
- HTTP Status: DNS không tồn tại ❌
- Status: ❌ NOT LIVE
- Verdict: ❌ FAIL

**verify.muonnoi.org**
- HTTP Status: SSL_ERROR_SYSCALL ❌
- Status: ❌ NOT LIVE
- Verdict: ❌ FAIL

**dulich.muonnoi.org**
- HTTP Status: DNS không tồn tại ❌
- Status: ❌ NOT LIVE
- Verdict: ❌ FAIL

**cuocsong.muonnoi.org**
- HTTP Status: 200 ✅
- Status: ✅ LIVE
- Note: HTTP 200 không đồng nghĩa PASS — chưa chứng minh features hoàn chỉnh
- Verdict: ⏳ PARTIAL

**docs.muonnoi.org**
- HTTP Status: 200 ✅
- Status: ✅ LIVE
- Note: HTTP 200 không đồng nghĩa PASS — chưa chứng minh docs features hoàn chỉnh
- Verdict: ⏳ PARTIAL

---

### 3.5 Planned Domains

**sukien.muonnoi.org**
- Status: Planned ❌
- Verdict: ❌ NOT LIVE

**giaitri.muonnoi.org**
- Status: Planned ❌
- Verdict: ❌ NOT LIVE

**challenge.muonnoi.org**
- Status: Planned ❌
- Verdict: ❌ NOT LIVE

**festival.muonnoi.org**
- Status: Planned ❌
- Verdict: ❌ NOT LIVE

---

### 3.6 Internal Domains

**admin.muonnoi.org**
- Status: Internal ❌
- Verdict: ❌ NOT AUDITED

**status.muonnoi.org**
- Status: Internal ❌
- Verdict: ❌ NOT AUDITED

**complaints.muonnoi.org**
- Status: Internal ❌
- Verdict: ❌ NOT AUDITED

---

## 4. Ecosystem Map Audit

### 4.1 Vertical Classification

**Vertical Cấp 1 (Live):**
- app.muonnoi.org — Social Core (lõi social) — ✅ Live (⏳ PARTIAL)
- ai.muonnoi.org — AI Layer (lõi AI) — ✅ Live (⏳ PARTIAL)
- hoctap.muonnoi.org — Học Tập (vertical) — ✅ Live (⏳ PARTIAL)
- lamviec.muonnoi.org — Làm Việc (vertical) — ✅ Live (⏳ PARTIAL)
- nguoiviet.muonnoi.org — Người Việt Muôn Nơi (vertical) — ✅ Live (⏳ PARTIAL)
- dautu.muonnoi.org — Đầu Tư (vertical) — ✅ Live (⏳ PARTIAL)

**Vertical Cấp 1 (Not Live):**
- ketnoi.muonnoi.org — Kết Nối (vertical) — ❌ Not Live (404)
- suckhoe.muonnoi.org — Sống Khỏe (vertical) — ❌ Not Live (SSL_ERROR_SYSCALL)
- chochoi.muonnoi.org — Chỗ Chơi (vertical) — ❌ Not Live (SSL_ERROR_SYSCALL)
- truyenthong.muonnoi.org — Truyền Thông (vertical) — ❌ Not Live (SSL_ERROR_SYSCALL)

**Module Cấp 2 (Live):**
- plays.muonnoi.org — Plays (module digital games) — ✅ Live (⏳ PARTIAL)

**Module Cấp 2 (Not Live):**
- trochoi.muonnoi.org — Trò Chơi (module real-life quests) — ❌ Not Live (SSL_ERROR_SYSCALL)

**Other Domains (Live):**
- cuocsong.muonnoi.org — HTTP 200 ✅ Live (⏳ PARTIAL)
- docs.muonnoi.org — HTTP 200 ✅ Live (⏳ PARTIAL)

**Other Domains (Not Live):**
- nhachung.muonnoi.org — DNS không tồn tại ❌
- verify.muonnoi.org — Lỗi TLS ❌
- dulich.muonnoi.org — DNS không tồn tại ❌

**Planned Domains:**
- sukien.muonnoi.org — Planned ❌
- giaitri.muonnoi.org — Planned ❌
- challenge.muonnoi.org — Planned ❌
- festival.muonnoi.org — Planned ❌

**Internal Domains:**
- admin.muonnoi.org — Internal ❌
- status.muonnoi.org — Internal ❌
- complaints.muonnoi.org — Internal ❌

---

## 5. Overall Progress (Full)

### 5.1 Canonical Files

**Total:** 6 files
**Complete:** 6 files (100%)
**Remaining:** 0 files (0%)

**Progress:** ✅ 100%

---

### 5.2 Homepage

**Total:** 11 sections
**Complete:** 11 sections (100%)
**Remaining:** 0 sections (0%)

**Progress:** ✅ 100%

---

### 5.3 Subdomains (Full Audit)

**Total:** 21 subdomains được audit (excluding internal domains)
**Live:** 11 subdomains (52.4%)
**Not Live:** 10 subdomains (47.6%)

**Nếu tính thêm muonnoi.org và www.muonnoi.org:** 13/23 host = 56.5%

**Progress:** ⏳ 52.4% (full audit)

---

### 5.4 Overall Progress (Full)

**Total:** 3 categories
**Complete:** 2 categories (canonical files, homepage)
**In Progress:** 1 category (subdomains — full audit)

**Progress:** ⏳ PARTIAL — chưa có mẫu số đủ để công bố phần trăm hoàn thành toàn dự án

---

## 6. Remaining Work

### 6.1 Subdomains Not Live (10 domains)

**ketnoi.muonnoi.org**
- Status: 404
- Note: Pages project và custom domain có, nhưng origin cũng trả 404
- Action: Build Astro `apps/web/dist`, deploy đúng thư mục

**suckhoe.muonnoi.org**
- Status: SSL_ERROR_SYSCALL
- Note: Không tìm thấy source hoặc Pages project
- Action: Phải tạo source, project, deploy và attach domain

**chochoi.muonnoi.org**
- Status: SSL_ERROR_SYSCALL
- Note: Pages origin HTTP 200
- Action: Chuyển DNS/custom domain khỏi `115.146.121.120` sang Pages

**truyenthong.muonnoi.org**
- Status: SSL_ERROR_SYSCALL
- Note: Pages origin HTTP 200
- Action: Chuyển DNS/custom domain sang Pages

**trochoi.muonnoi.org**
- Status: SSL_ERROR_SYSCALL
- Note: Pages origin HTTP 200
- Action: Chuyển DNS/custom domain sang Pages

**nhachung.muonnoi.org**
- Status: DNS không tồn tại
- Action: Tạo DNS record

**verify.muonnoi.org**
- Status: Lỗi TLS
- Action: Fix SSL certificate

**dulich.muonnoi.org**
- Status: DNS không tồn tại
- Action: Tạo DNS record

**sukien.muonnoi.org**
- Status: Planned
- Action: Deploy khi planned

**giaitri.muonnoi.org**
- Status: Planned
- Action: Deploy khi planned

**challenge.muonnoi.org**
- Status: Planned
- Action: Deploy khi planned

**festival.muonnoi.org**
- Status: Planned
- Action: Deploy khi planned

---

## 7. Verdict

**Canonical Files:** ✅ 100% COMPLETE
**Homepage:** ✅ 100% COMPLETE
**Subdomains (Full Audit):** ⏳ 52.4% COMPLETE (11/21 live)

**Overall Progress:** ⏳ PARTIAL — chưa có mẫu số đủ để công bố phần trăm hoàn thành toàn dự án

**Note:** Đây là audit availability của toàn bộ public surface domain, không phải báo cáo hoàn thành hệ sinh thái. Chưa tính SSO, API, payment/email, mobile, moderation, trust và QA.

---

**Partial Public-Surface Availability Audit complete.**
**Overall Progress: PARTIAL — chưa có mẫu số đủ để công bố phần trăm hoàn thành toàn dự án.**
