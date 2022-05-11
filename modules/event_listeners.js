import ToDoController from "./todo-controller.js";


const removeToDo = (index) => {
  ToDoController.removeToDo(index);
};

const editToDo = (index, description) => {
  ToDoController.editDescription(index, description);
};

/**
 * @param {Event} event
 */
 const showMore = (event) => {
  if (event.target.classList.contains("edit")) {
    event.target.parentElement.style.display = "none";
    event.target.parentElement.nextElementSibling.style.display = "flex";
  }
}

/**
 * @param {Event} event
 */
const deleteTask = (event) => {
  const parent = document.querySelector(
    `.item-wrapper${event.target.classList[1]}`
  );
    removeToDo(Number(event.target.classList[1]));
    parent.remove();
  
}

/**
 * @param {Event} event
 */
 const editTask = (event) => {
  if (event.key === "Enter") {
    /**
     * @type {HTMLElement}
     */
    const parent = event.target.parentElement;
    const p = getElement(parent.previousElementSibling,".todo-title ")
    p.textContent = event.target.value

    parent.style.display = "none";
    parent.previousElementSibling.style.display = "flex"

    
    editToDo(Number(event.target.classList[1]), event.target.value);
  } 
  
}

export {showMore,deleteTask,editTask}