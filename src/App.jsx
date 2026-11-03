import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/ui/Layout';
import LoadingScreen from './components/ui/LoadingScreen';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Enterprise from './components/sections/Enterprise';
import Projects from './components/sections/Projects';
import Process from './components/sections/Process';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import './styles/globals.css';

function MainPortfolio() {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const anchorId = location.state.scrollTo;
      setTimeout(() => {
        const el = document.getElementById(anchorId);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Enterprise />
      <Projects />
      <Process />
      <Experience />
      <Contact />
    </>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainPortfolio />} />
        <Route
          path="/projects"
          element={
            <div className="pt-20">
              <Projects featuredOnly={false} />
            </div>
          }
        />
        <Route
          path="/skills"
          element={
            <div className="pt-20">
              <Skills />
            </div>
          }
        />
        <Route
          path="/enterprise"
          element={
            <div className="pt-20">
              <Enterprise />
            </div>
          }
        />
        <Route
          path="/about"
          element={
            <div className="pt-20">
              <About />
            </div>
          }
        />
        <Route
          path="/contact"
          element={
            <div className="pt-20">
              <Contact />
            </div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ThemeProvider>
      <LanguageProvider>
        {isLoading && (
          <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
        )}
        <Router>
          <Layout>
            <AnimatedRoutes />
          </Layout>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}
