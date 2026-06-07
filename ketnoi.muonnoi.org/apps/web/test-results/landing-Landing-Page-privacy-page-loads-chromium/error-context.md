# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: landing.spec.ts >> Landing Page >> privacy page loads
- Location: tests/e2e/landing.spec.ts:32:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('text=Chính sách riêng tư')
Expected: visible
Error: strict mode violation: locator('text=Chính sách riêng tư') resolved to 2 elements:
    1) <h1 class="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Chính sách riêng tư</h1> aka getByRole('heading', { name: 'Chính sách riêng tư' })
    2) <a href="/privacy" class="hover:text-teal-700 dark:hover:text-teal-400">Chính sách riêng tư</a> aka getByRole('link', { name: 'Chính sách riêng tư' })

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('text=Chính sách riêng tư')

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
      - heading "Chính sách riêng tư" [level=1] [ref=e17]
      - generic [ref=e18]:
        - paragraph [ref=e19]: "Có hiệu lực: 2026. Phiên bản v0.1."
        - generic [ref=e20]:
          - heading "1. Dữ liệu chúng tôi thu thập" [level=2] [ref=e21]
          - list [ref=e22]:
            - listitem [ref=e23]: Email, nickname, tuổi, giới tính, thành phố
            - listitem [ref=e24]: Ảnh selfie (để xác minh, không lưu gốc)
            - listitem [ref=e25]: "Hồ sơ: intent, giá trị, lối sống, ranh giới"
            - listitem [ref=e26]: "Nhật ký hoạt động: match, chat, report"
            - listitem [ref=e27]: "Dữ liệu thiết bị: loại trình duyệt, OS (không tracking)"
        - generic [ref=e28]:
          - heading "2. Dữ liệu chúng tôi KHÔNG thu thập" [level=2] [ref=e29]
          - list [ref=e30]:
            - listitem [ref=e31]: Không lưu ID gốc (CMND/CCCD/Hộ chiếu)
            - listitem [ref=e32]: Không lưu vị trí chính xác (chỉ vùng/thành phố)
            - listitem [ref=e33]: Không sử dụng cookie tracking quảng cáo
            - listitem [ref=e34]: Không bán dữ liệu cho bên thứ ba
        - generic [ref=e35]:
          - heading "3. Zero-Knowledge Verification" [level=2] [ref=e36]
          - paragraph [ref=e37]: Khi bạn xác minh danh tính, ảnh gốc được xử lý và xóa ngay. Chúng tôi chỉ lưu hash và kết quả xác minh (đạt/không đạt). Không ai trong công ty có thể xem ảnh CMND của bạn.
        - generic [ref=e38]:
          - heading "4. Quyền của bạn" [level=2] [ref=e39]
          - list [ref=e40]:
            - listitem [ref=e41]: Xem dữ liệu của bạn
            - listitem [ref=e42]: Sửa dữ liệu sai
            - listitem [ref=e43]: Xóa tài khoản và toàn bộ dữ liệu (hard-delete)
            - listitem [ref=e44]: Tải xuống dữ liệu của bạn
            - listitem [ref=e45]: Rút lời đồng ý (unsubscribe, delete)
        - generic [ref=e46]:
          - heading "5. Liên hệ" [level=2] [ref=e47]
          - paragraph [ref=e48]:
            - text: "Email:"
            - link "privacy@muonnoi.org" [ref=e49] [cursor=pointer]:
              - /url: mailto:privacy@muonnoi.org
        - paragraph [ref=e51]: Bản chính sách này là nháp và sẽ được legal counsel review trước khi publish chính thức.
  - contentinfo [ref=e52]:
    - generic [ref=e53]:
      - generic [ref=e54]:
        - generic [ref=e55]:
          - generic [ref=e56]: Kết Nối Muôn Nơi
          - paragraph [ref=e57]: Gặp người thật. Hiểu nhau thật. Tôn trọng ranh giới thật.
        - generic [ref=e58]:
          - generic [ref=e59]: Sản phẩm
          - list [ref=e60]:
            - listitem [ref=e61]:
              - link "Trang chủ" [ref=e62] [cursor=pointer]:
                - /url: /
            - listitem [ref=e63]:
              - link "Hướng dẫn" [ref=e64] [cursor=pointer]:
                - /url: /guide
            - listitem [ref=e65]:
              - link "An toàn" [ref=e66] [cursor=pointer]:
                - /url: /safety
        - generic [ref=e67]:
          - generic [ref=e68]: Pháp lý
          - list [ref=e69]:
            - listitem [ref=e70]:
              - link "Điều khoản" [ref=e71] [cursor=pointer]:
                - /url: /terms
            - listitem [ref=e72]:
              - link "Chính sách riêng tư" [ref=e73] [cursor=pointer]:
                - /url: /privacy
            - listitem [ref=e74]:
              - link "Chính sách an toàn" [ref=e75] [cursor=pointer]:
                - /url: /safety-policy
        - generic [ref=e76]:
          - generic [ref=e77]: Liên hệ
          - list [ref=e78]:
            - listitem [ref=e79]:
              - link "support@muonnoi.org" [ref=e80] [cursor=pointer]:
                - /url: mailto:support@muonnoi.org
            - listitem [ref=e81]:
              - link "safety@muonnoi.org" [ref=e82] [cursor=pointer]:
                - /url: mailto:safety@muonnoi.org
      - generic [ref=e83]:
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
  6  |     await expect(page.locator('text=Kết Nối Muôn Nơi')).toBeVisible();
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
> 34 |     await expect(page.locator('text=Chính sách riêng tư')).toBeVisible();
     |                                                            ^ Error: expect(locator).toBeVisible() failed
  35 |   });
  36 | 
  37 |   test('404 page loads', async ({ page }) => {
  38 |     await page.goto('/nonexistent');
  39 |     await expect(page.locator('text=404')).toBeVisible();
  40 |   });
  41 | });
  42 | 
```