# 🚨 RISK FLAG: ai.muonnoi.org migration 0007 schema change

> **Severity:** P0 — Breaking schema change for deployed table
> **Discovered:** 2026-06-05 by Claude agent during repo audit
> **Owner:** Backend team + Founder approval needed
> **Status:** ⚠️ UNCOMMITTED in submodule, BLOCKS C8 (repo clean)

---

## What Changed

In `ai.muonnoi.org/workers/api/migrations/0007_mobile_push_tokens.sql`, uncommitted modification:

**BEFORE (committed):**
```sql
CREATE TABLE IF NOT EXISTS mobile_push_tokens (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  token         TEXT NOT NULL UNIQUE,
  user_id       INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  platform      TEXT NOT NULL CHECK(platform IN ('ios', 'android')),
  source        TEXT NOT NULL DEFAULT 'capacitor',
  first_seen_at INTEGER NOT NULL,
  last_seen_at  INTEGER NOT NULL,
  updated_at    INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_mobile_push_tokens_user ...;
CREATE INDEX IF NOT EXISTS idx_mobile_push_tokens_last_seen ...;
```

**AFTER (uncommitted, in working tree):**
```sql
CREATE TABLE IF NOT EXISTS mobile_push_tokens (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  token TEXT NOT NULL UNIQUE,
  platform TEXT NOT NULL DEFAULT 'fcm',
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);
-- Indexes removed
```

## Why This Is Dangerous

1. **Breaking ID type change**: `INTEGER → TEXT` for `id` and `user_id`. If table has any data, existing rows have INTEGER values that may not be accepted as TEXT primary key in new schema.

2. **Foreign key dropped**: `REFERENCES users(id) ON DELETE CASCADE` removed. Now orphan rows can exist if user deleted.

3. **CHECK constraint dropped**: `platform IN ('ios', 'android')` → now any text allowed including typos.

4. **Indexes dropped**: Will cause performance regression on queries by user_id or last_seen.

5. **Field semantics changed**: 
   - `first_seen_at, last_seen_at` (INTEGER timestamps) → `created_at, updated_at` (TEXT)
   - This changes lookup logic in code that reads these fields.

6. **`CREATE TABLE IF NOT EXISTS` won't run migration on existing table**: If table already exists with old schema, this new migration is a NO-OP. The old schema persists in production while code expects new schema → runtime errors.

## Verify Current Production State

Need to run on production D1 to check current state:

```bash
cd ai.muonnoi.org/workers/api
npx wrangler d1 execute iai_flow_db --remote --command \
  "SELECT sql FROM sqlite_master WHERE name='mobile_push_tokens';"

# And count rows:
npx wrangler d1 execute iai_flow_db --remote --command \
  "SELECT COUNT(*) AS rows FROM mobile_push_tokens;"
```

## Recommended Actions

### If table has data (>0 rows):
- ❌ **DO NOT commit** the modified 0007 migration
- ✅ Write a proper migration `0009_mobile_push_tokens_id_textify.sql` that:
  - Creates a new table with new schema
  - Copies data from old table with conversion
  - Drops old table
  - Renames new table

### If table is empty (0 rows):
- ✅ Safe to commit but as a **NEW** migration `0009_mobile_push_tokens_v2.sql`:
  - DROP TABLE IF EXISTS mobile_push_tokens
  - Then the new CREATE
- ❌ DO NOT modify 0007 in place (history pollution)

### Either way:
- ❌ DO NOT commit the modified 0007 as-is — it's a history rewrite of a deployed migration

## Why Claude Won't Auto-Resolve

This is a database schema change with production data risk. Per master plan rule 7.3 (`Never commit submodule pointer changes unless user explicit`), and given the risk surface, Claude flags this for Founder + Backend team decision.

## Impact on Trackers

- **9-condition (Claude):** C8 FAIL until resolved (this is one of the 2 submodule dirty entries)
- **16-condition (Cascade):** Doesn't track submodule state explicitly, but proof endpoint (C10) depends on mobile_push_tokens being correctly deployed

---

**Next steps:**
1. Backend team confirms production table state (rows + schema)
2. Founder decides: drop+recreate vs migration vs rollback to old schema
3. Whatever decision, NEW migration file with proper history (don't modify 0007)
4. After fix: cron will pick up C8 PASS automatically

---

**Filed by:** Claude agent
**Date:** 2026-06-05 01:25 ICT
**Severity escalation:** P0 — discussed in next Founder sync
