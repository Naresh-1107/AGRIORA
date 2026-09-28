import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Droplets, Zap, TrendingUp } from 'lucide-react';
import { LuxuryEstate3D } from './LuxuryEstate3D';
import { useLanguage } from '../context/LanguageContext';
import { Scroll3DAssembly } from './Scroll3DAssembly';

interface HeroSectionProps {
  onExploreIntelligence?: () => void;
  onSeeHowItWorks?: () => void;
  onExploreEcosystem?: () => void;
  onOpenPlatform?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreIntelligence,
  onSeeHowItWorks,
  onExploreEcosystem,
  onOpenPlatform,
}) => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative pt-28 pb-20 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-tr from-amber-500/10 via-emerald-500/5 to-transparent rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Top Headline Row */}
        <Scroll3DAssembly direction="up" delay={0}>
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6 mb-12">
            
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-amber-200 text-xs font-mono tracking-[0.25em] uppercase backdrop-blur-md shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{t.hero.eyebrow}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extralight tracking-tight text-white leading-[1.08] font-display">
              {t.hero.titlePart1} <br />
              <span className="font-semibold text-gold-gradient">
                {t.hero.titlePart2}
              </span>
            </h1>

            {/* Editorial Subtext */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-light leading-relaxed">
              {t.hero.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={onOpenPlatform}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-sm tracking-wider uppercase transition-all shadow-[0_10px_35px_rgba(212,175,55,0.35)] flex items-center gap-2.5 active:scale-95"
              >
                <span>{t.hero.launchConsole}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreIntelligence}
                className="px-7 py-4 rounded-2xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-200 hover:text-white border border-white/[0.12] text-sm font-medium tracking-wide transition-all backdrop-blur-md"
              >
                {t.hero.exploreLiving}
              </button>
            </div>
          </div>
        </Scroll3DAssembly>

        {/* 3D Interactive Master Estate Component (Matching Dribbble Shot) */}
        <Scroll3DAssembly direction="scatter" delay={150}>
          <div className="w-full mb-16">
            <LuxuryEstate3D onSelectHotspotAction={(id) => {
              const el = document.getElementById(id === 'greenhouse' ? 'copilot' : id === 'market_terminal' ? 'market' : 'journey');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }} />
          </div>
        </Scroll3DAssembly>

        {/* Luxury Key Telemetry Row with Staggered 3D Assembly */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          
          <Scroll3DAssembly direction="up" delay={50}>
            <div className="p-5 rounded-2xl luxury-card border border-white/[0.07]">
              <div className="text-[11px] uppercase tracking-[0.2em] font-mono text-slate-400 mb-2">
                {t.hero.statsFootprint}
              </div>
              <div className="text-3xl font-light text-white font-display">
                320 <span className="text-base text-amber-300 font-normal">Ha</span>
              </div>
              <div className="text-xs text-slate-400 mt-1">{t.hero.statsFootprintSub}</div>
            </div>
          </Scroll3DAssembly>

          <Scroll3DAssembly direction="up" delay={120}>
            <div className="p-5 rounded-2xl luxury-card border border-white/[0.07]">
              <div className="text-[11px] uppercase tracking-[0.2em] font-mono text-slate-400 mb-2">
                {t.hero.statsShield}
              </div>
              <div className="text-3xl font-light text-emerald-400 font-display">
                99.4%
              </div>
              <div className="text-xs text-slate-400 mt-1">{t.hero.statsShieldSub}</div>
            </div>
          </Scroll3DAssembly>

          <Scroll3DAssembly direction="up" delay={190}>
            <div className="p-5 rounded-2xl luxury-card border border-white/[0.07]">
              <div className="text-[11px] uppercase tracking-[0.2em] font-mono text-slate-400 mb-2">
                {t.hero.statsVault}
              </div>
              <div className="text-3xl font-light text-cyan-300 font-display">
                4.0°C
              </div>
              <div className="text-xs text-slate-400 mt-1">{t.hero.statsVaultSub}</div>
            </div>
          </Scroll3DAssembly>

          <Scroll3DAssembly direction="up" delay={260}>
            <div className="p-5 rounded-2xl luxury-card border border-white/[0.07]">
              <div className="text-[11px] uppercase tracking-[0.2em] font-mono text-slate-400 mb-2">
                {t.hero.statsRealization}
              </div>
              <div className="text-3xl font-light text-amber-400 font-display">
                +114%
              </div>
              <div className="text-xs text-slate-400 mt-1">{t.hero.statsRealizationSub}</div>
            </div>
          </Scroll3DAssembly>

        </div>

      </div>
    </section>
  );
};
