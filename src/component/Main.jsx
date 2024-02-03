import React from "react";
import Navbar from "./left/Navbar";
import Right from "./right/Right";
import Do from "./right/Do";
function Main() {
  return (
    <>
      <div className="w-full md:flex xl:w-[78%]  md:justify-center md:mx-auto">
        <div className="hidden lg:w-[450px] lg:block ">
          <Navbar />
        </div>
        <div className="w-full bg-white">
          <Right />
        </div>
      </div>
    </>
  );
}

export default Main;
