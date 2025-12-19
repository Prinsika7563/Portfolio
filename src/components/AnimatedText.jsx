import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const words = ["Full Stack Developer", "Creative Problem Solver", "Tech Enthusiast"];

const AnimatedText = () => {
  const [index, setIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  if (!isClient) return null;

  return (
    <motion.div
      className="w-full text-center md:text-left"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.p
        className="text-xs md:text-sm text-gray-500 font-medium mb-4 md:mb-6 tracking-widest uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Welcome
      </motion.p>

      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tighter mb-4 md:mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        I'm
        <br />
        <span className="text-white italic font-light">Prinsika</span>
      </motion.h1>

      <motion.div
        className="relative mb-6 md:mb-8 pb-4 md:pb-6 min-h-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            className="text-lg md:text-2xl font-bold text-black"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            {words[index]}
          </motion.p>
        </AnimatePresence>
        
        <motion.div
          className="absolute bottom-0 left-0 md:left-0 h-0.5 bg-white"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </motion.div>

      <motion.p
        className="text-sm md:text-base text-gray-500 mb-8 md:mb-10 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        Building elegant, high-performance digital experiences with clean code and modern technologies.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row gap-3 md:gap-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.03, y: -1 }}
          whileTap={{ scale: 0.98 }}
          className="px-6 py-3 md:px-10 md:py-4 bg-white text-black font-semibold text-sm md:text-base rounded-none hover:bg-gray-100 transition-colors duration-200 border-2 border-white"
        >
          View Work
        </motion.a>

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.03, y: -1 }}
          whileTap={{ scale: 0.98 }}
          className="px-6 py-3 md:px-10 md:py-4 border-2 border-white text-white font-semibold text-sm md:text-base rounded-none hover:bg-white hover:text-black transition-colors duration-200"
        >
          Contact
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default AnimatedText;
