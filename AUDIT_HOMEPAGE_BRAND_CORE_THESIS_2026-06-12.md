# AUDIT TOAN DIEN: HOMEPAGE + BRAND CORE + STRATEGIC THESIS
**Ngay audit:** 2026-06-12
**Auditor:** Devin
**Scope:** muonnoi.org (root + apps/web/public), toan bo ecosystem verticals

---

## PHAN 0: TOM TAT PHAN QUYET

| Khia canh | Trang thai | Muc do gap |
|---|---|---|
| CTA #1 chuan thesis | KHONG khop | 🔴 Lon nhat |
| Hero line chuan thesis | KHONG khop | 🔴 Lon |
| S2 "Ban muon gi hom nay?" | CHUA CO | 🔴 Lon |
| S3 "MN la gi?" | CHUA CO | 🔴 Lon |
| S4 Social + AI Feed | Nhac den, khong proof | 🟡 Trung binh |
| S5 Trust Layer | Link /security, khong section | 🟡 Trung binh |
| S6 He sinh thai | Co /ecosystem, khong visual map | 🟡 Trung binh |
| S7 Real-life Loops | Nhac trong card, khong section | 🟡 Trung binh |
| S8 Danh cho ai? | CHUA CO | 🟡 Trung binh |
| S9 Du an & Chuong trinh | 5 cards lon xon | 🟡 Trung binh |
| S10 Governance / Legal | Link footer, khong section | 🟢 Nho |
| S11 Bat dau (3 buoc) | CHUA CO | 🔴 Lon |
| truyenthong.muonnoi.org | KHONG TON TAI | 🔴 Lon |
| verify.muonnoi.org | KHONG TON TAI | 🔴 Lon |
| nhachung.muonnoi.org | KHONG TON TAI | 🔴 Lon |
| chochoi.muonnoi.org | KHONG TON TAI | 🔴 Lon |
| trochoi.muonnoi.org | KHONG TON TAI | 🔴 Lon |
| 8 tru doi song tren homepage | CHUA CO | 🔴 Lon |
| Brand Core (3 tang cau) | CHUA CO | 🔴 Lon |
| chochoi vs plays vs trochoi | CHUA PHAN BIET | 🔴 Lon |

**Ket luan tong:** Homepage hien tai la **public shell + plan index**, chua phai **conversion engine**.

---

## PHAN 1: HIEN TRANG HOMEPAGE

### 1.1 File goc: /index.html (root)
Phien ban cu "Muon Noi", chua chuyen sang "Muon Noi"

| Element | Noi dung hien tai | Van de |
|---|---|---|
| Title | `Muon Noi · Muon Noi | Ha tang tri thuc song that` | Sai brand. Phai la "Muon Noi" |
| H1 | `Muon Noi · Muon Noi` | Sai brand. Khong co "Muon Noi = Muon Noi" |
| CTA chinh | `Vao ung dung / Enter app` -> /app.html | Khong noi bat, dan ve app.html cu |
| Section thu 2 | "Du an da cong bo" - 6 cards dan ra ngoai | **Ro ri traffic**. Khong giu user trong he |

**Phan quyet:** File root /index.html can **archive hoac redirect** sang phien ban moi.

### 1.2 File moi: /apps/web/public/index.html
Phien ban public shell moi hon, nhung van la "plan index"

