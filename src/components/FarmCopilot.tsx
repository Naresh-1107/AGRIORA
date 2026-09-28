import React, { useState } from 'react';
import {
  Scan,
  ShieldCheck,
  AlertTriangle,
  Sparkles,
  CheckCircle2,
  Send,
  MessageSquare,
  RefreshCw,
  Droplets,
  Thermometer,
  Zap,
  Volume2
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Scroll3DAssembly } from './Scroll3DAssembly';

interface ScanResult {
  diseaseName: string;
  confidence: number;
  severity: 'High' | 'Moderate' | 'Low';
  crop: string;
  symptoms: string[];
  immediateAction: string;
  biologicalRemedy: string;
  preventedLoss: string;
  weatherCorrelation: string;
}

const MOCK_SCAN_RESULT: ScanResult = {
  diseaseName: 'Early Blight (Alternaria solani)',
  confidence: 96.8,
  severity: 'High',
  crop: 'Roma Tomato (Solanum lycopersicum)',
  symptoms: [
    'Concentric target-board rings on lower mature foliage',
    'Chlorotic yellow halos expanding along leaf margins',
    'Elevated 84% night humidity accelerating sporulation'
  ],
  immediateAction: 'Apply copper hydroxide bio-suspension (2.5g/L) before 08:30 AM rain window.',
  biologicalRemedy: 'Trichoderma viride bio-agent soil drench to inoculate root biome against systemic fungal spread.',
  preventedLoss: '~₹16,400 per acre in marketable yield preserved',
  weatherCorrelation: 'Favorable spore spread window ends in 36 hours due to incoming dry northwesterly winds.'
};

