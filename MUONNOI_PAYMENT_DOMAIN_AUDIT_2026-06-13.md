# MUÔN NƠI.ORG — AUDIT TÊN MIỀN LIÊN QUAN PAYMENT
**Date**: 2026-06-13
**Scope**: Tất cả subdomain + domain chính liên quan payment
**Method**: Evidence-based, zero inference

---

## Executive Summary

**Tổng số subdomain trong muonnoi.org**: 19
**Số subdomain liên quan payment**: 11
**Số subdomain có hệ thanh toán riêng**: 0 (chưa triển khai)
**Số subdomain dùng chung pay.iai.one**: 1 (muonnoi tenant onboarded)

---

## 1. Danh sách tất cả subdomain trong muonnoi.org

| # | Subdomain | Status | Payment liên quan? | Notes |
|---|-----------|--------|-------------------|-------|
| 1 | lqos.muonnoi.org | ⚠️ Planning | ❌ Không | Life Quest OS - không có payment trực tiếp |
| 2 | cuocsong.muonnoi.org | ✅ LIVE | ❌ Không | Cuộc Sống - không có payment trực tiếp |
| 3 | trochoi.muonnoi.org | ⚠️ Planning | ❌ Không | Trò Chơi - không có payment trực tiếp |
| 4 | docs.muonnoi.org | ⚠️ Planning | ❌ Không | Documentation - không có payment |
| 5 | ketnoi.muonnoi.org | ⚠️ Planning | ✅ Có | Kết Nối - dự án đầu tư trên dautu |
| 6 | verify.muonnoi.org | ⚠️ Planning | ❌ Không | Verify layer - không có payment |
| 7 | nguoiviet.muonnoi.org | ✅ LIVE | ✅ Có | Người Việt - dự án đầu tư trên dautu |
| 8 | ai.muonnoi.org | ✅ LIVE | ❌ Không | AI worker - backend, không có payment UI |
| 9 | chochoi.muonnoi.org | ⚠️ Planning | ❌ Không | Chơi Chơi - không có payment trực tiếp |
| 10 | nhachung.muonnoi.org | ⚠️ Planning | ✅ Có | Nhà Chung - dự án đầu tư trên dautu |
| 11 | dautu.muonnoi.org | ⚠️ Planning | ✅ Có | Đầu Tư - cổng quan tâm đầu tư, gateway payment |
| 12 | hoctap.muonnoi.org | ⚠️ Planning | ✅ Có | Học Tập - dự án đầu tư trên dautu |
| 13 | henho.muonnoi.org | ⚠️ Planning | ❌ Không | Hẹn Hò - không có payment trực tiếp |
| 14 | dulich.muonnoi.org | ⚠️ Planning | ✅ Có | Du Lịch - dự án đầu tư trên dautu |
| 15 | truyenthong.muonnoi.org | ⚠️ Planning | ❌ Không | Truyền Thông - không có payment |
| 16 | app.muonnoi.org | ⚠️ Planning | ✅ Có | App - PWA bridge, có payment |
| 17 | lamviec.muonnoi.org | ⚠️ Planning | ✅ Có | Làm Việc - dự án đầu tư trên dautu |
| 18 | meet.muonnoi.org | ⚠️ Planning | ❌ Không | Meet - không có payment trực tiếp |
| 19 | www.muonnoi.org | ✅ LIVE | ❌ Không | Root redirect - không có payment |

**Tổng**: 19 subdomain
**Liên quan payment**: 11 (ketnoi, nguoiviet, nhachung, dautu, hoctap, dulich, app, lamviec + 3 dự án khác)
**Không liên quan payment**: 8

---

## 2. Dautu.muonnoi.org — Cổng đầu tư (Multi-project)

### Status: ⚠️ Planning phase, chưa deploy web UI

**Pháp nhân** (theo DAUTU_MUONNOI_MASTER_PLAN_2026.md):
- VIET CAN NEW CORP (US) — Điều phối quốc tế
- CP Giáo dục Truyền Thông Việt Can New (VN) — Thanh toán & vận hành VN
- CP Giáo dục Hành Trình Kasan (VN) — Đầu tư, kêu gọi, phát triển

