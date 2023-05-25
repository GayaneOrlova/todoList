import React from "react";
import styles from "./ToggleOfCheck.module.css";
import { useDispatch, useSelector } from "react-redux";
import { onToogleCheck } from "../../store/todoSlice";
// import {isCheckedItem} from "../../store/todoSlice";

function ToggleOfCheck() {

  const dispatch = useDispatch();
  const toDoList = useSelector((state) => state.todos.toDoList);
  const isCheckedItem = toDoList.find((item) => !item.checked);

  return (
    <button
      title="Mark all as complete"
      className={`${styles.toogle__button} ${isCheckedItem ? styles.toggle__noopasity : styles.toggle__opasity}`}
      onClick={() => dispatch(onToogleCheck())}
    />
  )
}

export default ToggleOfCheck