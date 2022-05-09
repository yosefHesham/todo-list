"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["main"],{

/***/ "./modules/change_status.js":
/*!**********************************!*\
  !*** ./modules/change_status.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addCheckBoxListeners": () => (/* binding */ addCheckBoxListeners),
/* harmony export */   "refreshCheckBoxListeners": () => (/* binding */ refreshCheckBoxListeners)
/* harmony export */ });
/* harmony import */ var _todo_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-controller */ "./modules/todo-controller.js");


const addCheckBoxListeners = () => {
  const checkBoxes = document.querySelectorAll('.item-check');
  checkBoxes.forEach((checkBox) => {
    if (Number(checkBox.classList[1]) >= _todo_controller__WEBPACK_IMPORTED_MODULE_0__["default"].todos.length) {
      checkBox.addEventListener('click', (event) => {
        if (event.target.checked) {
          event.target.nextElementSibling.style.textDecoration = 'line-through';
          event.target.nextElementSibling.style.color = 'gray';
        } else {
          event.target.nextElementSibling.style.textDecoration = 'none';
          event.target.nextElementSibling.style.color = 'black';
        }
        _todo_controller__WEBPACK_IMPORTED_MODULE_0__["default"].changeStatus(Number(event.target.classList[1]));
        // return;
      });
    }
  });
};

const refreshCheckBoxListeners = () => {
  const checkBoxes = document.querySelectorAll('.item-check');
  checkBoxes.forEach((checkBox) => {
    checkBox.addEventListener('click', (event) => {
      if (event.target.checked) {
        event.target.nextElementSibling.style.textDecoration = 'line-through';
        event.target.nextElementSibling.style.color = 'gray';
      } else {
        event.target.nextElementSibling.style.textDecoration = 'none';
        event.target.nextElementSibling.style.color = 'black';
      }
      _todo_controller__WEBPACK_IMPORTED_MODULE_0__["default"].changeStatus(Number(event.target.classList[1]));
      // return;
    });
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
/* harmony import */ var _todo_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-controller.js */ "./modules/todo-controller.js");
/* harmony import */ var _todo_ui_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo_ui.js */ "./modules/todo_ui.js");




const clearButton = document.querySelector('.clear');

clearButton.addEventListener('click', () => {
  _todo_controller_js__WEBPACK_IMPORTED_MODULE_1__["default"].clearCompletedTasks();

  (0,_todo_ui_js__WEBPACK_IMPORTED_MODULE_2__.renderItems)();
  (0,_change_status_js__WEBPACK_IMPORTED_MODULE_0__.refreshCheckBoxListeners)();
});

/***/ }),

/***/ "./modules/json_handler.js":
/*!*********************************!*\
  !*** ./modules/json_handler.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fromJson": () => (/* binding */ fromJson),
/* harmony export */   "toJson": () => (/* binding */ toJson)
/* harmony export */ });
const toJson = (books) => JSON.stringify(books);
const fromJson = (books) => JSON.parse(books);



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
/* harmony import */ var _json_handler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./json_handler.js */ "./modules/json_handler.js");


const getToDos = () => (0,_json_handler_js__WEBPACK_IMPORTED_MODULE_0__.fromJson)(localStorage.getItem('todos'));
const storeToDos = (todos) => localStorage.setItem('todos', (0,_json_handler_js__WEBPACK_IMPORTED_MODULE_0__.toJson)(todos));

/***/ }),

/***/ "./modules/todo-controller.js":
/*!************************************!*\
  !*** ./modules/todo-controller.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ "./modules/storage.js");
/* harmony import */ var _todo_item_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-item.js */ "./modules/todo-item.js");



class ToDoController {
  static todos = (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.getToDos)() ?? []

  static #incrementor = this.todos.length;

