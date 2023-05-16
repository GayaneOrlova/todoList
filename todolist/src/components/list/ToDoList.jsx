import React from 'react'
import './index.css';
import ItemOfList from "../li Item/LiItem"


function ToDoList (props) {
    const {
        toDoList,
        onItemRemove,
        onCheckedItem,
        onChangeValue,
    } = props;

    return (
        <ul className="todo__list">
            {toDoList.map((item) =>
                <ItemOfList
                    item={item}
                    key={item.id}
                    onItemRemove={onItemRemove}
                    onCheckedItem={onCheckedItem}
                    changeValue={onChangeValue}
                />)}
        </ul>
    )
}

export default ToDoList