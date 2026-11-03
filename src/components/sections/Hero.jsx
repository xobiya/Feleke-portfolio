import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { 
  ArrowRight, 
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  Telegram 
} from '../shared/Icons';
import { resumeConfig } from '../../data/navigation';
import felekeDeskPhoto from '../../Assets/feleke.jpg';

export default function Hero() {
  const { isDark } = useTheme();

  // Dynamic Typewriter Effect for the Headline
  const dynamicHeadlines = [
    "Building Systems That Power Businesses.",
    "Engineering Scalable Full-Stack Solutions.",
    "Architecting Enterprise Cloud Platforms.",
    "Automating High-Throughput Business Systems."
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = dynamicHeadlines[currentWordIndex];
    let timeout;

    if (!isDeleting && currentText === word) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % dynamicHeadlines.length);
    } else {
      const speed = isDeleting ? 30 : 60;
      timeout = setTimeout(() => {
        setCurrentText(
          isDeleting
            ? word.substring(0, currentText.length - 1)
            : word.substring(0, currentText.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[92vh] pt-32 pb-16 lg:pt-36 lg:pb-24 flex items-center overflow-hidden transition-colors duration-300 bg-transparent">
      
      {/* Ambient Radial Lights */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] pointer-events-none blur-3xl ${
        isDark 
          ? 'bg-gradient-to-b from-[#00ff66]/[0.08] via-transparent to-transparent' 
          : 'bg-gradient-to-b from-blue-400/[0.08] via-transparent to-transparent'
      }`} />
      <div className={`absolute top-1/4 right-0 w-96 h-96 rounded-full pointer-events-none blur-3xl ${
        isDark ? 'bg-[#00f0ff]/[0.06]' : 'bg-indigo-300/[0.08]'
      }`} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Cyber Masthead (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Main Dynamic Headline */}
            <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-black font-mono tracking-tight leading-tight ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              <span className="block">
                Engineering Digital Experiences.
              </span>
              <span className="block mt-2 min-h-[1.3em]">
                <span className={`text-transparent bg-clip-text ${
                  isDark
                    ? 'bg-gradient-to-r from-[#00ff66] via-[#00f0ff] to-white'
                    : 'bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600'
                }`}>
                  {currentText}
                </span>
                <span className={`inline-block w-2.5 h-7 ml-1 animate-pulse align-middle ${
                  isDark ? 'bg-[#00ff66]' : 'bg-blue-600'
                }`} />
              </span>
            </h1>

            {/* Technical Narrative */}
            <p className={`text-sm sm:text-base font-mono leading-relaxed border-l-2 pl-4 py-2.5 rounded-r-lg ${
              isDark 
                ? 'text-zinc-300 border-[#00ff66]/40 bg-[#0a101d]/60' 
                : 'text-slate-700 border-blue-500 bg-blue-50/50'
            }`}>
              Full-Stack Developer and Enterprise Systems Engineer. I architect modular multi-tenant ERP platforms, automated business workflows, and high-performance React/Next.js web applications with robust database backends.
            </p>

            {/* CTAs and Verified Socials */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => scrollTo('projects')}
                className="btn-cyber-primary"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={resumeConfig.url}
                download={resumeConfig.filename}
                className="btn-cyber-secondary flex items-center gap-2"
              >
                <span>DOWNLOAD CV</span>
                <Download className="w-4 h-4" />
              </a>

              {/* Icon Links */}
              <div className={`flex items-center gap-2 pl-2 border-l ${
                isDark ? 'border-[#1b253b]' : 'border-slate-300'
              }`}>
                <a
                  href="https://github.com/xobiya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2.5 rounded-xl border transition-all ${
                    isDark 
                      ? 'border-[#1b253b] bg-[#070b14] text-zinc-300 hover:text-[#00ff66] hover:border-[#00ff66]' 
                      : 'border-slate-300 bg-white text-slate-700 hover:text-blue-600 hover:border-blue-400 shadow-sm'
                  }`}
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/feleke-eshetu-a6b4a0371"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2.5 rounded-xl border transition-all ${
                    isDark 
                      ? 'border-[#1b253b] bg-[#070b14] text-zinc-300 hover:text-[#00f0ff] hover:border-[#00f0ff]' 
                      : 'border-slate-300 bg-white text-slate-700 hover:text-blue-600 hover:border-blue-400 shadow-sm'
                  }`}
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://t.me/xobiya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2.5 rounded-xl border transition-all ${
                    isDark 
                      ? 'border-[#1b253b] bg-[#070b14] text-zinc-300 hover:text-[#00f0ff] hover:border-[#00f0ff]' 
                      : 'border-slate-300 bg-white text-slate-700 hover:text-blue-600 hover:border-blue-400 shadow-sm'
                  }`}
                  aria-label="Telegram"
                  title="Telegram"
                >
                  <Telegram className="w-4 h-4" />
                </a>
                <a
                  href="mailto:eshetufeleke21@gmail.com"
                  className={`p-2.5 rounded-xl border transition-all ${
                    isDark 
                      ? 'border-[#1b253b] bg-[#070b14] text-zinc-300 hover:text-[#00ff66] hover:border-[#00ff66]' 
                      : 'border-slate-300 bg-white text-slate-700 hover:text-blue-600 hover:border-blue-400 shadow-sm'
                  }`}
                  aria-label="Email"
                  title="Direct Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Feleke's Desk Photo in First Form Cyber Window (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 w-full flex justify-center"
          >
            <div className={`terminal-window w-full max-w-md relative group overflow-hidden border ${
              isDark 
                ? 'border-[#1b2b48] shadow-[0_0_50px_rgba(0,240,255,0.15)] bg-[#070c18]' 
                : 'border-slate-200 shadow-2xl bg-white'
            }`}>
              {/* Chrome Header */}
              <div className={`px-4 py-2.5 flex items-center justify-between text-xs font-mono border-b ${
                isDark ? 'bg-[#0a1020] border-[#1b2b48]' : 'bg-slate-100 border-slate-200'
              }`}>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className={`text-[11px] ml-1 ${isDark ? 'text-zinc-400' : 'text-slate-500'}`}>
                    identity://feleke.dev
                  </span>
                </div>
              </div>

              {/* Desk Photo Frame */}
              <div className="relative aspect-[3/4] overflow-hidden bg-slate-950">
                <img
                  src={felekeDeskPhoto}
                  alt="Feleke Eshetu — Software Developer"
                  className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                  priority="true"
                />

                {/* Corner Crosshairs */}
                <div className="absolute top-3 left-3 text-[#00f0ff]/80 font-mono text-xs pointer-events-none">+</div>
                <div className="absolute top-3 right-3 text-[#00ff66]/80 font-mono text-xs pointer-events-none">+</div>
                <div className="absolute bottom-3 left-3 text-[#00ff66]/80 font-mono text-xs pointer-events-none">+</div>
                <div className="absolute bottom-3 right-3 text-[#00f0ff]/80 font-mono text-xs pointer-events-none">+</div>

                {/* Bottom Metadata Strip */}
                <div className="absolute inset-x-0 bottom-0 p-3.5 bg-gradient-to-t from-black via-black/85 to-transparent flex items-center justify-between font-mono text-xs">
                  <div>
                    <span className="text-white font-bold block">FELEKE ESHETU</span>
                    <span className="text-cyan-400 text-[10px]">SOFTWARE DEVELOPER</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
