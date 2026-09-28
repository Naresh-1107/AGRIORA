import React from 'react';

interface ImpactStatement {
  title: string;
  metric: string;
  unit: string;
  description: string;
  benchmark: string;
}

const IMPACT_STATEMENTS: ImpactStatement[] = [
  {
    title: 'BETTER DECISIONS',
    metric: '42,000+',
    unit: 'Crop Cycles Modeled',
    description: 'Predictive sowing dates and timely pest interventions preventing localized crop failures.',
    benchmark: '94.2% recommendation adoption rate across pilots'
  },
  {
    title: 'REDUCED WASTE',
    metric: '3,800',
    unit: 'Tons Produce Saved',
    description: 'Decentralized solar cold rooms and dynamic routing reducing post-harvest perishability loss.',
    benchmark: 'Loss rate reduced from 32% to 8.6%'
  },
  {
    title: 'SMARTER RESOURCE USE',
    metric: '1.2B',
    unit: 'Liters Water Conserved',
    description: 'Root-zone evapotranspiration scheduling preventing excessive flood irrigation pumping.',
    benchmark: '34.8% average pumping energy savings'
  },
  {
    title: 'IMPROVED MARKET VISIBILITY',
    metric: '+26.8%',
    unit: 'Net Realization Increase',
    description: 'Direct institutional and FPO contract linkages eliminating commission deductions.',
    benchmark: 'Zero hidden mandi deductions, direct bank DBT'
  }
];

export const ImpactSection: React.FC = () => {
  return (
    <section id="impact" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-wider text-emerald-700 mb-3">
              SYSTEMIC IMPACT ARCHITECTURE
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
              Real outcomes. <br />
              <span className="text-emerald-600">Measurable resilience.</span>
            </h2>
            <p className="mt-4 text-xl text-slate-600 font-normal leading-relaxed">
              AGRIORA is evaluated on tangible food security metrics: fewer failed crops, less wasted food, and higher earnings for rural families.
            </p>
          </div>

          <div className="self-start md:self-end">
            <span className="text-xs font-semibold px-3 py-1 bg-slate-100 text-slate-700 rounded-full border border-slate-200">
              Demo Values · Regional Pilot Averages
            </span>
          </div>
        </div>

        {/* 4 Clean Large Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {IMPACT_STATEMENTS.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-4">
                  {item.title}
                </span>

                <div className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
                  {item.metric}
                </div>
                <div className="text-sm font-bold text-emerald-700 mt-1">
                  {item.unit}
                </div>

                <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-200 text-xs font-medium text-slate-500">
                {item.benchmark}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
