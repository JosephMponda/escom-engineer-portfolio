'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import BootLoader from '@/components/BootLoader';
import CircuitBG from '@/components/CircuitBG';
import SectionWrapper from '@/components/SectionWrapper';
import HexaSkills from '@/components/HexaSkills';

// --- Hero Section Content ---
const CLIENT_NAME = "ENG. [Client Name]";
const UNIVERSITY_NAME = "[University Name]";

// --- Main Page Component ---
export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <BootLoader onLoaded={() => setIsLoaded(true)} />

      {isLoaded && (
        <main>
          <CircuitBG />

          {/* --- HERO SECTION --- */}
          <section className="relative z-20 min-h-screen flex flex-col justify-center items-center text-center p-8 overflow-hidden">
            
            {/* Profile Image with Glitch/Pulse Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-8 w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-accent-cyan/50 shadow-2xl shadow-accent-cyan/30
              bg-gray-700
              "
            >
              <img
                src="/profile-placeholder.jpg" 
                alt={`${CLIENT_NAME} Profile`}
                className="w-full h-full object-cover animate-glitch-pulse" 
                style={{ filter: 'grayscale(80%) saturate(150%) brightness(120%)' }}
              />
            </motion.div>

            {/* Large Headline - Slides in from the left */}
            <motion.h1
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl md:text-7xl font-extrabold text-white mb-4"
            >
              {CLIENT_NAME}
            </motion.h1>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-2xl md:text-4xl font-semibold text-accent-cyan tracking-wider mb-6"
            >
              Electronics & Telecommunications Engineer.
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="font-mono text-lg text-accent-violet/80"
            >
              // Powering Malawi | ESCOM Link Systems.
            </motion.p>
          </section>
          
          {/* --- ESCOM ROLE SECTION --- */}
          <SectionWrapper id="escom" title="ESCOM Systems Integration">
            <div className="bg-accent-violet/10 p-8 rounded-lg shadow-xl border border-accent-violet/30">
                <h3 className="text-3xl font-bold text-accent-cyan mb-4">Systems & Network Specialist</h3>
                <p className="text-lg text-gray-300 mb-6 border-l-2 border-accent-cyan pl-3">
                    Focus on managing and optimizing high-availability telecommunication links that form the backbone for the national power grid&apos;s operational systems.
                </p>

                <h4 className="text-xl font-semibold text-white mb-3">Key Technical Achievements:</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-400 font-mono">
                    <li>Engineered a **99.999% uptime** Microwave Link Redundancy system across 5 substations.</li>
                    <li>Successfully migrated the legacy SCADA network infrastructure to an IPv6/MPLS backbone, reducing latency by **40%**.</li>
                    <li>Deployed a Fibre Optic ring network in the Southern Region, significantly enhancing data capacity for remote terminal units (RTUs).</li>
                </ul>
            </div>
          </SectionWrapper>
          
          {/* --- EDUCATION SECTION --- */}
          <SectionWrapper id="education" title="Education & Academic Profile">
            <div className="space-y-6">
                <div className="bg-bg-midnight/50 p-6 rounded-lg border-l-4 border-accent-cyan/50">
                    <p className="text-2xl font-bold text-white">B.Eng. Electronics & Telecommunications</p>
                    <p className="text-xl text-accent-violet">{UNIVERSITY_NAME}</p>
                    <p className="text-sm font-mono text-gray-400 mt-2">Graduation: November 20XX</p>
                </div>
                
                <div className="bg-bg-midnight/50 p-6 rounded-lg border-l-4 border-accent-violet/50">
                    <p className="text-xl font-semibold text-white mb-2">Final Year Project Highlight: IoT Energy Monitoring System</p>
                    <p className="text-gray-400">Designed and implemented a low-power, wide-area network (LPWAN) solution for real-time power consumption monitoring, utilizing Python for data processing and a custom dashboard interface.</p>
                </div>
            </div>
          </SectionWrapper>

          {/* --- SKILLS MATRIX SECTION --- */}
          <SectionWrapper id="skills" title="Technical Proficiency Matrix">
            <HexaSkills 
                skills={[
                    "Network Engineering (CCNA)",
                    "Python",
                    "MATLAB",
                    "SCADA Systems",
                    "Fibre Optics",
                    "Cloud Infrastructure",
                ]} 
            />
          </SectionWrapper>

          {/* --- FOOTER / DATA HASH --- */}
          <footer className="relative z-20 text-center py-10">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="font-mono text-xs text-gray-500"
            >
              [DATA HASH: 0x00FFFF_6B46C1_ESCOM_V1.4] - Deployed on Vercel
            </motion.p>
          </footer>
        </main>
      )}
    </>
  );
}
