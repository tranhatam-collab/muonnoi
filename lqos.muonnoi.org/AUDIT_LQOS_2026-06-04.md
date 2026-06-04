# AUDIT · MUONNOI LIFE QUEST OS & PUBLIC LAUNCH PACKAGE
**Ngày audit:** 2026-06-04  
**Auditor:** Cascade (AI Pair Programmer)  
**Phạm vi:** `MUONNOI_LIFE_QUEST_OS_INTEGRATED_MASTER_PLAN_2026.md` + `MUONNOI_PUBLIC_LAUNCH_PACKAGE_2026.md`

---

## Tóm tắt điểm số

| Tiêu chí | Điểm | Nhận xét |
|---|---|---|
| Chiến lược & Tầm nhìn | 8/10 | Rõ ràng, có đạo đức, anti-addiction |
| Tính nhất quán nội bộ | 5/10 | Mâu thuẫn timeline và file reference nghiêm trọng |
| Tính khả thi kỹ thuật | 5/10 | Thiếu spec cốt lõi (hash receipt, KYC tier, payment flow) |
| Tính khả thi vận hành | 4/10 | 30-day plan quá tham vọng; thiếu compliance du lịch VN |
| Dev task list | 6/10 | Đầy đủ nhưng lệch cấu trúc repo thực tế |
| Bilingual copy | 7/10 | Tốt nhưng có lỗi nhỏ và vài chỗ dịch chưa tự nhiên |

**Tổng điểm trung bình: 5.8/10** — Kế hoạch có tầm nhìn mạnh nhưng chưa sẵn sàng để execute. Cần khóa lại timeline, bổ sung spec kỹ thuật, và xử lý các mâu thuẫn nội bộ trước khi đưa cho team dev.

---

## CRITICAL (Phải sửa ngay)

### 1. Mâu thuẫn timeline pilot Đà Lạt
- **Master Plan** §13: "Month 1 — Pilot `dulich.muonnoi.org` in Đà Lạt" (không ghi rõ tháng/năm).
- **Public Launch** §6 Pilot Cities: "Tháng 1 — Đà Lạt [★ Đang chạy / Live]" — nhưng ngày file là **2026-05-11**, nên "Tháng 1" có thể là 01/2026 (đã qua) hoặc 01/2027 (chưa tới). Đây là mơ hồ nghiêm trọng.
- **Public Launch** §18 "What we have today": "Sẵn sàng khởi động Life Quest OS pilot tại Đà Lạt **Tháng 5/2026**" — mâu thuẫn trực tiếp với "Tháng 1" ở trên.
- **Khuyến nghị:** Lock một ngày cụ thể. Nếu ngày file là 11/05/2026 thì pilot chưa chạy. Sửa "Tháng 1" thành "Tháng 6/2026" hoặc "Tháng 7/2026" tùy theo capacity thực tế.

### 2. File reference không tồn tại
- `QUEST_TAXONOMY_DULICH_DALAT_V1.md` được reference 2 lần (Public Launch §8, §17.6) nhưng **không có trong repo** (đã grep toàn bộ workspace).
- Đây là file P0 — chứa 30 quest chi tiết cho pilot. Không có file này, team dev không thể bắt đầu.
- **Khuyến nghị:** Tạo file này ngay hoặc xóa reference nếu nội dung đã nằm trong zip `MUONNOI_MISSING_5_FILES_PACKAGE_2026-05-11.zip`.

### 3. Thiếu spec kỹ thuật cho "hash receipt" / Verifiable Credential
- Cả 2 file đề cập "Receipt có hash, xuất khẩu được dưới dạng Verifiable Credential" nhiều lần (Public Launch §9, §12; Master Plan §7).
- Không có một dòng nào giải thích: (a) hash bằng thuật toán gì, (b) lưu ở đâu (on-chain hay DB), (c) DID method nào, (d) format VC (W3C VC 2.0? JWT? LD-Signature?).
- **Khuyến nghị:** Bổ sung tài liệu `TECH_SPEC_RECEIPTS_V1.md` định nghĩa: hash function (sha-256?), storage (D1 + R2?), DID resolver, VC issuer, và revocation mechanism.

