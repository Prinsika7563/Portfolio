import React from "react";
import { motion } from "framer-motion";
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
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "React", icon: <FaReact /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Java", icon: <FaJava /> },
  { name: "Python", icon: <FaPython /> },
];

const Technologies = () => {
  return (
    <div id="technologies" className="w-full min-h-screen bg-white overflow-hidden">
      {/* Black Section - Heading */}
      <div className="w-full min-h-screen bg-black flex flex-col items-center justify-center px-6 md:px-12 py-12 relative overflow-hidden">
        
        {/* Decorative Background */}
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-blue-500/15 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-blue-600/15 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Content */}
        <motion.div
          className="relative z-10 text-center max-w-5xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Eyebrow */}
          <motion.p
            className="text-xs md:text-sm text-gray-500 font-semibold mb-8 tracking-[3px] uppercase"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            My Tech Stack
          </motion.p>

          {/* Main Heading */}
          <motion.h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-8 md:mb-12 tracking-tight"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Technologies
            <br />
            & Skills
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-16 md:mb-20 font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Tools and technologies I use to build beautiful, functional, and scalable web applications.
          </motion.p>

          {/* Tech Grid */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex flex-col items-center gap-3 p-4 md:p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-300 group cursor-pointer"
              >
                {/* Icon */}
                <motion.div
                  className="text-4xl md:text-5xl text-white group-hover:text-blue-400 transition-colors duration-300"
                  animate={{ rotate: 0 }}
                  whileHover={{ rotate: 360, scale: 1.15 }}
                  transition={{ duration: 0.6 }}
                >
                  {tech.icon}
                </motion.div>

                {/* Name */}
                <p className="text-sm md:text-base font-semibold text-gray-300 group-hover:text-blue-300 transition-colors duration-300">
                  {tech.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
