import React, { useState } from "react";
import styles from "./Input.module.css";

import { useDispatch } from "react-redux"; //new
import {addItem} from "../../store/todoSlice";

function Input () {
  const [text, setText] = useState("");
  
  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    dispatch(addItem(text));
    setText("");
  };

  const onInputChange = (event) => {
    setText(event.target.value);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        className={styles.new__todo}
        placeholder="What needs to be done?"
        value={text}
        onChange={onInputChange}
      />
    </form>
  );
}

export default Input;
