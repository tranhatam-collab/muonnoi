# Brandpro — QUICKSTART v2.0 (1 trang)

> Phien ban: 2.0 · Doc 5 phut · Ap dung duoc ngay. Chi tiet -> 20 file template + folder `_artifacts/` (22 artefact + INDEX).

---

## Bo kit gom gi?

```
Brandpro/
├── 00-README.md              <- Triet ly + cach dung
├── 01-Master-Plan.md         <- Roadmap 120 ngay + RACI + Budget
├── 02 -> 19                  <- 18 file template theo 5 phase
├── 13-Briefs-Templates.md    <- 7 brief mau
├── 14-Trackers.md            <- 5 schema tracker + product metrics
├── 15-Application-Playbook.md <- Walkthrough + gioi han AI agent
├── 00-QUICKSTART.md          <- FILE NAY
├── CHANGELOG.md
└── _artifacts/               <- 22 artefact dien-ngay + INDEX
```

---

## 5 phase · 5 cong duyet

```
Phase 1 — FORENSICS         (Day 1-14)   -> Risk Matrix duyet
Phase 2 — STRATEGY          (Day 15-28)  -> Ten + Pillars + Architecture lock
Phase 3 — IDENTITY          (Day 29-56)  -> Brand Book v1 + Design Token v1
Phase 4 — PRODUCT + DIGITAL (Day 57-90)  -> Web song ngu live + Product Copy lock + Design System v1
Phase 5 — DEFENSE + GOVERN  (Day 91-120) -> TM filed + Guardian
```

Khong skip gate. Moi gate co chu ky Founder.

---

## Bat dau trong 30 phut

1. **Doc**: `00-README.md` (5 phut) -> `01-Master-Plan.md` (10 phut) -> `15-Application-Playbook.md` muc B+C (10 phut).
2. **In/clone**: 6 file `_artifacts/01` den `_artifacts/06` — day la 6 artefact ban se song cung ca 120 ngay.
3. **Len lich**: ngay Day 1 + 5 cong duyet vao lich.
4. **Bo nhiem**: 1 PM + du kien Brand Guardian (Day 91).

---

## 6 artefact quan trong nhat (in ra cam tay)

| File | Khi nao dung | Ai duyet |
|------|--------------|----------|
| `_artifacts/01-Founder-Brief-blank.md` | Day 1, Buoc 1 | Founder ky |
| `_artifacts/02-Risk-Matrix-blank.md` | Day 14, Gate 1 | Founder ky |
| `_artifacts/03-Naming-Decision-blank.md` | Day 22, trong Gate 2 | Founder + Legal |
| `_artifacts/04-Brand-Pillars-Card-blank.md` | Day 28, Gate 2 | Founder + Strategist |
| `_artifacts/05-Style-Lock-blank.md` | Day 28, sau khi Naming Decision | Founder |
| `_artifacts/06-Brand-Guardian-Charter-blank.md` | Day 91, Gate 5 | Founder + Guardian |

---

## 7 nguyen tac khong thuong luong

1. **Logic truoc My thuat** — quyet ten + positioning truoc, ve logo sau.
2. **Mot su that duy nhat** — ten brand 1 cach viet, moi kenh, ca trong code.
3. **Day lai ca nguoi va may** — entity SEO ngang tam visual.
4. **Transcreate, khong Translate** — VI/EN la 2 bo messaging rieng.
5. **Brand book chi co gia tri neu duoc enforce** — Brand Guardian = vinh vien.
6. **Product la diem cham brand quan trong nhat** — UI copy, error message, onboarding deu la brand.
7. **Design system = brand system** — khong tach roi visual identity va code implementation.

---

## Chon loc theo scale

- **Lean** (< 200tr, 1 founder): 8 file (01-07, 12) + 8 artefact. Bo qua 16-19.
- **Standard** (SME / Single SaaS, 200-800tr): 14 file (them 08, 09, 10, 11, 13, 14). Bo qua 18-19.
- **Premium** (Holding / Multi-product, > 800tr): full 20 file.

---

## Khi giao cho AI agent (nhu toi) chay

Toi **lam duoc**:
- Forensics qua web fetch + search
- Naming + Pillars + Verbal Identity + Product Copy (toan bo text-based)
- Schema JSON-LD + hreflang code + Design Token JSON
- Bilingual messaging matrix + glossary + content plan + UI strings
- Brand book content (markdown) + brief + tracker schema
- Brand Architecture framework + Competitive Moat analysis

Toi **KHONG lam duoc**:
- Thiet ke logo / illustration / photo (can designer)
- Mua domain / nop TM / claim Wikidata (can payment + auth cua user)
- Doc giong phonetic test (can nguoi that)
- Layout PDF brand book dep (can designer)
- Dai dien phap ly (can luat su SHTT)
- Build Storybook / dev component (can developer)

Chi tiet: `15-Application-Playbook.md` muc E.

---

## Cau hoi khi bi

| Tinh huong | Tra |
|------------|-----|
| ".com doi thu trung ten, lam sao?" | `03-Risk-Matrix.md` cay quyet dinh |
| "Dat ten the nao?" | `04-Naming-Strategy.md` rubric 6 tieu chi |
| "Logo co phai doi khong?" | `12-Governance.md` Annual Review framework |
| "Schema viet sao?" | `_artifacts/07-Schema-Organization.json` |
| "Co nen mua domain typo khong?" | `11-Legal-Defense.md` muc C |
| "Brand dung khung hoang?" | `_artifacts/16-Crisis-Activation-Form.md` (form 24h) + `11-Legal-Defense.md` muc E |
| "Test phonetic chuan the nao?" | `_artifacts/15-Phonetic-Test-Protocol.md` |
| "Khao sat khach hang cuoi nam?" | `_artifacts/17-Brand-Health-Survey.md` (15 cau VI/EN) |
| "Annual Review chay form gi?" | `_artifacts/18-Annual-Review-Form.md` |
| "Feature trong app dat ten sao?" | `16-Product-Brand-System.md` muc B |
| "Design token viet sao?" | `_artifacts/21-Design-Token-Template.json` |
| "Onboarding copy viet sao?" | `_artifacts/22-Onboarding-Copy-Blank.md` |
| "Tim artefact cho phase nao?" | `_artifacts/INDEX.md` (master map) |

---

## Lien he kit owner

Khi can update kit (v2.0 -> v2.1, v3.0):
- Cap nhat `CHANGELOG.md`
- Tang version o dau `00-README.md` va ghi chi tiet trong `CHANGELOG.md`
- Audit toan bo fork dang chay xem can migrate khong (theo nguyen tac fork doc lap, khong tu ep migrate)
