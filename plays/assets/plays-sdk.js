/*
 * Muôn Nơi · plays.muonnoi.org — SDK đồng bộ (MNPlays)
 * ----------------------------------------------------
 * Lớp trừu tượng DUY NHẤT mà game gọi tới. Tự xử lý:
 *   - Khách (chưa đăng nhập): lưu localStorage, KHÔNG lưu vĩnh viễn/đa thiết bị.
 *   - Thành viên (đăng nhập muonnoi.org): lưu/đọc qua API D1, đa thiết bị.
 *   - Khi khách đăng nhập sau → merge kỷ lục local lên tài khoản (lấy max).
 *
 * API public:
 *   await MNPlays.init()                         -> { loggedIn, user }
 *   MNPlays.isLoggedIn()                         -> bool
 *   await MNPlays.loadProgress(gameId)           -> progress | null
 *   await MNPlays.saveProgress(gameId, data)     -> progress  (data: {status,level,score,state})
 *   await MNPlays.awardPoints(gameId, amt, why)  -> { balance } | null  (chỉ khi đăng nhập)
 *   await MNPlays.getBalance()                   -> number
 *   MNPlays.onAuthChange(cb)
 *
 * Thiết kế fail-open: nếu API lỗi/đang chạy offline (file://), tự rơi về localStorage,
 * game vẫn chơi bình thường.
 */
