const projects = [
  {
    name: "Urutau",
    href: "https://github.com/apbetioli/urutau",
    github: "https://github.com/apbetioli/urutau",
    badges: ["React", "Next.js", "Tailwind CSS", "Prisma", "PostgreSQL"],
    description: "AI-generated bedtime stories with text, audio and image.",
  },
  {
    name: "Estimate 3D",
    href: "https://master--estimate3d.netlify.app/",
    github: "https://github.com/apbetioli/estimate3d",
    badges: ["React", "Redux-Toolkit", "Redux-Persist", "Tailwind CSS"],
    description:
      "An app for calculating the costs and selling price of 3D prints.",
  },
  {
    name: "mariubialli.com.br",
    href: "https://mariubialli.com.br/",
    github: "https://github.com/apbetioli/mariubialli",
    badges: ["React", "Next.js", "MUI", "GraphQL", "MongoDB"],
    description:
      "A performant site for selling courses and capturing emails, integrated with marketing APIs, a headless CMS, and a serverless database.",
  },
  {
    name: "Moving Platform Maker 2D",
    href: "https://assetstore.unity.com/packages/tools/level-design/moving-platform-maker-2d-71886",
    badges: ["Unity", "C#"],
    description:
      "A Unity editor extension for game developers to create 2D moving platforms faster, without coding.",
  },
  {
    name: "3D Printing YouTube Channel",
    href: "https://www.youtube.com/@ab3d288",
    badges: ["Communication", "3D Printing", "Video Editing"],
    description:
      "A YouTube channel about 3D printing, with tutorials, reviews, and projects.",
  },
];

const App = {
  $: {
    projects: document.querySelector('[data-me="projects"]'),
  },
  createProject: (project) => {
    const badges = project.badges
      .map((badge) => `<span class="badge">${badge}</span>`)
      .join("\n            ");

    const github = project.github
      ? `<a href="${project.github}" title="GitHub project">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="50"
            height="50"
            viewBox="0 0 64 64"
            >
            <path
                fill="#fff"
                d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"
            ></path>
            </svg>
        </a>`
      : "";

    const div = document.createElement("div");
    div.classList.add("project");
    div.insertAdjacentHTML(
      "afterbegin",
      `
        <div class="row justify-between">
          <a
            href="${project.href}"
          >
            <h3>${project.name}</h3>
          </a>
          ${github}
        </div>
        <div class="row">
          ${badges}
        </div>
        <p>
          ${project.description}
        </p>
      `
    );
    return div;
  },
  render: () => {
    const projectsFragment = document.createDocumentFragment();
    projects
      .map(App.createProject)
      .forEach((div) => projectsFragment.appendChild(div));
    App.$.projects.appendChild(projectsFragment);
  },
};

App.render();
