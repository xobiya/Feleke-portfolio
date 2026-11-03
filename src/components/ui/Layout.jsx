import Navigation from './Navigation';
import Footer from './Footer';
import CyberBackground from './CyberBackground';
import { useTheme } from '../../context/ThemeContext';

export default function Layout({ children }) {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen relative transition-colors duration-300 ${
      isDark ? 'bg-[#04060a] text-zinc-200 selection:bg-[#00f0ff]/20 selection:text-[#00f0ff]' : 'bg-[#F9FAFB] text-zinc-800 selection:bg-blue-500/20 selection:text-blue-600'
    }`}>
      {/* Animated Cyber Background Canvas */}
      <CyberBackground />

      {/* Ambient Lighting */}
      {isDark ? (
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-[#00ff66]/[0.05] via-[#00f0ff]/[0.03] to-transparent pointer-events-none blur-3xl z-0" />
      ) : (
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] bg-gradient-to-b from-blue-400/[0.08] via-indigo-300/[0.04] to-transparent pointer-events-none blur-3xl z-0" />
      )}
      
      {/* Navigation */}
      <Navigation />

      {/* Main Sections Content */}
      <main className="relative z-10">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
