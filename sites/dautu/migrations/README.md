# D1 Migrations — dautu.muonnoi.org

## Apply migrations

```bash
# Create D1 database (if not exists)
wrangler d1 create dautu-muonnoi-db

# Apply migration
wrangler d1 execute dautu-muonnoi-db --file=./migrations/0001_create_investor_interest.sql
wrangler d1 execute dautu-muonnoi-db --file=./migrations/0002_create_deal_room_access.sql

# Bind database in wrangler.toml — đã có sẵn, chỉ cần điền database_id
```

## Secrets

```bash
# Email notifications qua mail.iai.one (thay thế Resend)
wrangler pages secret put MAIL_IAI_ONE_API_KEY
wrangler pages secret put MAIL_IAI_ONE_TO

# Audit log qua verify.iai.one
wrangler pages secret put VERIFY_IAI_ONE_API_KEY

# Payment xử lý qua pay.iai.one (không cần secret trong Pages Function này)
```

## Tables

| Table | Purpose |
|---|---|
| `investor_interest` | Lưu form quan tâm đầu tư |
| `deal_room_access` | Quản lý token truy cập deal room |

## investor_interest status values

- `new` — Mới nhận, chưa xử lý
- `reviewing` — Đang kiểm tra
- `approved` — Đủ điều kiện, mời deal room
- `rejected` — Không phù hợp
- `contacted` — Đã liên hệ
- `converted` — Đã đầu tư
- `dormant` — Không phản hồi
