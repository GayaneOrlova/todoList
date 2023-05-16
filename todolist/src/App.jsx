
import { useState } from 'react';
import './App.css';
import Title from './components/title/Title';
import Input from './components/input/Input';
import ToDoList from './components/list/ToDoList';
import CountOfUncheckedItems from './components/countOfUncheckedItems/CountOfUncheckedItems';
import FilterStatusOfItems from './components/filter';
import ToggleCheckedItems from './components/toogle/ToggleCheck';

//function of generation random number for id
const generateRandomID = (min = 1, max = 1000) => {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}


function App() {
  const [toDoList, setToDoList] = useState([]);

  const [filter, setFilter] = useState('all') //completed, active

  const addItem = (text) => {
    const copyList = [...toDoList];
    copyList.push({
      value: text,
      id: generateRandomID(),
      checked: false,
    });

    setToDoList(copyList)
  }

  const onTodoItemRemove = (id) => {
    const newList = toDoList.filter((item) => item.id !== id);
    setToDoList(newList);
  }

  const onTodoItemChecked = (id) => {
    const newList = toDoList.map((item) => {
      if (item.id !== id) {
        return item;
      } return { ...item, checked: !item.checked };
    })
    setToDoList(newList);
  }

  const toDoListRender = toDoList.filter((item) => {
    if (filter === 'active') return !item.checked;
    if (filter === 'complited') return item.checked;
    return item
  })

  const onActiveItems = () => {
    setFilter('active');
  }

  const onComplitedItems = () => {
    setFilter('complited');
  }

  const onAllItems = () => {
    setFilter('all');
  }

  const onClearComplited = () => {
    const newList = toDoList.filter((item) => !item.checked);
    setToDoList(newList);
  }


  const onToogleCheck = () => {
    const isCheckedItem = toDoList.find((item) => !item.checked);
    const newList = toDoList.map((item) => {
      if (isCheckedItem) {
        return { ...item, checked: true }
      }
      return { ...item, checked: false }
    })
    setToDoList(newList);
  }

  const onChangeValue = (value, id) => {
    const newList = toDoList.map((item) => {
      if (item.id === id) {
        item.value = value;
        return item
      }
      return item
    })
    setToDoList(newList);
  }


  return (
    <>
      <Title />
      <section className="todoapp">
        <div className='input'>
          {toDoList.length ?
            <ToggleCheckedItems
              onToogleCheck={onToogleCheck}
            /> : ''}

          <Input addItem={addItem} />
        </div>
        <ToDoList toDoList={toDoListRender}
          onItemRemove={onTodoItemRemove}
          onCheckedItem={onTodoItemChecked}
          onAllItems={onAllItems}
          onClearComplited={onClearComplited}
          onChangeValue={onChangeValue}
        />

        <div className={toDoList.length ? 'visible' : 'invisible'}>
          <CountOfUncheckedItems toDoList={toDoList} />

          <FilterStatusOfItems
            onComplitedItems={onComplitedItems}
            onActiveItems={onActiveItems}
            onAllItems={onAllItems}
            onClearComplited={onClearComplited}
            toDoList={toDoList}
          />
        </div>

      </section>
    </>
  );
}

export default App;
