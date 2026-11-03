import { useState } from 'react';
import { motion } from 'framer-motion';
import { contactMethods, projectTypes } from '../../data/contact';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import {
  Mail,
  Send,
  Linkedin,
  Github,
  Phone,
  CheckCircle,
  ExternalLink
} from '../shared/Icons';

const CONTACT_ENDPOINT = '/api/send-email';

export default function Contact() {
  const { t } = useLanguage();
  const { isDark } = useTheme();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: projectTypes[0],
    message: ''
  });

  const [status, setStatus] = useState({
    loading: false,
    ok: null,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status.message) {
      setStatus({ loading: false, ok: null, message: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, ok: null, message: '' });

    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: `[DOMAIN: ${formData.projectType}]\n\n${formData.message}`
        })
      });

      const rawBody = await response.text();
      let data = null;
      try {
        data = JSON.parse(rawBody);
      } catch {
        data = { success: response.ok, message: rawBody };
      }

      if (response.ok && data?.success !== false) {
        setStatus({
          loading: false,
          ok: true,
          message: 'Transmission received. I will review and reply within 24 hours.'
        });
        setFormData({
          name: '',
          email: '',
          projectType: projectTypes[0],
          message: ''
        });
      } else {
        setStatus({
          loading: false,
          ok: false,
          message: data?.error || data?.message || 'Transmission failed. Direct email available.'
        });
      }
    } catch {
      setStatus({
        loading: false,
        ok: false,
        message: 'Network error. Please use direct email.'
      });
    }
  };

  const iconMap = {
    Email: Mail,
    Telegram: Send,
    LinkedIn: Linkedin,
    GitHub: Github,
    Phone: Phone
  };

  return (
    <section id="contact" className={`relative py-24 lg:py-32 border-t transition-colors duration-300 overflow-hidden bg-transparent ${
      isDark ? 'border-[#1b253b]' : 'border-slate-200'
    }`}>
      {/* Background Lighting */}
      <div className={`absolute top-1/2 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none ${
        isDark ? 'bg-cyan-500/[0.03]' : 'bg-blue-400/[0.04]'
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Masthead */}
        <div className="max-w-3xl mb-14">
          <div className="section-eyebrow flex items-center gap-2">
            <span className={isDark ? 'text-[#00ff66]' : 'text-blue-600'}>&gt;&gt;</span>
            <span className={isDark ? 'text-[#00ff66]' : 'text-blue-600'}>GET IN TOUCH</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black font-mono tracking-tight ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Have a Project in Mind? Let&apos;s Build Together.
          </h2>
          <p className={`text-sm sm:text-base font-mono mt-3 ${
            isDark ? 'text-zinc-400' : 'text-gray-600'
          }`}>
            Whether you require a custom enterprise ERP system, high-throughput backend APIs, or modern web applications, send your project requirements directly.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Direct Communication Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-4 font-mono">
            <div>
              <h3 className={`text-sm font-bold uppercase tracking-wider mb-1 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                COMMUNICATION CHANNELS
              </h3>
              <p className={`text-xs ${isDark ? 'text-zinc-500' : 'text-gray-500'}`}>
                Guaranteed response latency: &lt; 24h
              </p>
            </div>

            <div className="space-y-2.5">
              {contactMethods.map((method) => {
                const IconComponent = iconMap[method.title] || Mail;

                return (
                  <a
                    key={method.title}
                    href={method.link}
                    target={method.link.startsWith('http') ? '_blank' : undefined}
                    rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`terminal-window p-3.5 rounded-2xl flex items-center justify-between group transition-all border ${
                      isDark 
                        ? 'bg-[#070b16] border-[#1b2b48] hover:border-cyan-500/50 hover:bg-[#0c1527]' 
                        : 'bg-gray-50 border-gray-200 hover:border-blue-400 hover:bg-blue-50/50 shadow-sm'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-xl border flex items-center justify-center group-hover:scale-105 transition-transform ${
                        isDark ? 'bg-[#101b2f] border-[#1e2f50] text-[#00ff66]' : 'bg-white border-gray-200 text-blue-600 shadow-sm'
                      }`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className={`text-xs font-bold transition-colors ${
                            isDark ? 'text-white group-hover:text-cyan-400' : 'text-gray-900 group-hover:text-blue-600'
                          }`}>
                            {method.title}
                          </span>
                          <span className="hud-badge-dim text-[10px] py-0 px-1.5">
                            {method.badge}
                          </span>
                        </div>
                        <div className={`text-[11px] ${isDark ? 'text-zinc-400' : 'text-gray-500'}`}>
                          {method.value}
                        </div>
                      </div>
                    </div>

                    <ExternalLink className={`w-3.5 h-3.5 transition-all ${
                      isDark ? 'text-zinc-500 group-hover:text-white' : 'text-gray-400 group-hover:text-gray-900'
                    }`} />
                  </a>
                );
              })}
            </div>

            {/* Direct Email Fallback */}
            <div className={`terminal-window p-4 rounded-2xl border text-xs ${
              isDark ? 'border-cyan-500/30 bg-[#071120]' : 'border-blue-200 bg-blue-50/60 shadow-sm'
            }`}>
              <div className={`font-bold mb-1 ${isDark ? 'text-cyan-400' : 'text-blue-700'}`}>
                DIRECT EMAIL INQUIRY
              </div>
              <p className={`leading-relaxed mb-2 text-[11px] ${isDark ? 'text-zinc-400' : 'text-gray-600'}`}>
                Deliver technical specifications or job descriptions directly to:
              </p>
              <a
                href="mailto:eshetufeleke21@gmail.com"
                className={`font-bold underline transition-colors ${
                  isDark ? 'text-white hover:text-cyan-400' : 'text-blue-700 hover:text-blue-900'
                }`}
              >
                eshetufeleke21@gmail.com
              </a>
            </div>
          </div>

          {/* Structured Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className={`terminal-window p-5 sm:p-7 rounded-3xl border relative font-mono ${
              isDark ? 'border-[#1b2b48] bg-[#070b16]' : 'border-gray-200 bg-white shadow-xl'
            }`}>
              
              <div className={`flex items-center justify-between pb-3 mb-4 border-b text-xs ${
                isDark ? 'border-[#1b2b48] text-zinc-400' : 'border-gray-200 text-gray-500'
              }`}>
                <span className={`font-bold ${isDark ? 'text-[#00ff66]' : 'text-blue-600'}`}>
                  &gt;&gt; INQUIRY FORM
                </span>
                <span>STATUS: READY</span>
              </div>

              {/* Status Banner */}
              {status.message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-3.5 rounded-xl mb-4 text-xs flex items-start gap-2.5 border ${
                    status.ok
                      ? isDark
                        ? 'bg-[#00ff66]/10 border-[#00ff66]/40 text-[#00ff66]'
                        : 'bg-emerald-50 border-emerald-300 text-emerald-800'
                      : 'bg-red-500/10 border-red-500/40 text-red-500'
                  }`}
                >
                  <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-bold">{status.message}</p>
                    {!status.ok && (
                      <a
                        href={`mailto:eshetufeleke21@gmail.com?subject=Project Inquiry from ${formData.name || 'Portfolio'}&body=${encodeURIComponent(formData.message)}`}
                        className="underline font-mono block hover:opacity-80"
                      >
                        [OPEN DEFAULT MAIL CLIENT]
                      </a>
                    )}
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="name"
                      className={`text-xs uppercase tracking-wider font-bold block ${
                        isDark ? 'text-zinc-400' : 'text-gray-700'
                      }`}
                    >
                      YOUR NAME <span className={isDark ? 'text-[#00ff66]' : 'text-blue-600'}>*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={status.loading}
                      placeholder="e.g. Dawit Kebede"
                      className={`w-full px-3.5 py-2.5 rounded-xl border outline-none text-xs transition-all disabled:opacity-50 ${
                        isDark
                          ? 'bg-[#03060f] border-[#1b2b48] text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 placeholder:text-zinc-600'
                          : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder:text-gray-400'
                      }`}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className={`text-xs uppercase tracking-wider font-bold block ${
                        isDark ? 'text-zinc-400' : 'text-gray-700'
                      }`}
                    >
                      YOUR EMAIL <span className={isDark ? 'text-[#00ff66]' : 'text-blue-600'}>*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={status.loading}
                      placeholder="dawit@company.com"
                      className={`w-full px-3.5 py-2.5 rounded-xl border outline-none text-xs transition-all disabled:opacity-50 ${
                        isDark
                          ? 'bg-[#03060f] border-[#1b2b48] text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 placeholder:text-zinc-600'
                          : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder:text-gray-400'
                      }`}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="projectType"
                    className={`text-xs uppercase tracking-wider font-bold block ${
                      isDark ? 'text-zinc-400' : 'text-gray-700'
                    }`}
                  >
                    PROJECT CATEGORY
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    disabled={status.loading}
                    className={`w-full px-3.5 py-2.5 rounded-xl border outline-none text-xs transition-all disabled:opacity-50 ${
                      isDark
                        ? 'bg-[#03060f] border-[#1b2b48] text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400'
                        : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                    }`}
                  >
                    {projectTypes.map((type) => (
                      <option key={type} value={type} className={isDark ? 'bg-[#03060f] text-white' : 'bg-white text-gray-900'}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="message"
                    className={`text-xs uppercase tracking-wider font-bold block ${
                      isDark ? 'text-zinc-400' : 'text-gray-700'
                    }`}
                  >
                    PROJECT SCOPE &amp; OBJECTIVES <span className={isDark ? 'text-[#00ff66]' : 'text-blue-600'}>*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={status.loading}
                    placeholder="Describe your project goals, timelines, or requirements..."
                    className={`w-full px-3.5 py-2.5 rounded-xl border outline-none text-xs transition-all resize-none disabled:opacity-50 ${
                      isDark
                        ? 'bg-[#03060f] border-[#1b2b48] text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 placeholder:text-zinc-600'
                        : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder:text-gray-400'
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status.loading}
                  className="btn-cyber-primary w-full py-3.5 text-xs font-bold justify-center"
                >
                  {status.loading ? (
                    <span className="flex items-center gap-2">
                      <span className="w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      <span>TRANSMITTING...</span>
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <span>SEND MESSAGE</span>
                      <Send className="w-3.5 h-3.5" />
                    </span>
                  )}
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
