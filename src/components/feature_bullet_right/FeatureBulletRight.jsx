import React from 'react';
import { CgEditBlackPoint } from "react-icons/cg";
import './featureBulletRight.css';

function FeatureBulletRight(props) {
    return (
        <div className='bguest__featureBulletRight'>
        <h1>{props.text}</h1>
        <CgEditBlackPoint
            className="bguest__featureBulletRight-icon"
          />
        </div>
    );
}

export default FeatureBulletRight;