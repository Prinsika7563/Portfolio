import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const words = ["A Full Stack Developer","I'm open to learn new technologies"];

const AnimatedText = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" text-center">
      <p className="text-2xl md:text-5xl font-bold text-center">Hi, I'm</p>
      <p className=" text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-800 to-yellow-600 brightness-150 text-transparent bg-clip-text">Prinsika</p>
      {" "}
      <AnimatePresence>
        <motion.span
          key={index}
          className=" p-3 md:p-10 text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-800 to-yellow-600 brightness-150 text-transparent bg-clip-text" 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
        >
          {words[index]}
        </motion.span> 
      </AnimatePresence>
    
    </div>
    

  );
};

export default AnimatedText;
