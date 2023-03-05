import React from 'react';
import { Button, PricePoint } from '../../components';
import { OpenLinkNewTab } from '../../helpers/Functions';
import tag from '../../assets/images/popular_tag.svg';
import './premiumPricing.css';

function PremiumPricing({price})  {
  
    return (
      <div className="bguest__premiumPricing">
      <div className='bguest__premiumPricing-tag'>
        <img src={tag} alt=""/>
      </div>
      <h2>Premium</h2>
      <h3>For Established Restaurants</h3>
      <div className='bguest__premiumPricing-price'>
        <p>{price}</p>
      </div>
      <h3>Per Branch</h3>
      <div className='bguest__premiumPricing-button'>
      <Button
      width="80%"
      height="50px"
      borderRadius="25px"
      text="Schedule Meeting"
      fontSize="18px"
      onClick={() => OpenLinkNewTab("https://calendly.com/bguest-ai/meeting")}
      />
      </div>
      <div className='bguest__premiumPricing-features'>
      <div className='feature'><PricePoint color="#006400" text="2 Free Routers"/></div>
      <div className='feature'><PricePoint color="#006400" text="Auto WiFi Login Firmware"/></div>
      <div className='feature'><PricePoint color="#006400" text="Analytics Dashboard"/></div>
      <div className='feature'><PricePoint color="#006400" text="Guest History"/></div>
      <div className='feature'><PricePoint color="#006400" text="Unlimited Email Marketing with GMass"/></div>
      <div className='feature'><PricePoint color="#006400" text="3000 SMS Marketing per Month"/></div>
      <div className='feature'><PricePoint color="#006400" text="Real-Time Guest Review System"/></div>
      <div className='feature'><PricePoint color="#006400" text="Get Notified on Repeating Guest Arrival"/></div>
      </div>
      </div>
    );
  };
  
  export default PremiumPricing;