import React from 'react';

interface CircularMetricProps {
  percentage: number;
  label: string;
  metricValue: string;
  subtext: string;
  colorHex: string;
}

const CircularGauge: React.FC<CircularMetricProps> = ({
  percentage,
  label,
  metricValue,
  subtext,
  colorHex
}) => {
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs flex flex-col items-center text-center justify-between">
      <div className="relative w-32 h-32 flex items-center justify-center my-3">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="transparent"
            stroke="#f1f5f9"
            strokeWidth="8"
          />
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="transparent"
            stroke={colorHex}
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-extrabold text-slate-900 tracking-tight">
            {metricValue}
          </span>
        </div>
      </div>

      <div className="mt-4">
        <h4 className="text-base font-bold text-slate-900 tracking-tight">
          {label}
        </h4>
        <p className="mt-1 text-xs text-slate-500 font-medium">
          {subtext}
        </p>
      </div>
    </div>
  );
};

export const SustainabilityMetrics: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-wider text-emerald-700 mb-3">
              SUSTAINABILITY & EFFICIENCY COUPLING
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
              Grow intelligently. <br />
              <span className="text-emerald-600">Waste less.</span>
            </h2>
            <p className="mt-4 text-xl text-slate-600 font-normal leading-relaxed">
              Efficiency in inputs leads directly to lower production costs and reduced environmental footprint across smallholder farms.
            </p>
          </div>

          <div className="self-start md:self-end">
            <span className="text-xs font-semibold px-3 py-1 bg-slate-200 text-slate-800 rounded-full">
              Illustrative Demo Metrics
            </span>
          </div>
        </div>

        {/* 4 Clean Circular Gauges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <CircularGauge
            percentage={85}
            metricValue="+34.8%"
            label="Water Efficiency"
            subtext="Targeted drip irrigation vs traditional flooding"
            colorHex="#0284c7"
          />
          <CircularGauge
            percentage={72}
            metricValue="-28.4%"
            label="Resource Usage"
            subtext="Synthetic NPK fertilizer reduction via leaf testing"
            colorHex="#059669"
          />
          <CircularGauge
            percentage={60}
            metricValue="-41.2%"
            label="Transport Distance"
            subtext="Consolidated EV milk-run logistics corridors"
            colorHex="#d97706"
          />
          <CircularGauge
            percentage={92}
            metricValue="7.2%"
            label="Loss Risk"
            subtext="Produce spoilage rate in solar cold chain (down from 32%)"
            colorHex="#10b981"
          />
        </div>

      </div>
    </section>
  );
};
