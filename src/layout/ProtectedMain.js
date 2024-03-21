import React, { useEffect } from "react";
import { Footer, Header } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { retrieveLocation } from "../redux/slice/locationSlice";
import { retrieveCategory } from "../redux/slice/categorySlice";
import ProtectedPages from "../pages/protectedPages";

const ProtectedMain = () => {
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
      <Header items={items} />
      <ProtectedPages items={items} categoryList={categoryList} />
      <Footer items={items} />
    </>
  );
};

export default ProtectedMain;
