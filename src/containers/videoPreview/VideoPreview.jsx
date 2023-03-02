import React from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { RiCloseLine } from "react-icons/ri";
import { videoPreviewAction } from "../../redux/actions";
import videoMp4 from '../../assets/videos/restaurant.mp4';
import videoOgg from '../../assets/videos/restaurant.ogg';
import "./videoPreview.css";

function VideoPreview() {
  const dispatch = useDispatch();

  return ReactDOM.createPortal(
    <div
      className='bguest__videoPreview'>
      <div className="bguest__videoPreview-body">
      <RiCloseLine
        className="bguest__videoPreview-close-button"
        onClick={() => {dispatch(videoPreviewAction(false))}}
        />
        <div className="bguest__videoPreview-video">
                <video 
                width='100%'
                height='100%'
                playsInline 
                controls
                controlsList="nodownload"
                preload="auto">
                <source src={videoMp4} type="video/mp4"/>
                <source src={videoOgg} type="video/ogg"/>
                Your browser does not support the video tag.
                </video>
            </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}

export default VideoPreview;
