import React from 'react';
import { CloudRain, Bug, Droplets, Thermometer, ShieldAlert } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Scroll3DAssembly } from './Scroll3DAssembly';

interface ProblemCard {
  id: string;
  stepNumber: string;
  title: string;
  subtitle: string;
  farmerPain: string;
  systemSolution: string;
  icon: React.ReactNode;
  statNumber: string;
  statLabel: string;
}

const PROBLEMS: ProblemCard[] = [
  {
    id: 'weather',
    stepNumber: '01',
    title: 'Weather & Climate Volatility',
    subtitle: 'Unpredictable monsoons destroy initial seed investment',
    farmerPain: 'Farmers sow based on calendar traditions, but sudden 3-day dry spells or unexpected torrential storms wash away expensive seeds.',
    systemSolution: 'AGRIORA models 48-hour hyper-local radar and soil moisture saturation to generate green-light sowing windows.',
    icon: <CloudRain className="w-6 h-6 text-amber-300" />,
    statNumber: '35%',
    statLabel: 'Sowing Failures Prevented'
  },
  {
    id: 'disease',
    stepNumber: '02',
    title: 'Foliar Crop Disease & Pests',
    subtitle: 'Invisible fungal spores spread across entire fields in 48 hours',
    farmerPain: 'By the time leaves turn yellow, over 40% of the yield is lost, forcing farmers to buy expensive chemical cocktails.',
    systemSolution: 'Instant smartphone multispectral leaf scan detects early blight, bacterial wilt, and mites at spore level with organic remedies.',
    icon: <Bug className="w-6 h-6 text-emerald-400" />,
    statNumber: '99.4%',
    statLabel: 'Diagnostic Accuracy'
  },
  {
    id: 'irrigation',
    stepNumber: '03',
    title: 'Water Waste & Root Asphyxiation',
    subtitle: 'Flood irrigation drains groundwater and drowns root zones',
    farmerPain: 'Pumping groundwater for hours wastes electricity, depletes the water table, and causes soil salinization.',
    systemSolution: 'Root-zone moisture sensors and evapotranspiration calculations schedule precision drip cycles, saving 38% water.',
    icon: <Droplets className="w-6 h-6 text-cyan-300" />,
    statNumber: '-38%',
    statLabel: 'Freshwater Conserved'
  },
  {
    id: 'storage',
    stepNumber: '04',
    title: 'Post-Harvest Spoilage Losses',
    subtitle: 'Fresh produce rots in tropical heat within 72 hours',
    farmerPain: 'Without decentralized cold storage, farmers are forced into distress sales on harvest day at whatever price middlemen offer.',
    systemSolution: 'Village-level solar phase-change cold rooms preserve freshness for 24 days, giving farmers holding power.',
    icon: <Thermometer className="w-6 h-6 text-amber-300" />,
    statNumber: '4.0°C',
    statLabel: 'Off-Grid Cold Vault'
  },
  {
    id: 'market',
    stepNumber: '05',
    title: 'Middleman Exploitation & Traps',
    subtitle: 'Brokers extract 50% margins and delay payments for months',
    farmerPain: 'Traditional wholesale mandis deduct arbitrary commission fees, produce weight cuts, and offer non-guaranteed credit.',
    systemSolution: 'Direct smart contract escrow matches farmers to verified institutional food companies with immediate digital payment.',
    icon: <ShieldAlert className="w-6 h-6 text-emerald-400" />,
    statNumber: '+114%',
    statLabel: 'Net Farmer Realization'
  }
];

export const ProblemSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="problem" className="relative py-28 border-t border-white/[0.06] bg-[#090b10] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with 3D Assembly */}
        <Scroll3DAssembly direction="up" delay={0}>
          <div className="max-w-3xl mb-16 space-y-4">
            <div className="text-xs uppercase font-mono tracking-[0.25em] text-amber-300">
              {t.problem.eyebrow}
            </div>
            <h2 className="text-3xl sm:text-5xl font-extralight tracking-tight text-white font-display">
              {t.problem.title1} <br />
              <span className="font-semibold text-gold-gradient">
                {t.problem.title2}
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
              {t.problem.subtitle}
            </p>
          </div>
        </Scroll3DAssembly>

        {/* 5 Connected Problem Cards Grid with Staggered 3D Unarranged -> Arranged */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROBLEMS.map((problem, idx) => (
            <Scroll3DAssembly
              key={problem.id}
              direction={idx % 2 === 0 ? 'left' : 'right'}
              delay={idx * 90}
            >
              <div className="luxury-card p-8 rounded-3xl flex flex-col justify-between space-y-6 relative overflow-hidden group h-full">
                {/* Top Row: Index & Icon */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-amber-400/80 tracking-widest">
                    {t.problem.phase} {problem.stepNumber}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:scale-110 transition-transform">
                    {problem.icon}
                  </div>
                </div>

                {/* Title & Pain */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {problem.title}
                  </h3>
                  <p className="text-sm text-slate-400 font-light leading-relaxed">
                    {problem.farmerPain}
                  </p>
                </div>

                {/* System Solution */}
                <div className="pt-4 border-t border-white/[0.08] space-y-3">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                    {t.problem.agrioraRes}
                  </div>
                  <p className="text-xs text-slate-300 font-light leading-relaxed">
                    {problem.systemSolution}
                  </p>
                </div>

                {/* Stat Metric */}
                <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.06] flex items-center justify-between">
                  <span className="text-xs text-slate-400">{problem.statLabel}</span>
                  <span className="text-xl font-bold text-amber-300 font-display">
                    {problem.statNumber}
                  </span>
                </div>
              </div>
            </Scroll3DAssembly>
          ))}
        </div>

      </div>
    </section>
  );
};
