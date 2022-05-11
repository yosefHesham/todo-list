import { changeStatus } from './change_status';
import getElement from './getElement';
import { deleteTask, editTask, showMore } from './event_listeners.js';

/**
 * @param {HTMLElement} newItem
 */
const configureNewAddedItem = (newItem) => {
  /** @type {HTMLElement} */
  const checkBox = getElement(newItem, '.item-check');
  checkBox.addEventListener('click', changeStatus);

  /** @type {HTMLElement} */
  const showMoreElement = getElement(newItem, '.item-wrapper');
  showMoreElement.addEventListener('click', showMore);

  /** @type {HTMLElement} */
  const deleteButton = getElement(newItem, '.remove-button');

  deleteButton.addEventListener('click', deleteTask);

  /** @type {HTMLElement} */
  const editField = getElement(newItem, '.edit-field');

  editField.addEventListener('keypress', editTask);
};

export default configureNewAddedItem;