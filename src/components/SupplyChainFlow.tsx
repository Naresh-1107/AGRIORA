import React, { useState } from 'react';
import { ArrowRight, AlertCircle, CheckCircle2, RotateCcw } from 'lucide-react';

export const SupplyChainFlow: React.FC = () => {
  const [bottleneckSimulated, setBottleneckSimulated] = useState(false);
  const [reRouteApplied, setReRouteApplied] = useState(false);

  return (
    <section className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-wider text-emerald-700 mb-3">
              SUPPLY CHAIN BOTTLENECK RESOLUTION
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
              See where value can be lost.
            </h2>
            <p className="mt-4 text-xl text-slate-600 font-normal leading-relaxed">
              When a local warehouse is full or a road is blocked, AGRIORA automatically re-routes your crop to nearby solar cold storage to prevent spoilage.
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2 self-start md:self-end">
            {!bottleneckSimulated ? (
              <button
                onClick={() => {
                  setBottleneckSimulated(true);
                  setReRouteApplied(false);
                }}
                className="px-5 py-2.5 text-sm font-semibold text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 rounded-2xl transition-all"
              >
                Simulate Storage Full Alert
              </button>
            ) : !reRouteApplied ? (
              <button
                onClick={() => setReRouteApplied(true)}
                className="px-5 py-2.5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-2xl transition-all shadow-md animate-pulse flex items-center gap-2"
              >
                <span>Auto-Reroute to Nearby Pod</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={() => {
                  setBottleneckSimulated(false);
                  setReRouteApplied(false);
                }}
                className="px-5 py-2.5 text-sm font-medium text-slate-600 hover:text-slate-900 bg-slate-100 rounded-2xl transition-all flex items-center gap-1.5"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Reset Demo</span>
              </button>
            )}
          </div>
        </div>

        {/* 4 Pipeline Stages */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* 1. Harvest */}
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Stage 01</span>
            <h4 className="text-xl font-bold text-slate-900 mt-1 mb-2">Harvest Window</h4>
            <p className="text-sm text-slate-600">Field Plot A-12: 1,200 kg picked at peak maturity index.</p>
            <div className="mt-4 pt-3 border-t border-slate-200 text-xs font-semibold text-emerald-700 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Moisture content optimal</span>
            </div>
          </div>

          {/* 2. Storage */}
          <div
            className={`p-6 rounded-3xl border transition-all ${
              bottleneckSimulated && !reRouteApplied
                ? 'bg-rose-50/80 border-rose-300'
                : reRouteApplied
                ? 'bg-emerald-50/80 border-emerald-300'
                : 'bg-slate-50 border-slate-200'
            }`}
          >
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Stage 02</span>
            <h4 className="text-xl font-bold text-slate-900 mt-1 mb-2">Solar Cold Storage</h4>
            
            {bottleneckSimulated && !reRouteApplied ? (
              <div>
                <p className="text-sm text-rose-700 font-medium">Main Hub: 98% Full. Perishing risk detected.</p>
                <div className="mt-4 pt-3 border-t border-rose-200 text-xs font-bold text-rose-800 flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-rose-600" />
                  <span>Bottleneck detected</span>
                </div>
              </div>
            ) : reRouteApplied ? (
              <div>
                <p className="text-sm text-emerald-800 font-medium">Auto-Rerouted to Pod #04 (4.2 km away). 4°C active.</p>
                <div className="mt-4 pt-3 border-t border-emerald-200 text-xs font-bold text-emerald-700 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Resolved: Zero loss guaranteed</span>
                </div>
              </div>
            ) : (
              <div>
                <p className="text-sm text-slate-600">District Pod #01: 65% capacity. Pre-cooled to 4°C.</p>
                <div className="mt-4 pt-3 border-t border-slate-200 text-xs font-semibold text-emerald-700 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Stable temperature</span>
                </div>
              </div>
            )}
          </div>

          {/* 3. Transport */}
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Stage 03</span>
            <h4 className="text-xl font-bold text-slate-900 mt-1 mb-2">Refrigerated EV</h4>
            <p className="text-sm text-slate-600">Shared electric van route planned. Temperature monitored live.</p>
            <div className="mt-4 pt-3 border-t border-slate-200 text-xs font-semibold text-emerald-700 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>ETA: 45 mins</span>
            </div>
          </div>

          {/* 4. Market */}
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Stage 04</span>
            <h4 className="text-xl font-bold text-slate-900 mt-1 mb-2">Direct Buyer Delivery</h4>
            <p className="text-sm text-slate-600">Delivered directly to verified food co-operative. Immediate DBT payment.</p>
            <div className="mt-4 pt-3 border-t border-slate-200 text-xs font-semibold text-emerald-700 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Full price realized</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
