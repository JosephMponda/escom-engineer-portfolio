'use client';

import { motion } from 'framer-motion';

interface SectionWrapperProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, 
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 }, 
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
        duration: 0.4, 
        ease: "easeOut"
    }
  },
};

const SectionWrapper = ({ id, title, children }: SectionWrapperProps) => {
  return (
    <section id={id} className="relative z-20 pt-20 pb-16 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-10 border-l-4 border-accent-violet pl-4 text-white"
      >
        {title}
      </motion.h2>

      {/* Content Wrapper */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Helper to apply the 'item' variant to children */}
        {Array.isArray(children) ? (
            (children as React.ReactNode[]).map((child, index) => (
                <motion.div key={index} variants={item}>
                    {child}
                </motion.div>
            ))
        ) : (
            <motion.div variants={item}>{children}</motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default SectionWrapper;
