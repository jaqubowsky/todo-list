import { uiController } from "./ui";

export const eventListeners = (function () {
  const formContainer = document.getElementById("formContainer");

  document.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("add-btn") ||
      e.target.classList.contains("exit-btn")
    ) {
      uiController.toggleAddModal();
    }

    if (e.target.classList.contains("tab")) {
      if (e.target.classList.contains("active")) return;

      const tabs = document.querySelectorAll(".tab");
      uiController.switchActiveStatus(e.target, tabs);
      uiController.renderTabContainer();
    }

    if (e.target.classList.contains("modal-tab")) {
      uiController.renderModal(e);
    }

    if (e.target.classList.contains("exit-btn")) {
    }
  });

  formContainer.addEventListener("submit", (e) => {
    e.preventDefault();
    if (e.submitter.classList.contains("add-project-btn")) {
      uiController.renderProject();
    }
    if (e.submitter.classList.contains("add-todo-btn")) {
      uiController.renderTodoItem();
    }

    uiController.renderTabContainer();
    uiController.toggleAddModal();
    uiController.clearInputs();
  });

  const navModalChildren = document.querySelector(".modal-nav").children;
  const navModalTab = document.querySelectorAll(".modal-tab");

  for (let child of navModalChildren) {
    child.addEventListener("click", () =>
      uiController.switchActiveStatus(child, navModalTab)
    );
  }
})();
