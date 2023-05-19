import React, { useState } from "react";
import styles from './DoubleClickInput.module.css';

function DoubleClickInput({ text, onChangeValue, onCloseInputForChange }) {

  const [inputValue, setInputValue] = useState(text);

  const onLoseFocus = event => {
    onChangeValue(event.target.value);
    onCloseInputForChange(true)
  }

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyUp = (event) => {
    event.preventDefault();

    if (event.key === 'Enter' && text.length > 0) {
      onChangeValue(event.target.value);
      onCloseInputForChange(true)
    }
  };

  return (
    <input
      onChange={handleInputChange}
      onBlur={onLoseFocus}
      onKeyUp={handleKeyUp}
      autoFocus
      className={styles.double__click__input}
      defaultValue={inputValue}
    />
  );
}

export default DoubleClickInput