  static addTodo = (description) => {
    this.#incrementor += 1;
    const newTodo = new _todo_item_js__WEBPACK_IMPORTED_MODULE_1__["default"](this.#incrementor, description);
    this.todos.push(newTodo);
    (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.storeToDos)(this.todos);
  }

  static removeToDo(index) {
    if (index === this.#incrementor) {
      this.todos.splice(index - 1, 1);
      this.#incrementor -= 1;
    } else {
      this.todos.forEach((todo) => {
        if (todo.index > index) {
          todo.index -= 1;
        }
      });
      this.todos.splice(index - 1, 1);
      this.#incrementor -= 1;
    }
    (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.storeToDos)(this.todos);
  }

static editDescription = (index, description) => {
  this.todos[index - 1].description = description;

  (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.storeToDos)(this.todos);
}

static changeStatus(index) {
  this.todos[index - 1].completed = !this.todos[index - 1].completed;
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

/***/ "./modules/todo-item.js":
/*!******************************!*\
  !*** ./modules/todo-item.js ***!
  \******************************/
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
/* harmony export */   "editToDo": () => (/* binding */ editToDo),
/* harmony export */   "removeToDo": () => (/* binding */ removeToDo),
/* harmony export */   "renderItems": () => (/* binding */ renderItems),
/* harmony export */   "showMoreListener": () => (/* binding */ showMoreListener)
/* harmony export */ });
/* harmony import */ var _change_status_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change_status.js */ "./modules/change_status.js");
/* harmony import */ var _todo_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-controller.js */ "./modules/todo-controller.js");



const todolist = document.querySelector('.list');

const renderItems = () => {
  todolist.innerHTML = '';
  for (let i = 0; i < _todo_controller_js__WEBPACK_IMPORTED_MODULE_1__["default"].todos.length; i += 1) {
    const item = _todo_controller_js__WEBPACK_IMPORTED_MODULE_1__["default"].todos[i];
    const itemTemp = document.createElement('itemTemp');
    itemTemp.innerHTML = `<div class="item-wrapper item-wrapper${item.index}">
    <div class="todo-item todo-item${item.index}">
    <input type="checkbox" class="item-check ${item.index}" id="todoItem${item.index}" name="${item.description}" ${item.completed ? 'checked' : ''}/>

    <p class="todo-title ${item.completed ? 'compeleted' : ''}">${item.description}</p>
    <svg class="grow edit"
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
  <div class="todo-item hidden hidden${item.index}">
  <input type="text" id="todo" class="edit-field ${item.index}" name="todo-name" placeholder="Edit" value="${item.description}">
  <svg class="remove-button ${item.index}" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg>
  
</div>
  <hr>
  </div>
  `;
    todolist.appendChild(itemTemp.firstChild);
  }
};

const removeToDo = (index) => {
  _todo_controller_js__WEBPACK_IMPORTED_MODULE_1__["default"].removeToDo(index);
};

const editToDo = (index, description) => {
  _todo_controller_js__WEBPACK_IMPORTED_MODULE_1__["default"].editDescription(index, description);
  renderItems();
};

const inputField = document.getElementById('todo');

const showMoreListener = () => {
  const item = document.querySelectorAll('.item-wrapper');

  item.forEach((e) => e.addEventListener('click', (event) => {
    if (event.target.classList.contains('edit')) {
      event.target.parentElement.style.display = 'none';
      event.target.parentElement.nextElementSibling.style.display = 'flex';
    }
  }));
};

const configureDeleteListeners = () => {
  const deleteButtons = document.querySelectorAll('.remove-button');
  deleteButtons.forEach((deleteButton) => deleteButton.addEventListener('click', () => {
    const parent = document.querySelector(
      `.item-wrapper${deleteButton.classList[1]}`,
    );
    removeToDo(Number(deleteButton.classList[1]));
    if (parent) {
      parent.remove();
    }
  }));
};

const configureEditItems = () => {
  const edits = document.querySelectorAll('.edit-field');
  edits.forEach((editField) => editField.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      const parent = event.target.parentElement;
      parent.style.display = 'none';
      editToDo(Number(editField.classList[1]), editField.value);
    }
  }));
};

