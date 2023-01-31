import { uiController } from "./ui";

export const eventListeners = (function () {
  const formsContainer = document.querySelectorAll("form");
  const exitBtn = document.getElementById("exitBtn");
  const todoTab = document.querySelector("[data-todo-tab]");
  const projectTab = document.querySelector("[data-project-tab]");
  const formTodoContainer = document.getElementById("formTodoContainer");
  const formProjectContainer = document.getElementById("formProjectContainer");
  const navModalTab = document.querySelectorAll(".modal-tab");

  document.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("add-btn") ||
      e.target.classList.contains("exit-btn")
    ) {
      uiController.toggleModalVisibility();
    }

    if (e.target.classList.contains("tab")) {
      const tabs = document.querySelectorAll(".tab");

      uiController.switchActiveStatus(e.target, tabs);
      uiController.renderTodos();
    }

    if (e.target === todoTab) {
      uiController.renderModal(formTodoContainer);
    }

    if (e.target === projectTab) {
      uiController.renderModal(formProjectContainer);
    }

    if (e.target === exitBtn) {
      document.querySelector(".todo-modal").classList.add("hidden");
    }
  });

  formsContainer.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (e.submitter.classList.contains("add-project-btn")) {
        uiController.renderProject();
      }
      if (e.submitter.classList.contains("add-todo-btn")) {
        uiController.addTodoItem();
      }

      uiController.renderTodos();
      uiController.toggleModalVisibility();
      uiController.clearInputs();
    });
  });

  navModalTab.forEach((child) => {
    child.addEventListener("click", () =>
      uiController.switchActiveStatus(child, navModalTab)
    );
  });
})();
