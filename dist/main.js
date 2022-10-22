"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["main"],{

/***/ "./modules/UI items/todo_ui.js":
/*!*************************************!*\
  !*** ./modules/UI items/todo_ui.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const toDoUiItem = (index, description, completed = false) => {
  const itemTemp = document.createElement('itemTemp');
  itemTemp.innerHTML = `<div class="item-wrapper item-wrapper${index}">
  <div class="todo-item todo-item${index}">
  <input type="checkbox" class="item-check ${index}" id="todoItem${index}" name="${description}" ${
  completed ? 'checked' : ''
}/>

  <p class="todo-title ${completed ? 'compeleted' : ''}">${description}</p>
  <svg class="grow edit"
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-three-dots-vertical"
    viewBox="0 0 16 16"
  >
    <path class="edit1"
      d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
    />
  </svg>
</div>
<div class="todo-item hidden hidden${index}">
<input type="text" id="todo" class="edit-field ${index}" name="todo-name" placeholder="Edit" value="${description}">
<svg class="remove-button ${index}" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
<path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg>

</div>
<hr>
</div>
`;
  return itemTemp;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDoUiItem);


/***/ }),

/***/ "./modules/change_status.js":
/*!**********************************!*\
  !*** ./modules/change_status.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeStatus": () => (/* binding */ changeStatus),
/* harmony export */   "refreshCheckBoxListeners": () => (/* binding */ refreshCheckBoxListeners)
/* harmony export */ });
/* harmony import */ var _controllers_todo_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/todo-controller.js */ "./modules/controllers/todo-controller.js");


/**
 *
 * @param {Event} event
 */
const changeStatus = (event) => {
  if (event.target.checked) {
    event.target.nextElementSibling.style.textDecoration = 'line-through';
    event.target.nextElementSibling.style.color = 'gray';
  } else {
    event.target.nextElementSibling.style.textDecoration = 'none';
    event.target.nextElementSibling.style.color = 'black';
  }
  const arrayOfNodes = Array.from(document.querySelector('.list').childNodes);
  _controllers_todo_controller_js__WEBPACK_IMPORTED_MODULE_0__["default"].changeStatus(
    arrayOfNodes.indexOf(event.target.parentElement.parentElement),
  );
};
const refreshCheckBoxListeners = () => {
  const checkBoxes = document.querySelectorAll('.item-check');
  checkBoxes.forEach((checkBox) => {
    checkBox.addEventListener('click', changeStatus);
  });
};




/***/ }),

/***/ "./modules/clear_completed.js":
/*!************************************!*\
  !*** ./modules/clear_completed.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _change_status_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change_status.js */ "./modules/change_status.js");
/* harmony import */ var _controllers_todo_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controllers/todo-controller.js */ "./modules/controllers/todo-controller.js");
/* harmony import */ var _todo_ui_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo_ui.js */ "./modules/todo_ui.js");




const clearButton = document.querySelector('.clear');

clearButton.addEventListener('click', () => {
  _controllers_todo_controller_js__WEBPACK_IMPORTED_MODULE_1__["default"].clearCompletedTasks();

  (0,_todo_ui_js__WEBPACK_IMPORTED_MODULE_2__.renderItems)();
  (0,_change_status_js__WEBPACK_IMPORTED_MODULE_0__.refreshCheckBoxListeners)();
  (0,_todo_ui_js__WEBPACK_IMPORTED_MODULE_2__.configureDeleteListeners)();
  (0,_todo_ui_js__WEBPACK_IMPORTED_MODULE_2__.configureEditItems)();
  (0,_todo_ui_js__WEBPACK_IMPORTED_MODULE_2__.showMoreListener)();
});


/***/ }),

/***/ "./modules/configureNewAddedItem.js":
/*!******************************************!*\
  !*** ./modules/configureNewAddedItem.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _change_status_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change_status.js */ "./modules/change_status.js");
/* harmony import */ var _event_listeners_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event_listeners.js */ "./modules/event_listeners.js");
/* harmony import */ var _helpers_getElement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/getElement.js */ "./modules/helpers/getElement.js");




/**
 * @param {HTMLElement} newItem
 */
