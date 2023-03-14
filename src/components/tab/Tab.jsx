import React from "react";
import { NavLink } from "react-router-dom";
import "./tab.css";

function Tab({width, src, text, path}) {

  return (
    <div className="bguest__tab" style={{width: width}}>
    <div className="bguest__tab-icon">
    {src}
    </div>
    <div className="bguest__tab-name">
        <NavLink
          to={path} end
          preventScrollReset={true}
          activeClassName="active"
        >
          {text}
        </NavLink>
    </div>
    </div>
  );
}

export default Tab;
