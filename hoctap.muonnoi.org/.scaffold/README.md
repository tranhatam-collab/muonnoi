# hoctap.muonnoi.org — Astro Scaffold Placeholder

> **Status:** SCAFFOLD PENDING — awaiting Astro init per ADR-002
> **Build system:** Astro (decided in `docs/decisions/ADR-002-web-build-system-2026-06-05.md`)
> **Cloudflare Pages project:** `hoctap-muonnoi-org` (to be created)
> **DNS status:** ❌ HTTP 000 (Cloudflare CNAME pending, Founder action required)
> **Launch:** Tháng 10/2026 (after Đường Muôn Nơi soft launch stable)

---

## Init steps (when ready, Sprint 7+)

Same as dulich (see `dulich.muonnoi.org/.scaffold/README.md`).

## DNS unblock (Founder)

1. Cloudflare → muonnoi.org zone → DNS
2. Add CNAME: `hoctap` → `hoctap-muonnoi-org.pages.dev` (Proxy: ON)
3. Cloudflare → Pages → Create project `hoctap-muonnoi-org`
4. Cloudflare → Pages → `hoctap-muonnoi-org` → Custom domains → Add `hoctap.muonnoi.org`

---

**Note:** Học Đời focus là content-only landing trong giai đoạn 1. Không cần backend phức tạp đến Sprint 7.

**Created:** 2026-06-05 by Claude agent
