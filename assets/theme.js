(function () {
  const storageKey = "finops-docs-theme";
  const root = document.documentElement;
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

  function getInitialTheme() {
    const stored = window.localStorage.getItem(storageKey);
    if (stored === "dark" || stored === "light") return stored;
    return prefersDark.matches ? "dark" : "light";
  }

  function getLabel(lang, theme) {
    const isPt = (lang || "").toLowerCase().startsWith("pt");
    if (isPt) return theme === "dark" ? "☀️ Modo claro" : "🌙 Modo escuro";
    return theme === "dark" ? "☀️ Light mode" : "🌙 Dark mode";
  }

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    const toggle = document.querySelector("[data-theme-toggle]");
    if (toggle) {
      toggle.textContent = getLabel(root.lang, theme);
      toggle.setAttribute("aria-pressed", String(theme === "dark"));
    }
  }

  function toggleTheme() {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    window.localStorage.setItem(storageKey, next);
    applyTheme(next);
  }

  // Apply theme immediately (before DOMContentLoaded) to avoid flash
  applyTheme(getInitialTheme());

  document.addEventListener("DOMContentLoaded", function () {
    // Re-apply to ensure toggle button text is updated after DOM is ready
    applyTheme(root.getAttribute("data-theme") || getInitialTheme());
    const toggle = document.querySelector("[data-theme-toggle]");
    if (toggle) {
      toggle.addEventListener("click", toggleTheme);
    }
  });
})();
