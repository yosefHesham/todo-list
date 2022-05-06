import ToDoController from "./todo-controller";

const todolist = document.querySelector('.list');

const createToDo = (description) => {
  const itemTemp = document.createElement('itemTemp');
  itemTemp.innerHTML = `<div class="item-wrapper">
  <div class="todo-item">
  <input type="checkbox" id="todoItem${ToDoController.todos.length + 1}" name="${description}"/>

  <p class="todo-title">${description}</p>
  <svg class="grow"
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

</div>
`;
  todolist.appendChild(itemTemp.firstChild);
}

const renderItems = () => {
  console.log(ToDoController.todos)
  for (let i = 0; i < ToDoController.todos.length; i += 1) {
    const item = ToDoController.todos[i];
    const itemTemp = document.createElement('itemTemp');
    itemTemp.innerHTML = `<div class="item-wrapper">
    <div class="todo-item">
    <input type="checkbox" id="todoItem${item.index}" name="${item.description}"/>

    <p class="todo-title">${item.description}</p>
    <svg class="grow"
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
  ${ToDoController.todos.length - 1 === item.index ? '' : '<hr>'}
  </div>
  `;
    todolist.appendChild(itemTemp.firstChild);
  }
};

export {renderItems, createToDo}