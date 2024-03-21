import React, { useState } from "react";
import { Button, Form, Input, notification } from "antd";
import { useForm } from "antd/es/form/Form";
import instance from "../../../services/api.services";
import ApiRouteList from "../../../constants/ApiRoute.constants";
import { useNavigate, useSearchParams } from "react-router-dom";

function ResetPassword() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [form] = useForm();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const id = searchParams.get("id");
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      setIsFormSubmitted(true);
      const Data = {
        userId: id ? id : "",
        token: token ? token : "",
        password: values.password,
      };
      const { status, data } = await instance.put(
        `${ApiRouteList.RESETPASSWORD}`,
        Data
      );
      if (status === 200) {
        setIsFormSubmitted(false);
        form.resetFields();
        notification.success({
          message: "Reset Passsword",
          description: data.message,
        });
        navigate('/login');
      }
    } catch (err) {
      setIsFormSubmitted(false);

      notification.error({
        message: "Reset Passsword",
        description: err.response.data.message || "SERVER ERROR",
      });
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
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
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="Confirm Password"
          name="Confirm password"
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
                  new Error("The new password that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" loading={isFormSubmitted}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default ResetPassword;
