import React, { useEffect } from "react";
import { Footer, Header } from "../components";
import Pages from "../pages/publicPages";
import { useDispatch, useSelector } from "react-redux";
import { retrieveLocation } from "../redux/slice/locationSlice";
import { retrieveCategory } from "../redux/slice/categorySlice";

const Main = () => {


  const dispatch = useDispatch();

  const location = useSelector((state) => state.getLocationData.locationData);
    const categoryList = useSelector((state) => state.getCategoryData.categoryData
  );

  useEffect(() => {
    dispatch(retrieveLocation());    
    dispatch(retrieveCategory());
  }, [dispatch]);

  const items = location.map((item) => ({
    label: item.city,
    key: item._id,
    url : item.city.toLowerCase()
  }));
  return (
    <>
      <Header items={items}  />
      <Pages items={items} categoryList={categoryList} />
      <Footer />
    </>
  );
};

export default Main;
