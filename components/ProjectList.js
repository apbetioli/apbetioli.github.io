export class ProjectList extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();

    window.addEventListener("projectsloaded", () => {
      this.render();
    });
  }

  render() {
    this.innerHTML = "";
    for (let project of app.store.projects) {
      const projectItem = document.createElement("project-item");
      projectItem.dataset.project = JSON.stringify(project);
      projectItem.setAttribute("class", "w-full");
      this.appendChild(projectItem);
    }
  }
}
