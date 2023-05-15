import React from "react";
import './index.css';

function DoubleClickInput({text, onChangeValue, onCloseInputForChange}) {

    // const [loseFocuse, setLoseFocuse] = useState(true);
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
        className="double__click__input"
        defaultValue={text}
        />
    );
  }
  
export default DoubleClickInput




// const [text, setItem] = useState('');

// const handleKeyUp = (event) => {
//     event.preventDefault();

//     if (event.key !== 'Enter') {
//         setItem(event.target.value);
//     }
//     if (event.key === 'Enter' && text.length > 0) {     
//         onChange(text);
//         event.target.value = '';
//     }
// };