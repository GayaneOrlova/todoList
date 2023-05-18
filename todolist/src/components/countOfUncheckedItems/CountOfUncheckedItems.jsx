import React from "react";

function CountOfUncheckedItems ({toDoList}) {
    const arrOfCountChecked = toDoList.filter((item) => !item.checked);
    const countOfUncheckedItems = arrOfCountChecked.length;

    return (
        <div>{countOfUncheckedItems}
            items left
        </div>
    );
}

export default CountOfUncheckedItems