class ToDoItem {
  constructor(index, description, completed = false) {
    this.index = index;
    this.description = description;
    this.completed = completed;
  }
}

export default ToDoItem;