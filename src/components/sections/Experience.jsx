import { motion } from 'framer-motion';
import { experienceData, educationData } from '../../data/experience';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { Building, CheckCircle, Download } from '../shared/Icons';
import { resumeConfig } from '../../data/navigation';

export default function Experience() {
  const { t } = useLanguage();
  const { isDark } = useTheme();

  return (
    <section id="experience" className={`relative py-24 lg:py-32 border-t transition-colors duration-300 overflow-hidden bg-transparent ${
      isDark ? 'border-[#1b253b]' : 'border-slate-200'
    }`}>
      {/* Background Lighting */}
      <div className={`absolute top-1/4 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none ${
        isDark ? 'bg-cyan-500/[0.03]' : 'bg-blue-400/[0.04]'
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Masthead */}
        <div className="max-w-3xl mb-14">
          <div className="section-eyebrow flex items-center gap-2">
            <span className={isDark ? 'text-[#00ff66]' : 'text-blue-600'}>&gt;&gt;</span>
            <span className={isDark ? 'text-[#00ff66]' : 'text-blue-600'}>PROFESSIONAL TRACK RECORD &amp; CREDENTIALS</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black font-mono tracking-tight ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Experience &amp; Academic Foundation
          </h2>
          <p className={`text-sm sm:text-base font-mono mt-3 ${
            isDark ? 'text-zinc-400' : 'text-gray-600'
          }`}>
            Commercial enterprise delivery paired with rigorous computer science and software engineering fundamentals.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Professional Experience (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className={`flex items-center justify-between pb-2 border-b font-mono ${
              isDark ? 'border-[#1b253b]' : 'border-gray-200'
            }`}>
              <span className={`text-sm font-bold flex items-center gap-2 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                <span className={`w-2 h-2 rounded-full ${isDark ? 'bg-[#00ff66]' : 'bg-blue-600'}`} />
                ENGINEERING EXPERIENCE
              </span>
              <span className={`text-xs ${isDark ? 'text-zinc-500' : 'text-gray-400'}`}>[INTERNSHIP &amp; PROJECTS]</span>
            </div>

            <div className="space-y-5">
              {experienceData.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  className={`terminal-window p-5 sm:p-7 space-y-4 rounded-2xl border-l-4 ${
                    isDark ? 'border-l-[#00ff66] bg-[#070b16]' : 'border-l-blue-600 bg-gray-50/70 border-gray-200 shadow-sm'
                  }`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 font-mono">
                    <div>
                      <span className="hud-badge-green text-[10px] mb-2 inline-block">
                        {exp.badge}
                      </span>
                      <h4 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {exp.role}
                      </h4>
                      <div className={`text-xs font-bold ${isDark ? 'text-[#00f0ff]' : 'text-blue-600'}`}>
                        {exp.organization}
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={`text-xs block ${isDark ? 'text-zinc-400' : 'text-gray-600'}`}>
                        {exp.period}
                      </span>
                      <span className={`text-[10px] ${isDark ? 'text-zinc-500' : 'text-gray-400'}`}>
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <p className={`text-xs sm:text-sm leading-relaxed font-mono ${
                    isDark ? 'text-zinc-300' : 'text-gray-700'
                  }`}>
                    {exp.description}
                  </p>

                  <div className={`space-y-1.5 pt-2 border-t ${
                    isDark ? 'border-[#1b2b48]' : 'border-gray-200'
                  }`}>
                    <span className={`text-[11px] font-mono uppercase tracking-wider block font-bold ${
                      isDark ? 'text-zinc-400' : 'text-gray-600'
                    }`}>
                      RESPONSIBILITIES:
                    </span>
                    <ul className="space-y-1.5 font-mono">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className={`text-xs flex items-start gap-2 ${
                          isDark ? 'text-zinc-300' : 'text-gray-700'
                        }`}>
                          <span className={`font-bold ${isDark ? 'text-[#00ff66]' : 'text-blue-600'}`}>&gt;</span>
                          <span className="leading-relaxed">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`pt-2.5 border-t ${
                    isDark ? 'border-[#1b2b48]' : 'border-gray-200'
                  }`}>
                    <div className={`text-[11px] font-mono mb-1.5 ${
                      isDark ? 'text-zinc-500' : 'text-gray-500'
                    }`}>
                      TECH STACK:
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`px-2 py-0.5 rounded text-[11px] font-mono border ${
                            isDark ? 'bg-[#0c1424] border-[#1b2b48] text-[#00f0ff]' : 'bg-blue-50 border-blue-200 text-blue-700'
                          }`}
                        >
                          #{tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Academic Foundation (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className={`flex items-center justify-between pb-2 border-b font-mono ${
              isDark ? 'border-[#1b253b]' : 'border-gray-200'
            }`}>
              <span className={`text-sm font-bold flex items-center gap-2 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                <span className={`w-2 h-2 rounded-full ${isDark ? 'bg-[#00f0ff]' : 'bg-blue-600'}`} />
                ACADEMIC CREDENTIALS
              </span>
              <span className={`text-xs ${isDark ? 'text-zinc-500' : 'text-gray-400'}`}>[ARBA MINCH UNIV]</span>
            </div>

            <div className="space-y-5">
              {educationData.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className={`terminal-window p-5 sm:p-7 space-y-4 rounded-2xl border-l-4 ${
                    isDark ? 'border-l-[#00f0ff] bg-[#070b16]' : 'border-l-indigo-600 bg-gray-50/70 border-gray-200 shadow-sm'
                  }`}
                >
                  <div className="font-mono">
                    <span className="hud-badge-cyan text-[10px] mb-2 inline-block">
                      {edu.badge}
                    </span>
                    <h4 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {edu.degree}
                    </h4>
                    <div className={`text-xs font-bold ${isDark ? 'text-[#00f0ff]' : 'text-blue-600'}`}>
                      {edu.institution}
                    </div>
                    <div className={`text-[11px] mt-0.5 ${isDark ? 'text-zinc-400' : 'text-gray-500'}`}>
                      {edu.location} • {edu.period}
                    </div>
                  </div>

                  <p className={`text-xs sm:text-sm leading-relaxed font-mono ${
                    isDark ? 'text-zinc-300' : 'text-gray-700'
                  }`}>
                    {edu.description}
                  </p>

                  <div className={`space-y-1 pt-2 border-t font-mono ${
                    isDark ? 'border-[#1b2b48]' : 'border-gray-200'
                  }`}>
                    <span className={`text-[11px] uppercase tracking-wider block font-bold ${
                      isDark ? 'text-zinc-400' : 'text-gray-600'
                    }`}>
                      CURRICULUM FOCUS:
                    </span>
                    <ul className="space-y-1">
                      {edu.highlights.map((item, hIdx) => (
                        <li key={hIdx} className={`text-xs flex items-start gap-1.5 ${
                          isDark ? 'text-zinc-300' : 'text-gray-700'
                        }`}>
                          <span className={`font-bold ${isDark ? 'text-[#00f0ff]' : 'text-blue-600'}`}>&gt;</span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`pt-2 border-t ${
                    isDark ? 'border-[#1b2b48]' : 'border-gray-200'
                  }`}>
                    <div className={`text-[11px] font-mono mb-1 ${
                      isDark ? 'text-zinc-500' : 'text-gray-500'
                    }`}>
                      CORE SUBJECTS:
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {edu.technologies.map((tItem) => (
                        <span
                          key={tItem}
                          className={`px-2 py-0.5 rounded text-[11px] font-mono border ${
                            isDark ? 'bg-[#0c1424] border-[#1b2b48] text-zinc-300' : 'bg-white border-gray-200 text-gray-700'
                          }`}
                        >
                          #{tItem}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Official Resume Card */}
              <div className={`terminal-window p-5 rounded-2xl space-y-3 font-mono border ${
                isDark ? 'bg-[#091122] border-[#00ff66]/30' : 'bg-blue-50 border-blue-200 shadow-sm'
              }`}>
                <div className={`text-xs font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  CURRICULUM VITAE (PDF)
                </div>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-zinc-400' : 'text-gray-600'}`}>
                  Download the formal technical resume with academic transcripts, capstone references, and direct contact details.
                </p>
                <a
                  href={resumeConfig.url}
                  download={resumeConfig.filename}
                  className="btn-cyber-primary text-xs py-2.5 px-4 w-full justify-center"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Feleke Eshetu Resume</span>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