| Element | Noi dung hien tai | So voi Thesis | Gap |
|---|---|---|---|
| Title | `Muon Noi | Ha tang so cho doi song that` | Thesis: "Muon Noi — mang xa hoi doi song cho nguoi that va AI huu ich" | 🔴 Thieu "mang xa hoi", "AI huu ich" |
| H1 | `Trang chu cong dong van hanh theo doi song that` | Thesis: Hero line voi brand + AI + 6 verb | 🔴 Khong co brand name o H1. Khong co 6 verb |
| CTA #1 | `Xem ke hoach moi nhat` -> /plan/ | Thesis: `Vao MXH Muon Noi` -> app.muonnoi.org | 🔴 **WRONG**. CTA cua internal tool |
| CTA #2 | `Xem lo trinh` -> /roadmap/ | Thesis: `Toi muon lam gi hom nay?` -> scroll S2 | 🔴 Internal/plan-oriented |
| CTA #3 | `Xem ke hoach dau tu` -> /investment/ | Thesis: KHONG co tren hero | 🔴 Qua som. Rui ro phap ly |
| CTA #4 | `Doc tuyen ngon` -> /manifesto/ | Thesis: KHONG co tren hero | 🔴 Phan tan attention |
| Tong CTA hero | 4 CTA ngang hang | Thesis: 2 CTA (1 noi bat + 1 scroll) | 🔴 **VI PHAM nguyen tac vang** |
| Hero preview | "Brand Gate" voi fake posts ve Plan/Investment | Thesis: Screenshot that cua app feed | 🟡 Mockup noi bo, khong chung minh social core |
| Section 2 | "Lo trinh va cong bo hom nay" - 3 cards internal | Thesis: "BAN MUON GI HOM NAY?" - 10 cards | 🔴 **HOAN TOAN SAI**. Internal status, khong phai user needs |
| Section 3 | Khong co | Thesis: "MN LA GI?" | 🔴 Thieu |
| Section 4 | Khong co | Thesis: "SOCIAL + AI FEED" | 🔴 Thieu |
| Section 5 | Khong co | Thesis: "TRUST LAYER" | 🟡 Co link /security |
| Section 6 | Link /ecosystem/ | Thesis: Visual map 10-12 nhanh | 🟡 Khong embed visual |
| Section 7 | 1 card "Nguoi Viet Muon Noi" | Thesis: "REAL-LIFE LOOPS" - 6 verbs + Da Lat | 🟡 Khong phai section |
| Section 8 | Khong co | Thesis: 9 personas | 🔴 Thieu |
| Section 9 | 5 cards "Thong bao hom nay" | Thesis: 9-12 program cards | 🟡 Khong du, tron lan internal status |
| Section 10 | Khong co | Thesis: Governance/Legal trust footer | 🟡 Co link footer |
| Section 11 | Khong co | Thesis: "BAT DAU" - 3 buoc | 🔴 Thieu |
| Nav chinh | Trang chu, He sinh thai, Lo trinh, Bao mat, Huong dan, Ke hoach, Dau tu, Mo he | Thesis: CTA #1 phai noi bat hon nav | 🟡 "Mo he" dan ve /feed/ khong phai app.muonnoi.org |
| Footer | Home, Ecosystem, About, Manifesto, Press, Newsletter, Plan, Investment, Security, Guide | Thesis: Can trust footer | 🟡 Thieu trust posture |
| Brand mark | `MN` | Thesis: Can ke chuyen MN = Muon Noi = Muon Noi | 🟡 Co mark, chua narrative |
| i18n | Co system data-i18n | Thesis: VI goc, EN thu 2 | 🟢 Ha tang i18n da co |

---

## PHAN 2: AUDIT 8 TRU DOI SONG

| Tru | Domain | Hien dien tren homepage? | Trang thai subdomain |
|---|---|---|---|
| **Muon Noi** | app.muonnoi.org | Khong co card | Shell co |
| **Muon Hoc** | hoctap.muonnoi.org | Khong co card | Noi dung tot |
| **Muon Lam** | lamviec.muonnoi.org | Khong co card | 1 page, typo "Muon Noi" |
| **Muon Song** | nhachung.muonnoi.org | Khong co card | KHONG TON TAI |
| **Muon Choi** | chochoi.muonnoi.org | Khong co card | KHONG TON TAI |
| **Muon Ket Noi** | ketnoi + nguoiviet | 1 card nguoiviet | ketnoi chi docs; nguoiviet tot |
| **Muon Tin** | verify.muonnoi.org | Khong co card | KHONG TON TAI |
| **Muon Lan Toa** | truyenthong.muonnoi.org | Khong co card | KHONG TON TAI |

**Phan quyet:** 8 tru chi co 3/8 tru co subdomain. Tru Song (nhachung), Choi (chochoi), Tin (verify), Lan Toa (truyenthong) hoan toan thieu.

---

## PHAN 3: AUDIT SUBDOMAIN THIEU

