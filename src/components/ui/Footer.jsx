import { navigationLinks, resumeConfig, socialLinks } from '../../data/navigation';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { Github, Linkedin, Mail, Download } from '../shared/Icons';

export default function Footer() {
  const { t } = useLanguage();
  const { isDark } = useTheme();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <footer className={`border-t py-14 font-mono text-xs transition-colors duration-300 bg-transparent ${
      isDark ? 'border-[#1b253b] text-zinc-400' : 'border-slate-200 text-slate-600'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className={`grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b ${
          isDark ? 'border-[#1b253b]/80' : 'border-gray-200'
        }`}>
          
          {/* Identity & Wordmark (5 cols) */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <div className={`px-2 py-0.5 rounded font-bold text-xs ${
                isDark 
                  ? 'bg-[#00f0ff]/10 border border-[#00f0ff]/40 text-[#00f0ff]' 
                  : 'bg-blue-50 border border-blue-200 text-blue-600'
              }`}>
                &gt;_FE
              </div>
              <span className={`text-sm font-bold tracking-wider ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                FELEKE ESHETU
              </span>
            </div>

            <p className={`text-xs max-w-sm leading-relaxed ${
              isDark ? 'text-zinc-400' : 'text-gray-600'
            }`}>
              Engineering scalable enterprise systems, multi-tenant relational backends, automated biometric time ledgers, and modern React/Next.js interfaces.
            </p>

            <div className="pt-1">
              <span className={`text-[10px] px-2.5 py-1 rounded-full border font-bold ${
                isDark ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400' : 'bg-blue-50 border-blue-200 text-blue-700'
              }`}>
                ARBA MINCH SOFTWARE ENGINEERING ALUMNI
              </span>
            </div>
          </div>

          {/* Navigation Directory (4 cols) */}
          <div className="md:col-span-4 space-y-2.5">
            <div className={`text-xs font-bold uppercase tracking-wider ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              DIRECTORY
            </div>
            <div className="grid grid-cols-2 gap-1.5 text-xs">
              {navigationLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`text-left transition-colors py-0.5 ${
                    isDark ? 'text-zinc-400 hover:text-cyan-400' : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  &gt; {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social Repos & Resume (3 cols) */}
          <div className="md:col-span-3 space-y-2.5">
            <div className={`text-xs font-bold uppercase tracking-wider ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              CONNECT
            </div>
            <div className="flex flex-col space-y-1.5 text-xs">
              <a
                href={socialLinks[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 transition-colors ${
                  isDark ? 'text-zinc-400 hover:text-cyan-400' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                <Github className="w-3.5 h-3.5" />
                <span>github.com/xobiya</span>
              </a>
              <a
                href={socialLinks[1].url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 transition-colors ${
                  isDark ? 'text-zinc-400 hover:text-cyan-400' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>linkedin.com/in/feleke-eshetu</span>
              </a>
              <a
                href="mailto:eshetufeleke21@gmail.com"
                className={`flex items-center gap-2 transition-colors ${
                  isDark ? 'text-zinc-400 hover:text-cyan-400' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                <Mail className="w-3.5 h-3.5" />
                <span>eshetufeleke21@gmail.com</span>
              </a>
              <a
                href={resumeConfig.url}
                download={resumeConfig.filename}
                className={`flex items-center gap-2 pt-1 font-bold ${
                  isDark ? 'text-cyan-400 hover:underline' : 'text-blue-600 hover:underline'
                }`}
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className={`pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono ${
          isDark ? 'text-zinc-500' : 'text-gray-500'
        }`}>
          <div className="flex items-center gap-2">
            <span className={`w-1.5 h-1.5 rounded-full ${isDark ? 'bg-cyan-400' : 'bg-blue-600'}`} />
            <span>Feleke Eshetu • Full-Stack Software Engineer</span>
          </div>
          <div>
            &copy; {new Date().getFullYear()} Feleke Eshetu. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
}
