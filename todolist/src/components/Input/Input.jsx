import React, {useState } from "react"
import './index.css';

function Input ({onChange}) {
    const [text, setItem] = useState('');

    const handleKeyUp = (event) => {
        event.preventDefault();

        if (event.key !== 'Enter') {
            setItem(event.target.value);
        }
        if (event.key === 'Enter' && text.length > 0) {     
            onChange(text);
            event.target.value = '';
        }
    };
    

    return (
        <>
            <input
                className="new__todo"
                placeholder="What needs to be done?"
                onKeyUp={handleKeyUp}
            />
        </>
    )
}

export default Input;