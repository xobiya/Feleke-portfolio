import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { developmentProcess } from '../../data/process';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { ArrowRight, CheckCircle, Workflow } from '../shared/Icons';

export default function Process() {
  const { t } = useLanguage();
  const { isDark } = useTheme();
  const [selectedStep, setSelectedStep] = useState(0);

  const currentStep = developmentProcess[selectedStep];

  return (
    <section id="process" className={`relative py-24 lg:py-32 border-t transition-colors duration-300 overflow-hidden bg-transparent ${
      isDark ? 'border-[#1b253b]' : 'border-slate-200'
    }`}>
      {/* Background Lighting */}
      <div className={`absolute top-1/2 left-0 w-96 h-96 rounded-full blur-3xl pointer-events-none ${
        isDark ? 'bg-cyan-500/[0.03]' : 'bg-blue-400/[0.04]'
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Masthead */}
        <div className="max-w-3xl mb-14">
          <div className="section-eyebrow flex items-center gap-2">
            <span className={isDark ? 'text-[#00ff66]' : 'text-blue-600'}>&gt;&gt;</span>
            <span className={isDark ? 'text-[#00ff66]' : 'text-blue-600'}>DEVELOPMENT LIFECYCLE &amp; METHODOLOGY</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black font-mono tracking-tight ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Engineering Lifecycle &amp; Delivery
          </h2>
          <p className={`text-sm sm:text-base font-mono mt-3 ${
            isDark ? 'text-zinc-400' : 'text-gray-600'
          }`}>
            A disciplined, engineering-first approach that ensures predictability, operational performance, and long-term maintainability.
          </p>
        </div>

        {/* Phase Runner Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-8">
          {developmentProcess.map((step, idx) => {
            const isSelected = selectedStep === idx;

            return (
              <button
                key={step.step}
                onClick={() => setSelectedStep(idx)}
                className={`text-left p-3.5 rounded-xl border font-mono transition-all relative ${
                  isSelected
                    ? isDark
                      ? 'border-[#00ff66] bg-[#00ff66]/10 shadow-[0_0_20px_rgba(0,255,102,0.15)]'
                      : 'border-blue-500 bg-blue-50 text-blue-900 shadow-sm'
                    : isDark
                      ? 'border-[#1b2b48] bg-[#070b16] hover:border-cyan-500/40'
                      : 'border-gray-200 bg-white hover:border-gray-300 shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`text-[11px] font-bold ${
                    isSelected 
                      ? (isDark ? 'text-[#00ff66]' : 'text-blue-600') 
                      : (isDark ? 'text-zinc-500' : 'text-gray-400')
                  }`}>
                    STEP_{step.step}
                  </span>
                  {isSelected && (
                    <span className={`w-1.5 h-1.5 rounded-full ${isDark ? 'bg-[#00ff66]' : 'bg-blue-600'}`} />
                  )}
                </div>
                <div className={`text-xs font-bold line-clamp-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {step.phase}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Step Detailed Console */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep.step}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className={`terminal-window p-6 sm:p-8 rounded-2xl border shadow-2xl relative overflow-hidden ${
              isDark ? 'border-cyan-500/30 bg-[#070b16]' : 'border-gray-200 bg-white shadow-xl'
            }`}
          >
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Stage Specs (7 cols) */}
              <div className="lg:col-span-7 space-y-4 font-mono">
                <div className="flex items-center gap-2.5">
                  <span className="hud-badge-green text-xs">STAGE {currentStep.step}</span>
                  <span className={`text-xs font-mono ${isDark ? 'text-zinc-400' : 'text-gray-500'}`}>
                    // {currentStep.tagline}
                  </span>
                </div>

                <h3 className={`text-2xl font-black ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {currentStep.title}
                </h3>

                <p className={`text-sm leading-relaxed ${isDark ? 'text-zinc-300' : 'text-gray-700'}`}>
                  {currentStep.description}
                </p>

                <div className="pt-2">
                  <div className={`text-xs uppercase tracking-wider mb-2 font-bold ${
                    isDark ? 'text-zinc-400' : 'text-gray-600'
                  }`}>
                    DELIVERABLES:
                  </div>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {currentStep.deliverables.map((item, idx) => (
                      <div
                        key={idx}
                        className={`p-2.5 rounded-xl border text-xs flex items-start gap-2 ${
                          isDark
                            ? 'bg-[#0b1222] border-[#1b2b48] text-zinc-200'
                            : 'bg-gray-50 border-gray-200 text-gray-700'
                        }`}
                      >
                        <span className={`font-bold ${isDark ? 'text-[#00ff66]' : 'text-blue-600'}`}>&gt;</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Toolkit & Execution (5 cols) */}
              <div className="lg:col-span-5 space-y-3 font-mono">
                <div className={`p-4 sm:p-5 rounded-xl border space-y-3 ${
                  isDark ? 'bg-[#03050a] border-[#1b2b48]' : 'bg-gray-50 border-gray-200'
                }`}>
                  <div className={`flex items-center justify-between pb-2 border-b ${
                    isDark ? 'border-[#1b2b48]' : 'border-gray-200'
                  }`}>
                    <span className={`text-xs uppercase font-bold ${
                      isDark ? 'text-zinc-400' : 'text-gray-600'
                    }`}>
                      TOOLING &amp; FRAMEWORKS
                    </span>
                    <Workflow className={`w-4 h-4 ${isDark ? 'text-[#00ff66]' : 'text-blue-600'}`} />
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {currentStep.tools.map((tool) => (
                      <span
                        key={tool}
                        className={`px-2 py-0.5 rounded text-[11px] font-mono border ${
                          isDark
                            ? 'bg-[#0c1424] border-[#1b2b48] text-cyan-400'
                            : 'bg-white border-gray-200 text-blue-700 shadow-sm'
                        }`}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
