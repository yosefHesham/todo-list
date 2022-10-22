/**
 * @jest-environment jsdom
 */

import ToDoController from '../modules/controllers/todo-controller.js';

document.body.innerHTML = '<div class="list"></div>';

describe('Testing adding', () => {
  // arrange
  const taskDescription = 'iam new item';
  const spy = jest.spyOn(ToDoController, 'addTodo');
  beforeEach(() => {
    // act
    ToDoController.addTodo(taskDescription);
  });

  // assert
  test('add to do should be called', () => {
    expect(spy).toHaveBeenCalled();
  });

  test('it should add a new item to the list', () => {
    expect(ToDoController.todos.length).not.toBe(0);
  });
});

describe('testing deleting', () => {
  // arrange
  const spy = jest.spyOn(ToDoController, 'removeToDo');
  const taskIndex = 0;

  // act

  beforeEach(() => {
    ToDoController.removeToDo(taskIndex);
  });

  // assert
  it('remove to do should be called', () => {
    expect(spy).toHaveBeenCalled();
  });

  it('it should remove item from the list', () => {
    expect(ToDoController.todos.length).toBe(0);
  });
});
