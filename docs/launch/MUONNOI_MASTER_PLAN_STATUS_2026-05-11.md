# MUONNOI · MASTER PLAN STATUS · 2026-05-11

## 1. Executive status
Muôn Nơi hiện có 4 lớp đang hình thành rõ:
- public shell
- social/app layer
- trust layer
- life quest layer

Mobile plan đã được thêm vào như execution layer, không thay đổi định nghĩa lõi.

## 2. Đã khóa
### Public shell
- homepage direction
- ecosystem page direction
- roadmap page direction
- security page direction
- guide page direction
- verify page direction

### Life Quest OS
- 7 systems defined
- purposeful play
- proof-based economy
- flagship pilot direction

### Mobile
- iOS + Android plan
- 30/90/180 roadmap
- release gates
- team ownership
- KPI value-first
- read order
- ownership decision matrix
- information architecture
- screen/state map
- API schema examples
- offline/sync strategy
- notification/event taxonomy
- mobile design system lock
- privacy/permissions matrix
- store submission requirements
- release runbook
- incident response playbook
- mobile scaffold

## 3. Đang làm
- chuẩn hóa content public shell
- chuẩn hóa handoff docs
- proof layer / trust layer page continuity
- mobile execution pack
- DNS/subdomain execution lock and evidence refresh

## 4. Chưa khóa hoàn toàn
- feed/index page final production copy
- complaints page final
- admin public page final
- status public page final
- live API implementation behind mobile contracts
- real store assets and signed builds
- full DNS evidence matrix for all announced subdomains

## 5. Dependencies
### To ship mobile alpha
Need:
- stable auth/session
- feed read shell
- quest hub data
- proof draft local queue
- privacy/safety/support URLs live

### To ship beta
Need:
- push notification baseline
- proof upload retry
- profile/trust shell
- device QA baseline

### To ship public mobile RC
Need:
- store assets
- policies published
- release gates pass
- crash and offline metrics acceptable

## 6. Top open decisions
1. Final mobile stack confirmation (recommended: React Native + Expo + TS)
2. Auth mechanism final shape for mobile
3. Proof upload media constraints
4. Feature flags per quest vertical
5. Store launch scope by geography

## 7. Red lines
- no tracker-based growth hacks
- no token-first economy
- no addictive feed design
- no module explosion before core stability

## 8. Status summary by lane
### Product
Green with clarifications needed
### Public shell
Yellow-green
### Mobile
Green for Sprint 0/Sprint 1 planning, Yellow for implementation
### API
Yellow, contracts defined but implementation pending
### QA / Release
Yellow, gates/runbook defined but execution evidence pending

## 10. DNS and public-link continuity
Status file:
- `docs/launch/MUONNOI_DNS_AND_SUBDOMAIN_EXECUTION_STATUS_2026-05-11.md`

Latest action:
- public shell links that pointed to not-yet-verified subdomains were redirected to safe internal routes (`/ecosystem/`, `/roadmap/`) to avoid dead-end user paths.

## 9. Mobile Sprint 0 / Sprint 1 execution pack

Status: STRUCTURED_EXECUTION_READY

Team files:
- `docs/launch/TEAM_READ_ORDER_2026-05-11.md`
- `docs/launch/TEAM_OWNERSHIP_AND_DECISION_MATRIX_2026-05-11.md`
- `apps/mobile/README.md`
- `apps/mobile/MUONNOI_MOBILE_INFORMATION_ARCHITECTURE_2026-05-11.md`
- `apps/mobile/MUONNOI_MOBILE_SCREEN_FLOW_AND_STATE_MAP_2026-05-11.md`
- `apps/mobile/MUONNOI_NOTIFICATION_AND_EVENT_TAXONOMY_2026-05-11.md`
- `apps/mobile/MUONNOI_MOBILE_DESIGN_SYSTEM_LOCK_2026-05-11.md`
- `api/contracts/MUONNOI_MOBILE_API_SCHEMA_AND_EXAMPLES_2026-05-11.md`
- `api/contracts/MUONNOI_SYNC_OFFLINE_CACHE_STRATEGY_2026-05-11.md`
- `docs/launch/MUONNOI_PRIVACY_CONSENT_AND_PERMISSIONS_MATRIX_2026-05-11.md`
- `docs/launch/MUONNOI_STORE_SUBMISSION_REQUIREMENTS_2026-05-11.md`
- `qa/release-gates/MUONNOI_RELEASE_RUNBOOK_2026-05-11.md`
- `qa/release-gates/MUONNOI_INCIDENT_RESPONSE_PLAYBOOK_2026-05-11.md`

Scaffold:
- `apps/mobile/app`
- `apps/mobile/src/navigation`
- `apps/mobile/src/screens`
- `apps/mobile/src/features`
- `apps/mobile/src/components`
- `apps/mobile/src/lib`
- `apps/mobile/src/theme`
- `apps/mobile/src/contracts`
