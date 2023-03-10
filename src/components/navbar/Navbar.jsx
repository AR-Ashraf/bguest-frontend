import React from "react";
import logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  ROOT,
  LOGIN,
  OVERVIEW,
  PRICING,
  DASHBOARD,
} from "../../helpers/Constants";
import { menuAction } from "../../redux/actions";
import { AnimatedButton } from "..";
import { CgMenuRight } from "react-icons/cg";

import "./navbar.css";
import { OpenLinkNewTab } from "../../helpers/Functions";

const Navbar = () => {
  const dispatch = useDispatch();
  const isMenu = useSelector((state) => state.isMenu);
  const isToken = useSelector((state) => state.isToken);

  return (
    <div className="bguest__navbar">
      <div className="bguest__navbar-logo">
        <NavLink to={ROOT} preventScrollReset={true}>
          <img src={logo} alt="bGuest Logo" />
        </NavLink>
      </div>
      <div className="bguest__navbar-menu">
        <NavLink
          to={OVERVIEW}
          preventScrollReset={true}
          activeClassName="active"
        >
          Product Overview
        </NavLink>
        <NavLink
          to={PRICING}
          preventScrollReset={true}
          activeClassName="active"
        >
          Pricing
        </NavLink>
        {isToken || localStorage.getItem("saveToken") ? (
          <NavLink
            to={DASHBOARD}
            preventScrollReset={true}
            activeClassName="active"
          >
            Dashboard
          </NavLink>
        ) : (
          <NavLink
            to={LOGIN}
            preventScrollReset={true}
            activeClassName="active"
          >
            Log In
          </NavLink>
        )}

        <AnimatedButton
          width="150px"
          height="60px"
          text="Demo"
          fontSize="14px"
          onClick={() =>
            OpenLinkNewTab("https://calendly.com/bguest-ai/meeting")
          }
        />
        <CgMenuRight
          className="bguest__navbar-menu-button"
          onClick={() => dispatch(menuAction(!isMenu))}
        />
      </div>
    </div>
  );
};

export default Navbar;
