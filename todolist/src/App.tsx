import React from 'react';
import GlobalStyle from "./globalStyles";

import Title from './components/title/Title';
import Input from './components/input/Input';
import ToDoList from './components/toDoList/ToDoList';
import CountOfUncheckedItems from './components/countOfUncheckedItems/CountOfUncheckedItems';
import FilterItemsByStatus from './components/filterItemsByStatus/FilterItemsByStatus';
import ToggleOfCheck from './components/toggleOfCheck/ToggleOfCheck';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { addItem } from './store/todoSlice';
import { AppStyled } from './App.styled';


function App() {
  const toDoList = useAppSelector((state) => state.todos.toDoList);

  const dispatch = useAppDispatch();
  
  const onAddItem = (text: string) => {
    dispatch(addItem(text))
  }

  return (
  <>
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
      </>
  );
}

export default App;
