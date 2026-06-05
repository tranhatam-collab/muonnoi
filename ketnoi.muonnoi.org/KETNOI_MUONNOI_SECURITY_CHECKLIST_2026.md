# BẢO MẬT VÀ TRUST & SAFETY CHECKLIST — KẾT NỐI MUÔN NƠI

**Phiên bản:** v0.1 — 2026  
**Trạng thái:** Draft — Áp dụng từng Phase theo Dev Roadmap  
**Subdomain:** ketnoi.muonnoi.org  
**Tiền đề:** `KETNOI_MUONNOI_SAFETY_AND_ANTI_SCAM_POLICY_2026.md`

---

## 1. Nguyên tắc vàng

1. **Safety by Design:** An toàn không phải tính năng bổ sung. Là nền tảng của mọi quyết định kỹ thuật.
2. **Privacy by Default:** Không lưu dữ liệu không cần thiết. Không bán dữ liệu. Không tracking quảng cáo.
3. **Zero-Knowledge Verification:** Xác minh danh tính mà không lưu ID gốc.
4. **Transparency:** User có quyền biết dữ liệu gì được lưu, ai truy cập, và tại sao bị ban.
5. **Accountability:** Mọi hành động moderation có log, có lý do, có appeal path.

---

## 2. Checklist theo Phase

### Phase 0 — Pháp lý & nền móng (Tháng 1–2)

#### Infrastructure Security
- [ ] DB encryption **at rest** (AES-256)
- [ ] DB encryption **in transit** (TLS 1.3)
- [ ] Network isolation: DB không public internet, chỉ accessible qua private network/VPN
- [ ] IAM least privilege: mỗi service có role riêng, không shared credentials
- [ ] Secrets management: Cloudflare Secrets / AWS Secrets Manager, không hardcode trong repo
- [ ] SSL/TLS cho tất cả subdomains (A+ trên SSL Labs)
- [ ] DDoS protection enabled (Cloudflare)
- [ ] WAF rules: SQL injection, XSS, path traversal blocking

#### Legal & Compliance
- [ ] UK OSA risk assessment completed
- [ ] PDPL TIA dossier (Bộ Công an) submitted
- [ ] GDPR compliance memo (nếu có user EU)
- [ ] Terms of Service v0.1 approved by legal counsel
- [ ] Privacy Policy v0.1 approved by legal counsel
- [ ] Safety Policy v0.1 approved by legal counsel
- [ ] Child Safety Policy v0.1 approved
- [ ] Data Processing Agreement (DPA) với third-party providers

#### Verify Infrastructure
- [ ] verify.iai.one ZK prototype: không lưu ID gốc
- [ ] verify.iai.one: auto-delete ảnh sau 30 ngày
- [ ] verify.iai.one: audit log của mọi verification attempt
- [ ] verify.iai.one: breach response plan (nếu bị hack, không có ID gốc để leak)

---

### Phase 1 — MVP (Tháng 3–5)

#### Application Security
- [ ] Input validation tất cả endpoints (zod schema, không tin client)
- [ ] SQL injection prevention (parameterized queries, ORM)
- [ ] XSS prevention (output encoding, CSP headers)
- [ ] CSRF tokens cho state-changing operations
- [ ] Rate limiting: per-IP, per-user, per-endpoint
- [ ] Brute force protection: auth attempts, magic link requests
- [ ] Session management: JWT short-lived + refresh rotation + revoke
- [ ] Secure headers: HSTS, X-Frame-Options, X-Content-Type-Options, CSP
- [ ] Dependency audit: `npm audit`, Snyk scan, auto-update critical patches
- [ ] No secrets in git: pre-commit hook scan (gitleaks/talisman)

#### Content Safety
- [ ] Photo upload: scan NSFW + deepfake trước khi public
- [ ] Video intro: scan deepfake, audio analysis
- [ ] AI image detection: metadata analysis, GAN fingerprint
- [ ] Watermark "verified photo" cho ảnh qua liveness check
- [ ] Report button trên mọi profile, message, photo
- [ ] Block user: immediate, không thông báo cho bên bị block

