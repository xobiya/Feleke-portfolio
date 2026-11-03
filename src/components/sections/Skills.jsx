import { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TechIcon } from '../shared/TechIcons';
import { useTheme } from '../../context/ThemeContext';

const SKILLS_LIST = [
  { name: 'React.js', capability: 'Reactive Component UI & Hooks', category: 'Frontend' },
  { name: 'Next.js', capability: 'App Router & SSR Performance', category: 'Frontend' },
  { name: 'TypeScript', capability: 'Strict Type Contracts & Schemas', category: 'Frontend' },
  { name: 'JavaScript', capability: 'Modern ESNext Async Engine', category: 'Frontend' },
  { name: 'Tailwind CSS', capability: 'Scalable Utility Design Systems', category: 'Frontend' },
  { name: 'Node.js', capability: 'High-concurrency Event-driven Backend', category: 'Backend' },
  { name: 'NestJS', capability: 'Modular Enterprise Microservices', category: 'Backend' },
  { name: 'Laravel', capability: 'Multi-tenant Architecture & Core APIs', category: 'Backend' },
  { name: 'Express.js', capability: 'High-throughput API Gateways', category: 'Backend' },
  { name: 'REST API Development', capability: 'OpenAPI Specs & Webhooks', category: 'Backend' },
  { name: 'PostgreSQL', capability: 'ACID Compliance & Query Optimization', category: 'Database' },
  { name: 'MySQL', capability: 'Relational Normalization & Indexing', category: 'Database' },
  { name: 'MongoDB', capability: 'Document Pipelines & Aggregation', category: 'Database' },
  { name: 'Prisma ORM', capability: 'Type-safe Schema & Migrations', category: 'Database' },
  { name: 'Redis', capability: 'In-Memory Caching & Key-Value Stores', category: 'Database' },
  { name: 'Docker', capability: 'Multi-stage Containerization & Networks', category: 'DevOps' },
  { name: 'Git', capability: 'Version Control & Branching Workflows', category: 'DevOps' },
  { name: 'Linux', capability: 'Server Administration & Shell Automation', category: 'DevOps' },
  { name: 'CI/CD', capability: 'Automated Build & Deployment Pipelines', category: 'DevOps' },
  { name: 'GitHub Actions', capability: 'Automated Testing & Integration', category: 'DevOps' },
  { name: 'Deployment', capability: 'Vercel, Render & Production VPS', category: 'DevOps' },
  { name: 'Database Architecture', capability: 'Normalization & Schema Modeling', category: 'Enterprise' },
  { name: 'Multi-Tenant Systems', capability: 'Data Isolation & Tenancy Security', category: 'Enterprise' }
];

