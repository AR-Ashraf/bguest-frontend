import React from 'react';
import './toggleSwitch.css';


const ToggleSwitch = ({checked, onChange}) => {
  
    return (
      <label className="bguest__toggle-switch">
        <input type="checkbox" checked={checked} onChange={onChange} />
        <span className="switch" />
      </label>
    );
  }

export default ToggleSwitch;