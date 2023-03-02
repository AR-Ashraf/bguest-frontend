import React  from "react";
import { SlideOne, SlideTwo, SlideThree, SlideFour, SlideFive, SlideSix, SlideSeven } from "../../containers";
import { register } from "swiper/element/bundle";
import "./homepage.css";

register();

function Homepage() {

  return (
    <div className="bguest__homepage">
      <swiper-container
        className="mySwiper"
        pagination="true"
        pagination-clickable="true"
        pagination-dynamic-bullets="true"
        direction="horizontal"
        mousewheel="true"
        space-between="30"
        slides-per-view='1'
        speed='500'
        no-swipingClass= 'swiper-no-swiping'
        allow-touch-move="false"
        style={{
          "--swiper-pagination-color": "#E04648",
          "--swiper-pagination-bullet-inactive-color": "#080808",
          "--swiper-pagination-bullet-inactive-opacity": "0.5",
          "--swiper-pagination-bullet-size": "8px",
        }}
      >
        <swiper-slide>{<SlideOne />}</swiper-slide>
        <swiper-slide>{<SlideTwo />}</swiper-slide>
        <swiper-slide>{<SlideThree />}</swiper-slide>
        <swiper-slide>{<SlideFour />}</swiper-slide>
        <swiper-slide>{<SlideFive />}</swiper-slide>
        <swiper-slide>{<SlideSix />}</swiper-slide>
        <swiper-slide>{<SlideSeven />}</swiper-slide>
      </swiper-container>
    </div>
  );
}

export default Homepage;
