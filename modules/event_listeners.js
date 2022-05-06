import ToDoController from "./todo-controller";

const inputField = document.getElementById("todo")


inputField.addEventListener("keypress",(event) => {
  if(event.key == "Enter") {
    console.log(inputField.value)
    ToDoController.addTodo(inputField.value);
    inputField.value = ""
  }
});