import React, {useState} from "react";
import './index.css';

function DoubleClickInput({text}) {

    const [loseFocuse, setLoseFocuse] = useState(true);
    const onLoseFocus = () => {
        setLoseFocuse(false);
        console.log({text});

    };

    const checkNewInput = (event) => {
      console.log(event.target.value);
    }
    
    return (
      <input onBlur={onLoseFocus} onChange ={checkNewInput}

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