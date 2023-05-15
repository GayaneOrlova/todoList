import React from 'react'
import './index.css';
import ItemOfList from "../li_item/LiItem"


function DoList ({toDoList, onItemRemove, onCheckedItem, onActiveItems, onComplitedItems, onMouseOver, onMouseOut, changeValue}) {
    
    const listItems = toDoList.map((item) =>
        <ItemOfList 
            item={item} 
            key={item.id} 
            onItemRemove={onItemRemove} 
            onCheckedItem={onCheckedItem}
            changeValue={changeValue}

        />
  );
  
    return (
        <ul className="todo__list">
            {listItems}
        </ul>
    )
}

export default DoList