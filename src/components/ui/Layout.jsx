import { motion } from 'framer-motion';
import Navigation from './Navigation';
import ScrollIndicator from './ScrollIndicator';
import { Canvas } from '@react-three/fiber';
import Scene from '../three/Scene';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-dark-space text-white relative overflow-hidden">
      {/* Three.js Canvas as background layer inside Layout */}
      <Canvas className="absolute inset-0 z-0 pointer-events-none">
        <Scene />
      </Canvas>

      {/* Background Grid */}
      <div className="fixed inset-0 cyber-grid opacity-20 z-0" />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative z-10">
        {children}
      </main>

      {/* Scroll Indicator */}
      <ScrollIndicator />

      {/* Footer */}
      <footer className="glass border-t border-cyber-cyan/20 py-8 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            {/* GitHub */}
            <a 
              href="https://github.com/xobiya" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group p-3 glass rounded-full hover:glass-cyber transition-all duration-300"
            >
              <img 
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg" 
                alt="GitHub" 
                className="w-6 h-6 filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300" 
              />
            </a>
            
            {/* LinkedIn */}
            <a 
              href="https://linkedin.com/in/feleke-eshetu" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group p-3 glass rounded-full hover:glass-cyber transition-all duration-300"
            >
              <img 
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg" 
                alt="LinkedIn" 
                className="w-6 h-6 filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300" 
              />
            </a>
            
            {/* Twitter */}
            <a 
              href="https://twitter.com/feleke_eshetu" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group p-3 glass rounded-full hover:glass-cyber transition-all duration-300"
            >
              <img 
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/twitter.svg" 
                alt="Twitter" 
                className="w-6 h-6 filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300" 
              />
            </a>
            
            {/* Instagram */}
            <a 
              href="https://instagram.com/feleke9063" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group p-3 glass rounded-full hover:glass-cyber transition-all duration-300"
            >
              <img 
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg" 
                alt="Instagram" 
                className="w-6 h-6 filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300" 
              />
            </a>
            
            {/* Email */}
            <a 
              href="mailto:feleke9063@gmail.com" 
              className="group p-3 glass rounded-full hover:glass-cyber transition-all duration-300"
            >
              <img 
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/gmail.svg" 
                alt="Email" 
                className="w-6 h-6 filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300" 
              />
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Feleke Eshetu. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}