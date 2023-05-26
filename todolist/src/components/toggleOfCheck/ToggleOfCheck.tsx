import React from "react";
import styles from "./ToggleOfCheck.module.css";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { onToogleCheck } from "../../store/todoSlice";
// import {isCheckedItem} from "../../store/todoSlice";

type Props = {

};

const ToggleOfCheck: React.FC<Props> = (props)=>  {

  const dispatch = useAppDispatch();
  const toDoList = useAppSelector((state) => state.todos.toDoList);
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