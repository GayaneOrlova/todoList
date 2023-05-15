
import { useEffect, useState } from 'react';
import './App.css';
import Title from './components/Title';
import Input from './components/Input';
import DoList from './components/list';
import CountOfUncheckedItems from './components/countOfUncheckedItems/CountOfUncheckedItems';
import FilterStatusOfItems from './components/filter';
import ToggleCheckedItems from './components/toogle/ToggleCheck';

//function of generation random number for id
 const generateRandomID =(min = 1, max = 1000) => {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}


function App() {
  const [toDoList, setToDoList] = useState([]);

  const addItem = (text) => {
    const copyList = [...toDoList];
    copyList.push({
      value: text,
      id: generateRandomID(),
      checked: false,
    });

    setToDoList(copyList)

    // console.log(text)
    // console.log('this is copyList:', copyList);
  }

  const onTodoItemRemove = (id) => {
    const newList = toDoList.filter((item) => item.id !== id);
    setToDoList(newList);
    // console.log(id)
  }

  const onTodoItemChecked = (id) => {
    const currentItem = toDoList.find((item) => item.id === id);
    let changedChecked = currentItem.checked;
    changedChecked = !currentItem.checked;

    const currentItemIndex = toDoList.findIndex((item) => item.id === id);
    const newList = [...toDoList];
    newList[currentItemIndex].checked = changedChecked;
    setToDoList(newList);
    // console.log(newList);
  }

  



  const [filteredTodoList, setFilteredTodoList] = useState(toDoList);
  
  useEffect(() => {
    setFilteredTodoList(toDoList);
    }, [toDoList]
  )

  const onActiveItems = () => {
    const newList = toDoList.filter((item) => item.checked === false);
    console.log(newList);
    setFilteredTodoList(newList);
  }

  const onComplitedItems = () => {
    const newList = toDoList.filter((item) => item.checked === true);
    setFilteredTodoList(newList);
  }

  const onAllItems = () => {
    setFilteredTodoList(toDoList);
  }

  const onClearComplited = () => {
    const newList = toDoList.filter((item) => item.checked === false);
    setToDoList(newList);
  }


  const [checkingItems, setCheckingItems] = useState()

  const onToogleCheck = () => {
     
    let checkingItems = toDoList.find((item) => item.checked === false);
    const newList = [...toDoList];

    if (checkingItems) {
      newList.forEach(item => item.checked = true)
    } else {
      newList.forEach(item => item.checked = false)
    }

    setToDoList(newList);
    
    setCheckingItems(checkingItems)
  }


  return (
    <>
      <Title />
      <section className="todoapp">
        <div className='input'>
          {toDoList.length ? 
            <ToggleCheckedItems 
              onToogleCheck={onToogleCheck} 
              checkingItems={checkingItems}
            /> : ''}
        

          <Input onChange={addItem} />
        </div>
        <DoList toDoList={filteredTodoList}
          onItemRemove={onTodoItemRemove}
          onCheckedItem={onTodoItemChecked}
          onAllItems={onAllItems}
          onClearComplited={onClearComplited}

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
