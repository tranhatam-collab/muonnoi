---
quest_id: "quest-005-doi-che-cau-dat"
system: "dulich"
slug: "doi-che-cau-dat"
city: "Đà Lạt"
region: "Lâm Đồng"
language: "both"
created_at: "2026-06-05T00:00:00Z"
updated_at: "2026-06-05T00:00:00Z"
version: "1.0"
author_id: "founder"
reviewer_id: "founder"
status: "active"
---

# Đồi Chè Cầu Đất — Thiền, Trà, Nhìn Xa

## Quest Identity

| Field | Value |
|-------|-------|
| **title_vi** | Đồi Chè Cầu Đất — Thiền, Trà, Nhìn Xa |
| **title_en** | Cau Dat Tea Hill — Meditate, Drink Tea, Look Far |
| **subtitle_vi** | Ngồi thiền 15 phút trên đồi chè, uống trà xanh vừa pha, nói chuyện với người hái chè về cuộc sống trên đồi cao 1.650m |
| **subtitle_en** | Sit in meditation for 15 minutes on a tea hill, drink freshly brewed green tea, talk to a tea picker about life at 1,650m altitude |
| **intent** | Quest này tồn tại để người tham gia chậm lại — không đi, không chụp, chỉ ngồi, uống, và lắng nghe. Cầu Đất là nơi yên tĩnh nhất trong 10 quest của pilot. |
| **who_fits** | Bạn chấp nhận ngồi yên 15 phút không làm gì. Bạn uống được trà đắng. Bạn tò mò về đời sống người lao động nông thôn. |
| **who_not_fit** | Bạn cần liên tục di chuyển. Bạn không uống được trà (caffeine/lysin). Bạn cần Wi-Fi trong suốt quest. |

## Logistics

| Field | Value |
|-------|-------|
| **duration_min** | 210 |
| **duration_display** | 3.5 giờ (9:00 — 12:30) |
| **difficulty** | easy |
| **min_age** | 15 |
| **max_people** | 4 |
| **group_type** | small_group |
| **price_vnd** | 100000 |
| **price_note** | Bao gồm: xe đưa đón từ trung tâm Đà Lạt đến Cầu Đất + 2 ly trà xanh + 1 phần bánh mì nướng mật ong. Không bao gồm: trà mang về, đồ uống thêm. |
| **best_time** | Tháng 3–5, 9–11 (sáng sớm, sương còn trên chè) |
| **weather_dependency** | yes — Nếu sương mù dày đặc, không nhìn thấy đồi, quest vẫn diễn ra nhưng bỏ phần "nhìn xa". Nếu mưa lớn, hoãn. |
| **accessibility** | limited — Đường nhựa đến đồi chè nhưng đoạn cuối dốc. Ngồi thiền trên bãi cỏ, có thể ướt sương. |

## Proof Requirements

| Field | Value |
|-------|-------|
| **proof_types** | `["photo", "text"]` |
| **proof_description** | Chụp 1 ảnh chén trà hoặc tách trà trên tay. Viết 3 câu về điều bạn nghĩ trong 15 phút thiền hoặc điều người hái chè kể cho bạn. |
| **proof_example** | Ảnh: tách trà sứ trắng trên bàn gỗ, phía sau là đồi chè xanh mướt. Text: "Người hái chè nói chị đi bộ 2km từ nhà lên đồi mỗi sáng. Tôi không thể tưởng tượng làm điều đó 300 ngày một năm." |
| **proof_invalid_example** | Ảnh chụp từ xe ô tô nhìn ra đồi chè. Text: "Chè đẹp, trà ngon." (không có tương tác với người hái chè hoặc phản chiếu cá nhân). |
| **gps_required** | true |
| **gps_radius_m** | 300 |
| **gps_target_lat** | 11.8480 |
| **gps_target_lng** | 108.3890 |
| **gps_target_name** | "Đồi Chè Cầu Đất" |

## Host Role

| Field | Value |
|-------|-------|
| **host_role_summary** | Lái xe đưa đón, giới thiệu về lịch sử đồi chè Cầu Đất, dẫn đến người hái chè để user hỏi, chuẩn bị chỗ ngồi thiền và trà. |
| **host_prep_required** | true — Đặt trà + bánh trước 1 ngày, chuẩn bị thảm ngồi, xác nhận thời tiết, hẹn trước với người hái chè. |
| **host_language** | vi+en |
| **host_meet_location** | "Cổng khách sạn/ngôi nhà user ở trung tâm Đà Lạt, hoặc điểm hẹn tại Quảng trường Lâm Viên. Tọa độ: tùy user." |
| **host_meet_time** | "09:00 sáng" |

## Safety Notes

| Field | Value |
|-------|-------|
| **safety_level** | low |
| **safety_notes** | Đường lên Cầu Đất dốc, xe host lái chậm. Bãi cỏ sương có thể trơn. Ngồi thiền không bắt buộc — user có thể ngồi yên lặng nếu không quen thiền. Host có xe để đưa user về nếu mệt. |
| **required_gear** | `["áo khoác (Cầu Đất lạnh hơn trung tâm 3–5 độ)", "nón", "nước uống"]` |

## Story Card (Optional)

| Field | Value |
|-------|-------|
| **story_title** | "15 phút không nghĩ gì trên đồi chè" |
| **story_excerpt** | "Tôi không biết thiền. Nhưng ngồi yên 15 phút, nhìn tay người hái chè nhặt từng lá một, tôi quên mất điện thoại trong túi." |

## Bilingual Content

**EN Title:** Cau Dat Tea Hill — Meditate, Drink Tea, Look Far
**EN Subtitle:** Sit in meditation for 15 minutes on a tea hill, drink freshly brewed green tea, talk to a tea picker about life at 1,650m altitude
**EN Intent:** This quest exists so participants slow down — not walk, not shoot photos, just sit, drink, and listen. Cau Dat is the quietest place in the 10-quest pilot.

---

> **Quest locked 2026-06-05. Author: Founder. Reviewer: Founder.**