| Subdomain | Vai tro thesis | Trang thai code | Gap | Uu tien build |
|---|---|---|---|---|
| **truyenthong.muonnoi.org** | Media / Communication Infrastructure | Khong co folder | 🔴 Thieu hoan toan | **P0** |
| **verify.muonnoi.org** | Public Trust Infrastructure | Khong co folder | 🔴 Thieu hoan toan | **P0** |
| **nhachung.muonnoi.org** | Living Ecosystem | Khong co folder | 🔴 Chi co nhachung.org ngoai he | **P0** |
| **chochoi.muonnoi.org** | Play Ecosystem (real-life) | Khong co folder | 🔴 Thieu hoan toan | **P0** |
| **trochoi.muonnoi.org** | Real-life Games / Quests | Khong co folder | 🔴 Thieu hoan toan | **P1** |
| **family.muonnoi.org** | Family Ecosystem | Khong co folder | 🔴 Thieu | **P1** |
| **sukien.muonnoi.org** | Events / Meetup / Festival | Khong co folder | 🔴 Thieu | **P1** |
| **duan.muonnoi.org** | Project Portfolio | Khong co folder | 🔴 Thieu | **P1** |
| **giaitri.muonnoi.org** | Entertainment / Show / Content | Khong co folder | 🔴 Thieu | **P2** |
| **game.muonnoi.org** | Games portal (online) | Khong co folder | 🔴 Thieu | **P2** |
| **challenge.muonnoi.org** | Challenge / Competition | Khong co folder | 🔴 Thieu | **P2** |
| **thuvien.muonnoi.org** | Knowledge / Library (tach tu docs) | Khong co folder | 🔴 Thieu | **P2** |

---

## PHAN 4: AUDIT CHOCHOI vs PLAYS vs TROCHOI

| Loai | Domain | Dinh nghia | Trang thai |
|---|---|---|---|
| **chochoi.muonnoi.org** | Cho Choi Muon Noi | Play Ecosystem tong: vui choi, giai tri, su kien, thu thach doi song that | ❌ Chua co |
| **plays.muonnoi.org** | Plays | Game online, game giao duc, mini games digital | ✅ Da co, 102 games, PWA, SDK |
| **trochoi.muonnoi.org** | Tro Choi | Quest, challenge, tro choi doi song real-life (offline) | ❌ Chua co |
| **sukien.muonnoi.org** | Su Kien | Events, meetup, festival | ❌ Chua co |
| **giaitri.muonnoi.org** | Giai Tri | Entertainment, show, noi dung vui | ❌ Chua co |
| **game.muonnoi.org** | Games | Game portal online (alias/plays) | ❌ Chua co |
| **challenge.muonnoi.org** | Challenge | Challenge / competition | ❌ Chua co |

**Phan quyet:** plays.muonnoi.org hien tai dang om tron chuc nang game online/digital. Can:
1. Tao chochoi.muonnoi.org lam portal tong hop play ecosystem
2. Giữ plays.muonnoi.org cho game online/digital
3. Tao trochoi.muonnoi.org cho real-life quests/challenges
4. Tao sukien.muonnoi.org cho events
5. Tao giaitri.muonnoi.org cho entertainment content

---

## PHAN 5: AUDIT BRAND CORE

### 5.1 Dinh nghia 3 tang cau

| Tang | Thesis yeu cau | Hien trang | Gap |
|---|---|---|---|
| Cau goc | "Muon Noi la Social Operating System cho doi song that." | Khong co | 🔴 Thieu |
| Cau dai chung | "Muon Noi — mang xa hoi doi song cho nguoi that va AI huu ich. Noi. Hoc. Lam. Di. Ket noi. Song that hon cung cong dong." | H1: "Trang chu cong dong van hanh..." | 🔴 Sai hoan toan |
| Cau day du | Dai, co trust, governance, opportunity, truyenthong | /about/ co nhung khong linked ro | 🟡 Co page rieng |

### 5.2 Anti-definition

