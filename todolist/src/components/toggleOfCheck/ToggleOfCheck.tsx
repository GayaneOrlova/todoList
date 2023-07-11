import React from "react";
import {ToggleOfCheckStyled} from "./ToggleOfCheck.styled";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { onToogleCheck } from "../../store/todoSlice";
import { checkedAllTodo } from "../../api/todos.api";

type Props = {

};

const ToggleOfCheck: React.FC<Props> = (props)=>  {

  const dispatch = useAppDispatch();
  const toDoList = useAppSelector((state) => state.todos.toDoList);
  const isCheckedItem = Boolean(toDoList.find((item) => !item.checked));
  
  const onTodoCheckedAll = async () => {
    try {
      const response = await checkedAllTodo(); 
      dispatch(onToogleCheck());
    } catch(er) {
      console.log(er);
    }
  }
  

  return (
  
    <ToggleOfCheckStyled isChecked={isCheckedItem}
        title="Mark all as complete"
        className="toggle__noopasity"
        onClick={onTodoCheckedAll}
    />
    
  )
}

export default ToggleOfCheck