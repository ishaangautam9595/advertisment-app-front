import React from "react";
import { useNavigate } from "react-router-dom";
import RouteList from "../constants/Route.constants";

const Categories = () => {
  const navigate = useNavigate();
  const handleClick = (name) => {
    navigate(`/list?location=All+Location&search=&category=${name}`);
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="2xl:mx-auto 2xl:container pb-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
          <div className="flex flex-col jusitfy-center items-center space-y-10">
            <div className="flex flex-col justify-center items-center "></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-4 md:gap-x-8 w-full">
              <div className="relative group flex justify-center items-center h-full w-full">
                <img
                  className="object-center object-cover h-full w-full"
                  src="https://i.ibb.co/ThPFmzv/omid-armin-m-VSb6-PFk-VXw-unsplash-1-1.png"
                  alt="girl"
                />
                <button
                  onClick={() => handleClick("65dbf7b7a47f207560180dff")}
                  className="rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800 absolute py-34 bottom-4 w-36"
                >
                  Clothes
                </button>
              </div>

              <div className="flex flex-col space-y-4 md:space-y-8 mt-4 md:mt-0">
                <div className="relative group flex justify-center items-center h-full w-full">
                  <img
                    className="object-center object-cover h-full w-full"
                    src="https://i.ibb.co/SXZvYHs/irene-kredenets-DDqx-X0-7v-KE-unsplash-1.png"
                    alt="shoe"
                  />
                  <button
                    onClick={() => handleClick("65c5b7135c7e2df687f1a5a0")}
                    className="rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800 absolute py-34 bottom-4 w-36"
                  >
                    Shoes
                  </button>
                </div>
                <div className="relative group flex justify-center items-center h-full w-full">
                  <img
                    className="object-center object-cover h-full w-full"
                    src="https://i.ibb.co/Hd1pVxW/louis-mornaud-Ju-6-TPKXd-Bs-unsplash-1-2.png"
                    alt="watch"
                  />
                  <button
                    onClick={() => handleClick("65c5b71d5c7e2df687f1a5a2")}
                    className="rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800 absolute py-34 bottom-4 w-36"
                  >
                    Watches
                  </button>
                </div>
              </div>

              <div className="relative group justify-center items-center h-full w-full hidden lg:flex">
                <img
                  className="object-center object-cover h-full w-full"
                  src="https://i.ibb.co/PTtRBLL/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-1.png"
                  alt="girl"
                />
                <button
                  onClick={() => navigate(`/${RouteList.ALLCATEGORIES}`)}
                  className="rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800 absolute py-34 bottom-4 w-36"
                >
                  More
                </button>
              </div>
              <div className="relative group flex justify-center items-center h-full w-full mt-4 md:hidden md:mt-8 lg:hidden">
                <img
                  className="object-center object-cover h-full w-full hidden md:block"
                  src="https://i.ibb.co/6FjW19n/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2.png"
                  alt="girl"
                />
                <img
                  className="object-center object-cover h-full w-full md:hidden"
                  src="https://i.ibb.co/sQgHwHn/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-1.png"
                  alt="olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2"
                />
                <button
                  onClick={() => navigate(`/${RouteList.ALLCATEGORIES}`)}
                  className="rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800 absolute py-34 bottom-4 w-36"
                >
                  More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
