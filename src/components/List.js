import React from "react";
import { useNavigate } from "react-router-dom";

const List = ({ items }) => {
  const navigate = useNavigate();
  const handleClick = (name) => {
    localStorage.setItem("Location", name);
    navigate(`/list?location=${name}&search=&category=All+Category`);
  };

  return (
    <>
      <div className="mt-4"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 mb-14 px-5 md:px-0">
        {items.slice(0, 10).map((datas, index) => (
          <ul key={index}>
            <li
              role="list"
              className="divide-gray-100"
              onClick={() => handleClick(datas.key)}
            >
              <img src={`/${datas.url}.png`} className="m-3" alt="locations" />
              <h1 className="font-semiBold text-2xl">{datas.label}</h1>
            </li>
          </ul>
        ))}
      </div>
    </>
  );
};

export default List;
