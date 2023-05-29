import React, { useMemo } from "react";
import {ToDoListStyled} from "./ToDoList.styled"
import ItemOfList from "../itemOfList/ItemOfList";
import { useAppSelector } from "../../store/hooks";

type Props = {

};

const ToDoList: React.FC<Props> = (props)=> {

  const toDoList = useAppSelector((state) => state.todos.toDoList)

  const filter = useAppSelector((state) => state.todos.filter);

  const filterList = useMemo(() => {
    return toDoList.filter((item) => {
      if (filter === 'active') return !item.checked;
      if (filter === 'complited') return item.checked;
      return item
    })
  }, [toDoList, filter])


  return (
    <ToDoListStyled>
      {filterList.map((item) => (
        <ItemOfList
          item={item}
          key={item.id}
          className="todo__list-item"
        />
      ))}
    </ToDoListStyled>
  );
}

export default ToDoList;