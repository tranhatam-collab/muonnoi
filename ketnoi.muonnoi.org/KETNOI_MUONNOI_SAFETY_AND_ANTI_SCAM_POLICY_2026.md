# CHÍNH SÁCH AN TOÀN VÀ CHỐNG LỪA ĐẢO — KẾT NỐI MUÔN NƠI

Phiên bản: v0.1 — 2026  
Có hiệu lực khi: Founder phê duyệt  
Subdomain: ketnoi.muonnoi.org  
Nền tảng: Web, iOS App, Android App  
Ngôn ngữ: Tiếng Việt (chính), Tiếng Anh (song ngữ)

---

## 1. Cam kết an toàn

1.1. Kết Nối Muôn Nơi đặt an toàn người dùng làm ưu tiên P0. Mọi tính năng, thuật toán, và chính sách đều phải vượt qua đánh giá tác động an toàn trước khi triển khai.

1.2. Chúng tôi không biến con người thành lựa chọn tiêu dùng. Chúng tôi không khai thác cô đơn để bán premium. Chúng tôi không cho phép scammer sống dễ.

1.3. Nguyên tắc cốt lõi: **safety by design, trust by verification, accountability by traceability.**

---

## 2. Hệ thống phân loại mức độ rủi ro

2.1. Mọi báo cáo và cảnh báo được phân loại theo 4 mức:
- **Low:** spam nhẹ, tin nhắn không phù hợp, lỗi hiểu.
- **Medium:** quấy rối nhẹ, vi phạm nội quy, nghi ngờ fake profile.
- **High:** scam, quấy rối nghiêm trọng, lôi kéo off-platform, deepfake, tạo nhiều tài khoản.
- **Emergency:** đe dọa tính mạng, xâm hại trẻ em, bạo lực, CSAM, assault, sex trafficking.

2.2. SLA phản hồi:
- Low: 72 giờ.
- Medium: 48 giờ.
- High: 24 giờ.
- Emergency: 4 giờ (hoặc ngay lập tức nếu có tín hiệu nguy hiểm đến tính mạng).

---

## 3. Cấm tuyệt đối — An toàn trẻ vị thành niên

3.1. Không cho phép dưới 18 tham gia hẹn hò người lớn.

3.2. Biện pháp bắt buộc:
- Age gate tại đăng ký.
- ID/liveness check khi nghi ngờ tuổi.
- Child safety policy công khai.
- CSAM zero tolerance.
- Mandatory report flow: bất kỳ nhân viên hoặc hệ thống nào phát hiện nội dung liên quan trẻ em phải báo cáo ngay.
- Hợp tác đầy đủ với cơ quan chức năng.

3.3. Nếu phát hiện tài khoản trẻ vị thành niên: khóa ngay, xóa dữ liệu, báo cáo cơ quan chức năng.

---

## 4. Cấm tuyệt đối — Consent và quấy rối

4.1. Cấm hoàn toàn:
- Gửi ảnh nhạy cảm không được yêu cầu (unsolicited intimate images).
- Ép gặp mặt.
- Đe dọa, stalking, doxxing.
- Revenge porn.
- Sex trafficking, solicitation bất hợp pháp.
- Ép gửi thông tin cá nhân.
- Ép rời nền tảng để né an toàn.

4.2. Hệ thống cảnh báo người nhận nếu phát hiện tin nhắn chứa:
- Yêu cầu gửi ảnh nhạy cảm.
- Lời mời gặp riêng tại nhà lần đầu.
- Ngôn ngữ đe dọa, ép buộc.
- Lôi kéo sang Telegram/WhatsApp quá sớm.

---

## 5. Cấm tuyệt đối — Romance scam / tài chính

5.1. Cấm hoặc cảnh báo mạnh các hành vi:
- Xin tiền, vay tiền.
- Crypto/investment pitch.
- Gửi link ví/đầu tư.
- "Emergency money" (vé máy bay, viện phí, visa, quân đội).
- Gift card scam.
- USDT/chuyển khoản.
- Giả danh người nổi tiếng, doanh nhân, quân nhân, bác sĩ.
- "Em đang ở nước ngoài cần giúp đỡ."
- Chuyển sang Telegram/WhatsApp để nói chuyện riêng / giao dịch.

