import ToDoController from './todo-controller';

const addCheckBoxListeners = () => {
  const checkBoxes = document.querySelectorAll('.item-check');
  checkBoxes.forEach((checkBox) => {
    if (Number(checkBox.classList[1]) >= ToDoController.todos.length) {
      checkBox.addEventListener('click', (event) => {
        if (event.target.checked) {
          event.target.nextElementSibling.style.textDecoration = 'line-through';
          event.target.nextElementSibling.style.color = 'gray';
        } else {
          event.target.nextElementSibling.style.textDecoration = 'none';
          event.target.nextElementSibling.style.color = 'black';
        }
        ToDoController.changeStatus(Number(event.target.classList[1]));
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
      ToDoController.changeStatus(Number(event.target.classList[1]));
      // return;
    });
  });
};

export { addCheckBoxListeners, refreshCheckBoxListeners };
