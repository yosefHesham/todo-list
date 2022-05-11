import { addCheckBoxListeners, changeStatus } from "./change_status.js";
import ToDoController from "./todo-controller.js";

const todolist = document.querySelector(".list");
/**
 *
 * @param {HTMLElement} element
 */
const getElement = (element, query) => {
  return element.querySelector(query);
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
const renderItems = () => {
  todolist.innerHTML = "";
  for (let i = 0; i < ToDoController.todos.length; i += 1) {
    const item = ToDoController.todos[i];
    const itemTemp = document.createElement("itemTemp");
    itemTemp.innerHTML = `<div class="item-wrapper item-wrapper${item.index}">
    <div class="todo-item todo-item${item.index}">
    <input type="checkbox" class="item-check ${item.index}" id="todoItem${item.index
      }" name="${item.description}" ${item.completed ? "checked" : ""}/>

    <p class="todo-title ${item.completed ? "compeleted" : ""}">${item.description}</p>
    <svg class="grow edit"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-three-dots-vertical"
      viewBox="0 0 16 16"
    >
      <path
        d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
      />
    </svg>
  </div>
  <div class="todo-item hidden hidden${item.index}">
  <input type="text" id="todo" class="edit-field ${item.index
      }" name="todo-name" placeholder="Edit" value="${item.description}">
  <svg class="remove-button ${item.index
      }" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg>
  
</div>
  <hr>
  </div>
  `;

  
    todolist.appendChild(itemTemp.firstChild);
  }
};

const removeToDo = (index) => {
  ToDoController.removeToDo(index);
};

const editToDo = (index, description) => {
  ToDoController.editDescription(index, description);
};

const inputField = document.getElementById("todo");

const showMoreListener = () => {
  const item = document.querySelectorAll(".item-wrapper");

  item.forEach((e) =>
    e.addEventListener("click", showMore)
  );
};

const configureDeleteListeners = () => {
  const deleteButtons = document.querySelectorAll(".remove-button");
  deleteButtons.forEach((deleteButton) =>
    deleteButton.addEventListener("click", deleteTask)
  );
};

const configureEditItems = () => {
  const edits = document.querySelectorAll(".edit-field");
  edits.forEach((editField) =>
    editField.addEventListener("keypress", editTask)
  );
};

const createToDo = (description) => {
  ToDoController.addTodo(description);

  const itemTemp = document.createElement("itemTemp");
  itemTemp.innerHTML = `<div class="item-wrapper item-wrapper${ToDoController.todos.length}">
  <div class="todo-item">
  <input type="checkbox" class="item-check ${ToDoController.todos.length}" id="todoItem${ToDoController.todos.length}" name="${description}"/>
  <p class="todo-title">${description}</p>
  <svg class="grow edit"
    xmlns="http://www.w3.org/2000/svg"
    width="16"firstChildfirstChild
    height="16"
    fill="currentColor"
    class="bi bi-three-dots-vertical"
    viewBox="0 0 16 16"
  >
    <path
      d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
    />
  </svg>
</div>
<div class="todo-item hidden hidden${ToDoController.todos.length}">
<input type="text" class="edit-field ${ToDoController.todos.length}" id="todo" name="todo-name" placeholder="Edit" value="${description}"/>
  <svg class="remove-button ${ToDoController.todos.length}" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg>
  
</div>
<hr>
</div>`;
  /** @type {HTMLElement} */
  const checkBox = getElement(itemTemp, ".item-check");
  checkBox.addEventListener("click",changeStatus)

  /** @type {HTMLElement} */
  const showMoreElement = getElement(itemTemp, ".item-wrapper");
  showMoreElement.addEventListener("click",showMore)

      /** @type {HTMLElement} */
  const deleteButton = getElement(itemTemp, ".remove-button");

  deleteButton.addEventListener("click",deleteTask)

  /** @type {HTMLElement} */
  const editField = getElement(itemTemp, ".edit-field");

  editField.addEventListener("keypress",editTask)
  todolist.appendChild(itemTemp.firstChild);
 
};

inputField.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    createToDo(inputField.value);
    inputField.value = "";
  }
});

export {
  renderItems,
  createToDo,
  removeToDo,
  editToDo,
  configureDeleteListeners,
  configureEditItems,
  showMoreListener,
};
