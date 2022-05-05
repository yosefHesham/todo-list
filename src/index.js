import "../src/style.css"
const todolist = document.querySelector(".list")
const todos = [ {
  description:"study linked list",
  completed:true,
  index : 0,
  
},
{
  description:"implement linked list with js",
  completed:false,
  index : 1,
},
{
  description:"study stack and queue",
  completed:false,
  index : 2,
}
];

const renderItems = () => {
  for(let i = 0; i < todos.length; i+=1) {
    const item = todos[i];
    const itemTemp = document.createElement("itemTemp");
    itemTemp.innerHTML = `<div class="item-wrapper">
    <div class="todo-item">
    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />

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
  ${todos.length - 1 === item.index ? `` : `<hr>`}
  </div>
  `;
  console.log(itemTemp)
  console.log(itemTemp.firstChild)
  todolist.appendChild(itemTemp.firstChild)
  
  }

}
window.onload = renderItems()

