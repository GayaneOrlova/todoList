import React, { useState } from "react"
import {ToDoListStyled} from "./ItemOfList.styled"
import DoubleClickInput from '../doubleClickInput/DoubleClickInput';
import { onTodoItemChecked, onTodoItemRemove, onChangeValue, Item } from "../../store/todoSlice";
import { useAppDispatch } from "../../store/hooks";
import { deleteTodo, putTodo } from "../../api/todos.api";

type Props = {
  item: Item;
  className: string;
  // changeValue
};

const ItemOfList: React.FC<Props> = (props)=> {
  
  const [showInputForChange, setShowInputForChange] = useState(false);
  const dispatch = useAppDispatch();



  // const onCheckedItem = () => {
  //   dispatch(onTodoItemChecked(props.item.id))
  // }
  
  const onCheckedItem = async (ev: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const response = await putTodo({id: props.item.id, checked: ev.target.checked }); 
      dispatch(onTodoItemChecked(response.data));
    } catch(er) {
      console.log(er);
    }
  }
  
    // new
  const onItemRemove = async () => {
    try {
      const response = await deleteTodo(props.item.id); 
      dispatch(onTodoItemRemove(props.item.id));
    } catch(er) {
      console.log(er);
    }
  }
  // 
  
 
  // new
  const changeValue = async (value: string) => {
    try {
      const response = await putTodo({id: props.item.id, value}); 
      dispatch(onChangeValue(response.data));
    } catch(er) {
      console.log(er);
    }
  }
//  const changeValue = (value: string) => {
//     dispatch(onChangeValue({value, id: props.item.id}))
//   }
  
  
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
          <label htmlFor={"radio__button" + props.item.id}>
            <div className="item__radio__button"> </div>
          </label>

          <input
            id={'radio__button' + props.item.id}
            className="toggle"
            type="checkbox"
            onChange={onCheckedItem}
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
