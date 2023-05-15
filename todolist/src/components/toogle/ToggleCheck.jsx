import React from "react"
import "./index.css"

function ToggleCheckedItems({onToogleCheck, checkingItems}) {
    return (<button
        title="Mark all as complete"
        className={`toogle-button ${checkingItems ? 'toggle__noopasity' : 'toggle__opasity'}`} 
        onClick={onToogleCheck}
        ></button>
    )
}

export default ToggleCheckedItems