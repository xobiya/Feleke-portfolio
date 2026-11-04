import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../../data/projects';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import {
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
  Server
} from '../shared/Icons';

function ProjectCardMedia({ project, renderCompactMockup, isDark }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  if (!project.image || hasError) {
    return renderCompactMockup(project.mockupType, project);
  }

  return (
    <div className="relative w-full h-full overflow-hidden bg-[#040813]">
      {/* Animated Skeleton Shimmer Placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-[#080e1c] flex items-center justify-center animate-pulse z-10">
          <div className="flex flex-col items-center gap-1.5">
            <div className="w-5 h-5 border-2 border-[#00f0ff]/30 border-t-[#00f0ff] rounded-full animate-spin" />
            <span className="text-[9px] font-mono text-zinc-500">LOADING UI...</span>
          </div>
        </div>
      )}

      {/* Main Image with Async Eager Decoding and Smooth Fade-In */}
      <img
        src={project.image}
        alt={project.title}
        decoding="async"
        loading="eager"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-500 ${
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      />

      {/* Subtle Bottom Ambient Gradient for Text Contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-30 group-hover:opacity-10 transition-opacity pointer-events-none" />
    </div>
  );
}

export default function Projects({ featuredOnly = false }) {
  const { t } = useLanguage();
  const { isDark } = useTheme();
  const [activeFilter, setActiveFilter] = useState('All');
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const categories = ['All', 'ERP & Enterprise', 'Full-Stack SaaS', 'Frontend Apps'];

  const filteredProjects = projectsData.filter((project) => {
    if (featuredOnly && !project.featured) return false;
    if (activeFilter === 'All') return true;
    return project.category === activeFilter;
  });

  const checkScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll > 0) {
      setScrollProgress(Math.min(100, Math.max(0, (scrollLeft / maxScroll) * 100)));
    }

    const cardWidth = 340 + 20; // approximate card width + gap
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(index, filteredProjects.length - 1));
  };

  useEffect(() => {
    checkScroll();
    const ref = scrollContainerRef.current;
    if (ref) {
      ref.addEventListener('scroll', checkScroll, { passive: true });
      return () => ref.removeEventListener('scroll', checkScroll);
    }
  }, [filteredProjects.length]);

  // Optional gentle auto-drift animation when not hovered
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (!scrollContainerRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;

      if (scrollLeft >= scrollWidth - clientWidth - 15) {
        // Smoothly loop back to start
        scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        scrollContainerRef.current.scrollBy({ left: 340, behavior: 'smooth' });
      }
    }, 5500);

    return () => clearInterval(interval);
  }, [isPaused, filteredProjects.length]);

  const handleScroll = (direction) => {
    if (!scrollContainerRef.current) return;
    const cardWidth = 350;
    const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
    scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const scrollToCard = (index) => {
    if (!scrollContainerRef.current) return;
    const cardWidth = 340 + 20;
    scrollContainerRef.current.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
  };

  // Ultra-compact simulated visual preview for Xobiya ERP
  const renderCompactMockup = (type, project) => {
    switch (type) {
      case 'erp':
        return (
          <div className="w-full h-full p-3.5 bg-[#03060f] flex flex-col justify-between font-mono text-[11px] select-none">
            <div className="flex items-center justify-between pb-1.5 border-b border-[#1b2b48]">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#00ff66] animate-pulse" />
                <span className="text-white font-bold text-[10px] tracking-wider">XOBIYA_ERP // POS_CORE</span>
              </div>
              <span className="text-[9px] text-[#00f0ff]">[LARAVEL_CORE]</span>
            </div>
            <div className="grid grid-cols-3 gap-1.5 my-1">
              <div className="p-1.5 rounded bg-[#080e1c] border border-[#1b2b48] text-center">
                <div className="text-[9px] text-zinc-400">REVENUE</div>
                <div className="text-xs font-bold text-white">$45.5K</div>
              </div>
              <div className="p-1.5 rounded bg-[#080e1c] border border-[#1b2b48] text-center">
                <div className="text-[9px] text-zinc-400">ORDERS</div>
                <div className="text-xs font-bold text-[#00ff66]">700</div>
              </div>
              <div className="p-1.5 rounded bg-[#080e1c] border border-[#1b2b48] text-center">
                <div className="text-[9px] text-zinc-400">CUSTOMERS</div>
                <div className="text-xs font-bold text-[#00f0ff]">230</div>
              </div>
            </div>
            <div className="flex justify-between items-center pt-1 border-t border-[#141e30] text-[9px] text-zinc-400">
              <span className="text-[#00ff66]">[ACID_COMMITTED]</span>
              <span>PostgreSQL &bull; Laravel</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="w-full h-full p-3.5 bg-[#03060f] flex flex-col justify-center items-center font-mono text-center">
            <Server className="w-8 h-8 text-[#00f0ff] mb-2" />
            <div className="text-xs font-bold text-white">{project.shortTitle || project.title}</div>
            <div className="text-[10px] text-zinc-400 mt-1">{project.metric}</div>
          </div>
        );
    }
  };

  return (
    <section
      id="projects"
      className={`relative py-20 lg:py-28 border-t transition-colors duration-300 overflow-hidden bg-transparent ${
        isDark ? 'border-[#1b253b]' : 'border-slate-200'
      }`}
    >
      {/* Subtle Background Lighting Accent */}
      <div
        className={`absolute top-1/4 right-8 w-96 h-96 rounded-full blur-3xl pointer-events-none ${
          isDark ? 'bg-[#00f0ff]/[0.03]' : 'bg-blue-400/[0.04]'
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div className="max-w-2xl">
            <div className="section-eyebrow flex items-center gap-2">
              <span className={isDark ? 'text-[#00ff66]' : 'text-blue-600'}>&gt;&gt;</span>
              <span className={isDark ? 'text-[#00ff66]' : 'text-blue-600'}>PRODUCTION WORK &amp; CASE STUDIES</span>
            </div>
            <h2
              className={`text-2xl sm:text-3xl lg:text-4xl font-black font-mono tracking-tight ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              Featured Projects &amp; Software
            </h2>
            <p
              className={`text-xs sm:text-sm font-mono mt-2 max-w-xl ${
                isDark ? 'text-zinc-400' : 'text-gray-600'
              }`}
            >
              Production systems engineered for scale, zero operational friction, and verified reliability.
            </p>
          </div>

          {/* Slider Arrow Controls with Micro-Interactions */}
          <div className="flex items-center gap-2.5 self-start md:self-end">
            <motion.button
              whileHover={{ scale: canScrollLeft ? 1.08 : 1 }}
              whileTap={{ scale: canScrollLeft ? 0.92 : 1 }}
              onClick={() => handleScroll('left')}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
              className={`p-2.5 rounded-xl border transition-all duration-200 ${
                canScrollLeft
                  ? isDark
                    ? 'bg-[#0a0f1e] text-white border-[#1e2a44] hover:border-[#00ff66] hover:text-[#00ff66] shadow-[0_0_15px_rgba(0,255,102,0.15)]'
                    : 'bg-white text-gray-900 border-gray-200 hover:border-blue-500 hover:text-blue-600 shadow-md'
                  : 'opacity-40 cursor-not-allowed border-transparent text-zinc-500'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: canScrollRight ? 1.08 : 1 }}
              whileTap={{ scale: canScrollRight ? 0.92 : 1 }}
              onClick={() => handleScroll('right')}
              disabled={!canScrollRight}
              aria-label="Scroll right"
              className={`p-2.5 rounded-xl border transition-all duration-200 ${
                canScrollRight
                  ? isDark
                    ? 'bg-[#0a0f1e] text-white border-[#1e2a44] hover:border-[#00ff66] hover:text-[#00ff66] shadow-[0_0_15px_rgba(0,255,102,0.15)]'
                    : 'bg-white text-gray-900 border-gray-200 hover:border-blue-500 hover:text-blue-600 shadow-md'
                  : 'opacity-40 cursor-not-allowed border-transparent text-zinc-500'
              }`}
            >
              <ChevronRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

        {/* Category Filter Pills with Floating Spring Animation */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-6">
          {categories.map((cat) => {
            const count =
              cat === 'All'
                ? projectsData.length
                : projectsData.filter((p) => p.category === cat).length;
            const isSelected = activeFilter === cat;

            return (
              <button
                key={cat}
                onClick={() => {
                  setActiveFilter(cat);
                  if (scrollContainerRef.current) {
                    scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                  }
                }}
                className={`relative px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold whitespace-nowrap transition-all duration-200 flex items-center gap-2 ${
                  isSelected
                    ? isDark
                      ? 'text-black font-extrabold'
                      : 'text-white font-extrabold'
                    : isDark
                      ? 'bg-[#090d18] text-zinc-400 hover:text-white border border-[#1b253b]'
                      : 'bg-white text-gray-600 hover:text-gray-900 border border-gray-200 shadow-sm'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeFilterPill"
                    className={`absolute inset-0 rounded-xl ${
                      isDark
                        ? 'bg-[#00ff66] shadow-[0_0_20px_rgba(0,255,102,0.35)]'
                        : 'bg-blue-600 shadow-md shadow-blue-500/25'
                    }`}
                    transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
                <span
                  className={`relative z-10 text-[10px] px-1.5 py-0.2 rounded-full ${
                    isSelected
                      ? isDark
                        ? 'bg-black/25 text-black'
                        : 'bg-white/25 text-white'
                      : isDark
                        ? 'bg-white/5 text-zinc-500'
                        : 'bg-gray-100 text-gray-500'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Horizontal Animated Project Showcase */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            ref={scrollContainerRef}
            className="flex gap-5 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scrollbar-none scroll-smooth -mx-4 px-4 sm:mx-0 sm:px-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => {
                return (
                  <motion.article
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.94, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.94 }}
                    whileHover={{
                      y: -6,
                      transition: { duration: 0.25, ease: 'easeOut' }
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 24,
                      delay: index * 0.04
                    }}
                    className={`w-[290px] sm:w-[320px] md:w-[340px] shrink-0 snap-start rounded-2xl border flex flex-col justify-between transition-all duration-300 group overflow-hidden ${
                      isDark
                        ? 'bg-[#080d1a]/95 border-[#1b2a46] hover:border-[#00ff66]/60 shadow-xl hover:shadow-[0_0_30px_rgba(0,255,102,0.14)]'
                        : 'bg-white border-gray-200 hover:border-blue-400 shadow-md hover:shadow-xl'
                    }`}
                  >
                    <div>
                      {/* Compact Preview Header (Aspect 16:10) */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-[#03060f] border-b border-[#16233b]">
                        
                        {/* Chrome Header Bar */}
                        <div className="absolute top-0 inset-x-0 z-10 px-2.5 py-1.5 bg-[#0a0f1e]/90 backdrop-blur-md border-b border-[#1b2b48] flex items-center justify-between text-[10px] font-mono select-none">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-red-500/80" />
                            <span className="w-2 h-2 rounded-full bg-amber-500/80" />
                            <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                            <span className="text-[10px] text-zinc-400 ml-1 truncate max-w-[140px]">
                              {project.id}.sys
                            </span>
                          </div>
                          <span className="text-[9px] text-[#00ff66] font-mono font-bold tracking-tight">
                            {project.metric}
                          </span>
                        </div>

                        {/* Image Preview or Micro Mockup with Smooth Loading */}
                        <div className="w-full h-full pt-6">
                          <ProjectCardMedia
                            project={project}
                            renderCompactMockup={renderCompactMockup}
                            isDark={isDark}
                          />
                        </div>
                      </div>

                      {/* Card Body - Minimized Content */}
                      <div className="p-4 sm:p-5 space-y-3">
                        {/* Category & Status Pill */}
                        <div className="flex items-center justify-between gap-2">
                          <span className="hud-badge-cyan text-[10px] py-0.5 px-2 font-mono">
                            {project.category}
                          </span>
                          <span className="text-[10px] font-mono text-zinc-500 truncate">
                            {project.status}
                          </span>
                        </div>

                        {/* Title */}
                        <div>
                          <h3
                            className={`text-base font-bold font-mono tracking-tight leading-snug line-clamp-1 transition-colors ${
                              isDark
                                ? 'text-white group-hover:text-[#00f0ff]'
                                : 'text-gray-900 group-hover:text-blue-600'
                            }`}
                          >
                            {project.shortTitle || project.title}
                          </h3>
                          <p
                            className={`text-[11px] font-mono truncate mt-0.5 ${
                              isDark ? 'text-cyan-400' : 'text-blue-600'
                            }`}
                          >
                            &gt; {project.subtitle}
                          </p>
                        </div>

                        {/* Short Solution Summary (1-2 sentences) */}
                        <p
                          className={`text-xs font-mono line-clamp-2 leading-relaxed ${
                            isDark ? 'text-zinc-300' : 'text-gray-600'
                          }`}
                        >
                          {project.solution}
                        </p>

                        {/* Core Tech Stack (Compact 3-4 Tags) */}
                        <div className="flex flex-wrap gap-1 pt-1">
                          {project.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className={`px-2 py-0.5 rounded text-[10px] font-mono border ${
                                isDark
                                  ? 'bg-[#0c1424] border-[#1b2b48] text-zinc-300'
                                  : 'bg-slate-50 border-slate-200 text-slate-700'
                              }`}
                            >
                              #{tag}
                            </span>
                          ))}
                          {project.tags.length > 3 && (
                            <span
                              className={`px-1.5 py-0.5 rounded text-[10px] font-mono border ${
                                isDark
                                  ? 'bg-[#0c1424] border-[#1b2b48] text-zinc-500'
                                  : 'bg-slate-50 border-slate-200 text-slate-500'
                              }`}
                            >
                              +{project.tags.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Card Footer - Action Buttons */}
                    <div
                      className={`p-4 pt-2.5 border-t flex items-center justify-between gap-2 text-xs font-mono ${
                        isDark ? 'border-[#1b2b48]' : 'border-gray-100'
                      }`}
                    >
                      {project.liveUrl && project.liveUrl !== '#' ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-cyber-primary text-[11px] py-1.5 px-3 flex-1 justify-center"
                        >
                          <span>LIVE DEMO</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : (
                        <span
                          className={`text-[11px] py-1.5 px-3 rounded-lg border font-mono flex-1 text-center truncate ${
                            isDark
                              ? 'bg-white/[0.02] border-[#1b2b48] text-zinc-500'
                              : 'bg-slate-50 border-slate-200 text-slate-400'
                          }`}
                        >
                          ENTERPRISE SYS
                        </span>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-cyber-secondary text-[11px] py-1.5 px-3 flex-1 justify-center"
                        >
                          <Github className="w-3 h-3" />
                          <span>SOURCE</span>
                        </a>
                      )}
                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Indicator Track & Active Dots & Animated Progress Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between pt-4 mt-2 gap-3">
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-mono text-zinc-500">
                Showing {filteredProjects.length} production projects
              </span>
              {/* Animated Progress Bar */}
              <div
                className={`w-28 h-1 rounded-full overflow-hidden ${
                  isDark ? 'bg-[#142035]' : 'bg-gray-200'
                }`}
              >
                <motion.div
                  className={`h-full rounded-full ${
                    isDark ? 'bg-[#00ff66]' : 'bg-blue-600'
                  }`}
                  style={{ width: `${Math.max(10, scrollProgress)}%` }}
                  transition={{ ease: 'easeOut', duration: 0.2 }}
                />
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              {filteredProjects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollToCard(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeIndex === i
                      ? isDark
                        ? 'w-6 bg-[#00ff66] shadow-[0_0_8px_rgba(0,255,102,0.6)]'
                        : 'w-6 bg-blue-600'
                      : isDark
                        ? 'w-1.5 bg-[#1b2b48] hover:bg-zinc-600'
                        : 'w-1.5 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}