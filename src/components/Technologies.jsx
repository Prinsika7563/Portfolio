import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";

const techStack = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-500" /> },
  { name: "React", icon: <FaReact className="text-blue-400" /> },
  { name: "Express", icon: <SiExpress className="text-gray-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "Java", icon: <FaJava className="text-red-600" /> },
  { name: "Python", icon: <FaPython className="text-blue-500" /> },
];

const Technologies = () => {
  return (
    <div id="technologies" className=" h-full md:h-screen flex flex-col items-center text-white">
      <h2 className=" mt-2 md:mt-4 border-b-3 border-white  text-3xl md:text-4xl font-extrabold pb-1  bg-gradient-to-r brightness-150 from-emerald-800 via-emerald-800  to-yellow-600 text-transparent bg-clip-text">
        Technologies & Skills
      </h2>
      <div className="flex items-center h-full p-10 ">
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-12 place-items-center">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="w-24 h-24 flex flex-col items-center justify-center text-center border-2 border-gray-500 rounded-lg transition-transform transform hover:scale-105 hover:border-yellow-400 duration-300 md:p-4"
            >
              <div className="text-5xl">{tech.icon}</div>
              <p className="mt-2 text-lg font-semibold">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
