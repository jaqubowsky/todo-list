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

  const switchActiveStatus = (target, tabs) => {
    tabs.forEach((tab) => tab.classList.remove("active"));

    target.classList.add("active");
  };

  const createProject = () => {
    const projectTitle = document.getElementById("todo-title").value;

    const newProject = createProject(projectTitle);
    allProjects.add(newProject);

    return newProject;
  };

  const renderProject = () => {
    const projectsSection = document.getElementById("projectSectionContainer");

    projectsSection.innerHTML += ` <li class="tab" id="${createProject().getId()}">${
      createProject().name
    }</li> `;
  };

  const createTodoItem = () => {
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

    return newTodo;
  };

  const renderTodoItem = () => {
    const activeTab = document.querySelector(".active");

    allProjects.getProjects().forEach((project) => {
      if (project.getId() === activeTab.dataset.id || project.name === "Home") {
        project.add(createTodoItem());
      }
    });
  };

  const renderModal = () => {};

  const clearInputs = () => {
    const allInputs = document.querySelectorAll("input");

    allInputs.forEach((input) => (input.value = ""));
  };

  return {
    toggleAddModal,
    renderProject,
    renderTodoItem,
    clearInputs,
    renderModal,
    renderTabContainer,
    switchActiveStatus,
    allProjects,
  };
})();
