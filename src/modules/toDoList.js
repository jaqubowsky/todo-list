export default function toDoList() {
  let todos = [];

  this.add = (todo) => {
    todos.push(todo);
  };

  this.remove = (todo) => {
    const newToDo = todos.filter((toDoItem) => toDoItem.id !== todo.id);
    todos = newToDo;
  };

  this.getTodos = () => todos;
}
