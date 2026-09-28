import React, { useState } from 'react';
import { ShieldCheck, UserCheck, CheckCircle2, ArrowRight } from 'lucide-react';

interface TrustStep {
  step: string;
  title: string;
  role: string;
  description: string;
  indicator: string;
}

const TRUST_STEPS: TrustStep[] = [
  {
    step: '01',
    title: 'Data Collection',
    role: 'Sensor & Satellite',
    description: 'Probes, local weather stations, and leaf photos gather objective ground truth.',
    indicator: 'Empirical Data'
  },
  {
    step: '02',
    title: 'AI Analysis',
    role: 'Computer Vision',
    description: 'AI model detects foliar spore patterns and correlates micro-weather trends.',
    indicator: 'Pattern Detection'
  },
  {
    step: '03',
    title: 'Recommendation',
    role: 'Actionable Advisory',
    description: 'Generates non-binding guidance: water timing, bio-fungicides, and market rates.',
    indicator: 'Decision Support'
  },
  {
    step: '04',
    title: 'Human Review',
    role: 'Agronomist Extension',
    description: 'Regional agronomists and cooperative officers verify high-stakes recommendations.',
    indicator: 'Expert Verification'
  },
  {
    step: '05',
    title: 'Farmer Decision',
    role: 'Sovereign Grower',
    description: 'The farmer holds final authority. You approve, adjust, or decline based on lived knowledge.',
    indicator: 'Final Sovereignty'
  }
];

export const TrustLoop: React.FC = () => {
  const [activeStep, setActiveStep] = useState(4); // default on Farmer Decision

  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-sm font-semibold uppercase tracking-wider text-emerald-700 mb-3">
            HUMAN + AI GOVERNANCE & SOVEREIGNTY
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            AI assists. Humans verify. <br />
            <span className="text-emerald-600">Farmers decide.</span>
          </h2>
          <p className="mt-4 text-xl text-slate-600 font-normal leading-relaxed">
            AGRIORA is designed strictly as decision support rather than autonomous decision-making. Technology should empower agricultural judgment, never override the farmer.
          </p>
        </div>

        {/* 5-Step Visual Chain */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
          {TRUST_STEPS.map((item, idx) => {
            const isSelected = idx === activeStep;
            return (
              <button
                key={item.step}
                onClick={() => setActiveStep(idx)}
                className={`p-6 rounded-3xl border text-left transition-all ${
                  isSelected
                    ? 'bg-slate-900 border-slate-900 text-white shadow-md'
                    : 'bg-white border-slate-200 text-slate-800 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`font-mono text-xs font-bold px-2 py-0.5 rounded-md ${
                      isSelected ? 'bg-emerald-400 text-slate-900' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    STEP {item.step}
                  </span>
                  <span
                    className={`text-xs font-semibold ${
                      isSelected ? 'text-emerald-300' : 'text-slate-400'
                    }`}
                  >
                    {item.indicator}
                  </span>
                </div>
                <h4 className="text-lg font-bold tracking-tight mb-1">
                  {item.title}
                </h4>
                <div className="text-xs opacity-75 mb-2 font-medium">
                  {item.role}
                </div>
                <p className="text-xs leading-relaxed opacity-90">
                  {item.description}
                </p>
              </button>
            );
          })}
        </div>

        {/* Highlight Callout Box */}
        <div className="p-8 rounded-3xl bg-white border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xs">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900">
                Ethical AI Guardrails & Local Sovereignty
              </h4>
              <p className="text-sm text-slate-600 mt-0.5">
                No automated sprayers, no forced contracts, and no opaque price-setting. All telemetry remains owned by the farmer.
              </p>
            </div>
          </div>

          <div className="px-5 py-2.5 rounded-2xl bg-slate-100 text-slate-800 text-xs font-bold whitespace-nowrap border border-slate-200">
            Decision Support Architecture
          </div>
        </div>

      </div>
    </section>
  );
};
