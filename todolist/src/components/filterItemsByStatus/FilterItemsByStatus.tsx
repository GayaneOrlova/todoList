import React from "react";
// import styles from "./FilterItemsByStatus.module.css";

import {FilterStyled} from "./FilterItemsByStatus.styled";//new

import { onClearComplited, setFilter, addManyItems } from "../../store/todoSlice";
import { useAppDispatch } from "../../store/hooks";
import { deleteCheckedTodo, getFiltersTodos } from "../../api/todos.api";
import { Item } from "../../store/todoSlice";

// type Props = {
//   item: Item;
//   id: string;
//   checked: boolean;
//   // changeValue
// };


const FilterItemsByStatus: React.FC = ()=> {

  const dispatch = useAppDispatch();

  // const onFilterItems = (filterValue: string) => {
  //   dispatch(setFilter(filterValue));
  // }

  const onFilterItems = async (filter: string) => {
    try {
      const response = await getFiltersTodos({filter}); 
      dispatch(addManyItems(response.data))
      dispatch(setFilter(filter));
    } catch(er) {
      console.log(er);
    }
  }

  const onTodoCheckedDelete = async () => {
    try {
      const response = await deleteCheckedTodo(); 
      // dispatch(addManyItems(response.data))
      dispatch(onClearComplited());
    } catch(er) {
      console.log(er);
    }
  }

  return (
    <FilterStyled>
      <ul className="filter__button">
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
      {/* <button onClick={() => dispatch(onClearComplited())}>Clear complited</button> */}
      <button onClick={onTodoCheckedDelete}>Clear complited</button>

    </FilterStyled>
  );
}

export default FilterItemsByStatus;
