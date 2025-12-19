import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Project One",
      description: "A stunning web application built with modern technologies and smooth animations.",
      link: "#",
    },
    {
      id: 2,
      title: "Project Two",
      description: "Creative solution combining design and functionality for seamless user experience.",
      link: "#",
    },
    {
      id: 3,
      title: "Project Three",
      description: "Full-stack application showcasing responsive design and advanced features.",
      link: "#",
    },
    {
      id: 4,
      title: "Project Four",
      description: "Interactive platform with real-time updates and elegant UI components.",
      link: "#",
    },
    {
      id: 5,
      title: "Project Five",
      description: "E-commerce solution with payment integration and beautiful product showcase.",
      link: "#",
    },
    {
      id: 6,
      title: "Project Six",
      description: "SaaS application with comprehensive dashboard and user management system.",
      link: "#",
    },
  ];

  return (
    <div id="projects" className="w-full bg-black overflow-hidden">
      
      {/* White Section */}
      <div className="w-full min-h-screen bg-white flex flex-col items-center justify-center px-6 md:px-12 py-20 md:py-12 relative overflow-hidden">
        
        {/* Decorative Elements */}
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 border-2 border-black/5"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />

        <motion.div
          className="absolute bottom-20 left-20 w-24 h-24 border-2 border-black/5 rounded-full"
          animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Content */}
        <motion.div
          className="relative z-10 text-center max-w-5xl mb-16 md:mb-20"
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
            My Work
          </motion.p>

          {/* Main Heading */}
          <motion.h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-black leading-tight mb-8 tracking-tight"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Featured
            <br />
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Showcase of my best projects demonstrating design, functionality, and innovative solutions.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-7xl relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <motion.div
                className="relative h-72 md:h-80 rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-400 transition-colors duration-300 bg-gradient-to-br from-gray-50 to-white shadow-lg hover:shadow-xl"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-6 md:p-8">
                  {/* Title */}
                  <motion.div
                    animate={{ y: 0 }}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl md:text-3xl font-black text-black mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                  </motion.div>

                  {/* Description */}
                  <div className="flex flex-col justify-between flex-1">
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6 group-hover:text-gray-800 transition-colors duration-300">
                      {project.description}
                    </p>

                    {/* Link */}
                    <motion.div
                      className="flex items-center gap-2 text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-300"
                      animate={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span>View Project</span>
                      <motion.span
                        animate={{ x: 0 }}
                        whileHover={{ x: 3 }}
                        transition={{ duration: 0.3 }}
                      >
                        →
                      </motion.span>
                    </motion.div>
                  </div>
                </div>

                {/* Hover Line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
