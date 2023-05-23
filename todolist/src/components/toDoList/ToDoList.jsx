import React from "react";
import styles from "./ToDoList.module.css";
import ItemOfList from "../itemOfList/ItemOfList";

import { useSelector } from "react-redux";

// const selectToDos  = state => state.

function ToDoList(props) {

const toDoList = useSelector((state) => state.todos.toDoList)
  const {
    onChangeValue,
  } = props;

  return (
    <ul className={styles.todo__list}>
      {toDoList.map((item) => (
        <ItemOfList
          item={item}
          key={item.id}
          changeValue={onChangeValue}
          className="todo__list-item"
        />
      ))}
    </ul>
  );
}

export default ToDoList;
