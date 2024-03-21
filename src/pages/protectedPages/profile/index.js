import React, { useEffect, useState } from "react";
import { Button, Input, Popconfirm, notification } from "antd";
import Storage from "../../../services/Storage.services";
import { Footer, Header } from "../../../components";
import Cards from "../../../components/Cards";
import ApiRouteList from "../../../constants/ApiRoute.constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { retrieveLocation } from "../../../redux/slice/locationSlice";

const Profile = () => {

  const [userData, setUserData] = useState()

  const UserData = Storage.getUserData();

  const confirm = (e) => {
    console.log(e);
    notification.success('Click on Yes');
  };

  const getData = async () => {
    try {
      const { data, status } = await axios.get(
        `http://localhost:8000${ApiRouteList.USER}/${UserData._id}`
      );
      if (status === 200) {
        setUserData(data.data);
      }
    } catch (err) {
      console.log(err)
    }
  };

  useEffect(() => {
    getData();
  }, []);

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
  return (
    <>
    <Header items={items} />
      <div className="container pt-10">
        <div className="flex py-10">
          <section className="relative block h-500-px">
            <div className="absolute top-0 w-full h-full bg-center bg-cover">
              <span
                id="blackOverlay"
                className="w-full h-full absolute opacity-50 bg-black"
              ></span>
            </div>
            <div
              className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
              style={{ transform: "translateZ(0px)" }}
            >
              <svg
                className="absolute bottom-0 overflow-hidden"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="text-blueGray-200 fill-current"
                  points="2560 0 2560 100 0 100"
                ></polygon>
              </svg>
            </div>
          </section>
          <section className="relative py-16 bg-blueGray-200">
            <div className="container mx-auto px-4">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-2xl rounded-lg">
                <div className="px-6">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                      <div className="relative w-40">
                        <img
                          alt="..."
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-8 -ml-20 lg:-ml-2 max-w-150-px"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center"></div>
                    
                  </div>
                  <div className="text-center mt-12 justify-center flex">
                    <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700">
                      {UserData && UserData.first_name} {UserData && UserData.last_name}
                    </h3>
                    {UserData && UserData.is_verified === 1 && (
                      <div className="w-10 ml-4 mt-4">
                        <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                          Verified
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 my-14 px-5 md:px-0">
                    <div className="py-4">
                      <label className="px-4">Email: </label>
                      <Input
                        disabled
                        defaultValue={UserData && UserData.email}
                        placeholder="Email Address"
                      />
                    </div>
                    <div className="py-4">
                      <label className="px-4">Password: </label>
                      <Input type="password" placeholder="Password" />
                      <Popconfirm
                        title="Change Password"
                        description="Are you sure to Change Password?"
                        onConfirm={confirm}
                        okButtonProps = {{style: { color: 'black' } }}
                        okText="Yes"
                        cancelText="No"
                      >
                        <Button className="float-right ml-20 mt-4">
                          Change Password
                        </Button>
                      </Popconfirm>
                    </div>
                  </div>
                  <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                    <div className="flex flex-wrap justify-center">
                     
                        <h1 className="font-bold text-2xl text-center mt-2 ">
                          My Posts
                        </h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-14 px-5 md:px-0">
                          <Cards data={userData && userData.product} />
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
