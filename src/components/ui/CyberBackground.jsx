import { useEffect, useRef, useState } from 'react';

export default function CyberBackground() {
  const canvasRef = useRef(null);
  const bgMode = 'neural'; // Default to 'neural' for vibrant full-screen animated network
  const mouseRef = useRef({ x: -1000, y: -1000, targetX: -1000, targetY: -1000, radius: 200, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initElements();
    };

    const handleMouseMove = (e) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    // ==========================================
    // PARTICLES, NODES & DATA STREAM PARTICLES
    // ==========================================
    let nodes = [];
    let packets = [];

    const nodeCount = Math.min(Math.floor((width * height) / 12000), 100);

    function initElements() {
      // 1. Interactive Nodes across the ENTIRE viewport
      nodes = [];
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.7,
          vy: (Math.random() - 0.5) * 0.7,
          radius: Math.random() * 2.2 + 1.2,
          color: Math.random() > 0.4 ? '#00f0ff' : '#00ff66',
          alpha: Math.random() * 0.5 + 0.35,
          pulseSpeed: Math.random() * 0.03 + 0.015
        });
      }

      // 2. High-speed data packets
      packets = [];
      for (let i = 0; i < 18; i++) {
        packets.push({
          fromNode: Math.floor(Math.random() * nodeCount),
          toNode: Math.floor(Math.random() * nodeCount),
          progress: Math.random(),
          speed: Math.random() * 0.015 + 0.008,
          color: Math.random() > 0.5 ? '#00ff66' : '#00f0ff',
          size: Math.random() * 2 + 1.5
        });
      }
    }

    initElements();

    // ==========================================
    // ANIMATION RENDER LOOP (Deterministic 60fps)
    // ==========================================
    let time = 0;

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse easing
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.1;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.1;

      // Update node positions
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;

        // Screen boundary rebound
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Subtle mouse repulsion/attraction field
        if (mouseRef.current.active) {
          const dx = mouseRef.current.x - node.x;
          const dy = mouseRef.current.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouseRef.current.radius && dist > 0) {
            const force = (mouseRef.current.radius - dist) / mouseRef.current.radius;
            node.x -= (dx / dist) * force * 1.8;
            node.y -= (dy / dist) * force * 1.8;
          }
        }
      }

      // Draw connection vectors between nodes
      const maxDist = bgMode === 'circuit' ? 120 : 155;
      for (let i = 0; i < nodes.length; i++) {
        const nodeA = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const nodeB = nodes[j];
          const dx = nodeA.x - nodeB.x;
          const dy = nodeA.y - nodeB.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const lineAlpha = (1 - dist / maxDist) * 0.32;
            ctx.strokeStyle = bgMode === 'circuit'
              ? `rgba(0, 255, 102, ${lineAlpha})`
              : `rgba(0, 240, 255, ${lineAlpha})`;
            ctx.lineWidth = 0.9;
            ctx.beginPath();

            if (bgMode === 'circuit') {
              ctx.moveTo(nodeA.x, nodeA.y);
              ctx.lineTo(nodeB.x, nodeA.y);
              ctx.lineTo(nodeB.x, nodeB.y);
            } else {
              ctx.moveTo(nodeA.x, nodeA.y);
              ctx.lineTo(nodeB.x, nodeB.y);
            }
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        const pulse = Math.sin(time * 2 + i) * 0.3 + 0.75;
        ctx.fillStyle = node.color;
        ctx.globalAlpha = node.alpha * pulse;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * pulse, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      // Draw active traveling light packets (high-speed data pulses)
      for (let i = 0; i < packets.length; i++) {
        const p = packets[i];
        const start = nodes[p.fromNode];
        const end = nodes[p.toNode];

        if (!start || !end) {
          p.fromNode = Math.floor(Math.random() * nodes.length);
          p.toNode = Math.floor(Math.random() * nodes.length);
          continue;
        }

        const dist = Math.hypot(end.x - start.x, end.y - start.y);
        if (dist > maxDist * 1.5) {
          p.fromNode = Math.floor(Math.random() * nodes.length);
          p.toNode = Math.floor(Math.random() * nodes.length);
          p.progress = 0;
          continue;
        }

        p.progress += p.speed;
        if (p.progress >= 1) {
          p.progress = 0;
          p.fromNode = p.toNode;
          p.toNode = Math.floor(Math.random() * nodes.length);
        }

        const curX = start.x + (end.x - start.x) * p.progress;
        const curY = start.y + (end.y - start.y) * p.progress;

        // Glowing packet head
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(curX, curY, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [bgMode]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Underlying Animated Vector Grid Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-55"
      />

      {/* Cyberpunk Scanline Texture Overlay (Dark Mode Only for pristine light mode clarity) */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-0 dark:opacity-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px]" 
      />

      {/* Ambient Radial Mesh Lights */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-b from-[#00ff66]/[0.08] to-transparent rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-500/[0.07] to-transparent rounded-full blur-[140px] pointer-events-none" />
    </div>
  );
}
