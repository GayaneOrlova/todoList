import React from "react";

function CountOfUncheckedItems ({toDoList}) {
    let arrOfCountChecked = toDoList.filter((item) => item.checked === false);


    let countOfUncheckedItems = arrOfCountChecked.length;

    return (<div>{countOfUncheckedItems} items left</div>);
}

export default CountOfUncheckedItems