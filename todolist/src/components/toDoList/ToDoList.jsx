import React from 'react'
import styles from './ToDoList.module.css';
import ItemOfList from "../itemOfList/ItemOfList"


function ToDoList (props) {
    const {
        toDoList,
        onItemRemove,
        onCheckedItem,
        onChangeValue,
    } = props;

    return (
        <ul className={styles.todo__list}>
            {toDoList.map((item) =>
                <ItemOfList
                    item={item}
                    key={item.id}
                    onItemRemove={onItemRemove}
                    onCheckedItem={onCheckedItem}
                    changeValue={onChangeValue}
                    className="todo__list-item"
                />)}
        </ul>
    )
}

export default ToDoList