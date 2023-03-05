import React, {useState}  from 'react';
import { OpenLinkNewTab } from '../../helpers/Functions'; 
import { Player } from '@lottiefiles/react-lottie-player';
import { InView } from "react-intersection-observer";
import buttonAnim from "../../assets/animations/button.json";
import Placeholder from '../placeholder/Placeholder';
import './animatedButton.css';

const AnimatedButton = ({width, height, text, fontSize, onClick}) =>  {
    const [buttonInView, setButtonInView] = useState(false);
    return (
        <div 
        className="bGuest__animated-button-animation" 
        style={{ width: width, height: height }}
        onClick={onClick}>
        <InView onChange={setButtonInView}>
          {({ ref, inView }) => (
            <div ref={ref}>
              {
                inView
                ? <Player
                    src={JSON.parse(JSON.stringify(buttonAnim))}
                    loop
                    autoplay
                    style={{ width: width }}
                    />
              :
              <Placeholder/>
              }
            </div>
          )}
        </InView>
        <h1 style={{ fontSize: fontSize }}>{text}</h1>
        </div>
    );
}

export default AnimatedButton;