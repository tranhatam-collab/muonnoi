# MUÔN NƠI - BÁO CÁO BÀN GIAO CODEX

**Ngày chốt:** 2026-06-12  
**Workspace:** `/Users/tranhatam/Documents/Devnewproject/muonnoi.org`  
**Mục đích:** Bàn giao cho team hoặc AI model tiếp theo tiếp tục triển khai dựa trên bằng chứng thật, không dựa vào các claim “100%”, “release-ready” hoặc “đã live” chưa được kiểm chứng.

## 1. Kết luận điều hành

Dự án chưa hoàn thành 100%. Repo có nhiều website, subdomain, Worker, tài liệu kế hoạch và bằng chứng QA, nhưng trạng thái giữa code, tài liệu và live đang không đồng nhất.

Các phần đã có tiến triển thật:

- Bộ kế hoạch, ma trận DNS, checklist QA và release gate đã được xây khá đầy đủ.
- `cuocsong.muonnoi.org` và `nguoiviet.muonnoi.org` được tài liệu hiện hành ghi nhận `LIVE_LINK_ALLOWED`.
- Ba bài SEO song ngữ cho AI Muôn Nơi đã từng được tạo, commit, push và deploy preview.
- Hạ tầng nội dung Học Tập Muôn Nơi đã có đủ bộ trang tĩnh cơ bản.

Các phần chưa được phép tuyên bố hoàn tất:

- Payment/email production gate vẫn thiếu bằng chứng chạy thật.
- Học Tập Muôn Nơi chưa có bằng chứng deploy đúng project đáng tin cậy trong phiên này.
- AI Muôn Nơi hiện có nhiều thay đổi chưa commit và nhánh local/remote không đồng nhất.
- Một số tài liệu Cuộc Sống và DNS matrix còn ghi trạng thái cũ, mâu thuẫn với tài liệu mới.
- Automation 5 phút từng được tạo nhưng hiện không tìm thấy cấu hình local tại đường dẫn automation dự kiến; không được coi là đang chạy.

## 2. Những việc Codex đã thực sự làm

### 2.1. Cuộc Sống Muôn Nơi

- Từng tạo heartbeat automation tên `muonnoi-cuocsong-auto-dev-5m`, chu kỳ 5 phút, dùng một coordinator loop.
- Từng cập nhật log chạy tại:
  `docs/launch/CUOCSONG_AUTOMATION_RUN_LOG_2026-05-13.md`.
- Đã đọc và đối chiếu master plan, content map, QA checklist, DNS matrix và team execution plan.
- Hiện trạng automation: **KHÔNG XÁC MINH ĐƯỢC ĐANG HOẠT ĐỘNG**. Không tìm thấy cấu hình tại:
  `/Users/tranhatam/.codex/automations/muonnoi-cuocsong-auto-dev-5m`.

### 2.2. Ba bài SEO song ngữ AI Muôn Nơi

Nguồn nội dung:

- `ai.muonnoi.org/docs/AI_MUONNOI_3_SEO_BILINGUAL_ARTICLES.md`

Các trang đã từng được tạo:

- `ai.muonnoi.org/blog/index.html`
- `ai.muonnoi.org/blog/ai-muon-noi-lop-lam-viec-moi-giua-con-nguoi-va-ai/index.html`
- `ai.muonnoi.org/blog/vi-sao-nguoi-dung-ai-chua-tao-duoc-gia-tri-that/index.html`
- `ai.muonnoi.org/blog/tuong-lai-mang-xa-hoi-co-workflow-ai-va-execution/index.html`

Các thay đổi kèm theo:

- Thêm liên kết Blog vào homepage AI Muôn Nơi.
- Thêm canonical, `hreflang`, Open Graph, Twitter metadata và Article JSON-LD.
- Thêm `sitemap.xml` và `robots.txt`.
- Sửa lỗi generator tạo slug có ký tự backtick.
- Deploy preview thành công lên:
  `https://79836689.ai-muonnoi-org-asz.pages.dev`
- Custom domain `/blog/` từng trả HTTP 200, nhưng body verification sau đó bị lỗi DNS không ổn định trong sandbox.
- Commit từng được tạo và push:
  `6de07aa feat: publish ai muonnoi bilingual seo articles`
  trên nhánh `feat/flow-mvp-backend`.

Trạng thái hiện tại cần lưu ý:

- Repo `ai.muonnoi.org` hiện đang dirty.
- HEAD hiện tại là `c3aefde`; remote branch được quan sát ở `6c58845`.
- File nguồn bài viết đang untracked.
- Có các file trùng tên đáng ngờ: `wrangler 2.json` và `0007_mobile_push_tokens 2.sql`.
- Team tiếp theo phải kiểm tra lại các trang blog còn tồn tại trong HEAD hiện tại và còn live trước khi chỉnh sửa.

### 2.3. Học Tập Muôn Nơi

Đã kiểm tra thư mục:

- `hoctap.muonnoi.org/`