| Anti-definition | Hien trang | Gap |
|---|---|---|
| Khong phai MXH giai tri canh tranh attention | Title root co, apps/web/public khong co | 🟡 Khong nhat quan |
| Khong phai collection of websites / subdomain roi | Homepage van list nhieu subdomain | 🔴 VI PHAM |
| Khong phai nen tang hua thu nhap | Co disclaimer o /investment/ | 🟡 Co o investment page |
| Khong phai brand shell co roadmap dep nhung khong core usage | Homepage = plan index voi roadmap/investment | 🔴 VI PHAM NANG |

### 5.3 Bo ba nghia (Muon Noi = Muon Noi = MN)

| Element | Hien trang | Gap |
|---|---|---|
| MUON NOI = o khap moi noi | Khong ke | 🔴 Thieu |
| MUON NOI = ai cung co tieng noi | Khong ke | 🔴 Thieu |
| MN = brand mark | Co mark "MN" | 🟢 Co mark, chua narrative |
| Section S3 | Khong ton tai | 🔴 Thieu |

### 5.4 Brand Promise

| Promise | Hien trang | Gap |
|---|---|---|
| "Di tu trust truoc." | Khong co tren homepage | 🔴 Thieu |
| "Khong chay theo chi so ao..." | Co o /manifesto/ | 🟡 Co page rieng |

---

## PHAN 6: AUDIT 10 LOP KIEN TRUC GIA TRI

| # | Lop | Domain | Trang thai code | Gap |
|---|---|---|---|---|
| 1 | Social Core | app.muonnoi.org | Shell co (feed, create, profile, join, verify, commit, complaints, admin, chat, family). Feed chua co noi dung that. | 🔴 Co UI nhung chua co core usage loop |
| 2 | AI Layer | ai.muonnoi.org | Alpha co (blog, builder, dashboard). AI nam o app rieng, khong trong social. | 🔴 Architecture gap |
| 3 | Trust Infrastructure | verify.muonnoi.org | Khong co subdomain rieng. Co /verify/ trong app nhung khong phai trust infra public. | 🔴 Thieu public trust layer |
| 4 | Knowledge Infrastructure | docs.muonnoi.org / thuvien.muonnoi.org | docs co. thuvien chua co. | 🟡 docs tot, thuvien thieu |
| 5 | Media Infrastructure | truyenthong.muonnoi.org | Khong co. | 🔴 Thieu hoan toan |
| 6 | Learning Ecosystem | hoctap.muonnoi.org | Noi dung tot (8 sub-pages). | 🟢 Tot |
| 7 | Work / Opportunity | lamviec.muonnoi.org | 1 page, typo "Muon Noi". | 🟡 Mong |
| 8 | Living Ecosystem | nhachung.muonnoi.org | Khong co. Chi co nhachung.org ngoai he. | 🔴 Thieu hoan toan |
| 9 | Play Ecosystem | chochoi.muonnoi.org | Khong co. plays.muonnoi.org la game online roi. | 🔴 Thieu portal play |
| 10 | Strategic Resource | dautu.muonnoi.org | Tuong doi tot. | 🟢 Tot |

**Nguy co brand shell rat cao:** Lop 1 (social core) chua dung that duoc, lop 3 (verify) chua co subdomain public, lop 5 (truyenthong) thieu hoan toan — nhung da co 14+ verticals public.

---

## PHAN 7: AUDIT 3 WEDGE

### Wedge 1 — Nguoi Viet Muon Noi

| Element | Trang thai | Danh gia |
|---|---|---|
| Subdomain | nguoiviet.muonnoi.org | ✅ Co |
| Public UI | public/index.html day du | ✅ Posture manh |
| Brand mark | NV | ✅ Co mark |
| Posture | "Di xa de quay tro ve" — khong tour, khong khoa hoc | ✅ Khop thesis |
| **Wedge position tren homepage** | 1 card o "Thong bao hom nay" | 🔴 Khong phai wedge position |

### Wedge 2 — Nha Chung / Living

| Element | Trang thai | Danh gia |
|---|---|---|
| Subdomain trong he | Khong co nhachung.muonnoi.org | 🔴 |
| External domain | nhachung.org — dan ra ngoai | 🔴 Ro ri traffic + khong noi trust graph |
| **Wedge position tren homepage** | Khong co | 🔴 Thieu |

