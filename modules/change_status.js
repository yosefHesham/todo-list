import ToDoController from './todo-controller.js';

/**
 *
 * @param {Event} event
 */
export const changeStatus = (event) => {
  console.log('changing status');
  if (event.target.checked) {
    event.target.nextElementSibling.style.textDecoration = 'line-through';
    event.target.nextElementSibling.style.color = 'gray';
  } else {
    event.target.nextElementSibling.style.textDecoration = 'none';
    event.target.nextElementSibling.style.color = 'black';
  }
  ToDoController.changeStatus(Number(event.target.classList[1]));
};
const refreshCheckBoxListeners = () => {
  const checkBoxes = document.querySelectorAll('.item-check');
  checkBoxes.forEach((checkBox) => {
    checkBox.addEventListener('click', changeStatus);
  });
};

export { refreshCheckBoxListeners };
