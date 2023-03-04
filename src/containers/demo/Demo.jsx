import React, {useState}  from "react";
import { Title, Description, Placeholder } from "../../components";
import { OpenLinkNewTab } from "../../helpers/Functions";
import { Player } from '@lottiefiles/react-lottie-player';
import { InView } from "react-intersection-observer";
import buttonAnim from "../../assets/animations/button.json";
import "./demo.css";

function Demo() {
    const [buttonInView, setButtonInView] = useState(false);
  return (
    <div className="bGuest__demo">
    <div className="bGuest__demo-title">
        <Title
            firstLineText="We Remember the Experience"
            highlightedWord="Experience"
        />
    </div>
    <div className="bGuest__demo-subTitle">
        <Description
            text="bGuest helps you to know and serve your Guests better"
        />
         <Description
            text="With us, your Guests feel that you care"
        />
    </div>
    <div>
    <div className="bGuest__demo-button-animation" onClick={() => {OpenLinkNewTab("https://calendly.com/bguest-ai/demo")}}>
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
          <h1>Book A Demo</h1>
          </div>
    </div>
    </div>
  );
}

export default Demo;
