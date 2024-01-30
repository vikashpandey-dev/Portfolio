import React from 'react';
import img from "../../../src/assets/img_bg_1.jpg"


function Carousel() {
  let mydata = [
    {
      greeting: "Hi!",
      name: "Jackson",
      description: "100% html5 tailwind React",
      madeBy: "colorlib.com",
      backgroundImage: "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fHww"
    },
    // Add more objects as needed
  ];

  

  return (
    <div className="carousel w-full h-[100vh]">
      {mydata.map((val, i) => (
      <>
        <div
          key={i} // Provide a unique key for each element
          className="bg-cover bg-center h-full    "
          style={{ backgroundImage: `url('${img}')` }}
        >
         <div className='px-16 py-10 tracking-[2px] pt-[22%] '>
            <h1 className='text-6xl font-bold'>{val.greeting}</h1>
            <h1 className='text-6xl font-bold py-4'>I'm {val.name}</h1>
            <p className='text-xl font-medium textrgba'>{val.description}</p>
         </div>
        <div className="px-16 h-12">
            <button className='px-10 tracking-[2px] py-3 font-medium textp  border border-gray-950'>Download CV</button>
        </div>
        </div>
       
      </>
      ))}
    </div>
  );
}

export default Carousel;
