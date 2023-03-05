import React from 'react';
import './button.css';

const Button = ({width, height, borderRadius, fontSize, text, onClick}) =>  {
    return (
        <button 
        className="bguest__button" 
        onClick={onClick}
        style={{width: width, height: height, borderRadius: borderRadius, fontSize: fontSize }}
        >
        {text}
        </button>
    );
}

export default Button;