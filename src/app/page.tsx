'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

// ==================== Enhanced Page Component ====================
export default function EnhancedPortfolio() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollYProgress } = useScroll();

  return (
    <>
      <BootLoader onLoaded={() => setIsLoaded(true)} />
      
      {isLoaded && (
        <main className="relative min-h-screen bg-gradient-to-b from-[#08102B] via-[#0a1540] to-[#08102B]">
          <ParticleField />
          <GridBackground />
          <ScanLine />
          
          {/* Hero Section */}
          <section className="relative z-20 min-h-screen flex flex-col justify-center items-center text-center p-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="mb-8 relative"
            >
              <div className="w-48 h-48 md:w-64 md:h-64 relative">
                {/* Rotating rings */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-2 border-cyan-400/30 rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-4 border-2 border-violet-400/30 rounded-full"
                />
                
                {/* Profile image */}
                <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-cyan-400/50 shadow-2xl shadow-cyan-400/30">
                  <div className="w-full h-full bg-gradient-to-br from-violet-900 to-cyan-900" />
                </div>
                
                {/* Corner accents */}
                <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-cyan-400" />
                <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-cyan-400" />
                <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-cyan-400" />
                <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-cyan-400" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-center gap-2 text-cyan-400 font-mono text-sm mb-2">
                <span className="animate-pulse">▶</span>
                <span>SYSTEM_ONLINE</span>
                <span className="animate-pulse">◀</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-400">
                  ENG. SIBONGILE
                </span>
              </h1>
              
              <div className="relative inline-block">
                <h2 className="text-2xl md:text-4xl font-semibold text-cyan-400 tracking-wider">
                  Electronics & Telecommunications
                </h2>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 1 }}
                  className="h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mt-2"
                />
              </div>
              
              <p className="font-mono text-violet-400/80 text-lg">
                {'<'} Powering Malawi | ESCOM Link Systems {'>'}
              </p>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
              <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full p-1">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1 h-2 bg-cyan-400 rounded-full mx-auto"
                />
              </div>
            </motion.div>
          </section>

          {/* Enhanced Skills Matrix */}
          <section className="relative z-20 py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold mb-16 text-white flex items-center gap-4"
              >
                <span className="text-cyan-400">■</span>
                Technical Proficiency Matrix
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-cyan-400 text-2xl"
                >
                  _
                </motion.span>
              </motion.h2>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <RadarChart />
                <SkillBars />
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section className="relative z-20 py-20 px-4">
            <div className="max-w-5xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold mb-10 text-white flex items-center gap-4"
              >
                <span className="text-violet-400">■</span>
                ESCOM SCADA Division
              </motion.h2>
              
              <TimelineCard />
            </div>
          </section>

          {/* Education Section */}
          <section className="relative z-20 py-20 px-4">
            <div className="max-w-5xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold mb-10 text-white flex items-center gap-4"
              >
                <span className="text-cyan-400">■</span>
                Education
              </motion.h2>
              
              <EducationCard />
            </div>
          </section>

          {/* Footer */}
          <footer className="relative z-20 text-center py-10 border-t border-cyan-400/20">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-mono text-xs text-gray-500 space-y-2"
            >
              <p>[DATA HASH: 0x00FFFF_6B46C1_ESCOM_V1.4]</p>
              <p>Deployed on Vercel | © 2024 All Rights Reserved</p>
            </motion.div>
          </footer>
        </main>
      )}
    </>
  );
}

