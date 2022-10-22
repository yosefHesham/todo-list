import configureNewAddedItem from './configureNewAddedItem.js';
import ToDoController from './controllers/todo-controller.js';
import { deleteTask, editTask, showMore } from './event_listeners.js';
import toDoUiItem from './UI items/todo_ui.js';

const todolist = document.querySelector('.list');
/**
 *
 * @param {HTMLElement} element
 */

const renderItems = () => {
  todolist.innerHTML = '';
  for (let i = 0; i < ToDoController.todos.length; i += 1) {
    const item = ToDoController.todos[i];
    const toDoItem = toDoUiItem(item.index, item.description, item.completed);
    todolist.appendChild(toDoItem.firstChild);
  }
};

const inputField = document.getElementById('todo');

const showMoreListener = () => {
  const item = document.querySelectorAll('.item-wrapper');

  item.forEach((e) => e.addEventListener('click', showMore));
};

const configureDeleteListeners = () => {
  const deleteButtons = document.querySelectorAll('.remove-button');
  deleteButtons.forEach((deleteButton) => deleteButton.addEventListener('click', deleteTask));
};

const configureEditItems = () => {
  const edits = document.querySelectorAll('.edit-field');
  edits.forEach((editField) => editField.addEventListener('keypress', editTask));
};

const createToDo = (description) => {
  ToDoController.addTodo(description);

  const toDoItem = toDoUiItem(ToDoController.todos.index, description);

  configureNewAddedItem(toDoItem);
  todolist.appendChild(toDoItem.firstChild);
};

inputField.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    createToDo(inputField.value);
    inputField.value = '';
  }
});

export {
  renderItems,
  createToDo,
  configureDeleteListeners,
  configureEditItems,
  showMoreListener,
};
