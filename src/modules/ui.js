import { createTodo } from "./todo";
import projectsContainer from "./projects";
import { compareAsc, format } from "date-fns";

export const uiController = (function () {
  const projects = projectsContainer();
  const openAddModal = document.getElementById("todoModal");
  const activeProjectTitle = document.getElementById("activeProjectTitle");
  const todoContainer = document.getElementById("todoContainer");
  const projectsSection = document.getElementById("projectsSectionContainer");

  const updateSelectedProjectTitle = () => {
    const activeTab = document.querySelector(".active");

    activeProjectTitle.textContent = activeTab.textContent;
  };

  const toggleModalVisibility = () => {
    openAddModal.classList.toggle("hidden");
  };

  const renderTodos = () => {
    const activeTab = document.querySelector(".active");
    todoContainer.innerHTML = "";

    const selectedProject = projects.getSelectedProject(activeTab.dataset.id);
    if (!selectedProject) return;

    const todos = selectedProject.getTodos();
    if (todos.length === 0) return;

    let todoContainerHTML = "";

    todos.forEach(
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

    return projects.addProject(projectTitle);
  };

  const renderProject = () => {
    const projectItem = document.createElement("li");
    const deleteBtn = document.createElement("button");
    const trashIcon = document.createElement("i");
    const newProject = createProjectItem();

    projectItem.classList.add("project-tab", "tab");
    deleteBtn.classList.add("todo-btn", "delete-project-btn");
    trashIcon.classList.add("fa-regular", "fa-trash-can", "delete-project-btn");
    projectItem.setAttribute("data-id", newProject.getId());
    projectItem.textContent = newProject.title;

    deleteBtn.appendChild(trashIcon);
    projectItem.appendChild(deleteBtn);
    projectsSection.appendChild(projectItem);
  };

  const createTodoItem = () => {
    const todoTitle = document.getElementById("todoTitle").value;
    const todoNotes = document.getElementById("todoNote").value;
    const todoDueDate = document.getElementById("todoDueDate").value;
    const enteredDate = format(new Date(todoDueDate), "dd-MM-yyyy");
    const todoPriority = document.getElementById("todoPriority").value;

    return createTodo(todoTitle, todoNotes, todoPriority, false, enteredDate);
  };

  const changeIsDoneStatus = (target) => {
    const activeTab = document.querySelector(".active");
    const selectedProject = projects.getSelectedProject(activeTab.dataset.id);

    const targetTodo = selectedProject
      .getTodos()
      .find((todo) => todo.getId() === target.dataset.id);

    targetTodo.changeIsComplete();
  };

  const addTodoItem = () => {
    const activeTab = document.querySelector(".active");

    const activeProject = projects.getSelectedProject(activeTab.dataset.id);
    const homeProject = projects.getProject("Home");

    const newTodo = createTodoItem();

    if (activeTab.dataset.id !== homeProject.getId()) homeProject.add(newTodo);

    activeProject.add(newTodo);
  };

  const deleteTodoItem = (todoTarget) => {
    const allProjects = projects.getProjects();

    allProjects.forEach((project) => {
      project.deleteTodo(todoTarget);
    });
  };

  const deleteProjectItem = (projectTarget) => {
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
    projects,
  };
})();
