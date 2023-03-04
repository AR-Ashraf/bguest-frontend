import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { ABOUT, OVERVIEW, PRICING, CONTACT } from "../../helpers/Constants";
import { waitForm, OpenLinkNewTab } from "../../helpers/Functions";
import { menuAction } from "../../redux/actions";
import { RiCloseLine } from "react-icons/ri";
import { BsFacebook, BsLinkedin, BsInstagram } from "react-icons/bs";
import AnimationImage from "../../assets/images/menu_animation.svg";
import "./menu.css";

function Menu() {
  const dispatch = useDispatch();
  const isMenu = useSelector((state) => state.isMenu);
  const [animate, setAnimate] = useState(false);

  async function slideOutAnimation() {
    setAnimate(true);
    await waitForm(500);
    dispatch(menuAction(!isMenu));
  }

  return ReactDOM.createPortal(
    <div
      className={
        animate ? "bguest__menu-bg-slideOut" : "bguest__menu-bg-slideIn"
      }
      id="bguest__menu-bg"
      key={animate}
    >
      <RiCloseLine
        className="bguest__menu-close-button"
        onClick={() => slideOutAnimation()}
      />
      <div className="bguest__menu-body">
        <div className="bguest__menu-body-menus">
          <NavLink
            to={ABOUT}
            preventScrollReset={true}
            className={({isActive}) => (isActive ? 'active' : null)}
            // activeClassName="active"
            onClick={() => slideOutAnimation()}
          >
            Our Story
          </NavLink>
          <NavLink
            to={OVERVIEW}
            preventScrollReset={true}
            className={({isActive}) => (isActive ? 'active' : null)}
            // activeClassName="active"
            onClick={() => slideOutAnimation()}
          >
            Product Overview
          </NavLink>
          <NavLink
            to={PRICING}
            preventScrollReset={true}
            className={({isActive}) => (isActive ? 'active' : null)}
            // activeClassName="active"
            onClick={() => slideOutAnimation()}
          >
            Pricing
          </NavLink>
          <NavLink
            to={CONTACT}
            preventScrollReset={true}
            className={({isActive}) => (isActive ? 'active' : null)}
            // activeClassName="active"
            onClick={() => slideOutAnimation()}
          >
            Contact Us
          </NavLink>
        </div>
        <div className="bguest__menu-body-animation">
          <img src={AnimationImage} alt="bGuest Menu Animation" />
        </div>
      </div>
      <div className="bguest__menu-footer">
        <div className="bguest__menu-footer-social">
          <h1>CONNECT WITH US</h1>
          <div className="bguest__menu-footer-social-icons">
            <BsLinkedin onClick={() => {OpenLinkNewTab("https://www.linkedin.com/company/devs-core/")}}/>
            <BsFacebook onClick={() => {OpenLinkNewTab("https://www.facebook.com/devs.core.company")}}/>
            <BsInstagram onClick={() => {OpenLinkNewTab("https://www.instagram.com/devs_core/")}}/>
          </div>
        </div>
        <div className="bguest__menu-footer-copyright">
          <h1>Copyright 2023 All Rights Reserved © bGuest</h1>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}

export default Menu;
