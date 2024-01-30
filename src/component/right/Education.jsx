import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const educationData = [
  {
    id: 1,
    title: "Bachelor's in Computer Science",
    institution: "University XYZ",
    year: "2018-2022",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Master's in Data Science",
    institution: "ABC University",
    year: "2022-2024",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: 3,
    title: "Bachelor's in Mathematics",
    institution: "123 College",
    year: "2016-2020",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 4,
    title: "Ph.D. in Computer Engineering",
    institution: "Tech Institute",
    year: "2024-2028",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    id: 5,
    title: "Associate Degree in Electronics",
    institution: "Community College",
    year: "2015-2017",
    description: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
  },
];


function Education() {
  const [open, setOpen] = useState(false);

  const springProps = useSpring({
    height: open ? "max-content" : "0",
    backgroundColor: open ? "#ff0000" : "#0055aa",
  });

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="">
      <div>
        <p className="text-xs font-medium textp tracking-[5px] my-10">
          EDUCATION
        </p>
        <h1 className="font-bold text-[#000] text-xl tracking-[5px]">
          EDUCATION
        </h1>
      </div>
      <div className="">
        <div
          className="w-full h-10 bg-blue-500 cursor-pointer"
          onClick={handleClick}
        >
          click here
        </div>
        <div
          className={`w-full overflow-hidden h-0  transition-all duration-500 ${
            open ? "overflow-visible transition-all duration-500" : ""
          }`}
          style={springProps}
        >
          {educationData.map((education) => (
            <div key={education.id}>
              <h2 className="font-bold">{education.title}</h2>
            
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Education;
