import { createTodo } from "./todo";
import createProject from "./project";
import projectsContainer from "./allProjects";

export const uiController = (function () {
  const allProjects = projectsContainer();

  const toggleAddModal = () => {
    const openAddModal = document.querySelector(".todo-modal");

    openAddModal.classList.toggle("hidden");
  };

  const renderTabContainer = () => {
    const todoContainer = document.getElementById("todoContainer");
    const activeTab = document.querySelector(".active");
    todoContainer.innerHTML = "";

    allProjects.getProjects().forEach((project) => {
      if (project.getId() === activeTab.dataset.id) {
        project.getTodos().forEach((todo) => {
          todoContainer.innerHTML += ` <div class="todo-item" id="${todo.getId()}">
                <button class="btn checkbox-btn">
                  <i class="fa-regular fa-square"></i>
                </button>
                <p class="todo-name">${todo.title}</p>
                <button class="btn btn-details">Details</button>
                <p class="todo-date">${todo.dueDate}</p>
                <button class="btn edit-btn">
                  <i class="fa-regular fa-pen-to-square"></i>
                </button>
                <button class="btn delete-btn">
                  <i class="fa-regular fa-trash-can"></i>
                </button>
              </div>`;
        });
      }
    });
  };

  const switchActiveStatus = (target) => {
    const tabs = document.querySelectorAll(".tab");

    tabs.forEach((tab) => tab.classList.remove("active"));

    target.add("active");
  };

  const renderSampleHome = () => {
    const mainSection = document.getElementById("mainSectionContainer");

    allProjects.getProjects().forEach((project) => {
      if (
        project.name === "Home" ||
        project.name === "Today" ||
        project.name === "Week"
      ) {
        mainSection.innerHTML += `<li class="home-tab tab" data-id="${project.getId()}">${
          project.name
        } </li>`;
      }
    });

    const homeTab = document.querySelector(".home-tab");
    homeTab.classList.add("active");
  };

  const renderSampleProjects = () => {
    const projectsSection = document.getElementById("projectsSectionContainer");

    allProjects.getProjects().forEach((project) => {
      if (project.name === "Gym" || project.name === "Book") {
        projectsSection.innerHTML += `<li class="home-tab tab" data-id="${project.getId()}">${
          project.name
        } </li>`;
      }
    });
  };

  const renderProject = () => {
    const projectsSection = document.getElementById("projectSectionContainer");
    const projectTitle = document.getElementById("todo-title").value;

    const newProject = createProject(projectTitle);
    allProjects.add(newProject);
    if (projectTitle === "") return;

    projectsSection.innerHTML += ` <li class="tab" id="${newProject.getId()}">${projectTitle}</li> `;
  };

  const createTodoItem = () => {
    const activeTab = document.querySelector(".active");

    const todoTitle = document.getElementById("todoTitle").value;
    const todoNotes = document.getElementById("todoNotes").value;
    const todoDueDate = document.getElementById("todoDate").value;
    const todoPriority = document.getElementById("todoPriority").value;

    const newTodo = createTodo(
      todoTitle,
      todoNotes,
      todoPriority,
      false,
      todoDueDate
    );

    allProjects.getProjects().forEach((project) => {
      if (project.getId() === activeTab.dataset.id || project.name === "Home") {
        project.add(newTodo);
      }
    });
  };

  const clearInputs = () => {
    const allInputs = document.querySelectorAll("input");

    allInputs.forEach((input) => (input.value = ""));
  };

  return {
    renderSampleProjects,
    toggleAddModal,
    renderProject,
    createTodoItem,
    clearInputs,
    renderSampleHome,
    renderTabContainer,
    switchActiveStatus,
  };
})();