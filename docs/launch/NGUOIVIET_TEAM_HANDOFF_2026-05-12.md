# Người Việt Muôn Nơi · Team Handoff — 2026-05-12

## Bối cảnh

Nhánh Vietnamese Global Journey (Người Việt Muôn Nơi) vừa được tách khỏi site Wix legacy `nguoivietmuonnoi.com` và deploy mới trên Cloudflare Pages tại `https://nguoiviet-muonnoi-org.pages.dev/`, đồng thời attach custom domain `nguoiviet.muonnoi.org` (DNS đang chờ swap khỏi Wix). Site mới đã áp dụng brand v2.0 (Azure/Whisper/Gold tokens, Be Vietnam Pro, header/footer khớp `www.muonnoi.org`) và đạt rubric 92/100 tại deploy time. Mục tiêu trong 14 ngày tới là đẩy rubric lên 100/100 thông qua sáu workstream song song: content, brand, SEO, legal, DNS/platform, operations. Handoff này phân vai rõ, lock deliverable đo được, và quy định gate phê duyệt theo ngày để Founder ký xác nhận từng bước trước khi mở public traffic và bật chương trình pilot Đà Lạt intake.

## 6 Workstreams song song

### WS1 — Web team (content + page extension)
- **Owner**: Web Lead
- **Scope**: Bổ sung các route còn thiếu trên `nguoiviet.muonnoi.org`, hoàn thiện 10 sections homepage (hero, manifesto, journey map, quest grid, trust strip, pilot CTA, newsletter, ecosystem cross-links, FAQ, footer), bật VI/EN toggle persistence (localStorage), skip-link, reduced-motion guard. Đồng bộ infoCard trên `www.muonnoi.org` với copy/CTA chính thức.
- **Files**:
  - `nguoiviet.muonnoi.org/index.html`
  - `nguoiviet.muonnoi.org/about/`, `/journey/`, `/pilot/`, `/community/`, `/contact/`
  - `nguoiviet.muonnoi.org/assets/css/ui.css`, `assets/js/ui.js`
  - `apps/web/public/index.html` (infoCard block linking to nguoiviet)
- **DoD**:
  - Tất cả 11 routes trả `200` qua `curl -I`.
  - VI/EN toggle giữ trạng thái sau reload.
  - Lighthouse desktop content score >= 95.
  - Zero console errors trên `/` và 5 subpages.
- **Deadline**: 2026-05-14

### WS2 — Brand team (assets + visual consistency)
- **Owner**: Brand Lead
- **Scope**: Xuất `og.png` (1200x630, brand v2.0), favicon set (16/32/180/512), social card, hero illustration. Audit token usage so với brand kit (Azure `#0E4F8B`, Whisper `#F4F1EA`, Gold `#C4A24C`). Đảm bảo zero Wix leftover (font Avenir/Helvetica fallback, màu Wix template, asset URL `static.wixstatic.com`).
- **Files**:
  - `nguoiviet.muonnoi.org/assets/img/og.png`
  - `nguoiviet.muonnoi.org/assets/img/favicon-*.png`
  - `nguoiviet.muonnoi.org/manifest.webmanifest`
  - `nguoiviet.muonnoi.org/index.html` (meta og:image, twitter:image)
- **DoD**:
  - `curl -I https://nguoiviet.muonnoi.org/assets/img/og.png` trả `200` và `Content-Type: image/png`.
  - OpenGraph debugger (Facebook/Twitter) render đúng image + title.
  - Brand lint script (`scripts/brand-lint.sh`) pass 0 warnings cho subtree `nguoiviet/`.
- **Deadline**: 2026-05-15

### WS3 — SEO team (Search Console + sitemap submission)
- **Owner**: SEO Lead
- **Scope**: Verify property `nguoiviet.muonnoi.org` trên Google Search Console (DNS TXT method), submit sitemap, thêm canonical + hreflang VI/EN cho 11 routes, schema.org `Organization` + `WebSite` JSON-LD, robots.txt allow + sitemap pointer. Đăng ký Bing Webmaster tools.
- **Files**:
  - `nguoiviet.muonnoi.org/sitemap.xml`
  - `nguoiviet.muonnoi.org/robots.txt`
  - `nguoiviet.muonnoi.org/index.html` (JSON-LD block, hreflang)
- **DoD**:
  - Sitemap status `Success` trên Search Console.
  - 11/11 URLs indexed trong 7 ngày (hoặc submit individual cho URL chậm).
  - `curl https://nguoiviet.muonnoi.org/sitemap.xml` trả `200 + application/xml`.
- **Deadline**: 2026-05-16 (chạy sau WS5 Gate 3 DNS swap)

