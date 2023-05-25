import React from "react";
import { useSelector } from "react-redux";

function CountOfUncheckedItems() {

  const toDoList = useSelector((state) => state.todos.toDoList);

  const arrOfCountChecked = toDoList.filter((item) => !item.checked);
  const countOfUncheckedItems = arrOfCountChecked.length;

  return (
    <div>
      {countOfUncheckedItems}
      items left
    </div>
  );
}

export default CountOfUncheckedItems;
