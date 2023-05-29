import React, { useState } from "react";
import {InputStyled} from "./Input.styled";

type Props = {
  onFormSubmit: (v: string) => void;
};

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
    <InputStyled onSubmit={onFormSubmit}>
      <input
        className="new__todo"
        placeholder="What needs to be done?"
        value={text}
        onChange={onInputChange}
      />
    </InputStyled>
  );
}

export default Input;
