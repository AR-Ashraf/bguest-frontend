import React from 'react';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import './placeholder.css';

function Placeholder() {
    return (
        <div className='bguest__placeholder'>
        <AiOutlineLoading3Quarters
        className="bguest__placeholder-loading"
      />
        </div>
    );
}

export default Placeholder;