const configureNewAddedItem = (newItem) => {
  /** @type {HTMLElement} */
  const checkBox = (0,_helpers_getElement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(newItem, '.item-check');
  checkBox.addEventListener('click', _change_status_js__WEBPACK_IMPORTED_MODULE_0__.changeStatus);

  /** @type {HTMLElement} */
  const showMoreElement = (0,_helpers_getElement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(newItem, '.item-wrapper');
  showMoreElement.addEventListener('click', _event_listeners_js__WEBPACK_IMPORTED_MODULE_1__.showMore);

  /** @type {HTMLElement} */
  const deleteButton = (0,_helpers_getElement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(newItem, '.remove-button');

  deleteButton.addEventListener('click', _event_listeners_js__WEBPACK_IMPORTED_MODULE_1__.deleteTask);

  /** @type {HTMLElement} */
  const editField = (0,_helpers_getElement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(newItem, '.edit-field');

  editField.addEventListener('keypress', _event_listeners_js__WEBPACK_IMPORTED_MODULE_1__.editTask);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (configureNewAddedItem);


/***/ }),

/***/ "./modules/controllers/todo-controller.js":
/*!************************************************!*\
  !*** ./modules/controllers/todo-controller.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storage.js */ "./modules/storage.js");
/* harmony import */ var _models_todo_item_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/todo-item.js */ "./modules/models/todo-item.js");



class ToDoController {
  static todos = (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.getToDos)() ?? [];

  static #incrementor = this.todos.length;

  static addTodo = (description) => {
    this.#incrementor += 1;
    const newTodo = new _models_todo_item_js__WEBPACK_IMPORTED_MODULE_1__["default"](this.#incrementor, description);
    this.todos.push(newTodo);
    (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.storeToDos)(this.todos);
  };

  static removeToDo(index) {
    if (index === this.#incrementor - 1) {
      this.todos.splice(index, 1);
      this.#incrementor -= 1;
    } else {
      this.todos.forEach((todo) => {
        if (todo.index > index) {
          todo.index -= 1;
        }
      });
      this.todos.splice(index, 1);
      this.#incrementor -= 1;
    }
    (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.storeToDos)(this.todos);
  }

  static editDescription = (index, description) => {
    this.todos[index].description = description;

    (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.storeToDos)(this.todos);
  };

  static changeStatus(index) {
    this.todos[index].completed = !this.todos[index].completed;
    (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.storeToDos)(this.todos);
  }

  static clearCompletedTasks() {
    this.todos = this.todos.filter((e) => !e.completed);
    for (let i = 0; i < this.todos.length; i += 1) {
      this.todos[i].index = i + 1;
    }
    this.#incrementor = this.todos.length;
    (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.storeToDos)(this.todos);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToDoController);


/***/ }),

/***/ "./modules/event_listeners.js":
/*!************************************!*\
  !*** ./modules/event_listeners.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask),
/* harmony export */   "editTask": () => (/* binding */ editTask),
/* harmony export */   "showMore": () => (/* binding */ showMore)
/* harmony export */ });
/* harmony import */ var _controllers_todo_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/todo-controller.js */ "./modules/controllers/todo-controller.js");
/* harmony import */ var _helpers_getElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/getElement.js */ "./modules/helpers/getElement.js");



const removeToDo = (index) => {
  _controllers_todo_controller_js__WEBPACK_IMPORTED_MODULE_0__["default"].removeToDo(index);
};

const editToDo = (index, description) => {
  _controllers_todo_controller_js__WEBPACK_IMPORTED_MODULE_0__["default"].editDescription(index, description);
};

/**
 * @param {Event} event
 */
const showMore = (event) => {
  if (event.target.classList.contains('edit')) {
    event.target.parentElement.style.display = 'none';
    event.target.parentElement.nextElementSibling.style.display = 'flex';
  } else if (event.target.classList.contains('edit1')) {
    event.target.parentElement.parentElement.style.display = 'none';
    event.target.parentElement.parentElement.nextElementSibling.style.display = 'flex';
  }
};

/**
 * @param {Event} event
 */
const deleteTask = (event) => {
  const parent = event.target.parentElement.parentElement;
  /** @type {HTMLElement}   */
  const list = document.querySelector('.list');
  const arrayNodes = Array.from(list.childNodes);
  removeToDo(arrayNodes.indexOf(parent));
  parent.remove();
};

/**
 * @param {Event} event
 */
const editTask = (event) => {
  if (event.key === 'Enter') {
    /**
     * @type {HTMLElement}
     */
    const parent = event.target.parentElement;
    const list = document.querySelector('.list');
    const arrayOfNodes = Array.from(list.childNodes);
    const p = (0,_helpers_getElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(parent.previousElementSibling, '.todo-title ');
    p.textContent = event.target.value;

    parent.style.display = 'none';
    parent.previousElementSibling.style.display = 'flex';
    editToDo(arrayOfNodes.indexOf(parent.parentElement), event.target.value);
  }
};




/***/ }),

/***/ "./modules/helpers/getElement.js":
/*!***************************************!*\
  !*** ./modules/helpers/getElement.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getElement = (element, query) => element.querySelector(query);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getElement);


/***/ }),

/***/ "./modules/helpers/json_handler.js":
/*!*****************************************!*\
  !*** ./modules/helpers/json_handler.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fromJson": () => (/* binding */ fromJson),
/* harmony export */   "toJson": () => (/* binding */ toJson)
/* harmony export */ });
const toJson = (books) => JSON.stringify(books);
const fromJson = (books) => JSON.parse(books);



/***/ }),

/***/ "./modules/models/todo-item.js":
/*!*************************************!*\
  !*** ./modules/models/todo-item.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class ToDoItem {
  constructor(index, description, completed = false) {
    this.index = index;
    this.description = description;
    this.completed = completed;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToDoItem);


/***/ }),

/***/ "./modules/storage.js":
/*!****************************!*\
  !*** ./modules/storage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getToDos": () => (/* binding */ getToDos),
/* harmony export */   "storeToDos": () => (/* binding */ storeToDos)
/* harmony export */ });
/* harmony import */ var _helpers_json_handler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/json_handler.js */ "./modules/helpers/json_handler.js");


const getToDos = () => (0,_helpers_json_handler_js__WEBPACK_IMPORTED_MODULE_0__.fromJson)(localStorage.getItem('todos'));
const storeToDos = (todos) => localStorage.setItem('todos', (0,_helpers_json_handler_js__WEBPACK_IMPORTED_MODULE_0__.toJson)(todos));


/***/ }),

/***/ "./modules/todo_ui.js":
/*!****************************!*\
  !*** ./modules/todo_ui.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "configureDeleteListeners": () => (/* binding */ configureDeleteListeners),
