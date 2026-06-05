# QUY TRÌNH DỊCH THUẬT PHÁP LÝ — KẾT NỐI MUÔN NƠI

Phiên bản: v0.1 — 2026  
Trạng thái: Draft Proposed — Chờ Founder khóa  
Áp dụng cho: Terms of Service, Privacy Policy, Safety Policy, Gift Policy, Investment Disclosures

---

## 1. Nguyên tắc vàng

| # | Quy tắc | Giải thích |
|---|---|---|
| 1 | **Tiếng Việt là bản gốc pháp lý** | Mọi tranh chấp, hiểu lầm, giải thích cuối cùng đều dựa trên bản tiếng Việt. |
| 2 | **Không dùng dịch máy thô** | Terms, Privacy, Safety, Investment không được dịch bằng Google Translate, DeepL thô. Phải qua biên tập pháp lý-ngữ nghĩa. |
| 3 | **6 ngôn ngữ song song từ đầu** | en, zh-Hans, ko, ja, fr, es phải có bản draft từ giai đoạn dev, không để sau launch. |
| 4 | **Legal reviewer phải duyệt từng bản** | Mỗi bản dịch phải được legal counsel hoặc biên tập viên pháp lý duyệt trước publish. |
| 5 | **Hreflang đầy đủ** | Mỗi trang phải có hreflang đến tất cả các ngôn ngữ khác + canonical + x-default. |

---

## 2. Quy trình dịch thuật (Workflow)

```
Bản gốc tiếng Việt
    │
    ├── Dịch sang en (Native legal translator / US counsel review)
    ├── Dịch sang zh-Hans (Native legal translator / CN counsel review)
    ├── Dịch sang ko (Native legal translator / KR counsel review)
    ├── Dịch sang ja (Native legal translator / JP counsel review)
    ├── Dịch sang fr (Native legal translator / FR counsel review)
    └── Dịch sang es (Native legal translator / ES counsel review)
         │
         └── Cross-review: đảm bảo consistency về thuật ngữ pháp lý
              │
              └── Legal final review (Founder + Legal Counsel)
                   │
                   └── Publish với hreflang + canonical
```

---

## 3. Thuật ngữ cốt lõi (Glossary)

| Thuật ngữ tiếng Việt | English | 简体中文 | 한국어 | 日本語 | Français | Español |
|---|---|---|---|---|---|---|
| Điều khoản dịch vụ | Terms of Service | 服务条款 | 이용약관 | 利用規約 | Conditions d'utilisation | Términos de servicio |
| Chính sách bảo mật | Privacy Policy | 隐私政策 | 개인정보처리방침 | プライバシーポリシー | Politique de confidentialité | Política de privacidad |
| Chính sách an toàn | Safety Policy | 安全政策 | 안전 정책 | 安全性ポリシー | Politique de sécurité | Política de seguridad |
| Xác minh danh tính | Identity Verification | 身份验证 | 신원 확인 | 本人確認 | Vérification d'identité | Verificación de identidad |
| Nền tảng | Platform | 平台 | 플랫폼 | プラットフォーム | Plateforme | Plataforma |
| Không phải dating app | Not a dating app | 不是交友软件 | 데이팅 앱이 아님 | デーティングアプリではない | Pas une app de rencontre | No es una app de citas |
| Điểm nội bộ | Internal Points | 内部积分 | 내부 포인트 | 内部ポイント | Points internes | Puntos internos |
| Safe Date Mode | Safe Date Mode | 安全约会模式 | 안전 데이트 모드 | セーフデートモード | Mode Safe Date | Modo Safe Date |
| Tín nhiệm cộng đồng | Community Trust | 社区信任 | 커뮤니티 신뢰 | コミュニティ信頼 | Confiance communautaire | Confianza comunitaria |
| Cấm deepfake | Deepfake prohibited | 禁止深伪 | 딥페이크 금지 | ディープフェイク禁止 | Deepfake interdit | Deepfake prohibido |

---

## 4. Kiểm tra chất lượng (QA Checklist)

- [ ] Bản tiếng Việt đã được Founder khóa.
- [ ] Mỗi bản dịch có ít nhất 1 native speaker review.
- [ ] Thuật ngữ pháp lý nhất quán qua các ngôn ngữ.
- [ ] Không có nghĩa bị méo mó so với bản gốc.
- [ ] Hreflang đầy đủ trên mọi trang.
- [ ] Canonical đúng.
- [ ] x-default đặt là en.

---

**Kết Nối Muôn Nơi**  
Gặp người thật. Hiểu nhau thật. Tôn trọng ranh giới thật.
