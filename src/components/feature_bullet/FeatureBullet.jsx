import React from 'react';
import { CgEditBlackPoint } from "react-icons/cg";
import './featureBullet.css';

function FeatureBullet(props) {
    return (
        <div className='bguest__featureBullet'>
        <CgEditBlackPoint
            className="bguest__featureBullet-icon"
          />
            <h1>{props.text}</h1>
        </div>
    );
}

export default FeatureBullet;