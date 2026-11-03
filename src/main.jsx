import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Portfolio Error Boundary caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#08090e] text-slate-100 flex items-center justify-center p-6 font-sans">
          <div className="max-w-md w-full surface-card p-8 border border-white/[0.1] text-center space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-blue/20 border border-brand-blue/40 flex items-center justify-center mx-auto text-brand-electric font-mono font-bold">
              FE
            </div>
            <h1 className="text-xl font-bold text-white">Application Recovery</h1>
            <p className="text-sm text-slate-400">
              An unexpected condition occurred. Please reload the interface.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="btn-primary w-full py-2.5 text-xs font-semibold justify-center"
            >
              Reload Application
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>
  );
}
