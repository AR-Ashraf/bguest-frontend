import React from 'react';
import './description.css';

function Description(props) {
    return (
        <div className='bguest__description' >
            <h1 style={{paddingTop:props.paddingTop, fontSize: props.fontSize, color: props.color}}>
            {props.text}
            </h1>
        </div>
    );
}

export default Description;