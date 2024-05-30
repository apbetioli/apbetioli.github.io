import Router from "./services/router.js";
import Store from "./services/store.js";

window.app = {
  router: Router,
  store: Store,
};

window.addEventListener("DOMContentLoaded", () => {
  app.router.init();

  document
    .getElementById("mobile-button-menu")
    .addEventListener("click", () => {
      app.store.mobileMenuHidden = !app.store.mobileMenuHidden;
    });
});

window.addEventListener("appmenuchange", () => {
  if (app.store.mobileMenuHidden) {
    document.getElementById("menu").setAttribute("hidden", app.menuOpen);
  } else {
    document.getElementById("menu").removeAttribute("hidden");
  }
});
