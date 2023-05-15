import React from "react";
import './index.css';

function DoubleClickInput({text}) {

  const onLoseFocus = () => {
    
  }
    
    return (
      <input onBlur={onLoseFocus}
        autoFocus
        className="double__click__input" 
        defaultValue={text} 
        />
    );
  }
  
export default DoubleClickInput