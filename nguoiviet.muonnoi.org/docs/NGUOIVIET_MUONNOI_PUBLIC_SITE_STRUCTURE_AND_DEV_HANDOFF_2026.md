# NGƯỜI VIỆT MUÔN NƠI — PUBLIC SITE STRUCTURE AND DEV HANDOFF
## Mã: `NGUOIVIET_MUONNOI_PUBLIC_SITE_STRUCTURE_AND_DEV_HANDOFF_2026.md`
**Ngày**: 2026-06-12
**Trạng thái**: LOCKED — DEV READY
**Owner**: Founder + Web Team

---

## I. SITEMAP NGƯỜI VIỆT MUÔN NƠI (8 KHU CHÍNH)

### 1. Homepage (/)
**Mục đích**: Giới thiệu tổng quan sứ mệnh, chương trình, cách tham gia

**Nội dung**:
- Hero: "Người Việt Muôn Nơi — kết nối, xác thực và lan tỏa giá trị người Việt toàn cầu"
- Lead: "Một cộng đồng toàn cầu dành cho người Việt trong và ngoài nước, nơi mỗi câu chuyện được lưu giữ, mỗi người có thể kết nối đúng cộng đồng, mỗi mentor được xác thực, và mỗi thế hệ sau được nâng đỡ bằng trách nhiệm."
- 3–4 chương trình trọng điểm (DSTS, Mentor Network, Story Library, Dream Nurture)
- CTA: Tham gia danh sách chờ, Chia sẻ câu chuyện, Đăng ký làm mentor, Trở thành đối tác cộng đồng

**Status badges**: [CONTENT_READY] [DO_NOT_CLAIM_LEGAL_REVIEWED] [COMMUNITY_INITIATIVE_POSTURE] [NOT_A_PUBLIC_SECURITIES_OFFERING]

---

### 2. Sứ mệnh & Tác động (/mission)
**Mục đích**: Giải thích rõ sứ mệnh, theory of change, ai được phục vụ

**Nội dung**:
- Mission statement
- Theory of change
- Ai được phục vụ (người trẻ Việt Nam, người Việt toàn cầu, đối tác, địa phương)
- Tác động mong muốn 1–3–5 năm
- Nguyên tắc không vụ lợi cá nhân / không overclaim

---

### 3. Chương trình (/programs)
**Mục đích**: Hiển thị các chương trình trọng điểm

**Nội dung**:
- Đường Sao Tỏa Sáng (flagship program) → link sang duongsaotoasang.com
- Học tập & công nghệ
- Việc làm & chuyển đổi nghề
- Cộng đồng & Nhà Chung
- Người Việt toàn cầu / diaspora

---

### 4. Chapters / Hubs (/chapters)
**Mục đích**: Hiển thị chapter theo quốc gia/thành phố

**Nội dung**:
- Việt Nam
- Bắc Mỹ (US, Canada)
- Úc
- Châu Âu
- Online global community
- CTA: Đăng ký chapter builder

---

### 5. Tham gia (/join)
**Mục đích**: CTA cho các vai trò tham gia

**Nội dung**:
- Volunteer
- Mentor
- Donor
- Partner
- Chapter builder
- Community member
- Mỗi vai trò có form riêng với lane selector

---

### 6. Governance (/governance)
**Mục đích**: Thể hiện legal posture, advisory council, operating principles

**Nội dung**:
- Legal posture (Phase 1: community initiative)
- Advisory council (khi có)
- Operating principles
- Safeguarding / data / child safety nếu có youth
- Disclosures
- Status badges

---

### 7. Reports / Stories / Impact (/impact)
**Mục đích**: Báo cáo tác động, case studies, stories

**Nội dung**:
- Báo cáo tác động (khi có)
- Case studies (khi có)
- Stories
- Learning reports
- Milestones
- CTA: Chia sẻ câu chuyện của bạn

---

### 8. Donate / Partner / Strategic Support (/support)
**Mục đích**: Rất thận trọng về donation, partnership

**Nội dung**:
- Donate (chỉ khi legal-ready)
- Grant support
- Strategic partnership
- Sponsor a program
- Request private discussion
- Status badges: [NOT_A_PUBLIC_SECURITIES_OFFERING]

---

