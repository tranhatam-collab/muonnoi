// catalog.js — Muon Nơi Game Catalog
// 100 games total: 3 live, 33 wave1, 67 wave2+
// 12 genre groups, bilingual names

const PLAYS_CATALOG = {
  version: '1.0.0',
  genres: [
    { id: 'reflex',    vi: 'Phan xa',     en: 'Reflex' },
    { id: 'puzzle',    vi: 'Giai do',     en: 'Puzzle' },
    { id: 'dexterity', vi: 'Kheo leo',   en: 'Dexterity' },
    { id: 'strategy',  vi: 'Chien thuat', en: 'Strategy' },
    { id: 'speed',     vi: 'Nhanh tay',   en: 'Speed' },
    { id: 'memory',    vi: 'Nho / Pattern', en: 'Memory' },
    { id: 'endless',   vi: 'Toc do / Endless', en: 'Endless Runner' },
    { id: 'survival',  vi: 'Sinh ton',    en: 'Survival' },
    { id: 'skill',     vi: 'Luyen tap',   en: 'Skill Training' },
    { id: 'creative',  vi: 'Sang tao',    en: 'Creative' },
    { id: 'arcade',    vi: 'Chien dau / Arcade', en: 'Arcade' },
    { id: 'zen',       vi: 'Thu gian',    en: 'Zen' },
  ],
  games: [
    // ===== LIVE (3 games) =====
    {
      id: 'cham-vo-cuc',
      name: { vi: 'Cham Vo Cuc', en: 'Infinite Touch' },
      desc: { vi: 'Cham cac o sang truoc khi chung bien mat. Do kho tang dan vo han.', en: 'Tap lit cells before they vanish. Difficulty rises asymptotically.' },
      genre: 'reflex',
      wave: 1,
      live: true,
      path: 'games/cham-vo-cuc/',
      difficulty: 'easy',
      duration: '1-5 min',
    },
    {
      id: 'me-cung-muon-loi',
      name: { vi: 'Me Cung Muon Loi', en: 'Maze of Many Paths' },
      desc: { vi: 'Tim loi ra trong me cung sinh ngau nhien. Moi me cung lon hon va co suong mu.', en: 'Find the exit in randomly generated mazes. Each maze is larger and foggier.' },
      genre: 'puzzle',
      wave: 1,
      live: true,
      path: 'games/me-cung-muon-loi/',
      difficulty: 'medium',
      duration: '2-10 min',
    },
    {
      id: 'dinh-sisyphus',
      name: { vi: 'Dinh Sisyphus', en: 'Peak of Sisyphus' },
      desc: { vi: 'Canh nhiep day da len dinh. Doc dung dan, dinh tien dan vo cuc.', en: 'Time your pushes to roll the boulder uphill. Steeper slopes, endless peak.' },
      genre: 'dexterity',
      wave: 1,
      live: true,
      path: 'games/dinh-sisyphus/',
      difficulty: 'hard',
      duration: '1-3 min',
    },

    // ===== WAVE 1 — 30 games (placeholder + ready to implement) =====
    // Group 1: Reflex (2 more)
    { id: 'phan-xa-doi',    name: { vi: 'Phan Xa Doi',    en: 'Dual Reflex' },    desc: { vi: 'Phan xa voi hai mau khac nhau.', en: 'Two-color reflex challenge.' }, genre: 'reflex',    wave: 1, live: true, path: 'games/phan-xa-doi/',    difficulty: 'medium', duration: '2-5 min' },
    { id: 'phan-xa-ba',     name: { vi: 'Phan Xa Ba',     en: 'Triple Reflex' },   desc: { vi: 'Ba cot, ba mau, toc do tang.', en: 'Three lanes, three colors, speeding up.' }, genre: 'reflex',    wave: 1, live: true, path: 'games/phan-xa-ba/',     difficulty: 'hard',   duration: '2-5 min' },

    // Group 2: Puzzle (2 more)
    { id: 'xoay-khoi',      name: { vi: 'Xoay Khoi',      en: 'Block Spin' },      desc: { vi: 'Xoay cac khoi de tao duong di.', en: 'Rotate blocks to make a path.' }, genre: 'puzzle',    wave: 1, live: true, path: 'games/xoay-khoi/',      difficulty: 'easy',   duration: '3-7 min' },
    { id: 'noi-diem',       name: { vi: 'Noi Diem',       en: 'Connect Dots' },    desc: { vi: 'Noi cac diem ma khong cat nhau.', en: 'Connect dots without crossing.' }, genre: 'puzzle',    wave: 1, live: true, path: 'games/noi-diem/',       difficulty: 'medium', duration: '3-7 min' },

    // Group 3: Dexterity / Timing (2 more)
    { id: 'cat-day',        name: { vi: 'Cat Day',        en: 'String Cut' },      desc: { vi: 'Cat day dung luc.', en: 'Cut the string at the right moment.' }, genre: 'dexterity', wave: 1, live: true, path: 'games/cat-day/',        difficulty: 'easy',   duration: '1-3 min' },
    { id: 'thap-can-bang',  name: { vi: 'Thap Can Bang',  en: 'Balance Tower' },   desc: { vi: 'Xep khoi len nhau ma khong do.', en: 'Stack blocks without toppling.' }, genre: 'dexterity', wave: 1, live: true, path: 'games/thap-can-bang/',  difficulty: 'medium', duration: '2-5 min' },

    // Group 4: Strategy (2)
    { id: 'tuong-linh',     name: { vi: 'Tuong Linh',     en: 'Commander' },       desc: { vi: 'Dieu quan chien dau voi tai nguyen han che.', en: 'Command troops with limited resources.' }, genre: 'strategy',  wave: 1, live: true, path: 'games/tuong-linh/',     difficulty: 'hard',   duration: '5-15 min' },
    { id: 'mo-rong-lanh-tho', name: { vi: 'Mo Rong Lanh Tho', en: 'Territory' },  desc: { vi: 'Chiem lanh tho tu doi thu AI.', en: 'Claim territory from AI opponents.' }, genre: 'strategy',  wave: 1, live: true, path: 'games/mo-rong-lanh-tho/', difficulty: 'medium', duration: '5-10 min' },

    // Group 5: Speed (3)
    { id: 'go-chu',         name: { vi: 'Go Chu',         en: 'Type Rush' },       desc: { vi: 'Go chu nhanh hon toc do roi.', en: 'Type words faster than they fall.' }, genre: 'speed',     wave: 1, live: true, path: 'games/go-chu/',         difficulty: 'easy',   duration: '1-3 min' },
    { id: 'ban-muc-tieu',   name: { vi: 'Ban Muc Tieu',   en: 'Target Shoot' },    desc: { vi: 'Ban cac muc tieu xuat hien ngau nhien.', en: 'Shoot randomly appearing targets.' }, genre: 'speed',     wave: 1, live: true, path: 'games/ban-muc-tieu/',   difficulty: 'medium', duration: '2-4 min' },
    { id: 'an-bong',        name: { vi: 'An Bong',        en: 'Ball Snap' },       desc: { vi: 'Bat bong voi dung mau.', en: 'Catch balls of the right color.' }, genre: 'speed',     wave: 1, live: false, path: 'games/an-bong/',        difficulty: 'hard',   duration: '2-5 min' },

    // Group 6: Memory / Pattern (2)
    { id: 'nho-day',        name: { vi: 'Nho Day',        en: 'Sequence' },        desc: { vi: 'Lap lai day hieu ung.', en: 'Repeat the effect sequence.' }, genre: 'memory',    wave: 1, live: false, path: 'games/nho-day/',        difficulty: 'easy',   duration: '2-5 min' },
    { id: 'tim-cap',        name: { vi: 'Tim Cap',        en: 'Match Pairs' },     desc: { vi: 'Tim cac cap the giong nhau.', en: 'Find matching card pairs.' }, genre: 'memory',    wave: 1, live: false, path: 'games/tim-cap/',        difficulty: 'medium', duration: '3-6 min' },

    // Group 7: Endless Runner / Speed (2)
    { id: 'chay-vo-tan',    name: { vi: 'Chay Vo Tan',    en: 'Infinite Run' },    desc: { vi: 'Nhay va ne chuong ngai vat khong ngung.', en: 'Jump and dodge endless obstacles.' }, genre: 'endless',   wave: 1, live: false, path: 'games/chay-vo-tan/',    difficulty: 'medium', duration: '2-5 min' },
    { id: 'truot-duong',    name: { vi: 'Truot Duong',    en: 'Lane Slide' },      desc: { vi: 'Truot qua lai tranh va cham.', en: 'Slide left-right to avoid crashes.' }, genre: 'endless',   wave: 1, live: false, path: 'games/truot-duong/',    difficulty: 'hard',   duration: '2-5 min' },

    // Group 8: Survival (3)
    { id: 'song-sot',       name: { vi: 'Song Sot',       en: 'Survive' },         desc: { vi: 'Ton tai cang lau cang tot trong moi truong thu dich.', en: 'Survive as long as possible in hostile environment.' }, genre: 'survival',  wave: 1, live: false, path: 'games/song-sot/',       difficulty: 'hard',   duration: '3-10 min' },
    { id: 'ne-laser',       name: { vi: 'Ne Laser',       en: 'Dodge Laser' },     desc: { vi: 'Ne cac chum laser ngay cang day.', en: 'Dodge increasingly dense laser beams.' }, genre: 'survival',  wave: 1, live: false, path: 'games/ne-laser/',       difficulty: 'medium', duration: '2-5 min' },
    { id: 'tim-thuc-an',    name: { vi: 'Tim Thuc An',    en: 'Forage' },          desc: { vi: 'Thu thap thuc an ma khong bi bat.', en: 'Gather food without getting caught.' }, genre: 'survival',  wave: 1, live: false, path: 'games/tim-thuc-an/',    difficulty: 'easy',   duration: '3-7 min' },

    // Group 9: Skill Training (4)
    { id: 'tinh-nham',      name: { vi: 'Tinh Nham',      en: 'Mental Math' },     desc: { vi: 'Giai phep tinh nhanh nhat co the.', en: 'Solve math problems as fast as possible.' }, genre: 'skill',     wave: 1, live: false, path: 'games/tinh-nham/',      difficulty: 'easy',   duration: '2-5 min' },
    { id: 'phan-biet-mau',  name: { vi: 'Phan Biet Mau',  en: 'Color Match' },     desc: { vi: 'Chon mau dung voi chu cai.', en: 'Pick the color matching the word.' }, genre: 'skill',     wave: 1, live: false, path: 'games/phan-biet-mau/',  difficulty: 'easy',   duration: '1-3 min' },
    { id: 'nhanh-mat',      name: { vi: 'Nhanh Mat',      en: 'Sharp Eye' },       desc: { vi: 'Tim diem khac biet trong thoi gian ngan.', en: 'Find the difference in short time.' }, genre: 'skill',     wave: 1, live: false, path: 'games/nhanh-mat/',      difficulty: 'medium', duration: '2-5 min' },
    { id: 'phan-xa-nguoc',  name: { vi: 'Phan Xa Nguoc',  en: 'Reverse Reflex' },  desc: { vi: 'Lam nguoc lai voi phan xa tu nhien.', en: 'Do the opposite of natural reflex.' }, genre: 'skill',     wave: 1, live: false, path: 'games/phan-xa-nguoc/',  difficulty: 'hard',   duration: '2-5 min' },

    // Group 10: Creative (3)
    { id: 've-nhanh',       name: { vi: 'Ve Nhanh',       en: 'Quick Draw' },      desc: { vi: 'Ve theo yeu cau trong thoi gian.', en: 'Draw the requested shape in time.' }, genre: 'creative',  wave: 1, live: false, path: 'games/ve-nhanh/',       difficulty: 'easy',   duration: '2-5 min' },
    { id: 'xep-hinh',       name: { vi: 'Xep Hinh',       en: 'Shape Builder' },   desc: { vi: 'Xep cac manh hinh vao khung.', en: 'Fit puzzle pieces into the frame.' }, genre: 'creative',  wave: 1, live: false, path: 'games/xep-hinh/',       difficulty: 'medium', duration: '3-8 min' },
    { id: 'am-nhac',        name: { vi: 'Am Nhac',        en: 'Rhythm Tap' },      desc: { vi: 'Cham theo nhip dieu nhac.', en: 'Tap along to the music rhythm.' }, genre: 'creative',  wave: 1, live: false, path: 'games/am-nhac/',        difficulty: 'hard',   duration: '2-4 min' },

    // Group 11: Arcade / Combat (2)
    { id: 'ban-sao-bang',   name: { vi: 'Ban Sao Bang',   en: 'Meteor Blaster' },  desc: { vi: 'Ban cac thien thach roi xuong.', en: 'Blast falling meteors.' }, genre: 'arcade',    wave: 1, live: false, path: 'games/ban-sao-bang/',   difficulty: 'medium', duration: '2-5 min' },
    { id: 'chien-dau',      name: { vi: 'Chien Dau',      en: 'Combat' },          desc: { vi: 'Chien dau voi doi thu ngay cang manh.', en: 'Fight increasingly strong opponents.' }, genre: 'arcade',    wave: 1, live: false, path: 'games/chien-dau/',      difficulty: 'hard',   duration: '3-7 min' },

    // Group 12: Zen (3)
    { id: 'thoi-bong-bong', name: { vi: 'Thoi Bong Bong', en: 'Bubble Zen' },      desc: { vi: 'Thoi bong bong cang nhieu cang tot.', en: 'Blow as many bubbles as possible.' }, genre: 'zen',       wave: 1, live: false, path: 'games/thoi-bong-bong/', difficulty: 'easy',   duration: '1-3 min' },
    { id: 'hai-sao',        name: { vi: 'Hai Sao',        en: 'Star Gather' },     desc: { vi: 'Hai cac vi sao roi tren man hinh.', en: 'Gather falling stars on screen.' }, genre: 'zen',       wave: 1, live: false, path: 'games/hai-sao/',        difficulty: 'easy',   duration: '2-5 min' },
    { id: 'nuoi-cay',       name: { vi: 'Nuoi Cay',       en: 'Grow Tree' },       desc: { vi: 'Tuoi nuoc cho cay lon khong ngung.', en: 'Water a tree that grows endlessly.' }, genre: 'zen',       wave: 1, live: false, path: 'games/nuoi-cay/',       difficulty: 'easy',   duration: '3-8 min' },

    // ===== WAVE 2+ — 67 placeholder games =====
    // Generated programmatically for catalog completeness
    ...(function () {
      const extras = [];
      const genreList = ['reflex','puzzle','dexterity','strategy','speed','memory','endless','survival','skill','creative','arcade','zen'];
      const nameBase = { vi: 'Tro choi', en: 'Game' };
      for (let i = 34; i <= 100; i++) {
        const g = genreList[(i - 1) % genreList.length];
        extras.push({
          id: 'game-' + String(i).padStart(3, '0'),
          name: { vi: nameBase.vi + ' ' + i, en: nameBase.en + ' ' + i },
          desc: { vi: 'Tro choi dang phat trien.', en: 'Game under development.' },
          genre: g,
          wave: i <= 50 ? 2 : 3,
          live: false,
          path: 'games/game-' + String(i).padStart(3, '0') + '/',
          difficulty: 'medium',
          duration: '2-5 min',
        });
      }
      return extras;
    })(),
  ],
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = PLAYS_CATALOG;
}
