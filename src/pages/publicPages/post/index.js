import React, { useState } from "react";
import { Button, Form, Input, Select, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import axios from "axios";

const Post = ({ items, categoryList }) => {
  const { Option } = Select;
  const [form] = Form.useForm();
  const Location = localStorage.getItem("Location");
  const token = localStorage.getItem("token");
  const UserData = JSON.parse(localStorage.getItem("userData"));
  const [selectedValue, setSelectedValue] = useState(
    Location || "Select a Location"
  );
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
    setSelectedSubcategory(null); // Reset subcategory when category changes
    form.setFieldsValue({ category: value });

  };
  
  const handleSubcategoryChange = (value) => {
    setSelectedSubcategory(value);
    form.setFieldsValue({ subCategory: value });

  };

  const handleLocationChange = (value) => {
    setSelectedValue(value);
  };

  // file upload function
  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  // submitting form data
  const onFinish = async (values) => {
    try {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("category", selectedCategory);
      formData.append("subCategory", selectedSubcategory);

      formData.append("description", values.description);
      formData.append("price", values.price);
      formData.append("email", values.email);
      formData.append("phoneNumber", values.phoneNumber);
      formData.append("location", selectedValue);

      // Append each selected file to the FormData
      values.images &&
        values.images.forEach((file) => {
          formData.append("images", file.originFileObj);
        });
      const customAxios = axios.create({
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      const response = await customAxios.post(
        "http://localhost:8000/product",
        formData
      );
      message.success("Product created successfully");
    } catch (error) {
      console.log(error);
      message.error("Error creating product");
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

  return (
    <>
      <div className="my-10">
        <div className="bg-white mt-10 border shadow-[0_3px_10px_rgb(0,0,0,0.2)] container">
          <div className="m-20 items-center">
            <Form
              form={form}
              onFinish={onFinish}
              initialValues={{ email: UserData.email }}
            >
              <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                  <h2 className="text-base font-semibold leading-7 text-gray-500">
                    Post Information
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    This information will be displayed publicly so be careful
                    what you share.
                  </p>

                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="col-span-full">
                      <Form.Item
                        name="images"
                        label="Images"
                        valuePropName="fileList"
                        getValueFromEvent={normFile}
                      >
                        <Upload
                          name="images"
                          listType="picture"
                          beforeUpload={() => false}
                        >
                          <Button icon={<UploadOutlined />}>
                            Select Images
                          </Button>
                        </Upload>
                      </Form.Item>
                    </div>
                    <div className="sm:col-span-3">
                      <Form.Item
                        name="category"
                        label="Category"
                        rules={[
                          {
                            required: true,
                            message: "Please select the category!",
                          },
                        ]}
                      >
                        <div className="mt-2">
                          <Select
                            placeholder="Select Category"
                            onChange={handleCategoryChange}
                            value={selectedCategory}
                            style={{ width: 200, marginRight: 10 }}>
                            {transformedItems.map((category) => (
                              <Option key={category.key} value={category.key}>
                                {category.label}
                              </Option>
                            ))}
                          </Select>
                        </div>
                      </Form.Item>
                    </div>

                    {selectedCategory && (
                      <div className="sm:col-span-3">
                      <Form.Item
                        name="subCategory"
                        label="Sub Category"
                        rules={[
                          {
                            required: true,
                            message: "Please select the subcategory!",
                          },
                        ]}
                      >
                        <div className="mt-2">
                          <Select
                            placeholder="Select SubCategory"
                            onChange={handleSubcategoryChange}
                            value={selectedSubcategory}
                            style={{ width: 200 }}
                          >
                            {transformedItems
                              .find((category) => category.key === selectedCategory)
                              ?.children.map((subCategory) => (
                                <Option key={subCategory.key} value={subCategory.key}>
                                  {subCategory.label}
                                </Option>
                              ))}
                          </Select>
                        </div>
                      </Form.Item>
                    </div>
                    )}
                    <div className="sm:col-span-3">
                      <Form.Item
                        name="name"
                        label="Name"
                        rules={[
                          {
                            required: true,
                            message: "Please Input the Name!",
                          },
                        ]}
                      >
                        <div className="mt-2">
                          <Input
                            type="text"
                            autoComplete="price"
                            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-800 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </Form.Item>
                    </div>

                    <div className="sm:col-span-3">
                      <Form.Item
                        name="price"
                        label="Price"
                        rules={[
                          {
                            required: true,
                            message: "Please Input the category!",
                          },
                        ]}
                      >
                        <div className="mt-2">
                          <Input
                            type="text"
                            autoComplete="price"
                            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-800 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </Form.Item>
                    </div>
                    <div className="col-span-full">
                      <Form.Item
                        name="description"
                        label="Description"
                        rules={[
                          {
                            required: true,
                            message: "Please Input the Description!",
                          },
                        ]}
                      >
                        <div className="mt-2">
                          <textarea
                            rows="3"
                            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-800 sm:text-sm sm:leading-6"
                          ></textarea>
                        </div>
                      </Form.Item>
                    </div>
                  </div>
                </div>

                <div className="border-b border-gray-900/10 pb-12">
                  <h2 className="text-base font-semibold leading-7 text-gray-500">
                    Contact Information
                  </h2>

                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <Form.Item name="email" label="Email Address">
                        <div className="mt-2">
                          <Input
                            disabled
                            defaultValue={UserData.email}
                            type="phone-number"
                            autoComplete="phone-number"
                            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-800 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </Form.Item>
                    </div>

                    <div className="sm:col-span-3">
                      <Form.Item
                        name="phoneNumber"
                        label="Phone Number"
                        rules={[
                          {
                            required: true,
                            message: "Please Input the Phone Number!",
                          },
                        ]}
                      >
                        <div className="mt-2">
                          <Input
                            type="phone-number"
                            autoComplete="phone-number"
                            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-800 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </Form.Item>
                    </div>

                    <div className="sm:col-span-2 sm:col-start-1">
                      <Form.Item
                        name="location"
                        label="Location"
                        // rules={[
                        //   {
                        //     required: true,
                        //     message: "Please Input the city!",
                        //   },
                        // ]}
                      >
                        <div className="mt-2">
                          <Select
                            style={{ width: 200 }}
                            placeholder="Select a Location"
                            onChange={handleLocationChange}
                            value={selectedValue}
                          >
                            {items &&
                              items.map((item) => (
                                <Option key={item.key} value={item.key}>
                                  {item.label}
                                </Option>
                              ))}
                          </Select>
                        </div>
                      </Form.Item>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                  type="button"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800"
                >
                  Save
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
