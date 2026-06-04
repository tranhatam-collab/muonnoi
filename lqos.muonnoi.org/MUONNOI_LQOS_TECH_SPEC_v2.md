# MUONNOI LQOS TECH SPEC v2
> **Date:** 2026-06-05
> **Status:** LOCKED — DO NOT ALTER WITHOUT FOUNDER APPROVAL
> **Locked By:** Founder, 2026-06-05
> **Audience:** Dev, DevOps, Security
> **Supersedes:** All prior LQOS tech documents

---

## 1. ARCHITECTURE OVERVIEW

```
┌─────────────────────────────────────────┐
│  CLIENT                                  │
│  ├─ Web (Astro / Vite+React)            │
│  ├─ Mobile (React Native + Expo)          │
│  └─ PWA (fallback)                       │
└────────────┬────────────────────────────┘
             │ HTTPS / JSON API
┌────────────▼────────────────────────────┐
│  API LAYER (Cloudflare Workers)          │
│  ├─ /api/auth/*     — Auth (OAuth, magic)│
│  ├─ /api/proofs     — Proof upload       │
│  ├─ /api/receipts/* — Receipt CRUD     │
│  ├─ /api/quests/*   — Quest listing     │
│  ├─ /api/hosts/*    — Host onboarding   │
│  └─ /api/admin/*    — Quest CMS         │
└────────────┬────────────────────────────┘
             │
┌────────────▼────────────────────────────┐
│  DATA LAYER                              │
│  ├─ Cloudflare D1     — Metadata, auth   │
│  ├─ Cloudflare R2     — Media, docs     │
│  └─ Cloudflare KV     — Sessions, cache │
└─────────────────────────────────────────┘

EXTERNAL:
  ├─ verify.iai.one  — KYC Tier 2 verification
  ├─ mail.iai.one    — Email delivery
  ├─ pay.iai.one     — Payment (future)
  └─ Google OAuth    — Social login
```

---

## 2. DATABASE SCHEMA (D1)

### 2.1 Users

```sql
CREATE TABLE users (
  id              TEXT PRIMARY KEY,           -- UUID v4
  email           TEXT NOT NULL UNIQUE,
  phone           TEXT,                       -- E.164 format
  name            TEXT NOT NULL,
  username        TEXT UNIQUE,                -- 3-24 chars, a-z0-9_
  avatar_url      TEXT,
  bio             TEXT,
  role            TEXT DEFAULT 'member',       -- member, host, admin
  kyc_tier        INTEGER DEFAULT 1,          -- 1, 2, 2.5, 3
  kyc_verified_at TEXT,                       -- ISO 8601
  is_verified     INTEGER DEFAULT 0,           -- email verified
  created_at      DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at      DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_kyc_tier ON users(kyc_tier);
```

### 2.2 Hosts

```sql
CREATE TABLE hosts (
  id              TEXT PRIMARY KEY,
  user_id         TEXT NOT NULL REFERENCES users(id),
  city            TEXT NOT NULL,               -- "Đà Lạt"
  bio             TEXT,                        -- Host bio
  languages       TEXT,                        -- JSON ["vi", "en"]
  status          TEXT DEFAULT 'pending',      -- pending, active, suspended, deactivated
  trained_at      TEXT,                        -- ISO 8601
  interview_passed INTEGER DEFAULT 0,
  references_passed INTEGER DEFAULT 0,
  agreement_signed INTEGER DEFAULT 0,
  created_at      DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_hosts_user ON hosts(user_id);
CREATE INDEX idx_hosts_status ON hosts(status);
```

### 2.3 Quests