### Wedge 3 — Hoc & Lam (Opportunity)

| Element | Trang thai | Danh gia |
|---|---|---|
| hoctap.muonnoi.org | 8 sub-pages | ✅ Tot |
| lamviec.muonnoi.org | 1 page, typo | 🟡 Mong |
| **Wedge position tren homepage** | Khong co | 🔴 Thieu |

---

## PHAN 8: AUDIT CAU TRUC HOMEPAGE S1-S11

### S1 — HERO
**Thesis:** H1 = "Muon Noi — mang xa hoi doi song cho nguoi that va AI huu ich." Sub = 6 verb. CTA#1 = "Vao MXH Muon Noi". CTA#2 = "Toi muon lam gi hom nay?"

**Hien trang:** 4 CTA ngang hang ve plan/roadmap/investment/manifesto. Preview la "Brand Gate" voi fake posts Plan/Investment.

**De xuat khac phuc:**
1. Thay H1 = thesis hero line
2. Thay sub = 6 verb
3. Xoa 3 CTA plan-oriented. CTA#1 = "Vao MXH Muon Noi" -> https://app.muonnoi.org/join/
4. CTA#2 = "Toi muon lam gi hom nay?" -> #wants
5. Preview = screenshot app feed hoac mockup social content (khong phai plan content)

### S2 — BAN MUON GI HOM NAY? (10 cards)
**Thesis yeu cau:** 10 cards theo 8 tru + AI + Dau tu

**Hien trang:** Khong ton tai.

| # | Card | Dich | Readiness | Hien tren homepage? |
|---|---|---|---|---|
| 1 | Muon noi | app.muonnoi.org | Shell co | Khong co |
| 2 | Muon hoc | hoctap.muonnoi.org | Tot | Khong co |
| 3 | Muon lam | lamviec.muonnoi.org | 1 page | Khong co |
| 4 | Muon song | nhachung.muonnoi.org | Chua co subdomain | Khong co |
| 5 | Muon choi | chochoi.muonnoi.org | Chua co | Khong co |
| 6 | Muon ket noi | ketnoi + nguoiviet | ketnoi chi docs; nguoiviet tot | Khong co |
| 7 | Muon tin | verify.muonnoi.org | Chua co | Khong co |
| 8 | Muon lan toa | truyenthong.muonnoi.org | Chua co | Khong co |
| 9 | Muon dung AI | ai.muonnoi.org | Alpha co | Khong co |
| 10 | Muon dong hanh | dautu.muonnoi.org | Tot | Khong co (chi footer) |

**Luu y quan trong:**
- ketnoi: Thesis de xuat Phase 2 (sau khi Trust & Safety productized). Hien chi co docs. Khong nen hien card tren homepage.
- dautu: Hien da co noi dung tot, nhung khong nen lam CTA chinh. Card dan ve /dang-ky-quan-tam.html la hop ly.
- nhachung: Chua co subdomain trong he. Card co the dan ve trang "dang chuan bi" hoac an cho den khi subdomain san sang.
- chochoi, verify, truyenthong: Chua co. Card phai la "Sap mo / Coming Soon" hoac an.

### S3 — MN LA GI?
**Thesis:** Muon Noi = Muon Noi = MN. 3 dong, 1 visual.
**Hien trang:** Khong ton tai.
**De xuat:** Tao section moi.

### S4 — SOCIAL + AI FEED
**Thesis:** Gioi thieu app.muonnoi.org: dang, thao luan, AI tom tat, AI phan bien, AI kiem nguon. Screenshot that.
**Hien trang:** Khong co section rieng.
**De xuat:** Tao section voi mockup/screenshot feed.

### S5 — TRUST LAYER
**Thesis:** Verify · Trust score · Chong lua dao · An toan tre em · Bao cao vi pham.
**Hien trang:** Co link /security, /verify nhung khong la section tren homepage.
**De xuat:** Tao section rieng voi 5 pillars cua trust.

