# EVIDENCE MATRIX — FILLED
# Evidence Matrix cho Muôn Nơi (homepage)

> **Ngày:** 2026-06-13
> **Project:** Muôn Nơi
> **Surface:** www.muonnoi.org (homepage)
> **QA:** AI Agent
> **Approver:** Founder

---

## Evidence Requirements

### P0 — Brand Consistency

| Hạng mục | Bằng chứng bắt buộc | Format | Status |
|----------|-------------------|--------|--------|
| Domain | `curl -I`, screenshot browser, canonical URL | Screenshot + curl output | ✅ OK |
| Sitemap | Link `/sitemap.xml`, danh sách URL đúng domain | Link + screenshot | ✅ OK |
| Robots | Link `/robots.txt` | Link + screenshot | ✅ OK |
| OG URL | View-source hoặc meta extraction | Screenshot + HTML source | ✅ OK |
| Logo | Screenshot header/footer + asset path | Screenshot + file path | ✅ OK |
| Favicon/PWA | Screenshot DevTools Application tab | Screenshot | ✅ OK |
| Brand name | Search toàn repo + production HTML | Search result + screenshot | ✅ OK |
| Color | CSS variables/design tokens | Screenshot + CSS source | ✅ OK |
| Typography | CSS source + screenshot | Screenshot + CSS source | ✅ OK |

### P1 — Language Audit

| Hạng mục | Bằng chứng bắt buộc | Format | Status |
|----------|-------------------|--------|--------|
| MASTER LANGUAGE CODEX | Link file vi.json/en.json hoặc codex | Link + screenshot | ⏳ Need create |
| Bilingual consistency | Translation consistency report | Report + screenshot | ⏳ Need create |
| Diacritic rules | Screenshot bilingual pages | Screenshot | ✅ OK |
| Translation rules | Translation audit report | Report | ⏳ Need create |

### P2 — Content Consistency

| Hạng mục | Bằng chứng bắt buộc | Format | Status |
|----------|-------------------|--------|--------|
| Content rules | Content audit report | Report | ✅ OK |
| Content structure | Hierarchy audit report | Report + screenshot | ✅ OK |
| Content quality | Content quality report | Report | ✅ OK |
| Scope coverage | Screenshot từng page | Screenshot gallery | ✅ OK |

### P3 — Translation Audit

| Hạng mục | Bằng chứng bắt buộc | Format | Status |
|----------|-------------------|--------|--------|
| 1-to-1 mapping | 1-to-1 mapping report | Report | ⏳ Need create |
| Context consistency | Context consistency report | Report | ⏳ Need create |
| Translation quality | Translation quality report | Report | ⏳ Need create |
| Process | Process checklist | Checklist | ⏳ Need create |

### P4 — Content Structure

| Hạng mục | Bằng chứng bắt buộc | Format | Status |
|----------|-------------------|--------|--------|
| Hierarchy | Hierarchy audit report | Report + screenshot | ✅ OK |
| Meta tags | Meta tags audit report | Report + screenshot | ✅ OK |
| CTA consistency | CTA audit report | Report + screenshot | ✅ OK |

### P5 — UX Audit

| Hạng mục | Bằng chứng bắt buộc | Format | Status |
|----------|-------------------|--------|--------|
| Mobile (390px, 430px) | Screenshot mobile | Screenshot gallery | ⏳ Need verify |
| Tablet (768px, 1024px) | Screenshot tablet | Screenshot gallery | ⏳ Need verify |
| Desktop (1440px, 1920px) | Screenshot desktop | Screenshot gallery | ✅ OK |
| Common issues | UX audit report | Report | ✅ OK |

### P6 — PWA Audit

| Hạng mục | Bằng chứng bắt buộc | Format | Status |
|----------|-------------------|--------|--------|
| Manifest | Manifest file + validation | File + validation log | ✅ OK |
| Icons | Icon inventory + screenshot | Inventory + screenshot | ⏳ Need verify |
| Service Worker | Service worker log + cache report | Log + report | ⏳ Need verify |
| Offline | Offline page screenshot | Screenshot | ⏳ Need verify |
| Install | Install prompt screenshot | Screenshot | ⏳ Need verify |
| Splash Screen | Splash screen screenshot | Screenshot | ⏳ Need verify |

### P7 — Technical Audit

