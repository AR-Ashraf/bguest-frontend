import React from "react";
import forest_lounge from "../../assets/images/forest_lounge.svg";
import "./footer.css";

function Footer(props) {
  return (
    <div className="bguest__footer">
      <div className="bguest__footer-slide-number">
        <h1>{props.slideNo}</h1>
        <div className="bguest__footer-slide-number-divider"></div>
        <h2>VII</h2>
      </div>
      <div className="bguest__footer-partners">
        <h1>OUR PARTNERS</h1>
        <div className="bguest__footer-partners-icons">
          <img src={forest_lounge} alt="forest lounge" /> 
        </div>
      </div>
    </div>
  );
}

export default Footer;
