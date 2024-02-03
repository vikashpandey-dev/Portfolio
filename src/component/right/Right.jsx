import React from "react";
import Carousel from "./Carousel";
import Who from "./Who";
import Do from "./Do";
import Skills from "./Skills";
import Education from "./Education";
import Experence from "./Experence";
import Mywork from "./Mywork";
import Contact from "./Contact";
function Right() {
  return (
    <>
      <div className="w-full bg-red-500">
        <Carousel />
      </div>
      <div className="my-48 px-3 md:px-16">
        <Who />
      </div>
      <div className="my-48 px-3 md:px-16">
        <Do/>
      </div>
      <div className="my-48 px-3 md:px-16">
        <Skills/>
      </div>
      <div className="my-48 px-3 md:px-16">
        <Education/>
      </div>
      <div className="my-48 px-3 md:px-16">
        <Experence/>
      </div>
      <div className="my-48 px-3 md:px-16">
      <Mywork/>
      </div>
      <div className="my-48 px-3 md:px-16">
        <Contact/>
      </div>
    </>
  );
}

export default Right;
