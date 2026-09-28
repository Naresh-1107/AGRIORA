import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, AlertTriangle, Droplets, CloudSun, TrendingUp, Sparkles } from 'lucide-react';

interface PlotData {
  id: string;
  name: string;
  acreage: string;
  crop: string;
  cropHealth: number;
  weatherRisk: 'Low' | 'Moderate' | 'High';
  waterStatus: number;
  expectedYield: string;
  yieldDelta: string;
  soilMoistureDaily: number[];
  canopyTemp: string;
  ndviScore: number;
}

const PLOTS: PlotData[] = [
  {
    id: 'plot-a',
    name: 'Sector 4 · Heirloom Roma Tomato',
    acreage: '4.8 Acres',
    crop: 'Tomato',
    cropHealth: 92,
    weatherRisk: 'Low',
    waterStatus: 68,
    expectedYield: '28.4 MT',
    yieldDelta: '+18.4% vs regional benchmark',
    soilMoistureDaily: [62, 65, 71, 68, 67, 69, 68],
    canopyTemp: '24.2°C',
    ndviScore: 0.84
  },
  {
    id: 'plot-b',
    name: 'Sector 2 · Basmati Paddy (Pusa 1121)',
    acreage: '7.2 Acres',
    crop: 'Rice',
    cropHealth: 88,
    weatherRisk: 'Moderate',
    waterStatus: 82,
    expectedYield: '19.6 MT',
    yieldDelta: '+12.1% vs regional benchmark',
    soilMoistureDaily: [78, 80, 85, 84, 82, 83, 82],
    canopyTemp: '26.8°C',
    ndviScore: 0.79
  },
  {
    id: 'plot-c',
    name: 'Sector 7 · Durum Golden Wheat',
    acreage: '6.0 Acres',
    crop: 'Wheat',
    cropHealth: 95,
    weatherRisk: 'Low',
    waterStatus: 58,
    expectedYield: '24.0 MT',
    yieldDelta: '+21.5% vs regional benchmark',
    soilMoistureDaily: [54, 56, 58, 60, 59, 58, 58],
    canopyTemp: '21.5°C',
    ndviScore: 0.88
  }
];

export const IntelligenceDashboard: React.FC = () => {
  const [selectedPlotId, setSelectedPlotId] = useState('plot-a');
  const activePlot = PLOTS.find((p) => p.id === selectedPlotId) || PLOTS[0];

  return (
    <section className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-sm font-semibold uppercase tracking-wider text-emerald-700 mb-3">
              REAL-TIME FIELD TELEMETRY & BIOMASS
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
              Farm Intelligence
            </h2>
            <p className="mt-4 text-xl text-slate-600 font-normal leading-relaxed">
              Consolidated agronomic vital signs across crop vigor, root-zone hydration, and localized atmospheric risk.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 self-start md:self-end">
            <span className="text-xs font-semibold px-3 py-1 bg-amber-100 text-amber-900 rounded-full border border-amber-200">
              DEMO ENVIRONMENT
            </span>

            {/* Clean Segmented Plot Switcher */}
            <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-2xl">
              {PLOTS.map((plot) => (
                <button
                  key={plot.id}
                  onClick={() => setSelectedPlotId(plot.id)}
                  className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                    plot.id === selectedPlotId
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {plot.crop}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 4 Core Vital Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          
          {/* 1. Farm Health */}
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200">
            <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
              <span className="uppercase font-bold">Farm Health</span>
              <span className="text-emerald-700 font-semibold">NDVI {activePlot.ndviScore}</span>
            </div>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-4xl font-extrabold text-slate-900">
                {activePlot.cropHealth}%
              </span>
              <span className="text-xs font-bold text-emerald-700">Optimal Vigor</span>
            </div>
            <div className="mt-3 w-full bg-slate-200 rounded-full h-2 overflow-hidden">
              <div
                className="bg-emerald-500 h-full rounded-full transition-all duration-500"
                style={{ width: `${activePlot.cropHealth}%` }}
              />
            </div>
          </div>

          {/* 2. Weather Risk */}
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200">
            <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
              <span className="uppercase font-bold">Weather Risk</span>
              <span className="text-slate-600">7-Day Sync</span>
            </div>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-4xl font-extrabold text-slate-900">
                {activePlot.weatherRisk}
              </span>
              <span className="text-xs font-semibold text-slate-600">Dry spell window</span>
            </div>
            <div className="mt-3 text-xs text-slate-600">
              Canopy temp: <strong className="text-slate-900">{activePlot.canopyTemp}</strong>
            </div>
          </div>

          {/* 3. Water Status */}
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200">
            <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
              <span className="uppercase font-bold">Water Status</span>
              <span className="text-sky-700 font-semibold">Root Zone</span>
            </div>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-4xl font-extrabold text-slate-900">
                {activePlot.waterStatus}%
              </span>
              <span className="text-xs font-bold text-sky-700">Adequate</span>
            </div>
            <div className="mt-3 w-full bg-slate-200 rounded-full h-2 overflow-hidden">
              <div
                className="bg-sky-500 h-full rounded-full transition-all duration-500"
                style={{ width: `${activePlot.waterStatus}%` }}
              />
            </div>
          </div>

          {/* 4. Market Opportunity */}
          <div className="p-6 rounded-3xl bg-emerald-50/70 border border-emerald-200">
            <div className="flex items-center justify-between text-xs text-emerald-800 font-medium">
              <span className="uppercase font-bold">Market Opportunity</span>
              <span className="text-emerald-700 font-semibold">Direct Escrow</span>
            </div>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-4xl font-extrabold text-emerald-700">
                ₹38.50/kg
              </span>
              <span className="text-xs font-bold text-emerald-800">High Demand</span>
            </div>
            <div className="mt-3 text-xs text-emerald-900 truncate">
              {activePlot.yieldDelta}
            </div>
          </div>

        </div>

        {/* AI Recommendations Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>AI Automated Advisory</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-slate-900">Review irrigation conditions</h4>
                <p className="text-xs text-slate-600 mt-1">Calibrated root-zone water balance is currently at optimal hydration.</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-slate-900">Crop health scan available</h4>
                <p className="text-xs text-slate-600 mt-1">Recent foliar photo indicates high spore activity under 78% humidity.</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-start gap-3">
              <TrendingUp className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-slate-900">Market demand signal detected</h4>
                <p className="text-xs text-slate-600 mt-1">Institutional buyer contract open at ₹38.50/kg for peak grade tomato.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
