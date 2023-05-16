import React, { useState } from "react"
import './index.css';
import DoubleClickInput from '../doubleClickInput/DoubleClickInput'

function ItemOfList ({item, onItemRemove, onCheckedItem, changeValue}) {

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
        <li className="input__block" >
            <div className={item.checked ? 'checked' : 'nochecked'} id={item.id} onDoubleClick={handleDoubleClick}>
             
                <div className="view">
                    <label htmlFor={'radio__button' + item.id}
                        className={item.checked ? 'change__opacity' : 'nochange'}>
                        <div className="item__radio__button"> </div>
                        <input
                            id={'radio__button' + item.id}
                            className="toggle"
                            type="checkbox"
                            onClick={() => onCheckedItem(item.id)}
                            defaultChecked={item.checked} />
                        {showInputForChange ?
                            <DoubleClickInput text={item.value}
                                onChangeValue={onChangeValue}
                                onCloseInputForChange={closeInputForChange} />
                            :
                            <span>
                                {item.value}
                            </span>
                        }
                    </label>
            </div>
            </div>

            <button className="delete__none" onClick={() => onItemRemove(item.id)}></button>
        </li>
    )
}

export default ItemOfList

