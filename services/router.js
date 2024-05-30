const Router = {
  routes: {
    404: {
      template: "/templates/404.html",
      title: "404",
      description: "Page not found",
    },
    "/": {
      template: "/templates/home.html",
      title: "Alexandre Betioli",
      description: "I'm here to help",
    },
    "/about": {
      template: "/templates/about.html",
      title: "About",
      description: "Know more about me",
    },
    "/projects": {
      template: "/templates/projects.html",
      title: "Projects",
      description: "Some of my personal projects",
    },
    "/contact": {
      template: "/templates/contact.html",
      title: "Contact",
      description: "How to contact me",
    },
  },

  init: () => {
    // Map link events for the navigation menu
    document.querySelectorAll("[data-link]").forEach(bindLink);

    //Event handler for user navigation
    window.addEventListener("popstate", (event) => {
      if (event.state) {
        Router.go(event.state.to, false);
      }
    });

    // Render the initial url
    Router.go(location.pathname);
  },

  go: async (to, addToHistory = true) => {
    app.store.mobileMenuHidden = true;

    if (addToHistory) {
      window.history.pushState({ to }, null, to);
    }

    const route = Router.routes[to] || Router.routes[404];

    const content = await fetch(route.template).then((res) => res.text());

    const main = document.querySelector("main");
    main.innerHTML = content;

    // Map link events in the current page
    main.querySelectorAll("[data-link]").forEach(bindLink);

    window.scrollTo(0, 0);

    document.title = route.title;
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", route.description);
  },
};

export default Router;

const bindLink = (link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    Router.go(event.currentTarget.getAttribute("href"));
  });
};
