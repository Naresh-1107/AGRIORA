import React, { useState } from 'react';
import { MARKET_BUYERS_DATA } from '../data/agriData';

interface PlatformModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PlatformModal: React.FC<PlatformModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'irrigation' | 'storage' | 'market'>('irrigation');
  const [isDripActive, setIsDripActive] = useState(false);
  const [moistureVal, setMoistureVal] = useState(68);
  const [coldStorageBooked, setColdStorageBooked] = useState(false);
  const [acceptedBuyerId, setAcceptedBuyerId] = useState<string | null>(null);

  if (!isOpen) return null;

  const toggleDrip = () => {
    if (!isDripActive) {
      setIsDripActive(true);
      setMoistureVal((prev) => Math.min(prev + 4, 76));
    } else {
      setIsDripActive(false);
      setMoistureVal(68);
    }
  };

  const handleBookStorage = () => {
    setColdStorageBooked(true);
  };

  const handleAcceptBid = (buyerId: string) => {
    setAcceptedBuyerId(buyerId);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-5xl rounded-2xl bg-[#080f0b] border border-emerald-500/40 p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[92vh]">
        {/* Workspace Top Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-3">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <div>
              <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider block">
                AGRIORA FARMER CONSOLE · INTERACTIVE SIMULATOR
              </span>
              <h3 className="text-xl font-bold text-white">
                Field Parcel #A-12 (Roma Tomatoes · 4.8 Acres)
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono text-amber-400 bg-amber-950/40 border border-amber-500/30 px-2.5 py-1 rounded">
              Operational Demo Console
            </span>
            <button
              onClick={onClose}
              className="p-2 text-[#8e9b92] hover:text-white rounded-lg bg-white/5 transition-colors"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="mt-5 flex items-center gap-2 p-1 bg-[#0b1610] rounded-xl border border-white/10 w-fit">
          <button
            onClick={() => setActiveTab('irrigation')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
              activeTab === 'irrigation'
                ? 'bg-emerald-400 text-black shadow-md'
                : 'text-[#8e9b92] hover:text-white'
            }`}
          >
            Precision Drip Control
          </button>
          <button
            onClick={() => setActiveTab('storage')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
              activeTab === 'storage'
                ? 'bg-emerald-400 text-black shadow-md'
                : 'text-[#8e9b92] hover:text-white'
            }`}
          >
            Cold-Storage Allocation
          </button>
          <button
            onClick={() => setActiveTab('market')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
              activeTab === 'market'
                ? 'bg-emerald-400 text-black shadow-md'
                : 'text-[#8e9b92] hover:text-white'
            }`}
          >
            Direct Buyer Contracts
          </button>
        </div>

        {/* Tab 1: Precision Drip Control */}
        {activeTab === 'irrigation' && (
          <div className="mt-6 p-6 rounded-xl bg-[#0b140f] border border-white/5 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="text-base font-semibold text-white">Root-Zone Micro-Irrigation Valve</h4>
                <p className="text-xs text-[#8e9b92] mt-0.5">
                  Evapotranspiration rate: 4.8 mm/day. Current soil moisture status: {moistureVal}%.
                </p>
              </div>

              <button
                onClick={toggleDrip}
                className={`px-5 py-2.5 text-xs font-bold rounded-xl transition-all ${
                  isDripActive
                    ? 'bg-sky-400 text-black shadow-[0_0_20px_rgba(56,189,248,0.4)]'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {isDripActive ? 'VALVE OPEN (Flowing: 12 L/min)' : 'OPEN DRIP VALVE'}
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-[#070c09] border border-white/5">
                <span className="text-xs text-[#8e9b92]">Live Soil Moisture</span>
                <div className="mt-2 font-mono text-2xl font-bold text-sky-400 tabular-nums">
                  {moistureVal}%
                </div>
                <span className="text-[11px] text-[#606f65]">Target range: 65% – 75%</span>
              </div>
              <div className="p-4 rounded-xl bg-[#070c09] border border-white/5">
                <span className="text-xs text-[#8e9b92]">Aquifer Water Saved</span>
                <div className="mt-2 font-mono text-2xl font-bold text-emerald-400 tabular-nums">
                  {isDripActive ? '420 L today' : '1,840 L this cycle'}
                </div>
                <span className="text-[11px] text-[#606f65]">-34.8% vs traditional flood</span>
              </div>
              <div className="p-4 rounded-xl bg-[#070c09] border border-white/5">
                <span className="text-xs text-[#8e9b92]">Next Scheduled Run</span>
                <div className="mt-2 font-mono text-xl font-bold text-amber-300">
                  {isDripActive ? 'Active Now' : 'Tomorrow 05:30 AM'}
                </div>
                <span className="text-[11px] text-[#606f65]">Synchronized with solar irradiance</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Cold-Storage Allocation */}
        {activeTab === 'storage' && (
          <div className="mt-6 p-6 rounded-xl bg-[#0b140f] border border-white/5 space-y-6">
            <div>
              <h4 className="text-base font-semibold text-white">Decentralized Solar Cold Storage Booking</h4>
              <p className="text-xs text-[#8e9b92] mt-0.5">
                Reserve perishable crate space at GreenVault Solar Pod #4 (4.2 km from Parcel A-12).
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#070c09] border border-white/5 space-y-2">
                <div className="text-xs text-[#8e9b92]">Pod Specification</div>
                <div className="font-semibold text-white">GreenVault Pod #4 (4.2°C Stabilized)</div>
                <div className="text-xs text-emerald-400">Available: 24 Crates (1,440 kg capacity)</div>
                <div className="text-xs text-[#8e9b92]">Ethylene scrubber active · Relative Humidity 88%</div>
              </div>

              <div className="p-4 rounded-xl bg-[#070c09] border border-white/5 flex flex-col justify-between">
                <div>
                  <div className="text-xs text-[#8e9b92]">Estimated Rate</div>
                  <div className="font-mono text-xl font-bold text-white">₹0.35 / kg / day</div>
                  <div className="text-xs text-emerald-300">Subsidized by Clean Energy Co-op</div>
                </div>

                <button
                  onClick={handleBookStorage}
                  disabled={coldStorageBooked}
                  className="mt-3 px-4 py-2 text-xs font-semibold rounded-lg text-black bg-emerald-400 hover:bg-emerald-300 disabled:opacity-50"
                >
                  {coldStorageBooked ? '✓ Reserved 20 Crates (Slot #A-14 to #A-33)' : 'Reserve 20 Crates for Harvest'}
                </button>
              </div>
            </div>

            {coldStorageBooked && (
              <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-xs text-emerald-200 flex items-center justify-between">
                <div>
                  <span className="font-bold">Reservation Confirmed: </span>
                  <span>Pod #4, Slot #A-14. Pickup van ETA: Thursday 06:15 AM. QR code issued to phone.</span>
                </div>
                <span className="font-mono text-white">TOKEN: GVP-8842</span>
              </div>
            )}
          </div>
        )}

        {/* Tab 3: Direct Buyer Contracts */}
        {activeTab === 'market' && (
          <div className="mt-6 p-6 rounded-xl bg-[#0b140f] border border-white/5 space-y-6">
            <div>
              <h4 className="text-base font-semibold text-white">Active Direct Buyer Offers</h4>
              <p className="text-xs text-[#8e9b92] mt-0.5">
                Lock transparent bids directly with verified institutional procurement partners without commission cuts.
              </p>
            </div>

            <div className="space-y-3">
              {MARKET_BUYERS_DATA.slice(0, 3).map((buyer) => {
                const isAccepted = acceptedBuyerId === buyer.id;
                return (
                  <div
                    key={buyer.id}
                    className={`p-4 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                      isAccepted
                        ? 'bg-emerald-950/40 border-emerald-500 text-white'
                        : 'bg-[#070c09] border-white/5 text-[#8e9b92]'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-white text-sm">{buyer.name}</span>
                        {buyer.fairTradeCertified && (
                          <span className="text-[10px] bg-emerald-950 text-emerald-300 border border-emerald-700/50 px-1.5 py-0.5 rounded">
                            Verified Fair
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-[#8e9b92] mt-0.5">
                        Distance: {buyer.distanceKm} km · Terms: {buyer.paymentTerms}
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <span className="text-[10px] uppercase text-[#8e9b92] block">Net Realization</span>
                        <span className="font-mono text-base font-bold text-emerald-300 tabular-nums">
                          ₹{buyer.farmerNetRealizationKg.toFixed(2)} / kg
                        </span>
                      </div>

                      <button
                        onClick={() => handleAcceptBid(buyer.id)}
                        className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                          isAccepted
                            ? 'bg-emerald-500 text-black'
                            : 'bg-white/10 hover:bg-white/20 text-white'
                        }`}
                      >
                        {isAccepted ? '✓ Escrow Locked' : 'Accept Bid'}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {acceptedBuyerId && (
              <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-500/40 text-xs text-amber-200">
                <span className="font-bold">Escrow Deposit Confirmed: </span>
                <span>The buyer has deposited 100% contract funds into the smart escrow account. Payout is automatically released to your bank within 24 hours of delivery inspection.</span>
              </div>
            )}
          </div>
        )}

        {/* Modal Footer */}
        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#8e9b92]">
          <span>AGRIORA Unified Agronomic & Financial Suite</span>
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-black bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors"
          >
            Close Workspace
          </button>
        </div>
      </div>
    </div>
  );
};
