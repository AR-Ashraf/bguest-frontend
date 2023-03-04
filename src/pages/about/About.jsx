import React from "react";
import { GiGiftOfKnowledge } from "react-icons/gi";
import { MdTipsAndUpdates } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";
import { Tagline, Title, Description, ImageInfoBox, FooterSecondary } from "../../components";
import { Demo } from "../../containers";
import { OpenLinkNewTab } from "../../helpers/Functions";
import mission from '../../assets/images/mission.svg';
import vision from '../../assets/images/vision.svg';
import "./about.css";

function About() {
  return (
    <div className="bguest__about">
      {/*---------- First Screen Banner Portion ------------*/}

      <div className="bguest__about-banner">
        <Tagline text="WHAT'S THE RECIPE?" />
        <Title
          firstLineText="Experience Is The Secret Ingredient"
          highlightedWord="Experience"
        />
        <Title
          firstLineText="To Keep Your Guests Happy"
          highlightedWord="Guests"
        />
        <div className="bguest__about-banner-pillars">
          <ImageInfoBox
            image={<GiGiftOfKnowledge />}
            title="Know Thy Guest"
            description="Amazing things can happy only when you know your Guests"
          />
          <ImageInfoBox
            image={<MdTipsAndUpdates />}
            title="Change For Guest"
            description="Update the experience your Guests want"
          />
          <ImageInfoBox
            image={<FaHandsHelping />}
            title="Serve Thy Guest"
            description="The better you serve, the better you grow"
          />
        </div>
        <div className="bguest__about-banner-bottom">
          <Description text="If you have a good experience in a restaurant, you tell 2 people. If you have a bad experience, you tell 10 people." />
          <div className="bguest__about-banner-bottom-quote" onClick={() => OpenLinkNewTab("https://en.wikipedia.org/wiki/Anthony_Bourdain")}>
          <Description text="Said By - Anthony Bourdain" />
          </div>
        </div>
      </div>

      {/*------------- Mission Statement --------------*/}

      <div className="bguest__about-mission">
        <div className="bguest__about-mission-contents">
          <div className="bguest__about-mission-contents-title">
            <h1>Mission</h1>
          </div>
          <div className="bguest__about-mission-contents-description">
            <Description text="bGuest is on a mission to revolutionize the hospitality industry in Bangladesh. We know that in this day and age, guests expect personalized service, and we're committed to providing just that through our one-stop, guest-centric platform for restaurants. Through our platform, restaurants can provide service exactly tailored to their guests' preferences. We're not only helping restaurants grow their revenue, but we're also creating a win-win situation for everyone involved. As a startup, we're excited to bring our innovative approach to the market and can't wait to see the positive impact we'll make on the industry. Get ready to experience the future of hospitality with bGuest!"/>
          </div>
        </div>
        <div className="bguest__about-mission-image">
            <img src={mission} alt="Mission Cover of bGuest"/>
        </div>
      </div>

      {/*------------- Vision Statement --------------------*/}

      <div className="bguest__about-vision">
      <div className="bguest__about-vision-image">
            <img src={vision} alt="Vision Cover of bGuest"/>
        </div>
        <div className="bguest__about-vision-contents">
          <div className="bguest__about-vision-contents-title">
            <h1>Vision</h1>
          </div>
          <div className="bguest__about-vision-contents-description">
            <Description text="At bGuest, we're dreaming of a world where restaurant owners can make daily business decisions with the help of artificial intelligence. With our innovative technology, we're creating a future where menus are tailored to each guest's preferences, staffing decisions are optimized for maximum efficiency, and personalized marketing strategies are implemented to reach the right customers at the right time. But it's not just about the business side of things - in this world, guests are treated like family. We envision a future where every guest feels truly cared for, with their unique health concerns and dietary needs taken into consideration with every meal."/>
          </div>
        </div>
      </div>

      {/*-------------- Demo Booking Section ----------------*/}

      <div className="bguest__about-demo">
        <Demo/>
      </div>

      {/*------------- Footer Section ----------------*/}
      <FooterSecondary/>
    </div>
  );
}

export default About;
