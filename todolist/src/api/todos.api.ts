import { Item} from '../store/todoSlice';
import axios from './instance';
import React from 'react';
import App from '../App';
import instance from './instance';


type Props = {
  item: Item;
  id: string;
  // changeValue
};

export const getAllTodos = () => {
  return axios.get<Item[]>('/todos/')
}

export const putTodo = (options: {
  id: string;
  value?: string;
  checked?: boolean;
}) => {
  const {id, ...params} = options
  return axios.put<Item>(`/todos/${options.id}/update/`, params)
}

export const deleteTodo = (id: string) => {
  return axios.delete<string>(`/todos/${id}/delete/`)
}

// export const postTodo = (value: string) => {
//   return axios.post<string>(`/todos/`, {value})
// }

export const postTodo = (value: string) => {
  return axios.post<Item>(`/todos/`, {value})
}