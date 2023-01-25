export default function toDoList() {
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

  return Object.freeze({ add, remove, getTodos });
}
