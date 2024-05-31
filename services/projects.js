import API from "./api.js";

export async function loadData() {
  app.store.projects = await API.fetchProjects();
}
