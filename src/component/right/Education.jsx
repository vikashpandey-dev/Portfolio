import React, { useState } from "react";

const educationData = [
  {
    id: 1,
    name: "Master Degree Graphic Design	",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel consequat turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel consequat turpis.",
  },
  {
    id: 2,
    name: "Bachelor Degree of Computer Science",
    content:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel consequat turpis.",
  },
  {
    id: 3,
    name: "Diploma in Information Technology",
    content:
      "Nullam ullamcorper odio at dolor fermentum, nec volutpat dui pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel consequat turpis.",
  },
  {
    id: 4,
    name: "Diploma in Information Technology",
    content:
      "Quisque commodo metus eu neque cursus, eget ullamcorper velit interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel consequat turpis.",
  },
];

function EducationItem({ data, isOpen, onClick }) {
  return (
    <div className="mb-1 " data-aos="fade-down-left"  data-aos-duration="800" data-aos-delay='100' >
      <div
        className={`w-full h-12  cursor-pointer setborder transition-all duration-1000 px-10 flex justify-between items-center text-normal font-normal tracking-[2px] text-[#333333] `}
        style={{ background: `${isOpen ? "#157bcd" : "#f2f3f7"}`,color: `${isOpen ? "#fff" : "#000"}` }}
        onClick={onClick}
      >
        <div className="text-sm font-normal"> {data.name} </div>
        <div className="text-xl">{isOpen ? "-" : "+"}</div>
      </div>
      <div className="py-1 transition-all duration-1000">
  <div
    className={`w-full overflow-hidden transition-all duration-5000 border border-inherit ${
      isOpen ? "visible h-[150px]" : "hidden h-0"
    }`}
  >
    <div className="px-10 py-5">
      <p className="text-sm font-normal textp leading-8">{data.content}</p>
    </div>
  </div>
</div>

    </div>
  );
}

function Education() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <div className="" data-aos="fade-down-left"  data-aos-duration="800" data-aos-delay='100'>
        <p className="text-xs font-medium textp tracking-[5px] my-10">
          EDUCATION
        </p>
        <h1 className="font-bold text-[#000] text-xl tracking-[5px]">
          EDUCATION
        </h1>
      </div>
      <div className="mt-7 h-auto">
        {educationData.map((item, index) => (
          <EducationItem
            key={item.id}
            data={item}
            isOpen={openIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Education;
