import React from "react";
import { Tagline, Title, Description, Footer } from "../../components";
import { Form } from "../../containers";
import { AiOutlineMail } from "react-icons/ai";
import { CiLocationArrow1 } from "react-icons/ci";

import "./slideSeven.css";

function SlideSeven() {

  return (
    <div className="bguest__slideSeven">
      <div className="bguest__slideSeven-body">
        <div className="bguest__slideSeven-body-contents">
          <Tagline text="DON'T BE SHY" />
          <Title
            firstLineText="Let's Connect"
            secondLineText=""
            thirdLineText=""
            highlightedWord="Connect"
          />
          <div className="bguest__slideSeven-body-contents-description">
          <div className="description">
          <AiOutlineMail/>
          <Description text="contact@bguest.xyz" />
          </div>
          <div className="description">
          <CiLocationArrow1/>
          <Description text="House: 1355, East-Shewrapara, Kafrul, Dhaka, Bangladesh" />
          </div>
          </div>
          <div className="bguest__slideSeven-body-contents-form">
          <Tagline text="KNOCK US" />
          <Form/>
          </div>
        </div>
        <div className="bguest__slideSeven-body-map">
        <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29200.79925768321!2d90.35836495656883!3d23.815046123229152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1fdc8ed102d%3A0xca637867ba8c1598!2sDevs%20Core!5e0!3m2!1sen!2sbd!4v1676397478601!5m2!1sen!2sbd" width="100%" height="100%" style={{border:0}} allowfullscreen="false" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <div className="bguest__slideSeven-footer">
      <Footer slideNo='VII'/>
      </div>
    </div>
  );
}

export default SlideSeven;
