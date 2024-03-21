import { Button, notification } from "antd";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ApiRouteList from "../../../constants/ApiRoute.constants";
import axios from "axios";

const VerifyEmail = () => {
  const search = useLocation().search;
  const id = new URLSearchParams(search).get("user_id");
  const navigate = useNavigate();

  console.log(id);

  const handleHome = () => {
    navigate("/login");
  };

  const getVerified = async () => {
    try {
      const { status } = await axios.post(
        `http://localhost:8000/auth${ApiRouteList.VERIFYEMAIL}`,
        { user_id: id }
      );
      if (status === 200) {
        notification.success({
          message: "User Verified Successfully",
        });
      }
    } catch (err) {
      if (status === 200) {
        notification.success({
          message: "User not Verified Successfully",
        });
      }
    }

    }

  useEffect(() => {
    getVerified();
  }, []);
  return (
    <>
      <div className="bg-white container ">
        <div className="flex min-h-full flex-col justify-center px-6 py-28 lg:px-8">
          <h1 className="text-center">Your email is verified</h1>
          <Button onClick={handleHome}>Go to Login</Button>
        </div>
      </div>
    </>
  );
};

export default VerifyEmail;
