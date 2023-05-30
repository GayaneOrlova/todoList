import React, { useState } from 'react';
import GlobalStyle from "./styles/globalStyles";
import { ThemeProvider } from 'styled-components';

import Title from './components/title/Title';
import Input from './components/input/Input';
import ToDoList from './components/toDoList/ToDoList';
import CountOfUncheckedItems from './components/countOfUncheckedItems/CountOfUncheckedItems';
import FilterItemsByStatus from './components/filterItemsByStatus/FilterItemsByStatus';
import ToggleOfCheck from './components/toggleOfCheck/ToggleOfCheck';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { addItem } from './store/todoSlice';
import { AppStyled } from './App.styled';
import { theme, theme2 } from './styles/theme';


function App() {
  const toDoList = useAppSelector((state) => state.todos.toDoList);
  const [state, setState] = useState(true)
  const dispatch = useAppDispatch();
  
  const onAddItem = (text: string) => {
    dispatch(addItem(text))
  }

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
