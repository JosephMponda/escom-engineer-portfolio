'use client';

import { motion } from 'framer-motion';

interface HexaSkillsProps {
  skills: string[];
}

const HexaSkills = ({ skills }: HexaSkillsProps) => {
  return (
    <div className="flex justify-center flex-wrap gap-8">
      {skills.map((skill, index) => (
        <motion.div
          key={skill}
          className="relative group w-36 h-32 flex justify-center items-center"
          whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(0, 255, 255, 0.8)' }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {/* The Hexagon Shape */}
          <div
            className="absolute inset-0 bg-accent-violet/30 transform 
            rotate-90 skew-y-[30deg] scale-x-[0.866] rounded-md
            transition duration-300 group-hover:bg-accent-violet/50 border border-accent-cyan/20
            "
          ></div>
          
          {/* Inner Content */}
          <div
            className="relative z-10 w-full h-full flex justify-center items-center 
            transform -rotate-90 skew-y-[-30deg] scale-x-[1.154]
            "
          >
            <p className="text-center text-sm font-mono text-accent-cyan group-hover:text-white transition duration-300">
              {skill}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default HexaSkills;
