import React from 'react';
import './App.css';
import Title from './components/title/Title';
import Input from './components/input/Input';
import ToDoList from './components/toDoList/ToDoList';
import CountOfUncheckedItems from './components/countOfUncheckedItems/CountOfUncheckedItems';
import FilterItemsByStatus from './components/filterItemsByStatus/FilterItemsByStatus';
import ToggleOfCheck from './components/toggleOfCheck/ToggleOfCheck';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './store/todoSlice';


function App() {
  const toDoList = useSelector((state) => state.todos.toDoList);
  
  const dispatch = useDispatch();
  
  const onAddItem = (text) => {
    dispatch(addItem(text))
  }

  return (
    <>
      <Title />
      <section className="todoapp">
        <div className='input'>
          <ToggleOfCheck />
          <Input onFormSubmit={onAddItem}/>
        </div>
        <ToDoList />
        {toDoList.length ?
          <div className='visible'>
            <CountOfUncheckedItems toDoList={toDoList} />
            <FilterItemsByStatus />
          </div>
          :
          null
        }
      </section>
    </>
  );
}

export default App;
