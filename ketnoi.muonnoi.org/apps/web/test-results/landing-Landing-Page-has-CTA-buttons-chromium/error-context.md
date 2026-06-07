# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: landing.spec.ts >> Landing Page >> has CTA buttons
- Location: tests/e2e/landing.spec.ts:10:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('text=Bắt đầu ngay')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('text=Bắt đầu ngay')

```

```yaml
- banner:
  - link "Kết Nối Muôn Nơi":
    - /url: /
    - img
    - text: Kết Nối Muôn Nơi
  - navigation:
    - link "Trang chủ":
      - /url: /
    - link "Về chúng tôi":
      - /url: /about
    - link "An toàn":
      - /url: /safety
    - link "Hướng dẫn":
      - /url: /guide
    - link "Đăng nhập":
      - /url: /login
- main:
  - img
  - text: Không gian kết nối đã xác minh
  - heading "Gặp người thật. Hiểu nhau thật. Tôn trọng ranh giới thật." [level=1]
  - paragraph: Kết Nối Muôn Nơi giúp những người đã xác minh danh tính kết nối với nhau thông qua giá trị sống, mục tiêu, nhịp sống và sự sẵn sàng cho một mối quan hệ lành mạnh.
  - link "Tạo hồ sơ":
    - /url: /register
    - img
    - text: Tạo hồ sơ
  - link "Tìm hiểu cách hoạt động":
    - /url: /guide
  - img
  - text: Xác minh danh tính Selfie + liveness
  - img
  - text: 5–12 gợi ý/ngày Không swipe vô tận
  - img
  - text: An toàn mặc định Không tracking ads
  - img
  - text: Kết nối ý nghĩa Intent-first matching
  - heading "Không chỉ là hẹn hò" [level=2]
  - paragraph: Mỗi tính năng được thiết kế để bảo vệ bạn và tôn trọng ranh giới.
  - img
  - heading "Xác minh nhiều tầng" [level=3]
  - paragraph: Email, số điện thoại, selfie/liveness, và tùy chọn ID. Không deepfake. Không AI persona.
  - img
  - heading "An toàn trong chat" [level=3]
  - paragraph: Money Request Shield phát hiện scam. Cảnh báo khi kéo sang nền tảng khác quá sớm.
  - img
  - heading "Safe Date Mode" [level=3]
  - paragraph: Lên kế hoạch hẹn, chia sẻ với người thân, check-in/check-out, và nút khẩn cấp.
  - img
  - heading "Video intro" [level=3]
  - paragraph: Quay video 10–20 giây để người khác thấy con người thật của bạn, không chỉ ảnh.
  - img
  - heading "Biểu tượng quan tâm" [level=3]
  - paragraph: 99 món biểu tượng theo 9 khía cạnh cuộc sống. Hoa cảm ơn, lời chúc, ngôi sao động viên, tách trà, cuốn sách, hành trình mới, hạt giống niềm tin. Không đổi ra tiền. Không cash out.
  - img
  - heading "Minh bạch & kháng cáo" [level=3]
  - paragraph: Lý do ban/suspend rõ ràng. Appeal form. Review SLA. Không ban mù mờ.
  - heading "Sẵn sàng gặp người thật?" [level=2]
  - paragraph: Tạo tài khoản miễn phí. Xác minh danh tính. Khám phá những kết nối có ý nghĩa.
  - link "Tạo tài khoản miễn phí":
    - /url: /register
- contentinfo:
  - text: Kết Nối Muôn Nơi
  - paragraph: Gặp người thật. Hiểu nhau thật. Tôn trọng ranh giới thật.
  - text: Sản phẩm
  - list:
    - listitem:
      - link "Trang chủ":
        - /url: /
    - listitem:
      - link "Hướng dẫn":
        - /url: /guide
    - listitem:
      - link "An toàn":
        - /url: /safety
  - text: Pháp lý
  - list:
    - listitem:
      - link "Điều khoản":
        - /url: /terms
    - listitem:
      - link "Chính sách riêng tư":
        - /url: /privacy
    - listitem:
      - link "Chính sách an toàn":
        - /url: /safety-policy
  - text: Liên hệ
  - list:
    - listitem:
      - link "support@muonnoi.org":
        - /url: mailto:support@muonnoi.org
    - listitem:
      - link "safety@muonnoi.org":
        - /url: mailto:safety@muonnoi.org
  - text: © 2026 Muôn Nơi. Bảo lưu mọi quyền. Công ty Cổ phần Giáo dục Hành Trình Kasan. VIET CAN NEW CORP.
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Landing Page', () => {
  4  |   test('loads and shows brand', async ({ page }) => {
  5  |     await page.goto('/');
  6  |     await expect(page.locator('text=Kết Nối Muôn Nơi')).toBeVisible();
  7  |     await expect(page.locator('text=Gặp người thật')).toBeVisible();
  8  |   });
  9  | 
  10 |   test('has CTA buttons', async ({ page }) => {
  11 |     await page.goto('/');
> 12 |     await expect(page.locator('text=Bắt đầu ngay')).toBeVisible();
     |                                                     ^ Error: expect(locator).toBeVisible() failed
  13 |     await expect(page.locator('text=Tìm hiểu thêm')).toBeVisible();
  14 |   });
  15 | 
  16 |   test('navigation links work', async ({ page }) => {
  17 |     await page.goto('/');
  18 |     await page.click('text=Về chúng tôi');
  19 |     await expect(page).toHaveURL(/.*about/);
  20 |   });
  21 | 
  22 |   test('safety page loads', async ({ page }) => {
  23 |     await page.goto('/safety');
  24 |     await expect(page.locator('text=Cam kết an toàn')).toBeVisible();
  25 |   });
  26 | 
  27 |   test('terms page loads', async ({ page }) => {
  28 |     await page.goto('/terms');
  29 |     await expect(page.locator('text=Điều khoản sử dụng')).toBeVisible();
  30 |   });
  31 | 
  32 |   test('privacy page loads', async ({ page }) => {
  33 |     await page.goto('/privacy');
  34 |     await expect(page.locator('text=Chính sách riêng tư')).toBeVisible();
  35 |   });
  36 | 
  37 |   test('404 page loads', async ({ page }) => {
  38 |     await page.goto('/nonexistent');
  39 |     await expect(page.locator('text=404')).toBeVisible();
  40 |   });
  41 | });
  42 | 
```