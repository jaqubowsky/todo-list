import uuid4 from "uuid4";

export const createTodo = (
  title,
  notes,
  priority,
  isComplete = false,
  dueDate
) => {
  const id = uuid4();

  let todo = {
    title,
    dueDate,
    notes,
    priority,
    isComplete,
  };

  return {
    ...todo,
    getId: () => id,
    getIcon: () => (isComplete ? "fa-square-check" : "fa-square"),
    changeIsComplete: () => {
      todo = {
        ...todo,
        isComplete: !todo.isComplete,
      };
    },
    getIsComplete: () => todo.isComplete,
  };
};
