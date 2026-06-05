# AUDIT TUÂN THỦ PHÁP LÝ CROSS-BORDER — KẾT NỐI MUÔN NƠI

**Người thực hiện:** Chuyên gia tư vấn pháp lý độc lập
**Ngày audit:** 05/06/2026
**Mức độ rủi ro:** Rất cao (3/10)
**Đặc thù:** Dating app chịu áp lực pháp lý cao ở mọi jurisdiction

---

## 1. VIỆT NAM — RỦI RO RẤT CAO

| Luật/Văn bản | Yêu cầu | Rủi ro với Ketnoi | Giảm thiểu |
|---|---|---|---|
| **Luật An ninh mạng 2018** | Data localization cho PII người VN | DB Global có user VN = vi phạm nếu không replicate về VN | Cell VN lưu 100% PII VN. Global cell không có PII VN. |
| **Nghị định 13/2023 (PDPL)** | DPO, DPIA, cross-border transfer mechanism | Biometric + orientation = DPIA bắt buộc. DPO khi >100K data subjects. | Bổ sung DPIA vào Phase 0. Thuê DPO outsource. |
| **Decree 72/2013 (MXH)** | Dating app có chat + community = có thể là "mạng xã hội" | Nếu phân loại là MXH: cần giấy phép, lưu data 2 năm, kiểm duyệt nội dung | Tư vấn Bộ TT&TT về phân loại. Chuẩn bị hồ sơ xin giấy phép MXH. |
| **Luật Phòng chống mại dâm** | Gift economy + date arrangement = rủi ro hiểu nhầm | Nếu gift đổi cash hoặc nền tảng bị lợi dụng cho escort | **No cash-out.** Gift chỉ là sticker/badge. No arrangement feature. |
| **Luật Hôn nhân & Gia đình** | Không thúc đẩy vi phạm đạo đức hôn nhân | Polyamory, affair features có thể bị phản đối | Position rõ: "kết nối nghiêm túc cho người độc thân." Không hỗ trợ ngoại tình. |
| **Điều 120, 125, 127 Luật Doanh nghiệp 2020** | Chào bán riêng lẻ, khóa cổ phần sáng lập | Nếu gọi vốn không đúng thủ tục: bị coi là chào bán chứng khoán trái phép | Dùng private placement, không quảng cáo công khai, giới hạn 100 NĐT không chuyên. |

---

## 2. UNITED KINGDOM — RỦI RO RẤT CAO

| Luật | Yêu cầu | Rủi ro | Giảm thiểu |
|---|---|---|---|
| **Online Safety Act 2023** | U2U services: risk assessment, age verification, chống illegal content (revenge porn, harassment) | Dating app = U2U service. Penalty: 10% global turnover hoặc 18M GBP. | Đăng ký với Ofcom. Làm risk assessment. Age verification robust (HEAA). |
| **Data Protection Act 2018 / UK GDPR** | Special category data (Article 9): sexual orientation, biometric | Dating data = special category. Cần explicit consent, DPIA. | Legal basis: explicit consent. Không dùng legitimate interest. |
| **Computer Misuse Act 1990** | Deepfake, non-consensual intimate images | User upload deepfake của người khác = criminal offense | Scan upload. Hash matching. Report channel. |

---

## 3. EUROPEAN UNION — RỦI RO CAO

| Luật | Yêu cầu | Rủi ro | Giảm thiểu |
|---|---|---|---|
| **Digital Services Act (DSA)** | VLOP (>45M EU users) hoặc smaller platforms | Nếu scale >45M EU users: compliance nặng nề. Nhỏ hơn: vẫn cần transparency. | Design cho DSA từ đầu. Legal counsel EU. |
| **GDPR** | Special category data, explicit consent, DPO, breach notification 72h | Fine: 4% global turnover hoặc 20M EUR. | DPO outsource. DPIA. Breach response plan. |
| **AI Act** | AI Safety Assistant có thể là "high-risk AI" nếu quyết định về người dùng | Nếu AI quyết định ban user hoặc matching bias → high-risk. | AI chỉ hỗ trợ, không tự động quyết định nghiêm trọng. Human-in-the-loop. |

---

## 4. UNITED STATES — RỦI RO RẤT CAO

