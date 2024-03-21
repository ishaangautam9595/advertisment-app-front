import React, { useEffect, useState } from "react";
import { Button, Checkbox, Col, Form, Input, Row, notification } from "antd";
import { useForm } from "antd/es/form/Form";
import ApiRouteList from "../../../constants/ApiRoute.constants";
import { useNavigate } from "react-router";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { retrieveLocation } from "../../../redux/slice/locationSlice";

const Signup = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [form] = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const location = useSelector((state) => state.getLocationData.locationData);

  useEffect(() => {
    dispatch(retrieveLocation());    
  }, [dispatch]);

  const items = location.map((item) => ({
    label: item.city,
    key: item._id,
    url : item.city.toLowerCase()
  }));

  const onFinish = async (values) => {
    const apiPayload = {
      first_name: values.first_name,
      last_name: values.last_name,
      email: values.email,
      password: values.password,
      role: "user",
    };
    try {
      setIsFormSubmitted(true);
      const { status } = await axios.post(`http://localhost:8000/auth${ApiRouteList.SIGNUP}`,apiPayload);
      if (status === 201) {
        setIsFormSubmitted(false);
        form.resetFields();
        notification.success({
          message: "Form Submitted Successfully",
        });
        navigate("/login");
      }
    } catch (err) {
      setIsFormSubmitted(false);
      notification.error({
        message: "SignUp",
        description: err.response.data.message || "SERVER ERROR",
      });
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Header items= {items} />
      <div className="bg-white border shadow-[0_3px_10px_rgb(0,0,0,0.2)] container ">
        <div className="flex min-h-full flex-col justify-center px-6 py-28 lg:px-8">
          {/* <div className=' mx-60 py-40 shadow-md'> */}
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=gray&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign Up
            </h2>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <Form
              name="basic"
              labelCol={{
                span: 24,
              }}
              wrapperCol={{
                span: 24,
              }}
              style={{
                maxWidth: 600,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                className="block w-full py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-800 sm:text-sm sm:leading-6"
                label="First Name"
                name="first_name"
                rules={[
                  {
                    required: true,
                    message: "Please input your First Name!",
                  },
                ]}
              >
                <Input placeholder="First Name" />
              </Form.Item>

              <Form.Item
                className="block w-full py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-800 sm:text-sm sm:leading-6"
                label="Last Name"
                name="last_name"
                rules={[
                  {
                    required: true,
                    message: "Please input your Last Name!",
                  },
                ]}
              >
                <Input placeholder="Last Name" />
              </Form.Item>

              <Form.Item
                className="block w-full py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-800 sm:text-sm sm:leading-6"
                label="Email Address"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                  },
                ]}
              >
                <Input placeholder="Email Address" />
              </Form.Item>

              <Form.Item
                className="block w-full py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-800 sm:text-sm sm:leading-6"
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                  {
                    min: 6,
                    message: "Password must be at least 6 characters",
                  },
                ]}
              >
                <Input.Password placeholder="Enter Password" />
              </Form.Item>

              <Form.Item
                className="block w-full py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-800 sm:text-sm sm:leading-6"
                label="Confirm Password"
                name="confirm_password"
                rules={[
                  {
                    required: true,
                    message: "Please confirm your password!",
                  },
                  {
                    min: 6,
                    message: "Password must be at least 6 characters",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(
                          "The confirm password that you entered do not match!"
                        )
                      );
                    },
                  }),
                ]}
              >
                <Input.Password placeholder="Confirm Enter Password" />
              </Form.Item>

              <Row justify={"space-between"} align={"middle"}>
                <Col flex="none">
                  <Form.Item
                    name="agreement"
                    valuePropName="checked"
                    rules={[
                      {
                        validator: (_, value) =>
                          value
                            ? Promise.resolve()
                            : Promise.reject(
                                new Error("Please accept terms and conditions")
                              ),
                      },
                    ]}
                  >
                    <Checkbox>
                      I agree to the{" "}
                      <Link
                        className="text-primary textLink"
                        to="/terms-conditions"
                      >
                        terms of service
                      </Link>
                    </Checkbox>
                  </Form.Item>
                </Col>
                <Col flex={"none"}>
                  <Form.Item>
                    <Button
                      type="primaryBtn"
                      htmlType="submit"
                      className="flex w-full justify-center rounded-md bg-gray-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800"
                      loading={isFormSubmitted}
                    >
                      Signup
                    </Button>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
            <div className="formFooter">
              <p className="textLink text-center">
                Already signed up? Click here to{" "}
                <Link className="text-primary" to="/login">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
