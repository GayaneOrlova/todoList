import React, { useState } from "react";
import styles from './DoubleClickInput.module.css';
// import { onChangeValue } from "../../store/todoSlice";

type Props = {
  text: string;
  onChangeValue:  (v: string) => void;
  onCloseInputForChange: (v: boolean) => void;
};

const DoubleClickInput: React.FC<Props> = (props)=> {

  const [inputValue, setInputValue] = useState(props.text);

  const onLoseFocus = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onChangeValue(event.target.value);
    props.onCloseInputForChange(true)
  }


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    event.preventDefault();

    if (event.key === 'Enter' && props.text.length > 0) {
      props.onChangeValue(inputValue);
      props.onCloseInputForChange(true)
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
      value={inputValue}
    />
  );
}

export default DoubleClickInput
