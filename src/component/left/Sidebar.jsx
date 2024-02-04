import React, { useState } from 'react';
import Navbar from './Navbar';
import { FaHeart } from "react-icons/fa";
const Sidebar = () => {
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
          name: "BLOG",
        },
        {
          name: "CONTACT",
        },
      ];
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
     <button className="toggle-button" onClick={toggleSidebar}>
        Togglessssssssssssssssssssssssssss
      </button>
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
     
     <div className="sidebar-content">
     <div className="mainnav w-full    bg-[#f2f3f7] flex justify-center items-center flex-col py-14 sticky top-0 ">
        <div className=" w-40 h-40 ">
          <img
            className="w-full h-full rounded-full object-cover"
            src="https://images.unsplash.com/photo-1705899354898-bbc30144e432?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="flex justify-center items-center flex-col py-5 gap-2">
          <h1 className="text-2xl font-bold">Vikash Pandey</h1>
    {/* <Sidebar/> */}

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
                <li className="py-2 text-sm font-normal tracking-[2px] textrgba">
                  <a href="#">{val.name}</a>
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
          <p>Made with by  <span className="text-[#2c98f0]">Colorlib</span></p>
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
   </div>
    </>
  
  );
};

export default Sidebar;
