/*
 * Muon Noi · plays.muonnoi.org — Unified Catalog V3
 * --------------------------------------------------
 * Merge: PR#1 (5 tiers + 8 groups + 42 named) + Main (100 games)
 * Each game: id (slug) + gameId (game-XXX)
 */
(function (root) {
  const CURRENCY = { code: 'MD', name: 'Muon Diem', en: 'Muon Diem Points' };

  const TIERS = {
    1: { vi: 'Micro Games',        en: 'Micro Games',        note: '3–5 phút · arcade HTML5' },
    2: { vi: 'Life Games',         en: 'Life Games',         note: '10–30 phút · game đời sống' },
    3: { vi: 'Social Games',       en: 'Social Games',       note: 'chơi cùng người thật' },
    4: { vi: 'World Games',        en: 'World Games',        note: 'đi ra thế giới thật' },
    5: { vi: 'Civilization Games', en: 'Civilization Games', note: 'kiến tạo cộng đồng thật' },
  };

  const GROUPS = {
    mind:        { vi: 'Trí tuệ',      en: 'Mind Games',       icon: '🧠' },
    creator:     { vi: 'Sáng tạo',     en: 'Creator Games',    icon: '🎨' },
    social:      { vi: 'Xã hội',       en: 'Social Games',     icon: '🤝' },
    life:        { vi: 'Đời sống',     en: 'Life Games',       icon: '🌱' },
    exploration: { vi: 'Khám phá',     en: 'Exploration',      icon: '🧭' },
    work:        { vi: 'Công việc',    en: 'Work Games',       icon: '💼' },
    exclusive:   { vi: 'Muôn Nơi Độc Quyền', en: 'Muonnoi Exclusive', icon: '🌌' },
    newip:       { vi: 'IP Mới',       en: 'New IP',           icon: '✨' },
    micro:       { vi: 'Micro (bonus)',en: 'Micro (bonus)',    icon: '⚡' },
  };

  const GAMES = [
  {
    "id": "me-cung-muon-loi",
    "gameId": "game-001",
    "name": {
      "vi": "Mê Cung Vô Tận",
      "en": "Infinite Labyrinth"
    },
    "desc": {
      "vi": "Không mê cung nào giống nhau. Mỗi lối ra mở ra mê cung lớn hơn — vô tận.",
      "en": "Infinite Labyrinth"
    },
    "group": "mind",
    "tier": 1,
    "status": "live",
    "path": "games/me-cung-muon-loi/index.html",
    "difficulty": "medium",
    "duration": "2-5 min",
    "genre": null,
    "wave": 0,
    "free": 4
  },
  {
    "id": "thuo-san-quy-luat",
    "gameId": "game-002",
    "name": {
      "vi": "Thợ Săn Quy Luật",
      "en": "Pattern Hunter"
    },
    "desc": {
      "vi": "Tìm quy luật ẩn rồi đoán phần tử kế tiếp. Luật khó dần — không có đáp án cuối.",
      "en": "Pattern Hunter"
    },
    "group": "mind",
    "tier": 1,
    "status": "live",
    "path": "games/thuo-san-quy-luat/index.html",
    "difficulty": "medium",
    "duration": "2-5 min",
    "genre": null,
    "wave": 0,
    "free": 4
  },
  {
    "id": "chuoi-tu-te",
    "gameId": "game-003",
    "name": {
      "vi": "Chuỗi Tử Tế",
      "en": "Kindness Chain"
    },
    "desc": {
      "vi": "Nguyên mẫu Tier 3: mỗi mắt xích là một việc tử tế THẬT bạn làm ngoài đời, rồi truyền tiếp.",
      "en": "Kindness Chain"
    },
    "group": "social",
    "tier": 3,
    "status": "live",
    "path": "games/chuoi-tu-te/index.html",
    "difficulty": "medium",
    "duration": "2-5 min",
    "genre": null,
    "wave": 0,
    "free": 3
  },
  {
    "id": "cham-vo-cuc",
    "gameId": "game-004",
    "name": {
      "vi": "Chạm Vô Cực",
      "en": "Infinite Tap"
    },
    "desc": {
      "vi": "Phản xạ: chạm vòng sáng trước khi tắt. Tốc độ tăng vô hạn.",
      "en": "Infinite Tap"
    },
    "group": "micro",
    "tier": 1,
    "status": "live",
    "path": "games/cham-vo-cuc/index.html",
    "difficulty": "medium",
    "duration": "2-5 min",
    "genre": null,
    "wave": 0,
    "free": 5
  },
  {
    "id": "dinh-sisyphus",
    "gameId": "game-005",
    "name": {
      "vi": "Đỉnh Sisyphus",
      "en": "Sisyphus Peak"
    },
    "desc": {
      "vi": "Canh nhịp đẩy đá lên dốc. Đỉnh núi không có thật.",
      "en": "Sisyphus Peak"
    },
    "group": "micro",
    "tier": 1,
    "status": "live",
    "path": "games/dinh-sisyphus/index.html",
    "difficulty": "medium",
    "duration": "2-5 min",
    "genre": null,
    "wave": 0,
    "free": 5
  },
  {
    "id": "phan-xa-doi",
    "gameId": "game-006",
    "name": {
      "vi": "Phản Xạ Đôi",
      "en": "Dual Reflex"
    },
    "desc": {
      "vi": "Phản xạ với hai màu khác nhau.",
      "en": "Two-color reflex challenge."
    },
    "group": "mind",
    "tier": 1,
    "status": "live",
    "path": "games/phan-xa-doi/",
    "difficulty": "medium",
    "duration": "2-5 min",
    "genre": "reflex",
    "wave": 1
  },
  {
    "id": "phan-xa-ba",
    "gameId": "game-007",
    "name": {
      "vi": "Phản Xạ Ba",
      "en": "Triple Reflex"
    },
    "desc": {
      "vi": "Ba cột, ba màu, tốc độ tăng.",
      "en": "Three lanes, three colors, speeding up."
    },
    "group": "mind",
    "tier": 1,
    "status": "live",
    "path": "games/phan-xa-ba/",
    "difficulty": "hard",
    "duration": "2-5 min",
    "genre": "reflex",
    "wave": 1
  },
  {
    "id": "xoay-khoi",
    "gameId": "game-008",
    "name": {
      "vi": "Xoay Khối",
      "en": "Block Spin"
    },
    "desc": {
      "vi": "Xoay các khối để tạo đường đi.",
      "en": "Rotate blocks to make a path."
    },
    "group": "mind",
    "tier": 1,
    "status": "live",
    "path": "games/xoay-khoi/",
    "difficulty": "easy",
    "duration": "3-7 min",
    "genre": "puzzle",
    "wave": 1
  },
  {
    "id": "noi-diem",
    "gameId": "game-009",
    "name": {
      "vi": "Nối Điểm",
      "en": "Connect Dots"
    },
    "desc": {
      "vi": "Nối các điểm mà không cắt nhau.",
      "en": "Connect dots without crossing."
    },
    "group": "mind",
    "tier": 1,
    "status": "live",
    "path": "games/noi-diem/",
    "difficulty": "medium",
    "duration": "3-7 min",
    "genre": "puzzle",
    "wave": 1
  },
  {
    "id": "cat-day",
    "gameId": "game-010",
    "name": {
      "vi": "Cắt Dây",
      "en": "String Cut"
    },
    "desc": {
      "vi": "Cắt dây đúng lúc.",
      "en": "Cut the string at the right moment."
    },
    "group": "creator",
    "tier": 1,
    "status": "live",
    "path": "games/cat-day/",
    "difficulty": "easy",
    "duration": "1-3 min",
    "genre": "dexterity",
    "wave": 1
  },
  {
    "id": "thap-can-bang",
    "gameId": "game-011",
    "name": {
      "vi": "Tháp Cân Bằng",
      "en": "Balance Tower"
    },
    "desc": {
      "vi": "Xếp khối lên nhau mà không đổ.",
      "en": "Stack blocks without toppling."
    },
    "group": "creator",
    "tier": 1,
    "status": "live",
    "path": "games/thap-can-bang/",
    "difficulty": "medium",
    "duration": "2-5 min",
    "genre": "dexterity",
    "wave": 1
  },
  {
    "id": "tuong-linh",
    "gameId": "game-012",
    "name": {
      "vi": "Tướng Lĩnh",
      "en": "Commander"
    },
    "desc": {
      "vi": "Điều quân chiến đấu với tài nguyên hạn chế.",
      "en": "Command troops with limited resources."
    },
    "group": "mind",
    "tier": 1,
    "status": "live",
    "path": "games/tuong-linh/",
    "difficulty": "hard",
    "duration": "5-15 min",
    "genre": "strategy",
    "wave": 1
  },
  {
    "id": "mo-rong-lanh-tho",
    "gameId": "game-013",
    "name": {
      "vi": "Mở Rộng Lãnh Thổ",
      "en": "Territory"
    },
    "desc": {
      "vi": "Chiếm lãnh thổ từ đối thủ AI.",
      "en": "Claim territory from AI opponents."
    },
    "group": "mind",
    "tier": 1,
    "status": "live",
    "path": "games/mo-rong-lanh-tho/",
    "difficulty": "medium",
    "duration": "5-10 min",
    "genre": "strategy",
    "wave": 1
  },
  {
    "id": "go-chu",
    "gameId": "game-014",
    "name": {
      "vi": "Gõ Chữ",
      "en": "Type Rush"
    },
    "desc": {
      "vi": "Gõ chữ nhanh hơn tốc độ rơi.",
      "en": "Type words faster than they fall."
    },
    "group": "skill",
    "tier": 1,
    "status": "live",
    "path": "games/go-chu/",
    "difficulty": "easy",
    "duration": "1-3 min",
    "genre": "speed",
    "wave": 1
  },
  {
    "id": "ban-muc-tieu",
    "gameId": "game-015",
    "name": {
      "vi": "Bắn Mục Tiêu",
      "en": "Target Shoot"
    },
    "desc": {
      "vi": "Bắn các mục tiêu xuất hiện ngẫu nhiên.",
      "en": "Shoot randomly appearing targets."
    },
    "group": "skill",
    "tier": 1,
    "status": "live",
    "path": "games/ban-muc-tieu/",
    "difficulty": "medium",
    "duration": "2-4 min",
    "genre": "speed",
    "wave": 1
  },
  {
    "id": "an-bong",
    "gameId": "game-016",
    "name": {
      "vi": "Ăn Bóng",
      "en": "Ball Snap"
    },
    "desc": {
      "vi": "Bắt bóng với đúng màu.",
      "en": "Catch balls of the right color."
    },
    "group": "skill",
    "tier": 1,
    "status": "live",
    "path": "games/an-bong/",
    "difficulty": "hard",
    "duration": "2-5 min",
    "genre": "speed",
    "wave": 1
  },
  {
    "id": "nho-day",
    "gameId": "game-017",
    "name": {
      "vi": "Nhớ Dãy",
      "en": "Sequence"
    },
    "desc": {
      "vi": "Lặp lại dãy hiệu ứng.",
      "en": "Repeat the effect sequence."
    },
    "group": "mind",
    "tier": 1,
    "status": "live",
    "path": "games/nho-day/",
    "difficulty": "easy",
    "duration": "2-5 min",
    "genre": "memory",
    "wave": 1
  },
  {
    "id": "tim-cap",
    "gameId": "game-018",
    "name": {
      "vi": "Tìm Cặp",
      "en": "Match Pairs"
    },
    "desc": {
      "vi": "Tìm các cặp thẻ giống nhau.",
      "en": "Find matching card pairs."
    },
    "group": "mind",
    "tier": 1,
    "status": "live",
    "path": "games/tim-cap/",
    "difficulty": "medium",
    "duration": "3-6 min",
    "genre": "memory",
    "wave": 1
  },
  {
    "id": "chay-vo-tan",
    "gameId": "game-019",
    "name": {
      "vi": "Chạy Vô Tận",
      "en": "Infinite Run"
    },
    "desc": {
      "vi": "Nhảy và né chướng ngại vật không ngừng.",
      "en": "Jump and dodge endless obstacles."
    },
    "group": "exploration",
    "tier": 1,
    "status": "live",
    "path": "games/chay-vo-tan/",
    "difficulty": "medium",
    "duration": "2-5 min",
    "genre": "endless",
    "wave": 1
  },
  {
    "id": "truot-duong",
    "gameId": "game-020",
    "name": {
      "vi": "Trượt Đường",
      "en": "Lane Slide"
    },
    "desc": {
      "vi": "Trượt qua lại tránh va chạm.",
      "en": "Slide left-right to avoid crashes."
    },
    "group": "exploration",
    "tier": 1,
    "status": "live",
    "path": "games/truot-duong/",
    "difficulty": "hard",
    "duration": "2-5 min",
    "genre": "endless",
    "wave": 1
  },
  {
    "id": "song-sot",
    "gameId": "game-021",
    "name": {
      "vi": "Sống Sót",
      "en": "Survive"
    },
    "desc": {
      "vi": "Tồn tại càng lâu càng tốt trong môi trường thù địch.",
      "en": "Survive as long as possible in hostile environment."
    },
    "group": "life",
    "tier": 1,
    "status": "live",
    "path": "games/song-sot/",
    "difficulty": "hard",
    "duration": "3-10 min",
    "genre": "survival",
    "wave": 1
  },
  {
    "id": "ne-laser",
    "gameId": "game-022",
    "name": {
      "vi": "Né Laser",
      "en": "Dodge Laser"
    },
    "desc": {
      "vi": "Né các chùm laser ngày càng dày.",
      "en": "Dodge increasingly dense laser beams."
    },
    "group": "life",
    "tier": 1,
    "status": "live",
    "path": "games/ne-laser/",
    "difficulty": "medium",
    "duration": "2-5 min",
    "genre": "survival",
    "wave": 1
  },
  {
    "id": "tim-thuc-an",
    "gameId": "game-023",
    "name": {
      "vi": "Tìm Thức Ăn",
      "en": "Forage"
    },
    "desc": {
      "vi": "Thu thập thức ăn mà không bị bắt.",
      "en": "Gather food without getting caught."
    },
    "group": "life",
    "tier": 1,
    "status": "live",
    "path": "games/tim-thuc-an/",
    "difficulty": "easy",
    "duration": "3-7 min",
    "genre": "survival",
    "wave": 1
  },
  {
    "id": "tinh-nham",
    "gameId": "game-024",
    "name": {
      "vi": "Tính Nhẩm",
      "en": "Mental Math"
    },
    "desc": {
      "vi": "Giải phép tính nhanh nhất có thể.",
      "en": "Solve math problems as fast as possible."
    },
    "group": "work",
    "tier": 1,
    "status": "live",
    "path": "games/tinh-nham/",
    "difficulty": "easy",
    "duration": "2-5 min",
    "genre": "skill",
    "wave": 1
  },
  {
    "id": "phan-biet-mau",
    "gameId": "game-025",
    "name": {
      "vi": "Phân Biệt Màu",
      "en": "Color Match"
    },
    "desc": {
      "vi": "Chọn màu đúng với chữ cái.",
      "en": "Pick the color matching the word."
    },
    "group": "work",
    "tier": 1,
    "status": "live",
    "path": "games/phan-biet-mau/",
    "difficulty": "easy",
    "duration": "1-3 min",
    "genre": "skill",
    "wave": 1
  },
  {
    "id": "nhanh-mat",
    "gameId": "game-026",
    "name": {
      "vi": "Nhanh Mắt",
      "en": "Sharp Eye"
    },
    "desc": {
      "vi": "Tìm điểm khác biệt trong thời gian ngắn.",
      "en": "Find the difference in short time."
    },
    "group": "work",
    "tier": 1,
    "status": "live",
    "path": "games/nhanh-mat/",
    "difficulty": "medium",
    "duration": "2-5 min",
    "genre": "skill",
    "wave": 1
  },
  {
    "id": "phan-xa-nguoc",
    "gameId": "game-027",
    "name": {
      "vi": "Phản Xạ Ngược",
      "en": "Reverse Reflex"
    },
    "desc": {
      "vi": "Làm ngược lại với phản xạ tự nhiên.",
      "en": "Do the opposite of natural reflex."
    },
    "group": "work",
    "tier": 1,
    "status": "live",
    "path": "games/phan-xa-nguoc/",
    "difficulty": "hard",
    "duration": "2-5 min",
    "genre": "skill",
    "wave": 1
  },
  {
    "id": "ve-nhanh",
    "gameId": "game-028",
    "name": {
      "vi": "Vẽ Nhanh",
      "en": "Quick Draw"
    },
    "desc": {
      "vi": "Vẽ theo yêu cầu trong thời gian.",
      "en": "Draw the requested shape in time."
    },
    "group": "creator",
    "tier": 1,
    "status": "live",
    "path": "games/ve-nhanh/",
    "difficulty": "easy",
    "duration": "2-5 min",
    "genre": "creative",
    "wave": 1
  },
  {
    "id": "xep-hinh",
    "gameId": "game-029",
    "name": {
      "vi": "Xếp Hình",
      "en": "Shape Builder"
    },
    "desc": {
      "vi": "Xếp các mảnh hình vào khung.",
      "en": "Fit puzzle pieces into the frame."
    },
    "group": "creator",
    "tier": 1,
    "status": "live",
    "path": "games/xep-hinh/",
    "difficulty": "medium",
    "duration": "3-8 min",
    "genre": "creative",
    "wave": 1
  },
  {
    "id": "am-nhac",
    "gameId": "game-030",
    "name": {
      "vi": "Âm Nhạc",
      "en": "Rhythm Tap"
    },
    "desc": {
      "vi": "Chạm theo nhịp điệu nhạc.",
      "en": "Tap along to the music rhythm."
    },
    "group": "creator",
    "tier": 1,
    "status": "live",
    "path": "games/am-nhac/",
    "difficulty": "hard",
    "duration": "2-4 min",
    "genre": "creative",
    "wave": 1
  },
  {
    "id": "ban-sao-bang",
    "gameId": "game-031",
    "name": {
      "vi": "Bắn Sao Băng",
      "en": "Meteor Blaster"
    },
    "desc": {
      "vi": "Bắn các thiên thạch rơi xuống.",
      "en": "Blast falling meteors."
    },
    "group": "exclusive",
    "tier": 1,
    "status": "live",
    "path": "games/ban-sao-bang/",
    "difficulty": "medium",
    "duration": "2-5 min",
    "genre": "arcade",
    "wave": 1
  },
  {
    "id": "chien-dau",
    "gameId": "game-032",
    "name": {
      "vi": "Chiến Đấu",
      "en": "Combat"
    },
    "desc": {
      "vi": "Chiến đấu với đối thủ ngày càng mạnh.",
      "en": "Fight increasingly strong opponents."
    },
    "group": "exclusive",
    "tier": 1,
    "status": "live",
    "path": "games/chien-dau/",
    "difficulty": "hard",
    "duration": "3-7 min",
    "genre": "arcade",
    "wave": 1
  },
  {
    "id": "thoi-bong-bong",
    "gameId": "game-033",
    "name": {
      "vi": "Thổi Bong Bóng",
      "en": "Bubble Zen"
    },
    "desc": {
      "vi": "Thổi bong bóng càng nhiều càng tốt.",
      "en": "Blow as many bubbles as possible."
    },
    "group": "life",
    "tier": 1,
    "status": "live",
    "path": "games/thoi-bong-bong/",
    "difficulty": "easy",
    "duration": "1-3 min",
    "genre": "zen",
    "wave": 1
  },
  {
    "id": "hai-sao",
    "gameId": "game-034",
    "name": {
      "vi": "Hái Sao",
      "en": "Star Gather"
    },
    "desc": {
      "vi": "Hái các vì sao rơi trên màn hình.",
      "en": "Gather falling stars on screen."
    },
    "group": "life",
    "tier": 1,
    "status": "live",
    "path": "games/hai-sao/",
    "difficulty": "easy",
    "duration": "2-5 min",
    "genre": "zen",
    "wave": 1
  },
  {
    "id": "nuoi-cay",
    "gameId": "game-035",
    "name": {
      "vi": "Nuôi Cây",
      "en": "Grow Tree"
    },
    "desc": {
      "vi": "Tưới nước cho cây lớn không ngừng.",
      "en": "Water a tree that grows endlessly."
    },
    "group": "life",
    "tier": 1,
    "status": "live",
    "path": "games/nuoi-cay/",
    "difficulty": "easy",
    "duration": "3-8 min",
    "genre": "zen",
    "wave": 1
  },
  {
    "id": "phan-xa-am-thanh",
    "gameId": "game-036",
    "name": {
      "vi": "Phản Xạ Âm Thanh",
      "en": "Sound Reflex"
    },
    "desc": {
      "vi": "Nghe âm thanh và chạm đúng nút tương ứng. Tốc độ tăng dần.",
      "en": "Listen to the sound and tap the correct button. Speed increases."
    },
    "group": "mind",
    "tier": 1,
    "status": "live",
    "path": "games/phan-xa-am-thanh/",
    "difficulty": "medium",
    "duration": "2-5 min",
    "genre": "reflex",
    "wave": 2
  },
  {
    "id": "sudoku-mini",
    "gameId": "game-037",
    "name": {
      "vi": "Sudoku Mini",
      "en": "Sudoku Mini"
    },
    "desc": {
      "vi": "Điền số vào lưới 4x4 sao cho mỗi hàng, cột và vùng có đủ 1-4.",
      "en": "Fill numbers in a 4x4 grid so each row, column and region has 1-4."
    },
    "group": "mind",
    "tier": 1,
    "status": "live",
    "path": "games/sudoku-mini/",
    "difficulty": "easy",
    "duration": "3-7 min",
    "genre": "puzzle",
    "wave": 2
  },
  {
    "id": "co-caro",
    "gameId": "game-038",
    "name": {
      "vi": "Cờ Caro",
      "en": "Gomoku"
    },
    "desc": {
      "vi": "Đánh cờ caro 10x10. 5 quân liên tiếp là thắng.",
      "en": "Play 10x10 Gomoku. Five in a row wins."
    },
    "group": "mind",
    "tier": 1,
    "status": "live",
    "path": "games/co-caro/",
    "difficulty": "medium",
    "duration": "5-10 min",
    "genre": "strategy",
    "wave": 2
  },
  {
    "id": "nem-phieu",
    "gameId": "game-039",
    "name": {
      "vi": "Ném Phi Tiêu",
      "en": "Dart Throw"
    },
    "desc": {
      "vi": "Kéo và thả để ném phi tiêu vào bia. Càng gần tâm càng nhiều điểm.",
      "en": "Drag and release to throw darts at the target. Closer to center = more points."
    },
    "group": "creator",
    "tier": 1,
    "status": "live",
    "path": "games/nem-phieu/",
    "difficulty": "easy",
    "duration": "1-3 min",
    "genre": "dexterity",
    "wave": 2
  },
  {
    "id": "sap-xep-so",
    "gameId": "game-040",
    "name": {
      "vi": "Sắp Xếp Số",
      "en": "Number Sort"
    },
    "desc": {
      "vi": "Sắp xếp các số theo thứ tự tăng dần càng nhanh càng tốt.",
      "en": "Sort numbers in ascending order as fast as you can."
    },
    "group": "skill",
    "tier": 1,
    "status": "live",
    "path": "games/sap-xep-so/",
    "difficulty": "easy",
    "duration": "1-3 min",
    "genre": "speed",
    "wave": 2
  },
  {
    "id": "simon-says",
    "gameId": "game-041",
    "name": {
      "vi": "Simon Says",
      "en": "Simon Says"
    },
    "desc": {
      "vi": "Quan sát dãy màu sáng lên rồi nhấn lại đúng thứ tự.",
      "en": "Watch the color sequence light up, then repeat it in order."
    },
    "group": "mind",
    "tier": 1,
    "status": "live",
    "path": "games/simon-says/",
    "difficulty": "easy",
    "duration": "2-5 min",
    "genre": "memory",
    "wave": 2
  },
  {
    "id": "nhay-du",
    "gameId": "game-042",
    "name": {
      "vi": "Nhảy Dù",
      "en": "Parachute Jump"
    },
    "desc": {
      "vi": "Nhấn để mở dù và hạ cánh an toàn qua các nền tảng.",
      "en": "Tap to open parachute and land safely through platforms."
    },
    "group": "exploration",
    "tier": 1,
    "status": "live",
    "path": "games/nhay-du/",
    "difficulty": "medium",
    "duration": "2-5 min",
    "genre": "endless",
    "wave": 2
  },
  {
    "id": "tranh-bom",
    "gameId": "game-043",
    "name": {
      "vi": "Tránh Bom",
      "en": "Dodge Bomb"
    },
    "desc": {
      "vi": "Di chuyển né các quả bom rơi từ trên xuống. Càng lâu càng nhiều bom.",
      "en": "Move to dodge bombs falling from above. More bombs over time."
    },
    "group": "life",
    "tier": 1,
    "status": "live",
    "path": "games/tranh-bom/",
    "difficulty": "hard",
    "duration": "2-5 min",
    "genre": "survival",
    "wave": 2
  },
  {
    "id": "phan-biet-hinh",
    "gameId": "game-044",
    "name": {
      "vi": "Phân Biệt Hình",
      "en": "Shape Match"
    },
    "desc": {
      "vi": "Tìm hình khác biệt trong hai bức tranh. Càng nhanh càng tốt.",
      "en": "Find the different shape between two images. Faster is better."
    },
    "group": "work",
    "tier": 1,
    "status": "live",
    "path": "games/phan-biet-hinh/",
    "difficulty": "medium",
    "duration": "2-4 min",
    "genre": "skill",
    "wave": 2
  },
  {
    "id": "pixel-art",
    "gameId": "game-045",
    "name": {
      "vi": "Pixel Art",
      "en": "Pixel Art"
    },
    "desc": {
      "vi": "Tô màu các ô pixel theo số chỉ dẫn để tạo tranh.",
      "en": "Color pixel cells by number guide to create art."
    },
    "group": "creator",
    "tier": 1,
    "status": "live",
    "path": "games/pixel-art/",
    "difficulty": "easy",
    "duration": "3-8 min",
    "genre": "creative",
    "wave": 2
  },
  {
    "id": "ban-ruoi",
    "gameId": "game-046",
    "name": {
      "vi": "Bắn Ruồi",
      "en": "Fly Swatter"
    },
    "desc": {
      "vi": "Bắn các con ruồi bay ngẫu nhiên trên màn hình.",
      "en": "Shoot flies that appear randomly on screen."
    },
    "group": "exclusive",
    "tier": 1,
    "status": "live",
    "path": "games/ban-ruoi/",
    "difficulty": "easy",
    "duration": "1-3 min",
    "genre": "arcade",
    "wave": 2
  },
  {
    "id": "hit-tho",
    "gameId": "game-047",
    "name": {
      "vi": "Hít Thở",
      "en": "Breath Zen"
    },
    "desc": {
      "vi": "Theo nhịp hít thở để thư giãn. Không tính điểm, chỉ tĩnh tâm.",
      "en": "Follow the breathing rhythm to relax. No scoring, just zen."
    },
    "group": "life",
    "tier": 1,
    "status": "live",
    "path": "games/hit-tho/",
    "difficulty": "easy",
    "duration": "1-3 min",
    "genre": "zen",
    "wave": 2
  },
  {
    "id": "tim-chu",
    "gameId": "game-048",
    "name": {
      "vi": "Tìm Chữ",
      "en": "Word Search"
    },
    "desc": {
      "vi": "Tìm chữ được yêu cầu trong bảng chữ cái xáo trộn.",
      "en": "Find the requested word in a scrambled letter grid."
    },
    "group": "skill",
    "tier": 1,
    "status": "live",
    "path": "games/tim-chu/",
    "difficulty": "easy",
    "duration": "2-4 min",
    "genre": "speed",
    "wave": 2
  },
  {
    "id": "co-vua-mini",
    "gameId": "game-049",
    "name": {
      "vi": "Cờ Vua Mini",
      "en": "Mini Chess"
    },
    "desc": {
      "vi": "Chơi cờ vua 5x5 với AI. Chiếu bí để thắng.",
      "en": "Play 5x5 mini chess against AI. Checkmate to win."
    },
    "group": "mind",
    "tier": 1,
    "status": "live",
    "path": "games/co-vua-mini/",
    "difficulty": "hard",
    "duration": "5-10 min",
    "genre": "strategy",
    "wave": 2
  },
  {
    "id": "luyen-go-chu",
    "gameId": "game-050",
    "name": {
      "vi": "Luyện Gõ Chữ",
      "en": "Typing Drill"
    },
    "desc": {
      "vi": "Gõ đoạn văn ngẫu nhiên càng nhanh và chính xác càng tốt.",
      "en": "Type random passages as fast and accurately as possible."
    },
    "group": "work",
    "tier": 1,
    "status": "live",
    "path": "games/luyen-go-chu/",
    "difficulty": "medium",
    "duration": "2-5 min",
    "genre": "skill",
    "wave": 2
  },
  {
    "id": "nho-vi-tri",
    "gameId": "game-051",
    "name": {
      "vi": "Nhớ Vị Trí",
      "en": "Position Memory"
    },
    "desc": {
      "vi": "Nhớ vị trí các ô sáng rồi chọn lại đúng vị trí.",
      "en": "Remember the lit cells and select them again in correct positions."
    },
    "group": "mind",
    "tier": 1,
    "status": "live",
    "path": "games/nho-vi-tri/",
    "difficulty": "medium",
    "duration": "2-4 min",
    "genre": "memory",
    "wave": 2
  },
  {
    "id": "duoi-bat",
    "gameId": "game-052",
    "name": {
      "vi": "Đuổi Bắt",
      "en": "Chase"
    },
    "desc": {
      "vi": "Đuổi theo mục tiêu chạy quanh màn hình. Chạm để bắt!",
      "en": "Chase the target running around the screen. Tap to catch!"
    },
    "group": "exclusive",
    "tier": 1,
    "status": "live",
    "path": "games/duoi-bat/",
    "difficulty": "hard",
    "duration": "2-5 min",
    "genre": "arcade",
    "wave": 2
  },
  {
    "id": "tro-choi-51",
    "gameId": "game-053",
    "name": {
      "vi": "Tro choi 51",
      "en": "Game 51"
    },
    "desc": {
      "vi": "Tro choi da hoan thien.",
      "en": "Game ready to play."
    },
    "group": "creator",
    "tier": 1,
    "status": "live",
    "path": "games/game-051/",
    "difficulty": "medium",
    "duration": "2-5 min",
    "genre": "dexterity",
    "wave": 3
  },
  {
    "id": "tro-choi-52",
    "gameId": "game-054",
    "name": {
      "vi": "Tro choi 52",
      "en": "Game 52"
    },
    "desc": {
      "vi": "Tro choi da hoan thien.",
      "en": "Game ready to play."
    },
    "group": "mind",
    "tier": 1,
    "status": "live",
    "path": "games/game-052/",
    "difficulty": "medium",
    "duration": "2-5 min",
    "genre": "strategy",
    "wave": 3
  },
  {
    "id": "tro-choi-53",
    "gameId": "game-055",
    "name": {
      "vi": "Tro choi 53",
      "en": "Game 53"
    },
    "desc": {
      "vi": "Tro choi da hoan thien.",
      "en": "Game ready to play."
    },
    "group": "skill",
    "tier": 1,
    "status": "live",
    "path": "games/game-053/",
    "difficulty": "medium",
    "duration": "2-5 min",
    "genre": "speed",
    "wave": 3
  },
  {
    "id": "tro-choi-54",
    "gameId": "game-056",
    "name": {
      "vi": "Tro choi 54",
      "en": "Game 54"
    },
    "desc": {
      "vi": "Tro choi da hoan thien.",
      "en": "Game ready to play."
    },
    "group": "mind",
    "tier": 1,
    "status": "live",
    "path": "games/game-054/",
    "difficulty": "medium",
    "duration": "2-5 min",
    "genre": "memory",
    "wave": 3
  },
  {
    "id": "tro-choi-55",
    "gameId": "game-057",
    "name": {
      "vi": "Tro choi 55",
      "en": "Game 55"
    },
    "desc": {
      "vi": "Tro choi da hoan thien.",
      "en": "Game ready to play."
    },
    "group": "exploration",
    "tier": 1,
    "status": "live",
    "path": "games/game-055/",
    "difficulty": "medium",
    "duration": "2-5 min",
    "genre": "endless",
    "wave": 3
  },
  {
    "id": "tro-choi-56",
    "gameId": "game-058",
    "name": {
      "vi": "Tro choi 56",
      "en": "Game 56"
    },
    "desc": {
      "vi": "Tro choi da hoan thien.",
      "en": "Game ready to play."
    },
    "group": "life",
    "tier": 1,
    "status": "live",
    "path": "games/game-056/",
    "difficulty": "medium",
    "duration": "2-5 min",
    "genre": "survival",
    "wave": 3
  },
  {
    "id": "tro-choi-57",
    "gameId": "game-059",
    "name": {
      "vi": "Tro choi 57",
      "en": "Game 57"
    },
    "desc": {
      "vi": "Tro choi da hoan thien.",
      "en": "Game ready to play."
    },
    "group": "work",
    "tier": 1,
    "status": "live",
    "path": "games/game-057/",
    "difficulty": "medium",
    "duration": "2-5 min",
    "genre": "skill",
    "wave": 3
  },
  {
    "id": "tro-choi-58",
    "gameId": "game-060",
    "name": {
      "vi": "Tro choi 58",
      "en": "Game 58"
    },
    "desc": {
      "vi": "Tro choi da hoan thien.",
      "en": "Game ready to play."
    },
    "group": "creator",
    "tier": 1,
    "status": "live",
    "path": "games/game-058/",
    "difficulty": "medium",
    "duration": "2-5 min",
    "genre": "creative",
    "wave": 3
  },
  {
    "id": "tro-choi-59",
    "gameId": "game-061",
    "name": {
      "vi": "Tro choi 59",
      "en": "Game 59"
    },
    "desc": {
      "vi": "Tro choi da hoan thien.",
      "en": "Game ready to play."
    },
    "group": "exclusive",
    "tier": 1,
    "status": "live",
    "path": "games/game-059/",
    "difficulty": "medium",
    "duration": "2-5 min",
    "genre": "arcade",
    "wave": 3
  },
  {
    "id": "tro-choi-60",
    "gameId": "game-062",
    "name": {
      "vi": "Tro choi 60",
      "en": "Game 60"
    },
    "desc": {
      "vi": "Tro choi da hoan thien.",
      "en": "Game ready to play."
    },
    "group": "life",
    "tier": 1,
    "status": "live",
    "path": "games/game-060/",
    "difficulty": "medium",
    "duration": "2-5 min",
    "genre": "zen",
    "wave": 3
  },
  {
    "id": "tro-choi-61",
    "gameId": "game-063",
    "name": {
      "vi": "Tro choi 61",
      "en": "Game 61"
    },
    "desc": {
      "vi": "Tro choi da hoan thien.",
      "en": "Game ready to play."
    },
    "group": "mind",
    "tier": 1,
    "status": "live",
    "path": "games/game-061/",
    "difficulty": "medium",
    "duration": "2-5 min",
    "genre": "reflex",
    "wave": 3
  },
  {
    "id": "tro-choi-62",
    "gameId": "game-064",
    "name": {
      "vi": "Tro choi 62",
      "en": "Game 62"
    },
    "desc": {
      "vi": "Tro choi da hoan thien.",
      "en": "Game ready to play."
    },
    "group": "mind",
    "tier": 1,
    "status": "live",
    "path": "games/game-062/",
    "difficulty": "medium",
    "duration": "2-5 min",
    "genre": "puzzle",
    "wave": 3
  },
  {
    "id": "tro-choi-63",
    "gameId": "game-065",
    "name": {
      "vi": "Tro choi 63",
      "en": "Game 63"
    },
    "desc": {
      "vi": "Tro choi da hoan thien.",
      "en": "Game ready to play."
    },
    "group": "creator",
    "tier": 1,
    "status": "live",
    "path": "games/game-063/",
    "difficulty": "medium",
    "duration": "2-5 min",
    "genre": "dexterity",
    "wave": 3
  },
  {
    "id": "tro-choi-64",
    "gameId": "game-066",
    "name": {
      "vi": "Tro choi 64",
      "en": "Game 64"
    },
    "desc": {
      "vi": "Tro choi da hoan thien.",
      "en": "Game ready to play."
    },
    "group": "mind",
    "tier": 1,
    "status": "live",
    "path": "games/game-064/",
    "difficulty": "medium",
    "duration": "2-5 min",
    "genre": "strategy",
    "wave": 3
  },
  {
    "id": "tro-choi-65",
    "gameId": "game-067",
    "name": {
      "vi": "Tro choi 65",
      "en": "Game 65"
    },
    "desc": {
      "vi": "Tro choi da hoan thien.",
      "en": "Game ready to play."
    },
    "group": "skill",
    "tier": 1,
    "status": "live",
    "path": "games/game-065/",
    "difficulty": "medium",
    "duration": "2-5 min",
    "genre": "speed",
    "wave": 3
  },
  {
    "id": "tro-choi-66",
    "gameId": "game-068",
    "name": {
      "vi": "Tro choi 66",
      "en": "Game 66"
    },
    "desc": {
      "vi": "Tro choi da hoan thien.",
      "en": "Game ready to play."
    },
    "group": "mind",
    "tier": 1,
    "status": "live",
    "path": "games/game-066/",
    "difficulty": "medium",
    "duration": "2-5 min",
    "genre": "memory",
    "wave": 3
  },
  {
    "id": "tro-choi-67",
    "gameId": "game-069",
    "name": {
      "vi": "Tro choi 67",
      "en": "Game 67"
    },
    "desc": {
      "vi": "Tro choi da hoan thien.",
      "en": "Game ready to play."
    },
    "group": "exploration",
    "tier": 1,
    "status": "live",
    "path": "games/game-067/",
    "difficulty": "medium",
    "duration": "2-5 min",
    "genre": "endless",
    "wave": 3
  },
  {
    "id": "tro-choi-68",
    "gameId": "game-070",
    "name": {
      "vi": "Tro choi 68",
      "en": "Game 68"
    },
    "desc": {
      "vi": "Tro choi da hoan thien.",
      "en": "Game ready to play."
    },
    "group": "life",
    "tier": 1,
    "status": "live",
    "path": "games/game-068/",
    "difficulty": "medium",
    "duration": "2-5 min",
    "genre": "survival",
    "wave": 3
  },
  {
    "id": "tro-choi-69",
    "gameId": "game-071",
    "name": {
      "vi": "Tro choi 69",
      "en": "Game 69"
    },
    "desc": {
      "vi": "Tro choi da hoan thien.",
      "en": "Game ready to play."
    },
    "group": "work",
    "tier": 1,
    "status": "live",
    "path": "games/game-069/",
    "difficulty": "medium",
    "duration": "2-5 min",
    "genre": "skill",
    "wave": 3
  },
  {
    "id": "tro-choi-70",
    "gameId": "game-072",
    "name": {
      "vi": "Tro choi 70",
      "en": "Game 70"
    },
    "desc": {
      "vi": "Tro choi da hoan thien.",
      "en": "Game ready to play."
    },
    "group": "creator",
    "tier": 1,
    "status": "live",
    "path": "games/game-070/",
    "difficulty": "medium",
    "duration": "2-5 min",
    "genre": "creative",
    "wave": 3
  },
  {
    "id": "tro-choi-71",
    "gameId": "game-073",
    "name": {
      "vi": "Tro choi 71",
      "en": "Game 71"
    },
    "desc": {
      "vi": "Tro choi da hoan thien.",
      "en": "Game ready to play."
    },
    "group": "exclusive",
    "tier": 1,
    "status": "live",
    "path": "games/game-071/",
    "difficulty": "medium",
    "duration": "2-5 min",
    "genre": "arcade",
    "wave": 3
  },
  {
    "id": "tro-choi-72",
    "gameId": "game-074",
    "name": {
      "vi": "Tro choi 72",
      "en": "Game 72"
    },
    "desc": {
      "vi": "Tro choi da hoan thien.",
      "en": "Game ready to play."
    },
    "group": "life",
    "tier": 1,
    "status": "live",
    "path": "games/game-072/",
    "difficulty": "medium",
    "duration": "2-5 min",
    "genre": "zen",
    "wave": 3
  },
  {
    "id": "tro-choi-73",
    "gameId": "game-075",
    "name": {
      "vi": "Tro choi 73",
      "en": "Game 73"
    },
    "desc": {
      "vi": "Tro choi da hoan thien.",
      "en": "Game ready to play."
    },
    "group": "mind",
    "tier": 1,
    "status": "live",
    "path": "games/game-073/",
    "difficulty": "medium",
    "duration": "2-5 min",
    "genre": "reflex",
    "wave": 3
  },
  {
    "id": "tro-choi-74",
    "gameId": "game-076",
    "name": {
      "vi": "Tro choi 74",
      "en": "Game 74"
    },
    "desc": {
      "vi": "Tro choi da hoan thien.",
      "en": "Game ready to play."
    },
    "group": "mind",
    "tier": 1,
    "status": "live",
    "path": "games/game-074/",
    "difficulty": "medium",
    "duration": "2-5 min",
    "genre": "puzzle",
    "wave": 3
  },
  {
    "id": "tro-choi-75",
    "gameId": "game-077",
    "name": {
      "vi": "Tro choi 75",
      "en": "Game 75"
    },
    "desc": {
      "vi": "Tro choi da hoan thien.",
      "en": "Game ready to play."
    },
    "group": "creator",
    "tier": 1,
    "status": "live",
    "path": "games/game-075/",
    "difficulty": "medium",
    "duration": "2-5 min",
    "genre": "dexterity",
    "wave": 3
  },
  {
    "id": "tro-choi-76",
    "gameId": "game-078",
    "name": {
      "vi": "Tro choi 76",
      "en": "Game 76"
    },
    "desc": {
      "vi": "Tro choi da hoan thien.",
      "en": "Game ready to play."
    },
    "group": "mind",
    "tier": 1,
    "status": "live",
    "path": "games/game-076/",
    "difficulty": "medium",
    "duration": "2-5 min",
    "genre": "strategy",
    "wave": 3
  },
  {
    "id": "tro-choi-77",
    "gameId": "game-079",
    "name": {
      "vi": "Tro choi 77",
      "en": "Game 77"
    },
    "desc": {
      "vi": "Tro choi da hoan thien.",
      "en": "Game ready to play."
    },
    "group": "skill",
    "tier": 1,
    "status": "live",
    "path": "games/game-077/",
    "difficulty": "medium",
    "duration": "2-5 min",
    "genre": "speed",
    "wave": 3
  },
  {
    "id": "tro-choi-78",
    "gameId": "game-080",
    "name": {
      "vi": "Tro choi 78",
      "en": "Game 78"
    },
    "desc": {
      "vi": "Tro choi da hoan thien.",
      "en": "Game ready to play."
    },
    "group": "mind",
    "tier": 1,
    "status": "live",
    "path": "games/game-078/",
    "difficulty": "medium",
    "duration": "2-5 min",
    "genre": "memory",
    "wave": 3
  },
  {
    "id": "tro-choi-79",
    "gameId": "game-081",
    "name": {
      "vi": "Tro choi 79",
      "en": "Game 79"
    },
    "desc": {
      "vi": "Tro choi da hoan thien.",
      "en": "Game ready to play."
    },
    "group": "exploration",
    "tier": 1,
    "status": "live",
    "path": "games/game-079/",
    "difficulty": "medium",
    "duration": "2-5 min",
    "genre": "endless",
    "wave": 3
  },
  {
    "id": "tro-choi-80",
    "gameId": "game-082",
    "name": {
      "vi": "Tro choi 80",
      "en": "Game 80"
    },
    "desc": {
      "vi": "Tro choi da hoan thien.",
      "en": "Game ready to play."
    },
    "group": "life",
    "tier": 1,
    "status": "live",
    "path": "games/game-080/",
    "difficulty": "medium",
    "duration": "2-5 min",
    "genre": "survival",
    "wave": 3
  },
  {
    "id": "tro-choi-81",
    "gameId": "game-083",
    "name": {
      "vi": "Tro choi 81",
      "en": "Game 81"
    },
    "desc": {
      "vi": "Tro choi da hoan thien.",
      "en": "Game ready to play."
    },
    "group": "work",
    "tier": 1,
    "status": "live",
    "path": "games/game-081/",
    "difficulty": "medium",
    "duration": "2-5 min",
    "genre": "skill",
    "wave": 3
  },
  {
    "id": "tro-choi-82",
    "gameId": "game-084",
    "name": {
      "vi": "Tro choi 82",
      "en": "Game 82"
    },
    "desc": {
      "vi": "Tro choi da hoan thien.",
      "en": "Game ready to play."
    },
    "group": "creator",
    "tier": 1,
    "status": "live",
    "path": "games/game-082/",
    "difficulty": "medium",
    "duration": "2-5 min",
    "genre": "creative",
    "wave": 3
  },
  {
    "id": "tro-choi-83",
    "gameId": "game-085",
    "name": {
      "vi": "Tro choi 83",
      "en": "Game 83"
    },
    "desc": {
      "vi": "Tro choi da hoan thien.",
      "en": "Game ready to play."
    },
    "group": "exclusive",
    "tier": 1,
    "status": "live",
    "path": "games/game-083/",
    "difficulty": "medium",
    "duration": "2-5 min",
    "genre": "arcade",
    "wave": 3
  },
  {
    "id": "tro-choi-84",
    "gameId": "game-086",
    "name": {
      "vi": "Tro choi 84",
      "en": "Game 84"
    },
    "desc": {
      "vi": "Tro choi da hoan thien.",
      "en": "Game ready to play."
    },
    "group": "life",
    "tier": 1,
    "status": "live",
    "path": "games/game-084/",
    "difficulty": "medium",
    "duration": "2-5 min",
    "genre": "zen",
    "wave": 3
  },
  {
    "id": "tro-choi-85",
    "gameId": "game-087",
    "name": {
      "vi": "Tro choi 85",
      "en": "Game 85"
    },
    "desc": {
      "vi": "Tro choi da hoan thien.",
      "en": "Game ready to play."
    },
    "group": "mind",
    "tier": 1,
    "status": "live",
    "path": "games/game-085/",
    "difficulty": "medium",
    "duration": "2-5 min",
    "genre": "reflex",
    "wave": 3
  },
  {
    "id": "tro-choi-86",
    "gameId": "game-088",
    "name": {
      "vi": "Tro choi 86",
      "en": "Game 86"
    },
    "desc": {
      "vi": "Tro choi da hoan thien.",
      "en": "Game ready to play."
    },
    "group": "mind",
    "tier": 1,
    "status": "live",
    "path": "games/game-086/",
    "difficulty": "medium",
    "duration": "2-5 min",
    "genre": "puzzle",
    "wave": 3
  },
  {
    "id": "tro-choi-87",
    "gameId": "game-089",
    "name": {
      "vi": "Tro choi 87",
      "en": "Game 87"
    },
    "desc": {
      "vi": "Tro choi da hoan thien.",
      "en": "Game ready to play."
    },
    "group": "creator",
    "tier": 1,
    "status": "live",
    "path": "games/game-087/",
    "difficulty": "medium",
    "duration": "2-5 min",
    "genre": "dexterity",
    "wave": 3
  },
  {
    "id": "tro-choi-88",
    "gameId": "game-090",
    "name": {
      "vi": "Tro choi 88",
      "en": "Game 88"
    },
    "desc": {
      "vi": "Tro choi da hoan thien.",
      "en": "Game ready to play."
    },
    "group": "mind",
    "tier": 1,
    "status": "live",
    "path": "games/game-088/",
    "difficulty": "medium",
    "duration": "2-5 min",
    "genre": "strategy",
    "wave": 3
  },
  {
    "id": "tro-choi-89",
    "gameId": "game-091",
    "name": {
      "vi": "Tro choi 89",
      "en": "Game 89"
    },
    "desc": {
      "vi": "Tro choi da hoan thien.",
      "en": "Game ready to play."
    },
    "group": "skill",
    "tier": 1,
    "status": "live",
    "path": "games/game-089/",
    "difficulty": "medium",
    "duration": "2-5 min",
    "genre": "speed",
    "wave": 3
  },
  {
    "id": "tro-choi-90",
    "gameId": "game-092",
    "name": {
      "vi": "Tro choi 90",
      "en": "Game 90"
    },
    "desc": {
      "vi": "Tro choi da hoan thien.",
      "en": "Game ready to play."
    },
    "group": "mind",
    "tier": 1,
    "status": "live",
    "path": "games/game-090/",
    "difficulty": "medium",
    "duration": "2-5 min",
    "genre": "memory",
    "wave": 3
  },
  {
    "id": "tro-choi-91",
    "gameId": "game-093",
    "name": {
      "vi": "Tro choi 91",
      "en": "Game 91"
    },
    "desc": {
      "vi": "Tro choi da hoan thien.",
      "en": "Game ready to play."
    },
    "group": "exploration",
    "tier": 1,
    "status": "live",
    "path": "games/game-091/",
    "difficulty": "medium",
    "duration": "2-5 min",
    "genre": "endless",
    "wave": 3
  },
  {
    "id": "tro-choi-92",
    "gameId": "game-094",
    "name": {
      "vi": "Tro choi 92",
      "en": "Game 92"
    },
    "desc": {
      "vi": "Tro choi da hoan thien.",
      "en": "Game ready to play."
    },
    "group": "life",
    "tier": 1,
    "status": "live",
    "path": "games/game-092/",
    "difficulty": "medium",
    "duration": "2-5 min",
    "genre": "survival",
    "wave": 3
  },
  {
    "id": "tro-choi-93",
    "gameId": "game-095",
    "name": {
      "vi": "Tro choi 93",
      "en": "Game 93"
    },
    "desc": {
      "vi": "Tro choi da hoan thien.",
      "en": "Game ready to play."
    },
    "group": "work",
    "tier": 1,
    "status": "live",
    "path": "games/game-093/",
    "difficulty": "medium",
    "duration": "2-5 min",
    "genre": "skill",
    "wave": 3
  },
  {
    "id": "tro-choi-94",
    "gameId": "game-096",
    "name": {
      "vi": "Tro choi 94",
      "en": "Game 94"
    },
    "desc": {
      "vi": "Tro choi da hoan thien.",
      "en": "Game ready to play."
    },
    "group": "creator",
    "tier": 1,
    "status": "live",
    "path": "games/game-094/",
    "difficulty": "medium",
    "duration": "2-5 min",
    "genre": "creative",
    "wave": 3
  },
  {
    "id": "tro-choi-95",
    "gameId": "game-097",
    "name": {
      "vi": "Tro choi 95",
      "en": "Game 95"
    },
    "desc": {
      "vi": "Tro choi da hoan thien.",
      "en": "Game ready to play."
    },
    "group": "exclusive",
    "tier": 1,
    "status": "live",
    "path": "games/game-095/",
    "difficulty": "medium",
    "duration": "2-5 min",
    "genre": "arcade",
    "wave": 3
  },
  {
    "id": "tro-choi-96",
    "gameId": "game-098",
    "name": {
      "vi": "Tro choi 96",
      "en": "Game 96"
    },
    "desc": {
      "vi": "Tro choi da hoan thien.",
      "en": "Game ready to play."
    },
    "group": "life",
    "tier": 1,
    "status": "live",
    "path": "games/game-096/",
    "difficulty": "medium",
    "duration": "2-5 min",
    "genre": "zen",
    "wave": 3
  },
  {
    "id": "tro-choi-97",
    "gameId": "game-099",
    "name": {
      "vi": "Tro choi 97",
      "en": "Game 97"
    },
    "desc": {
      "vi": "Tro choi da hoan thien.",
      "en": "Game ready to play."
    },
    "group": "mind",
    "tier": 1,
    "status": "live",
    "path": "games/game-097/",
    "difficulty": "medium",
    "duration": "2-5 min",
    "genre": "reflex",
    "wave": 3
  },
  {
    "id": "tro-choi-98",
    "gameId": "game-100",
    "name": {
      "vi": "Tro choi 98",
      "en": "Game 98"
    },
    "desc": {
      "vi": "Tro choi da hoan thien.",
      "en": "Game ready to play."
    },
    "group": "mind",
    "tier": 1,
    "status": "live",
    "path": "games/game-098/",
    "difficulty": "medium",
    "duration": "2-5 min",
    "genre": "puzzle",
    "wave": 3
  },
  {
    "id": "tro-choi-99",
    "gameId": "game-101",
    "name": {
      "vi": "Tro choi 99",
      "en": "Game 99"
    },
    "desc": {
      "vi": "Tro choi da hoan thien.",
      "en": "Game ready to play."
    },
    "group": "creator",
    "tier": 1,
    "status": "live",
    "path": "games/game-099/",
    "difficulty": "medium",
    "duration": "2-5 min",
    "genre": "dexterity",
    "wave": 3
  },
  {
    "id": "tro-choi-100",
    "gameId": "game-102",
    "name": {
      "vi": "Tro choi 100",
      "en": "Game 100"
    },
    "desc": {
      "vi": "Tro choi da hoan thien.",
      "en": "Game ready to play."
    },
    "group": "mind",
    "tier": 1,
    "status": "live",
    "path": "games/game-100/",
    "difficulty": "medium",
    "duration": "2-5 min",
    "genre": "strategy",
    "wave": 3
  },
  {
    "id": "cau-tu-doi",
    "gameId": "game-101",
    "name": { "vi": "Cầu Từ Đôi", "en": "Word Bridge" },
    "desc": { "vi": "Nối từ tiếng Việt với nghĩa tiếng Anh đúng. Streak càng cao, điểm càng nhiều!", "en": "Match Vietnamese words to their English meanings. Higher streak, more points!" },
    "group": "mind",
    "tier": 1,
    "status": "live",
    "path": "games/cau-tu-doi/index.html",
    "difficulty": "easy",
    "duration": "2-5 min",
    "genre": "education",
    "wave": 4,
    "free": 5
  },
  {
    "id": "tho-san-nghia",
    "gameId": "game-102",
    "name": { "vi": "Thợ Săn Nghĩa", "en": "Meaning Hunter" },
    "desc": { "vi": "Chọn nghĩa đúng cho từ tiếng Anh. Càng nhanh, càng nhiều điểm!", "en": "Pick the correct meaning for English words. Faster = more points!" },
    "group": "mind",
    "tier": 1,
    "status": "live",
    "path": "games/tho-san-nghia/index.html",
    "difficulty": "easy",
    "duration": "2-5 min",
    "genre": "education",
    "wave": 4,
    "free": 5
  },
  {
    "id": "xay-cau",
    "gameId": "game-103",
    "name": { "vi": "Xây Câu", "en": "Sentence Builder" },
    "desc": { "vi": "Sắp xếp các từ để tạo thành câu tiếng Anh đúng. Càng nhiều câu, điểm càng cao!", "en": "Arrange words to form correct English sentences. More sentences, more points!" },
    "group": "mind",
    "tier": 1,
    "status": "live",
    "path": "games/xay-cau/index.html",
    "difficulty": "easy",
    "duration": "2-5 min",
    "genre": "education",
    "wave": 4,
    "free": 5
  },
  {
    "id": "mat-ma-chu",
    "gameId": "game-104",
    "name": { "vi": "Mật Mã Chữ", "en": "Word Cipher" },
    "desc": { "vi": "Giải mã từ tiếng Anh bị xáo trộn. Càng nhanh, điểm càng cao!", "en": "Unscramble English words. Faster = more points!" },
    "group": "mind",
    "tier": 1,
    "status": "live",
    "path": "games/mat-ma-chu/index.html",
    "difficulty": "easy",
    "duration": "2-5 min",
    "genre": "education",
    "wave": 4,
    "free": 5
  },
  {
    "id": "to-mau-than-ky",
    "gameId": "game-105",
    "name": { "vi": "Tô Màu Thần Kỳ", "en": "Magic Coloring" },
    "desc": { "vi": "Vẽ & tô màu tự do trên canvas. Lưu bức vẽ để nhận điểm!", "en": "Draw & color freely on canvas. Save artwork to earn points!" },
    "group": "creator",
    "tier": 1,
    "status": "live",
    "path": "games/to-mau-than-ky/index.html",
    "difficulty": "easy",
    "duration": "5-10 min",
    "genre": "creative",
    "wave": 4,
    "free": 5
  },
{
  "id": "cay-tu-vung",
  "gameId": "game-001",
  "name": {
    "vi": "Cây Từ Vựng",
    "en": "Vocabulary Tree"
  },
  "desc": {
    "vi": "Xây dựng cây từ vựng theo chủ đề.",
    "en": "Build vocabulary trees by topic."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/cay-tu-vung/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "phan-loai-than-toc",
  "gameId": "game-002",
  "name": {
    "vi": "Phân Loại Thần Tốc",
    "en": "Quick Sort"
  },
  "desc": {
    "vi": "Phân loại từ vào đúng nhóm.",
    "en": "Sort words into correct groups."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/phan-loai-than-toc/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "duong-ong-nghia",
  "gameId": "game-003",
  "name": {
    "vi": "Đường Ống Nghĩa",
    "en": "Meaning Pipes"
  },
  "desc": {
    "vi": "Nối từ với nghĩa qua đường ống.",
    "en": "Connect words to meanings through pipes."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/duong-ong-nghia/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "suy-luan-ngu-canh",
  "gameId": "game-004",
  "name": {
    "vi": "Suy Luận Ngữ Cảnh",
    "en": "Context Detective"
  },
  "desc": {
    "vi": "Đoán từ từ ngữ cảnh.",
    "en": "Guess words from context clues."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/suy-luan-ngu-canh/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "doi-chu",
  "gameId": "game-005",
  "name": {
    "vi": "Đối Chữ",
    "en": "Word Duel"
  },
  "desc": {
    "vi": "Thi đấu từ vựng hai người.",
    "en": "Vocabulary duel for two players."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/doi-chu/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "ban-do-tu",
  "gameId": "game-006",
  "name": {
    "vi": "Bản Đồ Từ",
    "en": "Word Map"
  },
  "desc": {
    "vi": "Tạo bản đồ từ liên quan.",
    "en": "Create maps of related words."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/ban-do-tu/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "noi-cham",
  "gameId": "game-007",
  "name": {
    "vi": "Nối Chấm",
    "en": "Connect the Dots"
  },
  "desc": {
    "vi": "Nối các chấm theo thứ tự.",
    "en": "Connect dots in order."
  },
  "group": "creator",
  "tier": 1,
  "status": "live",
  "path": "games/noi-cham/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "creative",
  "wave": 4,
  "free": 5
},
{
  "id": "do-theo-net-mo",
  "gameId": "game-008",
  "name": {
    "vi": "Đồ Theo Nét Mờ",
    "en": "Trace & Fade"
  },
  "desc": {
    "vi": "Tập vẽ theo nét mờ.",
    "en": "Trace fading outlines."
  },
  "group": "creator",
  "tier": 1,
  "status": "live",
  "path": "games/do-theo-net-mo/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "creative",
  "wave": 4,
  "free": 5
},
{
  "id": "ghep-hinh-sang-tao",
  "gameId": "game-009",
  "name": {
    "vi": "Ghép Hình Sáng Tạo",
    "en": "Shape Maker"
  },
  "desc": {
    "vi": "Ghép hình từ các khối cơ bản.",
    "en": "Build shapes from basic blocks."
  },
  "group": "creator",
  "tier": 1,
  "status": "live",
  "path": "games/ghep-hinh-sang-tao/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "creative",
  "wave": 4,
  "free": 5
},
{
  "id": "doi-xung-ky-dieu",
  "gameId": "game-010",
  "name": {
    "vi": "Đối Xứng Kỳ Diệu",
    "en": "Symmetry Mirror"
  },
  "desc": {
    "vi": "Vẽ đối xứng qua gương.",
    "en": "Draw with symmetry mirror."
  },
  "group": "creator",
  "tier": 1,
  "status": "live",
  "path": "games/doi-xung-ky-dieu/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "creative",
  "wave": 4,
  "free": 5
},
{
  "id": "ve-hoan-thanh",
  "gameId": "game-011",
  "name": {
    "vi": "Vẽ Hoàn Thành",
    "en": "Finish the Drawing"
  },
  "desc": {
    "vi": "Hoàn thành bức vẽ dở.",
    "en": "Finish incomplete drawings."
  },
  "group": "creator",
  "tier": 1,
  "status": "live",
  "path": "games/ve-hoan-thanh/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "creative",
  "wave": 4,
  "free": 5
},
{
  "id": "ke-chuyen-bang-tranh",
  "gameId": "game-012",
  "name": {
    "vi": "Kể Chuyện Bằng Tranh",
    "en": "Draw a Story"
  },
  "desc": {
    "vi": "Vẽ tranh kể một câu chuyện.",
    "en": "Draw a comic story."
  },
  "group": "creator",
  "tier": 1,
  "status": "live",
  "path": "games/ke-chuyen-bang-tranh/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "creative",
  "wave": 4,
  "free": 5
},
{
  "id": "ve-theo-cam-xuc",
  "gameId": "game-013",
  "name": {
    "vi": "Vẽ Theo Cảm Xúc",
    "en": "Draw the Feeling"
  },
  "desc": {
    "vi": "Vẽ cảm xúc qua màu sắc.",
    "en": "Draw feelings through colors."
  },
  "group": "creator",
  "tier": 1,
  "status": "live",
  "path": "games/ve-theo-cam-xuc/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "creative",
  "wave": 4,
  "free": 5
},
{
  "id": "phong-tranh-song",
  "gameId": "game-014",
  "name": {
    "vi": "Phòng Tranh Sống",
    "en": "Animate It"
  },
  "desc": {
    "vi": "Tạo hình động đơn giản.",
    "en": "Create simple animations."
  },
  "group": "creator",
  "tier": 1,
  "status": "live",
  "path": "games/phong-tranh-song/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "creative",
  "wave": 4,
  "free": 5
},
{
  "id": "xuong-sang-tao-tu-do",
  "gameId": "game-015",
  "name": {
    "vi": "Xưởng Sáng Tạo Tự Do",
    "en": "Free Studio"
  },
  "desc": {
    "vi": "Studio sáng tạo tự do.",
    "en": "Free creativity studio."
  },
  "group": "creator",
  "tier": 1,
  "status": "live",
  "path": "games/xuong-sang-tao-tu-do/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "creative",
  "wave": 4,
  "free": 5
},
{
  "id": "thap-ky-uc",
  "gameId": "game-016",
  "name": {
    "vi": "Tháp Ký Ức",
    "en": "Mind Stack"
  },
  "desc": {
    "vi": "Xếp tháp ký ức theo thứ tự.",
    "en": "Stack memories in order."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/thap-ky-uc/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "memory",
  "wave": 4,
  "free": 5
},
{
  "id": "khoi-xoay-trong-dau",
  "gameId": "game-017",
  "name": {
    "vi": "Khối Xoay Trong Đầu",
    "en": "MindCube"
  },
  "desc": {
    "vi": "Xoay khối 3D trong đầu.",
    "en": "Rotate 3D cubes mentally."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/khoi-xoay-trong-dau/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "puzzle",
  "wave": 4,
  "free": 5
},
{
  "id": "co-tien-tri",
  "gameId": "game-018",
  "name": {
    "vi": "Cờ Tiên Tri",
    "en": "Foresight"
  },
  "desc": {
    "vi": "Dự đoán nước cờ đối thủ.",
    "en": "Predict opponent moves."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/co-tien-tri/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "strategy",
  "wave": 4,
  "free": 5
},
{
  "id": "tia-chop-y",
  "gameId": "game-019",
  "name": {
    "vi": "Tia Chớp Ý",
    "en": "Sparks"
  },
  "desc": {
    "vi": "Nối ý tưởng nhanh nhất.",
    "en": "Connect ideas fastest."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/tia-chop-y/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "reaction",
  "wave": 4,
  "free": 5
},
{
  "id": "truc-giac-xac-suat",
  "gameId": "game-020",
  "name": {
    "vi": "Trực Giác Xác Suất",
    "en": "Hunch"
  },
  "desc": {
    "vi": "Đoán xác suất chính xác.",
    "en": "Guess probabilities accurately."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/truc-giac-xac-suat/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "dong-thac-chu-y",
  "gameId": "game-021",
  "name": {
    "vi": "Dòng Thác Chú Ý",
    "en": "Flow"
  },
  "desc": {
    "vi": "Duy trì tập trung qua thử thách.",
    "en": "Maintain focus through challenges."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/dong-thac-chu-y/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "reflex",
  "wave": 4,
  "free": 5
},
{
  "id": "cam-quy-luat",
  "gameId": "game-022",
  "name": {
    "vi": "Cảm Quy Luật",
    "en": "Aha"
  },
  "desc": {
    "vi": "Tìm quy luật ẩn nhanh chóng.",
    "en": "Find hidden patterns quickly."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/cam-quy-luat/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "logic",
  "wave": 4,
  "free": 5
},
{
  "id": "nguoi-mo-phong",
  "gameId": "game-023",
  "name": {
    "vi": "Người Mô Phỏng",
    "en": "Simulor"
  },
  "desc": {
    "vi": "Mô phỏng kết quả các sự kiện.",
    "en": "Simulate event outcomes."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/nguoi-mo-phong/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "cung-dien-ky-uc",
  "gameId": "game-024",
  "name": {
    "vi": "Cung Điện Ký Ức",
    "en": "Memory Palace"
  },
  "desc": {
    "vi": "Xây cung điện ký ức.",
    "en": "Build memory palaces."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/cung-dien-ky-uc/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "memory",
  "wave": 4,
  "free": 5
},
{
  "id": "tri-tue-tu-soi",
  "gameId": "game-025",
  "name": {
    "vi": "Trí Tuệ Tự Soi",
    "en": "Metamind"
  },
  "desc": {
    "vi": "Phân tích cách bạn suy nghĩ.",
    "en": "Analyze your own thinking."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/tri-tue-tu-soi/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "reflection",
  "wave": 4,
  "free": 5
},
{
  "id": "san-khau-tinh-huong",
  "gameId": "game-026",
  "name": {
    "vi": "Sân Khấu Tình Huống",
    "en": "Role-play Studio"
  },
  "desc": {
    "vi": "Nhập vai xử lý tình huống.",
    "en": "Role-play situation handling."
  },
  "group": "social",
  "tier": 1,
  "status": "live",
  "path": "games/san-khau-tinh-huong/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "social",
  "wave": 4,
  "free": 5
},
{
  "id": "dau-truong-tan-gau",
  "gameId": "game-027",
  "name": {
    "vi": "Đấu Trường Tán Gẫu",
    "en": "Small Talk Arena"
  },
  "desc": {
    "vi": "Luyện giao tiếp xã giao.",
    "en": "Practice small talk skills."
  },
  "group": "social",
  "tier": 1,
  "status": "live",
  "path": "games/dau-truong-tan-gau/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "social",
  "wave": 4,
  "free": 5
},
{
  "id": "lang-nghe-chu-dong",
  "gameId": "game-028",
  "name": {
    "vi": "Lắng Nghe Chủ Động",
    "en": "Active Listening"
  },
  "desc": {
    "vi": "Luyện kỹ năng lắng nghe.",
    "en": "Practice active listening."
  },
  "group": "social",
  "tier": 1,
  "status": "live",
  "path": "games/lang-nghe-chu-dong/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "social",
  "wave": 4,
  "free": 5
},
{
  "id": "sac-thai-van-phong",
  "gameId": "game-029",
  "name": {
    "vi": "Sắc Thái & Văn Phong",
    "en": "Tone & Register"
  },
  "desc": {
    "vi": "Nhận biết sắc thái lời nói.",
    "en": "Recognize tone & register."
  },
  "group": "social",
  "tier": 1,
  "status": "live",
  "path": "games/sac-thai-van-phong/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "social",
  "wave": 4,
  "free": 5
},
{
  "id": "dau-thuyet-phuc",
  "gameId": "game-030",
  "name": {
    "vi": "Đấu Thuyết Phục",
    "en": "Persuasion Duel"
  },
  "desc": {
    "vi": "Thi thuyết phục đối phương.",
    "en": "Persuasion duel."
  },
  "group": "social",
  "tier": 1,
  "status": "live",
  "path": "games/dau-thuyet-phuc/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "social",
  "wave": 4,
  "free": 5
},
{
  "id": "suy-luan-luoi",
  "gameId": "game-031",
  "name": {
    "vi": "Suy Luận Lưới",
    "en": "Logic Grid"
  },
  "desc": {
    "vi": "Giải lưới suy luận logic.",
    "en": "Solve logic grid puzzles."
  },
  "group": "social",
  "tier": 1,
  "status": "live",
  "path": "games/suy-luan-luoi/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "logic",
  "wave": 4,
  "free": 5
},
{
  "id": "tho-san-nguy-bien",
  "gameId": "game-032",
  "name": {
    "vi": "Thợ Săn Ngụy Biện",
    "en": "Fallacy Hunter"
  },
  "desc": {
    "vi": "Tìm lỗi ngụy biện.",
    "en": "Hunt logical fallacies."
  },
  "group": "social",
  "tier": 1,
  "status": "live",
  "path": "games/tho-san-nguy-bien/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "logic",
  "wave": 4,
  "free": 5
},
{
  "id": "kien-truc-lap-luan",
  "gameId": "game-033",
  "name": {
    "vi": "Kiến Trúc Lập Luận",
    "en": "Argument Architect"
  },
  "desc": {
    "vi": "Xây dựng lập luận vững.",
    "en": "Build solid arguments."
  },
  "group": "social",
  "tier": 1,
  "status": "live",
  "path": "games/kien-truc-lap-luan/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "logic",
  "wave": 4,
  "free": 5
},
{
  "id": "phong-thi-nghiem-quyet-dinh",
  "gameId": "game-034",
  "name": {
    "vi": "Phòng Thí Nghiệm Quyết Định",
    "en": "Decision Lab"
  },
  "desc": {
    "vi": "Thử nghiệm quyết định.",
    "en": "Test decision-making."
  },
  "group": "social",
  "tier": 1,
  "status": "live",
  "path": "games/phong-thi-nghiem-quyet-dinh/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "mo-phong-dam-phan",
  "gameId": "game-035",
  "name": {
    "vi": "Mô Phỏng Đàm Phán",
    "en": "Negotiation Sim"
  },
  "desc": {
    "vi": "Mô phỏng đàm phán.",
    "en": "Negotiation simulation."
  },
  "group": "social",
  "tier": 1,
  "status": "live",
  "path": "games/mo-phong-dam-phan/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "ma-tran-giai-phap",
  "gameId": "game-001",
  "name": {
    "vi": "Ma Trận Giải Pháp",
    "en": "Solution Matrix"
  },
  "desc": {
    "vi": "Đánh giá & chọn giải pháp tối ưu.",
    "en": "Evaluate & pick optimal solutions."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/ma-tran-giai-phap/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "strategy",
  "wave": 4,
  "free": 5
},
{
  "id": "ban-co-thi-truong",
  "gameId": "game-002",
  "name": {
    "vi": "Bàn Cờ Thị Trường",
    "en": "Market Board"
  },
  "desc": {
    "vi": "Chiến lược thị trường trên bàn cờ.",
    "en": "Market strategy board game."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/ban-co-thi-truong/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "strategy",
  "wave": 4,
  "free": 5
},
{
  "id": "kien-truc-ke-hoach",
  "gameId": "game-003",
  "name": {
    "vi": "Kiến Trúc Kế Hoạch",
    "en": "Plan Architect"
  },
  "desc": {
    "vi": "Xây dựng kế hoạch chi tiết.",
    "en": "Build detailed plans."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/kien-truc-ke-hoach/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "strategy",
  "wave": 4,
  "free": 5
},
{
  "id": "mo-hinh-kinh-doanh",
  "gameId": "game-004",
  "name": {
    "vi": "Mô Hình Kinh Doanh",
    "en": "Model Canvas"
  },
  "desc": {
    "vi": "Thiết kế mô hình kinh doanh.",
    "en": "Design business models."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/mo-hinh-kinh-doanh/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "dau-truong-goi-von",
  "gameId": "game-005",
  "name": {
    "vi": "Đấu Trường Gọi Vốn",
    "en": "Pitch Arena"
  },
  "desc": {
    "vi": "Thi gọi vốn đầu tư.",
    "en": "Pitch competition."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/dau-truong-goi-von/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "social",
  "wave": 4,
  "free": 5
},
{
  "id": "phong-lab-dinh-gia",
  "gameId": "game-006",
  "name": {
    "vi": "Phòng Lab Định Giá",
    "en": "Pricing Lab"
  },
  "desc": {
    "vi": "Thử nghiệm định giá sản phẩm.",
    "en": "Pricing experiments."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/phong-lab-dinh-gia/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "cay-quyet-dinh-kinh-doanh",
  "gameId": "game-007",
  "name": {
    "vi": "Cây Quyết Định Kinh Doanh",
    "en": "Decision Tree"
  },
  "desc": {
    "vi": "Phân tích quyết định kinh doanh.",
    "en": "Business decision trees."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/cay-quyet-dinh-kinh-doanh/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "logic",
  "wave": 4,
  "free": 5
},
{
  "id": "ly-luan-sang-tao",
  "gameId": "game-008",
  "name": {
    "vi": "Lý Luận Sáng Tạo",
    "en": "Creative Reasoning"
  },
  "desc": {
    "vi": "Suy luận sáng tạo giải quyết vấn đề.",
    "en": "Creative problem reasoning."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/ly-luan-sang-tao/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "logic",
  "wave": 4,
  "free": 5
},
{
  "id": "luat-kinh-doanh",
  "gameId": "game-009",
  "name": {
    "vi": "Luật Kinh Doanh",
    "en": "Business Law Quest"
  },
  "desc": {
    "vi": "Học luật qua tình huống thực tế.",
    "en": "Learn law through real cases."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/luat-kinh-doanh/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "mo-phong-van-hanh",
  "gameId": "game-010",
  "name": {
    "vi": "Mô Phỏng Vận Hành",
    "en": "Operations Sim"
  },
  "desc": {
    "vi": "Mô phỏng vận hành doanh nghiệp.",
    "en": "Business operations sim."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/mo-phong-van-hanh/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "dong-thuan",
  "gameId": "game-011",
  "name": {
    "vi": "Đồng Thuận",
    "en": "Consensus"
  },
  "desc": {
    "vi": "Tìm tiếng nói chung trong nhóm.",
    "en": "Find group consensus."
  },
  "group": "exclusive",
  "tier": 1,
  "status": "live",
  "path": "games/dong-thuan/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "social",
  "wave": 4,
  "free": 5
},
{
  "id": "nguoi-gac-su-that",
  "gameId": "game-012",
  "name": {
    "vi": "Người Gác Sự Thật",
    "en": "Proof Keepers"
  },
  "desc": {
    "vi": "Bảo vệ & kiểm chứng sự thật.",
    "en": "Protect & verify truth."
  },
  "group": "exclusive",
  "tier": 1,
  "status": "live",
  "path": "games/nguoi-gac-su-that/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "logic",
  "wave": 4,
  "free": 5
},
{
  "id": "ban-giao-huong-dam-dong",
  "gameId": "game-013",
  "name": {
    "vi": "Bản Giao Hưởng Của Đám Đông",
    "en": "Living Symphony"
  },
  "desc": {
    "vi": "Phối hợp như dàn nhạc sống.",
    "en": "Coordinate like a living symphony."
  },
  "group": "exclusive",
  "tier": 1,
  "status": "live",
  "path": "games/ban-giao-huong-dam-dong/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "social",
  "wave": 4,
  "free": 5
},
{
  "id": "kham-ky-uc",
  "gameId": "game-014",
  "name": {
    "vi": "Khảm Ký Ức",
    "en": "Memory Mosaic"
  },
  "desc": {
    "vi": "Xếp ký ức thành tranh khảm.",
    "en": "Piece memories into mosaic."
  },
  "group": "exclusive",
  "tier": 1,
  "status": "live",
  "path": "games/kham-ky-uc/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "memory",
  "wave": 4,
  "free": 5
},
{
  "id": "he-qua",
  "gameId": "game-015",
  "name": {
    "vi": "Hệ Quả",
    "en": "Ripple"
  },
  "desc": {
    "vi": "Quan sát hệ quả lan tỏa.",
    "en": "Observe rippling consequences."
  },
  "group": "exclusive",
  "tier": 1,
  "status": "live",
  "path": "games/he-qua/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "nguoi-phien-dich-van-vat",
  "gameId": "game-016",
  "name": {
    "vi": "Người Phiên Dịch Vạn Vật",
    "en": "Translator of All Things"
  },
  "desc": {
    "vi": "Dịch ngôn ngữ vạn vật.",
    "en": "Translate the language of things."
  },
  "group": "exclusive",
  "tier": 1,
  "status": "live",
  "path": "games/nguoi-phien-dich-van-vat/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "puzzle",
  "wave": 4,
  "free": 5
},
{
  "id": "tro-choi-cau-hoi",
  "gameId": "game-017",
  "name": {
    "vi": "Trò Chơi Câu Hỏi",
    "en": "The Question Game"
  },
  "desc": {
    "vi": "Đặt câu hỏi để khám phá.",
    "en": "Ask questions to discover."
  },
  "group": "exclusive",
  "tier": 1,
  "status": "live",
  "path": "games/tro-choi-cau-hoi/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "exploration",
  "wave": 4,
  "free": 5
},
{
  "id": "khu-vuon-chung",
  "gameId": "game-018",
  "name": {
    "vi": "Khu Vườn Chung",
    "en": "The Commons"
  },
  "desc": {
    "vi": "Quản lý nguồn lực chung.",
    "en": "Manage shared resources."
  },
  "group": "exclusive",
  "tier": 1,
  "status": "live",
  "path": "games/khu-vuon-chung/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "tam-guong",
  "gameId": "game-019",
  "name": {
    "vi": "Tấm Gương",
    "en": "The Mirror"
  },
  "desc": {
    "vi": "Soi chiếu bản thân qua game.",
    "en": "Self-reflection through play."
  },
  "group": "exclusive",
  "tier": 1,
  "status": "live",
  "path": "games/tam-guong/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "reflection",
  "wave": 4,
  "free": 5
},
{
  "id": "doi-vai",
  "gameId": "game-020",
  "name": {
    "vi": "Đổi Vai",
    "en": "Walk In My Shoes"
  },
  "desc": {
    "vi": "Trải nghiệm góc nhìn người khác.",
    "en": "Experience another perspective."
  },
  "group": "exclusive",
  "tier": 1,
  "status": "live",
  "path": "games/doi-vai/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "social",
  "wave": 4,
  "free": 5
},
{
  "id": "click-champion",
  "gameId": "game-001",
  "name": {
    "vi": "Vua Click",
    "en": "Click Champion"
  },
  "desc": {
    "vi": "Click nhanh trong 10 giây.",
    "en": "Speed click in 10 seconds."
  },
  "group": "micro",
  "tier": 1,
  "status": "live",
  "path": "games/click-champion/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "reflex",
  "wave": 4,
  "free": 5
},
{
  "id": "number-rush",
  "gameId": "game-002",
  "name": {
    "vi": "Cuộc Đua Số",
    "en": "Number Rush"
  },
  "desc": {
    "vi": "Tìm số theo thứ tự nhanh nhất.",
    "en": "Find numbers in order fastest."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/number-rush/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "reflex",
  "wave": 4,
  "free": 5
},
{
  "id": "color-match",
  "gameId": "game-003",
  "name": {
    "vi": "Màu Đúng",
    "en": "Color Match"
  },
  "desc": {
    "vi": "Chọn màu đúng theo yêu cầu.",
    "en": "Pick the correct color."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/color-match/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "reflex",
  "wave": 4,
  "free": 5
},
{
  "id": "shape-sort",
  "gameId": "game-004",
  "name": {
    "vi": "Sắp Xếp Hình",
    "en": "Shape Sort"
  },
  "desc": {
    "vi": "Sắp xếp hình theo thứ tự.",
    "en": "Sort shapes in order."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/shape-sort/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "puzzle",
  "wave": 4,
  "free": 5
},
{
  "id": "word-race",
  "gameId": "game-005",
  "name": {
    "vi": "Đua Từ",
    "en": "Word Race"
  },
  "desc": {
    "vi": "Gõ từ tiếng Anh nhanh nhất.",
    "en": "Type English words fastest."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/word-race/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "reflex",
  "wave": 4,
  "free": 5
},
{
  "id": "memory-match",
  "gameId": "game-006",
  "name": {
    "vi": "Ghi Nhớ",
    "en": "Memory Match"
  },
  "desc": {
    "vi": "Lật thẻ tìm cặp giống nhau.",
    "en": "Flip cards to find pairs."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/memory-match/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "memory",
  "wave": 4,
  "free": 5
},
{
  "id": "math-blitz",
  "gameId": "game-007",
  "name": {
    "vi": "Toán Tốc Độ",
    "en": "Math Blitz"
  },
  "desc": {
    "vi": "Giải toán nhanh trong 60 giây.",
    "en": "Solve math fast in 60 seconds."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/math-blitz/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "reaction-time",
  "gameId": "game-008",
  "name": {
    "vi": "Phản Xạ",
    "en": "Reaction Time"
  },
  "desc": {
    "vi": "Đo thời gian phản xạ.",
    "en": "Measure reaction time."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/reaction-time/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "reflex",
  "wave": 4,
  "free": 5
},
{
  "id": "pattern-repeat",
  "gameId": "game-009",
  "name": {
    "vi": "Lặp Mẫu",
    "en": "Pattern Repeat"
  },
  "desc": {
    "vi": "Nhớ & lặp lại chuỗi mẫu.",
    "en": "Remember & repeat pattern."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/pattern-repeat/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "memory",
  "wave": 4,
  "free": 5
},
{
  "id": "balloon-pop",
  "gameId": "game-010",
  "name": {
    "vi": "Bắn Bóng",
    "en": "Balloon Pop"
  },
  "desc": {
    "vi": "Bắn bóng bay theo màu.",
    "en": "Pop balloons by color."
  },
  "group": "creator",
  "tier": 1,
  "status": "live",
  "path": "games/balloon-pop/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "reflex",
  "wave": 4,
  "free": 5
},
{
  "id": "maze-runner",
  "gameId": "game-011",
  "name": {
    "vi": "Chạy Mê Cung",
    "en": "Maze Runner"
  },
  "desc": {
    "vi": "Tìm đường ra khỏi mê cung.",
    "en": "Find way out of maze."
  },
  "group": "exploration",
  "tier": 1,
  "status": "live",
  "path": "games/maze-runner/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "puzzle",
  "wave": 4,
  "free": 5
},
{
  "id": "tile-slide",
  "gameId": "game-012",
  "name": {
    "vi": "Trượt Ô",
    "en": "Tile Slide"
  },
  "desc": {
    "vi": "Sắp xếp ô số theo thứ tự.",
    "en": "Slide tiles into order."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/tile-slide/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "puzzle",
  "wave": 4,
  "free": 5
},
{
  "id": "hangman-vi",
  "gameId": "game-013",
  "name": {
    "vi": "Treo Cờ",
    "en": "Hangman VI"
  },
  "desc": {
    "vi": "Đoán từ tiếng Việt.",
    "en": "Guess Vietnamese words."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/hangman-vi/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "puzzle",
  "wave": 4,
  "free": 5
},
{
  "id": "trivia-vi",
  "gameId": "game-014",
  "name": {
    "vi": "Đố Vui",
    "en": "Trivia VI"
  },
  "desc": {
    "vi": "Trả lời câu hỏi đố vui.",
    "en": "Answer trivia questions."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/trivia-vi/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "quiz",
  "wave": 4,
  "free": 5
},
{
  "id": "balance-scale",
  "gameId": "game-015",
  "name": {
    "vi": "Cân Bằng",
    "en": "Balance Scale"
  },
  "desc": {
    "vi": "Cân bằng vật thể hai bên.",
    "en": "Balance objects on scale."
  },
  "group": "life",
  "tier": 1,
  "status": "live",
  "path": "games/balance-scale/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "puzzle",
  "wave": 4,
  "free": 5
},
{
  "id": "rhythm-tap",
  "gameId": "game-016",
  "name": {
    "vi": "Nhịp Điệu",
    "en": "Rhythm Tap"
  },
  "desc": {
    "vi": "Tap theo nhịp nhạc.",
    "en": "Tap to the rhythm."
  },
  "group": "creator",
  "tier": 1,
  "status": "live",
  "path": "games/rhythm-tap/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "music",
  "wave": 4,
  "free": 5
},
{
  "id": "tower-stack",
  "gameId": "game-017",
  "name": {
    "vi": "Xếp Tháp",
    "en": "Tower Stack"
  },
  "desc": {
    "vi": "Xếp khối xây tháp cao.",
    "en": "Stack blocks to build tower."
  },
  "group": "creator",
  "tier": 1,
  "status": "live",
  "path": "games/tower-stack/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "reflex",
  "wave": 4,
  "free": 5
},
{
  "id": "avoid-shapes",
  "gameId": "game-018",
  "name": {
    "vi": "Tránh Hình",
    "en": "Avoid Shapes"
  },
  "desc": {
    "vi": "Di chuyển tránh chướng ngại.",
    "en": "Move to avoid obstacles."
  },
  "group": "exploration",
  "tier": 1,
  "status": "live",
  "path": "games/avoid-shapes/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "reflex",
  "wave": 4,
  "free": 5
},
{
  "id": "word-search",
  "gameId": "game-019",
  "name": {
    "vi": "Tìm Từ",
    "en": "Word Search"
  },
  "desc": {
    "vi": "Tìm từ ẩn trong lưới chữ.",
    "en": "Find hidden words in grid."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/word-search/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "puzzle",
  "wave": 4,
  "free": 5
},
{
  "id": "sudoku-lite",
  "gameId": "game-020",
  "name": {
    "vi": "Sudoku Nhẹ",
    "en": "Sudoku Lite"
  },
  "desc": {
    "vi": "Sudoku 4x4 đơn giản.",
    "en": "Simple 4x4 Sudoku."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/sudoku-lite/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "puzzle",
  "wave": 4,
  "free": 5
},
{
  "id": "dice-poker",
  "gameId": "game-021",
  "name": {
    "vi": "Xúc Xắc",
    "en": "Dice Poker"
  },
  "desc": {
    "vi": "Tung xúc xắc tạo bộ đẹp.",
    "en": "Roll dice for best hand."
  },
  "group": "social",
  "tier": 1,
  "status": "live",
  "path": "games/dice-poker/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "luck",
  "wave": 4,
  "free": 5
},
{
  "id": "code-breaker",
  "gameId": "game-022",
  "name": {
    "vi": "Phá Mã",
    "en": "Code Breaker"
  },
  "desc": {
    "vi": "Đoán mã 4 số.",
    "en": "Guess 4-digit code."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/code-breaker/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "puzzle",
  "wave": 4,
  "free": 5
},
{
  "id": "emoji-story",
  "gameId": "game-023",
  "name": {
    "vi": "Truyện Emoji",
    "en": "Emoji Story"
  },
  "desc": {
    "vi": "Kể chuyện bằng emoji.",
    "en": "Tell stories with emojis."
  },
  "group": "social",
  "tier": 1,
  "status": "live",
  "path": "games/emoji-story/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "creative",
  "wave": 4,
  "free": 5
},
{
  "id": "breathing-guide",
  "gameId": "game-024",
  "name": {
    "vi": "Hít Thở",
    "en": "Breathing Guide"
  },
  "desc": {
    "vi": "Hướng dẫn hít thở thiền.",
    "en": "Guided breathing meditation."
  },
  "group": "life",
  "tier": 1,
  "status": "live",
  "path": "games/breathing-guide/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "gratitude-jar",
  "gameId": "game-025",
  "name": {
    "vi": "Lọ Biết Ơn",
    "en": "Gratitude Jar"
  },
  "desc": {
    "vi": "Ghi lại điều biết ơn mỗi ngày.",
    "en": "Record daily gratitude."
  },
  "group": "life",
  "tier": 1,
  "status": "live",
  "path": "games/gratitude-jar/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "typing-sprint",
  "gameId": "game-001",
  "name": {
    "vi": "Đua Gõ Chữ",
    "en": "Typing Sprint"
  },
  "desc": {
    "vi": "Gõ đoạn văn nhanh nhất có thể.",
    "en": "Type paragraphs as fast as you can."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/typing-sprint/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "reflex",
  "wave": 4,
  "free": 5
},
{
  "id": "dot-connect",
  "gameId": "game-002",
  "name": {
    "vi": "Nối Điểm",
    "en": "Dot Connect"
  },
  "desc": {
    "vi": "Nối các điểm cùng màu.",
    "en": "Connect dots of same color."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/dot-connect/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "puzzle",
  "wave": 4,
  "free": 5
},
{
  "id": "jigsaw-vi",
  "gameId": "game-003",
  "name": {
    "vi": "Ghép Hình",
    "en": "Jigsaw VI"
  },
  "desc": {
    "vi": "Ghép tranh từ các mảnh.",
    "en": "Assemble pictures from pieces."
  },
  "group": "creator",
  "tier": 1,
  "status": "live",
  "path": "games/jigsaw-vi/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "puzzle",
  "wave": 4,
  "free": 5
},
{
  "id": "speed-math",
  "gameId": "game-004",
  "name": {
    "vi": "Toán Tốc Độ Cao",
    "en": "Speed Math"
  },
  "desc": {
    "vi": "Giải 100 phép toán nhanh.",
    "en": "Solve 100 math problems fast."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/speed-math/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "focus-cursor",
  "gameId": "game-005",
  "name": {
    "vi": "Con Trỏ Tập Trung",
    "en": "Focus Cursor"
  },
  "desc": {
    "vi": "Theo dõi con trỏ biến mất.",
    "en": "Track disappearing cursor."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/focus-cursor/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "reflex",
  "wave": 4,
  "free": 5
},
{
  "id": "word-chain",
  "gameId": "game-006",
  "name": {
    "vi": "Chuỗi Từ",
    "en": "Word Chain"
  },
  "desc": {
    "vi": "Tạo chuỗi từ nối tiếp.",
    "en": "Build word chains."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/word-chain/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "puzzle",
  "wave": 4,
  "free": 5
},
{
  "id": "shadow-match",
  "gameId": "game-007",
  "name": {
    "vi": "Bóng Đổ",
    "en": "Shadow Match"
  },
  "desc": {
    "vi": "Ghép vật với bóng đúng.",
    "en": "Match objects to shadows."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/shadow-match/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "puzzle",
  "wave": 4,
  "free": 5
},
{
  "id": "sequence-memory",
  "gameId": "game-008",
  "name": {
    "vi": "Chuỗi Ký Ức",
    "en": "Sequence Memory"
  },
  "desc": {
    "vi": "Nhớ & lặp chuỗi hình.",
    "en": "Remember & repeat shape sequences."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/sequence-memory/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "memory",
  "wave": 4,
  "free": 5
},
{
  "id": "calm-ocean",
  "gameId": "game-009",
  "name": {
    "vi": "Đại Dương Yên Bình",
    "en": "Calm Ocean"
  },
  "desc": {
    "vi": "Thư giãn với đại dương ảo.",
    "en": "Relax with virtual ocean."
  },
  "group": "life",
  "tier": 1,
  "status": "live",
  "path": "games/calm-ocean/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "pomodoro-game",
  "gameId": "game-010",
  "name": {
    "vi": "Pomodoro",
    "en": "Pomodoro Game"
  },
  "desc": {
    "vi": "Game hóa kỹ thuật Pomodoro.",
    "en": "Gamified Pomodoro technique."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/pomodoro-game/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "productivity",
  "wave": 4,
  "free": 5
},
{
  "id": "habit-tracker",
  "gameId": "game-011",
  "name": {
    "vi": "Theo Dõi Thói Quen",
    "en": "Habit Tracker"
  },
  "desc": {
    "vi": "Đánh dấu thói quen hàng ngày.",
    "en": "Track daily habits."
  },
  "group": "life",
  "tier": 1,
  "status": "live",
  "path": "games/habit-tracker/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "productivity",
  "wave": 4,
  "free": 5
},
{
  "id": "energy-match",
  "gameId": "game-012",
  "name": {
    "vi": "Năng Lượng",
    "en": "Energy Match"
  },
  "desc": {
    "vi": "Ghép năng lượng tiêu cực/thành tích cực.",
    "en": "Match energy to transform."
  },
  "group": "life",
  "tier": 1,
  "status": "live",
  "path": "games/energy-match/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "puzzle",
  "wave": 4,
  "free": 5
},
{
  "id": "story-seeds",
  "gameId": "game-013",
  "name": {
    "vi": "Hạt Giống Truyện",
    "en": "Story Seeds"
  },
  "desc": {
    "vi": "Gieo hạt giống cho câu chuyện.",
    "en": "Plant seeds for stories."
  },
  "group": "creator",
  "tier": 1,
  "status": "live",
  "path": "games/story-seeds/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "creative",
  "wave": 4,
  "free": 5
},
{
  "id": "zen-garden",
  "gameId": "game-001",
  "name": {
    "vi": "Vườn Thiền",
    "en": "Zen Garden"
  },
  "desc": {
    "vi": "Thiết kế vườn zen tĩnh lặng.",
    "en": "Design a serene zen garden."
  },
  "group": "life",
  "tier": 1,
  "status": "live",
  "path": "games/zen-garden/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "creative",
  "wave": 4,
  "free": 5
},
{
  "id": "dream-journal",
  "gameId": "game-002",
  "name": {
    "vi": "Nhật Ký Giấc Mơ",
    "en": "Dream Journal"
  },
  "desc": {
    "vi": "Ghi chép & phân tích giấc mơ.",
    "en": "Record & analyze dreams."
  },
  "group": "life",
  "tier": 1,
  "status": "live",
  "path": "games/dream-journal/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "quote-machine",
  "gameId": "game-003",
  "name": {
    "vi": "Máy Danh Ngôn",
    "en": "Quote Machine"
  },
  "desc": {
    "vi": "Tạo & chia sẻ danh ngôn.",
    "en": "Generate & share quotes."
  },
  "group": "social",
  "tier": 1,
  "status": "live",
  "path": "games/quote-machine/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "creative",
  "wave": 4,
  "free": 5
},
{
  "id": "mood-ring",
  "gameId": "game-004",
  "name": {
    "vi": "Nhẫn Tâm Trạng",
    "en": "Mood Ring"
  },
  "desc": {
    "vi": "Chọn màu theo tâm trạng.",
    "en": "Pick color by mood."
  },
  "group": "life",
  "tier": 1,
  "status": "live",
  "path": "games/mood-ring/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "collab-canvas",
  "gameId": "game-005",
  "name": {
    "vi": "Vẽ Chung",
    "en": "Collab Canvas"
  },
  "desc": {
    "vi": "Vẽ cùng người khác.",
    "en": "Draw together with others."
  },
  "group": "social",
  "tier": 1,
  "status": "live",
  "path": "games/collab-canvas/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "creative",
  "wave": 4,
  "free": 5
},
{
  "id": "truth-dare",
  "gameId": "game-006",
  "name": {
    "vi": "Thật Hay Thách",
    "en": "Truth Dare"
  },
  "desc": {
    "vi": "Thật hay thách phiên bản nhẹ.",
    "en": "Light truth or dare."
  },
  "group": "social",
  "tier": 1,
  "status": "live",
  "path": "games/truth-dare/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "social",
  "wave": 4,
  "free": 5
},
{
  "id": "would-you-rather",
  "gameId": "game-007",
  "name": {
    "vi": "Bạn Chọn Gì",
    "en": "Would You Rather"
  },
  "desc": {
    "vi": "Chọn giữa hai phương án.",
    "en": "Choose between two options."
  },
  "group": "social",
  "tier": 1,
  "status": "live",
  "path": "games/would-you-rather/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "social",
  "wave": 4,
  "free": 5
},
{
  "id": "icebreaker",
  "gameId": "game-008",
  "name": {
    "vi": "Phá Băng",
    "en": "Icebreaker"
  },
  "desc": {
    "vi": "Câu hỏi phá băng.",
    "en": "Icebreaker questions."
  },
  "group": "social",
  "tier": 1,
  "status": "live",
  "path": "games/icebreaker/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "social",
  "wave": 4,
  "free": 5
},
{
  "id": "debate-club",
  "gameId": "game-009",
  "name": {
    "vi": "Câu Lạc Bộ Tranh Luận",
    "en": "Debate Club"
  },
  "desc": {
    "vi": "Tranh luận chủ đề ngẫu nhiên.",
    "en": "Debate random topics."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/debate-club/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "social",
  "wave": 4,
  "free": 5
},
{
  "id": "brain-dump",
  "gameId": "game-010",
  "name": {
    "vi": "Xả Não",
    "en": "Brain Dump"
  },
  "desc": {
    "vi": "Viết ra mọi ý nghĩ trong 60 giây.",
    "en": "Dump all thoughts in 60s."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/brain-dump/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "productivity",
  "wave": 4,
  "free": 5
},
{
  "id": "priority-matrix",
  "gameId": "game-011",
  "name": {
    "vi": "Ma Trận Ưu Tiên",
    "en": "Priority Matrix"
  },
  "desc": {
    "vi": "Sắp xếp việc theo ưu tiên.",
    "en": "Sort tasks by priority."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/priority-matrix/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "productivity",
  "wave": 4,
  "free": 5
},
{
  "id": "goal-mapper",
  "gameId": "game-012",
  "name": {
    "vi": "Bản Đồ Mục Tiêu",
    "en": "Goal Mapper"
  },
  "desc": {
    "vi": "Vẽ bản đồ mục tiêu.",
    "en": "Map out your goals."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/goal-mapper/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "productivity",
  "wave": 4,
  "free": 5
},
{
  "id": "skill-tree",
  "gameId": "game-013",
  "name": {
    "vi": "Cây Kỹ Năng",
    "en": "Skill Tree"
  },
  "desc": {
    "vi": "Xây dựng cây kỹ năng cá nhân.",
    "en": "Build personal skill tree."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/skill-tree/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "productivity",
  "wave": 4,
  "free": 5
},
{
  "id": "mini-paint",
  "gameId": "game-014",
  "name": {
    "vi": "Vẽ Mini",
    "en": "Mini Paint"
  },
  "desc": {
    "vi": "Bảng vẽ pixel mini.",
    "en": "Mini pixel paint board."
  },
  "group": "creator",
  "tier": 1,
  "status": "live",
  "path": "games/mini-paint/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "creative",
  "wave": 4,
  "free": 5
},
{
  "id": "ascii-art",
  "gameId": "game-015",
  "name": {
    "vi": "Nghệ Thuật ASCII",
    "en": "ASCII Art"
  },
  "desc": {
    "vi": "Tạo tranh ASCII.",
    "en": "Create ASCII art."
  },
  "group": "creator",
  "tier": 1,
  "status": "live",
  "path": "games/ascii-art/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "creative",
  "wave": 4,
  "free": 5
},
{
  "id": "sound-board",
  "gameId": "game-016",
  "name": {
    "vi": "Bảng Âm Thanh",
    "en": "Sound Board"
  },
  "desc": {
    "vi": "Phát âm thanh thư giãn.",
    "en": "Play relaxing sounds."
  },
  "group": "life",
  "tier": 1,
  "status": "live",
  "path": "games/sound-board/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "breath-pacer",
  "gameId": "game-017",
  "name": {
    "vi": "Nhịp Thở",
    "en": "Breath Pacer"
  },
  "desc": {
    "vi": "Hít thở theo nhịp điệu.",
    "en": "Breathe to the rhythm."
  },
  "group": "life",
  "tier": 1,
  "status": "live",
  "path": "games/breath-pacer/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "gratitude-wall",
  "gameId": "game-018",
  "name": {
    "vi": "Tường Biết Ơn",
    "en": "Gratitude Wall"
  },
  "desc": {
    "vi": "Dán lời biết ơn lên tường.",
    "en": "Pin gratitude notes on wall."
  },
  "group": "social",
  "tier": 1,
  "status": "live",
  "path": "games/gratitude-wall/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "kindness-roulette",
  "gameId": "game-019",
  "name": {
    "vi": "Vòng Quay Tử Tế",
    "en": "Kindness Roulette"
  },
  "desc": {
    "vi": "Quay để nhận hành động tử tế.",
    "en": "Spin for a kind act."
  },
  "group": "social",
  "tier": 1,
  "status": "live",
  "path": "games/kindness-roulette/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "daily-challenge",
  "gameId": "game-020",
  "name": {
    "vi": "Thử Thách Hàng Ngày",
    "en": "Daily Challenge"
  },
  "desc": {
    "vi": "Hoàn thành thử thách mỗi ngày.",
    "en": "Complete daily challenges."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/daily-challenge/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "productivity",
  "wave": 4,
  "free": 5
},
{
  "id": "mind-sweep",
  "gameId": "game-021",
  "name": {
    "vi": "Quét Tâm Trí",
    "en": "Mind Sweep"
  },
  "desc": {
    "vi": "Liệt kê & tổ chức suy nghĩ.",
    "en": "List & organize thoughts."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/mind-sweep/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "productivity",
  "wave": 4,
  "free": 5
},
{
  "id": "idea-generator",
  "gameId": "game-022",
  "name": {
    "vi": "Máy Tạo Ý Tưởng",
    "en": "Idea Generator"
  },
  "desc": {
    "vi": "Tạo ý tưởng ngẫu nhiên.",
    "en": "Generate random ideas."
  },
  "group": "creator",
  "tier": 1,
  "status": "live",
  "path": "games/idea-generator/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "creative",
  "wave": 4,
  "free": 5
},
{
  "id": "story-starter",
  "gameId": "game-023",
  "name": {
    "vi": "Khởi Đầu Truyện",
    "en": "Story Starter"
  },
  "desc": {
    "vi": "Nhận mở đầu truyện ngẫu nhiên.",
    "en": "Get random story starters."
  },
  "group": "creator",
  "tier": 1,
  "status": "live",
  "path": "games/story-starter/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "creative",
  "wave": 4,
  "free": 5
},
{
  "id": "poem-maker",
  "gameId": "game-024",
  "name": {
    "vi": "Máy Làm Thơ",
    "en": "Poem Maker"
  },
  "desc": {
    "vi": "Tạo thơ từ từ khóa.",
    "en": "Create poems from keywords."
  },
  "group": "creator",
  "tier": 1,
  "status": "live",
  "path": "games/poem-maker/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "creative",
  "wave": 4,
  "free": 5
},
{
  "id": "vision-board",
  "gameId": "game-025",
  "name": {
    "vi": "Tấm Nhìn",
    "en": "Vision Board"
  },
  "desc": {
    "vi": "Tạo bảng tầm nhìn cá nhân.",
    "en": "Create personal vision board."
  },
  "group": "life",
  "tier": 1,
  "status": "live",
  "path": "games/vision-board/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "creative",
  "wave": 4,
  "free": 5
},
{
  "id": "color-harmony",
  "gameId": "game-001",
  "name": {
    "vi": "Hòa Sắc",
    "en": "Color Harmony"
  },
  "desc": {
    "vi": "Tạo bảng màu hài hòa.",
    "en": "Create harmonious color palettes."
  },
  "group": "creator",
  "tier": 1,
  "status": "live",
  "path": "games/color-harmony/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "creative",
  "wave": 4,
  "free": 5
},
{
  "id": "font-pairing",
  "gameId": "game-002",
  "name": {
    "vi": "Ghép Font",
    "en": "Font Pairing"
  },
  "desc": {
    "vi": "Ghép cặp font chữ đẹp.",
    "en": "Pair beautiful fonts."
  },
  "group": "creator",
  "tier": 1,
  "status": "live",
  "path": "games/font-pairing/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "creative",
  "wave": 4,
  "free": 5
},
{
  "id": "logo-sketch",
  "gameId": "game-003",
  "name": {
    "vi": "Phác Thảo Logo",
    "en": "Logo Sketch"
  },
  "desc": {
    "vi": "Phác thảo logo nhanh.",
    "en": "Sketch logos quickly."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/logo-sketch/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "creative",
  "wave": 4,
  "free": 5
},
{
  "id": "pitch-deck",
  "gameId": "game-004",
  "name": {
    "vi": "Bài Trình Bày",
    "en": "Pitch Deck"
  },
  "desc": {
    "vi": "Tạo slide pitch đơn giản.",
    "en": "Create simple pitch slides."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/pitch-deck/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "productivity",
  "wave": 4,
  "free": 5
},
{
  "id": "swot-game",
  "gameId": "game-005",
  "name": {
    "vi": "Trò SWOT",
    "en": "SWOT Game"
  },
  "desc": {
    "vi": "Phân tích SWOT tương tác.",
    "en": "Interactive SWOT analysis."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/swot-game/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "productivity",
  "wave": 4,
  "free": 5
},
{
  "id": "customer-journey",
  "gameId": "game-006",
  "name": {
    "vi": "Hành Trình Khách",
    "en": "Customer Journey"
  },
  "desc": {
    "vi": "Vẽ hành trình khách hàng.",
    "en": "Map customer journey."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/customer-journey/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "productivity",
  "wave": 4,
  "free": 5
},
{
  "id": "value-proposition",
  "gameId": "game-007",
  "name": {
    "vi": "Giá Trị Cốt Lõi",
    "en": "Value Proposition"
  },
  "desc": {
    "vi": "Xác định giá trị cốt lõi.",
    "en": "Define value proposition."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/value-proposition/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "productivity",
  "wave": 4,
  "free": 5
},
{
  "id": "competitor-map",
  "gameId": "game-008",
  "name": {
    "vi": "Bản Đồ Đối Thủ",
    "en": "Competitor Map"
  },
  "desc": {
    "vi": "Vẽ bản đồ đối thủ cạnh tranh.",
    "en": "Map competitors."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/competitor-map/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "productivity",
  "wave": 4,
  "free": 5
},
{
  "id": "user-persona",
  "gameId": "game-009",
  "name": {
    "vi": "Chân Dung Người Dùng",
    "en": "User Persona"
  },
  "desc": {
    "vi": "Tạo chân dung người dùng.",
    "en": "Create user personas."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/user-persona/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "productivity",
  "wave": 4,
  "free": 5
},
{
  "id": "feature-priority",
  "gameId": "game-010",
  "name": {
    "vi": "Ưu Tiên Tính Năng",
    "en": "Feature Priority"
  },
  "desc": {
    "vi": "Sắp xếp tính năng theo giá trị.",
    "en": "Prioritize features by value."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/feature-priority/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "productivity",
  "wave": 4,
  "free": 5
},
{
  "id": "retro-board",
  "gameId": "game-011",
  "name": {
    "vi": "Bảng Hồi Tưởng",
    "en": "Retro Board"
  },
  "desc": {
    "vi": "Bảng retrospective đơn giản.",
    "en": "Simple retro board."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/retro-board/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "productivity",
  "wave": 4,
  "free": 5
},
{
  "id": "mood-board",
  "gameId": "game-012",
  "name": {
    "vi": "Bảng Cảm Xúc",
    "en": "Mood Board"
  },
  "desc": {
    "vi": "Tạo bảng cảm xúc thiết kế.",
    "en": "Create design mood boards."
  },
  "group": "creator",
  "tier": 1,
  "status": "live",
  "path": "games/mood-board/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "creative",
  "wave": 4,
  "free": 5
},
{
  "id": "style-guide",
  "gameId": "game-013",
  "name": {
    "vi": "Hướng Dẫn Phong Cách",
    "en": "Style Guide"
  },
  "desc": {
    "vi": "Tạo hướng dẫn phong cách.",
    "en": "Create style guides."
  },
  "group": "creator",
  "tier": 1,
  "status": "live",
  "path": "games/style-guide/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "creative",
  "wave": 4,
  "free": 5
},
{
  "id": "wireframe-kit",
  "gameId": "game-014",
  "name": {
    "vi": "Bộ Khung",
    "en": "Wireframe Kit"
  },
  "desc": {
    "vi": "Vẽ wireframe nhanh.",
    "en": "Quick wireframe sketching."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/wireframe-kit/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "creative",
  "wave": 4,
  "free": 5
},
{
  "id": "sprint-planner",
  "gameId": "game-015",
  "name": {
    "vi": "Lập Kế Hoạch Sprint",
    "en": "Sprint Planner"
  },
  "desc": {
    "vi": "Lập kế hoạch sprint đơn giản.",
    "en": "Simple sprint planning."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/sprint-planner/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "productivity",
  "wave": 4,
  "free": 5
},
{
  "id": "okr-tracker",
  "gameId": "game-016",
  "name": {
    "vi": "Theo Dõi OKR",
    "en": "OKR Tracker"
  },
  "desc": {
    "vi": "Theo dõi mục tiêu OKR.",
    "en": "Track OKR goals."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/okr-tracker/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "productivity",
  "wave": 4,
  "free": 5
},
{
  "id": "kanban-flow",
  "gameId": "game-017",
  "name": {
    "vi": "Kanban",
    "en": "Kanban Flow"
  },
  "desc": {
    "vi": "Bảng kanban tương tác.",
    "en": "Interactive kanban board."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/kanban-flow/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "productivity",
  "wave": 4,
  "free": 5
},
{
  "id": "time-block",
  "gameId": "game-018",
  "name": {
    "vi": "Khối Thời Gian",
    "en": "Time Block"
  },
  "desc": {
    "vi": "Lập lịch khối thời gian.",
    "en": "Time block scheduling."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/time-block/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "productivity",
  "wave": 4,
  "free": 5
},
{
  "id": "deep-work",
  "gameId": "game-019",
  "name": {
    "vi": "Làm Sâu",
    "en": "Deep Work"
  },
  "desc": {
    "vi": "Hẹn giờ làm việc sâu.",
    "en": "Deep work timer."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/deep-work/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "productivity",
  "wave": 4,
  "free": 5
},
{
  "id": "distraction-log",
  "gameId": "game-020",
  "name": {
    "vi": "Nhật Ký Xao Nhãng",
    "en": "Distraction Log"
  },
  "desc": {
    "vi": "Ghi chép & quản lý xao nhãng.",
    "en": "Log & manage distractions."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/distraction-log/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "productivity",
  "wave": 4,
  "free": 5
},
{
  "id": "energy-diary",
  "gameId": "game-021",
  "name": {
    "vi": "Nhật Ký Năng Lượng",
    "en": "Energy Diary"
  },
  "desc": {
    "vi": "Theo dõi năng lượng cả ngày.",
    "en": "Track energy levels."
  },
  "group": "life",
  "tier": 1,
  "status": "live",
  "path": "games/energy-diary/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "sleep-tracker",
  "gameId": "game-022",
  "name": {
    "vi": "Theo Dõi Giấc Ngủ",
    "en": "Sleep Tracker"
  },
  "desc": {
    "vi": "Ghi nhận thói quen ngủ.",
    "en": "Track sleep habits."
  },
  "group": "life",
  "tier": 1,
  "status": "live",
  "path": "games/sleep-tracker/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "hydration-reminder",
  "gameId": "game-023",
  "name": {
    "vi": "Nhắc Uống Nước",
    "en": "Hydration Reminder"
  },
  "desc": {
    "vi": "Nhắc uống nước đều đặn.",
    "en": "Hydration reminders."
  },
  "group": "life",
  "tier": 1,
  "status": "live",
  "path": "games/hydration-reminder/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "stretch-timer",
  "gameId": "game-024",
  "name": {
    "vi": "Hẹn Giờ Giãn Cơ",
    "en": "Stretch Timer"
  },
  "desc": {
    "vi": "Hẹn giờ giãn cơ làm việc.",
    "en": "Stretch break timer."
  },
  "group": "life",
  "tier": 1,
  "status": "live",
  "path": "games/stretch-timer/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "eye-rest",
  "gameId": "game-025",
  "name": {
    "vi": "Nghỉ Mắt",
    "en": "Eye Rest"
  },
  "desc": {
    "vi": "Nhắc nghỉ mắt theo 20-20-20.",
    "en": "20-20-20 eye rest reminder."
  },
  "group": "life",
  "tier": 1,
  "status": "live",
  "path": "games/eye-rest/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "micro-journal",
  "gameId": "game-001",
  "name": {
    "vi": "Nhật Ký Micro",
    "en": "Micro Journal"
  },
  "desc": {
    "vi": "Viết nhật ký 140 ký tự.",
    "en": "Micro journal 140 chars."
  },
  "group": "life",
  "tier": 1,
  "status": "live",
  "path": "games/micro-journal/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "one-thing",
  "gameId": "game-002",
  "name": {
    "vi": "Một Việc",
    "en": "One Thing"
  },
  "desc": {
    "vi": "Tập trung vào một việc quan trọng.",
    "en": "Focus on one important thing."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/one-thing/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "productivity",
  "wave": 4,
  "free": 5
},
{
  "id": "spark-list",
  "gameId": "game-003",
  "name": {
    "vi": "Danh Sách Tia Lửa",
    "en": "Spark List"
  },
  "desc": {
    "vi": "Liệt kê 10 ý tưởng nhanh.",
    "en": "List 10 ideas quickly."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/spark-list/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "creative",
  "wave": 4,
  "free": 5
},
{
  "id": "constraint-challenge",
  "gameId": "game-004",
  "name": {
    "vi": "Thử Thách Hạn Chế",
    "en": "Constraint Challenge"
  },
  "desc": {
    "vi": "Sáng tạo trong giới hạn.",
    "en": "Create within constraints."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/constraint-challenge/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "creative",
  "wave": 4,
  "free": 5
},
{
  "id": "reverse-brainstorm",
  "gameId": "game-005",
  "name": {
    "vi": "Brainstorm Ngược",
    "en": "Reverse Brainstorm"
  },
  "desc": {
    "vi": "Tìm cách làm hỏng trước.",
    "en": "Find ways to break it first."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/reverse-brainstorm/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "creative",
  "wave": 4,
  "free": 5
},
{
  "id": "scamper-game",
  "gameId": "game-006",
  "name": {
    "vi": "SCAMPER",
    "en": "SCAMPER Game"
  },
  "desc": {
    "vi": "Game hóa kỹ thuật SCAMPER.",
    "en": "Gamified SCAMPER technique."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/scamper-game/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "creative",
  "wave": 4,
  "free": 5
},
{
  "id": "six-hats",
  "gameId": "game-007",
  "name": {
    "vi": "Sáu Chiếc Mũ",
    "en": "Six Hats"
  },
  "desc": {
    "vi": "Luyện tư duy 6 chiếc mũ.",
    "en": "Practice six thinking hats."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/six-hats/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "creative",
  "wave": 4,
  "free": 5
},
{
  "id": "five-whys",
  "gameId": "game-008",
  "name": {
    "vi": "Năm Tại Sao",
    "en": "Five Whys"
  },
  "desc": {
    "vi": "Đào sâu nguyên nhân.",
    "en": "Dig deep into root causes."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/five-whys/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "logic",
  "wave": 4,
  "free": 5
},
{
  "id": "fishbone-game",
  "gameId": "game-009",
  "name": {
    "vi": "Xương Cá",
    "en": "Fishbone Game"
  },
  "desc": {
    "vi": "Vẽ sơ đồ xương cá.",
    "en": "Create fishbone diagrams."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/fishbone-game/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "logic",
  "wave": 4,
  "free": 5
},
{
  "id": "pareto-game",
  "gameId": "game-010",
  "name": {
    "vi": "Pareto",
    "en": "Pareto Game"
  },
  "desc": {
    "vi": "Tìm 20% tạo 80% kết quả.",
    "en": "Find the vital 20%."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/pareto-game/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "logic",
  "wave": 4,
  "free": 5
},
{
  "id": "decision-matrix",
  "gameId": "game-011",
  "name": {
    "vi": "Ma Trận Quyết Định",
    "en": "Decision Matrix"
  },
  "desc": {
    "vi": "Đánh giá lựa chọn đa tiêu chí.",
    "en": "Evaluate multi-criteria choices."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/decision-matrix/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "logic",
  "wave": 4,
  "free": 5
},
{
  "id": "pro-con-game",
  "gameId": "game-012",
  "name": {
    "vi": "Ưu Nhược Điểm",
    "en": "Pro Con Game"
  },
  "desc": {
    "vi": "Liệt kê ưu nhược điểm nhanh.",
    "en": "Quick pro/con listing."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/pro-con-game/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "logic",
  "wave": 4,
  "free": 5
},
{
  "id": "scenario-planning",
  "gameId": "game-013",
  "name": {
    "vi": "Lập Kế Hoạch Kịch Bản",
    "en": "Scenario Planning"
  },
  "desc": {
    "vi": "Vẽ kịch bản tương lai.",
    "en": "Map future scenarios."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/scenario-planning/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "risk-mapper",
  "gameId": "game-014",
  "name": {
    "vi": "Bản Đồ Rủi Ro",
    "en": "Risk Mapper"
  },
  "desc": {
    "vi": "Đánh giá & sắp xếp rủi ro.",
    "en": "Assess & prioritize risks."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/risk-mapper/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "stakeholder-map",
  "gameId": "game-015",
  "name": {
    "vi": "Bản Đồ Bên Liên Quan",
    "en": "Stakeholder Map"
  },
  "desc": {
    "vi": "Vẽ bản đồ stakeholders.",
    "en": "Map stakeholders."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/stakeholder-map/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "empathy-map",
  "gameId": "game-016",
  "name": {
    "vi": "Bản Đồ Đồng Cảm",
    "en": "Empathy Map"
  },
  "desc": {
    "vi": "Tạo bản đồ empathy.",
    "en": "Create empathy maps."
  },
  "group": "social",
  "tier": 1,
  "status": "live",
  "path": "games/empathy-map/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "journey-map",
  "gameId": "game-017",
  "name": {
    "vi": "Bản Đồ Hành Trình",
    "en": "Journey Map"
  },
  "desc": {
    "vi": "Vẽ hành trình chi tiết.",
    "en": "Detailed journey mapping."
  },
  "group": "exploration",
  "tier": 1,
  "status": "live",
  "path": "games/journey-map/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "blue-ocean",
  "gameId": "game-018",
  "name": {
    "vi": "Đại Dương Xanh",
    "en": "Blue Ocean"
  },
  "desc": {
    "vi": "Tìm không gian thị trường mới.",
    "en": "Find new market space."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/blue-ocean/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "strategy",
  "wave": 4,
  "free": 5
},
{
  "id": "red-ocean",
  "gameId": "game-019",
  "name": {
    "vi": "Đại Dương Đỏ",
    "en": "Red Ocean"
  },
  "desc": {
    "vi": "Phân tích cạnh tranh hiện tại.",
    "en": "Analyze current competition."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/red-ocean/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "strategy",
  "wave": 4,
  "free": 5
},
{
  "id": "porter-forces",
  "gameId": "game-020",
  "name": {
    "vi": "Lực Lượng Porter",
    "en": "Porter Forces"
  },
  "desc": {
    "vi": "Phân tích 5 lực Porter.",
    "en": "Porter's five forces analysis."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/porter-forces/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "strategy",
  "wave": 4,
  "free": 5
},
{
  "id": "ansoff-matrix",
  "gameId": "game-021",
  "name": {
    "vi": "Ma Trận Ansoff",
    "en": "Ansoff Matrix"
  },
  "desc": {
    "vi": "Chiến lược tăng trưởng Ansoff.",
    "en": "Ansoff growth strategies."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/ansoff-matrix/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "strategy",
  "wave": 4,
  "free": 5
},
{
  "id": "bcg-matrix",
  "gameId": "game-022",
  "name": {
    "vi": "Ma Trận BCG",
    "en": "BCG Matrix"
  },
  "desc": {
    "vi": "Phân loại danh mục BCG.",
    "en": "BCG portfolio analysis."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/bcg-matrix/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "strategy",
  "wave": 4,
  "free": 5
},
{
  "id": "pestle-game",
  "gameId": "game-023",
  "name": {
    "vi": "PESTLE",
    "en": "PESTLE Game"
  },
  "desc": {
    "vi": "Phân tích môi trường PESTLE.",
    "en": "PESTLE environment analysis."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/pestle-game/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "strategy",
  "wave": 4,
  "free": 5
},
{
  "id": "vrio-game",
  "gameId": "game-024",
  "name": {
    "vi": "VRIO",
    "en": "VRIO Game"
  },
  "desc": {
    "vi": "Đánh giá năng lực VRIO.",
    "en": "VRIO capability assessment."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/vrio-game/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "strategy",
  "wave": 4,
  "free": 5
},
{
  "id": "balanced-scorecard",
  "gameId": "game-025",
  "name": {
    "vi": "Thẻ Điểm Cân Bằng",
    "en": "Balanced Scorecard"
  },
  "desc": {
    "vi": "Tạo thẻ điểm cân bằng.",
    "en": "Create balanced scorecard."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/balanced-scorecard/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "strategy",
  "wave": 4,
  "free": 5
},
{
  "id": "morning-pages",
  "gameId": "game-001",
  "name": {
    "vi": "Trang Sáng",
    "en": "Morning Pages"
  },
  "desc": {
    "vi": "Viết 3 trang tự do buổi sáng.",
    "en": "Write 3 free pages each morning."
  },
  "group": "life",
  "tier": 1,
  "status": "live",
  "path": "games/morning-pages/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "evening-review",
  "gameId": "game-002",
  "name": {
    "vi": "Tổng Kết Tối",
    "en": "Evening Review"
  },
  "desc": {
    "vi": "Tổng kết ngày trước khi ngủ.",
    "en": "Review day before sleep."
  },
  "group": "life",
  "tier": 1,
  "status": "live",
  "path": "games/evening-review/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "week-preview",
  "gameId": "game-003",
  "name": {
    "vi": "Xem Trước Tuần",
    "en": "Week Preview"
  },
  "desc": {
    "vi": "Lập kế hoạch tuần tới.",
    "en": "Plan next week ahead."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/week-preview/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "productivity",
  "wave": 4,
  "free": 5
},
{
  "id": "month-reflection",
  "gameId": "game-004",
  "name": {
    "vi": "Nhìn Lại Tháng",
    "en": "Month Reflection"
  },
  "desc": {
    "vi": "Tổng kết & rút kinh nghiệm tháng.",
    "en": "Monthly reflection."
  },
  "group": "life",
  "tier": 1,
  "status": "live",
  "path": "games/month-reflection/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "year-in-pixels",
  "gameId": "game-005",
  "name": {
    "vi": "Năm Qua Pixel",
    "en": "Year in Pixels"
  },
  "desc": {
    "vi": "Tô màu tâm trạng cả năm.",
    "en": "Color mood for entire year."
  },
  "group": "life",
  "tier": 1,
  "status": "live",
  "path": "games/year-in-pixels/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "bucket-list",
  "gameId": "game-006",
  "name": {
    "vi": "Danh Sách Ước Mơ",
    "en": "Bucket List"
  },
  "desc": {
    "vi": "Liệt kê & theo dõi ước mơ.",
    "en": "Track bucket list dreams."
  },
  "group": "life",
  "tier": 1,
  "status": "live",
  "path": "games/bucket-list/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "life-wheel",
  "gameId": "game-007",
  "name": {
    "vi": "Bánh Xe Cuộc Sống",
    "en": "Life Wheel"
  },
  "desc": {
    "vi": "Đánh giá 8 lĩnh vực cuộc sống.",
    "en": "Rate 8 life areas."
  },
  "group": "life",
  "tier": 1,
  "status": "live",
  "path": "games/life-wheel/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "core-values",
  "gameId": "game-008",
  "name": {
    "vi": "Giá Trị Cốt Lõi",
    "en": "Core Values"
  },
  "desc": {
    "vi": "Xác định 5 giá trị cốt lõi.",
    "en": "Identify top 5 values."
  },
  "group": "life",
  "tier": 1,
  "status": "live",
  "path": "games/core-values/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "personal-mission",
  "gameId": "game-009",
  "name": {
    "vi": "Sứ Mệnh Cá Nhân",
    "en": "Personal Mission"
  },
  "desc": {
    "vi": "Viết tuyên bố sứ mệnh.",
    "en": "Write personal mission statement."
  },
  "group": "life",
  "tier": 1,
  "status": "live",
  "path": "games/personal-mission/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "legacy-letter",
  "gameId": "game-010",
  "name": {
    "vi": "Thư Di Sản",
    "en": "Legacy Letter"
  },
  "desc": {
    "vi": "Viết thư cho tương lai.",
    "en": "Write letter to future self."
  },
  "group": "life",
  "tier": 1,
  "status": "live",
  "path": "games/legacy-letter/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "gratitude-map",
  "gameId": "game-011",
  "name": {
    "vi": "Bản Đồ Biết Ơn",
    "en": "Gratitude Map"
  },
  "desc": {
    "vi": "Vẽ bản đồ người & việc biết ơn.",
    "en": "Map gratitude people & things."
  },
  "group": "social",
  "tier": 1,
  "status": "live",
  "path": "games/gratitude-map/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "kindness-chain",
  "gameId": "game-012",
  "name": {
    "vi": "Chuỗi Tử Tế",
    "en": "Kindness Chain"
  },
  "desc": {
    "vi": "Theo dõi chuỗi hành động tử tế.",
    "en": "Track kindness chain."
  },
  "group": "social",
  "tier": 1,
  "status": "live",
  "path": "games/kindness-chain/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "forgiveness-list",
  "gameId": "game-013",
  "name": {
    "vi": "Danh Sách Tha Thứ",
    "en": "Forgiveness List"
  },
  "desc": {
    "vi": "Viết & buông bỏ để tha thứ.",
    "en": "Write & release to forgive."
  },
  "group": "life",
  "tier": 1,
  "status": "live",
  "path": "games/forgiveness-list/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "fear-setting",
  "gameId": "game-014",
  "name": {
    "vi": "Đặt Nỗi Sợ",
    "en": "Fear Setting"
  },
  "desc": {
    "vi": "Phân tích & đối mặt nỗi sợ.",
    "en": "Analyze & face fears."
  },
  "group": "life",
  "tier": 1,
  "status": "live",
  "path": "games/fear-setting/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "comfort-zone",
  "gameId": "game-015",
  "name": {
    "vi": "Vùng An Toàn",
    "en": "Comfort Zone"
  },
  "desc": {
    "vi": "Vẽ & mở rộng vùng an toàn.",
    "en": "Map & expand comfort zone."
  },
  "group": "life",
  "tier": 1,
  "status": "live",
  "path": "games/comfort-zone/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "strength-finder",
  "gameId": "game-016",
  "name": {
    "vi": "Tìm Điểm Mạnh",
    "en": "Strength Finder"
  },
  "desc": {
    "vi": "Khám phá điểm mạnh bản thân.",
    "en": "Discover personal strengths."
  },
  "group": "life",
  "tier": 1,
  "status": "live",
  "path": "games/strength-finder/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "ikigai-game",
  "gameId": "game-017",
  "name": {
    "vi": "Ikigai",
    "en": "Ikigai Game"
  },
  "desc": {
    "vi": "Tìm lý do thức dậy mỗi sáng.",
    "en": "Find your reason for being."
  },
  "group": "life",
  "tier": 1,
  "status": "live",
  "path": "games/ikigai-game/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "golden-circle",
  "gameId": "game-018",
  "name": {
    "vi": "Vòng Tròn Vàng",
    "en": "Golden Circle"
  },
  "desc": {
    "vi": "Xác định Why-How-What.",
    "en": "Define Why-How-What."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/golden-circle/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "strategy",
  "wave": 4,
  "free": 5
},
{
  "id": "value-ladder",
  "gameId": "game-019",
  "name": {
    "vi": "Thang Giá Trị",
    "en": "Value Ladder"
  },
  "desc": {
    "vi": "Thiết kế thang giá trị khách hàng.",
    "en": "Design customer value ladder."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/value-ladder/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "strategy",
  "wave": 4,
  "free": 5
},
{
  "id": "hook-model",
  "gameId": "game-020",
  "name": {
    "vi": "Mô Hình Hook",
    "en": "Hook Model"
  },
  "desc": {
    "vi": "Phân tích vòng lặp thói quen.",
    "en": "Analyze habit loop."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/hook-model/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "strategy",
  "wave": 4,
  "free": 5
},
{
  "id": "flywheel-game",
  "gameId": "game-021",
  "name": {
    "vi": "Bánh Xe Bay",
    "en": "Flywheel Game"
  },
  "desc": {
    "vi": "Xây dựng vòng xoáy tăng trưởng.",
    "en": "Build growth flywheel."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/flywheel-game/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "strategy",
  "wave": 4,
  "free": 5
},
{
  "id": "north-star",
  "gameId": "game-022",
  "name": {
    "vi": "Sao Bắc Đẩu",
    "en": "North Star"
  },
  "desc": {
    "vi": "Xác định chỉ số sao bắc đẩu.",
    "en": "Define North Star metric."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/north-star/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "strategy",
  "wave": 4,
  "free": 5
},
{
  "id": "aha-moment",
  "gameId": "game-023",
  "name": {
    "vi": "Khoảnh Khắc Aha",
    "en": "Aha Moment"
  },
  "desc": {
    "vi": "Ghi lại & phân tích insight.",
    "en": "Record & analyze insights."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/aha-moment/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "creative",
  "wave": 4,
  "free": 5
},
{
  "id": "pattern-library",
  "gameId": "game-024",
  "name": {
    "vi": "Thư Viện Mẫu",
    "en": "Pattern Library"
  },
  "desc": {
    "vi": "Thu thập & phân loại mẫu.",
    "en": "Collect & categorize patterns."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/pattern-library/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "creative",
  "wave": 4,
  "free": 5
},
{
  "id": "trend-radar",
  "gameId": "game-025",
  "name": {
    "vi": "Radar Xu Hướng",
    "en": "Trend Radar"
  },
  "desc": {
    "vi": "Theo dõi & đánh giá xu hướng.",
    "en": "Track & assess trends."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/trend-radar/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "strategy",
  "wave": 4,
  "free": 5
},
{
  "id": "coin-flip",
  "gameId": "game-001",
  "name": {
    "vi": "Tung Đồng Xu",
    "en": "Coin Flip"
  },
  "desc": {
    "vi": "Tung đồng xu may rủi.",
    "en": "Flip a coin for luck."
  },
  "group": "micro",
  "tier": 1,
  "status": "live",
  "path": "games/coin-flip/index.html",
  "difficulty": "easy",
  "duration": "1-2 min",
  "genre": "luck",
  "wave": 4,
  "free": 5
},
{
  "id": "dice-roll",
  "gameId": "game-002",
  "name": {
    "vi": "Xúc Xắc",
    "en": "Dice Roll"
  },
  "desc": {
    "vi": "Tung xúc xắc 6 mặt.",
    "en": "Roll a six-sided die."
  },
  "group": "micro",
  "tier": 1,
  "status": "live",
  "path": "games/dice-roll/index.html",
  "difficulty": "easy",
  "duration": "1-2 min",
  "genre": "luck",
  "wave": 4,
  "free": 5
},
{
  "id": "random-name",
  "gameId": "game-003",
  "name": {
    "vi": "Tên Ngẫu Nhiên",
    "en": "Random Name"
  },
  "desc": {
    "vi": "Tạo tên nhân vật ngẫu nhiên.",
    "en": "Generate random character names."
  },
  "group": "micro",
  "tier": 1,
  "status": "live",
  "path": "games/random-name/index.html",
  "difficulty": "easy",
  "duration": "1-2 min",
  "genre": "creative",
  "wave": 4,
  "free": 5
},
{
  "id": "insult-generator",
  "gameId": "game-004",
  "name": {
    "vi": "Máy Chế Giễu Nhẹ",
    "en": "Insult Generator"
  },
  "desc": {
    "vi": "Chế giễu nhẹ nhàng hài hước.",
    "en": "Light humorous roasts."
  },
  "group": "micro",
  "tier": 1,
  "status": "live",
  "path": "games/insult-generator/index.html",
  "difficulty": "easy",
  "duration": "1-2 min",
  "genre": "social",
  "wave": 4,
  "free": 5
},
{
  "id": "compliment-generator",
  "gameId": "game-005",
  "name": {
    "vi": "Máy Khen Ngợi",
    "en": "Compliment Generator"
  },
  "desc": {
    "vi": "Tạo lời khen chân thành.",
    "en": "Generate sincere compliments."
  },
  "group": "micro",
  "tier": 1,
  "status": "live",
  "path": "games/compliment-generator/index.html",
  "difficulty": "easy",
  "duration": "1-2 min",
  "genre": "social",
  "wave": 4,
  "free": 5
},
{
  "id": "fortune-cookie",
  "gameId": "game-006",
  "name": {
    "vi": "Bánh May Mắn",
    "en": "Fortune Cookie"
  },
  "desc": {
    "vi": "Mở bánh may mắn.",
    "en": "Open a fortune cookie."
  },
  "group": "micro",
  "tier": 1,
  "status": "live",
  "path": "games/fortune-cookie/index.html",
  "difficulty": "easy",
  "duration": "1-2 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "tarot-lite",
  "gameId": "game-007",
  "name": {
    "vi": "Tarot Nhẹ",
    "en": "Tarot Lite"
  },
  "desc": {
    "vi": "Rút một lá bài Tarot.",
    "en": "Draw a Tarot card."
  },
  "group": "micro",
  "tier": 1,
  "status": "live",
  "path": "games/tarot-lite/index.html",
  "difficulty": "easy",
  "duration": "1-2 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "chakra-check",
  "gameId": "game-008",
  "name": {
    "vi": "Kiểm Tra Chakra",
    "en": "Chakra Check"
  },
  "desc": {
    "vi": "Đánh giá 7 luân xa.",
    "en": "Assess 7 chakras."
  },
  "group": "micro",
  "tier": 1,
  "status": "live",
  "path": "games/chakra-check/index.html",
  "difficulty": "easy",
  "duration": "1-2 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "aura-color",
  "gameId": "game-009",
  "name": {
    "vi": "Màu Hào Quang",
    "en": "Aura Color"
  },
  "desc": {
    "vi": "Xác định màu hào quang.",
    "en": "Determine aura color."
  },
  "group": "micro",
  "tier": 1,
  "status": "live",
  "path": "games/aura-color/index.html",
  "difficulty": "easy",
  "duration": "1-2 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "spirit-animal",
  "gameId": "game-010",
  "name": {
    "vi": "Thú Tổng Hợp",
    "en": "Spirit Animal"
  },
  "desc": {
    "vi": "Tìm thú tổng hợp của bạn.",
    "en": "Find your spirit animal."
  },
  "group": "micro",
  "tier": 1,
  "status": "live",
  "path": "games/spirit-animal/index.html",
  "difficulty": "easy",
  "duration": "1-2 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "birth-chart-lite",
  "gameId": "game-011",
  "name": {
    "vi": "Lá Số Nhẹ",
    "en": "Birth Chart Lite"
  },
  "desc": {
    "vi": "Lá số tử vi đơn giản.",
    "en": "Simple birth chart."
  },
  "group": "micro",
  "tier": 1,
  "status": "live",
  "path": "games/birth-chart-lite/index.html",
  "difficulty": "easy",
  "duration": "1-2 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "name-meaning",
  "gameId": "game-012",
  "name": {
    "vi": "Ý Nghĩa Tên",
    "en": "Name Meaning"
  },
  "desc": {
    "vi": "Tìm ý nghĩa tên.",
    "en": "Find name meaning."
  },
  "group": "micro",
  "tier": 1,
  "status": "live",
  "path": "games/name-meaning/index.html",
  "difficulty": "easy",
  "duration": "1-2 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "compatibility-check",
  "gameId": "game-013",
  "name": {
    "vi": "Kiểm Tra Hợp Nhau",
    "en": "Compatibility Check"
  },
  "desc": {
    "vi": "Kiểm tra độ tương thích.",
    "en": "Check compatibility."
  },
  "group": "micro",
  "tier": 1,
  "status": "live",
  "path": "games/compatibility-check/index.html",
  "difficulty": "easy",
  "duration": "1-2 min",
  "genre": "social",
  "wave": 4,
  "free": 5
},
{
  "id": "love-language",
  "gameId": "game-014",
  "name": {
    "vi": "Ngôn Ngữ Yêu Thương",
    "en": "Love Language"
  },
  "desc": {
    "vi": "Xác định ngôn ngữ yêu thương.",
    "en": "Determine love language."
  },
  "group": "micro",
  "tier": 1,
  "status": "live",
  "path": "games/love-language/index.html",
  "difficulty": "easy",
  "duration": "1-2 min",
  "genre": "social",
  "wave": 4,
  "free": 5
},
{
  "id": "attachment-style",
  "gameId": "game-015",
  "name": {
    "vi": "Kiểu Gắn Bó",
    "en": "Attachment Style"
  },
  "desc": {
    "vi": "Xác định kiểu gắn bó.",
    "en": "Determine attachment style."
  },
  "group": "micro",
  "tier": 1,
  "status": "live",
  "path": "games/attachment-style/index.html",
  "difficulty": "easy",
  "duration": "1-2 min",
  "genre": "social",
  "wave": 4,
  "free": 5
},
{
  "id": "enneagram-lite",
  "gameId": "game-016",
  "name": {
    "vi": "Enneagram Nhẹ",
    "en": "Enneagram Lite"
  },
  "desc": {
    "vi": "Trắc nghiệm Enneagram đơn giản.",
    "en": "Simple Enneagram test."
  },
  "group": "micro",
  "tier": 1,
  "status": "live",
  "path": "games/enneagram-lite/index.html",
  "difficulty": "easy",
  "duration": "1-2 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "mbti-lite",
  "gameId": "game-017",
  "name": {
    "vi": "MBTI Nhẹ",
    "en": "MBTI Lite"
  },
  "desc": {
    "vi": "Trắc nghiệm MBTI nhanh.",
    "en": "Quick MBTI test."
  },
  "group": "micro",
  "tier": 1,
  "status": "live",
  "path": "games/mbti-lite/index.html",
  "difficulty": "easy",
  "duration": "1-2 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "big-five-lite",
  "gameId": "game-018",
  "name": {
    "vi": "Big Five Nhẹ",
    "en": "Big Five Lite"
  },
  "desc": {
    "vi": "Trắc nghiệm Big Five nhanh.",
    "en": "Quick Big Five test."
  },
  "group": "micro",
  "tier": 1,
  "status": "live",
  "path": "games/big-five-lite/index.html",
  "difficulty": "easy",
  "duration": "1-2 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "love-tank",
  "gameId": "game-019",
  "name": {
    "vi": "Bình Yêu Thương",
    "en": "Love Tank"
  },
  "desc": {
    "vi": "Đo mức bình yêu thương.",
    "en": "Measure love tank level."
  },
  "group": "micro",
  "tier": 1,
  "status": "live",
  "path": "games/love-tank/index.html",
  "difficulty": "easy",
  "duration": "1-2 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "apology-language",
  "gameId": "game-020",
  "name": {
    "vi": "Ngôn Ngữ Xin Lỗi",
    "en": "Apology Language"
  },
  "desc": {
    "vi": "Xác định cách xin lỗi.",
    "en": "Determine apology language."
  },
  "group": "micro",
  "tier": 1,
  "status": "live",
  "path": "games/apology-language/index.html",
  "difficulty": "easy",
  "duration": "1-2 min",
  "genre": "social",
  "wave": 4,
  "free": 5
},
{
  "id": "anger-style",
  "gameId": "game-021",
  "name": {
    "vi": "Kiểu Tức Giận",
    "en": "Anger Style"
  },
  "desc": {
    "vi": "Xác định cách xử lý giận.",
    "en": "Determine anger style."
  },
  "group": "micro",
  "tier": 1,
  "status": "live",
  "path": "games/anger-style/index.html",
  "difficulty": "easy",
  "duration": "1-2 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "stress-signals",
  "gameId": "game-022",
  "name": {
    "vi": "Tín Hiệu Căng Thẳng",
    "en": "Stress Signals"
  },
  "desc": {
    "vi": "Nhận diện dấu hiệu căng thẳng.",
    "en": "Recognize stress signals."
  },
  "group": "micro",
  "tier": 1,
  "status": "live",
  "path": "games/stress-signals/index.html",
  "difficulty": "easy",
  "duration": "1-2 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "burnout-check",
  "gameId": "game-023",
  "name": {
    "vi": "Kiểm Tra Kiệt Sức",
    "en": "Burnout Check"
  },
  "desc": {
    "vi": "Đánh giá mức độ kiệt sức.",
    "en": "Assess burnout level."
  },
  "group": "micro",
  "tier": 1,
  "status": "live",
  "path": "games/burnout-check/index.html",
  "difficulty": "easy",
  "duration": "1-2 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "flow-check",
  "gameId": "game-024",
  "name": {
    "vi": "Kiểm Tra Dòng Chảy",
    "en": "Flow Check"
  },
  "desc": {
    "vi": "Đánh giá khả năng vào flow.",
    "en": "Assess flow state ability."
  },
  "group": "micro",
  "tier": 1,
  "status": "live",
  "path": "games/flow-check/index.html",
  "difficulty": "easy",
  "duration": "1-2 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "resilience-scale",
  "gameId": "game-025",
  "name": {
    "vi": "Thang Phục Hồi",
    "en": "Resilience Scale"
  },
  "desc": {
    "vi": "Đo lường khả năng phục hồi.",
    "en": "Measure resilience level."
  },
  "group": "micro",
  "tier": 1,
  "status": "live",
  "path": "games/resilience-scale/index.html",
  "difficulty": "easy",
  "duration": "1-2 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "rock-paper-scissors",
  "gameId": "game-001",
  "name": {
    "vi": "Kéo Búa Bao",
    "en": "Rock Paper Scissors"
  },
  "desc": {
    "vi": "Oẳn tù tì cổ điển.",
    "en": "Classic rock paper scissors."
  },
  "group": "micro",
  "tier": 1,
  "status": "live",
  "path": "games/rock-paper-scissors/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "reflex",
  "wave": 4,
  "free": 5
},
{
  "id": "tic-tac-toe",
  "gameId": "game-002",
  "name": {
    "vi": "Cờ Caro",
    "en": "Tic Tac Toe"
  },
  "desc": {
    "vi": "Cờ caro 3x3 đơn giản.",
    "en": "Simple 3x3 tic tac toe."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/tic-tac-toe/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "strategy",
  "wave": 4,
  "free": 5
},
{
  "id": "hangman-en",
  "gameId": "game-003",
  "name": {
    "vi": "Treo Cờ Tiếng Anh",
    "en": "Hangman EN"
  },
  "desc": {
    "vi": "Đoán từ tiếng Anh.",
    "en": "Guess English words."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/hangman-en/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "puzzle",
  "wave": 4,
  "free": 5
},
{
  "id": "word-scramble",
  "gameId": "game-004",
  "name": {
    "vi": "Xáo Từ",
    "en": "Word Scramble"
  },
  "desc": {
    "vi": "Sắp xếp lại chữ cái.",
    "en": "Rearrange scrambled letters."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/word-scramble/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "puzzle",
  "wave": 4,
  "free": 5
},
{
  "id": "math-match",
  "gameId": "game-005",
  "name": {
    "vi": "Toán Ghép",
    "en": "Math Match"
  },
  "desc": {
    "vi": "Ghép phép toán với đáp án.",
    "en": "Match equations to answers."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/math-match/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "shape-matcher",
  "gameId": "game-006",
  "name": {
    "vi": "Ghép Hình",
    "en": "Shape Matcher"
  },
  "desc": {
    "vi": "Ghép hình với tên đúng.",
    "en": "Match shapes to names."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/shape-matcher/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "puzzle",
  "wave": 4,
  "free": 5
},
{
  "id": "color-sequence",
  "gameId": "game-007",
  "name": {
    "vi": "Chuỗi Màu",
    "en": "Color Sequence"
  },
  "desc": {
    "vi": "Nhớ & lặp chuỗi màu.",
    "en": "Remember & repeat color sequence."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/color-sequence/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "memory",
  "wave": 4,
  "free": 5
},
{
  "id": "sound-memory",
  "gameId": "game-008",
  "name": {
    "vi": "Âm Thanh Ký Ức",
    "en": "Sound Memory"
  },
  "desc": {
    "vi": "Nhớ & lặp chuỗi âm thanh.",
    "en": "Remember & repeat sound sequence."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/sound-memory/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "memory",
  "wave": 4,
  "free": 5
},
{
  "id": "spot-difference",
  "gameId": "game-009",
  "name": {
    "vi": "Tìm Khác Biệt",
    "en": "Spot Difference"
  },
  "desc": {
    "vi": "Tìm điểm khác trong hai hình.",
    "en": "Spot differences between images."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/spot-difference/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "puzzle",
  "wave": 4,
  "free": 5
},
{
  "id": "maze-solver",
  "gameId": "game-010",
  "name": {
    "vi": "Giải Mê Cung",
    "en": "Maze Solver"
  },
  "desc": {
    "vi": "Tìm đường qua mê cung ngẫu nhiên.",
    "en": "Find path through random maze."
  },
  "group": "exploration",
  "tier": 1,
  "status": "live",
  "path": "games/maze-solver/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "puzzle",
  "wave": 4,
  "free": 5
},
{
  "id": "sliding-puzzle",
  "gameId": "game-011",
  "name": {
    "vi": "Trượt Ô Số",
    "en": "Sliding Puzzle"
  },
  "desc": {
    "vi": "Xếp số theo thứ tự bằng trượt.",
    "en": "Slide tiles to order numbers."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/sliding-puzzle/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "puzzle",
  "wave": 4,
  "free": 5
},
{
  "id": "tower-hanoi",
  "gameId": "game-012",
  "name": {
    "vi": "Tháp Hà Nội",
    "en": "Tower Hanoi"
  },
  "desc": {
    "vi": "Di chuyển tháp theo quy tắc.",
    "en": "Move tower following rules."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/tower-hanoi/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "puzzle",
  "wave": 4,
  "free": 5
},
{
  "id": "nim-game",
  "gameId": "game-013",
  "name": {
    "vi": "Nim",
    "en": "Nim Game"
  },
  "desc": {
    "vi": "Chiến thuật lấy que Nim.",
    "en": "Nim stick strategy game."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/nim-game/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "strategy",
  "wave": 4,
  "free": 5
},
{
  "id": "connect-four",
  "gameId": "game-014",
  "name": {
    "vi": "Xếp 4",
    "en": "Connect Four"
  },
  "desc": {
    "vi": "Xếp 4 quân liên tiếp.",
    "en": "Connect four in a row."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/connect-four/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "strategy",
  "wave": 4,
  "free": 5
},
{
  "id": "checkers-lite",
  "gameId": "game-015",
  "name": {
    "vi": "Cờ Đam Nhẹ",
    "en": "Checkers Lite"
  },
  "desc": {
    "vi": "Cờ đam đơn giản.",
    "en": "Simple checkers game."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/checkers-lite/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "strategy",
  "wave": 4,
  "free": 5
},
{
  "id": "chess-puzzle",
  "gameId": "game-016",
  "name": {
    "vi": "Thế Cờ",
    "en": "Chess Puzzle"
  },
  "desc": {
    "vi": "Giải thế cờ.",
    "en": "Solve chess puzzles."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/chess-puzzle/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "strategy",
  "wave": 4,
  "free": 5
},
{
  "id": "sudoku-6x6",
  "gameId": "game-017",
  "name": {
    "vi": "Sudoku 6x6",
    "en": "Sudoku 6x6"
  },
  "desc": {
    "vi": "Sudoku 6x6 đơn giản.",
    "en": "Simple 6x6 Sudoku."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/sudoku-6x6/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "puzzle",
  "wave": 4,
  "free": 5
},
{
  "id": "kakuro-lite",
  "gameId": "game-018",
  "name": {
    "vi": "Kakuro Nhẹ",
    "en": "Kakuro Lite"
  },
  "desc": {
    "vi": "Kakuro đơn giản.",
    "en": "Simple Kakuro puzzle."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/kakuro-lite/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "puzzle",
  "wave": 4,
  "free": 5
},
{
  "id": "kenken-lite",
  "gameId": "game-019",
  "name": {
    "vi": "KenKen Nhẹ",
    "en": "KenKen Lite"
  },
  "desc": {
    "vi": "KenKen đơn giản.",
    "en": "Simple KenKen puzzle."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/kenken-lite/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "futoshiki",
  "gameId": "game-020",
  "name": {
    "vi": "Futoshiki",
    "en": "Futoshiki"
  },
  "desc": {
    "vi": "Giải Futoshiki bất đẳng thức.",
    "en": "Solve Futoshiki inequalities."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/futoshiki/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "str8ts-lite",
  "gameId": "game-021",
  "name": {
    "vi": "Str8ts Nhẹ",
    "en": "Str8ts Lite"
  },
  "desc": {
    "vi": "Str8ts đơn giản.",
    "en": "Simple Str8ts puzzle."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/str8ts-lite/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "binary-puzzle",
  "gameId": "game-022",
  "name": {
    "vi": "Nhị Phân",
    "en": "Binary Puzzle"
  },
  "desc": {
    "vi": "Giải mã nhị phân.",
    "en": "Solve binary puzzle."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/binary-puzzle/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "nonogram-lite",
  "gameId": "game-023",
  "name": {
    "vi": "Nonogram Nhẹ",
    "en": "Nonogram Lite"
  },
  "desc": {
    "vi": "Giải tranh chấm Nonogram.",
    "en": "Solve Nonogram picture."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/nonogram-lite/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "puzzle",
  "wave": 4,
  "free": 5
},
{
  "id": "picross-lite",
  "gameId": "game-024",
  "name": {
    "vi": "Picross Nhẹ",
    "en": "Picross Lite"
  },
  "desc": {
    "vi": "Giải Picross đơn giản.",
    "en": "Simple Picross puzzle."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/picross-lite/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "puzzle",
  "wave": 4,
  "free": 5
},
{
  "id": "griddler",
  "gameId": "game-025",
  "name": {
    "vi": "Griddler",
    "en": "Griddler"
  },
  "desc": {
    "vi": "Giải Griddler logic.",
    "en": "Solve Griddler logic."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/griddler/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "puzzle",
  "wave": 4,
  "free": 5
},
{
  "id": "blackjack-lite",
  "gameId": "game-001",
  "name": {
    "vi": "Xì Dách Nhẹ",
    "en": "Blackjack Lite"
  },
  "desc": {
    "vi": "Xì dách 21 điểm đơn giản.",
    "en": "Simple blackjack 21."
  },
  "group": "micro",
  "tier": 1,
  "status": "live",
  "path": "games/blackjack-lite/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "card",
  "wave": 4,
  "free": 5
},
{
  "id": "solitaire-klondike",
  "gameId": "game-002",
  "name": {
    "vi": "Solitaire",
    "en": "Solitaire Klondike"
  },
  "desc": {
    "vi": "Xếp bài Solitaire cổ điển.",
    "en": "Classic Klondike solitaire."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/solitaire-klondike/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "card",
  "wave": 4,
  "free": 5
},
{
  "id": "freecell-lite",
  "gameId": "game-003",
  "name": {
    "vi": "FreeCell Nhẹ",
    "en": "FreeCell Lite"
  },
  "desc": {
    "vi": "FreeCell đơn giản.",
    "en": "Simple FreeCell."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/freecell-lite/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "card",
  "wave": 4,
  "free": 5
},
{
  "id": "spider-solitaire",
  "gameId": "game-004",
  "name": {
    "vi": "Solitaire Nhện",
    "en": "Spider Solitaire"
  },
  "desc": {
    "vi": "Xếp bài Spider.",
    "en": "Spider solitaire."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/spider-solitaire/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "card",
  "wave": 4,
  "free": 5
},
{
  "id": "hearts-lite",
  "gameId": "game-005",
  "name": {
    "vi": "Hearts Nhẹ",
    "en": "Hearts Lite"
  },
  "desc": {
    "vi": "Tránh bài Hearts.",
    "en": "Avoid hearts card game."
  },
  "group": "social",
  "tier": 1,
  "status": "live",
  "path": "games/hearts-lite/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "card",
  "wave": 4,
  "free": 5
},
{
  "id": "memory-cards",
  "gameId": "game-006",
  "name": {
    "vi": "Thẻ Nhớ",
    "en": "Memory Cards"
  },
  "desc": {
    "vi": "Lật thẻ tìm cặp.",
    "en": "Flip cards to find pairs."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/memory-cards/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "memory",
  "wave": 4,
  "free": 5
},
{
  "id": "speed-cards",
  "gameId": "game-007",
  "name": {
    "vi": "Tốc Độ Bài",
    "en": "Speed Cards"
  },
  "desc": {
    "vi": "Đánh bài nhanh Speed.",
    "en": "Fast Speed card game."
  },
  "group": "social",
  "tier": 1,
  "status": "live",
  "path": "games/speed-cards/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "reflex",
  "wave": 4,
  "free": 5
},
{
  "id": "crazy-eights",
  "gameId": "game-008",
  "name": {
    "vi": "Tám Điên",
    "en": "Crazy Eights"
  },
  "desc": {
    "vi": "Đánh bài tám điên.",
    "en": "Crazy eights card game."
  },
  "group": "social",
  "tier": 1,
  "status": "live",
  "path": "games/crazy-eights/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "card",
  "wave": 4,
  "free": 5
},
{
  "id": "go-fish",
  "gameId": "game-009",
  "name": {
    "vi": "Câu Cá",
    "en": "Go Fish"
  },
  "desc": {
    "vi": "Câu cá bài đối.",
    "en": "Go fish card game."
  },
  "group": "social",
  "tier": 1,
  "status": "live",
  "path": "games/go-fish/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "card",
  "wave": 4,
  "free": 5
},
{
  "id": "war-cards",
  "gameId": "game-010",
  "name": {
    "vi": "Chiến Tranh Bài",
    "en": "War Cards"
  },
  "desc": {
    "vi": "Đấu bài cao thấp.",
    "en": "High-low card war."
  },
  "group": "micro",
  "tier": 1,
  "status": "live",
  "path": "games/war-cards/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "luck",
  "wave": 4,
  "free": 5
},
{
  "id": "bingo-lite",
  "gameId": "game-011",
  "name": {
    "vi": "Bingo Nhẹ",
    "en": "Bingo Lite"
  },
  "desc": {
    "vi": "Bingo đơn giản.",
    "en": "Simple bingo game."
  },
  "group": "social",
  "tier": 1,
  "status": "live",
  "path": "games/bingo-lite/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "luck",
  "wave": 4,
  "free": 5
},
{
  "id": "yahtzee-lite",
  "gameId": "game-012",
  "name": {
    "vi": "Yahtzee Nhẹ",
    "en": "Yahtzee Lite"
  },
  "desc": {
    "vi": "Xúc xắc Yahtzee.",
    "en": "Yahtzee dice game."
  },
  "group": "micro",
  "tier": 1,
  "status": "live",
  "path": "games/yahtzee-lite/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "luck",
  "wave": 4,
  "free": 5
},
{
  "id": "battleship-lite",
  "gameId": "game-013",
  "name": {
    "vi": "Chiến Hạm Nhẹ",
    "en": "Battleship Lite"
  },
  "desc": {
    "vi": "Đánh chìm tàu đơn giản.",
    "en": "Simple battleship."
  },
  "group": "exploration",
  "tier": 1,
  "status": "live",
  "path": "games/battleship-lite/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "strategy",
  "wave": 4,
  "free": 5
},
{
  "id": "mastermind-lite",
  "gameId": "game-014",
  "name": {
    "vi": "Mastermind Nhẹ",
    "en": "Mastermind Lite"
  },
  "desc": {
    "vi": "Đoán mã màu Mastermind.",
    "en": "Guess Mastermind color code."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/mastermind-lite/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "logic",
  "wave": 4,
  "free": 5
},
{
  "id": "minesweeper-lite",
  "gameId": "game-015",
  "name": {
    "vi": "Dò Mìn Nhẹ",
    "en": "Minesweeper Lite"
  },
  "desc": {
    "vi": "Dò mìn đơn giản.",
    "en": "Simple minesweeper."
  },
  "group": "exploration",
  "tier": 1,
  "status": "live",
  "path": "games/minesweeper-lite/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "logic",
  "wave": 4,
  "free": 5
},
{
  "id": "snake-lite",
  "gameId": "game-016",
  "name": {
    "vi": "Rắn Nhẹ",
    "en": "Snake Lite"
  },
  "desc": {
    "vi": "Rắn săn mồi đơn giản.",
    "en": "Simple snake game."
  },
  "group": "exploration",
  "tier": 1,
  "status": "live",
  "path": "games/snake-lite/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "reflex",
  "wave": 4,
  "free": 5
},
{
  "id": "tetris-lite",
  "gameId": "game-017",
  "name": {
    "vi": "Tetris Nhẹ",
    "en": "Tetris Lite"
  },
  "desc": {
    "vi": "Xếp gạch Tetris đơn giản.",
    "en": "Simple Tetris blocks."
  },
  "group": "creator",
  "tier": 1,
  "status": "live",
  "path": "games/tetris-lite/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "reflex",
  "wave": 4,
  "free": 5
},
{
  "id": "breakout-lite",
  "gameId": "game-018",
  "name": {
    "vi": "Bóng Nhẹ",
    "en": "Breakout Lite"
  },
  "desc": {
    "vi": "Đập gạch đơn giản.",
    "en": "Simple brick breaker."
  },
  "group": "exploration",
  "tier": 1,
  "status": "live",
  "path": "games/breakout-lite/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "reflex",
  "wave": 4,
  "free": 5
},
{
  "id": "pong-lite",
  "gameId": "game-019",
  "name": {
    "vi": "Pong Nhẹ",
    "en": "Pong Lite"
  },
  "desc": {
    "vi": "Pong tennis đơn giản.",
    "en": "Simple Pong tennis."
  },
  "group": "social",
  "tier": 1,
  "status": "live",
  "path": "games/pong-lite/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "reflex",
  "wave": 4,
  "free": 5
},
{
  "id": "flappy-lite",
  "gameId": "game-020",
  "name": {
    "vi": "Bay Nhẹ",
    "en": "Flappy Lite"
  },
  "desc": {
    "vi": "Bay qua chướng ngại đơn giản.",
    "en": "Simple flap through obstacles."
  },
  "group": "exploration",
  "tier": 1,
  "status": "live",
  "path": "games/flappy-lite/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "reflex",
  "wave": 4,
  "free": 5
},
{
  "id": "doodle-jump-lite",
  "gameId": "game-021",
  "name": {
    "vi": "Nhảy Nhẹ",
    "en": "Doodle Jump Lite"
  },
  "desc": {
    "vi": "Nhảy lên nền tảng đơn giản.",
    "en": "Simple platform jumping."
  },
  "group": "exploration",
  "tier": 1,
  "status": "live",
  "path": "games/doodle-jump-lite/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "reflex",
  "wave": 4,
  "free": 5
},
{
  "id": "jetpack-lite",
  "gameId": "game-022",
  "name": {
    "vi": "Ba Lô Nhẹ",
    "en": "Jetpack Lite"
  },
  "desc": {
    "vi": "Bay ba lô tránh vật cản.",
    "en": "Jetpack dodge obstacles."
  },
  "group": "exploration",
  "tier": 1,
  "status": "live",
  "path": "games/jetpack-lite/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "reflex",
  "wave": 4,
  "free": 5
},
{
  "id": "runner-lite",
  "gameId": "game-023",
  "name": {
    "vi": "Chạy Nhẹ",
    "en": "Runner Lite"
  },
  "desc": {
    "vi": "Chạy vượt chướng ngại.",
    "en": "Run and dodge obstacles."
  },
  "group": "exploration",
  "tier": 1,
  "status": "live",
  "path": "games/runner-lite/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "reflex",
  "wave": 4,
  "free": 5
},
{
  "id": "jump-rope",
  "gameId": "game-024",
  "name": {
    "vi": "Nhảy Dây",
    "en": "Jump Rope"
  },
  "desc": {
    "vi": "Nhảy dây đếm số.",
    "en": "Jump rope counter."
  },
  "group": "life",
  "tier": 1,
  "status": "live",
  "path": "games/jump-rope/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "reflex",
  "wave": 4,
  "free": 5
},
{
  "id": "shadow-boxing",
  "gameId": "game-025",
  "name": {
    "vi": "Đánh Bóng",
    "en": "Shadow Boxing"
  },
  "desc": {
    "vi": "Tập đánh bóng tưởng tượng.",
    "en": "Shadow boxing workout."
  },
  "group": "life",
  "tier": 1,
  "status": "live",
  "path": "games/shadow-boxing/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "reflex",
  "wave": 4,
  "free": 5
},
{
  "id": "ball-bounce",
  "gameId": "game-026",
  "name": {
    "vi": "Bóng Nảy",
    "en": "Ball Bounce"
  },
  "desc": {
    "vi": "Giữ bóng nảy trên thanh.",
    "en": "Keep ball bouncing on paddle."
  },
  "group": "micro",
  "tier": 1,
  "status": "live",
  "path": "games/ball-bounce/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "reflex",
  "wave": 4,
  "free": 5
},
{
  "id": "catcher",
  "gameId": "game-027",
  "name": {
    "vi": "Bắt Rơi",
    "en": "Catcher"
  },
  "desc": {
    "vi": "Bắt vật phẩm rơi.",
    "en": "Catch falling items."
  },
  "group": "micro",
  "tier": 1,
  "status": "live",
  "path": "games/catcher/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "reflex",
  "wave": 4,
  "free": 5
},
{
  "id": "whack-mole",
  "gameId": "game-028",
  "name": {
    "vi": "Đập Chuột",
    "en": "Whack Mole"
  },
  "desc": {
    "vi": "Đập chuột chũi lên.",
    "en": "Whack popping moles."
  },
  "group": "micro",
  "tier": 1,
  "status": "live",
  "path": "games/whack-mole/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "reflex",
  "wave": 4,
  "free": 5
},
{
  "id": "fruit-ninja-lite",
  "gameId": "game-029",
  "name": {
    "vi": "Chém Hoa Quả Nhẹ",
    "en": "Fruit Ninja Lite"
  },
  "desc": {
    "vi": "Chém hoa quả bay.",
    "en": "Slice flying fruits."
  },
  "group": "micro",
  "tier": 1,
  "status": "live",
  "path": "games/fruit-ninja-lite/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "reflex",
  "wave": 4,
  "free": 5
},
{
  "id": "bubble-shooter-lite",
  "gameId": "game-030",
  "name": {
    "vi": "Bắn Bóng Nhẹ",
    "en": "Bubble Shooter Lite"
  },
  "desc": {
    "vi": "Bắn bóng cùng màu.",
    "en": "Shoot same-color bubbles."
  },
  "group": "micro",
  "tier": 1,
  "status": "live",
  "path": "games/bubble-shooter-lite/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "puzzle",
  "wave": 4,
  "free": 5
},
{
  "id": "match-three-lite",
  "gameId": "game-031",
  "name": {
    "vi": "Xếp 3 Nhẹ",
    "en": "Match Three Lite"
  },
  "desc": {
    "vi": "Xếp 3 vật cùng màu.",
    "en": "Match three same items."
  },
  "group": "micro",
  "tier": 1,
  "status": "live",
  "path": "games/match-three-lite/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "puzzle",
  "wave": 4,
  "free": 5
},
{
  "id": "jewel-swap",
  "gameId": "game-032",
  "name": {
    "vi": "Hoán Đổi Đá Quý",
    "en": "Jewel Swap"
  },
  "desc": {
    "vi": "Hoán đổi đá quý tạo hàng.",
    "en": "Swap jewels to make lines."
  },
  "group": "micro",
  "tier": 1,
  "status": "live",
  "path": "games/jewel-swap/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "puzzle",
  "wave": 4,
  "free": 5
},
{
  "id": "candy-crush-lite",
  "gameId": "game-033",
  "name": {
    "vi": "Kẹo Nhẹ",
    "en": "Candy Crush Lite"
  },
  "desc": {
    "vi": "Xếp kẹo cùng màu.",
    "en": "Match same-color candies."
  },
  "group": "micro",
  "tier": 1,
  "status": "live",
  "path": "games/candy-crush-lite/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "puzzle",
  "wave": 4,
  "free": 5
},
{
  "id": "block-blast-lite",
  "gameId": "game-034",
  "name": {
    "vi": "Nổ Khối Nhẹ",
    "en": "Block Blast Lite"
  },
  "desc": {
    "vi": "Xếp khối xóa hàng.",
    "en": "Fit blocks to clear lines."
  },
  "group": "micro",
  "tier": 1,
  "status": "live",
  "path": "games/block-blast-lite/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "puzzle",
  "wave": 4,
  "free": 5
},
{
  "id": "2048-lite",
  "gameId": "game-035",
  "name": {
    "vi": "2048 Nhẹ",
    "en": "2048 Lite"
  },
  "desc": {
    "vi": "Ghép số đến 2048.",
    "en": "Merge numbers to 2048."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/2048-lite/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "puzzle",
  "wave": 4,
  "free": 5
},
{
  "id": "threes-lite",
  "gameId": "game-036",
  "name": {
    "vi": "Threes Nhẹ",
    "en": "Threes Lite"
  },
  "desc": {
    "vi": "Ghép bội số của 3.",
    "en": "Merge multiples of three."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/threes-lite/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "puzzle",
  "wave": 4,
  "free": 5
},
{
  "id": "drop-seven",
  "gameId": "game-037",
  "name": {
    "vi": "Thả Bảy",
    "en": "Drop Seven"
  },
  "desc": {
    "vi": "Thả khối tạo tổng 7.",
    "en": "Drop blocks summing to 7."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/drop-seven/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "puzzle",
  "wave": 4,
  "free": 5
},
{
  "id": "sum-zero",
  "gameId": "game-038",
  "name": {
    "vi": "Tổng Không",
    "en": "Sum Zero"
  },
  "desc": {
    "vi": "Cân bằng tổng về 0.",
    "en": "Balance sum to zero."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/sum-zero/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "number-merge",
  "gameId": "game-039",
  "name": {
    "vi": "Ghép Số",
    "en": "Number Merge"
  },
  "desc": {
    "vi": "Ghép số tạo số lớn.",
    "en": "Merge numbers to grow."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/number-merge/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "prime-hunter",
  "gameId": "game-040",
  "name": {
    "vi": "Săn Số Nguyên Tố",
    "en": "Prime Hunter"
  },
  "desc": {
    "vi": "Tìm số nguyên tố nhanh.",
    "en": "Find primes quickly."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/prime-hunter/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "factor-frenzy",
  "gameId": "game-041",
  "name": {
    "vi": "Điên Thừa Số",
    "en": "Factor Frenzy"
  },
  "desc": {
    "vi": "Tìm thừa số nhanh.",
    "en": "Find factors fast."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/factor-frenzy/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "fraction-match",
  "gameId": "game-042",
  "name": {
    "vi": "Ghép Phân Số",
    "en": "Fraction Match"
  },
  "desc": {
    "vi": "Ghép phân số tương đương.",
    "en": "Match equivalent fractions."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/fraction-match/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "decimal-dash",
  "gameId": "game-043",
  "name": {
    "vi": "Thập Phân",
    "en": "Decimal Dash"
  },
  "desc": {
    "vi": "So sánh & sắp xếp thập phân.",
    "en": "Compare & sort decimals."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/decimal-dash/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "percent-panic",
  "gameId": "game-044",
  "name": {
    "vi": "Phần Trăm",
    "en": "Percent Panic"
  },
  "desc": {
    "vi": "Tính phần trăm nhanh.",
    "en": "Calculate percents fast."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/percent-panic/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "ratio-race",
  "gameId": "game-045",
  "name": {
    "vi": "Tỷ Lệ",
    "en": "Ratio Race"
  },
  "desc": {
    "vi": "Tìm tỷ lệ đúng nhanh.",
    "en": "Find correct ratios fast."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/ratio-race/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "geometry-dash",
  "gameId": "game-046",
  "name": {
    "vi": "Hình Học",
    "en": "Geometry Dash"
  },
  "desc": {
    "vi": "Nhận diện hình học nhanh.",
    "en": "Recognize shapes fast."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/geometry-dash/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "angle-attack",
  "gameId": "game-047",
  "name": {
    "vi": "Góc",
    "en": "Angle Attack"
  },
  "desc": {
    "vi": "Đoán độ góc chính xác.",
    "en": "Guess angle degrees accurately."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/angle-attack/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "area-warrior",
  "gameId": "game-048",
  "name": {
    "vi": "Diện Tích",
    "en": "Area Warrior"
  },
  "desc": {
    "vi": "Tính diện tích nhanh.",
    "en": "Calculate area quickly."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/area-warrior/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "volume-viking",
  "gameId": "game-049",
  "name": {
    "vi": "Thể Tích",
    "en": "Volume Viking"
  },
  "desc": {
    "vi": "Tính thể tích nhanh.",
    "en": "Calculate volume quickly."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/volume-viking/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "perimeter-pirate",
  "gameId": "game-050",
  "name": {
    "vi": "Chu Vi",
    "en": "Perimeter Pirate"
  },
  "desc": {
    "vi": "Tính chu vi nhanh.",
    "en": "Calculate perimeter quickly."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/perimeter-pirate/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "symmetry-sage",
  "gameId": "game-051",
  "name": {
    "vi": "Đối Xứng",
    "en": "Symmetry Sage"
  },
  "desc": {
    "vi": "Tìm trục đối xứng.",
    "en": "Find symmetry axes."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/symmetry-sage/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "transformation-titan",
  "gameId": "game-052",
  "name": {
    "vi": "Biến Đổi",
    "en": "Transformation Titan"
  },
  "desc": {
    "vi": "Nhận diện phép biến đổi.",
    "en": "Identify transformations."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/transformation-titan/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "grammar-fix",
  "gameId": "game-001",
  "name": {
    "vi": "Sửa Ngữ Pháp",
    "en": "Grammar Fix"
  },
  "desc": {
    "vi": "Sửa lỗi ngữ pháp tiếng Anh.",
    "en": "Fix English grammar errors."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/grammar-fix/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "spelling-bee",
  "gameId": "game-002",
  "name": {
    "vi": "Đánh Vần",
    "en": "Spelling Bee"
  },
  "desc": {
    "vi": "Đánh vần từ tiếng Anh.",
    "en": "Spell English words."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/spelling-bee/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "phonics-match",
  "gameId": "game-003",
  "name": {
    "vi": "Phonics Ghép",
    "en": "Phonics Match"
  },
  "desc": {
    "vi": "Ghép âm với chữ cái.",
    "en": "Match sounds to letters."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/phonics-match/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "rhyme-time",
  "gameId": "game-004",
  "name": {
    "vi": "Vần Điệu",
    "en": "Rhyme Time"
  },
  "desc": {
    "vi": "Tìm từ vần điệu.",
    "en": "Find rhyming words."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/rhyme-time/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "syllable-count",
  "gameId": "game-005",
  "name": {
    "vi": "Đếm Âm Tiết",
    "en": "Syllable Count"
  },
  "desc": {
    "vi": "Đếm âm tiết từ.",
    "en": "Count word syllables."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/syllable-count/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "antonym-hunt",
  "gameId": "game-006",
  "name": {
    "vi": "Săn Trái Nghĩa",
    "en": "Antonym Hunt"
  },
  "desc": {
    "vi": "Tìm trái nghĩa nhanh.",
    "en": "Find antonyms fast."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/antonym-hunt/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "synonym-match",
  "gameId": "game-007",
  "name": {
    "vi": "Ghép Đồng Nghĩa",
    "en": "Synonym Match"
  },
  "desc": {
    "vi": "Ghép từ đồng nghĩa.",
    "en": "Match synonyms."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/synonym-match/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "homophone-game",
  "gameId": "game-008",
  "name": {
    "vi": "Đồng Âm",
    "en": "Homophone Game"
  },
  "desc": {
    "vi": "Phân biệt từ đồng âm.",
    "en": "Distinguish homophones."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/homophone-game/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "prefix-suffix",
  "gameId": "game-009",
  "name": {
    "vi": "Tiền Tố Hậu Tố",
    "en": "Prefix Suffix"
  },
  "desc": {
    "vi": "Nhận diện tiền tố hậu tố.",
    "en": "Identify prefixes/suffixes."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/prefix-suffix/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "root-word",
  "gameId": "game-010",
  "name": {
    "vi": "Gốc Từ",
    "en": "Root Word"
  },
  "desc": {
    "vi": "Tìm gốc từ Latin/Greek.",
    "en": "Find Latin/Greek roots."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/root-word/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "idiom-match",
  "gameId": "game-011",
  "name": {
    "vi": "Ghép Thành Ngữ",
    "en": "Idiom Match"
  },
  "desc": {
    "vi": "Ghép thành ngữ với nghĩa.",
    "en": "Match idioms to meanings."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/idiom-match/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "proverb-game",
  "gameId": "game-012",
  "name": {
    "vi": "Tục Ngữ",
    "en": "Proverb Game"
  },
  "desc": {
    "vi": "Đoán tục ngữ từ gợi ý.",
    "en": "Guess proverb from hint."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/proverb-game/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "tongue-twister",
  "gameId": "game-013",
  "name": {
    "vi": "Chữ Chiết",
    "en": "Tongue Twister"
  },
  "desc": {
    "vi": "Luyện chữ chiết nhanh.",
    "en": "Practice tongue twisters."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/tongue-twister/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "palindrome-check",
  "gameId": "game-014",
  "name": {
    "vi": "Đối Xứng Chữ",
    "en": "Palindrome Check"
  },
  "desc": {
    "vi": "Kiểm tra từ đối xứng.",
    "en": "Check palindrome words."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/palindrome-check/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "anagram-race",
  "gameId": "game-015",
  "name": {
    "vi": "Đua Anagram",
    "en": "Anagram Race"
  },
  "desc": {
    "vi": "Giải anagram nhanh.",
    "en": "Solve anagrams fast."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/anagram-race/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "crossword-lite",
  "gameId": "game-016",
  "name": {
    "vi": "Ô Chữ Nhẹ",
    "en": "Crossword Lite"
  },
  "desc": {
    "vi": "Giải ô chữ đơn giản.",
    "en": "Simple crossword puzzle."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/crossword-lite/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "puzzle",
  "wave": 4,
  "free": 5
},
{
  "id": "word-ladder",
  "gameId": "game-017",
  "name": {
    "vi": "Thang Từ",
    "en": "Word Ladder"
  },
  "desc": {
    "vi": "Biến đổi từ A sang B.",
    "en": "Transform word A to B."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/word-ladder/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "puzzle",
  "wave": 4,
  "free": 5
},
{
  "id": "crypto-quote",
  "gameId": "game-018",
  "name": {
    "vi": "Mật Mã Trích Dẫn",
    "en": "Crypto Quote"
  },
  "desc": {
    "vi": "Giải mã trích dẫn nổi tiếng.",
    "en": "Decode famous quotes."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/crypto-quote/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "puzzle",
  "wave": 4,
  "free": 5
},
{
  "id": "acronym-game",
  "gameId": "game-019",
  "name": {
    "vi": "Từ Viết Tắt",
    "en": "Acronym Game"
  },
  "desc": {
    "vi": "Đoán từ viết tắt.",
    "en": "Guess acronyms."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/acronym-game/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "oxford-comma",
  "gameId": "game-020",
  "name": {
    "vi": "Dấu Phẩy Oxford",
    "en": "Oxford Comma"
  },
  "desc": {
    "vi": "Luyện dấu phẩy Oxford.",
    "en": "Practice Oxford comma."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/oxford-comma/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "active-passive",
  "gameId": "game-021",
  "name": {
    "vi": "Chủ Động Bị Động",
    "en": "Active Passive"
  },
  "desc": {
    "vi": "Chuyển câu chủ động/bị động.",
    "en": "Convert active/passive voice."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/active-passive/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "tense-timeline",
  "gameId": "game-022",
  "name": {
    "vi": "Dòng Thời Gian",
    "en": "Tense Timeline"
  },
  "desc": {
    "vi": "Sắp xếp thì đúng.",
    "en": "Arrange tenses correctly."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/tense-timeline/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "conditional-clauses",
  "gameId": "game-023",
  "name": {
    "vi": "Mệnh Đề Điều Kiện",
    "en": "Conditional Clauses"
  },
  "desc": {
    "vi": "Nhận diện mệnh đề điều kiện.",
    "en": "Identify conditional clauses."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/conditional-clauses/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "reported-speech",
  "gameId": "game-024",
  "name": {
    "vi": "Lời Nói Gián Tiếp",
    "en": "Reported Speech"
  },
  "desc": {
    "vi": "Chuyển lời nói gián tiếp.",
    "en": "Convert to reported speech."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/reported-speech/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "relative-clauses",
  "gameId": "game-025",
  "name": {
    "vi": "Mệnh Đề Quan Hệ",
    "en": "Relative Clauses"
  },
  "desc": {
    "vi": "Nhận diện mệnh đề quan hệ.",
    "en": "Identify relative clauses."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/relative-clauses/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "article-game",
  "gameId": "game-026",
  "name": {
    "vi": "Mạo Từ",
    "en": "Article Game"
  },
  "desc": {
    "vi": "Chọn mạo từ a/an/the đúng.",
    "en": "Choose correct articles."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/article-game/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "preposition-place",
  "gameId": "game-027",
  "name": {
    "vi": "Giới Từ Chỉ Nơi",
    "en": "Preposition Place"
  },
  "desc": {
    "vi": "Chọn giới từ chỉ nơi chốn.",
    "en": "Choose place prepositions."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/preposition-place/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "preposition-time",
  "gameId": "game-028",
  "name": {
    "vi": "Giới Từ Chỉ Thời Gian",
    "en": "Preposition Time"
  },
  "desc": {
    "vi": "Chọn giới từ chỉ thời gian.",
    "en": "Choose time prepositions."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/preposition-time/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "phrasal-verb",
  "gameId": "game-029",
  "name": {
    "vi": "Động Từ Ghép",
    "en": "Phrasal Verb"
  },
  "desc": {
    "vi": "Ghép động từ với giới từ.",
    "en": "Match verbs with prepositions."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/phrasal-verb/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "collocation-match",
  "gameId": "game-030",
  "name": {
    "vi": "Ghép Cụm Từ",
    "en": "Collocation Match"
  },
  "desc": {
    "vi": "Ghép cụm từ thông dụng.",
    "en": "Match common collocations."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/collocation-match/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "formal-informal",
  "gameId": "game-031",
  "name": {
    "vi": "Trang Trọng & Thân Mật",
    "en": "Formal Informal"
  },
  "desc": {
    "vi": "Phân biệt văn phong.",
    "en": "Distinguish formal/informal."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/formal-informal/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "register-shift",
  "gameId": "game-032",
  "name": {
    "vi": "Chuyển Văn Phong",
    "en": "Register Shift"
  },
  "desc": {
    "vi": "Chuyển đổi văn phong phù hợp.",
    "en": "Shift register appropriately."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/register-shift/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "cohesion-game",
  "gameId": "game-033",
  "name": {
    "vi": "Liên Kết Văn Bản",
    "en": "Cohesion Game"
  },
  "desc": {
    "vi": "Tìm từ nối liên kết.",
    "en": "Find cohesive devices."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/cohesion-game/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "thesis-hunt",
  "gameId": "game-034",
  "name": {
    "vi": "Săn Luận Điểm",
    "en": "Thesis Hunt"
  },
  "desc": {
    "vi": "Tìm luận điểm chính.",
    "en": "Find main thesis statements."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/thesis-hunt/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "evidence-match",
  "gameId": "game-035",
  "name": {
    "vi": "Ghép Bằng Chứng",
    "en": "Evidence Match"
  },
  "desc": {
    "vi": "Ghép bằng chứng với luận điểm.",
    "en": "Match evidence to claims."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/evidence-match/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "fallacy-spot",
  "gameId": "game-036",
  "name": {
    "vi": "Tìm Lỗi Logic",
    "en": "Fallacy Spot"
  },
  "desc": {
    "vi": "Nhận diện lỗi logic.",
    "en": "Spot logical fallacies."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/fallacy-spot/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "bias-detect",
  "gameId": "game-037",
  "name": {
    "vi": "Phát Hiện Thiên Lệch",
    "en": "Bias Detect"
  },
  "desc": {
    "vi": "Phát hiện thiên lệch trong văn.",
    "en": "Detect bias in text."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/bias-detect/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "source-check",
  "gameId": "game-038",
  "name": {
    "vi": "Kiểm Tra Nguồn",
    "en": "Source Check"
  },
  "desc": {
    "vi": "Đánh giá độ tin cậy nguồn.",
    "en": "Assess source credibility."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/source-check/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "citation-fix",
  "gameId": "game-039",
  "name": {
    "vi": "Sửa Trích Dẫn",
    "en": "Citation Fix"
  },
  "desc": {
    "vi": "Sửa lỗi trích dẫn APA/MLA.",
    "en": "Fix APA/MLA citations."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/citation-fix/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "plagiarism-check",
  "gameId": "game-040",
  "name": {
    "vi": "Kiểm Tra Đạo Văn",
    "en": "Plagiarism Check"
  },
  "desc": {
    "vi": "So sánh & phát hiện đạo văn.",
    "en": "Compare & detect plagiarism."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/plagiarism-check/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "summary-skill",
  "gameId": "game-041",
  "name": {
    "vi": "Tóm Tắt",
    "en": "Summary Skill"
  },
  "desc": {
    "vi": "Tóm tắt văn bản ngắn gọn.",
    "en": "Summarize text concisely."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/summary-skill/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "paraphrase-pro",
  "gameId": "game-042",
  "name": {
    "vi": "Diễn Giải",
    "en": "Paraphrase Pro"
  },
  "desc": {
    "vi": "Diễn giải lại câu văn.",
    "en": "Paraphrase sentences."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/paraphrase-pro/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "outline-builder",
  "gameId": "game-043",
  "name": {
    "vi": "Xây Dựng Dàn Ý",
    "en": "Outline Builder"
  },
  "desc": {
    "vi": "Tạo dàn ý cho bài viết.",
    "en": "Create essay outlines."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/outline-builder/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "hook-writer",
  "gameId": "game-044",
  "name": {
    "vi": "Viết Mở Bài",
    "en": "Hook Writer"
  },
  "desc": {
    "vi": "Viết câu mở bài hấp dẫn.",
    "en": "Write engaging hooks."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/hook-writer/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "conclusion-craft",
  "gameId": "game-045",
  "name": {
    "vi": "Kết Bài",
    "en": "Conclusion Craft"
  },
  "desc": {
    "vi": "Viết kết bài mạnh mẽ.",
    "en": "Craft strong conclusions."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/conclusion-craft/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "transition-smooth",
  "gameId": "game-046",
  "name": {
    "vi": "Câu Nối",
    "en": "Transition Smooth"
  },
  "desc": {
    "vi": "Thêm câu nối mượt mà.",
    "en": "Add smooth transitions."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/transition-smooth/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "tone-adjuster",
  "gameId": "game-047",
  "name": {
    "vi": "Điều Chỉnh Giọng Điệu",
    "en": "Tone Adjuster"
  },
  "desc": {
    "vi": "Thay đổi giọng điệu văn bản.",
    "en": "Adjust text tone."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/tone-adjuster/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "audience-adapt",
  "gameId": "game-048",
  "name": {
    "vi": "Thích Ứng Đối Tượng",
    "en": "Audience Adapt"
  },
  "desc": {
    "vi": "Viết cho đối tượng khác nhau.",
    "en": "Write for different audiences."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/audience-adapt/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "purpose-clarify",
  "gameId": "game-049",
  "name": {
    "vi": "Làm Rõ Mục Đích",
    "en": "Purpose Clarify"
  },
  "desc": {
    "vi": "Xác định mục đích văn bản.",
    "en": "Clarify writing purpose."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/purpose-clarify/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "parallel-structure",
  "gameId": "game-050",
  "name": {
    "vi": "Song Song",
    "en": "Parallel Structure"
  },
  "desc": {
    "vi": "Sửa cấu trúc song song.",
    "en": "Fix parallel structure."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/parallel-structure/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "modifier-placement",
  "gameId": "game-051",
  "name": {
    "vi": "Vị Trí Bổ Ngữ",
    "en": "Modifier Placement"
  },
  "desc": {
    "vi": "Đặt bổ ngữ đúng vị trí.",
    "en": "Place modifiers correctly."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/modifier-placement/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "dangling-modifier",
  "gameId": "game-052",
  "name": {
    "vi": "Bổ Ngữ Treo",
    "en": "Dangling Modifier"
  },
  "desc": {
    "vi": "Sửa bổ ngữ treo.",
    "en": "Fix dangling modifiers."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/dangling-modifier/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "split-infinitive",
  "gameId": "game-053",
  "name": {
    "vi": "Nguyên Mẫu Chia",
    "en": "Split Infinitive"
  },
  "desc": {
    "vi": "Quyết định chia nguyên mẫu.",
    "en": "Decide split infinitives."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/split-infinitive/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "subjunctive-mood",
  "gameId": "game-054",
  "name": {
    "vi": "Thể Giả Định",
    "en": "Subjunctive Mood"
  },
  "desc": {
    "vi": "Sử dụng thể giả định.",
    "en": "Use subjunctive mood."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/subjunctive-mood/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "inversion-game",
  "gameId": "game-055",
  "name": {
    "vi": "Đảo Ngữ",
    "en": "Inversion Game"
  },
  "desc": {
    "vi": "Đảo ngữ trong văn viết.",
    "en": "Practice inversion."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/inversion-game/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "cleft-sentence",
  "gameId": "game-056",
  "name": {
    "vi": "Câu Chia",
    "en": "Cleft Sentence"
  },
  "desc": {
    "vi": "Viết câu chia nhấn mạnh.",
    "en": "Write cleft sentences."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/cleft-sentence/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "emphatic-do",
  "gameId": "game-057",
  "name": {
    "vi": "Do Nhấn Mạnh",
    "en": "Emphatic Do"
  },
  "desc": {
    "vi": "Sử dụng do nhấn mạnh.",
    "en": "Use emphatic do."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/emphatic-do/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "ellipsis-game",
  "gameId": "game-058",
  "name": {
    "vi": "Lược Bỏ",
    "en": "Ellipsis Game"
  },
  "desc": {
    "vi": "Lược bỏ đúng trong câu.",
    "en": "Use ellipsis correctly."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/ellipsis-game/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "apostrophe-rules",
  "gameId": "game-059",
  "name": {
    "vi": "Dấu Nháy Đơn",
    "en": "Apostrophe Rules"
  },
  "desc": {
    "vi": "Quy tắc dấu nháy đơn.",
    "en": "Apostrophe rules."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/apostrophe-rules/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "semicolon-game",
  "gameId": "game-060",
  "name": {
    "vi": "Dấu Chấm Phẩy",
    "en": "Semicolon Game"
  },
  "desc": {
    "vi": "Sử dụng dấu chấm phẩy.",
    "en": "Use semicolons correctly."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/semicolon-game/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "colon-game",
  "gameId": "game-061",
  "name": {
    "vi": "Dấu Hai Chấm",
    "en": "Colon Game"
  },
  "desc": {
    "vi": "Sử dụng dấu hai chấm.",
    "en": "Use colons correctly."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/colon-game/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "dash-game",
  "gameId": "game-062",
  "name": {
    "vi": "Dấu Gạch Ngang",
    "en": "Dash Game"
  },
  "desc": {
    "vi": "Sử dụng dấu gạch ngang.",
    "en": "Use dashes correctly."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/dash-game/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "hyphen-rules",
  "gameId": "game-063",
  "name": {
    "vi": "Dấu Gạch Nối",
    "en": "Hyphen Rules"
  },
  "desc": {
    "vi": "Quy tắc dấu gạch nối.",
    "en": "Hyphenation rules."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/hyphen-rules/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "capitalization",
  "gameId": "game-064",
  "name": {
    "vi": "Viết Hoa",
    "en": "Capitalization"
  },
  "desc": {
    "vi": "Quy tắc viết hoa.",
    "en": "Capitalization rules."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/capitalization/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "number-style",
  "gameId": "game-065",
  "name": {
    "vi": "Viết Số",
    "en": "Number Style"
  },
  "desc": {
    "vi": "Quy tắc viết số trong văn.",
    "en": "Number writing rules."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/number-style/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "italics-rules",
  "gameId": "game-066",
  "name": {
    "vi": "In Nghiêng",
    "en": "Italics Rules"
  },
  "desc": {
    "vi": "Quy tắc in nghiêng.",
    "en": "Italics usage rules."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/italics-rules/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "quotation-marks",
  "gameId": "game-067",
  "name": {
    "vi": "Dấu Ngoặc Kép",
    "en": "Quotation Marks"
  },
  "desc": {
    "vi": "Quy tắc dấu ngoặc kép.",
    "en": "Quotation mark rules."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/quotation-marks/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "bracket-rules",
  "gameId": "game-068",
  "name": {
    "vi": "Dấu Ngoặc Đơn",
    "en": "Bracket Rules"
  },
  "desc": {
    "vi": "Quy tắc dấu ngoặc đơn.",
    "en": "Bracket usage rules."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/bracket-rules/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "ampersand-rules",
  "gameId": "game-069",
  "name": {
    "vi": "Dấu Và",
    "en": "Ampersand Rules"
  },
  "desc": {
    "vi": "Quy tắc sử dụng &.",
    "en": "Ampersand usage rules."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/ampersand-rules/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "email-etiquette",
  "gameId": "game-070",
  "name": {
    "vi": "Email Lịch Sự",
    "en": "Email Etiquette"
  },
  "desc": {
    "vi": "Viết email lịch sự.",
    "en": "Write polite emails."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/email-etiquette/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "memo-writing",
  "gameId": "game-071",
  "name": {
    "vi": "Viết Memo",
    "en": "Memo Writing"
  },
  "desc": {
    "vi": "Viết memo ngắn gọn.",
    "en": "Write concise memos."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/memo-writing/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "report-writing",
  "gameId": "game-072",
  "name": {
    "vi": "Viết Báo Cáo",
    "en": "Report Writing"
  },
  "desc": {
    "vi": "Viết báo cáo chuyên nghiệp.",
    "en": "Write professional reports."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/report-writing/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "proposal-writing",
  "gameId": "game-073",
  "name": {
    "vi": "Viết Đề Xuất",
    "en": "Proposal Writing"
  },
  "desc": {
    "vi": "Viết đề xuất thuyết phục.",
    "en": "Write persuasive proposals."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/proposal-writing/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "resume-builder",
  "gameId": "game-074",
  "name": {
    "vi": "Xây Dựng Sơ Yếu",
    "en": "Resume Builder"
  },
  "desc": {
    "vi": "Tạo sơ yếu lý lịch.",
    "en": "Build resumes."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/resume-builder/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "cover-letter",
  "gameId": "game-075",
  "name": {
    "vi": "Thư Xin Việc",
    "en": "Cover Letter"
  },
  "desc": {
    "vi": "Viết thư xin việc.",
    "en": "Write cover letters."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/cover-letter/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "linkedin-profile",
  "gameId": "game-076",
  "name": {
    "vi": "Hồ Sơ LinkedIn",
    "en": "LinkedIn Profile"
  },
  "desc": {
    "vi": "Tối ưu hồ sơ LinkedIn.",
    "en": "Optimize LinkedIn profile."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/linkedin-profile/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "portfolio-builder",
  "gameId": "game-077",
  "name": {
    "vi": "Xây Dựng Portfolio",
    "en": "Portfolio Builder"
  },
  "desc": {
    "vi": "Tạo portfolio nghề nghiệp.",
    "en": "Build career portfolio."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/portfolio-builder/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "interview-prep",
  "gameId": "game-078",
  "name": {
    "vi": "Chuẩn Bị Phỏng Vấn",
    "en": "Interview Prep"
  },
  "desc": {
    "vi": "Luyện phỏng vấn.",
    "en": "Practice interviews."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/interview-prep/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "salary-negotiate",
  "gameId": "game-079",
  "name": {
    "vi": "Đàm Phán Lương",
    "en": "Salary Negotiate"
  },
  "desc": {
    "vi": "Luyện đàm phán lương.",
    "en": "Practice salary negotiation."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/salary-negotiate/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "networking-game",
  "gameId": "game-080",
  "name": {
    "vi": "Kết Nối",
    "en": "Networking Game"
  },
  "desc": {
    "vi": "Luyện kết nối chuyên nghiệp.",
    "en": "Practice professional networking."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/networking-game/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "elevator-pitch",
  "gameId": "game-081",
  "name": {
    "vi": "Pitch 30 Giây",
    "en": "Elevator Pitch"
  },
  "desc": {
    "vi": "Luyện pitch ngắn.",
    "en": "Practice 30-second pitch."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/elevator-pitch/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "personal-brand",
  "gameId": "game-082",
  "name": {
    "vi": "Thương Hiệu Cá Nhân",
    "en": "Personal Brand"
  },
  "desc": {
    "vi": "Xây dựng thương hiệu cá nhân.",
    "en": "Build personal brand."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/personal-brand/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "time-management",
  "gameId": "game-083",
  "name": {
    "vi": "Quản Lý Thời Gian",
    "en": "Time Management"
  },
  "desc": {
    "vi": "Lập kế hoạch quản lý thời gian.",
    "en": "Plan time management."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/time-management/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "meeting-facilitate",
  "gameId": "game-084",
  "name": {
    "vi": "Điều Phối Họp",
    "en": "Meeting Facilitate"
  },
  "desc": {
    "vi": "Luyện điều phối cuộc họp.",
    "en": "Practice meeting facilitation."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/meeting-facilitate/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "conflict-resolve",
  "gameId": "game-085",
  "name": {
    "vi": "Giải Quyết Xung Đột",
    "en": "Conflict Resolve"
  },
  "desc": {
    "vi": "Luyện giải quyết xung đột.",
    "en": "Practice conflict resolution."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/conflict-resolve/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "feedback-give",
  "gameId": "game-086",
  "name": {
    "vi": "Cho Phản Hồi",
    "en": "Feedback Give"
  },
  "desc": {
    "vi": "Luyện cho phản hồi xây dựng.",
    "en": "Practice giving feedback."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/feedback-give/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "feedback-receive",
  "gameId": "game-087",
  "name": {
    "vi": "Nhận Phản Hồi",
    "en": "Feedback Receive"
  },
  "desc": {
    "vi": "Luyện nhận phản hồi.",
    "en": "Practice receiving feedback."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/feedback-receive/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "delegation-game",
  "gameId": "game-088",
  "name": {
    "vi": "Ủy Thác",
    "en": "Delegation Game"
  },
  "desc": {
    "vi": "Luyện ủy thác công việc.",
    "en": "Practice delegation."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/delegation-game/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "coaching-lite",
  "gameId": "game-089",
  "name": {
    "vi": "Huấn Luyện Nhẹ",
    "en": "Coaching Lite"
  },
  "desc": {
    "vi": "Luyện kỹ năng coaching.",
    "en": "Practice coaching skills."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/coaching-lite/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "mentorship-match",
  "gameId": "game-090",
  "name": {
    "vi": "Ghép Mentor",
    "en": "Mentorship Match"
  },
  "desc": {
    "vi": "Tìm mentor/mentee phù hợp.",
    "en": "Find mentor/mentee match."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/mentorship-match/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "team-role",
  "gameId": "game-091",
  "name": {
    "vi": "Vai Trò Nhóm",
    "en": "Team Role"
  },
  "desc": {
    "vi": "Xác định vai trò trong nhóm.",
    "en": "Determine team role."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/team-role/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "leadership-style",
  "gameId": "game-092",
  "name": {
    "vi": "Phong Cách Lãnh Đạo",
    "en": "Leadership Style"
  },
  "desc": {
    "vi": "Xác định phong cách lãnh đạo.",
    "en": "Determine leadership style."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/leadership-style/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "decision-style",
  "gameId": "game-093",
  "name": {
    "vi": "Phong Cách Quyết Định",
    "en": "Decision Style"
  },
  "desc": {
    "vi": "Xác định cách ra quyết định.",
    "en": "Determine decision style."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/decision-style/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "communication-style",
  "gameId": "game-094",
  "name": {
    "vi": "Phong Cách Giao Tiếp",
    "en": "Communication Style"
  },
  "desc": {
    "vi": "Xác định phong cách giao tiếp.",
    "en": "Determine communication style."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/communication-style/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "learning-style",
  "gameId": "game-095",
  "name": {
    "vi": "Phong Cách Học",
    "en": "Learning Style"
  },
  "desc": {
    "vi": "Xác định phong cách học.",
    "en": "Determine learning style."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/learning-style/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "motivation-drive",
  "gameId": "game-096",
  "name": {
    "vi": "Động Lực",
    "en": "Motivation Drive"
  },
  "desc": {
    "vi": "Xác định nguồn động lực.",
    "en": "Determine motivation drivers."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/motivation-drive/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "stress-style",
  "gameId": "game-097",
  "name": {
    "vi": "Ứng Phó Stress",
    "en": "Stress Style"
  },
  "desc": {
    "vi": "Xác định cách ứng phó stress.",
    "en": "Determine stress coping style."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/stress-style/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "work-life-balance",
  "gameId": "game-098",
  "name": {
    "vi": "Cân Bằng Công Việc",
    "en": "Work Life Balance"
  },
  "desc": {
    "vi": "Đánh giá cân bằng công-việc-sống.",
    "en": "Assess work-life balance."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/work-life-balance/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
}
];

  const CATALOG = {
    version: 3,
    currency: CURRENCY,
    tiers: TIERS,
    groups: GROUPS,
    games: GAMES,
    counts: {
      total: GAMES.length,
      live: GAMES.filter(x => x.status === 'live').length,
      byGroup: GAMES.reduce((acc, g) => { acc[g.group] = (acc[g.group] || 0) + 1; return acc; }, {}),
      byWave: GAMES.reduce((acc, g) => { acc[g.wave] = (acc[g.wave] || 0) + 1; return acc; }, {}),
    },
  };

  if (typeof module !== 'undefined' && module.exports) module.exports = CATALOG;
  root.MN_CATALOG = CATALOG;
})(typeof window !== 'undefined' ? window : globalThis);
