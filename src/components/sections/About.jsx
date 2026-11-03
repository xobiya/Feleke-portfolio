import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { Building, ShieldCheck, Cpu, Code2 } from '../shared/Icons';
import felekePhoto from '../../Assets/feleke.jpg';

export default function About() {
  const { t } = useLanguage();
  const { isDark } = useTheme();

  const principles = [
    {
      title: 'SYSTEMS THINKING',
      desc: 'Every UI event is bound to an atomic transactional state machine, verifiable data stream, and tamper-proof audit trail.',
      icon: Cpu,
      color: isDark ? 'text-[#00f0ff]' : 'text-blue-600'
    },
    {
      title: 'ZERO COMPROMISE SECURITY',
      desc: 'Cryptographic JWT session rotation, context-aware RBAC policies, and strict multi-tenant row/schema isolation.',
      icon: ShieldCheck,
      color: isDark ? 'text-[#00ff66]' : 'text-emerald-600'
    },
    {
      title: 'SPEED & ERGONOMICS',
      desc: 'Sub-second relational query execution plans, indexed foreign keys, optimized client bundles, and keyboard-first UX.',
      icon: Code2,
      color: isDark ? 'text-purple-400' : 'text-indigo-600'
    }
  ];

  return (
    <section id="about" className={`relative py-24 lg:py-32 overflow-hidden border-t transition-colors duration-300 bg-transparent ${
      isDark ? 'border-[#1b253b]' : 'border-slate-200'
    }`}>
      {/* Background Lighting */}
      <div className={`absolute top-1/3 left-0 w-96 h-96 rounded-full blur-3xl pointer-events-none ${
        isDark ? 'bg-cyan-500/[0.03]' : 'bg-blue-400/[0.04]'
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="section-eyebrow flex items-center gap-2">
            <span className={isDark ? 'text-[#00ff66]' : 'text-blue-600'}>&gt;&gt;</span>
            <span className={isDark ? 'text-[#00ff66]' : 'text-blue-600'}>ENGINEERING CREDENTIALS &amp; FOUNDATION</span>
          </div>
          <h2 className="section-heading">
            Bridging Frontend Engineering with Enterprise-Grade Reliability
          </h2>
          <p className="section-subheading">
            Software Engineering alumnus from Arba Minch University. I engineer software as fault-tolerant business engines rather than disposable templates.
          </p>
        </div>

        {/* Split Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Developer Portrait + Credentials (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            {/* Visual Portrait Frame */}
            <div className={`terminal-window overflow-hidden relative group ${
              isDark ? 'border-[#1b2b48]' : 'border-gray-200 shadow-xl'
            }`}>
              {/* Terminal Chrome Header */}
              <div className="terminal-header">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500/80" />
                  <span className="w-2 h-2 rounded-full bg-amber-500/80" />
                  <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                  <span className={`text-[11px] ml-1 ${isDark ? 'text-zinc-400' : 'text-gray-500'}`}>
                    identity://feleke.dev
                  </span>
                </div>
              </div>

              {/* Photo Display Frame */}
              <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] overflow-hidden bg-zinc-950">
                <img
                  src={felekePhoto}
                  alt="Feleke Eshetu — Full-Stack Developer"
                  className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                  loading="lazy"
                />

                {/* Bottom Gradient Metadata Strip */}
                <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/85 via-black/60 to-transparent flex items-center justify-between font-mono text-[11px]">
                  <div>
                    <span className="text-white font-bold block">FELEKE ESHETU</span>
                    <span className="text-cyan-400 text-[10px]">FULL-STACK &amp; ERP ARCHITECT</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Academic Credentials Card */}
            <div className={`terminal-window p-5 border-l-4 ${
              isDark ? 'border-l-[#00ff66]' : 'border-l-blue-600'
            }`}>
              <div className="flex items-start gap-3.5">
                <div className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 ${
                  isDark ? 'bg-[#101b2f] border-[#1e2f50] text-[#00ff66]' : 'bg-blue-50 border-blue-200 text-blue-600'
                }`}>
                  <Building className="w-4.5 h-4.5" />
                </div>
                <div className="space-y-1">
                  <h3 className={`text-base font-bold font-mono ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    B.Sc. in Software Engineering
                  </h3>
                  <div className={`text-xs font-mono ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>
                    Arba Minch University (AMU), Ethiopia
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Engineering Bio & Tenets (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            {/* Biography Card */}
            <div className="terminal-window p-6 sm:p-7 space-y-4">
              <div className={`flex items-center justify-between pb-2 border-b text-xs ${
                isDark ? 'border-[#1b253b] text-zinc-500' : 'border-gray-200 text-gray-400'
              }`}>
                <span>BIO: feleke_eshetu.md</span>
                <span className={isDark ? 'text-[#00ff66]' : 'text-blue-600'}>[CONFIRMED]</span>
              </div>

              <p className={`text-sm leading-relaxed font-mono ${isDark ? 'text-zinc-300' : 'text-gray-700'}`}>
                Hello. I am <strong className={isDark ? 'text-white font-bold' : 'text-gray-900 font-bold'}>Feleke Eshetu</strong>, a Full-Stack Developer with a Software Engineering background from Arba Minch University. I engineer scalable web applications and business systems that automate operational workflows.
              </p>
              
              <p className={`text-sm leading-relaxed font-mono ${isDark ? 'text-zinc-400' : 'text-gray-600'}`}>
                My technical focus centers on modern React/Next.js frontends, Node/NestJS/Laravel backends, relational databases (PostgreSQL &amp; MySQL), and enterprise modules like biometric attendance and multi-tenant platforms.
              </p>
            </div>

            {/* Core Engineering Tenets */}
            <div className="space-y-3">
              <div className={`flex items-center justify-between pb-2 border-b ${
                isDark ? 'border-[#1b253b]' : 'border-gray-200'
              }`}>
                <h3 className={`text-xs font-mono uppercase tracking-wider font-bold ${
                  isDark ? 'text-zinc-400' : 'text-gray-600'
                }`}>
                  ENGINEERING PILLARS
                </h3>
              </div>

              {principles.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="terminal-window p-4 group transition-all"
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-7 h-7 rounded-lg border flex items-center justify-center shrink-0 ${
                        isDark ? 'bg-[#10192e] border-[#1e2f50]' : 'bg-gray-100 border-gray-200'
                      } ${item.color}`}>
                        <IconComponent className="w-3.5 h-3.5" />
                      </div>
                      <div className="space-y-1">
                        <div className={`text-xs font-bold font-mono tracking-wider ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>
                          {item.title}
                        </div>
                        <p className={`text-xs font-mono leading-relaxed ${
                          isDark ? 'text-zinc-400' : 'text-gray-600'
                        }`}>
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
