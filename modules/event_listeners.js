import ToDoController from "./todo-controller";

const inputField = document.getElementById("todo");

const showMoreListener = () => {
  const item = document.querySelectorAll(".item-wrapper");

  item.forEach((e) =>
    e.addEventListener("click", (event) => {
      if (event.target.classList.contains("edit")) {
        event.target.parentElement.style.display = "none";
        event.target.parentElement.nextElementSibling.style.display = "flex";
      }
    })
  );
};

const configureDeleteListeners = () => {
  const deleteButtons = document.querySelectorAll(".remove-button");
  deleteButtons.forEach((deleteButton) =>
  deleteButton.addEventListener("click", () => {
      const parent = document.querySelector(
        `.item-wrapper${deleteButton.classList[1]}`
      );
      ToDoController.removeToDo(parseInt(deleteButton.classList[1]))
      if(parent) {
        parent.remove();
        return;
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

export { showMoreListener as addRemoveListener, configureDeleteListeners };
