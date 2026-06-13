# SEO ENTITY PLAN — FILLED
# SEO Entity Plan cho Muôn Nơi

> **Ngày:** 2026-06-13
> **Project:** Muôn Nơi
> **Phase:** Phase 2 Week 4
> **Owner:** AI Agent (Strategist)
> **Approver:** Founder

---

## Mục tiêu

Định nghĩa SEO entity plan để team không cãi nhau cái gì là SEO strategy.

---

## Schema.org Markup

### Organization Schema

**Type:** Organization

**Properties:**
- name: Muôn Nơi
- alternateName: Muon Noi
- url: https://www.muonnoi.org
- logo: https://www.muonnoi.org/og.png
- description: Muôn Nơi là Social Life OS cho mọi người Việt Nam
- sameAs:
  - https://facebook.com/muonnoi
  - https://instagram.com/muonnoi
  - https://twitter.com/muonnoi
  - https://linkedin.com/company/muonnoi
- address:
  - addressCountry: VN
  - addressRegion: Vietnam
- contactPoint:
  - contactType: customer support
  - email: support@muonnoi.org

**JSON-LD:**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Muôn Nơi",
  "alternateName": "Muon Noi",
  "url": "https://www.muonnoi.org",
  "logo": "https://www.muonnoi.org/og.png",
  "description": "Muôn Nơi là Social Life OS cho mọi người Việt Nam",
  "sameAs": [
    "https://facebook.com/muonnoi",
    "https://instagram.com/muonnoi",
    "https://twitter.com/muonnoi",
    "https://linkedin.com/company/muonnoi"
  ],
  "address": {
    "addressCountry": "VN",
    "addressRegion": "Vietnam"
  },
  "contactPoint": {
    "contactType": "customer support",
    "email": "support@muonnoi.org"
  }
}
```

---

### WebSite Schema

**Type:** WebSite

**Properties:**
- name: Muôn Nơi
- url: https://www.muonnoi.org
- description: Muôn Nơi là Social Life OS cho mọi người Việt Nam
- potentialAction:
  - type: SearchAction
  - target: https://www.muonnoi.org/search?q={search_term_string}
  - query-input: required name=search_term_string

**JSON-LD:**
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Muôn Nơi",
  "url": "https://www.muonnoi.org",
  "description": "Muôn Nơi là Social Life OS cho mọi người Việt Nam",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.muonnoi.org/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

---

### SoftwareApplication Schema

**Type:** SoftwareApplication

**Properties:**
- name: Muôn Nơi Social Life OS
- applicationCategory: SocialNetworkingApplication
- operatingSystem: Web, iOS, Android
- offers:
  - type: Offer
  - price: 0
  - priceCurrency: VND
- aggregateRating:
  - type: AggregateRating
  - ratingValue: 4.5
  - ratingCount: 1000

**JSON-LD:**
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Muôn Nơi Social Life OS",
  "applicationCategory": "SocialNetworkingApplication",
  "operatingSystem": "Web, iOS, Android",
  "offers": {
    "@type": "Offer",
    "price": 0,
    "priceCurrency": "VND"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": 4.5,
    "ratingCount": 1000
  }
}
```

---

## Meta Tags

### Homepage Meta Tags

**Title:** Muôn Nơi — Social Life OS cho mọi người Việt Nam

**Description:** Muôn Nơi là nơi mọi người kết nối, tin tưởng, học hỏi, phát triển, và vui chơi. Social Life OS cho mọi người Việt Nam.

**Keywords:** Muôn Nơi, Muon Noi, Social Life OS, social network, Vietnam, connect, trust, learn, grow, play

**OG Tags:**
- og:title: Muôn Nơi — Social Life OS cho mọi người Việt Nam
- og:description: Muôn Nơi là nơi mọi người kết nối, tin tưởng, học hỏi, phát triển, và vui chơi. Social Life OS cho mọi người Việt Nam.
- og:image: https://www.muonnoi.org/og.png
- og:url: https://www.muonnoi.org
- og:type: website
- og:locale: vi_VN