```sql
CREATE TABLE quests (
  id              TEXT PRIMARY KEY,
  slug            TEXT NOT NULL UNIQUE,
  system          TEXT NOT NULL,               -- dulich, hoctap, family
  city            TEXT NOT NULL,
  title_vi        TEXT NOT NULL,
  title_en        TEXT NOT NULL,
  subtitle_vi     TEXT NOT NULL,
  subtitle_en     TEXT NOT NULL,
  intent          TEXT NOT NULL,
  who_fits        TEXT,                        -- JSON array
  who_not_fit     TEXT,                        -- JSON array
  duration_min    INTEGER NOT NULL,
  difficulty      TEXT NOT NULL,               -- easy, medium, hard
  min_age         INTEGER DEFAULT 13,
  max_people      INTEGER NOT NULL,
  price_vnd       INTEGER DEFAULT 0,
  price_note      TEXT,
  best_time       TEXT,
  safety_level    TEXT,                        -- low, medium, high
  safety_notes    TEXT,
  required_gear   TEXT,                        -- JSON array
  proof_types     TEXT NOT NULL,               -- JSON ["photo","text","gps"]
  proof_description TEXT NOT NULL,
  proof_example   TEXT,
  proof_invalid_example TEXT,
  gps_required    INTEGER DEFAULT 0,
  gps_radius_m    INTEGER,
  gps_target_lat  REAL,
  gps_target_lng  REAL,
  gps_target_name TEXT,
  host_id         TEXT REFERENCES hosts(id),
  meet_location   TEXT,
  meet_time       TEXT,
  xp_reward       INTEGER DEFAULT 0,
  trust_reward    INTEGER DEFAULT 0,
  physical_reward TEXT,
  skill_tags      TEXT,                        -- JSON array
  reflection_prompt TEXT,
  status          TEXT DEFAULT 'draft',        -- draft, review, active, paused, archived
  created_at      DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at      DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_quests_system ON quests(system);
CREATE INDEX idx_quests_city ON quests(city);
CREATE INDEX idx_quests_status ON quests(status);
CREATE INDEX idx_quests_host ON quests(host_id);
```

### 2.4 Proofs

```sql
CREATE TABLE proofs (
  id              TEXT PRIMARY KEY,
  user_id         TEXT NOT NULL REFERENCES users(id),
  quest_id        TEXT NOT NULL REFERENCES quests(id),
  host_id         TEXT NOT NULL REFERENCES hosts(id),
  proof_types     TEXT NOT NULL,               -- JSON ["photo","text","gps"]
  photo_urls      TEXT,                        -- JSON ["r2://..."]
  photo_hashes    TEXT,                        -- JSON ["sha256:..."]
  text_content    TEXT,
  text_hash       TEXT,
  gps_lat         REAL,
  gps_lng         REAL,
  gps_accuracy_m  REAL,
  gps_within_radius INTEGER DEFAULT 0,
  submitted_at    TEXT NOT NULL,               -- ISO 8601
  review_status   TEXT DEFAULT 'pending',      -- pending, accepted, rejected
  reviewed_by     TEXT REFERENCES hosts(id),
  review_reason   TEXT,
  reviewed_at     TEXT,
  created_at      DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_proofs_user ON proofs(user_id);
CREATE INDEX idx_proofs_quest ON proofs(quest_id);
CREATE INDEX idx_proofs_host ON proofs(host_id);
CREATE INDEX idx_proofs_status ON proofs(review_status);
```

### 2.5 Receipts

```sql
CREATE TABLE receipts (
  id              TEXT PRIMARY KEY,
  proof_id        TEXT NOT NULL REFERENCES proofs(id),
  user_id         TEXT NOT NULL REFERENCES users(id),
  quest_id        TEXT NOT NULL REFERENCES quests(id),
  host_id         TEXT NOT NULL REFERENCES hosts(id),
  issued_at       TEXT NOT NULL,               -- ISO 8601
  receipt_status  TEXT DEFAULT 'active',       -- active, revoked, expired
  hash            TEXT NOT NULL,
  signature       TEXT NOT NULL,
  json_body       TEXT NOT NULL,               -- Full canonical JSON
  revoked_at      TEXT,
  revoke_reason   TEXT,
  created_at      DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_receipts_user ON receipts(user_id);
CREATE INDEX idx_receipts_quest ON receipts(quest_id);
CREATE INDEX idx_receipts_status ON receipts(receipt_status);
```

### 2.6 Quest Joins (Bookings)

```sql
CREATE TABLE quest_joins (
  id              TEXT PRIMARY KEY,
  user_id         TEXT NOT NULL REFERENCES users(id),
  quest_id        TEXT NOT NULL REFERENCES quests(id),
  host_id         TEXT NOT NULL REFERENCES hosts(id),
  scheduled_date  TEXT NOT NULL,               -- ISO 8601 date
  status          TEXT DEFAULT 'confirmed',    -- confirmed, completed, cancelled, no_show
  cancelled_by    TEXT,                        -- user, host, system
  cancelled_at    TEXT,
  created_at      DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_joins_user ON quest_joins(user_id);
CREATE INDEX idx_joins_quest ON quest_joins(quest_id);
CREATE INDEX idx_joins_status ON quest_joins(status);
```

---

