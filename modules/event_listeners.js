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

const configureEditItems = () => {
  const edits = document.querySelectorAll(".edit-field")
  edits.forEach(editField => editField.addEventListener('keypress', (event) => {
  
    if(event.key === "Enter") {
    
      const parent = event.target.parentElement
      parent.style.display = "none";
      ToDoController.editDescription(parseInt(editField.classList[1]),  editField.value )
    }
  }));
}
inputField.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    ToDoController.addTodo(inputField.value);
    inputField.value = "";
  }
});

export { showMoreListener as addRemoveListener, configureDeleteListeners, configureEditItems };
