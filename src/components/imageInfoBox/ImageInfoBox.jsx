import React from "react";
import './imageInfoBox.css';

function ImageInfoBox(props) {
    return (
        <div className='bguest__imageInfoBox'>
            <div className="bguest__imageInfoBox-Image">
            {props.image}
            </div>
            <div className="bguest__imageInfoBox-title">
            <h1>{props.title}</h1>
            </div>
            <div className="bguest__imageInfoBox-description">
            <h1>{props.description}</h1>
            </div>
        </div>
    );
}

export default ImageInfoBox;