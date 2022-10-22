import './style.css';
import * as ToDoUi from '../modules/todo_ui.js';
import '../modules/controllers/todo-controller.js';
import '../modules/helpers/storage.js';
import '../modules/helpers/json_handler.js';
import { refreshCheckBoxListeners } from '../modules/change_status.js';
import '../modules/clear_completed.js';

window.onload = ToDoUi.renderItems();
ToDoUi.showMoreListener();
ToDoUi.configureDeleteListeners();
ToDoUi.configureEditItems();
refreshCheckBoxListeners();
