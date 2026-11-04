import { motion } from 'framer-motion';
import { Skeleton } from './skeleton';
import { cn } from '../../lib/utils';

export function ModernCardSkeleton({ className }) {
  return (
    <div
      className={cn(
        "relative w-full h-full bg-[#060a14] p-3 flex flex-col justify-between overflow-hidden select-none",
        className
      )}
    >
      {/* Background Animated Shimmer Layer */}
      <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-[#00f0ff]/[0.06] to-transparent pointer-events-none" />

      {/* Top Header Mockup */}
      <div className="flex items-center justify-between pb-2 border-b border-[#131f38]/60">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-cyan-400/80 animate-ping" />
          <Skeleton className="h-2.5 w-24 bg-[#142038]" />
        </div>
        <Skeleton className="h-2 w-14 bg-[#142038]" />
      </div>

      {/* Middle Mockup Metric Pills */}
      <div className="grid grid-cols-3 gap-1.5 my-auto">
        <div className="p-2 rounded-lg bg-[#0a1122] border border-[#162442] space-y-1">
          <Skeleton className="h-1.5 w-8 bg-[#182a4d]" />
          <Skeleton className="h-3 w-12 bg-cyan-400/25" />
        </div>
        <div className="p-2 rounded-lg bg-[#0a1122] border border-[#162442] space-y-1">
          <Skeleton className="h-1.5 w-8 bg-[#182a4d]" />
          <Skeleton className="h-3 w-12 bg-emerald-400/25" />
        </div>
        <div className="p-2 rounded-lg bg-[#0a1122] border border-[#162442] space-y-1">
          <Skeleton className="h-1.5 w-8 bg-[#182a4d]" />
          <Skeleton className="h-3 w-12 bg-purple-400/25" />
        </div>
      </div>

      {/* Animated Waveform / Sparkline Telemetry */}
      <div className="h-6 w-full flex items-end gap-1 px-1 my-1">
        {[40, 65, 30, 85, 55, 95, 45, 75, 60, 90, 70, 80].map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: `${h * 0.4}%` }}
            animate={{ height: [`${h * 0.3}%`, `${h}%`, `${h * 0.4}%`] }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.08
            }}
            className="flex-1 rounded-sm bg-gradient-to-t from-cyan-500/20 to-[#00ff66]/50"
          />
        ))}
      </div>

      {/* Bottom Status Footer */}
      <div className="pt-2 border-t border-[#131f38]/60 flex items-center justify-between">
        <Skeleton className="h-2 w-20 bg-[#142038]" />
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00ff66] animate-pulse" />
          <span className="text-[9px] font-mono text-[#00f0ff] font-bold tracking-wider">
            SYNCHRONIZING...
          </span>
        </div>
      </div>
    </div>
  );
}

export default ModernCardSkeleton;

