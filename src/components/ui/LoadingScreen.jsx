import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LoadingScreen({ onLoadingComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onLoadingComplete, 180);
          return 100;
        }
        return prev + 25;
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-[#04060a] z-50 flex items-center justify-center p-4 font-mono select-none"
      >
        <div className="max-w-sm w-full p-6 rounded-xl border border-[#1b2b48] bg-[#070b16] shadow-2xl space-y-4">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-white font-bold tracking-wider">FELEKE ESHETU</span>
            <span className="text-[#00f0ff]">{progress}%</span>
          </div>

          <div className="h-1.5 bg-[#121c32] rounded-full overflow-hidden border border-[#1e2f50]">
            <motion.div
              className="h-full bg-gradient-to-r from-[#00f0ff] to-[#00ff66]"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>

          <div className="text-[11px] text-zinc-400 text-center font-mono">
            Loading Portfolio...
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
