# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: landing.spec.ts >> Landing Page >> loads and shows brand
- Location: tests/e2e/landing.spec.ts:4:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('text=Kết Nối Muôn Nơi')
Expected: visible
Error: strict mode violation: locator('text=Kết Nối Muôn Nơi') resolved to 3 elements:
    1) <span class="text-lg font-bold tracking-tight">Kết Nối Muôn Nơi</span> aka getByRole('link', { name: 'Kết Nối Muôn Nơi' })
    2) <p class="mx-auto mb-8 max-w-2xl text-lg text-slate-600 dark:text-slate-400">Kết Nối Muôn Nơi giúp những người đã xác minh dan…</p> aka getByText('Kết Nối Muôn Nơi giúp những')
    3) <div class="mb-3 text-lg font-bold text-slate-900 dark:text-white">Kết Nối Muôn Nơi</div> aka getByRole('contentinfo').getByText('Kết Nối Muôn Nơi')

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('text=Kết Nối Muôn Nơi')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e3]:
    - generic [ref=e4]:
      - link "Kết Nối Muôn Nơi" [ref=e5] [cursor=pointer]:
        - /url: /
        - img [ref=e6]
        - generic [ref=e8]: Kết Nối Muôn Nơi
      - navigation [ref=e9]:
        - link "Trang chủ" [ref=e10] [cursor=pointer]:
          - /url: /
        - link "Về chúng tôi" [ref=e11] [cursor=pointer]:
          - /url: /about
        - link "An toàn" [ref=e12] [cursor=pointer]:
          - /url: /safety
        - link "Hướng dẫn" [ref=e13] [cursor=pointer]:
          - /url: /guide
        - link "Đăng nhập" [ref=e14] [cursor=pointer]:
          - /url: /login
  - main [ref=e15]:
    - generic [ref=e18]:
      - generic [ref=e19]:
        - img [ref=e20]
        - text: Không gian kết nối đã xác minh
      - heading "Gặp người thật. Hiểu nhau thật. Tôn trọng ranh giới thật." [level=1] [ref=e22]:
        - text: Gặp người thật.
        - text: Hiểu nhau thật.
        - text: Tôn trọng ranh giới thật.
      - paragraph [ref=e23]: Kết Nối Muôn Nơi giúp những người đã xác minh danh tính kết nối với nhau thông qua giá trị sống, mục tiêu, nhịp sống và sự sẵn sàng cho một mối quan hệ lành mạnh.
      - generic [ref=e24]:
        - link "Tạo hồ sơ" [ref=e25] [cursor=pointer]:
          - /url: /register
          - img [ref=e26]
          - text: Tạo hồ sơ
        - link "Tìm hiểu cách hoạt động" [ref=e28] [cursor=pointer]:
          - /url: /guide
      - generic [ref=e29]:
        - generic [ref=e30]:
          - img [ref=e31]
          - generic [ref=e33]: Xác minh danh tính
          - generic [ref=e34]: Selfie + liveness
        - generic [ref=e35]:
          - img [ref=e36]
          - generic [ref=e41]: 5–12 gợi ý/ngày
          - generic [ref=e42]: Không swipe vô tận
        - generic [ref=e43]:
          - img [ref=e44]
          - generic [ref=e47]: An toàn mặc định
          - generic [ref=e48]: Không tracking ads
        - generic [ref=e49]:
          - img [ref=e50]
          - generic [ref=e52]: Kết nối ý nghĩa
          - generic [ref=e53]: Intent-first matching
    - generic [ref=e56]:
      - generic [ref=e57]:
        - heading "Không chỉ là hẹn hò" [level=2] [ref=e58]
        - paragraph [ref=e59]: Mỗi tính năng được thiết kế để bảo vệ bạn và tôn trọng ranh giới.
      - generic [ref=e60]:
        - generic [ref=e61]:
          - img [ref=e63]
          - heading "Xác minh nhiều tầng" [level=3] [ref=e66]
          - paragraph [ref=e67]: Email, số điện thoại, selfie/liveness, và tùy chọn ID. Không deepfake. Không AI persona.
        - generic [ref=e68]:
          - img [ref=e70]
          - heading "An toàn trong chat" [level=3] [ref=e72]
          - paragraph [ref=e73]: Money Request Shield phát hiện scam. Cảnh báo khi kéo sang nền tảng khác quá sớm.
        - generic [ref=e74]:
          - img [ref=e76]
          - heading "Safe Date Mode" [level=3] [ref=e79]
          - paragraph [ref=e80]: Lên kế hoạch hẹn, chia sẻ với người thân, check-in/check-out, và nút khẩn cấp.
        - generic [ref=e81]:
          - img [ref=e83]
          - heading "Video intro" [level=3] [ref=e86]
          - paragraph [ref=e87]: Quay video 10–20 giây để người khác thấy con người thật của bạn, không chỉ ảnh.
        - generic [ref=e88]:
          - img [ref=e90]
          - heading "Biểu tượng quan tâm" [level=3] [ref=e94]
          - paragraph [ref=e95]: 99 món biểu tượng theo 9 khía cạnh cuộc sống. Hoa cảm ơn, lời chúc, ngôi sao động viên, tách trà, cuốn sách, hành trình mới, hạt giống niềm tin. Không đổi ra tiền. Không cash out.
        - generic [ref=e96]:
          - img [ref=e98]
          - heading "Minh bạch & kháng cáo" [level=3] [ref=e102]
          - paragraph [ref=e103]: Lý do ban/suspend rõ ràng. Appeal form. Review SLA. Không ban mù mờ.
    - generic [ref=e105]:
      - heading "Sẵn sàng gặp người thật?" [level=2] [ref=e106]
      - paragraph [ref=e107]: Tạo tài khoản miễn phí. Xác minh danh tính. Khám phá những kết nối có ý nghĩa.
      - link "Tạo tài khoản miễn phí" [ref=e108] [cursor=pointer]:
        - /url: /register
  - contentinfo [ref=e109]:
    - generic [ref=e110]:
      - generic [ref=e111]:
        - generic [ref=e112]:
          - generic [ref=e113]: Kết Nối Muôn Nơi
          - paragraph [ref=e114]: Gặp người thật. Hiểu nhau thật. Tôn trọng ranh giới thật.
        - generic [ref=e115]:
          - generic [ref=e116]: Sản phẩm
          - list [ref=e117]:
            - listitem [ref=e118]:
              - link "Trang chủ" [ref=e119] [cursor=pointer]:
                - /url: /
            - listitem [ref=e120]:
              - link "Hướng dẫn" [ref=e121] [cursor=pointer]:
                - /url: /guide
            - listitem [ref=e122]:
              - link "An toàn" [ref=e123] [cursor=pointer]:
                - /url: /safety
        - generic [ref=e124]:
          - generic [ref=e125]: Pháp lý
          - list [ref=e126]:
            - listitem [ref=e127]:
              - link "Điều khoản" [ref=e128] [cursor=pointer]:
                - /url: /terms
            - listitem [ref=e129]:
              - link "Chính sách riêng tư" [ref=e130] [cursor=pointer]:
                - /url: /privacy
            - listitem [ref=e131]:
              - link "Chính sách an toàn" [ref=e132] [cursor=pointer]:
                - /url: /safety-policy
        - generic [ref=e133]:
          - generic [ref=e134]: Liên hệ
          - list [ref=e135]:
            - listitem [ref=e136]:
              - link "support@muonnoi.org" [ref=e137] [cursor=pointer]:
                - /url: mailto:support@muonnoi.org
            - listitem [ref=e138]:
              - link "safety@muonnoi.org" [ref=e139] [cursor=pointer]:
                - /url: mailto:safety@muonnoi.org
      - generic [ref=e140]:
        - text: © 2026 Muôn Nơi. Bảo lưu mọi quyền.
        - text: Công ty Cổ phần Giáo dục Hành Trình Kasan. VIET CAN NEW CORP.
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Landing Page', () => {
  4  |   test('loads and shows brand', async ({ page }) => {
  5  |     await page.goto('/');
> 6  |     await expect(page.locator('text=Kết Nối Muôn Nơi')).toBeVisible();
     |                                                         ^ Error: expect(locator).toBeVisible() failed
  7  |     await expect(page.locator('text=Gặp người thật')).toBeVisible();
  8  |   });
  9  | 
  10 |   test('has CTA buttons', async ({ page }) => {
  11 |     await page.goto('/');
  12 |     await expect(page.locator('text=Bắt đầu ngay')).toBeVisible();
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