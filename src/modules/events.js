import { uiController } from "./ui";

export const eventListeners = (function () {
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("add-btn")) {
      uiController.renderModal();
      uiController.toggleAddModal();
    }

    if (e.target.classList.contains("tab")) {
      if (e.target.classList.contains("active")) return;

      const tabs = document.querySelectorAll(".tab");
      uiController.switchActiveStatus(e.target, tabs);
      uiController.renderTabContainer();
    }
  });

  document.addEventListener("submit", (e) => {
    if (e.target.classList.contains("todo-form")) {
      e.preventDefault();
      uiController.renderTodoItem();
      uiController.clearInputs();
      uiController.toggleAddModal();
      uiController.renderTabContainer();
    }
  });

  const navModalChildren = document.querySelector(".modal-nav").children;
  const navModalTab = document.querySelectorAll(".modal-tab");
  for (let child of navModalChildren) {
    child.addEventListener(
      "click",
      () => uiController.switchActiveStatus(child, navModalTab)
    );
  }
})();
