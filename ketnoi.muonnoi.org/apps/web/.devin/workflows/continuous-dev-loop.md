---
description: Continuous Dev Loop cho ketnoi.muonnoi.org
---

# Continuous Dev Loop — Kết Nối Muôn Nơi

**Mục tiêu:** Dev → Audit → QA → Deploy liên tục, tự động, không ngừng.

## Thứ tự ưu tiên

1. **DEV:** Viết code → commit
2. **AUDIT:** Chạy audit tự động → fix
3. **QA:** Unit test + e2e test → fix
4. **BUILD:** Build production → verify
5. **LOOP:** Quay lại DEV

## Các lệnh chính

```bash
# Chạy dev server
npm run dev

# Chạy dev loop đầy đủ (lint + typecheck + audit + build)
npm run loop:dev

# Chạy audit riêng
npm run audit              # Full audit
npm run audit:security     # Security only
npm run audit:i18n         # i18n only
npm run audit:a11y         # Accessibility only

# Chạy test
npm run test:unit          # Vitest
npm run test:unit:watch    # Vitest watch mode
npm run test:e2e           # Playwright
npm run test:e2e:ui        # Playwright UI mode

# QA đầy đủ
npm run qa                 # lint + typecheck + test + audit

# Health check
npm run health-check       # Kiểm tra file + config

# Pre-commit
npm run precommit          # Chạy trước mỗi commit
```

## Luồng liên tục

```
DEV (viết code)
   ↓
COMMIT → precommit hook chạy (lint + typecheck + audit:security)
   ↓
Nếu PASS → push
   ↓
CI/CD chạy (qa đầy đủ + build)
   ↓
Nếu PASS → deploy staging
   ↓
Manual QA trên staging
   ↓
Deploy production
   ↓
Monitor + audit định kỳ
   ↓
Quay lại DEV
```

## Audit Reports

Mọi audit đều lưu report vào `reports/`:

- `audit-report.json` — Full audit
- `security-audit.json` — Security
- `i18n-audit.json` — i18n
- `a11y-audit.json` — Accessibility

## Definition of Done (mỗi iteration)

- [ ] Lint pass
- [ ] Typecheck pass
- [ ] Unit test pass (coverage >70%)
- [ ] Security audit pass (không có hardcoded secrets)
- [ ] i18n audit không có hardcoded strings mới
- [ ] a11y audit không có lỗi nghiêm trọng
- [ ] Build pass
- [ ] e2e test pass (landing + auth flow)
