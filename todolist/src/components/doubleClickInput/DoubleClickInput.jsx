import React from "react";
import styles from './DoubleClickInput.module.css';

function DoubleClickInput({ text, onChangeValue, onCloseInputForChange }) {

  const onLoseFocus = (event) => {
    onChangeValue(event.target.value);
    onCloseInputForChange(true)
  }

  const handleKeyUp = (event) => {
    event.preventDefault();

    if (event.key === 'Enter' && text.length > 0) {
      onChangeValue(event.target.value);
      onCloseInputForChange(true)
    }
  };

  return (
    <input
      onBlur={onLoseFocus}
      onKeyUp={handleKeyUp}
      autoFocus
      className={styles.double__click__input}
      defaultValue={text}
    />
  );
}

export default DoubleClickInput
