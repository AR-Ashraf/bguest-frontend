import React, {useState} from "react";
import { Tagline, Title, Description, Footer, ThumbAnimation, Placeholder } from "../../components";
import { Player } from '@lottiefiles/react-lottie-player';
import { InView } from "react-intersection-observer";
import manualWork from '../../assets/animations/manual_work.json';
import autoTasking from '../../assets/animations/auto.json';
import multiTasking from '../../assets/animations/multitask.json';
import "./slideFour.css";

function SlideFour() {
  const [multiTaskingInView, setMultiTaskingInView] = useState(false);

  return (
    <div className="bguest__slideFour">
      <div className="bguest__slideFour-body">
        <div className="bguest__slideFour-body-contents">
          <Tagline text="YOUR BENEFITS" />
          <Title
            firstLineText="You Will"
            secondLineText="Save"
            thirdLineText="Time & Cost"
            highlightedWord="Save"
          />
          <Description text="We envision to automate the Restaurant industry. And you will be vital part of this pioneering." fontSize="22px" />
          <div className="bguest__slideFour-body-contents-thumb-animations">
          <ThumbAnimation player={manualWork} text='Still Work Manually?'/>
          <ThumbAnimation player={autoTasking} text='We Will Automate Everything For You'/>
          </div>
        </div>
        <div className="bguest__slideFour-body-animation">
       <InView onChange={setMultiTaskingInView}>
            {({ ref, inView }) => (
              <div ref={ref}>
                {
                  inView
                  ? <Player
                      src={JSON.parse(JSON.stringify(multiTasking))}
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
      <div className="bguest__slideFour-footer">
      <Footer slideNo='IV'/>
      </div>
    </div>
  );
}

export default SlideFour;
