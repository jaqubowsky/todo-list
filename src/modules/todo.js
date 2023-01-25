import uuid4 from "uuid4";

export const toDo = (title, description, dueDate, notes, priority) => {
  return {
    title,
    description,
    dueDate,
    notes,
    priority,
    id: uuid4(),
  };
};
