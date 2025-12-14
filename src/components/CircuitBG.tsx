'use client';

import { motion } from 'framer-motion';

const CircuitBG = () => {
  const pulseVariant = {
    animate: {
      strokeOpacity: [0.1, 0.3, 0.1], 
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.div
      className="fixed inset-0 z-10 opacity-30"
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 0.5 }}
      transition={{ duration: 3 }}
    >
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="circuitPattern" width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="5" cy="5" r="0.5" fill="#00FFFF" />
            
            <motion.line 
              x1="0" y1="5" x2="10" y2="5" 
              stroke="#00FFFF" 
              strokeWidth="0.1" 
              strokeOpacity="0.1"
              variants={pulseVariant} 
              animate="animate" 
            />
            <motion.line 
              x1="5" y1="0" x2="5" y2="10" 
              stroke="#00FFFF" 
              strokeWidth="0.1" 
              strokeOpacity="0.1"
              variants={pulseVariant} 
              animate="animate" 
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuitPattern)" />
      </svg>
    </motion.div>
  );
};

export default CircuitBG;
