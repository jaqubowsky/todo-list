import { uiController } from "./ui";

export const eventListeners = (function () {
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("add-btn")) {
      uiController.toggleAddModal();
    }

    if (e.target.classList.contains("tab")) {
      if (e.target.classList.contains("active")) return;

      const tabs = document.querySelectorAll(".tab");
      uiController.switchActiveStatus(e.target, tabs);
      uiController.renderTabContainer();
    }

    if (e.target.classList.contains("modal-tab")) {
      console.log(e.target.textContent);
      uiController.renderModal(e);
    }

    if (e.target.classList.contains("add-project-btn")) {
      uiController.renderProject();
      uiController.toggleAddModal();
      uiController.clearInputs();
    }

    if (e.target.classList.contains("add-todo-btn")) {
      uiController.renderTodoItem();
      uiController.toggleAddModal();
      uiController.clearInputs();
      uiController.renderTabContainer();
    }
  });

  const navModalChildren = document.querySelector(".modal-nav").children;
  const navModalTab = document.querySelectorAll(".modal-tab");
  for (let child of navModalChildren) {
    child.addEventListener("click", () =>
      uiController.switchActiveStatus(child, navModalTab)
    );
  }
})();
