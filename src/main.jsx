import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Three.js configuration
const threeConfig = {
  camera: {
    position: [0, 0, 8],
    fov: 75,
    near: 0.1,
    far: 1000
  },
  gl: {
    antialias: true,
    alpha: true,
    powerPreference: "high-performance"
  },
  dpr: Math.min(window.devicePixelRatio, 2) // Cap DPR for performance
}

// Error Boundary for better error handling
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Application Error:', error, errorInfo)
    // Store error details in state so we can show them in the fallback UI for debugging
    try {
      this.setState({ hasError: true, error, errorInfo })
      // also expose last error to window for quick inspection
      if (typeof window !== 'undefined') window.__LAST_ERROR__ = { error, errorInfo }
    } catch (e) {
      // ignore setState errors during error handling
    }
  }

  render() {
    if (this.state.hasError) {
      const { error } = this.state || {}
      return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
          <div className="max-w-2xl w-full">
            <div className="text-center mb-6">
              <h1 className="text-2xl text-cyan-400 mb-4">🚀 Something went wrong</h1>
              <p className="text-gray-400 mb-4">The portfolio dimension is currently unstable.</p>
            </div>
            <div className="bg-stone-900 p-4 rounded-lg mb-4">
              <div className="text-sm text-gray-300 mb-2">Error:</div>
              <pre className="text-xs text-red-400 overflow-auto">{error ? String(error.message || error) : 'Unknown error'}</pre>
            </div>
            <div className="flex gap-4 justify-center">
              <button 
                className="px-6 py-2 bg-cyan-500 rounded-lg text-black font-semibold hover:bg-cyan-400 transition-colors"
                onClick={() => window.location.reload()}
              >
                Reboot System
              </button>
              <button
                className="px-6 py-2 bg-gray-800 rounded-lg text-gray-200 border border-gray-700"
                onClick={() => {
                  // open devtools tip: copy last error to clipboard
                  try {
                    const last = window.__LAST_ERROR__
                    navigator.clipboard.writeText(JSON.stringify(last, Object.getOwnPropertyNames(last)))
                    alert('Error details copied to clipboard')
                  } catch (e) {
                    alert('Unable to copy error details')
                  }
                }}
              >
                Copy Error
              </button>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

// Performance monitoring hook
const usePerformanceMonitor = () => {
  useEffect(() => {
    // Vite exposes a DEV flag via import.meta.env.DEV
    if (import.meta.env && import.meta.env.DEV) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          console.log(`🚀 ${entry.name}: ${entry.duration.toFixed(2)}ms`)
        })
      })

      observer.observe({ entryTypes: ['measure', 'navigation', 'paint'] })

      return () => observer.disconnect()
    }
  }, [])
}

// Main wrapper component with enhanced features
function AppWrapper() {
  usePerformanceMonitor()

  return (
    <React.StrictMode>
      <ErrorBoundary>
        {/* Render the React application UI; Canvas is provided by Layout now */}
        <App />
      </ErrorBoundary>
    </React.StrictMode>
  )
}

// Render the application
try {
  const root = ReactDOM.createRoot(document.getElementById('root'))
  root.render(<AppWrapper />)
  // Development-only: patch React DevTools renderer entries that lack a version string
  // This prevents the React DevTools backend from throwing a semver parsing error
  if (import.meta.env && import.meta.env.DEV && typeof window !== 'undefined') {
    try {
      const patchRenderers = () => {
        const hook = window.__REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!hook) return false;
        const renderers = hook.renderers || hook._renderers || hook.rendererInterfaces;
        if (!renderers || typeof renderers.forEach !== 'function') return false;

        let patchedAny = false;
        try {
          renderers.forEach((val) => {
            try {
              if (val && (val.version === undefined || val.version === '')) {
                // assign a safe semver so DevTools won't throw when validating
                try { val.version = '0.0.0'; } catch (e) { /* ignore */ }
                patchedAny = true;
              }
              if (val && (val.rendererPackageName === undefined || val.rendererPackageName === '')) {
                try { val.rendererPackageName = val.rendererPackageName || 'unknown-renderer'; } catch (e) { /* ignore */ }
              }
            } catch (e) {
              // ignore per-renderer errors
            }
          });
        } catch (e) {
          // some hook implementations may not allow iteration; ignore
        }

        return patchedAny;
      };

      // Try immediately and then a few times because renderers may register asynchronously
      patchRenderers();
      let tries = 0;
      const id = setInterval(() => {
        tries += 1;
        const done = patchRenderers();
        if (done || tries > 6) clearInterval(id);
      }, 250);
    } catch (err) {
      // Do not block app startup for DevTools issues
      // eslint-disable-next-line no-console
      console.warn('DevTools renderer patch failed', err);
    }
  }
} catch (error) {
  console.error('Failed to render application:', error)
  document.getElementById('root').innerHTML = `
    <div style="min-height: 100vh; background: #0A0A0A; color: white; display: flex; align-items: center; justify-content: center; font-family: system-ui;">
      <div style="text-align: center;">
        <h1 style="color: #00F5FF; margin-bottom: 1rem;">🚀 System Initialization Failed</h1>
        <p style="color: #94a3b8; margin-bottom: 2rem;">Unable to launch portfolio dimension.</p>
        <button 
          onclick="window.location.reload()" 
          style="padding: 0.75rem 1.5rem; background: #00F5FF; color: black; border: none; border-radius: 0.5rem; font-weight: 600; cursor: pointer;"
        >
          Attempt Recovery
        </button>
      </div>
    </div>
  `
}