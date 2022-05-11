import { refreshCheckBoxListeners } from './change_status.js';
import ToDoController from './todo-controller.js';
import {
  configureDeleteListeners, configureEditItems, renderItems, showMoreListener,
} from './todo_ui.js';

const clearButton = document.querySelector('.clear');

clearButton.addEventListener('click', () => {
  ToDoController.clearCompletedTasks();

  renderItems();
  refreshCheckBoxListeners();
  configureDeleteListeners();
  configureEditItems();
  showMoreListener();
});