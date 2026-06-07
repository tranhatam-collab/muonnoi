# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth.spec.ts >> Auth Flow >> login page loads
- Location: tests/e2e/auth.spec.ts:4:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('text=Đăng nhập')
Expected: visible
Error: strict mode violation: locator('text=Đăng nhập') resolved to 3 elements:
    1) <a href="/login" class="rounded-full bg-teal-700 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-teal-800 dark:bg-teal-600 dark:hover:bg-teal-500">Đăng nhập</a> aka getByRole('link', { name: 'Đăng nhập' })
    2) <h1 class="text-2xl font-bold text-slate-900 dark:text-white">Đăng nhập</h1> aka getByRole('heading', { name: 'Đăng nhập' })
    3) <button class="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800">…</button> aka getByRole('button', { name: 'Đăng nhập bằng Passkey' })

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('text=Đăng nhập')

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
    - generic [ref=e16]:
      - generic [ref=e17]:
        - heading "Đăng nhập" [level=1] [ref=e18]
        - paragraph [ref=e19]: Nhập email để nhận magic link hoặc sử dụng passkey
      - generic [ref=e21]:
        - generic [ref=e22]:
          - generic [ref=e23]:
            - generic [ref=e24]: Email
            - generic [ref=e25]:
              - img [ref=e26]
              - textbox "Email" [ref=e29]:
                - /placeholder: you@example.com
          - button "Gửi magic link" [ref=e30] [cursor=pointer]:
            - img [ref=e31]
            - text: Gửi magic link
        - generic [ref=e37]: hoặc
        - button "Đăng nhập bằng Passkey" [ref=e38] [cursor=pointer]:
          - img [ref=e39]
          - text: Đăng nhập bằng Passkey
      - generic [ref=e42]:
        - text: Chưa có tài khoản?
        - link "Đăng ký ngay" [ref=e43] [cursor=pointer]:
          - /url: /register
  - contentinfo [ref=e44]:
    - generic [ref=e45]:
      - generic [ref=e46]:
        - generic [ref=e47]:
          - generic [ref=e48]: Kết Nối Muôn Nơi
          - paragraph [ref=e49]: Gặp người thật. Hiểu nhau thật. Tôn trọng ranh giới thật.
        - generic [ref=e50]:
          - generic [ref=e51]: Sản phẩm
          - list [ref=e52]:
            - listitem [ref=e53]:
              - link "Trang chủ" [ref=e54] [cursor=pointer]:
                - /url: /
            - listitem [ref=e55]:
              - link "Hướng dẫn" [ref=e56] [cursor=pointer]:
                - /url: /guide
            - listitem [ref=e57]:
              - link "An toàn" [ref=e58] [cursor=pointer]:
                - /url: /safety
        - generic [ref=e59]:
          - generic [ref=e60]: Pháp lý
          - list [ref=e61]:
            - listitem [ref=e62]:
              - link "Điều khoản" [ref=e63] [cursor=pointer]:
                - /url: /terms
            - listitem [ref=e64]:
              - link "Chính sách riêng tư" [ref=e65] [cursor=pointer]:
                - /url: /privacy
            - listitem [ref=e66]:
              - link "Chính sách an toàn" [ref=e67] [cursor=pointer]:
                - /url: /safety-policy
        - generic [ref=e68]:
          - generic [ref=e69]: Liên hệ
          - list [ref=e70]:
            - listitem [ref=e71]:
              - link "support@muonnoi.org" [ref=e72] [cursor=pointer]:
                - /url: mailto:support@muonnoi.org
            - listitem [ref=e73]:
              - link "safety@muonnoi.org" [ref=e74] [cursor=pointer]:
                - /url: mailto:safety@muonnoi.org
      - generic [ref=e75]:
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
> 6  |     await expect(page.locator('text=Đăng nhập')).toBeVisible();
     |                                                  ^ Error: expect(locator).toBeVisible() failed
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
  60 |     await expect(page.locator('text=Hồ sơ')).toBeVisible();
  61 |   });
  62 | });
  63 | 
```