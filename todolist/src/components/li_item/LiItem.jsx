import React from "react"

function ItemOfList ({item, onItemRemove, onCheckedItem}) {
    return (
        <>
            <li className={item.checked ? 'checked' : 'nochecked'} id={item.id}>
                <div className="view">
                    <input
                        className="toggle"
                        type="checkbox"
                        onClick={() => onCheckedItem(item.id)}
                        defaultChecked = {item.checked}
                        
                    />
                    <label className={item.checked ? 'change__opacity' : 'nochange'}>{item.value}</label>

                    <button onClick={() => onItemRemove(item.id)}>Remove</button>
                </div>
            </li>
        </>
    )
}

export default ItemOfList