| Luật | Yêu cầu | Rủi ro | Giảm thiểu |
|---|---|---|---|
| **FOSTA-SESTA (2018)** | Nền tảng facilitating prostitution = criminal liability, mất Section 230 shield | Dating app bị lợi dụng cho escort/sugar dating → platform liability | Zero tolerance. Moderation. No features facilitating transactional sex. |
| **Section 230** | Immunity cho UGC, ngoại lệ: CSAM, federal crime | Moderation +CSAM = mandatory report. | NCMEC reporting. PhotoDNA. |
| **State laws** | California Age-Appropriate Design Code, various biometric laws | CCPA, BIPA (Illinois), CADC. | Legal counsel US. Age design code. Biometric consent. |

---

## 5. CROSS-BORDER DATA TRANSFER

| Cặp | Cơ chế | Trạng thái | Hành động |
|---|---|---|---|
| VN → Global | PDPL: cần mechanism (SCC, BCR, hoặc approval Bộ CA) | Chưa có | Chuẩn bị SCC + DPIA. Không chuyển PII VN ra nước ngoài mặc định. |
| EU → VN | GDPR: Adequacy decision (VN không có) → SCC + TIA | Chưa có | SCC + Transfer Impact Assessment. |
| UK → VN | UK GDPR: IDTA (International Data Transfer Agreement) | Chưa có | IDTA + TIA. |
| US → EU | EU-US Data Privacy Framework / SCC | N/A (không chuyển từ US) | Nếu có user EU trên US infra → cần DPF hoặc SCC. |

---

## 6. SPECIAL CATEGORY DATA (GDPR Article 9)

Dating app xử lý nhiều loại **Special Category Data**:

| Loại data | Phân loại GDPR | Yêu cầu |
|---|---|---|
| Biometric (selfie, liveness) | Article 9(1) | Explicit consent |
| Sexual orientation / relationship intent | Article 9(1) | Explicit consent |
| Mental health / compatibility (anxiety, attachment) | Có thể là health data | Explicit consent |
| Location history | Không phải Article 9 nhưng nhạy cảm | Consent hoặc legitimate interest (giới hạn) |

**Không được dùng:**
- "Legitimate interest" làm legal basis cho special category
- "Contract" cũng không đủ cho biometric

**Phải dùng:**
- **Explicit consent** (Article 9(2)(a)) — tick box riêng, không pre-ticked, có thể withdraw

---

## 7. CONSENT FLOW ĐỀ XUẤT

```
User đăng ký
    ↓
[Screen 1] Thông báo data categories cần thu thập
    ↓
[Screen 2] Explicit consent cho biometric (tách riêng)
    ↓
[Screen 3] Explicit consent cho matching data (tách riêng)
    ↓
[Screen 4] Explicit consent cho marketing (opt-in, không bắt buộc)
    ↓
[Screen 5] Consent log với timestamp, IP, version của policy
```

**Không được:** Bundled consent ("bằng việc sử dụng app bạn đồng ý với mọi thứ"). Mỗi purpose cần consent riêng biệt.

---

## 8. ACTION ITEMS — REGULATORY

| # | Hành động | Owner | Deadline |
|---|---|---|---|
| 1 | Legal memo VN: phân loại dating app (MXH hay không?) | VN Counsel | 2 tuần |
| 2 | OSA risk assessment (UK) | UK Counsel | 2 tuần |
| 3 | PDPL TIA dossier (Bộ Công an) | VN Counsel | 1 tháng |
| 4 | GDPR compliance memo | EU Counsel | 2 tuần |
| 5 | FOSTA-SESTA safe harbor memo | US Counsel | 2 tuần |
| 6 | DPIA template cho dating app | Privacy counsel | 2 tuần |
| 7 | Cross-border transfer SCC | Legal | 1 tháng |
| 8 | Privacy Policy v0.1 (GDPR + PDPL) | Legal + Product | 2 tuần |
| 9 | Terms of Service v0.1 (FOSTA-SESTA safe) | Legal + Product | 2 tuần |

---

**Kết Nối Muôn Nơi**  
Regulatory Compliance Audit — Dating app = high-risk regulatory target ở mọi jurisdiction.
