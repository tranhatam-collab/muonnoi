# MUÔN NƠI.ORG — FULL ECOSYSTEM PLAN
**Date**: 2026-06-13
**Method**: Evidence-based, command output verified
**Scope**: 9 components, full audit → fix → deploy → test → live

---

## Executive Summary

**Current Status**: 5/9 gates PASS (56%)
**Total Components**: 9
**Estimated Timeline**: 30-45 days (6-8 weeks)
**Priority Order**: Doctrine fix → Payment QA → Mobile → OAuth E2E → Final cleanup

---

## Component Status (Evidence-Based)

| # | Component | Status | Evidence | Priority | Timeline |
|---|-----------|--------|----------|----------|----------|
| 1 | dautu.muonnoi.org | ❌ DOCTRINE VIOLATION | curl 200, H1/CTA wrong | P0 | 5-7 days |
| 2 | ai-muonnoi-api | ✅ DEPLOYED | /api/health 200, payment endpoint returns paymentId | P1 | 2-3 days |
| 3 | Payment QA | ⚠️ IN_PROGRESS | Evidence file exists, QA_IN_PROGRESS | P0 | 3-5 days |
| 4 | Mobile iOS | ❌ BLOCKED | DEVELOPMENT_TEAM empty | P2 | 5-7 days |
| 5 | Mobile Android | ❌ BLOCKED | ANDROID_HOME empty | P2 | 5-7 days |
| 6 | OAuth E2E | ❌ BLOCKED | qa/oauth-evidence/ not exist | P1 | 2-3 days |
| 7 | Repo Hygiene | ⚠️ DIRTY | 2 submodule dirty, untracked files | P1 | 1-2 days |
| 8 | Infrastructure Core | ✅ PASS | Auth, Email, DNS ready | P2 | 0 days |
| 9 | Other subdomains | ✅ PASS | Routes 200 verified | P3 | 0 days |

---

## Phase-by-Phase Execution Plan

### Phase 1: Doctrine Fix (P0) — 5-7 days
**Objective**: Fix dautu.muonnoi.org doctrine compliance

**Tasks**:
1. ✅ Create content source JSON files (vi.json, en.json) — DONE
2. Update homepage H1 → "Đầu tư ở đây là hành trình học, làm, trưởng thành và cùng phát triển"
3. Update hero CTA → "Tìm hiểu triết lý đầu tư", "Xem hành trình tham gia"
4. Update nav → "Đầu Tư Trí Tuệ · Muôn Nơi"
5. Update 7 public routes content per doctrine:
   - /du-an/ — Project catalog (not sales catalog)
   - /hinh-thuc-dong-hanh/ — Participation levels
   - /quy-trinh-review/ — Review process
   - /governance/ — Governance & legal posture
   - /faq/ — Common questions
   - /dang-ky-quan-tam/ — Interest form (not payment)
   - /legal/ — Legal disclaimers
6. Update SEO metadata bilingual (title, meta, OG, hreflang)
7. QA doctrine compliance (grep forbidden words)
8. Deploy to staging
9. Test staging
10. Deploy to production
11. Live verification

**Evidence Required**:
- curl output for all routes
- grep output for forbidden words
- Screenshot of homepage
- Deploy log

**Blockers**: None

**Owner**: Dev + Content Lead

---

### Phase 2: Payment QA Completion (P0) — 3-5 days
**Objective**: Complete 10 payment/email scenarios with real provider

**Current Status**: Evidence file exists, QA_IN_PROGRESS, missing worker secrets

**Tasks**:
1. Set worker secrets:
   ```bash
   wrangler secret put PAY_IAI_ONE_API_KEY --name ai-muonnoi-api
   wrangler secret put MAIL_API_KEY --name ai-muonnoi-api
   wrangler secret put PAYMENT_WEBHOOK_SECRET --name ai-muonnoi-api
   ```
