# Muonnoi.org Master Plan Status

Date: 2026-05-11
Scope: Homepage stability + plan integrity + team execution map.

## Kết luận

- Kế hoạch cũ được giữ nguyên, không xóa.
- Trang chủ đã cập nhật theo LQOS nhưng vừa sửa lại lỗi menu chồng layout.
- Trạng thái hiện tại là: homepage lane ổn định hơn, content-depth lane còn tiếp tục.

## Xác nhận kế hoạch còn nguyên

- `docs/launch/MUONNOI_LQOS_HOMEPAGE_DEPLOY_PLAN_2026-05-11.md`
- `docs/launch/MUONNOI_LQOS_CONTINUATION_PLAN_2026-05-11.md`
- `docs/launch/MUONNOI_LIFE_QUEST_OS_MOBILE_EXECUTION_MASTER_PLAN_2026-05-11.md`
- `docs/MUONNOI_V2_VOICE_AND_PLACE.md`

Các file trên vẫn được giữ làm source of truth cho roadmap hiện tại.

Kế hoạch mobile iOS/Android đã được hợp nhất vào bộ thực thi và là lane triển khai chính cho app.

## Sửa lỗi vừa áp dụng

File sửa:
- `apps/web/public/assets/ui.css`

Nội dung sửa:
- Chặn `mn-mainNav` xuống dòng gây đè hero.
- Giảm kích thước pill menu desktop để giữ header gọn.
- Bật breakpoint sớm (`1220px`) để ẩn desktop nav, dùng burger/mobile menu.
- Ẩn `brand subline` và nút CTA topbar ở breakpoint trung gian để tránh tràn.

## True state theo team

Team 1 (Brand + Frontend):
- DONE: homepage LQOS copy đã lên live.
- IN_PROGRESS: hoàn thiện các trang sâu `manifesto/about/ecosystem/roadmap`.
- NEXT: chuẩn hóa typography + metadata từng trang.

Team 2 (Platform/Web Ops):
- DONE: deploy lane `apps/web/public` đã hoạt động.
- IN_PROGRESS: chuẩn preflight route inventory trước deploy.
- NEXT: chốt rollback checklist theo release.

Team 3 (Product + Content):
- DONE: route shell chính đã có.
- IN_PROGRESS: nội dung thật cho `press/security/join/investors`.
- NEXT: loại dead-link còn lại theo role-page.

Team 4 (QA + Reporting):
- DONE: có deploy evidence cho homepage lane.
- IN_PROGRESS: checklist đầy đủ theo section.
- NEXT: ký `web-ready` từng section trước `release-ready`.

## Blockers còn lại

1. Content pages chưa đầy đủ chiều sâu.
2. QA gate chưa hoàn tất theo từng section.
3. Một số route đang là shell, chưa thể gọi là full publication-ready.

## Next execution order

1. Khóa nội dung thật cho `manifesto` và `about`.
2. Hoàn thiện `ecosystem` và `roadmap`.
3. Bổ sung `press/security/join`.
4. Chạy gate report section-wise rồi mới công bố full web-ready.
