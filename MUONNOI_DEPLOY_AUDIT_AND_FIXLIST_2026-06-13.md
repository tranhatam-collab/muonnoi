# AUDIT BÁO CÁO DEPLOY + FIX-LIST CHÍNH XÁC 100%
# Independent Audit of the 2026-06-13 "Deploy Fix + 6 Menu Pages" work

> **Ngày:** 2026-06-13
> **Người audit:** Claude agent (verify bằng HTTP live, không tin report)
> **Đối tượng:** Báo cáo `MUONNOI_DEPLOY_FIX_COMPLETION_REPORT_2026-06-13.md` (claim "✅ ALL 9 STEPS COMPLETED")
> **Phán quyết:** ❌ **CLAIM SAI Ở BƯỚC 3 + 8 + 9.** Toàn bộ việc build **không hiển thị trên www.muonnoi.org** vì **deploy nhầm Pages project** (không phải lỗi cache).

---

## 0. PHÁN QUYẾT 1 DÒNG

Việc build (28 badges + homepage tagline) **là thật và đúng trong file**, nhưng được **deploy vào nhầm project Cloudflare Pages** (`muonnoi-org`) trong khi domain thật `www.muonnoi.org` được phục vụ bởi **project khác** (`muonnoi`). → **0% công sức hiển thị trên domain thật.** Chẩn đoán "Cloudflare cache chưa refresh" trong report là **SAI** — nó sẽ **không bao giờ** refresh.

---

## 1. BẰNG CHỨNG GỐC (HTTP live 2026-06-13)

| URL | investment badges | ecosystem badges | tagline mới |
|-----|:----:|:----:|:----:|
| `www.muonnoi.org` (domain thật) | **0** | **0** | **0** |
| `muonnoi.pages.dev` (project A) | 0 | 0 | 0 |
| `muonnoi-org.pages.dev` (project B — team deploy vào đây) | **3** | **7** | **1** |

**Kết luận sắt:**
- `www.muonnoi.org` ≡ `muonnoi.pages.dev` (cùng 0/0/0) → domain map vào **project `muonnoi`**.
- Team deploy toàn bộ vào **project `muonnoi-org`** → một project **khác**, không gắn domain.
- → "All routes 200 OK, badges deployed ✅" trong report là **đúng về HTTP nhưng sai về thực tế**: 200 OK là của project sai; người dùng thật **không thấy gì**.

---

## 2. CLAIM SAI TRONG REPORT (đối chiếu)

| Report claim | Sự thật |
|--------------|---------|
| "Bước 8-9: Deploy Production + Verify ✅ Badges deployed" | ❌ Deploy vào `muonnoi-org`, không phải project của domain. Badges **không** trên www. |
| "⚠️ www.muonnoi.org: CSS cache chưa refresh (Cloudflare cache)" | ❌ Chẩn đoán SAI. Không phải cache — là **2 project khác nhau**. Cache không liên quan. |
| "✅ ALL 9 STEPS COMPLETED" | ❌ Bước 3 (homepage tagline) + 8 + 9 **chưa hoàn tất** trên domain thật. |
| "All routes: 200 OK" | ⚠️ Đúng nhưng gây hiểu nhầm — 200 của project sai. |

---

## 3. 🔴 NGUYÊN NHÂN HỆ THỐNG (gốc rễ của mọi lần "cache không refresh" trước đây)

**Tồn tại 2 Cloudflare Pages project cho cùng 1 thương hiệu:**
- `muonnoi` → đang gắn `www.muonnoi.org` (domain thật).
- `muonnoi-org` → nơi team đang deploy (mồ côi domain).

Đây là **lý do thật** khiến nhiều lần sửa homepage "không lên" suốt quá trình. **Phải diệt sự nhập nhằng này** — 1 domain = 1 project = 1 source of truth.

---

## 4. ✅ FIX-LIST CHÍNH XÁC 100% (team làm đúng thứ tự)

### FIX 1 — Xác định project thật của domain (5 phút) [P0]
```bash
# Liệt kê project + custom domain mapping
wrangler pages project list
wrangler pages deployment list --project-name=muonnoi
wrangler pages deployment list --project-name=muonnoi-org
```
Xác nhận `www.muonnoi.org` đang trỏ project nào (bằng chứng cho thấy = `muonnoi`).

### FIX 2 — Chọn 1 trong 2 hướng, KHÓA cứng (P0)
**Hướng A (khuyến nghị — ít rủi ro):** Deploy vào ĐÚNG project đang gắn domain (`muonnoi`):
```bash
cd <build_dir đúng>      # apps/web/public/ (source of truth đã chốt)
wrangler pages deploy apps/web/public --project-name=muonnoi --branch=main
```
**Hướng B:** Chuyển custom domain `www.muonnoi.org` + `muonnoi.org` từ project `muonnoi` sang `muonnoi-org` (Cloudflare dashboard → Pages → muonnoi-org → Custom domains). Rủi ro cao hơn (downtime, phải gỡ domain khỏi project cũ).

→ **Chọn A.** Sau đó **xoá/đóng băng** project thừa để không ai deploy nhầm lần nữa.

### FIX 3 — Verify trên DOMAIN THẬT, không phải pages.dev (P0)
```bash
for r in "" ecosystem roadmap security guide plan investment; do
  n=$(curl -s "https://www.muonnoi.org/$r/" | grep -ioc 'mn-chip--live')
  echo "/$r/ badges=$n"
done
curl -s https://www.muonnoi.org/ | grep -c "Tự do tuyệt đối"   # phải = 1
```
**Tiêu chí pass:** ecosystem=7, investment=3, … KHỚP file local, và tagline=1 **trên www.muonnoi.org** (không phải trên *.pages.dev).

