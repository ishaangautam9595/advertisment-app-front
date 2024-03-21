import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Storage from "../services/Storage.services";

const ProtectedRoute = ({ children, redirectPage }) => {

  console.log('ProtectedRouteProtectedRoute', Storage.getUserData());

  if (!Storage.getUserData()) {
    return <Navigate to={redirectPage} replace />;
  }
  return children ? children : <Outlet />;
};

export default ProtectedRoute;
