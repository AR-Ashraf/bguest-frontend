import React from 'react';
import './tagline.css';

function Tagline(props) {
    return (
        <div className='bguest__tagline'>
            <h1>{props.text}</h1>
        </div>
    );
}

export default Tagline;