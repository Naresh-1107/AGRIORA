import React from 'react';

interface ArchitectureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ArchitectureModal: React.FC<ArchitectureModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-4xl rounded-2xl bg-[#080f0b] border border-emerald-500/40 p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[92vh]">
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-white/10">
          <div>
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
              Technical Stack & Data Pipeline
            </span>
            <h3 className="text-2xl font-bold text-white mt-1">
              AGRIORA System Architecture
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#8e9b92] hover:text-white rounded-lg bg-white/5 transition-colors"
          >
            ✕
          </button>
        </div>

        {/* 4-Layer Architecture Diagram */}
        <div className="mt-6 space-y-4">
          {/* Layer 1 */}
          <div className="p-5 rounded-xl bg-[#0b1610] border border-emerald-900/50">
            <div className="flex items-center justify-between text-xs text-emerald-400 font-mono mb-2">
              <span className="font-bold">LAYER 01 · EDGE SENSING & INGESTION</span>
              <span>Low Power / LoRaWAN</span>
            </div>
            <h4 className="text-base font-semibold text-white">Multimodal Ground & Orbital Ingestion</h4>
            <p className="text-xs text-[#9cb0a2] mt-1 leading-relaxed">
              Capacitive soil dielectric probes sample volumetric water content at 15cm and 45cm depths.
              Combined with local micro-weather telemetry and Sentinel-2 10m multispectral NDVI imagery.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-mono text-[#8e9b92]">
              <span className="bg-[#070c09] px-2 py-0.5 rounded border border-white/5">LoRaWAN Edge Nodes</span>
              <span className="bg-[#070c09] px-2 py-0.5 rounded border border-white/5">Sentinel-2 Surface Reflectance</span>
              <span className="bg-[#070c09] px-2 py-0.5 rounded border border-white/5">Local AWS Micro-Weather</span>
            </div>
          </div>

          {/* Layer 2 */}
          <div className="p-5 rounded-xl bg-[#0b1610] border border-emerald-900/50">
            <div className="flex items-center justify-between text-xs text-emerald-400 font-mono mb-2">
              <span className="font-bold">LAYER 02 · INTELLIGENCE & PATHOLOGY MODELS</span>
              <span>Sub-300ms Inference</span>
            </div>
            <h4 className="text-base font-semibold text-white">Agronomic Vision & Dynamic Evapotranspiration</h4>
            <p className="text-xs text-[#9cb0a2] mt-1 leading-relaxed">
              Mobile-optimized vision model classifies foliar lesions into 28 common pathogens.
              Evapotranspiration (Penman-Monteith equation) synchronizes daily water budgeting with root-zone depth.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-mono text-[#8e9b92]">
              <span className="bg-[#070c09] px-2 py-0.5 rounded border border-white/5">PhytoVision Vision Backbone</span>
              <span className="bg-[#070c09] px-2 py-0.5 rounded border border-white/5">FAO-56 Dual Crop Coefficient</span>
              <span className="bg-[#070c09] px-2 py-0.5 rounded border border-white/5">Agronomist Review Dispatch</span>
            </div>
          </div>

          {/* Layer 3 */}
          <div className="p-5 rounded-xl bg-[#0b1610] border border-emerald-900/50">
            <div className="flex items-center justify-between text-xs text-emerald-400 font-mono mb-2">
              <span className="font-bold">LAYER 03 · DECENTRALIZED COLD STORAGE & LOGISTICS MESH</span>
              <span>Shared EV Fleet</span>
            </div>
            <h4 className="text-base font-semibold text-white">Perishable Supply Routing & Micro-Pods</h4>
            <p className="text-xs text-[#9cb0a2] mt-1 leading-relaxed">
              Decentralized solar-powered cold containers broadcast real-time crate availability.
              Vehicle routing algorithms cluster multi-farm harvests into consolidated refrigerated milk-runs.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-mono text-[#8e9b92]">
              <span className="bg-[#070c09] px-2 py-0.5 rounded border border-white/5">Dynamic Slot Reservation</span>
              <span className="bg-[#070c09] px-2 py-0.5 rounded border border-white/5">VRP Shared Multi-Stop Transit</span>
              <span className="bg-[#070c09] px-2 py-0.5 rounded border border-white/5">Ethylene Sensor Telemetry</span>
            </div>
          </div>

          {/* Layer 4 */}
          <div className="p-5 rounded-xl bg-[#0b1610] border border-amber-900/50">
            <div className="flex items-center justify-between text-xs text-amber-400 font-mono mb-2">
              <span className="font-bold">LAYER 04 · FAIR MARKET & DIRECT ESCROW SETTLEMENT</span>
              <span>Zero Middleman Cuts</span>
            </div>
            <h4 className="text-base font-semibold text-white">Transparent Price Discovery & Direct Payout</h4>
            <p className="text-xs text-[#9cb0a2] mt-1 leading-relaxed">
              Direct institutional contracts lock indicative floor prices with automated escrow disbursement
              via UPI / Direct Benefit Transfer upon electronic proof of delivery (e-POD).
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-mono text-[#8e9b92]">
              <span className="bg-[#070c09] px-2 py-0.5 rounded border border-white/5">Smart Contract Escrow</span>
              <span className="bg-[#070c09] px-2 py-0.5 rounded border border-white/5">Instant T+0 Bank Settlement</span>
              <span className="bg-[#070c09] px-2 py-0.5 rounded border border-white/5">Farm-to-Fork Batch Traceability</span>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
          <span className="text-xs text-[#606f65]">AGRIORA Technical Specification v2.4</span>
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-black bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
};
