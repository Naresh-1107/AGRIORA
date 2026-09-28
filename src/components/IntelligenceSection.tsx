import React from 'react';
import { Cpu, Eye, Network, ShieldCheck, Database, Layers, Sparkles } from 'lucide-react';

interface ArchitecturePillar {
  number: string;
  title: string;
  tagline: string;
  description: string;
  inputs: string[];
  output: string;
}

const PILLARS: ArchitecturePillar[] = [
  {
    number: '01',
    title: 'Multimodal Sensor & Satellite Ingestion',
    tagline: 'Hyper-local data foundation for every acre',
    description: 'Combines Sentinel-2 multispectral imagery, ground capacitance probes, village weather stations, and farmer voice memos into a unified digital field twin.',
    inputs: ['NDVI Vegetation Index', 'Soil Moisture Topography', '48h Micro-Climate Radar'],
    output: 'Precision Field Stress Map'
  },
  {
    number: '02',
    title: 'Agricultural Foundation Models & Vision',
    tagline: 'Sub-millimeter plant pathogen detection',
    description: 'Trained on 4.2 million field crop leaf specimens to identify foliar blights, nutrient deficiencies, and pest infestations at microscopic onset.',
    inputs: ['Smartphone Camera Frame', 'Local Temperature / Humidity', 'Crop Phenology Stage'],
    output: 'Targeted Bio-Treatment Plan'
  },
  {
    number: '03',
    title: 'Autonomous Cold Storage & Logistics Routing',
    tagline: 'Eliminating the post-harvest distress sale',
    description: 'Monitors thermal decay curves in real-time, reserving space in village solar cold rooms and routing EV transport shuttles before produce deteriorates.',
    inputs: ['Produce Respiration Rate', 'Village Cold Vault Capacity', 'Fleet ETA & Traffic'],
    output: 'Zero-Spoilage Dispatch Schedule'
  },
  {
    number: '04',
    title: 'Institutional Smart Contract Escrow',
    tagline: 'Guaranteed fair realization with zero middlemen',
    description: 'Matches harvest volumes with verified food corporations, hotels, and retail chains, locking guaranteed prices in transparent escrow accounts with direct DBT payouts.',
    inputs: ['Verified Grade Quality', 'Buyer Demand Aggregation', 'Transparent Logistics Cost'],
    output: 'Direct Bank Settlement'
  }
];

export const IntelligenceSection: React.FC = () => {
  return (
    <section id="intelligence" className="relative py-28 border-t border-white/[0.06] bg-[#08090c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl space-y-4">
            <div className="text-xs uppercase font-mono tracking-[0.25em] text-amber-300">
              02 // UNIFIED INTELLIGENCE ARCHITECTURE
            </div>
            <h2 className="text-3xl sm:text-5xl font-extralight tracking-tight text-white font-display">
              Four Living Pillars. <br />
              <span className="font-semibold text-gold-gradient">
                One Autonomous Operating System.
              </span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-300 max-w-md font-light leading-relaxed">
            From raw satellite telemetry to real-time bank deposits, AGRIORA synchronizes every physical and digital step across the estate lifecycle.
          </p>
        </div>

        {/* 4 Architectural Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="luxury-card p-8 rounded-3xl space-y-6 relative overflow-hidden group"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-amber-400">
                  PILLAR // {pillar.number}
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-slate-500">
                  AUTONOMOUS CORE
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-light text-white tracking-tight font-display">
                  {pillar.title}
                </h3>
                <p className="text-xs text-amber-300/90 font-mono tracking-wide">
                  {pillar.tagline}
                </p>
                <p className="text-sm text-slate-400 font-light leading-relaxed pt-1">
                  {pillar.description}
                </p>
              </div>

              {/* Data Ingestion Pipeline Preview */}
              <div className="pt-4 border-t border-white/[0.08] space-y-3">
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                  TELEMETRY INPUTS
                </div>
                <div className="flex flex-wrap gap-2">
                  {pillar.inputs.map((inp, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs text-slate-300 font-mono"
                    >
                      {inp}
                    </span>
                  ))}
                </div>

                <div className="mt-3 p-3 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-between">
                  <span className="text-xs text-amber-200/80 font-mono">AUTONOMOUS OUTPUT</span>
                  <span className="text-xs font-bold text-amber-300">{pillar.output}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
