import { fromJson, toJson } from './json_handler.js';

export const getToDos = () => {
  return fromJson(localStorage.getItem('todos'));
};
export const storeToDos = (todos) => localStorage.setItem('todos', toJson(todos));