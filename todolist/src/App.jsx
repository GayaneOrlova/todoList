
import React, { useState } from 'react';
import './App.css';
import Title from './components/title/Title';
import Input from './components/input/Input';
import ToDoList from './components/toDoList/ToDoList';
import CountOfUncheckedItems from './components/countOfUncheckedItems/CountOfUncheckedItems';
import FilterItemsByStatus from './components/filterItemsByStatus/FilterItemsByStatus';
import ToggleOfCheck from './components/toggleOfCheck/ToggleOfCheck';
// import generateRandomID from './utils/generateRandomID'


function App() {
  const [toDoList, setToDoList] = useState([]);

  const [filter, setFilter] = useState('all')

  // const addItem = (text) => {
  //   const copyList = [...toDoList];
  //   copyList.push({
  //     value: text,
  //     id: generateRandomID(),
  //     checked: false,
  //   });

  //   setToDoList(copyList)
  // }

  // const onTodoItemRemove = (id) => {
  //   const newList = toDoList.filter((item) => item.id !== id);
  //   setToDoList(newList);
  // }

  // const onTodoItemChecked = (id) => {
  //   const newList = toDoList.map((item) => {
  //     if (item.id !== id) {
  //       return item;
  //     } return { ...item, checked: !item.checked };
  //   })
  //   setToDoList(newList);
  // }

//сделать
  const toDoListRender = toDoList.filter((item) => {
    if (filter === 'active') return !item.checked;
    if (filter === 'complited') return item.checked;
    return item
  })
//сделать
  const onFilterItems = (filterValue) => {
    setFilter(filterValue);
  }

  // const onClearComplited = () => {
  //   const newList = toDoList.filter((item) => !item.checked);
  //   setToDoList(newList);
  // }

  // const onToogleCheck = () => {
  //   const isCheckedItem = toDoList.find((item) => !item.checked);
  //   const newList = toDoList.map((item) => {
  //     return { ...item, checked: isCheckedItem }
  //   })
  //   setToDoList(newList);
  // }



//!!!!!!!!!!!! сделать
  const onChangeValue = (value, id) => {
    const newList = toDoList.map((item) => {
      if (item.id !== id) {
        return item;
      }
      return { ...item, value };
    })
    setToDoList(newList);
  }


  return (
    <>
      <Title />
      <section className="todoapp">
        <div className='input'>
          {!toDoList.length &&
            <ToggleOfCheck
              // onToogleCheck={onToogleCheck}
            />
          }
          <Input />
        </div>

        <ToDoList
          toDoList={toDoListRender}
          // onItemRemove={onTodoItemRemove}
          // onCheckedItem={onTodoItemChecked}
          // onClearComplited={onClearComplited}
          // onChangeValue={onChangeValue}
        />

        {toDoList.length ?
          <div className='visible'>
            <CountOfUncheckedItems toDoList={toDoList} />
            <FilterItemsByStatus
              onFilterItems={onFilterItems}
              // onClearComplited={onClearComplited}
              toDoList={toDoList}
            />
          </div>
          :
          null
        }

      </section>
    </>
  );
}

export default App;
