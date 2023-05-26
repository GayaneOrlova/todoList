import React, { useState } from "react";
import styles from "./Input.module.css";

type Props = {
  onFormSubmit: (v: string) => void;
};

// function Input (props) {
const Input: React.FC<Props> = (props) => {
  const [text, setText] = useState("");
  
  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    props.onFormSubmit(text);
    setText("");
  };

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
