import React from 'react';
import { Button, PricePoint } from '../../components';
import { OpenLinkNewTab } from '../../helpers/Functions';
import './basicPricing.css';

function BasicPricing({price})  {
  
    return (
      <div className="bguest__basicPricing">
      <h2>Basic</h2>
      <h3>For New Restaurants</h3>
      <div className='bguest__basicPricing-price'>
        <p>{price}</p>
      </div>
      <h3>Per Branch</h3>
      <div className='bguest__basicPricing-button'>
      <Button
      width="80%"
      height="50px"
      borderRadius="25px"
      text="Schedule Meeting"
      fontSize="18px"
      onClick={() => OpenLinkNewTab("https://calendly.com/bguest-ai/meeting")}
      />
      </div>
      <div className='bguest__basicPricing-button-tablet'>
      <Button
      width="100%"
      height="50px"
      borderRadius="25px"
      text="Schedule Meeting"
      fontSize="16px"
      onClick={() => OpenLinkNewTab("https://calendly.com/bguest-ai/meeting")}
      />
      </div>
      <div className='bguest__basicPricing-features'>
      <div className='feature'><PricePoint color="#006400" text="1 Free Router"/></div>
      <div className='feature'><PricePoint color="#006400" text="Auto WiFi Login Firmware"/></div>
      <div className='feature'><PricePoint color="#006400" text="Analytics Dashboard"/></div>
      <div className='feature'><PricePoint color="#006400" text="Guest History"/></div>
      </div>
      </div>
    );
  };
  
  export default BasicPricing;