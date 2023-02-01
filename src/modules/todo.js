import uuid4 from "uuid4";

export const createTodo = (
  title,
  notes,
  priority,
  isComplete = false,
  dueDate
) => {
  const id = uuid4();

  const getId = () => id;

  const editData = (title, notes, priority) => {
    (this.title = title), (this.notes = notes), (this.priority = priority);
  };

  const getIcon = () => {
    return isComplete ? "fa-square-check" : "fa-square";
  };

  const getIsComplete = () => {
    return isComplete
  }

  const changeIsComplete = () => {
    isComplete = !isComplete
  }

  return {
    title,
    dueDate,
    notes,
    priority,
    isComplete,
    getId,
    editData,
    getIcon,
    changeIsComplete,
    getIsComplete,
  };
};
