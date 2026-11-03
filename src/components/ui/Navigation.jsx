import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navigationLinks, resumeConfig } from '../../data/navigation';
import { useTheme } from '../../context/ThemeContext';
import { Download, Menu, X, Sun, Moon } from '../shared/Icons';

export default function Navigation() {
  const { theme, toggleTheme, isDark } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navigationLinks.map((item) => document.getElementById(item.id)).filter(Boolean);
      const scrollPos = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const handleThemeToggle = () => {
    setIsFlipping(true);
    toggleTheme();
    setTimeout(() => setIsFlipping(false), 500);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-mono ${
          scrolled
            ? isDark
              ? 'bg-[#04060a]/90 backdrop-blur-xl border-b border-[#1b253b] shadow-2xl py-2.5'
              : 'bg-white/90 backdrop-blur-xl border-b border-gray-200/90 shadow-md py-2.5'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Wordmark */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('hero');
              }}
              className="flex items-center gap-2.5 group"
            >
              <div className={`px-2 py-1 rounded font-mono font-bold text-xs transition-all group-hover:scale-105 ${
                isDark 
                  ? 'bg-[#00f0ff]/15 border border-[#00f0ff]/40 text-[#00f0ff] shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                  : 'bg-blue-50 border border-blue-300 text-blue-600 shadow-sm'
              }`}>
                &gt;_FE
              </div>
              <div className="flex flex-col">
                <span className={`text-xs sm:text-sm font-bold tracking-wider transition-colors ${
                  isDark ? 'text-white group-hover:text-[#00f0ff]' : 'text-gray-900 group-hover:text-blue-600'
                }`}>
                  FELEKE.ESHETU
                </span>
                <span className={`text-[10px] tracking-widest ${isDark ? 'text-zinc-500' : 'text-gray-500'}`}>
                  SOFTWARE DEVELOPER
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className={`hidden lg:flex items-center gap-1 rounded-xl px-2.5 py-1 transition-colors ${
              isDark ? 'bg-[#090d18] border border-[#1b253b]' : 'bg-gray-100/90 border border-gray-200'
            }`}>
              {navigationLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    className={`relative px-3.5 py-1 text-xs font-mono transition-all rounded-lg ${
                      isActive
                        ? isDark
                          ? 'text-[#00f0ff] bg-[#00f0ff]/10 font-bold border border-[#00f0ff]/30'
                          : 'text-blue-600 bg-white font-bold border border-blue-200 shadow-sm'
                        : isDark
                          ? 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-white/60'
                    }`}
                  >
                    <span>{isActive ? `>${link.label}` : link.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Right Action Cluster */}
            <div className="hidden md:flex items-center gap-2.5">
              {/* Download CV Button */}
              <a
                href={resumeConfig.url}
                download={resumeConfig.filename}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-3.5 py-1.5 rounded-xl transition-all flex items-center gap-1.5 text-xs font-mono font-bold ${
                  isDark
                    ? 'border border-[#00f0ff]/50 bg-[#00f0ff]/10 hover:bg-[#00f0ff] hover:text-black text-[#00f0ff] shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                    : 'border border-gray-300 bg-white hover:bg-gray-50 text-gray-800 shadow-sm hover:border-gray-400'
                }`}
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download CV</span>
              </a>

              {/* Contact Button */}
              <button
                onClick={() => scrollTo('contact')}
                className="btn-cyber-primary text-xs py-1.5 px-3.5"
              >
                <span>LET&apos;S TALK</span>
              </button>

              {/* 3D Animated Theme Toggle Button */}
              <motion.button
                onClick={handleThemeToggle}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                animate={{ rotateY: isFlipping ? 180 : 0 }}
                transition={{ duration: 0.4 }}
                className={`p-2 rounded-xl transition-all border flex items-center justify-center ${
                  isDark
                    ? 'bg-[#0b1220] border-[#1f2e4d] text-amber-400 hover:border-amber-400/50 hover:shadow-[0_0_15px_rgba(251,191,36,0.25)]'
                    : 'bg-white border-gray-200 text-blue-600 shadow-sm hover:border-blue-400 hover:shadow-[0_0_15px_rgba(37,99,235,0.15)]'
                }`}
                title={isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
                aria-label="Toggle Color Theme"
              >
                {isDark ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-indigo-600" />
                )}
              </motion.button>
            </div>

            {/* Mobile Actions: Theme Toggle + Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <motion.button
                onClick={handleThemeToggle}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                animate={{ rotateY: isFlipping ? 180 : 0 }}
                transition={{ duration: 0.4 }}
                className={`p-2 rounded-xl border flex items-center justify-center ${
                  isDark
                    ? 'bg-[#0b1220] border-[#1f2e4d] text-amber-400'
                    : 'bg-white border-gray-200 text-blue-600 shadow-sm'
                }`}
                aria-label="Toggle Color Theme"
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </motion.button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-xl border ${
                  isDark
                    ? 'bg-[#0b1322] border-[#1b253b] text-zinc-300 hover:text-[#00f0ff]'
                    : 'bg-white border-gray-200 text-gray-700 shadow-sm'
                }`}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className={`lg:hidden px-4 py-4 space-y-2 font-mono border-b ${
                isDark ? 'bg-[#070b14] border-[#1b253b]' : 'bg-white border-gray-200 shadow-lg'
              }`}
            >
              {navigationLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`block w-full text-left px-3 py-2 text-xs rounded-lg transition-colors ${
                    activeSection === link.id
                      ? isDark
                        ? 'text-[#00f0ff] bg-[#00f0ff]/10 border border-[#00f0ff]/30 font-bold'
                        : 'text-blue-600 bg-blue-50 border border-blue-200 font-bold'
                      : isDark
                        ? 'text-zinc-300 hover:text-white hover:bg-white/5'
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  &gt; {link.label}
                </button>
              ))}
              <div className={`pt-2 border-t flex gap-2 ${isDark ? 'border-[#1b253b]' : 'border-gray-200'}`}>
                <a
                  href={resumeConfig.url}
                  download={resumeConfig.filename}
                  className={`flex-1 py-2 text-center text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 border ${
                    isDark
                      ? 'border-[#00f0ff]/40 bg-[#00f0ff]/10 text-[#00f0ff]'
                      : 'border-gray-300 bg-gray-50 text-gray-800'
                  }`}
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download CV</span>
                </a>
                <button
                  onClick={() => scrollTo('contact')}
                  className="flex-1 btn-cyber-primary text-xs py-2"
                >
                  LET&apos;S TALK
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
