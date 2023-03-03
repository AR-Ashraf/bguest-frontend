import React from "react";
import { Tagline, Title, Description, ThumbAnimation } from "../../components";
import analytics from "../../assets/animations/analytics.json";
import email from "../../assets/animations/email.json";
import sms from "../../assets/animations/sms.json";
import router_login from "../../assets/animations/router_login.json";
import ai from "../../assets/animations/ai.json";
import "./overview.css";

function Overview() {
  return (
    <div className="bguest__overview">
      <div className="bguest__overview-banner">
        <Tagline text="GUESS WHAT?" />
        <Title firstLineText="Only Software You Need" highlightedWord="Need" />
        <Title
          firstLineText="To Keep Your Guests Happy"
          highlightedWord="Guests"
        />
        <Description text="Our Secret Ingredient Is Pretty Simple" />
        <div className="bguest__overview-banner-animations">
          <div className="animation">
            <ThumbAnimation
              player={analytics}
              text="Guest Analytics"
            />
          </div>
          <div className="animation">
            <ThumbAnimation
              player={email}
              text="Email Marketing"
            />
          </div>
          <div className="animation">
            <ThumbAnimation
              player={sms}
              text="SMS Marketing"
            />
          </div>
          <div className="animation">
            <ThumbAnimation
              player={router_login}
              text="Auto WiFi Login"
            />
          </div>
          <div className="animation">
            <ThumbAnimation 
            player={ai} 
            text="Artificial Intelligence" 
            />
          </div>
        </div>
        <div className="bguest__overview-banner-bottom">
          <Description text="With us, your Guests are getting Personalized Experience of your Restaurant"/>
          <Description text="And you are generating more Revenue"/>
        </div>
      </div>
    </div>
  );
}

export default Overview;
