import React, { useState } from 'react';
import { BsThreeDots } from "react-icons/bs";
import { Description } from "../../components";
import './dotButton.css';

const DotButton = ({is_block}) =>  {
    const [isClicked, setIsClicked] = useState(false);

    return (
        <div
            className="bguest__dotButton">
            <div className="bguest__dotButton-icon">
              <BsThreeDots onClick={() => {
              setIsClicked(!isClicked);
            }}/>
            </div>
            <div
              className="bguest__dotButton-menu"
              style={{ visibility: isClicked ? "visible" : "hidden" }}
            >
              <div className="menu">
                <Description text="View Details" />
              </div>
              <div className="menu">
                <Description text="View Reviews" />
              </div>
              <div className="menu">
                <Description text="Edit Guest" />
              </div>
              <div className="menu">
                <Description text={is_block ? "Unblock Guest" : "Block Guest"} />
              </div>
            </div>
          </div>
    );
}

export default DotButton;