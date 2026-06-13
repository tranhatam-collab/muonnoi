# DEPLOY PROJECT CONFIGURATION
**Date**: 2026-06-13
**Status**: CRITICAL FIX APPLIED

---

## ⚠️ PROJECT CONFIGURATION — DO NOT DEPLOY TO WRONG PROJECT

### ✅ CORRECT PROJECT (FOR WWW.MUONNOI.ORG)
- **Project name**: `muonnoi`
- **Domain**: www.muonnoi.org
- **Deploy command**: `npx wrangler pages deploy apps/web/public --project-name=muonnoi`
- **Preview URL**: https://*.muonnoi.pages.dev

### ❌ WRONG PROJECT (ORPHANED, NO DOMAIN)
- **Project name**: `muonnoi-org`
- **Domain**: NONE (mồ côi)
- **Status**: DO NOT USE
- **Reason**: Deploy nhầm vào project này sẽ không hiển thị trên www.muonnoi.org

---

## 🔧 DEPLOY INSTRUCTION

```bash
cd apps/web/public
npx wrangler pages deploy . --project-name=muonnoi --commit-dirty=true
```

**NEVER use `--project-name=muonnoi-org`**

---

## 📊 VERIFICATION

After deploy, verify on **www.muonnoi.org** (NOT pages.dev):

```bash
curl -s https://www.muonnoi.org/ecosystem/ | grep -c "mn-chip--live"  # Should be 7
curl -s https://www.muonnoi.org/investment/ | grep -c "mn-chip--live"  # Should be 3
curl -s https://www.muonnoi.org/ | grep -c "Tự do tuyệt đối từ bên trong"  # Should be 1
```

---

## 🚨 HISTORY

**2026-06-13**: Founder audit revealed team deployed to wrong project `muonnoi-org` instead of `muonnoi`. Fixed by deploying to correct project. All badges and tagline now live on www.muonnoi.org.
