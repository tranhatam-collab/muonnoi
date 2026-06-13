# AUTOMATION RULES
# AUTOMATION RULES

**System:** Website Production Acceptance System (WPAS)
**Version:** 1.0
**Created:** 2026-06-08
**Scope:** Toàn bộ hệ sinh thái website

---

## Mục tiêu

Định nghĩa automation rules để AI/dev/script kiểm tự động.

---

## Machine-Checkable Rules

### P0 — Brand Consistency

#### CHECK_BRAND_DOMAIN_MATCH
**Description:** Kiểm tra domain production đúng chuẩn
**Check:**
- Parse HTML <title>
- Parse canonical URL
- Parse robots.txt sitemap URL
- Parse sitemap.xml URLs
- Tất cả phải match domain chuẩn

**Script:**
```javascript
const domain = "computer.iai.one";
const canonical = document.querySelector('link[rel="canonical"]')?.href;
const robotsSitemap = await fetch('/robots.txt').then(r => r.text());
const sitemapUrls = await fetch('/sitemap.xml').then(r => r.text());

if (!canonical.includes(domain)) return FAIL;
if (!robotsSitemap.includes(domain)) return FAIL;
if (!sitemapUrls.includes(domain)) return FAIL;
return PASS;
```

#### CHECK_CANONICAL_MATCH
**Description:** Kiểm tra canonical URL đúng domain
**Check:**
- Canonical URL phải match domain chuẩn
- Canonical URL không có query parameters (trừ khi cần)

**Script:**
```javascript
const domain = "computer.iai.one";
const canonical = document.querySelector('link[rel="canonical"]')?.href;

if (!canonical.includes(domain)) return FAIL;
if (canonical.includes('?') && !allowedParams.includes(canonical.split('?')[1])) return FAIL;
return PASS;
```

#### CHECK_OG_URL_MATCH
**Description:** Kiểm tra OG:URL đúng domain
**Check:**
- og:url phải match domain chuẩn

**Script:**
```javascript
const domain = "computer.iai.one";
const ogUrl = document.querySelector('meta[property="og:url"]')?.content;

if (!ogUrl.includes(domain)) return FAIL;
return PASS;
```

#### CHECK_MANIFEST_ICON_SET
**Description:** Kiểm tra manifest có đủ icon sizes
**Check:**
- Manifest phải có icons: 72x72, 96x96, 128x128, 144x144, 152x152, 192x192, 384x384, 512x512

**Script:**
```javascript
const manifest = await fetch('/manifest.webmanifest').then(r => r.json());
const requiredSizes = [72, 96, 128, 144, 152, 192, 384, 512];
const iconSizes = manifest.icons.map(icon => parseInt(icon.sizes));

for (const size of requiredSizes) {
  if (!iconSizes.includes(size)) return FAIL;
}
return PASS;
```

#### CHECK_FAVICON_SET
**Description:** Kiểm tra favicon có đủ sizes
**Check:**
- Favicon phải có: 16x16, 32x32, 180x180

**Script:**
```javascript
const favicon16 = document.querySelector('link[rel="icon"][sizes="16x16"]');
const favicon32 = document.querySelector('link[rel="icon"][sizes="32x32"]');
const favicon180 = document.querySelector('link[rel="apple-touch-icon"]');

if (!favicon16 || !favicon32 || !favicon180) return FAIL;
return PASS;
```

#### CHECK_BRAND_TOKEN_SET
**Description:** Kiểm tra CSS brand tokens có
**Check:**
- CSS variables: --brand-primary, --brand-secondary, --brand-accent

**Script:**
```javascript
const styles = getComputedStyle(document.documentElement);
const primary = styles.getPropertyValue('--brand-primary');
const secondary = styles.getPropertyValue('--brand-secondary');
const accent = styles.getPropertyValue('--brand-accent');

if (!primary || !secondary || !accent) return FAIL;
return PASS;
```

#### CHECK_LOGO_SOURCE_PATH
**Description:** Kiểm tra logo source path đúng
**Check:**
- Logo img src phải match canonical path

**Script:**
```javascript
const canonicalPath = "/brand/computer/logo-primary.svg";
const logoSrc = document.querySelector('.logo img')?.src;

if (!logoSrc.includes(canonicalPath)) return FAIL;
return PASS;
```

#### CHECK_LEGAL_ENTITY_NAME_MATCH
**Description:** Kiểm tra entity name đúng
**Check:**
- Footer legal name phải match entity name chuẩn

**Script:**
```javascript
const entityName = "Computer IAI One Ltd";
const footerLegal = document.querySelector('.footer-legal')?.textContent;

if (!footerLegal.includes(entityName)) return FAIL;
return PASS;
```

