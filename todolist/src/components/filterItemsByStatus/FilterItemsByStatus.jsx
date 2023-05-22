import React from "react";
import styles from "./FilterItemsByStatus.module.css";

function FilterItemsByStatus({ onFilterItems, onClearComplited, toDoList }) {
  return (
    <div className={styles.filter}>
      <ul className={styles.filter__button}>
        <li>
          <button onClick={() => onFilterItems("all")}>All</button>
        </li>
        <li>
          <button onClick={() => onFilterItems("complited")}>Complited</button>
        </li>
        <li>
          <button onClick={() => onFilterItems("active")}>Active</button>
        </li>
      </ul>
      <button onClick={onClearComplited}>Clear complited</button>
    </div>
  );
}

export default FilterItemsByStatus;
