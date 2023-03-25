import React from "react";
import { Tagline, Title, Description, Footer, FeatureBulletLeft } from "../../components";
import dashboard from '../../assets/images/dashboard.png';

import "./slideFive.css";

function SlideFive() {

  return (
    <div className="bguest__slideFive">
      <div className="bguest__slideFive-body">
        <div className="bguest__slideFive-body-contents">
          <Tagline text="OUR FEATURES" />
          <Title
            firstLineText="Analytical Dashboard"
            secondLineText=""
            thirdLineText=""
            highlightedWord="Dashboard"
          />
          <Description text="All Your Guest Engagements & Automation In A Single Dashboard!"/>
          <div className="bguest__slideFive-body-contents-features">
          <FeatureBulletLeft color="#E04648" text="Guest Engagement InfoGraphics"/>
          <FeatureBulletLeft color="#E04648" text="Date & Time Wise Data Visuals"/>
          <FeatureBulletLeft color="#E04648" text="Free Unlimited Emails For Marketing"/>
          <FeatureBulletLeft color="#E04648" text="Free 3000 Masking SMS For Marketing"/>
          </div>
        </div>
        <div className="bguest__slideFive-body-animation">
        <img src={dashboard} alt='bGuest Dashboard'/>
        </div>
      </div>
      <div className="bguest__slideFive-footer">
      <Footer slideNo='V'/>
      </div>
    </div>
  );
}

export default SlideFive;
