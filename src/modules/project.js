import uuid4 from "uuid4";

export default function createProject(name) {
  this.name = name;

  let id = uuid4();
  let todos = [];

  function add(todo) {
    todos.push(todo);
  }

  function remove(todo) {
    todos = todos.filter((toDoItem) => toDoItem.getId() !== todo.getId());
  }

  function getTodos() {
    return Object.freeze([...todos]);
  }

  function getId() {
    return Object.freeze(id);
  }

  return Object.freeze({ name, add, remove, getTodos, getId });
}
