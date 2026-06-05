#!/bin/bash
# Verify Capacitor mobile-shell can be archived safely
# Run from repo root: ./scripts/archive-capacitor-verify.sh

echo "=== Capacitor Archive Verification ==="
echo ""

TARGET="app.muonnoi.org/mobile-shell"
ARCHIVE="_archive/capacitor-mobile-shell-$(date +%Y%m%d)"

# 1. Check directory exists
if [ ! -d "$TARGET" ]; then
    echo "❌ Directory $TARGET not found"
    exit 1
fi
echo "✅ Directory exists: $TARGET"

# 2. List key files to verify completeness
echo ""
echo "--- Key Files ---"
for f in \
    "$TARGET/capacitor.config.ts" \
    "$TARGET/package.json" \
    "$TARGET/android/app/src/main/AndroidManifest.xml" \
    "$TARGET/ios/App/App/AppDelegate.swift"; do
    if [ -f "$f" ]; then
        echo "  ✅ $(basename $f)"
    else
        echo "  ⚠️  $(basename $f) — not found (optional)"
    fi
done

# 3. Check for active references outside mobile-shell
echo ""
echo "--- Checking for external references to Capacitor ---"
EXTERNAL_REFS=$(grep -r "capacitor" \
    --include="*.ts" --include="*.js" --include="*.json" --include="*.md" \
    --exclude-dir="$TARGET" --exclude-dir="node_modules" --exclude-dir=".git" . 2>/dev/null | head -20)

if [ -z "$EXTERNAL_REFS" ]; then
    echo "  ✅ No external Capacitor references found"
else
    echo "  ⚠️  Found external references:"
    echo "$EXTERNAL_REFS" | sed 's/^/    /'
    echo ""
    echo "  Review these before archiving. If they are just docs mentioning Capacitor, safe to proceed."
fi

# 4. Check if mobile-shell is in .gitmodules
echo ""
echo "--- Git Submodule Check ---"
if grep -q "$TARGET" .gitmodules 2>/dev/null; then
    echo "  ⚠️  $TARGET is in .gitmodules"
    echo "     After archive, remove from .gitmodules and run: git rm --cached $TARGET"
else
    echo "  ✅ Not a submodule (or already removed from .gitmodules)"
fi

# 5. Check last commit date
echo ""
echo "--- Last Commit Info ---"
git log -1 --format="%h %ad %s" --date=short -- "$TARGET" 2>/dev/null || echo "  ⚠️  No git history for $TARGET"

# 6. Summary
echo ""
echo "=== VERIFICATION SUMMARY ==="
echo "Target: $TARGET"
echo "Archive destination: $ARCHIVE/"
echo ""
echo "To archive, run:"
echo "  mkdir -p _archive"
echo "  git mv $TARGET $ARCHIVE/"
echo "  # If submodule: git rm --cached $TARGET && rm -rf .git/modules/$TARGET"
echo "  # Remove from .gitmodules if present"
echo "  git commit -m 'archive(capacitor): move mobile-shell to _archive'"
echo ""
echo "After archive, verify:"
echo "  grep -r 'mobile-shell' . --exclude-dir=_archive --exclude-dir=.git --exclude-dir=node_modules"
echo "  # Should return no results except docs mentioning it historically"
