import React from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { RiCloseLine } from "react-icons/ri";
import { dateViewAction } from "../../redux/actions";
import { Button, Datepicker } from "../../components";
import "./dateView.css";

function DateView() {
  const dispatch = useDispatch();

  return ReactDOM.createPortal(
    <div className="bguest__dateView">
      <div className="bguest__dateView-body">
        <RiCloseLine
          className="bguest__dateView-close-button"
          onClick={() => {
            dispatch(dateViewAction(false));
          }}
        />
        <div className="bguest__dateView-calender">
          <Datepicker />
        </div>
        <Button 
          width="120px"
          height="50px"
          borderRadius="8px"
          fontSize="14px"
          text="Submit"
        />
      </div>
    </div>,
    document.getElementById("portal")
  );
}

export default DateView;
