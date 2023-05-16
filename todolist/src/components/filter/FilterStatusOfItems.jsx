import React from "react";
import './index.css';

function FilterStatusOfItems({onComplitedItems, onAllItems, onActiveItems, onClearComplited, toDoList}) {

    const complited = toDoList.find((item) => item.checked === true);
    const complitedClass = complited ? 'visible' : 'invisible';

    return (
        <div className="filter">
            <ul>
                <li>
                    <button onClick={onAllItems}>All</button>
                </li>
                <li>
                    <button onClick={onComplitedItems}>Complited</button>
                </li>
                <li>
                    <button onClick={onActiveItems}>Active</button>
                </li>
            </ul>
            <button onClick={onClearComplited} className={complitedClass}>Clear complited</button>
        </div>
    )
}

export default FilterStatusOfItems