5.2. Cơ chế Money Request Shield:
- Nếu phát hiện câu kiểu: "cho mượn tiền", "đầu tư crypto", "gửi USDT", "emergency", "vé máy bay", "chuyển khoản" — hệ cảnh báo và có thể tạm giữ chat để user xác nhận.
- Cảnh báo nổi bật trên màn hình chat: "Cảnh báo an toàn: Bạn đang được yêu cầu chuyển tiền hoặc đầu tư. Hệ thống không bảo vệ giao dịch ngoài nền tảng."

5.3. Cơ chế Off-platform Warning:
- Nếu người kia kéo sang Telegram/WhatsApp quá sớm (ví dụ: trong 5 tin nhắn đầu tiên), app cảnh báo: "Bạn chưa đủ tín hiệu tin cậy để rời nền tảng. Hãy cẩn trọng với yêu cầu tiền, đầu tư hoặc thông tin cá nhân."

---

## 6. Fake profiles, bots, catfishing và AI content

6.1. Hệ thống xác minh nhiều tầng:
- Tier 0 — Guest: chỉ xem landing page.
- Tier 1 — Basic: email, phone, age confirmation.
- Tier 2 — Real Person: selfie/liveness, photo consistency, anti-deepfake basic.
- Tier 3 — Trusted Dating: ID optional, video intro, behavior history, safety agreement.
- Tier 4 — Community Verified: manual review, có thể tổ chức meetup được duyệt.

6.2. Rule engine chống AI image/video:
- Phát hiện AI-generated faces, deepfake, face swap, body swap, voice clone.
- Kiểm tra metadata ảnh/video.
- Liveness check bắt buộc cho xác minh Tier 2+.
- So sánh ảnh đại diện với ảnh xác minh.

6.3. Repeat offender detection:
- Device/phone risk signals (không dùng fingerprint xâm lấn, chỉ dùng signals mờ).
- Pattern recognition cho hành vi tạo tài khoản mới sau khi bị khóa.
- Cross-reference số điện thoại, email, thiết bị đã biết.
- Không cho phép người bị khóa vĩnh viễn vì scam/quấy rối tạo tài khoản mới.

---

## 7. Safe Date Mode

7.1. Safe Date Mode là tính năng hỗ trợ an toàn TÙY CHỌN (optional safety assistance feature). Không bắt buộc. Không phải dịch vụ bảo vệ cá nhân, emergency response, hay bảo hiểm an toàn.

7.2. Tính năng:
- Chọn địa điểm public (danh sách địa điểm công cộng được duyệt).
- Share date plan với contact tin cậy (không bắt buộc chia sẻ danh tính người hẹn, chỉ chia sẻ thời gian, địa điểm).
- Check-in/check-out: nhắc nhở người dùng xác nhận khi đến và khi rời đi.
- Panic shortcut: nút nhanh để log sự cố và thông báo cho contact tin cậy. KHÔNG PHẢI cuộc gọi 911 hay emergency response.
- After-date reflection: khảo sát ngắn về trải nghiệm, có tùy chọn report nhanh.
- Report nhanh sau gặp: nếu có sự cố, người dùng có thể report ngay từ màn hình Safe Date.

7.3. Disclaimer bắt buộc: "Safe Date Mode là công cụ hỗ trợ tự nguyện. Kết Nối Muôn Nơi không đảm bảo an toàn vật lý của bạn. Bạn chịu trách nhiệm về sự an toàn của chính mình. Nếu gặp nguy hiểm, hãy gọi cơ quan chức năng địa phương."

---

## 8. AI Safety Assistant

8.1. AI không được dùng để tán tỉnh thay người dùng. AI không được dùng để tạo người yêu ảo giả danh.

8.2. AI chỉ được phép hỗ trợ:
- Chỉnh profile cho rõ và chân thật.
- Gợi ý câu hỏi tử tế.
- Phát hiện red flags trong hội thoại (scam signals, ngôn ngữ đe dọa, yêu cầu tiền).
- Tóm tắt mismatch giữa intent hai bên.
- Nhắc consent/rules.
- Cảnh báo scam.

