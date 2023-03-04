import React from 'react';
import './button.css';

const Button = (props) =>  {
    return (
        <button className="bguest__button" onClick={props.onClick}>{props.text}</button>
    );
}

export default Button;