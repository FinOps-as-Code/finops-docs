(function () {
  const storageKey = "finops-docs-theme";
  const root = document.documentElement;
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

  function getInitialTheme() {
    const stored = window.localStorage.getItem(storageKey);
    if (stored === "dark" || stored === "light") return stored;
    return prefersDark.matches ? "dark" : "light";
  }

  function labels(lang, theme) {
    const isPt = (lang || "").toLowerCase().startsWith("pt");
    if (isPt) {
      return theme === "dark" ? "Modo claro" : "Modo escuro";
    }
    return theme === "dark" ? "Light mode" : "Dark mode";
  }

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    const toggle = document.querySelector("[data-theme-toggle]");
    if (toggle) {
      toggle.textContent = labels(root.lang, theme);
      toggle.setAttribute("aria-pressed", String(theme === "dark"));
    }
  }

  function toggleTheme() {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    window.localStorage.setItem(storageKey, next);
    applyTheme(next);
  }

  document.addEventListener("DOMContentLoaded", function () {
    applyTheme(getInitialTheme());
    const toggle = document.querySelector("[data-theme-toggle]");
    if (toggle) {
      toggle.addEventListener("click", toggleTheme);
    }
  });
})();