8.3. AI không được huấn luyện trên tin nhắn riêng tư của người dùng để tạo nội dung cho người khác. Mọi phân tích AI phải tuân thủ phân quyền và không lưu lại nội dung cá nhân.

---

## 9. Báo cáo, chặn, khiếu nại (Report, Block, Appeal)

9.1. Mọi người dùng có quyền:
- Report profile, message, gift abuse, scam.
- Block user.
- Appeal account action (nếu bị khóa/report sai).
- Request data deletion.
- Contact support.

9.2. Transparent Appeal:
- Nếu bị report/ban: có lý do phân loại rõ ràng.
- Có quy trình appeal với form rõ ràng.
- Có review SLA (không để user chờ mù mờ).
- Không ban vĩnh viễn mù mờ nếu không phải serious abuse (scam, quấy rối, xâm hại, CSAM).
- Nếu ban vĩnh viễn vì serious abuse, không cho appeal.

9.3. Repeat offender tracking (nội bộ):
- Lịch sử report không public.
- Chỉ dùng nội bộ để đánh giá risk và quyết định hành động tài khoản.
- Không hiển thị "số lần bị report" lên hồ sơ.

---

## 10. Bảo mật riêng tư và dữ liệu nhạy cảm

10.1. Không public vị trí chính xác. Chỉ hiển thị vùng/thành phố.

10.2. Không public phone/email. Không cho phép user tự public số điện thoại/email lên profile (có thể ẩn danh qua nền tảng).

10.3. Không tracking ads. Không bán dữ liệu nhạy cảm.

10.4. Tin nhắn retention ngắn (90 ngày nếu không có report), mã hóa, có thể export/delete rõ.

10.5. Không lưu dữ liệu quá mức. Chỉ thu thập và giữ những gì cần thiết.

---

## 11. Quy trình xử lý khi phát hiện vi phạm

11.1. Bước 1: Tự động phát hiện (rule engine, AI safety assistant).
11.2. Bước 2: Tạm giữ nội dung/chat nếu có dấu hiệu nghiêm trọng.
11.3. Bước 3: Đánh giá bởi đội kiểm duyệt có phân quyền.
11.4. Bước 4: Hành động:
- Cảnh báo user.
- Giới hạn tính năng.
- Khóa tài khoản tạm thời.
- Khóa tài khoản vĩnh viễn.
- Lưu bằng chứng.
- Báo cáo cơ quan chức năng nếu cần.

11.5. Bước 5: Thông báo cho người bị ảnh hưởng (nếu có risk an toàn cá nhân).

---

## 12. Không nên có gì trên nền tảng

12.1. Không có:
- Hot ranking, body score, public desirability score.
- AI girlfriend/boyfriend giả.
- Unlock hidden likes mập mờ.
- Pay to boost quá mạnh.
- Read receipt ép trả lời.
- Public follower count.
- Crypto/investment dating rooms.
- Exact distance.
- Screenshot không cảnh báo (tuỳ quy định pháp luật địa phương, có thể có cảnh báo nhẹ).

---

## 13. Tuân thủ pháp luật và hợp tác

13.1. Chính sách này được thiết kế phù hợp với:
- GDPR / UK GDPR.
- EU Digital Services Act.
- UK Online Safety Act.
- CCPA/CPRA.
- COPPA (dù app 18+).
- Luật an ninh mạng và bảo vệ dữ liệu cá nhân Việt Nam.
- Quy định App Store / Google Play về dating và user-generated content.

13.2. Chúng tôi hợp tác đầy đủ với cơ quan chức năng trong các vụ việc liên quan an toàn, scam, xâm hại, và tội phạm mạng.

---

## 14. Liên hệ an toàn

- Email an toàn: safety@muonnoi.org
- Email báo cáo khẩn cấp: emergency@muonnoi.org
- Email CSAM/child safety: csem@muonnoi.org
- Hỗ trợ: support@muonnoi.org

---

**Kết Nối Muôn Nơi**  
Gặp người thật. Hiểu nhau thật. Tôn trọng ranh giới thật.  
Meet real people. Build real trust. Respect real boundaries.
