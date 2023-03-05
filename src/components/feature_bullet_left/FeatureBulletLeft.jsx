import React from 'react';
import { CgEditBlackPoint } from "react-icons/cg";
import './featureBulletLeft.css';

function FeatureBulletLeft({text, color}) {
    return (
        <div className='bguest__featureBulletLeft'>
        <CgEditBlackPoint
            className="bguest__featureBulletLeft-icon"
            style={{color: color}}
          />
            <h1>{text}</h1>
        </div>
    );
}

export default FeatureBulletLeft;