const createToDo = (description) => {
  _todo_controller_js__WEBPACK_IMPORTED_MODULE_1__["default"].addTodo(description);

  const itemTemp = document.createElement('itemTemp');
  itemTemp.innerHTML = `<div class="item-wrapper item-wrapper${_todo_controller_js__WEBPACK_IMPORTED_MODULE_1__["default"].todos.length}">
  <div class="todo-item">
  <input type="checkbox" class="item-check ${_todo_controller_js__WEBPACK_IMPORTED_MODULE_1__["default"].todos.length}" id="todoItem${_todo_controller_js__WEBPACK_IMPORTED_MODULE_1__["default"].todos.length}" name="${description}"/>

  <p class="todo-title">${description}</p>
  <svg class="grow edit"
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

<div class="todo-item hidden hidden${_todo_controller_js__WEBPACK_IMPORTED_MODULE_1__["default"].todos.length}">
  <input type="text" class="edit-field ${_todo_controller_js__WEBPACK_IMPORTED_MODULE_1__["default"].todos.length}" id="todo" name="todo-name" placeholder="Edit" value="${description}">
  <svg class="remove-button ${_todo_controller_js__WEBPACK_IMPORTED_MODULE_1__["default"].todos.length}" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg>
  
</div>
<hr>
</div>
`;
  todolist.appendChild(itemTemp.firstChild);
  showMoreListener();
  configureDeleteListeners();
  configureEditItems();
  (0,_change_status_js__WEBPACK_IMPORTED_MODULE_0__.addCheckBoxListeners)();
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
/* harmony import */ var _modules_todo_controller_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/todo-controller.js */ "./modules/todo-controller.js");
/* harmony import */ var _modules_storage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/storage.js */ "./modules/storage.js");
/* harmony import */ var _modules_json_handler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/json_handler.js */ "./modules/json_handler.js");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmcUI7QUFDMkI7QUFDVDtBQUNSO0FBQ0s7QUFDbUM7QUFDaEM7O0FBRXZDLGdCQUFnQiw0REFBa0I7QUFDbEMsaUVBQXVCO0FBQ3ZCLHlFQUErQjtBQUMvQixtRUFBeUI7QUFDekIsbUZBQXdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbW9kdWxlcy9jaGFuZ2Vfc3RhdHVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL21vZHVsZXMvY2xlYXJfY29tcGxldGVkLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL21vZHVsZXMvanNvbl9oYW5kbGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL21vZHVsZXMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9tb2R1bGVzL3RvZG8tY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9tb2R1bGVzL3RvZG8taXRlbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9tb2R1bGVzL3RvZG9fdWkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVG9Eb0NvbnRyb2xsZXIgZnJvbSAnLi90b2RvLWNvbnRyb2xsZXInO1xuXG5jb25zdCBhZGRDaGVja0JveExpc3RlbmVycyA9ICgpID0+IHtcbiAgY29uc3QgY2hlY2tCb3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pdGVtLWNoZWNrJyk7XG4gIGNoZWNrQm94ZXMuZm9yRWFjaCgoY2hlY2tCb3gpID0+IHtcbiAgICBpZiAoTnVtYmVyKGNoZWNrQm94LmNsYXNzTGlzdFsxXSkgPj0gVG9Eb0NvbnRyb2xsZXIudG9kb3MubGVuZ3RoKSB7XG4gICAgICBjaGVja0JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgICBldmVudC50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ2xpbmUtdGhyb3VnaCc7XG4gICAgICAgICAgZXZlbnQudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5zdHlsZS5jb2xvciA9ICdncmF5JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBldmVudC50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ25vbmUnO1xuICAgICAgICAgIGV2ZW50LnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuc3R5bGUuY29sb3IgPSAnYmxhY2snO1xuICAgICAgICB9XG4gICAgICAgIFRvRG9Db250cm9sbGVyLmNoYW5nZVN0YXR1cyhOdW1iZXIoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdFsxXSkpO1xuICAgICAgICAvLyByZXR1cm47XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgcmVmcmVzaENoZWNrQm94TGlzdGVuZXJzID0gKCkgPT4ge1xuICBjb25zdCBjaGVja0JveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLml0ZW0tY2hlY2snKTtcbiAgY2hlY2tCb3hlcy5mb3JFYWNoKChjaGVja0JveCkgPT4ge1xuICAgIGNoZWNrQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgZXZlbnQudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdsaW5lLXRocm91Z2gnO1xuICAgICAgICBldmVudC50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLnN0eWxlLmNvbG9yID0gJ2dyYXknO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXZlbnQudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdub25lJztcbiAgICAgICAgZXZlbnQudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5zdHlsZS5jb2xvciA9ICdibGFjayc7XG4gICAgICB9XG4gICAgICBUb0RvQ29udHJvbGxlci5jaGFuZ2VTdGF0dXMoTnVtYmVyKGV2ZW50LnRhcmdldC5jbGFzc0xpc3RbMV0pKTtcbiAgICAgIC8vIHJldHVybjtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBhZGRDaGVja0JveExpc3RlbmVycywgcmVmcmVzaENoZWNrQm94TGlzdGVuZXJzIH07XG4iLCJpbXBvcnQgeyByZWZyZXNoQ2hlY2tCb3hMaXN0ZW5lcnMgfSBmcm9tICcuL2NoYW5nZV9zdGF0dXMuanMnO1xuaW1wb3J0IFRvRG9Db250cm9sbGVyIGZyb20gJy4vdG9kby1jb250cm9sbGVyLmpzJztcbmltcG9ydCB7IHJlbmRlckl0ZW1zIH0gZnJvbSAnLi90b2RvX3VpLmpzJztcblxuY29uc3QgY2xlYXJCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xlYXInKTtcblxuY2xlYXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIFRvRG9Db250cm9sbGVyLmNsZWFyQ29tcGxldGVkVGFza3MoKTtcblxuICByZW5kZXJJdGVtcygpO1xuICByZWZyZXNoQ2hlY2tCb3hMaXN0ZW5lcnMoKTtcbn0pOyIsImNvbnN0IHRvSnNvbiA9IChib29rcykgPT4gSlNPTi5zdHJpbmdpZnkoYm9va3MpO1xuY29uc3QgZnJvbUpzb24gPSAoYm9va3MpID0+IEpTT04ucGFyc2UoYm9va3MpO1xuXG5leHBvcnQgeyB0b0pzb24sIGZyb21Kc29uIH07IiwiaW1wb3J0IHsgZnJvbUpzb24sIHRvSnNvbiB9IGZyb20gJy4vanNvbl9oYW5kbGVyLmpzJztcblxuZXhwb3J0IGNvbnN0IGdldFRvRG9zID0gKCkgPT4gZnJvbUpzb24obG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zJykpO1xuZXhwb3J0IGNvbnN0IHN0b3JlVG9Eb3MgPSAodG9kb3MpID0+IGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvcycsIHRvSnNvbih0b2RvcykpOyIsImltcG9ydCB7IGdldFRvRG9zLCBzdG9yZVRvRG9zIH0gZnJvbSAnLi9zdG9yYWdlLmpzJztcbmltcG9ydCBUb0RvSXRlbSBmcm9tICcuL3RvZG8taXRlbS5qcyc7XG5cbmNsYXNzIFRvRG9Db250cm9sbGVyIHtcbiAgc3RhdGljIHRvZG9zID0gZ2V0VG9Eb3MoKSA/PyBbXVxuXG4gIHN0YXRpYyAjaW5jcmVtZW50b3IgPSB0aGlzLnRvZG9zLmxlbmd0aDtcblxuICBzdGF0aWMgYWRkVG9kbyA9IChkZXNjcmlwdGlvbikgPT4ge1xuICAgIHRoaXMuI2luY3JlbWVudG9yICs9IDE7XG4gICAgY29uc3QgbmV3VG9kbyA9IG5ldyBUb0RvSXRlbSh0aGlzLiNpbmNyZW1lbnRvciwgZGVzY3JpcHRpb24pO1xuICAgIHRoaXMudG9kb3MucHVzaChuZXdUb2RvKTtcbiAgICBzdG9yZVRvRG9zKHRoaXMudG9kb3MpO1xuICB9XG5cbiAgc3RhdGljIHJlbW92ZVRvRG8oaW5kZXgpIHtcbiAgICBpZiAoaW5kZXggPT09IHRoaXMuI2luY3JlbWVudG9yKSB7XG4gICAgICB0aGlzLnRvZG9zLnNwbGljZShpbmRleCAtIDEsIDEpO1xuICAgICAgdGhpcy4jaW5jcmVtZW50b3IgLT0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICAgIGlmICh0b2RvLmluZGV4ID4gaW5kZXgpIHtcbiAgICAgICAgICB0b2RvLmluZGV4IC09IDE7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy50b2Rvcy5zcGxpY2UoaW5kZXggLSAxLCAxKTtcbiAgICAgIHRoaXMuI2luY3JlbWVudG9yIC09IDE7XG4gICAgfVxuICAgIHN0b3JlVG9Eb3ModGhpcy50b2Rvcyk7XG4gIH1cblxuc3RhdGljIGVkaXREZXNjcmlwdGlvbiA9IChpbmRleCwgZGVzY3JpcHRpb24pID0+IHtcbiAgdGhpcy50b2Rvc1tpbmRleCAtIDFdLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG5cbiAgc3RvcmVUb0Rvcyh0aGlzLnRvZG9zKTtcbn1cblxuc3RhdGljIGNoYW5nZVN0YXR1cyhpbmRleCkge1xuICB0aGlzLnRvZG9zW2luZGV4IC0gMV0uY29tcGxldGVkID0gIXRoaXMudG9kb3NbaW5kZXggLSAxXS5jb21wbGV0ZWQ7XG4gIHN0b3JlVG9Eb3ModGhpcy50b2Rvcyk7XG59XG5cbnN0YXRpYyBjbGVhckNvbXBsZXRlZFRhc2tzKCkge1xuICB0aGlzLnRvZG9zID0gdGhpcy50b2Rvcy5maWx0ZXIoKGUpID0+ICFlLmNvbXBsZXRlZCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50b2Rvcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHRoaXMudG9kb3NbaV0uaW5kZXggPSBpICsgMTtcbiAgfVxuICB0aGlzLiNpbmNyZW1lbnRvciA9IHRoaXMudG9kb3MubGVuZ3RoO1xuICBzdG9yZVRvRG9zKHRoaXMudG9kb3MpO1xufVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb0RvQ29udHJvbGxlcjsiLCJjbGFzcyBUb0RvSXRlbSB7XG4gIGNvbnN0cnVjdG9yKGluZGV4LCBkZXNjcmlwdGlvbiwgY29tcGxldGVkID0gZmFsc2UpIHtcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvRG9JdGVtOyIsImltcG9ydCB7IGFkZENoZWNrQm94TGlzdGVuZXJzIH0gZnJvbSAnLi9jaGFuZ2Vfc3RhdHVzLmpzJztcbmltcG9ydCBUb0RvQ29udHJvbGxlciBmcm9tICcuL3RvZG8tY29udHJvbGxlci5qcyc7XG5cbmNvbnN0IHRvZG9saXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QnKTtcblxuY29uc3QgcmVuZGVySXRlbXMgPSAoKSA9PiB7XG4gIHRvZG9saXN0LmlubmVySFRNTCA9ICcnO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IFRvRG9Db250cm9sbGVyLnRvZG9zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgaXRlbSA9IFRvRG9Db250cm9sbGVyLnRvZG9zW2ldO1xuICAgIGNvbnN0IGl0ZW1UZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaXRlbVRlbXAnKTtcbiAgICBpdGVtVGVtcC5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cIml0ZW0td3JhcHBlciBpdGVtLXdyYXBwZXIke2l0ZW0uaW5kZXh9XCI+XG4gICAgPGRpdiBjbGFzcz1cInRvZG8taXRlbSB0b2RvLWl0ZW0ke2l0ZW0uaW5kZXh9XCI+XG4gICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiaXRlbS1jaGVjayAke2l0ZW0uaW5kZXh9XCIgaWQ9XCJ0b2RvSXRlbSR7aXRlbS5pbmRleH1cIiBuYW1lPVwiJHtpdGVtLmRlc2NyaXB0aW9ufVwiICR7aXRlbS5jb21wbGV0ZWQgPyAnY2hlY2tlZCcgOiAnJ30vPlxuXG4gICAgPHAgY2xhc3M9XCJ0b2RvLXRpdGxlICR7aXRlbS5jb21wbGV0ZWQgPyAnY29tcGVsZXRlZCcgOiAnJ31cIj4ke2l0ZW0uZGVzY3JpcHRpb259PC9wPlxuICAgIDxzdmcgY2xhc3M9XCJncm93IGVkaXRcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB3aWR0aD1cIjE2XCJcbiAgICAgIGhlaWdodD1cIjE2XCJcbiAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgY2xhc3M9XCJiaSBiaS10aHJlZS1kb3RzLXZlcnRpY2FsXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMTYgMTZcIlxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNOS41IDEzYTEuNSAxLjUgMCAxIDEtMyAwIDEuNSAxLjUgMCAwIDEgMyAwem0wLTVhMS41IDEuNSAwIDEgMS0zIDAgMS41IDEuNSAwIDAgMSAzIDB6bTAtNWExLjUgMS41IDAgMSAxLTMgMCAxLjUgMS41IDAgMCAxIDMgMHpcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJ0b2RvLWl0ZW0gaGlkZGVuIGhpZGRlbiR7aXRlbS5pbmRleH1cIj5cbiAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0b2RvXCIgY2xhc3M9XCJlZGl0LWZpZWxkICR7aXRlbS5pbmRleH1cIiBuYW1lPVwidG9kby1uYW1lXCIgcGxhY2Vob2xkZXI9XCJFZGl0XCIgdmFsdWU9XCIke2l0ZW0uZGVzY3JpcHRpb259XCI+XG4gIDxzdmcgY2xhc3M9XCJyZW1vdmUtYnV0dG9uICR7aXRlbS5pbmRleH1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGNsYXNzPVwiYmkgYmktdHJhc2hcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCI+XG4gIDxwYXRoIGQ9XCJNNS41IDUuNUEuNS41IDAgMCAxIDYgNnY2YS41LjUgMCAwIDEtMSAwVjZhLjUuNSAwIDAgMSAuNS0uNXptMi41IDBhLjUuNSAwIDAgMSAuNS41djZhLjUuNSAwIDAgMS0xIDBWNmEuNS41IDAgMCAxIC41LS41em0zIC41YS41LjUgMCAwIDAtMSAwdjZhLjUuNSAwIDAgMCAxIDBWNnpcIi8+XG4gIDxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTE0LjUgM2ExIDEgMCAwIDEtMSAxSDEzdjlhMiAyIDAgMCAxLTIgMkg1YTIgMiAwIDAgMS0yLTJWNGgtLjVhMSAxIDAgMCAxLTEtMVYyYTEgMSAwIDAgMSAxLTFINmExIDEgMCAwIDEgMS0xaDJhMSAxIDAgMCAxIDEgMWgzLjVhMSAxIDAgMCAxIDEgMXYxek00LjExOCA0IDQgNC4wNTlWMTNhMSAxIDAgMCAwIDEgMWg2YTEgMSAwIDAgMCAxLTFWNC4wNTlMMTEuODgyIDRINC4xMTh6TTIuNSAzVjJoMTF2MWgtMTF6XCIvPlxuPC9zdmc+XG4gIFxuPC9kaXY+XG4gIDxocj5cbiAgPC9kaXY+XG4gIGA7XG4gICAgdG9kb2xpc3QuYXBwZW5kQ2hpbGQoaXRlbVRlbXAuZmlyc3RDaGlsZCk7XG4gIH1cbn07XG5cbmNvbnN0IHJlbW92ZVRvRG8gPSAoaW5kZXgpID0+IHtcbiAgVG9Eb0NvbnRyb2xsZXIucmVtb3ZlVG9EbyhpbmRleCk7XG59O1xuXG5jb25zdCBlZGl0VG9EbyA9IChpbmRleCwgZGVzY3JpcHRpb24pID0+IHtcbiAgVG9Eb0NvbnRyb2xsZXIuZWRpdERlc2NyaXB0aW9uKGluZGV4LCBkZXNjcmlwdGlvbik7XG4gIHJlbmRlckl0ZW1zKCk7XG59O1xuXG5jb25zdCBpbnB1dEZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8nKTtcblxuY29uc3Qgc2hvd01vcmVMaXN0ZW5lciA9ICgpID0+IHtcbiAgY29uc3QgaXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pdGVtLXdyYXBwZXInKTtcblxuICBpdGVtLmZvckVhY2goKGUpID0+IGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZWRpdCcpKSB7XG4gICAgICBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgfVxuICB9KSk7XG59O1xuXG5jb25zdCBjb25maWd1cmVEZWxldGVMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gIGNvbnN0IGRlbGV0ZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVtb3ZlLWJ1dHRvbicpO1xuICBkZWxldGVCdXR0b25zLmZvckVhY2goKGRlbGV0ZUJ1dHRvbikgPT4gZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgLml0ZW0td3JhcHBlciR7ZGVsZXRlQnV0dG9uLmNsYXNzTGlzdFsxXX1gLFxuICAgICk7XG4gICAgcmVtb3ZlVG9EbyhOdW1iZXIoZGVsZXRlQnV0dG9uLmNsYXNzTGlzdFsxXSkpO1xuICAgIGlmIChwYXJlbnQpIHtcbiAgICAgIHBhcmVudC5yZW1vdmUoKTtcbiAgICB9XG4gIH0pKTtcbn07XG5cbmNvbnN0IGNvbmZpZ3VyZUVkaXRJdGVtcyA9ICgpID0+IHtcbiAgY29uc3QgZWRpdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZWRpdC1maWVsZCcpO1xuICBlZGl0cy5mb3JFYWNoKChlZGl0RmllbGQpID0+IGVkaXRGaWVsZC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIGNvbnN0IHBhcmVudCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgICAgcGFyZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICBlZGl0VG9EbyhOdW1iZXIoZWRpdEZpZWxkLmNsYXNzTGlzdFsxXSksIGVkaXRGaWVsZC52YWx1ZSk7XG4gICAgfVxuICB9KSk7XG59O1xuXG5jb25zdCBjcmVhdGVUb0RvID0gKGRlc2NyaXB0aW9uKSA9PiB7XG4gIFRvRG9Db250cm9sbGVyLmFkZFRvZG8oZGVzY3JpcHRpb24pO1xuXG4gIGNvbnN0IGl0ZW1UZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaXRlbVRlbXAnKTtcbiAgaXRlbVRlbXAuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJpdGVtLXdyYXBwZXIgaXRlbS13cmFwcGVyJHtUb0RvQ29udHJvbGxlci50b2Rvcy5sZW5ndGh9XCI+XG4gIDxkaXYgY2xhc3M9XCJ0b2RvLWl0ZW1cIj5cbiAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiaXRlbS1jaGVjayAke1RvRG9Db250cm9sbGVyLnRvZG9zLmxlbmd0aH1cIiBpZD1cInRvZG9JdGVtJHtUb0RvQ29udHJvbGxlci50b2Rvcy5sZW5ndGh9XCIgbmFtZT1cIiR7ZGVzY3JpcHRpb259XCIvPlxuXG4gIDxwIGNsYXNzPVwidG9kby10aXRsZVwiPiR7ZGVzY3JpcHRpb259PC9wPlxuICA8c3ZnIGNsYXNzPVwiZ3JvdyBlZGl0XCJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICB3aWR0aD1cIjE2XCJcbiAgICBoZWlnaHQ9XCIxNlwiXG4gICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgY2xhc3M9XCJiaSBiaS10aHJlZS1kb3RzLXZlcnRpY2FsXCJcbiAgICB2aWV3Qm94PVwiMCAwIDE2IDE2XCJcbiAgPlxuICAgIDxwYXRoXG4gICAgICBkPVwiTTkuNSAxM2ExLjUgMS41IDAgMSAxLTMgMCAxLjUgMS41IDAgMCAxIDMgMHptMC01YTEuNSAxLjUgMCAxIDEtMyAwIDEuNSAxLjUgMCAwIDEgMyAwem0wLTVhMS41IDEuNSAwIDEgMS0zIDAgMS41IDEuNSAwIDAgMSAzIDB6XCJcbiAgICAvPlxuICA8L3N2Zz5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwidG9kby1pdGVtIGhpZGRlbiBoaWRkZW4ke1RvRG9Db250cm9sbGVyLnRvZG9zLmxlbmd0aH1cIj5cbiAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJlZGl0LWZpZWxkICR7VG9Eb0NvbnRyb2xsZXIudG9kb3MubGVuZ3RofVwiIGlkPVwidG9kb1wiIG5hbWU9XCJ0b2RvLW5hbWVcIiBwbGFjZWhvbGRlcj1cIkVkaXRcIiB2YWx1ZT1cIiR7ZGVzY3JpcHRpb259XCI+XG4gIDxzdmcgY2xhc3M9XCJyZW1vdmUtYnV0dG9uICR7VG9Eb0NvbnRyb2xsZXIudG9kb3MubGVuZ3RofVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgY2xhc3M9XCJiaSBiaS10cmFzaFwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj5cbiAgPHBhdGggZD1cIk01LjUgNS41QS41LjUgMCAwIDEgNiA2djZhLjUuNSAwIDAgMS0xIDBWNmEuNS41IDAgMCAxIC41LS41em0yLjUgMGEuNS41IDAgMCAxIC41LjV2NmEuNS41IDAgMCAxLTEgMFY2YS41LjUgMCAwIDEgLjUtLjV6bTMgLjVhLjUuNSAwIDAgMC0xIDB2NmEuNS41IDAgMCAwIDEgMFY2elwiLz5cbiAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTQuNSAzYTEgMSAwIDAgMS0xIDFIMTN2OWEyIDIgMCAwIDEtMiAySDVhMiAyIDAgMCAxLTItMlY0aC0uNWExIDEgMCAwIDEtMS0xVjJhMSAxIDAgMCAxIDEtMUg2YTEgMSAwIDAgMSAxLTFoMmExIDEgMCAwIDEgMSAxaDMuNWExIDEgMCAwIDEgMSAxdjF6TTQuMTE4IDQgNCA0LjA1OVYxM2ExIDEgMCAwIDAgMSAxaDZhMSAxIDAgMCAwIDEtMVY0LjA1OUwxMS44ODIgNEg0LjExOHpNMi41IDNWMmgxMXYxaC0xMXpcIi8+XG48L3N2Zz5cbiAgXG48L2Rpdj5cbjxocj5cbjwvZGl2PlxuYDtcbiAgdG9kb2xpc3QuYXBwZW5kQ2hpbGQoaXRlbVRlbXAuZmlyc3RDaGlsZCk7XG4gIHNob3dNb3JlTGlzdGVuZXIoKTtcbiAgY29uZmlndXJlRGVsZXRlTGlzdGVuZXJzKCk7XG4gIGNvbmZpZ3VyZUVkaXRJdGVtcygpO1xuICBhZGRDaGVja0JveExpc3RlbmVycygpO1xufTtcblxuaW5wdXRGaWVsZC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChldmVudCkgPT4ge1xuICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgY3JlYXRlVG9EbyhpbnB1dEZpZWxkLnZhbHVlKTtcbiAgICBpbnB1dEZpZWxkLnZhbHVlID0gJyc7XG4gIH1cbn0pO1xuXG5leHBvcnQge1xuICByZW5kZXJJdGVtcyxcbiAgY3JlYXRlVG9EbyxcbiAgcmVtb3ZlVG9EbyxcbiAgZWRpdFRvRG8sXG4gIGNvbmZpZ3VyZURlbGV0ZUxpc3RlbmVycyxcbiAgY29uZmlndXJlRWRpdEl0ZW1zLFxuICBzaG93TW9yZUxpc3RlbmVyLFxufTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxubWFpbiB7XFxuICB3aWR0aDogOTUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGJveC1zaGFkb3c6IDAgOHB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcblxcbi5saXN0LWxhYmxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9kYXkge1xcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxufVxcblxcbi5saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbnN2ZyB7XFxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmhyIHtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBvcGFjaXR5OiAwLjI7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi50b2RvLWl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2x1bW4tZ2FwOiAxMnB4O1xcbiAgcm93LWdhcDogMTJweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZ3JvdyB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuI3RvZG8ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMTBweCAgMi41JTtcXG4gIGNvbG9yOiBncmF5O1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgd2lkdGg6IDk1JTtcXG59XFxuXFxuLmNsZWFyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICBjb2xvcjogZ3JheTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDIlIDA7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmNvbXBlbGV0ZWQge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICBjb2xvcjogZ3JheTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFdBQVc7QUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5tYWluIHtcXG4gIHdpZHRoOiA5NSU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgYm94LXNoYWRvdzogMCA4cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuXFxuLmxpc3QtbGFibGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b2RheSB7XFxuICBtYXJnaW4tbGVmdDogMTVweDtcXG59XFxuXFxuLmxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuc3ZnIHtcXG4gIG1hcmdpbi1yaWdodDogMTVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuaHIge1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIG9wYWNpdHk6IDAuMjtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLnRvZG8taXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbHVtbi1nYXA6IDEycHg7XFxuICByb3ctZ2FwOiAxMnB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5ncm93IHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4jdG9kbyB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAxMHB4ICAyLjUlO1xcbiAgY29sb3I6IGdyYXk7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICB3aWR0aDogOTUlO1xcbn1cXG5cXG4uY2xlYXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gIGNvbG9yOiBncmF5O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogMiUgMDtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY29tcGVsZXRlZCB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gIGNvbG9yOiBncmF5O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0ICogYXMgVG9Eb1VpIGZyb20gJy4uL21vZHVsZXMvdG9kb191aS5qcyc7XG5pbXBvcnQgJy4uL21vZHVsZXMvdG9kby1jb250cm9sbGVyLmpzJztcbmltcG9ydCAnLi4vbW9kdWxlcy9zdG9yYWdlLmpzJztcbmltcG9ydCAnLi4vbW9kdWxlcy9qc29uX2hhbmRsZXIuanMnO1xuaW1wb3J0IHsgcmVmcmVzaENoZWNrQm94TGlzdGVuZXJzIH0gZnJvbSAnLi4vbW9kdWxlcy9jaGFuZ2Vfc3RhdHVzLmpzJztcbmltcG9ydCAnLi4vbW9kdWxlcy9jbGVhcl9jb21wbGV0ZWQuanMnO1xuXG53aW5kb3cub25sb2FkID0gVG9Eb1VpLnJlbmRlckl0ZW1zKCk7XG5Ub0RvVWkuc2hvd01vcmVMaXN0ZW5lcigpO1xuVG9Eb1VpLmNvbmZpZ3VyZURlbGV0ZUxpc3RlbmVycygpO1xuVG9Eb1VpLmNvbmZpZ3VyZUVkaXRJdGVtcygpO1xucmVmcmVzaENoZWNrQm94TGlzdGVuZXJzKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=