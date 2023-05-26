import React from "react";
import styles from "./FilterItemsByStatus.module.css";
import { onClearComplited, setFilter } from "../../store/todoSlice";
import { useAppDispatch } from "../../store/hooks";

type Props = {

};

const FilterItemsByStatus: React.FC<Props> = (props)=> {

  const dispatch = useAppDispatch();

  const onFilterItems = (filterValue: string) => {
    dispatch(setFilter(filterValue));
  }

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
      <button onClick={() => dispatch(onClearComplited())}>Clear complited</button>
    </div>
  );
}

export default FilterItemsByStatus;
