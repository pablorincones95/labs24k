(function () {
  "use strict";

  var header = document.querySelector(".site-header");
  if (!header) return;

  var toggle = header.querySelector(".site-header__toggle");
  var nav = header.querySelector(".site-header__nav");
  var body = document.body;

  function setOpen(open) {
    header.classList.toggle("is-open", open);
    body.classList.toggle("has-menu-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
  }

  if (toggle) {
    toggle.addEventListener("click", function () {
      setOpen(!header.classList.contains("is-open"));
    });
  }

  if (nav) {
    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        setOpen(false);
      }
    });
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && header.classList.contains("is-open")) {
      setOpen(false);
    }
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth >= 768 && header.classList.contains("is-open")) {
      setOpen(false);
    }
  });
})();