## II. PAGES CẦN TẠO (Giai đoạn 1)

```
nguoiviet.muonnoi.org/
├── index.html                  ← Homepage (8 sections)
├── mission.html                ← Sứ mệnh & Tác động
├── programs.html               ← Chương trình
├── chapters.html               ← Chapters / Hubs
├── join.html                   ← Tham gia (forms)
├── governance.html              ← Governance
├── impact.html                 ← Reports / Stories / Impact
├── support.html                ← Donate / Partner / Strategic Support
├── safety.html                 ← Child safety / safeguarding
├── contact.html                ← Liên hệ
├── legal.html                  ← Terms, privacy
├── 404.html
├── _headers                    ← CSP + security headers
├── _redirects                  ← Clean URLs
├── robots.txt
├── sitemap.xml
├── manifest.json
└── assets/
    ├── ui.css                  ← Muôn Nơi v2.0 design tokens
    └── app.js                  ← Theme + lang toggle + mobile menu
```

---

## III. LEGAL FOOTER (BẮT BUỘC)

Trên mọi trang, footer phải có:

```
© 2026 Người Việt Muôn Nơi
Global Vietnamese Community Initiative
Legal: Terms · Privacy · Child Safety · Governance
Status: [COMMUNITY_INITIATIVE_POSTURE] — entity pending
Ecosystem: Muôn Nơi · DSTS · verify.iai.one · pay.iai.one
```

---

## IV. SITEMAP XML

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://nguoiviet.muonnoi.org/</loc><priority>1.0</priority></url>
  <url><loc>https://nguoiviet.muonnoi.org/mission/</loc><priority>0.9</priority></url>
  <url><loc>https://nguoiviet.muonnoi.org/programs/</loc><priority>0.9</priority></url>
  <url><loc>https://nguoiviet.muonnoi.org/chapters/</loc><priority>0.8</priority></url>
  <url><loc>https://nguoiviet.muonnoi.org/join/</loc><priority>0.9</priority></url>
  <url><loc>https://nguoiviet.muonnoi.org/governance/</loc><priority>0.7</priority></url>
  <url><loc>https://nguoiviet.muonnoi.org/impact/</loc><priority>0.7</priority></url>
  <url><loc>https://nguoiviet.muonnoi.org/support/</loc><priority>0.6</priority></url>
  <url><loc>https://nguoiviet.muonnoi.org/safety/</loc><priority>0.8</priority></url>
  <url><loc>https://nguoiviet.muonnoi.org/contact/</loc><priority>0.5</priority></url>
  <url><loc>https://nguoiviet.muonnoi.org/legal/</loc><priority>0.5</priority></url>
