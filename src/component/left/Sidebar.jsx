// Sidebar.js
import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineBars } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
const Sidebar = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.toggle);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  console.log(counter, "countercountercounter");
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const navbar = [
    {
      name: "HOME",
    },
    {
      name: "ABOUT",
    },
    {
      name: "SERVICES",
    },
    {
      name: "SKILLS",
    },
    {
      name: "EDUCATION",
    },
    {
      name: "EXPERIENCE",
    },
    {
      name: "WORK",
    },
    {
      name: "CONTACT",
    },
  ];
  const handleopen = () => {
    const settrue = false;
    dispatch({ type: "Toggle", payload: settrue });
  };
  const handlescroll=(name)=>{
    const settrue = false;
    dispatch({ type: "Toggle", payload: settrue });
    dispatch({ type: "scroll", payload: name });

  }
  const [active,setActive]=useState(0)
  const handleactive=(val)=>{
    
    setActive(val)
  }
  return (
    <>
      <div
        className={`sidebar  ${
          counter ? "open left-[0] block transition-all duration-500" : "left-[-250px] hidden transition-all duration-500"
        }`}
      >
        {counter ? (
          <div
            className="text-4xl   flex justify-end px-5 w-full  "
            onClick={handleopen}
          >
            <RxCross1 />
          </div>
        ) : null}
        <div className="mainnav w-full h-fit   flex md:justify-center   items-center flex-col  ">
          <div className=" w-40 h-40 ">
            <img
              className="w-full h-full rounded-full object-cover"
              src="https://images.unsplash.com/photo-1705899354898-bbc30144e432?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="flex justify-center items-center flex-col  gap-2 py-5">
            <h1 className="text-2xl font-bold">Vikash Pandey</h1>

            <span className="text-sm font-light">
              <strong className="text-[#2c98f0]">
                Associate MERN STACK DEVELOPER
              </strong>{" "}
              IN INDIA
            </span>
          </div>
          <ul className="flex justify-center items-center flex-col ">
            {navbar.map((val, i) => {
              return (
                <>
                  <li className="py-2 text-sm font-normal tracking-[2px] textrgba" onClick={()=>handlescroll(val.name)}>
                    <button onClick={()=>{handleactive(i)}} 
                     className={`${
                      active === i ? 'border-b transition duration-200 border-blue-500 text-[#2c98f0]' : ''
                    } hover:border-b hover:transition hover:duration-2000 hover:border-blue-500 hover:text-[#2c98f0] `}
                    >{val.name}</button>
                  </li>
                </>
              );
            })}
          </ul>
          <div className="copywrite textrgba flex flex-col gap-3 w-full justify-center items-center py-7 text-[14px] font-normal">
            <p className="">
              {" "}
              © Copyright {new Date().getFullYear()} All rights reserved.
            </p>
            <p>
              Made with by <span className="text-[#2c98f0]">Colorlib</span>
            </p>
            <p className="flex justify-center items-center gap-1">
              Distributed by{" "}
              <span>
                <FaHeart className="text-red-500" />
              </span>{" "}
              <span className="text-[#2c98f0]"> ThemeWagon</span>
            </p>
            <p>
              Demo Images: <span className="text-[#2c98f0]">Unsplash.com</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
