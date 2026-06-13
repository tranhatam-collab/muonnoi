# WPAS TRAINING SUMMARY — FOUNDER
# Training Founder về quy trình WPAS

> **Ngày:** 2026-06-13
> **Trainer:** AI Agent
> **Trainee:** Founder
> **Mục tiêu:** Founder hiểu quy trình WPAS để duyệt và enforce

---

## 1. WPAS LÀ GÌ?

**WPAS = Website Production Acceptance System**

**Triết lý:** "Deploy thành công ≠ live" — phải verify production thật với evidence.

**Quy trình 12 bước:**
1. Build
2. Self Audit (dev tự audit)
3. AI Audit (AI agent audit)
4. Human QA (QA manual check)
5. Production Gate (quyết định PASS/FAIL)
6. Release Candidate (tag release)
7. Staging (test trên staging)
8. Founder Review (Founder review staging)
9. Production Deploy (deploy to production)
10. Post Deploy Verification (verify production)
11. Release Report (document release)
12. Archive Evidence (archive evidence pack)

---

## 2. SEVERITY MATRIX (P0-P3)

**P0 Blocker — Không được deploy**
- Sai domain production
- Canonical sai domain
- Sitemap sai domain
- Logo sai thương hiệu
- Entity/brand name sai nghiêm trọng
- Payment không secure
- Không có terms/privacy page
- Lighthouse score < 50
- Security header critical missing (CSP)

**Action:** BLOCK release, fix immediately.

**P1 Major — Phải sửa trước release**
- Favicon sai
- OG image sai
- Màu lệch brand
- Font không đúng hệ
- Footer/header không đồng nhất
- Pricing không rõ
- Checkout flow không smooth
- Email không brand consistent
- Refund policy không có
- Lighthouse score 50-89
- Accessibility score < 90

**Action:** Fix before release, can deploy if workaround exists.

**P2 Minor — Có thể sửa sau release**
- Spacing logo chưa đều
- Một vài icon thiếu size phụ
- Alt text logo chưa hoàn chỉnh
- Subject line email không tối ưu
- CTA email không rõ
- Refund timeline không rõ
- Lighthouse score 90-94
- Performance score 90-94

**Action:** Fix in next sprint, can deploy.

**P3 Trivial — Có thể backlog**
- Tài liệu nội bộ chưa cập nhật
- Comment code chưa tối ưu
- Variable naming không consistent
- Code formatting không perfect

**Action:** Backlog, fix when time permits.

---

## 3. EVIDENCE MATRIX

**Mỗi phase phải có evidence bắt buộc:**

**P0 — Brand Consistency:**
- Domain: curl -I, screenshot browser, canonical URL
- Sitemap: Link /sitemap.xml, danh sách URL đúng domain
- Robots: Link /robots.txt
- OG URL: View-source hoặc meta extraction
- Logo: Screenshot header/footer + asset path
- Favicon/PWA: Screenshot DevTools Application tab
- Brand name: Search toàn repo + production HTML
- Color: CSS variables/design tokens
- Typography: CSS source + screenshot

**P1 — Language Audit:**
- MASTER LANGUAGE CODEX: Link file vi.json/en.json hoặc codex
- Bilingual consistency: Translation consistency report
- Diacritic rules: Screenshot bilingual pages
- Translation rules: Translation audit report

**P2 — Content Consistency:**
- Content rules: Content audit report
- Content structure: Hierarchy audit report
- Content quality: Content quality report
- Scope coverage: Screenshot từng page

**P3 — Translation Audit:**
- 1-to-1 mapping: 1-to-1 mapping report
- Context consistency: Context consistency report
- Translation quality: Translation quality report
- Process: Process checklist

**P4 — Content Structure:**
- Hierarchy: Hierarchy audit report
- Meta tags: Meta tags audit report
- CTA consistency: CTA audit report

**P5 — UX Audit:**
- Mobile (390px, 430px): Screenshot mobile
- Tablet (768px, 1024px): Screenshot tablet
- Desktop (1440px, 1920px): Screenshot desktop
- Common issues: UX audit report

