import uuid4 from "uuid4";

export default function createProject(name) {
  const title = name;

  const id = uuid4();
  let todos = [];

  function add(todo) {
    todos.push(todo);
  }

  function deleteTodo(todo) {
    todos = todos.filter((toDoItem) => toDoItem.getId() !== todo.id);
  }

  function getTodos() {
    return Object.freeze([...todos]);
  }

  function getTitle() {
    return title;
  }

  function getId() {
    return Object.freeze(id);
  }

  return Object.freeze({ getTitle, add, deleteTodo, getTodos, getId });
}
