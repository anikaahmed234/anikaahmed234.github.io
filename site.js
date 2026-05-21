(function () {
  const storageKey = "nayona-theme";
  const body = document.body;
  const button = document.querySelector(".theme-toggle");
  const preferred = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  const saved = window.localStorage.getItem(storageKey);

  function applyTheme(theme) {
    body.setAttribute("data-theme", theme === "dark" ? "dark" : "light");
  }

  applyTheme(saved || preferred);

  if (button) {
    button.addEventListener("click", function () {
      const next = body.getAttribute("data-theme") === "dark" ? "light" : "dark";
      window.localStorage.setItem(storageKey, next);
      applyTheme(next);
    });
  }
})();
