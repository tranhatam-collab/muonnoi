#!/usr/bin/env bash
# verify-capacitor-archive-safe.sh
#
# Pre-flight check before archiving app.muonnoi.org/mobile-shell/ (Capacitor legacy).
# Verifies no active import depends on the Capacitor mobile-shell outside its own dir.
#
# Usage:
#   scripts/verify-capacitor-archive-safe.sh
#
# Exit codes:
#   0  = SAFE to archive (no external imports)
#   1  = UNSAFE — found references, see report
#   2  = environment issue (grep missing, repo root wrong)

set -uo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$REPO_ROOT"

REPORT_DIR="reports/audit/capacitor-archive-verify-$(date +%Y-%m-%d)"
mkdir -p "$REPORT_DIR"

REPORT="$REPORT_DIR/REPORT.md"

EXCLUDE_DIRS=(
  "--exclude-dir=node_modules"
  "--exclude-dir=.git"
  "--exclude-dir=mobile-shell"        # the target itself
  "--exclude-dir=_archive"
  "--exclude-dir=dist"
  "--exclude-dir=build"
  "--exclude-dir=.next"
  "--exclude-dir=.astro"
  "--exclude-dir=plays.muonnoi.org"   # 7000+ generated HTML, never references Capacitor
  "--exclude-dir=public"              # generated static output
)
# Only scan TS/JS/JSX/TSX and select config files — skip HTML/markdown
INCLUDE_GLOB=(
  "--include=*.ts"
  "--include=*.tsx"
  "--include=*.js"
  "--include=*.jsx"
  "--include=*.mjs"
  "--include=*.cjs"
  "--include=package.json"
  "--include=tsconfig.json"
  "--include=capacitor.config.*"
  "--include=vite.config.*"
  "--include=astro.config.*"
  "--include=next.config.*"
)

PATTERNS=(
  "from ['\"]\\@capacitor/"
  "require\\(['\"]\\@capacitor/"
  "import ['\"]\\@capacitor/"
  "from ['\"]\\@capacitor-community/"
  "mobile-shell/"
  "MobileShell"
  "capacitor\\.config"
)

# Files we expect MAY reference Capacitor legitimately (docs only)
ALLOWLIST_PATHS=(
  "docs/launch/MUONNOI_MOBILE_TEAM_HANDOFF_INDEX_2026-05-12.md"
  "docs/launch/RELEASE_CYCLE_HANDOFF_2026-05-17.md"
  "docs/launch/MUONNOI_FINAL_EXECUTION_PLAN_2026-05-19.md"
  "docs/launch/SOLO_TEAM_RUNBOOK_TO_100_2026-05-19.md"
  "lqos.muonnoi.org/MUONNOI_LQOS_UPGRADE_PROPOSAL_2026-06-05.md"
  "lqos.muonnoi.org/LQOS_SPRINT_CURRENT.md"
  "lqos.muonnoi.org/LQOS_AUTO_DEV_SCHEDULE_2026.md"
  "lqos.muonnoi.org/AUDIT_LQOS_2026-06-04.md"
  "lqos.muonnoi.org/MUONNOI_LQOS_TECH_SPEC_v2.md"
  "lqos.muonnoi.org/MUONNOI_LQOS_PRODUCT_PLAN_v2.md"
  "lqos.muonnoi.org/MUONNOI_LQOS_STRATEGY_v2.md"
  "reports/audit/AI_MUONNOI_MIGRATION_0007_RISK_FLAG_2026-06-05.md"
  "reports/audit/SPRINT_1_READINESS_AUDIT_2026-06-05.md"
  "reports/audit/CRON_RECOVERY_PROCEDURE_2026-06-05.md"
)

is_allowlisted() {
  local path="$1"
  for allowed in "${ALLOWLIST_PATHS[@]}"; do
    [ "$path" = "$allowed" ] && return 0
    [[ "$path" == "$allowed"* ]] && return 0
  done
  return 1
}

{
echo "# Capacitor Archive Safety Report"
echo ""
echo "**Generated:** $(date '+%Y-%m-%d %H:%M:%S %Z')"
echo "**Target to archive:** \`app.muonnoi.org/mobile-shell/\`"
echo "**Verification:** find any imports/references outside mobile-shell that would break after archive"
echo ""
echo "## Patterns scanned"
echo ""
for p in "${PATTERNS[@]}"; do
  echo "- \`$p\`"
done
echo ""
echo "## Findings"
echo ""
} > "$REPORT"

VIOLATIONS=0
ALLOWED=0

for pattern in "${PATTERNS[@]}"; do
  results=$(grep -rEln "${EXCLUDE_DIRS[@]}" "${INCLUDE_GLOB[@]}" "$pattern" . 2>/dev/null || true)
  if [ -z "$results" ]; then
    continue
  fi

  echo "" >> "$REPORT"
  echo "### Pattern: \`$pattern\`" >> "$REPORT"
  echo "" >> "$REPORT"

  while IFS= read -r file; do
    file_rel="${file#./}"
    if is_allowlisted "$file_rel"; then
      echo "- ✅ \`$file_rel\` (allowlisted — docs/spec, not runtime)" >> "$REPORT"
      ALLOWED=$((ALLOWED+1))
    else
      echo "- ⚠️ \`$file_rel\`" >> "$REPORT"
      VIOLATIONS=$((VIOLATIONS+1))
    fi
  done <<< "$results"
done

echo "" >> "$REPORT"
echo "## Summary" >> "$REPORT"
echo "" >> "$REPORT"
echo "- Violations (require fix before archive): **$VIOLATIONS**" >> "$REPORT"
echo "- Allowlisted references (docs only, safe): **$ALLOWED**" >> "$REPORT"
echo "" >> "$REPORT"

if [ "$VIOLATIONS" -eq 0 ]; then
  echo "## Verdict: ✅ SAFE TO ARCHIVE" >> "$REPORT"
  echo "" >> "$REPORT"
  echo "No active code outside \`app.muonnoi.org/mobile-shell/\` references Capacitor imports." >> "$REPORT"
  echo "Proceed with:" >> "$REPORT"
  echo "" >> "$REPORT"
  echo '```bash' >> "$REPORT"
  echo 'mkdir -p _archive' >> "$REPORT"
  echo 'git mv app.muonnoi.org/mobile-shell "_archive/mobile-shell-capacitor-legacy-$(date +%Y-%m-%d)"' >> "$REPORT"
  echo 'git commit -m "chore: archive Capacitor mobile-shell legacy (per R5 decision)"' >> "$REPORT"
  echo '```' >> "$REPORT"
  echo ""
  echo "✅ SAFE TO ARCHIVE — Report: $REPORT"
  exit 0
else
  echo "## Verdict: ❌ UNSAFE — Fix violations first" >> "$REPORT"
  echo "" >> "$REPORT"
  echo "Found $VIOLATIONS active code references to Capacitor or mobile-shell outside the target dir." >> "$REPORT"
  echo "Review each file above and migrate imports before archiving." >> "$REPORT"
  echo ""
  echo "❌ UNSAFE — $VIOLATIONS violations. Report: $REPORT"
  exit 1
fi
