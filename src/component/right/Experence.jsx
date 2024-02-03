import React from "react";
import { GoPencil } from "react-icons/go";
function Experence() {
  const jobPositions = [
    {
      title: "Full Stack Developer",
      company: "",
      year: "2017-2018",
      code: "#ec5453",
      description:
        "Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.",
    },
    {
      title: "Front End Developer",
      company: "Google Company",
      year: "2017-2018",
      
      code: "#f9bf3f",
      description:
        "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life. One day, however, a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
    },
    {
      title: "System Analyst",
      company: "",
      year: "2017-2018",
      code: "#a84cb8",
      description:
        "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life. One day, however, a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
    },
    {
      title: "Creative Designer",
      company: "",
      year: "2017-2018",
      code: "#2c98f0",
      description:
        "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life. One day, however, a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
    },
    {
      title: "UI/UX Designer",
      company: "Envato",
      year: "2017-2018",
      code: "#a84cb8",
      
      description:
        "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life. One day, however, a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
    },
    {
    
    },
  ];

  return (
    <>
      <div className="relative">
        <div>
          <p className="text-xs font-medium textp tracking-[5px] my-10">
            EXPERIENCE
          </p>
          <h1 className="font-bold text-[#000] text-xl tracking-[5px]">
            WORK EXPERIENCE
          </h1>
        </div>
        <div className="xcxcxc  md:px-12 mt-7">
          {jobPositions.map((val, i) => (
            <div key={i} className="relative px-2 md:px-5">
              <div className={i === 5 ? 'absolute left-[-47px] shadows w-8 h-8 bottom-0.5 rounded-full' : `absolute left-[-50px] shadows w-10 h-10 rounded-full `} style={{background:`${val.code}`}}>
                {i === 5 ? null : <GoPencil className="ddddddddd iconscenter text-xl font-medium text-white" />}
              </div>
              <div className={i === 5 ? 'hidden bg-white' : 'bg-[#f2f3f7] my-3 py-5 px-10'}>
                <div className="flex gap-1 md:gap-2">
                  <h1 className=" text-smmd:text-xl font-medium">{val.title}</h1>
                  <p className="text-normal font-normal">{val.year}</p>
                </div>
                <p className="textp text-medium py-3">{val.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Experence;