export const FarmCopilot: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'scanner' | 'advisor'>('scanner');
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(true);
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'ai'; text: string; time: string }>>([
    {
      sender: 'ai',
      text: t.copilot.aiWelcome,
      time: '10:45 AM'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const handleRunDemoScan = () => {
    setIsScanning(true);
    setScanComplete(false);
    setTimeout(() => {
      setIsScanning(false);
      setScanComplete(true);
    }, 1200);
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;
    const userText = inputMessage;
    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setMessages((prev) => [...prev, { sender: 'user', text: userText, time: now }]);
    setInputMessage('');

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: 'ai',
          text: `[Field Advisory for: "${userText}"]: Recommended dosage is 2.5g/L organic bio-fungicide. Micro-climate sensors report 62% humidity and optimal leaf absorption window until 11:30 AM.`,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    }, 800);
  };

  return (
    <section id="copilot" className="relative py-28 border-t border-white/[0.06] bg-[#090b10] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Scroll3DAssembly direction="up" delay={0}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl space-y-4">
              <div className="text-xs uppercase font-mono tracking-[0.25em] text-amber-300">
                {t.copilot.eyebrow}
              </div>
              <h2 className="text-3xl sm:text-5xl font-extralight tracking-tight text-white font-display">
                {t.copilot.title1} <br />
                <span className="font-semibold text-gold-gradient">
                  {t.copilot.title2}
                </span>
              </h2>
            </div>

            {/* Mode Switcher */}
            <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-black/60 border border-white/[0.08] backdrop-blur-xl">
              <button
                onClick={() => setActiveTab('scanner')}
                className={`px-5 py-2 rounded-xl text-xs font-medium tracking-wide transition-all ${
                  activeTab === 'scanner'
                    ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold shadow-md shadow-amber-400/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {t.copilot.scannerTab}
              </button>
              <button
                onClick={() => setActiveTab('advisor')}
                className={`px-5 py-2 rounded-xl text-xs font-medium tracking-wide transition-all ${
                  activeTab === 'advisor'
                    ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold shadow-md shadow-amber-400/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {t.copilot.advisorTab}
              </button>
            </div>
          </div>
        </Scroll3DAssembly>

        {/* SCANNER VIEW */}
        {activeTab === 'scanner' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Leaf Holographic Scan Viewport */}
            <div className="lg:col-span-5">
              <Scroll3DAssembly direction="left" delay={80}>
                <div className="luxury-glass p-6 rounded-3xl border border-white/[0.08] space-y-6">
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-xs font-mono text-slate-300 uppercase tracking-widest">
                        {t.copilot.opticalSpectrometry}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-amber-300">
                      {t.copilot.camera4k}
                    </span>
                  </div>

                  {/* Simulated Leaf Scan Frame */}
                  <div className="relative w-full h-80 rounded-2xl overflow-hidden bg-slate-950 border border-white/[0.1] flex items-center justify-center group">
                    <img
                      src="https://images.unsplash.com/photo-1592417817098-8f3d6910985b?auto=format&fit=crop&w=800&q=80"
                      alt="Crop Leaf Disease Diagnostic"
                      className="w-full h-full object-cover filter brightness-90 contrast-110"
                    />

                    {/* Animated Laser Scanning Beam */}
                    {isScanning && (
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-400/40 to-transparent h-16 w-full animate-bounce pointer-events-none" />
                    )}

                    {/* Detected Bounding Box with Pulse Marker */}
                    {scanComplete && !isScanning && (
                      <div className="absolute top-1/4 left-1/3 w-36 h-28 border-2 border-amber-400 rounded-xl bg-amber-400/10 backdrop-blur-xs flex flex-col justify-between p-2 shadow-[0_0_25px_rgba(245,158,11,0.5)] animate-in fade-in zoom-in-95 duration-500">
                        <div className="flex items-center justify-between text-[10px] font-mono font-bold text-amber-300">
                          <span>LESION #01</span>
                          <span className="px-1.5 py-0.5 rounded bg-amber-400/30">96.8%</span>
                        </div>
                        <div className="text-[11px] text-white font-semibold">
                          Early Blight Lesion
                        </div>
                      </div>
                    )}

                    {/* Bottom Overlay Controls */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between p-2 rounded-xl bg-black/70 backdrop-blur-md border border-white/10">
                      <span className="text-[11px] font-mono text-slate-300">
                        {isScanning ? t.copilot.scanningText : t.copilot.scannedDone}
                      </span>
                      <button
                        onClick={handleRunDemoScan}
                        disabled={isScanning}
                        className="px-3.5 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 active:scale-95"
                      >
                        <RefreshCw className={`w-3 h-3 ${isScanning ? 'animate-spin' : ''}`} />
                        <span>{t.copilot.runScan}</span>
                      </button>
                    </div>
                  </div>

                  {/* Quick Environmental Correlates */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="p-3.5 rounded-2xl bg-black/40 border border-white/[0.06]">
                      <div className="text-[10px] font-mono text-slate-400 uppercase">HUMIDITY INDEX</div>
                      <div className="text-lg font-bold text-white mt-0.5 font-display">84% RH</div>
                      <div className="text-[10px] text-amber-300 mt-0.5">High Fungal Risk</div>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-black/40 border border-white/[0.06]">
                      <div className="text-[10px] font-mono text-slate-400 uppercase">CANOPY TEMP</div>
                      <div className="text-lg font-bold text-white mt-0.5 font-display">27.4°C</div>
                      <div className="text-[10px] text-emerald-400 mt-0.5">Optimum Growth</div>
                    </div>
                  </div>
                </div>
              </Scroll3DAssembly>
            </div>

            {/* Right: Detailed Diagnostic Verdict & Prescription */}
            <div className="lg:col-span-7">
              <Scroll3DAssembly direction="right" delay={140}>
                <div className="luxury-card p-8 rounded-3xl space-y-6">
                  
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
                    <div>
                      <div className="text-xs font-mono uppercase tracking-widest text-amber-400">
                        {t.copilot.pathologyVerdict}
                      </div>
                      <h3 className="text-2xl font-bold text-white mt-1">
                        {MOCK_SCAN_RESULT.diseaseName}
                      </h3>
                      <div className="text-xs text-slate-400 mt-0.5 italic">
                        {MOCK_SCAN_RESULT.crop}
                      </div>
                    </div>

                    <div className="px-4 py-2 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs font-mono font-bold flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-400" />
                      <span>{t.copilot.severityHigh}</span>
                    </div>
                  </div>

                  {/* Symptoms Checklist */}
                  <div className="space-y-2">
                    <div className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                      {t.copilot.symptomsHeader}
                    </div>
                    <div className="space-y-2">
                      {MOCK_SCAN_RESULT.symptoms.map((sym, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.05]">
                          <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                          <span className="text-xs text-slate-300 leading-relaxed font-light">{sym}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Prescription Action */}
                  <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-400/10 to-amber-600/5 border border-amber-400/30 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono uppercase text-amber-300 font-bold tracking-wider">
                        {t.copilot.bioPrescription}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-400/20 text-amber-200">
                        {t.copilot.immediateDispatch}
                      </span>
                    </div>
                    <p className="text-sm text-white font-medium leading-relaxed">
                      {MOCK_SCAN_RESULT.immediateAction}
                    </p>
                    <div className="pt-2 border-t border-amber-400/20 text-xs text-slate-300 font-light">
                      <strong className="text-amber-300 font-medium">Biological Agent: </strong>
                      {MOCK_SCAN_RESULT.biologicalRemedy}
                    </div>
                  </div>

                  {/* Preserved Yield & Weather Note */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.06]">
                      <div className="text-[10px] font-mono uppercase text-emerald-400 font-semibold">
                        {t.copilot.preservedYield}
                      </div>
                      <div className="text-sm font-bold text-white mt-1">
                        {MOCK_SCAN_RESULT.preventedLoss}
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.06]">
                      <div className="text-[10px] font-mono uppercase text-cyan-400 font-semibold">
                        {t.copilot.weatherWindow}
                      </div>
                      <div className="text-xs text-slate-300 mt-1 font-light leading-snug">
                        {MOCK_SCAN_RESULT.weatherCorrelation}
                      </div>
                    </div>
                  </div>

                </div>
              </Scroll3DAssembly>
            </div>

          </div>
        )}

        {/* ADVISOR CONVERSATION VIEW */}
        {activeTab === 'advisor' && (
          <Scroll3DAssembly direction="up" delay={50}>
            <div className="max-w-3xl mx-auto luxury-glass rounded-3xl border border-white/[0.08] overflow-hidden flex flex-col h-[520px]">
              {/* Header */}
              <div className="p-4 bg-black/40 border-b border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center text-slate-950 font-bold text-xs">
                    AI
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Estate Agronomist Copilot</div>
                    <div className="text-[10px] text-emerald-400 font-mono">Synchronized with Field Sensors</div>
                  </div>
                </div>
                <span className="text-[11px] font-mono text-slate-400">Gemini 2.5 Flash</span>
              </div>

              {/* Chat Body */}
              <div className="flex-1 p-6 overflow-y-auto space-y-4">
                {messages.map((m, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
                  >
                    <div
                      className={`max-w-md p-4 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                        m.sender === 'user'
                          ? 'bg-amber-400 text-slate-950 font-medium rounded-br-none shadow-md shadow-amber-400/20'
                          : 'bg-white/[0.06] text-slate-200 border border-white/[0.08] rounded-bl-none'
                      }`}
                    >
                      {m.text}
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono mt-1 px-1">
                      {m.time}
                    </span>
                  </div>
                ))}
              </div>

              {/* Input Bar */}
              <div className="p-4 bg-black/40 border-t border-white/[0.08] flex items-center gap-3">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder={t.copilot.askPlaceholder}
                  className="flex-1 bg-white/[0.05] border border-white/[0.1] rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                />
                <button
                  onClick={handleSendMessage}
                  className="px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 active:scale-95 shadow-md shadow-amber-400/20"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{t.copilot.askButton}</span>
                </button>
              </div>
            </div>
          </Scroll3DAssembly>
        )}

      </div>
    </section>
  );
};
