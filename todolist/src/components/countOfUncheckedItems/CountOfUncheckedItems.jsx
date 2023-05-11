import React from "react";
import './App.css';

function CountOfUncheckedItems ({toDoList}) {
    // const [count, setCount] = useState(0);
    let arrOfCountChecked = toDoList.filter((item) => item.checked === false);
    console.log(arrOfCountChecked);
    console.log(arrOfCountChecked.length);

    let countOfUncheckedItems = arrOfCountChecked.length;

    return (<div>{countOfUncheckedItems} items left</div>);
}

export default CountOfUncheckedItems