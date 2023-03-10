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
        <Route exact path={DASHBOARD} element={<Dashboard />} />
      </Route>
      <Route path="*" element={<Navigate to={ROOT} />} />
    </Routes>
  );
};

export default RouterConfig;
