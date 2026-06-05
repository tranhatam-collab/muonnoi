# ĐẶC TẢ TÍNH NĂNG ĐỒNG NHẤT WEB / iOS / ANDROID — KẾT NỐI MUÔN NƠI

Phiên bản: v0.1 — 2026  
Có hiệu lực khi: Founder phê duyệt  
Subdomain: ketnoi.muonnoi.org  
Nền tảng: Web (PWA-ready), iOS App (Swift/SwiftUI), Android App (Kotlin/Jetpack Compose)  
Ngôn ngữ: Tiếng Việt (chính), Tiếng Anh (song ngữ)

---

## 1. Nguyên tắc Parity

1.1. Web, iOS App và Android App phải phản chiếu **cùng cấp độ thành viên, cùng trạng thái xác minh, cùng quyền và cùng chính sách**.

1.2. Không phiên bản nào được mở tính năng trái với điều khoản nền tảng hoặc cho phép bypass an toàn.

1.3. Web là nền tảng chính và ưu tiên phát triển đầu tiên (v0.1). iOS và Android sẽ mirror web functionality với native optimization.

1.4. PWA (Progressive Web App) là giải pháp bridge để user có trải nghiệm app-like trên mobile web trước khi native app ra mắt.

---

## 2. Bảng tính năng đồng nhất

### 2.1. Tài khoản & Xác minh

| Tính năng | Web | iOS | Android | Ghi chú |
|---|---|---|---|---|
| Đăng ký cấp 1 (email + nickname) | ✓ | ✓ | ✓ | Tất cả nền tảng |
| Xác minh cấp 2 (Verify.muonnoi.org) | ✓ | ✓ | ✓ | Webview hoặc deep link |
| Xác minh cấp 3 (Verify.iai.one) | ✓ | ✓ | ✓ | Webview hoặc SDK |
| Liveness check / selfie | ✓ | ✓ | ✓ | Native camera trên app, webcam trên web |
| Quản lý tài khoản | ✓ | ✓ | ✓ | Xóa tài khoản, đổi email, appeal |
| 9 cấp độ thành viên | ✓ | ✓ | ✓ | Unified logic qua API |

### 2.2. Hồ sơ (Profile)

| Tính năng | Web | iOS | Android | Ghi chú |
|---|---|---|---|---|
| Tạo/sửa profile | ✓ | ✓ | ✓ | Form giống nhau |
| Upload ảnh (tối đa X ảnh) | ✓ | ✓ | ✓ | Native photo picker trên app |
| Upload video intro | ✓ | ✓ | ✓ | Native camera/recorder trên app |
| Conversation prompts | ✓ | ✓ | ✓ | Cùng bộ câu hỏi |
| Intent selection | ✓ | ✓ | ✓ | Cùng danh sách intent |
| Privacy settings | ✓ | ✓ | ✓ | Cùng option |
| "Verified photo" watermark | ✓ | ✓ | ✓ | Xuất hiện khi qua liveness |
| Anti-AI image/video check | ✓ | ✓ | ✓ | Rule engine server-side + client preview |

### 2.3. Matching & Tương tác

| Tính năng | Web | iOS | Android | Ghi chú |
|---|---|---|---|---|
| 5–12 gợi ý/ngày | ✓ | ✓ | ✓ | Không infinite swipe ở đâu |
| Intent-first filter | ✓ | ✓ | ✓ | Cùng thuật toán server-side |
| Gửi/nhận interest | ✓ | ✓ | ✓ | Push notification trên app |
| Mutual consent để chat | ✓ | ✓ | ✓ | Logic giống nhau |
| Block/report profile | ✓ | ✓ | ✓ | Modal giống nhau |
| "Không phù hợp" feedback | ✓ | ✓ | ✓ | Thu thập feedback matching |

### 2.4. Chat & Tin nhắn

| Tính năng | Web | iOS | Android | Ghi chú |
|---|---|---|---|---|
| Chat text | ✓ | ✓ | ✓ | Realtime WebSocket |
| Gửi ảnh trong chat | ✓ | ✓ | ✓ | Quét AI content trước gửi |
| Report message | ✓ | ✓ | ✓ | Long-press/app menu |
| Delete message (self) | ✓ | ✓ | ✓ | Xóa ở cả hai phía |
| Anti-scam warning overlay | ✓ | ✓ | ✓ | Xuất hiện khi phát hiện từ khóa rủi ro |
| Off-platform warning | ✓ | ✓ | ✓ | Cảnh báo nếu nhắc Telegram/WhatsApp sớm |
| Retention 90 ngày | ✓ | ✓ | ✓ | Server-side policy |

### 2.5. Safe Date

| Tính năng | Web | iOS | Android | Ghi chú |
|---|---|---|---|---|
| Lên kế hoạch gặp | ✓ | ✓ | ✓ | Form giống nhau |
| Danh sách địa điểm public | ✓ | ✓ | ✓ | API địa điểm duyệt |
| Check-in/check-out | ✓ | ✓ | ✓ | Native GPS trên app (mờ hóa), IP/web confirm trên web |
| Share date plan với contact | ✓ | ✓ | ✓ | SMS/notification/email |
| Panic shortcut | ✓ | ✓ | ✓ | Nút nổi / widget nhanh |
| After-date reflection | ✓ | ✓ | ✓ | Form ngắn |
| Report nhanh sau gặp | ✓ | ✓ | ✓ | Pre-filled form |

