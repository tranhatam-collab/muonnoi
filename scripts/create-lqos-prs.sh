#!/bin/bash
# Create PR branches for LQOS + Web fixes from audit-landingpage
# Run from repo root: ./scripts/create-lqos-prs.sh

set -e

echo "=== PR Branch Creator ==="
echo "Source: audit-landingpage (126 commits ahead of main)"
echo ""

# Detect which commits belong to which PR
# Strategy: use cherry-pick ranges based on commit messages

echo "Step 1: Fetch latest main"
git fetch origin main
git checkout main
git pull origin main

echo ""
echo "Step 2: Create PR-1 — LQOS Foundation (docs only)"
git checkout -b pr/lqos-foundation main

# Cherry-pick LQOS doc commits
# Batch 1: policies, ops, specs, decisions, quest template
git cherry-pick 001eb1c9 || echo "⚠️  001eb1c9 conflict, resolve manually"
# Batch 2: strategic v2 docs + Dalat pilot lock + tracker + ADR-002
git cherry-pick 570c8e5f || echo "⚠️  570c8e5f conflict, resolve manually"
# Batch 3: public claim policy (if separate commit)
# git cherry-pick <claim-policy-commit> || echo "⚠️  conflict"

git push -u origin pr/lqos-foundation
echo "✅ pr/lqos-foundation pushed"

echo ""
echo "Step 3: Create PR-2 — Web Fixes (plays, nguoiviet, cuocsong)"
git checkout -b pr/web-fixes main

# Cherry-pick web fix commits
# d1214422: fix tiếng Việt không dấu trong 7,446 HTML
git cherry-pick d1214422 || echo "⚠️  d1214422 conflict, resolve manually"
# 95c0ea5f: plays filter groups
git cherry-pick 95c0ea5f || echo "⚠️  95c0ea5f conflict, resolve manually"
# Add other web fix commits here...

git push -u origin pr/web-fixes
echo "✅ pr/web-fixes pushed"

echo ""
echo "Step 4: Create PR-3 — Quest Content (5 Dalat quests)"
git checkout -b pr/quest-content-dalat main

# Add quest content files (these are untracked/new, not cherry-pick)
git checkout audit-landingpage -- content/quests/dulich/dalat-2026-q3/
git checkout audit-landingpage -- sites/dulich/
git checkout audit-landingpage -- sites/hoctap/
git add content/quests/dulich/dalat-2026-q3/ sites/dulich/ sites/hoctap/
git commit -m "content(quests): 5 Dalat quests + dulich/hoctap Astro scaffolds

- 001-doi-thien-phuc-duc: sunrise hike
- 002-cho-sang-dalat: morning market
- 003-vuon-dau-tay: strawberry farm
- 004-dap-xe-ho-tuyen-lam: cycling
- 005-doi-che-cau-dat: tea hill meditation
- sites/dulich/: Astro placeholder page
- sites/hoctap/: Astro placeholder page"

git push -u origin pr/quest-content-dalat
echo "✅ pr/quest-content-dalat pushed"

echo ""
echo "=== PR Branches Created ==="
echo "pr/lqos-foundation    — LQOS docs, policies, specs, strategy"
echo "pr/web-fixes          — Plays filter, HTML fixes, web updates"
echo "pr/quest-content-dalat — 5 quest files + dulich/hoctap scaffolds"
echo ""
echo "Next: Create PRs on GitHub:"
echo "  https://github.com/tranhatam/muonnoi.org/compare/main...pr/lqos-foundation"
echo "  https://github.com/tranhatam/muonnoi.org/compare/main...pr/web-fixes"
echo "  https://github.com/tranhatam/muonnoi.org/compare/main...pr/quest-content-dalat"
