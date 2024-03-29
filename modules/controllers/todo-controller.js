import { getToDos, storeToDos } from '../helpers/storage.js';
import ToDoItem from '../models/todo-item.js';

class ToDoController {
  static todos = getToDos() ?? [];

  static #incrementor = this.todos.length;

  static addTodo = (description) => {
    this.#incrementor += 1;
    const newTodo = new ToDoItem(this.#incrementor, description);
    this.todos.push(newTodo);
    storeToDos(this.todos);
  };

  static removeToDo(index) {
    if (index === this.#incrementor - 1) {
      this.todos.splice(index, 1);
      this.#incrementor -= 1;
    } else {
      this.todos.forEach((todo) => {
        if (todo.index > index) {
          todo.index -= 1;
        }
      });
      this.todos.splice(index, 1);
      this.#incrementor -= 1;
    }
    storeToDos(this.todos);
  }

  static editDescription = (index, description) => {
    this.todos[index].description = description;

    storeToDos(this.todos);
  };

  static changeStatus(index) {
    this.todos[index].completed = !this.todos[index].completed;
    storeToDos(this.todos);
  }

  static clearCompletedTasks() {
    this.todos = this.todos.filter((e) => !e.completed);
    for (let i = 0; i < this.todos.length; i += 1) {
      this.todos[i].index = i + 1;
    }
    this.#incrementor = this.todos.length;
    storeToDos(this.todos);
  }
}

export default ToDoController;
