import React, { useState, useEffect } from "react";

function Skills() {
  const [percentage, setPercentage] = useState(45);

  const skillsData = [
    { skill: "Photoshop", percentage: 75, color: "textred", code: "#ec5453" },
    { skill: "jQuery", percentage: 60, color: "textyellow", code: "#f9bf3f" },
    { skill: "HTML5", percentage: 85, color: "textbri", code: "#a84cb8" },
    { skill: "CSS3", percentage: 90, color: "textblue", code: "#2c98f0" },
    {
      skill: "WordPress",
      percentage: 70,
      color: "textyellow",
      code: "#f9bf3f",
    },
    { skill: "SEO", percentage: 100, color: "textbri", code: "#a84cb8" }, // Add more skills as needed
  ];
  return (
    <>
      <div>
        <p className="text-xs font-medium textp tracking-[5px] my-10">
          MY SPECIALTY
        </p>
        <h1 className="font-bold text-[#000] text-xl tracking-[5px]">
          MY SKILLS
        </h1>
        <p className="my-20 textp leading-8 text-medium">
          The Big Oxmox advised her not to do so, because there were thousands
          of bad Commas, wild Question Marks and devious Semikoli, but the
          Little Blind Text didn’t listen. She packed her seven versalia, put
          her initial into the belt and made herself on the way.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-10" >
        {skillsData.map((val,i)=>{
            return(
                <>
       <div>
       <div className="flex justify-between py-2" style={{ width: `${val.percentage}%` }}>
        <h3 className="text-normal font-medium">{val.skill}</h3>
         <p className="text-medium" style={{ color: `${val.code}` }}  > {val.percentage}%</p>
        </div>
        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
          <div
            className={`flex justify-end  text-xs font-bold text-blue-100 text-center p-0.5 leading-none rounded-full` }
            style={{ width: `${val.percentage}%`,background:`${val.code}` }}
          ></div>
        </div>
       </div>
                </>
            )
        })}

      </div>
      
    </>
  );
}

export default Skills;
