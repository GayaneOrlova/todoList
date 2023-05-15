import React, { useState } from "react"
import './index.css';
import DoubleClickInput from '../doubleClickInput/DoubleClickInput'

function ItemOfList ({item, onItemRemove, onCheckedItem}) {

    const [showInputForChange, setShowInputForChange] = useState(false);
    const handleDoubleClick = () => {
        setShowInputForChange(true);
        console.log('Double click!');
    };


    return (
        <li className="input__block" onDoubleClick={handleDoubleClick}>
            <div className={item.checked ? 'checked' : 'nochecked'} id={item.id}>
                <div className="view">
                    <label htmlFor={'radio__button' + item.id}
                        className={item.checked ? 'change__opacity' : 'nochange'}>
                        <div className="item__radio__button"> </div>
                        <input
                            id={'radio__button' + item.id}
                            className="toggle"
                            type="checkbox"
                            onClick={() => onCheckedItem(item.id)}
                            defaultChecked={item.checked}/>
                        {item.value}
                    </label>
                </div>
            </div>


            {showInputForChange ? <DoubleClickInput text={item.value}/> : ''}

            <button className="delete__none" onClick={() => onItemRemove(item.id)}></button>
        </li>
    )
}

export default ItemOfList

