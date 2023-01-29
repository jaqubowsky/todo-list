import { uiController } from "./ui";
import { eventListeners } from "./events";

export const pageInitializer = (function () {
  const allProjects = uiController.allProjects;

  const renderSampleHome = () => {
    const mainSection = document.getElementById("mainSectionContainer");

    allProjects.getProjects().forEach((project) => {
      if (
        project.getTitle() === "Home" ||
        project.getTitle() === "Today" ||
        project.getTitle() === "Week"
      ) {
        mainSection.innerHTML += `<li class="home-tab tab" data-id="${project.getId()}">${project.getTitle()} </li>`;
      }
    });

    const homeTab = document.querySelector(".home-tab");
    const tabs = document.querySelectorAll(".tab");
    uiController.switchActiveStatus(homeTab, tabs);
  };

  const renderSampleProjects = () => {
    const projectsSection = document.getElementById("projectsSectionContainer");

    allProjects.getProjects().forEach((project) => {
      if (project.getTitle() === "Gym" || project.getTitle() === "Book") {
        projectsSection.innerHTML += `<li class="home-tab tab" data-id="${project.getId()}">${project.getTitle()} </li>`;
      }
    });
  };

  const initializePage = () => {
    renderSampleHome();
    renderSampleProjects();
  };

  return { initializePage };
})();
