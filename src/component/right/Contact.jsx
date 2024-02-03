import React from "react";
import { TbGlobe } from "react-icons/tb";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaRegMap } from "react-icons/fa";
function Contact() {
  return (
    <>
      <div className="">
        <div>
          <p className="text-xs font-medium textp tracking-[5px] my-10">
            MY WORK
          </p>
          <h1 className="font-bold text-[#000] text-xl tracking-[5px]">
            RECENT WORK
          </h1>
        </div>
        <div className="grid grid-cols-2 mt-7">
          <div className="leftcols">
            <div className="w-full items-center gap-3 flex">
              <div className="w-28 h-28 bg-[#f2f3f7] flex justify-center text-4xl text-[#2c98f0] items-center">
                <TbGlobe />
              </div>
              <div className="text-[#2c98f0]">
                <p className="font-medium text-[14px]">info@domain.com</p>
              </div>
            </div>
            <div className="w-full items-center gap-3 flex my-3">
              <div className="w-28 h-28 bg-[#f2f3f7] flex justify-center text-4xl text-[#2c98f0] items-center">
                <FaRegMap />
              </div>
              <div className="text-[#000]  w-[200px]">
                <p className="font-light text-[14px]">198 West 21th Street, Suite 721 New York NY 10016</p>
              </div>
            </div>
            <div className="w-full items-center gap-3 flex">
              <div className="w-28 h-28 bg-[#f2f3f7] flex justify-center text-4xl text-[#2c98f0] items-center">
                <FaPhoneFlip />
              </div>
              <div className="text-[#2c98f0]">
                <p className="font-medium text-[14px]">
+123 456 7890</p>
              </div>
            </div>
          </div>
          <div className="rightcols w-full">
          <div className="w-full mb-3">
            <input type="text" placeholder="Name" className="w-full bg-[#f2f3f7]  py-5 px-3 font-light text-normal outline-none"  />
          </div>
          <div className="w-full mb-3">
            <input type="text" placeholder="Email" className="w-full bg-[#f2f3f7]  py-5 px-3 font-light text-normal outline-none"  />
          </div>
          <div className="w-full mb-3">
            <input type="text" placeholder="Subject" className="w-full bg-[#f2f3f7]  py-5 px-3 font-light text-normal outline-none"  />
          </div>
          <div className="w-full mb-3">
            <textarea  type="text" placeholder="Message" className="w-full h-32 bg-[#f2f3f7]   px-3 font-light text-normal outline-none"  />
          </div>
          <div className="bg-[#2c98f0] w-fit">
            <button className="px-4 py-3 text-[#fff] text-xs">SEND MESSAGE</button>
          </div>
          </div>
         
        </div>
      </div>
    </>
  );
}

export default Contact;