</urlset>
```

---

## V. SECURITY HEADERS (_headers)

```
/*
  Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  Referrer-Policy: no-referrer
  Permissions-Policy: accelerometer=(), autoplay=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()
  Content-Security-Policy: default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'none'; form-action 'self'; img-src 'self' data: https://www.muonnoi.org https://duongsaotoasang.com; font-src 'self' data:; style-src 'self'; script-src 'self'; connect-src 'self' https://api.muonnoi.org; manifest-src 'self'; upgrade-insecure-requests
  Cross-Origin-Embedder-Policy: require-corp
  Cross-Origin-Opener-Policy: same-origin
  Cross-Origin-Resource-Policy: same-origin
```

---

## VI. REDIRECTS (_redirects)

```
# Clean URLs
/mission /mission.html 301
/programs /programs.html 301
/chapters /chapters.html 301
/join /join.html 301
/governance /governance.html 301
/impact /impact.html 301
/support /support.html 301
/safety /safety.html 301
/contact /contact.html 301
/legal /legal.html 301

# Wix legacy (giữ từ master plan cũ)
/cuoc-song-muon-noi /programs/ 301
/hanh-trinh /programs/ 301
/csmn /programs/ 301
/tham-gia /join/ 301
/groups /join/ 301
/plans-pricing /join/ 301
/file-share /impact/ 301
/blog /impact/ 301
/event-list /programs/ 301
/book-online /join/ 301
```

---

## VII. META TAGS (MỌI TRANG)

```html
<title>Người Việt Muôn Nơi — Kết nối, xác thực và lan tỏa giá trị người Việt toàn cầu</title>
<meta name="description" content="Người Việt Muôn Nơi là sáng kiến cộng đồng toàn cầu dành cho người Việt trong và ngoài nước, nơi mỗi câu chuyện được lưu giữ, mỗi người có thể kết nối đúng cộng đồng, mỗi mentor được xác thực, và mỗi thế hệ sau được nâng đỡ bằng trách nhiệm." />
<link rel="canonical" href="https://nguoiviet.muonnoi.org/" />
<meta property="og:type" content="website" />
<meta property="og:title" content="Người Việt Muôn Nơi — Kết nối, xác thực và lan tỏa giá trị người Việt toàn cầu" />
<meta property="og:description" content="Sáng kiến cộng đồng toàn cầu dành cho người Việt trong và ngoài nước." />
<meta property="og:image" content="https://nguoiviet.muonnoi.org/assets/og.png" />
<meta property="og:url" content="https://nguoiviet.muonnoi.org/" />
<meta property="og:site_name" content="Người Việt Muôn Nơi · Muôn Nơi" />
<meta name="twitter:card" content="summary_large_image" />
```

---

## VIII. DEV CHECKLIST (Giai đoạn 1 — 14 ngày)

**Giai đoạn 1 — Public posture safe**
- [ ] Tạo trang /mission
- [ ] Tạo trang /safety
- [ ] Tạo trang /chapters
- [ ] Tạo trang /programs (bridge sang DSTS)
- [ ] Tạo trang /join (forms)
- [ ] Tạo trang /governance
- [ ] Tạo trang /impact
- [ ] Tạo trang /support
- [ ] Tạo trang /contact
- [ ] Tạo trang /legal
- [ ] Footer legal: "global nonprofit direction — entity pending"
- [ ] Thêm status badges trên mọi trang
- [ ] Không để bank account public
- [ ] Không để "đầu tư ngay / góp vốn ngay"
- [ ] Deploy và verify

**Giai đoạn 2 — DSTS bridge**
- [ ] Trang DSTS hiển thị rõ thuộc hệ Người Việt Muôn Nơi
- [ ] Link 3 trụ: Story Library / Mentor Network / Dream Nurture
- [ ] Không child intake
- [ ] Không donation checkout
- [ ] Không investment CTA

**Giai đoạn 3 — Interest forms**
- [ ] Join waitlist form
- [ ] Share your story form
- [ ] Apply as mentor form
- [ ] Partner interest form
- [ ] Volunteer interest form
- [ ] Form chỉ thu tối thiểu: name, email, country, role, interest type, consent checkbox

**Giai đoạn 4 — Transparency foundation**
- [ ] /transparency
- [ ] /governance
- [ ] /policies
- [ ] /child-safety
- [ ] /privacy
- [ ] /nonprofit-roadmap

---

## IX. RE-DEPLOY COMMAND

```bash
cd /Users/tranhatam/Documents/Devnewproject/muonnoi.org/nguoiviet.muonnoi.org
CLOUDFLARE_ACCOUNT_ID=f3f9e76222dcb488d5e303e29e8ba192 \
  wrangler pages deploy public \
  --project-name nguoiviet-muonnoi-org \
  --branch main \
  --commit-dirty=true
```

---

## X. DNS (MANUAL STEP REQUIRED)

**Current DNS (broken)**:
```
nguoiviet.muonnoi.org   CNAME   pointing.wixdns.net.
```

**Required DNS (target)**:
```
nguoiviet.muonnoi.org   CNAME   nguoiviet-muonnoi-org.pages.dev.   (Proxied — orange cloud ON)
```

Manual update steps (Cloudflare Dashboard):
1. Login → Tranhatam@gmail.com's Account → muonnoi.org zone
2. DNS · Records
3. Find record `nguoiviet` (CNAME → pointing.wixdns.net)
4. Edit → Change Target to: nguoiviet-muonnoi-org.pages.dev
5. Ensure Proxy status: Proxied (orange cloud ON)
6. Save

DNS propagation: 1–5 minutes
Pages SSL provisioning: 5–15 minutes after DNS is correct

---

**Phê duyệt**: Founder · 2026-06-12
**Triển khai**: Web Team
**Theo dõi**: Founder Gates checklist
