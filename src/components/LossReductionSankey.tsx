import React, { useState } from 'react';
import { CheckCircle2, TrendingDown, ArrowRight } from 'lucide-react';

interface StageVolume {
  stage: string;
  conventionalVolumeKg: number;
  agrioraVolumeKg: number;
  lossPointReason: string;
  aiIntervention: string;
}

const LOSS_DATA: StageVolume[] = [
  {
    stage: 'Harvested Batch',
    conventionalVolumeKg: 1000,
    agrioraVolumeKg: 1000,
    lossPointReason: 'Maturity mismatch & physical bruises during manual pick',
    aiIntervention: 'Spectral ripeness index identifies optimal 36-hr harvest window'
  },
  {
    stage: 'Post-Harvest Storage',
    conventionalVolumeKg: 820,
    agrioraVolumeKg: 960,
    lossPointReason: 'Field heat retention & delayed cooling in ambient sheds',
    aiIntervention: 'Instant reservation in solar cold-pod within 7 km (4°C active)'
  },
  {
    stage: 'Regional Transport',
    conventionalVolumeKg: 710,
    agrioraVolumeKg: 935,
    lossPointReason: 'Unrefrigerated bumpy transit & mid-route traffic blockages',
    aiIntervention: 'Refrigerated shared EV dispatch with automated rerouting'
  },
  {
    stage: 'Market Handshake',
    conventionalVolumeKg: 640,
    agrioraVolumeKg: 910,
    lossPointReason: 'Distress dumping caused by predatory commission agents',
    aiIntervention: 'Pre-committed institutional buyer escrow at locked prices'
  }
];

export const LossReductionSankey: React.FC = () => {
  const [activeIntervention, setActiveIntervention] = useState<number>(1);

  return (
    <section className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-sm font-semibold uppercase tracking-wider text-emerald-700 mb-3">
            PERISHABLE VALUE PRESERVATION
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            Stop 36% of food from rotting.
          </h2>
          <p className="mt-4 text-xl text-slate-600 font-normal leading-relaxed">
            Comparing 1,000 kg of fresh tomatoes: Conventional supply chains lose up to 360 kg to heat and delays. AGRIORA delivers 910 kg to fair buyers.
          </p>
        </div>

        {/* 4 Stage Loss Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          {LOSS_DATA.map((item, idx) => {
            const isSelected = activeIntervention === idx;
            const diff = item.agrioraVolumeKg - item.conventionalVolumeKg;

            return (
              <button
                key={item.stage}
                onClick={() => setActiveIntervention(idx)}
                className={`p-6 rounded-3xl border text-left transition-all ${
                  isSelected
                    ? 'bg-slate-900 border-slate-900 text-white shadow-md'
                    : 'bg-slate-50 border-slate-200 text-slate-800 hover:border-slate-300'
                }`}
              >
                <span className="text-xs font-bold uppercase tracking-wider block opacity-70 mb-1">
                  Stage 0{idx + 1}
                </span>
                <h4 className="text-lg font-bold tracking-tight mb-4">
                  {item.stage}
                </h4>

                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="opacity-70">Old Way:</span>
                    <span className="font-bold">{item.conventionalVolumeKg} kg</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={isSelected ? 'text-emerald-300 font-bold' : 'text-emerald-700 font-bold'}>
                      AGRIORA:
                    </span>
                    <span className="font-extrabold">{item.agrioraVolumeKg} kg</span>
                  </div>
                  {diff > 0 && (
                    <div className="pt-2 border-t border-slate-200/40 text-emerald-600 font-bold text-xs flex items-center justify-between">
                      <span>Saved:</span>
                      <span>+{diff} kg</span>
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Stage Detail Banner */}
        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Active Intervention Details · {LOSS_DATA[activeIntervention].stage}
            </span>
            <h4 className="text-xl font-bold text-slate-900">
              AGRIORA Solution: {LOSS_DATA[activeIntervention].aiIntervention}
            </h4>
            <p className="text-sm text-slate-600">
              Conventional failure point prevented: {LOSS_DATA[activeIntervention].lossPointReason}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-100 text-emerald-900 font-bold text-sm whitespace-nowrap">
            91% Final Food Preservation
          </div>
        </div>

      </div>
    </section>
  );
};
