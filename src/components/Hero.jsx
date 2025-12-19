import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div id='home' className="relative w-full min-h-screen bg-black overflow-hidden">
      {/* MOBILE & TABLET */}
      <div className="md:hidden w-full min-h-screen flex flex-col">
        <motion.div
          className="flex-1 flex items-center justify-center px-6 py-12 md:py-0"
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="absolute -top-40 -right-40 w-64 h-64 rounded-full bg-white/5 blur-3xl"
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <div className="relative z-10 w-full">
            <AnimatedText />
          </div>
        </motion.div>

        <motion.div
          className="flex-1 bg-white flex items-center justify-center px-6 py-12 relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <motion.div
            className="absolute top-6 right-6 w-20 h-20 border-2 border-black"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />

          <motion.div
            className="absolute bottom-6 left-6 w-16 h-16 border-2 border-black rounded-full"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="text-center z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-4xl sm:text-5xl font-black text-black mb-4">
              Let's
              <br />
              Build
            </p>
            <motion.p
              className="text-xl text-black font-light italic"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Amazing
            </motion.p>
          </motion.div>
        </motion.div>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:grid md:grid-cols-2 w-full min-h-screen">
        <motion.div
          className="bg-black flex items-center justify-center px-8 lg:px-12 py-12 relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-white/5 blur-3xl"
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative z-10 w-full max-w-xl">
            <AnimatedText />
          </div>
        </motion.div>

        <motion.div
          className="bg-white flex items-center justify-center px-8 lg:px-12 py-12 relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <motion.div
            className="absolute top-12 right-12 w-32 h-32 border-2 border-black"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />

          <motion.div
            className="absolute bottom-12 left-12 w-24 h-24 border-2 border-black rounded-full"
            animate={{ y: [0, 30, 0], x: [0, 15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="text-center z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-7xl lg:text-8xl font-black text-black mb-6">
              Let's
              <br />
              Build
            </p>
            <motion.p
              className="text-3xl text-black font-light italic"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Something Amazing
            </motion.p>
          </motion.div>

          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 h-1 bg-black"
            initial={{ width: 0 }}
            animate={{ width: "80%" }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          className="w-5 h-5 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </div>
  );
};

export default Hero;
