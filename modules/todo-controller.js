import { addRemoveListener, configureDeleteListeners } from "./event_listeners";
import { getToDos, storeToDos } from "./storage";
import ToDoItem from "./todo-item";
import { createToDo } from "./todo_ui";

class ToDoController {
  static todos = getToDos() ??  []
  static #incrementor =  this.todos.length;

  static addTodo = (description) => {
    this.#incrementor ++;
    const newTodo = new ToDoItem(this.#incrementor,description)
    this.todos.push(newTodo)
    storeToDos(this.todos)
    createToDo(description)
    addRemoveListener()
    configureDeleteListeners()
  }
  static removeToDo(index) {
   
    if(index === this.#incrementor) {
    this.todos.splice(index - 1, 1) 
    this.#incrementor --;
    
    }
   
     else { 
       this.todos.forEach((todo)  => {
          if(todo.index > index) {
            todo.index --;
          }
      });
      this.todos.splice(index - 1, 1) 
      this.#incrementor --;
  }
  storeToDos(this.todos)
}
}

export default ToDoController;