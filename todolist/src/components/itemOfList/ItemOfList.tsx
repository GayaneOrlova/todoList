import React, { useState } from "react"
import {ToDoListStyled} from "./ItemOfList.styled"
import DoubleClickInput from '../doubleClickInput/DoubleClickInput';
import { onTodoItemChecked, onTodoItemRemove, onChangeValue, Item } from "../../store/todoSlice";
import { useAppDispatch } from "../../store/hooks";

type Props = {
  item: Item;
  className: string;
  // changeValue
};

const ItemOfList: React.FC<Props> = (props)=> {
  
  const [showInputForChange, setShowInputForChange] = useState(false);
  const dispatch = useAppDispatch();

  const onCheckedItem = () => {
    dispatch(onTodoItemChecked(props.item.id))
  }
  
  const onItemRemove = () => {
    dispatch(onTodoItemRemove(props.item.id))
  }
  
  const changeValue = (value: string) => {
    dispatch(onChangeValue({value, id: props.item.id}))
  }
  
  const handleDoubleClick = () => {
    setShowInputForChange(true);
  };
  
  const closeInputForChange = () => {
    setShowInputForChange(false);
  }

  return (
  <ToDoListStyled className={`input__block ${props.className}`}>
      <div className={props.item.checked ? `checked` : `nochecked`}>
        <div className="view">
          <label htmlFor={'radio__button' + props.item.id}>
            <div className="item__radio__button"> </div>
          </label>

          <input
            id={'radio__button' + props.item.id}
            className="toggle"
            type="checkbox"
            onClick={onCheckedItem}
            defaultChecked={props.item.checked}
          />

          {!showInputForChange ?
            <p
              className={props.item.checked ? `change__opacity` : `nochange`}
              onDoubleClick={handleDoubleClick}
            >
              {props.item.value}
            </p>
            :
            <DoubleClickInput text={props.item.value}
              onChangeValue={changeValue}
              onCloseInputForChange={closeInputForChange}
            />
          }
        </div>
      </div>

      <button
        className="delete__none"
        onClick={onItemRemove}
      />
    {/* </li> */}
  </ToDoListStyled>
  )
}

export default ItemOfList
