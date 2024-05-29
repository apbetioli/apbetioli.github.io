const store = {
  mobileMenuHidden: true,
};

const proxiedStore = new Proxy(store, {
  set(target, property, value) {
    target[property] = value;
    if (property == "mobileMenuHidden") {
      window.dispatchEvent(new Event("appmenuchange"));
    }
    return true;
  },
});

export default proxiedStore;