export default function Skills() {
  const { isDark } = useTheme();
  const containerRef = useRef(null);

  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [rotation, setRotation] = useState({ x: 0.15, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0, rotX: 0, rotY: 0 });
  const [dimensions, setDimensions] = useState({ width: 600, height: 420 });

  // Responsive container sizing
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setDimensions({
          width: rect.width || 600,
          height: Math.min(Math.max(rect.width * 0.7, 380), 450)
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Compute 3D Fibonacci Sphere positions
  const sphereRadius = useMemo(() => {
    return Math.min(dimensions.width * 0.36, 175);
  }, [dimensions.width]);

  const initialPoints = useMemo(() => {
    const N = SKILLS_LIST.length;
    return SKILLS_LIST.map((skill, i) => {
      const phi = Math.acos(-1 + (2 * i + 1) / N);
      const theta = Math.sqrt(N * Math.PI) * phi;
      return {
        ...skill,
        baseX: sphereRadius * Math.cos(theta) * Math.sin(phi),
        baseY: sphereRadius * Math.sin(theta) * Math.sin(phi),
        baseZ: sphereRadius * Math.cos(phi)
      };
    });
  }, [sphereRadius]);

  // Continuous gentle rotation loop (paused while dragging or hovering)
  useEffect(() => {
    let animId;
    const animate = () => {
      if (!isDragging && !hoveredSkill) {
        setRotation((prev) => ({
          x: prev.x + 0.0008,
          y: prev.y + 0.003
        }));
      }
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [isDragging, hoveredSkill]);

  // Drag interaction handlers
  const handlePointerDown = (e) => {
    setIsDragging(true);
    dragStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      rotX: rotation.x,
      rotY: rotation.y
    };
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;
    setRotation({
      x: dragStartRef.current.rotX - dy * 0.005,
      y: dragStartRef.current.rotY + dx * 0.005
    });
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  // 3D projected coordinates calculation
  const projectedIcons = useMemo(() => {
    const { x: rotX, y: rotY } = rotation;
    const centerX = dimensions.width / 2;
    const centerY = dimensions.height / 2;
    const fov = 380;

    const cosY = Math.cos(rotY);
    const sinY = Math.sin(rotY);
    const cosX = Math.cos(rotX);
    const sinX = Math.sin(rotX);

    return initialPoints.map((point) => {
      // Rotate around Y-axis
      const x1 = point.baseX * cosY - point.baseZ * sinY;
      const z1 = point.baseZ * cosY + point.baseX * sinY;

      // Rotate around X-axis
      const y1 = point.baseY * cosX - z1 * sinX;
      const z2 = z1 * cosX + point.baseY * sinX;

      // Perspective scale & screen mapping
      const scale = fov / (fov - z2);
      const screenX = centerX + x1 * scale;
      const screenY = centerY + y1 * scale;

      // Depth fading
      const depthRatio = (z2 + sphereRadius) / (2 * sphereRadius);
      const isFiltered = activeCategory === 'All' || point.category === activeCategory;
      const opacity = isFiltered 
        ? Math.max(0.25, Math.min(1, depthRatio * 0.75 + 0.25))
        : 0.12;

      const zIndex = Math.round((z2 + sphereRadius) * 10);

      return {
        ...point,
        screenX,
        screenY,
        scale: Math.max(0.65, Math.min(1.35, scale)),
        opacity,
        zIndex,
        isFront: z2 > 0,
        isFiltered
      };
    });
  }, [initialPoints, rotation, dimensions, sphereRadius, activeCategory]);

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'DevOps', 'Enterprise'];

  return (
    <section id="skills" className={`relative py-16 lg:py-20 border-t transition-colors duration-300 overflow-hidden bg-transparent ${
      isDark ? 'border-[#1b253b]' : 'border-slate-200'
    }`}>
      {/* Background Lighting */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[140px] pointer-events-none ${
        isDark ? 'bg-cyan-500/[0.04]' : 'bg-blue-400/[0.06]'
      }`} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Compact Section Header */}
        <div className="text-center max-w-xl mx-auto mb-6">
          <div className="section-eyebrow justify-center">
            <span>&gt;&gt;</span>
            <span>INTERACTIVE TECH CLOUD</span>
          </div>
          <h2 className="section-heading text-2xl sm:text-3xl lg:text-4xl">
            Technology World View
          </h2>
          <p className="section-subheading text-xs sm:text-sm max-w-md mx-auto">
            Drag the 3D world sphere to rotate across the stack. Hover over any icon for engineering capabilities.
          </p>

          {/* Quick Category Chips */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 rounded-full text-[11px] font-mono font-bold transition-all ${
                  activeCategory === cat
                    ? isDark
                      ? 'bg-gradient-to-r from-[#00f0ff] to-[#0284c7] text-[#04060a] shadow-sm'
                      : 'bg-blue-600 text-white shadow-sm'
                    : isDark
                      ? 'bg-[#09101f] text-zinc-400 hover:text-white border border-[#1b2b48]'
                      : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 3D World View Sphere Container (NO CARDS - Pure floating icons) */}
        <div
          ref={containerRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          className={`relative w-full max-w-2xl mx-auto cursor-grab active:cursor-grabbing select-none transition-all ${
            isDragging ? 'cursor-grabbing' : 'cursor-grab'
          }`}
          style={{ height: `${dimensions.height}px` }}
        >
          {/* Subtle 3D Globe Ambient Aura */}
          <div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-colors duration-500 border border-dashed ${
              isDark 
                ? 'border-cyan-500/15 bg-gradient-to-tr from-cyan-500/[0.03] to-emerald-500/[0.02]' 
                : 'border-blue-300/30 bg-gradient-to-tr from-blue-400/[0.04] to-indigo-300/[0.02]'
            }`}
            style={{
              width: `${sphereRadius * 2.1}px`,
              height: `${sphereRadius * 2.1}px`
            }}
          />

          {/* Floating Pure Icons on 3D Sphere */}
          {projectedIcons.map((icon) => {
            const isHovered = hoveredSkill?.name === icon.name;

            return (
              <div
                key={icon.name}
                style={{
                  position: 'absolute',
                  left: `${icon.screenX}px`,
                  top: `${icon.screenY}px`,
                  transform: `translate(-50%, -50%) scale(${isHovered ? icon.scale * 1.3 : icon.scale})`,
                  zIndex: isHovered ? 999 : icon.zIndex,
                  opacity: isHovered ? 1 : icon.opacity,
                  transition: isDragging ? 'none' : 'transform 0.15s ease-out, opacity 0.2s ease-out'
                }}
                onMouseEnter={() => setHoveredSkill(icon)}
                onMouseLeave={() => setHoveredSkill(null)}
                className="group p-1"
              >
                {/* Pure SVG Icon (NO CARD BACKGROUND) */}
                <div className={`transition-transform duration-200 ${
                  isHovered ? 'filter drop-shadow-[0_0_12px_rgba(0,240,255,0.7)]' : ''
                }`}>
                  <TechIcon name={icon.name} className="w-8 h-8 sm:w-10 sm:h-10 pointer-events-none" />
                </div>
              </div>
            );
          })}

          {/* Centralized Floating Capability Tooltip */}
          <AnimatePresence>
            {hoveredSkill && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.15 }}
                className={`absolute bottom-3 left-1/2 -translate-x-1/2 px-4 py-2 rounded-xl text-center shadow-2xl pointer-events-none font-mono z-50 border whitespace-nowrap ${
                  isDark
                    ? 'bg-[#0a1222]/95 border-cyan-500/50 text-white shadow-[0_0_30px_rgba(0,240,255,0.25)]'
                    : 'bg-white/95 border-blue-300 text-slate-900 shadow-xl shadow-blue-500/10'
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <span className={`text-xs font-bold ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>
                    {hoveredSkill.name}
                  </span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                    isDark ? 'bg-cyan-500/10 text-cyan-300' : 'bg-blue-50 text-blue-700'
                  }`}>
                    {hoveredSkill.category}
                  </span>
                </div>
                <div className={`text-[11px] mt-0.5 ${isDark ? 'text-zinc-300' : 'text-slate-600'}`}>
                  {hoveredSkill.capability}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