## 3. API CONTRACT

### 3.1 Authentication

All authenticated endpoints require:
```
Cookie: session={session_id}
OR
Authorization: Bearer {jwt_token}
```

### 3.2 Endpoints

#### POST /api/proofs
Upload proof for a quest.

**Request:**
```http
POST /api/proofs
Content-Type: multipart/form-data
Cookie: session=xxx

quest_id: "uuid"
photos: [binary files, max 3, max 10MB each]
text: "User reflection text..."
gps_lat: 11.9404
gps_lng: 108.4583
gps_accuracy_m: 8.5
```

**Response (201):**
```json
{
  "ok": true,
  "data": {
    "proof_id": "uuid",
    "photo_urls": ["https://r2.muonnoi.org/proofs/2026/08/abc.jpg"],
    "submitted_at": "2026-08-15T14:25:00Z",
    "status": "pending"
  }
}
```

**Response (400):**
```json
{ "ok": false, "error": "Missing required field: quest_id" }
```

**Response (429):**
```json
{ "ok": false, "error": "Rate limit exceeded", "retry_after_ms": 3600000 }
```

---

#### GET /api/receipts/{receipt_id}
Get receipt by ID. Public (no auth required).

**Response (200):**
```json
{
  "ok": true,
  "data": {
    "$schema": "https://muonnoi.org/schemas/receipt-v0.1.json",
    "canonical_json_version": "1.0",
    "schema_version": "0.1",
    "receipt_id": "uuid",
    "issued_at": "2026-08-15T14:30:00Z",
    "receipt_status": "active",
    "user": { "user_id": "uuid", "display_name": "Name", "tier_at_issue": 1 },
    "quest": { "quest_id": "uuid", "quest_slug": "slug", "system": "dulich", "title_vi": "...", "title_en": "..." },
    "host": { "host_id": "uuid", "host_name": "Name", "host_tier_at_issue": 3 },
    "proof": { ... },
    "review": { "review_status": "accepted", "reviewed_by": "uuid", "reviewed_by_name": "Name", "reviewed_at": "2026-08-15T14:28:00Z", "review_reason": null },
    "hash": "sha256:...",
    "signature": "ed25519:..."
  }
}
```

---

#### GET /api/receipts
List user receipts. Auth required.

**Query:**
```
GET /api/receipts?user_id={uuid}&limit=20&offset=0
```

**Response:**
```json
{
  "ok": true,
  "data": {
    "receipts": [ ... ],
    "total": 42,
    "limit": 20,
    "offset": 0
  }
}
```

---

#### POST /api/hosts/register
Apply to be a host.

**Request:**
```json
{
  "email": "host@example.com",
  "name": "Host Name",
  "phone": "+84912345678",
  "city": "Đà Lạt",
  "bio": "Short bio...",
  "languages": ["vi", "en"]
}
```

**Response (201):**
```json
{
  "ok": true,
  "data": {
    "application_id": "uuid",
    "status": "pending_kyc2",
    "next_step": "Upload CCCD and selfie via /api/kyc/submit"
  }
}
```

---

#### POST /api/kyc/submit
Submit KYC documents (Tier 2).

**Request:**
```http
POST /api/kyc/submit
Content-Type: multipart/form-data
Cookie: session=xxx

cccd_front: [binary]
cccd_back: [binary]
selfie: [binary]
```

**Process:**
1. Upload to R2 restricted bucket
2. Forward to `verify.iai.one` API
3. Store result in `users.kyc_tier = 2` if passed

**Response:**
```json
{
  "ok": true,
  "data": {
    "kyc_status": "approved",
    "tier": 2,
    "verified_at": "2026-06-05T10:00:00Z",
    "next_step": "Schedule Tier 3 interview"
  }
}
```

---

#### GET /api/quests
List quests.

**Query:**
```
GET /api/quests?system=dulich&city=Đà Lạt&status=active&limit=20
```

**Response:**
```json
{
  "ok": true,
  "data": {
    "quests": [ ... ],
    "total": 10
  }
}
```

---

#### GET /api/quests/{slug}
Get quest detail.

**Response:** Full quest object + host info (public fields only).

---

#### POST /api/hosts/review-proof
Host reviews proof.

**Request:**
```json
{
  "proof_id": "uuid",
  "status": "accepted",  // or "rejected"
  "reason": null        // required if rejected
}
```

**Response (201):**
```json
{
  "ok": true,
  "data": {
    "receipt_id": "uuid",
    "hash": "sha256:...",
    "signature": "ed25519:..."
  }
}
```

