import React from 'react';
import { ArrowRight, Sparkles, Terminal, ShieldCheck } from 'lucide-react';

interface FinalCinematicCTAProps {
  onLaunchPlatform: () => void;
  onViewArchitecture: () => void;
}

export const FinalCinematicCTA: React.FC<FinalCinematicCTAProps> = ({
  onLaunchPlatform,
  onViewArchitecture,
}) => {
  return (
    <section className="relative py-32 border-t border-white/[0.06] bg-[#07080a] overflow-hidden">
      
      {/* Background ambient gold and emerald glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-amber-500/15 via-emerald-500/10 to-transparent rounded-full blur-[180px]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        {/* Top Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-amber-300 text-xs font-mono tracking-[0.25em] uppercase backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>INDEPENDENT FOOD SOVEREIGNTY</span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extralight tracking-tight text-white leading-[1.08] font-display">
          Step into the Living <br />
          <span className="font-semibold text-gold-gradient">
            Agricultural Estate.
          </span>
        </h2>

        {/* Subtext */}
        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
          Experience the autonomous operating console that transforms farming from an uncertain gamble into a predictable, profitable, dignified enterprise.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={onLaunchPlatform}
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-sm tracking-wider uppercase transition-all shadow-[0_10px_35px_rgba(212,175,55,0.35)] flex items-center gap-2.5 active:scale-95"
          >
            <span>Launch Spatial Console</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onViewArchitecture}
            className="px-7 py-4 rounded-2xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-200 hover:text-white border border-white/[0.12] text-sm font-medium tracking-wide transition-all backdrop-blur-md"
          >
            Inspect Technical Pipeline
          </button>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-8 pt-8 text-xs text-slate-400 font-mono">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>100% FARMER DATA SOVEREIGNTY</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span>ZERO EXPLOITATIVE BROKERAGE</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>DIRECT BANK DBT CLEARING</span>
          </div>
        </div>

      </div>
    </section>
  );
};