### WS4 — Legal/Compliance team (privacy/terms/refund)
- **Owner**: Legal counsel + Founder
- **Scope**: Soạn và publish 4 trang pháp lý: `/legal/privacy/`, `/legal/terms/`, `/legal/refund/`, `/legal/community-guidelines/`. Đảm bảo zero hứa hẹn thu nhập (claim-safe), tuân thủ Luật An ninh mạng VN, GDPR cho diaspora EU, CCPA cho diaspora US. Footer disclaimer trên mọi route.
- **Files**:
  - `nguoiviet.muonnoi.org/legal/privacy/index.html`
  - `nguoiviet.muonnoi.org/legal/terms/index.html`
  - `nguoiviet.muonnoi.org/legal/refund/index.html`
  - `nguoiviet.muonnoi.org/legal/community-guidelines/index.html`
  - Footer partial trong `assets/js/ui.js`
- **DoD**:
  - 4 trang live, `curl -I` trả `200`.
  - Founder ký xác nhận nội dung trong Gate 1.
  - Brand QA xác nhận không có claim "thu nhập", "lương", "việc làm chắc chắn".
- **Deadline**: 2026-05-13 (Gate 1)

### WS5 — DNS/Platform team (DNS swap + Wix redirect)
- **Owner**: Platform Lead (Founder thao tác Cloudflare dashboard)
- **Scope**: Thực hiện DNS swap `nguoiviet.muonnoi.org` từ Wix CNAME sang Cloudflare Pages, lock `_headers`/`_redirects` cho 13 Wix URL legacy, deploy 301 redirect rule trên `nguoivietmuonnoi.com` (Wix Dashboard hoặc Cloudflare Worker proxy) trỏ về subpath tương ứng. Cập nhật DNS matrix doc.
- **Files**:
  - `nguoiviet.muonnoi.org/_redirects`
  - `nguoiviet.muonnoi.org/_headers`
  - `docs/launch/MUONNOI_SUBDOMAIN_DNS_CUSTOM_DOMAIN_MATRIX_2026-05-12.md`
  - Wix dashboard: forwarding rules
- **DoD**:
  - `dig nguoiviet.muonnoi.org` trả Cloudflare IP.
  - `curl -I https://nguoiviet.muonnoi.org/` trả `200` qua Cloudflare edge (`cf-ray` header).
  - 13/13 Wix legacy URL trả `301` về `nguoiviet.muonnoi.org/...` tương ứng (verify trong test sheet).
- **Deadline**: 2026-05-15 (Gate 3), Wix redirect 2026-05-19 (Gate 4)

### WS6 — Operations team (Đà Lạt pilot intake)
- **Owner**: Ops Lead
- **Scope**: Wire form `/pilot/` lên backend intake (Formspree hoặc `api.muonnoi.org/v1/intake`), chuẩn bị email auto-reply VI/EN, soạn SOP duyệt đơn pilot Đà Lạt, set up Notion CRM cho intake pipeline, ngân sách quota 30 slots cho pilot batch 1.
- **Files**:
  - `nguoiviet.muonnoi.org/pilot/index.html` (form action)
  - `api/contracts/PILOT_INTAKE_SCHEMA.md` (mới hoặc reuse)
  - SOP doc `docs/operations/NGUOIVIET_PILOT_DALAT_SOP_2026-05-12.md`
- **DoD**:
  - Form submit thành công, email auto-reply tới inbox test.
  - Notion CRM nhận 1 test record.
  - SOP được Founder approve.
- **Deadline**: 2026-05-19

## Dependencies & critical path

```
Day 0 (2026-05-12) — Deploy done, custom domain attached, DNS pending
   |
   +-- WS4 Legal (Day 1) ───── Gate 1 ──┐
   |                                     |
   +-- WS1 Web content (Day 2) ──────────┤
   |                                     |
   +-- WS2 Brand assets (Day 3) ────────┤
   |                                     ↓
   +-- WS5 DNS swap (Day 3) ── Gate 3 ── Public live on canonical URL
                                         |
                                         ↓
                            WS3 SEO submit (Day 4) ── Gate 2
                                         |
                                         ↓
                         WS5 Wix redirect (Day 7) ── Gate 4
                                         |
                                         ↓
                          WS6 Pilot intake (Day 7-14)
                                         |
                                         ↓
                            Gate 5 (Day 14): rubric 100/100
```

Critical path: WS4 → WS5 (DNS) → WS3 (SEO) → WS5 (Wix redirect). WS1/WS2/WS6 chạy song song nhưng không block public-go-live miễn là Gate 3 pass với content tối thiểu.

## Approval gates

