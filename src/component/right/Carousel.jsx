import React, { useEffect, useState } from "react";
import img from "../../../src/assets/img_bg_1.jpg";
import { useSpring, animated, config } from "react-spring";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineBars } from "react-icons/ai";
import Sidebar from "../left/Sidebar";
function Carousel() {
  const counter = useSelector((state) => state);
  console.log(counter, "countercounter");
  const dispatch = useDispatch();
  let mydata = [
    {
      greeting: "Hi!",
      name: "Ashish",
      description: "100% html5 tailwind React",
      madeBy: "colorlib.com",
      backgroundImage:
        "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fHww",
    },
    // Add more objects as needed
  ];

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const animationProps = useSpring({
    opacity: isMounted ? 1 : 0,
    transform: isMounted ? "translateY(0%)" : "translateY(100%)",
    config: config.slow,
  });

  const handleopen = () => {
    const settrue = true;
    let scrollval=""
    dispatch({ type: "scroll", payload:scrollval});
    dispatch({ type: "Toggle", payload: !counter.toggle });
    
  }
  return (
    <div className="carousel w-full h-[100vh] ">
      {mydata.map((val, i) => (
        <div
          key={i} // Provide a unique key for each element
          className="bg-cover  bg-center h-full"
          style={{ backgroundImage: `url('${img}')` }}
        >
          {counter.toggle?(null):(  <div className="text-4xl px-5 w-fit  closedd sticky top-2" onClick={handleopen}>
            <AiOutlineBars />
          </div>)}
        
          <animated.div style={animationProps} className="breakmedia">
            <div className="px-16 py-10 tracking-[2px] md:pt-[22%] ">
              <h1 className=" text-2xl md:text-6xl font-bold">
                {val.greeting}
              </h1>
              <h1 className=" text-2xl md:text-6xl font-bold py-4">
                I'm {val.name}
              </h1>
              <Sidebar />
              <p className="text-xl font-medium text-[your_color]">
                {val.description}
              </p>
            </div>
            <div className="px-16 h-12">
              <button className="px-10 tracking-[2px] py-3 font-medium text-[your_button_color] border border-gray-950">
              <a href="/public/ashish.pdf" download="Ashish_Pandey_Resume.pdf">Download Resume</a>

              </button>
            </div>
          </animated.div>
        </div>
      ))}
    </div>
  );
}

export default Carousel;
