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
});
