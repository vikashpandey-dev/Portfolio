import React from "react";
import Carousel from "./Carousel";
import Who from "./Who";
import Do from "./Do";
import Skills from "./Skills";
import Education from "./Education";
function Right() {
  return (
    <>
      <div>
        <Carousel />
      </div>
      <div className="my-48 px-16">
        <Who />
      </div>
      <div className="my-48 px-16">
        <Do/>
      </div>
      <div className="my-48 px-16">
        <Skills/>
      </div>
      <div className="my-48 px-16">
        <Education/>
      </div>
    </>
  );
}

export default Right;
