import React from "react";
import { Title, Description, AnimatedButton } from "../../components";
import { OpenLinkNewTab } from "../../helpers/Functions";
import "./demo.css";

function Demo() {
  return (
    <div className="bGuest__demo">
      <div className="bGuest__demo-title">
        <Title
          firstLineText="We Remember the Experience"
          highlightedWord="Experience"
        />
      </div>
      <div className="bGuest__demo-subTitle">
        <Description text="bGuest helps you to know and serve your Guests better" />
        <Description text="With us, your Guests feel that you care" />
      </div>
      <div>
        <div className="bGuest__demo-button-animation">
        <AnimatedButton 
        width="500px"
        height="150px" 
        text="Book A Demo" 
        fontSize="28px" 
        onClick={() => OpenLinkNewTab("https://calendly.com/bguest-ai/meeting")}/>
        </div>
        <div className="bGuest__demo-button-animation-tablet">
        <AnimatedButton 
        width="400px"
        height="100px" 
        text="Book A Demo" 
        fontSize="24px" 
        onClick={() => OpenLinkNewTab("https://calendly.com/bguest-ai/meeting")}/>
        </div>
      </div>
    </div>
  );
}

export default Demo;
