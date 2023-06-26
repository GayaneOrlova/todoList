import React, { useState } from "react";
import {DoubleClickStyled} from "./DoubleClickInput.styled";

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
    <DoubleClickStyled
      onChange={handleInputChange}
      onBlur={onLoseFocus}
      onKeyUp={handleKeyUp}
      autoFocus
      defaultValue={inputValue}
      value={inputValue}
    />
  );
}

export default DoubleClickInput