### 4. KYC "Tier 3" không được định nghĩa
- Public Launch §10, §12 đề cập "KYC tier 3 cho Local Host" nhưng không có định nghĩa các tier.
- **Khuyến nghị:** Tạo bảng KYC tier (Tier 1 = email/phone; Tier 2 = ID card selfie; Tier 3 = in-person verification + background check) và quy trình thực thi.

---

## HIGH (Cần sửa trong 1 tuần)

### 5. Thiếu compliance pháp lý du lịch Việt Nam
- Đường Muôn Nơi tổ chức trải nghiệm, đưa khách đến homestay, farm visit, host meal — đây là hoạt động du lịch/lữ hành.
- Không đề cập: giấy phép kinh doanh lữ hành nội địa/quốc tế, đăng ký với Sở Du lịch/Tổng cục Du lịch, an toàn thực phẩm cho bữa ăn host, hay trách nhiệm pháp lý khi khách bị tai nạn.
- **Khuyến nghị:** Thêm section "Legal & Regulatory" và tham vấn luật sư về mô hình "experiences platform" tại VN.

### 6. Insurance chỉ là khái niệm
- Public Launch §9, §12: "Insurance bundled", "Mua bảo hiểm bảo vệ" nhưng không có: (a) đối tác bảo hiểm, (b) loại bảo hiểm (du lịch? tai nạn? liability?), (c) phạm vi bảo hiểm, (d) chi phí.
- **Khuyến nghị:** Liên hệ ít nhất 2 công ty bảo hiểm (Bảo Việt, Bảo Minh, PJICO...) để có LOI (letter of intent) trước khi promise trên public page.

### 7. 30-day plan thiếu tính khả thi
- **Week 3** (Master Plan §12): "onboard 50 local hosts, 30 peer verifiers, 100 beta users, seed 30 travel quests" — tất cả trong **1 tuần**.
- **Week 4**: Target "500 registrations, 100 quest completions, 50 verified proofs, 20 paid experiences" — con số này đòi hỏi tỷ lệ convert rất cao ngay sau khi onboard.
- **Khuyến nghị:** Stretch week 3-4 thành 4-6 tuần. Hoặc giảm target xuống 10 hosts, 15 quests, 50 beta users cho soft launch.

### 8. Payment / Earning thiếu AML/KYC flow
- Master Plan §6.2-6.3 và Public Launch §7 Section 2 đề cập "Earning — tiền thật" và "Credit — sponsor credit".
- Không có quy trình: payout qua ngân hàng nào, ví điện tử nào, threshold bao nhiêu, withholding tax, invoice requirement.
- **Khuyến nghị:** Tạo `PAYMENT_COMPLIANCE_SPEC.md` định nghĩa flow từ host → platform → user, bao gồm tax, AML check, và refund policy.

---

## MEDIUM (Cần sửa trước launch)

### 9. Lệch cấu trúc repo thực tế
- Public Launch §17 dev task list đề cập `apps/web/public/...` — nhưng trong repo hiện tại, `apps/web/` chỉ tồn tại dưới `app.muonnoi.org/apps/web/`, không phải ở root.
- Root repo (`muonnoi.org`) có `public/` riêng với `app.css`, `app.js`, `index.html`.
- **Khuyến nghị:** Xác định rõ trang public shell nằm ở root repo hay trong `app.muonnoi.org`. Nếu là root repo, sửa tất cả path từ `apps/web/public/` thành `public/`.

### 10. `api.flow.iai.one` — domain ngoại hệ
- Master Plan §17 và Public Launch §5 liệt kê `api.flow.iai.one` và `api.ai.iai.one` như một phần của ecosystem.
- Domain `.iai.one` không thuộc `*.muonnoi.org`, dễ gây nhầm lẫn về ownership và security boundary.
- **Khuyến nghị:** Giải thích rõ mối quan hệ pháp lý/kỹ thuật với `iai.one`, hoặc chuyển sang subdomain `flow.muonnoi.org` / `ai-api.muonnoi.org`.

