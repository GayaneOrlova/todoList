import React from "react";
import {ToggleOfCheckStyled} from "./ToggleOfCheck.styled";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { onToogleCheck } from "../../store/todoSlice";

type Props = {

};

const ToggleOfCheck: React.FC<Props> = (props)=>  {

  const dispatch = useAppDispatch();
  const toDoList = useAppSelector((state) => state.todos.toDoList);
  const isCheckedItem = toDoList.find((item) => !item.checked);

  return (
  <ToggleOfCheckStyled
      title="Mark all as complete"
      className={`toogle__button ${isCheckedItem ? "toggle__noopasity" : "toggle__opasity"}`}
      onClick={() => dispatch(onToogleCheck())}
    />

  )
}

export default ToggleOfCheck