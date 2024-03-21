import React, { useEffect, useState } from "react";
import { Button, Col, Form, Input, Row, notification } from "antd";
import { useForm } from "antd/es/form/Form";
import ApiRouteList from "../../../constants/ApiRoute.constants";
import Storage from "../../../services/Storage.services";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { retrieveLocation } from "../../../redux/slice/locationSlice";

const Login = () => {
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
    try {
      setIsFormSubmitted(true);
      const { status, data } = await axios.post(`http://localhost:8000/auth${ApiRouteList.LOGIN}`,
        values
      );
      if (status === 200) {
        data && Storage.setToken(data.token);
        data && Storage.setUserData(data?.user);
        setIsFormSubmitted(false);
        form.resetFields();
        notification.success({
          message: "Form Submitted Successfully",
        });

        // state === null ?
        //   navigate(`/${RouteList.DASHBOARD}`)
        //   : navigate(state?.reLocate)
        navigate("/");
      }
    } catch (err) {
      notification.error({
        message: "Login",
        description: (err && err.response.data.message)||(err && err.message) || "SERVER ERROR",
      });
      setIsFormSubmitted(false);
      console.log(err)
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Header items={items} />
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
              Sign in to your account
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
                label="Email Address"
                name="email"
                rules={[
                  {
                    type: "email",
                    required: true,
                    message: "Please enter your email!",
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
                    message: "Please enter your password!",
                  },
                  {
                    min: 6,
                    message: "Password must be at least 6 characters",
                  },
                ]}
              >
                <Input.Password placeholder="Enter Password" />
              </Form.Item>

              {/* <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item> */}
              <Row justify={"space-between"} align={"middle"}>
                <Col flex="none">
                  <Link className="text-primary textLink" to="/forgot-password">
                    Forgot Password ?
                  </Link>
                </Col>
                <Col flex={"none"}>
                  <Form.Item style={{ margin: 0 }}>
                    <Button
                      type="primaryBtn"
                      htmlType="submit"
                      loading={isFormSubmitted}
                      className="flex w-full justify-center rounded-md bg-gray-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800"
                    >
                      Login
                    </Button>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
            <div className="formFooter">
              <p className="textLink text-center">
                No Account?{" "}
                <Link className="text-primary" to="/signup">
                  Signup here
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

export default Login;
