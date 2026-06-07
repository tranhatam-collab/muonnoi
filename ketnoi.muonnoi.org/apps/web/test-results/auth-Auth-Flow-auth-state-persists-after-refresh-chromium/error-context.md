# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth.spec.ts >> Auth Flow >> auth state persists after refresh
- Location: tests/e2e/auth.spec.ts:52:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('text=Hồ sơ')
Expected: visible
Error: strict mode violation: locator('text=Hồ sơ') resolved to 2 elements:
    1) <a href="/profile" class="flex items-center gap-1.5 text-sm font-medium text-slate-600 transition-colors hover:text-teal-700 dark:text-slate-400 dark:hover:text-teal-400">…</a> aka getByRole('link', { name: 'Hồ sơ', exact: true })
    2) <a href="/register" class="inline-flex items-center gap-2 rounded-full bg-teal-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-700/20 transition-all hover:bg-teal-800 hover:shadow-teal-700/30 dark:bg-teal-600 dark:hover:bg-teal-500">…</a> aka getByRole('link', { name: 'Tạo hồ sơ' })

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('text=Hồ sơ')

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
        - generic [ref=e14]:
          - link "Hồ sơ" [ref=e15] [cursor=pointer]:
            - /url: /profile
            - img [ref=e16]
            - text: Hồ sơ
          - button "Đăng xuất" [ref=e19] [cursor=pointer]:
            - img [ref=e20]
            - text: Đăng xuất
  - main [ref=e23]:
    - generic [ref=e26]:
      - generic [ref=e27]:
        - img [ref=e28]
        - text: Không gian kết nối đã xác minh
      - heading "Gặp người thật. Hiểu nhau thật. Tôn trọng ranh giới thật." [level=1] [ref=e30]:
        - text: Gặp người thật.
        - text: Hiểu nhau thật.
        - text: Tôn trọng ranh giới thật.
      - paragraph [ref=e31]: Kết Nối Muôn Nơi giúp những người đã xác minh danh tính kết nối với nhau thông qua giá trị sống, mục tiêu, nhịp sống và sự sẵn sàng cho một mối quan hệ lành mạnh.
      - generic [ref=e32]:
        - link "Tạo hồ sơ" [ref=e33] [cursor=pointer]:
          - /url: /register
          - img [ref=e34]
          - text: Tạo hồ sơ
        - link "Tìm hiểu cách hoạt động" [ref=e36] [cursor=pointer]:
          - /url: /guide
      - generic [ref=e37]:
        - generic [ref=e38]:
          - img [ref=e39]
          - generic [ref=e41]: Xác minh danh tính
          - generic [ref=e42]: Selfie + liveness
        - generic [ref=e43]:
          - img [ref=e44]
          - generic [ref=e49]: 5–12 gợi ý/ngày
          - generic [ref=e50]: Không swipe vô tận
        - generic [ref=e51]:
          - img [ref=e52]
          - generic [ref=e55]: An toàn mặc định
          - generic [ref=e56]: Không tracking ads
        - generic [ref=e57]:
          - img [ref=e58]
          - generic [ref=e60]: Kết nối ý nghĩa
          - generic [ref=e61]: Intent-first matching
    - generic [ref=e64]:
      - generic [ref=e65]:
        - heading "Không chỉ là hẹn hò" [level=2] [ref=e66]
        - paragraph [ref=e67]: Mỗi tính năng được thiết kế để bảo vệ bạn và tôn trọng ranh giới.
      - generic [ref=e68]:
        - generic [ref=e69]:
          - img [ref=e71]
          - heading "Xác minh nhiều tầng" [level=3] [ref=e74]
          - paragraph [ref=e75]: Email, số điện thoại, selfie/liveness, và tùy chọn ID. Không deepfake. Không AI persona.
        - generic [ref=e76]:
          - img [ref=e78]
          - heading "An toàn trong chat" [level=3] [ref=e80]
          - paragraph [ref=e81]: Money Request Shield phát hiện scam. Cảnh báo khi kéo sang nền tảng khác quá sớm.
        - generic [ref=e82]:
          - img [ref=e84]
          - heading "Safe Date Mode" [level=3] [ref=e87]
          - paragraph [ref=e88]: Lên kế hoạch hẹn, chia sẻ với người thân, check-in/check-out, và nút khẩn cấp.
        - generic [ref=e89]:
          - img [ref=e91]
          - heading "Video intro" [level=3] [ref=e94]
          - paragraph [ref=e95]: Quay video 10–20 giây để người khác thấy con người thật của bạn, không chỉ ảnh.
        - generic [ref=e96]:
          - img [ref=e98]
          - heading "Biểu tượng quan tâm" [level=3] [ref=e102]
          - paragraph [ref=e103]: 99 món biểu tượng theo 9 khía cạnh cuộc sống. Hoa cảm ơn, lời chúc, ngôi sao động viên, tách trà, cuốn sách, hành trình mới, hạt giống niềm tin. Không đổi ra tiền. Không cash out.
        - generic [ref=e104]:
          - img [ref=e106]
          - heading "Minh bạch & kháng cáo" [level=3] [ref=e110]
          - paragraph [ref=e111]: Lý do ban/suspend rõ ràng. Appeal form. Review SLA. Không ban mù mờ.
    - generic [ref=e113]:
      - heading "Sẵn sàng gặp người thật?" [level=2] [ref=e114]
      - paragraph [ref=e115]: Tạo tài khoản miễn phí. Xác minh danh tính. Khám phá những kết nối có ý nghĩa.
      - link "Tạo tài khoản miễn phí" [ref=e116] [cursor=pointer]:
        - /url: /register
  - contentinfo [ref=e117]:
    - generic [ref=e118]:
      - generic [ref=e119]:
        - generic [ref=e120]:
          - generic [ref=e121]: Kết Nối Muôn Nơi
          - paragraph [ref=e122]: Gặp người thật. Hiểu nhau thật. Tôn trọng ranh giới thật.
        - generic [ref=e123]:
          - generic [ref=e124]: Sản phẩm
          - list [ref=e125]:
            - listitem [ref=e126]:
              - link "Trang chủ" [ref=e127] [cursor=pointer]:
                - /url: /
            - listitem [ref=e128]:
              - link "Hướng dẫn" [ref=e129] [cursor=pointer]:
                - /url: /guide
            - listitem [ref=e130]:
              - link "An toàn" [ref=e131] [cursor=pointer]:
                - /url: /safety
        - generic [ref=e132]:
          - generic [ref=e133]: Pháp lý
          - list [ref=e134]:
            - listitem [ref=e135]:
              - link "Điều khoản" [ref=e136] [cursor=pointer]:
                - /url: /terms
            - listitem [ref=e137]:
              - link "Chính sách riêng tư" [ref=e138] [cursor=pointer]:
                - /url: /privacy
            - listitem [ref=e139]:
              - link "Chính sách an toàn" [ref=e140] [cursor=pointer]:
                - /url: /safety-policy
        - generic [ref=e141]:
          - generic [ref=e142]: Liên hệ
          - list [ref=e143]:
            - listitem [ref=e144]:
              - link "support@muonnoi.org" [ref=e145] [cursor=pointer]:
                - /url: mailto:support@muonnoi.org
            - listitem [ref=e146]:
              - link "safety@muonnoi.org" [ref=e147] [cursor=pointer]:
                - /url: mailto:safety@muonnoi.org
      - generic [ref=e148]:
        - text: © 2026 Muôn Nơi. Bảo lưu mọi quyền.
        - text: Công ty Cổ phần Giáo dục Hành Trình Kasan. VIET CAN NEW CORP.
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Auth Flow', () => {
  4  |   test('login page loads', async ({ page }) => {
  5  |     await page.goto('/login');
  6  |     await expect(page.locator('text=Đăng nhập')).toBeVisible();
  7  |     await expect(page.locator('text=Gửi magic link')).toBeVisible();
  8  |   });
  9  | 
  10 |   test('register page loads', async ({ page }) => {
  11 |     await page.goto('/register');
  12 |     await expect(page.locator('text=Tạo tài khoản')).toBeVisible();
  13 |     await expect(page.locator('text=Email')).toBeVisible();
  14 |   });
  15 | 
  16 |   test('register blocks under-18', async ({ page }) => {
  17 |     await page.goto('/register');
  18 |     await page.fill('input[type="number"]', '16');
  19 |     await page.click('text=Tiếp theo');
  20 |     await expect(page.locator('text=Bạn phải từ 18 tuổi trở lên')).toBeVisible();
  21 |   });
  22 | 
  23 |   test('login to register link works', async ({ page }) => {
  24 |     await page.goto('/login');
  25 |     await page.click('text=Đăng ký ngay');
  26 |     await expect(page).toHaveURL(/.*register/);
  27 |   });
  28 | 
  29 |   test('magic link submission shows success', async ({ page }) => {
  30 |     await page.goto('/login');
  31 |     await page.fill('input[type="email"]', 'test@example.com');
  32 |     await page.click('text=Gửi magic link');
  33 |     await expect(page.locator('text=Magic link đã gửi!')).toBeVisible();
  34 |     await expect(page.locator('text=Kiểm tra hộp thư')).toBeVisible();
  35 |   });
  36 | 
  37 |   test('verify page handles invalid token', async ({ page }) => {
  38 |     await page.goto('/verify?token=invalid');
  39 |     await expect(page.locator('text=Xác minh thất bại')).toBeVisible({ timeout: 5000 });
  40 |   });
  41 | 
  42 |   test('verify page handles missing token', async ({ page }) => {
  43 |     await page.goto('/verify');
  44 |     await expect(page.locator('text=Link không hợp lệ')).toBeVisible();
  45 |   });
  46 | 
  47 |   test('header shows login when not authenticated', async ({ page }) => {
  48 |     await page.goto('/');
  49 |     await expect(page.locator('text=Đăng nhập')).toBeVisible();
  50 |   });
  51 | 
  52 |   test('auth state persists after refresh', async ({ page }) => {
  53 |     // Simulate logged-in state by setting localStorage
  54 |     await page.goto('/');
  55 |     await page.evaluate(() => {
  56 |       localStorage.setItem('ketnoi_auth_token', 'test-token-123');
  57 |     });
  58 |     await page.reload();
  59 |     await expect(page.locator('text=Đăng xuất')).toBeVisible();
> 60 |     await expect(page.locator('text=Hồ sơ')).toBeVisible();
     |                                              ^ Error: expect(locator).toBeVisible() failed
  61 |   });
  62 | });
  63 | 
```