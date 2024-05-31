export class ProjectItem extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const template = document.getElementById("project-template");
    const content = template.content.cloneNode(true);

    this.appendChild(content);

    this.render();
  }

  render() {
    const project = JSON.parse(this.dataset.project);
    this.querySelector("[data-headline]").textContent = project.headline;
    this.querySelector("[data-title]").textContent = project.name;
    this.querySelector("[data-title]").href = project.link;
    this.querySelector("[data-image]").src = `pictures/${project.image}`;
    this.querySelector("[data-image]").alt = project.name;
    this.querySelector("[data-description]").textContent = project.description;
    if (project.github) {
      this.querySelector("[data-github]").href = project.github;
    } else {
      this.querySelector("[data-github]").setAttribute("hidden", true);
    }
  }
}
