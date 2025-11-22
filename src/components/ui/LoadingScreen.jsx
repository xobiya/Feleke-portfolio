import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LoadingScreen({ onLoadingComplete }) {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState('Initializing Systems');

  const loadingSteps = [
    'Initializing Systems',
    'Loading 3D Assets',
    'Calibrating Animations',
    'Starting Feleke portfolio'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer);
          setTimeout(onLoadingComplete, 500);
          return 100;
        }
        return Math.min(oldProgress + 2, 100);
      });
    }, 50);

    // Update loading text based on progress
    const textInterval = setInterval(() => {
      const step = Math.floor(progress / 25);
      if (step < loadingSteps.length) {
        setCurrentText(loadingSteps[step]);
      }
    }, 500);

    return () => {
      clearInterval(timer);
      clearInterval(textInterval);
    };
  }, [onLoadingComplete, progress]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-dark-space z-50 flex items-center justify-center"
      >
        <div className="text-center space-y-8">
          {/* Animated Logo */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring" }}
            className="text-6xl"
          >
            <img src="/Rocket.jpg" alt="Loading Logo" className="w-20 h-20 mx-auto rounded-full" />
          </motion.div>

          {/* Loading Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h1 className="text-4xl font-cyber font-bold text-gradient-cyber mb-4">
              Feleke Eshetu     
           </h1>
            <p className="text-gray-400 font-mono text-lg">{currentText}</p>
          </motion.div>

          {/* Progress Bar */}
          <div className="w-64 mx-auto">
            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-cyber-cyan to-neon-pink"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <p className="text-cyber-cyan font-mono text-sm mt-2">{progress}%</p>
          </div>

          {/* Loading Dots */}
          <motion.div className="flex justify-center space-x-2">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="w-2 h-2 bg-cyber-cyan rounded-full"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}