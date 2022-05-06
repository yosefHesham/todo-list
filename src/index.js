import *  as ToDoUi from '../modules/todo_ui.js';
import "../modules/event_listeners.js"
import "../modules/todo-controller.js"
import "../modules/storage.js"
import "../modules/json_handler.js"
import './style.css';
import { addRemoveListener, configureDeleteListeners } from '../modules/event_listeners.js';

window.onload = ToDoUi.renderItems();
addRemoveListener()
configureDeleteListeners()