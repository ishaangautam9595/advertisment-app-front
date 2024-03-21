import React, { useCallback, useEffect, useState } from "react";
import noImage from "../../../assets/Not.png";
import { Select, notification } from "antd";
import {
  Link,
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import axios from "axios";
import ApiRouteList from "../../../constants/ApiRoute.constants";
import { useLocation } from "react-router-dom";
import Cards from "../../../components/Cards";
import Sidebar from "../../../components/Sidebar";
import MobileSidebar from "../../../components/mobileSidebar";
const moment = require("moment");

const Result = ({ categoryList }) => {
  const { Option } = Select;
  const [searchParams] = useSearchParams();
  const [show, setShow] = useState({ click: false });
  const [menuShow, setMenuShow] = useState({ click: true });
  const paramCategory = searchParams.get("category");
  const paramSearch = searchParams.get("search");
  const [search, setSearch] = useState(paramSearch);
  const [category, setCategory] = useState(paramCategory);
  const [productList, setProductList] = useState([]);
  const [cards, setCards] = useState(false);
  const [range, setRange] = useState(0);

  const handleChange = (value) => {
    setCategory(value);
  };

  const data = [
    {
      name: "Oldest",
      url: "oldest",

    },
    {
      name: "Newest",
      url: "newest",

    },
    {
      name: "Price: Low to High",
      url: "lowToHigh",

    },
    {
      name: "Price: High to Low",
      url: "highToLow",

    },
  ];

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const cardDisplay = () => {
    setCards(!cards);
  };

  // Get specific query parameters
  const locationParam = queryParams.get("location");
  const searchParam = queryParams.get("search");
  const categoryParam = queryParams.get("category");

  const getData = useCallback(async () => {
    try {
      const { data, status } = await axios.get(
        `http://localhost:8000${ApiRouteList.GETLIST}?category=${categoryParam}&search=${searchParam}&location=${locationParam}`
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
  }, [locationParam, searchParam, categoryParam]);

  useEffect(() => {
    getData();
  }, [getData]);

  const handleShowClick = () => {
    setShow({ ...show, click: !show.click });
  };

  const handleMenuClick = () => {
    setMenuShow({ ...menuShow, click: !menuShow.click });
  };

  const navigate = useNavigate();

  const handleClick = () => {
    if (search !== "") {
      navigate({
        pathname: "/list",
        search: `?${createSearchParams({
          search: search,
          category: category,
          location: locationParam,
        })}`,
      });
    }
  };

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
          key: subcategory._id,
          label: subcategory.name,
        });
      });
    }

    transformedItems.push(transformedCategory);
  });

  const handleLinkChange = async (values) => {
    try {
      const { data, status } = await axios.get(
        `http://localhost:8000${ApiRouteList.GETLIST}?category=${categoryParam}&search=${searchParam}&location=${locationParam}&sort=${values}`
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
  };

  return (
    <>
      <div className="container">
        <div className="flex py-10">
          <Select
            style={{ width: 200 }}
            placeholder="Select a city"
            onChange={handleChange}
            value={category}
          >
            {transformedItems.map((item) => (
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
              value={search}
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
        <div className="bg-white">
          <div>
            {menuShow.click === true ? (
              <MobileSidebar
                categoryList={categoryList}
                handleMenuClick={handleMenuClick}
                range={range}
                setRange={setRange}
                locationParam={locationParam}
                searchParam={searchParam}
                categoryParam={categoryParam}
                productList={productList}
                setProductList={setProductList}
                transformedItems={transformedItems}
              />
            ) : (
              <></>
            )}

            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex items-baseline justify-between pb-6 pt-4">
                <h1 className="text-2xl font-bold tracking-tight text-gray-500">
                  Result
                </h1>

                <div className="flex items-center">
                  <div className="relative inline-block text-left">
                    <div>
                      <button
                        type="button"
                        className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
                        id="menu-button"
                        aria-expanded="false"
                        aria-haspopup="true"
                        onClick={handleShowClick}
                      >
                        Sort
                        <svg
                          className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>

                    {show.click === true ? (
                      <div
                        className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="menu-button"
                        tabIndex="-1"
                      >
                        <div className="py-1" role="none">
                          {data.map((datas, i) => (
                            <Link
                            to = {`http://localhost:3000/list?location=${locationParam}&search=${searchParam}&category=${categoryParam}&sort=${datas.url}`}
                            onClick={() => handleLinkChange(datas.url)}
                            className="font-medium text-gray-900 block px-4 py-2 text-sm"
                            role="menuitem"
                            tabIndex="-1"
                            id="menu-item-0"
                            >
                              {datas.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                  {cards === true && (
                    <button
                      type="button"
                      onClick={cardDisplay}
                      className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
                    >
                      <span className="sr-only">View grid</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 92 92"
                        id="list"
                      >
                        <path d="M91.2 15c0 3.3-2.7 6-6 6H30.1c-3.3 0-6-2.7-6-6s2.7-6 6-6h55.1c3.3 0 6 2.7 6 6zM30.1 52h31.3c3.3 0 6-2.7 6-6s-2.7-6-6-6H30.1c-3.3 0-6 2.7-6 6s2.7 6 6 6zm44.2 19H30.1c-3.3 0-6 2.7-6 6s2.7 6 6 6h44.2c3.3 0 6-2.7 6-6s-2.6-6-6-6zM6.8 8.5c-1.7 0-3.4.7-4.6 1.9s-2 2.9-2 4.6.7 3.4 1.9 4.6c1.2 1.2 2.9 1.9 4.6 1.9s3.4-.7 4.6-1.9c1.2-1.2 1.9-2.9 1.9-4.6s-.7-3.4-1.9-4.6c-1.1-1.2-2.8-1.9-4.5-1.9zm0 31c-1.7 0-3.4.7-4.6 1.9s-2 2.9-2 4.6.7 3.4 1.9 4.6c1.2 1.2 2.9 1.9 4.6 1.9s3.4-.7 4.6-1.9c1.2-1.2 1.9-2.9 1.9-4.6s-.7-3.4-1.9-4.6c-1.1-1.2-2.8-1.9-4.5-1.9zm0 31c-1.7 0-3.4.7-4.6 1.9s-2 2.9-2 4.6.7 3.4 1.9 4.6c1.2 1.2 2.9 1.9 4.6 1.9s3.4-.7 4.6-1.9c1.2-1.2 1.9-2.9 1.9-4.6s-.7-3.4-1.9-4.6c-1.1-1.2-2.8-1.9-4.5-1.9z"></path>
                      </svg>
                    </button>
                  )}
                  {cards === false && (
                    <button
                      type="button"
                      onClick={cardDisplay}
                      className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
                    >
                      <span className="sr-only">View grid</span>
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.25 2A2.25 2.25 0 002 4.25v2.5A2.25 2.25 0 004.25 9h2.5A2.25 2.25 0 009 6.75v-2.5A2.25 2.25 0 006.75 2h-2.5zm0 9A2.25 2.25 0 002 13.25v2.5A2.25 2.25 0 004.25 18h2.5A2.25 2.25 0 009 15.75v-2.5A2.25 2.25 0 006.75 11h-2.5zm9-9A2.25 2.25 0 0011 4.25v2.5A2.25 2.25 0 0013.25 9h2.5A2.25 2.25 0 0018 6.75v-2.5A2.25 2.25 0 0015.75 2h-2.5zm0 9A2.25 2.25 0 0011 13.25v2.5A2.25 2.25 0 0013.25 18h2.5A2.25 2.25 0 0018 15.75v-2.5A2.25 2.25 0 0015.75 11h-2.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  )}
                  <button
                    type="button"
                    className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                    onClick={handleMenuClick}
                  >
                    <span className="sr-only">Filters</span>
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <section
                aria-labelledby="products-heading"
                className="pb-24 pt-6"
              >
                <h2 id="products-heading" className="sr-only">
                  Products
                </h2>

                <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                  <Sidebar
                    transformedItems={transformedItems}
                    range={range}
                    setRange={setRange}
                    locationParam={locationParam}
                    searchParam={searchParam}
                    categoryParam={categoryParam}
                    productList={productList}
                    setProductList={setProductList}
                  />
                  {cards === false && (
                    <div className="lg:col-span-3">
                      {productList !== [] &&
                        productList.map((t, i) => (
                          <Link to={`/products/${t._id}`}>
                            <div
                              className="max-w-sm mb-10 w-full lg:max-w-full lg:flex hover:scale-105 transition-transform duration-300"
                              key={i}
                            >
                              <div
                                className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                                style={{
                                  backgroundImage: `url(${
                                    t.productDetails[0].images
                                      ? t.productDetails[0].images[0]
                                      : noImage
                                  })`,
                                }}
                                title="Product Image"
                              ></div>
                              <div className=" bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                <div className="">
                                  <div className="text-gray-900 font-bold text-xl mb-2">
                                    {t.name}
                                  </div>
                                </div>
                                <div className="flex items-center text-black/[0.5] mb-4">
                                  <p className="mr-2 text-lg font-semibold mb-2">
                                    &#8377;{t.productDetails[0].price}
                                  </p>
                                </div>

                                <div className="flex items-center">
                                  <img
                                    className="w-10 h-10 rounded-full mr-4"
                                    src="/p5.png"
                                    alt="Avatar of Jonathan Reinink"
                                  />
                                  <div className="text-sm">
                                    <p className="text-gray-900 leading-none">
                                      {t.email}
                                    </p>
                                    <p className="text-gray-600">
                                      {moment(t.productDetails[0].time).format(
                                        "DD MMM"
                                      )}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Link>
                        ))}
                    </div>
                  )}
                  {cards === true && (
                    <>
                      {productList !== [] ? (
                        <>
                          <Cards data={productList} />
                        </>
                      ) : (
                        <h1>No product</h1>
                      )}
                    </>
                  )}
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;
