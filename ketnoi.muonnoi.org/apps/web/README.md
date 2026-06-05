# Kết Nối Muôn Nơi — Web App

**Stack:** Astro 5 + React 19 + Tailwind CSS 4 + TypeScript

## Cấu trúc

```
src/
  components/     # React islands (interactive components)
  layouts/        # Astro layouts
  pages/          # Astro pages (file-based routing)
  stores/         # Zustand stores
  types/          # TypeScript types
  styles/         # Global CSS + Tailwind
public/           # Static assets
```

## Pages

| Route | Page | Trạng thái |
|---|---|---|
| `/` | Landing | ✅ MVP |
| `/login` | Đăng nhập (magic link + passkey) | ✅ MVP |
| `/register` | Đăng ký (3 bước + age gate) | ✅ MVP |
| `/about` | Về chúng tôi | ✅ MVP |
| `/safety` | Cam kết an toàn | ✅ MVP |
| `/guide` | Hướng dẫn sử dụng | ✅ MVP |
| `/profile` | Hồ sơ (Trust + Intent + Compatibility) | ✅ MVP |
| `/matching` | Gợi ý kết nối (5–12/ngày) | ✅ MVP |
| `/chat` | Trò chuyện an toàn | ✅ MVP |
| `/terms` | Điều khoản | ✅ MVP |
| `/privacy` | Chính sách riêng tư | ✅ MVP |

## Chạy dev

```bash
cd apps/web
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## TODO API

- [ ] `/api/auth/magic-link` — Gửi magic link
- [ ] `/api/auth/verify` — Xác minh magic link
- [ ] `/api/auth/passkey` — WebAuthn registration/login
- [ ] `/api/profile` — CRUD hồ sơ
- [ ] `/api/matching` — Lấy gợi ý
- [ ] `/api/chat` — WebSocket messages
- [ ] `/api/report` — Báo cáo
- [ ] `/api/verify/selfie` — Liveness check

## Nguyên tắc UI

- Không infinite scroll. Mỗi ngày 5–12 gợi ý.
- Không exact location. Chỉ vùng/thành phố.
- Không phone/email public. Chỉ hiển thị sau khi cả 2 đồng ý.
- Warning banners cho scam/off-platform.
- Privacy by default. Dark mode support.
