import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  ROOT,
  DASHBOARD,
  OVERVIEW,
  PRICING,
  ABOUT,
  CONTACT,
  LOGIN,
  GUEST_LIST,
  GUEST_REVIEW,
  UNIQUE_GUEST_DATA,
} from "../helpers/Constants";
import {
  Homepage,
  Overview,
  Pricing,
  About,
  Contact,
  Login,
  Dashboard,
} from "../pages";
import ProtectedRoutes from "./ProtectedRoutes";
import { GuestAnalysis, GuestList, GuestReview, UniqueGuestData } from "../containers";

export const RouterConfig = () => {
  const isToken = useSelector((state) => state.isToken);

  return (
    <Routes>
      <Route exact path={ROOT} element={<Homepage />} />
      <Route exact path={OVERVIEW} element={<Overview />} />
      <Route exact path={PRICING} element={<Pricing />} />
      <Route exact path={ABOUT} element={<About />} />
      <Route exact path={CONTACT} element={<Contact />} />
      <Route exact path={LOGIN} element={<Login />} />
      <Route element={<ProtectedRoutes token={isToken} />}>
        <Route exact path={DASHBOARD} element={<Dashboard />}>
          <Route path={DASHBOARD} element={<GuestAnalysis/>} />
          <Route exact path={GUEST_LIST} element={<GuestList/>}/>
          <Route exact path={GUEST_REVIEW} element={<GuestReview/>} />
        </Route>
        <Route exact path={UNIQUE_GUEST_DATA} element={<UniqueGuestData/>}/>
      </Route>
      <Route path="*" element={<Navigate to={ROOT} />} />
    </Routes>
  );
};

export default RouterConfig;