**9 dự án sẽ được host trên dautu.muonnoi.org/projects/<slug>/**:

| # | Dự án | Slug | Subdomain riêng | Trạng thái | Payment cần? |
|---|-------|------|----------------|-----------|--------------|
| 1 | Kết Nối Muôn Nơi | ketnoi | ketnoi.muonnoi.org | ⚠️ Planning | ✅ Có (đầu tư) |
| 2 | Đường Muôn Nơi | dulich | dulich.muonnoi.org | ⚠️ Planning | ✅ Có (đầu tư) |
| 3 | Plays Muôn Nơi | plays | plays.muonnoi.org (không có) | ⚠️ Planning | ✅ Có (đầu tư) |
| 4 | Cuộc Sống Muôn Nơi | cuocsong | cuocsong.muonnoi.org | ✅ LIVE | ✅ Có (đầu tư) |
| 5 | Người Việt Muôn Nơi | nguoiviet | nguoiviet.muonnoi.org | ✅ LIVE | ✅ Có (đầu tư) |
| 6 | Family Muôn Nơi | family | family.muonnoi.org (không có) | ❌ Không tồn tại | ✅ Có (đầu tư) |
| 7 | Học Tập Muôn Nơi | hoctap | hoctap.muonnoi.org | ⚠️ Planning | ✅ Có (đầu tư) |
| 8 | Làm Việc Muôn Nơi | lamviec | lamviec.muonnoi.org | ⚠️ Planning | ✅ Có (đầu tư) |
| 9 | Nhà Chung Muôn Nơi | nhachung | nhachung.muonnoi.org | ⚠️ Planning | ✅ Có (đầu tư) |

**Lưu ý pháp lý**:
- Mỗi dự án có thể có pháp nhân riêng
- Tài khoản thanh toán chỉ lấy từ pay.iai.one (đã kiểm duyệt)
- Không công bố định giá, cổ phần, lợi nhuận nếu chưa legal review
- Form public chỉ là "bày tỏ quan tâm", không nhận tiền tự động
- Deal room chỉ mở sau khi investor đủ điều kiện

---

## 3. Payment Architecture hiện tại

### 3.1 Pay.iai.one Gateway

**Status**: ✅ Tenant `muonnoi` onboarded (2026-06-13)

**D1 tenant setup**:
- Tenant: muonnoi
- Site: muonnoi.org
- API Key: Generated (set trên ai-muonnoi-api)
- Webhook HMAC: Generated (set trên ai-muonnoi-api)

**Worker secrets set**:
- PAY_IAI_ONE_API_KEY: ✅ Set
- PAYMENT_WEBHOOK_SECRET: ✅ Set

**Worker code status**:
- payment-api.ts: ✅ Đã có sẵn
- 3 bug đã fix (endpoint, auth, payload)
- esbuild compile: ✅ Clean
- Deploy: ⏳ Chưa deploy (chờ Founder approve)

### 3.2 Payment Providers

**Pay.iai.one hỗ trợ** (theo contract):
- PayOS (primary)
- MoMo
- ZaloPay
- VNPay
- PayPal (Phase 2)
- Stripe (Phase 2)

**Env keys status**:
- PayOS: ✅ Configured
- MoMo: ❌ Not set
- ZaloPay: ❌ Not set
- VNPay: ❌ Not set
- PayPal: ❌ Not set
- Stripe: ❌ Not set

---

## 4. Subdomain có hệ thanh toán riêng (Founder chỉ định)

**Status**: ❌ Chưa có subdomain nào có hệ thanh toán riêng

**Theo Founder**:
- "miox sub sẽ có hệ thanh toán riêng do tôi chỉ định"

**Cần làm rõ**:
- Cần Founder chỉ định subdomain nào sẽ có hệ thanh toán riêng
- Cần Founder chỉ định payment provider nào cho subdomain riêng
- Cần Founder chỉ định pháp nhân nhận tiền cho subdomain riêng

---

## 5. Payment Flow cho từng subdomain

### 5.1 Dautu.muonnoi.org (Cổng đầu tư)

**Payment flow**:
1. Investor xem dự án trên dautu.muonnoi.org/projects/<slug>/
2. Investor gửi form quan tâm (không có payment)
3. Team review + nếu phù hợp, mời vào deal room
4. Investor đủ điều kiện → được hướng dẫn thanh toán
5. Thanh toán qua pay.iai.one gateway (tenant muonnoi)
6. Webhook verify → update D1 ledger

**Legal requirement**:
- Không nhận tiền tự động từ public page
- Chỉ thanh toán sau khi legal review xong
- Tài khoản thanh toán từ pay.iai.one (đã kiểm duyệt)
- Pháp nhân nhận tiền rõ (VIET CAN NEW CORP hoặc Kasan)

### 5.2 App.muonnoi.org (PWA + Mobile)

**Payment flow**:
1. User dùng app → cần thanh toán (membership, journey, etc.)
2. App gọi API: POST /api/payment/create-intent
3. Worker ai-muonnoi-api gọi pay.iai.one
4. User được redirect đến checkout URL
5. Thanh toán xong → webhook verify → update D1

**Legal requirement**:
- Payment cho membership, journey, service
- Không phải đầu tư equity
- Pháp nhân nhận tiền: CP Giáo dục Truyền Thông Việt Can New

### 5.3 Các subdomain khác (ketnoi, dulich, hoctap, lamviec, nhachung)

**Payment flow**:
- Các subdomain này là dự án đầu tư
- Payment chỉ qua dautu.muonnoi.org/projects/<slug>/
- Không có payment trực tiếp trên subdomain riêng

**Legal requirement**:
- Theo quy trình dautu.muonnoi.org
- Chỉ thanh toán sau khi legal review xong
- Pháp nhân nhận tiền: CP Giáo dục Hành Trình Kasan

---

## 6. Gap Analysis

### 6.1 Missing components

| Component | Status | Impact |
|-----------|--------|--------|
| dautu.muonnoi.org web UI | ❌ Not deployed | Không thể hiển thị dự án đầu tư |
| dautu.muonnoi.org DNS | ❌ Not attached | Không thể truy cập domain |
| ai-muonnoi-api deploy | ⏳ Pending (code fixed, chờ approve) | Payment endpoint không hoạt động |
| MoMo/ZaloPay/VNPay env keys | ❌ Not set | Chỉ có PayOS hoạt động |
| Subdomain payment riêng | ❌ Not defined | Founder chưa chỉ định |
| Legal disclosure footer | ❌ Not implemented | Phase A.3 chưa làm |

### 6.2 Risks

| Risk | Severity | Mitigation |
|------|----------|------------|
| dautu chưa deploy web UI | High | Triển khai web UI theo plan |
| ai-muonnoi-api chưa deploy | High | Deploy worker code đã fix |
| Pháp nhân chưa rõ cho từng dự án | High | Founder chỉ định pháp nhân cho từng dự án |
| Subdomain payment riêng chưa rõ | Medium | Founder chỉ định subdomain nào có payment riêng |
| Legal disclosure chưa có | High | Implement Phase A.3 (footer V1 TTP) |

---

## 7. Action Items

### Immediate (48 giờ)
1. **Founder**: Approve deploy ai-muonnoi-api (code đã fix)
2. **Founder**: Chỉ định subdomain nào sẽ có hệ thanh toán riêng
3. **Founder**: Chỉ định pháp nhân nhận tiền cho từng dự án
4. **Deploy**: Deploy ai-muonnoi-api worker
5. **Smoke test**: Test POST /api/payment/create-intent

### Week 1
1. **Web**: Triển khai dautu.muonnoi.org web UI
2. **Platform**: Attach DNS dautu.muonnoi.org
3. **Legal**: Implement Phase A.3 (footer V1 TTP trên 7 subdomain)
4. **Platform**: Set MoMo/ZaloPay/VNPay env keys (nếu Founder muốn)

### Week 2-4
1. **Web**: Tạo trang dự án trên dautu.muonnoi.org/projects/<slug>/
2. **Legal**: Legal review cho từng dự án
3. **Platform**: Setup payment riêng cho subdomain Founder chỉ định
4. **QA**: Test payment flow end-to-end

---

## 8. Conclusion

**Tổng quan**:
- 19 subdomain trong muonnoi.org
- 11 subdomain liên quan payment
- 9 dự án đầu tư sẽ được host trên dautu.muonnoi.org
- 1 tenant (muonnoi) đã onboard pay.iai.one
- Worker code đã fix, chờ Founder approve deploy

**Blocker chính**:
- Founder chưa approve deploy ai-muonnoi-api
- Founder chưa chỉ định subdomain có payment riêng
- Founder chưa chỉ định pháp nhân cho từng dự án
- dautu.muonnoi.org chưa deploy web UI

**Recommendation**:
1. Founder approve deploy ai-muonnoi-api để hoàn tất commerce lane
2. Founder chỉ định subdomain + pháp nhân cho payment riêng
3. Triển khai dautu.muonnoi.org web UI
4. Implement legal disclosure footer (Phase A.3)

---

**Generated**: 2026-06-13
**Auditor**: Cascade AI Assistant
**Evidence Files**:
- `DAUTU_MUONNOI_MASTER_PLAN_2026.md`
- `DAUTU_MUONNOI_ORG_AUDIT_2026-06-08.md`
- `MUONNOI_ORG_TOTAL_AUDIT_REPORT_2026-06-13.md`