Đã xác nhận có landing page và cụm trang:

- `/nha-chung-3-buoi/`
- `/nha-chung-3-buoi/dang-ky/`
- `/nha-chung-3-buoi/lich-hoc/`
- `/nha-chung-3-buoi/noi-dung/`
- `/nha-chung-3-buoi/faq/`
- `/nha-chung-3-buoi/chinh-sach-hoc-phi/`
- `/nha-chung-3-buoi/sinh-vien/`
- `/nha-chung-3-buoi/sau-khoa-hoc/`

Có thêm `_headers`, `_redirects`, `robots.txt`, `sitemap.xml`, `manifest.json` và tài liệu handoff.

**Đính chính bắt buộc:** URL `https://79836689.ai-muonnoi-org-asz.pages.dev` từng được báo nhầm là deployment Học Tập. Đây là deployment của **AI Muôn Nơi**, không phải `hoctap-muonnoi-org`. Mọi kiểm tra Học Tập dựa trên URL này đều không hợp lệ.

Bằng chứng repo cho thấy Pages project `hoctap-muonnoi-org` và custom domain đã từng tồn tại tại:

- `qa/dns-evidence/2026-06-05/binding-complete.txt`

Tuy nhiên deployment Học Tập phải được chạy lại hoặc kiểm tra lại trên đúng project trước khi công bố.

### 2.4. Release gate payment/email

Đã đối chiếu các file:

- `qa/release-gates/MUONNOI_PAYMENT_EMAIL_TEST_EVIDENCE_2026-05-12.md`
- `qa/release-gates/MUONNOI_PAYMENT_EMAIL_PRODUCTION_GATE_CHECKLIST_2026-05-12.md`
- `reports/RELEASE_STATUS_2026-05-19.md`

Trạng thái thật:

- QA: `NOT_YET_EXECUTED`
- Gate: `BLOCKED_BY_PRODUCTION_EVIDENCE`
- Chưa có đủ transcript cho 10 test scenarios.
- Health check hoặc endpoint trả response không thay thế được bằng chứng payment/email end-to-end.

## 3. Trạng thái Git tại thời điểm bàn giao

Top-level worktree có thay đổi của nhiều team:

```text
 m ai.muonnoi.org
 m app.muonnoi.org
 M dautu.muonnoi.org/member/index.html
 m docs.muonnoi.org
?? dautu.muonnoi.org/functions/api/auth.ts
?? dautu.muonnoi.org/login.html
?? dautu.muonnoi.org/migrations/0004_auth_otp_sessions.sql
?? nguoiviet.muonnoi.org/QA_EVIDENCE_PACK_2026-06-12.md
```

Không được reset, checkout hoặc xóa các thay đổi trên. Phải xác định owner trước khi commit.

`ai.muonnoi.org` hiện có:

```text
 M _headers
 M assets/styles.css
 M index.html
 M login/index.html
 M post/index.html
 M workers/api/migrations/0007_mobile_push_tokens.sql
 M wrangler.json
?? docs/AI_MUONNOI_3_SEO_BILINGUAL_ARTICLES.md
?? workers/api/migrations/0007_mobile_push_tokens 2.sql
?? wrangler 2.json
?? wrangler.toml
```

## 4. Rủi ro P0 cần xử lý trước

### P0.1. Cloudflare token nằm trong source

`hoctap.muonnoi.org/deploy.sh` chứa Cloudflare API token và account ID hard-coded.

Việc bắt buộc:

1. Thu hồi hoặc rotate token trên Cloudflare.
2. Xóa token khỏi script và lịch sử Git nếu đã từng commit.
3. Chuyển sang `wrangler login`, `CLOUDFLARE_API_TOKEN` từ secret store hoặc biến môi trường.
4. Chạy secret scan toàn repo.

Không sao chép token cũ vào tài liệu, chat hoặc commit mới.

### P0.2. Không dùng claim release-ready cũ

Các báo cáo từng ghi payment, email hoặc toàn hệ “ready to ship” không còn là nguồn sự thật. Chỉ đóng gate khi có:

- deployment ID;
- cấu hình secrets đã redacted;
- CORS allowlist;
- webhook signature verification;
- idempotency/replay protection;
- 10 test scenarios có transcript;
- rollback evidence;
- QA approval timestamp.

## 5. Thứ tự tiếp tục đề xuất

### Bước 1: Bảo mật và làm sạch repo

```bash
cd /Users/tranhatam/Documents/Devnewproject/muonnoi.org
git status --short
rg -n --hidden --glob '!node_modules' --glob '!.git' \
  'CLOUDFLARE_API_TOKEN|API_TOKEN=|TOKEN="cf|BEGIN PRIVATE KEY'
```

Rotate secret trước, sau đó mới sửa `hoctap.muonnoi.org/deploy.sh`.

### Bước 2: Deploy lại Học Tập trên đúng project

```bash
cd /Users/tranhatam/Documents/Devnewproject/muonnoi.org/hoctap.muonnoi.org
wrangler pages project list
wrangler pages deploy . --project-name=hoctap-muonnoi-org --commit-dirty=true
```

