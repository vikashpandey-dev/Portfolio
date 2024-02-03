import React from "react";
import "./Mywork.css"; // Import the CSS file for styling
import { IoMdEye } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
function Mywork() {
  const imageData = [
    {
      work: "https://technext.github.io/jackson/images/img-1.jpg",
      view: 150,
      like: 25,
      title: "Website",
    },
    {
      work: "https://technext.github.io/jackson/images/img-2.jpg",
      view: 200,
      like: 30,
      title: "Application",
    },
    {
      work: "https://technext.github.io/jackson/images/img-5.jpg",
      view: 120,
      like: 15,
      title: "Animection",
    },
    {
      work: "https://technext.github.io/jackson/images/img-6.jpg",
      view: 120,
      like: 15,
      title: "Graphic",
    },
    // Add more objects as needed
  ];

  return (
    <>
      <div>
        <div>
          <p className="text-xs font-medium textp tracking-[5px] my-10">
            MY WORK
          </p>
          <h1 className="font-bold text-[#000] text-xl tracking-[5px]">
            RECENT WORK
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {imageData.map((val, i) => {
            return (
              <div
                key={i}
                className="image-container w-full h-80"
                style={{ backgroundImage: `url(${val.work})` }}
              >
                <div className="overlay justify-between py-3 px-3">
                  <div className="">
                    <h1 className="text-white">Work 0{i + 1}</h1>
                    <p className="text-gray-300 text-sm">{val.title}</p>
                  </div>
                  <div className="flex gap-5">
                    <div className="ap-1 flex px-3 py-1 rounded-[5px] bg-[#f2f3f7]">
                        <FaShareAlt/>
                    </div>
                    <div className=" gap-1 flex px-3 py-1 rounded-[5px] bg-[#f2f3f7]">
                    <IoMdEye/>
                    <p className="text-[#000] text-[12px]">{val.view}</p>
                    </div>
                   <div className="flex gap-1 px-3 py-1 rounded-[5px] bg-[#f2f3f7]">
                   <FaHeart/>
                     <p className="text-[#000] text-[12px]">{val.like}</p></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Mywork;
