# FOUNDER INSTRUCTION TO TEAM
**Date**: 2026-06-13  
**From**: Founder  
**To**: Dev / Product / QA / Platform  
**Subject**: Quy tắc ground truth + 6 mục bắt buộc verify trước khi build

---

## 1. Quy tắc bất di bất dịch

**Không được dùng text report làm nguồn sự thật.**  
**Chỉ được dùng**: command output, build log, deploy evidence, runtime log.

Trước khi build hoặc claim bất kỳ điều gì, phải tách lại thành 4 cột:

| Đã xác minh | Sai | Stale | Phải verify lại |
|-------------|-----|-------|-----------------|
| Có command output, curl, screenshot, deploy log | Text report nói sai so với runtime | Label cũ không còn đúng | Chưa có evidence mới |

---

## 2. 6 mục bắt buộc verify trước khi team dùng

### 2.1 dautu.muonnoi.org
**Verify bằng**:
```bash
curl -sI https://dautu.muonnoi.org/          # expect 200
curl -sI https://dautu.muonnoi.org/du-an      # expect 200
curl -sI https://dautu.muonnoi.org/dang-ky-quan-tam  # expect 200
curl -sI https://dautu.muonnoi.org/member/    # expect 200
```
**Mục đích**: Xác minh web UI thật, DNS attached, routes 200.  
**Ghi chú**: Báo cáo cũ nói "planning chưa deploy" — **Sai**. Đã verify là deployed.

### 2.2 ai-muonnoi-api
**Verify bằng**:
```bash
curl -sI https://ai.muonnoi.org/api/health
curl -sX POST https://ai.muonnoi.org/api/payment/create-intent \
  -H "Content-Type: application/json" \
  -H "Idempotency-Key: test-$(date +%s)" \
  -d '{"amount":1000,"currency":"VND","description":"test"}'
# expect: {"ok":true,"data":{"paymentId":"..."}}
```
**Mục đích**: Xác minh worker deployed, payment endpoint trả paymentId.  
**Ghi chú**: Báo cáo cũ nói "chưa deploy" — **Sai**. Đã verify là deployed.

### 2.3 Payment QA evidence
**Verify bằng**:
```bash
ls qa/release-gates/MUONNOI_PAYMENT_EMAIL_TEST_EVIDENCE_2026-*.md
# Nếu không tồn tại → chưa chạy
```
**Mục đích**: Xác minh 10 scenario payment/email đã chạy thật chưa.  
**Ghi chú**: Hiện **FAIL** — chưa có evidence.

### 2.4 Direct payment vs indirect investment
**Verify bằng**:
```bash
# Trên mỗi subdomain, kiểm tra có endpoint checkout riêng không:
curl -s https://ketnoi.muonnoi.org/ | grep -i checkout
curl -s https://dulich.muonnoi.org/ | grep -i checkout
# Nếu không có → payment chỉ qua dautu.muonnoi.org/projects/<slug>/
```
**Mục đích**: Phân biệt subdomain có checkout trực tiếp vs chỉ là dự án nằm trong dautu.  
**Ghi chú**: ketnoi, dulich, hoctap, lamviec, nhachung **KHÔNG** có payment riêng.

### 2.5 Entity mapping
**Verify bằng**: Hỏi Founder chỉ định.  
**Mục đích**: Xác định pháp nhân nào nhận tiền cho app, cho từng dự án dautu, và subdomain nào có payment riêng.  
**Ghi chú**: Founder nói "miox sub sẽ có hệ thanh toán riêng do tôi chỉ định" — chưa chỉ định cụ thể.

### 2.6 Repo / release hygiene
**Verify bằng**:
```bash
cd /path/to/muonnoi.org && git status --short
# expect: clean (không có m submodule, ?? untracked)
```
**Mục đích**: Xác minh repo sẵn sàng release.  
**Ghi chú**: Hiện **FAIL** — 3 submodule dirty (ai, app, docs) + 2 untracked audit report.

---

## 3. Cấm làm những gì

| Cấm | Lý do |
|-----|-------|
| Không dùng completion % (80%, 70%, 90%) | Dễ làm team đọc sai mức readiness |
| Không ghi "BLOCKED 20%" khi endpoint đã trả paymentId | Sai so với runtime |
| Không ghi "planning, chưa deploy" nếu curl trả 200 | Sai so với runtime |
| Không gán nhãn "có payment" cho subdomain chỉ có lane đầu tư gián tiếp | Gây nhầm lẫn về phạm vi |
| Không đưa text report lên Slack/Notion như ground truth | Chỉ đưa command output + screenshot |

---

## 4. Action cho từng team

### Dev
1. Commit/stash 3 submodule dirty (ai, app, docs)
2. Kiểm tra `clientAction.url` null trong payment response — là bug hay cần bước tiếp theo?
3. Chạy 10 payment/email scenario, log evidence vào `qa/release-gates/`
4. Chạy 5 sites × 9 step OAuth E2E, screenshot vào `qa/oauth-evidence/`

### Product
1. Xác định subdomain nào cần checkout trực tiếp (hỏi Founder)
2. Xác định pháp nhân cho từng dự án dautu (hỏi Founder)
3. Xác định pháp nhân cho app.muonnoi.org payment

### QA
1. Verify 6 mục trên bằng command output, screenshot
2. Không approve gate nào nếu không có evidence file
3. Mỗi gate cần: curl output + screenshot + deploy log

### Platform
1. Cleanup repo: commit/stash submodule, gitignore audit reports hoặc commit
2. Verify DNS matrix file còn đúng không
3. Kiểm tra MoMo/ZaloPay/VNPay env keys có cần set không

---

## 5. Câu chốt

> Không được dùng báo cáo text làm nguồn sự thật cuối.  
> Chỉ được dùng nó như working audit.  
> Mọi quyết định production phải dựa trên command output, build, deploy evidence, runtime log.

---

**Signed**: Founder  
**Date**: 2026-06-13  
**Distribution**: Dev, Product, QA, Platform leads
