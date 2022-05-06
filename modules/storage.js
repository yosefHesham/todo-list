import { fromJson, toJson } from './json_handler.js';

export const getToDos = () => fromJson(localStorage.getItem('todos'));
export const storeToDos = (books) => localStorage.setItem('todos', toJson(books));