// ==================== Boot Loader Component ====================
function BootLoader({ onLoaded }: { onLoaded: () => void }) {
  const [progress, setProgress] = useState(0);
  const [currentLog, setCurrentLog] = useState(0);
  
  const logs = [
    '>>> Initializing quantum processors...',
    '>>> Loading neural network modules...',
    '>>> Establishing secure connection...',
    '>>> Decrypting profile data...',
    '>>> Rendering interface...',
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(onLoaded, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    const logInterval = setInterval(() => {
      setCurrentLog(prev => Math.min(prev + 1, logs.length - 1));
    }, 600);

    return () => {
      clearInterval(progressInterval);
      clearInterval(logInterval);
    };
  }, [onLoaded]);

  return (
    <AnimatePresence>
      {progress < 100 && (
        <motion.div
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-[#08102B] flex flex-col items-center justify-center p-8"
        >
          <div className="w-full max-w-2xl space-y-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-4xl font-bold text-cyan-400 mb-2 font-mono">
                ESCOM_SYS
              </h1>
              <p className="text-violet-400 text-sm">Engineer Profile Loading...</p>
            </motion.div>

            <div className="font-mono text-sm space-y-2 h-32">
              {logs.slice(0, currentLog + 1).map((log, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-cyan-400"
                >
                  {log}
                  {index === currentLog && (
                    <motion.span
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                    >
                      ▌
                    </motion.span>
                  )}
                </motion.p>
              ))}
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono text-cyan-400">
                <span>LOADING</span>
                <span>{progress}%</span>
              </div>
              <div className="h-2 bg-violet-900/30 rounded-full overflow-hidden border border-cyan-400/30">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  className="h-full bg-gradient-to-r from-cyan-400 to-violet-400"
                  transition={{ duration: 0.1 }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ==================== Particle Field ====================
function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{x: number, y: number, vx: number, vy: number, size: number}> = [];
    
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(0, 255, 255, 0.5)';
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        particles.slice(i + 1).forEach(p2 => {
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 opacity-20" />;
}

// ==================== Grid Background ====================
function GridBackground() {
  return (
    <div className="fixed inset-0 z-0 opacity-10">
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(#00FFFF 1px, transparent 1px),
          linear-gradient(90deg, #00FFFF 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px'
      }} />
    </div>
  );
}

// ==================== Scan Line ====================
function ScanLine() {
  return (
    <motion.div
      animate={{ y: ['0vh', '100vh'] }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      className="fixed left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-20 z-[5]"
    />
  );
}

// ==================== Radar Chart ====================
function RadarChart() {
  const skills = [
    { name: 'Network Eng.', value: 85, max: 100 },
    { name: 'Python', value: 90, max: 100 },
    { name: 'MATLAB', value: 75, max: 100 },
    { name: 'SCADA', value: 80, max: 100 },
    { name: 'Cloud', value: 70, max: 100 },
    { name: 'Fiber Optics', value: 85, max: 100 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="aspect-square max-w-md mx-auto relative">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          {/* Grid circles */}
          {[20, 40, 60, 80, 100].map((r, i) => (
            <circle
              key={i}
              cx="100"
              cy="100"
              r={r}
              fill="none"
              stroke="#00FFFF"
              strokeOpacity={0.1}
              strokeWidth="0.5"
            />
          ))}
          
          {/* Grid lines */}
          {skills.map((_, i) => {
            const angle = (i * 360) / skills.length - 90;
            const rad = (angle * Math.PI) / 180;
            const x = 100 + 100 * Math.cos(rad);
            const y = 100 + 100 * Math.sin(rad);
            
            return (
              <line
                key={i}
                x1="100"
                y1="100"
                x2={x}
                y2={y}
                stroke="#00FFFF"
                strokeOpacity={0.1}
                strokeWidth="0.5"
              />
            );
          })}
          
          {/* Data polygon */}
          <motion.polygon
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            points={skills.map((skill, i) => {
              const angle = (i * 360) / skills.length - 90;
              const rad = (angle * Math.PI) / 180;
              const value = (skill.value / skill.max) * 100;
              const x = 100 + value * Math.cos(rad);
              const y = 100 + value * Math.sin(rad);
              return `${x},${y}`;
            }).join(' ')}
            fill="rgba(107, 70, 193, 0.3)"
            stroke="#6B46C1"
            strokeWidth="2"
          />
          
          {/* Data points */}
          {skills.map((skill, i) => {
            const angle = (i * 360) / skills.length - 90;
            const rad = (angle * Math.PI) / 180;
            const value = (skill.value / skill.max) * 100;
            const x = 100 + value * Math.cos(rad);
            const y = 100 + value * Math.sin(rad);
            
            return (
              <motion.g key={i}>
                <motion.circle
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  cx={x}
                  cy={y}
                  r="3"
                  fill="#00FFFF"
                />
                
                {/* Labels */}
                <text
                  x={100 + 110 * Math.cos(rad)}
                  y={100 + 110 * Math.sin(rad)}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="text-[8px] fill-cyan-400 font-mono"
                >
                  {skill.name}
                </text>
              </motion.g>
            );
          })}
        </svg>
      </div>
    </motion.div>
  );
}

// ==================== Skill Bars ====================
function SkillBars() {
  const skills = [
    { name: 'Network Engineering (CCNA)', level: 85, color: 'from-cyan-400 to-blue-500' },
    { name: 'Python Programming', level: 90, color: 'from-violet-400 to-purple-500' },
    { name: 'MATLAB & Simulink', level: 75, color: 'from-pink-400 to-rose-500' },
    { name: 'SCADA Systems', level: 80, color: 'from-cyan-400 to-teal-500' },
    { name: 'Cloud Infrastructure', level: 70, color: 'from-violet-400 to-indigo-500' },
    { name: 'Fiber Optic Networks', level: 85, color: 'from-cyan-400 to-sky-500' },
  ];

  return (
    <div className="space-y-6">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="space-y-2"
        >
          <div className="flex justify-between items-center">
            <span className="text-sm font-mono text-cyan-400">{skill.name}</span>
            <span className="text-xs font-mono text-violet-400">{skill.level}%</span>
          </div>
          
          <div className="h-2 bg-gray-800/50 rounded-full overflow-hidden border border-cyan-400/20">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: "easeOut" }}
              className={`h-full bg-gradient-to-r ${skill.color} relative`}
            >
              <motion.div
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              />
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// ==================== Timeline Card ====================
function TimelineCard() {
  const achievements = [
    'Engineered network anomaly AI model',
    'Completed SCADA onboarding training',
    'Monitoring electrical supply frequency',
    'Implemented high-availability systems'
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-violet-900/20 to-cyan-900/20 p-8 rounded-lg border border-cyan-400/30 backdrop-blur-sm"
    >
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 animate-pulse" />
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-cyan-400 mb-2">
              Systems & Network Specialist
            </h3>
            <p className="text-gray-300 mb-4 border-l-2 border-cyan-400 pl-4">
              Focus on managing and optimizing high-standard electrical supply and customer satisfaction.
            </p>
          </div>
        </div>

        <div className="pl-6">
          <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <span className="text-violet-400">{'>'}</span>
            Key Technical Achievements
          </h4>
          <div className="space-y-3">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 text-gray-400 font-mono text-sm group hover:text-cyan-400 transition-colors"
              >
                <span className="text-cyan-400 group-hover:scale-125 transition-transform">▸</span>
                <span>{achievement}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ==================== Education Card ====================
function EducationCard() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 p-6 rounded-lg border-l-4 border-cyan-400 backdrop-blur-sm hover:scale-105 transition-transform"
      >
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs">
            <span>📚</span>
            <span>DEGREE</span>
          </div>
          <h3 className="text-xl font-bold text-white">
            B.Eng. Electronics & Telecommunications
          </h3>
          <p className="text-violet-400">
            Malawi University of Business and Applied Sciences
          </p>
          <p className="text-sm font-mono text-gray-400">
            Graduation: 2026
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="bg-gradient-to-br from-violet-900/20 to-purple-900/20 p-6 rounded-lg border-l-4 border-violet-400 backdrop-blur-sm hover:scale-105 transition-transform"
      >
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-violet-400 font-mono text-xs">
            <span>🔬</span>
            <span>FINAL YEAR PROJECT</span>
          </div>
          <h3 className="text-xl font-bold text-white">
            Network Anomaly AI System
          </h3>
          <p className="text-gray-400 text-sm">
            Low-cost AI model utilizing Python for data processing with custom dashboard interface
          </p>
        </div>
      </motion.div>
    </div>
  );
}
