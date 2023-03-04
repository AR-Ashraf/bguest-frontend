import React from 'react';
import logo from "../../assets/images/logo.png";
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {ROOT, LOGIN, OVERVIEW, PRICING} from "../../helpers/Constants";
import {menuAction} from "../../redux/actions";
import { Button } from '..';
import {AnimatedButton} from '..';
import { CgMenuRight } from 'react-icons/cg';


import './navbar.css';


const Navbar = () => {
  const dispatch = useDispatch();
  const isMenu = useSelector(state => state.isMenu)
  

  
  return (
    <div className="bguest__navbar">
        <div className="bguest__navbar-logo">
            <NavLink to={ROOT} preventScrollReset={true}>
              <img src={logo} alt="bGuest Logo"/>
            </NavLink>
        </div>
        <div className="bguest__navbar-menu">
          <NavLink to={OVERVIEW} preventScrollReset={true} activeClassName="active">Product Overview</NavLink>
          <NavLink to={PRICING} preventScrollReset={true} activeClassName="active">Pricing</NavLink>
          <NavLink to={LOGIN} preventScrollReset={true} activeClassName="active">Log In</NavLink>
          {/* <Button text="Log In"/> */}
          <AnimatedButton/>
          <CgMenuRight  className="bguest__navbar-menu-button"  onClick={() => dispatch(menuAction(!isMenu))} />
       
        </div>
    </div>
  );
};



export default Navbar;
