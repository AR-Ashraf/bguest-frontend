import React, {useState}  from 'react';
import { OpenLinkNewTab } from '../../helpers/Functions'; 
import { Player } from '@lottiefiles/react-lottie-player';
import { InView } from "react-intersection-observer";
import buttonAnim from "../../assets/animations/button.json";
import Placeholder from '../placeholder/Placeholder';
import './animatedButton.css';

const AnimatedButton = () =>  {
    const [buttonInView, setButtonInView] = useState(false);
    return (
        <div 
        className="bGuest__animated-button-animation" 
        onClick={() => {OpenLinkNewTab("https://calendly.com/bguest-ai/demo")}}>
        <InView onChange={setButtonInView}>
          {({ ref, inView }) => (
            <div ref={ref}>
              {
                inView
                ? <Player
                    src={JSON.parse(JSON.stringify(buttonAnim))}
                    loop
                    autoplay
                    className="buttonAnimation"
                    />
              :
              <Placeholder/>
              }
            </div>
          )}
        </InView>
        <h1>Demo</h1>
        </div>
    );
}

export default AnimatedButton;