- **Gate 1 (Day 1, 2026-05-13)**: Web team builds privacy/terms/refund/community pages — Founder review nội dung pháp lý, ký xác nhận trước khi merge.
- **Gate 2 (Day 2, 2026-05-14)**: SEO submits sitemap — verify Search Console property + sitemap status `Success`, screenshot evidence.
- **Gate 3 (Day 3, 2026-05-15)**: DNS swap executed — verify `https://nguoiviet.muonnoi.org/` live qua Cloudflare edge, `curl` + `dig` evidence, no Wix headers.
- **Gate 4 (Day 7, 2026-05-19)**: Wix redirect activated — verify 13 legacy URLs trả `301` về subpath đúng, log file Wix forwarding.
- **Gate 5 (Day 14, 2026-05-26)**: Rubric 100/100 sign-off — chạy lại checklist `NGUOIVIET_QA_CHECKLIST_2026-05-12.md`, đạt 60+/60+ items, Founder ký final.

## Risks

- **DNS propagation chậm**: TTL Wix có thể lên tới 24-48h. Mitigation: lower TTL xuống 300s ít nhất 24h trước khi swap.
- **Wix redirect không support 301**: Wix Premium plan có forwarding nhưng không phải mọi tier. Fallback: Cloudflare Worker proxy.
- **OG image cache CDN**: Facebook/Twitter cache OG image, cần dùng debugger tool force refresh sau khi upload.
- **Search Console verification fail**: DNS TXT record có thể conflict với existing records — verify với multiple methods (TXT + HTML meta).
- **Pilot intake spam**: Form public dễ bị bot. Mitigation: Cloudflare Turnstile, honeypot field, rate limit 5/IP/giờ.
- **Brand drift**: Nhiều người touch CSS song song có thể tạo conflict tokens. Mitigation: lock `assets/css/ui.css` tokens, chỉ Brand Lead approve thay đổi.
- **Legal copy slippage**: Trang pháp lý cần Founder review, có thể trượt deadline. Mitigation: dùng template từ `www.muonnoi.org/legal/` (nếu có) làm baseline.

## Contacts & escalation

- **Web Lead**: WS1 owner — escalate tới Founder nếu route bị block bởi platform issue.
- **Brand Lead**: WS2 owner — escalate tới Founder nếu token conflict.
- **SEO Lead**: WS3 owner — escalate tới Founder nếu Search Console verification fail >2 attempts.
- **Legal counsel + Founder**: WS4 — Founder là final approver cho mọi nội dung pháp lý.
- **Platform Lead (Founder)**: WS5 — DNS thao tác bởi chính Founder, không escalate.
- **Ops Lead**: WS6 owner — escalate tới Founder cho approval SOP và pilot batch budget.
- **Cross-cutting QA**: chạy checklist 100/100 trước mỗi Gate; flag fail items về owner tương ứng.
- **Escalation default**: bất kỳ gate fail nào > 24h, Founder triệu họp 30 phút sync với WS owner và đưa decision: hoãn gate hay cắt scope.

---

## CẬP NHẬT 2026-05-12 · Mobile workstream

Mobile app Muôn Nơi (RN + Expo) đã có master plan riêng, không nằm trong scope `nguoiviet.muonnoi.org` này. Tuy nhiên có 2 dependency:

### Dependency 1: Đường Muôn Nơi quest module sẽ kế thừa Người Việt Muôn Nơi brand
Khi mobile MVP launch (Q3 2026), Travel Quest module sẽ link sang `nguoiviet.muonnoi.org` cho:
- Tuyên ngôn ("Đi xa để quay trở về")
- Manifesto 6 nguyên tắc
- Local Host program
- Đà Lạt pilot detail

→ WS1 (Web team) cần giữ ổn định các route `/about/`, `/journey/`, `/pilot/`, `/community/` để mobile deep-link không bị break sau khi DNS swap.

### Dependency 2: Deep linking + universal links
`muonnoi.org/.well-known/apple-app-site-association` và `assetlinks.json` sẽ cần được host trên main shell (`www.muonnoi.org`), không phải trên `nguoiviet.muonnoi.org`. Tuy nhiên `nguoiviet.muonnoi.org/pilot/` link tới deep link `muonnoi://invite/dalat-pilot` sẽ có effect khi mobile app live.

→ WS5 (DNS/Platform) note: khi mobile MVP build gần xong, cần thêm `.well-known/` routing cho main shell (không tác động `nguoiviet` subdomain).

### References
- Mobile master plan: `apps/mobile/MUONNOI_MOBILE_APP_PLAN_2026-05-12.md`
- Mobile team handoff index: `docs/launch/MUONNOI_MOBILE_TEAM_HANDOFF_INDEX_2026-05-12.md`
- Mobile workstream owner: Mobile Lead (TBD)
- Mobile gate: Travel Quest web pilot ≥ 1 month stable trên `dulich.muonnoi.org`
