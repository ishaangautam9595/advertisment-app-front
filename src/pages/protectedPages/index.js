import React from "react";
import { Route, Routes } from "react-router-dom";
import RouteList from "../../constants/Route.constants";
import Profile from "./profile";

const ProtectedPages = () => {

  return (
    <Routes>
      <Route path={RouteList.PROFILE} element={<Profile />} />
    </Routes>
  );
};

export default ProtectedPages;
