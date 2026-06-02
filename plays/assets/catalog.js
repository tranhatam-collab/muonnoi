/*
 * Muôn Nơi · plays.muonnoi.org — Danh mục game (catalog) V2
 * --------------------------------------------------------
 * Cấu trúc theo PLAN-V2: 5 TẦNG game + 7 NHÓM + nhóm IP mới (34-40).
 * Tiền tệ giữ tên "Muôn Điểm" (mã MĐ) theo quyết định founder.
 *
 * status: 'live'    = đã build, chơi được ngay (gồm cả nguyên mẫu Tier cao)
 *         'wave1'   = thuộc 33 game công bố giai đoạn 1, đang phát triển
 *         'newip'   = game 34-40 (nhóm IP mới, Phase 2)
 *         'roadmap' = lộ trình tới 100
 *
 * Dùng được cả ở trình duyệt (window.MN_CATALOG) lẫn Workers/Node (module.exports).
 */
(function (root) {
  const CURRENCY = { code: 'MĐ', name: 'Muôn Điểm', en: 'Muon Diem Points' };

  // 5 tầng game (xem PLAN-V2 §3)
  const TIERS = {
    1: { vi: 'Micro Games',        en: 'Micro Games',        note: '3–5 phút · arcade HTML5' },
    2: { vi: 'Life Games',         en: 'Life Games',         note: '10–30 phút · game đời sống' },
    3: { vi: 'Social Games',       en: 'Social Games',       note: 'chơi cùng người thật' },
    4: { vi: 'World Games',        en: 'World Games',        note: 'đi ra thế giới thật' },
    5: { vi: 'Civilization Games', en: 'Civilization Games', note: 'kiến tạo cộng đồng thật' },
  };

  // 7 nhóm + micro (bonus) + newip
  const GROUPS = {
    mind:        { vi: 'Mind Games',       icon: '🧠' },
    creator:     { vi: 'Creator Games',    icon: '🎨' },
    social:      { vi: 'Social Games',     icon: '🤝' },
    life:        { vi: 'Life Games',       icon: '🌱' },
    exploration: { vi: 'Exploration',      icon: '🧭' },
    work:        { vi: 'Work Games',       icon: '💼' },
    exclusive:   { vi: 'Muônnoi Exclusive', icon: '🌌' },
    newip:       { vi: 'IP Mới',           icon: '✨' },
    micro:       { vi: 'Micro (bonus)',    icon: '⚡' },
  };

  // ===== 33 GAME GIAI ĐOẠN 1 (7 nhóm) =====
  const PHASE1 = [
    // NHÓM 1 · MIND
    { id:'me-cung-muon-loi', n:'Mê Cung Vô Tận', en:'Infinite Labyrinth', group:'mind', tier:1, status:'live', file:'games/me-cung-muon-loi.html',
      d:'Không mê cung nào giống nhau. Mỗi lối ra mở ra mê cung lớn hơn — vô tận.' },
    { id:'kien-truc-tri-nho', n:'Kiến Trúc Trí Nhớ', en:'Memory Architect', group:'mind', tier:1, status:'wave1' },
    { id:'thuo-san-quy-luat', n:'Thợ Săn Quy Luật', en:'Pattern Hunter', group:'mind', tier:1, status:'live', file:'games/thuo-san-quy-luat.html',
      d:'Tìm quy luật ẩn rồi đoán phần tử kế tiếp. Luật khó dần — không có đáp án cuối.' },
    { id:'du-doan-tuong-lai', n:'Dự Đoán Tương Lai', en:'Future Prediction', group:'mind', tier:2, status:'wave1' },
    { id:'cay-quyet-dinh', n:'Cây Quyết Định', en:'Decision Tree', group:'mind', tier:2, status:'wave1',
      d:'Ra quyết định liên hoàn — không có đáp án tuyệt đối.' },

    // NHÓM 2 · CREATOR
    { id:'truyen-mot-phut', n:'Truyện Một Phút', en:'One Minute Story', group:'creator', tier:2, status:'wave1' },
    { id:'kien-tao-the-gioi', n:'Kiến Tạo Thế Giới', en:'Infinite World Builder', group:'creator', tier:2, status:'wave1' },
    { id:'tien-hoa-nhan-vat', n:'Tiến Hóa Nhân Vật', en:'Character Evolution', group:'creator', tier:2, status:'wave1' },
    { id:'thu-thach-thiet-ke', n:'Thử Thách Thiết Kế', en:'Design Challenge', group:'creator', tier:2, status:'wave1' },
    { id:'dong-sang-tao-ai', n:'Đồng Sáng Tạo Cùng AI', en:'AI Co-Creator', group:'creator', tier:2, status:'wave1' },

    // NHÓM 3 · SOCIAL
    { id:'nhiem-vu-nguoi-la', n:'Nhiệm Vụ Người Lạ', en:'Stranger Mission', group:'social', tier:3, status:'wave1' },
    { id:'ban-toan-cau', n:'Bạn Toàn Cầu', en:'Global Friend', group:'social', tier:3, status:'wave1' },
    { id:'nhiem-vu-gia-dinh', n:'Nhiệm Vụ Gia Đình', en:'Family Quest', group:'social', tier:3, status:'wave1', eco:'family.muonnoi.org' },
    { id:'thu-thach-cong-dong', n:'Thử Thách Cộng Đồng', en:'Community Challenge', group:'social', tier:3, status:'wave1', eco:'nhachung.muonnoi.org' },
    { id:'chuoi-tu-te', n:'Chuỗi Tử Tế', en:'Kindness Chain', group:'social', tier:3, status:'live', file:'games/chuoi-tu-te.html',
      d:'Nguyên mẫu Tier 3: mỗi mắt xích là một việc tử tế THẬT bạn làm ngoài đời, rồi truyền tiếp.' },

    // NHÓM 4 · LIFE
    { id:'hoc-dieu-moi', n:'Học Điều Mới', en:'Learn Something', group:'life', tier:2, status:'wave1', eco:'hoctap.muonnoi.org' },
    { id:'doc-mot-cuon-sach', n:'Đọc Một Cuốn Sách', en:'Read A Book', group:'life', tier:2, status:'wave1' },
    { id:'thu-thach-suc-khoe', n:'Thử Thách Sức Khỏe', en:'Health Challenge', group:'life', tier:2, status:'wave1' },
    { id:'phan-tinh-moi-ngay', n:'Phản Tỉnh Mỗi Ngày', en:'Daily Reflection', group:'life', tier:2, status:'wave1' },
    { id:'day-mot-nguoi', n:'Dạy Một Người', en:'Teach Someone', group:'life', tier:2, status:'wave1', eco:'hoctap.muonnoi.org' },

    // NHÓM 5 · EXPLORATION
    { id:'da-lat-an-giau', n:'Đà Lạt Ẩn Giấu', en:'Hidden Đà Lạt', group:'exploration', tier:4, status:'wave1' },
    { id:'hanh-trinh-viet-nam', n:'Hành Trình Việt Nam', en:'Vietnam Quest', group:'exploration', tier:4, status:'wave1' },
    { id:'ho-chieu-the-gioi', n:'Hộ Chiếu Thế Giới', en:'World Passport', group:'exploration', tier:4, status:'wave1' },
    { id:'nguoi-hung-dia-phuong', n:'Người Hùng Địa Phương', en:'Local Hero', group:'exploration', tier:4, status:'wave1' },
    { id:'kham-pha-van-hoa', n:'Nhà Khám Phá Văn Hóa', en:'Cultural Explorer', group:'exploration', tier:4, status:'wave1' },

    // NHÓM 6 · WORK
    { id:'thu-thach-khoi-nghiep', n:'Thử Thách Khởi Nghiệp', en:'Startup Challenge', group:'work', tier:3, status:'wave1', eco:'lamviec.muonnoi.org' },
    { id:'mo-phong-doanh-nghiep', n:'Mô Phỏng Doanh Nghiệp', en:'Business Simulator', group:'work', tier:2, status:'wave1' },
    { id:'hanh-trinh-nha-dau-tu', n:'Hành Trình Nhà Đầu Tư', en:'Investor Journey', group:'work', tier:2, status:'wave1' },
    { id:'xay-dung-doi-nhom', n:'Xây Dựng Đội Nhóm', en:'Team Builder', group:'work', tier:3, status:'wave1' },
    { id:'tao-du-an', n:'Tạo Dự Án', en:'Mission Builder', group:'work', tier:3, status:'wave1' },

    // NHÓM 7 · MUÔNNOI EXCLUSIVE
    { id:'ban-do-cuoc-doi', n:'Bản Đồ Cuộc Đời', en:'Life Map', group:'exclusive', tier:5, status:'wave1',
      d:'Tự xây mục tiêu · kỹ năng · sức khỏe · gia đình · tài chính; AI tạo bản đồ phát triển.' },
    { id:'ban-than-tuong-lai', n:'Bản Thân Tương Lai', en:'Future Self', group:'exclusive', tier:5, status:'wave1',
      d:'Gặp chính mình 1 / 5 / 10 năm tới — AI mô phỏng.' },
    { id:'kien-tao-van-minh', n:'Kiến Tạo Văn Minh', en:'Civilization Builder', group:'exclusive', tier:5, status:'wave1',
      d:'Không xây thành phố ảo — xây cộng đồng · trường học · doanh nghiệp thật.' },
  ];

  // ===== GAME 34-40 · NHÓM IP MỚI =====
  const NEW_IP = [
    { id:'thu-vien-song', n:'Thư Viện Sống', en:'Human Library', group:'newip', tier:3, status:'newip',
      d:'Mỗi người là một cuốn sách. AI ghép người có câu chuyện phù hợp.' },
    { id:'mot-trieu-tro-chuyen', n:'Một Triệu Cuộc Trò Chuyện', en:'One Million Conversations', group:'newip', tier:3, status:'newip' },
    { id:'gia-dinh-toan-cau', n:'Gia Đình Toàn Cầu', en:'World Family', group:'newip', tier:4, status:'newip', eco:'family.muonnoi.org' },
    { id:'tin-chi-cuoc-song', n:'Tín Chỉ Cuộc Sống', en:'Life Credits', group:'newip', tier:2, status:'newip',
      d:'Điểm đo giá trị THẬT: học · sáng tạo · giúp người · đóng góp (bắt buộc proof).' },
    { id:'trao-doi-thoi-gian', n:'Trao Đổi Thời Gian', en:'Time Exchange', group:'newip', tier:3, status:'newip',
      d:'1 giờ dạy học ↔ 1 giờ học nhạc.' },
    { id:'cho-tri-thuc', n:'Chợ Tri Thức', en:'Wisdom Market', group:'newip', tier:3, status:'newip' },
    { id:'mmo-doi-that', n:'MMO Đời Thật', en:'Real World MMO', group:'newip', tier:5, status:'newip',
      d:'95% gameplay xảy ra ngoài đời. App chỉ là công cụ.' },
  ];

  // ===== MICRO BONUS (arcade đã build từ P0, ngoài 33) =====
  const MICRO_BONUS = [
    { id:'cham-vo-cuc', n:'Chạm Vô Cực', en:'Infinite Tap', group:'micro', tier:1, status:'live', file:'games/cham-vo-cuc.html',
      d:'Phản xạ: chạm vòng sáng trước khi tắt. Tốc độ tăng vô hạn.' },
    { id:'dinh-sisyphus', n:'Đỉnh Sisyphus', en:'Sisyphus Peak', group:'micro', tier:1, status:'live', file:'games/dinh-sisyphus.html',
      d:'Canh nhịp đẩy đá lên dốc. Đỉnh núi không có thật.' },
  ];

  const GAMES = PHASE1.concat(NEW_IP, MICRO_BONUS);

  const CATALOG = {
    version: 2,
    currency: CURRENCY,
    tiers: TIERS,
    groups: GROUPS,
    games: GAMES,
    counts: {
      named: GAMES.length,                                            // số game đã đặt tên
      live: GAMES.filter(x => x.status === 'live').length,            // chơi được ngay
      phase1: PHASE1.length,                                          // 33
      newip: NEW_IP.length,                                           // 7
      plan: 100,                                                      // lộ trình tổng
    },
  };

  if (typeof module !== 'undefined' && module.exports) module.exports = CATALOG;
  root.MN_CATALOG = CATALOG;
})(typeof window !== 'undefined' ? window : globalThis);
