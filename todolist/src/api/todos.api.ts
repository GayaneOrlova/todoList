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
  return axios.get<Item[]>('/todos/');
}

export const getFiltersTodos = (options:{
  filter?: string;
}) => {
  const { ...params} = options; 
  return axios.get<Item[]>(`/todos/`, {params});
}


export const putTodo = (options: {
  id: string;
  value?: string;
  checked?: boolean;
}) => {
  const {id, ...params} = options;
  console.log(params);
  return axios.put<Item>(`/todos/${options.id}/update/`, params)
}

export const deleteTodo = (id: string) => {
  return axios.delete<string>(`/todos/${id}/delete/`)
}

export const deleteCheckedTodo = () => {
  return axios.delete<Item[]>(`/todos/delete/checked/`)
}

// export const deleteTodo = (options: {
//   id?: string;
//   value?: string;
//   checked?: boolean;
// }) => {
//   const {...params} = options;
//     return axios.delete<string>(`/todos/${options.id}/delete/`, {params})
//   }


// export const postTodo = (value: string) => {
//   return axios.post<string>(`/todos/`, {value})
// }

export const postTodo = (value: string) => {
  return axios.post<Item>(`/todos/`, {value})
}