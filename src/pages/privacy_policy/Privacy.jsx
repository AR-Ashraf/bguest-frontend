import React from "react";
import { Description, Title } from "../../components";
import "./privacy.css";

function Privacy() {
  return (
    <div className="bguest__privacy">
    <div className="bguest__privacy-title">
      <Title
        firstLineText="Privacy Policy"
      />
    </div>
    <div className="bguest__privacy-description">
    <Description/>
    </div>
    </div>
  );
}

export default Privacy;
