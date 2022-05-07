import * as ToDoUi from '../modules/todo_ui.js';
import '../modules/todo-controller.js';
import '../modules/storage.js';
import '../modules/json_handler.js';
import './style.css';

window.onload = ToDoUi.renderItems();
ToDoUi.showMoreListener();
ToDoUi.configureDeleteListeners();
ToDoUi.configureEditItems();
