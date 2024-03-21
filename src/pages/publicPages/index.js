import React from "react";
import { Route, Routes } from "react-router-dom";
import Allcategories from "./allcategories";
import RouteList from "../../constants/Route.constants";
import Product from "./product";
import Home from "./home";
import Post from "./post";
import Career from "./career";
import Aboutus from "./aboutus";
import Result from "./result";

const Pages = ({ items, categoryList }) => {

  return (
    <Routes>
      <Route path={RouteList.MAIN} element={<Home items={items} categoryList={categoryList} />} />
      <Route path={RouteList.ALLCATEGORIES} element={<Allcategories categoryList={categoryList} />} />
      <Route path={RouteList.PRODUCTID} element={<Product />} />
      <Route path={RouteList.ABOUTUS} element={<Aboutus />} />
      <Route path={RouteList.POST} element={<Post categoryList={categoryList} items={items} />} />
      <Route path={RouteList.CAREER} element={<Career />} />
      <Route path={RouteList.LIST} element={<Result categoryList={categoryList} />} />

    </Routes>
  );
};

export default Pages;
