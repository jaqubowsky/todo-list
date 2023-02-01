import { uiController } from "./ui";
import createProject from "./todoList";

export const eventListeners = (function () {
  const formsContainer = document.querySelectorAll("form");
  const exitBtn = document.getElementById("exitBtn");
  const todoTab = document.querySelector("[data-todo-tab]");
  const projectTab = document.querySelector("[data-project-tab]");
  const formTodoContainer = document.getElementById("formTodoContainer");
  const formProjectContainer = document.getElementById("formProjectContainer");
  const projectsSectionContainer = document.getElementById(
    "projectsSectionContainer"
  );
  const navModalTab = document.querySelectorAll(".modal-tab");

  document.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("add-btn") ||
      e.target.classList.contains("exit-btn")
    ) {
      uiController.toggleModalVisibility();
    }

    if (e.target.classList.contains("checkbox")) {
      const todoTab = e.target.parentElement.parentElement.parentElement;

      uiController.changeIsDoneStatus(todoTab);
      uiController.renderTodos();
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
      const todoModal = document.querySelector(".todo-modal");
      todoModal.classList.add("hidden");
    }

    if (e.target.classList.contains("delete-project-btn")) {
      const tabs = document.querySelectorAll(".tab");
      const mainContainer = document.getElementById("mainSectionContainer");
      const projectItem = e.target.parentElement.parentElement;

      if (projectItem.classList.contains("active")) {
        uiController.switchActiveStatus(mainContainer.firstChild, tabs);
      }

      uiController.deleteProjectItem(projectItem);
    }

    if (e.target.classList.contains("delete-todo-btn")) {
      const todoItem =
        e.target.parentElement.parentElement.parentElement.parentElement;

      uiController.deleteTodoItem(todoItem);
      uiController.renderTodos();
    }
  });

  formsContainer.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (e.submitter.classList.contains("add-project-btn")) {
        const tabs = document.querySelectorAll(".tab");

        uiController.renderProject();
        uiController.switchActiveStatus(
          projectsSectionContainer.lastChild,
          tabs
        );
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
