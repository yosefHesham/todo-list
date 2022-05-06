import { addRemoveListener, configureDeleteListeners, configureEditItems } from "./event_listeners";
import { getToDos, storeToDos } from "./storage";
import ToDoItem from "./todo-item";
import { createToDo, renderItems } from "./todo_ui";

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
    configureEditItems()

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
static editDescription = (index,description) => {
  console.log(description)
    
 this.todos[index - 1].description = description;
 console.log(index)
 console.log(this.todos[index - 1])
 console.log(this.todos)
 storeToDos(this.todos);
 renderItems();
 addRemoveListener()
 configureDeleteListeners()
 configureEditItems()


}

}

export default ToDoController;