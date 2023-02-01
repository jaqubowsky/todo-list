import { createTodo } from "./todo";
import createProject from "./project";
import projectsContainer from "./allProjects";

export const uiController = (function () {
  const allProjects = projectsContainer();

  const getSelectedProject = () => {
    const activeTab = document.querySelector(".active");

    return allProjects
      .getProjects()
      .filter((project) => project.getId() == activeTab.dataset.id)[0];
  };

  const updateSelectedProjectTitle = () => {
    const activeTab = document.querySelector(".active");
    let activeProjectTitle = document.getElementById("activeProjectTitle");

    activeProjectTitle.textContent = activeTab.textContent;
  };

  const toggleModalVisibility = () => {
    const openAddModal = document.getElementById("todoModal");

    openAddModal.classList.toggle("hidden");
  };

  const renderTodos = () => {
    const todoContainer = document.getElementById("todoContainer");
    let todoContainerHTML = "";
    todoContainer.innerHTML = "";

    getSelectedProject()
      .getTodos()
      .forEach(
        (todo) =>
          (todoContainerHTML += ` 
          <div class="todo-item" id="${todo.getId()}">
            <div class="todo-info">
                <button class="todo-btn checkbox-btn">
                  <i class="fa-regular fa-square"></i>
                </button>
                <p class="todo-name">${todo.title}</p>
                </div>
                <div class="todo-option">
                <p class="todo-date">${todo.dueDate}</p>
                <div class="todo-option-btns">
                <button class="todo-btn edit-btn">
                  <i class="fa-regular fa-pen-to-square"></i>
                </button>
                <button class="todo-btn btn-details">
                <i class="fa-regular fa-circle-question"></i>
                </button>
                <button class="todo-btn delete-todo-btn">
                  <i class="fa-regular fa-trash-can delete-todo-btn"></i>
                </button>
                </div>
                </div>
              </div>
              `)
      );

    todoContainer.innerHTML = todoContainerHTML;
  };

  const switchActiveStatus = (target, tabs) => {
    if (target.classList.contains("active")) return;

    tabs.forEach((tab) => tab.classList.remove("active"));

    target.classList.add("active");

    updateSelectedProjectTitle();
  };

  const createProjectItem = () => {
    const projectTitle = document.getElementById("projectTitle").value;
    const newProject = createProject(projectTitle);

    allProjects.add(newProject);

    return newProject;
  };

  const renderProject = () => {
    const projectsSection = document.getElementById("projectsSectionContainer");
    const projectItem = document.createElement("li");
    const deleteBtn = document.createElement("button");
    const trashIcon = document.createElement("i");
    const newProject = createProjectItem();

    projectItem.classList.add(`${newProject.getTitle().toLowerCase()}-tab`);
    projectItem.classList.add("tab");
    deleteBtn.classList.add("todo-btn");
    deleteBtn.classList.add("delete-project-btn");
    trashIcon.classList.add("fa-regular");
    trashIcon.classList.add("fa-trash-can");
    trashIcon.classList.add("delete-project-btn");
    projectItem.dataset.id = newProject.getId();
    projectItem.textContent = newProject.getTitle();

    deleteBtn.appendChild(trashIcon);
    projectItem.appendChild(deleteBtn);
    projectsSection.appendChild(projectItem);
  };

  const createTodoItem = () => {
    const todoTitle = document.getElementById("todoTitle").value;
    const todoNotes = document.getElementById("todoNote").value;
    const todoDueDate = document.getElementById("todoDueDate").value;
    const todoPriority = document.getElementById("todoPriority").value;

    return createTodo(todoTitle, todoNotes, todoPriority, false, todoDueDate);
  };

  const addTodoItem = () => {
    const activeTab = document.querySelector(".active");
    const newTodo = createTodoItem();

    allProjects.getProjects().forEach((project) => {
      if (
        project.getId() === activeTab.dataset.id ||
        project.getTitle() === "Home"
      )
        project.add(newTodo);
    });
  };

  const deleteTodoItem = (todoTarget) => {
    allProjects.getProjects().forEach((project) => {
      project.deleteTodo(todoTarget);
    });
  };

  const deleteProjectItem = (projectTarget) => {
    const projectsSection = document.getElementById("projectsSectionContainer");

    allProjects.deleteProject(projectTarget.dataset.id);

    projectsSection.removeChild(projectTarget);
  };

  const renderModal = (target) => {
    const formContainers = document.querySelectorAll("form");

    formContainers.forEach((container) => container.classList.add("hidden"));

    target.classList.remove("hidden");
  };

  const clearInputs = () => {
    const allInputs = document.querySelectorAll("input");

    allInputs.forEach((input) => (input.value = ""));
  };

  return {
    toggleModalVisibility,
    renderProject,
    deleteTodoItem,
    addTodoItem,
    clearInputs,
    renderModal,
    renderTodos,
    getSelectedProject,
    switchActiveStatus,
    deleteProjectItem,
    allProjects,
  };
})();
