import React, { useState } from "react"
import styles from './ItemOfList.module.css'
import DoubleClickInput from '../doubleClickInput/DoubleClickInput';
import { onTodoItemChecked, onTodoItemRemove, onChangeValue } from "../../store/todoSlice";
import { useDispatch } from "react-redux";

function ItemOfList({ item, className }) {
  
  const [showInputForChange, setShowInputForChange] = useState(false);
  const dispatch = useDispatch();

  const onCheckedItem = () => {
    dispatch(onTodoItemChecked(item.id))
  }
  
  const onItemRemove = () => {
    dispatch(onTodoItemRemove(item.id))
  }
  
  const changeValue = (value) => {
    dispatch(onChangeValue({value, id: item.id}))
  }
  
  const handleDoubleClick = () => {
    setShowInputForChange(true);
  };
  
  const closeInputForChange = () => {
    setShowInputForChange(false);
  }

  return (
    <li className={`${styles.input__block} ${className}`}>
      <div className={item.checked ? `${styles.checked}` : `${styles.nochecked}`}>
        <div className={styles.view}>
          <label htmlFor={'radio__button' + item.id}>
            <div className={styles.item__radio__button}> </div>
          </label>

          <input
            id={'radio__button' + item.id}
            className={styles.toggle}
            type="checkbox"
            onClick={onCheckedItem}
            defaultChecked={item.checked}
          />

          {!showInputForChange ?
            <p
              className={item.checked ? `${styles.change__opacity}` : `${styles.nochange}`}
              onDoubleClick={handleDoubleClick}
            >
              {item.value}
            </p>
            :
            <DoubleClickInput text={item.value}
              onChangeValue={changeValue}
              onCloseInputForChange={closeInputForChange}
            />
          }

        </div>
      </div>

      <button
        className={styles.delete__none}
        onClick={onItemRemove}
      />
    </li>
  )
}

export default ItemOfList
