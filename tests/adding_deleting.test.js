
/**
 * @jest-environment jsdom
 */
import ToDoController from "../modules/todo-controller";

describe("Testing adding and removing", () => {
  // arrange
  const taskDescription = "iam new item"
  const spy = jest.spyOn(ToDoController, "addTodo");

  // act
  ToDoController.addTodo(taskDescription)

  // assert
  test('add to do should be called', () => {
    expect(spy).toHaveBeenCalled()
  });
  
  test("it should add a new item to the list", () => {
    expect(ToDoController.todos.length).not.toBe(0)
  })

})


describe("Testing deleting", () => { })
