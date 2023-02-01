import { createTodo } from "./todo";
import createProject from "./todoList";
import projectsContainer from "./projects";

export const uiController = (function () {
  const projects = projectsContainer();
  const allProjects = projects.getProjects();

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
    const activeTab = document.querySelector(".active");
    const todoContainer = document.getElementById("todoContainer");
    todoContainer.innerHTML = "";

    if (
      projects.getSelectedProject(activeTab.dataset.id).getTodos().length === 0
    )
      return;

    let todoContainerHTML = "";

    projects
      .getSelectedProject(activeTab.dataset.id)
      .getTodos()
      .forEach(
        (todo) =>
          (todoContainerHTML += ` 
          <div class="todo-item ${todo.priority.toLowerCase()} ${todo.getIsComplete()}" data-id="${todo.getId()}">
            <div class="todo-info">
                <button class="todo-btn checkbox-btn">
                  <i class="fa-regular ${todo.getIcon()} checkbox"></i>
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

    projects.add(newProject);

    return newProject;
  };

  const renderProject = () => {
    const projectsSection = document.getElementById("projectsSectionContainer");
    const projectItem = document.createElement("li");
    const deleteBtn = document.createElement("button");
    const trashIcon = document.createElement("i");
    const newProject = createProjectItem();

    projectItem.classList.add("project-tab");
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

  const changeIsDoneStatus = (target) => {
    const activeTab = document.querySelector(".active");

    projects
      .getSelectedProject(activeTab.dataset.id)
      .getTodos()
      .forEach((todo) => {
        if (todo.getId() === target.dataset.id) {
          todo.changeIsComplete();
        }
      });
  };

  const addTodoItem = () => {
    const activeTab = document.querySelector(".active");
    const newTodo = createTodoItem();

    allProjects.forEach((project) => {
      if (
        project.getId() === activeTab.dataset.id ||
        project.getTitle() === "Home"
      )
        project.add(newTodo);
    });
  };

  const deleteTodoItem = (todoTarget) => {
    allProjects.forEach((project) => {
      project.deleteTodo(todoTarget);
    });
  };

  const deleteProjectItem = (projectTarget) => {
    const projectsSection = document.getElementById("projectsSectionContainer");

    projects.deleteProject(projectTarget);

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
    switchActiveStatus,
    deleteProjectItem,
    changeIsDoneStatus,
    allProjects,
  };
})();
