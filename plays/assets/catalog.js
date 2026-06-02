/*
 * Muôn Nơi · plays.muonnoi.org — Danh mục game (catalog)
 * --------------------------------------------------------
 * Nguồn sự thật cho hub + (tạm thời) cho API catalog.
 * status: 'live'    = đã build, chơi được ngay
 *         'wave1'   = thuộc 33 game công bố giai đoạn 1, đang phát triển
 *         'roadmap' = lộ trình tới 100 game (Wave 2-4)
 *
 * Dùng được cả ở trình duyệt (window.MN_CATALOG) lẫn Workers/Node (module.exports).
 */
(function (root) {
  // 12 nhóm thể loại
  const GENRES = {
    reflex:   { vi: 'Phản xạ',          en: 'Reflex' },
    memory:   { vi: 'Trí nhớ',          en: 'Memory' },
    puzzle:   { vi: 'Giải đố',          en: 'Puzzle' },
    dodge:    { vi: 'Né tránh',         en: 'Dodge' },
    timing:   { vi: 'Canh thời gian',   en: 'Timing' },
    rhythm:   { vi: 'Nhịp điệu',        en: 'Rhythm' },
    skill:    { vi: 'Khéo léo',         en: 'Precision' },
    strategy: { vi: 'Chiến thuật',      en: 'Strategy' },
    math:     { vi: 'Số học',           en: 'Mental math' },
    observe:  { vi: 'Quan sát',         en: 'Observation' },
    zen:      { vi: 'Thiền',            en: 'Zen' },
    luck:     { vi: 'May rủi + kỹ năng', en: 'Skill + luck' },
  };

  // 33 game công bố giai đoạn 1 (3 live + 30 wave1)
  const WAVE1 = [
    { id: 'cham-vo-cuc',          n: 'Chạm Vô Cực',          g: 'reflex',   status: 'live',  file: 'games/cham-vo-cuc.html',
      d: 'Ô sáng xuất hiện nhanh dần. Chạm trúng trước khi tắt. Tốc độ tăng vô hạn — không có màn cuối.' },
    { id: 'me-cung-muon-loi',     n: 'Mê Cung Muôn Lối',     g: 'puzzle',   status: 'live',  file: 'games/me-cung-muon-loi.html',
      d: 'Tìm lối ra. Mỗi lối ra mở ra một mê cung lớn hơn. Mê cung không bao giờ kết thúc.' },
    { id: 'dinh-sisyphus',        n: 'Đỉnh Sisyphus',        g: 'skill',    status: 'live',  file: 'games/dinh-sisyphus.html',
      d: 'Đẩy tảng đá lên dốc bằng nhịp canh chuẩn. Càng lên cao dốc càng đứng. Đỉnh núi không có thật.' },

    { id: 'nho-mau',              n: 'Nhớ Màu',              g: 'memory',   status: 'wave1' },
    { id: 'ne-sao-bang',          n: 'Né Sao Băng',          g: 'dodge',    status: 'wave1' },
    { id: 'go-nhip',              n: 'Gõ Nhịp',              g: 'rhythm',   status: 'wave1' },
    { id: 'nhanh-tay-le-mat',     n: 'Nhanh Tay Lẹ Mắt',     g: 'reflex',   status: 'wave1' },
    { id: 'xep-vo-tan',           n: 'Xếp Vô Tận',           g: 'puzzle',   status: 'wave1' },
    { id: 'bat-dom-dom',          n: 'Bắt Đom Đóm',          g: 'skill',    status: 'wave1' },
    { id: 'con-ran-dai',          n: 'Con Rắn Dài Mãi',      g: 'dodge',    status: 'wave1' },
    { id: 'toan-chop-nhoang',     n: 'Toán Chớp Nhoáng',     g: 'math',     status: 'wave1' },
    { id: 'tim-diem-khac',        n: 'Tìm Điểm Khác',        g: 'observe',  status: 'wave1' },
    { id: 'canh-cua-hep',         n: 'Cánh Cửa Hẹp',         g: 'timing',   status: 'wave1' },
    { id: 'tha-roi-tu-do',        n: 'Thả Rơi Tự Do',        g: 'skill',    status: 'wave1' },
    { id: 'bac-thang-troi',       n: 'Bậc Thang Trời',       g: 'dodge',    status: 'wave1' },
    { id: 'ghep-doi-tri-nho',     n: 'Ghép Đôi Trí Nhớ',     g: 'memory',   status: 'wave1' },
    { id: 'vong-xoay-vo-tan',     n: 'Vòng Xoáy Vô Tận',     g: 'timing',   status: 'wave1' },
    { id: 'bong-nay-mai',         n: 'Bóng Nảy Mãi',         g: 'skill',    status: 'wave1' },
    { id: 'mau-noi-tiep',         n: 'Màu Nối Tiếp',         g: 'memory',   status: 'wave1' },
    { id: 'dat-bom-thien-than',   n: 'Dắt Bom Thiên Thần',   g: 'strategy', status: 'wave1' },
    { id: 'lai-phi-thuyen',       n: 'Lái Phi Thuyền',       g: 'dodge',    status: 'wave1' },
    { id: 'chu-cai-bay',          n: 'Chữ Cái Bay',          g: 'reflex',   status: 'wave1' },
    { id: 'can-bang-coc',         n: 'Cân Bằng Cọc',         g: 'skill',    status: 'wave1' },
    { id: 'sap-xep-so',           n: 'Sắp Xếp Số',           g: 'puzzle',   status: 'wave1' },
    { id: 'noi-dien',             n: 'Nối Điện',             g: 'puzzle',   status: 'wave1' },
    { id: 'nhin-thau-mau',        n: 'Nhìn Thấu Màu',        g: 'observe',  status: 'wave1' },
    { id: 'nhip-tim',             n: 'Nhịp Tim',             g: 'rhythm',   status: 'wave1' },
    { id: 'giot-nuoc-cuoi',       n: 'Giọt Nước Cuối',       g: 'zen',      status: 'wave1' },
    { id: 'bay-chim-giay',        n: 'Bầy Chim Giấy',        g: 'dodge',    status: 'wave1' },
    { id: 'tung-hung',            n: 'Tung Hứng',            g: 'skill',    status: 'wave1' },
    { id: 'mat-ma-anh-sang',      n: 'Mật Mã Ánh Sáng',      g: 'memory',   status: 'wave1' },
    { id: 'do-xuc-xac-tien-tri',  n: 'Đố Xúc Xắc Tiên Tri',  g: 'luck',     status: 'wave1' },
    { id: 'thien-ha-co',          n: 'Thiên Hà Cờ',          g: 'strategy', status: 'wave1' },
  ];

  // Lộ trình tới 100 (Wave 2-4) — đặt tên sẵn để dev nhận build
  const ROADMAP_NAMES = [
    ['o-an-quan-vo-cuc','Ô Ăn Quan Vô Cực','strategy'], ['dap-nieu','Đập Niêu Mù','skill'],
    ['bit-mat-bat-de','Bịt Mắt Bắt Dê','observe'], ['nhay-day-vo-tan','Nhảy Dây Vô Tận','timing'],
    ['tha-dieu','Thả Diều Ngược Gió','skill'], ['keo-co-am','Kéo Co Âm','rhythm'],
    ['chuyen-chuyen','Chuyền Chuyền','timing'], ['ban-bi','Bắn Bi Thiên Thạch','skill'],
    ['nhay-lo-co','Nhảy Lò Cò Trời','timing'], ['rong-ran-len-may','Rồng Rắn Lên Mây','dodge'],
    ['mua-sao-bang','Mưa Sao Băng','dodge'], ['thuy-trieu','Thủy Triều Lên Xuống','timing'],
    ['bon-mua','Bốn Mùa Quay','memory'], ['gio-mua','Gió Mùa','dodge'],
    ['hat-mam','Hạt Mầm Vô Tận','zen'], ['to-ong','Tổ Ong Lục Giác','puzzle'],
    ['dan-kien','Đàn Kiến','strategy'], ['canh-buom','Cánh Bướm Hỗn Loạn','observe'],
    ['ngan-ha','Ngân Hà Trôi','dodge'], ['hap-luc','Hấp Lực Hố Đen','skill'],
    ['sao-choi','Sao Chổi Quỹ Đạo','timing'], ['nhat-thuc','Nhật Thực Canh Giờ','timing'],
    ['tinh-van','Tinh Vân Ghép','puzzle'], ['hanh-tinh-xa','Hành Tinh Xa','strategy'],
    ['chu-roi','Chữ Rơi','reflex'], ['ghep-tu','Ghép Từ Vô Tận','puzzle'],
    ['dao-chu','Đảo Chữ','puzzle'], ['noi-tu','Nối Từ','memory'],
    ['tho-tu-dong','Thơ Tự Động','observe'], ['dau-cau','Dấu Câu Lạc','observe'],
    ['cao-do','Cao Độ','rhythm'], ['hop-am','Hợp Âm','rhythm'],
    ['tieng-vong','Tiếng Vọng','memory'], ['im-lang','Im Lặng Tuyệt Đối','zen'],
    ['song-am','Sóng Âm','timing'], ['guong-soi','Gương Soi Đối Xứng','observe'],
    ['bong-do','Bóng Đổ','observe'], ['anh-sang-cuoi','Ánh Sáng Cuối Đường Hầm','dodge'],
    ['mau-tan','Màu Tan','observe'], ['nut-that','Nút Thắt Vô Tận','puzzle'],
    ['cau-thang-escher','Cầu Thang Escher','puzzle'], ['domino-troi','Domino Trời','strategy'],
    ['con-quay','Con Quay','skill'], ['dong-ho-cat','Đồng Hồ Cát','timing'],
    ['la-bai-lat','Lá Bài Lật','memory'], ['xuc-xac-thien-ha','Xúc Xắc Thiên Hà','luck'],
    ['vong-quay-vo-cuc','Vòng Quay Vô Cực','luck'], ['ca-cuoc-thoi-gian','Cá Cược Thời Gian','luck'],
    ['guong-cau','Gương Cầu','skill'], ['tia-laser','Tia Laser Phản Chiếu','puzzle'],
    ['mach-dien','Mạch Điện Kín','puzzle'], ['banh-rang','Bánh Răng Khớp','puzzle'],
    ['con-lac','Con Lắc','timing'], ['lo-xo','Lò Xo Cộng Hưởng','timing'],
    ['trong-luc','Trọng Lực Đảo','skill'], ['ma-sat','Ma Sát Không','dodge'],
    ['ap-suat','Áp Suất','strategy'], ['nhiet-do','Nhiệt Độ Cân Bằng','strategy'],
    ['mau-pha','Màu Pha Trộn','observe'], ['anh-sao','Ánh Sao Lặn','observe'],
    ['bong-bong-xa-phong','Bong Bóng Xà Phòng','skill'], ['hoa-tuyet','Hoa Tuyết Sáu Cánh','puzzle'],
    ['la-roi','Lá Rơi Mùa Thu','zen'], ['song-bien','Sóng Biển Vô Tận','zen'],
    ['mua-roi','Mưa Rơi Đếm Giọt','zen'], ['nen-chay','Nến Cháy','zen'],
    ['hoi-tho','Hơi Thở','zen'],
  ];

  const ROADMAP = ROADMAP_NAMES.map(([id, n, g]) => ({ id, n, g, status: 'roadmap' }));

  const GAMES = WAVE1.concat(ROADMAP);

  const CATALOG = {
    version: 1,
    genres: GENRES,
    games: GAMES,
    counts: {
      total: GAMES.length,          // 100
      live: GAMES.filter(x => x.status === 'live').length,     // 3
      wave1: WAVE1.length,          // 33 (gồm 3 live)
      roadmap: ROADMAP.length,      // 67
    },
  };

  if (typeof module !== 'undefined' && module.exports) module.exports = CATALOG;
  root.MN_CATALOG = CATALOG;
})(typeof window !== 'undefined' ? window : globalThis);
