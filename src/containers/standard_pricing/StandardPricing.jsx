import React from 'react';
import { Button, PricePoint } from '../../components';
import { OpenLinkNewTab } from '../../helpers/Functions';
import './standardPricing.css';

function StandardPricing({price})  {
  
    return (
      <div className="bguest__standardPricing">
      <h2>Standard</h2>
      <h3>For Growing Restaurants</h3>
      <div className='bguest__standardPricing-price'>
        <p>{price}</p>
      </div>
      <h3>Per Branch</h3>
      <div className='bguest__standardPricing-button'>
      <Button
      width="80%"
      height="50px"
      borderRadius="25px"
      text="Schedule Meeting"
      fontSize="18px"
      onClick={() => OpenLinkNewTab("https://calendly.com/bguest-ai/meeting")}
      />
      </div>
      <div className='bguest__standardPricing-features'>
      <div className='feature'><PricePoint color="#006400" text="1 Free Router"/></div>
      <div className='feature'><PricePoint color="#006400" text="Auto WiFi Login Firmware"/></div>
      <div className='feature'><PricePoint color="#006400" text="Analytics Dashboard"/></div>
      <div className='feature'><PricePoint color="#006400" text="Guest History"/></div>
      <div className='feature'><PricePoint color="#006400" text="Unlimited Email Marketing with GMass"/></div>
      <div className='feature'><PricePoint color="#006400" text="3000 SMS Marketing per Month"/></div>
      </div>
      </div>
    );
  };
  
  export default StandardPricing;