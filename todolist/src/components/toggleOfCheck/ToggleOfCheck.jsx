import React from "react";
import styles from "./ToggleOfCheck.module.css";
import { useDispatch } from "react-redux";
import { onToogleCheck } from "../../store/todoSlice";

function ToggleOfCheck({isCheckedItem }) {

const dispatch = useDispatch();


  return (
    <button
      title="Mark all as complete"
      className={`${styles.toogle__button} ${isCheckedItem ? styles.toggle__noopasity : styles.toggle__opasity}`}
      onClick={() => dispatch(onToogleCheck())}
    />
  )
}

export default ToggleOfCheck