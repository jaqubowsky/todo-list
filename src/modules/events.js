import { uiController } from "./ui";

export const eventListeners = (function () {
  const todoForm = document.getElementById("todoForm");

  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("add-todo-btn"))
      uiController.toggleAddModal();

    if (e.target.classList.contains("add-project-btn")) {
      uiController.toggleAddModal();
      uiController.renderProject();
    }

    if (e.target.classList.contains("tab")) {
      if (e.target.classList.contains("active")) return;
      uiController.switchActiveStatus(e.target.classList);
      uiController.renderTabContainer();
    }
  });

  todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    uiController.createTodoItem();
    uiController.clearInputs();
    uiController.toggleAddModal();
  });
})();