/* harmony export */   "configureEditItems": () => (/* binding */ configureEditItems),
/* harmony export */   "createToDo": () => (/* binding */ createToDo),
/* harmony export */   "renderItems": () => (/* binding */ renderItems),
/* harmony export */   "showMoreListener": () => (/* binding */ showMoreListener)
/* harmony export */ });
/* harmony import */ var _configureNewAddedItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configureNewAddedItem.js */ "./modules/configureNewAddedItem.js");
/* harmony import */ var _controllers_todo_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controllers/todo-controller.js */ "./modules/controllers/todo-controller.js");
/* harmony import */ var _event_listeners_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event_listeners.js */ "./modules/event_listeners.js");
/* harmony import */ var _UI_items_todo_ui_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UI items/todo_ui.js */ "./modules/UI items/todo_ui.js");





const todolist = document.querySelector('.list');
/**
 *
 * @param {HTMLElement} element
 */

const renderItems = () => {
  todolist.innerHTML = '';
  for (let i = 0; i < _controllers_todo_controller_js__WEBPACK_IMPORTED_MODULE_1__["default"].todos.length; i += 1) {
    const item = _controllers_todo_controller_js__WEBPACK_IMPORTED_MODULE_1__["default"].todos[i];
    const toDoItem = (0,_UI_items_todo_ui_js__WEBPACK_IMPORTED_MODULE_3__["default"])(item.index, item.description, item.completed);
    todolist.appendChild(toDoItem.firstChild);
  }
};

const inputField = document.getElementById('todo');

const showMoreListener = () => {
  const item = document.querySelectorAll('.item-wrapper');

  item.forEach((e) => e.addEventListener('click', _event_listeners_js__WEBPACK_IMPORTED_MODULE_2__.showMore));
};

const configureDeleteListeners = () => {
  const deleteButtons = document.querySelectorAll('.remove-button');
  deleteButtons.forEach((deleteButton) => deleteButton.addEventListener('click', _event_listeners_js__WEBPACK_IMPORTED_MODULE_2__.deleteTask));
};

const configureEditItems = () => {
  const edits = document.querySelectorAll('.edit-field');
  edits.forEach((editField) => editField.addEventListener('keypress', _event_listeners_js__WEBPACK_IMPORTED_MODULE_2__.editTask));
};

const createToDo = (description) => {
  _controllers_todo_controller_js__WEBPACK_IMPORTED_MODULE_1__["default"].addTodo(description);

  const toDoItem = (0,_UI_items_todo_ui_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_controllers_todo_controller_js__WEBPACK_IMPORTED_MODULE_1__["default"].todos.index, description);

  (0,_configureNewAddedItem_js__WEBPACK_IMPORTED_MODULE_0__["default"])(toDoItem);
  todolist.appendChild(toDoItem.firstChild);
};

inputField.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    createToDo(inputField.value);
    inputField.value = '';
  }
});




/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\nbody {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 100vh;\n}\n\nmain {\n  width: 95%;\n  display: flex;\n  flex-direction: column;\n  margin: 0 auto;\n  box-shadow: 0 8px 10px 0 rgba(0, 0, 0, 0.2);\n}\n\n.list-lable {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.today {\n  margin-left: 15px;\n}\n\n.list {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\nsvg {\n  margin-right: 15px;\n  cursor: pointer;\n}\n\nhr {\n  color: rgba(0, 0, 0, 0.1);\n  opacity: 0.2;\n  margin: 0;\n}\n\n.todo-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  column-gap: 12px;\n  row-gap: 12px;\n  width: 100%;\n}\n\n.grow {\n  margin-left: auto;\n}\n\n#todo {\n  border: none;\n  padding: 10px  2.5%;\n  color: gray;\n  font-style: italic;\n  width: 95%;\n}\n\n.clear {\n  text-align: center;\n  background-color: whitesmoke;\n  color: gray;\n  cursor: pointer;\n  padding: 2% 0;\n}\n\n.hidden {\n  display: none;\n}\n\n.compeleted {\n  text-decoration: line-through;\n  color: gray;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":";AACA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,aAAa;AACf;;AAEA;EACE,UAAU;EACV,aAAa;EACb,sBAAsB;EACtB,cAAc;EACd,2CAA2C;AAC7C;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,SAAS;AACX;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,gBAAgB;EAChB,aAAa;EACb,WAAW;AACb;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,mBAAmB;EACnB,WAAW;EACX,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,4BAA4B;EAC5B,WAAW;EACX,eAAe;EACf,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,6BAA6B;EAC7B,WAAW;AACb","sourcesContent":["\nbody {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 100vh;\n}\n\nmain {\n  width: 95%;\n  display: flex;\n  flex-direction: column;\n  margin: 0 auto;\n  box-shadow: 0 8px 10px 0 rgba(0, 0, 0, 0.2);\n}\n\n.list-lable {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.today {\n  margin-left: 15px;\n}\n\n.list {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\nsvg {\n  margin-right: 15px;\n  cursor: pointer;\n}\n\nhr {\n  color: rgba(0, 0, 0, 0.1);\n  opacity: 0.2;\n  margin: 0;\n}\n\n.todo-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  column-gap: 12px;\n  row-gap: 12px;\n  width: 100%;\n}\n\n.grow {\n  margin-left: auto;\n}\n\n#todo {\n  border: none;\n  padding: 10px  2.5%;\n  color: gray;\n  font-style: italic;\n  width: 95%;\n}\n\n.clear {\n  text-align: center;\n  background-color: whitesmoke;\n  color: gray;\n  cursor: pointer;\n  padding: 2% 0;\n}\n\n.hidden {\n  display: none;\n}\n\n.compeleted {\n  text-decoration: line-through;\n  color: gray;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_todo_ui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/todo_ui.js */ "./modules/todo_ui.js");
/* harmony import */ var _modules_controllers_todo_controller_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/controllers/todo-controller.js */ "./modules/controllers/todo-controller.js");
/* harmony import */ var _modules_storage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/storage.js */ "./modules/storage.js");
/* harmony import */ var _modules_helpers_json_handler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/helpers/json_handler.js */ "./modules/helpers/json_handler.js");
/* harmony import */ var _modules_change_status_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/change_status.js */ "./modules/change_status.js");
/* harmony import */ var _modules_clear_completed_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modules/clear_completed.js */ "./modules/clear_completed.js");








