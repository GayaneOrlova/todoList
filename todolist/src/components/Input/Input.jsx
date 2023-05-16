import React, { useState } from "react"
import './index.css';

function Input({ addItem }) {
    const [text, setText] = useState('');

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (!text.trim()) {
            return
        }
        addItem(text);
        setText('');
    }

    const onInputChange = (event) => {
        setText(event.target.value);
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input
                className="new__todo"
                placeholder="What needs to be done?"
                value={text}
                onChange={onInputChange}
            />
        </form>
    )
}

export default Input;