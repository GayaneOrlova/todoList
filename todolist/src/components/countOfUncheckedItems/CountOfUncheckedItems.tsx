import React from "react";
import { useAppSelector } from "../../store/hooks";

type Props = {
 
};

const CountOfUncheckedItems:React.FC<Props> = (props) => {

  const toDoList = useAppSelector((state) => state.todos.toDoList);

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
