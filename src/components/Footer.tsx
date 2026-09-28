import React from 'react';

interface FooterProps {
  onOpenPlatform: () => void;
  onViewArchitecture: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPlatform,
  onViewArchitecture,
  onNavigate,
}) => {
  return (
    <footer className="border-t border-white/[0.06] bg-[#060709] py-16 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/[0.06]">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-bold">
                A
              </div>
              <span className="font-display font-bold text-base text-white tracking-wider">
                AGRIORA
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm font-light leading-relaxed">
              Living autonomous architecture and fair-trade agricultural intelligence empowering smallholder farming estates with diagnostic certainty, cold-chain preservation, and direct institutional escrow.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-7 grid grid-cols-3 gap-8 text-xs">
            <div className="space-y-3">
              <div className="font-mono uppercase text-slate-300 tracking-wider">LIVING TWIN</div>
              <ul className="space-y-2 font-light">
                <li><button onClick={() => onNavigate('hero')} className="hover:text-amber-300 transition-colors">Estate Architecture</button></li>
                <li><button onClick={() => onNavigate('problem')} className="hover:text-amber-300 transition-colors">5 Connected Decisions</button></li>
                <li><button onClick={() => onNavigate('intelligence')} className="hover:text-amber-300 transition-colors">Autonomous Core</button></li>
              </ul>
            </div>

            <div className="space-y-3">
              <div className="font-mono uppercase text-slate-300 tracking-wider">OPERATIONS</div>
              <ul className="space-y-2 font-light">
                <li><button onClick={() => onNavigate('copilot')} className="hover:text-amber-300 transition-colors">AI Plant Doctor</button></li>
                <li><button onClick={() => onNavigate('journey')} className="hover:text-amber-300 transition-colors">7-Stage Lifecycle</button></li>
                <li><button onClick={() => onNavigate('market')} className="hover:text-amber-300 transition-colors">Fair Trade Escrow</button></li>
              </ul>
            </div>

            <div className="space-y-3">
              <div className="font-mono uppercase text-slate-300 tracking-wider">WORKSPACE</div>
              <ul className="space-y-2 font-light">
                <li><button onClick={onOpenPlatform} className="text-amber-300 hover:underline">Farmer Console</button></li>
                <li><button onClick={onViewArchitecture} className="hover:text-white transition-colors">Pipeline Schema</button></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Quiet Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-500 gap-4">
          <div>© {new Date().getFullYear()} AGRIORA LIVING ARCHITECTURE · ALL RIGHTS RESERVED</div>
          <div className="flex items-center gap-6">
            <span>ZERO EXPLOITATIVE BROKERAGE</span>
            <span>·</span>
            <span>DATA AUTONOMY</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
