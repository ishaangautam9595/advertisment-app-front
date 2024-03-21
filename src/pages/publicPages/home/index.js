import Categories from "../../../components/Categories";
import List from "../../../components/List";
import React, { useCallback, useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Select, notification } from "antd";
import { createSearchParams, useNavigate } from "react-router-dom";
import ApiRouteList from "../../../constants/ApiRoute.constants";
import axios from "axios";
import { Link } from "react-router-dom";
import noImage from "../../../assets/Not.png";
import moment from "moment";

const Home = ({items, categoryList}) => {
  const {Option} = Select;
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Category");
  const navigate = useNavigate();
  const [productList, setProductList] = useState([]);


  const handleChange = (value) => {
    setCategory(value);
  };

  const Location = localStorage.getItem("Location");
  const transformedItems = [];

  categoryList.forEach((category) => {
    const transformedCategory = {
      key: category._id,
      label: category.name,
      children: [],
    };

    // Check if the category has subcategories
    if (category.subcategories && category.subcategories.length > 0) {
      category.subcategories.forEach((subcategory) => {
        transformedCategory.children.push({
          key: subcategory.name,
          label: subcategory.name,
        });
      });
    }

    transformedItems.push(transformedCategory);
  });

  const handleClick = () => {
    if (!Location) {
      localStorage.setItem("Location", "India");
    }
    if (search !== "") {
      navigate({
        pathname: "/list",
        search: `?${createSearchParams({
          location: Location,
          search: search,
          category: category,
        })}`,
      });
    }
  };

  const getData = useCallback(async () => {
    try {
      const { data, status } = await axios.get(
        `http://localhost:8000${ApiRouteList.GETLIST}?category=All+Category&search=&location=All+Location`
      );
      if (status === 200) {
        setProductList(data.data);
      }
    } catch (err) {
      notification.error({
        message: "Product List",
        description: err.response.data.message || "SERVER ERROR",
      });
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  return (
    <>
      <div className="bg-white container">
        <div className="flex mt-14">
        <Select
        style={{ width: 200 }}
        placeholder="Select a city"
        onChange={handleChange}
        value={category}
      >
        {transformedItems.map(item => (
          <Option key={item.key} value={item.key}>
            {item.label}
          </Option>
        ))}
      </Select>

          <div className="relative w-full">
            <input
              type="search"
              id="search-dropdown"
              className="block p-2.5 focus:outline-none w-full z-20 text-sm text-gray-900 bg-white rounded-r-lg border-l-gray-100 border-l-2 border border-gray-300 dark:placeholder-gray-400"
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              type="submit"
              className="absolute top-0 right-0 p-2.5 h-full text-sm font-medium text-white bg-gray-800 rounded-r-lg border focus:ring-4 focus:outline-none"
              onClick={handleClick}
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </button>
          </div>
        </div>
        <h1 className="font-bold text-2xl text-center mt-8 ">Famous Cities</h1>
        <List items={items} />
        <h1 className="font-bold text-2xl text-center mt-8 ">Categories</h1>
        <Categories />
        {/* <Carousal /> */}
        <h1 className="font-bold text-2xl text-center mt-8 ">Top Picks</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-14 px-5 md:px-0">
        {shuffle(productList).map((data, index) => (
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
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Home;
