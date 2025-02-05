import React from 'react';
import AnimatedText from './AnimatedText'; // Adjust the path if necessary

const Hero = () => {
  return (
    <div id='home' className=" h-screen w-screen ">
      <video 
      className="h-screen w-screen object-cover blur-[2px]"
        src="https://res.cloudinary.com/dzagjkjmb/video/upload/v1738146497/fr2qrgv3mhckqzulld55.mp4" 
        autoPlay 
        loop 
        muted
        
      ></video>
      <div className="absolute top-0 h-[80vh] w-full flex flex-col justify-center  text-white">
        <AnimatedText />
      </div>
    </div>
  );
};

export default Hero;
