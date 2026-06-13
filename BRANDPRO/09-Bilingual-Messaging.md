# 09 — Bilingual Messaging: Matrix VI/EN + Product UI Strings + Glossary + Transcreation Rules

> Triết lý: **Transcreation, không phải Translation**. Mỗi ngôn ngữ một bộ messaging riêng dựa trên cùng pillar. Google Translate không bao giờ ra brand voice.

---

## A. HƯỚNG DẪN

- File này dành cho brand có thị trường **VN + 1 thị trường tiếng Anh** (US/UK/SG/AU). Có thể mở rộng sang ngôn ngữ thứ 3.
- Owner: Copywriter trưởng (mỗi ngôn ngữ 1 người, **người bản xứ**).
- Approver: Brand Strategist + Founder.
- Mọi messaging đều phải truy nguyên về **pillar gốc** (file 05) — nếu không, là off-brand.
- Nguyên tắc: **dịch ý, không dịch từ**. Tiếng Việt và tiếng Anh có cấu trúc cảm xúc khác nhau.

---

## B. MESSAGING MATRIX — Audience × Channel

### B.1 Cấu trúc

```
                    Channel 1     Channel 2     Channel 3     Channel 4
                    (Web)         (Email)       (Social)      (Sales)
Audience 1 — VI       <<>>          <<>>          <<>>          <<>>
Audience 1 — EN       <<>>          <<>>          <<>>          <<>>
Audience 2 — VI       <<>>          <<>>          <<>>          <<>>
Audience 2 — EN       <<>>          <<>>          <<>>          <<>>
```

### B.2 Template — Audience Definition

```
AUDIENCE 1: <<Tên audience>>

Mô tả ngắn: <<...>>

Vị trí trong funnel:
[ ] Awareness  [ ] Interest  [ ] Decision  [ ] Action  [ ] Retention

Pain point chính (VI):
1. <<...>>
2. <<...>>

Pain point chính (EN — TRANSCREATION):
1. <<...>>  (EN audience có thể có pain point khác)
2. <<...>>

Aspiration:
- VI: <<...>>
- EN: <<...>>

Ngôn ngữ họ tự dùng để mô tả vấn đề:
- VI: <<...>>
- EN: <<...>>
```

### B.3 Template — Messaging cho mỗi ô

```
AUDIENCE × CHANNEL: <<...>> × <<...>> — Ngôn ngữ: <<VI / EN>>

CORE MESSAGE: <<1 câu duy nhất>>

SUPPORTING POINTS (3):
1. <<ly do tin: data / proof / story>>
2. <<...>>
3. <<...>>

CTA: <<...>>

VARIATIONS (5 cách viết khác nhau cùng message):
1. <<...>>
2. <<...>>
3. <<...>>
4. <<...>>
5. <<...>>
```

---

## C. PRODUCT UI STRINGS MATRIX — VI/EN

> Layer mới v2.0: UI copy phải được transcreate, không phải translate.

### C.1 Template — UI String Registry

| Screen / Component | String ID | Context | Tiếng Việt | Tiếng Anh | Ghi chú transcreation |
|--------------------|-----------|---------|------------|-----------|----------------------|
| Onboarding Step 1 | `onb_001` | Chào mừng | <<...>> | <<...>> | VI dùng "em" với học sinh, EN dùng "you" |
| Onboarding Step 2 | `onb_002` | Chọn môn | <<...>> | <<...>> | VI: "chọn" ngắn gọn, EN: "pick" thân mật |
| Button primary | `btn_001` | Bắt đầu | <<...>> | <<...>> | |
| Empty state | `empt_001`| Chưa có dữ liệu | <<...>> | <<...>> | VI: gợi ý hành động, EN: same |
| Error 404 | `err_404` | Không tìm thấy | <<...>> | <<...>> | |
| Error 500 | `err_500` | Lỗi server | <<...>> | <<...>> | |
| Success toast | `suc_001` | Hoàn thành | <<...>> | <<...>> | |
| Form validation | `val_001` | Email sai | <<...>> | <<...>> | Chỉ cách sửa cụ thể |
| Tooltip | `tip_001` | Giải thích | <<...>> | <<...>> | <= 15 từ mỗi ngôn ngữ |
| Notification | `noti_001`| Push noti | <<...>> | <<...>> | <= 40 ký tự cho mobile |

### C.2 Quy tắc viết UI strings song ngữ

1. **Không dịch từng từ** — dịch ý và cảm xúc.
2. **Giữ độ dài tương đương** — nếu VI ngắn hơn EN nhiều, cân nhắc viết lại.
3. **Không dùng slang/idion** — trừ khi cả 2 ngôn ngữ đều có tương đương.
4. **CTA phải mạnh và rõ** — "Bắt đầu" / "Start" hơn "Tiếp tục" / "Continue".
5. **Error phải có hành động** — không chỉ báo lỗi, phải nói làm gì tiếp.

---

## D. GLOSSARY SONG NGỮ (30–50 thuật ngữ)

> Thuật ngữ chuyên ngành phải được lock để mọi channel dùng nhất quán.

| # | Thuật ngữ gốc | Tiếng Việt | Tiếng Anh | Ngữ cảnh | Không được dùng (VI) | Không được dùng (EN) |
|---|---------------|------------|-----------|----------|----------------------|----------------------|
| 1 | <<...>> | <<...>> | <<...>> | <<...>> | <<...>> | <<...>> |
| 2 | <<...>> | <<...>> | <<...>> | <<...>> | <<...>> | <<...>> |
| ... | | | | | | |

---

## E. TRANSFORMATION RULES

### E.1 Structural differences VI vs EN

| Yếu tố | Tiếng Việt | Tiếng Anh | Ghi chú |
|--------|------------|-----------|---------|
| Subject pronoun | "bạn", "em", "anh/chị" | "you" | VI có hierarchy, EN không |
| Sentence length | Thường ngắn hơn | Thường dài hơn | Cân nhắc UI layout |
| Passive voice | Ít dùng | Dùng nhiều trong tech doc | DX copy: EN passive OK, VI active preferred |
| CTA directness | Có thể mềm mỏng hơn | Thẳng thắn hơn | Marketing: VI "Khám phá ngay", EN "Start now" |

### E.2 Transcreation checklist

Mỗi string/sentence được duyệt song ngữ phải pass:

- [ ] Ý nghĩa gốc được giữ (không mất message).
- [ ] Tone phù hợp với voice (file 06).
- [ ] Độ dài phù hợp với UI constraint.
- [ ] Không có từ bị cấm trong do/don't list (file 06).
- [ ] Có thể back-translate về ý gốc mà không lệch.

---

**Người duyệt:** __________     **Ngày duyệt:** <<YYYY-MM-DD>>
