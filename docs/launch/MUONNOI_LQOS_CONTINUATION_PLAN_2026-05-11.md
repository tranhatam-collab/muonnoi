# Muonnoi.org LQOS Continuation Plan

## Kế hoạch hiện tại

- Trang chủ đã được chuyển sang gói `lqos.muonnoi.org` và đã deploy production trên `muonnoi.org`.
- Các đường route bắt buộc hiện có: `/`, `/quests/`, `/quests/dulich/`, `/host/`, `/partners/`.
- Còn lại là nội dung chuyên sâu (manifesto, about, press, investment, project portal) chưa triển khai đầy đủ.

## Rủi ro còn lại

1. Nhiều liên kết nội dung đang còn là shell cơ bản, chưa có nội dung thật.
2. Chưa có chuẩn ngôn ngữ 100% cho voice/brand tại các trang nội dung sâu.
3. QA chưa có checklist cho toàn bộ dòng trang theo role (chỉ đã có route smoke cơ bản).
4. Kỹ thuật chưa có “khóa nội dung” theo nhóm so với brand chuẩn (Azure/Whisper/Gold) ngoài shell.

## Phân việc theo team

### Team 1 — Core Brand + Frontend
**Mục tiêu:** hoàn thiện nội dung thương hiệu, SEO metadata, và toàn bộ UI text theo chuẩn brand.
- Bổ sung content chi tiết cho:
  - `/manifesto/`
  - `/about/`
  - `/ecosystem/`
  - `/roadmap/`
- Áp dụng chuẩn H1/H2/H3, title/description, OG, canonical theo luật web text.
- Hoàn thiện style cho route shell:
  - `/quests/`
  - `/host/`
  - `/partners/`

### Team 2 — Platform/Web Ops
**Mục tiêu:** đảm bảo độ ổn định môi trường và luồng deployment.
- Duy trì deploy `apps/web/public` theo branch production ổn định.
- Thêm preflight script cho route inventory trước mỗi deploy.
- Bổ sung sitemap đầy đủ theo route mới sau khi nội dung hoàn chỉnh.
- Chuẩn bị rollback plan rõ cho production page changes.

### Team 3 — Product/Content Integrity
**Mục tiêu:** đưa nội dung nghiệp vụ đúng vị trí, tránh hỏng logic route.
- Triển khai đầy đủ:
  - `/press/`
  - `/investors/` (nếu cần công bố)
  - `/security/` (bảo mật, privacy)
  - `/join/` links cho luồng onboarding voice/community.
- Kiểm tra liên kết nội bộ: trang chủ phải không còn dead-link ngoài các route đã xác nhận.

### Team 4 — QA + Reporting
**Mục tiêu:** hoàn tất gate theo chứng cứ.
- Thiết lập chuẩn báo cáo:
  - character_hygiene
  - H standard
  - SEO metadata
  - route evidence
  - true state
  - release evidence
- Ký xác nhận:
  - “web-ready” cho từng section sau khi đúng checklist.
  - “release-ready” chỉ khi tất cả section bắt buộc đã có content và metadata.

## Tương tác theo 15/30 phút

- Trạng thái mỗi 30 phút: cập nhật đầy đủ `DONE`, `IN_PROGRESS`, `BLOCKED`, `NEXT`.
- Ghi cứng milestone:
  - `LQOS_HOME_DONE`: đã hoàn tất.
  - `LQOS_CONTENT_PENDING`: còn lại phần content sâu.
  - `LQOS_FULL_WEB_READY`: khi hoàn tất route + nội dung + SEO + report.

## Next action list

1. Team 1: triển khai nội dung full cho 4 trang cốt lõi (manifesto/about/ecosystem/roadmap).
2. Team 2: chuẩn hóa deploy check + inventory route trước và sau từng lần publish.
3. Team 3: làm các trang press/security/investors/join.
4. Team 4: chạy checklist theo section, cập nhật trạng thái web-ready section-wise.

## True state hôm nay

- Trang chủ: live, dùng gói LQOS.
- Kế hoạch: đã có file hành động tiếp theo, chưa cần dừng tiến độ.
- Độ hoàn thiện: hoàn tất lane `homepage + route shell`; chưa hoàn tất lane `full content + reporting closure`.
