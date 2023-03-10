import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { LOGIN } from "../helpers/Constants";

const useAuth = (token) => {
  let loggedInObj = { loggedIn: false };
  if (token || localStorage.getItem("saveToken")) {
    loggedInObj = { loggedIn: true };
  }

  const user = loggedInObj;
  return user && user.loggedIn;
};

const ProtectedRoutes = ({ token }) => {
  const isAuth = useAuth(token);
  return isAuth ? <Outlet /> : <Navigate to={LOGIN} replace={true} />;
};

export default ProtectedRoutes;
