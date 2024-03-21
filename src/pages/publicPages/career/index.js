import React from "react";
import { Link } from "react-router-dom";
import logo from '../../../assets/logo1.png';

const Career = () => {
  const data = [
    {
      image: "/job.webp",
      name: "Software Engineer",
      author:
        "Job is for software Engineer Job is for software Engineer Job is for software Engineer Job is for software Engineer.",
      date: "Aug 18",
    },
    {
      image: "/job.webp",
      name: "Software Engineer",
      author:
        "Job is for software Engineer Job is for software Engineer Job is for software Engineer Job is for software Engineer.",
      date: "Aug 18",
    },
    {
      image: "/job.webp",
      name: "Software Engineer",
      author:
        "Job is for software Engineer Job is for software Engineer Job is for software Engineer Job is for software Engineer.",
      date: "Aug 18",
    },
    {
      image: "/job.webp",
      name: "Software Engineer",
      author:
        "Job is for software Engineer Job is for software Engineer Job is for software Engineer Job is for software Engineer.",
      date: "Aug 18",
    },
  ];

  return (
    <>
      <div className="container">
        <div className="basis-1/2 py-6">
          <h1 className="m-10 text-2xl font-bold">Why Dhhundo?</h1>
          <div className="flex">
            <div className="basis-1/2 px-10">
              <h1>
                What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum. Where does it come from?
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                in section 1.10.32. The standard chunk of Lorem Ipsum used since
                the 1500s is reproduced below for those interested. Sections
                1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
                Cicero are also reproduced in their exact original form,
                accompanied by English versions from the 1914 translation by H.
                Rackham.
              </h1>
            </div>
            <div className="basis-1/3 py-24 px-10">
              <img alt="link" className="mx-10 mt-6" src={logo} />
            </div>
          </div>
          <h1 className="m-10 text-2xl font-bold">Jobs</h1>
          {data.map((t, i) => (
            <Link to="/products">
              <div
                className="max-w-sm mb-10 mx-10 w-full lg:max-w-full lg:flex"
                key={i}
              >
                <div
                  className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                  style={{ backgroundImage: `url(${t.image})` }}
                  title="Woman holding a mug"
                ></div>
                <div className=" bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                  <div className="mb-8">
                    <div className="text-gray-900 font-bold text-xl mb-2">
                      {t.name}
                    </div>
                    <div className="text-sm">
                      <p className="text-gray-900 leading-none">{t.author}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="text-sm">
                      <p className="text-gray-600">{t.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Career;