import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";

function Navbar() {
  const dispatch = useDispatch();

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
  const handlescroll=(name)=>{
    
    dispatch({ type: "scroll", payload: name });

  }
  const [active,setActive]=useState(0)
  const handleactive=(val)=>{
    
    setActive(val)
  }
  return (
    <>
      <div className="hidden">
        <Sidebar />
      </div>
      <div className="mainnav w-full h-[100vh] pt-20  overflow-y-scroll bg-[#f2f3f7] flex justify-center items-center flex-col  sticky top-0 ">
        <div className=" w-40 h-40  ">
          <img
            className="w-full h-full rounded-full object-cover"
            src="https://images.unsplash.com/photo-1705899354898-bbc30144e432?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="flex justify-center items-center flex-col py-5 gap-2">
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
    </>
  );
}

export default Navbar;
