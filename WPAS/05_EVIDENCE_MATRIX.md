# EVIDENCE MATRIX
# EVIDENCE MATRIX

**System:** Website Production Acceptance System (WPAS)
**Version:** 1.0
**Created:** 2026-06-08
**Scope:** Toàn bộ hệ sinh thái website

---

## Mục tiêu

Định nghĩa evidence bắt buộc cho mỗi phase để QA không biến thành cảm tính.

---

## Evidence Requirements

### P0 — Brand Consistency

| Hạng mục | Bằng chứng bắt buộc | Format |
|----------|-------------------|--------|
| Domain | `curl -I`, screenshot browser, canonical URL | Screenshot + curl output |
| Sitemap | Link `/sitemap.xml`, danh sách URL đúng domain | Link + screenshot |
| Robots | Link `/robots.txt` | Link + screenshot |
| OG URL | View-source hoặc meta extraction | Screenshot + HTML source |
| Logo | Screenshot header/footer + asset path | Screenshot + file path |
| Favicon/PWA | Screenshot DevTools Application tab | Screenshot |
| Brand name | Search toàn repo + production HTML | Search result + screenshot |
| Color | CSS variables/design tokens | Screenshot + CSS source |
| Typography | CSS source + screenshot | Screenshot + CSS source |

### P1 — Language Audit

| Hạng mục | Bằng chứng bắt buộc | Format |
|----------|-------------------|--------|
| MASTER LANGUAGE CODEX | Link file vi.json/en.json hoặc codex | Link + screenshot |
| Bilingual consistency | Translation consistency report | Report + screenshot |
| Diacritic rules | Screenshot bilingual pages | Screenshot |
| Translation rules | Translation audit report | Report |

### P2 — Content Consistency

| Hạng mục | Bằng chứng bắt buộc | Format |
|----------|-------------------|--------|
| Content rules | Content audit report | Report |
| Content structure | Hierarchy audit report | Report + screenshot |
| Content quality | Content quality report | Report |
| Scope coverage | Screenshot từng page | Screenshot gallery |

### P3 — Translation Audit

| Hạng mục | Bằng chứng bắt buộc | Format |
|----------|-------------------|--------|
| 1-to-1 mapping | 1-to-1 mapping report | Report |
| Context consistency | Context consistency report | Report |
| Translation quality | Translation quality report | Report |
| Process | Process checklist | Checklist |

### P4 — Content Structure

| Hạng mục | Bằng chứng bắt buộc | Format |
|----------|-------------------|--------|
| Hierarchy | Hierarchy audit report | Report + screenshot |
| Meta tags | Meta tags audit report | Report + screenshot |
| CTA consistency | CTA audit report | Report + screenshot |

### P5 — UX Audit

| Hạng mục | Bằng chứng bắt buộc | Format |
|----------|-------------------|--------|
| Mobile (390px, 430px) | Screenshot mobile | Screenshot gallery |
| Tablet (768px, 1024px) | Screenshot tablet | Screenshot gallery |
| Desktop (1440px, 1920px) | Screenshot desktop | Screenshot gallery |
| Common issues | UX audit report | Report |

### P6 — PWA Audit

| Hạng mục | Bằng chứng bắt buộc | Format |
|----------|-------------------|--------|
| Manifest | Manifest file + validation | File + validation log |
| Icons | Icon inventory + screenshot | Inventory + screenshot |
| Service Worker | Service worker log + cache report | Log + report |
| Offline | Offline page screenshot | Screenshot |
| Install | Install prompt screenshot | Screenshot |
| Splash Screen | Splash screen screenshot | Screenshot |

### P7 — Technical Audit

| Hạng mục | Bằng chứng bắt buộc | Format |
|----------|-------------------|--------|
| Error pages | Screenshot 404/500 | Screenshot |
| Redirects | Redirect test report | Report |
| Security headers | curl -I headers | curl output |
| Cache policy | Cache headers report | Report |
| SEO | robots.txt + sitemap.xml content | File content |
| Lighthouse | Lighthouse report | Report (JSON/HTML) |

### P8 — Commerce Audit (nếu có)

| Hạng mục | Bằng chứng bắt buộc | Format |
|----------|-------------------|--------|
| Pricing | Pricing page screenshot | Screenshot |
| Checkout | Checkout flow screenshot | Screenshot gallery |
| Payment | Payment test report | Report |
| Invoice | Invoice sample | PDF/HTML |
| Email | Email templates | HTML/PDF |
| Refund | Refund policy screenshot | Screenshot |
| Terms | Terms screenshot | Screenshot |

### P9 — Legal Audit

| Hạng mục | Bằng chứng bắt buộc | Format |
|----------|-------------------|--------|
| Legal pages | Legal pages screenshot | Screenshot gallery |
| Entity disclosure | Entity verification report | Report |

---

## Evidence Pack Structure

```
/evidence/[domain]/[release-version]/
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
├── P8_Commerce_Audit/ (nếu có)
│   ├── pricing_page.png
│   ├── checkout_flow/
│   ├── payment_report.md
│   ├── invoice_sample.pdf
│   ├── email_templates/
│   ├── refund_policy.png
│   └── terms.png
├── P9_Legal_Audit/
│   ├── terms_page.png
│   ├── privacy_page.png
│   ├── cookie_policy.png (nếu có)
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
- Phải có QA name
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

## Authority

**Nguồn chân lý:** `/WPAS/05_EVIDENCE_MATRIX.md`
**Mọi QA phải tuân thủ evidence requirements.**
**Không có evidence = chưa PASS.**