window.onload = _modules_todo_ui_js__WEBPACK_IMPORTED_MODULE_1__.renderItems();
_modules_todo_ui_js__WEBPACK_IMPORTED_MODULE_1__.showMoreListener();
_modules_todo_ui_js__WEBPACK_IMPORTED_MODULE_1__.configureDeleteListeners();
_modules_todo_ui_js__WEBPACK_IMPORTED_MODULE_1__.configureEditItems();
(0,_modules_change_status_js__WEBPACK_IMPORTED_MODULE_5__.refreshCheckBoxListeners)();


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmcUI7QUFDMkI7QUFDRztBQUNwQjtBQUNhO0FBQzJCO0FBQ2hDOztBQUV2QyxnQkFBZ0IsNERBQWtCO0FBQ2xDLGlFQUF1QjtBQUN2Qix5RUFBK0I7QUFDL0IsbUVBQXlCO0FBQ3pCLG1GQUF3QiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL21vZHVsZXMvVUkgaXRlbXMvdG9kb191aS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9tb2R1bGVzL2NoYW5nZV9zdGF0dXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbW9kdWxlcy9jbGVhcl9jb21wbGV0ZWQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbW9kdWxlcy9jb25maWd1cmVOZXdBZGRlZEl0ZW0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbW9kdWxlcy9jb250cm9sbGVycy90b2RvLWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbW9kdWxlcy9ldmVudF9saXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbW9kdWxlcy9oZWxwZXJzL2dldEVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbW9kdWxlcy9oZWxwZXJzL2pzb25faGFuZGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9tb2R1bGVzL21vZGVscy90b2RvLWl0ZW0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbW9kdWxlcy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL21vZHVsZXMvdG9kb191aS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHRvRG9VaUl0ZW0gPSAoaW5kZXgsIGRlc2NyaXB0aW9uLCBjb21wbGV0ZWQgPSBmYWxzZSkgPT4ge1xuICBjb25zdCBpdGVtVGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2l0ZW1UZW1wJyk7XG4gIGl0ZW1UZW1wLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwiaXRlbS13cmFwcGVyIGl0ZW0td3JhcHBlciR7aW5kZXh9XCI+XG4gIDxkaXYgY2xhc3M9XCJ0b2RvLWl0ZW0gdG9kby1pdGVtJHtpbmRleH1cIj5cbiAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiaXRlbS1jaGVjayAke2luZGV4fVwiIGlkPVwidG9kb0l0ZW0ke2luZGV4fVwiIG5hbWU9XCIke2Rlc2NyaXB0aW9ufVwiICR7XG4gIGNvbXBsZXRlZCA/ICdjaGVja2VkJyA6ICcnXG59Lz5cblxuICA8cCBjbGFzcz1cInRvZG8tdGl0bGUgJHtjb21wbGV0ZWQgPyAnY29tcGVsZXRlZCcgOiAnJ31cIj4ke2Rlc2NyaXB0aW9ufTwvcD5cbiAgPHN2ZyBjbGFzcz1cImdyb3cgZWRpdFwiXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgd2lkdGg9XCIxNlwiXG4gICAgaGVpZ2h0PVwiMTZcIlxuICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgIGNsYXNzPVwiYmkgYmktdGhyZWUtZG90cy12ZXJ0aWNhbFwiXG4gICAgdmlld0JveD1cIjAgMCAxNiAxNlwiXG4gID5cbiAgICA8cGF0aCBjbGFzcz1cImVkaXQxXCJcbiAgICAgIGQ9XCJNOS41IDEzYTEuNSAxLjUgMCAxIDEtMyAwIDEuNSAxLjUgMCAwIDEgMyAwem0wLTVhMS41IDEuNSAwIDEgMS0zIDAgMS41IDEuNSAwIDAgMSAzIDB6bTAtNWExLjUgMS41IDAgMSAxLTMgMCAxLjUgMS41IDAgMCAxIDMgMHpcIlxuICAgIC8+XG4gIDwvc3ZnPlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwidG9kby1pdGVtIGhpZGRlbiBoaWRkZW4ke2luZGV4fVwiPlxuPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0b2RvXCIgY2xhc3M9XCJlZGl0LWZpZWxkICR7aW5kZXh9XCIgbmFtZT1cInRvZG8tbmFtZVwiIHBsYWNlaG9sZGVyPVwiRWRpdFwiIHZhbHVlPVwiJHtkZXNjcmlwdGlvbn1cIj5cbjxzdmcgY2xhc3M9XCJyZW1vdmUtYnV0dG9uICR7aW5kZXh9XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBjbGFzcz1cImJpIGJpLXRyYXNoXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPlxuPHBhdGggZD1cIk01LjUgNS41QS41LjUgMCAwIDEgNiA2djZhLjUuNSAwIDAgMS0xIDBWNmEuNS41IDAgMCAxIC41LS41em0yLjUgMGEuNS41IDAgMCAxIC41LjV2NmEuNS41IDAgMCAxLTEgMFY2YS41LjUgMCAwIDEgLjUtLjV6bTMgLjVhLjUuNSAwIDAgMC0xIDB2NmEuNS41IDAgMCAwIDEgMFY2elwiLz5cbjxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTE0LjUgM2ExIDEgMCAwIDEtMSAxSDEzdjlhMiAyIDAgMCAxLTIgMkg1YTIgMiAwIDAgMS0yLTJWNGgtLjVhMSAxIDAgMCAxLTEtMVYyYTEgMSAwIDAgMSAxLTFINmExIDEgMCAwIDEgMS0xaDJhMSAxIDAgMCAxIDEgMWgzLjVhMSAxIDAgMCAxIDEgMXYxek00LjExOCA0IDQgNC4wNTlWMTNhMSAxIDAgMCAwIDEgMWg2YTEgMSAwIDAgMCAxLTFWNC4wNTlMMTEuODgyIDRINC4xMTh6TTIuNSAzVjJoMTF2MWgtMTF6XCIvPlxuPC9zdmc+XG5cbjwvZGl2PlxuPGhyPlxuPC9kaXY+XG5gO1xuICByZXR1cm4gaXRlbVRlbXA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0b0RvVWlJdGVtO1xuIiwiaW1wb3J0IFRvRG9Db250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcnMvdG9kby1jb250cm9sbGVyLmpzJztcblxuLyoqXG4gKlxuICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAqL1xuZXhwb3J0IGNvbnN0IGNoYW5nZVN0YXR1cyA9IChldmVudCkgPT4ge1xuICBpZiAoZXZlbnQudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICBldmVudC50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ2xpbmUtdGhyb3VnaCc7XG4gICAgZXZlbnQudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5zdHlsZS5jb2xvciA9ICdncmF5JztcbiAgfSBlbHNlIHtcbiAgICBldmVudC50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ25vbmUnO1xuICAgIGV2ZW50LnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuc3R5bGUuY29sb3IgPSAnYmxhY2snO1xuICB9XG4gIGNvbnN0IGFycmF5T2ZOb2RlcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QnKS5jaGlsZE5vZGVzKTtcbiAgVG9Eb0NvbnRyb2xsZXIuY2hhbmdlU3RhdHVzKFxuICAgIGFycmF5T2ZOb2Rlcy5pbmRleE9mKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQpLFxuICApO1xufTtcbmNvbnN0IHJlZnJlc2hDaGVja0JveExpc3RlbmVycyA9ICgpID0+IHtcbiAgY29uc3QgY2hlY2tCb3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pdGVtLWNoZWNrJyk7XG4gIGNoZWNrQm94ZXMuZm9yRWFjaCgoY2hlY2tCb3gpID0+IHtcbiAgICBjaGVja0JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW5nZVN0YXR1cyk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgcmVmcmVzaENoZWNrQm94TGlzdGVuZXJzIH07XG4iLCJpbXBvcnQgeyByZWZyZXNoQ2hlY2tCb3hMaXN0ZW5lcnMgfSBmcm9tICcuL2NoYW5nZV9zdGF0dXMuanMnO1xuaW1wb3J0IFRvRG9Db250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcnMvdG9kby1jb250cm9sbGVyLmpzJztcbmltcG9ydCB7XG4gIGNvbmZpZ3VyZURlbGV0ZUxpc3RlbmVycyxcbiAgY29uZmlndXJlRWRpdEl0ZW1zLFxuICByZW5kZXJJdGVtcyxcbiAgc2hvd01vcmVMaXN0ZW5lcixcbn0gZnJvbSAnLi90b2RvX3VpLmpzJztcblxuY29uc3QgY2xlYXJCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xlYXInKTtcblxuY2xlYXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIFRvRG9Db250cm9sbGVyLmNsZWFyQ29tcGxldGVkVGFza3MoKTtcblxuICByZW5kZXJJdGVtcygpO1xuICByZWZyZXNoQ2hlY2tCb3hMaXN0ZW5lcnMoKTtcbiAgY29uZmlndXJlRGVsZXRlTGlzdGVuZXJzKCk7XG4gIGNvbmZpZ3VyZUVkaXRJdGVtcygpO1xuICBzaG93TW9yZUxpc3RlbmVyKCk7XG59KTtcbiIsImltcG9ydCB7IGNoYW5nZVN0YXR1cyB9IGZyb20gJy4vY2hhbmdlX3N0YXR1cy5qcyc7XG5pbXBvcnQgeyBkZWxldGVUYXNrLCBlZGl0VGFzaywgc2hvd01vcmUgfSBmcm9tICcuL2V2ZW50X2xpc3RlbmVycy5qcyc7XG5pbXBvcnQgZ2V0RWxlbWVudCBmcm9tICcuL2hlbHBlcnMvZ2V0RWxlbWVudC5qcyc7XG5cbi8qKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gbmV3SXRlbVxuICovXG5jb25zdCBjb25maWd1cmVOZXdBZGRlZEl0ZW0gPSAobmV3SXRlbSkgPT4ge1xuICAvKiogQHR5cGUge0hUTUxFbGVtZW50fSAqL1xuICBjb25zdCBjaGVja0JveCA9IGdldEVsZW1lbnQobmV3SXRlbSwgJy5pdGVtLWNoZWNrJyk7XG4gIGNoZWNrQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlU3RhdHVzKTtcblxuICAvKiogQHR5cGUge0hUTUxFbGVtZW50fSAqL1xuICBjb25zdCBzaG93TW9yZUVsZW1lbnQgPSBnZXRFbGVtZW50KG5ld0l0ZW0sICcuaXRlbS13cmFwcGVyJyk7XG4gIHNob3dNb3JlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dNb3JlKTtcblxuICAvKiogQHR5cGUge0hUTUxFbGVtZW50fSAqL1xuICBjb25zdCBkZWxldGVCdXR0b24gPSBnZXRFbGVtZW50KG5ld0l0ZW0sICcucmVtb3ZlLWJ1dHRvbicpO1xuXG4gIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZVRhc2spO1xuXG4gIC8qKiBAdHlwZSB7SFRNTEVsZW1lbnR9ICovXG4gIGNvbnN0IGVkaXRGaWVsZCA9IGdldEVsZW1lbnQobmV3SXRlbSwgJy5lZGl0LWZpZWxkJyk7XG5cbiAgZWRpdEZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgZWRpdFRhc2spO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29uZmlndXJlTmV3QWRkZWRJdGVtO1xuIiwiaW1wb3J0IHsgZ2V0VG9Eb3MsIHN0b3JlVG9Eb3MgfSBmcm9tICcuLi9zdG9yYWdlLmpzJztcbmltcG9ydCBUb0RvSXRlbSBmcm9tICcuLi9tb2RlbHMvdG9kby1pdGVtLmpzJztcblxuY2xhc3MgVG9Eb0NvbnRyb2xsZXIge1xuICBzdGF0aWMgdG9kb3MgPSBnZXRUb0RvcygpID8/IFtdO1xuXG4gIHN0YXRpYyAjaW5jcmVtZW50b3IgPSB0aGlzLnRvZG9zLmxlbmd0aDtcblxuICBzdGF0aWMgYWRkVG9kbyA9IChkZXNjcmlwdGlvbikgPT4ge1xuICAgIHRoaXMuI2luY3JlbWVudG9yICs9IDE7XG4gICAgY29uc3QgbmV3VG9kbyA9IG5ldyBUb0RvSXRlbSh0aGlzLiNpbmNyZW1lbnRvciwgZGVzY3JpcHRpb24pO1xuICAgIHRoaXMudG9kb3MucHVzaChuZXdUb2RvKTtcbiAgICBzdG9yZVRvRG9zKHRoaXMudG9kb3MpO1xuICB9O1xuXG4gIHN0YXRpYyByZW1vdmVUb0RvKGluZGV4KSB7XG4gICAgaWYgKGluZGV4ID09PSB0aGlzLiNpbmNyZW1lbnRvciAtIDEpIHtcbiAgICAgIHRoaXMudG9kb3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIHRoaXMuI2luY3JlbWVudG9yIC09IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgICBpZiAodG9kby5pbmRleCA+IGluZGV4KSB7XG4gICAgICAgICAgdG9kby5pbmRleCAtPSAxO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMudG9kb3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIHRoaXMuI2luY3JlbWVudG9yIC09IDE7XG4gICAgfVxuICAgIHN0b3JlVG9Eb3ModGhpcy50b2Rvcyk7XG4gIH1cblxuICBzdGF0aWMgZWRpdERlc2NyaXB0aW9uID0gKGluZGV4LCBkZXNjcmlwdGlvbikgPT4ge1xuICAgIHRoaXMudG9kb3NbaW5kZXhdLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG5cbiAgICBzdG9yZVRvRG9zKHRoaXMudG9kb3MpO1xuICB9O1xuXG4gIHN0YXRpYyBjaGFuZ2VTdGF0dXMoaW5kZXgpIHtcbiAgICB0aGlzLnRvZG9zW2luZGV4XS5jb21wbGV0ZWQgPSAhdGhpcy50b2Rvc1tpbmRleF0uY29tcGxldGVkO1xuICAgIHN0b3JlVG9Eb3ModGhpcy50b2Rvcyk7XG4gIH1cblxuICBzdGF0aWMgY2xlYXJDb21wbGV0ZWRUYXNrcygpIHtcbiAgICB0aGlzLnRvZG9zID0gdGhpcy50b2Rvcy5maWx0ZXIoKGUpID0+ICFlLmNvbXBsZXRlZCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRvZG9zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICB0aGlzLnRvZG9zW2ldLmluZGV4ID0gaSArIDE7XG4gICAgfVxuICAgIHRoaXMuI2luY3JlbWVudG9yID0gdGhpcy50b2Rvcy5sZW5ndGg7XG4gICAgc3RvcmVUb0Rvcyh0aGlzLnRvZG9zKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb0RvQ29udHJvbGxlcjtcbiIsImltcG9ydCBUb0RvQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXJzL3RvZG8tY29udHJvbGxlci5qcyc7XG5pbXBvcnQgZ2V0RWxlbWVudCBmcm9tICcuL2hlbHBlcnMvZ2V0RWxlbWVudC5qcyc7XG5cbmNvbnN0IHJlbW92ZVRvRG8gPSAoaW5kZXgpID0+IHtcbiAgVG9Eb0NvbnRyb2xsZXIucmVtb3ZlVG9EbyhpbmRleCk7XG59O1xuXG5jb25zdCBlZGl0VG9EbyA9IChpbmRleCwgZGVzY3JpcHRpb24pID0+IHtcbiAgVG9Eb0NvbnRyb2xsZXIuZWRpdERlc2NyaXB0aW9uKGluZGV4LCBkZXNjcmlwdGlvbik7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gKi9cbmNvbnN0IHNob3dNb3JlID0gKGV2ZW50KSA9PiB7XG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdlZGl0JykpIHtcbiAgICBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZy5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2VkaXQxJykpIHtcbiAgICBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgfVxufTtcblxuLyoqXG4gKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICovXG5jb25zdCBkZWxldGVUYXNrID0gKGV2ZW50KSA9PiB7XG4gIGNvbnN0IHBhcmVudCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gIC8qKiBAdHlwZSB7SFRNTEVsZW1lbnR9ICAgKi9cbiAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0Jyk7XG4gIGNvbnN0IGFycmF5Tm9kZXMgPSBBcnJheS5mcm9tKGxpc3QuY2hpbGROb2Rlcyk7XG4gIHJlbW92ZVRvRG8oYXJyYXlOb2Rlcy5pbmRleE9mKHBhcmVudCkpO1xuICBwYXJlbnQucmVtb3ZlKCk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gKi9cbmNvbnN0IGVkaXRUYXNrID0gKGV2ZW50KSA9PiB7XG4gIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAvKipcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgY29uc3QgcGFyZW50ID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0Jyk7XG4gICAgY29uc3QgYXJyYXlPZk5vZGVzID0gQXJyYXkuZnJvbShsaXN0LmNoaWxkTm9kZXMpO1xuICAgIGNvbnN0IHAgPSBnZXRFbGVtZW50KHBhcmVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLCAnLnRvZG8tdGl0bGUgJyk7XG4gICAgcC50ZXh0Q29udGVudCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcblxuICAgIHBhcmVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHBhcmVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgZWRpdFRvRG8oYXJyYXlPZk5vZGVzLmluZGV4T2YocGFyZW50LnBhcmVudEVsZW1lbnQpLCBldmVudC50YXJnZXQudmFsdWUpO1xuICB9XG59O1xuXG5leHBvcnQgeyBzaG93TW9yZSwgZGVsZXRlVGFzaywgZWRpdFRhc2sgfTtcbiIsImNvbnN0IGdldEVsZW1lbnQgPSAoZWxlbWVudCwgcXVlcnkpID0+IGVsZW1lbnQucXVlcnlTZWxlY3RvcihxdWVyeSk7XG5cbmV4cG9ydCBkZWZhdWx0IGdldEVsZW1lbnQ7XG4iLCJjb25zdCB0b0pzb24gPSAoYm9va3MpID0+IEpTT04uc3RyaW5naWZ5KGJvb2tzKTtcbmNvbnN0IGZyb21Kc29uID0gKGJvb2tzKSA9PiBKU09OLnBhcnNlKGJvb2tzKTtcblxuZXhwb3J0IHsgdG9Kc29uLCBmcm9tSnNvbiB9OyIsImNsYXNzIFRvRG9JdGVtIHtcbiAgY29uc3RydWN0b3IoaW5kZXgsIGRlc2NyaXB0aW9uLCBjb21wbGV0ZWQgPSBmYWxzZSkge1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFRvRG9JdGVtO1xuIiwiaW1wb3J0IHsgZnJvbUpzb24sIHRvSnNvbiB9IGZyb20gJy4vaGVscGVycy9qc29uX2hhbmRsZXIuanMnO1xuXG5leHBvcnQgY29uc3QgZ2V0VG9Eb3MgPSAoKSA9PiBmcm9tSnNvbihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MnKSk7XG5leHBvcnQgY29uc3Qgc3RvcmVUb0RvcyA9ICh0b2RvcykgPT4gbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zJywgdG9Kc29uKHRvZG9zKSk7XG4iLCJpbXBvcnQgY29uZmlndXJlTmV3QWRkZWRJdGVtIGZyb20gJy4vY29uZmlndXJlTmV3QWRkZWRJdGVtLmpzJztcbmltcG9ydCBUb0RvQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXJzL3RvZG8tY29udHJvbGxlci5qcyc7XG5pbXBvcnQgeyBkZWxldGVUYXNrLCBlZGl0VGFzaywgc2hvd01vcmUgfSBmcm9tICcuL2V2ZW50X2xpc3RlbmVycy5qcyc7XG5pbXBvcnQgdG9Eb1VpSXRlbSBmcm9tICcuL1VJIGl0ZW1zL3RvZG9fdWkuanMnO1xuXG5jb25zdCB0b2RvbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0Jyk7XG4vKipcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gKi9cblxuY29uc3QgcmVuZGVySXRlbXMgPSAoKSA9PiB7XG4gIHRvZG9saXN0LmlubmVySFRNTCA9ICcnO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IFRvRG9Db250cm9sbGVyLnRvZG9zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgaXRlbSA9IFRvRG9Db250cm9sbGVyLnRvZG9zW2ldO1xuICAgIGNvbnN0IHRvRG9JdGVtID0gdG9Eb1VpSXRlbShpdGVtLmluZGV4LCBpdGVtLmRlc2NyaXB0aW9uLCBpdGVtLmNvbXBsZXRlZCk7XG4gICAgdG9kb2xpc3QuYXBwZW5kQ2hpbGQodG9Eb0l0ZW0uZmlyc3RDaGlsZCk7XG4gIH1cbn07XG5cbmNvbnN0IGlucHV0RmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kbycpO1xuXG5jb25zdCBzaG93TW9yZUxpc3RlbmVyID0gKCkgPT4ge1xuICBjb25zdCBpdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLml0ZW0td3JhcHBlcicpO1xuXG4gIGl0ZW0uZm9yRWFjaCgoZSkgPT4gZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dNb3JlKSk7XG59O1xuXG5jb25zdCBjb25maWd1cmVEZWxldGVMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gIGNvbnN0IGRlbGV0ZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVtb3ZlLWJ1dHRvbicpO1xuICBkZWxldGVCdXR0b25zLmZvckVhY2goKGRlbGV0ZUJ1dHRvbikgPT4gZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlVGFzaykpO1xufTtcblxuY29uc3QgY29uZmlndXJlRWRpdEl0ZW1zID0gKCkgPT4ge1xuICBjb25zdCBlZGl0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lZGl0LWZpZWxkJyk7XG4gIGVkaXRzLmZvckVhY2goKGVkaXRGaWVsZCkgPT4gZWRpdEZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgZWRpdFRhc2spKTtcbn07XG5cbmNvbnN0IGNyZWF0ZVRvRG8gPSAoZGVzY3JpcHRpb24pID0+IHtcbiAgVG9Eb0NvbnRyb2xsZXIuYWRkVG9kbyhkZXNjcmlwdGlvbik7XG5cbiAgY29uc3QgdG9Eb0l0ZW0gPSB0b0RvVWlJdGVtKFRvRG9Db250cm9sbGVyLnRvZG9zLmluZGV4LCBkZXNjcmlwdGlvbik7XG5cbiAgY29uZmlndXJlTmV3QWRkZWRJdGVtKHRvRG9JdGVtKTtcbiAgdG9kb2xpc3QuYXBwZW5kQ2hpbGQodG9Eb0l0ZW0uZmlyc3RDaGlsZCk7XG59O1xuXG5pbnB1dEZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGV2ZW50KSA9PiB7XG4gIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICBjcmVhdGVUb0RvKGlucHV0RmllbGQudmFsdWUpO1xuICAgIGlucHV0RmllbGQudmFsdWUgPSAnJztcbiAgfVxufSk7XG5cbmV4cG9ydCB7XG4gIHJlbmRlckl0ZW1zLFxuICBjcmVhdGVUb0RvLFxuICBjb25maWd1cmVEZWxldGVMaXN0ZW5lcnMsXG4gIGNvbmZpZ3VyZUVkaXRJdGVtcyxcbiAgc2hvd01vcmVMaXN0ZW5lcixcbn07XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbm1haW4ge1xcbiAgd2lkdGg6IDk1JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBib3gtc2hhZG93OiAwIDhweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG5cXG4ubGlzdC1sYWJsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvZGF5IHtcXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbn1cXG5cXG4ubGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5zdmcge1xcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5ociB7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgb3BhY2l0eTogMC4yO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4udG9kby1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sdW1uLWdhcDogMTJweDtcXG4gIHJvdy1nYXA6IDEycHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmdyb3cge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbiN0b2RvIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDEwcHggIDIuNSU7XFxuICBjb2xvcjogZ3JheTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIHdpZHRoOiA5NSU7XFxufVxcblxcbi5jbGVhciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgY29sb3I6IGdyYXk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiAyJSAwO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jb21wZWxldGVkIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgY29sb3I6IGdyYXk7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1QixXQUFXO0VBQ1gsZUFBZTtFQUNmLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixXQUFXO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxubWFpbiB7XFxuICB3aWR0aDogOTUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGJveC1zaGFkb3c6IDAgOHB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcblxcbi5saXN0LWxhYmxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9kYXkge1xcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxufVxcblxcbi5saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbnN2ZyB7XFxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmhyIHtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBvcGFjaXR5OiAwLjI7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi50b2RvLWl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2x1bW4tZ2FwOiAxMnB4O1xcbiAgcm93LWdhcDogMTJweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZ3JvdyB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuI3RvZG8ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMTBweCAgMi41JTtcXG4gIGNvbG9yOiBncmF5O1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgd2lkdGg6IDk1JTtcXG59XFxuXFxuLmNsZWFyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICBjb2xvcjogZ3JheTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDIlIDA7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmNvbXBlbGV0ZWQge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICBjb2xvcjogZ3JheTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCAqIGFzIFRvRG9VaSBmcm9tICcuLi9tb2R1bGVzL3RvZG9fdWkuanMnO1xuaW1wb3J0ICcuLi9tb2R1bGVzL2NvbnRyb2xsZXJzL3RvZG8tY29udHJvbGxlci5qcyc7XG5pbXBvcnQgJy4uL21vZHVsZXMvc3RvcmFnZS5qcyc7XG5pbXBvcnQgJy4uL21vZHVsZXMvaGVscGVycy9qc29uX2hhbmRsZXIuanMnO1xuaW1wb3J0IHsgcmVmcmVzaENoZWNrQm94TGlzdGVuZXJzIH0gZnJvbSAnLi4vbW9kdWxlcy9jaGFuZ2Vfc3RhdHVzLmpzJztcbmltcG9ydCAnLi4vbW9kdWxlcy9jbGVhcl9jb21wbGV0ZWQuanMnO1xuXG53aW5kb3cub25sb2FkID0gVG9Eb1VpLnJlbmRlckl0ZW1zKCk7XG5Ub0RvVWkuc2hvd01vcmVMaXN0ZW5lcigpO1xuVG9Eb1VpLmNvbmZpZ3VyZURlbGV0ZUxpc3RlbmVycygpO1xuVG9Eb1VpLmNvbmZpZ3VyZUVkaXRJdGVtcygpO1xucmVmcmVzaENoZWNrQm94TGlzdGVuZXJzKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=