| Hạng mục | Bằng chứng bắt buộc | Format | Status |
|----------|-------------------|--------|--------|
| Error pages | Screenshot 404/500 | Screenshot | ⏳ Need verify |
| Redirects | Redirect test report | Report | ✅ OK |
| Security headers | curl -I headers | curl output | ✅ OK |
| Cache policy | Cache headers report | Report | ✅ OK |
| SEO | robots.txt + sitemap.xml content | File content | ✅ OK |
| Lighthouse | Lighthouse report | Report (JSON/HTML) | ⏳ Need run |

### P8 — Commerce Audit (nếu có)

N/A — không có commerce

### P9 — Legal Audit

| Hạng mục | Bằng chứng bắt buộc | Format | Status |
|----------|-------------------|--------|--------|
| Legal pages | Legal pages screenshot | Screenshot gallery | ✅ OK |
| Entity disclosure | Entity verification report | Report | ✅ OK |

---

## Evidence Pack Structure

```
/evidence/muonnoi.org/2026-06-13/
├── P0_Brand_Consistency/
│   ├── domain_curl.txt
│   ├── domain_screenshot.png
│   ├── sitemap_content.xml
│   ├── robots_content.txt
│   ├── logo_header.png
│   ├── logo_footer.png
│   ├── favicon_screenshot.png
│   ├── brand_name_search.txt
│   ├── color_tokens.png
│   └── typography_tokens.png
├── P1_Language_Audit/
│   ├── language_codex_link.txt
│   ├── translation_report.md
│   └── bilingual_screenshots/
├── P2_Content_Consistency/
│   ├── content_audit_report.md
│   ├── hierarchy_report.md
│   └── page_screenshots/
├── P3_Translation_Audit/
│   ├── mapping_report.md
│   ├── context_report.md
│   └── quality_report.md
├── P4_Content_Structure/
│   ├── hierarchy_report.md
│   ├── meta_tags_report.md
│   └── cta_report.md
├── P5_UX_Audit/
│   ├── mobile_390px.png
│   ├── mobile_430px.png
│   ├── tablet_768px.png
│   ├── tablet_1024px.png
│   ├── desktop_1440px.png
│   ├── desktop_1920px.png
│   └── ux_report.md
├── P6_PWA_Audit/
│   ├── manifest.json
│   ├── icon_inventory.txt
│   ├── service_worker_log.txt
│   ├── offline_page.png
│   ├── install_prompt.png
│   └── splash_screen.png
├── P7_Technical_Audit/
│   ├── 404_page.png
│   ├── 500_page.png
│   ├── redirect_report.md
│   ├── security_headers.txt
│   ├── cache_report.md
│   ├── robots.txt
│   ├── sitemap.xml
│   └── lighthouse_report.html
├── P9_Legal_Audit/
│   ├── terms_page.png
│   ├── privacy_page.png
│   └── entity_report.md
└── SUMMARY.md
```

---

## Evidence Quality Rules

### Screenshot Rules
- Phải full page (không crop)
- Phải rõ ràng (không mờ)
- Phải có URL visible (nếu có thể)
- Phải có timestamp (nếu có thể)

### Report Rules
- Phải có date
- Phải have QA name
- Phải có verdict (PASS/FAIL)
- Phải có evidence links

### File Rules
- Phải có naming convention
- Phải có version
- Phải có checksum (nếu cần)

---

## Evidence Verification

### Automated Checks
- Screenshot tồn tại
- File size > 0
- File format đúng
- File naming convention đúng

### Manual Checks
- Screenshot rõ ràng
- Report đầy đủ
- Evidence relevant

---

## SUMMARY

**P0 — Brand Consistency:** ✅ Evidence complete
**P1 — Language Audit:** ⏳ Need create MASTER LANGUAGE CODEX
**P2 — Content Consistency:** ✅ Evidence complete
**P3 — Translation Audit:** ⏳ Need create translation system
**P4 — Content Structure:** ✅ Evidence complete
**P5 — UX Audit:** ⏳ Need verify mobile/tablet
**P6 — PWA Audit:** ⏳ Need verify PWA features
**P7 — Technical Audit:** ⏳ Need verify error pages, run Lighthouse
**P8 — Commerce Audit:** N/A
**P9 — Legal Audit:** ✅ Evidence complete

**Overall Status:** ⏳ Partially complete — Need verify remaining items

---

**Evidence Matrix filled.**
**Mostly complete for static homepage.**
**Need verify remaining items.**
