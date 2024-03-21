import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import RouteList from "../constants/Route.constants";
import Storage from "../services/Storage.services";

const PublicRoute = ({ children, user }) => {
  
  if (Storage.getUserData()) {
    const dashboard = RouteList.MAIN.split("/")
      .filter((x) => x !== "*")
      .join("");
    return <Navigate to={`/${dashboard}`} replace />;
  }
  return children ? children : <Outlet />;
};
export default PublicRoute;
