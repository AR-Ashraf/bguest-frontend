import React, {useState} from "react";
import { Tagline, Title, Description, Footer, ThumbAnimation, Placeholder } from "../../components";
import { Player } from '@lottiefiles/react-lottie-player';
import { InView } from "react-intersection-observer";
import guestMan from '../../assets/images/guest_man.svg';
import guestLady from '../../assets/images/guest_lady.svg';
import needyGuest from '../../assets/animations/guest.json';
import wifiConnect from '../../assets/animations/connect.json';
import router from '../../assets/animations/router.json';
import wiFi from '../../assets/animations/wifi_range.json';
import routerLogin from '../../assets/animations/router_login.json';

import "./slideSix.css";

function SlideSix() {
  const [wiFiInView, setWiFiInView] = useState(false);
  const [routerInView, setRouterInView] = useState(false);

  return (
    <div className="bguest__slideSix">
      <div className="bguest__slideSix-body">
        <div className="bguest__slideSix-body-contents">
          <Tagline text="OUR FEATURES" />
          <Title
            firstLineText="Single Login"
            secondLineText="Free WiFi"
            thirdLineText="Through Router"
            highlightedWord="Router"
          />
          <Description text="Our customized router firmware will help you to remain connected with your Guests!"/>
          <div className="bguest__slideSix-body-contents-thumb-animations">
          <ThumbAnimation player={needyGuest} />
          <div className="temporary">
          <ThumbAnimation player={wifiConnect} />
          </div>
          <ThumbAnimation player={routerLogin} />
          </div>
          <h1 className="animation-tag">Keep Your Guests Connected On Arrival Automatically</h1>
        </div>
        <div className="bguest__slideSix-body-animation">
        <img className="image1" src={guestLady} alt='Lady Guest Using bGuest' />
        <div className="bguest__slideSix-body-animation-man-with-wifi">
        <InView onChange={setWiFiInView}>
            {({ ref, inView }) => (
              <div ref={ref}>
                {
                  inView
                  ? <Player
                      src={JSON.parse(JSON.stringify(wiFi))}
                      loop
                      autoplay
                      className="wifi-range"
                      />
                :
                <Placeholder/>
                }
              </div>
            )}
          </InView>
        
        <img className="image2" src={guestMan} alt='Man Guest Using bGuest'/>
        <InView onChange={setRouterInView}>
            {({ ref, inView }) => (
              <div ref={ref}>
                {
                  inView
                  ? <Player
                      src={JSON.parse(JSON.stringify(router))}
                      loop
                      autoplay
                      className="router"
                      />
                :
                <Placeholder/>
                }
              </div>
            )}
          </InView>
        
        </div>
        
        </div>
        <div className="bguest__slideSix-body-contents-mobile">
          <Tagline text="OUR FEATURES" />
          <Title
            firstLineText="Single Login"
            secondLineText="Free WiFi"
            thirdLineText="Through Router"
            highlightedWord="Router"
          />
          <Description text="Our customized router firmware will help you to remain connected with your Guests!"/>
          <div className="bguest__slideSix-body-contents-thumb-animations">
          <ThumbAnimation player={needyGuest} />
          <div className="temporary">
          <ThumbAnimation player={wifiConnect} />
          </div>
          <ThumbAnimation player={routerLogin} />
          </div>
          <h1 className="animation-tag">Keep Your Guests Connected On Arrival Automatically</h1>
        </div>
      </div>
      <div className="bguest__slideSix-footer">
      <Footer slideNo='VI'/>
      </div>
    </div>
  );
}

export default SlideSix;
