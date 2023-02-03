import { uiController } from "./ui";
import { eventListeners } from "./events";

export const pageInitializer = (function () {
  const formProjectContainer = document.getElementById("formProjectContainer");
  const projects = uiController.projects;

  projects.addProject("Home");
  projects.addProject("Today");
  projects.addProject("Week");
  projects.addProject("Gym");
  projects.addProject("Book");

  const renderSampleHome = () => {
    const mainSection = document.getElementById("mainSectionContainer");

    projects.getProjects().forEach((project) => {
      if (
        project.title === "Home" ||
        project.title === "Today" ||
        project.title === "Week"
      ) {
        const li = document.createElement("li");
        li.classList.add("main-tab", "tab");
        li.setAttribute("data-id", project.getId());
        li.textContent = project.title;
        mainSection.appendChild(li);
      }
    });

    const mainTab = document.querySelector(".main-tab");
    const tabs = document.querySelectorAll(".tab");
    uiController.switchActiveStatus(mainTab, tabs);
  };

  const renderSampleProjects = () => {
    const projectsSection = document.getElementById("projectsSectionContainer");

    projects.getProjects().forEach((project) => {
      if (project.title === "Gym" || project.title === "Book") {
        const li = document.createElement("li");
        li.classList.add("project-tab", "tab");
        li.setAttribute("data-id", project.getId());
        li.textContent = project.title;

        const button = document.createElement("button");
        button.classList.add("todo-btn", "delete-project-btn");

        const i = document.createElement("i");
        i.classList.add("fa-regular", "fa-trash-can", "delete-project-btn");

        button.appendChild(i);
        li.appendChild(button);
        projectsSection.appendChild(li);
      }
    });
  };

  const initializePage = () => {
    renderSampleHome();
    renderSampleProjects();
    uiController.renderModal(formProjectContainer);
  };

  return { initializePage };
})();