### 11. Mobile app không có trong dev task list
- Public Launch §6 Roadmap nói "Mobile-first từ hôm nay" nhưng trong §17 timeline tuần 1-4 không có task nào liên quan mobile.
- Workspace có `apps/mobile/` với các file plan riêng (`MOBILE_API_ENDPOINTS...`, `MOBILE_OFFLINE_SYNC_PROTOCOL...`).
- **Khuyến nghị:** Cân nhắc liệu mobile là P0 hay P2. Nếu pilot Đà Lạt cần app mobile để submit GPS proof, phải đưa vào tuần 1-2.

### 12. Child & Family Safety chưa có implementation detail
- Public Launch §10 đề cập COPPA / GDPR-K, family pod, guardian controls — nhưng không có spec.
- **Khuyến nghị:** Tạo `FAMILY_SAFETY_SPEC.md` định nghĩa age gating, consent flow, data retention cho account < 13 tuổi.

### 13. Ngôn ngữ EN chưa polished
- `Ms. H'Liêu, K'Ho Cil ethnic group` (Public Launch §9) — cú pháp hơi awkward. Đề xuất: `Ms. H'Liêu of the K'Ho (Cil) ethnic group`.
- `We're not building a social network. We're building a social operating system.` — hay, nhưng cần đảm bảo consistency trên toàn bộ copy.
- **Khuyến nghị:** Chạy 1 round native speaker review cho EN copy trước khi publish.

---

## LOW (Nice to have)

### 14. Các file zip trong thư mục chưa được inspect
- `MUONNOI_DEV_HANDOFF_PACKAGE_2026.zip`
- `MUONNOI_MISSING_5_FILES_PACKAGE_2026-05-11.zip`
- `MUONNOI_MOBILE_FULL_PACKAGE_2026-05-11.zip`
- `muonnoi.org_planing.zip`
- Có thể chứa các file còn thiếu (như `QUEST_TAXONOMY...`). Cần unzip và merge vào repo.

### 15. Press kit cần assets chưa có evidence
- Founder portrait, dalat-pilot-photo được liệt kê nhưng chưa thấy trong repo.
- OG images chưa thấy được tạo.

### 16. `apps/dulich/public/`, `apps/hoctap/public/` — chưa tồn tại
- Master Plan §11.2 liệt kê các app subdomain nhưng trong repo chỉ có `apps/mobile/` và `app.muonnoi.org/apps/web/`.
- Có thể đây là plan cho future monorepo — cần ghi chú rõ đây là "future structure".

---

## Đề xuất action plan sau audit

1. **Ngay hôm nay:** Lock timeline pilot (chọn Tháng 6/2026 hoặc 7/2026). Sửa tất cả "Tháng 1" trong Public Launch Package.
2. **Ngay hôm nay:** Unzip `MUONNOI_MISSING_5_FILES_PACKAGE` và kiểm tra xem `QUEST_TAXONOMY_DULICH_DALAT_V1.md` có trong đó không. Nếu không, assign người viết file này.
3. **Tuần 1:** Viết `TECH_SPEC_RECEIPTS_V1.md` và `KYC_TIER_DEFINITION.md`.
4. **Tuần 1-2:** Tham vấn luật sư về compliance du lịch VN + insurance partner.
5. **Tuần 2:** Revisit 30-day plan — giảm target 30-50% hoặc stretch timeline.
6. **Tuần 2:** Viết `PAYMENT_COMPLIANCE_SPEC.md`.
7. **Tuần 3:** Audit lại dev task list path cho đúng cấu trúc repo thực tế.
8. **Trước launch:** Native speaker review EN copy.

---

*Audit kết thúc. Cần follow-up sâu hơn vào từng mục, ping để mở rộng.*