---

### P1 — Language Audit

#### CHECK_LANGUAGE_CODEX_EXISTS
**Description:** Kiểm tra MASTER LANGUAGE CODEX tồn tại
**Check:**
- File vi.json hoặc LANGUAGE_CODEX_MASTER_VI.md tồn tại
- File en.json hoặc LANGUAGE_CODEX_MASTER_EN.md tồn tại

**Script:**
```javascript
const viCodex = await fetch('/content/vi.json').then(r => r.json()).catch(() => null);
const enCodex = await fetch('/content/en.json').then(r => r.json()).catch(() => null);

if (!viCodex || !enCodex) return FAIL;
return PASS;
```

#### CHECK_BILINGUAL_HREFLANG
**Description:** Kiểm tra hreflang tags có
**Check:**
- hreflang vi-VN và en-US phải có

**Script:**
```javascript
const viHreflang = document.querySelector('link[rel="alternate"][hreflang="vi-VN"]');
const enHreflang = document.querySelector('link[rel="alternate"][hreflang="en-US"]');

if (!viHreflang || !enHreflang) return FAIL;
return PASS;
```

---

### P7 — Technical Audit

#### CHECK_SECURITY_HEADERS
**Description:** Kiểm tra security headers có
**Check:**
- X-Content-Type-Options
- X-Frame-Options
- Referrer-Policy
- Permissions-Policy
- Strict-Transport-Security
- Content-Security-Policy

**Script:**
```javascript
const headers = await fetch('/', { method: 'HEAD' }).then(r => r.headers);

const required = [
  'x-content-type-options',
  'x-frame-options',
  'referrer-policy',
  'permissions-policy',
  'strict-transport-security',
  'content-security-policy'
];

for (const header of required) {
  if (!headers.get(header)) return FAIL;
}
return PASS;
```

#### CHECK_ROBOTS_TXT
**Description:** Kiểm tra robots.txt có
**Check:**
- robots.txt phải tồn tại
- Sitemap link phải đúng domain

**Script:**
```javascript
const robots = await fetch('/robots.txt').then(r => r.text());
const domain = "computer.iai.one";

if (!robots.includes('Sitemap')) return FAIL;
if (!robots.includes(domain)) return FAIL;
return PASS;
```

#### CHECK_SITEMAP_XML
**Description:** Kiểm tra sitemap.xml có
**Check:**
- sitemap.xml phải tồn tại
- URLs phải đúng domain

**Script:**
```javascript
const sitemap = await fetch('/sitemap.xml').then(r => r.text());
const domain = "computer.iai.one";

if (!sitemap.includes(domain)) return FAIL;
return PASS;
```

#### CHECK_LIGHTHOUSE_SCORES
**Description:** Kiểm tra Lighthouse scores
**Check:**
- Performance ≥ 90
- SEO ≥ 90
- Accessibility ≥ 90
- Best Practices ≥ 90

**Script:**
```javascript
// Run Lighthouse CLI
const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');

const chrome = await chromeLauncher.launch();
const options = { logLevel: 'info', output: 'json', port: chrome.port };
const runnerResult = await lighthouse('https://computer.iai.one', options);

const scores = {
  performance: runnerResult.categories.performance.score * 100,
  seo: runnerResult.categories.seo.score * 100,
  accessibility: runnerResult.categories.accessibility.score * 100,
  'best-practices': runnerResult.categories['best-practices'].score * 100
};

for (const [key, score] of Object.entries(scores)) {
  if (score < 90) return FAIL;
}
return PASS;
```

---

## Automation Script Template

```bash
#!/bin/bash
# WPAS Automation Script
# Usage: ./wpas-check.sh [domain]

DOMAIN=$1
PHASES="P0 P1 P2 P3 P4 P5 P6 P7 P8 P9"

echo "Starting WPAS automation check for $DOMAIN"

for phase in $PHASES; do
  echo "Checking $phase..."
  
  # Run phase-specific checks
  node scripts/check-$phase.js $DOMAIN
  
  if [ $? -ne 0 ]; then
    echo "FAILED: $phase"
    exit 1
  fi
  
  echo "PASSED: $phase"
done

echo "All phases PASSED"
```

---

## CI/CD Integration

### GitHub Actions Example

```yaml
name: WPAS Automation Check

on: [push, pull_request]

jobs:
  wpas-check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm install
      - name: Run WPAS checks
        run: ./scripts/wpas-check.sh ${{ secrets.DOMAIN }}
```

---

## Authority

**Nguồn chân lý:** `/WPAS/07_AUTOMATION_RULES.md`
**Mọi dev, AI agent, CI/CD phải tuân thủ.**
**Automation rules phải chạy trước deploy.**
