import uuid4 from "uuid4";

export const toDo = (title, description, notes, priority, isComplete, dueDate) => {
  const id = uuid4();

  const getId = () => id;

  const editData = (title, description, notes, priority) => {
    this.title = title,
    this.description = description,
    this.notes = notes,
    this.priority = priority
  }

  return {
    title,
    description,
    dueDate,
    notes,
    priority,
    isComplete,
    getId,
    editData,
  };
};
