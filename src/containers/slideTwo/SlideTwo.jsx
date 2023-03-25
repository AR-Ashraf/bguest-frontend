import React from "react";
import { Tagline, Title, Description, Footer, ThumbAnimation } from "../../components";
import retain1 from '../../assets/images/retain1.svg';
import retain2 from '../../assets/images/retain2.svg';
import money from '../../assets/animations/money.json';
import revenue from '../../assets/animations/revenue_stats.json';
import "./slideTwo.css";

function SlideTwo() {

  return (
    <div className="bguest__slideTwo">
      <div className="bguest__slideTwo-body">
        <div className="bguest__slideTwo-body-contents">
          <Tagline text="YOUR BENEFITS" />
          <Title
            firstLineText="Retain More"
            secondLineText="Profit More"
            thirdLineText="Grow More"
            highlightedWord="Profit"
          />
          <Description text="Research shows that only 5% increase in Guest Retention increases the profits by 125%!" fontSize="22px"/>
          <div className="bguest__slideTwo-body-contents-thumb-animations">
          <ThumbAnimation player={revenue} text='Still Struggling With Revenue?'/>
          <ThumbAnimation player={money} text='We Will Help You To Earn More With Less Effort'/>
          </div>
        </div>
        <div className="bguest__slideTwo-body-animation">
        <img src={retain2} alt='Guest Retention' />
        <img src={retain1} alt='Guest Retention' />
        </div>
      </div>
      <div className="bguest__slideTwo-footer">
      <Footer slideNo='II'/>
      </div>
    </div>
  );
}

export default SlideTwo;
