/* Muôn Nơi (mn) — Web/App Shell (Locked Baseline)
   - No external libs
   - No inline HTML event handlers
   - i18n from /assets/i18n.json only
   - Module-first router (hash views)
   - Safe rendering (escapeHtml)
   - Clean API client (CORS + credentials)
*/

const MN = (() => {
  // -----------------------------
  // Config
  // -----------------------------
  const CFG = {
    isLocal:
      location.hostname === "localhost" ||
      location.hostname === "127.0.0.1" ||
      location.hostname.endsWith(".pages.dev"),
    apiBase: "",
    langKey: "mn_lang",
    themeKey: "mn_theme",
    version: "v1"
  };

  CFG.apiBase = CFG.isLocal ? "http://127.0.0.1:8787" : "https://api.muonnoi.org";

  // -----------------------------
  // Utils
  // -----------------------------
  function $(sel, root = document) { return root.querySelector(sel); }
  function $all(sel, root = document) { return Array.from(root.querySelectorAll(sel)); }

  function escapeHtml(s) {
    return String(s ?? "").replace(/[&<>"']/g, m => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[m]));
  }

  function nowYear() {
    const y = $("#year");
    if (y) y.textContent = String(new Date().getFullYear());
  }

  function setAttr(el, k, v) { if (el) el.setAttribute(k, v); }
  function setText(id, text) { const el = document.getElementById(id); if (el) el.textContent = text; }

  function isEmail(s) {
    if (!s) return false;
    if (s.length > 120) return false;
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
  }

  // -----------------------------
  // Toast (simple, no dependencies)
  // -----------------------------
  function ensureToastHost() {
    let host = document.getElementById("mnToastHost");
    if (host) return host;
    host = document.createElement("div");
    host.id = "mnToastHost";
    host.style.position = "fixed";
    host.style.right = "14px";
    host.style.bottom = "14px";
    host.style.display = "grid";
    host.style.gap = "10px";
    host.style.zIndex = "9999";
    document.body.appendChild(host);
    return host;
  }

  function toast(msg, type = "info") {
    const host = ensureToastHost();
    const el = document.createElement("div");
    el.style.border = "1px solid rgba(26,39,31,.95)";
    el.style.background = "rgba(15,21,17,.95)";
    el.style.color = "rgba(233,239,233,.95)";
    el.style.padding = "10px 12px";
    el.style.borderRadius = "14px";
    el.style.boxShadow = "0 18px 55px rgba(0,0,0,.45)";
    el.style.maxWidth = "340px";
    el.style.fontSize = "13px";
    el.style.lineHeight = "1.45";
    el.style.backdropFilter = "blur(10px)";
    el.textContent = msg;

    if (type === "ok") el.style.borderColor = "rgba(74,168,107,.65)";
    if (type === "warn") el.style.borderColor = "rgba(240,201,106,.65)";
    if (type === "err") el.style.borderColor = "rgba(255,107,107,.65)";

    host.appendChild(el);
    setTimeout(() => {
      el.style.opacity = "0";
      el.style.transform = "translateY(6px)";
      el.style.transition = "opacity .18s ease, transform .18s ease";
      setTimeout(() => el.remove(), 220);
    }, 2600);
  }

  // -----------------------------
  // Theme (future hook)
  // -----------------------------
  const Theme = (() => {
    function get() { return localStorage.getItem(CFG.themeKey) || "dark"; }
    function apply() {
      const t = get();
      if (t === "light") document.documentElement.setAttribute("data-theme", "light");
      else document.documentElement.removeAttribute("data-theme");
    }
    function toggle() {
      const t = get();
      localStorage.setItem(CFG.themeKey, t === "light" ? "dark" : "light");
      apply();
    }
    return { get, apply, toggle };
  })();

  // -----------------------------
  // i18n
  // -----------------------------
  const I18N = (() => {
    let dict = null;
    let lang = localStorage.getItem(CFG.langKey) || "vi";

    async function load() {
      if (dict) return dict;
      const r = await fetch("/assets/i18n.json", { cache: "no-store" });
      dict = await r.json();
      return dict;
    }

    function getLang() { return lang; }

    async function t(key) {
      await load();
      const m = dict?.[lang] || {};
      return (m && m[key]) ? m[key] : key;
    }

    async function applyStatic() {
      await load();
      const m = dict?.[lang] || {};

      const map = [
        ["tHome", "home"],
        ["tMenu", "menu"],
        ["tJoin", "join"],
        ["tMe", "me"],
        ["tFeed", "feed"],
        ["tGroups", "groups"],
        ["tShop", "shop"],
        ["tSecurity", "security"],
        ["tSecHint", "secHint"],

        ["tHero", "hero"],
        ["tSub", "sub"],
        ["tStart", "start"],
        ["tTerms", "terms"],
        ["tPrivacy", "privacy"],
        ["tC1", "c1"], ["tC1b", "c1b"],
        ["tC2", "c2"], ["tC2b", "c2b"],
        ["tC3", "c3"], ["tC3b", "c3b"]
      ];

      for (const [id, k] of map) {
        const el = document.getElementById(id);
        if (el && m[k]) el.textContent = m[k];
      }

      const lb = document.getElementById("langBtn");
      if (lb) lb.textContent = lang.toUpperCase();

      document.documentElement.lang = lang;
    }

    async function toggle() {
      lang = (lang === "vi") ? "en" : "vi";
      localStorage.setItem(CFG.langKey, lang);
      await applyStatic();
      if (location.pathname.includes("/app")) await Router.render();
    }

    return { t, toggle, applyStatic, getLang };
  })();

  // -----------------------------
  // API client
  // -----------------------------
  const API = (() => {
    async function req(method, path, body) {
      const url = CFG.apiBase + path;
      const init = {
        method,
        credentials: "include",
        headers: {}
      };
      if (body !== undefined) {
        init.headers["content-type"] = "application/json";
        init.body = JSON.stringify(body);
      }
      const r = await fetch(url, init);
      const text = await r.text();
      let data = null;
      try { data = text ? JSON.parse(text) : null; } catch { data = null; }
      if (!r.ok) {
        const msg = data?.error || `HTTP ${r.status}`;
        throw new Error(msg);
      }
      return data;
    }
    return {
      get: (p) => req("GET", p),
      post: (p, b) => req("POST", p, b)
    };
  })();

  // -----------------------------
  // View rendering
  // -----------------------------
  function renderHTML(view, html) {
    view.innerHTML = html;
  }

  function bindClick(root, sel, fn) {
    const el = $(sel, root);
    if (el) el.addEventListener("click", fn);
  }

  // -----------------------------
  // Views
  // -----------------------------
  async function viewJoin(root) {
    const title = await I18N.t("joinTitle");
    const desc = await I18N.t("joinDesc");
    const emailLbl = await I18N.t("email");
    const sendLbl = await I18N.t("send");
    const verifyTitle = await I18N.t("verifyTitle");
    const codeLbl = await I18N.t("code");
    const verifyLbl = await I18N.t("verify");

    renderHTML(root, `
      <h2>${escapeHtml(title)}</h2>
      <p class="note">${escapeHtml(desc)}</p>

      <div class="field">
        <label>${escapeHtml(emailLbl)}</label>
        <input id="mnEmail" type="email" placeholder="you@example.com" autocomplete="email" />
        <button class="btn btn--primary" id="mnSend" type="button">${escapeHtml(sendLbl)}</button>
        <div class="note" id="mnSendOut"></div>
      </div>

      <div class="hr"></div>

      <h3>${escapeHtml(verifyTitle)}</h3>
      <div class="field">
        <label>${escapeHtml(codeLbl)}</label>
        <input id="mnCode" type="text" placeholder="123456" inputmode="numeric" />
        <button class="btn btn--primary" id="mnVerify" type="button">${escapeHtml(verifyLbl)}</button>
        <div class="note" id="mnVerifyOut"></div>
      </div>
    `);

    const emailEl = $("#mnEmail", root);
    const codeEl = $("#mnCode", root);
    const out1 = $("#mnSendOut", root);
    const out2 = $("#mnVerifyOut", root);

    const send = async () => {
      const email = (emailEl?.value || "").trim().toLowerCase();
      if (!isEmail(email)) {
        if (out1) out1.textContent = "Invalid email.";
        toast("Email không hợp lệ.", "warn");
        return;
      }
      if (out1) out1.textContent = "";
      try {
        const res = await API.post(`/api/${CFG.version}/auth/start`, { email });
        if (res?.dev_code) {
          if (out1) out1.innerHTML = `DEV code: <span class="badge">${escapeHtml(res.dev_code)}</span>`;
          toast("Đã tạo mã (DEV).", "ok");
        } else {
          if (out1) out1.textContent = "OK";
          toast("Đã gửi mã.", "ok");
        }
      } catch (e) {
        const msg = String(e?.message || e);
        if (out1) out1.textContent = msg;
        toast(msg, "err");
      }
    };

    const verify = async () => {
      const email = (emailEl?.value || "").trim().toLowerCase();
      const code = (codeEl?.value || "").trim();
      if (!isEmail(email)) {
        if (out2) out2.textContent = "Email required.";
        toast("Vui lòng nhập email.", "warn");
        return;
      }
      if (!/^\d{6}$/.test(code)) {
        if (out2) out2.textContent = "Invalid code.";
        toast("Mã 6 số không hợp lệ.", "warn");
        return;
      }
      if (out2) out2.textContent = "";
      try {
        await API.post(`/api/${CFG.version}/auth/verify`, { email, code });
        toast("Đăng nhập thành công.", "ok");
        location.hash = "#me";
        await Router.render();
      } catch (e) {
        const msg = String(e?.message || e);
        if (out2) out2.textContent = msg;
        toast(msg, "err");
      }
    };

    bindClick(root, "#mnSend", send);
    bindClick(root, "#mnVerify", verify);

    // Enter to submit
    if (emailEl) emailEl.addEventListener("keydown", (ev) => { if (ev.key === "Enter") send(); });
    if (codeEl) codeEl.addEventListener("keydown", (ev) => { if (ev.key === "Enter") verify(); });
  }

  async function viewMe(root) {
    const title = await I18N.t("meTitle");
    const notLogged = await I18N.t("notLoggedIn");
    const loggedAs = await I18N.t("loggedInAs");
    const logoutLbl = await I18N.t("logout");

    try {
      const me = await API.get(`/api/${CFG.version}/me`);
      renderHTML(root, `
        <h2>${escapeHtml(title)}</h2>
        <div class="kv">
          <div class="muted">${escapeHtml(loggedAs)}</div><div>${escapeHtml(me?.email || "")}</div>
          <div class="muted">Account ID</div><div>${escapeHtml(me?.account_id || "")}</div>
          <div class="muted">Session</div><div><span class="badge">${escapeHtml(me?.session_id || "")}</span></div>
        </div>
        <div class="hr"></div>
        <div class="row-center">
          <button class="btn" id="mnLogout" type="button">${escapeHtml(logoutLbl)}</button>
          <span class="muted">Feed / Groups / Shop sẽ mở ở bước tiếp theo.</span>
        </div>
        <p class="note">Baseline đang khóa bảo mật và UI. Bước tiếp theo sẽ thêm Feed + moderation + media.</p>
      `);

      bindClick(root, "#mnLogout", async () => {
        try { await API.post(`/api/${CFG.version}/auth/logout`, {}); } catch {}
        toast("Đã đăng xuất.", "ok");
        location.hash = "#join";
        await Router.render();
      });
    } catch {
      renderHTML(root, `
        <h2>${escapeHtml(title)}</h2>
        <p class="note">${escapeHtml(notLogged)}</p>
        <div class="spacer"></div>
        <button class="btn btn--primary" id="mnGoJoin" type="button">Go</button>
      `);
      bindClick(root, "#mnGoJoin", async () => {
        location.hash = "#join";
        await Router.render();
      });
    }
  }

  // -----------------------------
  // Router
  // -----------------------------
  const Router = (() => {
    function current() {
      const h = (location.hash || "#join").replace("#", "").trim();
      return h || "join";
    }

    async function render() {
      const view = document.getElementById("view");
      if (!view) return; // not in app.html

      const route = current();
      if (route === "me") return viewMe(view);
      return viewJoin(view);
    }

    return { render };
  })();

  // -----------------------------
  // Navigation: data-href
  // -----------------------------
  function wireNav() {
    $all("[data-href]").forEach(el => {
      el.addEventListener("click", () => {
        const href = el.getAttribute("data-href");
        if (!href) return;
        location.href = href;
      });
    });
  }

  // -----------------------------
  // Init
  // -----------------------------
  async function init() {
    nowYear();
    Theme.apply();

    const lb = document.getElementById("langBtn");
    if (lb) lb.addEventListener("click", () => I18N.toggle().catch(() => {}));

    // Future: theme toggle hook (not shown in UI yet)
    // const tb = document.getElementById("themeBtn");
    // if (tb) tb.addEventListener("click", () => Theme.toggle());

    await I18N.applyStatic().catch(() => {});
    wireNav();

    if (location.pathname.includes("/app")) {
      window.addEventListener("hashchange", () => Router.render().catch(() => {}));
      await Router.render().catch(() => {});
    }
  }

  return { init };
})();

MN.init().catch(() => {});
