'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const terminalLogs = [
  '>>> Initializing Next.js 14 Framework...',
  '>>> Verifying Framer Motion Handshake... OK',
  '>>> Securing Connection to ESCOM Network Grid...',
  '>>> Accessing Engineer Data Packet... Status: [RECEIVED]',
  '>>> Rendering Portfolio Interface...',
];

const BootLoader = ({ onLoaded }: { onLoaded: () => void }) => {
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    const totalDuration = terminalLogs.length * 0.4 + 1; 
    const timer = setTimeout(() => {
      setLoadingComplete(true);
      setTimeout(onLoaded, 1000); 
    }, totalDuration * 1000);

    return () => clearTimeout(timer);
  }, [onLoaded]);

  return (
    <AnimatePresence>
      {!loadingComplete && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg-midnight p-8"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            className="w-full max-w-2xl font-mono text-sm sm:text-base"
          >
            {terminalLogs.map((log, index) => (
              <motion.p
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.3, delay: index * 0.4 }} 
                className="text-accent-cyan mb-2"
              >
                {log}
              </motion.p>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BootLoader;
