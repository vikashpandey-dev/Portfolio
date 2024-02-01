import React from "react";

function Experence() {
  const jobPositions = [
    {
      title: "Full Stack Developer",
      company: "",
      year: "2017-2018",
      description:
        "Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.",
    },
    {
      title: "Front End Developer",
      company: "Google Company",
      year: "2017-2018",
      description:
        "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life. One day, however, a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
    },
    {
      title: "System Analyst",
      company: "",
      year: "2017-2018",
      description:
        "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life. One day, however, a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
    },
    {
      title: "Creative Designer",
      company: "",
      year: "2017-2018",
      description:
        "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life. One day, however, a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
    },
    {
      title: "UI/UX Designer",
      company: "Envato",
      year: "2017-2018",
      description:
        "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life. One day, however, a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
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
      <div className="xcxcxc">
        {jobPositions.map((val,i)=>{
          return(
            <>
            <div className="xxx bg-[#f2f3f7] my-3 py-5 px-10">
              <div className="flex gap-5">
                <h1>{val.title}</h1>
                <p>{val.year}</p>
              </div>
              <p>{val.description}</p>
            </div>
            </>
          )
        })}
      </div>
    </div>
    </>
  );
}

export default Experence;
