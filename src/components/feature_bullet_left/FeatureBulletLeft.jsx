import React from 'react';
import { CgEditBlackPoint } from "react-icons/cg";
import './featureBulletLeft.css';

function FeatureBulletLeft(props) {
    return (
        <div className='bguest__featureBulletLeft'>
        <CgEditBlackPoint
            className="bguest__featureBulletLeft-icon"
          />
            <h1>{props.text}</h1>
        </div>
    );
}

export default FeatureBulletLeft;