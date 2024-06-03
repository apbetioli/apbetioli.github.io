const store = {
  mobileMenuHidden: true,
  projects: [],
};

const proxiedStore = new Proxy(store, {
  set(target, property, value) {
    target[property] = value;
    if (property == "mobileMenuHidden") {
      window.dispatchEvent(new Event("appmenuchanged"));
    }
    if (property == "projects") {
      window.dispatchEvent(new Event("projectschanged"));
    }
    return true;
  },
});

export default proxiedStore;
