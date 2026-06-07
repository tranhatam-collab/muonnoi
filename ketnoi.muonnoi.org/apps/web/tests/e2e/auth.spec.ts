import { test, expect } from '@playwright/test';

test.describe('Auth Flow', () => {
  test('login page loads', async ({ page }) => {
    await page.goto('/login');
    await expect(page.locator('text=Đăng nhập')).toBeVisible();
    await expect(page.locator('text=Gửi magic link')).toBeVisible();
  });

  test('register page loads', async ({ page }) => {
    await page.goto('/register');
    await expect(page.locator('text=Tạo tài khoản')).toBeVisible();
    await expect(page.locator('text=Email')).toBeVisible();
  });

  test('register blocks under-18', async ({ page }) => {
    await page.goto('/register');
    await page.fill('input[type="number"]', '16');
    await page.click('text=Tiếp theo');
    await expect(page.locator('text=Bạn phải từ 18 tuổi trở lên')).toBeVisible();
  });

  test('login to register link works', async ({ page }) => {
    await page.goto('/login');
    await page.click('text=Đăng ký ngay');
    await expect(page).toHaveURL(/.*register/);
  });

  test('magic link submission shows success', async ({ page }) => {
    await page.goto('/login');
    await page.fill('input[type="email"]', 'test@example.com');
    await page.click('text=Gửi magic link');
    await expect(page.locator('text=Magic link đã gửi!')).toBeVisible();
    await expect(page.locator('text=Kiểm tra hộp thư')).toBeVisible();
  });

  test('verify page handles invalid token', async ({ page }) => {
    await page.goto('/verify?token=invalid');
    await expect(page.locator('text=Xác minh thất bại')).toBeVisible({ timeout: 5000 });
  });

  test('verify page handles missing token', async ({ page }) => {
    await page.goto('/verify');
    await expect(page.locator('text=Link không hợp lệ')).toBeVisible();
  });

  test('header shows login when not authenticated', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('text=Đăng nhập')).toBeVisible();
  });

  test('auth state persists after refresh', async ({ page }) => {
    // Simulate logged-in state by setting localStorage
    await page.goto('/');
    await page.evaluate(() => {
      localStorage.setItem('ketnoi_auth_token', 'test-token-123');
    });
    await page.reload();
    await expect(page.locator('text=Đăng xuất')).toBeVisible();
    await expect(page.locator('text=Hồ sơ')).toBeVisible();
  });
});
