import { test, expect } from '@playwright/test';

test.describe('Landing Page', () => {
  test('loads and shows brand', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('text=Kết Nối Muôn Nơi')).toBeVisible();
    await expect(page.locator('text=Gặp người thật')).toBeVisible();
  });

  test('has CTA buttons', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('text=Bắt đầu ngay')).toBeVisible();
    await expect(page.locator('text=Tìm hiểu thêm')).toBeVisible();
  });

  test('navigation links work', async ({ page }) => {
    await page.goto('/');
    await page.click('text=Về chúng tôi');
    await expect(page).toHaveURL(/.*about/);
  });

  test('safety page loads', async ({ page }) => {
    await page.goto('/safety');
    await expect(page.locator('text=Cam kết an toàn')).toBeVisible();
  });

  test('terms page loads', async ({ page }) => {
    await page.goto('/terms');
    await expect(page.locator('text=Điều khoản sử dụng')).toBeVisible();
  });

  test('privacy page loads', async ({ page }) => {
    await page.goto('/privacy');
    await expect(page.locator('text=Chính sách riêng tư')).toBeVisible();
  });

  test('404 page loads', async ({ page }) => {
    await page.goto('/nonexistent');
    await expect(page.locator('text=404')).toBeVisible();
  });
});
