import React from "react";
import { Link } from "react-router-dom";
import noImage from "../assets/Not.png";
import moment from "moment";

const Cards = ({ data }) => {
  return (
    <>
      {data && data.map((data, index) => (
        <div key={index}>
          <Link to={`/products/${data._id}`}>
            <div className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer border-none w-full">
              <img
                width={500}
                height={500}
                alt="shoes"
                className="MenuImage"
                src={
                  data.productDetails && data.productDetails[0].images
                    ? data.productDetails[0].images[0]
                    : noImage
                }
              />
              <div className="p-4 text-black/[0.9]">
                <h2 className="text-lg font-medium">{data.name}</h2>
                <div className="flex items-center text-black/[0.5]">
                  <p className="mr-2 text-lg font-semibold mb-2">
                    &#8377;
                    {data.productDetails && data.productDetails[0]
                      ? data.productDetails[0].price
                      : 100}
                  </p>
                </div>

                <div className="text-sm">
                  <p className="text-gray-900 leading-none">{data.email}</p>
                  <p className="text-gray-600">
                    {moment(data.date).format("DD MMM")}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default Cards;
