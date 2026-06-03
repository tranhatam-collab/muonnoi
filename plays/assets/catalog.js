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
