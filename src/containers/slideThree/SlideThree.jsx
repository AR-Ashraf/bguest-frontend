import React, {useState} from "react";
import { Tagline, Title, Description, Footer, ThumbImage, Placeholder } from "../../components";
import { Player } from '@lottiefiles/react-lottie-player';
import { InView } from "react-intersection-observer";
import guestEngageAnim1 from '../../assets/animations/guest_engagement1.json';
import guestEngageAnim2 from '../../assets/animations/guest_engagement2.json';
import guestTalk1 from '../../assets/images/guest_talk1.svg';
import guestTalk2 from '../../assets/images/guest_talk2.svg';
import "./slideThree.css";

function SlideThree() {
  const [guestEngageAnim1InView, setGuestEngageAnim1InView] = useState(false);
  const [guestEngageAnim2InView, setGuestEngageAnim2InView] = useState(false);

  return (
    <div className="bguest__slideThree">
      <div className="bguest__slideThree-body">
        <div className="bguest__slideThree-body-contents">
          <Tagline text="YOUR BENEFITS" />
          <Title
            firstLineText="Your"
            secondLineText="Guest Engagement"
            thirdLineText="Will Increase"
            highlightedWord="Increase"
          />
          <Description text="We will remember the experiences of your Guests with your restaurant & help you to understand them better." fontSize="22px"/>
          <div className="bguest__slideThree-body-contents-thumb-animations">
          <ThumbImage image={guestTalk1} text='Want To Serve Better?'/>
          <ThumbImage image={guestTalk2} text='We Will Help You To Remember & Serve Your Guests'/>
          </div>
        </div>
        <div className="bguest__slideThree-body-animation">
        <InView onChange={setGuestEngageAnim1InView}>
            {({ ref, inView }) => (
              <div ref={ref}>
                {
                  inView
                  ? <Player
                      src={JSON.parse(JSON.stringify(guestEngageAnim1))}
                      loop
                      autoplay
                      className="animation1"
                      />
                :
                <Placeholder/>
                }
              </div>
            )}
          </InView>

          <InView onChange={setGuestEngageAnim2InView}>
            {({ ref, inView }) => (
              <div ref={ref}>
                {
                  inView
                  ? <Player
                      src={JSON.parse(JSON.stringify(guestEngageAnim2))}
                      loop
                      autoplay
                      className="animation2"
                      />
                :
                <Placeholder/>
                }
              </div>
            )}
          </InView>
        
        
        </div>
      </div>
      <div className="bguest__slideThree-footer">
      <Footer slideNo='III'/>
      </div>
    </div>
  );
}

export default SlideThree;
