import { fromJson, toJson } from './json_handler.js';

export const getToDos = () => { 
  console.log(fromJson(localStorage.getItem('todos')))
  return fromJson(localStorage.getItem('todos'))
 };
export const storeToDos = (todos) => localStorage.setItem('todos', toJson(todos));