### 2.6. Quà, Điểm, Sao

| Tính năng | Web | iOS | Android | Ghi chú |
|---|---|---|---|---|
| Mua điểm | ✓ | ✓ | ✓ | Cổng thanh toán: Stripe/PayPal/Apple Pay/Google Pay |
| Xem bộ quà 99 món | ✓ | ✓ | ✓ | Catalog giống nhau |
| Gửi quà | ✓ | ✓ | ✓ | Animation gửi nhận giống nhau |
| Nhận quà | ✓ | ✓ | ✓ | Notification + inbox |
| Quy đổi quà/điểm | ✓ | ✓ | ✓ | Marketplace nội bộ |
| Lịch sử giao dịch | ✓ | ✓ | ✓ | Chi tiết giống nhau |
| Không cash-out | ✓ | ✓ | ✓ | Hard rule server-side |

### 2.7. An toàn & Báo cáo

| Tính năng | Web | iOS | Android | Ghi chú |
|---|---|---|---|---|
| Report profile/message/gift | ✓ | ✓ | ✓ | Cùng form và category |
| Block user | ✓ | ✓ | ✓ | Immediate trên cả 3 |
| Appeal account action | ✓ | ✓ | ✓ | Form + status tracking |
| Request data deletion | ✓ | ✓ | ✓ | Theo GDPR/CCPA/PDPVN |
| Safety checklist / quiz | ✓ | ✓ | ✓ | Cùng nội dung giáo dục |
| AI Safety Assistant | ✓ | ✓ | ✓ | Chat overlay hoặc sidebar |

### 2.8. Nội dung & CMS

| Tính năng | Web | iOS | Android | Ghi chú |
|---|---|---|---|---|
| Landing page / Blog | ✓ | ✓ | ✓ | Webview hoặc native render |
| Hướng dẫn an toàn | ✓ | ✓ | ✓ | CMS-driven |
| Điều khoản & chính sách | ✓ | ✓ | ✓ | In-app browser hoặc native |
| FAQ & Support | ✓ | ✓ | ✓ | Chatbot + ticket |

---

## 3. Trải nghiệm native cần tối ưu (không phải parity hoàn toàn)

### 3.1. iOS
- Apple Sign-In (bắt buộc theo App Store guideline).
- Apple Pay cho mua điểm.
- Push notification qua APNS.
- Face ID / Touch ID cho xác minh liveness.
- Widget nhỏ cho Safe Date check-in (nếu Apple hỗ trợ).
- Background check-in reminder (local notification).

### 3.2. Android
- Google Sign-In.
- Google Pay cho mua điểm.
- Push notification qua FCM.
- Biometric auth (fingerprint/face unlock).
- Deep link từ SMS/email vào app.
- Background location (mờ hóa) cho Safe Date check-in (tuỳ quyền user).

### 3.3. Web
- PWA install prompt.
- Service worker cho offline safety content.
- Web Push notification (nếu user cho phép).
- WebRTC cho liveness check (camera access).
- Responsive design: mobile-first, tablet, desktop.

---

## 4. Điều kiện kỹ thuật đồng nhất

### 4.1. API & Backend
- Tất cả client dùng chung REST/GraphQL API.
- WebSocket cho chat realtime.
- Server-side rendering (SSR) hoặc static generation cho web landing/SEO.
- API versioning để app cũ không bị break.

### 4.2. Design System
- Cùng design tokens: màu sắc, typography, spacing, iconography (Lucide hoặc tương đương).
- Cùng component library: shadcn/ui (web), SwiftUI (iOS), Jetpack Compose (Android).
- Cùng dark/light mode.
- Cùng ngôn ngữ song ngữ (i18n).

### 4.3. State Management
- Cùng nguồn truth: server state via API.
- Local state cho UI/UX native (ví dụ: animation, scroll position).
- Offline cache cho profile, settings, safety content.

### 4.4. Security
- TLS 1.3 cho mọi kết nối.
- Certificate pinning trên app.
- Anti-tamper cho app binary.
- Jailbreak/root detection (warning, không khóa tài khoản).
- Secure storage cho token: Keychain (iOS), Keystore (Android).

---

## 5. Release Checklist Parity

Trước mỗi release, đội sản phẩm phải xác nhận:

- [ ] Cùng cấp độ thành viên hoạt động trên cả 3 nền tảng.
- [ ] Cùng trạng thái xác minh hiển thị đúng.
- [ ] Cùng quyền chat, quyền quà tặng theo level.
- [ ] Cùng chính sách cấm AI image/video.
- [ ] Report/block hoạt động đồng nhất.
- [ ] Privacy settings đồng nhất.
- [ ] Điều khoản và chính sách hiển thị cùng phiên bản.
- [ ] Safety flow (Safe Date, panic shortcut) hoạt động.
- [ ] Dữ liệu tài khoản đồng bộ realtime giữa các phiên.
- [ ] Không có backdoor/bypass trên bất kỳ nền tảng nào.

---

## 6. Liên hệ

- Email kỹ thuật: dev@muonnoi.org
- Email sản phẩm: product@muonnoi.org
- Email hỗ trợ: support@muonnoi.org

---

**Kết Nối Muôn Nơi**  
Gặp người thật. Hiểu nhau thật. Tôn trọng ranh giới thật.  
Meet real people. Build real trust. Respect real boundaries.
