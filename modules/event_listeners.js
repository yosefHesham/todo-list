import ToDoController from "./todo-controller";

const inputField = document.getElementById("todo");

const addRemoveListener = () => {
  const item = document.querySelectorAll(".item-wrapper");

  item.forEach((e) =>
    e.addEventListener("click", (event) => {
          console.log(event.target.classList)
        console.log(event.target.classList.contains('edit'))
  
      if(event.target.classList.contains("edit")) {
        event.target.parentElement.style.display = "none";
      event.target.parentElement.nextElementSibling.style.display = "flex";
      }

    })
  );
};

inputField.addEventListener("keypress", (event) => {
  if (event.key == "Enter") {
    console.log(inputField.value);
    ToDoController.addTodo(inputField.value);
    inputField.value = "";
  }
});

export { addRemoveListener };
