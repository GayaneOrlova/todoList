import React, { useEffect, useState } from 'react';
import GlobalStyle from "./styles/globalStyles";
import { ThemeProvider } from 'styled-components';

import Title from './components/Title/Title';
import Input from './components/Input/Input';
import ToDoList from './components/toDoList/ToDoList';
import CountOfUncheckedItems from './components/countOfUncheckedItems/CountOfUncheckedItems';
import FilterItemsByStatus from './components/filterItemsByStatus/FilterItemsByStatus';
import ToggleOfCheck from './components/toggleOfCheck/ToggleOfCheck';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { Item, addItem, addManyItems } from './store/todoSlice';
// import { itemRemove } from './store/todoSlice';

import { AppStyled } from './App.styled';
import { theme, theme2 } from './styles/theme';
import { getAllTodos, deleteTodo } from './api/todos.api';
import { postTodo } from './api/todos.api';
import { text } from 'stream/consumers';



type Props = {
  item: Item;
  id: string;
  // changeValue
};

function App() {
  const toDoList = useAppSelector((state) => state.todos.toDoList);
  // const [toDoList, setTodoList] = useState<Item[]>([]);
  const [state, setState] = useState(true)
  const dispatch = useAppDispatch();


  const fetchAllTodosData  = async () => {
    try {
      const response = await getAllTodos();
      dispatch(addManyItems(response.data))
    } catch(er) {
      console.log(er);
    }
  }
  
  const onAddItem = async (value: string) => {
    try {
      if (!value.trim()) {
        return;
      }
      const response = await postTodo(value);
      dispatch(addItem(response.data));
      // console.log(response)
      
    } catch(er) {
      console.log(er);
    }
  }
  

  // new
  useEffect(() => {
    fetchAllTodosData();
  }, [])


  return (
  <>
  <ThemeProvider theme={state ? theme : theme2}>
    <GlobalStyle />
    
      <Title />
      <AppStyled>
        <div className='input'>
            <ToggleOfCheck />
            <Input onFormSubmit={onAddItem}/>
          </div>
          <ToDoList />
          {toDoList.length ?
            <div className='visible'>
              <CountOfUncheckedItems />
              <FilterItemsByStatus />
            </div>
            :
            null
          }
      </AppStyled>
      </ThemeProvider>
      </>
  );
}

export default App;
