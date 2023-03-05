import React, {useState} from "react";
import { Description, Title, ToggleSwitch, FooterSecondary, AnimatedButton } from "../../components";
import { OpenLinkNewTab } from "../../helpers/Functions";
import {
  BasicPricing,
  StandardPricing,
  PremiumPricing,
} from "../../containers";
import "./pricing.css";

function Pricing() {
  const [isToggle, setIsToggle] = useState(false);

  const handleChange = event => {
    setIsToggle(!isToggle);
};

  return (
    <div className="bguest__pricing">
      {/*------- Top Content ---------*/}

      <div className="bguest__pricing-top-content">
        <Title firstLineText="The Best For Less" highlightedWord="Less" />
        <Description text="You are just 1 meeting away of setting up your guest management automation software" />
      </div>

      {/*---------- Month Year Toggle ------------*/}
      <div className="bguest__pricing-toggle-section">
        <div className={isToggle ? "month" : null}>
          <Description text="Monthly" />
        </div>
        <div>
          <ToggleSwitch checked={isToggle} onChange={handleChange} />
        </div>
        <div className={!isToggle ? "year" : null}>
          <Description text="Yearly" />
        </div>
        <div className="discount">
          <h2>10% Discount</h2>
        </div>
      </div>

      {/*----------- Pricing Table ---------------*/}
      <div className="bguest__pricing-packages">
        <div className="package">
          <BasicPricing price={isToggle ? "৳42,999" : "৳3999"} />
        </div>
        <div className="package">
          <StandardPricing price={isToggle ? "৳85,999" : "৳7999"}  />
        </div>
        <div className="package">
          <PremiumPricing price={isToggle ? "৳1,07,999" : "৳9999"}  />
        </div>
      </div>

      {/* Customized Order */}

      <div className="bguest__pricing-packages-customized">
      <div className="bguest__pricing-packages-customized-title">
        <Title
          firstLineText="Need Customized Plan?"
          highlightedWord="Customized"
        />
      </div>
      <Description text="We will be happy to do that as well"/>
      <div className="bguest__pricing-packages-customized-button-animation">
        <AnimatedButton 
        width="500px"
        height="150px" 
        text="Let's Talk" 
        fontSize="28px" 
        onClick={() => OpenLinkNewTab("https://calendly.com/bguest-ai/meeting")}/>
        </div>
      </div>

      {/*----------- Footer Section -------------*/}
      <FooterSecondary/>
    </div>
  );
}

export default Pricing;
