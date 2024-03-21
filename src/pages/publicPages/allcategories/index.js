import React from "react";
import {Link} from 'react-router-dom'
import ApiRouteList from "../../../constants/ApiRoute.constants";
import axios from "axios";
import { notification } from "antd";
const Allcategories = ({categoryList}) => {

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const handleLink = async (cat) => {
    try {
      const { status } = await axios.get(
        `http://localhost:8000${ApiRouteList.GETLIST}?category=${cat}&search=&location=All+Location`
      );
      if (status === 200) {
      }
    } catch (err) {
      notification.error({
        message: "Product List",
        description: err.response.data.message || "SERVER ERROR",
      });
    }
  }
  return (
    <>
      <div className="container">
        <div
          className="bg-cover bg-center h-auto text-white text-right py-60 px-10 object-fill"
          style={{
            backgroundColor: "#374151",
          }}
        >
          <p className="text-3xl font-bold text-center">All Categories</p>
        </div>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 ml-10 gap-5">
          {categoryList &&
            categoryList.map((cat) => (
              <div className="mt-4">
                <Link onClick={() => handleLink(cat._id)} to= {`/list?location=All+Location&search=&category=${cat._id}`}>
                <h2 className="mb-6 text-lg font-semibold text-gray-900 cursor-pointer">
                  {capitalizeFirstLetter(cat.name)}
                </h2>
                </Link>
                <ul className="max-w-md mb-6 space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                  {cat &&
                    cat?.subcategories &&
                    cat?.subcategories?.map((sub) => {
                      return (
                      <li className="list-none text-left">{sub.name}</li>
                        )
                    })}
                </ul>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Allcategories;