### FIX 4 — Dọn CSS 2 hệ badge trùng (P1)
`site.css` đang có **2 hệ song song**: `.mn-chip--{live,building,planned,soft}` VÀ `.mn-badge--{live,next}`. HTML dùng `mn-chip--`. → Chọn **1 hệ** (`mn-chip--`), xoá hệ kia để hết nợ CSS.

### FIX 5 — Dọn git (P1)
```bash
git status --short   # 3 submodule bẩn: ai/app/docs.muonnoi.org + report untracked
```
Xử lý 3 submodule (commit nội bộ hợp lệ hoặc revert rác) + commit report. **Không deploy tiếp khi cây git còn bẩn.**

### FIX 6 — Sửa lại report cho trung thực (P1)
- Đổi "✅ ALL 9 STEPS COMPLETED" → "Steps 1-7 done; **8-9 FAILED: deployed to wrong Pages project (`muonnoi-org`), not live on www**".
- Xoá dòng "Cloudflare cache" (chẩn đoán sai).
- Chỉ tick "verified" khi đã verify **trên www.muonnoi.org**.

---

## 5. 🟠 VẤN ĐỀ LỚN HƠN: VIỆC NÀY KHÔNG PHẢI ƯU TIÊN CHIẾN LƯỢC

Đây là điểm tôi phải nói thẳng cho Founder:

**Việc đã làm** = thêm badge LIVE/BUILDING/PLANNED vào **6 trang kế hoạch** (/ecosystem, /roadmap, /plan, /investment, /security, /guide). Đây là **đánh bóng claim-safety** — tốt, nhưng **nhỏ**.

**Việc CHƯA làm** (đúng cái đang chờ Founder duyệt + đúng câu chuyện $1B vừa bàn):
- ❌ Trang chủ vẫn là **ops/status dashboard**, **không khoe sản phẩm sống** (verify: www.muonnoi.org **không có** product-grid, không "Đang hoạt động", thiếu plays/cuocsong).
- ❌ Chưa có **xương sống SSO** (1 danh tính mở mọi cửa) — moat super-app.
- ❌ Chưa có **tín hiệu moat "người thật đã xác minh"** trên homepage.
- ❌ Chưa có **câu định-vị-ngành** (lớp niềm tin cho đời sống thật người Việt toàn cầu).

→ Team đi làm **side-quest (badges)** trong khi **việc lõi (rebuild trang chủ thành cửa ngõ + spine định giá)** chưa đụng tới. Badges nên là **một chi tiết NHỎ bên trong** trang chủ mới, không phải sản phẩm chính của sprint.

---

## 6. VIỆC PHẢI LÀM SAU BÁO CÁO NÀY (đúng thứ tự)

### Ngay lập tức (P0 — sửa cái đang sai)
1. FIX 1-3: deploy đúng project `muonnoi`, verify badges + tagline **trên www.muonnoi.org**.
2. Đóng băng project `muonnoi-org` để hết deploy nhầm.
3. FIX 5: dọn git.

### Kế tiếp (P1 — đúng ưu tiên chiến lược, sau khi Founder duyệt đề xuất trang chủ)
4. **Rebuild trang chủ** theo `MUONNOI_HOMEPAGE_AUDIT_AND_PROPOSAL_2026-06-12.md`:
   - Hero câu định-vị-ngành + 1 CTA chính.
   - **Lưới sản phẩm sống** (plays/ketnoi/nguoiviet/cuocsong/hoctap/ai/app/dautu/docs) — phần giữ chân chính.
   - Tín hiệu moat: "người thật đã xác minh · không tracker".
   - Plan/investment/badges **đẩy xuống dưới**.
5. **Spine định giá $10M+:** khởi động **SSO 1-danh-tính** (gộp auth app + ketnoi) — xương sống super-app.
6. FIX 4: dọn CSS badge.

### Theo dõi
7. Sửa report trung thực (FIX 6).
8. Quyết định scope: badges chỉ là 1 chi tiết trong homepage mới, không phải sprint riêng.

---

## 7. TIÊU CHÍ NGHIỆM THU LẦN NÀY (Definition of Done — verify-based)
- [ ] `curl www.muonnoi.org/ecosystem/ | grep -c mn-chip--live` = **7** (trên domain thật)
- [ ] `curl www.muonnoi.org/ | grep -c "Tự do tuyệt đối"` = **1**
- [ ] `www.muonnoi.org` và `*.pages.dev` của project gắn-domain cho cùng kết quả
- [ ] Chỉ còn **1** Pages project nhận deploy; project thừa đã đóng băng
- [ ] `git status --short` = rỗng
- [ ] Report đã sửa, không còn claim "cache" / "all 9 completed" sai
- [ ] (P1) Homepage có lưới sản phẩm sống + tín hiệu moat

---

## NGUỒN / BẰNG CHỨNG
- HTTP probe live 2026-06-13: www vs muonnoi.pages.dev vs muonnoi-org.pages.dev (badge + tagline count)
- Local: `apps/web/public/investment/index.html` (3 badge `mn-chip--live`), `site.css` (2 hệ badge trùng)
- `git status` (3 submodule bẩn)
- Đề xuất trang chủ: `docs/launch/MUONNOI_HOMEPAGE_AUDIT_AND_PROPOSAL_2026-06-12.md`

---
**Phán quyết:** Việc build THẬT nhưng DEPLOY NHẦM PROJECT → 0% live. Fix theo Mục 4 (P0). Ưu tiên chiến lược (Mục 5-6) vẫn chưa đụng tới.
