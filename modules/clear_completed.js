import { refreshCheckBoxListeners } from './change_status.js';
import ToDoController from './todo-controller.js';
import { renderItems } from './todo_ui.js';

const clearButton = document.querySelector('.clear');

clearButton.addEventListener('click', () => {
  ToDoController.clearCompletedTasks();

  renderItems();
  refreshCheckBoxListeners();
});