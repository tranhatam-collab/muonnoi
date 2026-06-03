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
},
{
  "id": "public-speaking",
  "gameId": "game-001",
  "name": {
    "vi": "Nói Trước Công Chúng",
    "en": "Public Speaking"
  },
  "desc": {
    "vi": "Luyện nói trước đám đông.",
    "en": "Practice public speaking."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/public-speaking/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "presentation-design",
  "gameId": "game-002",
  "name": {
    "vi": "Thiết Kế Thuyết Trình",
    "en": "Presentation Design"
  },
  "desc": {
    "vi": "Thiết kế slide ấn tượng.",
    "en": "Design impressive slides."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/presentation-design/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "creative",
  "wave": 4,
  "free": 5
},
{
  "id": "data-visualize",
  "gameId": "game-003",
  "name": {
    "vi": "Trực Quan Hóa Dữ Liệu",
    "en": "Data Visualize"
  },
  "desc": {
    "vi": "Chọn biểu đồ phù hợp.",
    "en": "Pick right chart type."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/data-visualize/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "storytelling-work",
  "gameId": "game-004",
  "name": {
    "vi": "Kể Chuyện Công Việc",
    "en": "Storytelling Work"
  },
  "desc": {
    "vi": "Kể chuyện dữ liệu.",
    "en": "Tell data stories."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/storytelling-work/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "creative",
  "wave": 4,
  "free": 5
},
{
  "id": "negotiation-case",
  "gameId": "game-005",
  "name": {
    "vi": "Tình Huống Đàm Phán",
    "en": "Negotiation Case"
  },
  "desc": {
    "vi": "Giải quyết tình huống đàm phán.",
    "en": "Solve negotiation cases."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/negotiation-case/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "ethics-dilemma",
  "gameId": "game-006",
  "name": {
    "vi": "Song Đề Đạo Đức",
    "en": "Ethics Dilemma"
  },
  "desc": {
    "vi": "Quyết định song đề đạo đức.",
    "en": "Decide ethical dilemmas."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/ethics-dilemma/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "crisis-manage",
  "gameId": "game-007",
  "name": {
    "vi": "Quản Lý Khủng Hoảng",
    "en": "Crisis Manage"
  },
  "desc": {
    "vi": "Xử lý khủng hoảng giả lập.",
    "en": "Manage simulated crisis."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/crisis-manage/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "change-manage",
  "gameId": "game-008",
  "name": {
    "vi": "Quản Lý Thay Đổi",
    "en": "Change Manage"
  },
  "desc": {
    "vi": "Dẫn dắt thay đổi tổ chức.",
    "en": "Lead organizational change."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/change-manage/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "project-plan",
  "gameId": "game-009",
  "name": {
    "vi": "Lập Kế Hoạch Dự Án",
    "en": "Project Plan"
  },
  "desc": {
    "vi": "Lập kế hoạch dự án đơn giản.",
    "en": "Plan simple projects."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/project-plan/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "productivity",
  "wave": 4,
  "free": 5
},
{
  "id": "risk-assess",
  "gameId": "game-010",
  "name": {
    "vi": "Đánh Giá Rủi Ro",
    "en": "Risk Assess"
  },
  "desc": {
    "vi": "Đánh giá rủi ro dự án.",
    "en": "Assess project risks."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/risk-assess/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "stakeholder-manage",
  "gameId": "game-011",
  "name": {
    "vi": "Quản Lý Bên Liên Quan",
    "en": "Stakeholder Manage"
  },
  "desc": {
    "vi": "Phân tích & quản lý stakeholders.",
    "en": "Analyze & manage stakeholders."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/stakeholder-manage/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "scope-define",
  "gameId": "game-012",
  "name": {
    "vi": "Xác Định Phạm Vi",
    "en": "Scope Define"
  },
  "desc": {
    "vi": "Xác định phạm vi dự án.",
    "en": "Define project scope."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/scope-define/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "productivity",
  "wave": 4,
  "free": 5
},
{
  "id": "budget-estimate",
  "gameId": "game-013",
  "name": {
    "vi": "Ước Tính Ngân Sách",
    "en": "Budget Estimate"
  },
  "desc": {
    "vi": "Ước tính ngân sách dự án.",
    "en": "Estimate project budget."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/budget-estimate/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "schedule-build",
  "gameId": "game-014",
  "name": {
    "vi": "Lập Lịch Trình",
    "en": "Schedule Build"
  },
  "desc": {
    "vi": "Lập lịch trình dự án.",
    "en": "Build project schedule."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/schedule-build/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "productivity",
  "wave": 4,
  "free": 5
},
{
  "id": "quality-check",
  "gameId": "game-015",
  "name": {
    "vi": "Kiểm Tra Chất Lượng",
    "en": "Quality Check"
  },
  "desc": {
    "vi": "Kiểm tra chất lượng sản phẩm.",
    "en": "Check product quality."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/quality-check/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "procurement-sim",
  "gameId": "game-016",
  "name": {
    "vi": "Mua Sắm Giả Lập",
    "en": "Procurement Sim"
  },
  "desc": {
    "vi": "Mua sắm & đấu thầu giả lập.",
    "en": "Simulate procurement."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/procurement-sim/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "resource-allocate",
  "gameId": "game-017",
  "name": {
    "vi": "Phân Bổ Nguồn Lực",
    "en": "Resource Allocate"
  },
  "desc": {
    "vi": "Phân bổ nguồn lực tối ưu.",
    "en": "Optimize resource allocation."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/resource-allocate/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "issue-track",
  "gameId": "game-018",
  "name": {
    "vi": "Theo Dõi Vấn Đề",
    "en": "Issue Track"
  },
  "desc": {
    "vi": "Theo dõi & giải quyết vấn đề.",
    "en": "Track & resolve issues."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/issue-track/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "productivity",
  "wave": 4,
  "free": 5
},
{
  "id": "lesson-learned",
  "gameId": "game-019",
  "name": {
    "vi": "Bài Học Kinh Nghiệm",
    "en": "Lesson Learned"
  },
  "desc": {
    "vi": "Ghi nhận bài học dự án.",
    "en": "Record project lessons."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/lesson-learned/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "productivity",
  "wave": 4,
  "free": 5
},
{
  "id": "knowledge-base",
  "gameId": "game-020",
  "name": {
    "vi": "Cơ Sở Tri Thức",
    "en": "Knowledge Base"
  },
  "desc": {
    "vi": "Xây dựng cơ sở tri thức.",
    "en": "Build knowledge base."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/knowledge-base/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "productivity",
  "wave": 4,
  "free": 5
},
{
  "id": "wiki-build",
  "gameId": "game-021",
  "name": {
    "vi": "Xây Dựng Wiki",
    "en": "Wiki Build"
  },
  "desc": {
    "vi": "Tạo trang wiki nội bộ.",
    "en": "Create internal wiki."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/wiki-build/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "productivity",
  "wave": 4,
  "free": 5
},
{
  "id": "faq-builder",
  "gameId": "game-022",
  "name": {
    "vi": "Xây Dựng FAQ",
    "en": "FAQ Builder"
  },
  "desc": {
    "vi": "Tạo danh sách FAQ.",
    "en": "Build FAQ list."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/faq-builder/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "productivity",
  "wave": 4,
  "free": 5
},
{
  "id": "glossary-game",
  "gameId": "game-023",
  "name": {
    "vi": "Thuật Ngữ",
    "en": "Glossary Game"
  },
  "desc": {
    "vi": "Tạo bảng thuật ngữ.",
    "en": "Build glossary."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/glossary-game/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "style-guide-write",
  "gameId": "game-024",
  "name": {
    "vi": "Viết Style Guide",
    "en": "Style Guide Write"
  },
  "desc": {
    "vi": "Viết hướng dẫn phong cách.",
    "en": "Write style guide."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/style-guide-write/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "creative",
  "wave": 4,
  "free": 5
},
{
  "id": "brand-voice",
  "gameId": "game-025",
  "name": {
    "vi": "Giọng Thương Hiệu",
    "en": "Brand Voice"
  },
  "desc": {
    "vi": "Xác định giọng thương hiệu.",
    "en": "Define brand voice."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/brand-voice/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "creative",
  "wave": 4,
  "free": 5
},
{
  "id": "tagline-create",
  "gameId": "game-026",
  "name": {
    "vi": "Tạo Slogan",
    "en": "Tagline Create"
  },
  "desc": {
    "vi": "Tạo slogan ấn tượng.",
    "en": "Create catchy taglines."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/tagline-create/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "creative",
  "wave": 4,
  "free": 5
},
{
  "id": "name-storm",
  "gameId": "game-027",
  "name": {
    "vi": "Bão Tên",
    "en": "Name Storm"
  },
  "desc": {
    "vi": "Brainstorm tên sản phẩm.",
    "en": "Brainstorm product names."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/name-storm/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "creative",
  "wave": 4,
  "free": 5
},
{
  "id": "domain-hunt",
  "gameId": "game-028",
  "name": {
    "vi": "Săn Tên Miền",
    "en": "Domain Hunt"
  },
  "desc": {
    "vi": "Kiểm tra & đề xuất tên miền.",
    "en": "Check & suggest domains."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/domain-hunt/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "creative",
  "wave": 4,
  "free": 5
},
{
  "id": "logo-critique",
  "gameId": "game-029",
  "name": {
    "vi": "Phê Bình Logo",
    "en": "Logo Critique"
  },
  "desc": {
    "vi": "Phê bình & cải thiện logo.",
    "en": "Critique & improve logos."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/logo-critique/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "creative",
  "wave": 4,
  "free": 5
},
{
  "id": "packaging-design",
  "gameId": "game-030",
  "name": {
    "vi": "Thiết Kế Bao Bì",
    "en": "Packaging Design"
  },
  "desc": {
    "vi": "Thiết kế bao bì sản phẩm.",
    "en": "Design product packaging."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/packaging-design/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "creative",
  "wave": 4,
  "free": 5
},
{
  "id": "ux-review",
  "gameId": "game-031",
  "name": {
    "vi": "Đánh Giá UX",
    "en": "UX Review"
  },
  "desc": {
    "vi": "Đánh giá trải nghiệm người dùng.",
    "en": "Review user experience."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/ux-review/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "creative",
  "wave": 4,
  "free": 5
},
{
  "id": "accessibility-check",
  "gameId": "game-032",
  "name": {
    "vi": "Kiểm Tra Truy Cập",
    "en": "Accessibility Check"
  },
  "desc": {
    "vi": "Kiểm tra khả năng truy cập.",
    "en": "Check accessibility."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/accessibility-check/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "creative",
  "wave": 4,
  "free": 5
},
{
  "id": "seo-checklist",
  "gameId": "game-033",
  "name": {
    "vi": "SEO",
    "en": "SEO Checklist"
  },
  "desc": {
    "vi": "Kiểm tra yếu tố SEO.",
    "en": "Check SEO factors."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/seo-checklist/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "productivity",
  "wave": 4,
  "free": 5
},
{
  "id": "content-calendar",
  "gameId": "game-034",
  "name": {
    "vi": "Lịch Nội Dung",
    "en": "Content Calendar"
  },
  "desc": {
    "vi": "Lập lịch nội dung.",
    "en": "Plan content calendar."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/content-calendar/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "productivity",
  "wave": 4,
  "free": 5
},
{
  "id": "hashtag-gen",
  "gameId": "game-035",
  "name": {
    "vi": "Máy Hashtag",
    "en": "Hashtag Gen"
  },
  "desc": {
    "vi": "Tạo hashtag phù hợp.",
    "en": "Generate relevant hashtags."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/hashtag-gen/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "creative",
  "wave": 4,
  "free": 5
},
{
  "id": "caption-write",
  "gameId": "game-036",
  "name": {
    "vi": "Viết Chú Thích",
    "en": "Caption Write"
  },
  "desc": {
    "vi": "Viết chú thích mạng xã hội.",
    "en": "Write social captions."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/caption-write/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "creative",
  "wave": 4,
  "free": 5
},
{
  "id": "ad-copy",
  "gameId": "game-037",
  "name": {
    "vi": "Viết Quảng Cáo",
    "en": "Ad Copy"
  },
  "desc": {
    "vi": "Viết quảng cáo ngắn gọn.",
    "en": "Write ad copy."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/ad-copy/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "creative",
  "wave": 4,
  "free": 5
},
{
  "id": "landing-page",
  "gameId": "game-038",
  "name": {
    "vi": "Trang Đích",
    "en": "Landing Page"
  },
  "desc": {
    "vi": "Thiết kế trang đích.",
    "en": "Design landing page."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/landing-page/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "creative",
  "wave": 4,
  "free": 5
},
{
  "id": "email-campaign",
  "gameId": "game-039",
  "name": {
    "vi": "Chiến Dịch Email",
    "en": "Email Campaign"
  },
  "desc": {
    "vi": "Thiết kế email marketing.",
    "en": "Design marketing emails."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/email-campaign/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "creative",
  "wave": 4,
  "free": 5
},
{
  "id": "survey-build",
  "gameId": "game-040",
  "name": {
    "vi": "Xây Dựng Khảo Sát",
    "en": "Survey Build"
  },
  "desc": {
    "vi": "Tạo khảo sát hiệu quả.",
    "en": "Build effective surveys."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/survey-build/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "productivity",
  "wave": 4,
  "free": 5
},
{
  "id": "interview-script",
  "gameId": "game-041",
  "name": {
    "vi": "Kịch Bản Phỏng Vấn",
    "en": "Interview Script"
  },
  "desc": {
    "vi": "Viết câu hỏi phỏng vấn.",
    "en": "Write interview questions."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/interview-script/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "onboarding-flow",
  "gameId": "game-042",
  "name": {
    "vi": "Quy Trình Đón Nhận",
    "en": "Onboarding Flow"
  },
  "desc": {
    "vi": "Thiết kế onboarding.",
    "en": "Design onboarding flow."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/onboarding-flow/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "productivity",
  "wave": 4,
  "free": 5
},
{
  "id": "offboarding",
  "gameId": "game-043",
  "name": {
    "vi": "Rời Bỏ",
    "en": "Offboarding"
  },
  "desc": {
    "vi": "Quy trình rời bỏ chuyên nghiệp.",
    "en": "Professional offboarding."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/offboarding/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "productivity",
  "wave": 4,
  "free": 5
},
{
  "id": "exit-interview",
  "gameId": "game-044",
  "name": {
    "vi": "Phỏng Vấn Ra Đi",
    "en": "Exit Interview"
  },
  "desc": {
    "vi": "Chuẩn bị phỏng vấn ra đi.",
    "en": "Prepare exit interview."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/exit-interview/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "performance-review",
  "gameId": "game-045",
  "name": {
    "vi": "Đánh Giá Hiệu Suất",
    "en": "Performance Review"
  },
  "desc": {
    "vi": "Viết đánh giá hiệu suất.",
    "en": "Write performance reviews."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/performance-review/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "goal-setting",
  "gameId": "game-046",
  "name": {
    "vi": "Đặt Mục Tiêu",
    "en": "Goal Setting"
  },
  "desc": {
    "vi": "Thiết lập SMART goals.",
    "en": "Set SMART goals."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/goal-setting/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "productivity",
  "wave": 4,
  "free": 5
},
{
  "id": "action-plan",
  "gameId": "game-047",
  "name": {
    "vi": "Kế Hoạch Hành Động",
    "en": "Action Plan"
  },
  "desc": {
    "vi": "Lập kế hoạch hành động chi tiết.",
    "en": "Create detailed action plans."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/action-plan/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "productivity",
  "wave": 4,
  "free": 5
},
{
  "id": "milestone-track",
  "gameId": "game-048",
  "name": {
    "vi": "Theo Dõi Cột Mốc",
    "en": "Milestone Track"
  },
  "desc": {
    "vi": "Theo dõi cột mốc dự án.",
    "en": "Track project milestones."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/milestone-track/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "productivity",
  "wave": 4,
  "free": 5
},
{
  "id": "deliverable-check",
  "gameId": "game-049",
  "name": {
    "vi": "Kiểm Tra Bàn Giao",
    "en": "Deliverable Check"
  },
  "desc": {
    "vi": "Kiểm tra bàn giao sản phẩm.",
    "en": "Check deliverables."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/deliverable-check/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "productivity",
  "wave": 4,
  "free": 5
},
{
  "id": "acceptance-criteria",
  "gameId": "game-050",
  "name": {
    "vi": "Tiêu Chí Chấp Nhận",
    "en": "Acceptance Criteria"
  },
  "desc": {
    "vi": "Viết tiêu chí chấp nhận.",
    "en": "Write acceptance criteria."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/acceptance-criteria/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "productivity",
  "wave": 4,
  "free": 5
},
{
  "id": "user-story",
  "gameId": "game-051",
  "name": {
    "vi": "Câu Chuyện Người Dùng",
    "en": "User Story"
  },
  "desc": {
    "vi": "Viết user story.",
    "en": "Write user stories."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/user-story/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "productivity",
  "wave": 4,
  "free": 5
},
{
  "id": "use-case",
  "gameId": "game-052",
  "name": {
    "vi": "Tình Huống Sử Dụng",
    "en": "Use Case"
  },
  "desc": {
    "vi": "Mô tả tình huống sử dụng.",
    "en": "Describe use cases."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/use-case/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "productivity",
  "wave": 4,
  "free": 5
},
{
  "id": "requirement-gather",
  "gameId": "game-053",
  "name": {
    "vi": "Thu Thập Yêu Cầu",
    "en": "Requirement Gather"
  },
  "desc": {
    "vi": "Thu thập yêu cầu phần mềm.",
    "en": "Gather software requirements."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/requirement-gather/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "productivity",
  "wave": 4,
  "free": 5
},
{
  "id": "technical-spec",
  "gameId": "game-054",
  "name": {
    "vi": "Đặc Tả Kỹ Thuật",
    "en": "Technical Spec"
  },
  "desc": {
    "vi": "Viết đặc tả kỹ thuật.",
    "en": "Write technical specs."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/technical-spec/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "productivity",
  "wave": 4,
  "free": 5
},
{
  "id": "api-design",
  "gameId": "game-055",
  "name": {
    "vi": "Thiết Kế API",
    "en": "API Design"
  },
  "desc": {
    "vi": "Thiết kế API RESTful.",
    "en": "Design RESTful APIs."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/api-design/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "productivity",
  "wave": 4,
  "free": 5
},
{
  "id": "database-schema",
  "gameId": "game-056",
  "name": {
    "vi": "Sơ Đồ CSDL",
    "en": "Database Schema"
  },
  "desc": {
    "vi": "Thiết kế sơ đồ cơ sở dữ liệu.",
    "en": "Design database schema."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/database-schema/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "productivity",
  "wave": 4,
  "free": 5
},
{
  "id": "system-architecture",
  "gameId": "game-057",
  "name": {
    "vi": "Kiến Trúc Hệ Thống",
    "en": "System Architecture"
  },
  "desc": {
    "vi": "Vẽ kiến trúc hệ thống.",
    "en": "Draw system architecture."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/system-architecture/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "productivity",
  "wave": 4,
  "free": 5
},
{
  "id": "code-review",
  "gameId": "game-058",
  "name": {
    "vi": "Xem Xét Code",
    "en": "Code Review"
  },
  "desc": {
    "vi": "Kiểm tra code.",
    "en": "Review code."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/code-review/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "productivity",
  "wave": 4,
  "free": 5
},
{
  "id": "bug-report",
  "gameId": "game-059",
  "name": {
    "vi": "Báo Cáo Lỗi",
    "en": "Bug Report"
  },
  "desc": {
    "vi": "Viết báo cáo lỗi chi tiết.",
    "en": "Write detailed bug reports."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/bug-report/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "productivity",
  "wave": 4,
  "free": 5
},
{
  "id": "test-case",
  "gameId": "game-060",
  "name": {
    "vi": "Trường Hợp Kiểm Tra",
    "en": "Test Case"
  },
  "desc": {
    "vi": "Viết test case.",
    "en": "Write test cases."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/test-case/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "productivity",
  "wave": 4,
  "free": 5
},
{
  "id": "deployment-check",
  "gameId": "game-061",
  "name": {
    "vi": "Kiểm Tra Triển Khai",
    "en": "Deployment Check"
  },
  "desc": {
    "vi": "Checklist triển khai.",
    "en": "Deployment checklist."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/deployment-check/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "productivity",
  "wave": 4,
  "free": 5
},
{
  "id": "monitor-alert",
  "gameId": "game-062",
  "name": {
    "vi": "Giám Sát Cảnh Báo",
    "en": "Monitor Alert"
  },
  "desc": {
    "vi": "Thiết lập cảnh báo giám sát.",
    "en": "Setup monitoring alerts."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/monitor-alert/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "productivity",
  "wave": 4,
  "free": 5
},
{
  "id": "incident-response",
  "gameId": "game-063",
  "name": {
    "vi": "Phản Hồi Sự Cố",
    "en": "Incident Response"
  },
  "desc": {
    "vi": "Quy trình phản hồi sự cố.",
    "en": "Incident response plan."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/incident-response/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "disaster-recover",
  "gameId": "game-064",
  "name": {
    "vi": "Khôi Phục Thảm Họa",
    "en": "Disaster Recover"
  },
  "desc": {
    "vi": "Kế hoạch khôi phục thảm họa.",
    "en": "Disaster recovery plan."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/disaster-recover/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "backup-check",
  "gameId": "game-065",
  "name": {
    "vi": "Kiểm Tra Sao Lưu",
    "en": "Backup Check"
  },
  "desc": {
    "vi": "Kiểm tra & kiểm tra sao lưu.",
    "en": "Check & verify backups."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/backup-check/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "productivity",
  "wave": 4,
  "free": 5
},
{
  "id": "security-audit",
  "gameId": "game-066",
  "name": {
    "vi": "Kiểm Tra Bảo Mật",
    "en": "Security Audit"
  },
  "desc": {
    "vi": "Kiểm tra bảo mật hệ thống.",
    "en": "Security audit checklist."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/security-audit/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "password-policy",
  "gameId": "game-067",
  "name": {
    "vi": "Chính Sách Mật Khẩu",
    "en": "Password Policy"
  },
  "desc": {
    "vi": "Thiết lập chính sách mật khẩu.",
    "en": "Set password policy."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/password-policy/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "data-privacy",
  "gameId": "game-068",
  "name": {
    "vi": "Quyền Riêng Tư Dữ Liệu",
    "en": "Data Privacy"
  },
  "desc": {
    "vi": "Đánh giá quyền riêng tư dữ liệu.",
    "en": "Assess data privacy."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/data-privacy/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "compliance-check",
  "gameId": "game-069",
  "name": {
    "vi": "Tuân Thủ",
    "en": "Compliance Check"
  },
  "desc": {
    "vi": "Kiểm tra tuân thủ quy định.",
    "en": "Check regulatory compliance."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/compliance-check/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "contract-review",
  "gameId": "game-070",
  "name": {
    "vi": "Xem Xét Hợp Đồng",
    "en": "Contract Review"
  },
  "desc": {
    "vi": "Kiểm tra điều khoản hợp đồng.",
    "en": "Review contract terms."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/contract-review/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "ip-check",
  "gameId": "game-071",
  "name": {
    "vi": "Sở Hữu Trí Tuệ",
    "en": "IP Check"
  },
  "desc": {
    "vi": "Kiểm tra sở hữu trí tuệ.",
    "en": "Check intellectual property."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/ip-check/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "patent-search",
  "gameId": "game-072",
  "name": {
    "vi": "Tìm Kiếm Bằng Sáng Chế",
    "en": "Patent Search"
  },
  "desc": {
    "vi": "Tìm kiếm bằng sáng chế.",
    "en": "Search patents."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/patent-search/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "trademark-check",
  "gameId": "game-073",
  "name": {
    "vi": "Kiểm Tra Thương Hiệu",
    "en": "Trademark Check"
  },
  "desc": {
    "vi": "Kiểm tra đăng ký thương hiệu.",
    "en": "Check trademark registration."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/trademark-check/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "copyright-fair",
  "gameId": "game-074",
  "name": {
    "vi": "Bản Quyền Công Bằng",
    "en": "Copyright Fair"
  },
  "desc": {
    "vi": "Đánh giá sử dụng hợp lý bản quyền.",
    "en": "Assess fair use."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/copyright-fair/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "open-source",
  "gameId": "game-075",
  "name": {
    "vi": "Mã Nguồn Mở",
    "en": "Open Source"
  },
  "desc": {
    "vi": "Đánh giá giấy phép mã nguồn mở.",
    "en": "Assess open source licenses."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/open-source/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "contrib-guide",
  "gameId": "game-076",
  "name": {
    "vi": "Hướng Dẫn Đóng Góp",
    "en": "Contrib Guide"
  },
  "desc": {
    "vi": "Viết hướng dẫn đóng góp.",
    "en": "Write contribution guide."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/contrib-guide/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "code-of-conduct",
  "gameId": "game-077",
  "name": {
    "vi": "Quy Tắc Ứng Xử",
    "en": "Code of Conduct"
  },
  "desc": {
    "vi": "Viết quy tắc ứng xử.",
    "en": "Write code of conduct."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/code-of-conduct/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "release-note",
  "gameId": "game-078",
  "name": {
    "vi": "Ghi Chú Phát Hành",
    "en": "Release Note"
  },
  "desc": {
    "vi": "Viết ghi chú phát hành.",
    "en": "Write release notes."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/release-note/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "productivity",
  "wave": 4,
  "free": 5
},
{
  "id": "changelog-build",
  "gameId": "game-079",
  "name": {
    "vi": "Xây Dựng Changelog",
    "en": "Changelog Build"
  },
  "desc": {
    "vi": "Xây dựng changelog.",
    "en": "Build changelog."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/changelog-build/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "productivity",
  "wave": 4,
  "free": 5
},
{
  "id": "roadmap-plan",
  "gameId": "game-080",
  "name": {
    "vi": "Lập Lộ Trình",
    "en": "Roadmap Plan"
  },
  "desc": {
    "vi": "Lập lộ trình sản phẩm.",
    "en": "Plan product roadmap."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/roadmap-plan/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "productivity",
  "wave": 4,
  "free": 5
},
{
  "id": "feature-spec",
  "gameId": "game-081",
  "name": {
    "vi": "Đặc Tả Tính Năng",
    "en": "Feature Spec"
  },
  "desc": {
    "vi": "Viết đặc tả tính năng.",
    "en": "Write feature specification."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/feature-spec/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "productivity",
  "wave": 4,
  "free": 5
},
{
  "id": "mockup-review",
  "gameId": "game-082",
  "name": {
    "vi": "Đánh Giá Mockup",
    "en": "Mockup Review"
  },
  "desc": {
    "vi": "Phê bình thiết kế mockup.",
    "en": "Critique mockup designs."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/mockup-review/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "creative",
  "wave": 4,
  "free": 5
},
{
  "id": "prototype-test",
  "gameId": "game-083",
  "name": {
    "vi": "Thử Nghiệm Nguyên Mẫu",
    "en": "Prototype Test"
  },
  "desc": {
    "vi": "Thử nghiệm nguyên mẫu.",
    "en": "Test prototypes."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/prototype-test/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "a-b-test",
  "gameId": "game-084",
  "name": {
    "vi": "Thử Nghiệm A/B",
    "en": "A/B Test"
  },
  "desc": {
    "vi": "Thiết kế thử nghiệm A/B.",
    "en": "Design A/B tests."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/a-b-test/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "metric-define",
  "gameId": "game-085",
  "name": {
    "vi": "Xác Định Chỉ Số",
    "en": "Metric Define"
  },
  "desc": {
    "vi": "Xác định chỉ số đo lường.",
    "en": "Define metrics."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/metric-define/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "productivity",
  "wave": 4,
  "free": 5
},
{
  "id": "dashboard-design",
  "gameId": "game-086",
  "name": {
    "vi": "Thiết Kế Bảng Điều Khiển",
    "en": "Dashboard Design"
  },
  "desc": {
    "vi": "Thiết kế dashboard KPI.",
    "en": "Design KPI dashboard."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/dashboard-design/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "creative",
  "wave": 4,
  "free": 5
},
{
  "id": "alert-design",
  "gameId": "game-087",
  "name": {
    "vi": "Thiết Kế Cảnh Báo",
    "en": "Alert Design"
  },
  "desc": {
    "vi": "Thiết kế cảnh báo thông minh.",
    "en": "Design smart alerts."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/alert-design/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "creative",
  "wave": 4,
  "free": 5
},
{
  "id": "notification-copy",
  "gameId": "game-088",
  "name": {
    "vi": "Viết Thông Báo",
    "en": "Notification Copy"
  },
  "desc": {
    "vi": "Viết copy thông báo đẩy.",
    "en": "Write push notification copy."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/notification-copy/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "creative",
  "wave": 4,
  "free": 5
},
{
  "id": "empty-state",
  "gameId": "game-089",
  "name": {
    "vi": "Trạng Thái Trống",
    "en": "Empty State"
  },
  "desc": {
    "vi": "Thiết kế trạng thái trống.",
    "en": "Design empty states."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/empty-state/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "creative",
  "wave": 4,
  "free": 5
},
{
  "id": "error-message",
  "gameId": "game-090",
  "name": {
    "vi": "Thông Báo Lỗi",
    "en": "Error Message"
  },
  "desc": {
    "vi": "Viết thông báo lỗi thân thiện.",
    "en": "Write friendly error messages."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/error-message/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "creative",
  "wave": 4,
  "free": 5
},
{
  "id": "loading-state",
  "gameId": "game-091",
  "name": {
    "vi": "Trạng Thái Tải",
    "en": "Loading State"
  },
  "desc": {
    "vi": "Thiết kế trạng thái tải.",
    "en": "Design loading states."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/loading-state/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "creative",
  "wave": 4,
  "free": 5
},
{
  "id": "success-state",
  "gameId": "game-092",
  "name": {
    "vi": "Trạng Thái Thành Công",
    "en": "Success State"
  },
  "desc": {
    "vi": "Thiết kế trạng thái thành công.",
    "en": "Design success states."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/success-state/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "creative",
  "wave": 4,
  "free": 5
},
{
  "id": "onboarding-check",
  "gameId": "game-093",
  "name": {
    "vi": "Kiểm Tra Đón Nhận",
    "en": "Onboarding Check"
  },
  "desc": {
    "vi": "Kiểm tra quy trình đón nhận.",
    "en": "Check onboarding flow."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/onboarding-check/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "productivity",
  "wave": 4,
  "free": 5
},
{
  "id": "retention-check",
  "gameId": "game-094",
  "name": {
    "vi": "Kiểm Tra Giữ Chân",
    "en": "Retention Check"
  },
  "desc": {
    "vi": "Phân tích yếu tố giữ chân.",
    "en": "Analyze retention factors."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/retention-check/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "churn-predict",
  "gameId": "game-095",
  "name": {
    "vi": "Dự Đoán Rời Bỏ",
    "en": "Churn Predict"
  },
  "desc": {
    "vi": "Dự đoán khách hàng rời bỏ.",
    "en": "Predict customer churn."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/churn-predict/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "ltv-calculate",
  "gameId": "game-096",
  "name": {
    "vi": "Tính LTV",
    "en": "LTV Calculate"
  },
  "desc": {
    "vi": "Tính giá trị vòng đời khách hàng.",
    "en": "Calculate customer LTV."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/ltv-calculate/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "cac-calculate",
  "gameId": "game-097",
  "name": {
    "vi": "Tính CAC",
    "en": "CAC Calculate"
  },
  "desc": {
    "vi": "Tính chi phí thu hút khách hàng.",
    "en": "Calculate customer CAC."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/cac-calculate/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "roi-calculate",
  "gameId": "game-098",
  "name": {
    "vi": "Tính ROI",
    "en": "ROI Calculate"
  },
  "desc": {
    "vi": "Tính tỷ suất hoàn vốn.",
    "en": "Calculate ROI."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/roi-calculate/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "break-even",
  "gameId": "game-099",
  "name": {
    "vi": "Điểm Hòa Vốn",
    "en": "Break Even"
  },
  "desc": {
    "vi": "Tính điểm hòa vốn.",
    "en": "Calculate break-even point."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/break-even/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "margin-calculate",
  "gameId": "game-100",
  "name": {
    "vi": "Tính Biên Lợi Nhuận",
    "en": "Margin Calculate"
  },
  "desc": {
    "vi": "Tính biên lợi nhuận.",
    "en": "Calculate profit margin."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/margin-calculate/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "cash-flow",
  "gameId": "game-101",
  "name": {
    "vi": "Dòng Tiền",
    "en": "Cash Flow"
  },
  "desc": {
    "vi": "Lập báo cáo dòng tiền.",
    "en": "Create cash flow report."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/cash-flow/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "balance-sheet",
  "gameId": "game-102",
  "name": {
    "vi": "Bảng Cân Đối",
    "en": "Balance Sheet"
  },
  "desc": {
    "vi": "Lập bảng cân đối kế toán.",
    "en": "Create balance sheet."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/balance-sheet/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "income-statement",
  "gameId": "game-103",
  "name": {
    "vi": "Báo Cáo Thu Nhập",
    "en": "Income Statement"
  },
  "desc": {
    "vi": "Lập báo cáo thu nhập.",
    "en": "Create income statement."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/income-statement/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "depreciation-calc",
  "gameId": "game-104",
  "name": {
    "vi": "Khấu Hao",
    "en": "Depreciation Calc"
  },
  "desc": {
    "vi": "Tính khấu hao tài sản.",
    "en": "Calculate depreciation."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/depreciation-calc/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "inventory-manage",
  "gameId": "game-105",
  "name": {
    "vi": "Quản Lý Tồn Kho",
    "en": "Inventory Manage"
  },
  "desc": {
    "vi": "Tính toán tồn kho tối ưu.",
    "en": "Optimize inventory."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/inventory-manage/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "eoq-calc",
  "gameId": "game-106",
  "name": {
    "vi": "EOQ",
    "en": "EOQ Calc"
  },
  "desc": {
    "vi": "Tính số lượng đặt hàng tối ưu.",
    "en": "Calculate EOQ."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/eoq-calc/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "reorder-point",
  "gameId": "game-107",
  "name": {
    "vi": "Điểm Đặt Hàng Lại",
    "en": "Reorder Point"
  },
  "desc": {
    "vi": "Tính điểm đặt hàng lại.",
    "en": "Calculate reorder point."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/reorder-point/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "lead-time",
  "gameId": "game-108",
  "name": {
    "vi": "Thời Gian Chờ",
    "en": "Lead Time"
  },
  "desc": {
    "vi": "Tính & tối ưu thời gian chờ.",
    "en": "Calculate & optimize lead time."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/lead-time/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "supplier-eval",
  "gameId": "game-109",
  "name": {
    "vi": "Đánh Giá Nhà Cung Cấp",
    "en": "Supplier Eval"
  },
  "desc": {
    "vi": "Đánh giá nhà cung cấp.",
    "en": "Evaluate suppliers."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/supplier-eval/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "logistics-optimize",
  "gameId": "game-110",
  "name": {
    "vi": "Tối Ưu Logistics",
    "en": "Logistics Optimize"
  },
  "desc": {
    "vi": "Tối ưu tuyến đường vận chuyển.",
    "en": "Optimize delivery routes."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/logistics-optimize/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "warehouse-layout",
  "gameId": "game-111",
  "name": {
    "vi": "Bố Trí Kho",
    "en": "Warehouse Layout"
  },
  "desc": {
    "vi": "Thiết kế bố trí kho hàng.",
    "en": "Design warehouse layout."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/warehouse-layout/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "safety-stock",
  "gameId": "game-112",
  "name": {
    "vi": "Tồn Kho An Toàn",
    "en": "Safety Stock"
  },
  "desc": {
    "vi": "Tính tồn kho an toàn.",
    "en": "Calculate safety stock."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/safety-stock/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "demand-forecast",
  "gameId": "game-113",
  "name": {
    "vi": "Dự Báo Nhu Cầu",
    "en": "Demand Forecast"
  },
  "desc": {
    "vi": "Dự báo nhu cầu sản phẩm.",
    "en": "Forecast product demand."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/demand-forecast/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "capacity-plan",
  "gameId": "game-114",
  "name": {
    "vi": "Kế Hoạch Năng Lực",
    "en": "Capacity Plan"
  },
  "desc": {
    "vi": "Lập kế hoạch năng lực sản xuất.",
    "en": "Plan production capacity."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/capacity-plan/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "quality-control",
  "gameId": "game-115",
  "name": {
    "vi": "Kiểm Soát Chất Lượng",
    "en": "Quality Control"
  },
  "desc": {
    "vi": "Thiết kế kiểm soát chất lượng.",
    "en": "Design quality control."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/quality-control/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "six-sigma",
  "gameId": "game-116",
  "name": {
    "vi": "Six Sigma",
    "en": "Six Sigma"
  },
  "desc": {
    "vi": "Áp dụng DMAIC Six Sigma.",
    "en": "Apply DMAIC Six Sigma."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/six-sigma/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "lean-game",
  "gameId": "game-117",
  "name": {
    "vi": "Tinh Gọn",
    "en": "Lean Game"
  },
  "desc": {
    "vi": "Áp dụng nguyên tắc tinh gọn.",
    "en": "Apply lean principles."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/lean-game/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "kaizen-game",
  "gameId": "game-118",
  "name": {
    "vi": "Kaizen",
    "en": "Kaizen Game"
  },
  "desc": {
    "vi": "Cải tiến liên tục Kaizen.",
    "en": "Continuous Kaizen improvement."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/kaizen-game/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "5s-game",
  "gameId": "game-119",
  "name": {
    "vi": "5S",
    "en": "5S Game"
  },
  "desc": {
    "vi": "Thực hành 5S.",
    "en": "Practice 5S methodology."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/5s-game/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "kanban-calc",
  "gameId": "game-120",
  "name": {
    "vi": "Kanban Tính Toán",
    "en": "Kanban Calc"
  },
  "desc": {
    "vi": "Tính toán số lượng thẻ Kanban.",
    "en": "Calculate Kanban card count."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/kanban-calc/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "takt-time",
  "gameId": "game-121",
  "name": {
    "vi": "Takt Time",
    "en": "Takt Time"
  },
  "desc": {
    "vi": "Tính takt time sản xuất.",
    "en": "Calculate takt time."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/takt-time/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "cycle-time",
  "gameId": "game-122",
  "name": {
    "vi": "Cycle Time",
    "en": "Cycle Time"
  },
  "desc": {
    "vi": "Tính & cải thiện cycle time.",
    "en": "Calculate & improve cycle time."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/cycle-time/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "throughput",
  "gameId": "game-123",
  "name": {
    "vi": "Throughput",
    "en": "Throughput"
  },
  "desc": {
    "vi": "Tính throughput hệ thống.",
    "en": "Calculate system throughput."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/throughput/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "utilization",
  "gameId": "game-124",
  "name": {
    "vi": "Utilization",
    "en": "Utilization"
  },
  "desc": {
    "vi": "Tính tỷ lệ sử dụng thiết bị.",
    "en": "Calculate equipment utilization."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/utilization/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "oee-calc",
  "gameId": "game-125",
  "name": {
    "vi": "OEE",
    "en": "OEE Calc"
  },
  "desc": {
    "vi": "Tính OEE tổng thể.",
    "en": "Calculate overall OEE."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/oee-calc/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "mtbf-calc",
  "gameId": "game-126",
  "name": {
    "vi": "MTBF",
    "en": "MTBF Calc"
  },
  "desc": {
    "vi": "Tính thời gian trung bình giữa các lỗi.",
    "en": "Calculate MTBF."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/mtbf-calc/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "mttr-calc",
  "gameId": "game-127",
  "name": {
    "vi": "MTTR",
    "en": "MTTR Calc"
  },
  "desc": {
    "vi": "Tính thời gian sửa chữa trung bình.",
    "en": "Calculate MTTR."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/mttr-calc/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "spare-parts",
  "gameId": "game-128",
  "name": {
    "vi": "Phụ Tùng",
    "en": "Spare Parts"
  },
  "desc": {
    "vi": "Quản lý tồn kho phụ tùng.",
    "en": "Manage spare parts inventory."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/spare-parts/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "maintenance-sched",
  "gameId": "game-129",
  "name": {
    "vi": "Lịch Bảo Trì",
    "en": "Maintenance Sched"
  },
  "desc": {
    "vi": "Lập lịch bảo trì thiết bị.",
    "en": "Schedule equipment maintenance."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/maintenance-sched/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "productivity",
  "wave": 4,
  "free": 5
},
{
  "id": "asset-track",
  "gameId": "game-130",
  "name": {
    "vi": "Theo Dõi Tài Sản",
    "en": "Asset Track"
  },
  "desc": {
    "vi": "Theo dõi tài sản cố định.",
    "en": "Track fixed assets."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/asset-track/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "productivity",
  "wave": 4,
  "free": 5
},
{
  "id": "warranty-check",
  "gameId": "game-131",
  "name": {
    "vi": "Bảo Hành",
    "en": "Warranty Check"
  },
  "desc": {
    "vi": "Theo dõi & quản lý bảo hành.",
    "en": "Track & manage warranties."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/warranty-check/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "productivity",
  "wave": 4,
  "free": 5
},
{
  "id": "recall-manage",
  "gameId": "game-132",
  "name": {
    "vi": "Thu Hồi",
    "en": "Recall Manage"
  },
  "desc": {
    "vi": "Quản lý thu hồi sản phẩm.",
    "en": "Manage product recalls."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/recall-manage/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "sustainability",
  "gameId": "game-133",
  "name": {
    "vi": "Bền Vững",
    "en": "Sustainability"
  },
  "desc": {
    "vi": "Đánh giá tác động bền vững.",
    "en": "Assess sustainability impact."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/sustainability/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "carbon-footprint",
  "gameId": "game-134",
  "name": {
    "vi": "Dấu Chân Carbon",
    "en": "Carbon Footprint"
  },
  "desc": {
    "vi": "Tính toán dấu chân carbon.",
    "en": "Calculate carbon footprint."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/carbon-footprint/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "esg-check",
  "gameId": "game-135",
  "name": {
    "vi": "ESG",
    "en": "ESG Check"
  },
  "desc": {
    "vi": "Đánh giá ESG.",
    "en": "Assess ESG factors."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/esg-check/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "sdg-align",
  "gameId": "game-136",
  "name": {
    "vi": "SDG",
    "en": "SDG Align"
  },
  "desc": {
    "vi": "Căn chỉnh với Mục tiêu Phát triển Bền vững.",
    "en": "Align with SDGs."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/sdg-align/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "habit-stack",
  "gameId": "game-001",
  "name": {
    "vi": "Xếp Thói Quen",
    "en": "Habit Stack"
  },
  "desc": {
    "vi": "Xếp thói quen theo chuỗi.",
    "en": "Stack habits in sequence."
  },
  "group": "life",
  "tier": 1,
  "status": "live",
  "path": "games/habit-stack/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "temptation-bundle",
  "gameId": "game-002",
  "name": {
    "vi": "Gói Cám Dỗ",
    "en": "Temptation Bundle"
  },
  "desc": {
    "vi": "Kết hợp việc cần & thích.",
    "en": "Bundle wants with needs."
  },
  "group": "life",
  "tier": 1,
  "status": "live",
  "path": "games/temptation-bundle/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "implementation-intention",
  "gameId": "game-003",
  "name": {
    "vi": "Ý Định Thực Hiện",
    "en": "Implementation Intention"
  },
  "desc": {
    "vi": "Viết kế hoạch if-then.",
    "en": "Write if-then plans."
  },
  "group": "life",
  "tier": 1,
  "status": "live",
  "path": "games/implementation-intention/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "habit-tracker-v2",
  "gameId": "game-004",
  "name": {
    "vi": "Theo Dõi Thói Quen 2",
    "en": "Habit Tracker V2"
  },
  "desc": {
    "vi": "Theo dõi thói quen nâng cao.",
    "en": "Advanced habit tracking."
  },
  "group": "life",
  "tier": 1,
  "status": "live",
  "path": "games/habit-tracker-v2/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "streak-freeze",
  "gameId": "game-005",
  "name": {
    "vi": "Đóng Băng Chuỗi",
    "en": "Streak Freeze"
  },
  "desc": {
    "vi": "Bảo vệ chuỗi ngày.",
    "en": "Protect streak days."
  },
  "group": "life",
  "tier": 1,
  "status": "live",
  "path": "games/streak-freeze/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "identity-based",
  "gameId": "game-006",
  "name": {
    "vi": "Dựa Trên Nhận Dạng",
    "en": "Identity Based"
  },
  "desc": {
    "vi": "Xây dựng thói quen từ nhận dạng.",
    "en": "Build habits from identity."
  },
  "group": "life",
  "tier": 1,
  "status": "live",
  "path": "games/identity-based/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "environment-design",
  "gameId": "game-007",
  "name": {
    "vi": "Thiết Kế Môi Trường",
    "en": "Environment Design"
  },
  "desc": {
    "vi": "Thiết kế môi trường hỗ trợ thói quen.",
    "en": "Design habit-supporting environment."
  },
  "group": "life",
  "tier": 1,
  "status": "live",
  "path": "games/environment-design/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "friction-remove",
  "gameId": "game-008",
  "name": {
    "vi": "Loại Bỏ Ma Sát",
    "en": "Friction Remove"
  },
  "desc": {
    "vi": "Loại bỏ ma sát thói quen xấu.",
    "en": "Remove bad habit friction."
  },
  "group": "life",
  "tier": 1,
  "status": "live",
  "path": "games/friction-remove/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "cue-obvious",
  "gameId": "game-009",
  "name": {
    "vi": "Gợi Ý Hiển Nhiên",
    "en": "Cue Obvious"
  },
  "desc": {
    "vi": "Làm gợi ý thói quen hiển nhiên.",
    "en": "Make habit cues obvious."
  },
  "group": "life",
  "tier": 1,
  "status": "live",
  "path": "games/cue-obvious/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "craving-attractive",
  "gameId": "game-010",
  "name": {
    "vi": "Khao Khát Hấp Dẫn",
    "en": "Craving Attractive"
  },
  "desc": {
    "vi": "Làm thói quen hấp dẫn.",
    "en": "Make habits attractive."
  },
  "group": "life",
  "tier": 1,
  "status": "live",
  "path": "games/craving-attractive/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "response-easy",
  "gameId": "game-011",
  "name": {
    "vi": "Phản Hồi Dễ Dàng",
    "en": "Response Easy"
  },
  "desc": {
    "vi": "Làm thói quen dễ thực hiện.",
    "en": "Make habits easy to do."
  },
  "group": "life",
  "tier": 1,
  "status": "live",
  "path": "games/response-easy/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "reward-satisfying",
  "gameId": "game-012",
  "name": {
    "vi": "Phần Thưởng Thỏa Mãn",
    "en": "Reward Satisfying"
  },
  "desc": {
    "vi": "Làm phần thưởng thỏa mãn.",
    "en": "Make rewards satisfying."
  },
  "group": "life",
  "tier": 1,
  "status": "live",
  "path": "games/reward-satisfying/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "habit-scorecard",
  "gameId": "game-013",
  "name": {
    "vi": "Thẻ Điểm Thói Quen",
    "en": "Habit Scorecard"
  },
  "desc": {
    "vi": "Đánh giá thói quen hiện tại.",
    "en": "Score current habits."
  },
  "group": "life",
  "tier": 1,
  "status": "live",
  "path": "games/habit-scorecard/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "pointing-calling",
  "gameId": "game-014",
  "name": {
    "vi": "Chỉ Và Gọi",
    "en": "Pointing Calling"
  },
  "desc": {
    "vi": "Kỹ thuật chỉ & gọi an toàn.",
    "en": "Point & call safety technique."
  },
  "group": "life",
  "tier": 1,
  "status": "live",
  "path": "games/pointing-calling/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "never-miss-twice",
  "gameId": "game-015",
  "name": {
    "vi": "Không Bỏ Lỡ Hai Lần",
    "en": "Never Miss Twice"
  },
  "desc": {
    "vi": "Quy tắc không bỏ lỡ hai lần.",
    "en": "Never miss twice rule."
  },
  "group": "life",
  "tier": 1,
  "status": "live",
  "path": "games/never-miss-twice/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "two-minute-rule",
  "gameId": "game-016",
  "name": {
    "vi": "Quy Tắc Hai Phút",
    "en": "Two Minute Rule"
  },
  "desc": {
    "vi": "Thói quen bắt đầu từ 2 phút.",
    "en": "Start habits in 2 minutes."
  },
  "group": "life",
  "tier": 1,
  "status": "live",
  "path": "games/two-minute-rule/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "habit-shaping",
  "gameId": "game-017",
  "name": {
    "vi": "Định Hình Thói Quen",
    "en": "Habit Shaping"
  },
  "desc": {
    "vi": "Tạo thói quen từng chút.",
    "en": "Shape habits gradually."
  },
  "group": "life",
  "tier": 1,
  "status": "live",
  "path": "games/habit-shaping/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "recovery-protocol",
  "gameId": "game-018",
  "name": {
    "vi": "Giao Thức Phục Hồi",
    "en": "Recovery Protocol"
  },
  "desc": {
    "vi": "Kế hoạch phục hồi khi thất bại.",
    "en": "Recovery plan after failure."
  },
  "group": "life",
  "tier": 1,
  "status": "live",
  "path": "games/recovery-protocol/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "accountability-partner",
  "gameId": "game-019",
  "name": {
    "vi": "Đối Tác Trách Nhiệm",
    "en": "Accountability Partner"
  },
  "desc": {
    "vi": "Tìm đối tác giữ trách nhiệm.",
    "en": "Find accountability partner."
  },
  "group": "social",
  "tier": 1,
  "status": "live",
  "path": "games/accountability-partner/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "social-commitment",
  "gameId": "game-020",
  "name": {
    "vi": "Cam Kết Xã Hội",
    "en": "Social Commitment"
  },
  "desc": {
    "vi": "Cam kết công khai thói quen.",
    "en": "Public habit commitment."
  },
  "group": "social",
  "tier": 1,
  "status": "live",
  "path": "games/social-commitment/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "habit-contract",
  "gameId": "game-021",
  "name": {
    "vi": "Hợp Đồng Thói Quen",
    "en": "Habit Contract"
  },
  "desc": {
    "vi": "Viết hợp đồng thói quen.",
    "en": "Write habit contract."
  },
  "group": "social",
  "tier": 1,
  "status": "live",
  "path": "games/habit-contract/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "progress-photo",
  "gameId": "game-022",
  "name": {
    "vi": "Ảnh Tiến Bộ",
    "en": "Progress Photo"
  },
  "desc": {
    "vi": "Chụp ảnh tiến bộ thói quen.",
    "en": "Take habit progress photos."
  },
  "group": "life",
  "tier": 1,
  "status": "live",
  "path": "games/progress-photo/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "habit-journal",
  "gameId": "game-023",
  "name": {
    "vi": "Nhật Ký Thói Quen",
    "en": "Habit Journal"
  },
  "desc": {
    "vi": "Ghi nhận thói quen hàng ngày.",
    "en": "Daily habit journaling."
  },
  "group": "life",
  "tier": 1,
  "status": "live",
  "path": "games/habit-journal/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "weekly-review-v2",
  "gameId": "game-024",
  "name": {
    "vi": "Tổng Kết Tuần 2",
    "en": "Weekly Review V2"
  },
  "desc": {
    "vi": "Tổng kết tuần nâng cao.",
    "en": "Advanced weekly review."
  },
  "group": "life",
  "tier": 1,
  "status": "live",
  "path": "games/weekly-review-v2/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "monthly-review-v2",
  "gameId": "game-025",
  "name": {
    "vi": "Tổng Kết Tháng 2",
    "en": "Monthly Review V2"
  },
  "desc": {
    "vi": "Tổng kết tháng nâng cao.",
    "en": "Advanced monthly review."
  },
  "group": "life",
  "tier": 1,
  "status": "live",
  "path": "games/monthly-review-v2/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "quarterly-review",
  "gameId": "game-026",
  "name": {
    "vi": "Tổng Kết Quý",
    "en": "Quarterly Review"
  },
  "desc": {
    "vi": "Tổng kết quý & điều chỉnh.",
    "en": "Quarterly review & adjust."
  },
  "group": "life",
  "tier": 1,
  "status": "live",
  "path": "games/quarterly-review/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "annual-review",
  "gameId": "game-027",
  "name": {
    "vi": "Tổng Kết Năm",
    "en": "Annual Review"
  },
  "desc": {
    "vi": "Tổng kết năm & lập kế hoạch.",
    "en": "Annual review & planning."
  },
  "group": "life",
  "tier": 1,
  "status": "live",
  "path": "games/annual-review/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "decade-review",
  "gameId": "game-028",
  "name": {
    "vi": "Tổng Kết Thập Kỷ",
    "en": "Decade Review"
  },
  "desc": {
    "vi": "Nhìn lại & lập kế hoạch thập kỷ.",
    "en": "Decade review & plan."
  },
  "group": "life",
  "tier": 1,
  "status": "live",
  "path": "games/decade-review/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "life-calendar",
  "gameId": "game-029",
  "name": {
    "vi": "Lịch Cuộc Đời",
    "en": "Life Calendar"
  },
  "desc": {
    "vi": "Hiển thị tuần trong đời.",
    "en": "Display weeks in life."
  },
  "group": "life",
  "tier": 1,
  "status": "live",
  "path": "games/life-calendar/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "death-clock",
  "gameId": "game-030",
  "name": {
    "vi": "Đồng Hồ Cuộc Đời",
    "en": "Death Clock"
  },
  "desc": {
    "vi": "Tính thời gian còn lại ước tính.",
    "en": "Estimate remaining time."
  },
  "group": "life",
  "tier": 1,
  "status": "live",
  "path": "games/death-clock/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "regret-minimization",
  "gameId": "game-031",
  "name": {
    "vi": "Giảm Thiểu Hối Tiếc",
    "en": "Regret Minimization"
  },
  "desc": {
    "vi": "Ma trận giảm thiểu hối tiếc.",
    "en": "Regret minimization framework."
  },
  "group": "life",
  "tier": 1,
  "status": "live",
  "path": "games/regret-minimization/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "fear-setting-v2",
  "gameId": "game-032",
  "name": {
    "vi": "Đặt Nỗi Sợ 2",
    "en": "Fear Setting V2"
  },
  "desc": {
    "vi": "Fear setting nâng cao.",
    "en": "Advanced fear setting."
  },
  "group": "life",
  "tier": 1,
  "status": "live",
  "path": "games/fear-setting-v2/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "optionality",
  "gameId": "game-033",
  "name": {
    "vi": "Linh Hoạt",
    "en": "Optionality"
  },
  "desc": {
    "vi": "Xây dựng sự linh hoạt trong cuộc sống.",
    "en": "Build life optionality."
  },
  "group": "life",
  "tier": 1,
  "status": "live",
  "path": "games/optionality/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "career-capital",
  "gameId": "game-034",
  "name": {
    "vi": "Vốn Nghề Nghiệp",
    "en": "Career Capital"
  },
  "desc": {
    "vi": "Xây dựng vốn nghề nghiệp hiếm & có giá trị.",
    "en": "Build rare & valuable career capital."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/career-capital/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "mission-mesh",
  "gameId": "game-035",
  "name": {
    "vi": "Sứ Mệnh Phù Hợp",
    "en": "Mission Mesh"
  },
  "desc": {
    "vi": "Tìm điểm giao sứ mệnh.",
    "en": "Find mission overlap."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/mission-mesh/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "adjacent-possible",
  "gameId": "game-036",
  "name": {
    "vi": "Khả Năng Liền Kề",
    "en": "Adjacent Possible"
  },
  "desc": {
    "vi": "Khám phá khả năng liền kề.",
    "en": "Explore adjacent possibilities."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/adjacent-possible/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "creative",
  "wave": 4,
  "free": 5
},
{
  "id": "deliberate-practice",
  "gameId": "game-037",
  "name": {
    "vi": "Luyện Tập Có Chủ Đích",
    "en": "Deliberate Practice"
  },
  "desc": {
    "vi": "Thiết kế luyện tập có chủ đích.",
    "en": "Design deliberate practice."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/deliberate-practice/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "feedback-loop",
  "gameId": "game-038",
  "name": {
    "vi": "Vòng Phản Hồi",
    "en": "Feedback Loop"
  },
  "desc": {
    "vi": "Xây dựng vòng phản hồi nhanh.",
    "en": "Build fast feedback loops."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/feedback-loop/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "wellness",
  "wave": 4,
  "free": 5
},
{
  "id": "spaced-repetition",
  "gameId": "game-039",
  "name": {
    "vi": "Lặp Lại Ngắt Quãng",
    "en": "Spaced Repetition"
  },
  "desc": {
    "vi": "Hệ thống lặp lại ngắt quãng.",
    "en": "Spaced repetition system."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/spaced-repetition/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "active-recall",
  "gameId": "game-040",
  "name": {
    "vi": "Gợi Nhớ Chủ Động",
    "en": "Active Recall"
  },
  "desc": {
    "vi": "Luyện gợi nhớ chủ động.",
    "en": "Practice active recall."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/active-recall/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "interleaving",
  "gameId": "game-041",
  "name": {
    "vi": "Xen Kẽ",
    "en": "Interleaving"
  },
  "desc": {
    "vi": "Luyện xen kẽ các kỹ năng.",
    "en": "Practice interleaving skills."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/interleaving/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "elaboration",
  "gameId": "game-042",
  "name": {
    "vi": "Giải Thích Chi Tiết",
    "en": "Elaboration"
  },
  "desc": {
    "vi": "Giải thích & liên kết kiến thức.",
    "en": "Elaborate & connect knowledge."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/elaboration/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "dual-coding",
  "gameId": "game-043",
  "name": {
    "vi": "Mã Hóa Kép",
    "en": "Dual Coding"
  },
  "desc": {
    "vi": "Kết hợp hình ảnh & lời nói.",
    "en": "Combine visuals & words."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/dual-coding/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "concrete-example",
  "gameId": "game-044",
  "name": {
    "vi": "Ví Dụ Cụ Thể",
    "en": "Concrete Example"
  },
  "desc": {
    "vi": "Tạo ví dụ cụ thể cho khái niệm.",
    "en": "Create concrete examples."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/concrete-example/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "retrieval-practice",
  "gameId": "game-045",
  "name": {
    "vi": "Luyện Truy Xuất",
    "en": "Retrieval Practice"
  },
  "desc": {
    "vi": "Luyện truy xuất thông tin.",
    "en": "Practice information retrieval."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/retrieval-practice/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "generation-effect",
  "gameId": "game-046",
  "name": {
    "vi": "Hiệu Ứng Tạo Ra",
    "en": "Generation Effect"
  },
  "desc": {
    "vi": "Tự tạo câu trả lời thay vì đọc lại.",
    "en": "Generate answers vs re-reading."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/generation-effect/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "testing-effect",
  "gameId": "game-047",
  "name": {
    "vi": "Hiệu Ứng Kiểm Tra",
    "en": "Testing Effect"
  },
  "desc": {
    "vi": "Kiểm tra để học tốt hơn.",
    "en": "Test to learn better."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/testing-effect/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "desirable-difficulty",
  "gameId": "game-048",
  "name": {
    "vi": "Khó Khăn Mong Muốn",
    "en": "Desirable Difficulty"
  },
  "desc": {
    "vi": "Thêm khó khăn để học sâu.",
    "en": "Add desirable difficulty."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/desirable-difficulty/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "variation-practice",
  "gameId": "game-049",
  "name": {
    "vi": "Luyện Biến Thể",
    "en": "Variation Practice"
  },
  "desc": {
    "vi": "Luyện với nhiều biến thể.",
    "en": "Practice with variation."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/variation-practice/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "whole-part-whole",
  "gameId": "game-050",
  "name": {
    "vi": "Toàn Bộ-Phần-Toàn Bộ",
    "en": "Whole Part Whole"
  },
  "desc": {
    "vi": "Học toàn bộ rồi chi tiết.",
    "en": "Learn whole then parts."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/whole-part-whole/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": " mental-model",
  "gameId": "game-051",
  "name": {
    "vi": "Mô Hình Tư Duy",
    "en": "Mental Model"
  },
  "desc": {
    "vi": "Xây dựng mô hình tư duy.",
    "en": "Build mental models."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/ mental-model/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "second-order-thinking",
  "gameId": "game-052",
  "name": {
    "vi": "Tư Duy Bậc Hai",
    "en": "Second Order Thinking"
  },
  "desc": {
    "vi": "Suy nghĩ đến hệ quả bậc hai.",
    "en": "Think second-order effects."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/second-order-thinking/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "logic",
  "wave": 4,
  "free": 5
},
{
  "id": "inversion-thinking",
  "gameId": "game-053",
  "name": {
    "vi": "Tư Duy Đảo Ngược",
    "en": "Inversion Thinking"
  },
  "desc": {
    "vi": "Giải quyết vấn đề bằng đảo ngược.",
    "en": "Solve by inversion."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/inversion-thinking/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "logic",
  "wave": 4,
  "free": 5
},
{
  "id": "occams-razor",
  "gameId": "game-054",
  "name": {
    "vi": "Dao Cạo Occam",
    "en": "Occams Razor"
  },
  "desc": {
    "vi": "Áp dụng dao cạo Occam.",
    "en": "Apply Occam's razor."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/occams-razor/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "logic",
  "wave": 4,
  "free": 5
},
{
  "id": "hanlons-razor",
  "gameId": "game-055",
  "name": {
    "vi": "Dao Cạo Hanlon",
    "en": "Hanlons Razor"
  },
  "desc": {
    "vi": "Áp dụng dao cạo Hanlon.",
    "en": "Apply Hanlon's razor."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/hanlons-razor/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "logic",
  "wave": 4,
  "free": 5
},
{
  "id": "map-territory",
  "gameId": "game-056",
  "name": {
    "vi": "Bản Đồ & Lãnh Thổ",
    "en": "Map Territory"
  },
  "desc": {
    "vi": "Phân biệt bản đồ & lãnh thổ.",
    "en": "Distinguish map & territory."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/map-territory/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "logic",
  "wave": 4,
  "free": 5
},
{
  "id": "thought-experiment",
  "gameId": "game-057",
  "name": {
    "vi": "Thí Nghiệm Tưởng Tượng",
    "en": "Thought Experiment"
  },
  "desc": {
    "vi": "Thiết kế thí nghiệm tưởng tượng.",
    "en": "Design thought experiments."
  },
  "group": "mind",
  "tier": 1,
  "status": "live",
  "path": "games/thought-experiment/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "logic",
  "wave": 4,
  "free": 5
},
{
  "id": "red-team",
  "gameId": "game-058",
  "name": {
    "vi": "Đội Đỏ",
    "en": "Red Team"
  },
  "desc": {
    "vi": "Tấn công ý tưởng của chính mình.",
    "en": "Attack your own ideas."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/red-team/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "logic",
  "wave": 4,
  "free": 5
},
{
  "id": "pre-mortem",
  "gameId": "game-059",
  "name": {
    "vi": "Phân Tích Trước",
    "en": "Pre Mortem"
  },
  "desc": {
    "vi": "Phân tích thất bại trước khi xảy ra.",
    "en": "Pre-mortem analysis."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/pre-mortem/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "post-mortem",
  "gameId": "game-060",
  "name": {
    "vi": "Phân Tích Sau",
    "en": "Post Mortem"
  },
  "desc": {
    "vi": "Phân tích sau sự kiện.",
    "en": "Post-mortem analysis."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/post-mortem/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "after-action-review",
  "gameId": "game-061",
  "name": {
    "vi": "Rút Kinh Nghiệm",
    "en": "After Action Review"
  },
  "desc": {
    "vi": "Rút kinh nghiệm sau hành động.",
    "en": "After action review."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/after-action-review/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "hot-wash",
  "gameId": "game-062",
  "name": {
    "vi": "Rút Kinh Nghiệm Nóng",
    "en": "Hot Wash"
  },
  "desc": {
    "vi": "Rút kinh nghiệm ngay sau sự kiện.",
    "en": "Hot wash review."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/hot-wash/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "lessons-capture",
  "gameId": "game-063",
  "name": {
    "vi": "Bắt Bài Học",
    "en": "Lessons Capture"
  },
  "desc": {
    "vi": "Bắt & lưu trữ bài học.",
    "en": "Capture & store lessons."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/lessons-capture/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "productivity",
  "wave": 4,
  "free": 5
},
{
  "id": "knowledge-transfer",
  "gameId": "game-064",
  "name": {
    "vi": "Chuyển Giao Tri Thức",
    "en": "Knowledge Transfer"
  },
  "desc": {
    "vi": "Thiết kế chuyển giao tri thức.",
    "en": "Design knowledge transfer."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/knowledge-transfer/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "expert-debrief",
  "gameId": "game-065",
  "name": {
    "vi": "Rút Kinh Nghiệm Chuyên Gia",
    "en": "Expert Debrief"
  },
  "desc": {
    "vi": "Rút kinh nghiệm với chuyên gia.",
    "en": "Debrief with experts."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/expert-debrief/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "peer-review",
  "gameId": "game-066",
  "name": {
    "vi": "Đánh Giá Đồng Đẳng",
    "en": "Peer Review"
  },
  "desc": {
    "vi": "Thiết kế đánh giá đồng đẳng.",
    "en": "Design peer review."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/peer-review/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "360-feedback",
  "gameId": "game-067",
  "name": {
    "vi": "Phản Hồi 360",
    "en": "360 Feedback"
  },
  "desc": {
    "vi": "Thiết kế phản hồi 360 độ.",
    "en": "Design 360 feedback."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/360-feedback/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "stay-interview",
  "gameId": "game-068",
  "name": {
    "vi": "Phỏng Vấn Ở Lại",
    "en": "Stay Interview"
  },
  "desc": {
    "vi": "Thiết kế phỏng vấn giữ chân.",
    "en": "Design stay interview."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/stay-interview/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "skip-level",
  "gameId": "game-069",
  "name": {
    "vi": "Gặp Gỡ Cấp Trên",
    "en": "Skip Level"
  },
  "desc": {
    "vi": "Thiết kế gặp gỡ skip-level.",
    "en": "Design skip-level meeting."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/skip-level/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "one-on-one",
  "gameId": "game-070",
  "name": {
    "vi": "Gặp Riêng",
    "en": "One on One"
  },
  "desc": {
    "vi": "Thiết kế cuộc gặp 1-1.",
    "en": "Design 1-on-1 meeting."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/one-on-one/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "team-retro",
  "gameId": "game-071",
  "name": {
    "vi": "Retro Nhóm",
    "en": "Team Retro"
  },
  "desc": {
    "vi": "Thiết kế retrospective nhóm.",
    "en": "Design team retro."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/team-retro/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "sprint-review",
  "gameId": "game-072",
  "name": {
    "vi": "Xem Xét Sprint",
    "en": "Sprint Review"
  },
  "desc": {
    "vi": "Thiết kế sprint review.",
    "en": "Design sprint review."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/sprint-review/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "sprint-planning",
  "gameId": "game-073",
  "name": {
    "vi": "Lập Kế Hoạch Sprint",
    "en": "Sprint Planning"
  },
  "desc": {
    "vi": "Thiết kế sprint planning.",
    "en": "Design sprint planning."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/sprint-planning/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "daily-standup",
  "gameId": "game-074",
  "name": {
    "vi": "Họp Hàng Ngày",
    "en": "Daily Standup"
  },
  "desc": {
    "vi": "Thiết kế daily standup.",
    "en": "Design daily standup."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/daily-standup/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "backlog-refine",
  "gameId": "game-075",
  "name": {
    "vi": "Tinh Chỉnh Backlog",
    "en": "Backlog Refine"
  },
  "desc": {
    "vi": "Thiết kế backlog refinement.",
    "en": "Design backlog refinement."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/backlog-refine/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "estimation-game",
  "gameId": "game-076",
  "name": {
    "vi": "Ước Lượng",
    "en": "Estimation Game"
  },
  "desc": {
    "vi": "Thiết kế trò chơi ước lượng.",
    "en": "Design estimation game."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/estimation-game/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "velocity-track",
  "gameId": "game-077",
  "name": {
    "vi": "Theo Dõi Tốc Độ",
    "en": "Velocity Track"
  },
  "desc": {
    "vi": "Theo dõi velocity nhóm.",
    "en": "Track team velocity."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/velocity-track/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "productivity",
  "wave": 4,
  "free": 5
},
{
  "id": "burndown-chart",
  "gameId": "game-078",
  "name": {
    "vi": "Biểu Đồ Burndown",
    "en": "Burndown Chart"
  },
  "desc": {
    "vi": "Tạo biểu đồ burndown.",
    "en": "Create burndown chart."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/burndown-chart/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "productivity",
  "wave": 4,
  "free": 5
},
{
  "id": "burnup-chart",
  "gameId": "game-079",
  "name": {
    "vi": "Biểu Đồ Burnup",
    "en": "Burnup Chart"
  },
  "desc": {
    "vi": "Tạo biểu đồ burnup.",
    "en": "Create burnup chart."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/burnup-chart/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "productivity",
  "wave": 4,
  "free": 5
},
{
  "id": "cumulative-flow",
  "gameId": "game-080",
  "name": {
    "vi": "Dòng Tích Lũy",
    "en": "Cumulative Flow"
  },
  "desc": {
    "vi": "Tạo biểu đồ dòng tích lũy.",
    "en": "Create cumulative flow."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/cumulative-flow/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "productivity",
  "wave": 4,
  "free": 5
},
{
  "id": "control-chart",
  "gameId": "game-081",
  "name": {
    "vi": "Biểu Đồ Kiểm Soát",
    "en": "Control Chart"
  },
  "desc": {
    "vi": "Tạo biểu đồ kiểm soát.",
    "en": "Create control chart."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/control-chart/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "productivity",
  "wave": 4,
  "free": 5
},
{
  "id": "scatter-plot",
  "gameId": "game-082",
  "name": {
    "vi": "Biểu Đồ Phân Tán",
    "en": "Scatter Plot"
  },
  "desc": {
    "vi": "Phân tích biểu đồ phân tán.",
    "en": "Analyze scatter plot."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/scatter-plot/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "histogram",
  "gameId": "game-083",
  "name": {
    "vi": "Biểu Đồ Tần Suất",
    "en": "Histogram"
  },
  "desc": {
    "vi": "Phân tích histogram.",
    "en": "Analyze histogram."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/histogram/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "pareto-chart",
  "gameId": "game-084",
  "name": {
    "vi": "Biểu Đồ Pareto",
    "en": "Pareto Chart"
  },
  "desc": {
    "vi": "Tạo biểu đồ Pareto.",
    "en": "Create Pareto chart."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/pareto-chart/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "box-plot",
  "gameId": "game-085",
  "name": {
    "vi": "Biểu Đồ Hộp",
    "en": "Box Plot"
  },
  "desc": {
    "vi": "Phân tích box plot.",
    "en": "Analyze box plot."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/box-plot/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "run-chart",
  "gameId": "game-086",
  "name": {
    "vi": "Biểu Đồ Chạy",
    "en": "Run Chart"
  },
  "desc": {
    "vi": "Tạo biểu đồ chạy.",
    "en": "Create run chart."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/run-chart/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "cost-benefit",
  "gameId": "game-001",
  "name": {
    "vi": "Chi Phí-Lợi Ích",
    "en": "Cost Benefit"
  },
  "desc": {
    "vi": "Phân tích chi phí-lợi ích.",
    "en": "Cost-benefit analysis."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/cost-benefit/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "npv-calc",
  "gameId": "game-002",
  "name": {
    "vi": "NPV",
    "en": "NPV Calc"
  },
  "desc": {
    "vi": "Tính giá trị hiện tại thuần.",
    "en": "Calculate NPV."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/npv-calc/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "irr-calc",
  "gameId": "game-003",
  "name": {
    "vi": "IRR",
    "en": "IRR Calc"
  },
  "desc": {
    "vi": "Tính tỷ suất hoàn vốn nội bộ.",
    "en": "Calculate IRR."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/irr-calc/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "payback-period",
  "gameId": "game-004",
  "name": {
    "vi": "Thời Gian Hoàn Vốn",
    "en": "Payback Period"
  },
  "desc": {
    "vi": "Tính thời gian hoàn vốn.",
    "en": "Calculate payback period."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/payback-period/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "wacc-calc",
  "gameId": "game-005",
  "name": {
    "vi": "WACC",
    "en": "WACC Calc"
  },
  "desc": {
    "vi": "Tính chi phí vốn bình quân.",
    "en": "Calculate WACC."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/wacc-calc/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "capm-calc",
  "gameId": "game-006",
  "name": {
    "vi": "CAPM",
    "en": "CAPM Calc"
  },
  "desc": {
    "vi": "Tính lợi suất kỳ vọng CAPM.",
    "en": "Calculate expected CAPM return."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/capm-calc/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "beta-calc",
  "gameId": "game-007",
  "name": {
    "vi": "Beta",
    "en": "Beta Calc"
  },
  "desc": {
    "vi": "Tính hệ số beta.",
    "en": "Calculate beta coefficient."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/beta-calc/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "sharpe-ratio",
  "gameId": "game-008",
  "name": {
    "vi": "Sharpe Ratio",
    "en": "Sharpe Ratio"
  },
  "desc": {
    "vi": "Tính tỷ suất Sharpe.",
    "en": "Calculate Sharpe ratio."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/sharpe-ratio/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "sortino-ratio",
  "gameId": "game-009",
  "name": {
    "vi": "Sortino Ratio",
    "en": "Sortino Ratio"
  },
  "desc": {
    "vi": "Tính tỷ suất Sortino.",
    "en": "Calculate Sortino ratio."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/sortino-ratio/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "treynor-ratio",
  "gameId": "game-010",
  "name": {
    "vi": "Treynor Ratio",
    "en": "Treynor Ratio"
  },
  "desc": {
    "vi": "Tính tỷ suất Treynor.",
    "en": "Calculate Treynor ratio."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/treynor-ratio/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "jensen-alpha",
  "gameId": "game-011",
  "name": {
    "vi": "Jensen Alpha",
    "en": "Jensen Alpha"
  },
  "desc": {
    "vi": "Tính alpha Jensen.",
    "en": "Calculate Jensen's alpha."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/jensen-alpha/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "information-ratio",
  "gameId": "game-012",
  "name": {
    "vi": "Information Ratio",
    "en": "Information Ratio"
  },
  "desc": {
    "vi": "Tính tỷ suất thông tin.",
    "en": "Calculate information ratio."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/information-ratio/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "tracking-error",
  "gameId": "game-013",
  "name": {
    "vi": "Tracking Error",
    "en": "Tracking Error"
  },
  "desc": {
    "vi": "Tính sai số theo dõi.",
    "en": "Calculate tracking error."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/tracking-error/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "var-calc",
  "gameId": "game-014",
  "name": {
    "vi": "VaR",
    "en": "VaR Calc"
  },
  "desc": {
    "vi": "Tính giá trị rủi ro.",
    "en": "Calculate Value at Risk."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/var-calc/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "cvar-calc",
  "gameId": "game-015",
  "name": {
    "vi": "CVaR",
    "en": "CVaR Calc"
  },
  "desc": {
    "vi": "Tính rủi ro có điều kiện.",
    "en": "Calculate Conditional VaR."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/cvar-calc/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "drawdown-calc",
  "gameId": "game-016",
  "name": {
    "vi": "Drawdown",
    "en": "Drawdown Calc"
  },
  "desc": {
    "vi": "Tính mức giảm tối đa.",
    "en": "Calculate maximum drawdown."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/drawdown-calc/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "calmar-ratio",
  "gameId": "game-017",
  "name": {
    "vi": "Calmar Ratio",
    "en": "Calmar Ratio"
  },
  "desc": {
    "vi": "Tính tỷ suất Calmar.",
    "en": "Calculate Calmar ratio."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/calmar-ratio/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "sterling-ratio",
  "gameId": "game-018",
  "name": {
    "vi": "Sterling Ratio",
    "en": "Sterling Ratio"
  },
  "desc": {
    "vi": "Tính tỷ suất Sterling.",
    "en": "Calculate Sterling ratio."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/sterling-ratio/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "burke-ratio",
  "gameId": "game-019",
  "name": {
    "vi": "Burke Ratio",
    "en": "Burke Ratio"
  },
  "desc": {
    "vi": "Tính tỷ suất Burke.",
    "en": "Calculate Burke ratio."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/burke-ratio/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "omega-ratio",
  "gameId": "game-020",
  "name": {
    "vi": "Omega Ratio",
    "en": "Omega Ratio"
  },
  "desc": {
    "vi": "Tính tỷ suất Omega.",
    "en": "Calculate Omega ratio."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/omega-ratio/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "kelly-criterion",
  "gameId": "game-021",
  "name": {
    "vi": "Kelly Criterion",
    "en": "Kelly Criterion"
  },
  "desc": {
    "vi": "Tính phân bổ vốn Kelly.",
    "en": "Calculate Kelly allocation."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/kelly-criterion/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "martingale-sim",
  "gameId": "game-022",
  "name": {
    "vi": "Martingale",
    "en": "Martingale Sim"
  },
  "desc": {
    "vi": "Mô phỏng chiến lược Martingale.",
    "en": "Simulate Martingale strategy."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/martingale-sim/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "monte-carlo",
  "gameId": "game-023",
  "name": {
    "vi": "Monte Carlo",
    "en": "Monte Carlo"
  },
  "desc": {
    "vi": "Mô phỏng Monte Carlo.",
    "en": "Run Monte Carlo simulation."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/monte-carlo/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "random-walk",
  "gameId": "game-024",
  "name": {
    "vi": "Bước Ngẫu Nhiên",
    "en": "Random Walk"
  },
  "desc": {
    "vi": "Mô phỏng bước ngẫu nhiên.",
    "en": "Simulate random walk."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/random-walk/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "brownian-motion",
  "gameId": "game-025",
  "name": {
    "vi": "Chuyển Động Brown",
    "en": "Brownian Motion"
  },
  "desc": {
    "vi": "Mô phỏng chuyển động Brown.",
    "en": "Simulate Brownian motion."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/brownian-motion/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "binomial-tree",
  "gameId": "game-026",
  "name": {
    "vi": "Cây Nhị Thức",
    "en": "Binomial Tree"
  },
  "desc": {
    "vi": "Xây dựng cây nhị thức.",
    "en": "Build binomial tree."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/binomial-tree/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "black-scholes",
  "gameId": "game-027",
  "name": {
    "vi": "Black-Scholes",
    "en": "Black Scholes"
  },
  "desc": {
    "vi": "Tính giá quyền chọn Black-Scholes.",
    "en": "Calculate Black-Scholes option price."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/black-scholes/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "greek-calc",
  "gameId": "game-028",
  "name": {
    "vi": "Greek",
    "en": "Greek Calc"
  },
  "desc": {
    "vi": "Tính các chỉ số Greek.",
    "en": "Calculate option Greeks."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/greek-calc/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "implied-vol",
  "gameId": "game-029",
  "name": {
    "vi": "Implied Volatility",
    "en": "Implied Vol"
  },
  "desc": {
    "vi": "Tính độ biến động ngầm.",
    "en": "Calculate implied volatility."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/implied-vol/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "yield-curve",
  "gameId": "game-030",
  "name": {
    "vi": "Đường Lợi Suất",
    "en": "Yield Curve"
  },
  "desc": {
    "vi": "Vẽ đường lợi suất.",
    "en": "Plot yield curve."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/yield-curve/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "credit-spread",
  "gameId": "game-031",
  "name": {
    "vi": "Chênh Lệch Tín Dụng",
    "en": "Credit Spread"
  },
  "desc": {
    "vi": "Phân tích chênh lệch tín dụng.",
    "en": "Analyze credit spread."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/credit-spread/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "term-structure",
  "gameId": "game-032",
  "name": {
    "vi": "Cấu Trúc Kỳ Hạn",
    "en": "Term Structure"
  },
  "desc": {
    "vi": "Phân tích cấu trúc kỳ hạn.",
    "en": "Analyze term structure."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/term-structure/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "duration-calc",
  "gameId": "game-033",
  "name": {
    "vi": "Duration",
    "en": "Duration Calc"
  },
  "desc": {
    "vi": "Tính duration trái phiếu.",
    "en": "Calculate bond duration."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/duration-calc/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "convexity-calc",
  "gameId": "game-034",
  "name": {
    "vi": "Convexity",
    "en": "Convexity Calc"
  },
  "desc": {
    "vi": "Tính convexity trái phiếu.",
    "en": "Calculate bond convexity."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/convexity-calc/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "immunization",
  "gameId": "game-035",
  "name": {
    "vi": "Miễn Dịch",
    "en": "Immunization"
  },
  "desc": {
    "vi": "Chiến lược miễn dịch danh mục.",
    "en": "Portfolio immunization strategy."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/immunization/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "cash-matching",
  "gameId": "game-036",
  "name": {
    "vi": "Khớp Dòng Tiền",
    "en": "Cash Matching"
  },
  "desc": {
    "vi": "Chiến lược khớp dòng tiền.",
    "en": "Cash matching strategy."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/cash-matching/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "dedicated-portfolio",
  "gameId": "game-037",
  "name": {
    "vi": "Danh Mục Chuyên Dụng",
    "en": "Dedicated Portfolio"
  },
  "desc": {
    "vi": "Xây dựng danh mục chuyên dụng.",
    "en": "Build dedicated portfolio."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/dedicated-portfolio/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "bullet-portfolio",
  "gameId": "game-038",
  "name": {
    "vi": "Danh Mục Bullet",
    "en": "Bullet Portfolio"
  },
  "desc": {
    "vi": "Xây dựng bullet portfolio.",
    "en": "Build bullet portfolio."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/bullet-portfolio/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "barbell-portfolio",
  "gameId": "game-039",
  "name": {
    "vi": "Danh Mục Barbell",
    "en": "Barbell Portfolio"
  },
  "desc": {
    "vi": "Xây dựng barbell portfolio.",
    "en": "Build barbell portfolio."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/barbell-portfolio/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "ladder-portfolio",
  "gameId": "game-040",
  "name": {
    "vi": "Danh Mục Thang",
    "en": "Ladder Portfolio"
  },
  "desc": {
    "vi": "Xây dựng ladder portfolio.",
    "en": "Build ladder portfolio."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/ladder-portfolio/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "core-satellite",
  "gameId": "game-041",
  "name": {
    "vi": "Core-Satellite",
    "en": "Core Satellite"
  },
  "desc": {
    "vi": "Chiến lược core-satellite.",
    "en": "Core-satellite strategy."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/core-satellite/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "tactical-alloc",
  "gameId": "game-042",
  "name": {
    "vi": "Phân Bổ Chiến Thuật",
    "en": "Tactical Alloc"
  },
  "desc": {
    "vi": "Phân bổ tài sản chiến thuật.",
    "en": "Tactical asset allocation."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/tactical-alloc/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "strategic-alloc",
  "gameId": "game-043",
  "name": {
    "vi": "Phân Bổ Chiến Lược",
    "en": "Strategic Alloc"
  },
  "desc": {
    "vi": "Phân bổ tài sản chiến lược.",
    "en": "Strategic asset allocation."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/strategic-alloc/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "risk-parity",
  "gameId": "game-044",
  "name": {
    "vi": "Cân Bằng Rủi Ro",
    "en": "Risk Parity"
  },
  "desc": {
    "vi": "Phân bổ theo cân bằng rủi ro.",
    "en": "Risk parity allocation."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/risk-parity/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "minimum-variance",
  "gameId": "game-045",
  "name": {
    "vi": "Phương Sai Tối Thiểu",
    "en": "Minimum Variance"
  },
  "desc": {
    "vi": "Danh mục phương sai tối thiểu.",
    "en": "Minimum variance portfolio."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/minimum-variance/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "max-diversification",
  "gameId": "game-046",
  "name": {
    "vi": "Đa Dạng Hóa Tối Đa",
    "en": "Max Diversification"
  },
  "desc": {
    "vi": "Danh mục đa dạng hóa tối đa.",
    "en": "Max diversification portfolio."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/max-diversification/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "risk-budgeting",
  "gameId": "game-047",
  "name": {
    "vi": "Ngân Sách Rủi Ro",
    "en": "Risk Budgeting"
  },
  "desc": {
    "vi": "Phân bổ ngân sách rủi ro.",
    "en": "Risk budgeting allocation."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/risk-budgeting/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "factor-investing",
  "gameId": "game-048",
  "name": {
    "vi": "Đầu Tư Theo Yếu Tố",
    "en": "Factor Investing"
  },
  "desc": {
    "vi": "Danh mục đầu tư theo yếu tố.",
    "en": "Factor investing portfolio."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/factor-investing/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "smart-beta",
  "gameId": "game-049",
  "name": {
    "vi": "Smart Beta",
    "en": "Smart Beta"
  },
  "desc": {
    "vi": "Chiến lược smart beta.",
    "en": "Smart beta strategy."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/smart-beta/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "equal-risk-contrib",
  "gameId": "game-050",
  "name": {
    "vi": "Đóng Góp Rủi Ro Bằng Nhau",
    "en": "Equal Risk Contrib"
  },
  "desc": {
    "vi": "Đóng góp rủi ro bằng nhau.",
    "en": "Equal risk contribution."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/equal-risk-contrib/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "most-diversified",
  "gameId": "game-051",
  "name": {
    "vi": "Đa Dạng Nhất",
    "en": "Most Diversified"
  },
  "desc": {
    "vi": "Danh mục đa dạng nhất.",
    "en": "Most diversified portfolio."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/most-diversified/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "inverse-vol",
  "gameId": "game-052",
  "name": {
    "vi": "Nghịch Đảo Biến Động",
    "en": "Inverse Vol"
  },
  "desc": {
    "vi": "Phân bổ nghịch đảo biến động.",
    "en": "Inverse volatility weighting."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/inverse-vol/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "momentum-strat",
  "gameId": "game-053",
  "name": {
    "vi": "Momentum",
    "en": "Momentum Strat"
  },
  "desc": {
    "vi": "Chiến lược đầu tư momentum.",
    "en": "Momentum investing strategy."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/momentum-strat/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "value-strat",
  "gameId": "game-054",
  "name": {
    "vi": "Giá Trị",
    "en": "Value Strat"
  },
  "desc": {
    "vi": "Chiến lược đầu tư giá trị.",
    "en": "Value investing strategy."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/value-strat/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "growth-strat",
  "gameId": "game-055",
  "name": {
    "vi": "Tăng Trưởng",
    "en": "Growth Strat"
  },
  "desc": {
    "vi": "Chiến lược đầu tư tăng trưởng.",
    "en": "Growth investing strategy."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/growth-strat/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "quality-strat",
  "gameId": "game-056",
  "name": {
    "vi": "Chất Lượng",
    "en": "Quality Strat"
  },
  "desc": {
    "vi": "Chiến lược đầu tư chất lượng.",
    "en": "Quality investing strategy."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/quality-strat/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "low-vol-strat",
  "gameId": "game-057",
  "name": {
    "vi": "Biến Động Thấp",
    "en": "Low Vol Strat"
  },
  "desc": {
    "vi": "Chiến lược biến động thấp.",
    "en": "Low volatility strategy."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/low-vol-strat/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "dividend-strat",
  "gameId": "game-058",
  "name": {
    "vi": "Cổ Tức",
    "en": "Dividend Strat"
  },
  "desc": {
    "vi": "Chiến lược đầu tư cổ tức.",
    "en": "Dividend investing strategy."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/dividend-strat/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "small-cap-strat",
  "gameId": "game-059",
  "name": {
    "vi": "Vốn Hóa Nhỏ",
    "en": "Small Cap Strat"
  },
  "desc": {
    "vi": "Chiến lược vốn hóa nhỏ.",
    "en": "Small cap strategy."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/small-cap-strat/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "large-cap-strat",
  "gameId": "game-060",
  "name": {
    "vi": "Vốn Hóa Lớn",
    "en": "Large Cap Strat"
  },
  "desc": {
    "vi": "Chiến lược vốn hóa lớn.",
    "en": "Large cap strategy."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/large-cap-strat/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "sector-rotation",
  "gameId": "game-061",
  "name": {
    "vi": "Xoay Vòng Ngành",
    "en": "Sector Rotation"
  },
  "desc": {
    "vi": "Chiến lược xoay vòng ngành.",
    "en": "Sector rotation strategy."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/sector-rotation/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "style-rotation",
  "gameId": "game-062",
  "name": {
    "vi": "Xoay Vòng Phong Cách",
    "en": "Style Rotation"
  },
  "desc": {
    "vi": "Chiến lược xoay vòng phong cách.",
    "en": "Style rotation strategy."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/style-rotation/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "market-timing",
  "gameId": "game-063",
  "name": {
    "vi": "Chọn Thời Điểm Thị Trường",
    "en": "Market Timing"
  },
  "desc": {
    "vi": "Chiến lược chọn thời điểm thị trường.",
    "en": "Market timing strategy."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/market-timing/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "dollar-cost",
  "gameId": "game-064",
  "name": {
    "vi": "Trung Bình Giá",
    "en": "Dollar Cost"
  },
  "desc": {
    "vi": "Chiến lược trung bình giá.",
    "en": "Dollar cost averaging."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/dollar-cost/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "value-averaging",
  "gameId": "game-065",
  "name": {
    "vi": "Trung Bình Giá Trị",
    "en": "Value Averaging"
  },
  "desc": {
    "vi": "Chiến lược trung bình giá trị.",
    "en": "Value averaging strategy."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/value-averaging/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "constant-proportion",
  "gameId": "game-066",
  "name": {
    "vi": "Tỷ Lệ Không Đổi",
    "en": "Constant Proportion"
  },
  "desc": {
    "vi": "Chiến lược tỷ lệ không đổi.",
    "en": "Constant proportion strategy."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/constant-proportion/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "cpipi",
  "gameId": "game-067",
  "name": {
    "vi": "CPPI",
    "en": "CPPI"
  },
  "desc": {
    "vi": "Chiến lược CPPI.",
    "en": "CPPI strategy."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/cpipi/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "tipp",
  "gameId": "game-068",
  "name": {
    "vi": "TIPP",
    "en": "TIPP"
  },
  "desc": {
    "vi": "Chiến lược TIPP.",
    "en": "TIPP strategy."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/tipp/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "portfolio-insurance",
  "gameId": "game-069",
  "name": {
    "vi": "Bảo Hiểm Danh Mục",
    "en": "Portfolio Insurance"
  },
  "desc": {
    "vi": "Chiến lược bảo hiểm danh mục.",
    "en": "Portfolio insurance strategy."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/portfolio-insurance/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "stop-loss",
  "gameId": "game-070",
  "name": {
    "vi": "Cắt Lỗ",
    "en": "Stop Loss"
  },
  "desc": {
    "vi": "Thiết lập điểm cắt lỗ.",
    "en": "Set stop loss points."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/stop-loss/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "take-profit",
  "gameId": "game-071",
  "name": {
    "vi": "Chốt Lời",
    "en": "Take Profit"
  },
  "desc": {
    "vi": "Thiết lập điểm chốt lời.",
    "en": "Set take profit points."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/take-profit/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "trailing-stop",
  "gameId": "game-072",
  "name": {
    "vi": "Trailing Stop",
    "en": "Trailing Stop"
  },
  "desc": {
    "vi": "Thiết lập trailing stop.",
    "en": "Set trailing stop."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/trailing-stop/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "bracket-order",
  "gameId": "game-073",
  "name": {
    "vi": "Lệnh Bracket",
    "en": "Bracket Order"
  },
  "desc": {
    "vi": "Thiết lập lệnh bracket.",
    "en": "Set bracket orders."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/bracket-order/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "oco-order",
  "gameId": "game-074",
  "name": {
    "vi": "Lệnh OCO",
    "en": "OCO Order"
  },
  "desc": {
    "vi": "Thiết lập lệnh OCO.",
    "en": "Set OCO orders."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/oco-order/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "iceberg-order",
  "gameId": "game-075",
  "name": {
    "vi": "Lệnh Iceberg",
    "en": "Iceberg Order"
  },
  "desc": {
    "vi": "Thiết lập lệnh iceberg.",
    "en": "Set iceberg orders."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/iceberg-order/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "twap-order",
  "gameId": "game-076",
  "name": {
    "vi": "Lệnh TWAP",
    "en": "TWAP Order"
  },
  "desc": {
    "vi": "Thiết lập lệnh TWAP.",
    "en": "Set TWAP orders."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/twap-order/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "vwap-order",
  "gameId": "game-077",
  "name": {
    "vi": "Lệnh VWAP",
    "en": "VWAP Order"
  },
  "desc": {
    "vi": "Thiết lập lệnh VWAP.",
    "en": "Set VWAP orders."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/vwap-order/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "pov-order",
  "gameId": "game-078",
  "name": {
    "vi": "Lệnh POV",
    "en": "POV Order"
  },
  "desc": {
    "vi": "Thiết lập lệnh POV.",
    "en": "Set POV orders."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/pov-order/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "implementation-shortfall",
  "gameId": "game-079",
  "name": {
    "vi": "Thiếu Hụt Thực Hiện",
    "en": "Implementation Shortfall"
  },
  "desc": {
    "vi": "Tính thiếu hụt thực hiện.",
    "en": "Calculate implementation shortfall."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/implementation-shortfall/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "market-impact",
  "gameId": "game-080",
  "name": {
    "vi": "Tác Động Thị Trường",
    "en": "Market Impact"
  },
  "desc": {
    "vi": "Ước tính tác động thị trường.",
    "en": "Estimate market impact."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/market-impact/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "slippage-calc",
  "gameId": "game-081",
  "name": {
    "vi": "Trượt Giá",
    "en": "Slippage Calc"
  },
  "desc": {
    "vi": "Tính trượt giá.",
    "en": "Calculate slippage."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/slippage-calc/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "liquidity-check",
  "gameId": "game-082",
  "name": {
    "vi": "Thanh Khoản",
    "en": "Liquidity Check"
  },
  "desc": {
    "vi": "Đánh giá thanh khoản.",
    "en": "Assess liquidity."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/liquidity-check/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "spread-analysis",
  "gameId": "game-083",
  "name": {
    "vi": "Chênh Lệch Giá",
    "en": "Spread Analysis"
  },
  "desc": {
    "vi": "Phân tích chênh lệch giá.",
    "en": "Analyze bid-ask spread."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/spread-analysis/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "depth-analysis",
  "gameId": "game-084",
  "name": {
    "vi": "Chiều Sâu",
    "en": "Depth Analysis"
  },
  "desc": {
    "vi": "Phân tích chiều sâu thị trường.",
    "en": "Analyze market depth."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/depth-analysis/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "crypto-basic",
  "gameId": "game-001",
  "name": {
    "vi": "Tiền Mã Hóa Cơ Bản",
    "en": "Crypto Basic"
  },
  "desc": {
    "vi": "Tìm hiểu cơ bản về crypto.",
    "en": "Learn crypto basics."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/crypto-basic/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "blockchain-explorer",
  "gameId": "game-002",
  "name": {
    "vi": "Khám Phá Blockchain",
    "en": "Blockchain Explorer"
  },
  "desc": {
    "vi": "Khám phá cách blockchain hoạt động.",
    "en": "Explore blockchain mechanics."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/blockchain-explorer/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "mining-sim",
  "gameId": "game-003",
  "name": {
    "vi": "Khai Thác Giả Lập",
    "en": "Mining Sim"
  },
  "desc": {
    "vi": "Mô phỏng khai thác tiền mã hóa.",
    "en": "Simulate crypto mining."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/mining-sim/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "wallet-security",
  "gameId": "game-004",
  "name": {
    "vi": "Bảo Mật Ví",
    "en": "Wallet Security"
  },
  "desc": {
    "vi": "Học cách bảo mật ví crypto.",
    "en": "Learn wallet security."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/wallet-security/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "defi-yield",
  "gameId": "game-005",
  "name": {
    "vi": "DeFi Yield",
    "en": "DeFi Yield"
  },
  "desc": {
    "vi": "Tính toán lợi suất DeFi.",
    "en": "Calculate DeFi yield."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/defi-yield/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "liquidity-pool",
  "gameId": "game-006",
  "name": {
    "vi": "Hợp Đồng Thanh Khoản",
    "en": "Liquidity Pool"
  },
  "desc": {
    "vi": "Phân tích liquidity pool.",
    "en": "Analyze liquidity pools."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/liquidity-pool/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "impermanent-loss",
  "gameId": "game-007",
  "name": {
    "vi": "Tổn Thất Tạm Thời",
    "en": "Impermanent Loss"
  },
  "desc": {
    "vi": "Tính tổn thất tạm thời.",
    "en": "Calculate impermanent loss."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/impermanent-loss/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "staking-calc",
  "gameId": "game-008",
  "name": {
    "vi": "Staking",
    "en": "Staking Calc"
  },
  "desc": {
    "vi": "Tính phần thưởng staking.",
    "en": "Calculate staking rewards."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/staking-calc/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "gas-fee-est",
  "gameId": "game-009",
  "name": {
    "vi": "Phí Gas",
    "en": "Gas Fee Est"
  },
  "desc": {
    "vi": "Ước tính phí gas.",
    "en": "Estimate gas fees."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/gas-fee-est/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "nft-valuation",
  "gameId": "game-010",
  "name": {
    "vi": "Định Giá NFT",
    "en": "NFT Valuation"
  },
  "desc": {
    "vi": "Định giá tài sản NFT.",
    "en": "Value NFT assets."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/nft-valuation/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "smart-contract-audit",
  "gameId": "game-011",
  "name": {
    "vi": "Kiểm Tra Hợp Đồng",
    "en": "Smart Contract Audit"
  },
  "desc": {
    "vi": "Kiểm tra lỗi smart contract.",
    "en": "Audit smart contracts."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/smart-contract-audit/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "tokenomics",
  "gameId": "game-012",
  "name": {
    "vi": "Tokenomics",
    "en": "Tokenomics"
  },
  "desc": {
    "vi": "Phân tích tokenomics.",
    "en": "Analyze tokenomics."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/tokenomics/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "vesting-schedule",
  "gameId": "game-013",
  "name": {
    "vi": "Lịch Vesting",
    "en": "Vesting Schedule"
  },
  "desc": {
    "vi": "Tính lịch vesting token.",
    "en": "Calculate token vesting schedule."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/vesting-schedule/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "airdrop-hunt",
  "gameId": "game-014",
  "name": {
    "vi": "Săn Airdrop",
    "en": "Airdrop Hunt"
  },
  "desc": {
    "vi": "Tìm & đánh giá airdrop.",
    "en": "Find & evaluate airdrops."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/airdrop-hunt/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "dao-governance",
  "gameId": "game-015",
  "name": {
    "vi": "Quản Trị DAO",
    "en": "DAO Governance"
  },
  "desc": {
    "vi": "Tham gia quản trị DAO.",
    "en": "Participate in DAO governance."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/dao-governance/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "protocol-upgrade",
  "gameId": "game-016",
  "name": {
    "vi": "Nâng Cấp Giao Thức",
    "en": "Protocol Upgrade"
  },
  "desc": {
    "vi": "Lập kế hoạch nâng cấp giao thức.",
    "en": "Plan protocol upgrades."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/protocol-upgrade/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "cross-chain-bridge",
  "gameId": "game-017",
  "name": {
    "vi": "Cầu Nối Chuỗi",
    "en": "Cross Chain Bridge"
  },
  "desc": {
    "vi": "Thiết kế cầu nối cross-chain.",
    "en": "Design cross-chain bridges."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/cross-chain-bridge/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "layer2-rollup",
  "gameId": "game-018",
  "name": {
    "vi": "Layer2 Rollup",
    "en": "Layer2 Rollup"
  },
  "desc": {
    "vi": "Tìm hiểu Layer2 rollup.",
    "en": "Learn Layer2 rollups."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/layer2-rollup/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "zero-knowledge",
  "gameId": "game-019",
  "name": {
    "vi": "Zero Knowledge",
    "en": "Zero Knowledge"
  },
  "desc": {
    "vi": "Tìm hiểu zero-knowledge proofs.",
    "en": "Learn ZK proofs."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/zero-knowledge/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "mpc-wallet",
  "gameId": "game-020",
  "name": {
    "vi": "Ví MPC",
    "en": "MPC Wallet"
  },
  "desc": {
    "vi": "Tìm hiểu ví MPC.",
    "en": "Learn MPC wallets."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/mpc-wallet/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "multisig-wallet",
  "gameId": "game-021",
  "name": {
    "vi": "Ví Đa Chữ Ký",
    "en": "Multisig Wallet"
  },
  "desc": {
    "vi": "Thiết lập ví đa chữ ký.",
    "en": "Setup multisig wallet."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/multisig-wallet/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "social-recovery",
  "gameId": "game-022",
  "name": {
    "vi": "Khôi Phục Xã Hội",
    "en": "Social Recovery"
  },
  "desc": {
    "vi": "Thiết kế khôi phục xã hội.",
    "en": "Design social recovery."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/social-recovery/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "account-abstraction",
  "gameId": "game-023",
  "name": {
    "vi": "Trừu Tượng Hóa Tài Khoản",
    "en": "Account Abstraction"
  },
  "desc": {
    "vi": "Tìm hiểu account abstraction.",
    "en": "Learn account abstraction."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/account-abstraction/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "paymaster",
  "gameId": "game-024",
  "name": {
    "vi": "Paymaster",
    "en": "Paymaster"
  },
  "desc": {
    "vi": "Thiết kế paymaster.",
    "en": "Design paymaster."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/paymaster/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "session-key",
  "gameId": "game-025",
  "name": {
    "vi": "Khóa Phiên",
    "en": "Session Key"
  },
  "desc": {
    "vi": "Thiết kế khóa phiên.",
    "en": "Design session keys."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/session-key/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "aa-wallet",
  "gameId": "game-026",
  "name": {
    "vi": "Ví AA",
    "en": "AA Wallet"
  },
  "desc": {
    "vi": "Thiết kế ví smart contract.",
    "en": "Design smart contract wallet."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/aa-wallet/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "bundler",
  "gameId": "game-027",
  "name": {
    "vi": "Bundler",
    "en": "Bundler"
  },
  "desc": {
    "vi": "Tìm hiểu bundler ERC-4337.",
    "en": "Learn ERC-4337 bundler."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/bundler/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "entry-point",
  "gameId": "game-028",
  "name": {
    "vi": "Entry Point",
    "en": "Entry Point"
  },
  "desc": {
    "vi": "Tìm hiểu entry point.",
    "en": "Learn entry point."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/entry-point/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "user-operation",
  "gameId": "game-029",
  "name": {
    "vi": "Thao Tác Người Dùng",
    "en": "User Operation"
  },
  "desc": {
    "vi": "Tạo user operation.",
    "en": "Create user operations."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/user-operation/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "paymaster-rules",
  "gameId": "game-030",
  "name": {
    "vi": "Quy Tắc Paymaster",
    "en": "Paymaster Rules"
  },
  "desc": {
    "vi": "Thiết lập quy tắc paymaster.",
    "en": "Setup paymaster rules."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/paymaster-rules/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "gas-sponsorship",
  "gameId": "game-031",
  "name": {
    "vi": "Tài Trợ Gas",
    "en": "Gas Sponsorship"
  },
  "desc": {
    "vi": "Thiết kế tài trợ gas.",
    "en": "Design gas sponsorship."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/gas-sponsorship/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "signature-aggregation",
  "gameId": "game-032",
  "name": {
    "vi": "Tổng Hợp Chữ Ký",
    "en": "Signature Aggregation"
  },
  "desc": {
    "vi": "Tổng hợp chữ ký BLS.",
    "en": "Aggregate BLS signatures."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/signature-aggregation/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "erc-20",
  "gameId": "game-033",
  "name": {
    "vi": "ERC-20",
    "en": "ERC-20"
  },
  "desc": {
    "vi": "Tạo token ERC-20.",
    "en": "Create ERC-20 token."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/erc-20/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "erc-721",
  "gameId": "game-034",
  "name": {
    "vi": "ERC-721",
    "en": "ERC-721"
  },
  "desc": {
    "vi": "Tạo NFT ERC-721.",
    "en": "Create ERC-721 NFT."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/erc-721/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "erc-1155",
  "gameId": "game-035",
  "name": {
    "vi": "ERC-1155",
    "en": "ERC-1155"
  },
  "desc": {
    "vi": "Tạo token đa năng ERC-1155.",
    "en": "Create ERC-1155 multi-token."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/erc-1155/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "erc-4626",
  "gameId": "game-036",
  "name": {
    "vi": "ERC-4626",
    "en": "ERC-4626"
  },
  "desc": {
    "vi": "Tạo vault ERC-4626.",
    "en": "Create ERC-4626 vault."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/erc-4626/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "erc-4337",
  "gameId": "game-037",
  "name": {
    "vi": "ERC-4337",
    "en": "ERC-4337"
  },
  "desc": {
    "vi": "Triển khai ERC-4337.",
    "en": "Implement ERC-4337."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/erc-4337/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "erc-6900",
  "gameId": "game-038",
  "name": {
    "vi": "ERC-6900",
    "en": "ERC-6900"
  },
  "desc": {
    "vi": "Tìm hiểu ERC-6900.",
    "en": "Learn ERC-6900."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/erc-6900/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "eip-1559",
  "gameId": "game-039",
  "name": {
    "vi": "EIP-1559",
    "en": "EIP-1559"
  },
  "desc": {
    "vi": "Tìm hiểu EIP-1559.",
    "en": "Learn EIP-1559."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/eip-1559/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "eip-4844",
  "gameId": "game-040",
  "name": {
    "vi": "EIP-4844",
    "en": "EIP-4844"
  },
  "desc": {
    "vi": "Tìm hiểu proto-danksharding.",
    "en": "Learn proto-danksharding."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/eip-4844/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "danksharding",
  "gameId": "game-041",
  "name": {
    "vi": "Danksharding",
    "en": "Danksharding"
  },
  "desc": {
    "vi": "Tìm hiểu danksharding.",
    "en": "Learn danksharding."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/danksharding/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "proto-danksharding",
  "gameId": "game-042",
  "name": {
    "vi": "Proto Danksharding",
    "en": "Proto Danksharding"
  },
  "desc": {
    "vi": "Tìm hiểu proto-danksharding.",
    "en": "Learn proto-danksharding."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/proto-danksharding/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "data-availability",
  "gameId": "game-043",
  "name": {
    "vi": "Dữ Liệu Khả Dụng",
    "en": "Data Availability"
  },
  "desc": {
    "vi": "Đánh giá data availability.",
    "en": "Assess data availability."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/data-availability/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "validium",
  "gameId": "game-044",
  "name": {
    "vi": "Validium",
    "en": "Validium"
  },
  "desc": {
    "vi": "Tìm hiểu Validium.",
    "en": "Learn Validium."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/validium/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "volition",
  "gameId": "game-045",
  "name": {
    "vi": "Volition",
    "en": "Volition"
  },
  "desc": {
    "vi": "Tìm hiểu Volition.",
    "en": "Learn Volition."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/volition/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "optimistic-rollup",
  "gameId": "game-046",
  "name": {
    "vi": "Optimistic Rollup",
    "en": "Optimistic Rollup"
  },
  "desc": {
    "vi": "Tìm hiểu optimistic rollup.",
    "en": "Learn optimistic rollup."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/optimistic-rollup/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "zk-rollup",
  "gameId": "game-047",
  "name": {
    "vi": "ZK Rollup",
    "en": "ZK Rollup"
  },
  "desc": {
    "vi": "Tìm hiểu ZK rollup.",
    "en": "Learn ZK rollup."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/zk-rollup/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "starknet",
  "gameId": "game-048",
  "name": {
    "vi": "StarkNet",
    "en": "StarkNet"
  },
  "desc": {
    "vi": "Tìm hiểu StarkNet.",
    "en": "Learn StarkNet."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/starknet/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "cairo-lang",
  "gameId": "game-049",
  "name": {
    "vi": "Cairo",
    "en": "Cairo Lang"
  },
  "desc": {
    "vi": "Tìm hiểu ngôn ngữ Cairo.",
    "en": "Learn Cairo language."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/cairo-lang/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "starkex",
  "gameId": "game-050",
  "name": {
    "vi": "StarkEx",
    "en": "StarkEx"
  },
  "desc": {
    "vi": "Tìm hiểu StarkEx.",
    "en": "Learn StarkEx."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/starkex/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "polygon-cdk",
  "gameId": "game-051",
  "name": {
    "vi": "Polygon CDK",
    "en": "Polygon CDK"
  },
  "desc": {
    "vi": "Tìm hiểu Polygon CDK.",
    "en": "Learn Polygon CDK."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/polygon-cdk/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "arbitrum-stylus",
  "gameId": "game-052",
  "name": {
    "vi": "Arbitrum Stylus",
    "en": "Arbitrum Stylus"
  },
  "desc": {
    "vi": "Tìm hiểu Arbitrum Stylus.",
    "en": "Learn Arbitrum Stylus."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/arbitrum-stylus/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "op-stack",
  "gameId": "game-053",
  "name": {
    "vi": "OP Stack",
    "en": "OP Stack"
  },
  "desc": {
    "vi": "Tìm hiểu OP Stack.",
    "en": "Learn OP Stack."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/op-stack/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "superchain",
  "gameId": "game-054",
  "name": {
    "vi": "Superchain",
    "en": "Superchain"
  },
  "desc": {
    "vi": "Tìm hiểu Superchain.",
    "en": "Learn Superchain."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/superchain/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "base-chain",
  "gameId": "game-055",
  "name": {
    "vi": "Base",
    "en": "Base Chain"
  },
  "desc": {
    "vi": "Tìm hiểu Base.",
    "en": "Learn Base."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/base-chain/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "zora-network",
  "gameId": "game-056",
  "name": {
    "vi": "Zora",
    "en": "Zora Network"
  },
  "desc": {
    "vi": "Tìm hiểu Zora Network.",
    "en": "Learn Zora Network."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/zora-network/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "mode-network",
  "gameId": "game-057",
  "name": {
    "vi": "Mode",
    "en": "Mode Network"
  },
  "desc": {
    "vi": "Tìm hiểu Mode Network.",
    "en": "Learn Mode Network."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/mode-network/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "mantle-network",
  "gameId": "game-058",
  "name": {
    "vi": "Mantle",
    "en": "Mantle Network"
  },
  "desc": {
    "vi": "Tìm hiểu Mantle Network.",
    "en": "Learn Mantle Network."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/mantle-network/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "metis-andromeda",
  "gameId": "game-059",
  "name": {
    "vi": "Metis",
    "en": "Metis Andromeda"
  },
  "desc": {
    "vi": "Tìm hiểu Metis Andromeda.",
    "en": "Learn Metis Andromeda."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/metis-andromeda/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "scroll-zkvm",
  "gameId": "game-060",
  "name": {
    "vi": "Scroll",
    "en": "Scroll zkVM"
  },
  "desc": {
    "vi": "Tìm hiểu Scroll zkVM.",
    "en": "Learn Scroll zkVM."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/scroll-zkvm/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "taiko-zk",
  "gameId": "game-061",
  "name": {
    "vi": "Taiko",
    "en": "Taiko ZK"
  },
  "desc": {
    "vi": "Tìm hiểu Taiko ZK-EVM.",
    "en": "Learn Taiko ZK-EVM."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/taiko-zk/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "linea-zk",
  "gameId": "game-062",
  "name": {
    "vi": "Linea",
    "en": "Linea ZK"
  },
  "desc": {
    "vi": "Tìm hiểu Linea ZK.",
    "en": "Learn Linea ZK."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/linea-zk/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "zksync-era",
  "gameId": "game-063",
  "name": {
    "vi": "zkSync",
    "en": "zkSync Era"
  },
  "desc": {
    "vi": "Tìm hiểu zkSync Era.",
    "en": "Learn zkSync Era."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/zksync-era/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "loopring-dex",
  "gameId": "game-064",
  "name": {
    "vi": "Loopring",
    "en": "Loopring DEX"
  },
  "desc": {
    "vi": "Tìm hiểu Loopring DEX.",
    "en": "Learn Loopring DEX."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/loopring-dex/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "immutable-x",
  "gameId": "game-065",
  "name": {
    "vi": "Immutable X",
    "en": "Immutable X"
  },
  "desc": {
    "vi": "Tìm hiểu Immutable X.",
    "en": "Learn Immutable X."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/immutable-x/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "sorare-fantasy",
  "gameId": "game-066",
  "name": {
    "vi": "Sorare",
    "en": "Sorare Fantasy"
  },
  "desc": {
    "vi": "Tìm hiểu Sorare fantasy football.",
    "en": "Learn Sorare fantasy football."
  },
  "group": "social",
  "tier": 1,
  "status": "live",
  "path": "games/sorare-fantasy/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "simulation",
  "wave": 4,
  "free": 5
},
{
  "id": "guild-xyz",
  "gameId": "game-067",
  "name": {
    "vi": "Guild",
    "en": "Guild XYZ"
  },
  "desc": {
    "vi": "Tìm hiểu Guild.xyz.",
    "en": "Learn Guild.xyz."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/guild-xyz/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "lens-protocol",
  "gameId": "game-068",
  "name": {
    "vi": "Lens",
    "en": "Lens Protocol"
  },
  "desc": {
    "vi": "Tìm hiểu Lens Protocol.",
    "en": "Learn Lens Protocol."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/lens-protocol/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "farcaster",
  "gameId": "game-069",
  "name": {
    "vi": "Farcaster",
    "en": "Farcaster"
  },
  "desc": {
    "vi": "Tìm hiểu Farcaster.",
    "en": "Learn Farcaster."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/farcaster/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "warpcast",
  "gameId": "game-070",
  "name": {
    "vi": "Warpcast",
    "en": "Warpcast"
  },
  "desc": {
    "vi": "Tìm hiểu Warpcast.",
    "en": "Learn Warpcast."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/warpcast/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "frames",
  "gameId": "game-071",
  "name": {
    "vi": "Frames",
    "en": "Frames"
  },
  "desc": {
    "vi": "Tìm hiểu Farcaster Frames.",
    "en": "Learn Farcaster Frames."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/frames/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "channel-nft",
  "gameId": "game-072",
  "name": {
    "vi": "Channel NFT",
    "en": "Channel NFT"
  },
  "desc": {
    "vi": "Tìm hiểu channel NFT.",
    "en": "Learn channel NFTs."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/channel-nft/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "degen-token",
  "gameId": "game-073",
  "name": {
    "vi": "Degen",
    "en": "Degen Token"
  },
  "desc": {
    "vi": "Tìm hiểu Degen token.",
    "en": "Learn Degen token."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/degen-token/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "rare-shop",
  "gameId": "game-074",
  "name": {
    "vi": "Rare Shop",
    "en": "Rare Shop"
  },
  "desc": {
    "vi": "Tìm hiểu Rare Shop.",
    "en": "Learn Rare Shop."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/rare-shop/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "paragraph",
  "gameId": "game-075",
  "name": {
    "vi": "Paragraph",
    "en": "Paragraph"
  },
  "desc": {
    "vi": "Tìm hiểu Paragraph.xyz.",
    "en": "Learn Paragraph.xyz."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/paragraph/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "mirror-blog",
  "gameId": "game-076",
  "name": {
    "vi": "Mirror",
    "en": "Mirror Blog"
  },
  "desc": {
    "vi": "Tìm hiểu Mirror.xyz.",
    "en": "Learn Mirror.xyz."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/mirror-blog/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "zora-mint",
  "gameId": "game-077",
  "name": {
    "vi": "Zora Mint",
    "en": "Zora Mint"
  },
  "desc": {
    "vi": "Tìm hiểu Zora mint.",
    "en": "Learn Zora minting."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/zora-mint/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "manifold-studio",
  "gameId": "game-078",
  "name": {
    "vi": "Manifold",
    "en": "Manifold Studio"
  },
  "desc": {
    "vi": "Tìm hiểu Manifold Studio.",
    "en": "Learn Manifold Studio."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/manifold-studio/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "thirdweb-deploy",
  "gameId": "game-079",
  "name": {
    "vi": "Thirdweb",
    "en": "Thirdweb Deploy"
  },
  "desc": {
    "vi": "Tìm hiểu Thirdweb deploy.",
    "en": "Learn Thirdweb deploy."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/thirdweb-deploy/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "alchemy-rpc",
  "gameId": "game-080",
  "name": {
    "vi": "Alchemy",
    "en": "Alchemy RPC"
  },
  "desc": {
    "vi": "Tìm hiểu Alchemy RPC.",
    "en": "Learn Alchemy RPC."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/alchemy-rpc/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "infura-ipfs",
  "gameId": "game-081",
  "name": {
    "vi": "Infura",
    "en": "Infura IPFS"
  },
  "desc": {
    "vi": "Tìm hiểu Infura IPFS.",
    "en": "Learn Infura IPFS."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/infura-ipfs/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "pinata-pin",
  "gameId": "game-082",
  "name": {
    "vi": "Pinata",
    "en": "Pinata Pin"
  },
  "desc": {
    "vi": "Tìm hiểu Pinata pinning.",
    "en": "Learn Pinata pinning."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/pinata-pin/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "nft-storage",
  "gameId": "game-083",
  "name": {
    "vi": "NFT Storage",
    "en": "NFT Storage"
  },
  "desc": {
    "vi": "Tìm hiểu NFT Storage.",
    "en": "Learn NFT Storage."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/nft-storage/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "arweave-perm",
  "gameId": "game-084",
  "name": {
    "vi": "Arweave",
    "en": "Arweave Perm"
  },
  "desc": {
    "vi": "Tìm hiểu Arweave permanent storage.",
    "en": "Learn Arweave storage."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/arweave-perm/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "irys-bundler",
  "gameId": "game-085",
  "name": {
    "vi": "Irys",
    "en": "Irys Bundler"
  },
  "desc": {
    "vi": "Tìm hiểu Irys bundler.",
    "en": "Learn Irys bundler."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/irys-bundler/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "lit-protocol",
  "gameId": "game-086",
  "name": {
    "vi": "Lit",
    "en": "Lit Protocol"
  },
  "desc": {
    "vi": "Tìm hiểu Lit Protocol.",
    "en": "Learn Lit Protocol."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/lit-protocol/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "ceramic-stream",
  "gameId": "game-087",
  "name": {
    "vi": "Ceramic",
    "en": "Ceramic Stream"
  },
  "desc": {
    "vi": "Tìm hiểu Ceramic stream.",
    "en": "Learn Ceramic stream."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/ceramic-stream/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "tableland-sql",
  "gameId": "game-088",
  "name": {
    "vi": "Tableland",
    "en": "Tableland SQL"
  },
  "desc": {
    "vi": "Tìm hiểu Tableland SQL.",
    "en": "Learn Tableland SQL."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/tableland-sql/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "weave-db",
  "gameId": "game-089",
  "name": {
    "vi": "WeaveDB",
    "en": "Weave DB"
  },
  "desc": {
    "vi": "Tìm hiểu WeaveDB.",
    "en": "Learn WeaveDB."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/weave-db/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "fluence-compute",
  "gameId": "game-090",
  "name": {
    "vi": "Fluence",
    "en": "Fluence Compute"
  },
  "desc": {
    "vi": "Tìm hiểu Fluence compute.",
    "en": "Learn Fluence compute."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/fluence-compute/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "filecoin-store",
  "gameId": "game-091",
  "name": {
    "vi": "Filecoin",
    "en": "Filecoin Store"
  },
  "desc": {
    "vi": "Tìm hiểu Filecoin storage.",
    "en": "Learn Filecoin storage."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/filecoin-store/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "storj-cloud",
  "gameId": "game-092",
  "name": {
    "vi": "Storj",
    "en": "Storj Cloud"
  },
  "desc": {
    "vi": "Tìm hiểu Storj cloud storage.",
    "en": "Learn Storj storage."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/storj-cloud/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "sia-skynet",
  "gameId": "game-093",
  "name": {
    "vi": "Sia",
    "en": "Sia Skynet"
  },
  "desc": {
    "vi": "Tìm hiểu Sia Skynet.",
    "en": "Learn Sia Skynet."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/sia-skynet/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "maidsafe",
  "gameId": "game-094",
  "name": {
    "vi": "MaidSafe",
    "en": "MaidSafe"
  },
  "desc": {
    "vi": "Tìm hiểu MaidSafe.",
    "en": "Learn MaidSafe."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/maidsafe/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "holochain",
  "gameId": "game-095",
  "name": {
    "vi": "Holochain",
    "en": "Holochain"
  },
  "desc": {
    "vi": "Tìm hiểu Holochain.",
    "en": "Learn Holochain."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/holochain/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "ocean-protocol",
  "gameId": "game-096",
  "name": {
    "vi": "Ocean",
    "en": "Ocean Protocol"
  },
  "desc": {
    "vi": "Tìm hiểu Ocean Protocol.",
    "en": "Learn Ocean Protocol."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/ocean-protocol/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "fetch-ai",
  "gameId": "game-097",
  "name": {
    "vi": "Fetch.ai",
    "en": "Fetch AI"
  },
  "desc": {
    "vi": "Tìm hiểu Fetch.ai.",
    "en": "Learn Fetch.ai."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/fetch-ai/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "singularitynet",
  "gameId": "game-098",
  "name": {
    "vi": "SingularityNET",
    "en": "SingularityNET"
  },
  "desc": {
    "vi": "Tìm hiểu SingularityNET.",
    "en": "Learn SingularityNET."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/singularitynet/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "numeraire",
  "gameId": "game-099",
  "name": {
    "vi": "Numeraire",
    "en": "Numeraire"
  },
  "desc": {
    "vi": "Tìm hiểu Numeraire.",
    "en": "Learn Numeraire."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/numeraire/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "chainlink-vrf",
  "gameId": "game-100",
  "name": {
    "vi": "Chainlink VRF",
    "en": "Chainlink VRF"
  },
  "desc": {
    "vi": "Tìm hiểu Chainlink VRF.",
    "en": "Learn Chainlink VRF."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/chainlink-vrf/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "chainlink-keeper",
  "gameId": "game-101",
  "name": {
    "vi": "Chainlink Keeper",
    "en": "Chainlink Keeper"
  },
  "desc": {
    "vi": "Tìm hiểu Chainlink Keepers.",
    "en": "Learn Chainlink Keepers."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/chainlink-keeper/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "chainlink-ccip",
  "gameId": "game-102",
  "name": {
    "vi": "Chainlink CCIP",
    "en": "Chainlink CCIP"
  },
  "desc": {
    "vi": "Tìm hiểu Chainlink CCIP.",
    "en": "Learn Chainlink CCIP."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/chainlink-ccip/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "chainlink-data",
  "gameId": "game-103",
  "name": {
    "vi": "Chainlink Data",
    "en": "Chainlink Data"
  },
  "desc": {
    "vi": "Tìm hiểu Chainlink Data Streams.",
    "en": "Learn Chainlink Data Streams."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/chainlink-data/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "api3-dao",
  "gameId": "game-104",
  "name": {
    "vi": "API3",
    "en": "API3 DAO"
  },
  "desc": {
    "vi": "Tìm hiểu API3 DAO.",
    "en": "Learn API3 DAO."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/api3-dao/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "umbrella-network",
  "gameId": "game-105",
  "name": {
    "vi": "Umbrella",
    "en": "Umbrella Network"
  },
  "desc": {
    "vi": "Tìm hiểu Umbrella Network.",
    "en": "Learn Umbrella Network."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/umbrella-network/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "redstone-oracle",
  "gameId": "game-106",
  "name": {
    "vi": "RedStone",
    "en": "RedStone Oracle"
  },
  "desc": {
    "vi": "Tìm hiểu RedStone oracle.",
    "en": "Learn RedStone oracle."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/redstone-oracle/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "pyth-network",
  "gameId": "game-107",
  "name": {
    "vi": "Pyth",
    "en": "Pyth Network"
  },
  "desc": {
    "vi": "Tìm hiểu Pyth Network.",
    "en": "Learn Pyth Network."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/pyth-network/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "band-protocol",
  "gameId": "game-108",
  "name": {
    "vi": "Band",
    "en": "Band Protocol"
  },
  "desc": {
    "vi": "Tìm hiểu Band Protocol.",
    "en": "Learn Band Protocol."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/band-protocol/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "dia-oracle",
  "gameId": "game-109",
  "name": {
    "vi": "DIA",
    "en": "DIA Oracle"
  },
  "desc": {
    "vi": "Tìm hiểu DIA oracle.",
    "en": "Learn DIA oracle."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/dia-oracle/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "education",
  "wave": 4,
  "free": 5
},
{
  "id": "llm-prompt",
  "gameId": "game-001",
  "name": {
    "vi": "LLM Prompt",
    "en": "LLM Prompt"
  },
  "desc": {
    "vi": "Tối ưu prompt cho LLM.",
    "en": "Optimize LLM prompts."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/llm-prompt/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "prompt-engineer",
  "gameId": "game-002",
  "name": {
    "vi": "Prompt Engineer",
    "en": "Prompt Engineer"
  },
  "desc": {
    "vi": "Kỹ thuật prompt engineering.",
    "en": "Prompt engineering techniques."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/prompt-engineer/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "rag-builder",
  "gameId": "game-003",
  "name": {
    "vi": "RAG Builder",
    "en": "RAG Builder"
  },
  "desc": {
    "vi": "Xây dựng hệ thống RAG.",
    "en": "Build RAG systems."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/rag-builder/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "embed-search",
  "gameId": "game-004",
  "name": {
    "vi": "Embed Search",
    "en": "Embed Search"
  },
  "desc": {
    "vi": "Tìm kiếm vector embedding.",
    "en": "Vector embedding search."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/embed-search/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "fine-tune",
  "gameId": "game-005",
  "name": {
    "vi": "Fine Tune",
    "en": "Fine Tune"
  },
  "desc": {
    "vi": "Fine-tune mô hình.",
    "en": "Fine-tune models."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/fine-tune/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "model-eval",
  "gameId": "game-006",
  "name": {
    "vi": "Model Eval",
    "en": "Model Eval"
  },
  "desc": {
    "vi": "Đánh giá mô hình.",
    "en": "Evaluate models."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/model-eval/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "bias-audit",
  "gameId": "game-007",
  "name": {
    "vi": "Bias Audit",
    "en": "Bias Audit"
  },
  "desc": {
    "vi": "Kiểm tra thiên lệch mô hình.",
    "en": "Audit model bias."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/bias-audit/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "safety-redteam",
  "gameId": "game-008",
  "name": {
    "vi": "Safety Redteam",
    "en": "Safety Redteam"
  },
  "desc": {
    "vi": "Redteam đánh giá an toàn.",
    "en": "Safety redteam evaluation."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/safety-redteam/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "agent-design",
  "gameId": "game-009",
  "name": {
    "vi": "Agent Design",
    "en": "Agent Design"
  },
  "desc": {
    "vi": "Thiết kế AI agent.",
    "en": "Design AI agents."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/agent-design/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "tool-use",
  "gameId": "game-010",
  "name": {
    "vi": "Tool Use",
    "en": "Tool Use"
  },
  "desc": {
    "vi": "AI sử dụng công cụ.",
    "en": "AI tool use."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/tool-use/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "memory-design",
  "gameId": "game-011",
  "name": {
    "vi": "Memory Design",
    "en": "Memory Design"
  },
  "desc": {
    "vi": "Thiết kế bộ nhớ agent.",
    "en": "Design agent memory."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/memory-design/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "planning-loop",
  "gameId": "game-012",
  "name": {
    "vi": "Planning Loop",
    "en": "Planning Loop"
  },
  "desc": {
    "vi": "Vòng lặp lập kế hoạch agent.",
    "en": "Agent planning loop."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/planning-loop/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "reflection-pattern",
  "gameId": "game-013",
  "name": {
    "vi": "Reflection Pattern",
    "en": "Reflection Pattern"
  },
  "desc": {
    "vi": "Pattern phản chiếu agent.",
    "en": "Agent reflection patterns."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/reflection-pattern/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "multi-agent",
  "gameId": "game-014",
  "name": {
    "vi": "Multi Agent",
    "en": "Multi Agent"
  },
  "desc": {
    "vi": "Thiết kế hệ thống multi-agent.",
    "en": "Design multi-agent systems."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/multi-agent/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "swarm-intel",
  "gameId": "game-015",
  "name": {
    "vi": "Swarm Intel",
    "en": "Swarm Intel"
  },
  "desc": {
    "vi": "Thiết kế swarm intelligence.",
    "en": "Design swarm intelligence."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/swarm-intel/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "consensus-algo",
  "gameId": "game-016",
  "name": {
    "vi": "Consensus Algo",
    "en": "Consensus Algo"
  },
  "desc": {
    "vi": "Thuật toán đồng thuận agent.",
    "en": "Agent consensus algorithms."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/consensus-algo/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "orchestration",
  "gameId": "game-017",
  "name": {
    "vi": "Orchestration",
    "en": "Orchestration"
  },
  "desc": {
    "vi": "Orchestrate agent workflows.",
    "en": "Orchestrate agent workflows."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/orchestration/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "eval-framework",
  "gameId": "game-018",
  "name": {
    "vi": "Eval Framework",
    "en": "Eval Framework"
  },
  "desc": {
    "vi": "Xây dựng framework đánh giá.",
    "en": "Build evaluation framework."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/eval-framework/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "benchmark-run",
  "gameId": "game-019",
  "name": {
    "vi": "Benchmark Run",
    "en": "Benchmark Run"
  },
  "desc": {
    "vi": "Chạy benchmark mô hình.",
    "en": "Run model benchmarks."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/benchmark-run/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "dataset-curate",
  "gameId": "game-020",
  "name": {
    "vi": "Dataset Curate",
    "en": "Dataset Curate"
  },
  "desc": {
    "vi": "Curation dữ liệu huấn luyện.",
    "en": "Curate training data."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/dataset-curate/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "synthetic-data",
  "gameId": "game-021",
  "name": {
    "vi": "Synthetic Data",
    "en": "Synthetic Data"
  },
  "desc": {
    "vi": "Tạo dữ liệu tổng hợp.",
    "en": "Generate synthetic data."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/synthetic-data/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "data-augment",
  "gameId": "game-022",
  "name": {
    "vi": "Data Augment",
    "en": "Data Augment"
  },
  "desc": {
    "vi": "Tăng cường dữ liệu.",
    "en": "Data augmentation."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/data-augment/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "feature-engineer",
  "gameId": "game-023",
  "name": {
    "vi": "Feature Engineer",
    "en": "Feature Engineer"
  },
  "desc": {
    "vi": "Kỹ thuật feature engineering.",
    "en": "Feature engineering."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/feature-engineer/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "model-compress",
  "gameId": "game-024",
  "name": {
    "vi": "Model Compress",
    "en": "Model Compress"
  },
  "desc": {
    "vi": "Nén mô hình.",
    "en": "Compress models."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/model-compress/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "quantization",
  "gameId": "game-025",
  "name": {
    "vi": "Quantization",
    "en": "Quantization"
  },
  "desc": {
    "vi": "Lượng tử hóa mô hình.",
    "en": "Quantize models."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/quantization/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "distillation",
  "gameId": "game-026",
  "name": {
    "vi": "Distillation",
    "en": "Distillation"
  },
  "desc": {
    "vi": "Distill knowledge.",
    "en": "Knowledge distillation."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/distillation/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "pruning",
  "gameId": "game-027",
  "name": {
    "vi": "Pruning",
    "en": "Pruning"
  },
  "desc": {
    "vi": "Cắt tỉa mô hình.",
    "en": "Prune models."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/pruning/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "onnx-export",
  "gameId": "game-028",
  "name": {
    "vi": "ONNX Export",
    "en": "ONNX Export"
  },
  "desc": {
    "vi": "Export sang ONNX.",
    "en": "Export to ONNX."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/onnx-export/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "tensorrt-opt",
  "gameId": "game-029",
  "name": {
    "vi": "TensorRT Opt",
    "en": "TensorRT Opt"
  },
  "desc": {
    "vi": "Tối ưu TensorRT.",
    "en": "Optimize TensorRT."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/tensorrt-opt/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "vllm-serve",
  "gameId": "game-030",
  "name": {
    "vi": "vLLM Serve",
    "en": "vLLM Serve"
  },
  "desc": {
    "vi": "Serve mô hình vLLM.",
    "en": "Serve models with vLLM."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/vllm-serve/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "triton-infer",
  "gameId": "game-031",
  "name": {
    "vi": "Triton Infer",
    "en": "Triton Infer"
  },
  "desc": {
    "vi": "Inference với Triton.",
    "en": "Inference with Triton."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/triton-infer/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "batch-infer",
  "gameId": "game-032",
  "name": {
    "vi": "Batch Infer",
    "en": "Batch Infer"
  },
  "desc": {
    "vi": "Batch inference.",
    "en": "Batch inference."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/batch-infer/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "streaming-gen",
  "gameId": "game-033",
  "name": {
    "vi": "Streaming Gen",
    "en": "Streaming Gen"
  },
  "desc": {
    "vi": "Streaming text generation.",
    "en": "Streaming text generation."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/streaming-gen/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "spec-decode",
  "gameId": "game-034",
  "name": {
    "vi": "Spec Decode",
    "en": "Spec Decode"
  },
  "desc": {
    "vi": "Speculative decoding.",
    "en": "Speculative decoding."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/spec-decode/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "prompt-cache",
  "gameId": "game-035",
  "name": {
    "vi": "Prompt Cache",
    "en": "Prompt Cache"
  },
  "desc": {
    "vi": "Cache prompt.",
    "en": "Prompt caching."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/prompt-cache/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "kv-cache",
  "gameId": "game-036",
  "name": {
    "vi": "KV Cache",
    "en": "KV Cache"
  },
  "desc": {
    "vi": "KV cache optimization.",
    "en": "KV cache optimization."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/kv-cache/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "continuous-batch",
  "gameId": "game-037",
  "name": {
    "vi": "Continuous Batch",
    "en": "Continuous Batch"
  },
  "desc": {
    "vi": "Continuous batching.",
    "en": "Continuous batching."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/continuous-batch/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "prefix-caching",
  "gameId": "game-038",
  "name": {
    "vi": "Prefix Caching",
    "en": "Prefix Caching"
  },
  "desc": {
    "vi": "Prefix caching.",
    "en": "Prefix caching."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/prefix-caching/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "chunk-prefill",
  "gameId": "game-039",
  "name": {
    "vi": "Chunk Prefill",
    "en": "Chunk Prefill"
  },
  "desc": {
    "vi": "Chunked prefill.",
    "en": "Chunked prefill."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/chunk-prefill/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "tensor-parallel",
  "gameId": "game-040",
  "name": {
    "vi": "Tensor Parallel",
    "en": "Tensor Parallel"
  },
  "desc": {
    "vi": "Tensor parallelism.",
    "en": "Tensor parallelism."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/tensor-parallel/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "pipeline-parallel",
  "gameId": "game-041",
  "name": {
    "vi": "Pipeline Parallel",
    "en": "Pipeline Parallel"
  },
  "desc": {
    "vi": "Pipeline parallelism.",
    "en": "Pipeline parallelism."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/pipeline-parallel/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "sequence-parallel",
  "gameId": "game-042",
  "name": {
    "vi": "Sequence Parallel",
    "en": "Sequence Parallel"
  },
  "desc": {
    "vi": "Sequence parallelism.",
    "en": "Sequence parallelism."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/sequence-parallel/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "expert-parallel",
  "gameId": "game-043",
  "name": {
    "vi": "Expert Parallel",
    "en": "Expert Parallel"
  },
  "desc": {
    "vi": "Expert parallelism.",
    "en": "Expert parallelism."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/expert-parallel/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "dp-parallel",
  "gameId": "game-044",
  "name": {
    "vi": "DP Parallel",
    "en": "DP Parallel"
  },
  "desc": {
    "vi": "Data parallelism.",
    "en": "Data parallelism."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/dp-parallel/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "fsdp",
  "gameId": "game-045",
  "name": {
    "vi": "FSDP",
    "en": "FSDP"
  },
  "desc": {
    "vi": "Fully sharded data parallelism.",
    "en": "Fully sharded data parallelism."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/fsdp/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "deepspeed",
  "gameId": "game-046",
  "name": {
    "vi": "DeepSpeed",
    "en": "DeepSpeed"
  },
  "desc": {
    "vi": "DeepSpeed training.",
    "en": "DeepSpeed training."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/deepspeed/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "megatron",
  "gameId": "game-047",
  "name": {
    "vi": "Megatron",
    "en": "Megatron"
  },
  "desc": {
    "vi": "Megatron-LM training.",
    "en": "Megatron-LM training."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/megatron/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "colossal-ai",
  "gameId": "game-048",
  "name": {
    "vi": "Colossal AI",
    "en": "Colossal AI"
  },
  "desc": {
    "vi": "Colossal-AI training.",
    "en": "Colossal-AI training."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/colossal-ai/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "accelerate",
  "gameId": "game-049",
  "name": {
    "vi": "Accelerate",
    "en": "Accelerate"
  },
  "desc": {
    "vi": "Hugging Face Accelerate.",
    "en": "Hugging Face Accelerate."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/accelerate/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "peft-lora",
  "gameId": "game-050",
  "name": {
    "vi": "PEFT LoRA",
    "en": "PEFT LoRA"
  },
  "desc": {
    "vi": "LoRA fine-tuning.",
    "en": "LoRA fine-tuning."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/peft-lora/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "peft-qlora",
  "gameId": "game-051",
  "name": {
    "vi": "PEFT QLoRA",
    "en": "PEFT QLoRA"
  },
  "desc": {
    "vi": "QLoRA fine-tuning.",
    "en": "QLoRA fine-tuning."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/peft-qlora/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "ia3",
  "gameId": "game-052",
  "name": {
    "vi": "IA3",
    "en": "IA3"
  },
  "desc": {
    "vi": "IA3 fine-tuning.",
    "en": "IA3 fine-tuning."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/ia3/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "adalora",
  "gameId": "game-053",
  "name": {
    "vi": "AdaLoRA",
    "en": "AdaLoRA"
  },
  "desc": {
    "vi": "AdaLoRA fine-tuning.",
    "en": "AdaLoRA fine-tuning."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/adalora/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "prompt-tuning",
  "gameId": "game-054",
  "name": {
    "vi": "Prompt Tuning",
    "en": "Prompt Tuning"
  },
  "desc": {
    "vi": "Prompt tuning.",
    "en": "Prompt tuning."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/prompt-tuning/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "p-tuning",
  "gameId": "game-055",
  "name": {
    "vi": "P-Tuning",
    "en": "P-Tuning"
  },
  "desc": {
    "vi": "P-tuning v2.",
    "en": "P-tuning v2."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/p-tuning/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "prefix-tuning",
  "gameId": "game-056",
  "name": {
    "vi": "Prefix Tuning",
    "en": "Prefix Tuning"
  },
  "desc": {
    "vi": "Prefix tuning.",
    "en": "Prefix tuning."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/prefix-tuning/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "bitfit",
  "gameId": "game-057",
  "name": {
    "vi": "BitFit",
    "en": "BitFit"
  },
  "desc": {
    "vi": "BitFit fine-tuning.",
    "en": "BitFit fine-tuning."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/bitfit/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "diff-privacy",
  "gameId": "game-058",
  "name": {
    "vi": "Diff Privacy",
    "en": "Diff Privacy"
  },
  "desc": {
    "vi": "Differential privacy.",
    "en": "Differential privacy."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/diff-privacy/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "federated-train",
  "gameId": "game-059",
  "name": {
    "vi": "Federated Train",
    "en": "Federated Train"
  },
  "desc": {
    "vi": "Federated learning.",
    "en": "Federated learning."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/federated-train/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "homomorphic",
  "gameId": "game-060",
  "name": {
    "vi": "Homomorphic",
    "en": "Homomorphic"
  },
  "desc": {
    "vi": "Homomorphic encryption.",
    "en": "Homomorphic encryption."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/homomorphic/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "zk-ml",
  "gameId": "game-061",
  "name": {
    "vi": "ZK-ML",
    "en": "ZK-ML"
  },
  "desc": {
    "vi": "Zero-knowledge ML.",
    "en": "Zero-knowledge ML."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/zk-ml/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "tee-ml",
  "gameId": "game-062",
  "name": {
    "vi": "TEE-ML",
    "en": "TEE-ML"
  },
  "desc": {
    "vi": "Trusted execution environment ML.",
    "en": "TEE ML."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/tee-ml/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "mpc-ml",
  "gameId": "game-063",
  "name": {
    "vi": "MPC-ML",
    "en": "MPC-ML"
  },
  "desc": {
    "vi": "Multi-party computation ML.",
    "en": "MPC ML."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/mpc-ml/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "model-watermark",
  "gameId": "game-064",
  "name": {
    "vi": "Model Watermark",
    "en": "Model Watermark"
  },
  "desc": {
    "vi": "Watermark mô hình.",
    "en": "Model watermarking."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/model-watermark/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "model-fingerprint",
  "gameId": "game-065",
  "name": {
    "vi": "Model Fingerprint",
    "en": "Model Fingerprint"
  },
  "desc": {
    "vi": "Fingerprint mô hình.",
    "en": "Model fingerprinting."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/model-fingerprint/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "membership-infer",
  "gameId": "game-066",
  "name": {
    "vi": "Membership Infer",
    "en": "Membership Infer"
  },
  "desc": {
    "vi": "Membership inference attack.",
    "en": "Membership inference attack."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/membership-infer/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "model-extraction",
  "gameId": "game-067",
  "name": {
    "vi": "Model Extraction",
    "en": "Model Extraction"
  },
  "desc": {
    "vi": "Model extraction attack.",
    "en": "Model extraction attack."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/model-extraction/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "poison-detect",
  "gameId": "game-068",
  "name": {
    "vi": "Poison Detect",
    "en": "Poison Detect"
  },
  "desc": {
    "vi": "Phát hiện data poisoning.",
    "en": "Detect data poisoning."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/poison-detect/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "backdoor-detect",
  "gameId": "game-069",
  "name": {
    "vi": "Backdoor Detect",
    "en": "Backdoor Detect"
  },
  "desc": {
    "vi": "Phát hiện backdoor.",
    "en": "Detect backdoors."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/backdoor-detect/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "trojan-detect",
  "gameId": "game-070",
  "name": {
    "vi": "Trojan Detect",
    "en": "Trojan Detect"
  },
  "desc": {
    "vi": "Phát hiện trojan.",
    "en": "Detect trojans."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/trojan-detect/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "adversarial-robust",
  "gameId": "game-071",
  "name": {
    "vi": "Adversarial Robust",
    "en": "Adversarial Robust"
  },
  "desc": {
    "vi": "Adversarial robustness.",
    "en": "Adversarial robustness."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/adversarial-robust/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "certified-defense",
  "gameId": "game-072",
  "name": {
    "vi": "Certified Defense",
    "en": "Certified Defense"
  },
  "desc": {
    "vi": "Certified defenses.",
    "en": "Certified defenses."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/certified-defense/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "randomized-smooth",
  "gameId": "game-073",
  "name": {
    "vi": "Randomized Smooth",
    "en": "Randomized Smooth"
  },
  "desc": {
    "vi": "Randomized smoothing.",
    "en": "Randomized smoothing."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/randomized-smooth/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "input-validation",
  "gameId": "game-074",
  "name": {
    "vi": "Input Validation",
    "en": "Input Validation"
  },
  "desc": {
    "vi": "Input validation.",
    "en": "Input validation."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/input-validation/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "output-filter",
  "gameId": "game-075",
  "name": {
    "vi": "Output Filter",
    "en": "Output Filter"
  },
  "desc": {
    "vi": "Output filtering.",
    "en": "Output filtering."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/output-filter/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "guardrails",
  "gameId": "game-076",
  "name": {
    "vi": "Guardrails",
    "en": "Guardrails"
  },
  "desc": {
    "vi": "AI guardrails.",
    "en": "AI guardrails."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/guardrails/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "content-policy",
  "gameId": "game-077",
  "name": {
    "vi": "Content Policy",
    "en": "Content Policy"
  },
  "desc": {
    "vi": "Content policy design.",
    "en": "Content policy design."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/content-policy/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "moderation-pipeline",
  "gameId": "game-078",
  "name": {
    "vi": "Moderation Pipeline",
    "en": "Moderation Pipeline"
  },
  "desc": {
    "vi": "Moderation pipeline.",
    "en": "Moderation pipeline."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/moderation-pipeline/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "human-in-loop",
  "gameId": "game-079",
  "name": {
    "vi": "Human In Loop",
    "en": "Human In Loop"
  },
  "desc": {
    "vi": "Human-in-the-loop.",
    "en": "Human-in-the-loop."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/human-in-loop/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "constitutional-ai",
  "gameId": "game-080",
  "name": {
    "vi": "Constitutional AI",
    "en": "Constitutional AI"
  },
  "desc": {
    "vi": "Constitutional AI.",
    "en": "Constitutional AI."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/constitutional-ai/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "rlhf",
  "gameId": "game-081",
  "name": {
    "vi": "RLHF",
    "en": "RLHF"
  },
  "desc": {
    "vi": "Reinforcement learning from human feedback.",
    "en": "RLHF."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/rlhf/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "dpo",
  "gameId": "game-082",
  "name": {
    "vi": "DPO",
    "en": "DPO"
  },
  "desc": {
    "vi": "Direct preference optimization.",
    "en": "Direct preference optimization."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/dpo/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "ipo",
  "gameId": "game-083",
  "name": {
    "vi": "IPO",
    "en": "IPO"
  },
  "desc": {
    "vi": "Identity preference optimization.",
    "en": "Identity preference optimization."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/ipo/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "kto",
  "gameId": "game-084",
  "name": {
    "vi": "KTO",
    "en": "KTO"
  },
  "desc": {
    "vi": "Kahneman-Tversky optimization.",
    "en": "Kahneman-Tversky optimization."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/kto/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "ppo",
  "gameId": "game-085",
  "name": {
    "vi": "PPO",
    "en": "PPO"
  },
  "desc": {
    "vi": "Proximal policy optimization.",
    "en": "Proximal policy optimization."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/ppo/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "grpo",
  "gameId": "game-086",
  "name": {
    "vi": "GRPO",
    "en": "GRPO"
  },
  "desc": {
    "vi": "Group relative policy optimization.",
    "en": "Group relative policy optimization."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/grpo/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "rejection-sample",
  "gameId": "game-087",
  "name": {
    "vi": "Rejection Sample",
    "en": "Rejection Sample"
  },
  "desc": {
    "vi": "Rejection sampling.",
    "en": "Rejection sampling."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/rejection-sample/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "best-of-n",
  "gameId": "game-088",
  "name": {
    "vi": "Best Of N",
    "en": "Best Of N"
  },
  "desc": {
    "vi": "Best-of-N sampling.",
    "en": "Best-of-N sampling."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/best-of-n/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "mcts-decoding",
  "gameId": "game-089",
  "name": {
    "vi": "MCTS Decoding",
    "en": "MCTS Decoding"
  },
  "desc": {
    "vi": "MCTS decoding.",
    "en": "MCTS decoding."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/mcts-decoding/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "lookahead-decoding",
  "gameId": "game-090",
  "name": {
    "vi": "Lookahead Decoding",
    "en": "Lookahead Decoding"
  },
  "desc": {
    "vi": "Lookahead decoding.",
    "en": "Lookahead decoding."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/lookahead-decoding/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "medusa-decoding",
  "gameId": "game-091",
  "name": {
    "vi": "Medusa Decoding",
    "en": "Medusa Decoding"
  },
  "desc": {
    "vi": "Medusa decoding.",
    "en": "Medusa decoding."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/medusa-decoding/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "eagle-spec",
  "gameId": "game-092",
  "name": {
    "vi": "Eagle Spec",
    "en": "Eagle Spec"
  },
  "desc": {
    "vi": "Eagle speculative decoding.",
    "en": "Eagle speculative decoding."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/eagle-spec/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "prompt-lookup",
  "gameId": "game-093",
  "name": {
    "vi": "Prompt Lookup",
    "en": "Prompt Lookup"
  },
  "desc": {
    "vi": "Prompt lookup decoding.",
    "en": "Prompt lookup decoding."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/prompt-lookup/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "rest-decoding",
  "gameId": "game-094",
  "name": {
    "vi": "Rest Decoding",
    "en": "Rest Decoding"
  },
  "desc": {
    "vi": "REST decoding.",
    "en": "REST decoding."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/rest-decoding/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "ai",
  "wave": 4,
  "free": 5
},
{
  "id": "rust-basic",
  "gameId": "game-001",
  "name": {
    "vi": "Rust Cơ Bản",
    "en": "Rust Basic"
  },
  "desc": {
    "vi": "Học Rust cơ bản.",
    "en": "Learn Rust basics."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/rust-basic/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "go-basic",
  "gameId": "game-002",
  "name": {
    "vi": "Go Cơ Bản",
    "en": "Go Basic"
  },
  "desc": {
    "vi": "Học Go cơ bản.",
    "en": "Learn Go basics."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/go-basic/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "swift-basic",
  "gameId": "game-003",
  "name": {
    "vi": "Swift Cơ Bản",
    "en": "Swift Basic"
  },
  "desc": {
    "vi": "Học Swift cơ bản.",
    "en": "Learn Swift basics."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/swift-basic/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "kotlin-basic",
  "gameId": "game-004",
  "name": {
    "vi": "Kotlin Cơ Bản",
    "en": "Kotlin Basic"
  },
  "desc": {
    "vi": "Học Kotlin cơ bản.",
    "en": "Learn Kotlin basics."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/kotlin-basic/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "scala-basic",
  "gameId": "game-005",
  "name": {
    "vi": "Scala Cơ Bản",
    "en": "Scala Basic"
  },
  "desc": {
    "vi": "Học Scala cơ bản.",
    "en": "Learn Scala basics."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/scala-basic/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "elixir-basic",
  "gameId": "game-006",
  "name": {
    "vi": "Elixir Cơ Bản",
    "en": "Elixir Basic"
  },
  "desc": {
    "vi": "Học Elixir cơ bản.",
    "en": "Learn Elixir basics."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/elixir-basic/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "haskell-basic",
  "gameId": "game-007",
  "name": {
    "vi": "Haskell Cơ Bản",
    "en": "Haskell Basic"
  },
  "desc": {
    "vi": "Học Haskell cơ bản.",
    "en": "Learn Haskell basics."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/haskell-basic/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "ocaml-basic",
  "gameId": "game-008",
  "name": {
    "vi": "OCaml Cơ Bản",
    "en": "OCaml Basic"
  },
  "desc": {
    "vi": "Học OCaml cơ bản.",
    "en": "Learn OCaml basics."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/ocaml-basic/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "clojure-basic",
  "gameId": "game-009",
  "name": {
    "vi": "Clojure Cơ Bản",
    "en": "Clojure Basic"
  },
  "desc": {
    "vi": "Học Clojure cơ bản.",
    "en": "Learn Clojure basics."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/clojure-basic/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "fsharp-basic",
  "gameId": "game-010",
  "name": {
    "vi": "F# Cơ Bản",
    "en": "F# Basic"
  },
  "desc": {
    "vi": "Học F# cơ bản.",
    "en": "Learn F# basics."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/fsharp-basic/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "nim-basic",
  "gameId": "game-011",
  "name": {
    "vi": "Nim Cơ Bản",
    "en": "Nim Basic"
  },
  "desc": {
    "vi": "Học Nim cơ bản.",
    "en": "Learn Nim basics."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/nim-basic/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "crystal-basic",
  "gameId": "game-012",
  "name": {
    "vi": "Crystal Cơ Bản",
    "en": "Crystal Basic"
  },
  "desc": {
    "vi": "Học Crystal cơ bản.",
    "en": "Learn Crystal basics."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/crystal-basic/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "v-basic",
  "gameId": "game-013",
  "name": {
    "vi": "V Cơ Bản",
    "en": "V Basic"
  },
  "desc": {
    "vi": "Học V language cơ bản.",
    "en": "Learn V language basics."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/v-basic/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "gleam-basic",
  "gameId": "game-014",
  "name": {
    "vi": "Gleam Cơ Bản",
    "en": "Gleam Basic"
  },
  "desc": {
    "vi": "Học Gleam cơ bản.",
    "en": "Learn Gleam basics."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/gleam-basic/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "carbon-lang",
  "gameId": "game-015",
  "name": {
    "vi": "Carbon",
    "en": "Carbon Lang"
  },
  "desc": {
    "vi": "Tìm hiểu Carbon language.",
    "en": "Learn Carbon language."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/carbon-lang/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "cpp-basic",
  "gameId": "game-016",
  "name": {
    "vi": "C++ Cơ Bản",
    "en": "C++ Basic"
  },
  "desc": {
    "vi": "Học C++ cơ bản.",
    "en": "Learn C++ basics."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/cpp-basic/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "docker-basic",
  "gameId": "game-017",
  "name": {
    "vi": "Docker Cơ Bản",
    "en": "Docker Basic"
  },
  "desc": {
    "vi": "Học Docker cơ bản.",
    "en": "Learn Docker basics."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/docker-basic/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "kubernetes-basic",
  "gameId": "game-018",
  "name": {
    "vi": "K8s Cơ Bản",
    "en": "K8s Basic"
  },
  "desc": {
    "vi": "Học Kubernetes cơ bản.",
    "en": "Learn Kubernetes basics."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/kubernetes-basic/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "terraform-basic",
  "gameId": "game-019",
  "name": {
    "vi": "Terraform Cơ Bản",
    "en": "Terraform Basic"
  },
  "desc": {
    "vi": "Học Terraform cơ bản.",
    "en": "Learn Terraform basics."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/terraform-basic/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "ansible-basic",
  "gameId": "game-020",
  "name": {
    "vi": "Ansible Cơ Bản",
    "en": "Ansible Basic"
  },
  "desc": {
    "vi": "Học Ansible cơ bản.",
    "en": "Learn Ansible basics."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/ansible-basic/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "pulumi-basic",
  "gameId": "game-021",
  "name": {
    "vi": "Pulumi Cơ Bản",
    "en": "Pulumi Basic"
  },
  "desc": {
    "vi": "Học Pulumi cơ bản.",
    "en": "Learn Pulumi basics."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/pulumi-basic/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "serverless-basic",
  "gameId": "game-022",
  "name": {
    "vi": "Serverless Cơ Bản",
    "en": "Serverless Basic"
  },
  "desc": {
    "vi": "Học serverless cơ bản.",
    "en": "Learn serverless basics."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/serverless-basic/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "cloudflare-worker",
  "gameId": "game-023",
  "name": {
    "vi": "Cloudflare Worker",
    "en": "Cloudflare Worker"
  },
  "desc": {
    "vi": "Học Cloudflare Workers.",
    "en": "Learn Cloudflare Workers."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/cloudflare-worker/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "supabase-db",
  "gameId": "game-024",
  "name": {
    "vi": "Supabase DB",
    "en": "Supabase DB"
  },
  "desc": {
    "vi": "Học Supabase database.",
    "en": "Learn Supabase database."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/supabase-db/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "prisma-orm",
  "gameId": "game-025",
  "name": {
    "vi": "Prisma ORM",
    "en": "Prisma ORM"
  },
  "desc": {
    "vi": "Học Prisma ORM.",
    "en": "Learn Prisma ORM."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/prisma-orm/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "mongodb-basic",
  "gameId": "game-026",
  "name": {
    "vi": "MongoDB Cơ Bản",
    "en": "MongoDB Basic"
  },
  "desc": {
    "vi": "Học MongoDB cơ bản.",
    "en": "Learn MongoDB basics."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/mongodb-basic/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "redis-basic",
  "gameId": "game-027",
  "name": {
    "vi": "Redis Cơ Bản",
    "en": "Redis Basic"
  },
  "desc": {
    "vi": "Học Redis cơ bản.",
    "en": "Learn Redis basics."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/redis-basic/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "kafka-basic",
  "gameId": "game-028",
  "name": {
    "vi": "Kafka Cơ Bản",
    "en": "Kafka Basic"
  },
  "desc": {
    "vi": "Học Kafka cơ bản.",
    "en": "Learn Kafka basics."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/kafka-basic/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "grpc-basic",
  "gameId": "game-029",
  "name": {
    "vi": "gRPC Cơ Bản",
    "en": "gRPC Basic"
  },
  "desc": {
    "vi": "Học gRPC cơ bản.",
    "en": "Learn gRPC basics."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/grpc-basic/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "graphql-basic",
  "gameId": "game-030",
  "name": {
    "vi": "GraphQL Cơ Bản",
    "en": "GraphQL Basic"
  },
  "desc": {
    "vi": "Học GraphQL cơ bản.",
    "en": "Learn GraphQL basics."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/graphql-basic/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "rest-api",
  "gameId": "game-031",
  "name": {
    "vi": "REST API",
    "en": "REST API"
  },
  "desc": {
    "vi": "Học thiết kế REST API.",
    "en": "Learn REST API design."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/rest-api/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "openapi-spec",
  "gameId": "game-032",
  "name": {
    "vi": "OpenAPI Spec",
    "en": "OpenAPI Spec"
  },
  "desc": {
    "vi": "Học OpenAPI specification.",
    "en": "Learn OpenAPI spec."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/openapi-spec/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "clickhouse-query",
  "gameId": "game-033",
  "name": {
    "vi": "ClickHouse Query",
    "en": "ClickHouse Query"
  },
  "desc": {
    "vi": "Học ClickHouse.",
    "en": "Learn ClickHouse."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/clickhouse-query/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "duckdb-query",
  "gameId": "game-034",
  "name": {
    "vi": "DuckDB Query",
    "en": "DuckDB Query"
  },
  "desc": {
    "vi": "Học DuckDB.",
    "en": "Learn DuckDB."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/duckdb-query/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "prometheus-query",
  "gameId": "game-035",
  "name": {
    "vi": "Prometheus Query",
    "en": "Prometheus Query"
  },
  "desc": {
    "vi": "Học Prometheus.",
    "en": "Learn Prometheus."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/prometheus-query/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "grafana-dash",
  "gameId": "game-036",
  "name": {
    "vi": "Grafana Dash",
    "en": "Grafana Dash"
  },
  "desc": {
    "vi": "Học Grafana dashboards.",
    "en": "Learn Grafana dashboards."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/grafana-dash/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "opentelemetry",
  "gameId": "game-037",
  "name": {
    "vi": "OpenTelemetry",
    "en": "OpenTelemetry"
  },
  "desc": {
    "vi": "Học OpenTelemetry.",
    "en": "Learn OpenTelemetry."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/opentelemetry/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "sentry-error",
  "gameId": "game-038",
  "name": {
    "vi": "Sentry Error",
    "en": "Sentry Error"
  },
  "desc": {
    "vi": "Học Sentry error tracking.",
    "en": "Learn Sentry."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/sentry-error/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "chaos-engineer",
  "gameId": "game-039",
  "name": {
    "vi": "Chaos Engineer",
    "en": "Chaos Engineer"
  },
  "desc": {
    "vi": "Học Chaos Engineering.",
    "en": "Learn Chaos Engineering."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/chaos-engineer/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "circuit-breaker",
  "gameId": "game-040",
  "name": {
    "vi": "Circuit Breaker",
    "en": "Circuit Breaker"
  },
  "desc": {
    "vi": "Thiết kế circuit breaker.",
    "en": "Design circuit breakers."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/circuit-breaker/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "event-driven",
  "gameId": "game-041",
  "name": {
    "vi": "Event Driven",
    "en": "Event Driven"
  },
  "desc": {
    "vi": "Thiết kế event-driven architecture.",
    "en": "Design event-driven architecture."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/event-driven/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "cqrs-pattern",
  "gameId": "game-042",
  "name": {
    "vi": "CQRS Pattern",
    "en": "CQRS Pattern"
  },
  "desc": {
    "vi": "Thiết kế CQRS.",
    "en": "Design CQRS pattern."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/cqrs-pattern/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "microservices",
  "gameId": "game-043",
  "name": {
    "vi": "Microservices",
    "en": "Microservices"
  },
  "desc": {
    "vi": "Thiết kế microservices.",
    "en": "Design microservices."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/microservices/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "service-mesh",
  "gameId": "game-044",
  "name": {
    "vi": "Service Mesh",
    "en": "Service Mesh"
  },
  "desc": {
    "vi": "Thiết kế service mesh.",
    "en": "Design service mesh."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/service-mesh/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "api-gateway",
  "gameId": "game-045",
  "name": {
    "vi": "API Gateway",
    "en": "API Gateway"
  },
  "desc": {
    "vi": "Thiết kế API gateway.",
    "en": "Design API gateway."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/api-gateway/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "sidecar-pattern",
  "gameId": "game-046",
  "name": {
    "vi": "Sidecar Pattern",
    "en": "Sidecar Pattern"
  },
  "desc": {
    "vi": "Thiết kế sidecar.",
    "en": "Design sidecar pattern."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/sidecar-pattern/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": " ambassador-pattern",
  "gameId": "game-047",
  "name": {
    "vi": "Ambassador Pattern",
    "en": "Ambassador Pattern"
  },
  "desc": {
    "vi": "Thiết kế ambassador.",
    "en": "Design ambassador pattern."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/ ambassador-pattern/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "adapter-pattern",
  "gameId": "game-048",
  "name": {
    "vi": "Adapter Pattern",
    "en": "Adapter Pattern"
  },
  "desc": {
    "vi": "Thiết kế adapter.",
    "en": "Design adapter pattern."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/adapter-pattern/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "decorator-pattern",
  "gameId": "game-049",
  "name": {
    "vi": "Decorator Pattern",
    "en": "Decorator Pattern"
  },
  "desc": {
    "vi": "Thiết kế decorator.",
    "en": "Design decorator pattern."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/decorator-pattern/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "facade-pattern",
  "gameId": "game-050",
  "name": {
    "vi": "Facade Pattern",
    "en": "Facade Pattern"
  },
  "desc": {
    "vi": "Thiết kế facade.",
    "en": "Design facade pattern."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/facade-pattern/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "proxy-pattern",
  "gameId": "game-051",
  "name": {
    "vi": "Proxy Pattern",
    "en": "Proxy Pattern"
  },
  "desc": {
    "vi": "Thiết kế proxy.",
    "en": "Design proxy pattern."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/proxy-pattern/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "composite-pattern",
  "gameId": "game-052",
  "name": {
    "vi": "Composite Pattern",
    "en": "Composite Pattern"
  },
  "desc": {
    "vi": "Thiết kế composite.",
    "en": "Design composite pattern."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/composite-pattern/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "flyweight-pattern",
  "gameId": "game-053",
  "name": {
    "vi": "Flyweight Pattern",
    "en": "Flyweight Pattern"
  },
  "desc": {
    "vi": "Thiết kế flyweight.",
    "en": "Design flyweight pattern."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/flyweight-pattern/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "bridge-pattern",
  "gameId": "game-054",
  "name": {
    "vi": "Bridge Pattern",
    "en": "Bridge Pattern"
  },
  "desc": {
    "vi": "Thiết kế bridge.",
    "en": "Design bridge pattern."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/bridge-pattern/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "strategy-pattern",
  "gameId": "game-055",
  "name": {
    "vi": "Strategy Pattern",
    "en": "Strategy Pattern"
  },
  "desc": {
    "vi": "Thiết kế strategy.",
    "en": "Design strategy pattern."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/strategy-pattern/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "observer-pattern",
  "gameId": "game-056",
  "name": {
    "vi": "Observer Pattern",
    "en": "Observer Pattern"
  },
  "desc": {
    "vi": "Thiết kế observer.",
    "en": "Design observer pattern."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/observer-pattern/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "state-pattern",
  "gameId": "game-057",
  "name": {
    "vi": "State Pattern",
    "en": "State Pattern"
  },
  "desc": {
    "vi": "Thiết kế state.",
    "en": "Design state pattern."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/state-pattern/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "command-pattern",
  "gameId": "game-058",
  "name": {
    "vi": "Command Pattern",
    "en": "Command Pattern"
  },
  "desc": {
    "vi": "Thiết kế command.",
    "en": "Design command pattern."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/command-pattern/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "chain-responsibility",
  "gameId": "game-059",
  "name": {
    "vi": "Chain Responsibility",
    "en": "Chain Responsibility"
  },
  "desc": {
    "vi": "Thiết kế chain of responsibility.",
    "en": "Design chain of responsibility."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/chain-responsibility/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "visitor-pattern",
  "gameId": "game-060",
  "name": {
    "vi": "Visitor Pattern",
    "en": "Visitor Pattern"
  },
  "desc": {
    "vi": "Thiết kế visitor.",
    "en": "Design visitor pattern."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/visitor-pattern/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "iterator-pattern",
  "gameId": "game-061",
  "name": {
    "vi": "Iterator Pattern",
    "en": "Iterator Pattern"
  },
  "desc": {
    "vi": "Thiết kế iterator.",
    "en": "Design iterator pattern."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/iterator-pattern/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "memento-pattern",
  "gameId": "game-062",
  "name": {
    "vi": "Memento Pattern",
    "en": "Memento Pattern"
  },
  "desc": {
    "vi": "Thiết kế memento.",
    "en": "Design memento pattern."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/memento-pattern/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "mediator-pattern",
  "gameId": "game-063",
  "name": {
    "vi": "Mediator Pattern",
    "en": "Mediator Pattern"
  },
  "desc": {
    "vi": "Thiết kế mediator.",
    "en": "Design mediator pattern."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/mediator-pattern/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "template-method",
  "gameId": "game-064",
  "name": {
    "vi": "Template Method",
    "en": "Template Method"
  },
  "desc": {
    "vi": "Thiết kế template method.",
    "en": "Design template method."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/template-method/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "factory-method",
  "gameId": "game-065",
  "name": {
    "vi": "Factory Method",
    "en": "Factory Method"
  },
  "desc": {
    "vi": "Thiết kế factory method.",
    "en": "Design factory method."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/factory-method/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "abstract-factory",
  "gameId": "game-066",
  "name": {
    "vi": "Abstract Factory",
    "en": "Abstract Factory"
  },
  "desc": {
    "vi": "Thiết kế abstract factory.",
    "en": "Design abstract factory."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/abstract-factory/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "builder-pattern",
  "gameId": "game-067",
  "name": {
    "vi": "Builder Pattern",
    "en": "Builder Pattern"
  },
  "desc": {
    "vi": "Thiết kế builder.",
    "en": "Design builder pattern."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/builder-pattern/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "prototype-pattern",
  "gameId": "game-068",
  "name": {
    "vi": "Prototype Pattern",
    "en": "Prototype Pattern"
  },
  "desc": {
    "vi": "Thiết kế prototype.",
    "en": "Design prototype pattern."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/prototype-pattern/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "singleton-pattern",
  "gameId": "game-069",
  "name": {
    "vi": "Singleton Pattern",
    "en": "Singleton Pattern"
  },
  "desc": {
    "vi": "Thiết kế singleton.",
    "en": "Design singleton pattern."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/singleton-pattern/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "dependency-inject",
  "gameId": "game-070",
  "name": {
    "vi": "Dependency Inject",
    "en": "Dependency Inject"
  },
  "desc": {
    "vi": "Thiết kế dependency injection.",
    "en": "Design dependency injection."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/dependency-inject/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "inversion-control",
  "gameId": "game-071",
  "name": {
    "vi": "Inversion Control",
    "en": "Inversion Control"
  },
  "desc": {
    "vi": "Thiết kế inversion of control.",
    "en": "Design inversion of control."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/inversion-control/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "solid-principles",
  "gameId": "game-072",
  "name": {
    "vi": "SOLID Principles",
    "en": "SOLID Principles"
  },
  "desc": {
    "vi": "Học SOLID principles.",
    "en": "Learn SOLID principles."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/solid-principles/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "dry-principle",
  "gameId": "game-073",
  "name": {
    "vi": "DRY Principle",
    "en": "DRY Principle"
  },
  "desc": {
    "vi": "Học DRY principle.",
    "en": "Learn DRY principle."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/dry-principle/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "kiss-principle",
  "gameId": "game-074",
  "name": {
    "vi": "KISS Principle",
    "en": "KISS Principle"
  },
  "desc": {
    "vi": "Học KISS principle.",
    "en": "Learn KISS principle."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/kiss-principle/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "yagni-principle",
  "gameId": "game-075",
  "name": {
    "vi": "YAGNI Principle",
    "en": "YAGNI Principle"
  },
  "desc": {
    "vi": "Học YAGNI principle.",
    "en": "Learn YAGNI principle."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/yagni-principle/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "separation-concerns",
  "gameId": "game-076",
  "name": {
    "vi": "Separation Concerns",
    "en": "Separation Concerns"
  },
  "desc": {
    "vi": "Học separation of concerns.",
    "en": "Learn separation of concerns."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/separation-concerns/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "law-demeter",
  "gameId": "game-077",
  "name": {
    "vi": "Law Demeter",
    "en": "Law Demeter"
  },
  "desc": {
    "vi": "Học Law of Demeter.",
    "en": "Learn Law of Demeter."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/law-demeter/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "composition-inherit",
  "gameId": "game-078",
  "name": {
    "vi": "Composition Inherit",
    "en": "Composition Inherit"
  },
  "desc": {
    "vi": "Học composition over inheritance.",
    "en": "Learn composition over inheritance."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/composition-inherit/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "interface-segregate",
  "gameId": "game-079",
  "name": {
    "vi": "Interface Segregate",
    "en": "Interface Segregate"
  },
  "desc": {
    "vi": "Học interface segregation.",
    "en": "Learn interface segregation."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/interface-segregate/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "liskov-substitute",
  "gameId": "game-080",
  "name": {
    "vi": "Liskov Substitute",
    "en": "Liskov Substitute"
  },
  "desc": {
    "vi": "Học Liskov substitution.",
    "en": "Learn Liskov substitution."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/liskov-substitute/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "open-closed",
  "gameId": "game-081",
  "name": {
    "vi": "Open Closed",
    "en": "Open Closed"
  },
  "desc": {
    "vi": "Học open/closed principle.",
    "en": "Learn open/closed principle."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/open-closed/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "single-responsibility",
  "gameId": "game-082",
  "name": {
    "vi": "Single Responsibility",
    "en": "Single Responsibility"
  },
  "desc": {
    "vi": "Học single responsibility.",
    "en": "Learn single responsibility."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/single-responsibility/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "clean-code",
  "gameId": "game-083",
  "name": {
    "vi": "Clean Code",
    "en": "Clean Code"
  },
  "desc": {
    "vi": "Học clean code.",
    "en": "Learn clean code."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/clean-code/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "refactoring",
  "gameId": "game-084",
  "name": {
    "vi": "Refactoring",
    "en": "Refactoring"
  },
  "desc": {
    "vi": "Học refactoring.",
    "en": "Learn refactoring."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/refactoring/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "pair-programming",
  "gameId": "game-085",
  "name": {
    "vi": "Pair Programming",
    "en": "Pair Programming"
  },
  "desc": {
    "vi": "Học pair programming.",
    "en": "Learn pair programming."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/pair-programming/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "mob-programming",
  "gameId": "game-086",
  "name": {
    "vi": "Mob Programming",
    "en": "Mob Programming"
  },
  "desc": {
    "vi": "Học mob programming.",
    "en": "Learn mob programming."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/mob-programming/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "trunk-based",
  "gameId": "game-087",
  "name": {
    "vi": "Trunk Based",
    "en": "Trunk Based"
  },
  "desc": {
    "vi": "Học trunk-based development.",
    "en": "Learn trunk-based development."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/trunk-based/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "feature-toggle",
  "gameId": "game-088",
  "name": {
    "vi": "Feature Toggle",
    "en": "Feature Toggle"
  },
  "desc": {
    "vi": "Học feature toggles.",
    "en": "Learn feature toggles."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/feature-toggle/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "blue-green-deploy",
  "gameId": "game-089",
  "name": {
    "vi": "Blue Green Deploy",
    "en": "Blue Green Deploy"
  },
  "desc": {
    "vi": "Học blue-green deployment.",
    "en": "Learn blue-green deployment."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/blue-green-deploy/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "canary-release",
  "gameId": "game-090",
  "name": {
    "vi": "Canary Release",
    "en": "Canary Release"
  },
  "desc": {
    "vi": "Học canary release.",
    "en": "Learn canary release."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/canary-release/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "dark-launch",
  "gameId": "game-091",
  "name": {
    "vi": "Dark Launch",
    "en": "Dark Launch"
  },
  "desc": {
    "vi": "Học dark launch.",
    "en": "Learn dark launch."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/dark-launch/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "a-b-test-deploy",
  "gameId": "game-092",
  "name": {
    "vi": "A/B Test Deploy",
    "en": "A/B Test Deploy"
  },
  "desc": {
    "vi": "Học A/B testing deployment.",
    "en": "Learn A/B testing deployment."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/a-b-test-deploy/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "feature-flag",
  "gameId": "game-093",
  "name": {
    "vi": "Feature Flag",
    "en": "Feature Flag"
  },
  "desc": {
    "vi": "Học feature flags.",
    "en": "Learn feature flags."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/feature-flag/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "git-flow",
  "gameId": "game-094",
  "name": {
    "vi": "Git Flow",
    "en": "Git Flow"
  },
  "desc": {
    "vi": "Học Git Flow.",
    "en": "Learn Git Flow."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/git-flow/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "github-flow",
  "gameId": "game-095",
  "name": {
    "vi": "GitHub Flow",
    "en": "GitHub Flow"
  },
  "desc": {
    "vi": "Học GitHub Flow.",
    "en": "Learn GitHub Flow."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/github-flow/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "gitlab-flow",
  "gameId": "game-096",
  "name": {
    "vi": "GitLab Flow",
    "en": "GitLab Flow"
  },
  "desc": {
    "vi": "Học GitLab Flow.",
    "en": "Learn GitLab Flow."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/gitlab-flow/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "one-flow",
  "gameId": "game-097",
  "name": {
    "vi": "One Flow",
    "en": "One Flow"
  },
  "desc": {
    "vi": "Học One Flow.",
    "en": "Learn One Flow."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/one-flow/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "semantic-version",
  "gameId": "game-098",
  "name": {
    "vi": "Semantic Version",
    "en": "Semantic Version"
  },
  "desc": {
    "vi": "Học semantic versioning.",
    "en": "Learn semantic versioning."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/semantic-version/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "conventional-commit",
  "gameId": "game-099",
  "name": {
    "vi": "Conventional Commit",
    "en": "Conventional Commit"
  },
  "desc": {
    "vi": "Học conventional commits.",
    "en": "Learn conventional commits."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/conventional-commit/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "monorepo",
  "gameId": "game-100",
  "name": {
    "vi": "Monorepo",
    "en": "Monorepo"
  },
  "desc": {
    "vi": "Học monorepo.",
    "en": "Learn monorepo."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/monorepo/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "polyrepo",
  "gameId": "game-101",
  "name": {
    "vi": "Polyrepo",
    "en": "Polyrepo"
  },
  "desc": {
    "vi": "Học polyrepo.",
    "en": "Learn polyrepo."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/polyrepo/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "nx-build",
  "gameId": "game-102",
  "name": {
    "vi": "Nx Build",
    "en": "Nx Build"
  },
  "desc": {
    "vi": "Học Nx build system.",
    "en": "Learn Nx build system."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/nx-build/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "turborepo",
  "gameId": "game-103",
  "name": {
    "vi": "Turborepo",
    "en": "Turborepo"
  },
  "desc": {
    "vi": "Học Turborepo.",
    "en": "Learn Turborepo."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/turborepo/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "pnpm-workspace",
  "gameId": "game-104",
  "name": {
    "vi": "pnpm Workspace",
    "en": "pnpm Workspace"
  },
  "desc": {
    "vi": "Học pnpm workspaces.",
    "en": "Learn pnpm workspaces."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/pnpm-workspace/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "lerna-manage",
  "gameId": "game-105",
  "name": {
    "vi": "Lerna Manage",
    "en": "Lerna Manage"
  },
  "desc": {
    "vi": "Học Lerna.",
    "en": "Learn Lerna."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/lerna-manage/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "changeset-version",
  "gameId": "game-106",
  "name": {
    "vi": "Changeset Version",
    "en": "Changeset Version"
  },
  "desc": {
    "vi": "Học changesets.",
    "en": "Learn changesets."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/changeset-version/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "release-please",
  "gameId": "game-107",
  "name": {
    "vi": "Release Please",
    "en": "Release Please"
  },
  "desc": {
    "vi": "Học release-please.",
    "en": "Learn release-please."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/release-please/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "semantic-release",
  "gameId": "game-108",
  "name": {
    "vi": "Semantic Release",
    "en": "Semantic Release"
  },
  "desc": {
    "vi": "Học semantic-release.",
    "en": "Learn semantic-release."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/semantic-release/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "standard-version",
  "gameId": "game-109",
  "name": {
    "vi": "Standard Version",
    "en": "Standard Version"
  },
  "desc": {
    "vi": "Học standard-version.",
    "en": "Learn standard-version."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/standard-version/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "coventional-changelog",
  "gameId": "game-110",
  "name": {
    "vi": "Conventional Changelog",
    "en": "Conventional Changelog"
  },
  "desc": {
    "vi": "Học conventional changelog.",
    "en": "Learn conventional changelog."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/coventional-changelog/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "auto-changelog",
  "gameId": "game-111",
  "name": {
    "vi": "Auto Changelog",
    "en": "Auto Changelog"
  },
  "desc": {
    "vi": "Học auto-changelog.",
    "en": "Learn auto-changelog."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/auto-changelog/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "code",
  "wave": 4,
  "free": 5
},
{
  "id": "ux-research",
  "gameId": "game-001",
  "name": {
    "vi": "UX Research",
    "en": "UX Research"
  },
  "desc": {
    "vi": "Học UX research methods.",
    "en": "Learn UX research methods."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/ux-research/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "creative",
  "wave": 4,
  "free": 5
},
{
  "id": "user-interview",
  "gameId": "game-002",
  "name": {
    "vi": "User Interview",
    "en": "User Interview"
  },
  "desc": {
    "vi": "Học user interview.",
    "en": "Learn user interviews."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/user-interview/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "creative",
  "wave": 4,
  "free": 5
},
{
  "id": "usability-test",
  "gameId": "game-003",
  "name": {
    "vi": "Usability Test",
    "en": "Usability Test"
  },
  "desc": {
    "vi": "Học usability testing.",
    "en": "Learn usability testing."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/usability-test/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "creative",
  "wave": 4,
  "free": 5
},
{
  "id": "card-sort",
  "gameId": "game-004",
  "name": {
    "vi": "Card Sort",
    "en": "Card Sort"
  },
  "desc": {
    "vi": "Học card sorting.",
    "en": "Learn card sorting."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/card-sort/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "creative",
  "wave": 4,
  "free": 5
},
{
  "id": "tree-test",
  "gameId": "game-005",
  "name": {
    "vi": "Tree Test",
    "en": "Tree Test"
  },
  "desc": {
    "vi": "Học tree testing.",
    "en": "Learn tree testing."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/tree-test/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "creative",
  "wave": 4,
  "free": 5
},
{
  "id": "first-click",
  "gameId": "game-006",
  "name": {
    "vi": "First Click",
    "en": "First Click"
  },
  "desc": {
    "vi": "Học first-click testing.",
    "en": "Learn first-click testing."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/first-click/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "creative",
  "wave": 4,
  "free": 5
},
{
  "id": "eye-tracking",
  "gameId": "game-007",
  "name": {
    "vi": "Eye Tracking",
    "en": "Eye Tracking"
  },
  "desc": {
    "vi": "Học eye tracking.",
    "en": "Learn eye tracking."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/eye-tracking/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "creative",
  "wave": 4,
  "free": 5
},
{
  "id": "heatmap-analyze",
  "gameId": "game-008",
  "name": {
    "vi": "Heatmap Analyze",
    "en": "Heatmap Analyze"
  },
  "desc": {
    "vi": "Phân tích heatmap.",
    "en": "Analyze heatmaps."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/heatmap-analyze/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "creative",
  "wave": 4,
  "free": 5
},
{
  "id": "scroll-map",
  "gameId": "game-009",
  "name": {
    "vi": "Scroll Map",
    "en": "Scroll Map"
  },
  "desc": {
    "vi": "Phân tích scroll map.",
    "en": "Analyze scroll maps."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/scroll-map/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "creative",
  "wave": 4,
  "free": 5
},
{
  "id": "click-map",
  "gameId": "game-010",
  "name": {
    "vi": "Click Map",
    "en": "Click Map"
  },
  "desc": {
    "vi": "Phân tích click map.",
    "en": "Analyze click maps."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/click-map/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "creative",
  "wave": 4,
  "free": 5
},
{
  "id": "attention-map",
  "gameId": "game-011",
  "name": {
    "vi": "Attention Map",
    "en": "Attention Map"
  },
  "desc": {
    "vi": "Phân tích attention map.",
    "en": "Analyze attention maps."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/attention-map/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "creative",
  "wave": 4,
  "free": 5
},
{
  "id": "form-analytics",
  "gameId": "game-012",
  "name": {
    "vi": "Form Analytics",
    "en": "Form Analytics"
  },
  "desc": {
    "vi": "Phân tích form analytics.",
    "en": "Analyze form analytics."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/form-analytics/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "creative",
  "wave": 4,
  "free": 5
},
{
  "id": "funnel-analyze",
  "gameId": "game-013",
  "name": {
    "vi": "Funnel Analyze",
    "en": "Funnel Analyze"
  },
  "desc": {
    "vi": "Phân tích funnel.",
    "en": "Analyze funnels."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/funnel-analyze/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "creative",
  "wave": 4,
  "free": 5
},
{
  "id": "cohort-analyze",
  "gameId": "game-014",
  "name": {
    "vi": "Cohort Analyze",
    "en": "Cohort Analyze"
  },
  "desc": {
    "vi": "Phân tích cohort.",
    "en": "Analyze cohorts."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/cohort-analyze/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "creative",
  "wave": 4,
  "free": 5
},
{
  "id": "retention-curve",
  "gameId": "game-015",
  "name": {
    "vi": "Retention Curve",
    "en": "Retention Curve"
  },
  "desc": {
    "vi": "Phân tích retention curve.",
    "en": "Analyze retention curves."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/retention-curve/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "creative",
  "wave": 4,
  "free": 5
},
{
  "id": "churn-analyze",
  "gameId": "game-016",
  "name": {
    "vi": "Churn Analyze",
    "en": "Churn Analyze"
  },
  "desc": {
    "vi": "Phân tích churn.",
    "en": "Analyze churn."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/churn-analyze/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "creative",
  "wave": 4,
  "free": 5
},
{
  "id": "ltv-cohort",
  "gameId": "game-017",
  "name": {
    "vi": "LTV Cohort",
    "en": "LTV Cohort"
  },
  "desc": {
    "vi": "Phân tích LTV theo cohort.",
    "en": "Analyze LTV by cohort."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/ltv-cohort/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "cac-channel",
  "gameId": "game-018",
  "name": {
    "vi": "CAC Channel",
    "en": "CAC Channel"
  },
  "desc": {
    "vi": "Phân tích CAC theo channel.",
    "en": "Analyze CAC by channel."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/cac-channel/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "roi-channel",
  "gameId": "game-019",
  "name": {
    "vi": "ROI Channel",
    "en": "ROI Channel"
  },
  "desc": {
    "vi": "Phân tích ROI theo channel.",
    "en": "Analyze ROI by channel."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/roi-channel/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "attribution-model",
  "gameId": "game-020",
  "name": {
    "vi": "Attribution Model",
    "en": "Attribution Model"
  },
  "desc": {
    "vi": "Học attribution modeling.",
    "en": "Learn attribution modeling."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/attribution-model/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "multi-touch",
  "gameId": "game-021",
  "name": {
    "vi": "Multi Touch",
    "en": "Multi Touch"
  },
  "desc": {
    "vi": "Học multi-touch attribution.",
    "en": "Learn multi-touch attribution."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/multi-touch/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "marketing-mix",
  "gameId": "game-022",
  "name": {
    "vi": "Marketing Mix",
    "en": "Marketing Mix"
  },
  "desc": {
    "vi": "Học marketing mix modeling.",
    "en": "Learn marketing mix modeling."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/marketing-mix/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "incrementality",
  "gameId": "game-023",
  "name": {
    "vi": "Incrementality",
    "en": "Incrementality"
  },
  "desc": {
    "vi": "Học incrementality testing.",
    "en": "Learn incrementality testing."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/incrementality/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "lift-test",
  "gameId": "game-024",
  "name": {
    "vi": "Lift Test",
    "en": "Lift Test"
  },
  "desc": {
    "vi": "Học lift testing.",
    "en": "Learn lift testing."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/lift-test/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "geo-test",
  "gameId": "game-025",
  "name": {
    "vi": "Geo Test",
    "en": "Geo Test"
  },
  "desc": {
    "vi": "Học geo testing.",
    "en": "Learn geo testing."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/geo-test/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "synthetic-control",
  "gameId": "game-026",
  "name": {
    "vi": "Synthetic Control",
    "en": "Synthetic Control"
  },
  "desc": {
    "vi": "Học synthetic control.",
    "en": "Learn synthetic control."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/synthetic-control/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "difference-diff",
  "gameId": "game-027",
  "name": {
    "vi": "Difference Diff",
    "en": "Difference Diff"
  },
  "desc": {
    "vi": "Học difference-in-differences.",
    "en": "Learn difference-in-differences."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/difference-diff/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "regression-discont",
  "gameId": "game-028",
  "name": {
    "vi": "Regression Discont",
    "en": "Regression Discont"
  },
  "desc": {
    "vi": "Học regression discontinuity.",
    "en": "Learn regression discontinuity."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/regression-discont/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "instrumental-var",
  "gameId": "game-029",
  "name": {
    "vi": "Instrumental Var",
    "en": "Instrumental Var"
  },
  "desc": {
    "vi": "Học instrumental variables.",
    "en": "Learn instrumental variables."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/instrumental-var/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "propensity-score",
  "gameId": "game-030",
  "name": {
    "vi": "Propensity Score",
    "en": "Propensity Score"
  },
  "desc": {
    "vi": "Học propensity score matching.",
    "en": "Learn propensity score matching."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/propensity-score/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "survival-analyze",
  "gameId": "game-031",
  "name": {
    "vi": "Survival Analyze",
    "en": "Survival Analyze"
  },
  "desc": {
    "vi": "Học survival analysis.",
    "en": "Learn survival analysis."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/survival-analyze/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "time-series",
  "gameId": "game-032",
  "name": {
    "vi": "Time Series",
    "en": "Time Series"
  },
  "desc": {
    "vi": "Học time series analysis.",
    "en": "Learn time series analysis."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/time-series/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "anomaly-detect",
  "gameId": "game-033",
  "name": {
    "vi": "Anomaly Detect",
    "en": "Anomaly Detect"
  },
  "desc": {
    "vi": "Học anomaly detection.",
    "en": "Learn anomaly detection."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/anomaly-detect/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "outlier-detect",
  "gameId": "game-034",
  "name": {
    "vi": "Outlier Detect",
    "en": "Outlier Detect"
  },
  "desc": {
    "vi": "Học outlier detection.",
    "en": "Learn outlier detection."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/outlier-detect/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "cluster-analyze",
  "gameId": "game-035",
  "name": {
    "vi": "Cluster Analyze",
    "en": "Cluster Analyze"
  },
  "desc": {
    "vi": "Học cluster analysis.",
    "en": "Learn cluster analysis."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/cluster-analyze/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "pca-reduce",
  "gameId": "game-036",
  "name": {
    "vi": "PCA Reduce",
    "en": "PCA Reduce"
  },
  "desc": {
    "vi": "Học PCA dimensionality reduction.",
    "en": "Learn PCA."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/pca-reduce/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "tsne-visual",
  "gameId": "game-037",
  "name": {
    "vi": "t-SNE Visual",
    "en": "t-SNE Visual"
  },
  "desc": {
    "vi": "Học t-SNE visualization.",
    "en": "Learn t-SNE."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/tsne-visual/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "umap-visual",
  "gameId": "game-038",
  "name": {
    "vi": "UMAP Visual",
    "en": "UMAP Visual"
  },
  "desc": {
    "vi": "Học UMAP visualization.",
    "en": "Learn UMAP."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/umap-visual/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "autoencoder",
  "gameId": "game-039",
  "name": {
    "vi": "Autoencoder",
    "en": "Autoencoder"
  },
  "desc": {
    "vi": "Học autoencoders.",
    "en": "Learn autoencoders."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/autoencoder/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "vae-generate",
  "gameId": "game-040",
  "name": {
    "vi": "VAE Generate",
    "en": "VAE Generate"
  },
  "desc": {
    "vi": "Học VAE.",
    "en": "Learn VAE."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/vae-generate/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "gan-generate",
  "gameId": "game-041",
  "name": {
    "vi": "GAN Generate",
    "en": "GAN Generate"
  },
  "desc": {
    "vi": "Học GANs.",
    "en": "Learn GANs."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/gan-generate/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "diffusion-model",
  "gameId": "game-042",
  "name": {
    "vi": "Diffusion Model",
    "en": "Diffusion Model"
  },
  "desc": {
    "vi": "Học diffusion models.",
    "en": "Learn diffusion models."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/diffusion-model/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "transformer-arch",
  "gameId": "game-043",
  "name": {
    "vi": "Transformer Arch",
    "en": "Transformer Arch"
  },
  "desc": {
    "vi": "Học transformer architecture.",
    "en": "Learn transformer architecture."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/transformer-arch/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "attention-mechanism",
  "gameId": "game-044",
  "name": {
    "vi": "Attention Mechanism",
    "en": "Attention Mechanism"
  },
  "desc": {
    "vi": "Học attention mechanism.",
    "en": "Learn attention mechanism."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/attention-mechanism/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "self-attention",
  "gameId": "game-045",
  "name": {
    "vi": "Self Attention",
    "en": "Self Attention"
  },
  "desc": {
    "vi": "Học self-attention.",
    "en": "Learn self-attention."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/self-attention/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "multi-head",
  "gameId": "game-046",
  "name": {
    "vi": "Multi Head",
    "en": "Multi Head"
  },
  "desc": {
    "vi": "Học multi-head attention.",
    "en": "Learn multi-head attention."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/multi-head/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "positional-encode",
  "gameId": "game-047",
  "name": {
    "vi": "Positional Encode",
    "en": "Positional Encode"
  },
  "desc": {
    "vi": "Học positional encoding.",
    "en": "Learn positional encoding."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/positional-encode/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "token-embed",
  "gameId": "game-048",
  "name": {
    "vi": "Token Embed",
    "en": "Token Embed"
  },
  "desc": {
    "vi": "Học token embedding.",
    "en": "Learn token embedding."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/token-embed/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "word2vec",
  "gameId": "game-049",
  "name": {
    "vi": "Word2Vec",
    "en": "Word2Vec"
  },
  "desc": {
    "vi": "Học Word2Vec.",
    "en": "Learn Word2Vec."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/word2vec/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "glove-embed",
  "gameId": "game-050",
  "name": {
    "vi": "GloVe Embed",
    "en": "GloVe Embed"
  },
  "desc": {
    "vi": "Học GloVe.",
    "en": "Learn GloVe."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/glove-embed/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "fasttext",
  "gameId": "game-051",
  "name": {
    "vi": "FastText",
    "en": "FastText"
  },
  "desc": {
    "vi": "Học FastText.",
    "en": "Learn FastText."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/fasttext/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "elmo-embed",
  "gameId": "game-052",
  "name": {
    "vi": "ELMo Embed",
    "en": "ELMo Embed"
  },
  "desc": {
    "vi": "Học ELMo.",
    "en": "Learn ELMo."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/elmo-embed/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "bert-model",
  "gameId": "game-053",
  "name": {
    "vi": "BERT Model",
    "en": "BERT Model"
  },
  "desc": {
    "vi": "Học BERT.",
    "en": "Learn BERT."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/bert-model/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "roberta-model",
  "gameId": "game-054",
  "name": {
    "vi": "RoBERTa Model",
    "en": "RoBERTa Model"
  },
  "desc": {
    "vi": "Học RoBERTa.",
    "en": "Learn RoBERTa."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/roberta-model/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "albert-model",
  "gameId": "game-055",
  "name": {
    "vi": "ALBERT Model",
    "en": "ALBERT Model"
  },
  "desc": {
    "vi": "Học ALBERT.",
    "en": "Learn ALBERT."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/albert-model/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "distilbert",
  "gameId": "game-056",
  "name": {
    "vi": "DistilBERT",
    "en": "DistilBERT"
  },
  "desc": {
    "vi": "Học DistilBERT.",
    "en": "Learn DistilBERT."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/distilbert/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "electra-model",
  "gameId": "game-057",
  "name": {
    "vi": "ELECTRA Model",
    "en": "ELECTRA Model"
  },
  "desc": {
    "vi": "Học ELECTRA.",
    "en": "Learn ELECTRA."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/electra-model/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "deberta-model",
  "gameId": "game-058",
  "name": {
    "vi": "DeBERTa Model",
    "en": "DeBERTa Model"
  },
  "desc": {
    "vi": "Học DeBERTa.",
    "en": "Learn DeBERTa."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/deberta-model/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "gpt-arch",
  "gameId": "game-059",
  "name": {
    "vi": "GPT Arch",
    "en": "GPT Arch"
  },
  "desc": {
    "vi": "Học GPT architecture.",
    "en": "Learn GPT architecture."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/gpt-arch/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "gpt2-model",
  "gameId": "game-060",
  "name": {
    "vi": "GPT-2 Model",
    "en": "GPT-2 Model"
  },
  "desc": {
    "vi": "Học GPT-2.",
    "en": "Learn GPT-2."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/gpt2-model/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "gpt3-model",
  "gameId": "game-061",
  "name": {
    "vi": "GPT-3 Model",
    "en": "GPT-3 Model"
  },
  "desc": {
    "vi": "Học GPT-3.",
    "en": "Learn GPT-3."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/gpt3-model/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "gpt4-model",
  "gameId": "game-062",
  "name": {
    "vi": "GPT-4 Model",
    "en": "GPT-4 Model"
  },
  "desc": {
    "vi": "Học GPT-4.",
    "en": "Learn GPT-4."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/gpt4-model/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "t5-model",
  "gameId": "game-063",
  "name": {
    "vi": "T5 Model",
    "en": "T5 Model"
  },
  "desc": {
    "vi": "Học T5.",
    "en": "Learn T5."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/t5-model/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "bart-model",
  "gameId": "game-064",
  "name": {
    "vi": "BART Model",
    "en": "BART Model"
  },
  "desc": {
    "vi": "Học BART.",
    "en": "Learn BART."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/bart-model/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "pegasus-model",
  "gameId": "game-065",
  "name": {
    "vi": "Pegasus Model",
    "en": "Pegasus Model"
  },
  "desc": {
    "vi": "Học Pegasus.",
    "en": "Learn Pegasus."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/pegasus-model/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "prophetnet",
  "gameId": "game-066",
  "name": {
    "vi": "ProphetNet",
    "en": "ProphetNet"
  },
  "desc": {
    "vi": "Học ProphetNet.",
    "en": "Learn ProphetNet."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/prophetnet/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "mbart-model",
  "gameId": "game-067",
  "name": {
    "vi": "mBART Model",
    "en": "mBART Model"
  },
  "desc": {
    "vi": "Học mBART.",
    "en": "Learn mBART."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/mbart-model/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "xlm-roberta",
  "gameId": "game-068",
  "name": {
    "vi": "XLM-RoBERTa",
    "en": "XLM-RoBERTa"
  },
  "desc": {
    "vi": "Học XLM-RoBERTa.",
    "en": "Learn XLM-RoBERTa."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/xlm-roberta/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "m2m100",
  "gameId": "game-069",
  "name": {
    "vi": "M2M100",
    "en": "M2M100"
  },
  "desc": {
    "vi": "Học M2M100.",
    "en": "Learn M2M100."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/m2m100/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "m-bert",
  "gameId": "game-070",
  "name": {
    "vi": "mBERT",
    "en": "mBERT"
  },
  "desc": {
    "vi": "Học mBERT.",
    "en": "Learn mBERT."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/m-bert/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "rembert",
  "gameId": "game-071",
  "name": {
    "vi": "RemBERT",
    "en": "RemBERT"
  },
  "desc": {
    "vi": "Học RemBERT.",
    "en": "Learn RemBERT."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/rembert/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "la-bse",
  "gameId": "game-072",
  "name": {
    "vi": "LaBSE",
    "en": "LaBSE"
  },
  "desc": {
    "vi": "Học LaBSE.",
    "en": "Learn LaBSE."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/la-bse/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "sentence-transformer",
  "gameId": "game-073",
  "name": {
    "vi": "Sentence Transformer",
    "en": "Sentence Transformer"
  },
  "desc": {
    "vi": "Học sentence transformers.",
    "en": "Learn sentence transformers."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/sentence-transformer/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "clip-model",
  "gameId": "game-074",
  "name": {
    "vi": "CLIP Model",
    "en": "CLIP Model"
  },
  "desc": {
    "vi": "Học CLIP.",
    "en": "Learn CLIP."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/clip-model/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "align-model",
  "gameId": "game-075",
  "name": {
    "vi": "ALIGN Model",
    "en": "ALIGN Model"
  },
  "desc": {
    "vi": "Học ALIGN.",
    "en": "Learn ALIGN."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/align-model/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "blip-model",
  "gameId": "game-076",
  "name": {
    "vi": "BLIP Model",
    "en": "BLIP Model"
  },
  "desc": {
    "vi": "Học BLIP.",
    "en": "Learn BLIP."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/blip-model/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "llava-model",
  "gameId": "game-077",
  "name": {
    "vi": "LLaVA Model",
    "en": "LLaVA Model"
  },
  "desc": {
    "vi": "Học LLaVA.",
    "en": "Learn LLaVA."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/llava-model/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "instruct-blip",
  "gameId": "game-078",
  "name": {
    "vi": "Instruct BLIP",
    "en": "Instruct BLIP"
  },
  "desc": {
    "vi": "Học InstructBLIP.",
    "en": "Learn InstructBLIP."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/instruct-blip/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "qwen-model",
  "gameId": "game-079",
  "name": {
    "vi": "Qwen Model",
    "en": "Qwen Model"
  },
  "desc": {
    "vi": "Học Qwen.",
    "en": "Learn Qwen."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/qwen-model/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "baichuan-model",
  "gameId": "game-080",
  "name": {
    "vi": "Baichuan Model",
    "en": "Baichuan Model"
  },
  "desc": {
    "vi": "Học Baichuan.",
    "en": "Learn Baichuan."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/baichuan-model/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "chatglm-model",
  "gameId": "game-081",
  "name": {
    "vi": "ChatGLM Model",
    "en": "ChatGLM Model"
  },
  "desc": {
    "vi": "Học ChatGLM.",
    "en": "Learn ChatGLM."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/chatglm-model/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "falcon-model",
  "gameId": "game-082",
  "name": {
    "vi": "Falcon Model",
    "en": "Falcon Model"
  },
  "desc": {
    "vi": "Học Falcon.",
    "en": "Learn Falcon."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/falcon-model/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "mpt-model",
  "gameId": "game-083",
  "name": {
    "vi": "MPT Model",
    "en": "MPT Model"
  },
  "desc": {
    "vi": "Học MPT.",
    "en": "Learn MPT."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/mpt-model/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "stablelm",
  "gameId": "game-084",
  "name": {
    "vi": "StableLM",
    "en": "StableLM"
  },
  "desc": {
    "vi": "Học StableLM.",
    "en": "Learn StableLM."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/stablelm/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "redpajama",
  "gameId": "game-085",
  "name": {
    "vi": "RedPajama",
    "en": "RedPajama"
  },
  "desc": {
    "vi": "Học RedPajama.",
    "en": "Learn RedPajama."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/redpajama/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "dolly-model",
  "gameId": "game-086",
  "name": {
    "vi": "Dolly Model",
    "en": "Dolly Model"
  },
  "desc": {
    "vi": "Học Dolly.",
    "en": "Learn Dolly."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/dolly-model/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "alpaca-model",
  "gameId": "game-087",
  "name": {
    "vi": "Alpaca Model",
    "en": "Alpaca Model"
  },
  "desc": {
    "vi": "Học Alpaca.",
    "en": "Learn Alpaca."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/alpaca-model/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "vicuna-model",
  "gameId": "game-088",
  "name": {
    "vi": "Vicuna Model",
    "en": "Vicuna Model"
  },
  "desc": {
    "vi": "Học Vicuna.",
    "en": "Learn Vicuna."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/vicuna-model/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "llama-model",
  "gameId": "game-089",
  "name": {
    "vi": "LLaMA Model",
    "en": "LLaMA Model"
  },
  "desc": {
    "vi": "Học LLaMA.",
    "en": "Learn LLaMA."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/llama-model/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "llama2-model",
  "gameId": "game-090",
  "name": {
    "vi": "LLaMA2 Model",
    "en": "LLaMA2 Model"
  },
  "desc": {
    "vi": "Học LLaMA 2.",
    "en": "Learn LLaMA 2."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/llama2-model/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "llama3-model",
  "gameId": "game-091",
  "name": {
    "vi": "LLaMA3 Model",
    "en": "LLaMA3 Model"
  },
  "desc": {
    "vi": "Học LLaMA 3.",
    "en": "Learn LLaMA 3."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/llama3-model/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "mistral-model",
  "gameId": "game-092",
  "name": {
    "vi": "Mistral Model",
    "en": "Mistral Model"
  },
  "desc": {
    "vi": "Học Mistral.",
    "en": "Learn Mistral."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/mistral-model/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "mixtral-model",
  "gameId": "game-093",
  "name": {
    "vi": "Mixtral Model",
    "en": "Mixtral Model"
  },
  "desc": {
    "vi": "Học Mixtral.",
    "en": "Learn Mixtral."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/mixtral-model/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "phi-model",
  "gameId": "game-094",
  "name": {
    "vi": "Phi Model",
    "en": "Phi Model"
  },
  "desc": {
    "vi": "Học Phi.",
    "en": "Learn Phi."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/phi-model/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "gemma-model",
  "gameId": "game-095",
  "name": {
    "vi": "Gemma Model",
    "en": "Gemma Model"
  },
  "desc": {
    "vi": "Học Gemma.",
    "en": "Learn Gemma."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/gemma-model/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "codellama",
  "gameId": "game-096",
  "name": {
    "vi": "CodeLlama",
    "en": "CodeLlama"
  },
  "desc": {
    "vi": "Học CodeLlama.",
    "en": "Learn CodeLlama."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/codellama/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "starcoder",
  "gameId": "game-097",
  "name": {
    "vi": "StarCoder",
    "en": "StarCoder"
  },
  "desc": {
    "vi": "Học StarCoder.",
    "en": "Learn StarCoder."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/starcoder/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "wizardcoder",
  "gameId": "game-098",
  "name": {
    "vi": "WizardCoder",
    "en": "WizardCoder"
  },
  "desc": {
    "vi": "Học WizardCoder.",
    "en": "Learn WizardCoder."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/wizardcoder/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "santacoder",
  "gameId": "game-099",
  "name": {
    "vi": "SantaCoder",
    "en": "SantaCoder"
  },
  "desc": {
    "vi": "Học SantaCoder.",
    "en": "Learn SantaCoder."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/santacoder/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "replit-code",
  "gameId": "game-100",
  "name": {
    "vi": "Replit Code",
    "en": "Replit Code"
  },
  "desc": {
    "vi": "Học Replit Code.",
    "en": "Learn Replit Code."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/replit-code/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "stable-code",
  "gameId": "game-101",
  "name": {
    "vi": "Stable Code",
    "en": "Stable Code"
  },
  "desc": {
    "vi": "Học Stable Code.",
    "en": "Learn Stable Code."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/stable-code/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "deepseek-model",
  "gameId": "game-102",
  "name": {
    "vi": "DeepSeek Model",
    "en": "DeepSeek Model"
  },
  "desc": {
    "vi": "Học DeepSeek.",
    "en": "Learn DeepSeek."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/deepseek-model/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "yi-model",
  "gameId": "game-103",
  "name": {
    "vi": "Yi Model",
    "en": "Yi Model"
  },
  "desc": {
    "vi": "Học Yi.",
    "en": "Learn Yi."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/yi-model/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "solar-model",
  "gameId": "game-104",
  "name": {
    "vi": "SOLAR Model",
    "en": "SOLAR Model"
  },
  "desc": {
    "vi": "Học SOLAR.",
    "en": "Learn SOLAR."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/solar-model/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "vit-model",
  "gameId": "game-001",
  "name": {
    "vi": "ViT Model",
    "en": "ViT Model"
  },
  "desc": {
    "vi": "Học Vision Transformer.",
    "en": "Learn Vision Transformer."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/vit-model/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "swin-transformer",
  "gameId": "game-002",
  "name": {
    "vi": "Swin Transformer",
    "en": "Swin Transformer"
  },
  "desc": {
    "vi": "Học Swin Transformer.",
    "en": "Learn Swin Transformer."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/swin-transformer/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "deit-model",
  "gameId": "game-003",
  "name": {
    "vi": "DeiT Model",
    "en": "DeiT Model"
  },
  "desc": {
    "vi": "Học DeiT.",
    "en": "Learn DeiT."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/deit-model/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "beit-model",
  "gameId": "game-004",
  "name": {
    "vi": "BEiT Model",
    "en": "BEiT Model"
  },
  "desc": {
    "vi": "Học BEiT.",
    "en": "Learn BEiT."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/beit-model/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "mae-model",
  "gameId": "game-005",
  "name": {
    "vi": "MAE Model",
    "en": "MAE Model"
  },
  "desc": {
    "vi": "Học Masked Autoencoder.",
    "en": "Learn MAE."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/mae-model/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "dinov2",
  "gameId": "game-006",
  "name": {
    "vi": "DINOv2",
    "en": "DINOv2"
  },
  "desc": {
    "vi": "Học DINOv2.",
    "en": "Learn DINOv2."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/dinov2/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "sam-model",
  "gameId": "game-007",
  "name": {
    "vi": "SAM Model",
    "en": "SAM Model"
  },
  "desc": {
    "vi": "Học Segment Anything.",
    "en": "Learn SAM."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/sam-model/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "stable-diffusion",
  "gameId": "game-008",
  "name": {
    "vi": "Stable Diffusion",
    "en": "Stable Diffusion"
  },
  "desc": {
    "vi": "Học Stable Diffusion.",
    "en": "Learn Stable Diffusion."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/stable-diffusion/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "controlnet",
  "gameId": "game-009",
  "name": {
    "vi": "ControlNet",
    "en": "ControlNet"
  },
  "desc": {
    "vi": "Học ControlNet.",
    "en": "Learn ControlNet."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/controlnet/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "t2i-adapter",
  "gameId": "game-010",
  "name": {
    "vi": "T2I Adapter",
    "en": "T2I Adapter"
  },
  "desc": {
    "vi": "Học T2I-Adapter.",
    "en": "Learn T2I-Adapter."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/t2i-adapter/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "ip-adapter",
  "gameId": "game-011",
  "name": {
    "vi": "IP Adapter",
    "en": "IP Adapter"
  },
  "desc": {
    "vi": "Học IP-Adapter.",
    "en": "Learn IP-Adapter."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/ip-adapter/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "lora-stable",
  "gameId": "game-012",
  "name": {
    "vi": "LoRA Stable",
    "en": "LoRA Stable"
  },
  "desc": {
    "vi": "Học LoRA cho Stable Diffusion.",
    "en": "Learn LoRA for SD."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/lora-stable/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "dreambooth",
  "gameId": "game-013",
  "name": {
    "vi": "DreamBooth",
    "en": "DreamBooth"
  },
  "desc": {
    "vi": "Học DreamBooth.",
    "en": "Learn DreamBooth."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/dreambooth/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "textual-inversion",
  "gameId": "game-014",
  "name": {
    "vi": "Textual Inversion",
    "en": "Textual Inversion"
  },
  "desc": {
    "vi": "Học Textual Inversion.",
    "en": "Learn Textual Inversion."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/textual-inversion/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "hypernetwork",
  "gameId": "game-015",
  "name": {
    "vi": "Hypernetwork",
    "en": "Hypernetwork"
  },
  "desc": {
    "vi": "Học Hypernetwork.",
    "en": "Learn Hypernetwork."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/hypernetwork/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "animatediff",
  "gameId": "game-016",
  "name": {
    "vi": "AnimateDiff",
    "en": "AnimateDiff"
  },
  "desc": {
    "vi": "Học AnimateDiff.",
    "en": "Learn AnimateDiff."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/animatediff/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "sdxl-turbo",
  "gameId": "game-017",
  "name": {
    "vi": "SDXL Turbo",
    "en": "SDXL Turbo"
  },
  "desc": {
    "vi": "Học SDXL Turbo.",
    "en": "Learn SDXL Turbo."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/sdxl-turbo/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "sdxl-lightning",
  "gameId": "game-018",
  "name": {
    "vi": "SDXL Lightning",
    "en": "SDXL Lightning"
  },
  "desc": {
    "vi": "Học SDXL Lightning.",
    "en": "Learn SDXL Lightning."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/sdxl-lightning/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "latent-consistency",
  "gameId": "game-019",
  "name": {
    "vi": "Latent Consistency",
    "en": "Latent Consistency"
  },
  "desc": {
    "vi": "Học Latent Consistency Models.",
    "en": "Learn LCM."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/latent-consistency/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "ddpm-model",
  "gameId": "game-020",
  "name": {
    "vi": "DDPM Model",
    "en": "DDPM Model"
  },
  "desc": {
    "vi": "Học DDPM.",
    "en": "Learn DDPM."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/ddpm-model/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "ddim-sampler",
  "gameId": "game-021",
  "name": {
    "vi": "DDIM Sampler",
    "en": "DDIM Sampler"
  },
  "desc": {
    "vi": "Học DDIM.",
    "en": "Learn DDIM."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/ddim-sampler/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "dpm-solver",
  "gameId": "game-022",
  "name": {
    "vi": "DPM Solver",
    "en": "DPM Solver"
  },
  "desc": {
    "vi": "Học DPM-Solver.",
    "en": "Learn DPM-Solver."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/dpm-solver/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "euler-sampler",
  "gameId": "game-023",
  "name": {
    "vi": "Euler Sampler",
    "en": "Euler Sampler"
  },
  "desc": {
    "vi": "Học Euler sampler.",
    "en": "Learn Euler sampler."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/euler-sampler/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "heun-sampler",
  "gameId": "game-024",
  "name": {
    "vi": "Heun Sampler",
    "en": "Heun Sampler"
  },
  "desc": {
    "vi": "Học Heun sampler.",
    "en": "Learn Heun sampler."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/heun-sampler/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "pndm-sampler",
  "gameId": "game-025",
  "name": {
    "vi": "PNDM Sampler",
    "en": "PNDM Sampler"
  },
  "desc": {
    "vi": "Học PNDM.",
    "en": "Learn PNDM."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/pndm-sampler/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "unet-arch",
  "gameId": "game-026",
  "name": {
    "vi": "UNet Arch",
    "en": "UNet Arch"
  },
  "desc": {
    "vi": "Học U-Net architecture.",
    "en": "Learn U-Net."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/unet-arch/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "vae-arch",
  "gameId": "game-027",
  "name": {
    "vi": "VAE Arch",
    "en": "VAE Arch"
  },
  "desc": {
    "vi": "Học VAE architecture.",
    "en": "Learn VAE architecture."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/vae-arch/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "clip-encoder",
  "gameId": "game-028",
  "name": {
    "vi": "CLIP Encoder",
    "en": "CLIP Encoder"
  },
  "desc": {
    "vi": "Học CLIP text/image encoder.",
    "en": "Learn CLIP encoder."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/clip-encoder/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "text-encoder",
  "gameId": "game-029",
  "name": {
    "vi": "Text Encoder",
    "en": "Text Encoder"
  },
  "desc": {
    "vi": "Học text encoder.",
    "en": "Learn text encoder."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/text-encoder/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "image-encoder",
  "gameId": "game-030",
  "name": {
    "vi": "Image Encoder",
    "en": "Image Encoder"
  },
  "desc": {
    "vi": "Học image encoder.",
    "en": "Learn image encoder."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/image-encoder/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "resnet-arch",
  "gameId": "game-031",
  "name": {
    "vi": "ResNet Arch",
    "en": "ResNet Arch"
  },
  "desc": {
    "vi": "Học ResNet.",
    "en": "Learn ResNet."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/resnet-arch/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "densenet-arch",
  "gameId": "game-032",
  "name": {
    "vi": "DenseNet Arch",
    "en": "DenseNet Arch"
  },
  "desc": {
    "vi": "Học DenseNet.",
    "en": "Learn DenseNet."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/densenet-arch/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "inception-arch",
  "gameId": "game-033",
  "name": {
    "vi": "Inception Arch",
    "en": "Inception Arch"
  },
  "desc": {
    "vi": "Học Inception.",
    "en": "Learn Inception."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/inception-arch/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "efficientnet",
  "gameId": "game-034",
  "name": {
    "vi": "EfficientNet",
    "en": "EfficientNet"
  },
  "desc": {
    "vi": "Học EfficientNet.",
    "en": "Learn EfficientNet."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/efficientnet/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "mobilenet",
  "gameId": "game-035",
  "name": {
    "vi": "MobileNet",
    "en": "MobileNet"
  },
  "desc": {
    "vi": "Học MobileNet.",
    "en": "Learn MobileNet."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/mobilenet/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "convnext",
  "gameId": "game-036",
  "name": {
    "vi": "ConvNeXt",
    "en": "ConvNeXt"
  },
  "desc": {
    "vi": "Học ConvNeXt.",
    "en": "Learn ConvNeXt."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/convnext/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "poolformer",
  "gameId": "game-037",
  "name": {
    "vi": "PoolFormer",
    "en": "PoolFormer"
  },
  "desc": {
    "vi": "Học PoolFormer.",
    "en": "Learn PoolFormer."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/poolformer/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "mlp-mixer",
  "gameId": "game-038",
  "name": {
    "vi": "MLP-Mixer",
    "en": "MLP-Mixer"
  },
  "desc": {
    "vi": "Học MLP-Mixer.",
    "en": "Learn MLP-Mixer."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/mlp-mixer/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "perceiver",
  "gameId": "game-039",
  "name": {
    "vi": "Perceiver",
    "en": "Perceiver"
  },
  "desc": {
    "vi": "Học Perceiver.",
    "en": "Learn Perceiver."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/perceiver/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "nerf-model",
  "gameId": "game-040",
  "name": {
    "vi": "NeRF Model",
    "en": "NeRF Model"
  },
  "desc": {
    "vi": "Học NeRF.",
    "en": "Learn NeRF."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/nerf-model/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "gaussian-splat",
  "gameId": "game-041",
  "name": {
    "vi": "Gaussian Splat",
    "en": "Gaussian Splat"
  },
  "desc": {
    "vi": "Học Gaussian Splatting.",
    "en": "Learn Gaussian Splatting."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/gaussian-splat/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "pointnet",
  "gameId": "game-042",
  "name": {
    "vi": "PointNet",
    "en": "PointNet"
  },
  "desc": {
    "vi": "Học PointNet.",
    "en": "Learn PointNet."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/pointnet/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "point-transformer",
  "gameId": "game-043",
  "name": {
    "vi": "Point Transformer",
    "en": "Point Transformer"
  },
  "desc": {
    "vi": "Học Point Transformer.",
    "en": "Learn Point Transformer."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/point-transformer/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "detr-model",
  "gameId": "game-044",
  "name": {
    "vi": "DETR Model",
    "en": "DETR Model"
  },
  "desc": {
    "vi": "Học DETR.",
    "en": "Learn DETR."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/detr-model/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "deformable-detr",
  "gameId": "game-045",
  "name": {
    "vi": "Deformable DETR",
    "en": "Deformable DETR"
  },
  "desc": {
    "vi": "Học Deformable DETR.",
    "en": "Learn Deformable DETR."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/deformable-detr/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "dino-detect",
  "gameId": "game-046",
  "name": {
    "vi": "DINO Detect",
    "en": "DINO Detect"
  },
  "desc": {
    "vi": "Học DINO detection.",
    "en": "Learn DINO detection."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/dino-detect/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "rt-detr",
  "gameId": "game-047",
  "name": {
    "vi": "RT-DETR",
    "en": "RT-DETR"
  },
  "desc": {
    "vi": "Học RT-DETR.",
    "en": "Learn RT-DETR."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/rt-detr/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "yolo-detect",
  "gameId": "game-048",
  "name": {
    "vi": "YOLO Detect",
    "en": "YOLO Detect"
  },
  "desc": {
    "vi": "Học YOLO.",
    "en": "Learn YOLO."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/yolo-detect/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "ssd-detect",
  "gameId": "game-049",
  "name": {
    "vi": "SSD Detect",
    "en": "SSD Detect"
  },
  "desc": {
    "vi": "Học SSD.",
    "en": "Learn SSD."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/ssd-detect/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "faster-rcnn",
  "gameId": "game-050",
  "name": {
    "vi": "Faster R-CNN",
    "en": "Faster R-CNN"
  },
  "desc": {
    "vi": "Học Faster R-CNN.",
    "en": "Learn Faster R-CNN."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/faster-rcnn/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "mask-rcnn",
  "gameId": "game-051",
  "name": {
    "vi": "Mask R-CNN",
    "en": "Mask R-CNN"
  },
  "desc": {
    "vi": "Học Mask R-CNN.",
    "en": "Learn Mask R-CNN."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/mask-rcnn/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "cascade-rcnn",
  "gameId": "game-052",
  "name": {
    "vi": "Cascade R-CNN",
    "en": "Cascade R-CNN"
  },
  "desc": {
    "vi": "Học Cascade R-CNN.",
    "en": "Learn Cascade R-CNN."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/cascade-rcnn/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "retina-net",
  "gameId": "game-053",
  "name": {
    "vi": "RetinaNet",
    "en": "RetinaNet"
  },
  "desc": {
    "vi": "Học RetinaNet.",
    "en": "Learn RetinaNet."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/retina-net/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "centernet",
  "gameId": "game-054",
  "name": {
    "vi": "CenterNet",
    "en": "CenterNet"
  },
  "desc": {
    "vi": "Học CenterNet.",
    "en": "Learn CenterNet."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/centernet/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "fcos-detect",
  "gameId": "game-055",
  "name": {
    "vi": "FCOS Detect",
    "en": "FCOS Detect"
  },
  "desc": {
    "vi": "Học FCOS.",
    "en": "Learn FCOS."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/fcos-detect/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "reppoints",
  "gameId": "game-056",
  "name": {
    "vi": "RepPoints",
    "en": "RepPoints"
  },
  "desc": {
    "vi": "Học RepPoints.",
    "en": "Learn RepPoints."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/reppoints/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "gfl-detect",
  "gameId": "game-057",
  "name": {
    "vi": "GFL Detect",
    "en": "GFL Detect"
  },
  "desc": {
    "vi": "Học Generalized Focal Loss.",
    "en": "Learn GFL."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/gfl-detect/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "paa-detect",
  "gameId": "game-058",
  "name": {
    "vi": "PAA Detect",
    "en": "PAA Detect"
  },
  "desc": {
    "vi": "Học Probabilistic Anchor Assignment.",
    "en": "Learn PAA."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/paa-detect/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "autoassign",
  "gameId": "game-059",
  "name": {
    "vi": "AutoAssign",
    "en": "AutoAssign"
  },
  "desc": {
    "vi": "Học AutoAssign.",
    "en": "Learn AutoAssign."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/autoassign/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "ddq-detect",
  "gameId": "game-060",
  "name": {
    "vi": "DDQ Detect",
    "en": "DDQ Detect"
  },
  "desc": {
    "vi": "Học Dense Distinct Query.",
    "en": "Learn DDQ."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/ddq-detect/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "dn-detr",
  "gameId": "game-061",
  "name": {
    "vi": "DN-DETR",
    "en": "DN-DETR"
  },
  "desc": {
    "vi": "Học DN-DETR.",
    "en": "Learn DN-DETR."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/dn-detr/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "dab-detr",
  "gameId": "game-062",
  "name": {
    "vi": "DAB-DETR",
    "en": "DAB-DETR"
  },
  "desc": {
    "vi": "Học DAB-DETR.",
    "en": "Learn DAB-DETR."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/dab-detr/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "conditional-detr",
  "gameId": "game-063",
  "name": {
    "vi": "Conditional DETR",
    "en": "Conditional DETR"
  },
  "desc": {
    "vi": "Học Conditional DETR.",
    "en": "Learn Conditional DETR."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/conditional-detr/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "anchor-detr",
  "gameId": "game-064",
  "name": {
    "vi": "Anchor DETR",
    "en": "Anchor DETR"
  },
  "desc": {
    "vi": "Học Anchor DETR.",
    "en": "Learn Anchor DETR."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/anchor-detr/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "dino-detr",
  "gameId": "game-065",
  "name": {
    "vi": "DINO-DETR",
    "en": "DINO-DETR"
  },
  "desc": {
    "vi": "Học DINO-DETR.",
    "en": "Learn DINO-DETR."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/dino-detr/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "group-detr",
  "gameId": "game-066",
  "name": {
    "vi": "Group DETR",
    "en": "Group DETR"
  },
  "desc": {
    "vi": "Học Group DETR.",
    "en": "Learn Group DETR."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/group-detr/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "h-deformable",
  "gameId": "game-067",
  "name": {
    "vi": "H-Deformable",
    "en": "H-Deformable"
  },
  "desc": {
    "vi": "Học H-Deformable DETR.",
    "en": "Learn H-Deformable DETR."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/h-deformable/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "sparse-rcnn",
  "gameId": "game-068",
  "name": {
    "vi": "Sparse R-CNN",
    "en": "Sparse R-CNN"
  },
  "desc": {
    "vi": "Học Sparse R-CNN.",
    "en": "Learn Sparse R-CNN."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/sparse-rcnn/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "queryinst",
  "gameId": "game-069",
  "name": {
    "vi": "QueryInst",
    "en": "QueryInst"
  },
  "desc": {
    "vi": "Học QueryInst.",
    "en": "Learn QueryInst."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/queryinst/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "istrenet",
  "gameId": "game-070",
  "name": {
    "vi": "ISTRNet",
    "en": "ISTRNet"
  },
  "desc": {
    "vi": "Học ISTR.",
    "en": "Learn ISTR."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/istrenet/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "solo-seg",
  "gameId": "game-071",
  "name": {
    "vi": "SOLO Seg",
    "en": "SOLO Seg"
  },
  "desc": {
    "vi": "Học SOLO.",
    "en": "Learn SOLO."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/solo-seg/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "solov2-seg",
  "gameId": "game-072",
  "name": {
    "vi": "SOLOv2 Seg",
    "en": "SOLOv2 Seg"
  },
  "desc": {
    "vi": "Học SOLOv2.",
    "en": "Learn SOLOv2."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/solov2-seg/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "condinst",
  "gameId": "game-073",
  "name": {
    "vi": "CondInst",
    "en": "CondInst"
  },
  "desc": {
    "vi": "Học CondInst.",
    "en": "Learn CondInst."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/condinst/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "mask2former",
  "gameId": "game-074",
  "name": {
    "vi": "Mask2Former",
    "en": "Mask2Former"
  },
  "desc": {
    "vi": "Học Mask2Former.",
    "en": "Learn Mask2Former."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/mask2former/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "mask-dino",
  "gameId": "game-075",
  "name": {
    "vi": "Mask DINO",
    "en": "Mask DINO"
  },
  "desc": {
    "vi": "Học Mask DINO.",
    "en": "Learn Mask DINO."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/mask-dino/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "oneformer",
  "gameId": "game-076",
  "name": {
    "vi": "OneFormer",
    "en": "OneFormer"
  },
  "desc": {
    "vi": "Học OneFormer.",
    "en": "Learn OneFormer."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/oneformer/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "knet-seg",
  "gameId": "game-077",
  "name": {
    "vi": "K-Net Seg",
    "en": "K-Net Seg"
  },
  "desc": {
    "vi": "Học K-Net.",
    "en": "Learn K-Net."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/knet-seg/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "segformer",
  "gameId": "game-078",
  "name": {
    "vi": "SegFormer",
    "en": "SegFormer"
  },
  "desc": {
    "vi": "Học SegFormer.",
    "en": "Learn SegFormer."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/segformer/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "setr-seg",
  "gameId": "game-079",
  "name": {
    "vi": "SETR Seg",
    "en": "SETR Seg"
  },
  "desc": {
    "vi": "Học SETR.",
    "en": "Learn SETR."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/setr-seg/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "segmenter",
  "gameId": "game-080",
  "name": {
    "vi": "Segmenter",
    "en": "Segmenter"
  },
  "desc": {
    "vi": "Học Segmenter.",
    "en": "Learn Segmenter."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/segmenter/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "maskformer",
  "gameId": "game-081",
  "name": {
    "vi": "MaskFormer",
    "en": "MaskFormer"
  },
  "desc": {
    "vi": "Học MaskFormer.",
    "en": "Learn MaskFormer."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/maskformer/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "upernet",
  "gameId": "game-082",
  "name": {
    "vi": "UPerNet",
    "en": "UPerNet"
  },
  "desc": {
    "vi": "Học UPerNet.",
    "en": "Learn UPerNet."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/upernet/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "pspnet",
  "gameId": "game-083",
  "name": {
    "vi": "PSPNet",
    "en": "PSPNet"
  },
  "desc": {
    "vi": "Học PSPNet.",
    "en": "Learn PSPNet."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/pspnet/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "deeplab",
  "gameId": "game-084",
  "name": {
    "vi": "DeepLab",
    "en": "DeepLab"
  },
  "desc": {
    "vi": "Học DeepLab.",
    "en": "Learn DeepLab."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/deeplab/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "fcn-seg",
  "gameId": "game-085",
  "name": {
    "vi": "FCN Seg",
    "en": "FCN Seg"
  },
  "desc": {
    "vi": "Học FCN.",
    "en": "Learn FCN."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/fcn-seg/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "ocrnet",
  "gameId": "game-086",
  "name": {
    "vi": "OCRNet",
    "en": "OCRNet"
  },
  "desc": {
    "vi": "Học OCRNet.",
    "en": "Learn OCRNet."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/ocrnet/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "ccnet",
  "gameId": "game-087",
  "name": {
    "vi": "CCNet",
    "en": "CCNet"
  },
  "desc": {
    "vi": "Học CCNet.",
    "en": "Learn CCNet."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/ccnet/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "danet",
  "gameId": "game-088",
  "name": {
    "vi": "DANet",
    "en": "DANet"
  },
  "desc": {
    "vi": "Học DANet.",
    "en": "Learn DANet."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/danet/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "sem-fpn",
  "gameId": "game-089",
  "name": {
    "vi": "Sem FPN",
    "en": "Sem FPN"
  },
  "desc": {
    "vi": "Học Semantic FPN.",
    "en": "Learn Semantic FPN."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/sem-fpn/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "point-rend",
  "gameId": "game-090",
  "name": {
    "vi": "PointRend",
    "en": "PointRend"
  },
  "desc": {
    "vi": "Học PointRend.",
    "en": "Learn PointRend."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/point-rend/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "panoptic-fpn",
  "gameId": "game-091",
  "name": {
    "vi": "Panoptic FPN",
    "en": "Panoptic FPN"
  },
  "desc": {
    "vi": "Học Panoptic FPN.",
    "en": "Learn Panoptic FPN."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/panoptic-fpn/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "mask-scoring",
  "gameId": "game-092",
  "name": {
    "vi": "Mask Scoring",
    "en": "Mask Scoring"
  },
  "desc": {
    "vi": "Học Mask Scoring R-CNN.",
    "en": "Learn Mask Scoring."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/mask-scoring/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "scnet",
  "gameId": "game-093",
  "name": {
    "vi": "SCNet",
    "en": "SCNet"
  },
  "desc": {
    "vi": "Học SCNet.",
    "en": "Learn SCNet."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/scnet/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "polarmask",
  "gameId": "game-094",
  "name": {
    "vi": "PolarMask",
    "en": "PolarMask"
  },
  "desc": {
    "vi": "Học PolarMask.",
    "en": "Learn PolarMask."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/polarmask/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "boundary-iou",
  "gameId": "game-095",
  "name": {
    "vi": "Boundary IoU",
    "en": "Boundary IoU"
  },
  "desc": {
    "vi": "Học Boundary IoU.",
    "en": "Learn Boundary IoU."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/boundary-iou/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "dice-loss",
  "gameId": "game-096",
  "name": {
    "vi": "Dice Loss",
    "en": "Dice Loss"
  },
  "desc": {
    "vi": "Học Dice Loss.",
    "en": "Learn Dice Loss."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/dice-loss/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "focal-loss",
  "gameId": "game-097",
  "name": {
    "vi": "Focal Loss",
    "en": "Focal Loss"
  },
  "desc": {
    "vi": "Học Focal Loss.",
    "en": "Learn Focal Loss."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/focal-loss/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "giou-loss",
  "gameId": "game-098",
  "name": {
    "vi": "GIoU Loss",
    "en": "GIoU Loss"
  },
  "desc": {
    "vi": "Học GIoU Loss.",
    "en": "Learn GIoU Loss."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/giou-loss/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "diou-loss",
  "gameId": "game-099",
  "name": {
    "vi": "DIoU Loss",
    "en": "DIoU Loss"
  },
  "desc": {
    "vi": "Học DIoU Loss.",
    "en": "Learn DIoU Loss."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/diou-loss/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "ciou-loss",
  "gameId": "game-100",
  "name": {
    "vi": "CIoU Loss",
    "en": "CIoU Loss"
  },
  "desc": {
    "vi": "Học CIoU Loss.",
    "en": "Learn CIoU Loss."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/ciou-loss/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "poly-loss",
  "gameId": "game-101",
  "name": {
    "vi": "Poly Loss",
    "en": "Poly Loss"
  },
  "desc": {
    "vi": "Học Poly Loss.",
    "en": "Learn Poly Loss."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/poly-loss/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "quality-focal",
  "gameId": "game-102",
  "name": {
    "vi": "Quality Focal",
    "en": "Quality Focal"
  },
  "desc": {
    "vi": "Học Quality Focal Loss.",
    "en": "Learn Quality Focal Loss."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/quality-focal/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "varifocal-loss",
  "gameId": "game-103",
  "name": {
    "vi": "Varifocal Loss",
    "en": "Varifocal Loss"
  },
  "desc": {
    "vi": "Học Varifocal Loss.",
    "en": "Learn Varifocal Loss."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/varifocal-loss/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "distribution-focal",
  "gameId": "game-104",
  "name": {
    "vi": "Distribution Focal",
    "en": "Distribution Focal"
  },
  "desc": {
    "vi": "Học Distribution Focal Loss.",
    "en": "Learn Distribution Focal Loss."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/distribution-focal/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "dynamic-head",
  "gameId": "game-105",
  "name": {
    "vi": "Dynamic Head",
    "en": "Dynamic Head"
  },
  "desc": {
    "vi": "Học Dynamic Head.",
    "en": "Learn Dynamic Head."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/dynamic-head/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "dynamic-detr",
  "gameId": "game-106",
  "name": {
    "vi": "Dynamic DETR",
    "en": "Dynamic DETR"
  },
  "desc": {
    "vi": "Học Dynamic DETR.",
    "en": "Learn Dynamic DETR."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/dynamic-detr/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "efficient-detr",
  "gameId": "game-107",
  "name": {
    "vi": "Efficient DETR",
    "en": "Efficient DETR"
  },
  "desc": {
    "vi": "Học Efficient DETR.",
    "en": "Learn Efficient DETR."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/efficient-detr/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "fast-detr",
  "gameId": "game-108",
  "name": {
    "vi": "Fast DETR",
    "en": "Fast DETR"
  },
  "desc": {
    "vi": "Học Fast DETR.",
    "en": "Learn Fast DETR."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/fast-detr/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "smca-detr",
  "gameId": "game-109",
  "name": {
    "vi": "SMCA DETR",
    "en": "SMCA DETR"
  },
  "desc": {
    "vi": "Học SMCA DETR.",
    "en": "Learn SMCA DETR."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/smca-detr/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "tsp-detr",
  "gameId": "game-110",
  "name": {
    "vi": "TSP DETR",
    "en": "TSP DETR"
  },
  "desc": {
    "vi": "Học TSP DETR.",
    "en": "Learn TSP DETR."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/tsp-detr/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "adam-optimizer",
  "gameId": "game-111",
  "name": {
    "vi": "Adam Optimizer",
    "en": "Adam Optimizer"
  },
  "desc": {
    "vi": "Học Adam optimizer.",
    "en": "Learn Adam optimizer."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/adam-optimizer/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "adamw-optimizer",
  "gameId": "game-112",
  "name": {
    "vi": "AdamW Optimizer",
    "en": "AdamW Optimizer"
  },
  "desc": {
    "vi": "Học AdamW optimizer.",
    "en": "Learn AdamW optimizer."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/adamw-optimizer/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "sgd-optimizer",
  "gameId": "game-113",
  "name": {
    "vi": "SGD Optimizer",
    "en": "SGD Optimizer"
  },
  "desc": {
    "vi": "Học SGD optimizer.",
    "en": "Learn SGD optimizer."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/sgd-optimizer/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "rmsprop-optimizer",
  "gameId": "game-114",
  "name": {
    "vi": "RMSprop Optimizer",
    "en": "RMSprop Optimizer"
  },
  "desc": {
    "vi": "Học RMSprop optimizer.",
    "en": "Learn RMSprop optimizer."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/rmsprop-optimizer/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "adagrad-optimizer",
  "gameId": "game-115",
  "name": {
    "vi": "Adagrad Optimizer",
    "en": "Adagrad Optimizer"
  },
  "desc": {
    "vi": "Học Adagrad optimizer.",
    "en": "Learn Adagrad optimizer."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/adagrad-optimizer/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "adadelta-optimizer",
  "gameId": "game-116",
  "name": {
    "vi": "Adadelta Optimizer",
    "en": "Adadelta Optimizer"
  },
  "desc": {
    "vi": "Học Adadelta optimizer.",
    "en": "Learn Adadelta optimizer."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/adadelta-optimizer/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "nadam-optimizer",
  "gameId": "game-117",
  "name": {
    "vi": "Nadam Optimizer",
    "en": "Nadam Optimizer"
  },
  "desc": {
    "vi": "Học Nadam optimizer.",
    "en": "Learn Nadam optimizer."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/nadam-optimizer/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "radam-optimizer",
  "gameId": "game-118",
  "name": {
    "vi": "RAdam Optimizer",
    "en": "RAdam Optimizer"
  },
  "desc": {
    "vi": "Học RAdam optimizer.",
    "en": "Learn RAdam optimizer."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/radam-optimizer/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "lamb-optimizer",
  "gameId": "game-119",
  "name": {
    "vi": "LAMB Optimizer",
    "en": "LAMB Optimizer"
  },
  "desc": {
    "vi": "Học LAMB optimizer.",
    "en": "Learn LAMB optimizer."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/lamb-optimizer/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "lion-optimizer",
  "gameId": "game-120",
  "name": {
    "vi": "Lion Optimizer",
    "en": "Lion Optimizer"
  },
  "desc": {
    "vi": "Học Lion optimizer.",
    "en": "Learn Lion optimizer."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/lion-optimizer/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "shampoo-optimizer",
  "gameId": "game-121",
  "name": {
    "vi": "Shampoo Optimizer",
    "en": "Shampoo Optimizer"
  },
  "desc": {
    "vi": "Học Shampoo optimizer.",
    "en": "Learn Shampoo optimizer."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/shampoo-optimizer/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "lars-optimizer",
  "gameId": "game-122",
  "name": {
    "vi": "LARS Optimizer",
    "en": "LARS Optimizer"
  },
  "desc": {
    "vi": "Học LARS optimizer.",
    "en": "Learn LARS optimizer."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/lars-optimizer/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "schedule-free",
  "gameId": "game-123",
  "name": {
    "vi": "Schedule Free",
    "en": "Schedule Free"
  },
  "desc": {
    "vi": "Học schedule-free optimizer.",
    "en": "Learn schedule-free optimizer."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/schedule-free/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "cosine-schedule",
  "gameId": "game-124",
  "name": {
    "vi": "Cosine Schedule",
    "en": "Cosine Schedule"
  },
  "desc": {
    "vi": "Học cosine learning rate schedule.",
    "en": "Learn cosine schedule."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/cosine-schedule/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "warmup-schedule",
  "gameId": "game-125",
  "name": {
    "vi": "Warmup Schedule",
    "en": "Warmup Schedule"
  },
  "desc": {
    "vi": "Học warmup schedule.",
    "en": "Learn warmup schedule."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/warmup-schedule/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "polynomial-schedule",
  "gameId": "game-126",
  "name": {
    "vi": "Polynomial Schedule",
    "en": "Polynomial Schedule"
  },
  "desc": {
    "vi": "Học polynomial schedule.",
    "en": "Learn polynomial schedule."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/polynomial-schedule/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "exponential-schedule",
  "gameId": "game-127",
  "name": {
    "vi": "Exponential Schedule",
    "en": "Exponential Schedule"
  },
  "desc": {
    "vi": "Học exponential schedule.",
    "en": "Learn exponential schedule."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/exponential-schedule/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "plateau-schedule",
  "gameId": "game-128",
  "name": {
    "vi": "Plateau Schedule",
    "en": "Plateau Schedule"
  },
  "desc": {
    "vi": "Học reduce on plateau.",
    "en": "Learn reduce on plateau."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/plateau-schedule/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "cyclical-schedule",
  "gameId": "game-129",
  "name": {
    "vi": "Cyclical Schedule",
    "en": "Cyclical Schedule"
  },
  "desc": {
    "vi": "Học cyclical learning rates.",
    "en": "Learn cyclical LR."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/cyclical-schedule/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "1cycle-schedule",
  "gameId": "game-130",
  "name": {
    "vi": "1Cycle Schedule",
    "en": "1Cycle Schedule"
  },
  "desc": {
    "vi": "Học 1Cycle policy.",
    "en": "Learn 1Cycle policy."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/1cycle-schedule/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "super-convergence",
  "gameId": "game-131",
  "name": {
    "vi": "Super Convergence",
    "en": "Super Convergence"
  },
  "desc": {
    "vi": "Học super convergence.",
    "en": "Learn super convergence."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/super-convergence/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "lookahead-optimizer",
  "gameId": "game-132",
  "name": {
    "vi": "Lookahead Optimizer",
    "en": "Lookahead Optimizer"
  },
  "desc": {
    "vi": "Học Lookahead optimizer.",
    "en": "Learn Lookahead optimizer."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/lookahead-optimizer/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "sharpness-aware",
  "gameId": "game-133",
  "name": {
    "vi": "Sharpness Aware",
    "en": "Sharpness Aware"
  },
  "desc": {
    "vi": "Học SAM optimizer.",
    "en": "Learn SAM optimizer."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/sharpness-aware/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "gsam-optimizer",
  "gameId": "game-134",
  "name": {
    "vi": "GSAM Optimizer",
    "en": "GSAM Optimizer"
  },
  "desc": {
    "vi": "Học GSAM optimizer.",
    "en": "Learn GSAM optimizer."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/gsam-optimizer/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "esam-optimizer",
  "gameId": "game-135",
  "name": {
    "vi": "ESAM Optimizer",
    "en": "ESAM Optimizer"
  },
  "desc": {
    "vi": "Học ESAM optimizer.",
    "en": "Learn ESAM optimizer."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/esam-optimizer/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "fisher-sam",
  "gameId": "game-136",
  "name": {
    "vi": "Fisher SAM",
    "en": "Fisher SAM"
  },
  "desc": {
    "vi": "Học Fisher SAM.",
    "en": "Learn Fisher SAM."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/fisher-sam/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "asam-optimizer",
  "gameId": "game-137",
  "name": {
    "vi": "ASAM Optimizer",
    "en": "ASAM Optimizer"
  },
  "desc": {
    "vi": "Học ASAM optimizer.",
    "en": "Learn ASAM optimizer."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/asam-optimizer/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "bsam-optimizer",
  "gameId": "game-138",
  "name": {
    "vi": "BSAM Optimizer",
    "en": "BSAM Optimizer"
  },
  "desc": {
    "vi": "Học BSAM optimizer.",
    "en": "Learn BSAM optimizer."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/bsam-optimizer/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "esgd-optimizer",
  "gameId": "game-139",
  "name": {
    "vi": "eSGD Optimizer",
    "en": "eSGD Optimizer"
  },
  "desc": {
    "vi": "Học eSGD optimizer.",
    "en": "Learn eSGD optimizer."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/esgd-optimizer/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "signsgd",
  "gameId": "game-140",
  "name": {
    "vi": "SignSGD",
    "en": "SignSGD"
  },
  "desc": {
    "vi": "Học SignSGD.",
    "en": "Learn SignSGD."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/signsgd/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "stoch-signsgd",
  "gameId": "game-141",
  "name": {
    "vi": "Stoch SignSGD",
    "en": "Stoch SignSGD"
  },
  "desc": {
    "vi": "Học Stochastic SignSGD.",
    "en": "Learn Stochastic SignSGD."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/stoch-signsgd/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "error-feedback",
  "gameId": "game-142",
  "name": {
    "vi": "Error Feedback",
    "en": "Error Feedback"
  },
  "desc": {
    "vi": "Học error feedback SGD.",
    "en": "Learn error feedback SGD."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/error-feedback/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "double-squeeze",
  "gameId": "game-143",
  "name": {
    "vi": "Double Squeeze",
    "en": "Double Squeeze"
  },
  "desc": {
    "vi": "Học double squeeze.",
    "en": "Learn double squeeze."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/double-squeeze/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "local-sgd",
  "gameId": "game-144",
  "name": {
    "vi": "Local SGD",
    "en": "Local SGD"
  },
  "desc": {
    "vi": "Học local SGD.",
    "en": "Learn local SGD."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/local-sgd/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "fedprox",
  "gameId": "game-145",
  "name": {
    "vi": "FedProx",
    "en": "FedProx"
  },
  "desc": {
    "vi": "Học FedProx.",
    "en": "Learn FedProx."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/fedprox/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "fednova",
  "gameId": "game-146",
  "name": {
    "vi": "FedNova",
    "en": "FedNova"
  },
  "desc": {
    "vi": "Học FedNova.",
    "en": "Learn FedNova."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/fednova/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "scaffold",
  "gameId": "game-147",
  "name": {
    "vi": "SCAFFOLD",
    "en": "SCAFFOLD"
  },
  "desc": {
    "vi": "Học SCAFFOLD.",
    "en": "Learn SCAFFOLD."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/scaffold/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "fedopt",
  "gameId": "game-148",
  "name": {
    "vi": "FedOpt",
    "en": "FedOpt"
  },
  "desc": {
    "vi": "Học FedOpt.",
    "en": "Learn FedOpt."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/fedopt/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "mime",
  "gameId": "game-149",
  "name": {
    "vi": "Mime",
    "en": "Mime"
  },
  "desc": {
    "vi": "Học Mime.",
    "en": "Learn Mime."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/mime/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "fedcm",
  "gameId": "game-150",
  "name": {
    "vi": "FedCM",
    "en": "FedCM"
  },
  "desc": {
    "vi": "Học FedCM.",
    "en": "Learn FedCM."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/fedcm/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "mobilenetv2",
  "gameId": "game-001",
  "name": {
    "vi": "MobileNetV2",
    "en": "MobileNetV2"
  },
  "desc": {
    "vi": "Học MobileNetV2.",
    "en": "Learn MobileNetV2."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/mobilenetv2/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "mobilenetv3",
  "gameId": "game-002",
  "name": {
    "vi": "MobileNetV3",
    "en": "MobileNetV3"
  },
  "desc": {
    "vi": "Học MobileNetV3.",
    "en": "Learn MobileNetV3."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/mobilenetv3/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "ghostnet",
  "gameId": "game-003",
  "name": {
    "vi": "GhostNet",
    "en": "GhostNet"
  },
  "desc": {
    "vi": "Học GhostNet.",
    "en": "Learn GhostNet."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/ghostnet/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "shufflenet",
  "gameId": "game-004",
  "name": {
    "vi": "ShuffleNet",
    "en": "ShuffleNet"
  },
  "desc": {
    "vi": "Học ShuffleNet.",
    "en": "Learn ShuffleNet."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/shufflenet/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "squeezenet",
  "gameId": "game-005",
  "name": {
    "vi": "SqueezeNet",
    "en": "SqueezeNet"
  },
  "desc": {
    "vi": "Học SqueezeNet.",
    "en": "Learn SqueezeNet."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/squeezenet/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "mnasnet",
  "gameId": "game-006",
  "name": {
    "vi": "MNASNet",
    "en": "MNASNet"
  },
  "desc": {
    "vi": "Học MNASNet.",
    "en": "Learn MNASNet."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/mnasnet/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "fbnet",
  "gameId": "game-007",
  "name": {
    "vi": "FBNet",
    "en": "FBNet"
  },
  "desc": {
    "vi": "Học FBNet.",
    "en": "Learn FBNet."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/fbnet/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "proxylessnas",
  "gameId": "game-008",
  "name": {
    "vi": "ProxylessNAS",
    "en": "ProxylessNAS"
  },
  "desc": {
    "vi": "Học ProxylessNAS.",
    "en": "Learn ProxylessNAS."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/proxylessnas/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "efficientnetv2",
  "gameId": "game-009",
  "name": {
    "vi": "EfficientNetV2",
    "en": "EfficientNetV2"
  },
  "desc": {
    "vi": "Học EfficientNetV2.",
    "en": "Learn EfficientNetV2."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/efficientnetv2/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "regnet",
  "gameId": "game-010",
  "name": {
    "vi": "RegNet",
    "en": "RegNet"
  },
  "desc": {
    "vi": "Học RegNet.",
    "en": "Learn RegNet."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/regnet/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "repvgg",
  "gameId": "game-011",
  "name": {
    "vi": "RepVGG",
    "en": "RepVGG"
  },
  "desc": {
    "vi": "Học RepVGG.",
    "en": "Learn RepVGG."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/repvgg/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "vanilla-cnn",
  "gameId": "game-012",
  "name": {
    "vi": "Vanilla CNN",
    "en": "Vanilla CNN"
  },
  "desc": {
    "vi": "Học vanilla CNN.",
    "en": "Learn vanilla CNN."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/vanilla-cnn/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "alexnet",
  "gameId": "game-013",
  "name": {
    "vi": "AlexNet",
    "en": "AlexNet"
  },
  "desc": {
    "vi": "Học AlexNet.",
    "en": "Learn AlexNet."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/alexnet/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "vggnet",
  "gameId": "game-014",
  "name": {
    "vi": "VGGNet",
    "en": "VGGNet"
  },
  "desc": {
    "vi": "Học VGGNet.",
    "en": "Learn VGGNet."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/vggnet/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "zfnet",
  "gameId": "game-015",
  "name": {
    "vi": "ZFNet",
    "en": "ZFNet"
  },
  "desc": {
    "vi": "Học ZFNet.",
    "en": "Learn ZFNet."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/zfnet/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "googlenet",
  "gameId": "game-016",
  "name": {
    "vi": "GoogLeNet",
    "en": "GoogLeNet"
  },
  "desc": {
    "vi": "Học GoogLeNet.",
    "en": "Learn GoogLeNet."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/googlenet/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "resnext",
  "gameId": "game-017",
  "name": {
    "vi": "ResNeXt",
    "en": "ResNeXt"
  },
  "desc": {
    "vi": "Học ResNeXt.",
    "en": "Learn ResNeXt."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/resnext/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "senet",
  "gameId": "game-018",
  "name": {
    "vi": "SENet",
    "en": "SENet"
  },
  "desc": {
    "vi": "Học SENet.",
    "en": "Learn SENet."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/senet/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "sknet",
  "gameId": "game-019",
  "name": {
    "vi": "SKNet",
    "en": "SKNet"
  },
  "desc": {
    "vi": "Học SKNet.",
    "en": "Learn SKNet."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/sknet/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "cbam",
  "gameId": "game-020",
  "name": {
    "vi": "CBAM",
    "en": "CBAM"
  },
  "desc": {
    "vi": "Học CBAM.",
    "en": "Learn CBAM."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/cbam/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "ecanet",
  "gameId": "game-021",
  "name": {
    "vi": "ECANet",
    "en": "ECANet"
  },
  "desc": {
    "vi": "Học ECANet.",
    "en": "Learn ECANet."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/ecanet/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "coordatt",
  "gameId": "game-022",
  "name": {
    "vi": "CoordAtt",
    "en": "CoordAtt"
  },
  "desc": {
    "vi": "Học CoordAtt.",
    "en": "Learn CoordAtt."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/coordatt/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "bam",
  "gameId": "game-023",
  "name": {
    "vi": "BAM",
    "en": "BAM"
  },
  "desc": {
    "vi": "Học BAM.",
    "en": "Learn BAM."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/bam/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "dual-attention",
  "gameId": "game-024",
  "name": {
    "vi": "Dual Attention",
    "en": "Dual Attention"
  },
  "desc": {
    "vi": "Học Dual Attention.",
    "en": "Learn Dual Attention."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/dual-attention/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "criss-cross",
  "gameId": "game-025",
  "name": {
    "vi": "Criss-Cross",
    "en": "Criss-Cross"
  },
  "desc": {
    "vi": "Học Criss-Cross Attention.",
    "en": "Learn Criss-Cross Attention."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/criss-cross/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "axial-attention",
  "gameId": "game-026",
  "name": {
    "vi": "Axial Attention",
    "en": "Axial Attention"
  },
  "desc": {
    "vi": "Học Axial Attention.",
    "en": "Learn Axial Attention."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/axial-attention/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "stand-alone",
  "gameId": "game-027",
  "name": {
    "vi": "Stand-Alone",
    "en": "Stand-Alone"
  },
  "desc": {
    "vi": "Học Stand-Alone Self-Attention.",
    "en": "Learn Stand-Alone Self-Attention."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/stand-alone/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "lambda-network",
  "gameId": "game-028",
  "name": {
    "vi": "Lambda Network",
    "en": "Lambda Network"
  },
  "desc": {
    "vi": "Học LambdaNetworks.",
    "en": "Learn LambdaNetworks."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/lambda-network/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "involution",
  "gameId": "game-029",
  "name": {
    "vi": "Involution",
    "en": "Involution"
  },
  "desc": {
    "vi": "Học Involution.",
    "en": "Learn Involution."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/involution/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "dynamic-conv",
  "gameId": "game-030",
  "name": {
    "vi": "Dynamic Conv",
    "en": "Dynamic Conv"
  },
  "desc": {
    "vi": "Học Dynamic Convolution.",
    "en": "Learn Dynamic Convolution."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/dynamic-conv/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "condconv",
  "gameId": "game-031",
  "name": {
    "vi": "CondConv",
    "en": "CondConv"
  },
  "desc": {
    "vi": "Học CondConv.",
    "en": "Learn CondConv."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/condconv/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "mixconv",
  "gameId": "game-032",
  "name": {
    "vi": "MixConv",
    "en": "MixConv"
  },
  "desc": {
    "vi": "Học MixConv.",
    "en": "Learn MixConv."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/mixconv/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "depthwise-sep",
  "gameId": "game-033",
  "name": {
    "vi": "Depthwise Sep",
    "en": "Depthwise Sep"
  },
  "desc": {
    "vi": "Học Depthwise Separable Convolution.",
    "en": "Learn Depthwise Separable Conv."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/depthwise-sep/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "grouped-conv",
  "gameId": "game-034",
  "name": {
    "vi": "Grouped Conv",
    "en": "Grouped Conv"
  },
  "desc": {
    "vi": "Học Grouped Convolution.",
    "en": "Learn Grouped Convolution."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/grouped-conv/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "dilated-conv",
  "gameId": "game-035",
  "name": {
    "vi": "Dilated Conv",
    "en": "Dilated Conv"
  },
  "desc": {
    "vi": "Học Dilated Convolution.",
    "en": "Learn Dilated Convolution."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/dilated-conv/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "deformable-conv",
  "gameId": "game-036",
  "name": {
    "vi": "Deformable Conv",
    "en": "Deformable Conv"
  },
  "desc": {
    "vi": "Học Deformable Convolution.",
    "en": "Learn Deformable Convolution."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/deformable-conv/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "active-rotate",
  "gameId": "game-037",
  "name": {
    "vi": "Active Rotate",
    "en": "Active Rotate"
  },
  "desc": {
    "vi": "Học Active Rotating Filters.",
    "en": "Learn Active Rotating Filters."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/active-rotate/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "octave-conv",
  "gameId": "game-038",
  "name": {
    "vi": "Octave Conv",
    "en": "Octave Conv"
  },
  "desc": {
    "vi": "Học Octave Convolution.",
    "en": "Learn Octave Convolution."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/octave-conv/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "hetconv",
  "gameId": "game-039",
  "name": {
    "vi": "HetConv",
    "en": "HetConv"
  },
  "desc": {
    "vi": "Học HetConv.",
    "en": "Learn HetConv."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/hetconv/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "acnet",
  "gameId": "game-040",
  "name": {
    "vi": "ACNet",
    "en": "ACNet"
  },
  "desc": {
    "vi": "Học ACNet.",
    "en": "Learn ACNet."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/acnet/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "repvgg-a0",
  "gameId": "game-041",
  "name": {
    "vi": "RepVGG-A0",
    "en": "RepVGG-A0"
  },
  "desc": {
    "vi": "Học RepVGG-A0.",
    "en": "Learn RepVGG-A0."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/repvgg-a0/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "repvgg-a1",
  "gameId": "game-042",
  "name": {
    "vi": "RepVGG-A1",
    "en": "RepVGG-A1"
  },
  "desc": {
    "vi": "Học RepVGG-A1.",
    "en": "Learn RepVGG-A1."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/repvgg-a1/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "repvgg-a2",
  "gameId": "game-043",
  "name": {
    "vi": "RepVGG-A2",
    "en": "RepVGG-A2"
  },
  "desc": {
    "vi": "Học RepVGG-A2.",
    "en": "Learn RepVGG-A2."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/repvgg-a2/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "repvgg-b0",
  "gameId": "game-044",
  "name": {
    "vi": "RepVGG-B0",
    "en": "RepVGG-B0"
  },
  "desc": {
    "vi": "Học RepVGG-B0.",
    "en": "Learn RepVGG-B0."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/repvgg-b0/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "repvgg-b1",
  "gameId": "game-045",
  "name": {
    "vi": "RepVGG-B1",
    "en": "RepVGG-B1"
  },
  "desc": {
    "vi": "Học RepVGG-B1.",
    "en": "Learn RepVGG-B1."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/repvgg-b1/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "repvgg-b2",
  "gameId": "game-046",
  "name": {
    "vi": "RepVGG-B2",
    "en": "RepVGG-B2"
  },
  "desc": {
    "vi": "Học RepVGG-B2.",
    "en": "Learn RepVGG-B2."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/repvgg-b2/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "repvgg-b3",
  "gameId": "game-047",
  "name": {
    "vi": "RepVGG-B3",
    "en": "RepVGG-B3"
  },
  "desc": {
    "vi": "Học RepVGG-B3.",
    "en": "Learn RepVGG-B3."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/repvgg-b3/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "res2net",
  "gameId": "game-048",
  "name": {
    "vi": "Res2Net",
    "en": "Res2Net"
  },
  "desc": {
    "vi": "Học Res2Net.",
    "en": "Learn Res2Net."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/res2net/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "res2net-v1b",
  "gameId": "game-049",
  "name": {
    "vi": "Res2Net-v1b",
    "en": "Res2Net-v1b"
  },
  "desc": {
    "vi": "Học Res2Net-v1b.",
    "en": "Learn Res2Net-v1b."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/res2net-v1b/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "hrnet",
  "gameId": "game-050",
  "name": {
    "vi": "HRNet",
    "en": "HRNet"
  },
  "desc": {
    "vi": "Học HRNet.",
    "en": "Learn HRNet."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/hrnet/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "hrnetv2",
  "gameId": "game-051",
  "name": {
    "vi": "HRNetV2",
    "en": "HRNetV2"
  },
  "desc": {
    "vi": "Học HRNetV2.",
    "en": "Learn HRNetV2."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/hrnetv2/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "hrnetv2p",
  "gameId": "game-052",
  "name": {
    "vi": "HRNetV2p",
    "en": "HRNetV2p"
  },
  "desc": {
    "vi": "Học HRNetV2p.",
    "en": "Learn HRNetV2p."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/hrnetv2p/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "darknet",
  "gameId": "game-053",
  "name": {
    "vi": "DarkNet",
    "en": "DarkNet"
  },
  "desc": {
    "vi": "Học DarkNet.",
    "en": "Learn DarkNet."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/darknet/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "cspdarknet",
  "gameId": "game-054",
  "name": {
    "vi": "CSPDarkNet",
    "en": "CSPDarkNet"
  },
  "desc": {
    "vi": "Học CSPDarkNet.",
    "en": "Learn CSPDarkNet."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/cspdarknet/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "yolov3",
  "gameId": "game-055",
  "name": {
    "vi": "YOLOv3",
    "en": "YOLOv3"
  },
  "desc": {
    "vi": "Học YOLOv3.",
    "en": "Learn YOLOv3."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/yolov3/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "yolov4",
  "gameId": "game-056",
  "name": {
    "vi": "YOLOv4",
    "en": "YOLOv4"
  },
  "desc": {
    "vi": "Học YOLOv4.",
    "en": "Learn YOLOv4."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/yolov4/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "yolov5",
  "gameId": "game-057",
  "name": {
    "vi": "YOLOv5",
    "en": "YOLOv5"
  },
  "desc": {
    "vi": "Học YOLOv5.",
    "en": "Learn YOLOv5."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/yolov5/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "yolov6",
  "gameId": "game-058",
  "name": {
    "vi": "YOLOv6",
    "en": "YOLOv6"
  },
  "desc": {
    "vi": "Học YOLOv6.",
    "en": "Learn YOLOv6."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/yolov6/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "yolov7",
  "gameId": "game-059",
  "name": {
    "vi": "YOLOv7",
    "en": "YOLOv7"
  },
  "desc": {
    "vi": "Học YOLOv7.",
    "en": "Learn YOLOv7."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/yolov7/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "yolov8",
  "gameId": "game-060",
  "name": {
    "vi": "YOLOv8",
    "en": "YOLOv8"
  },
  "desc": {
    "vi": "Học YOLOv8.",
    "en": "Learn YOLOv8."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/yolov8/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "yolov9",
  "gameId": "game-061",
  "name": {
    "vi": "YOLOv9",
    "en": "YOLOv9"
  },
  "desc": {
    "vi": "Học YOLOv9.",
    "en": "Learn YOLOv9."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/yolov9/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "yolov10",
  "gameId": "game-062",
  "name": {
    "vi": "YOLOv10",
    "en": "YOLOv10"
  },
  "desc": {
    "vi": "Học YOLOv10.",
    "en": "Learn YOLOv10."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/yolov10/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "pp-yolo",
  "gameId": "game-063",
  "name": {
    "vi": "PP-YOLO",
    "en": "PP-YOLO"
  },
  "desc": {
    "vi": "Học PP-YOLO.",
    "en": "Learn PP-YOLO."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/pp-yolo/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "pp-yoloe",
  "gameId": "game-064",
  "name": {
    "vi": "PP-YOLOE",
    "en": "PP-YOLOE"
  },
  "desc": {
    "vi": "Học PP-YOLOE.",
    "en": "Learn PP-YOLOE."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/pp-yoloe/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "ppyoloe-plus",
  "gameId": "game-065",
  "name": {
    "vi": "PPYOLOE+",
    "en": "PPYOLOE+"
  },
  "desc": {
    "vi": "Học PPYOLOE+.",
    "en": "Learn PPYOLOE+."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/ppyoloe-plus/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "rtmdet",
  "gameId": "game-066",
  "name": {
    "vi": "RTMDet",
    "en": "RTMDet"
  },
  "desc": {
    "vi": "Học RTMDet.",
    "en": "Learn RTMDet."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/rtmdet/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "detectors",
  "gameId": "game-067",
  "name": {
    "vi": "DetectoRS",
    "en": "DetectoRS"
  },
  "desc": {
    "vi": "Học DetectoRS.",
    "en": "Learn DetectoRS."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/detectors/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "htc",
  "gameId": "game-068",
  "name": {
    "vi": "HTC",
    "en": "HTC"
  },
  "desc": {
    "vi": "Học HTC.",
    "en": "Learn HTC."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/htc/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "scnet-detect",
  "gameId": "game-069",
  "name": {
    "vi": "SCNet Detect",
    "en": "SCNet Detect"
  },
  "desc": {
    "vi": "Học SCNet detection.",
    "en": "Learn SCNet detection."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/scnet-detect/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "gcnet",
  "gameId": "game-070",
  "name": {
    "vi": "GCNet",
    "en": "GCNet"
  },
  "desc": {
    "vi": "Học GCNet.",
    "en": "Learn GCNet."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/gcnet/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "empirical-attention",
  "gameId": "game-071",
  "name": {
    "vi": "Empirical Attention",
    "en": "Empirical Attention"
  },
  "desc": {
    "vi": "Học Empirical Attention.",
    "en": "Learn Empirical Attention."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/empirical-attention/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "nonlocal-net",
  "gameId": "game-072",
  "name": {
    "vi": "NonLocal Net",
    "en": "NonLocal Net"
  },
  "desc": {
    "vi": "Học NonLocal Net.",
    "en": "Learn NonLocal Net."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/nonlocal-net/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "gnnet",
  "gameId": "game-073",
  "name": {
    "vi": "GNNET",
    "en": "GNNET"
  },
  "desc": {
    "vi": "Học GNNET.",
    "en": "Learn GNNET."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/gnnet/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "dcnv2",
  "gameId": "game-074",
  "name": {
    "vi": "DCNv2",
    "en": "DCNv2"
  },
  "desc": {
    "vi": "Học DCNv2.",
    "en": "Learn DCNv2."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/dcnv2/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "dcnv3",
  "gameId": "game-075",
  "name": {
    "vi": "DCNv3",
    "en": "DCNv3"
  },
  "desc": {
    "vi": "Học DCNv3.",
    "en": "Learn DCNv3."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/dcnv3/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "poolformer-v2",
  "gameId": "game-076",
  "name": {
    "vi": "PoolFormer V2",
    "en": "PoolFormer V2"
  },
  "desc": {
    "vi": "Học PoolFormer V2.",
    "en": "Learn PoolFormer V2."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/poolformer-v2/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "uniformer",
  "gameId": "game-077",
  "name": {
    "vi": "UniFormer",
    "en": "UniFormer"
  },
  "desc": {
    "vi": "Học UniFormer.",
    "en": "Learn UniFormer."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/uniformer/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "uniformer-v2",
  "gameId": "game-078",
  "name": {
    "vi": "UniFormer V2",
    "en": "UniFormer V2"
  },
  "desc": {
    "vi": "Học UniFormer V2.",
    "en": "Learn UniFormer V2."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/uniformer-v2/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "maxvit",
  "gameId": "game-079",
  "name": {
    "vi": "MaxViT",
    "en": "MaxViT"
  },
  "desc": {
    "vi": "Học MaxViT.",
    "en": "Learn MaxViT."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/maxvit/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "coatnet",
  "gameId": "game-080",
  "name": {
    "vi": "CoaTNet",
    "en": "CoaTNet"
  },
  "desc": {
    "vi": "Học CoaTNet.",
    "en": "Learn CoaTNet."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/coatnet/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "crossvit",
  "gameId": "game-081",
  "name": {
    "vi": "CrossViT",
    "en": "CrossViT"
  },
  "desc": {
    "vi": "Học CrossViT.",
    "en": "Learn CrossViT."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/crossvit/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "pit",
  "gameId": "game-082",
  "name": {
    "vi": "PiT",
    "en": "PiT"
  },
  "desc": {
    "vi": "Học Pooling-based Vision Transformer.",
    "en": "Learn PiT."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/pit/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "cvt",
  "gameId": "game-083",
  "name": {
    "vi": "CvT",
    "en": "CvT"
  },
  "desc": {
    "vi": "Học Convolutional Vision Transformer.",
    "en": "Learn CvT."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/cvt/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "cvt-w24",
  "gameId": "game-084",
  "name": {
    "vi": "CvT-W24",
    "en": "CvT-W24"
  },
  "desc": {
    "vi": "Học CvT-W24.",
    "en": "Learn CvT-W24."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/cvt-w24/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "levit",
  "gameId": "game-085",
  "name": {
    "vi": "LeViT",
    "en": "LeViT"
  },
  "desc": {
    "vi": "Học LeViT.",
    "en": "Learn LeViT."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/levit/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "mobilevit",
  "gameId": "game-086",
  "name": {
    "vi": "MobileViT",
    "en": "MobileViT"
  },
  "desc": {
    "vi": "Học MobileViT.",
    "en": "Learn MobileViT."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/mobilevit/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "mobilevit-v2",
  "gameId": "game-087",
  "name": {
    "vi": "MobileViT V2",
    "en": "MobileViT V2"
  },
  "desc": {
    "vi": "Học MobileViT V2.",
    "en": "Learn MobileViT V2."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/mobilevit-v2/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "mobilevit-v3",
  "gameId": "game-088",
  "name": {
    "vi": "MobileViT V3",
    "en": "MobileViT V3"
  },
  "desc": {
    "vi": "Học MobileViT V3.",
    "en": "Learn MobileViT V3."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/mobilevit-v3/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "efficientformer",
  "gameId": "game-089",
  "name": {
    "vi": "EfficientFormer",
    "en": "EfficientFormer"
  },
  "desc": {
    "vi": "Học EfficientFormer.",
    "en": "Learn EfficientFormer."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/efficientformer/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "efficientformer-v2",
  "gameId": "game-090",
  "name": {
    "vi": "EfficientFormer V2",
    "en": "EfficientFormer V2"
  },
  "desc": {
    "vi": "Học EfficientFormer V2.",
    "en": "Learn EfficientFormer V2."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/efficientformer-v2/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "swiftformer",
  "gameId": "game-091",
  "name": {
    "vi": "SwiftFormer",
    "en": "SwiftFormer"
  },
  "desc": {
    "vi": "Học SwiftFormer.",
    "en": "Learn SwiftFormer."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/swiftformer/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "edgenext",
  "gameId": "game-092",
  "name": {
    "vi": "EdgeNeXt",
    "en": "EdgeNeXt"
  },
  "desc": {
    "vi": "Học EdgeNeXt.",
    "en": "Learn EdgeNeXt."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/edgenext/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "nextvit",
  "gameId": "game-093",
  "name": {
    "vi": "NextViT",
    "en": "NextViT"
  },
  "desc": {
    "vi": "Học NextViT.",
    "en": "Learn NextViT."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/nextvit/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "fastvit",
  "gameId": "game-094",
  "name": {
    "vi": "FastViT",
    "en": "FastViT"
  },
  "desc": {
    "vi": "Học FastViT.",
    "en": "Learn FastViT."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/fastvit/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "replknet",
  "gameId": "game-095",
  "name": {
    "vi": "RepLKNet",
    "en": "RepLKNet"
  },
  "desc": {
    "vi": "Học RepLKNet.",
    "en": "Learn RepLKNet."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/replknet/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "slak",
  "gameId": "game-096",
  "name": {
    "vi": "SLaK",
    "en": "SLaK"
  },
  "desc": {
    "vi": "Học SLaK.",
    "en": "Learn SLaK."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/slak/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "hornet",
  "gameId": "game-097",
  "name": {
    "vi": "HorNet",
    "en": "HorNet"
  },
  "desc": {
    "vi": "Học HorNet.",
    "en": "Learn HorNet."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/hornet/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "horformer",
  "gameId": "game-098",
  "name": {
    "vi": "HorFormer",
    "en": "HorFormer"
  },
  "desc": {
    "vi": "Học HorFormer.",
    "en": "Learn HorFormer."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/horformer/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "internimage",
  "gameId": "game-099",
  "name": {
    "vi": "InternImage",
    "en": "InternImage"
  },
  "desc": {
    "vi": "Học InternImage.",
    "en": "Learn InternImage."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/internimage/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "van",
  "gameId": "game-100",
  "name": {
    "vi": "VAN",
    "en": "VAN"
  },
  "desc": {
    "vi": "Học Visual Attention Network.",
    "en": "Learn VAN."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/van/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "pvt",
  "gameId": "game-101",
  "name": {
    "vi": "PVT",
    "en": "PVT"
  },
  "desc": {
    "vi": "Học Pyramid Vision Transformer.",
    "en": "Learn PVT."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/pvt/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "pvt-v2",
  "gameId": "game-102",
  "name": {
    "vi": "PVTv2",
    "en": "PVTv2"
  },
  "desc": {
    "vi": "Học PVTv2.",
    "en": "Learn PVTv2."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/pvt-v2/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "cait",
  "gameId": "game-103",
  "name": {
    "vi": "CaiT",
    "en": "CaiT"
  },
  "desc": {
    "vi": "Học Class-Attention in Image Transformers.",
    "en": "Learn CaiT."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/cait/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "xcit",
  "gameId": "game-104",
  "name": {
    "vi": "XCiT",
    "en": "XCiT"
  },
  "desc": {
    "vi": "Học XCiT.",
    "en": "Learn XCiT."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/xcit/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "twins",
  "gameId": "game-105",
  "name": {
    "vi": "Twins",
    "en": "Twins"
  },
  "desc": {
    "vi": "Học Twins.",
    "en": "Learn Twins."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/twins/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "regionvit",
  "gameId": "game-106",
  "name": {
    "vi": "RegionViT",
    "en": "RegionViT"
  },
  "desc": {
    "vi": "Học RegionViT.",
    "en": "Learn RegionViT."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/regionvit/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "focal-transformer",
  "gameId": "game-107",
  "name": {
    "vi": "Focal Transformer",
    "en": "Focal Transformer"
  },
  "desc": {
    "vi": "Học Focal Transformer.",
    "en": "Learn Focal Transformer."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/focal-transformer/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "nat",
  "gameId": "game-108",
  "name": {
    "vi": "NAT",
    "en": "NAT"
  },
  "desc": {
    "vi": "Học Neighborhood Attention Transformer.",
    "en": "Learn NAT."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/nat/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "dinat",
  "gameId": "game-109",
  "name": {
    "vi": "DiNAT",
    "en": "DiNAT"
  },
  "desc": {
    "vi": "Học Dilated Neighborhood Attention.",
    "en": "Learn DiNAT."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/dinat/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "shift-win",
  "gameId": "game-110",
  "name": {
    "vi": "ShiftWin",
    "en": "ShiftWin"
  },
  "desc": {
    "vi": "Học Shifted Window Transformer.",
    "en": "Learn ShiftWin."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/shift-win/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "hilo-transformer",
  "gameId": "game-111",
  "name": {
    "vi": "Hilo Transformer",
    "en": "Hilo Transformer"
  },
  "desc": {
    "vi": "Học HiLo Transformer.",
    "en": "Learn HiLo Transformer."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/hilo-transformer/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "transnext",
  "gameId": "game-112",
  "name": {
    "vi": "TransNeXt",
    "en": "TransNeXt"
  },
  "desc": {
    "vi": "Học TransNeXt.",
    "en": "Learn TransNeXt."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/transnext/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "iformer",
  "gameId": "game-113",
  "name": {
    "vi": "iFormer",
    "en": "iFormer"
  },
  "desc": {
    "vi": "Học iFormer.",
    "en": "Learn iFormer."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/iformer/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "moga",
  "gameId": "game-114",
  "name": {
    "vi": "MogaNet",
    "en": "MogaNet"
  },
  "desc": {
    "vi": "Học MogaNet.",
    "en": "Learn MogaNet."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/moga/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "efficientvim",
  "gameId": "game-115",
  "name": {
    "vi": "EfficientViM",
    "en": "EfficientViM"
  },
  "desc": {
    "vi": "Học EfficientViM.",
    "en": "Learn EfficientViM."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/efficientvim/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "vim",
  "gameId": "game-116",
  "name": {
    "vi": "Vim",
    "en": "Vim"
  },
  "desc": {
    "vi": "Học Vision Mamba.",
    "en": "Learn Vision Mamba."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/vim/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "vmamba",
  "gameId": "game-117",
  "name": {
    "vi": "VMamba",
    "en": "VMamba"
  },
  "desc": {
    "vi": "Học VMamba.",
    "en": "Learn VMamba."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/vmamba/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "plainmamba",
  "gameId": "game-118",
  "name": {
    "vi": "PlainMamba",
    "en": "PlainMamba"
  },
  "desc": {
    "vi": "Học PlainMamba.",
    "en": "Learn PlainMamba."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/plainmamba/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "localmamba",
  "gameId": "game-119",
  "name": {
    "vi": "LocalMamba",
    "en": "LocalMamba"
  },
  "desc": {
    "vi": "Học LocalMamba.",
    "en": "Learn LocalMamba."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/localmamba/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "serp-mamba",
  "gameId": "game-120",
  "name": {
    "vi": "Serp Mamba",
    "en": "Serp Mamba"
  },
  "desc": {
    "vi": "Học Serp Mamba.",
    "en": "Learn Serp Mamba."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/serp-mamba/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "rnn-basic",
  "gameId": "game-001",
  "name": {
    "vi": "RNN Cơ Bản",
    "en": "RNN Basic"
  },
  "desc": {
    "vi": "Học RNN cơ bản.",
    "en": "Learn RNN basics."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/rnn-basic/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "lstm-arch",
  "gameId": "game-002",
  "name": {
    "vi": "LSTM Arch",
    "en": "LSTM Arch"
  },
  "desc": {
    "vi": "Học LSTM architecture.",
    "en": "Learn LSTM."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/lstm-arch/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "gru-arch",
  "gameId": "game-003",
  "name": {
    "vi": "GRU Arch",
    "en": "GRU Arch"
  },
  "desc": {
    "vi": "Học GRU architecture.",
    "en": "Learn GRU."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/gru-arch/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "bidirectional-rnn",
  "gameId": "game-004",
  "name": {
    "vi": "Bidirectional RNN",
    "en": "Bidirectional RNN"
  },
  "desc": {
    "vi": "Học bidirectional RNN.",
    "en": "Learn bidirectional RNN."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/bidirectional-rnn/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "seq2seq",
  "gameId": "game-005",
  "name": {
    "vi": "Seq2Seq",
    "en": "Seq2Seq"
  },
  "desc": {
    "vi": "Học sequence-to-sequence.",
    "en": "Learn Seq2Seq."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/seq2seq/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "attention-seq",
  "gameId": "game-006",
  "name": {
    "vi": "Attention Seq",
    "en": "Attention Seq"
  },
  "desc": {
    "vi": "Học attention trong Seq2Seq.",
    "en": "Learn attention in Seq2Seq."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/attention-seq/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "bahdanau-attention",
  "gameId": "game-007",
  "name": {
    "vi": "Bahdanau Attention",
    "en": "Bahdanau Attention"
  },
  "desc": {
    "vi": "Học Bahdanau attention.",
    "en": "Learn Bahdanau attention."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/bahdanau-attention/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "luong-attention",
  "gameId": "game-008",
  "name": {
    "vi": "Luong Attention",
    "en": "Luong Attention"
  },
  "desc": {
    "vi": "Học Luong attention.",
    "en": "Learn Luong attention."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/luong-attention/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "pointer-network",
  "gameId": "game-009",
  "name": {
    "vi": "Pointer Network",
    "en": "Pointer Network"
  },
  "desc": {
    "vi": "Học pointer network.",
    "en": "Learn pointer network."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/pointer-network/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "copynet",
  "gameId": "game-010",
  "name": {
    "vi": "CopyNet",
    "en": "CopyNet"
  },
  "desc": {
    "vi": "Học CopyNet.",
    "en": "Learn CopyNet."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/copynet/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "cnndm-summarize",
  "gameId": "game-011",
  "name": {
    "vi": "CNN/DM Summarize",
    "en": "CNN/DM Summarize"
  },
  "desc": {
    "vi": "Học CNN/DailyMail summarization.",
    "en": "Learn CNN/DM summarization."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/cnndm-summarize/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "xsum-summarize",
  "gameId": "game-012",
  "name": {
    "vi": "XSum Summarize",
    "en": "XSum Summarize"
  },
  "desc": {
    "vi": "Học XSum summarization.",
    "en": "Learn XSum summarization."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/xsum-summarize/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "samsum-summarize",
  "gameId": "game-013",
  "name": {
    "vi": "SAMSum Summarize",
    "en": "SAMSum Summarize"
  },
  "desc": {
    "vi": "Học SAMSum summarization.",
    "en": "Learn SAMSum summarization."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/samsum-summarize/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "dialogsum",
  "gameId": "game-014",
  "name": {
    "vi": "DialogSum",
    "en": "DialogSum"
  },
  "desc": {
    "vi": "Học DialogSum.",
    "en": "Learn DialogSum."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/dialogsum/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "multi-news",
  "gameId": "game-015",
  "name": {
    "vi": "Multi-News",
    "en": "Multi-News"
  },
  "desc": {
    "vi": "Học Multi-News summarization.",
    "en": "Learn Multi-News."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/multi-news/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "reddit-tifu",
  "gameId": "game-016",
  "name": {
    "vi": "Reddit TIFU",
    "en": "Reddit TIFU"
  },
  "desc": {
    "vi": "Học Reddit TIFU summarization.",
    "en": "Learn Reddit TIFU."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/reddit-tifu/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "arxiv-summarize",
  "gameId": "game-017",
  "name": {
    "vi": "arXiv Summarize",
    "en": "arXiv Summarize"
  },
  "desc": {
    "vi": "Học arXiv summarization.",
    "en": "Learn arXiv summarization."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/arxiv-summarize/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "pubmed-summarize",
  "gameId": "game-018",
  "name": {
    "vi": "PubMed Summarize",
    "en": "PubMed Summarize"
  },
  "desc": {
    "vi": "Học PubMed summarization.",
    "en": "Learn PubMed summarization."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/pubmed-summarize/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "bigpatent",
  "gameId": "game-019",
  "name": {
    "vi": "BigPatent",
    "en": "BigPatent"
  },
  "desc": {
    "vi": "Học BigPatent summarization.",
    "en": "Learn BigPatent."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/bigpatent/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "aeslc",
  "gameId": "game-020",
  "name": {
    "vi": "AESLC",
    "en": "AESLC"
  },
  "desc": {
    "vi": "Học AESLC email summarization.",
    "en": "Learn AESLC."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/aeslc/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "gigaword",
  "gameId": "game-021",
  "name": {
    "vi": "Gigaword",
    "en": "Gigaword"
  },
  "desc": {
    "vi": "Học Gigaword summarization.",
    "en": "Learn Gigaword."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/gigaword/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "newswire",
  "gameId": "game-022",
  "name": {
    "vi": "Newswire",
    "en": "Newswire"
  },
  "desc": {
    "vi": "Học Newswire summarization.",
    "en": "Learn Newswire."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/newswire/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "duc-2004",
  "gameId": "game-023",
  "name": {
    "vi": "DUC 2004",
    "en": "DUC 2004"
  },
  "desc": {
    "vi": "Học DUC 2004.",
    "en": "Learn DUC 2004."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/duc-2004/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "tac-2008",
  "gameId": "game-024",
  "name": {
    "vi": "TAC 2008",
    "en": "TAC 2008"
  },
  "desc": {
    "vi": "Học TAC 2008.",
    "en": "Learn TAC 2008."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/tac-2008/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "tac-2011",
  "gameId": "game-025",
  "name": {
    "vi": "TAC 2011",
    "en": "TAC 2011"
  },
  "desc": {
    "vi": "Học TAC 2011.",
    "en": "Learn TAC 2011."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/tac-2011/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "nallapati-2016",
  "gameId": "game-026",
  "name": {
    "vi": "Nallapati 2016",
    "en": "Nallapati 2016"
  },
  "desc": {
    "vi": "Học Nallapati 2016 dataset.",
    "en": "Learn Nallapati 2016."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/nallapati-2016/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "newsroom",
  "gameId": "game-027",
  "name": {
    "vi": "Newsroom",
    "en": "Newsroom"
  },
  "desc": {
    "vi": "Học Newsroom dataset.",
    "en": "Learn Newsroom."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/newsroom/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "scitldr",
  "gameId": "game-028",
  "name": {
    "vi": "SciTLDR",
    "en": "SciTLDR"
  },
  "desc": {
    "vi": "Học SciTLDR.",
    "en": "Learn SciTLDR."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/scitldr/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "ellip",
  "gameId": "game-029",
  "name": {
    "vi": "ELLIP",
    "en": "ELLIP"
  },
  "desc": {
    "vi": "Học ELLIP.",
    "en": "Learn ELLIP."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/ellip/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "covid-summarize",
  "gameId": "game-030",
  "name": {
    "vi": "COVID Summarize",
    "en": "COVID Summarize"
  },
  "desc": {
    "vi": "Học COVID summarization.",
    "en": "Learn COVID summarization."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/covid-summarize/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "wiki-lingua",
  "gameId": "game-031",
  "name": {
    "vi": "WikiLingua",
    "en": "WikiLingua"
  },
  "desc": {
    "vi": "Học WikiLingua.",
    "en": "Learn WikiLingua."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/wiki-lingua/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "mlsum",
  "gameId": "game-032",
  "name": {
    "vi": "MLSUM",
    "en": "MLSUM"
  },
  "desc": {
    "vi": "Học MLSUM.",
    "en": "Learn MLSUM."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/mlsum/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "xl-sum",
  "gameId": "game-033",
  "name": {
    "vi": "XLSum",
    "en": "XLSum"
  },
  "desc": {
    "vi": "Học XLSum.",
    "en": "Learn XLSum."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/xl-sum/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "opinosis",
  "gameId": "game-034",
  "name": {
    "vi": "Opinosis",
    "en": "Opinosis"
  },
  "desc": {
    "vi": "Học Opinosis.",
    "en": "Learn Opinosis."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/opinosis/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "amazon-review",
  "gameId": "game-035",
  "name": {
    "vi": "Amazon Review",
    "en": "Amazon Review"
  },
  "desc": {
    "vi": "Học Amazon review summarization.",
    "en": "Learn Amazon review summarization."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/amazon-review/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "yelp-review",
  "gameId": "game-036",
  "name": {
    "vi": "Yelp Review",
    "en": "Yelp Review"
  },
  "desc": {
    "vi": "Học Yelp review summarization.",
    "en": "Learn Yelp review summarization."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/yelp-review/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "rotten-tomatoes",
  "gameId": "game-037",
  "name": {
    "vi": "Rotten Tomatoes",
    "en": "Rotten Tomatoes"
  },
  "desc": {
    "vi": "Học Rotten Tomatoes summarization.",
    "en": "Learn Rotten Tomatoes summarization."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/rotten-tomatoes/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "imdb-review",
  "gameId": "game-038",
  "name": {
    "vi": "IMDb Review",
    "en": "IMDb Review"
  },
  "desc": {
    "vi": "Học IMDb review summarization.",
    "en": "Learn IMDb review summarization."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/imdb-review/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "booksum",
  "gameId": "game-039",
  "name": {
    "vi": "BookSum",
    "en": "BookSum"
  },
  "desc": {
    "vi": "Học BookSum.",
    "en": "Learn BookSum."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/booksum/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "narrativeqa",
  "gameId": "game-040",
  "name": {
    "vi": "NarrativeQA",
    "en": "NarrativeQA"
  },
  "desc": {
    "vi": "Học NarrativeQA.",
    "en": "Learn NarrativeQA."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/narrativeqa/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "hotpotqa",
  "gameId": "game-041",
  "name": {
    "vi": "HotpotQA",
    "en": "HotpotQA"
  },
  "desc": {
    "vi": "Học HotpotQA.",
    "en": "Learn HotpotQA."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/hotpotqa/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "squad-qa",
  "gameId": "game-042",
  "name": {
    "vi": "SQuAD QA",
    "en": "SQuAD QA"
  },
  "desc": {
    "vi": "Học SQuAD.",
    "en": "Learn SQuAD."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/squad-qa/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "natural-questions",
  "gameId": "game-043",
  "name": {
    "vi": "Natural Questions",
    "en": "Natural Questions"
  },
  "desc": {
    "vi": "Học Natural Questions.",
    "en": "Learn Natural Questions."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/natural-questions/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "triviaqa",
  "gameId": "game-044",
  "name": {
    "vi": "TriviaQA",
    "en": "TriviaQA"
  },
  "desc": {
    "vi": "Học TriviaQA.",
    "en": "Learn TriviaQA."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/triviaqa/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "searchqa",
  "gameId": "game-045",
  "name": {
    "vi": "SearchQA",
    "en": "SearchQA"
  },
  "desc": {
    "vi": "Học SearchQA.",
    "en": "Learn SearchQA."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/searchqa/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "newsqa",
  "gameId": "game-046",
  "name": {
    "vi": "NewsQA",
    "en": "NewsQA"
  },
  "desc": {
    "vi": "Học NewsQA.",
    "en": "Learn NewsQA."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/newsqa/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "drop-qa",
  "gameId": "game-047",
  "name": {
    "vi": "DROP QA",
    "en": "DROP QA"
  },
  "desc": {
    "vi": "Học DROP.",
    "en": "Learn DROP."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/drop-qa/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "quoref",
  "gameId": "game-048",
  "name": {
    "vi": "Quoref",
    "en": "Quoref"
  },
  "desc": {
    "vi": "Học Quoref.",
    "en": "Learn Quoref."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/quoref/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "ropes",
  "gameId": "game-049",
  "name": {
    "vi": "ROPES",
    "en": "ROPES"
  },
  "desc": {
    "vi": "Học ROPES.",
    "en": "Learn ROPES."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/ropes/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "cosmosqa",
  "gameId": "game-050",
  "name": {
    "vi": "CosmosQA",
    "en": "CosmosQA"
  },
  "desc": {
    "vi": "Học CosmosQA.",
    "en": "Learn CosmosQA."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/cosmosqa/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "social-iqa",
  "gameId": "game-051",
  "name": {
    "vi": "Social IQA",
    "en": "Social IQA"
  },
  "desc": {
    "vi": "Học Social IQA.",
    "en": "Learn Social IQA."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/social-iqa/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "piqa",
  "gameId": "game-052",
  "name": {
    "vi": "PIQA",
    "en": "PIQA"
  },
  "desc": {
    "vi": "Học PIQA.",
    "en": "Learn PIQA."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/piqa/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "mc-taco",
  "gameId": "game-053",
  "name": {
    "vi": "MC-TACO",
    "en": "MC-TACO"
  },
  "desc": {
    "vi": "Học MC-TACO.",
    "en": "Learn MC-TACO."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/mc-taco/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "timebank",
  "gameId": "game-054",
  "name": {
    "vi": "TimeBank",
    "en": "TimeBank"
  },
  "desc": {
    "vi": "Học TimeBank.",
    "en": "Learn TimeBank."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/timebank/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "matres",
  "gameId": "game-055",
  "name": {
    "vi": "MATRES",
    "en": "MATRES"
  },
  "desc": {
    "vi": "Học MATRES.",
    "en": "Learn MATRES."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/matres/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "tcr",
  "gameId": "game-056",
  "name": {
    "vi": "TCR",
    "en": "TCR"
  },
  "desc": {
    "vi": "Học Temporal Common-sense Reasoning.",
    "en": "Learn TCR."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/tcr/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "torque",
  "gameId": "game-057",
  "name": {
    "vi": "TORQUE",
    "en": "TORQUE"
  },
  "desc": {
    "vi": "Học TORQUE.",
    "en": "Learn TORQUE."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/torque/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "temp-eval",
  "gameId": "game-058",
  "name": {
    "vi": "TempEval",
    "en": "TempEval"
  },
  "desc": {
    "vi": "Học TempEval.",
    "en": "Learn TempEval."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/temp-eval/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "clinical-temp",
  "gameId": "game-059",
  "name": {
    "vi": "Clinical Temp",
    "en": "Clinical Temp"
  },
  "desc": {
    "vi": "Học Clinical TempEval.",
    "en": "Learn Clinical TempEval."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/clinical-temp/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "thyme",
  "gameId": "game-060",
  "name": {
    "vi": "THYME",
    "en": "THYME"
  },
  "desc": {
    "vi": "Học THYME.",
    "en": "Learn THYME."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/thyme/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "n2c2",
  "gameId": "game-061",
  "name": {
    "vi": "n2c2",
    "en": "n2c2"
  },
  "desc": {
    "vi": "Học n2c2.",
    "en": "Learn n2c2."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/n2c2/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "i2b2",
  "gameId": "game-062",
  "name": {
    "vi": "i2b2",
    "en": "i2b2"
  },
  "desc": {
    "vi": "Học i2b2.",
    "en": "Learn i2b2."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/i2b2/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "shARe",
  "gameId": "game-063",
  "name": {
    "vi": "shARe",
    "en": "shARe"
  },
  "desc": {
    "vi": "Học shARe/CLEF.",
    "en": "Learn shARe/CLEF."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/shARe/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "medmentions",
  "gameId": "game-064",
  "name": {
    "vi": "MedMentions",
    "en": "MedMentions"
  },
  "desc": {
    "vi": "Học MedMentions.",
    "en": "Learn MedMentions."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/medmentions/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "bc5cdr",
  "gameId": "game-065",
  "name": {
    "vi": "BC5CDR",
    "en": "BC5CDR"
  },
  "desc": {
    "vi": "Học BC5CDR.",
    "en": "Learn BC5CDR."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/bc5cdr/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "ncbi-disease",
  "gameId": "game-066",
  "name": {
    "vi": "NCBI Disease",
    "en": "NCBI Disease"
  },
  "desc": {
    "vi": "Học NCBI Disease.",
    "en": "Learn NCBI Disease."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/ncbi-disease/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "jnlpba",
  "gameId": "game-067",
  "name": {
    "vi": "JNLPBA",
    "en": "JNLPBA"
  },
  "desc": {
    "vi": "Học JNLPBA.",
    "en": "Learn JNLPBA."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/jnlpba/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "bioinfer",
  "gameId": "game-068",
  "name": {
    "vi": "BioInfer",
    "en": "BioInfer"
  },
  "desc": {
    "vi": "Học BioInfer.",
    "en": "Learn BioInfer."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/bioinfer/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "aimed",
  "gameId": "game-069",
  "name": {
    "vi": "AIMed",
    "en": "AIMed"
  },
  "desc": {
    "vi": "Học AIMed.",
    "en": "Learn AIMed."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/aimed/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "hprd50",
  "gameId": "game-070",
  "name": {
    "vi": "HPRD50",
    "en": "HPRD50"
  },
  "desc": {
    "vi": "Học HPRD50.",
    "en": "Learn HPRD50."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/hprd50/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "lll",
  "gameId": "game-071",
  "name": {
    "vi": "LLL",
    "en": "LLL"
  },
  "desc": {
    "vi": "Học LLL.",
    "en": "Learn LLL."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/lll/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "biocreative",
  "gameId": "game-072",
  "name": {
    "vi": "BioCreative",
    "en": "BioCreative"
  },
  "desc": {
    "vi": "Học BioCreative.",
    "en": "Learn BioCreative."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/biocreative/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "chemprot",
  "gameId": "game-073",
  "name": {
    "vi": "ChemProt",
    "en": "ChemProt"
  },
  "desc": {
    "vi": "Học ChemProt.",
    "en": "Learn ChemProt."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/chemprot/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "ddi-2013",
  "gameId": "game-074",
  "name": {
    "vi": "DDI 2013",
    "en": "DDI 2013"
  },
  "desc": {
    "vi": "Học DDI 2013.",
    "en": "Learn DDI 2013."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/ddi-2013/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "ade-corpus",
  "gameId": "game-075",
  "name": {
    "vi": "ADE Corpus",
    "en": "ADE Corpus"
  },
  "desc": {
    "vi": "Học ADE Corpus.",
    "en": "Learn ADE Corpus."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/ade-corpus/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "euadr",
  "gameId": "game-076",
  "name": {
    "vi": "EU-ADR",
    "en": "EU-ADR"
  },
  "desc": {
    "vi": "Học EU-ADR.",
    "en": "Learn EU-ADR."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/euadr/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "pgx",
  "gameId": "game-077",
  "name": {
    "vi": "PGx",
    "en": "PGx"
  },
  "desc": {
    "vi": "Học PGx.",
    "en": "Learn PGx."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/pgx/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "gad",
  "gameId": "game-078",
  "name": {
    "vi": "GAD",
    "en": "GAD"
  },
  "desc": {
    "vi": "Học Genetic Association Database.",
    "en": "Learn GAD."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/gad/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "mirna",
  "gameId": "game-079",
  "name": {
    "vi": "miRNA",
    "en": "miRNA"
  },
  "desc": {
    "vi": "Học miRNA relation extraction.",
    "en": "Learn miRNA extraction."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/mirna/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "polypharmacy",
  "gameId": "game-080",
  "name": {
    "vi": "Polypharmacy",
    "en": "Polypharmacy"
  },
  "desc": {
    "vi": "Học Polypharmacy.",
    "en": "Learn Polypharmacy."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/polypharmacy/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "drugbank",
  "gameId": "game-081",
  "name": {
    "vi": "DrugBank",
    "en": "DrugBank"
  },
  "desc": {
    "vi": "Học DrugBank.",
    "en": "Learn DrugBank."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/drugbank/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "kegg",
  "gameId": "game-082",
  "name": {
    "vi": "KEGG",
    "en": "KEGG"
  },
  "desc": {
    "vi": "Học KEGG.",
    "en": "Learn KEGG."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/kegg/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "ctd",
  "gameId": "game-083",
  "name": {
    "vi": "CTD",
    "en": "CTD"
  },
  "desc": {
    "vi": "Học CTD.",
    "en": "Learn CTD."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/ctd/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "sider",
  "gameId": "game-084",
  "name": {
    "vi": "SIDER",
    "en": "SIDER"
  },
  "desc": {
    "vi": "Học SIDER.",
    "en": "Learn SIDER."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/sider/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "offside",
  "gameId": "game-085",
  "name": {
    "vi": "OFFSIDES",
    "en": "OFFSIDES"
  },
  "desc": {
    "vi": "Học OFFSIDES.",
    "en": "Learn OFFSIDES."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/offside/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "twosides",
  "gameId": "game-086",
  "name": {
    "vi": "TWOSIDES",
    "en": "TWOSIDES"
  },
  "desc": {
    "vi": "Học TWOSIDES.",
    "en": "Learn TWOSIDES."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/twosides/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "omim",
  "gameId": "game-087",
  "name": {
    "vi": "OMIM",
    "en": "OMIM"
  },
  "desc": {
    "vi": "Học OMIM.",
    "en": "Learn OMIM."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/omim/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "orphanet",
  "gameId": "game-088",
  "name": {
    "vi": "Orphanet",
    "en": "Orphanet"
  },
  "desc": {
    "vi": "Học Orphanet.",
    "en": "Learn Orphanet."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/orphanet/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "gencc",
  "gameId": "game-089",
  "name": {
    "vi": "GenCC",
    "en": "GenCC"
  },
  "desc": {
    "vi": "Học GenCC.",
    "en": "Learn GenCC."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/gencc/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "clingen",
  "gameId": "game-090",
  "name": {
    "vi": "ClinGen",
    "en": "ClinGen"
  },
  "desc": {
    "vi": "Học ClinGen.",
    "en": "Learn ClinGen."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/clingen/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "genebento",
  "gameId": "game-091",
  "name": {
    "vi": "GeneBento",
    "en": "GeneBento"
  },
  "desc": {
    "vi": "Học GeneBento.",
    "en": "Learn GeneBento."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/genebento/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "panelapp",
  "gameId": "game-092",
  "name": {
    "vi": "PanelApp",
    "en": "PanelApp"
  },
  "desc": {
    "vi": "Học PanelApp.",
    "en": "Learn PanelApp."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/panelapp/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "mala-cards",
  "gameId": "game-093",
  "name": {
    "vi": "MalaCards",
    "en": "MalaCards"
  },
  "desc": {
    "vi": "Học MalaCards.",
    "en": "Learn MalaCards."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/mala-cards/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "disease-ontology",
  "gameId": "game-094",
  "name": {
    "vi": "Disease Ontology",
    "en": "Disease Ontology"
  },
  "desc": {
    "vi": "Học Disease Ontology.",
    "en": "Learn Disease Ontology."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/disease-ontology/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "symptom-ontology",
  "gameId": "game-095",
  "name": {
    "vi": "Symptom Ontology",
    "en": "Symptom Ontology"
  },
  "desc": {
    "vi": "Học Symptom Ontology.",
    "en": "Learn Symptom Ontology."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/symptom-ontology/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "hpo",
  "gameId": "game-096",
  "name": {
    "vi": "HPO",
    "en": "HPO"
  },
  "desc": {
    "vi": "Học Human Phenotype Ontology.",
    "en": "Learn HPO."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/hpo/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "mondo",
  "gameId": "game-097",
  "name": {
    "vi": "MONDO",
    "en": "MONDO"
  },
  "desc": {
    "vi": "Học MONDO.",
    "en": "Learn MONDO."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/mondo/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "icd10",
  "gameId": "game-098",
  "name": {
    "vi": "ICD-10",
    "en": "ICD-10"
  },
  "desc": {
    "vi": "Học ICD-10.",
    "en": "Learn ICD-10."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/icd10/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "icd11",
  "gameId": "game-099",
  "name": {
    "vi": "ICD-11",
    "en": "ICD-11"
  },
  "desc": {
    "vi": "Học ICD-11.",
    "en": "Learn ICD-11."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/icd11/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "snomed-ct",
  "gameId": "game-100",
  "name": {
    "vi": "SNOMED CT",
    "en": "SNOMED CT"
  },
  "desc": {
    "vi": "Học SNOMED CT.",
    "en": "Learn SNOMED CT."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/snomed-ct/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "rxnorm",
  "gameId": "game-101",
  "name": {
    "vi": "RxNorm",
    "en": "RxNorm"
  },
  "desc": {
    "vi": "Học RxNorm.",
    "en": "Learn RxNorm."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/rxnorm/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "umls",
  "gameId": "game-102",
  "name": {
    "vi": "UMLS",
    "en": "UMLS"
  },
  "desc": {
    "vi": "Học UMLS.",
    "en": "Learn UMLS."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/umls/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "medcat",
  "gameId": "game-103",
  "name": {
    "vi": "MedCAT",
    "en": "MedCAT"
  },
  "desc": {
    "vi": "Học MedCAT.",
    "en": "Learn MedCAT."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/medcat/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "scispacy",
  "gameId": "game-104",
  "name": {
    "vi": "ScispaCy",
    "en": "ScispaCy"
  },
  "desc": {
    "vi": "Học ScispaCy.",
    "en": "Learn ScispaCy."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/scispacy/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "medspacy",
  "gameId": "game-105",
  "name": {
    "vi": "Medspacy",
    "en": "Medspacy"
  },
  "desc": {
    "vi": "Học Medspacy.",
    "en": "Learn Medspacy."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/medspacy/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "mednli",
  "gameId": "game-106",
  "name": {
    "vi": "MedNLI",
    "en": "MedNLI"
  },
  "desc": {
    "vi": "Học MedNLI.",
    "en": "Learn MedNLI."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/mednli/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "medqa",
  "gameId": "game-107",
  "name": {
    "vi": "MedQA",
    "en": "MedQA"
  },
  "desc": {
    "vi": "Học MedQA.",
    "en": "Learn MedQA."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/medqa/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "medmcqa",
  "gameId": "game-108",
  "name": {
    "vi": "MedMCQA",
    "en": "MedMCQA"
  },
  "desc": {
    "vi": "Học MedMCQA.",
    "en": "Learn MedMCQA."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/medmcqa/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "pubmedqa",
  "gameId": "game-109",
  "name": {
    "vi": "PubMedQA",
    "en": "PubMedQA"
  },
  "desc": {
    "vi": "Học PubMedQA.",
    "en": "Learn PubMedQA."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/pubmedqa/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "bioasq",
  "gameId": "game-110",
  "name": {
    "vi": "BioASQ",
    "en": "BioASQ"
  },
  "desc": {
    "vi": "Học BioASQ.",
    "en": "Learn BioASQ."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/bioasq/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "emrqa",
  "gameId": "game-111",
  "name": {
    "vi": "EmrQA",
    "en": "EmrQA"
  },
  "desc": {
    "vi": "Học EmrQA.",
    "en": "Learn EmrQA."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/emrqa/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "clique",
  "gameId": "game-112",
  "name": {
    "vi": "CLiQUE",
    "en": "CLiQUE"
  },
  "desc": {
    "vi": "Học CLiQUE.",
    "en": "Learn CLiQUE."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/clique/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "mimic-iii",
  "gameId": "game-113",
  "name": {
    "vi": "MIMIC-III",
    "en": "MIMIC-III"
  },
  "desc": {
    "vi": "Học MIMIC-III.",
    "en": "Learn MIMIC-III."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/mimic-iii/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "mimic-iv",
  "gameId": "game-114",
  "name": {
    "vi": "MIMIC-IV",
    "en": "MIMIC-IV"
  },
  "desc": {
    "vi": "Học MIMIC-IV.",
    "en": "Learn MIMIC-IV."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/mimic-iv/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "eicu",
  "gameId": "game-115",
  "name": {
    "vi": "eICU",
    "en": "eICU"
  },
  "desc": {
    "vi": "Học eICU.",
    "en": "Learn eICU."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/eicu/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "hirid",
  "gameId": "game-116",
  "name": {
    "vi": "HiRID",
    "en": "HiRID"
  },
  "desc": {
    "vi": "Học HiRID.",
    "en": "Learn HiRID."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/hirid/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "airstudio",
  "gameId": "game-117",
  "name": {
    "vi": "Airstudio",
    "en": "Airstudio"
  },
  "desc": {
    "vi": "Học Airstudio.",
    "en": "Learn Airstudio."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/airstudio/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "vitaldb",
  "gameId": "game-118",
  "name": {
    "vi": "VitalDB",
    "en": "VitalDB"
  },
  "desc": {
    "vi": "Học VitalDB.",
    "en": "Learn VitalDB."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/vitaldb/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "isic",
  "gameId": "game-119",
  "name": {
    "vi": "ISIC",
    "en": "ISIC"
  },
  "desc": {
    "vi": "Học ISIC.",
    "en": "Learn ISIC."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/isic/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "ham10000",
  "gameId": "game-120",
  "name": {
    "vi": "HAM10000",
    "en": "HAM10000"
  },
  "desc": {
    "vi": "Học HAM10000.",
    "en": "Learn HAM10000."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/ham10000/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "bccd",
  "gameId": "game-121",
  "name": {
    "vi": "BCCD",
    "en": "BCCD"
  },
  "desc": {
    "vi": "Học BCCD.",
    "en": "Learn BCCD."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/bccd/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "openi",
  "gameId": "game-122",
  "name": {
    "vi": "OpenI",
    "en": "OpenI"
  },
  "desc": {
    "vi": "Học OpenI.",
    "en": "Learn OpenI."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/openi/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "padchest",
  "gameId": "game-123",
  "name": {
    "vi": "PadChest",
    "en": "PadChest"
  },
  "desc": {
    "vi": "Học PadChest.",
    "en": "Learn PadChest."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/padchest/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "chexpert",
  "gameId": "game-124",
  "name": {
    "vi": "CheXpert",
    "en": "CheXpert"
  },
  "desc": {
    "vi": "Học CheXpert.",
    "en": "Learn CheXpert."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/chexpert/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "mimic-cxr",
  "gameId": "game-125",
  "name": {
    "vi": "MIMIC-CXR",
    "en": "MIMIC-CXR"
  },
  "desc": {
    "vi": "Học MIMIC-CXR.",
    "en": "Learn MIMIC-CXR."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/mimic-cxr/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "vindr-cxr",
  "gameId": "game-126",
  "name": {
    "vi": "VinDr-CXR",
    "en": "VinDr-CXR"
  },
  "desc": {
    "vi": "Học VinDr-CXR.",
    "en": "Learn VinDr-CXR."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/vindr-cxr/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "siim",
  "gameId": "game-127",
  "name": {
    "vi": "SIIM",
    "en": "SIIM"
  },
  "desc": {
    "vi": "Học SIIM.",
    "en": "Learn SIIM."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/siim/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "rsna",
  "gameId": "game-128",
  "name": {
    "vi": "RSNA",
    "en": "RSNA"
  },
  "desc": {
    "vi": "Học RSNA.",
    "en": "Learn RSNA."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/rsna/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "lidc",
  "gameId": "game-129",
  "name": {
    "vi": "LIDC",
    "en": "LIDC"
  },
  "desc": {
    "vi": "Học LIDC.",
    "en": "Learn LIDC."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/lidc/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "nsclc",
  "gameId": "game-130",
  "name": {
    "vi": "NSCLC",
    "en": "NSCLC"
  },
  "desc": {
    "vi": "Học NSCLC.",
    "en": "Learn NSCLC."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/nsclc/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "brats",
  "gameId": "game-131",
  "name": {
    "vi": "BraTS",
    "en": "BraTS"
  },
  "desc": {
    "vi": "Học BraTS.",
    "en": "Learn BraTS."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/brats/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "atm",
  "gameId": "game-132",
  "name": {
    "vi": "ATM",
    "en": "ATM"
  },
  "desc": {
    "vi": "Học ATM.",
    "en": "Learn ATM."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/atm/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "dti",
  "gameId": "game-133",
  "name": {
    "vi": "DTI",
    "en": "DTI"
  },
  "desc": {
    "vi": "Học DTI.",
    "en": "Learn DTI."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/dti/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "ct-scan",
  "gameId": "game-001",
  "name": {
    "vi": "CT Scan",
    "en": "CT Scan"
  },
  "desc": {
    "vi": "Học CT scan analysis.",
    "en": "Learn CT scan analysis."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/ct-scan/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "mri-scan",
  "gameId": "game-002",
  "name": {
    "vi": "MRI Scan",
    "en": "MRI Scan"
  },
  "desc": {
    "vi": "Học MRI analysis.",
    "en": "Learn MRI analysis."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/mri-scan/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "xray-classify",
  "gameId": "game-003",
  "name": {
    "vi": "XRay Classify",
    "en": "XRay Classify"
  },
  "desc": {
    "vi": "Học X-ray classification.",
    "en": "Learn X-ray classification."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/xray-classify/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "ultrasound",
  "gameId": "game-004",
  "name": {
    "vi": "Ultrasound",
    "en": "Ultrasound"
  },
  "desc": {
    "vi": "Học ultrasound analysis.",
    "en": "Learn ultrasound analysis."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/ultrasound/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "mammography",
  "gameId": "game-005",
  "name": {
    "vi": "Mammography",
    "en": "Mammography"
  },
  "desc": {
    "vi": "Học mammography.",
    "en": "Learn mammography."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/mammography/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "dermoscopy",
  "gameId": "game-006",
  "name": {
    "vi": "Dermoscopy",
    "en": "Dermoscopy"
  },
  "desc": {
    "vi": "Học dermoscopy.",
    "en": "Learn dermoscopy."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/dermoscopy/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "pathology",
  "gameId": "game-007",
  "name": {
    "vi": "Pathology",
    "en": "Pathology"
  },
  "desc": {
    "vi": "Học digital pathology.",
    "en": "Learn digital pathology."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/pathology/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "histology",
  "gameId": "game-008",
  "name": {
    "vi": "Histology",
    "en": "Histology"
  },
  "desc": {
    "vi": "Học histology.",
    "en": "Learn histology."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/histology/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "cytology",
  "gameId": "game-009",
  "name": {
    "vi": "Cytology",
    "en": "Cytology"
  },
  "desc": {
    "vi": "Học cytology.",
    "en": "Learn cytology."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/cytology/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "endoscopy",
  "gameId": "game-010",
  "name": {
    "vi": "Endoscopy",
    "en": "Endoscopy"
  },
  "desc": {
    "vi": "Học endoscopy.",
    "en": "Learn endoscopy."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/endoscopy/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "colonoscopy",
  "gameId": "game-011",
  "name": {
    "vi": "Colonoscopy",
    "en": "Colonoscopy"
  },
  "desc": {
    "vi": "Học colonoscopy.",
    "en": "Learn colonoscopy."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/colonoscopy/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "retinal-scan",
  "gameId": "game-012",
  "name": {
    "vi": "Retinal Scan",
    "en": "Retinal Scan"
  },
  "desc": {
    "vi": "Học retinal scan.",
    "en": "Learn retinal scan."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/retinal-scan/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "oct-scan",
  "gameId": "game-013",
  "name": {
    "vi": "OCT Scan",
    "en": "OCT Scan"
  },
  "desc": {
    "vi": "Học OCT analysis.",
    "en": "Learn OCT analysis."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/oct-scan/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "fundus-photo",
  "gameId": "game-014",
  "name": {
    "vi": "Fundus Photo",
    "en": "Fundus Photo"
  },
  "desc": {
    "vi": "Học fundus photography.",
    "en": "Learn fundus photography."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/fundus-photo/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "ecg-interpret",
  "gameId": "game-015",
  "name": {
    "vi": "ECG Interpret",
    "en": "ECG Interpret"
  },
  "desc": {
    "vi": "Học ECG interpretation.",
    "en": "Learn ECG interpretation."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/ecg-interpret/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "eeg-interpret",
  "gameId": "game-016",
  "name": {
    "vi": "EEG Interpret",
    "en": "EEG Interpret"
  },
  "desc": {
    "vi": "Học EEG interpretation.",
    "en": "Learn EEG interpretation."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/eeg-interpret/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "eeg-seizure",
  "gameId": "game-017",
  "name": {
    "vi": "EEG Seizure",
    "en": "EEG Seizure"
  },
  "desc": {
    "vi": "Học EEG seizure detection.",
    "en": "Learn EEG seizure detection."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/eeg-seizure/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "sleep-stage",
  "gameId": "game-018",
  "name": {
    "vi": "Sleep Stage",
    "en": "Sleep Stage"
  },
  "desc": {
    "vi": "Học sleep staging.",
    "en": "Learn sleep staging."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/sleep-stage/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "respiratory",
  "gameId": "game-019",
  "name": {
    "vi": "Respiratory",
    "en": "Respiratory"
  },
  "desc": {
    "vi": "Học respiratory analysis.",
    "en": "Learn respiratory analysis."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/respiratory/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "copd-detect",
  "gameId": "game-020",
  "name": {
    "vi": "COPD Detect",
    "en": "COPD Detect"
  },
  "desc": {
    "vi": "Học COPD detection.",
    "en": "Learn COPD detection."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/copd-detect/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "pneumonia-detect",
  "gameId": "game-021",
  "name": {
    "vi": "Pneumonia Detect",
    "en": "Pneumonia Detect"
  },
  "desc": {
    "vi": "Học pneumonia detection.",
    "en": "Learn pneumonia detection."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/pneumonia-detect/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "tuberculosis",
  "gameId": "game-022",
  "name": {
    "vi": "Tuberculosis",
    "en": "Tuberculosis"
  },
  "desc": {
    "vi": "Học TB detection.",
    "en": "Learn TB detection."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/tuberculosis/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "covid-detect",
  "gameId": "game-023",
  "name": {
    "vi": "COVID Detect",
    "en": "COVID Detect"
  },
  "desc": {
    "vi": "Học COVID detection.",
    "en": "Learn COVID detection."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/covid-detect/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "lung-cancer",
  "gameId": "game-024",
  "name": {
    "vi": "Lung Cancer",
    "en": "Lung Cancer"
  },
  "desc": {
    "vi": "Học lung cancer detection.",
    "en": "Learn lung cancer detection."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/lung-cancer/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "skin-cancer",
  "gameId": "game-025",
  "name": {
    "vi": "Skin Cancer",
    "en": "Skin Cancer"
  },
  "desc": {
    "vi": "Học skin cancer detection.",
    "en": "Learn skin cancer detection."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/skin-cancer/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "melanoma",
  "gameId": "game-026",
  "name": {
    "vi": "Melanoma",
    "en": "Melanoma"
  },
  "desc": {
    "vi": "Học melanoma detection.",
    "en": "Learn melanoma detection."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/melanoma/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "brain-tumor",
  "gameId": "game-027",
  "name": {
    "vi": "Brain Tumor",
    "en": "Brain Tumor"
  },
  "desc": {
    "vi": "Học brain tumor detection.",
    "en": "Learn brain tumor detection."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/brain-tumor/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "alzheimer",
  "gameId": "game-028",
  "name": {
    "vi": "Alzheimer",
    "en": "Alzheimer"
  },
  "desc": {
    "vi": "Học Alzheimer detection.",
    "en": "Learn Alzheimer detection."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/alzheimer/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "parkinson",
  "gameId": "game-029",
  "name": {
    "vi": "Parkinson",
    "en": "Parkinson"
  },
  "desc": {
    "vi": "Học Parkinson detection.",
    "en": "Learn Parkinson detection."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/parkinson/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "stroke-detect",
  "gameId": "game-030",
  "name": {
    "vi": "Stroke Detect",
    "en": "Stroke Detect"
  },
  "desc": {
    "vi": "Học stroke detection.",
    "en": "Learn stroke detection."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/stroke-detect/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "diabetic-retinopathy",
  "gameId": "game-031",
  "name": {
    "vi": "Diabetic Retinopathy",
    "en": "Diabetic Retinopathy"
  },
  "desc": {
    "vi": "Học diabetic retinopathy.",
    "en": "Learn diabetic retinopathy."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/diabetic-retinopathy/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "glaucoma",
  "gameId": "game-032",
  "name": {
    "vi": "Glaucoma",
    "en": "Glaucoma"
  },
  "desc": {
    "vi": "Học glaucoma detection.",
    "en": "Learn glaucoma detection."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/glaucoma/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "cataract",
  "gameId": "game-033",
  "name": {
    "vi": "Cataract",
    "en": "Cataract"
  },
  "desc": {
    "vi": "Học cataract detection.",
    "en": "Learn cataract detection."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/cataract/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "osteoporosis",
  "gameId": "game-034",
  "name": {
    "vi": "Osteoporosis",
    "en": "Osteoporosis"
  },
  "desc": {
    "vi": "Học osteoporosis detection.",
    "en": "Learn osteoporosis detection."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/osteoporosis/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "fracture-detect",
  "gameId": "game-035",
  "name": {
    "vi": "Fracture Detect",
    "en": "Fracture Detect"
  },
  "desc": {
    "vi": "Học fracture detection.",
    "en": "Learn fracture detection."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/fracture-detect/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "kidney-stone",
  "gameId": "game-036",
  "name": {
    "vi": "Kidney Stone",
    "en": "Kidney Stone"
  },
  "desc": {
    "vi": "Học kidney stone detection.",
    "en": "Learn kidney stone detection."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/kidney-stone/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "liver-cirrhosis",
  "gameId": "game-037",
  "name": {
    "vi": "Liver Cirrhosis",
    "en": "Liver Cirrhosis"
  },
  "desc": {
    "vi": "Học liver cirrhosis.",
    "en": "Learn liver cirrhosis."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/liver-cirrhosis/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "hepatitis",
  "gameId": "game-038",
  "name": {
    "vi": "Hepatitis",
    "en": "Hepatitis"
  },
  "desc": {
    "vi": "Học hepatitis detection.",
    "en": "Learn hepatitis detection."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/hepatitis/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "cirrhosis",
  "gameId": "game-039",
  "name": {
    "vi": "Cirrhosis",
    "en": "Cirrhosis"
  },
  "desc": {
    "vi": "Học cirrhosis detection.",
    "en": "Learn cirrhosis detection."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/cirrhosis/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "fibrosis",
  "gameId": "game-040",
  "name": {
    "vi": "Fibrosis",
    "en": "Fibrosis"
  },
  "desc": {
    "vi": "Học fibrosis detection.",
    "en": "Learn fibrosis detection."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/fibrosis/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "fatty-liver",
  "gameId": "game-041",
  "name": {
    "vi": "Fatty Liver",
    "en": "Fatty Liver"
  },
  "desc": {
    "vi": "Học fatty liver detection.",
    "en": "Learn fatty liver detection."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/fatty-liver/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "pancreatitis",
  "gameId": "game-042",
  "name": {
    "vi": "Pancreatitis",
    "en": "Pancreatitis"
  },
  "desc": {
    "vi": "Học pancreatitis detection.",
    "en": "Learn pancreatitis detection."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/pancreatitis/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "appendicitis",
  "gameId": "game-043",
  "name": {
    "vi": "Appendicitis",
    "en": "Appendicitis"
  },
  "desc": {
    "vi": "Học appendicitis detection.",
    "en": "Learn appendicitis detection."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/appendicitis/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "diverticulitis",
  "gameId": "game-044",
  "name": {
    "vi": "Diverticulitis",
    "en": "Diverticulitis"
  },
  "desc": {
    "vi": "Học diverticulitis detection.",
    "en": "Learn diverticulitis detection."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/diverticulitis/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "crohn-disease",
  "gameId": "game-045",
  "name": {
    "vi": "Crohn Disease",
    "en": "Crohn Disease"
  },
  "desc": {
    "vi": "Học Crohn's disease.",
    "en": "Learn Crohn's disease."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/crohn-disease/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "ulcerative-colitis",
  "gameId": "game-046",
  "name": {
    "vi": "Ulcerative Colitis",
    "en": "Ulcerative Colitis"
  },
  "desc": {
    "vi": "Học ulcerative colitis.",
    "en": "Learn ulcerative colitis."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/ulcerative-colitis/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "celiac-disease",
  "gameId": "game-047",
  "name": {
    "vi": "Celiac Disease",
    "en": "Celiac Disease"
  },
  "desc": {
    "vi": "Học celiac disease.",
    "en": "Learn celiac disease."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/celiac-disease/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "ibs",
  "gameId": "game-048",
  "name": {
    "vi": "IBS",
    "en": "IBS"
  },
  "desc": {
    "vi": "Học IBS detection.",
    "en": "Learn IBS detection."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/ibs/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "gerd",
  "gameId": "game-049",
  "name": {
    "vi": "GERD",
    "en": "GERD"
  },
  "desc": {
    "vi": "Học GERD detection.",
    "en": "Learn GERD detection."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/gerd/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "peptic-ulcer",
  "gameId": "game-050",
  "name": {
    "vi": "Peptic Ulcer",
    "en": "Peptic Ulcer"
  },
  "desc": {
    "vi": "Học peptic ulcer.",
    "en": "Learn peptic ulcer."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/peptic-ulcer/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "gastritis",
  "gameId": "game-051",
  "name": {
    "vi": "Gastritis",
    "en": "Gastritis"
  },
  "desc": {
    "vi": "Học gastritis detection.",
    "en": "Learn gastritis detection."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/gastritis/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "esophagitis",
  "gameId": "game-052",
  "name": {
    "vi": "Esophagitis",
    "en": "Esophagitis"
  },
  "desc": {
    "vi": "Học esophagitis detection.",
    "en": "Learn esophagitis detection."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/esophagitis/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "barrett-esophagus",
  "gameId": "game-053",
  "name": {
    "vi": "Barrett Esophagus",
    "en": "Barrett Esophagus"
  },
  "desc": {
    "vi": "Học Barrett's esophagus.",
    "en": "Learn Barrett's esophagus."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/barrett-esophagus/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "esophageal-cancer",
  "gameId": "game-054",
  "name": {
    "vi": "Esophageal Cancer",
    "en": "Esophageal Cancer"
  },
  "desc": {
    "vi": "Học esophageal cancer.",
    "en": "Learn esophageal cancer."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/esophageal-cancer/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "gastric-cancer",
  "gameId": "game-055",
  "name": {
    "vi": "Gastric Cancer",
    "en": "Gastric Cancer"
  },
  "desc": {
    "vi": "Học gastric cancer.",
    "en": "Learn gastric cancer."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/gastric-cancer/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "colorectal-cancer",
  "gameId": "game-056",
  "name": {
    "vi": "Colorectal Cancer",
    "en": "Colorectal Cancer"
  },
  "desc": {
    "vi": "Học colorectal cancer.",
    "en": "Learn colorectal cancer."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/colorectal-cancer/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "pancreatic-cancer",
  "gameId": "game-057",
  "name": {
    "vi": "Pancreatic Cancer",
    "en": "Pancreatic Cancer"
  },
  "desc": {
    "vi": "Học pancreatic cancer.",
    "en": "Learn pancreatic cancer."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/pancreatic-cancer/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "prostate-cancer",
  "gameId": "game-058",
  "name": {
    "vi": "Prostate Cancer",
    "en": "Prostate Cancer"
  },
  "desc": {
    "vi": "Học prostate cancer.",
    "en": "Learn prostate cancer."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/prostate-cancer/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "breast-cancer",
  "gameId": "game-059",
  "name": {
    "vi": "Breast Cancer",
    "en": "Breast Cancer"
  },
  "desc": {
    "vi": "Học breast cancer detection.",
    "en": "Learn breast cancer detection."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/breast-cancer/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "ovarian-cancer",
  "gameId": "game-060",
  "name": {
    "vi": "Ovarian Cancer",
    "en": "Ovarian Cancer"
  },
  "desc": {
    "vi": "Học ovarian cancer.",
    "en": "Learn ovarian cancer."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/ovarian-cancer/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "cervical-cancer",
  "gameId": "game-061",
  "name": {
    "vi": "Cervical Cancer",
    "en": "Cervical Cancer"
  },
  "desc": {
    "vi": "Học cervical cancer.",
    "en": "Learn cervical cancer."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/cervical-cancer/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "endometrial-cancer",
  "gameId": "game-062",
  "name": {
    "vi": "Endometrial Cancer",
    "en": "Endometrial Cancer"
  },
  "desc": {
    "vi": "Học endometrial cancer.",
    "en": "Learn endometrial cancer."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/endometrial-cancer/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "thyroid-cancer",
  "gameId": "game-063",
  "name": {
    "vi": "Thyroid Cancer",
    "en": "Thyroid Cancer"
  },
  "desc": {
    "vi": "Học thyroid cancer.",
    "en": "Learn thyroid cancer."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/thyroid-cancer/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "leukemia",
  "gameId": "game-064",
  "name": {
    "vi": "Leukemia",
    "en": "Leukemia"
  },
  "desc": {
    "vi": "Học leukemia detection.",
    "en": "Learn leukemia detection."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/leukemia/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "lymphoma",
  "gameId": "game-065",
  "name": {
    "vi": "Lymphoma",
    "en": "Lymphoma"
  },
  "desc": {
    "vi": "Học lymphoma detection.",
    "en": "Learn lymphoma detection."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/lymphoma/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "multiple-myeloma",
  "gameId": "game-066",
  "name": {
    "vi": "Multiple Myeloma",
    "en": "Multiple Myeloma"
  },
  "desc": {
    "vi": "Học multiple myeloma.",
    "en": "Learn multiple myeloma."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/multiple-myeloma/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "sarcoma",
  "gameId": "game-067",
  "name": {
    "vi": "Sarcoma",
    "en": "Sarcoma"
  },
  "desc": {
    "vi": "Học sarcoma detection.",
    "en": "Learn sarcoma detection."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/sarcoma/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "neuroblastoma",
  "gameId": "game-068",
  "name": {
    "vi": "Neuroblastoma",
    "en": "Neuroblastoma"
  },
  "desc": {
    "vi": "Học neuroblastoma.",
    "en": "Learn neuroblastoma."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/neuroblastoma/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "glioblastoma",
  "gameId": "game-069",
  "name": {
    "vi": "Glioblastoma",
    "en": "Glioblastoma"
  },
  "desc": {
    "vi": "Học glioblastoma.",
    "en": "Learn glioblastoma."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/glioblastoma/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "meningioma",
  "gameId": "game-070",
  "name": {
    "vi": "Meningioma",
    "en": "Meningioma"
  },
  "desc": {
    "vi": "Học meningioma.",
    "en": "Learn meningioma."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/meningioma/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "pituitary-adenoma",
  "gameId": "game-071",
  "name": {
    "vi": "Pituitary Adenoma",
    "en": "Pituitary Adenoma"
  },
  "desc": {
    "vi": "Học pituitary adenoma.",
    "en": "Learn pituitary adenoma."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/pituitary-adenoma/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "acoustic-neuroma",
  "gameId": "game-072",
  "name": {
    "vi": "Acoustic Neuroma",
    "en": "Acoustic Neuroma"
  },
  "desc": {
    "vi": "Học acoustic neuroma.",
    "en": "Learn acoustic neuroma."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/acoustic-neuroma/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "craniopharyngioma",
  "gameId": "game-073",
  "name": {
    "vi": "Craniopharyngioma",
    "en": "Craniopharyngioma"
  },
  "desc": {
    "vi": "Học craniopharyngioma.",
    "en": "Learn craniopharyngioma."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/craniopharyngioma/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "ependymoma",
  "gameId": "game-074",
  "name": {
    "vi": "Ependymoma",
    "en": "Ependymoma"
  },
  "desc": {
    "vi": "Học ependymoma.",
    "en": "Learn ependymoma."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/ependymoma/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "medulloblastoma",
  "gameId": "game-075",
  "name": {
    "vi": "Medulloblastoma",
    "en": "Medulloblastoma"
  },
  "desc": {
    "vi": "Học medulloblastoma.",
    "en": "Learn medulloblastoma."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/medulloblastoma/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "oligodendroglioma",
  "gameId": "game-076",
  "name": {
    "vi": "Oligodendroglioma",
    "en": "Oligodendroglioma"
  },
  "desc": {
    "vi": "Học oligodendroglioma.",
    "en": "Learn oligodendroglioma."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/oligodendroglioma/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "astrocytoma",
  "gameId": "game-077",
  "name": {
    "vi": "Astrocytoma",
    "en": "Astrocytoma"
  },
  "desc": {
    "vi": "Học astrocytoma.",
    "en": "Learn astrocytoma."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/astrocytoma/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "ependymal-tumor",
  "gameId": "game-078",
  "name": {
    "vi": "Ependymal Tumor",
    "en": "Ependymal Tumor"
  },
  "desc": {
    "vi": "Học ependymal tumor.",
    "en": "Learn ependymal tumor."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/ependymal-tumor/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "pineal-tumor",
  "gameId": "game-079",
  "name": {
    "vi": "Pineal Tumor",
    "en": "Pineal Tumor"
  },
  "desc": {
    "vi": "Học pineal tumor.",
    "en": "Learn pineal tumor."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/pineal-tumor/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "choroid-plexus",
  "gameId": "game-080",
  "name": {
    "vi": "Choroid Plexus",
    "en": "Choroid Plexus"
  },
  "desc": {
    "vi": "Học choroid plexus tumor.",
    "en": "Learn choroid plexus tumor."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/choroid-plexus/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "pineocytoma",
  "gameId": "game-081",
  "name": {
    "vi": "Pineocytoma",
    "en": "Pineocytoma"
  },
  "desc": {
    "vi": "Học pineocytoma.",
    "en": "Learn pineocytoma."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/pineocytoma/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "pineoblastoma",
  "gameId": "game-082",
  "name": {
    "vi": "Pineoblastoma",
    "en": "Pineoblastoma"
  },
  "desc": {
    "vi": "Học pineoblastoma.",
    "en": "Learn pineoblastoma."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/pineoblastoma/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "papillary-tumor",
  "gameId": "game-083",
  "name": {
    "vi": "Papillary Tumor",
    "en": "Papillary Tumor"
  },
  "desc": {
    "vi": "Học papillary tumor.",
    "en": "Learn papillary tumor."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/papillary-tumor/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "atypical-teratoid",
  "gameId": "game-084",
  "name": {
    "vi": "Atypical Teratoid",
    "en": "Atypical Teratoid"
  },
  "desc": {
    "vi": "Học atypical teratoid.",
    "en": "Learn atypical teratoid."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/atypical-teratoid/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "rhabdoid-tumor",
  "gameId": "game-085",
  "name": {
    "vi": "Rhabdoid Tumor",
    "en": "Rhabdoid Tumor"
  },
  "desc": {
    "vi": "Học rhabdoid tumor.",
    "en": "Learn rhabdoid tumor."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/rhabdoid-tumor/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "hemangioblastoma",
  "gameId": "game-086",
  "name": {
    "vi": "Hemangioblastoma",
    "en": "Hemangioblastoma"
  },
  "desc": {
    "vi": "Học hemangioblastoma.",
    "en": "Learn hemangioblastoma."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/hemangioblastoma/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "schwannoma",
  "gameId": "game-087",
  "name": {
    "vi": "Schwannoma",
    "en": "Schwannoma"
  },
  "desc": {
    "vi": "Học schwannoma.",
    "en": "Learn schwannoma."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/schwannoma/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "neurofibroma",
  "gameId": "game-088",
  "name": {
    "vi": "Neurofibroma",
    "en": "Neurofibroma"
  },
  "desc": {
    "vi": "Học neurofibroma.",
    "en": "Learn neurofibroma."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/neurofibroma/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "ganglioglioma",
  "gameId": "game-089",
  "name": {
    "vi": "Ganglioglioma",
    "en": "Ganglioglioma"
  },
  "desc": {
    "vi": "Học ganglioglioma.",
    "en": "Learn ganglioglioma."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/ganglioglioma/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "dysembryoplastic",
  "gameId": "game-090",
  "name": {
    "vi": "Dysembryoplastic",
    "en": "Dysembryoplastic"
  },
  "desc": {
    "vi": "Học dysembryoplastic.",
    "en": "Learn dysembryoplastic."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/dysembryoplastic/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "central-neurocytoma",
  "gameId": "game-091",
  "name": {
    "vi": "Central Neurocytoma",
    "en": "Central Neurocytoma"
  },
  "desc": {
    "vi": "Học central neurocytoma.",
    "en": "Learn central neurocytoma."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/central-neurocytoma/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "subependymal-giant",
  "gameId": "game-092",
  "name": {
    "vi": "Subependymal Giant",
    "en": "Subependymal Giant"
  },
  "desc": {
    "vi": "Học subependymal giant cell.",
    "en": "Learn subependymal giant cell."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/subependymal-giant/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "desmoplastic-infantile",
  "gameId": "game-093",
  "name": {
    "vi": "Desmoplastic Infantile",
    "en": "Desmoplastic Infantile"
  },
  "desc": {
    "vi": "Học desmoplastic infantile.",
    "en": "Learn desmoplastic infantile."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/desmoplastic-infantile/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "pleomorphic-xantho",
  "gameId": "game-094",
  "name": {
    "vi": "Pleomorphic Xantho",
    "en": "Pleomorphic Xantho"
  },
  "desc": {
    "vi": "Học pleomorphic xanthoastrocytoma.",
    "en": "Learn pleomorphic xanthoastrocytoma."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/pleomorphic-xantho/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "papillary-glioneuronal",
  "gameId": "game-095",
  "name": {
    "vi": "Papillary Glioneuronal",
    "en": "Papillary Glioneuronal"
  },
  "desc": {
    "vi": "Học papillary glioneuronal.",
    "en": "Learn papillary glioneuronal."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/papillary-glioneuronal/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "rosette-forming",
  "gameId": "game-096",
  "name": {
    "vi": "Rosette Forming",
    "en": "Rosette Forming"
  },
  "desc": {
    "vi": "Học rosette forming.",
    "en": "Learn rosette forming."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/rosette-forming/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "diffuse-leptomeningeal",
  "gameId": "game-097",
  "name": {
    "vi": "Diffuse Leptomeningeal",
    "en": "Diffuse Leptomeningeal"
  },
  "desc": {
    "vi": "Học diffuse leptomeningeal.",
    "en": "Learn diffuse leptomeningeal."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/diffuse-leptomeningeal/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "disseminated-astrocytic",
  "gameId": "game-098",
  "name": {
    "vi": "Disseminated Astrocytic",
    "en": "Disseminated Astrocytic"
  },
  "desc": {
    "vi": "Học disseminated astrocytic.",
    "en": "Learn disseminated astrocytic."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/disseminated-astrocytic/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "gliomatosis-cerebri",
  "gameId": "game-099",
  "name": {
    "vi": "Gliomatosis Cerebri",
    "en": "Gliomatosis Cerebri"
  },
  "desc": {
    "vi": "Học gliomatosis cerebri.",
    "en": "Learn gliomatosis cerebri."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/gliomatosis-cerebri/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "diffuse-midline",
  "gameId": "game-100",
  "name": {
    "vi": "Diffuse Midline",
    "en": "Diffuse Midline"
  },
  "desc": {
    "vi": "Học diffuse midline glioma.",
    "en": "Learn diffuse midline glioma."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/diffuse-midline/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "diffuse-astrocytoma",
  "gameId": "game-101",
  "name": {
    "vi": "Diffuse Astrocytoma",
    "en": "Diffuse Astrocytoma"
  },
  "desc": {
    "vi": "Học diffuse astrocytoma.",
    "en": "Learn diffuse astrocytoma."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/diffuse-astrocytoma/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "anaplastic-astrocytoma",
  "gameId": "game-102",
  "name": {
    "vi": "Anaplastic Astrocytoma",
    "en": "Anaplastic Astrocytoma"
  },
  "desc": {
    "vi": "Học anaplastic astrocytoma.",
    "en": "Learn anaplastic astrocytoma."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/anaplastic-astrocytoma/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "gliosarcoma",
  "gameId": "game-103",
  "name": {
    "vi": "Gliosarcoma",
    "en": "Gliosarcoma"
  },
  "desc": {
    "vi": "Học gliosarcoma.",
    "en": "Learn gliosarcoma."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/gliosarcoma/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "astroblastoma",
  "gameId": "game-104",
  "name": {
    "vi": "Astroblastoma",
    "en": "Astroblastoma"
  },
  "desc": {
    "vi": "Học astroblastoma.",
    "en": "Learn astroblastoma."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/astroblastoma/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "chordoid-glioma",
  "gameId": "game-105",
  "name": {
    "vi": "Chordoid Glioma",
    "en": "Chordoid Glioma"
  },
  "desc": {
    "vi": "Học chordoid glioma.",
    "en": "Learn chordoid glioma."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/chordoid-glioma/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "angiocentric-glioma",
  "gameId": "game-106",
  "name": {
    "vi": "Angiocentric Glioma",
    "en": "Angiocentric Glioma"
  },
  "desc": {
    "vi": "Học angiocentric glioma.",
    "en": "Learn angiocentric glioma."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/angiocentric-glioma/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "chemotherapy",
  "gameId": "game-001",
  "name": {
    "vi": "Chemotherapy",
    "en": "Chemotherapy"
  },
  "desc": {
    "vi": "Học chemotherapy protocols.",
    "en": "Learn chemotherapy protocols."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/chemotherapy/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "radiation-therapy",
  "gameId": "game-002",
  "name": {
    "vi": "Radiation Therapy",
    "en": "Radiation Therapy"
  },
  "desc": {
    "vi": "Học radiation therapy.",
    "en": "Learn radiation therapy."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/radiation-therapy/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "immunotherapy",
  "gameId": "game-003",
  "name": {
    "vi": "Immunotherapy",
    "en": "Immunotherapy"
  },
  "desc": {
    "vi": "Học immunotherapy.",
    "en": "Learn immunotherapy."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/immunotherapy/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "targeted-therapy",
  "gameId": "game-004",
  "name": {
    "vi": "Targeted Therapy",
    "en": "Targeted Therapy"
  },
  "desc": {
    "vi": "Học targeted therapy.",
    "en": "Learn targeted therapy."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/targeted-therapy/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "hormone-therapy",
  "gameId": "game-005",
  "name": {
    "vi": "Hormone Therapy",
    "en": "Hormone Therapy"
  },
  "desc": {
    "vi": "Học hormone therapy.",
    "en": "Learn hormone therapy."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/hormone-therapy/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "stem-cell",
  "gameId": "game-006",
  "name": {
    "vi": "Stem Cell",
    "en": "Stem Cell"
  },
  "desc": {
    "vi": "Học stem cell transplant.",
    "en": "Learn stem cell transplant."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/stem-cell/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "bone-marrow",
  "gameId": "game-007",
  "name": {
    "vi": "Bone Marrow",
    "en": "Bone Marrow"
  },
  "desc": {
    "vi": "Học bone marrow transplant.",
    "en": "Learn bone marrow transplant."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/bone-marrow/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "car-t-cell",
  "gameId": "game-008",
  "name": {
    "vi": "CAR-T Cell",
    "en": "CAR-T Cell"
  },
  "desc": {
    "vi": "Học CAR-T cell therapy.",
    "en": "Learn CAR-T cell therapy."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/car-t-cell/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "gene-therapy",
  "gameId": "game-009",
  "name": {
    "vi": "Gene Therapy",
    "en": "Gene Therapy"
  },
  "desc": {
    "vi": "Học gene therapy.",
    "en": "Learn gene therapy."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/gene-therapy/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "crispr-therapy",
  "gameId": "game-010",
  "name": {
    "vi": "CRISPR Therapy",
    "en": "CRISPR Therapy"
  },
  "desc": {
    "vi": "Học CRISPR therapy.",
    "en": "Learn CRISPR therapy."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/crispr-therapy/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "viral-therapy",
  "gameId": "game-011",
  "name": {
    "vi": "Viral Therapy",
    "en": "Viral Therapy"
  },
  "desc": {
    "vi": "Học oncolytic viral therapy.",
    "en": "Learn oncolytic viral therapy."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/viral-therapy/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "photodynamic",
  "gameId": "game-012",
  "name": {
    "vi": "Photodynamic",
    "en": "Photodynamic"
  },
  "desc": {
    "vi": "Học photodynamic therapy.",
    "en": "Learn photodynamic therapy."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/photodynamic/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "hyperthermia",
  "gameId": "game-013",
  "name": {
    "vi": "Hyperthermia",
    "en": "Hyperthermia"
  },
  "desc": {
    "vi": "Học hyperthermia.",
    "en": "Learn hyperthermia."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/hyperthermia/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "cryotherapy",
  "gameId": "game-014",
  "name": {
    "vi": "Cryotherapy",
    "en": "Cryotherapy"
  },
  "desc": {
    "vi": "Học cryotherapy.",
    "en": "Learn cryotherapy."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/cryotherapy/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "radiofrequency",
  "gameId": "game-015",
  "name": {
    "vi": "Radiofrequency",
    "en": "Radiofrequency"
  },
  "desc": {
    "vi": "Học radiofrequency ablation.",
    "en": "Learn radiofrequency ablation."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/radiofrequency/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "microwave-ablation",
  "gameId": "game-016",
  "name": {
    "vi": "Microwave Ablation",
    "en": "Microwave Ablation"
  },
  "desc": {
    "vi": "Học microwave ablation.",
    "en": "Learn microwave ablation."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/microwave-ablation/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "proton-therapy",
  "gameId": "game-017",
  "name": {
    "vi": "Proton Therapy",
    "en": "Proton Therapy"
  },
  "desc": {
    "vi": "Học proton therapy.",
    "en": "Learn proton therapy."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/proton-therapy/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "brachytherapy",
  "gameId": "game-018",
  "name": {
    "vi": "Brachytherapy",
    "en": "Brachytherapy"
  },
  "desc": {
    "vi": "Học brachytherapy.",
    "en": "Learn brachytherapy."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/brachytherapy/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "stereotactic-radiosurgery",
  "gameId": "game-019",
  "name": {
    "vi": "Stereotactic Radiosurgery",
    "en": "Stereotactic Radiosurgery"
  },
  "desc": {
    "vi": "Học stereotactic radiosurgery.",
    "en": "Learn stereotactic radiosurgery."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/stereotactic-radiosurgery/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "gamma-knife",
  "gameId": "game-020",
  "name": {
    "vi": "Gamma Knife",
    "en": "Gamma Knife"
  },
  "desc": {
    "vi": "Học Gamma Knife.",
    "en": "Learn Gamma Knife."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/gamma-knife/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "cyberknife",
  "gameId": "game-021",
  "name": {
    "vi": "CyberKnife",
    "en": "CyberKnife"
  },
  "desc": {
    "vi": "Học CyberKnife.",
    "en": "Learn CyberKnife."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/cyberknife/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "tomotherapy",
  "gameId": "game-022",
  "name": {
    "vi": "Tomotherapy",
    "en": "Tomotherapy"
  },
  "desc": {
    "vi": "Học tomotherapy.",
    "en": "Learn tomotherapy."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/tomotherapy/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "rapidarc",
  "gameId": "game-023",
  "name": {
    "vi": "RapidArc",
    "en": "RapidArc"
  },
  "desc": {
    "vi": "Học RapidArc.",
    "en": "Learn RapidArc."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/rapidarc/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "vmat",
  "gameId": "game-024",
  "name": {
    "vi": "VMAT",
    "en": "VMAT"
  },
  "desc": {
    "vi": "Học VMAT.",
    "en": "Learn VMAT."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/vmat/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "imrt",
  "gameId": "game-025",
  "name": {
    "vi": "IMRT",
    "en": "IMRT"
  },
  "desc": {
    "vi": "Học IMRT.",
    "en": "Learn IMRT."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/imrt/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "igrt",
  "gameId": "game-026",
  "name": {
    "vi": "IGRT",
    "en": "IGRT"
  },
  "desc": {
    "vi": "Học IGRT.",
    "en": "Learn IGRT."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/igrt/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "sbrt",
  "gameId": "game-027",
  "name": {
    "vi": "SBRT",
    "en": "SBRT"
  },
  "desc": {
    "vi": "Học SBRT.",
    "en": "Learn SBRT."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/sbrt/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "srs",
  "gameId": "game-028",
  "name": {
    "vi": "SRS",
    "en": "SRS"
  },
  "desc": {
    "vi": "Học SRS.",
    "en": "Learn SRS."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/srs/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "chop-protocol",
  "gameId": "game-029",
  "name": {
    "vi": "CHOP Protocol",
    "en": "CHOP Protocol"
  },
  "desc": {
    "vi": "Học CHOP protocol.",
    "en": "Learn CHOP protocol."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/chop-protocol/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "r-chop",
  "gameId": "game-030",
  "name": {
    "vi": "R-CHOP",
    "en": "R-CHOP"
  },
  "desc": {
    "vi": "Học R-CHOP protocol.",
    "en": "Learn R-CHOP protocol."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/r-chop/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "r-epoch",
  "gameId": "game-031",
  "name": {
    "vi": "R-EPOCH",
    "en": "R-EPOCH"
  },
  "desc": {
    "vi": "Học R-EPOCH protocol.",
    "en": "Learn R-EPOCH protocol."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/r-epoch/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "abvd",
  "gameId": "game-032",
  "name": {
    "vi": "ABVD",
    "en": "ABVD"
  },
  "desc": {
    "vi": "Học ABVD protocol.",
    "en": "Learn ABVD protocol."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/abvd/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "beacopp",
  "gameId": "game-033",
  "name": {
    "vi": "BEACOPP",
    "en": "BEACOPP"
  },
  "desc": {
    "vi": "Học BEACOPP protocol.",
    "en": "Learn BEACOPP protocol."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/beacopp/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "folfirinox",
  "gameId": "game-034",
  "name": {
    "vi": "FOLFIRINOX",
    "en": "FOLFIRINOX"
  },
  "desc": {
    "vi": "Học FOLFIRINOX protocol.",
    "en": "Learn FOLFIRINOX protocol."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/folfirinox/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "gemcitabine",
  "gameId": "game-035",
  "name": {
    "vi": "Gemcitabine",
    "en": "Gemcitabine"
  },
  "desc": {
    "vi": "Học gemcitabine protocol.",
    "en": "Learn gemcitabine protocol."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/gemcitabine/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "folfox",
  "gameId": "game-036",
  "name": {
    "vi": "FOLFOX",
    "en": "FOLFOX"
  },
  "desc": {
    "vi": "Học FOLFOX protocol.",
    "en": "Learn FOLFOX protocol."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/folfox/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "folfiri",
  "gameId": "game-037",
  "name": {
    "vi": "FOLFIRI",
    "en": "FOLFIRI"
  },
  "desc": {
    "vi": "Học FOLFIRI protocol.",
    "en": "Learn FOLFIRI protocol."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/folfiri/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "capox",
  "gameId": "game-038",
  "name": {
    "vi": "CAPOX",
    "en": "CAPOX"
  },
  "desc": {
    "vi": "Học CAPOX protocol.",
    "en": "Learn CAPOX protocol."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/capox/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "xelox",
  "gameId": "game-039",
  "name": {
    "vi": "XELOX",
    "en": "XELOX"
  },
  "desc": {
    "vi": "Học XELOX protocol.",
    "en": "Learn XELOX protocol."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/xelox/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "gcsf",
  "gameId": "game-040",
  "name": {
    "vi": "G-CSF",
    "en": "G-CSF"
  },
  "desc": {
    "vi": "Học G-CSF support.",
    "en": "Learn G-CSF support."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/gcsf/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "transfusion",
  "gameId": "game-041",
  "name": {
    "vi": "Transfusion",
    "en": "Transfusion"
  },
  "desc": {
    "vi": "Học transfusion support.",
    "en": "Learn transfusion support."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/transfusion/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "platelet-transfusion",
  "gameId": "game-042",
  "name": {
    "vi": "Platelet Transfusion",
    "en": "Platelet Transfusion"
  },
  "desc": {
    "vi": "Học platelet transfusion.",
    "en": "Learn platelet transfusion."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/platelet-transfusion/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "antibiotic-prophylaxis",
  "gameId": "game-043",
  "name": {
    "vi": "Antibiotic Prophylaxis",
    "en": "Antibiotic Prophylaxis"
  },
  "desc": {
    "vi": "Học antibiotic prophylaxis.",
    "en": "Learn antibiotic prophylaxis."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/antibiotic-prophylaxis/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "antifungal-prophylaxis",
  "gameId": "game-044",
  "name": {
    "vi": "Antifungal Prophylaxis",
    "en": "Antifungal Prophylaxis"
  },
  "desc": {
    "vi": "Học antifungal prophylaxis.",
    "en": "Learn antifungal prophylaxis."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/antifungal-prophylaxis/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "antiviral-prophylaxis",
  "gameId": "game-045",
  "name": {
    "vi": "Antiviral Prophylaxis",
    "en": "Antiviral Prophylaxis"
  },
  "desc": {
    "vi": "Học antiviral prophylaxis.",
    "en": "Learn antiviral prophylaxis."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/antiviral-prophylaxis/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "pneumocystis-prophylaxis",
  "gameId": "game-046",
  "name": {
    "vi": "Pneumocystis Prophylaxis",
    "en": "Pneumocystis Prophylaxis"
  },
  "desc": {
    "vi": "Học Pneumocystis prophylaxis.",
    "en": "Learn Pneumocystis prophylaxis."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/pneumocystis-prophylaxis/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "toxoplasmosis-prophylaxis",
  "gameId": "game-047",
  "name": {
    "vi": "Toxoplasmosis Prophylaxis",
    "en": "Toxoplasmosis Prophylaxis"
  },
  "desc": {
    "vi": "Học Toxoplasmosis prophylaxis.",
    "en": "Learn Toxoplasmosis prophylaxis."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/toxoplasmosis-prophylaxis/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "cmv-prophylaxis",
  "gameId": "game-048",
  "name": {
    "vi": "CMV Prophylaxis",
    "en": "CMV Prophylaxis"
  },
  "desc": {
    "vi": "Học CMV prophylaxis.",
    "en": "Learn CMV prophylaxis."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/cmv-prophylaxis/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "vaccination-schedule",
  "gameId": "game-049",
  "name": {
    "vi": "Vaccination Schedule",
    "en": "Vaccination Schedule"
  },
  "desc": {
    "vi": "Học vaccination schedule.",
    "en": "Learn vaccination schedule."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/vaccination-schedule/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "chemo-induced-nausea",
  "gameId": "game-050",
  "name": {
    "vi": "Chemo Induced Nausea",
    "en": "Chemo Induced Nausea"
  },
  "desc": {
    "vi": "Học CINV management.",
    "en": "Learn CINV management."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/chemo-induced-nausea/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "neutropenia",
  "gameId": "game-051",
  "name": {
    "vi": "Neutropenia",
    "en": "Neutropenia"
  },
  "desc": {
    "vi": "Học neutropenia management.",
    "en": "Learn neutropenia management."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/neutropenia/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "febrile-neutropenia",
  "gameId": "game-052",
  "name": {
    "vi": "Febrile Neutropenia",
    "en": "Febrile Neutropenia"
  },
  "desc": {
    "vi": "Học febrile neutropenia.",
    "en": "Learn febrile neutropenia."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/febrile-neutropenia/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "thrombocytopenia",
  "gameId": "game-053",
  "name": {
    "vi": "Thrombocytopenia",
    "en": "Thrombocytopenia"
  },
  "desc": {
    "vi": "Học thrombocytopenia management.",
    "en": "Learn thrombocytopenia management."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/thrombocytopenia/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "anemia",
  "gameId": "game-054",
  "name": {
    "vi": "Anemia",
    "en": "Anemia"
  },
  "desc": {
    "vi": "Học anemia management.",
    "en": "Learn anemia management."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/anemia/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "fatigue",
  "gameId": "game-055",
  "name": {
    "vi": "Fatigue",
    "en": "Fatigue"
  },
  "desc": {
    "vi": "Học cancer-related fatigue.",
    "en": "Learn cancer-related fatigue."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/fatigue/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "pain-management",
  "gameId": "game-056",
  "name": {
    "vi": "Pain Management",
    "en": "Pain Management"
  },
  "desc": {
    "vi": "Học cancer pain management.",
    "en": "Learn cancer pain management."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/pain-management/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "neuropathic-pain",
  "gameId": "game-057",
  "name": {
    "vi": "Neuropathic Pain",
    "en": "Neuropathic Pain"
  },
  "desc": {
    "vi": "Học neuropathic pain management.",
    "en": "Learn neuropathic pain management."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/neuropathic-pain/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "breakthrough-pain",
  "gameId": "game-058",
  "name": {
    "vi": "Breakthrough Pain",
    "en": "Breakthrough Pain"
  },
  "desc": {
    "vi": "Học breakthrough pain management.",
    "en": "Learn breakthrough pain management."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/breakthrough-pain/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "opioid-conversion",
  "gameId": "game-059",
  "name": {
    "vi": "Opioid Conversion",
    "en": "Opioid Conversion"
  },
  "desc": {
    "vi": "Học opioid conversion.",
    "en": "Learn opioid conversion."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/opioid-conversion/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "pca-pump",
  "gameId": "game-060",
  "name": {
    "vi": "PCA Pump",
    "en": "PCA Pump"
  },
  "desc": {
    "vi": "Học PCA pump management.",
    "en": "Learn PCA pump management."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/pca-pump/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "epidural-analgesia",
  "gameId": "game-061",
  "name": {
    "vi": "Epidural Analgesia",
    "en": "Epidural Analgesia"
  },
  "desc": {
    "vi": "Học epidural analgesia.",
    "en": "Learn epidural analgesia."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/epidural-analgesia/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "spinal-analgesia",
  "gameId": "game-062",
  "name": {
    "vi": "Spinal Analgesia",
    "en": "Spinal Analgesia"
  },
  "desc": {
    "vi": "Học spinal analgesia.",
    "en": "Learn spinal analgesia."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/spinal-analgesia/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "nerve-block",
  "gameId": "game-063",
  "name": {
    "vi": "Nerve Block",
    "en": "Nerve Block"
  },
  "desc": {
    "vi": "Học nerve block.",
    "en": "Learn nerve block."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/nerve-block/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "radiofrequency-ablation-pain",
  "gameId": "game-064",
  "name": {
    "vi": "Radiofrequency Ablation Pain",
    "en": "Radiofrequency Ablation Pain"
  },
  "desc": {
    "vi": "Học radiofrequency ablation for pain.",
    "en": "Learn radiofrequency ablation for pain."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/radiofrequency-ablation-pain/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "spinal-cord-stimulator",
  "gameId": "game-065",
  "name": {
    "vi": "Spinal Cord Stimulator",
    "en": "Spinal Cord Stimulator"
  },
  "desc": {
    "vi": "Học spinal cord stimulation.",
    "en": "Learn spinal cord stimulation."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/spinal-cord-stimulator/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "intrathecal-pump",
  "gameId": "game-066",
  "name": {
    "vi": "Intrathecal Pump",
    "en": "Intrathecal Pump"
  },
  "desc": {
    "vi": "Học intrathecal pump.",
    "en": "Learn intrathecal pump."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/intrathecal-pump/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "celiac-plexus-block",
  "gameId": "game-067",
  "name": {
    "vi": "Celiac Plexus Block",
    "en": "Celiac Plexus Block"
  },
  "desc": {
    "vi": "Học celiac plexus block.",
    "en": "Learn celiac plexus block."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/celiac-plexus-block/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "lumbar-sympathetic",
  "gameId": "game-068",
  "name": {
    "vi": "Lumbar Sympathetic",
    "en": "Lumbar Sympathetic"
  },
  "desc": {
    "vi": "Học lumbar sympathetic block.",
    "en": "Learn lumbar sympathetic block."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/lumbar-sympathetic/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "femoral-nerve",
  "gameId": "game-069",
  "name": {
    "vi": "Femoral Nerve",
    "en": "Femoral Nerve"
  },
  "desc": {
    "vi": "Học femoral nerve block.",
    "en": "Learn femoral nerve block."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/femoral-nerve/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "sciatic-nerve",
  "gameId": "game-070",
  "name": {
    "vi": "Sciatic Nerve",
    "en": "Sciatic Nerve"
  },
  "desc": {
    "vi": "Học sciatic nerve block.",
    "en": "Learn sciatic nerve block."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/sciatic-nerve/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "radial-nerve",
  "gameId": "game-071",
  "name": {
    "vi": "Radial Nerve",
    "en": "Radial Nerve"
  },
  "desc": {
    "vi": "Học radial nerve block.",
    "en": "Learn radial nerve block."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/radial-nerve/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "median-nerve",
  "gameId": "game-072",
  "name": {
    "vi": "Median Nerve",
    "en": "Median Nerve"
  },
  "desc": {
    "vi": "Học median nerve block.",
    "en": "Learn median nerve block."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/median-nerve/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "ulnar-nerve",
  "gameId": "game-073",
  "name": {
    "vi": "Ulnar Nerve",
    "en": "Ulnar Nerve"
  },
  "desc": {
    "vi": "Học ulnar nerve block.",
    "en": "Learn ulnar nerve block."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/ulnar-nerve/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "axillary-nerve",
  "gameId": "game-074",
  "name": {
    "vi": "Axillary Nerve",
    "en": "Axillary Nerve"
  },
  "desc": {
    "vi": "Học axillary nerve block.",
    "en": "Learn axillary nerve block."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/axillary-nerve/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "suprascapular-nerve",
  "gameId": "game-075",
  "name": {
    "vi": "Suprascapular Nerve",
    "en": "Suprascapular Nerve"
  },
  "desc": {
    "vi": "Học suprascapular nerve block.",
    "en": "Learn suprascapular nerve block."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/suprascapular-nerve/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "interscalene",
  "gameId": "game-076",
  "name": {
    "vi": "Interscalene",
    "en": "Interscalene"
  },
  "desc": {
    "vi": "Học interscalene block.",
    "en": "Learn interscalene block."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/interscalene/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "greater-occipital",
  "gameId": "game-077",
  "name": {
    "vi": "Greater Occipital",
    "en": "Greater Occipital"
  },
  "desc": {
    "vi": "Học greater occipital nerve block.",
    "en": "Learn greater occipital nerve block."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/greater-occipital/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "trigeminal-nerve",
  "gameId": "game-078",
  "name": {
    "vi": "Trigeminal Nerve",
    "en": "Trigeminal Nerve"
  },
  "desc": {
    "vi": "Học trigeminal nerve block.",
    "en": "Learn trigeminal nerve block."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/trigeminal-nerve/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "sphenopalatine",
  "gameId": "game-079",
  "name": {
    "vi": "Sphenopalatine",
    "en": "Sphenopalatine"
  },
  "desc": {
    "vi": "Học sphenopalatine ganglion block.",
    "en": "Learn sphenopalatine ganglion block."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/sphenopalatine/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "conscious-sedation",
  "gameId": "game-080",
  "name": {
    "vi": "Conscious Sedation",
    "en": "Conscious Sedation"
  },
  "desc": {
    "vi": "Học conscious sedation.",
    "en": "Learn conscious sedation."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/conscious-sedation/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "monitored-anesthesia",
  "gameId": "game-081",
  "name": {
    "vi": "Monitored Anesthesia",
    "en": "Monitored Anesthesia"
  },
  "desc": {
    "vi": "Học monitored anesthesia care.",
    "en": "Learn monitored anesthesia care."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/monitored-anesthesia/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "total-intravenous",
  "gameId": "game-082",
  "name": {
    "vi": "Total Intravenous",
    "en": "Total Intravenous"
  },
  "desc": {
    "vi": "Học TIVA.",
    "en": "Learn TIVA."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/total-intravenous/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "balanced-anesthesia",
  "gameId": "game-083",
  "name": {
    "vi": "Balanced Anesthesia",
    "en": "Balanced Anesthesia"
  },
  "desc": {
    "vi": "Học balanced anesthesia.",
    "en": "Learn balanced anesthesia."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/balanced-anesthesia/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "inhalational-anesthesia",
  "gameId": "game-084",
  "name": {
    "vi": "Inhalational Anesthesia",
    "en": "Inhalational Anesthesia"
  },
  "desc": {
    "vi": "Học inhalational anesthesia.",
    "en": "Learn inhalational anesthesia."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/inhalational-anesthesia/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "regional-anesthesia",
  "gameId": "game-085",
  "name": {
    "vi": "Regional Anesthesia",
    "en": "Regional Anesthesia"
  },
  "desc": {
    "vi": "Học regional anesthesia.",
    "en": "Learn regional anesthesia."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/regional-anesthesia/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "neuraxial-anesthesia",
  "gameId": "game-086",
  "name": {
    "vi": "Neuraxial Anesthesia",
    "en": "Neuraxial Anesthesia"
  },
  "desc": {
    "vi": "Học neuraxial anesthesia.",
    "en": "Learn neuraxial anesthesia."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/neuraxial-anesthesia/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "spinal-anesthesia",
  "gameId": "game-087",
  "name": {
    "vi": "Spinal Anesthesia",
    "en": "Spinal Anesthesia"
  },
  "desc": {
    "vi": "Học spinal anesthesia.",
    "en": "Learn spinal anesthesia."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/spinal-anesthesia/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "epidural-anesthesia",
  "gameId": "game-088",
  "name": {
    "vi": "Epidural Anesthesia",
    "en": "Epidural Anesthesia"
  },
  "desc": {
    "vi": "Học epidural anesthesia.",
    "en": "Learn epidural anesthesia."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/epidural-anesthesia/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "caudal-anesthesia",
  "gameId": "game-089",
  "name": {
    "vi": "Caudal Anesthesia",
    "en": "Caudal Anesthesia"
  },
  "desc": {
    "vi": "Học caudal anesthesia.",
    "en": "Learn caudal anesthesia."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/caudal-anesthesia/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "combined-spinal-epidural",
  "gameId": "game-090",
  "name": {
    "vi": "Combined Spinal Epidural",
    "en": "Combined Spinal Epidural"
  },
  "desc": {
    "vi": "Học combined spinal-epidural.",
    "en": "Learn combined spinal-epidural."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/combined-spinal-epidural/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "patient-controlled",
  "gameId": "game-091",
  "name": {
    "vi": "Patient Controlled",
    "en": "Patient Controlled"
  },
  "desc": {
    "vi": "Học patient-controlled analgesia.",
    "en": "Learn patient-controlled analgesia."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/patient-controlled/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "nerve-stimulator",
  "gameId": "game-092",
  "name": {
    "vi": "Nerve Stimulator",
    "en": "Nerve Stimulator"
  },
  "desc": {
    "vi": "Học nerve stimulator guidance.",
    "en": "Learn nerve stimulator guidance."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/nerve-stimulator/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "ultrasound-guidance",
  "gameId": "game-093",
  "name": {
    "vi": "Ultrasound Guidance",
    "en": "Ultrasound Guidance"
  },
  "desc": {
    "vi": "Học ultrasound guidance.",
    "en": "Learn ultrasound guidance."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/ultrasound-guidance/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "fluoroscopy-guidance",
  "gameId": "game-094",
  "name": {
    "vi": "Fluoroscopy Guidance",
    "en": "Fluoroscopy Guidance"
  },
  "desc": {
    "vi": "Học fluoroscopy guidance.",
    "en": "Learn fluoroscopy guidance."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/fluoroscopy-guidance/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "ct-guidance",
  "gameId": "game-095",
  "name": {
    "vi": "CT Guidance",
    "en": "CT Guidance"
  },
  "desc": {
    "vi": "Học CT guidance.",
    "en": "Learn CT guidance."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/ct-guidance/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "mri-guidance",
  "gameId": "game-096",
  "name": {
    "vi": "MRI Guidance",
    "en": "MRI Guidance"
  },
  "desc": {
    "vi": "Học MRI guidance.",
    "en": "Learn MRI guidance."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/mri-guidance/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "electromyography",
  "gameId": "game-097",
  "name": {
    "vi": "Electromyography",
    "en": "Electromyography"
  },
  "desc": {
    "vi": "Học EMG guidance.",
    "en": "Learn EMG guidance."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/electromyography/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "evoked-potentials",
  "gameId": "game-098",
  "name": {
    "vi": "Evoked Potentials",
    "en": "Evoked Potentials"
  },
  "desc": {
    "vi": "Học evoked potentials.",
    "en": "Learn evoked potentials."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/evoked-potentials/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "bispectral-index",
  "gameId": "game-099",
  "name": {
    "vi": "Bispectral Index",
    "en": "Bispectral Index"
  },
  "desc": {
    "vi": "Học BIS monitoring.",
    "en": "Learn BIS monitoring."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/bispectral-index/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "entropy-monitor",
  "gameId": "game-100",
  "name": {
    "vi": "Entropy Monitor",
    "en": "Entropy Monitor"
  },
  "desc": {
    "vi": "Học entropy monitoring.",
    "en": "Learn entropy monitoring."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/entropy-monitor/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "nociception-monitor",
  "gameId": "game-101",
  "name": {
    "vi": "Nociception Monitor",
    "en": "Nociception Monitor"
  },
  "desc": {
    "vi": "Học nociception monitoring.",
    "en": "Learn nociception monitoring."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/nociception-monitor/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "analgosedation",
  "gameId": "game-102",
  "name": {
    "vi": "Analgosedation",
    "en": "Analgosedation"
  },
  "desc": {
    "vi": "Học analgosedation.",
    "en": "Learn analgosedation."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/analgosedation/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "dexmedetomidine",
  "gameId": "game-103",
  "name": {
    "vi": "Dexmedetomidine",
    "en": "Dexmedetomidine"
  },
  "desc": {
    "vi": "Học dexmedetomidine sedation.",
    "en": "Learn dexmedetomidine sedation."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/dexmedetomidine/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "remifentanil",
  "gameId": "game-104",
  "name": {
    "vi": "Remifentanil",
    "en": "Remifentanil"
  },
  "desc": {
    "vi": "Học remifentanil infusion.",
    "en": "Learn remifentanil infusion."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/remifentanil/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "propofol-infusion",
  "gameId": "game-105",
  "name": {
    "vi": "Propofol Infusion",
    "en": "Propofol Infusion"
  },
  "desc": {
    "vi": "Học propofol infusion.",
    "en": "Learn propofol infusion."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/propofol-infusion/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "ketamine-infusion",
  "gameId": "game-106",
  "name": {
    "vi": "Ketamine Infusion",
    "en": "Ketamine Infusion"
  },
  "desc": {
    "vi": "Học ketamine infusion.",
    "en": "Learn ketamine infusion."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/ketamine-infusion/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "midazolam-sedation",
  "gameId": "game-107",
  "name": {
    "vi": "Midazolam Sedation",
    "en": "Midazolam Sedation"
  },
  "desc": {
    "vi": "Học midazolam sedation.",
    "en": "Learn midazolam sedation."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/midazolam-sedation/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "lorazepam-sedation",
  "gameId": "game-108",
  "name": {
    "vi": "Lorazepam Sedation",
    "en": "Lorazepam Sedation"
  },
  "desc": {
    "vi": "Học lorazepam sedation.",
    "en": "Learn lorazepam sedation."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/lorazepam-sedation/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "diazepam-sedation",
  "gameId": "game-109",
  "name": {
    "vi": "Diazepam Sedation",
    "en": "Diazepam Sedation"
  },
  "desc": {
    "vi": "Học diazepam sedation.",
    "en": "Learn diazepam sedation."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/diazepam-sedation/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "clonazepam-sedation",
  "gameId": "game-110",
  "name": {
    "vi": "Clonazepam Sedation",
    "en": "Clonazepam Sedation"
  },
  "desc": {
    "vi": "Học clonazepam sedation.",
    "en": "Learn clonazepam sedation."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/clonazepam-sedation/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "alprazolam-sedation",
  "gameId": "game-111",
  "name": {
    "vi": "Alprazolam Sedation",
    "en": "Alprazolam Sedation"
  },
  "desc": {
    "vi": "Học alprazolam sedation.",
    "en": "Learn alprazolam sedation."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/alprazolam-sedation/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "zolpidem-sedation",
  "gameId": "game-112",
  "name": {
    "vi": "Zolpidem Sedation",
    "en": "Zolpidem Sedation"
  },
  "desc": {
    "vi": "Học zolpidem sedation.",
    "en": "Learn zolpidem sedation."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/zolpidem-sedation/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "eszopiclone",
  "gameId": "game-113",
  "name": {
    "vi": "Eszopiclone",
    "en": "Eszopiclone"
  },
  "desc": {
    "vi": "Học eszopiclone sedation.",
    "en": "Learn eszopiclone sedation."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/eszopiclone/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "zaleplon",
  "gameId": "game-114",
  "name": {
    "vi": "Zaleplon",
    "en": "Zaleplon"
  },
  "desc": {
    "vi": "Học zaleplon sedation.",
    "en": "Learn zaleplon sedation."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/zaleplon/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "ramelteon",
  "gameId": "game-115",
  "name": {
    "vi": "Ramelteon",
    "en": "Ramelteon"
  },
  "desc": {
    "vi": "Học ramelteon sedation.",
    "en": "Learn ramelteon sedation."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/ramelteon/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "tasimelteon",
  "gameId": "game-116",
  "name": {
    "vi": "Tasimelteon",
    "en": "Tasimelteon"
  },
  "desc": {
    "vi": "Học tasimelteon sedation.",
    "en": "Learn tasimelteon sedation."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/tasimelteon/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "suvorexant",
  "gameId": "game-117",
  "name": {
    "vi": "Suvorexant",
    "en": "Suvorexant"
  },
  "desc": {
    "vi": "Học suvorexant sedation.",
    "en": "Learn suvorexant sedation."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/suvorexant/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "lemborexant",
  "gameId": "game-118",
  "name": {
    "vi": "Lemborexant",
    "en": "Lemborexant"
  },
  "desc": {
    "vi": "Học lemborexant sedation.",
    "en": "Learn lemborexant sedation."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/lemborexant/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "daridorexant",
  "gameId": "game-119",
  "name": {
    "vi": "Daridorexant",
    "en": "Daridorexant"
  },
  "desc": {
    "vi": "Học daridorexant sedation.",
    "en": "Learn daridorexant sedation."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/daridorexant/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "melatonin",
  "gameId": "game-120",
  "name": {
    "vi": "Melatonin",
    "en": "Melatonin"
  },
  "desc": {
    "vi": "Học melatonin sedation.",
    "en": "Learn melatonin sedation."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/melatonin/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "diphenhydramine",
  "gameId": "game-121",
  "name": {
    "vi": "Diphenhydramine",
    "en": "Diphenhydramine"
  },
  "desc": {
    "vi": "Học diphenhydramine sedation.",
    "en": "Learn diphenhydramine sedation."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/diphenhydramine/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "doxylamine",
  "gameId": "game-122",
  "name": {
    "vi": "Doxylamine",
    "en": "Doxylamine"
  },
  "desc": {
    "vi": "Học doxylamine sedation.",
    "en": "Learn doxylamine sedation."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/doxylamine/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "promethazine",
  "gameId": "game-123",
  "name": {
    "vi": "Promethazine",
    "en": "Promethazine"
  },
  "desc": {
    "vi": "Học promethazine sedation.",
    "en": "Learn promethazine sedation."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/promethazine/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "hydroxyzine",
  "gameId": "game-124",
  "name": {
    "vi": "Hydroxyzine",
    "en": "Hydroxyzine"
  },
  "desc": {
    "vi": "Học hydroxyzine sedation.",
    "en": "Learn hydroxyzine sedation."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/hydroxyzine/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "chlorpromazine",
  "gameId": "game-125",
  "name": {
    "vi": "Chlorpromazine",
    "en": "Chlorpromazine"
  },
  "desc": {
    "vi": "Học chlorpromazine sedation.",
    "en": "Learn chlorpromazine sedation."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/chlorpromazine/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "thioridazine",
  "gameId": "game-126",
  "name": {
    "vi": "Thioridazine",
    "en": "Thioridazine"
  },
  "desc": {
    "vi": "Học thioridazine sedation.",
    "en": "Learn thioridazine sedation."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/thioridazine/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "fluphenazine",
  "gameId": "game-127",
  "name": {
    "vi": "Fluphenazine",
    "en": "Fluphenazine"
  },
  "desc": {
    "vi": "Học fluphenazine sedation.",
    "en": "Learn fluphenazine sedation."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/fluphenazine/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "perphenazine",
  "gameId": "game-128",
  "name": {
    "vi": "Perphenazine",
    "en": "Perphenazine"
  },
  "desc": {
    "vi": "Học perphenazine sedation.",
    "en": "Learn perphenazine sedation."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/perphenazine/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "trifluoperazine",
  "gameId": "game-129",
  "name": {
    "vi": "Trifluoperazine",
    "en": "Trifluoperazine"
  },
  "desc": {
    "vi": "Học trifluoperazine sedation.",
    "en": "Learn trifluoperazine sedation."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/trifluoperazine/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "haloperidol",
  "gameId": "game-130",
  "name": {
    "vi": "Haloperidol",
    "en": "Haloperidol"
  },
  "desc": {
    "vi": "Học haloperidol sedation.",
    "en": "Learn haloperidol sedation."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/haloperidol/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "droperidol",
  "gameId": "game-131",
  "name": {
    "vi": "Droperidol",
    "en": "Droperidol"
  },
  "desc": {
    "vi": "Học droperidol sedation.",
    "en": "Learn droperidol sedation."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/droperidol/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "risperidone",
  "gameId": "game-132",
  "name": {
    "vi": "Risperidone",
    "en": "Risperidone"
  },
  "desc": {
    "vi": "Học risperidone sedation.",
    "en": "Learn risperidone sedation."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/risperidone/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "olanzapine",
  "gameId": "game-133",
  "name": {
    "vi": "Olanzapine",
    "en": "Olanzapine"
  },
  "desc": {
    "vi": "Học olanzapine sedation.",
    "en": "Learn olanzapine sedation."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/olanzapine/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "quetiapine",
  "gameId": "game-134",
  "name": {
    "vi": "Quetiapine",
    "en": "Quetiapine"
  },
  "desc": {
    "vi": "Học quetiapine sedation.",
    "en": "Learn quetiapine sedation."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/quetiapine/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "ziprasidone",
  "gameId": "game-135",
  "name": {
    "vi": "Ziprasidone",
    "en": "Ziprasidone"
  },
  "desc": {
    "vi": "Học ziprasidone sedation.",
    "en": "Learn ziprasidone sedation."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/ziprasidone/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "aripiprazole",
  "gameId": "game-136",
  "name": {
    "vi": "Aripiprazole",
    "en": "Aripiprazole"
  },
  "desc": {
    "vi": "Học aripiprazole sedation.",
    "en": "Learn aripiprazole sedation."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/aripiprazole/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "brexpiprazole",
  "gameId": "game-137",
  "name": {
    "vi": "Brexpiprazole",
    "en": "Brexpiprazole"
  },
  "desc": {
    "vi": "Học brexpiprazole sedation.",
    "en": "Learn brexpiprazole sedation."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/brexpiprazole/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "cariprazine",
  "gameId": "game-138",
  "name": {
    "vi": "Cariprazine",
    "en": "Cariprazine"
  },
  "desc": {
    "vi": "Học cariprazine sedation.",
    "en": "Learn cariprazine sedation."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/cariprazine/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "lurasidone",
  "gameId": "game-139",
  "name": {
    "vi": "Lurasidone",
    "en": "Lurasidone"
  },
  "desc": {
    "vi": "Học lurasidone sedation.",
    "en": "Learn lurasidone sedation."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/lurasidone/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "asenapine",
  "gameId": "game-140",
  "name": {
    "vi": "Asenapine",
    "en": "Asenapine"
  },
  "desc": {
    "vi": "Học asenapine sedation.",
    "en": "Learn asenapine sedation."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/asenapine/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "iloperidone",
  "gameId": "game-141",
  "name": {
    "vi": "Iloperidone",
    "en": "Iloperidone"
  },
  "desc": {
    "vi": "Học iloperidone sedation.",
    "en": "Learn iloperidone sedation."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/iloperidone/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
  "wave": 4,
  "free": 5
},
{
  "id": "paliperidone",
  "gameId": "game-142",
  "name": {
    "vi": "Paliperidone",
    "en": "Paliperidone"
  },
  "desc": {
    "vi": "Học paliperidone sedation.",
    "en": "Learn paliperidone sedation."
  },
  "group": "work",
  "tier": 1,
  "status": "live",
  "path": "games/paliperidone/index.html",
  "difficulty": "easy",
  "duration": "2-5 min",
  "genre": "math",
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
