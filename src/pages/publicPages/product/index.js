import axios from "axios";
import ProductDetailsCarousel from "../../../components/ProductDetailsCarousel";
import React, { useCallback, useEffect, useState } from "react";
import ApiRouteList from "../../../constants/ApiRoute.constants";
import { Button, Modal, notification } from "antd";
import { useParams } from "react-router-dom";
import moment from "moment";
import Storage from "../../../services/Storage.services";

const Product = () => {
  const params = useParams();

  const [productData, setProductData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const UserData = Storage.getUserData();

  const getData = useCallback(async () => {
    try {
      const { data, status } = await axios.get(
        `http://localhost:8000${ApiRouteList.GETLIST}/${params.id}`
      );
      if (status === 200) {
        setProductData(data.data);
      }
    } catch (err) {
      notification.error({
        message: "Product",
        description: err.response.data.message || "SERVER ERROR",
      });
    }
  }, [params.id]);

  useEffect(() => {
    getData();
  }, [getData]);

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex py-20 container flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
        {/* left column start */}
        <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
          <ProductDetailsCarousel
            images={
              productData &&
              productData.productDetails &&
              productData.productDetails[0].images
            }
          />
        </div>
        {/* left column end */}

        {/* right column start */}
        <div className="flex-[1] py-3">
          {/* PRODUCT TITLE */}
          <div className="text-[34px] font-semibold mb-2 leading-tight">
            {productData.name}
          </div>

          {/* PRODUCT SUBTITLE */}
          <div className="text-lg font-semibold mb-5">
            {productData &&
              productData.category &&
              capitalizeFirstLetter(productData.category[0].name)}
          </div>

          {/* PRODUCT PRICE */}
          <div className="flex items-center">
            <p className="mr-2 text-lg font-semibold">
              MRP : &#8377;
              {productData &&
                productData.productDetails &&
                productData.productDetails[0].price}
            </p>
          </div>

          <div className="text-md font-medium text-black/[0.5]">
            incl. of taxes
          </div>

          <div className="text-mg mt-5 text-black/[0.5]">
            Location:-{" "}
            {productData &&
              productData.location &&
              `${productData.location[0].city}, ${productData.location[0].state}, ${productData.location[0].postal}`}
          </div>

          <div className="text-md mt-5 text-black/[0.5]">
            Posted At:-{" "}
            {productData &&
              productData.productDetails &&
              moment(productData.productDetails[0].time).format("YYYY-MM-DD")}
          </div>
          <div>
            {UserData ? (
              <>
                <Button className="mt-4" onClick={showModal}>
                  Contact Seller
                </Button>
                <Modal
                  title="Seller Information"
                  open={isModalOpen}
                  onOk={handleOk}
                  okButtonProps={{ style: { backgroundColor: "black" } }}
                  onCancel={handleCancel}
                >
                  <p>Email:- {productData && productData.phoneNumber}</p>
                  <p>Phone Number:- {productData && productData.email} </p>
                </Modal>
              </>
            ) : (
              <p className="mt-4">
                To get User Contact Details, you need to sign in or to create
                your account
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
