import React, { useState } from 'react';
import { FARM_JOURNEY_STAGES } from '../data/agriData';
import { FarmStage } from '../types';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export const FarmJourney: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const currentStage: FarmStage = FARM_JOURNEY_STAGES[activeStageIndex];

  return (
    <section id="journey" className="relative py-28 border-t border-white/[0.06] bg-[#08090c] overflow-hidden">
      
      {/* Dynamic ambient stage glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-amber-500/5 rounded-full blur-[180px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl space-y-4">
            <div className="text-xs uppercase font-mono tracking-[0.25em] text-amber-300">
              04 // CONNECTED LIFECYCLE PIPELINE
            </div>
            <h2 className="text-3xl sm:text-5xl font-extralight tracking-tight text-white font-display">
              Seven Intelligent Stages. <br />
              <span className="font-semibold text-gold-gradient">
                One Continuous Journey.
              </span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-300 max-w-md font-light leading-relaxed">
            Every decision from initial soil preparation to final institutional settlement is tracked, optimized, and linked to ensure maximum profit.
          </p>
        </div>

        {/* Horizontal Luxury Stage Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 mb-10">
          {FARM_JOURNEY_STAGES.map((stage: FarmStage, idx: number) => {
            const isActive = idx === activeStageIndex;
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStageIndex(idx)}
                className={`p-4 rounded-2xl text-left transition-all relative overflow-hidden group ${
                  isActive
                    ? 'luxury-glass-gold border-amber-400/40 shadow-lg shadow-amber-400/15 -translate-y-1'
                    : 'luxury-card hover:border-white/20'
                }`}
              >
                <div className="text-[10px] font-mono uppercase tracking-widest text-amber-400/80 mb-1">
                  STAGE {stage.step}
                </div>
                <div className={`text-sm font-bold tracking-tight truncate ${isActive ? 'text-amber-200' : 'text-white'}`}>
                  {stage.name}
                </div>
                <div className="text-[11px] text-slate-400 truncate mt-0.5 font-light">
                  {stage.subtitle}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Active Stage Spotlight Card */}
        <div className="luxury-glass p-8 sm:p-12 rounded-3xl border border-white/[0.08] relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1.5 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-mono font-bold">
                  STAGE {currentStage.step} // {currentStage.name}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {currentStage.subtitle}
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-extralight text-white tracking-tight font-display">
                {currentStage.subtitle}
              </h3>

              <p className="text-base text-slate-300 font-light leading-relaxed">
                {currentStage.description}
              </p>

              {/* Data Ingestion & System Action */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.06]">
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                    AI CAPABILITIES
                  </div>
                  <ul className="space-y-1.5">
                    {currentStage.aiCapabilities.map((cap: string, i: number) => (
                      <li key={i} className="text-xs text-slate-300 flex items-center gap-2 font-light">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                        <span className="line-clamp-1">{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.06]">
                  <div className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider mb-2 font-semibold">
                    REAL-TIME METRIC
                  </div>
                  <div className="text-xl font-bold text-white font-display">
                    {currentStage.metrics[0]?.value}
                  </div>
                  <div className="text-xs text-slate-400 mt-1 font-light leading-snug">
                    {currentStage.metrics[0]?.label} · {currentStage.metrics[0]?.delta}
                  </div>
                </div>
              </div>

              {/* Human-in-the-Loop Safeguard */}
              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-mono uppercase text-emerald-300 font-bold">
                    FARMER DECISION ACTION
                  </div>
                  <div className="text-xs text-slate-300 mt-0.5 font-light leading-relaxed">
                    {currentStage.farmerAction}
                  </div>
                </div>
              </div>

            </div>

            {/* Right: Clean Stage Metric Card */}
            <div className="lg:col-span-5 luxury-glass-gold p-8 rounded-3xl space-y-6">
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-amber-300">
                STAGE TELEMETRY
              </div>

              <div className="space-y-3">
                {currentStage.metrics.map((m, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-black/50 border border-amber-400/20 flex items-center justify-between">
                    <div>
                      <div className="text-[11px] text-slate-400 font-mono">{m.label}</div>
                      <div className="text-2xl font-extrabold text-amber-300 mt-0.5 font-display">
                        {m.value}
                      </div>
                    </div>
                    {m.delta && (
                      <span className="px-2 py-1 rounded-lg bg-amber-400/20 text-amber-200 text-xs font-mono font-bold">
                        {m.delta}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={() => setActiveStageIndex((prev) => (prev > 0 ? prev - 1 : FARM_JOURNEY_STAGES.length - 1))}
                  className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-mono transition-colors"
                >
                  ← PREVIOUS
                </button>
                <button
                  onClick={() => setActiveStageIndex((prev) => (prev < FARM_JOURNEY_STAGES.length - 1 ? prev + 1 : 0))}
                  className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-md shadow-amber-400/20 active:scale-95"
                >
                  <span>NEXT STAGE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
