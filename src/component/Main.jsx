import React from "react";
import Navbar from "./left/Navbar";
import Right from "./right/Right";
import Do from "./right/Do";
function Main() {
  return (
    <>
      <div className="flex w-[78%]  justify-center mx-auto">
        <div className="w-[500px]  ">
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