#### Chat Safety
- [ ] Money Request Shield: detect từ khóa scam → cảnh báo + tạm giữ chat
- [ ] Off-platform Warning: detect phone/email/telegram/whatsapp link → cảnh báo
- [ ] Message encryption: TLS transit, AES-256 at rest
- [ ] No message history accessible sau khi account bị xóa
- [ ] Chat log retention: 90 ngày cho moderation, sau đó auto-delete

#### Data Privacy
- [ ] Geo mờ: không lưu exact coordinates, chỉ lưu vùng/city level
- [ ] No exact distance shown: chỉ hiển thị "trong khu vực"
- [ ] No phone/email public: chỉ hiển thị sau khi cả 2 bên đồng ý
- [ ] Hard-delete account: xóa tất cả data, không soft-delete marketing
- [ ] Export data: user có thể tải toàn bộ data của mình (GDPR Article 20)

#### Moderation (Basic)
- [ ] Report form: 4 mức rủi ro (Low/Medium/High/Emergency)
- [ ] Auto-flag: nhiều report trong 24 giờ → tạm khóa + human review
- [ ] Emergency response SLA: <4 giờ
- [ ] High risk SLA: <24 giờ
- [ ] Medium risk SLA: <48 giờ
- [ ] Low risk SLA: <72 giờ
- [ ] Appeal form: user có thể kháng cáo ban/suspend
- [ ] Transparent appeal: lý do rõ ràng, review bởi human

---

### Phase 2 — Pilot Đà Lạt (Tháng 6–7)

#### Event Safety
- [ ] Event registration: verified users only (cấp 2+)
- [ ] Host verification: host phải đạt cấp 4+ và background check
- [ ] Venue safety check: public location, emergency exit, lighting
- [ ] Attendee list: không public, chỉ host + admin thấy
- [ ] Check-in/check-out: digital log, không lưu sau 30 ngày
- [ ] Emergency contact: user phải cung cấp 1 contact tin cậy trước khi tham gia event
- [ ] Panic button: trong app, gửi location (mờ) + alert cho contact tin cậy + admin
- [ ] Post-event feedback: NPS + safety incident report (nếu có)

#### Community Moderation
- [ ] Community guidelines công khai, rõ ràng
- [ ] Local Host training: safety protocol, emergency response, reporting
- [ ] Repeat offender detection: user bị report 3+ lần → auto-review
- [ ] Shadow ban: không thông báo, giảm visibility (chỉ dùng cho spam/scam)

---

### Phase 3 — Monetize + Mở rộng (Tháng 8–12)

#### Advanced Security
- [ ] Penetration test: thuê third-party (OWASP Top 10, API security, mobile security)
- [ ] GDPR audit: data mapping, DPO appointment, breach notification process
- [ ] Payment security: PCI-DSS readiness (qua pay.iai.one, không lưu thẻ)
- [ ] SOC 2 Type I preparation: policies, procedures, evidence collection
- [ ] Bug bounty program: HackerOne hoặc Bugcrowd (public khi đủ mature)

#### AI Safety Assistant
- [ ] Red flag detection: không báo cáo false positive >5%
- [ ] Scam summary: tóm tắt pattern scam cho moderation team
- [ ] Consent reminders: nhắc user về ranh giới, không thay thế communication
- [ ] Appeal support: gợi ý lý do kháng cáo, không tự động approve
- [ ] **Tuyệt đối không:** AI tán tỉnh thay user, AI tạo profile fake, AI chatbot giả danh

#### Data Governance
- [ ] Data retention policy: xác định thời gian lưu từng loại data
- [ ] Data minimization review: quarterly audit data được lưu
- [ ] Cross-border transfer: log + consent cho mọi chuyển data VN↔global
- [ ] Third-party audit: annual security audit bởi independent firm

---

### v1.0 — Global (Năm 2)

