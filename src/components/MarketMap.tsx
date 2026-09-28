import React, { useState } from 'react';
import { MARKET_BUYERS_DATA } from '../data/agriData';
import { MarketBuyer } from '../types';
import { MapPin, TrendingUp, CheckCircle2, ShieldCheck, ArrowRight, Truck, Building2 } from 'lucide-react';

export const MarketMap: React.FC = () => {
  const [selectedBuyer, setSelectedBuyer] = useState<MarketBuyer | null>(null);

  return (
    <section id="market" className="relative py-28 border-t border-white/[0.06] bg-[#090b10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl space-y-4">
            <div className="text-xs uppercase font-mono tracking-[0.25em] text-amber-300">
              05 // DIRECT FAIR-TRADE EXCHANGE
            </div>
            <h2 className="text-3xl sm:text-5xl font-extralight tracking-tight text-white font-display">
              Transparent Pricing. <br />
              <span className="font-semibold text-gold-gradient">
                Institutional Escrow Guarantees.
              </span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-300 max-w-md font-light leading-relaxed">
            Eliminating traditional mandi commission traps and arbitrary weight deductions through pre-verified institutional purchase contracts.
          </p>
        </div>

        {/* Realization Comparison Highlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Traditional Middleman Mandi Trap */}
          <div className="lg:col-span-6 luxury-card p-8 rounded-3xl space-y-6 opacity-75 border-red-500/20">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-widest text-red-400 font-bold">
                TRADITIONAL WHOLESALE MANDI
              </span>
              <span className="text-[10px] font-mono text-slate-500">CONVENTIONAL</span>
            </div>

            <div className="space-y-1">
              <div className="text-4xl font-light text-slate-300 font-display">
                ₹18.00 <span className="text-base text-slate-500 font-normal">/ kg</span>
              </div>
              <p className="text-xs text-red-400 font-mono">
                53% extracted by middlemen brokers and unrecorded fees
              </p>
            </div>

            <div className="space-y-2 pt-2 text-xs text-slate-400 font-light">
              <div className="flex items-center justify-between py-1.5 border-b border-white/[0.05]">
                <span>Mandi Agent Commission</span>
                <span className="text-red-400 font-mono">-8.5%</span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-white/[0.05]">
                <span>Unloading & Handling Levy</span>
                <span className="text-red-400 font-mono">-4.0%</span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-white/[0.05]">
                <span>Weight Moisture Deduction</span>
                <span className="text-red-400 font-mono">-6.0%</span>
              </div>
              <div className="flex items-center justify-between py-1.5">
                <span>Payment Settlement Cycle</span>
                <span className="text-slate-300 font-mono">30-60 Days Credit</span>
              </div>
            </div>
          </div>

          {/* AGRIORA Direct Escrow Contract */}
          <div className="lg:col-span-6 luxury-glass-gold p-8 rounded-3xl space-y-6 border-amber-400/40 relative overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-widest text-amber-300 font-bold flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                AGRIORA DIRECT ESCROW
              </span>
              <span className="px-2.5 py-1 rounded-full bg-amber-400/20 text-amber-300 text-[10px] font-mono font-bold">
                +114% MARGIN
              </span>
            </div>

            <div className="space-y-1">
              <div className="text-4xl font-extrabold text-amber-300 font-display">
                ₹38.50 <span className="text-base text-amber-200/80 font-normal">/ kg</span>
              </div>
              <p className="text-xs text-emerald-400 font-mono">
                100% net realization settled directly to farmer bank account
              </p>
            </div>

            <div className="space-y-2 pt-2 text-xs text-slate-300 font-light">
              <div className="flex items-center justify-between py-1.5 border-b border-amber-400/20">
                <span>Pre-Agreed Contract Floor Price</span>
                <span className="text-amber-300 font-mono">Guaranteed</span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-amber-400/20">
                <span>Middleman Intermediaries</span>
                <span className="text-emerald-400 font-mono">0.0% Deductions</span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-amber-400/20">
                <span>Logistics Cost Realization</span>
                <span className="text-slate-300 font-mono">Transparent Flat Rate</span>
              </div>
              <div className="flex items-center justify-between py-1.5">
                <span>Payment Settlement Cycle</span>
                <span className="text-emerald-400 font-bold font-mono">Instant on Delivery</span>
              </div>
            </div>
          </div>

        </div>

        {/* Verified Institutional Buyers Grid */}
        <div className="luxury-glass p-8 rounded-3xl border border-white/[0.08] space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs font-mono text-amber-300 uppercase tracking-widest">
                VERIFIED BUYER NETWORK
              </div>
              <h3 className="text-xl font-bold text-white mt-1">
                Active Institutional Demand
              </h3>
            </div>
            <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" /> 12 Escrows Open Today
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {MARKET_BUYERS_DATA.slice(0, 3).map((buyer: MarketBuyer) => (
              <div
                key={buyer.id}
                onClick={() => setSelectedBuyer(buyer)}
                className="luxury-card p-6 rounded-2xl cursor-pointer hover:border-amber-400/40 transition-all space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-amber-300">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300">
                    Verified Buyer
                  </span>
                </div>

                <div>
                  <h4 className="text-base font-bold text-white">{buyer.name}</h4>
                  <div className="text-xs text-slate-400 mt-0.5">{buyer.type} · {buyer.distanceKm} km</div>
                </div>

                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-slate-400 font-mono">NET TO FARMER</div>
                    <div className="text-lg font-bold text-amber-300 font-display">
                      ₹{buyer.farmerNetRealizationKg.toFixed(2)} / kg
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] text-slate-400 font-mono">DEMAND VOLUME</div>
                    <div className="text-xs font-semibold text-white">
                      {buyer.volumeNeededTons} Tons
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
