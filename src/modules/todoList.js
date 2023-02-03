import uuid4 from "uuid4";

export default function createProject(title) {
  const id = uuid4();
  let todos = [];

  function add(todo) {
    todos.push(todo);
  }

  function deleteTodo(todo) {
    todos = todos.filter((toDoItem) => toDoItem.getId() !== todo.dataset.id);
  }

  function getTodos() {
    return [...todos];
  }

  function getId() {
    return id;
  }

  return { title, add, deleteTodo, getTodos, getId };
}
