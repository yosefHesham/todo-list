import ToDoController from './todo-controller.js';

/**
 *
 * @param {Event} event
 */
export const changeStatus = (event) => {
  if (event.target.checked) {
    event.target.nextElementSibling.style.textDecoration = 'line-through';
    event.target.nextElementSibling.style.color = 'gray';
  } else {
    event.target.nextElementSibling.style.textDecoration = 'none';
    event.target.nextElementSibling.style.color = 'black';
  }
  const arrayOfNodes = Array.from(document.querySelector(".list").childNodes)
  ToDoController.changeStatus(arrayOfNodes.indexOf(event.target.parentNode.parentNode));
};
const refreshCheckBoxListeners = () => {
  const checkBoxes = document.querySelectorAll('.item-check');
  checkBoxes.forEach((checkBox) => {
    checkBox.addEventListener('click', changeStatus);
  });
};

export { refreshCheckBoxListeners };
