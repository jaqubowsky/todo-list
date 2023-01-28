import uuid4 from "uuid4";

export const createTodo = (title, notes, priority, isComplete, dueDate) => {
  const id = uuid4();

  const getId = () => id;

  const editData = (title, notes, priority) => {
    this.title = title,
    this.notes = notes,
    this.priority = priority
  }

  return {
    title,
    dueDate,
    notes,
    priority,
    isComplete: isComplete || false,
    getId,
    editData,
  };
};