**P6 — PWA Audit:**
- Manifest: Manifest file + validation
- Icons: Icon inventory + screenshot
- Service Worker: Service worker log + cache report
- Offline: Offline page screenshot
- Install: Install prompt screenshot
- Splash Screen: Splash screen screenshot

**P7 — Technical Audit:**
- Error pages: Screenshot 404/500
- Redirects: Redirect test report
- Security headers: curl -I headers
- Cache policy: Cache headers report
- SEO: robots.txt + sitemap.xml content
- Lighthouse: Lighthouse report

---

## 4. DECISION GATES

**Gate 1: Self Audit**
- Criteria: No P0 blockers
- Decision: PASS → Continue to AI Audit
- Decision: FAIL → Fix issues, retry

**Gate 2: AI Audit**
- Criteria: No P0 blockers
- Decision: PASS → Continue to Human QA
- Decision: FAIL → Fix issues, retry

**Gate 3: Human QA**
- Criteria: No P0 blockers, evidence complete
- Decision: PASS → Continue to Production Gate
- Decision: FAIL → Fix issues, retry

**Gate 4: Production Gate**
- Criteria: All P0-P9 PASS, evidence complete
- Decision: PASS → Create Release Candidate
- Decision: FAIL → Fix issues, retry

**Gate 5: Staging**
- Criteria: Staging tests pass
- Decision: PASS → Continue to Founder Review
- Decision: FAIL → Fix issues, retry

**Gate 6: Founder Review** ← **FOUNDER DUYỆT Ở ĐÂY**
- Criteria: Founder approval
- Decision: PASS → Deploy to Production
- Decision: FAIL → Fix issues, retry

**Gate 7: Production Deploy**
- Criteria: Deploy successful, verification pass
- Decision: PASS → Create Release Report
- Decision: FAIL → Rollback, fix issues, retry

---

## 5. FOUNDER RESPONSIBILITIES

**Trong quy trình WPAS:**
1. **Founder Review (Gate 6):** Founder review staging trước production
   - Founder access staging
   - Founder review UI/UX
   - Founder review content
   - Founder review brand
   - Founder approval/rejection

2. **Production Gate (Gate 4):** Founder duyệt production gate (nếu cần)

3. **Sign-off production:** Founder sign-off production

**Timeline:**
- Founder Review: 1-2 hours
- Production Gate: 30 minutes (nếu Founder duyệt)

---

## 6. LỢI ÍCH CỦA WPAS

**1. Deploy verified:**
- Không deploy sai domain
- Không deploy sai directory
- Không deploy crash production
- Verify production thật với curl + grep marker

**2. Quality assurance:**
- QA Checklist P0-P9
- Severity Matrix P0-P3
- Evidence Matrix bắt buộc
- Không deploy nếu có P0 blocker

**3. Process transparency:**
- Quy trình 12 bước rõ ràng
- Decision gates rõ ràng
- Evidence bắt buộc
- Release report archive

**4. Risk mitigation:**
- Staging environment test
- Founder review staging
- Post deploy verification
- Rollback procedure

---

## 7. NEXT STEPS

**Phase 1 Day 1-2:**
- [x] AI Agent đọc toàn bộ WPAS
- [x] AI Agent training Founder (này)
- [ ] Founder duyệt WPAS adoption

**Phase 1 Day 3-4:**
- [ ] Tạo staging environment
- [ ] Setup automation rules
- [ ] Setup security rules
- [ ] Test staging environment

**Phase 1 Day 5:**
- [ ] Tạo QA Checklist (P0-P9)
- [ ] Tạo Severity Matrix (P0-P3)
- [ ] Tạo Evidence Matrix
- [ ] Founder duyệt QA infrastructure

---

## 8. AUTHORITY

**Nguồn chân lý:** `WPAS/00_WORKFLOW_PROCESS.md`
**Mọi team dev phải tuân thủ quy trình này.**
**Không được skip steps unless có Founder approval.**

---

**Training complete.**
**Founder đã hiểu quy trình WPAS.**
**Chờ Founder duyệt WPAS adoption.**
