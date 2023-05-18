import React, { useState } from "react"
import styles from './ItemOfList.module.css'
import DoubleClickInput from '../doubleClickInput/DoubleClickInput'

function ItemOfList ({item, onItemRemove, onCheckedItem, changeValue, className}) {

    const [showInputForChange, setShowInputForChange] = useState(false);

    const handleDoubleClick = () => {
        setShowInputForChange(true);
    };

    const onChangeValue = (value) =>{
        changeValue(value, item.id)
    }
    const closeInputForChange = () => {
        setShowInputForChange(false);
    }

    return (
        <li className={`${styles.input__block} ${className}`}>
            <div
                className={item.checked ? `${styles.checked}` : `${styles.nochecked}`}
                id={item.id}
                onDoubleClick={handleDoubleClick}
            >
                <div className="view">
                    <label
                        htmlFor={'radio__button' + item.id}
                        className={item.checked ? `${styles.change__opacity}` : `${styles.nochange}`}
                    >
                        <div className={styles.item__radio__button}> </div>
                        <input
                            id={'radio__button' + item.id}
                            className={styles.toggle}
                            type="checkbox"
                            onClick={() => onCheckedItem(item.id)}
                            defaultChecked={item.checked}
                        />
                            {showInputForChange ?

                            <DoubleClickInput text={item.value}
                                onChangeValue={onChangeValue}
                                onCloseInputForChange={closeInputForChange}
                            />
                            :
                            <span>
                                {item.value}
                            </span>
                        }
                    </label>
                </div>
            </div>

            <button
                className={styles.delete__none}
                onClick={() => onItemRemove(item.id)}
            />
        </li>
    )
}

export default ItemOfList

