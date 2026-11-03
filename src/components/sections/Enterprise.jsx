import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { 
  Building, 
  Clock, 
  Box, 
  Layers, 
  ShieldCheck, 
  ArrowRight 
} from '../shared/Icons';

export default function Enterprise() {
  const { isDark } = useTheme();

  const erpCapabilities = [
    {
      title: "Multi-Tenant SaaS Architecture",
      desc: "Complete tenant data isolation, custom domains, and automated provisioning.",
      icon: Building
    },
    {
      title: "Hardware Biometric Attendance",
      desc: "Direct TCP/Socket sync with fingerprint & facial recognition devices.",
      icon: Clock
    },
    {
      title: "Inventory & Multi-Warehouse",
      desc: "Real-time stock valuation, batch tracking, and automated reorder triggers.",
      icon: Box
    },
    {
      title: "Sales, Invoicing & RBAC Security",
      desc: "Granular permissions, audit trails, and tax-compliant financial ledgers.",
      icon: ShieldCheck
    }
  ];

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="enterprise" className="relative py-14 lg:py-16 border-t transition-colors duration-300 overflow-hidden bg-transparent border-t-[#1b253b]/60 dark:border-t-[#1b253b]/60 light:border-t-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Short, High-Impact ERP Spotlight Card */}
        <div className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 relative overflow-hidden backdrop-blur-md ${
          isDark
            ? 'bg-[#080f1d]/90 border-[#1c2c48] shadow-[0_0_40px_rgba(0,240,255,0.08)]'
            : 'bg-white/90 border-slate-200 shadow-xl shadow-slate-200/50'
        }`}>
          
          {/* Subtle Ambient Background Flare */}
          <div className={`absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none ${
            isDark ? 'bg-cyan-500/10' : 'bg-blue-400/10'
          }`} />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6 pb-6 border-b border-[#1c2c48]/50 dark:border-[#1c2c48]/50 light:border-slate-200">
            <div>
              <div className="section-eyebrow mb-2">
                <span>&gt;&gt;</span>
                <span>CUSTOM ENTERPRISE DEVELOPMENT</span>
              </div>
              <h2 className={`text-2xl sm:text-3xl font-black font-mono tracking-tight ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                Need a Custom ERP System? I Build Them.
              </h2>
              <p className={`text-xs sm:text-sm font-mono mt-2 max-w-2xl leading-relaxed ${
                isDark ? 'text-zinc-300' : 'text-slate-600'
              }`}>
                I engineer robust, production-ready ERP and business automation platforms tailored to your organization&apos;s exact workflows — from workforce management to supply chain and financial ledgers.
              </p>
            </div>

            <button
              onClick={scrollToContact}
              className="btn-cyber-primary shrink-0 self-start md:self-center text-xs py-3 px-5"
            >
              <span>DISCUSS YOUR ERP</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* 4 Crisp Capability Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {erpCapabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div
                  key={idx}
                  className={`p-3.5 rounded-2xl border transition-all ${
                    isDark
                      ? 'bg-[#060c18] border-[#182740] hover:border-cyan-500/40'
                      : 'bg-slate-50 border-slate-200 hover:border-blue-300 shadow-sm'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-xl border flex items-center justify-center mb-2.5 ${
                    isDark ? 'bg-[#0e172a] border-[#223554] text-cyan-400' : 'bg-white border-slate-200 text-blue-600 shadow-sm'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className={`text-xs font-bold font-mono ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {cap.title}
                  </h3>
                  <p className={`text-[11px] font-mono leading-relaxed mt-1 ${isDark ? 'text-zinc-400' : 'text-slate-500'}`}>
                    {cap.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