- [ ] SOC 2 Type II audit (6-month observation period)
- [ ] ISO 27001 certification (nếu cần cho enterprise partnerships)
- [ ] Legal review theo từng quốc gia mới (trước khi mở market)
- [ ] KYC provider expansion: thêm provider cho từng region
- [ ] Independent security audit: annual, public summary (không leak vulnerability chi tiết)
- [ ] Safety Advisory Board: external experts review policy + product quarterly

---

## 3. Incident Response Plan

### 3.1. Phân loại incident

| Mức | Ví dụ | SLA Response | SLA Resolution |
|---|---|---|---|
| P0 (Emergency) | CSAM, đe dọa tính mạng, data breach | 15 phút | 4 giờ |
| P1 (High) | Scam hoạt động, quấy rối nghiêm trọng, account takeover | 1 giờ | 24 giờ |
| P2 (Medium) | Fake profile, spam, vi phạm nội quy | 4 giờ | 48 giờ |
| P3 (Low) | Spam nhẹ, tin nhắn không phù hợp | 24 giờ | 72 giờ |

### 3.2. Response workflow

```
Phát hiện (auto/user report)
    ↓
Triage (on-call engineer + safety lead)
    ↓
Containment (khóa account/content, preserve evidence)
    ↓
Investigation (log review, pattern analysis)
    ↓
Remediation (fix, patch, policy update)
    ↓
Communication (user affected, regulatory nếu cần)
    ↓
Post-mortem (within 48h for P0/P1)
```

### 3.3. Communication

- **User affected:** Email từ safety@muonnoi.org trong vòng 24 giờ (P0: 4 giờ)
- **Regulatory:** Báo cáo cơ quan chức năng trong vòng 72 giờ nếu liên quan trẻ em / data breach
- **Public:** Transparency report hàng quý (số report, số action, trend)

---

## 4. Child Safety (Zero Tolerance)

- [ ] Age gate: không cho phép <18 tham gia hẹn hò người lớn
- [ ] ID/liveness check khi nghi ngờ tuổi
- [ ] CSAM detection: hash matching (PhotoDNA / Google CSAI) + AI scan
- [ ] Mandatory report: bất kỳ nhân viên/hệ thống phát hiện CSAM phải báo cáo ngay
- [ ] Cooperation: hợp tác đầy đủ với cơ quan chức năng (VN: Bộ Công an, Cục An ninh mạng)
- [ ] NCMEC / IWF reporting: nếu có user US/UK
- [ ] Account <18 phát hiện: khóa ngay, xóa data, báo cáo

---

## 5. Transparency Report Template (Quarterly)

| Metric | Q1 | Q2 | Q3 | Q4 |
|---|---|---|---|---|
| Tổng số report nhận được | | | | |
| Phân loại: Low / Medium / High / Emergency | | | | |
| Thời gian phản hồi trung bình | | | | |
| % đạt SLA | | | | |
| Số account bị suspend | | | | |
| Số account bị ban vĩnh viễn | | | | |
| Số appeal nhận được | | | | |
| Số appeal được chấp nhận | | | | |
| Số scam bị chặn (auto) | | | | |
| Số scam bị chặn (manual) | | | | |
| Số safety incident nghiêm trọng | | | | |
| Data breach incidents | 0 | 0 | 0 | 0 |

---

## 6. Tools & Resources

| Mục đích | Công cụ |
|---|---|
| SAST (Static Analysis) | Semgrep, CodeQL, SonarQube |
| DAST (Dynamic Analysis) | OWASP ZAP, Burp Suite |
| Dependency Scan | Snyk, npm audit, Dependabot |
| Secret Scan | Gitleaks, Talisman, TruffleHog |
| Container Scan | Trivy, Snyk Container |
| Pen-test | Burp Suite Pro, manual testing |
| NSFW/Deepfake Detection | AWS Rekognition, Google Vision, Hive Moderation |
| CSAM Detection | PhotoDNA, Google CSAI Match |
| Incident Response | PagerDuty, Slack #incident-response |

---

**Kết Nối Muôn Nơi**  
Security & T&S Checklist — Safety by Design, Trust by Verification, Accountability by Traceability.
