import React from "react";
import { FaRegLightbulb } from "react-icons/fa";
import { TiGlobeOutline } from "react-icons/ti";
import { GoDatabase } from "react-icons/go";
import { BsPhone } from "react-icons/bs";
function Do() {
  const cards = [
    {
      type: "Web Design",
      title: "WEB DESIGN",
      icon: <TiGlobeOutline />,
      color: "textred",
      code: "#ec5453",
      content:
        "Separated they live in Bookmarksgrove right at the coast of the Semantics",
    },
    {
      type: "Software",
      title: "SOFTWARE",
      icon: <GoDatabase />,
      color: "textyellow",
      code: "#f9bf3f",
      content:
        "Separated they live in Bookmarksgrove right at the coast of the Semantics",
    },
    {
      type: "Application",
      title: "APPLICATION",
      icon: <BsPhone />,
      color: "textbri",
      code: "#a84cb8",
      content:
        "Separated they live in Bookmarksgrove right at the coast of the Semantics",
    },
    {
      type: "Graphic Design",
      title: "GRAPHIC DESIGN",
      icon: <FaRegLightbulb />,
      color: "textblue",
      code: "#2c98f0",
      content:
        "Separated they live in Bookmarksgrove right at the coast of the Semantics",
    },
    {
      type: "Software",
      title: "SOFTWARE",
      icon: <GoDatabase />,
      color: "textyellow",
      code: "#f9bf3f",
      content:
        "Separated they live in Bookmarksgrove right at the coast of the Semantics",
    },
    {
      type: "Application",
      title: "APPLICATION",
      icon: <BsPhone />,
      color: "textbri",
      code: "#a84cb8",
      content:
        "Separated they live in Bookmarksgrove right at the coast of the Semantics",
    },
  ];

  return (
    <>
      <div>
        <p className="text-xs font-medium textp tracking-[5px] my-10">
          WHAT I DO?
        </p>
        <h1 className="font-bold text-[#000] text-xl tracking-[5px]">
          HERE ARE SOME OF MY EXPERTISE
        </h1>
      </div>

      <div className="grid grid-cols-3 gap-10 py-5 justify-center items-center  mt-20">
        {cards.map((val, i) => (
          <div
            key={i}
            className={`h-[300px] shadowsss flex justify-center my-10 items-center flex-col gap-2 relative `}
            style={{ borderBottom: `2px solid ${val.code}` }}
          >
            <div className="hexagon  absolute bottom-[233px]">
              <div
                style={{
                  width: 0,
                  height: 0,
                  borderLeft: "60px solid transparent",
                  borderRight: "60px solid transparent",
                  borderBottom: `30.6px solid ${val.code}`,
                }}
              ></div>
              <div
                style={{
                  width: "120px",
                  height: " 60px",
                  background: `${val.code}`,
                }}
              >
                <div className={`text-4xl text-white flex justify-center`}>
                  {val.icon}
                </div>
              </div>
              <div
                className=""
                style={{
                  width: 0,
                  height: 0,
                  borderLeft: "60px solid transparent",
                  borderRight: "60px solid transparent",
                  rotate: "180deg",

                  borderBottom: `30.6px solid ${val.code}`,
                }}
              ></div>
            </div>
            <h1 className="font-medium text-normal text-[#000]">{val.type}</h1>
            <div className="w-full text-center">
              <p className="text-sm textp font-medium mx-5 leading-7 py-5 ">
                {val.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Do;
