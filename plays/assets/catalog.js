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
