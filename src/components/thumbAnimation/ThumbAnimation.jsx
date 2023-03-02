import React, {useState} from "react";
import { Player } from '@lottiefiles/react-lottie-player';
import { InView } from "react-intersection-observer";
import {Placeholder} from '../../components';
import './thumbAnimation.css';

function ThumbAnimation(props) {
    const [inView, setInView] = useState(false);
    return (
        <div className='bguest__thumbAnimation'>
            <div className="bguest__thumbAnimation-animation">
            <InView onChange={setInView}>
                {({ ref, inView }) => (
                <div ref={ref}>
                    {
                    inView
                    ? <Player
                        src={JSON.parse(JSON.stringify(props.player))}
                        autoplay
                        loop
                        className="animation"
                        />
                    :
                    <Placeholder/>
                    }
                </div>
                )}
            </InView>
            
            </div>
            <h1>{props.text}</h1>
        </div>
    );
}

export default ThumbAnimation;