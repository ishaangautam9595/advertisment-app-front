import React, { useState } from "react";
import IntegerStep from "./IntegerStep";
import { Button, Popconfirm, Radio, notification } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ApiRouteList from "../constants/ApiRoute.constants";

const Sidebar = ({range, setRange, categoryParam, searchParam, locationParam, setProductList, transformedItems,}) => {

  const [value, setValue] = useState([]);
  const [categoryvalue, setCategoryValue] = useState([]);
  const navigate = useNavigate();

  const handleClick = async () => {
    const category =
      typeof categoryvalue === "object" ? categoryParam : categoryvalue;
    try {
      const { data, status } = await axios.get(`http://localhost:8000${ApiRouteList.GETLIST}?category=${category}&search=${searchParam}&location=${locationParam}&range=${range}&subCategory=${value}`);
      if (status === 200) {
        navigate(`/list?location=${locationParam}&search=${searchParam}&category=${category}&range=${range}&subCategory=${value}`);
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

    const newArray = [
      { value: '', label: 'All' },
      ...(categories && categories.children ? categories.children.map((item) => ({
        value: item.key,
        label: item.label,
      })) : [])
    ];

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
      <form className="hidden lg:block">
        <div className="border-b border-gray-200 py-6">
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
              ? newArray &&
                newArray.map((item) => (
                  <>
                  <Radio key={item.value} value={item.value}>
                    {item.label}
                  </Radio>
                  </>
                ))
              : categoryArray &&
                categoryArray.map((item) => (
                  <>
                  <Radio
                    key={item.value}
                    value={item.value}
                    className="radio-checkbox"
                    >
                    {item.label}
                  </Radio>
                    </>
                ))}
          </Radio.Group>{" "}
        </div>
        <div className="border-b border-gray-200 py-6">
          <h3>Range</h3>
          <IntegerStep setRange={setRange} range={range} />
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
    </>
  );
};

export default Sidebar;
