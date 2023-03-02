import React from "react";
import './thumbImage.css';

function ThumbImage(props) {
    return (
        <div className='bguest__thumbImage'>
            <div className="bguest__thumbImage-Image">
            <img
            src={props.image}
            alt = {props.text}
            className="Image"
            />
            </div>
            <h1>{props.text}</h1>
        </div>
    );
}

export default ThumbImage;