# AUTOMATION RULES SETUP
# Automation rules cho WPAS

> **Ngày:** 2026-06-13
> **Project:** Muôn Nơi
> **Scope:** Toàn bộ repo (monorepo)

---

## 1. AUTOMATION RULES

**Lint:**
- Check code style
- Check formatting
- Check best practices

**Typecheck:**
- Check TypeScript types
- Check type errors
- Check type safety

**Build:**
- Build static assets
- Build production bundle
- Verify build output

---

## 2. MONOREPO STRUCTURE

**Root:** Không có package.json
**Subprojects:**
- `ai.muonnoi.org/` — AI layer
- `app.muonnoi.org/` — Social core
- `ketnoi.muonnoi.org/` — Kết nối
- `hoctap.muonnoi.org/` — Học tập
- `dautu.muonnoi.org/` — Đầu tư
- `dulich.muonnoi.org/` — Du lịch
- `plays/` — Games
- `docs.muonnoi.org/` — Docs

**Main homepage:** `apps/web/public/` (static HTML)

---

## 3. AUTOMATION RULES FOR STATIC HOMEPAGE

**Lint:**
```bash
# Check HTML syntax
npx htmlhint apps/web/public/index.html

# Check CSS syntax
npx stylelint apps/web/public/assets/site.css

# Check JS syntax (nếu có)
npx eslint apps/web/public/assets/*.js
```

**Typecheck:**
```bash
# Không có TypeScript ở root
# Skip typecheck cho static HTML
```

**Build:**
```bash
# Static HTML không cần build
# Verify build output
ls -la apps/web/public
```

---

## 4. AUTOMATION RULES FOR SUBPROJECTS

**Mỗi subproject có package.json riêng:**
- `ai.muonnoi.org/package.json`
- `app.muonnoi.org/package.json`
- `ketnoi.muonnoi.org/package.json`
- `hoctap.muonnoi.org/package.json`
- `dautu.muonnoi.org/package.json`
- `dulich.muonnoi.org/package.json`
- `plays/package.json`
- `docs.muonnoi.org/package.json`

**Lint cho subproject:**
```bash
cd <subproject>
npm run lint
```

**Typecheck cho subproject:**
```bash
cd <subproject>
npm run typecheck
```

**Build cho subproject:**
```bash
cd <subproject>
npm run build
```

---

## 5. ROOT AUTOMATION SCRIPT

**Tạo `package.json` ở root:**
```json
{
  "name": "muonnoi-monorepo",
  "version": "1.0.0",
  "scripts": {
    "lint": "npm run lint:homepage && npm run lint:subprojects",
    "lint:homepage": "npx htmlhint apps/web/public/index.html && npx stylelint apps/web/public/assets/site.css",
    "lint:subprojects": "npm run lint --workspaces --if-present",
    "typecheck": "npm run typecheck:subprojects",
    "typecheck:subprojects": "npm run typecheck --workspaces --if-present",
    "build": "npm run build:homepage && npm run build:subprojects",
    "build:homepage": "echo 'Static HTML no build needed' && ls -la apps/web/public",
    "build:subprojects": "npm run build --workspaces --if-present",
    "test": "npm run test --workspaces --if-present"
  },
  "workspaces": [
    "ai.muonnoi.org",
    "app.muonnoi.org",
    "ketnoi.muonnoi.org",
    "hoctap.muonnoi.org",
    "dautu.muonnoi.org",
    "dulich.muonnoi.org",
    "plays",
    "docs.muonnoi.org"
  ]
}
```

---

## 6. INSTALL DEPENDENCIES

**Install root dependencies:**
```bash
npm install
```

**Install dev dependencies:**
```bash
npm install --save-dev htmlhint stylelint eslint
```

---

## 7. RUN AUTOMATION RULES

**Lint:**
```bash
npm run lint
```

**Typecheck:**
```bash
npm run typecheck
```

**Build:**
```bash
npm run build
```

---

## 8. EVIDENCE

**Automation rules evidence:**
- [ ] package.json created in root
- [ ] Dev dependencies installed
- [ ] Lint script exists
- [ ] Typecheck script exists
- [ ] Build script exists
- [ ] Lint runs successfully
- [ ] Typecheck runs successfully
- [ ] Build runs successfully

---

## 9. STATUS

**Automation rules:** ⏳ Cần tạo package.json ở root
**Lint:** ⏳ Cần setup
**Typecheck:** ⏳ Cần setup
**Build:** ⏳ Cần setup

---

**Automation rules setup pending.**
**Cần tạo package.json ở root.**
