
/**
 * @jest-environment jsdom
 */
import ToDoController from "../modules/todo-controller";

describe("Testing edit description", ()=> {
  // arrange
  const newDescription = "new description";
  const spyEdit = jest.spyOn(ToDoController,"editDescription")
  beforeEach(() => {
    ToDoController.addTodo("newItem");
    ToDoController.editDescription(0, newDescription)
  })
  
  //assert
  test("edit function  should be called",()=> {
    expect(spyEdit).toHaveBeenCalled()
  });

  test('it should edit the item with given indexe to the list', () => {
    expect(ToDoController.todos[0].description).toBe(newDescription);
  });

})