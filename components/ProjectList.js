import { loadData } from "../services/projects.js";

export class ProjectList extends HTMLElement {
  constructor() {
    super();
    loadData();
  }

  connectedCallback() {
    this.render();

    window.addEventListener("projectschanged", () => {
      this.render();
    });
  }

  render() {
    this.innerHTML = app.store.projects.length === 0 ? "Loading..." : "";
    for (let project of app.store.projects) {
      const projectItem = document.createElement("project-item");
      projectItem.dataset.project = JSON.stringify(project);
      projectItem.setAttribute("class", "w-full");
      this.appendChild(projectItem);
    }
  }
}
