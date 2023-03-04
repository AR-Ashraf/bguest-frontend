import React,{useState} from "react";
import { Player } from '@lottiefiles/react-lottie-player';
import { InView } from "react-intersection-observer";
import { Tagline, Title, Description, ThumbAnimation, FeatureBulletRight, FeatureBulletLeft, Button, Placeholder, FooterSecondary } from "../../components";
import {Demo} from '../../containers';
import { OpenLink } from "../../helpers/Functions";
import analytics from "../../assets/animations/analytics.json";
import email from "../../assets/animations/email.json";
import sms from "../../assets/animations/sms.json";
import router_login from "../../assets/animations/router_login.json";
import ai from "../../assets/animations/ai.json";
import login from "../../assets/animations/bguest_login.json";
import "./overview.css";

function Overview() {
  const [smsInView, setSmsInView] = useState(false);
  const [loginInView, setLoginInView] = useState(false);
  const [aiInView, setAiInView] = useState(false);

  return (
    <div className="bguest__overview">
    {/*---------- First Screen Banner Portion ------------*/}

      <div className="bguest__overview-banner">
        <Tagline text="GUESS WHAT?" />
        <Title firstLineText="Only Software You Need" highlightedWord="Need" />
        <Title
          firstLineText="To Keep Your Guests Happy"
          highlightedWord="Guests"
        />
        <Description text="Our Secret Ingredient Is Pretty Simple" />
        <div className="bguest__overview-banner-animations">
          <div className="animation">
            <ThumbAnimation player={analytics} text="Guest Analytics" />
          </div>
          <div className="animation">
            <ThumbAnimation player={email} text="Email Marketing" />
          </div>
          <div className="animation">
            <ThumbAnimation player={sms} text="SMS Marketing" />
          </div>
          <div className="animation">
            <ThumbAnimation player={router_login} text="Auto WiFi Login" />
          </div>
          <div className="animation">
            <ThumbAnimation player={ai} text="Artificial Intelligence" />
          </div>
        </div>
        <div className="bguest__overview-banner-bottom">
          <Description text="With us, your Guests are getting Personalized Experience of your Restaurant" />
          <Description text="And you are generating more Revenue" />
        </div>
      </div>

      {/*---------- Guest Analytics Feature Details ------------*/}

      <div className="bguest__overview-analytics">
        <div className="bguest__overview-analytics-title">
          <Title firstLineText="Guest Analytics" />
        </div>
        <div className="bguest__overview-analytics-subTitle">
        <Description text="Each Guest is different & experiences your restaurant differently. To serve your guests better, you need to know every guest and remember their preferences. That's where we come in"/>
        </div>

        <div className="bguest__overview-analytics-contents">
          <div className="bguest__overview-analytics-contents-video">
            <iframe
              src="https://www.youtube.com/embed/E7wJTI-1dvQ"
              width="700px"
              height="400px"
              frameborder="0"
              allow="encrypted-media"
              allowfullscreen="true"
              title="video"
            />
          </div>
          <div className="bguest__overview-analytics-contents-benefits">
            <div className="bguest__overview-analytics-contents-benefits-tag">
            <Tagline text="YOU ARE GETTING" />
            </div>
            <div className="bguest__overview-analytics-contents-benefits-points">
            <div className="point">
            <FeatureBulletRight text="Unique Guest Information"/>
            </div>
            <div className="point">
            <FeatureBulletRight text="Guest arrival dates & times"/>
            </div>
            <div className="point">
            <FeatureBulletRight text="Yearly, Monthly or Custom date analysis"/>
            </div>
            <div className="point">
            <FeatureBulletRight text="Guest Review History"/>
            </div>
            <div className="point">
            <FeatureBulletRight text="Auto Notification on Repeating Guest Arrival"/>
            </div>
            <div className="point">
            <FeatureBulletRight text="Present Guest Seating Arrangement"/>
            </div>
            </div>
          </div>
        </div>
      </div>

      {/*-------- Email Marketing Feature Details ----------*/}

      <div className="bguest__overview-email">
        <div className="bguest__overview-email-title">
          <Title firstLineText="Email Marketing" />
        </div>
        <div className="bguest__overview-email-subTitle">
        <Description text="Keep your Guests informed about the amazing things happening in your restaurant through Emails"/>
        </div>

        <div className="bguest__overview-email-contents">
          <div className="bguest__overview-email-contents-benefits">
            <div className="bguest__overview-email-contents-benefits-tag">
            <Tagline text="YOU ARE GETTING" />
            </div>
            <div className="bguest__overview-email-contents-benefits-points">
            <div className="point">
            <FeatureBulletLeft text="Unlimited Emails using GMass"/>
            </div>
            <div className="point">
            <FeatureBulletLeft text="Email Campaign Analytics"/>
            </div>
            <div className="point">
            <FeatureBulletLeft text="All the benefits of GMass Standard Package"/>
            <div className="point">
            <Button text="Learn More" onClick={() => OpenLink("https://www.gmass.co/pricing")}/>
            </div>
            </div>
            </div>
          </div>
          <div className="bguest__overview-email-contents-video">
            <iframe
              src="https://www.youtube.com/embed/lupMaUaQ1PE"
              width="700px"
              height="400px"
              frameborder="0"
              allow="encrypted-media"
              allowfullscreen="true"
              title="video"
            />
          </div>
        </div>
      </div>

      {/*--------------- SMS Feature Details ----------------*/}

      <div className="bguest__overview-sms">
        <div className="bguest__overview-sms-title">
          <Title firstLineText="SMS Marketing" />
        </div>
        <div className="bguest__overview-sms-subTitle">
        <Description text="Send amazing offers & latest updates directly to your Guest's phone"/>
        </div>
        <div className="bguest__overview-sms-contents">
          <div className="bguest__overview-sms-contents-animation">
          <InView onChange={setSmsInView}>
            {({ ref, inView }) => (
              <div ref={ref}>
                {
                  inView
                  ? <Player
                      src={JSON.parse(JSON.stringify(sms))}
                      loop
                      autoplay
                      className="smsAnimation"
                      />
                :
                <Placeholder/>
                }
              </div>
            )}
          </InView>
          </div>
          <div className="bguest__overview-sms-contents-benefits">
            <div className="bguest__overview-sms-contents-benefits-tag">
            <Tagline text="YOU ARE GETTING" />
            </div>
            <div className="bguest__overview-sms-contents-benefits-points">
            <div className="point">
            <FeatureBulletLeft text="SMS with Masking"/>
            <Description text="Your Guests will receive SMS with your Brand Name"/>
            </div>
            <div className="point">
            <FeatureBulletLeft text="3000 SMS Per Month"/>
            <Description text="Every month you will be getting 3000 SMS in credit and these will remain valid for 1 year"/>
            </div>
            <div className="point">
            <FeatureBulletLeft text="On Demand SMS Credit"/>
            <Description text="Need more than 3000 SMS in a month? Just let us know and we will increase the credit instantly"/>
            </div>
            <div className="point">
            <FeatureBulletLeft text="SMS Campaigns in Bengali & English"/>
            <Description text="Without limitation, you can send SMS to your Guests in both Bengali & English language"/>
            </div>
  
            </div>
          </div>
        </div>
      </div>

      {/*---------- WiFi Login Feature Details -------------*/}

      <div className="bguest__overview-login">
        <div className="bguest__overview-login-title">
          <Title firstLineText="Auto WiFi Login" />
        </div>
        <div className="bguest__overview-login-subTitle">
        <Description text="Your Guests will use your restaurant's free WiFi & will get personalized experience in every service"/>
        </div>
        <div className="bguest__overview-login-contents">
          
          <div className="bguest__overview-login-contents-benefits">
            <div className="bguest__overview-login-contents-benefits-tag">
            <Tagline text="YOU ARE GETTING" />
            </div>
            <div className="bguest__overview-login-contents-benefits-points">
            <div className="point">
            <FeatureBulletLeft text="You Know Your Guest"/>
            <Description text="You will know the experiences your guests are having with your restaurant. You will be able to provide personalized service to your guests"/>
            </div>
            <div className="point">
            <FeatureBulletLeft text="Increase in Revenue"/>
            <Description text="With personalized service, your guests will be happier, your guest retention will increase & thus will your revenue"/>
            </div>
            <div className="point">
            <FeatureBulletLeft text="Target Marketing"/>
            <Description text="No more bad marketing. Directly market to your own guests by considering their personalized choices"/>
            </div>
            <div className="point">
            <FeatureBulletLeft text="Save Cost"/>
            <Description text="Restaurants usually spend $60 on WiFi with $0 in return. bGuest enables you to utilize that investment positively by opening a simple portal to connect with your guests. This saves huge budget on marketing and unnecessary offers"/>
            </div>
  
            </div>
          </div>

          <div className="bguest__overview-login-contents-animation">
          <InView onChange={setLoginInView}>
            {({ ref, inView }) => (
              <div ref={ref}>
                {
                  inView
                  ? <Player
                      src={JSON.parse(JSON.stringify(login))}
                      loop
                      autoplay
                      className="loginAnimation"
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

      {/*------------- Artificial Intelligence Feature Details --------------*/}

      <div className="bguest__overview-ai">
        <div className="bguest__overview-ai-title">
          <Title firstLineText="Artificial Intelligence" />
        </div>
        <div className="bguest__overview-ai-subTitle">
        <Description text="Your Guests will get AI Engineered experiences"/>
        </div>
        <div className="bguest__overview-ai-tag">
            <Tagline text="COMING SOON" />
            </div>
        <div className="bguest__overview-ai-contents">
          <div className="bguest__overview-ai-contents-animation">
          <InView onChange={setAiInView}>
            {({ ref, inView }) => (
              <div ref={ref}>
                {
                  inView
                  ? <Player
                      src={JSON.parse(JSON.stringify(ai))}
                      loop
                      autoplay
                      className="aiAnimation"
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

      {/*------------- Book A Demo Section ------------*/}

      <div className="bguest__overview-demo-booking">
        <Demo/>
      </div>


      {/*------------- Footer of the Page -------------*/}

      <FooterSecondary/>
    </div>
  );
}

export default Overview;
