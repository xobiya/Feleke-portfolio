import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { ParticleField } from '../three/ParticleField';
import AnimatedText from '../shared/AnimatedText';
import SectionWrapper from '../shared/SectionWrapper';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [displayedName, setDisplayedName] = useState('');
  const [nameIndex, setNameIndex] = useState(0);
  const fullName = "Feleke Eshetu";

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Typing animation for name
  useEffect(() => {
    if (nameIndex < fullName.length) {
      const timer = setTimeout(() => {
        setDisplayedName(fullName.slice(0, nameIndex + 1));
        setNameIndex(nameIndex + 1);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [nameIndex]);



  return (
    <SectionWrapper id="hero" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas>
          <ParticleField />
        </Canvas>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyber-cyan rounded-full opacity-60 animate-float">
          <div className="absolute inset-0 bg-cyber-cyan rounded-full animate-ping"></div>
        </div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-neon-pink rounded-full opacity-40 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-cyber-cyan rounded-full opacity-50 animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Animated grid lines */}
        <div className="absolute inset-0 cyber-grid opacity-10">
          <motion.div 
            className="absolute top-0 left-0 w-full h-0.5 bg-cyber-cyan"
            animate={{ x: [-100, 100] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-xl md:text-2xl text-cyber-cyan font-mono mb-4 tracking-wider">
              Hello, I'm
            </h2>
          </motion.div>

          <div className="relative">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-cyber font-black mb-4 min-h-[1.2em]">
              <span className="text-gradient-cyber relative">
                {displayedName}
                {/* Typing cursor */}
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity, delay: 0.5 }}
                  className="ml-1"
                >
                  |
                </motion.span>
              </span>
            </h1>
            
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: 2, duration: 1, ease: "easeOut" }}
              className="h-1 bg-gradient-to-r from-cyber-cyan to-neon-pink mx-auto mt-4 rounded-full"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <AnimatedText
              text="Software Engineer & Full-Stack Developer"
              className="text-xl md:text-2xl text-gray-300 font-light mb-8"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed rounded-2xl p-6  transition-all duration-500">
  I transform ideas into production-ready applications. From concept to deployment, 
  I build complete digital solutions that solve real problems and deliver exceptional 
  user experiences.
</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(0, 245, 255, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToProjects}
              className="btn-cyber text-lg px-8 py-4 relative overflow-hidden group"
            >
              <span className="relative z-10">View My Work</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyber-cyan to-neon-pink opacity-0 group-hover:opacity-100"
                initial={false}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
            
            <motion.a
              href="#contact"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(255, 0, 245, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="btn-cyber-outline text-lg px-8 py-4 relative overflow-hidden group"
            >
              <span className="relative z-10">Get In Touch</span>
              <motion.div
                className="absolute inset-0 bg-cyber-cyan/10 opacity-0 group-hover:opacity-100"
                initial={false}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </motion.div>

        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-center cursor-pointer"
          onClick={scrollToProjects}
        >
          <div className="w-6 h-10 border-2 border-cyber-cyan rounded-full flex justify-center mb-2 group hover:border-neon-pink transition-colors">
            <motion.div
              className="w-1 h-3 bg-cyber-cyan rounded-full mt-2 group-hover:bg-neon-pink transition-colors"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <motion.span 
            className="text-cyber-cyan text-sm font-mono group-hover:text-neon-pink transition-colors"
            whileHover={{ scale: 1.1 }}
          >
            Scroll to Explore
          </motion.span>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}