---

#### GET /.well-known/receipt-pubkey.json
Public key for offline receipt verification.

**Response:**
```json
{
  "algorithm": "ed25519",
  "public_key": "base64_encoded_key",
  "fingerprint": "sha256:abc123",
  "updated_at": "2026-06-05T00:00:00Z",
  "previous_keys": []
}
```

---

## 4. RECEIPT SYSTEM v0.1

See `docs/specs/TECH_SPEC_RECEIPTS_v0.1.md` for full canonicalization rules.

**Summary:**
- SHA-256 hash of canonical JSON (sorted keys, no whitespace)
- Ed25519 signature of hash
- Public key at `/.well-known/receipt-pubkey.json`
- Storage: D1 (metadata) + R2 (raw proof)
- Revocation: soft-revoke via DB status

---

## 5. KYC INTEGRATION

### Tier 1: Email/Phone
- Internal: OTP via `mail.iai.one` API

### Tier 2: ID Verification
- External: `verify.iai.one` API
- Fallback: manual Ops Lead review

### Tier 3: Local Host
- Internal: Interview form, training checklist, reference check
- No external API

---

## 6. SECURITY

### 6.1 Authentication
- Session-based auth (cookie) for web
- JWT for mobile API
- Magic link as passwordless option
- Google OAuth for social login

### 6.2 Authorization
| Role | Can Access |
|------|-----------|
| Guest | Quest listing (read-only) |
| Member (Tier 1) | Quest join, proof submit, profile |
| Host (Tier 3) | Host dashboard, proof review, quest-assigned |
| Admin | All endpoints, quest CMS, user management |

### 6.3 Data Protection
- KYC photos: R2 restricted bucket, AES-256-GCM
- User data: D1, minimal collection
- Session: KV, 7-day expiry
- Passwords: bcrypt (if password auth used)

### 6.4 Rate Limits
| Endpoint | Limit | Window |
|----------|-------|--------|
| /api/proofs (upload) | 10 | 1 hour |
| /api/auth/login | 10 | 10 min |
| /api/auth/register | 5 | 1 hour |
| /api/kyc/submit | 3 | 24 hours |

### 6.5 CORS
- Whitelist: `*.muonnoi.org`, `localhost:3000` (dev)
- No wildcard `*`

---

## 7. INFRASTRUCTURE

### Cloudflare Stack
| Service | Use |
|---------|-----|
| Workers | API runtime |
| D1 | Relational DB |
| R2 | Object storage (photos, docs) |
| KV | Sessions, cache |
| Pages | Static hosting (Astro sites) |
| DNS | Subdomain management |

### Environments
| Env | Domain | Purpose |
|-----|--------|---------|
| Local | `localhost:3000` | Development |
| Staging | `staging.muonnoi.org` | Pre-production testing |
| Production | `*.muonnoi.org` | Live |

### Deployment
- Git push → GitHub Actions → Wrangler deploy
- D1 migrations: `wrangler d1 migrations apply`
- R2 buckets: Terraform or Wrangler config

---

## 8. MONITORING

### Health Checks
```
GET /health
{"service":"api.muonnoi.org","status":"ok","version":"v1","docs":"/openapi.json"}
```

### Metrics (Future)
- Request rate, error rate, latency
- Proof upload success rate
- Receipt generation rate
- Host review response time

### Alerts
- API error rate > 5%
- D1 connection failures
- R2 upload failures
- Any Level 3+ safety incident

---

## 9. TESTING

### Unit Tests
- Receipt canonicalization
- Hash computation
- Signature verification
- KYC tier progression

### Integration Tests
- Proof upload → R2 → D1
- Host review → receipt generation
- Quest join → proof submit → review → receipt

### E2E Tests
- Full user flow: register → join quest → submit proof → get receipt
- Full host flow: login → review proof → generate receipt

---

## 10. DEPENDENCIES

| Service | Purpose | Status |
|---------|---------|--------|
| `verify.iai.one` | KYC Tier 2 | Required for host onboarding |
| `mail.iai.one` | Email delivery | Required for auth + notifications |
| `pay.iai.one` | Payment (future) | Not needed for v0.1 |
| Google OAuth | Social login | Optional (magic link is primary) |
| Cloudflare | Infrastructure | Required |

---

> **Tech spec locked 2026-06-05. No code changes without spec update and Founder approval.**
