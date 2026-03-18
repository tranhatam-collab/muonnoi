document.addEventListener("DOMContentLoaded", () => {

  // ================= THEME =================
  const btnTheme = document.getElementById("btnTheme");

  if(btnTheme){
    btnTheme.addEventListener("click", () => {
      const html = document.documentElement;
      const current = html.getAttribute("data-theme");

      const next = current === "dark" ? "light" : "dark";
      html.setAttribute("data-theme", next);

      localStorage.setItem("mn-theme", next);
    });

    const saved = localStorage.getItem("mn-theme");
    if(saved){
      document.documentElement.setAttribute("data-theme", saved);
    }
  }

  // ================= MOBILE MENU =================
  const burger = document.getElementById("mnBurger");
  const menu = document.getElementById("mnMobileMenu");

  if(burger && menu){
    burger.addEventListener("click", () => {
      const isOpen = burger.getAttribute("aria-expanded") === "true";
      burger.setAttribute("aria-expanded", !isOpen);
      menu.hidden = isOpen;
    });
  }

});