Phải lưu đúng deployment URL do Wrangler trả về. URL hợp lệ phải thuộc project Học Tập, không thuộc `ai-muonnoi-org-asz.pages.dev`.

Sau deploy:

```bash
curl -I https://hoctap.muonnoi.org/
curl -I https://hoctap.muonnoi.org/nha-chung-3-buoi/
curl -I https://hoctap.muonnoi.org/nha-chung-3-buoi/dang-ky/
curl -sS https://hoctap.muonnoi.org/sitemap.xml
curl -sS https://hoctap.muonnoi.org/robots.txt
```

Kiểm tra thêm asset được tham chiếu:

- `assets/og-nha-chung-3-buoi.jpg`
- `favicon.svg`
- `apple-touch-icon.png`

Kiểm tra form đăng ký có API/action thật; không công bố form nếu chỉ là UI.

### Bước 3: Re-verify AI Muôn Nơi

```bash
cd /Users/tranhatam/Documents/Devnewproject/muonnoi.org/ai.muonnoi.org
git status --short
git log --oneline --decorate -10
rg --files blog
curl -I https://ai.muonnoi.org/blog/
```

Kiểm tra ba route bài viết, canonical, `hreflang`, sitemap, internal links và JSON-LD. Không gộp các file dirty không rõ owner vào commit blog.

### Bước 4: Đóng payment/email gate

Đọc theo thứ tự:

1. `qa/release-gates/MUONNOI_PAYMENT_EMAIL_PRODUCTION_GATE_CHECKLIST_2026-05-12.md`
2. `qa/release-gates/MUONNOI_API_DEPLOYMENT_EVIDENCE_2026-05-12.md`
3. `qa/release-gates/MUONNOI_PAYMENT_EMAIL_TEST_EVIDENCE_2026-05-12.md`
4. `reports/RELEASE_STATUS_2026-05-19.md`

Chạy script kiểm chứng hiện có sau khi evidence được điền bằng dữ liệu thật:

```bash
scripts/verify-payment-email-gate.sh
```

### Bước 5: Đồng bộ tài liệu trạng thái

Đối chiếu và loại bỏ trạng thái cũ trong:

- `docs/launch/MUONNOI_SUBDOMAIN_DNS_CUSTOM_DOMAIN_MATRIX_2026-05-12.md`
- `docs/launch/CUOCSONG_MUONNOI_MASTER_PLAN_2026-05-13.md`
- `docs/launch/CUOCSONG_MUONNOI_TEAM5_LEGAL_TRUST_REVIEW_2026-05-13.md`
- `docs/launch/CUOCSONG_MUONNOI_QA_AND_RELEASE_CHECKLIST_2026-05-13.md`

Không được đổi trạng thái chỉ để đồng nhất câu chữ. Mỗi thay đổi phải dựa trên DNS, deployment URL, HTTP response hoặc QA evidence mới.

## 6. Nguồn đọc ưu tiên cho team mới

1. `reports/MUONNOI_FULL_AUDIT_AND_100_MASTER_PLAN_2026-05-26.md`
2. `reports/MUONNOI_CONTINUOUS_DEV_AUDIT_PLAN_2026-06-02.md`
3. `reports/daily-status-2026-06-02.md`
4. `reports/RELEASE_STATUS_2026-05-19.md`
5. `docs/launch/MUONNOI_FINAL_EXECUTION_PLAN_2026-05-19.md`
6. `docs/launch/MUONNOI_SUBDOMAIN_DNS_CUSTOM_DOMAIN_MATRIX_2026-05-12.md`
7. `qa/release-gates/MUONNOI_PAYMENT_EMAIL_PRODUCTION_GATE_CHECKLIST_2026-05-12.md`
8. File báo cáo bàn giao này.

## 7. Definition of Done thực tế

Chỉ được ghi dự án hoàn thành khi:

- Mỗi public route trả đúng nội dung trên custom domain.
- Không còn link chết, route trắng hoặc domain trỏ sai source.
- Brand và song ngữ được audit trên HTML live.
- Payment/email có đủ production evidence và 10 QA scenarios.
- Form công khai có backend thật, privacy/legal copy và anti-abuse.
- Secrets không nằm trong repo hoặc lịch sử commit có thể truy cập.
- Mobile có signing, build artifact, store metadata và test evidence.
- DNS matrix, release checklist, DEVLOG và live state cùng một trạng thái.
- Mỗi deployment có deployment ID/URL, commit SHA, timestamp và rollback note.

## 8. Trạng thái bàn giao

**HANDOFF_READY, PROJECT_NOT_COMPLETE.**

Team tiếp theo nên bắt đầu bằng P0 secret rotation và deployment Học Tập đúng project. Sau đó re-verify AI blog và đóng payment/email gate. Không nên tiếp tục tạo thêm plan mới trước khi bốn việc này có bằng chứng thực thi.
