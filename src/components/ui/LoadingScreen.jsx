import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onLoadingComplete }) {
  const [count, setCount] = useState(0);
  const [phaseIndex, setPhaseIndex] = useState(0);

  const bootLogs = [
    { threshold: 0, text: 'INIT_KERNEL: Initializing React & WebGL runtime...' },
    { threshold: 24, text: 'MEM_CACHE: Preloading visual assets & design tokens...' },
    { threshold: 52, text: 'SYS_ENGINE: Connecting enterprise state & database schemas...' },
    { threshold: 80, text: 'RENDER_THREAD: Applying cyberpunk aesthetic shaders...' },
    { threshold: 100, text: 'SYSTEM_READY: All services synchronized. Welcome.' }
  ];

  useEffect(() => {
    // Smooth, realistic progressive count
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onLoadingComplete();
          }, 400);
          return 100;
        }

        // Varied natural speed curve
        const increment = prev < 60 ? Math.floor(Math.random() * 4) + 2 : Math.floor(Math.random() * 6) + 3;
        const next = Math.min(100, prev + increment);

        // Update active log phase
        if (next >= 100) setPhaseIndex(4);
        else if (next >= 80) setPhaseIndex(3);
        else if (next >= 52) setPhaseIndex(2);
        else if (next >= 24) setPhaseIndex(1);

        return next;
      });
    }, 28);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      <motion.div
        key="loading-screen"
        initial={{ opacity: 1 }}
        exit={{
          opacity: 0,
          scale: 1.03,
          filter: 'blur(10px)',
          transition: { duration: 0.45, ease: 'easeInOut' }
        }}
        className="fixed inset-0 z-[999] bg-[#04060a] flex items-center justify-center p-4 font-mono select-none overflow-hidden"
      >
        {/* Subtle Ambient Radial Glowing Blooms */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-[#00f0ff]/10 via-[#00ff66]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

        {/* Floating Futuristic HUD Card */}
        <motion.div
          initial={{ opacity: 0, y: 15, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="relative max-w-md w-full rounded-2xl border border-[#1b2b48] bg-[#070c18]/90 backdrop-blur-xl p-6 sm:p-8 shadow-[0_0_60px_rgba(0,240,255,0.08)] overflow-hidden"
        >
          {/* Top Edge Neon Laser Highlight */}
          <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent" />

          {/* Header Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-[#142038] text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00ff66] animate-ping" />
              <span className="text-white font-bold tracking-widest text-[11px]">
                FELEKE ESHETU
              </span>
            </div>
            <span className="text-[10px] text-zinc-500 font-mono">
              SYS://PORTFOLIO.DEV
            </span>
          </div>

          {/* Central Glowing Cyber Telemetry Ring */}
          <div className="py-7 flex flex-col items-center justify-center">
            <div className="relative w-24 h-24 flex items-center justify-center">
              {/* Outer Pulsing Ping Ring */}
              <div className="absolute inset-0 rounded-full border border-[#00f0ff]/20 animate-ping pointer-events-none" />

              {/* Outer Counter-Clockwise Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#00f0ff] border-r-[#00f0ff]/40"
              />

              {/* Inner Clockwise Ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-2.5 rounded-full border-2 border-transparent border-b-[#00ff66] border-l-[#00ff66]/40"
              />

              {/* Center Large Glowing Percentage */}
              <div className="relative flex flex-col items-center justify-center z-10">
                <span className="text-2xl sm:text-3xl font-black font-mono tracking-tight text-white drop-shadow-[0_0_12px_rgba(0,255,102,0.4)]">
                  {count}
                  <span className="text-xs text-[#00f0ff] ml-0.5">%</span>
                </span>
              </div>
            </div>

            {/* Sub-label under ring */}
            <div className="mt-3 text-[10px] font-mono tracking-widest uppercase text-zinc-400">
              {count < 100 ? 'System Synchronizing' : 'Launch Confirmed'}
            </div>
          </div>

          {/* Futuristic High-Precision Progress Bar */}
          <div className="space-y-2">
            <div className="relative h-2 w-full bg-[#0d162a] rounded-full overflow-hidden border border-[#1b2b48] p-[1px]">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-[#00f0ff] via-[#00ff66] to-[#00f0ff] relative"
                style={{ width: `${count}%` }}
                transition={{ ease: 'easeOut', duration: 0.1 }}
              >
                {/* Moving Glint Flare on the tip */}
                <div className="absolute right-0 top-0 bottom-0 w-2 bg-white rounded-full shadow-[0_0_8px_#ffffff]" />
              </motion.div>
            </div>

            <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500 pt-0.5">
              <span>INITIALIZE_CORE</span>
              <span>100% COMPLETE</span>
            </div>
          </div>

          {/* Dynamic Console Boot Log Terminal */}
          <div className="mt-4 p-2.5 rounded-lg bg-[#040812] border border-[#15233d] font-mono text-[10px] flex items-center gap-2 overflow-hidden">
            <span className="text-[#00ff66] font-bold">&gt;</span>
            <span className="text-zinc-300 truncate">
              {bootLogs[phaseIndex].text}
            </span>
          </div>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}