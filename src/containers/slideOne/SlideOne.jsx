import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { Tagline, Title, Description, Footer, Placeholder } from "../../components";
import { videoPreviewAction } from "../../redux/actions";
import { Player } from '@lottiefiles/react-lottie-player';
import { InView } from "react-intersection-observer";
import cook from '../../assets/animations/girl_cooking.json';
import bowl from '../../assets/animations/rice_bowl.json';
import videoButton from '../../assets/animations/video_button.json';
import videoMp4 from '../../assets/videos/restaurant.mp4';
import videoOgg from '../../assets/videos/restaurant.ogg';
import "./slideOne.css";

function SlideOne() {
    const dispatch = useDispatch();
    const [videoButtonInView, setVideoButtonInView] = useState(false);
    const [cookInView, setCookInView] = useState(false);
    const [bowlInView, setBowlInView] = useState(false);

  return (
    <div className="bguest__slideOne">
      <div className="bguest__slideOne-body">
        <div className="bguest__slideOne-body-contents">
          <Tagline text="WHAT WE ARE" />
          <Title
            firstLineText="We Are Helping"
            secondLineText="Restaurants"
            thirdLineText="To Retain Guests"
            highlightedWord="Restaurants"
          />
          <Description text="Understand your Guests better and serve them better. Retain your happy Guests more."/>
          <div className="bguest__slideOne-body-contents-process">
          <h1>How bGuest Works</h1>
          <div onClick={() => {dispatch(videoPreviewAction(true))}}>
          <InView onChange={setVideoButtonInView}>
            {({ ref, inView }) => (
              <div ref={ref}>
                {
                  inView
                  ? <Player
                src={JSON.parse(JSON.stringify(videoButton))}
                loop
                autoplay
                className="video-button"
                />
                :
                <Placeholder/>
                }
              </div>
            )}
          </InView>
          
          </div>
          </div>
        </div>
        <div className="bguest__slideOne-body-animation">
            <div className="bguest__slideOne-body-animation-cook-player">
            <InView onChange={setCookInView}>
              {({ ref, inView }) => (
                <div ref={ref}>
                  {
                    inView
                    ? <Player
                      src={JSON.parse(JSON.stringify(cook))}
                      loop
                      autoplay
                      />
                    :
                    <Placeholder/>
                    }
                </div>
              )}
            </InView>
            
            </div>
            <div className="bguest__slideOne-body-animation-bowl-player">
            <InView onChange={setBowlInView}>
              {({ ref, inView }) => (
                <div ref={ref}>
                  {
                    inView
                    ? 
                    <Player
                      className="bowl-player"
                      src={JSON.parse(JSON.stringify(bowl))}
                      loop
                      autoplay
                      />
                    :
                    <Placeholder/>
                    }
                </div>
              )}
            </InView>
            
            </div>
            <div className="bguest__slideOne-body-animation-video">
                <video 
                width='600px'
                height='600px'
                playsInline 
                muted
                autoPlay 
                loop
                preload="auto">
                <source src={videoMp4} type="video/mp4"/>
                <source src={videoOgg} type="video/ogg"/>
                Your browser does not support the video tag.
                </video>
            </div>
        </div>
      </div>
      <div className="bguest__slideOne-footer">
      <Footer slideNo='I'/>
      </div>
    </div>
  );
}

export default SlideOne;
