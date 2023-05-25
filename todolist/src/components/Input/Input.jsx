import React, { useState } from "react";
import styles from "./Input.module.css";


function Input (props) {
  const [text, setText] = useState("");
  
  const onFormSubmit = (event) => {
    event.preventDefault();
    props.onFormSubmit(text);
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
