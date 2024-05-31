const store = {
  mobileMenuHidden: true,
  projects: [],
};

const proxiedStore = new Proxy(store, {
  set(target, property, value) {
    target[property] = value;
    if (property == "mobileMenuHidden") {
      window.dispatchEvent(new Event("appmenuchange"));
    }
    if (property == "projects") {
      window.dispatchEvent(new Event("projectsloaded"));
    }
    return true;
  },
});

export default proxiedStore;
