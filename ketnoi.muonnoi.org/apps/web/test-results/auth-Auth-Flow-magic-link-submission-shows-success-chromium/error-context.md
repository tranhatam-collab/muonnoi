# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth.spec.ts >> Auth Flow >> magic link submission shows success
- Location: tests/e2e/auth.spec.ts:29:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('text=Magic link đã gửi!')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('text=Magic link đã gửi!')

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
  - heading "Đăng nhập" [level=1]
  - paragraph: Nhập email để nhận magic link hoặc sử dụng passkey
  - text: Email
  - img
  - textbox "Email":
    - /placeholder: you@example.com
    - text: test@example.com
  - button "Gửi magic link":
    - img
    - text: Gửi magic link
  - text: hoặc
  - button "Đăng nhập bằng Passkey":
    - img
    - text: Đăng nhập bằng Passkey
  - text: Chưa có tài khoản?
  - link "Đăng ký ngay":
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
> 33 |     await expect(page.locator('text=Magic link đã gửi!')).toBeVisible();
     |                                                           ^ Error: expect(locator).toBeVisible() failed
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
  60 |     await expect(page.locator('text=Hồ sơ')).toBeVisible();
  61 |   });
  62 | });
  63 | 
```