(function (root) {
  const API = '/functions/api';
  const LS_PREFIX = 'mnplays:';            // localStorage namespace cho khách
  const LS_POINTS = LS_PREFIX + '__points'; // điểm tạm của khách (không cộng dồn thật)

  const TERMS_VERSION = '2026-06-02';      // đổi version => buộc đồng ý lại
  const DEFAULT_FREE = 3;                  // lượt chơi miễn phí mặc định (game có thể đặt 3–5)

  // Đường dẫn gốc của khu plays (suy ra từ vị trí file SDK) -> chạy đúng ở cả /plays/ lẫn /
  let BASE = '';
  try {
    const s = (document.currentScript && document.currentScript.src) || '';
    BASE = s.replace(/assets\/plays-sdk\.js.*$/, '');
  } catch (_) {}
  function pageUrl(name) { return BASE + name; }

  let _state = { loggedIn: false, user: null, ready: false };
  const _authCbs = [];

  // ---------- helpers ----------
  function lsGet(key, fallback) {
    try { const v = localStorage.getItem(LS_PREFIX + key); return v ? JSON.parse(v) : fallback; }
    catch (_) { return fallback; }
  }
  function lsSet(key, val) {
    try { localStorage.setItem(LS_PREFIX + key, JSON.stringify(val)); } catch (_) {}
  }
  async function apiGet(path) {
    const r = await fetch(`${API}/${path}`, { credentials: 'include' });
    if (!r.ok) throw new Error('http ' + r.status);
    const j = await r.json();
    if (!j.ok) throw new Error(j.message || 'api error');
    return j;
  }
  async function apiPost(path, body) {
    const r = await fetch(`${API}/${path}`, {
      method: 'POST', credentials: 'include',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(body || {}),
    });
    if (!r.ok) throw new Error('http ' + r.status);
    const j = await r.json();
    if (!j.ok) throw new Error(j.message || 'api error');
    return j;
  }
  function mergeProgress(a, b) {
    // lấy tiến trình "tốt hơn": level cao hơn, điểm cao hơn
    if (!a) return b; if (!b) return a;
    const rank = { 'unplayed': 0, 'playing': 1, 'played': 2 };
    return {
      gameId: a.gameId || b.gameId,
      status: (rank[a.status] >= rank[b.status] ? a.status : b.status) || 'playing',
      level: Math.max(a.level || 0, b.level || 0),
      score: Math.max(a.score || 0, b.score || 0),
      state: (b.updatedAt || 0) > (a.updatedAt || 0) ? b.state : a.state,
      updatedAt: Math.max(a.updatedAt || 0, b.updatedAt || 0),
    };
  }

  // ---------- init / auth ----------
  async function init() {
    try {
      const me = await apiGet('auth/me');
      _state.loggedIn = !!(me.user && me.user.id);
      _state.user = me.user || null;
    } catch (_) {
      _state.loggedIn = false; _state.user = null; // offline / chưa deploy API
    }
    _state.ready = true;

    // Nếu vừa đăng nhập và còn dữ liệu khách → merge lên tài khoản (một lần).
    if (_state.loggedIn && !lsGet('__merged', false)) {
      try { await _mergeGuestToAccount(); lsSet('__merged', true); } catch (_) {}
    }
    _authCbs.forEach(cb => { try { cb(_state); } catch (_) {} });
    return { loggedIn: _state.loggedIn, user: _state.user };
  }

  async function _mergeGuestToAccount() {
    const keys = [];
    try {
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (k && k.startsWith(LS_PREFIX + 'progress:')) keys.push(k);
      }
    } catch (_) { return; }
    for (const fullKey of keys) {
      const gameId = fullKey.slice((LS_PREFIX + 'progress:').length);
      const local = lsGet('progress:' + gameId, null);
      if (!local) continue;
      let remote = null;
      try { remote = (await apiGet('plays/progress?game=' + encodeURIComponent(gameId))).progress; } catch (_) {}
      const merged = mergeProgress(remote, local);
      try { await apiPost('plays/progress', { game: gameId, ...merged }); } catch (_) {}
    }
  }

  // ---------- progress ----------
  async function loadProgress(gameId) {
    if (_state.loggedIn) {
      try { return (await apiGet('plays/progress?game=' + encodeURIComponent(gameId))).progress || null; }
      catch (_) { /* fallback */ }
    }
    return lsGet('progress:' + gameId, null);
  }

  async function saveProgress(gameId, data) {
    const payload = {
      gameId,
      status: data.status || 'playing',
      level: data.level || 0,
      score: data.score || 0,
      state: data.state != null ? data.state : null,
      updatedAt: Date.now(),
    };
    // luôn ghi local (đệm offline + dữ liệu khách)
    lsSet('progress:' + gameId, payload);
    if (_state.loggedIn) {
      try { const r = await apiPost('plays/progress', { game: gameId, ...payload }); return r.progress || payload; }
      catch (_) { /* giữ bản local */ }
    }
    return payload;
  }

  // ---------- points (Muôn Điểm) ----------
  async function awardPoints(gameId, amount, reason) {
    amount = Math.max(0, Math.floor(amount || 0));
    if (!amount) return null;
    if (_state.loggedIn) {
      try { return await apiPost('plays/points', { action: 'earn', game: gameId, amount, reason: reason || 'play' }); }
      catch (_) { return null; }
    }
    // khách: điểm tạm, chỉ để hiển thị động viên, KHÔNG cộng dồn thật
    const cur = lsGet('__points', 0) + amount;
    lsSet('__points', cur);
    return { balance: cur, guest: true };
  }

  async function getBalance() {
    if (_state.loggedIn) {
      try { return (await apiGet('plays/points')).balance || 0; } catch (_) { return 0; }
    }
    return lsGet('__points', 0);
  }

  // ---------- ĐỒNG Ý ĐIỀU KHOẢN + GIỚI HẠN LƯỢT MIỄN PHÍ ----------
  // Mỗi game gọi:  const gate = await MNPlays.beginPlay(GAME_ID, freePlays);
  //               if (!gate.allowed) return;   // SDK đã hiện modal phù hợp
  function consentOk() { return lsGet('consent') === TERMS_VERSION; }
  function playCount(g) { return lsGet('plays:' + g, 0) | 0; }

  function playsLeft(gameId, free) {
    free = free || DEFAULT_FREE;
    if (_state.loggedIn) return Infinity;
    return Math.max(0, free - playCount(gameId));
  }

  function ensureConsent() {
    return new Promise((resolve) => {
      if (consentOk()) return resolve(true);
      showConsentModal(
        () => { // đồng ý
          lsSet('consent', TERMS_VERSION);
          if (_state.loggedIn) { apiPost('plays/consent', { version: TERMS_VERSION }).catch(() => {}); }
          resolve(true);
        },
        () => resolve(false) // từ chối
      );
    });
  }

  async function beginPlay(gameId, free) {
    free = free || DEFAULT_FREE;
    const consented = await ensureConsent();
    if (!consented) return { allowed: false, reason: 'consent' };
    if (_state.loggedIn) return { allowed: true, left: Infinity };
    const c = playCount(gameId);
    if (c >= free) { showRegisterModal(free); return { allowed: false, reason: 'register' }; }
    lsSet('plays:' + gameId, c + 1);
    return { allowed: true, left: free - (c + 1) };
  }

  // ---------- Modal UI ----------
  function modal(html) {
    const bg = document.createElement('div');
    bg.className = 'mn-modal-bg';
    bg.innerHTML = '<div class="mn-modal">' + html + '</div>';
    document.body.appendChild(bg);
    return bg;
  }
  function showConsentModal(onAgree, onDecline) {
    const bg = modal(`
      <h3>Trước khi chơi — Đồng ý điều khoản</h3>
      <p>Trò chơi mang tính giải trí & rèn luyện. Bạn cần đọc và đồng ý <b>Điều khoản &amp; Miễn trừ trách nhiệm</b>
         và <b>Quyền riêng tư</b> trước khi chơi.</p>
      <div class="legal">
        Tóm tắt: (1) Bạn tự nguyện tham gia và tự chịu trách nhiệm về việc chơi. (2) Điểm trong game
        (Muôn Điểm) <b>không phải tiền</b>, không quy đổi tiền mặt. (3) Trong phạm vi pháp luật cho phép,
        Muôn Nơi không chịu trách nhiệm cho thiệt hại phát sinh từ việc sử dụng trò chơi; điều này
        <b>không loại trừ</b> các quyền không thể từ bỏ theo luật. (4) Trẻ vị thành niên cần sự đồng ý
        của cha mẹ/người giám hộ. Xem đầy đủ:
        <a href="${pageUrl('terms.html')}" target="_blank">Điều khoản</a> ·
        <a href="${pageUrl('privacy.html')}" target="_blank">Quyền riêng tư</a>.
      </div>
      <label class="agree"><input type="checkbox" id="mnAgree"/>
        <span>Tôi đã đọc và đồng ý Điều khoản, Miễn trừ trách nhiệm và Quyền riêng tư.
        Nếu dưới tuổi quy định, tôi xác nhận có sự đồng ý của cha mẹ/người giám hộ.</span></label>
      <div class="acts">
        <button class="btn secondary" id="mnDecline">Quay lại</button>
        <button class="btn" id="mnAgreeBtn" disabled>Đồng ý &amp; chơi</button>
      </div>`);
    const cb = bg.querySelector('#mnAgree');
    const ok = bg.querySelector('#mnAgreeBtn');
    cb.onchange = () => { ok.disabled = !cb.checked; };
    ok.onclick = () => { document.body.removeChild(bg); onAgree && onAgree(); };
    bg.querySelector('#mnDecline').onclick = () => { document.body.removeChild(bg); onDecline && onDecline(); };
  }
  function showRegisterModal(free) {
    const bg = modal(`
      <h3>Hết lượt chơi miễn phí</h3>
      <p>Bạn đã dùng hết <b>${free} lượt chơi miễn phí</b> của trò này. Đăng ký thành viên (miễn phí) để
         <b>chơi tiếp không giới hạn</b>, lưu lịch sử & tiến trình, và nhận <b>Muôn Điểm</b>.</p>
      <div class="acts">
        <button class="btn secondary" id="mnClose">Để sau</button>
        <a class="btn" id="mnReg" href="${pageUrl('register.html')}" style="text-align:center;text-decoration:none">Đăng ký thành viên</a>
      </div>
      <p style="margin-top:10px">Đã có tài khoản? <a href="${loginUrl()}">Đăng nhập</a>.</p>`);
    bg.querySelector('#mnClose').onclick = () => document.body.removeChild(bg);
  }

  // ---------- misc ----------
  function isLoggedIn() { return _state.loggedIn; }
  function getUser() { return _state.user; }
  function onAuthChange(cb) { if (typeof cb === 'function') { _authCbs.push(cb); if (_state.ready) cb(_state); } }
  function loginUrl() {
    // Trang đăng nhập magic-email nằm ở apex (muonnoi.org). Nếu đang ở subdomain
    // plays.* thì trỏ về apex để dùng chung phiên đăng nhập.
    try {
      const h = location.hostname;
      if (h.startsWith('plays.')) return location.protocol + '//' + h.slice('plays.'.length) + '/app.html';
    } catch (_) {}
    return '/app.html';
  }
  function registerUrl() { return pageUrl('register.html'); }
  function termsUrl() { return pageUrl('terms.html'); }
  function privacyUrl() { return pageUrl('privacy.html'); }

  root.MNPlays = {
    init, isLoggedIn, getUser, onAuthChange, loginUrl, registerUrl, termsUrl, privacyUrl,
    loadProgress, saveProgress, awardPoints, getBalance,
    beginPlay, playsLeft, ensureConsent, TERMS_VERSION,
  };
})(typeof window !== 'undefined' ? window : globalThis);
