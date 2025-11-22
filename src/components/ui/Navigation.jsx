import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import navigation from '../../data/navigation.js';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = navigation;

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-cyber-cyan/20 hidden lg:block">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-cyber font-bold text-gradient-cyber">
              Feleke Eshetu
            </Link>
            
            <div className="flex items-center space-x-8">
              {navItems.map((item) => {
                // Special handling for in-page anchors (Contact and Skills sections)
                if (item.name === 'Contact' || item.name === 'Skills') {
                  const anchorId = item.name === 'Contact' ? 'contact' : 'skills';
                  return (
                    <a
                      key={item.name}
                      href={`#${anchorId}`}
                      onClick={(e) => {
                        e.preventDefault();
                        // If we're not on the home route, navigate there and request a scroll via state
                        if (location.pathname !== '/') {
                          navigate('/', { state: { scrollTo: anchorId } });
                        } else {
                          const el = document.getElementById(anchorId);
                          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }}
                      className={`relative font-cyber text-sm uppercase tracking-wider transition-all duration-300 text-gray-400 hover:text-white`}
                    >
                      {item.name}
                    </a>
                  );
                }

                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`relative font-cyber text-sm uppercase tracking-wider transition-all duration-300 ${
                      location.pathname === item.path 
                        ? 'text-cyber-cyan' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {item.name}
                    {location.pathname === item.path && (
                      <motion.div
                        className="absolute -bottom-2 left-0 right-0 h-0.5 bg-cyber-cyan"
                        layoutId="navbar-indicator"
                      />
                    )}
                  </Link>
                );
              })}

              {/* Fixed Resume Button */}
              <a
                href="/Feleke Eshetu resume.pdf"
                download="Feleke-Eshetu-Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-cyber-cyan text-sm font-cyber text-cyber-cyan hover:bg-cyber-cyan/10 transition-all duration-300 hover:scale-105"
                aria-label="Download resume (PDF)"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path 
                    d="M12 3v12m0 0l-4-4m4 4l4-4m4 4v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
                Resume
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="fixed top-4 right-4 z-50 lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 glass rounded-full border border-cyber-cyan/30 hover:glass-cyber transition-all"
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 bg-cyber-cyan transition-all ${isOpen ? 'rotate-45 translate-y-1' : ''}`} />
          <div className={`w-6 h-0.5 bg-cyber-cyan my-1.5 transition-all ${isOpen ? 'opacity-0' : ''}`} />
          <div className={`w-6 h-0.5 bg-cyber-cyan transition-all ${isOpen ? '-rotate-45 -translate-y-1' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 z-40 glass-cyber lg:hidden flex items-center justify-center"
          >
            <div className="text-center space-y-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {(item.name === 'Contact' || item.name === 'Skills') ? (
                    (() => {
                      const anchorId = item.name === 'Contact' ? 'contact' : 'skills';
                      return (
                        <a
                          href={`#${anchorId}`}
                          onClick={(e) => {
                            e.preventDefault();
                            setIsOpen(false);
                            if (location.pathname !== '/') {
                              navigate('/');
                              setTimeout(() => {
                                const el = document.getElementById(anchorId);
                                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                              }, 120);
                            } else {
                              const el = document.getElementById(anchorId);
                              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }
                          }}
                          className="text-2xl font-cyber text-gradient-cyber block py-4 hover:scale-110 transition-transform"
                        >
                          {item.name}
                        </a>
                      );
                    })()
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className="text-2xl font-cyber text-gradient-cyber block py-4 hover:scale-110 transition-transform"
                    >
                      {item.name}
                    </Link>
                  )}
                </motion.div>
              ))}

              {/* Fixed Resume Button (mobile) */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: navItems.length * 0.1 }}
              >
                <a
                  href="/Feleke Eshetu resume.pdf"
                  download="Feleke-Eshetu-Resume.pdf"
                  className="text-2xl font-cyber text-gradient-cyber block py-4 hover:scale-110 transition-transform"
                  aria-label="Download resume (PDF)"
                  onClick={() => setIsOpen(false)}
                >
                  Resume
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navigation;