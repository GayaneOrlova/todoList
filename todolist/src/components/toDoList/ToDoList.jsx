import React, { useMemo } from "react";
import styles from "./ToDoList.module.css";
import ItemOfList from "../itemOfList/ItemOfList";
import { useSelector } from "react-redux";
import { onChangeValue } from "../../store/todoSlice";

function ToDoList(props) {

  const toDoList = useSelector((state) => state.todos.toDoList)

  const filter = useSelector((state) => state.todos.filter);

  const filterList = useMemo(() => {
    return toDoList.filter((item) => {
      if (filter === 'active') return !item.checked;
      if (filter === 'complited') return item.checked;
      return item
    })
  }, [toDoList, filter])


  return (
    <ul className={styles.todo__list}>
      {filterList.map((item) => (
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