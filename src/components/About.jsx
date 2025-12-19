import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <div id="about" className="w-full bg-black overflow-hidden">
      
      {/* SECTION 1: BLACK BACKGROUND - PREMIUM HEADING */}
      <div className="w-full min-h-screen bg-black flex flex-col items-center justify-center px-6 md:px-12 py-12 relative overflow-hidden">
        
        {/* Decorative Background - Enhanced */}
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

        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        {/* Main Content */}
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
            Who I Am
          </motion.p>

          {/* Main Heading - Extra Premium */}
          <motion.h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-8 md:mb-10 tracking-tight"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Frontend Developer
            <br />
            with{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Creative Vision
            </span>
          </motion.h2>

          {/* Premium Description */}
          <motion.p
            className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed md:leading-relaxed max-w-3xl mx-auto mb-12 md:mb-16 font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            I specialize in building responsive, accessible, and visually stunning web applications. From React.js to Tailwind CSS, I craft digital experiences that engage users and solve real problems with elegant code.
          </motion.p>

          {/* Skills Grid - Enhanced */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {["React.js", "JavaScript", "Tailwind CSS", "Framer Motion", "Next.js", "Web Design"].map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.08, y: -3 }}
                className="px-4 py-3 md:px-6 md:py-4 border border-blue-500/40 rounded-xl hover:border-blue-400/80 hover:bg-blue-500/10 transition-all duration-300 backdrop-blur-sm group"
              >
                <p className="text-xs md:text-sm lg:text-base text-gray-300 font-semibold group-hover:text-blue-300 transition-colors">{skill}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* SECTION 2: WHITE BACKGROUND - PREMIUM IMAGE & STORY */}
      <div className="w-full min-h-screen bg-white flex flex-col items-center justify-center px-6 md:px-12 py-12 relative overflow-hidden">
        
        {/* Decorative Elements - Subtle */}
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

        {/* Main Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 md:gap-20 max-w-6xl w-full items-center relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Professional Image */}
          <motion.div
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.03, y: -5 }}
              className="relative w-full md:w-96 h-96 rounded-3xl overflow-hidden shadow-2xl"
            >
              {/* Purani Picture */}
              <img 
                src="https://res.cloudinary.com/dzagjkjmb/image/upload/v1738743426/myzkdqtyfoua9ru6frja.jpg"
                alt="Prinsika"
                className="w-full h-full object-cover"
              />

              {/* Premium Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-50" />
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            className="order-1 md:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Heading */}
            <motion.h3
              className="text-4xl md:text-5xl lg:text-6xl font-black text-black mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Passionate About
              <br />
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Building Great
              </span>
              <br />
              Software
            </motion.h3>

            {/* Story Text - Clean */}
            <motion.div
              className="space-y-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
                I started my coding journey with curiosity and transformed it into a craft. Every line of code tells a story, and every project is an opportunity to create something meaningful.
              </p>

              <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
                I believe in the power of clean code, intuitive design, and seamless user experiences. Whether it's a complex React application or a beautifully animated landing page, I pour passion into every project.
              </p>

              <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
                Always exploring new technologies, always learning, always improving. That's the developer I am, and that's what drives me forward.
              </p>
            </motion.div>

            {/* Divider */}
            <motion.div
              className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
