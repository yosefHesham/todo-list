/**
 * @jest-environment jsdom
 */

import ToDoController from '../modules/controllers/todo-controller.js';

ToDoController.addTodo('newToDo');
ToDoController.addTodo('newToDo1');
ToDoController.addTodo('newToDo2');
ToDoController.addTodo('newToDo3');
ToDoController.addTodo('newToDo4');

describe('Testing edit description', () => {
  // arrange
  const newDescription = 'new description';

  test('it should edit the item with given indexe to the list', () => {
    // acting
    ToDoController.editDescription(0, newDescription);

    // assert
    expect(ToDoController.todos[0].description).toBe(newDescription);
  });
});

describe('Editing the status of the task', () => {
  // arrange
  let oldStatus = false;
  oldStatus = ToDoController.todos[0].completed;

  test('It should update status', () => {
    // act
    ToDoController.changeStatus(0);

    // assert
    expect(ToDoController.todos[0].completed).toBe(!oldStatus);
  });
});

describe('Clear all completed', () => {
  // arrange
  beforeEach(() => {
    ToDoController.changeStatus(1);
    ToDoController.changeStatus(2);
  });

  test('list should only have one item  should be challed', () => {
    // act
    ToDoController.clearCompletedTasks();

    let cleared = true;
    ToDoController.todos.forEach((todo) => {
      if (todo.completed) {
        cleared = false;
      }
    });

    // assert
    expect(cleared).toBe(true);
  });
});
