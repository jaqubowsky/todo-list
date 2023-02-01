import { uiController } from "./ui";
import { eventListeners } from "./events";

export const pageInitializer = (function () {
  const formProjectContainer = document.getElementById("formProjectContainer");
  const allProjects = uiController.allProjects;

  const renderSampleHome = () => {
    const mainSection = document.getElementById("mainSectionContainer");

    allProjects.getProjects().forEach((project) => {
      if (
        project.getTitle() === "Home" ||
        project.getTitle() === "Today" ||
        project.getTitle() === "Week"
      ) {
        mainSection.innerHTML += `<li class="main-tab tab" data-id="${project.getId()}">${project.getTitle()} </li>`;
      }
    });

    const mainTab = document.querySelector(".main-tab");
    const tabs = document.querySelectorAll(".tab");
    uiController.switchActiveStatus(mainTab, tabs);
  };

  const renderSampleProjects = () => {
    const projectsSection = document.getElementById("projectsSectionContainer");

    allProjects.getProjects().forEach((project) => {
      if (project.getTitle() === "Gym" || project.getTitle() === "Book") {
        projectsSection.innerHTML += `<li class="main-tab tab" data-id="${project.getId()}">${project.getTitle()}<button class="todo-btn delete-project-btn">
                  <i class="fa-regular fa-trash-can delete-project-btn"></i>
                </button></li>`;
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
