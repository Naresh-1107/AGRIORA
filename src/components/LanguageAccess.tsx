import React, { useState } from 'react';
import { LANGUAGES_DATA } from '../data/agriData';
import { LanguageData, SupportedLanguage } from '../types';
import { Globe, Volume2, Mic, CheckCircle2, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Scroll3DAssembly } from './Scroll3DAssembly';

export const LanguageAccess: React.FC = () => {
  const { currentLanguage, setLanguage } = useLanguage();
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const selectedLangData = LANGUAGES_DATA.find((l) => l.code === currentLanguage) || LANGUAGES_DATA[0];

  const handleSelectLanguage = (langCode: SupportedLanguage) => {
    setLanguage(langCode);
  };

  const handleSimulateVoice = () => {
    setIsPlayingAudio(true);
    // If Web Speech API is supported, speak the phrase!
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(selectedLangData.sampleVoicePrompt);
      utterance.rate = 0.9;
      utterance.onend = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);
      window.speechSynthesis.speak(utterance);
    } else {
      setTimeout(() => setIsPlayingAudio(false), 2400);
    }
  };

  return (
    <section id="languages" className="relative py-28 border-t border-white/[0.06] bg-[#08090c] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Scroll3DAssembly direction="up" delay={0}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl space-y-4">
              <div className="text-xs uppercase font-mono tracking-[0.25em] text-amber-300">
                06 // MULTILINGUAL VOICE ACCESSIBILITY
              </div>
              <h2 className="text-3xl sm:text-5xl font-extralight tracking-tight text-white font-display">
                Farming in Every Mother Tongue. <br />
                <span className="font-semibold text-gold-gradient">
                  Select to Translate Entire App.
                </span>
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-300 max-w-md font-light leading-relaxed">
              Click any language below to immediately convert all diagnostics, market prices, and advisories into your native script.
            </p>
          </div>
        </Scroll3DAssembly>

        {/* 7 Regional Language Selector Buttons with 3D Stagger */}
        <Scroll3DAssembly direction="scatter" delay={60}>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-10">
            {LANGUAGES_DATA.map((lang: LanguageData) => {
              const isSelected = currentLanguage === lang.code;
              return (
                <button
                  key={lang.code}
                  onClick={() => handleSelectLanguage(lang.code)}
                  className={`p-4 rounded-2xl text-left transition-all relative overflow-hidden group ${
                    isSelected
                      ? 'luxury-glass-gold border-amber-400 shadow-xl shadow-amber-400/20 -translate-y-1'
                      : 'luxury-card hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono uppercase text-slate-400">
                      {lang.code.toUpperCase()}
                    </span>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                    )}
                  </div>
                  <div className={`text-base font-bold tracking-tight ${isSelected ? 'text-amber-300' : 'text-white'}`}>
                    {lang.nativeName}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    {lang.englishName}
                  </div>
                </button>
              );
            })}
          </div>
        </Scroll3DAssembly>

        {/* Active Language Voice & Interaction Simulator */}
        <Scroll3DAssembly direction="up" delay={120}>
          <div className="luxury-glass p-8 sm:p-10 rounded-3xl border border-white/[0.08] relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left: Voice Prompt Player */}
              <div className="lg:col-span-6 space-y-5">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-mono font-bold">
                    ACTIVE // {selectedLangData.englishName.toUpperCase()} ({selectedLangData.nativeName})
                  </span>
                  <span className="text-xs text-emerald-400 font-mono flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Selected System Language
                  </span>
                </div>

                <div className="p-6 rounded-2xl bg-black/40 border border-white/[0.06] space-y-3">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider flex items-center justify-between">
                    <span>FARMER VOICE INQUIRY</span>
                    <Mic className="w-4 h-4 text-amber-400 animate-pulse" />
                  </div>
                  <p className="text-lg font-medium text-white italic">
                    "{selectedLangData.sampleVoicePrompt}"
                  </p>
                  <button
                    onClick={handleSimulateVoice}
                    disabled={isPlayingAudio}
                    className="px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 active:scale-95 shadow-md shadow-amber-400/20"
                  >
                    <Volume2 className={`w-4 h-4 ${isPlayingAudio ? 'animate-bounce' : ''}`} />
                    <span>{isPlayingAudio ? 'Speaking Audio...' : 'Play Native Voice'}</span>
                  </button>
                </div>
              </div>

              {/* Right: AI Audio Response */}
              <div className="lg:col-span-6 luxury-glass-gold p-6 rounded-2xl space-y-4">
                <div className="text-[11px] font-mono uppercase tracking-wider text-amber-300 font-bold flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>NATIVE VOICE ADVISORY RESPONSE</span>
                </div>

                <p className="text-sm text-slate-200 leading-relaxed font-light">
                  {selectedLangData.sampleAiResponse}
                </p>

                <div className="pt-3 border-t border-amber-400/20 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>LATENCY: 420ms</span>
                  <span className="text-amber-300">VOICE SYNTHESIS READY</span>
                </div>
              </div>

            </div>
          </div>
        </Scroll3DAssembly>

      </div>
    </section>
  );
};
