# Cron Recovery Procedure — muonnoi-release-100-verifier

> **Cron ID:** `3d04bc7d`
> **Schedule:** `17,47 * * * *` (twice per hour at :17, :47)
> **Storage:** Session-only (dies when Claude session ends)
> **Why session-only:** `mcp__scheduled-tasks__create_scheduled_task` requires interactive approval which isn't available in unsupervised mode.

---

## Symptoms cron died

- No commits to `reports/RELEASE_STATUS_2026-05-19.md` for > 60 min
- No "tick HH:MM — N/9 PASS" output in Founder chat
- `CronList` returns empty or doesn't include `3d04bc7d`

---

## Recovery — Fastest Path (1 minute)

In a Claude session (interactive or scheduled), paste the verifier prompt directly. The full prompt is:

```
[muonnoi-release-100-verifier — cron tick v2]

You are the Muôn Nơi release verifier. Run live verification of 9 conditions for 100/100 release readiness...
[full prompt below]
```

The full prompt is preserved as `docs/launch/MUONNOI_FINAL_EXECUTION_PLAN_2026-05-19.md` Section 7.

OR ask Claude to recreate:

```
"Recreate cron muonnoi-release-100-verifier with schedule 17,47 * * * *"
```

Claude will use `CronCreate` to re-arm the session-only cron.

---

## Recovery — Durable (5 minutes, needs interactive)

If you're in interactive Claude Code session:

```
/schedule create muonnoi-release-100-verifier-durable
```

Or ask Claude to call `mcp__scheduled-tasks__create_scheduled_task` and approve the dialog.

This survives session restarts.

---

## Manual Verification (if no cron)

Run the verification script manually anytime:

```bash
cd /Users/tranhatam/Documents/Devnewproject/muonnoi.org

RAND=$(date +%s)

echo "C1 Registration:"
curl -s -X POST https://api.muonnoi.org/api/register \
  -H "Content-Type: application/json" \
  -d "{\"email\":\"verify-${RAND}@muonnoi.org\",\"name\":\"Verifier\",\"password\":\"VerifyPass123!\"}" | head -c 100

echo ""
echo "C2 Payment QA:"
grep -hE "NOT_YET_EXECUTED|PAYMENT_EMAIL_REAL_OPERATION_PASS|BLOCKED_BY" \
  qa/release-gates/MUONNOI_PAYMENT_EMAIL_TEST_EVIDENCE_2026-05-12.md \
  qa/release-gates/MUONNOI_PAYMENT_EMAIL_PRODUCTION_GATE_CHECKLIST_2026-05-12.md 2>/dev/null | head -3

echo "C3 iOS DEVELOPMENT_TEAM: $(grep -c "DEVELOPMENT_TEAM = " app.muonnoi.org/mobile-shell/ios/App/App.xcodeproj/project.pbxproj 2>/dev/null || echo 0)"
echo "C4 Android: ANDROID_HOME=${ANDROID_HOME:-EMPTY} adb=$(which adb 2>/dev/null || echo MISSING)"
echo "C5 OAuth E2E: $([ -f qa/oauth-evidence/2026-05-19/SUMMARY.md ] && echo EXISTS || echo MISSING)"
echo "C6 DNS matrix: $(grep -c "LIVE_LINK_ALLOWED" docs/launch/MUONNOI_SUBDOMAIN_DNS_CUSTOM_DOMAIN_MATRIX_2026-05-12.md)"
echo "C7 Cuộc Sống: $(grep -hE "READY_FOR_PUBLIC_LINK|IMPLEMENTATION_IN_PROGRESS_BLOCKED" docs/launch/CUOCSONG_MUONNOI_QA_AND_RELEASE_CHECKLIST_2026-05-13.md | head -1)"
echo "C8 Repo dirty: $(git status --short | wc -l | tr -d ' ')"
echo "C9 Reports: superseded=$(grep -l "STATUS_SUPERSEDED_BY" COMPLETION_REPORT_2026-05-18.md INFRASTRUCTURE_READY_2026-05-18.md SESSION_SUMMARY_2026-05-17.md 2>/dev/null | wc -l | tr -d ' ')"
```

---

## What Cron Does (Reference)

Each tick:
1. Runs 9 verify commands above
2. Scores N = number of PASS
3. Updates `reports/RELEASE_STATUS_2026-05-19.md`:
   - Replace `TRUE COMPLETION: XX%` with new percentage
   - Append tick line to `## Verification Ticks` section
   - Prepend `## REGRESSION ALERT` if PASS→FAIL detected
4. Commits + pushes if file changed
5. When N=9: appends RELEASE GO to `app.muonnoi.org/RELEASE_CHECKLIST.md`, stops cron

---

## What Cron Will NEVER Do

- Modify business logic code
- Touch immutable spec `DEV_TEAM_100_PERCENT_PLAN_2026-05-19.md`
- Force push, reset hard
- Commit submodule pointer changes
- Spawn sub-agents
- Touch other crons (`nhachung-dev-autonomous`, `t3-m4-*`, `email-domain-provisioning`)

---

**Generated:** 2026-06-05 by Claude agent
**File mục đích:** Recovery khi session-only cron die.
