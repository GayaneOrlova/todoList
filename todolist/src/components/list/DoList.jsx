import React from 'react'
// import styles from './DoList.module.css'
import './App.css';
import ItemOfList from "../li_item"


function DoList ({toDoList, onItemRemove, onCheckedItem, onActiveItems, onComplitedItems}) {
    const listItems = toDoList.map((item) =>
        <ItemOfList item={item} key={item.id} onItemRemove={onItemRemove} onCheckedItem = {onCheckedItem}/>
  );
  
    return (
        <ul className="todo__list">
            {listItems}
        </ul>
    )
}

export default DoList