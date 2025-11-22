import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Layout from './components/ui/Layout'
import LoadingScreen from './components/ui/LoadingScreen'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import Contact from './components/sections/Contact'
import './styles/globals.css'

// Router-aware component for page transitions
function AnimatedRoutes() {
  const location = useLocation()
  useEffect(() => {
    // If navigation provided a scroll target (via navigate('/', { state: { scrollTo } }))
    // perform a smooth scroll to that element when on the home path.
    if (location.pathname === '/' && location.state && location.state.scrollTo) {
      const anchorId = location.state.scrollTo;
      // small delay to ensure elements are mounted
      setTimeout(() => {
        const el = document.getElementById(anchorId);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 120);
    }
  }, [location])
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />
          </>
        } />
        <Route path="/projects" element={
          <>
            <Projects featuredOnly={false} />
          </>
        } />
        <Route path="/skills" element={
          <>
            <Skills />
          </>
        } />
        <Route path="/about" element={
          <>
            <About expanded={true} />
          </>
        } />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [startAnimation, setStartAnimation] = useState(false)

  // Simulate loading assets
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
      // Small delay before starting animations for better UX
      setTimeout(() => setStartAnimation(true), 500)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  // Handle prevent right-click in production (optional)
  useEffect(() => {
    const handleContextMenu = (e) => {
      // Use Vite's import.meta.env.MODE to detect production at runtime in the browser
      if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.MODE === 'production') {
        e.preventDefault()
      }
    }

    document.addEventListener('contextmenu', handleContextMenu)
    return () => document.removeEventListener('contextmenu', handleContextMenu)
  }, [])

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
  }

  return (
    <div className={`App ${startAnimation ? 'loaded' : ''}`}>
      <Router>
        <Layout>
          <AnimatedRoutes />
        </Layout>
      </Router>
    </div>
  )
}

export default App