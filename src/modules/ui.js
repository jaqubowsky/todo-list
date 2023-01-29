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

  const createProjectObject = () => {
    const projectTitle = document.getElementById("projectTitle").value;

    const newProject = createProject(projectTitle);
    allProjects.add(newProject);

    return newProject;
  };

  const renderProject = () => {
    const projectsSection = document.getElementById("projectsSectionContainer");

    projectsSection.innerHTML += ` <li class="${createProjectObject()
      .getTitle()
      .toLowerCase()}-tab tab" data-id="${createProjectObject().getId()}">${createProjectObject().getTitle()}</li> `;
  };

  const createTodoItem = () => {
    const todoTitle = document.getElementById("todoTitle").value;
    const todoNotes = document.getElementById("todoNote").value;
    const todoDueDate = document.getElementById("todoDueDate").value;
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
      if (project.getId() === activeTab.dataset.id || project.getTitle() === "Home") {
        project.add(createTodoItem());
      }
    });
  };

  const renderModal = (e) => {
    const formContainer = document.getElementById("formContainer");

    formContainer.innerHTML = "";

    if (e.target.textContent === "Project") {
      formContainer.innerHTML = ` 
    <label for="projectTitle">Project title: </label> 
    <input type="text" class="project-title" id="projectTitle" name="projectTitle">
    <button type="submit" class="btn add-project-btn">Add project</button>  
    `;
    }

    if (e.target.textContent === "Todo") {
      formContainer.innerHTML = `
    <label for="todoTitle">Todo title: </label> 
    <input type="text" class="todo-title" id="todoTitle" name="todoTitle">
    <label for="todoNote">Todo note: </label> 
    <input type="textarea" class="todo-note" id="todoNote" name="todoNote">
    <label for="todoDate">Todo due date: </label> 
    <input type="date" class="todo-dueDate" id="todoDueDate" name="todoDueDate">
    <label for="todoPriority">Todo priority: </label> 
    <select for="todoPriority" name="todoPriority" id="todoPriority">
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
    </select>
    <button type="submit" class="btn add-todo-btn">Add todo</button>  
    `;
    }
  };

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