2. Re-run QA tests 3, 6, 8, 9 with secrets configured
3. Fix CORS handler (Finding #1 from evidence)
4. Verify rate limiting
5. Run rollback drill
6. Update evidence file with all checks marked PASS

**Evidence Required**:
- Command output for all 10 scenarios
- Screenshot of real provider transaction
- Email delivery log
- Rollback evidence

**Blockers**: Worker secrets not set

**Owner**: API Team + QA

---

### Phase 3: OAuth E2E (P1) — 2-3 days
**Objective**: Run 5 sites × 9 step OAuth E2E

**Current Status**: Code deployed, no test evidence

**Tasks**:
1. Create qa/oauth-evidence/2026-06-13/ directory
2. Run OAuth E2E for 5 sites:
   - tramsaigon.com
   - nhachung.org
   - auth.omdala.com
   - lamviec.muonnoi.org
   - dautu.muonnoi.org
3. Screenshot each step (9 steps × 5 sites = 45 screenshots)
4. Log evidence file

**Evidence Required**:
- 45 screenshots
- OAuth E2E evidence file
- Session cookie verification

**Blockers**: None

**Owner**: QA + Dev

---

### Phase 4: Repo Hygiene Cleanup (P1) — 1-2 days
**Objective**: Clean repo before final release

**Current Status**: 2 submodule dirty, untracked files

**Tasks**:
1. Handle 2 submodule modifications (ai.muonnoi.org, app.muonnoi.org)
2. Commit or stash untracked files in dautu.muonnoi.org
3. Verify git status clean
4. Update .gitignore if needed

**Evidence Required**:
- git status --short output (empty)
- git log for cleanup commit

**Blockers**: None

**Owner**: Platform + Dev

---

### Phase 5: Mobile iOS (P2) — 5-7 days
**Objective**: Submit TestFlight

**Current Status**: 70% complete, DEVELOPMENT_TEAM empty

**Tasks**:
1. Get Apple Developer Team ID from Founder
2. Configure DEVELOPMENT_TEAM in Xcode project
3. Build archive
4. Submit to TestFlight
5. Log evidence

**Evidence Required**:
- Apple Team ID
- Xcode project.pbxproj with DEVELOPMENT_TEAM set
- Archive build log
- TestFlight submission confirmation

**Blockers**: Apple Developer Team ID not provided

**Owner**: Mobile Dev

---

### Phase 6: Mobile Android (P2) — 5-7 days
**Objective**: Build and submit AAB to Play Console

**Current Status**: 0% complete, SDK not installed

**Tasks**:
1. Install Android SDK
2. Set ANDROID_HOME
3. Create release keystore
4. Build AAB
5. Submit to Play Console
6. Log evidence

**Evidence Required**:
- ANDROID_HOME output
- adb in PATH
- Keystore creation log
- AAB build log
- Play Console submission confirmation

**Blockers**: Android SDK not installed

**Owner**: Mobile Dev

---

### Phase 7: Final Verification & Documentation (P3) — 2-3 days
**Objective**: Final QA, documentation, release

**Tasks**:
1. Final QA across all components
2. Update documentation
3. Create release notes
4. Founder final approval
5. Public announcement (if applicable)

**Evidence Required**:
- Final QA report
- Updated documentation
- Founder approval
- Release notes

**Blockers**: None

**Owner**: All teams

---

## Timeline Summary

| Phase | Duration | Dependencies | Start | End |
|-------|----------|--------------|-------|-----|
| Phase 1: Doctrine Fix | 5-7 days | None | Day 1 | Day 7 |
| Phase 2: Payment QA | 3-5 days | None (parallel) | Day 1 | Day 5 |
| Phase 3: OAuth E2E | 2-3 days | None (parallel) | Day 1 | Day 3 |
| Phase 4: Repo Cleanup | 1-2 days | Phase 1 | Day 7 | Day 9 |
| Phase 5: Mobile iOS | 5-7 days | Founder approval | Day 9 | Day 16 |
| Phase 6: Mobile Android | 5-7 days | Phase 5 | Day 16 | Day 23 |
| Phase 7: Final Verification | 2-3 days | All phases | Day 23 | Day 26 |

**Total Timeline**: 26 days (optimal) to 30 days (with buffer)

---

## Critical Path

1. **Phase 1 (Doctrine Fix)** — MUST COMPLETE FIRST
   - Blocks: Production deployment of dautu.muonnoi.org
   - Risk: Doctrine violation → legal risk

2. **Phase 2 (Payment QA)** — HIGH PRIORITY
   - Blocks: Payment system production launch
   - Risk: No QA evidence → production risk

3. **Phase 3 (OAuth E2E)** — HIGH PRIORITY
   - Blocks: OAuth production claim
   - Risk: No test evidence → authentication risk

4. **Phase 4 (Repo Cleanup)** — MEDIUM PRIORITY
   - Blocks: Clean release
   - Risk: Dirty repo → traceability risk

5. **Phase 5-6 (Mobile)** — LOW PRIORITY
   - Blocks: Mobile app launch
   - Risk: Delayed mobile launch

---

## Risk Assessment

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Doctrine fix takes longer | Medium | High | Founder approval upfront, clear handoff package |
| Payment QA fails | Low | High | Test mode first, staging verification |
| OAuth E2E fails | Low | Medium | Manual fallback, evidence logging |
| Mobile SDK issues | Medium | Medium | Use runbook, cross-platform fallback |
| Repo conflicts | Low | Low | Stash strategy, .gitignore update |

---

## Resource Requirements

### Dev Team
- 1 Dev for doctrine fix (Phase 1)
- 1 API Dev for payment QA (Phase 2)
- 1 QA for OAuth E2E (Phase 3)
- 1 Platform Dev for repo cleanup (Phase 4)
- 1 Mobile Dev for iOS + Android (Phase 5-6)

### Founder
- Approval for doctrine fix (Phase 1)
- Apple Developer Team ID (Phase 5)
- Entity mapping clarification (ongoing)

### QA Team
- QA for doctrine compliance (Phase 1)
- QA for payment scenarios (Phase 2)
- QA for OAuth E2E (Phase 3)
- Final QA (Phase 7)

---

## Success Criteria

### Phase 1 Success
- [ ] Homepage H1 matches doctrine
- [ ] Hero has 2 CTA max
- [ ] 7 questions answered
- [ ] No forbidden words
- [ ] CTA correct
- [ ] Tone consistent
- [ ] All routes 200
- [ ] SEO metadata bilingual
- [ ] Deployed to production
- [ ] Founder approval

### Phase 2 Success
- [ ] 10 payment/email scenarios PASS
- [ ] Worker secrets set
- [ ] CORS issue fixed
- [ ] Real provider transaction tested
- [ ] Email delivery verified
- [ ] Evidence file updated

### Phase 3 Success
- [ ] 5 sites × 9 steps tested
- [ ] 45 screenshots captured
- [ ] OAuth E2E evidence file created
- [ ] Session cookies verified

### Phase 4 Success
- [ ] git status clean
- [ ] Submodules handled
- [ ] Untracked files committed/stashed
- [ ] .gitignore updated

### Phase 5 Success
- [ ] Apple Team ID obtained
- [ ] DEVELOPMENT_TEAM configured
- [ ] Archive built
- [ ] TestFlight submitted

### Phase 6 Success
- [ ] Android SDK installed
- [ ] Keystore created
- [ ] AAB built
- [ ] Play Console submitted

### Phase 7 Success
- [ ] Final QA PASS
- [ ] Documentation updated
- [ ] Founder final approval
- [ ] Release notes created

---

## Next Immediate Actions

1. **Founder**: Approve doctrine fix plan
2. **Dev**: Start Phase 1 (Doctrine Fix)
3. **API Team**: Set worker secrets for Phase 2
4. **QA**: Prepare OAuth E2E for Phase 3
5. **Platform**: Plan repo cleanup for Phase 4

---

**Status**: READY FOR EXECUTION
**Approval Required**: Founder
**Estimated Start**: 2026-06-14
**Estimated Completion**: 2026-07-10

---

**Signed**: AI Assistant (Devin)
**Date**: 2026-06-13
**Distribution**: Founder, Dev Lead, QA Lead, Platform Lead
