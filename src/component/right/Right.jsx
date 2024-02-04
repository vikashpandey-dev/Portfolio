import React, { useEffect } from "react";
import Carousel from "./Carousel";
import Who from "./Who";
import { useDispatch, useSelector } from "react-redux";

import Do from "./Do";
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experence";
import Mywork from "./Mywork";
import Contact from "./Contact";
function Right() {
  const scroll = useSelector((state) => state);
  console.log(scroll,"vvvvvvvvvvvvv")
  useEffect(()=>{
    const element = document.getElementById(scroll.scroll);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  },[scroll])
  const sections = [
    { component: <Who />, id: "ABOUT" },
    { component: <Do />, id: "SERVICES" },
    { component: <Skills />, id: "SKILLS" },
    { component: <Education />, id: "EDUCATION" },
    { component: <Experience />, id: "EXPERIENCE" },
    { component: <Mywork />, id: "WORK" },
    { component: <Contact />, id: "CONTACT" },
  ];
  return (
        <>
      <div className="w-full" id="HOME">
        <Carousel />
      </div>
      {sections.map(({ component, id }) => (
        <div key={id} className={`my-48 px-3 md:px-16`} id={id}>
          {component}
        </div>
      ))}
    </>
  );
}

export default Right;
