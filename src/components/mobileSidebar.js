import React, { useState } from "react";
import IntegerStep from "./IntegerStep";
import ApiRouteList from "../constants/ApiRoute.constants";
import axios from "axios";
import { Button, Popconfirm, Radio, notification } from "antd";

const MobileSidebar = ({
  handleMenuClick,
  range,
  setRange,
  locationParam,
  categoryParam,
  searchParam,
  setProductList,
  transformedItems,

}) => {
  const [value, setValue] = useState([]);
  const [categoryvalue, setCategoryValue] = useState([]);
  const handleClick = async () => {
    const category = typeof categoryvalue === 'object' ? categoryParam : categoryvalue
    try {
      const { data, status } = await axios.get(
        `http://localhost:8000${ApiRouteList.GETLIST}?category=${category}&search=${searchParam}&location=${locationParam}&range=${range}&subCategory=${value}`
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

  const categories =
    transformedItems &&
    transformedItems.find((sub) => sub.key === categoryParam);

  const newArray =
    categories &&
    categories.children.map((item) => ({
      value: item.key,
      label: item.label,
    }));

  const categoryArray = transformedItems.map((item) => ({
    value: item.key,
    label: item.label,
  }));


  const onChange = (checkedValues) => {
    setValue(checkedValues.target.value);
  };

  const onCategoryChange = (checkedValues) => {
    setCategoryValue(checkedValues.target.value);
    setValue("");
  };


  return (
    <>
      <div className="relative z-40 lg:hidden" role="dialog" aria-modal="true">
        <div className="fixed inset-0 z-40 flex">
          <div className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
            <div className="flex items-center justify-between px-4">
              <h2 className="text-lg font-medium text-gray-900">Filters</h2>
              <button
                type="button"
                onClick={handleMenuClick}
                className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  onClick={handleMenuClick}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <form className="mt-4 border-t border-gray-200">
            <div className="border-b border-gray-200 py-6 mx-10">
          <h3>
            {categoryParam !== "All Category" ? "Sub Categories" : "Categories"}
          </h3>
          <Radio.Group
            onChange={
              categoryParam === "All Category" ? onCategoryChange : onChange
            }
            value={categoryParam === "All Category" ? categoryvalue : value}
            className="radio-checkbox"
          >
            {categoryParam !== "All Category"
              ? newArray && newArray.map((item) => (
                  <Radio key={item.value} value={item.value}>
                    {item.label}
                  </Radio>
                ))
              : categoryArray && categoryArray.map((item) => (
                  <Radio
                    key={item.value}
                    value={item.value}
                    className="radio-checkbox"
                  >
                    {item.label}
                  </Radio>
                ))}
          </Radio.Group>{" "}
        </div>
              <div className="border-b border-gray-200 py-6 mx-10 my-10">
                <h3>Range</h3>
                <IntegerStep range={range} setRange={setRange} />
                <Popconfirm
                  title="Submit"
                  description="Are you sure to sumbit these filters?"
                  okText="Yes"
                  cancelText="No"
                  onConfirm={handleClick}
                  okButtonProps={{ style: { backgroundColor: "#1677ff" } }}
                >
                  <Button className="rounded-md left-0 bg-gray-800 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800 w-36">
                    Submit
                  </Button>
                </Popconfirm>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileSidebar;