### S6 — HE SINH THAI
**Thesis:** Ban do truc quan 10-12 nhanh, KHONG chi tiet.
**Hien trang:** Co link /ecosystem/ nhung homepage khong embed visual.
**De xuat:** Embed simplified ecosystem map hoac link ro rang hon.

### S7 — REAL-LIFE LOOPS
**Thesis:** Hoc that · Lam that · Di that · Gap that · Dong gop that + cau chuyen Da Lat lam proof.
**Hien trang:** 1 card "Nguoi Viet Muon Noi" co nhac "Khong tour".
**De xuat:** Tao section rieng voi 6 verbs + Da Lat story.

### S8 — DANH CHO AI?
**Thesis:** 9 personas: user, creator, hoc vien, host, mentor, doanh nghiep, nha dau tu, cong dong nguoi Viet...
**Hien trang:** Khong ton tai.
**De xuat:** Tao section.

### S9 — DU AN & CHUONG TRINH NOI BAT
**Thesis:** 9-12 cards — programs truoc, structure sau.
**Hien trang:** 5 cards "Thong bao hom nay" tron lan internal status.
**De xuat:** Tach rieng section programs voi 9-12 cards ro rang.

### S10 — GOVERNANCE / LEGAL POSTURE
**Thesis:** Ngan, trust footer: privacy-first, khong hua thu nhap, khong chao ban chung khoan dai chung, khong AI gia danh.
**Hien trang:** Co link footer nhung khong co trust posture section.
**De xuat:** Tao trust footer section ngan.

### S11 — BAT DAU
**Thesis:** 3 buoc: Tao ho so -> Xac minh -> Chon hanh trinh. CTA lap: "Vao MXH Muon Noi".
**Hien trang:** Khong ton tai.
**De xuat:** Tao section moi.

---

## PHAN 9: ECOSYSTEM HIEN TAI (14+ VERTICALS)

| Subdomain | Trang thai | Danh gia | Vai tro trong thesis |
|---|---|---|---|
| muonnoi.org (root) | 2 file homepage song song, cu + moi | 🔴 Can merge/archive | Brand shell |
| app.muonnoi.org | Shell tuong doi day du | 🟡 Feed chua co noi dung that | Social Core |
| ai.muonnoi.org | Alpha co | 🟡 App roi, chua integrate vao social | AI Layer |
| dautu.muonnoi.org | Tuong doi tot | 🟢 Co governance, legal, disclaimer | Strategic Resource |
| hoctap.muonnoi.org | Tot | 🟢 8 sub-pages, form, SEO | Learning |
| lamviec.muonnoi.org | 1 page | 🟡 Mong, typo "Muon Noi" | Work |
| dulich.muonnoi.org | 1 page | 🟡 Co Da Lat proof nhung mong | Travel |
| nguoiviet.muonnoi.org | Tot | 🟢 Mission, programs, chapters, governance | Global Vietnamese |
| cuocsong.muonnoi.org | Tuong doi tot | 🟢 Content guide layer | Life Guide |
| docs.muonnoi.org | Tot | 🟢 Documentation ready | Knowledge |
| plays.muonnoi.org | Tot | 🟢 102 games, PWA, SDK, sitemap | Digital Games |
| lqos.muonnoi.org | Planning only | 🟡 Chi co docs | Quest Planning |
| meet.muonnoi.org | Empty | 🔴 Chua co | Meeting |
| henho.muonnoi.org | Empty | 🔴 Chua co | Dating |
| ketnoi.muonnoi.org | Docs only | 🟡 Chi co docs, khong co public UI | Connection |

---

## PHAN 10: KET LUAN VA DE XUAT HANH DONG

### 10.1 Cac quyet dinh can khoa (tu thesis)

