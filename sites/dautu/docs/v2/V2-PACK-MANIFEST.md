# DAUTU.MUONNOI.ORG + DAUTU.NHACHUNG.ORG — V2 DEV-READY PACK MANIFEST
**Version:** 2.0  
**Date:** 2026-06-11  
**Status:** Dev-ready

---

## What is in this pack

This V2 pack upgrades both investment portals with:
- Section-by-section copy cuối cùng
- FAQ đầy đủ (7-10 câu)
- Form labels chi tiết (10-11 fields)
- Footer legal wording chặt chẽ
- Metadata/OG hoàn chỉnh per page
- HTML đẹp hơn, responsive, dark theme

---

## File inventory

### dautu.muonnoi.org

| # | File | Contents | Lines |
|---|------|----------|-------|
| 1 | `docs/v2/DAUTU_MUONNOI_V2_COMPLETE_COPY.md` | Section-by-section copy, FAQ, form spec, legal footer, metadata, checklist | ~350 |
| 2 | `dist/index.v2.html` | Homepage HTML: hero, stats, 6 project cards, 6-step process, FAQ accordion, CTA, footer | 318 |

### dautu.nhachung.org

| # | File | Contents | Lines |
|---|------|----------|-------|
| 3 | `v2/DAUTU_NHACHUNG_V2_COMPLETE_COPY.md` | Section-by-section copy, 3-lane detail, FAQ, form spec, legal footer, metadata, checklist | ~300 |
| 4 | `index.v2.html` | Homepage HTML: hero, 3-lane cards, 2 project cards, 4-step process, FAQ accordion, CTA, footer | ~316 |

---

## Validation results

| Check | muonnoi index.v2 | nhachung index.v2 |
|-------|------------------|-------------------|
| Line count | 318 ✅ (< 500) | ~316 ✅ (< 500) |
| Risk banner | ✅ Top of page | ✅ Top of page |
| Legal footer | ✅ Detailed bar | ✅ Detailed bar |
| No equity/ROI/valuation | ✅ | ✅ |
| No invest-now CTA | ✅ | ✅ |
| OG tags | ✅ | ✅ |
| Canonical URL | ✅ | ✅ |
| Responsive | ✅ | ✅ |
| Mobile nav | ✅ Hamburger | ✅ Hamburger |
| Dark theme | ✅ | ✅ |

---

## Legal posture checklist (both portals)

| # | Check | muonnoi | nhachung |
|---|-------|---------|----------|
| 1 | No public investment solicitation | ✅ | ✅ |
| 2 | No direct transfer/payment flow | ✅ | ✅ |
| 3 | No equity % on public pages | ✅ | ✅ |
| 4 | No valuation numbers on public pages | ✅ | ✅ |
| 5 | No ROI / return projections | ✅ | ✅ |
| 6 | Risk banner visible on all pages | ✅ | ✅ |
| 7 | Legal footer on every page | ✅ | ✅ |
| 8 | CTA wording: interest/review/overview | ✅ | ✅ |
| 9 | Form has "not an investment transaction" checkbox | ✅ (spec) | ✅ (spec) |
| 10 | FAQ includes "not a public offer" Q&A | ✅ | ✅ |
| 11 | 3-lane separation (nhachung only) | N/A | ✅ |

---

## Next steps for team dev

1. **Rename V2 → production**
   ```bash
   mv index.v2.html index.html
   ```
   for both portals after review.

2. **Build remaining routes** from spec markdown:
   - /projects/ — project listing
   - /projects/maytinhai/ — project detail
   - /projects/nhachung/ — project detail
   - /interest/ — form page
   - /process/ — process page
   - /risk/ — risk disclosure
   - /legal/ — legal disclosure
   - /faq/ — standalone FAQ

3. **Implement forms** per V2 spec:
   - Progressive disclosure (multi-step)
   - Required checkboxes
   - Inline validation
   - Rate limiting (3/email/day)

4. **i18n:** vi primary, en secondary

5. **OG images:** Generate per-portal OG image (1200x630)

---

## Posture maintained

- Public portal = interest and qualified review only
- Private memo = separate, NDA-gated
- No securities solicitation on any public page
- Risk banner + legal footer on every page

---

**Pack compiled:** 2026-06-11  
**Compiled by:** AI assistant  
**Status:** Ready for dev handoff
