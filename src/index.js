import './style.css';
import * as ToDoUi from '../modules/todo_ui.js';
import '../modules/todo-controller.js';
import '../modules/storage.js';
import '../modules/json_handler.js';
import { refreshCheckBoxListeners } from '../modules/change_status.js';
import '../modules/clear_completed.js';

window.onload = ToDoUi.renderItems();
ToDoUi.showMoreListener();
ToDoUi.configureDeleteListeners();
ToDoUi.configureEditItems();
refreshCheckBoxListeners();
