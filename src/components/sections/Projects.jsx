import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../../data/projects';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import {
  ExternalLink,
  Github,
  CheckCircle,
  Building,
  Clock,
  Layers,
  ArrowRight
} from '../shared/Icons';

export default function Projects({ featuredOnly = false }) {
  const { t } = useLanguage();
  const { isDark } = useTheme();
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'ERP & Enterprise', 'Full-Stack SaaS', 'Frontend Apps'];

  const filteredProjects = projectsData.filter((project) => {
    if (featuredOnly && !project.featured) return false;
    if (activeFilter === 'All') return true;
    return project.category === activeFilter;
  });

  const renderSimulatedUI = (type, project) => {
    switch (type) {
      case 'erp':
        return (
          <div className="aspect-video p-4 sm:p-5 bg-[#03060f] flex flex-col justify-between font-mono text-xs select-none border border-[#16233b]">
            <div className="flex items-center justify-between pb-2 border-b border-[#1b2b48]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00ff66] animate-pulse" />
                <span className="text-white font-bold">TEWOS_ERP // MASTER_CONTROL</span>
              </div>
              <span className="text-[10px] text-[#00f0ff] font-mono">[TENANT_ACTIVE: ORG_ALPHA]</span>
            </div>

            <div className="grid grid-cols-3 gap-2 my-1">
              <div className="p-2 rounded bg-[#080e1c] border border-[#1b2b48]">
                <div className="text-[10px] text-zinc-400">STAFF_SYNC</div>
                <div className="text-xs sm:text-sm font-bold text-white">148 ACTIVE</div>
              </div>
              <div className="p-2 rounded bg-[#080e1c] border border-[#1b2b48]">
                <div className="text-[10px] text-zinc-400">PUNCH_CLOCK</div>
                <div className="text-xs sm:text-sm font-bold text-[#00ff66]">99.2% IN-TIME</div>
              </div>
              <div className="p-2 rounded bg-[#080e1c] border border-[#1b2b48]">
                <div className="text-[10px] text-zinc-400">STOCK_VAL</div>
                <div className="text-xs sm:text-sm font-bold text-[#00f0ff]">ETB 4.2M</div>
              </div>
            </div>

            <div className="space-y-1 pt-1 text-[11px]">
              <div className="flex justify-between text-zinc-400 pb-1 border-b border-[#141e30]">
                <span>MODULE_THREAD</span>
                <span>STATUS</span>
                <span>POLL_LATENCY</span>
              </div>
              <div className="flex justify-between text-zinc-300">
                <span className="text-[#00f0ff]">hr_attendance_service</span>
                <span className="text-[#00ff66]">[SYNCHRONIZED]</span>
                <span>12ms</span>
              </div>
              <div className="flex justify-between text-zinc-300">
                <span className="text-purple-400">warehouse_billing_tx</span>
                <span className="text-[#00ff66]">[ACID_COMMITTED]</span>
                <span>8ms</span>
              </div>
            </div>

            <div className="pt-2 border-t border-[#1b2b48] flex items-center justify-between text-[10px] text-zinc-500">
              <span>PostgreSQL Multi-Tenant Schema</span>
              <span>REST & WebSocket Daemon</span>
            </div>
          </div>
        );

      case 'attendance':
        return (
          <div className="aspect-video p-4 sm:p-5 bg-[#03060f] flex flex-col justify-between font-mono text-xs select-none border border-[#16233b]">
            <div className="flex items-center justify-between pb-2 border-b border-[#1b2b48]">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#00ff66]" />
                <span className="text-white font-bold">BIOMETRIC_SOCKET_GATEWAY</span>
              </div>
              <span className="text-[10px] text-[#00ff66] font-mono">[PORT 4370 TCP LISTENING]</span>
            </div>

            <div className="space-y-1.5 my-2 font-mono text-[11px]">
              <div className="p-2 rounded bg-[#080e1c] border border-[#1b2b48] flex justify-between">
                <span className="text-zinc-400">08:29:12 | EMP_0042</span>
                <span className="text-[#00ff66]">FINGERPRINT_VERIFIED</span>
                <span className="text-white">SHIFT_A (+0m)</span>
              </div>
              <div className="p-2 rounded bg-[#080e1c] border border-[#1b2b48] flex justify-between">
                <span className="text-zinc-400">08:31:05 | EMP_0119</span>
                <span className="text-[#00ff66]">FACIAL_ID_MATCH</span>
                <span className="text-white">SHIFT_A (+1m)</span>
              </div>
              <div className="p-2 rounded bg-[#080e1c] border border-[#1b2b48] flex justify-between">
                <span className="text-zinc-400">08:47:30 | EMP_0083</span>
                <span className="text-[#ffb700]">LATE_PENALTY_FLAG</span>
                <span className="text-[#ffb700]">SHIFT_A (+17m)</span>
              </div>
            </div>

            <div className="pt-2 border-t border-[#1b2b48] flex items-center justify-between text-[10px] text-zinc-500">
              <span>Hardware Sync: ZKTeco / TCP Socket Bridge</span>
              <span>Zero-Manual Payroll Reconciliation</span>
            </div>
          </div>
        );

      case 'marketplace':
        return (
          <div className="aspect-video p-4 sm:p-5 bg-[#03060f] flex flex-col justify-between font-mono text-xs select-none border border-[#16233b]">
            <div className="flex items-center justify-between pb-2 border-b border-[#1b2b48]">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#00f0ff]" />
                <span className="text-white font-bold">KIDAME_GEBIYA // SAAS_HUB</span>
              </div>
              <span className="text-[10px] text-[#ffb700] font-mono">[MULTI_VENDOR_ACTIVE]</span>
            </div>

            <div className="grid grid-cols-3 gap-2 my-2">
              <div className="p-2 rounded bg-[#080e1c] border border-[#1b2b48]">
                <div className="text-[10px] text-zinc-400">VENDORS</div>
                <div className="text-xs sm:text-sm font-bold text-white">42 ONBOARDED</div>
              </div>
              <div className="p-2 rounded bg-[#080e1c] border border-[#1b2b48]">
                <div className="text-[10px] text-zinc-400">ORDER_TX</div>
                <div className="text-xs sm:text-sm font-bold text-[#00ff66]">REALTIME_STREAM</div>
              </div>
              <div className="p-2 rounded bg-[#080e1c] border border-[#1b2b48]">
                <div className="text-[10px] text-zinc-400">PAY_GATEWAY</div>
                <div className="text-xs sm:text-sm font-bold text-[#00f0ff]">TELEBIRR_API</div>
              </div>
            </div>

            <div className="p-2 rounded bg-[#080e1c] border border-[#1b2b48] flex justify-between text-[11px]">
              <span className="text-zinc-400">Transaction Pool:</span>
              <span className="text-zinc-200">Cart #4092 - Webhook Verified [200 OK]</span>
            </div>
          </div>
        );

      case 'cars':
        return (
          <div className="aspect-video p-4 sm:p-5 bg-[#03060f] flex flex-col justify-between font-mono text-xs select-none border border-[#16233b]">
            <div className="flex items-center justify-between pb-2 border-b border-[#1b2b48]">
              <div className="flex items-center gap-2">
                <Building className="w-4 h-4 text-purple-400" />
                <span className="text-white font-bold">ARIF_CAR_SELL // INSPECTION_CORE</span>
              </div>
              <span className="text-[10px] text-purple-400 font-mono">[VEHICLE_INDEX]</span>
            </div>

            <div className="space-y-1.5 my-2 text-[11px]">
              <div className="p-2 rounded bg-[#080e1c] border border-[#1b2b48] flex justify-between">
                <span>Toyota RAV4 2022</span>
                <span className="text-zinc-400">18,500 KM • Auto</span>
                <span className="text-[#00ff66]">[INSPECTION: 100%]</span>
              </div>
              <div className="p-2 rounded bg-[#080e1c] border border-[#1b2b48] flex justify-between">
                <span>Hyundai Tucson 2021</span>
                <span className="text-zinc-400">32,000 KM • Auto</span>
                <span className="text-[#00ff66]">[INSPECTION: 98%]</span>
              </div>
              <div className="p-2 rounded bg-[#080e1c] border border-[#1b2b48] flex justify-between">
                <span>Suzuki Dzire 2023</span>
                <span className="text-zinc-400">9,200 KM • Manual</span>
                <span className="text-[#00ff66]">[INSPECTION: 100%]</span>
              </div>
            </div>

            <div className="pt-2 border-t border-[#1b2b48] flex items-center justify-between text-[10px] text-zinc-500">
              <span>Technical Inspection Matrix</span>
              <span>Dealer & WhatsApp Integration</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="projects" className={`relative py-24 lg:py-32 border-t transition-colors duration-300 overflow-hidden bg-transparent ${
      isDark ? 'border-[#1b253b]' : 'border-slate-200'
    }`}>
      {/* Background Lighting */}
      <div className={`absolute top-1/3 right-10 w-96 h-96 rounded-full blur-3xl pointer-events-none ${
        isDark ? 'bg-[#00f0ff]/[0.03]' : 'bg-blue-400/[0.04]'
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Masthead */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="section-eyebrow flex items-center gap-2">
              <span className={isDark ? 'text-[#00ff66]' : 'text-blue-600'}>&gt;&gt;</span>
              <span className={isDark ? 'text-[#00ff66]' : 'text-blue-600'}>PRODUCTION WORK &amp; CASE STUDIES</span>
            </div>
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black font-mono tracking-tight ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Featured Projects &amp; Software
            </h2>
            <p className={`text-sm sm:text-base font-mono mt-3 max-w-xl ${
              isDark ? 'text-zinc-400' : 'text-gray-600'
            }`}>
              Engineered to eliminate operational friction, scale seamlessly under high load, and deliver exceptional developer-grade reliability.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all ${
                  activeFilter === cat
                    ? isDark
                      ? 'bg-[#00ff66] text-black shadow-[0_0_20px_rgba(0,255,102,0.3)]'
                      : 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : isDark
                      ? 'bg-[#0a0e1c] text-zinc-400 hover:text-white border border-[#1b253b]'
                      : 'bg-white text-gray-600 hover:text-gray-900 border border-gray-200 shadow-sm'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Case Studies Array */}
        <div className="space-y-12 lg:space-y-16">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5 }}
                  className={`terminal-window p-5 sm:p-7 lg:p-8 rounded-3xl border transition-all duration-300 relative overflow-hidden group ${
                    isDark
                      ? 'bg-[#070b16] border-[#1b2a46] hover:border-cyan-500/50 shadow-2xl'
                      : 'bg-white border-gray-200 hover:border-blue-300 shadow-lg'
                  }`}
                >
                  <div
                    className={`grid lg:grid-cols-12 gap-8 lg:gap-10 items-center ${
                      isEven ? '' : 'lg:flex-row-reverse'
                    }`}
                  >
                    
                    {/* Visual Preview Frame (6 cols) */}
                    <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                      <div className="relative rounded-lg overflow-hidden bg-[#03050a] border border-[#1b2b48] shadow-2xl group-hover:border-[#00ff66]/40 transition-colors">
                        
                        {/* Chrome Header */}
                        <div className="px-3 py-2 bg-[#0a0f1e] border-b border-[#1b2b48] flex items-center justify-between text-xs font-mono">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-red-500/80" />
                            <span className="w-2 h-2 rounded-full bg-amber-500/80" />
                            <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                            <span className="text-[11px] text-zinc-400 ml-2 truncate max-w-[220px]">
                              system://{project.id}.prod
                            </span>
                          </div>
                          <span className="hud-badge-green text-[10px] py-0.5 px-2">
                            {project.metric}
                          </span>
                        </div>

                        {/* Image Asset or Technical UI Simulation */}
                        {project.image ? (
                          <div className="relative aspect-video overflow-hidden bg-black flex items-center justify-center p-2">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover object-top rounded group-hover:scale-[1.02] transition-transform duration-500"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-30 group-hover:opacity-10 transition-opacity" />
                          </div>
                        ) : (
                          renderSimulatedUI(project.mockupType, project)
                        )}
                      </div>
                    </div>

                    {/* Technical Specifications (6 cols) */}
                    <div className={`lg:col-span-6 space-y-4 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                      
                      {/* Meta Tags */}
                      <div className="flex items-center gap-2">
                        <span className="hud-badge-cyan text-[11px] font-mono">{project.category}</span>
                        <span className="hud-badge-dim text-[11px] font-mono">
                          {project.status}
                        </span>
                      </div>

                      {/* Title & Subtitle */}
                      <div>
                        <h3 className={`text-xl sm:text-2xl font-black tracking-tight transition-colors ${
                          isDark ? 'text-white group-hover:text-cyan-400' : 'text-gray-900 group-hover:text-blue-600'
                        }`}>
                          {project.title}
                        </h3>
                        <p className={`text-xs font-mono mt-1 ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>
                          &gt; {project.subtitle}
                        </p>
                      </div>

                      {/* Solution Overview */}
                      <p className={`text-xs sm:text-sm leading-relaxed font-mono ${
                        isDark ? 'text-zinc-300' : 'text-gray-700'
                      }`}>
                        {project.solution}
                      </p>

                      {/* Key Features Matrix */}
                      <div className="grid sm:grid-cols-2 gap-2 pt-1">
                        {project.features.slice(0, 4).map((feature, fIdx) => (
                          <div key={fIdx} className={`text-xs flex items-start gap-2 font-mono ${
                            isDark ? 'text-zinc-400' : 'text-gray-600'
                          }`}>
                            <span className={`font-bold ${isDark ? 'text-[#00ff66]' : 'text-blue-600'}`}>&gt;</span>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Applied Stack */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`px-2 py-0.5 rounded text-[11px] font-mono border ${
                              isDark ? 'bg-[#0c1424] border-[#1b2b48] text-[#00f0ff]' : 'bg-blue-50 border-blue-200 text-blue-700'
                            }`}
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* Action Triggers */}
                      <div className={`flex items-center gap-3 pt-3 border-t ${
                        isDark ? 'border-[#1b2b48]' : 'border-gray-200'
                      }`}>
                        {project.liveUrl && project.liveUrl !== '#' && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-cyber-primary text-xs py-2 px-3.5"
                          >
                            <span>LAUNCH_SYSTEM</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}

                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-cyber-secondary text-xs py-2 px-3.5"
                          >
                            <Github className="w-3.5 h-3.5" />
                            <span>SOURCE_REPO</span>
                          </a>
                        )}
                      </div>

                    </div>

                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
