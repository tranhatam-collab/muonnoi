---
quest_id: "quest-003-vuon-dau-tay"
system: "dulich"
slug: "vuon-dau-tay"
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

# Vườn Dâu Tây — Hái, Ăn, Hỏi

## Quest Identity

| Field | Value |
|-------|-------|
| **title_vi** | Vườn Dâu Tây — Hái, Ăn, Hỏi |
| **title_en** | Strawberry Farm — Pick, Eat, Ask |
| **subtitle_vi** | Vào vườn dâu nhà nông, hái dây chín đỏ, hỏi về cách trồng, và ăn tại chỗ 3 quả vừa hái |
| **subtitle_en** | Enter a farmer's strawberry garden, pick ripe red berries, ask about growing methods, and eat 3 freshly picked berries on site |
| **intent** | Quest này tồn tại để người tham gia hiểu nguồn gốc thực phẩm — không phải mua dâu tây ở siêu thị mà là hái từ cây, nghe người trồng kể về đất, nước, và thời tiết Đà Lạt. |
| **who_fits** | Bạn tò mò về nông nghiệp đô thị. Bạn thích ăn trái cây vừa hái. Bạn có thể cúi xuống 30 phút để hái dâu. |
| **who_not_fit** | Bạn dị ứng dâu tây hoặc phấn hoa. Bạn không chịu được nắng trực tiếp 30 phút. Bạn muốn chỉ mua dâu đóng hộp rồi về. |

## Logistics

| Field | Value |
|-------|-------|
| **duration_min** | 120 |
| **duration_display** | 2 giờ (8:00 — 10:00) |
| **difficulty** | easy |
| **min_age** | 7 |
| **max_people** | 6 |
| **group_type** | family |
| **price_vnd** | 80000 |
| **price_note** | Bao gồm: vé vào vườn + 200g dâu tây hái tại chỗ + 1 ly dâu tây xay. Không bao gồm: dâu mang về thêm. |
| **best_time** | Tháng 11–4 (mùa dâu) |
| **weather_dependency** | yes — Nếu mưa lớn, vườn dâu đóng cửa vì đường lầy. Host xác nhận tối hôm trước. |
| **accessibility** | limited — Đường đất trong vườn, hẹp, có thể lầy. Không dành cho xe lăn. |

## Proof Requirements

| Field | Value |
|-------|-------|
| **proof_types** | `["photo", "text"]` |
| **proof_description** | Chụp 1 ảnh tay bạn đang hái hoặc cầm dâu tây chín đỏ. Viết 1 câu bạn hỏi người trồng và câu trả lời bạn nhớ nhất. |
| **proof_example** | Ảnh: bàn tay có vết đất nhẹ, cầm 3 quả dâu đỏ, lá xanh phía sau. Text: "Tôi hỏi: 'Sao dâu Đà Lạt ngọt hơn dâu nhập khẩu?' Bà trả lời: 'Vì đất ở đây lạnh, dâu chín chậm, đường tích lũy từ từ.'" |
| **proof_invalid_example** | Ảnh chụp dâu tây đóng hộp siêu thị. Text: "Dâu ngon." (không có tương tác với người trồng). |
| **gps_required** | true |
| **gps_radius_m** | 100 |
| **gps_target_lat** | 11.9175 |
| **gps_target_lng** | 108.4125 |
| **gps_target_name** | "Vườn dâu tây Vân Thanh" |

## Host Role

| Field | Value |
|-------|-------|
| **host_role_summary** | Liên lạc trước với chủ vườn, giới thiệu về quy trình trồng dâu, phiên dịch khi user hỏi chủ vườn. |
| **host_prep_required** | true — Đặt chỗ trước 1 ngày, xác nhận dâu còn chín, mang theo nước uống và khăn giấy. |
| **host_language** | vi+en |
| **host_meet_location** | "Cổng vườn dâu tây Vân Thanh, đường Tú Xương, phường 7. Tọa độ: 11.9170, 108.4120" |
| **host_meet_time** | "08:00 sáng" |

## Safety Notes

| Field | Value |
|-------|-------|
| **safety_level** | low |
| **safety_notes** | Nắng trực tiếp trong nhà kính có thể nóng. Mang nón. Phân bón hữu cơ — không đụng vào bồn phân. Host nhắc user không ăn dâu chưa rửa. |
| **required_gear** | `["nón", "nước uống", "khăn giấy", "giày có thể dính đất"]` |

## Story Card (Optional)

| Field | Value |
|-------|-------|
| **story_title** | "Tôi hiểu tại sao dâu Đà Lạt đắt hơn dâu Trung Quốc" |
| **story_excerpt** | "Người trồng dâu ở đây không dùng thuốc kích thích. Họ chờ dâu chín tự nhiên. Một cây dâu ở đây cho ít quả hơn cây ở vùng ấm." |

## Bilingual Content

**EN Title:** Strawberry Farm — Pick, Eat, Ask
**EN Subtitle:** Enter a farmer's strawberry garden, pick ripe red berries, ask about growing methods, and eat 3 freshly picked berries on site
**EN Intent:** This quest exists so participants understand food origins — not buying strawberries from a supermarket but picking from a plant, hearing the grower talk about soil, water, and Dalat weather.

---

> **Quest locked 2026-06-05. Author: Founder. Reviewer: Founder.**
