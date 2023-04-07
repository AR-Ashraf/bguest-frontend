import React from "react";
import logo from "../../assets/images/logo_white.svg";
import { OpenLinkNewTab, OpenLink } from "../../helpers/Functions";
import { BsFacebook, BsLinkedin, BsInstagram } from "react-icons/bs";
import "./footerSecondary.css";

function FooterSecondary(props) {
  return (
    <div className="bguest__footerSecondary">
      <div className="bguest__footerSecondary-logo">
        <img src={logo} alt="bGuest White Logo" />
      </div>
      <div className="bguest__footerSecondary-permalinks">
        <div className="bguest__footerSecondary-permalinks-social">
          <div className="bguest__footerSecondary-permalinks-social-icons">
            <BsLinkedin onClick={() => {OpenLinkNewTab("https://www.linkedin.com/company/devs-core/")}}/>
            <BsFacebook onClick={() => {OpenLinkNewTab("https://www.facebook.com/devs.core.company")}}/>
            <BsInstagram onClick={() => {OpenLinkNewTab("https://www.instagram.com/devs_core/")}}/>
          </div>
        </div>
        <div className="bguest__footerSecondary-permalinks-extras">
          <h1>© bGuest 2023 All Rights Reserved</h1>
          <p onClick={() => {OpenLink("https://insight.bguest.ai/privacy-policy/")}}>Privacy Policy</p>
          <p onClick={() => {OpenLink("https://insight.bguest.ai/terms-conditions/")}}>Terms & Conditions</p>
          <p onClick={() => {OpenLink("https://insight.bguest.ai/cookie-policy/")}}>Cookie Policy</p>
        </div>
      </div>
    </div>
  );
}

export default FooterSecondary;
