import React from 'react';
import { BsCaretRightFill } from "react-icons/bs";
import './pricePoint.css';

function PricePoint({text, color}) {
    return (
        <div className='bguest__pricePoint'>
        <BsCaretRightFill
            className="bguest__pricePoint-icon"
            style={{color: color}}
          />
            <h1>{text}</h1>
        </div>
    );
}

export default PricePoint;