| # | Quyet dinh | De xuat cua thesis | Hien trang | Can hanh dong |
|---|---|---|---|---|
| 1 | Wedge strategy | Phuong an A: Da Lat pilot = proof mechanism, 3 wedge = narrative | Chua khoa tren homepage | 🔴 Khoa ngay |
| 2 | Ten nhanh choi | chochoi | Dang dung plays cho game online | 🔴 Tao chochoi, giu plays |
| 3 | Cau hero homepage | "Mang xa hoi doi song cho nguoi that va AI huu ich" | H1: "Trang chu cong dong van hanh..." | 🔴 Sua hero ngay |
| 4 | ketnoi tren homepage | Phase 2 (sau Trust & Safety) | Khong co tren homepage | 🟢 Dung — da an dung |
| 5 | dautu card tren S2 | Hien card nhung dan ve "dang chuan bi + dang ky quan tam" | Co link footer, khong co card | 🟡 Co the them card |
| 6 | So file xuat | 1 file duy nhat | Chua xuat | 🟢 Quyet dinh sau khi duyet audit |

### 10.2 Danh sach viec can lam theo thu tu uu tien

**P0 — Khoa cau chuyen (Can lam ngay, khong can dev nhieu)**
1. Khoa H1 hero: "Muon Noi — mang xa hoi doi song cho nguoi that va AI huu ich"
2. Khoa sub-hero: "Noi. Hoc. Lam. Di. Ket noi. Song that hon cung cong dong."
3. Khoa CTA#1: "Vao MXH Muon Noi" -> app.muonnoi.org/join/
4. Xoa 3 CTA plan-oriented tren hero
5. Khoa brand promise: "Di tu trust truoc."
6. Khoa anti-definition tren homepage
7. Khoa section S2 voi 8 tru + AI + dau tu

**P0 — Tao subdomain shell (Can dev + deploy)**
8. Tao truyenthong.muonnoi.org shell (index.html, _headers, _redirects)
9. Tao verify.muonnoi.org shell (public trust infrastructure page)
10. Tao nhachung.muonnoi.org shell (living ecosystem portal)
11. Tao chochoi.muonnoi.org shell (play ecosystem portal)
12. Tao trochoi.muonnoi.org shell (real-life games/quests)

**P1 — Hoan thien homepage theo 11 section**
13. Restructure homepage: S1 -> S11
14. Them S3 "MN LA GI?"
15. Them S4 "SOCIAL + AI FEED"
16. Them S5 "TRUST LAYER"
17. Them S6 "HE SINH THAI" (visual map)
18. Them S7 "REAL-LIFE LOOPS" (Da Lat proof)
19. Them S8 "DANH CHO AI?" (9 personas)
20. Them S9 "DU AN & CHUONG TRINH NOI BAT" (9-12 program cards)
21. Them S10 "GOVERNANCE / LEGAL POSTURE"
22. Them S11 "BAT DAU" (3 buoc)

**P1 — Fix cac subdomain hien co**
23. Sua typo "Muon Noi" -> "Muon Noi" tren lamviec.muonnoi.org
24. Merge/archive file root /index.html cu
25. Chuan hoa nav/footer giua cac subdomain
26. Them _headers + _redirects cho cac subdomain thieu

**P2 — Mo rong ecosystem**
27. Tao family.muonnoi.org shell
28. Tao sukien.muonnoi.org shell
29. Tao duan.muonnoi.org shell
30. Tao giaitri.muonnoi.org shell
31. Tao game.muonnoi.org (redirect/plays)
32. Tao challenge.muonnoi.org shell
33. Tao thuvien.muonnoi.org shell

**P2 — QA + Deploy**
34. Chay WPAS audit toan bo subdomain moi
35. Kiem tra hreflang, canonical, OG tags tren toan he
36. Kiem tra _headers (HSTS, CSP, COOP, CORP)
37. Deploy tung subdomain
38. Kiem tra live URL
39. Chay Lighthouse/PageSpeed
40. Submit sitemap

---

## PHAN 11: PHAN BIET CHOCHOI / PLAYS / TROCHOI

**De xuat cuoi cung:**

```
chochoi.muonnoi.org        = Play Ecosystem Portal (tong)
  ├── plays.muonnoi.org     = Game online / digital / giao duc
  ├── trochoi.muonnoi.org   = Quest / challenge / tro choi doi song that
  ├── sukien.muonnoi.org    = Su kien / meetup / festival
  ├── giaitri.muonnoi.org   = Giai tri / show / noi dung vui
  ├── game.muonnoi.org      = Alias / redirect -> plays
  └── challenge.muonnoi.org = Challenge / competition
```
