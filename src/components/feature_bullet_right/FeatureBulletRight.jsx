import React from 'react';
import { CgEditBlackPoint } from "react-icons/cg";
import './featureBulletRight.css';

function FeatureBulletRight({text, color}) {
    return (
        <div className='bguest__featureBulletRight'>
        <h1>{text}</h1>
        <CgEditBlackPoint
            className="bguest__featureBulletRight-icon"
            style={{color: color}}
          />
        </div>
    );
}

export default FeatureBulletRight;