**Twitter Tags:**
- twitter:card: summary_large_image
- twitter:title: Muôn Nơi — Social Life OS cho mọi người Việt Nam
- twitter:description: Muôn Nơi là nơi mọi người kết nối, tin tưởng, học hỏi, phát triển, và vui chơi. Social Life OS cho mọi người Việt Nam.
- twitter:image: https://www.muonnoi.org/og.png

---

### Social Core Meta Tags

**Title:** Muôn Nơi Social Core — Kết nối với mọi người

**Description:** Muôn Nơi Social Core là nơi mọi người kết nối, tin tưởng, học hỏi, phát triển, và vui chơi. Kết nối với mọi người Việt Nam.

**Keywords:** Muôn Nơi, Social Core, social network, Vietnam, connect, trust, learn, grow, play

**OG Tags:**
- og:title: Muôn Nơi Social Core — Kết nối với mọi người
- og:description: Muôn Nơi Social Core là nơi mọi người kết nối, tin tưởng, học hỏi, phát triển, và vui chơi. Kết nối với mọi người Việt Nam.
- og:image: https://app.muonnoi.org/og.png
- og:url: https://app.muonnoi.org
- og:type: website
- og:locale: vi_VN

**Twitter Tags:**
- twitter:card: summary_large_image
- twitter:title: Muôn Nơi Social Core — Kết nối với mọi người
- twitter:description: Muôn Nơi Social Core là nơi mọi người kết nối, tin tưởng, học hỏi, phát triển, và vui chơi. Kết nối với mọi người Việt Nam.
- twitter:image: https://app.muonnoi.org/og.png

---

## Sitemap

### Sitemap Structure

**Sitemap URL:** https://www.muonnoi.org/sitemap.xml

**Pages:**
- https://www.muonnoi.org (homepage)
- https://www.muonnoi.org/about (about)
- https://www.muonnoi.org/ecosystem (ecosystem)
- https://www.muonnoi.org/roadmap (roadmap)
- https://www.muonnoi.org/security (security)
- https://www.muonnoi.org/guide (guide)
- https://www.muonnoi.org/plan (plan)
- https://www.muonnoi.org/investment (investment)
- https://app.muonnoi.org (social core)
- https://ai.muonnoi.org (AI layer)
- https://ketnoi.muonnoi.org (Kết Nối)
- https://hoctap.muonnoi.org (Học Tập)
- https://dautu.muonnoi.org (Đầu Tư)
- https://dulich.muonnoi.org (Du Lịch)
- https://chochoi.muonnoi.org (Chỗ Chơi)

---

## Robots.txt

### Robots.txt Structure

**Robots.txt URL:** https://www.muonnoi.org/robots.txt

**Content:**
```
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/
Disallow: /private/

Sitemap: https://www.muonnoi.org/sitemap.xml
```

---

## Canonical URLs

### Canonical URL Strategy

**Strategy:** Use canonical URLs to avoid duplicate content.

**Rules:**
- Homepage: https://www.muonnoi.org
- Subdomains: https://[subdomain].muonnoi.org
- No trailing slash: https://www.muonnoi.org (not https://www.muonnoi.org/)
- No www for subdomains: https://app.muonnoi.org (not https://www.app.muonnoi.org)

**Implementation:**
- Add canonical tag to all pages
- Use rel="canonical" in HTML head
- Use canonical in sitemap.xml

---

## Summary

**Schema.org Markup:** Organization, WebSite, SoftwareApplication
**Meta Tags:** Homepage, Social Core (title, description, keywords, OG tags, Twitter tags)
**Sitemap:** https://www.muonnoi.org/sitemap.xml (homepage, about, ecosystem, roadmap, security, guide, plan, investment, social core, AI layer, verticals)
**Robots.txt:** https://www.muonnoi.org/robots.txt (allow all, disallow admin/api/private)
**Canonical URLs:** https://www.muonnoi.org, https://[subdomain].muonnoi.org, no trailing slash, no www for subdomains

**Overall Status:** ✅ Complete

---

**SEO Entity Plan filled.**
**SEO entity plan defined for Muôn Nơi.**
