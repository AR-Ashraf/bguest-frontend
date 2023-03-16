import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { tokenAction } from "../../redux/actions";
import { Button, Tab } from "../../components";
import logo from '../../assets/images/logo.png';
import { DASHBOARD, GUEST_LIST, GUEST_REVIEW, ROOT } from "../../helpers/Constants";
import { FiPieChart} from "react-icons/fi";
import { BsPeople } from "react-icons/bs";
import { MdOutlineRateReview } from "react-icons/md";
import "./dashboard.css";


function Dashboard() {
  const dispatch = useDispatch();

  const SignOut = () =>{
    dispatch(tokenAction(""));
    localStorage.clear();
  };
 
  return (
    <div className="bguest__dashboard">
    <div className="bguest__dashboard-sidebar">
        <div className="bguest__dashboard-sidebar-logo">
        <NavLink to={ROOT} preventScrollReset={true}>
          <img src={logo} alt="bGuest Logo" />
        </NavLink>
        </div>
        <div className="bguest__dashboard-sidebar-tabs">
        <Tab width="100%" src={<FiPieChart/>} text="Guest Analysis" path={DASHBOARD}/>
        <Tab width="100%" src={<BsPeople/>} text="Guest List" path={GUEST_LIST}/>
        <Tab width="100%" src={<MdOutlineRateReview/>} text="Guest Review" path={GUEST_REVIEW}/>
        </div>
        <Button 
        width="100%" 
        height="3rem" 
        borderRadius="8px" 
        fontSize="16px" 
        text="Sign Out"
        onClick={SignOut}
        />
    </div>
    <div className="bguest__dashboard-body">
      <Outlet/>
    </div>
    </div>
  );
}

export default Dashboard;
