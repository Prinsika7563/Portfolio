import React from "react";

function About() {
  return (
    <div id="about" className=" h-full md:h-screen flex flex-col items-center text-white ">
      <h2 className=" mt-2 md:mt-4 border-b-3 border-white text-3xl md:text-4xl font-extrabold pb-1  bg-gradient-to-r brightness-150 from-emerald-800 via-emerald-800  to-yellow-600 text-transparent bg-clip-text">
        About Me
      </h2>
    
      <div className=" flex flex-col-reverse md:flex-row items-center justify-center md:h-screen md:w-screen p-10 gap-7 md:gap-24 ">
        <p className="text-lg text-start font-serif w-full  max-w-2xl">
          I am a Frontend Developer specializing in React.js, JavaScript,
          HTML, CSS, and Tailwind CSS. I focus on creating responsive,
          visually appealing, and user-friendly web applications with smooth
          animations using Framer Motion. Passionate about modern UI/UX
          trends, I continuously explore new frontend technologies to enhance
          performance and accessibility. Always open to learning and
          collaboration, I strive to turn creative ideas into engaging 
          experiences.
        </p>
        <img className=" h-80 w-80 shadow-xl shadow-black scale-x-[-1] rounded-2xl" src="src/assets/Video/250130-P48MNV-852.jpg" alt="" />
         
      </div>
    </div>
  );
}

export default About;
