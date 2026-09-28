import React, { useState } from 'react';
import { Sparkles, Terminal, Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SupportedLanguage } from '../types';

interface NavbarProps {
  onOpenPlatform: () => void;
  onNavigate: (sectionId: string) => void;
}

const LANGUAGES_LIST: { code: SupportedLanguage; label: string; native: string }[] = [
  { code: 'en', label: 'English', native: 'English' },
  { code: 'ta', label: 'Tamil', native: 'தமிழ்' },
  { code: 'hi', label: 'Hindi', native: 'हिन्दी' },
  { code: 'te', label: 'Telugu', native: 'తెలుగు' },
  { code: 'kn', label: 'Kannada', native: 'ಕನ್ನಡ' },
  { code: 'ml', label: 'Malayalam', native: 'മലയാളം' },
  { code: 'mr', label: 'Marathi', native: 'मराठी' },
];

export const Navbar: React.FC<NavbarProps> = ({
  onOpenPlatform,
  onNavigate,
}) => {
  const { currentLanguage, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  const handleLanguageChange = (lang: SupportedLanguage) => {
    setLanguage(lang);
    setLangDropdownOpen(false);
  };

  const currentLangObj = LANGUAGES_LIST.find((l) => l.code === currentLanguage) || LANGUAGES_LIST[0];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="luxury-glass px-6 py-3.5 rounded-2xl flex items-center justify-between border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
          
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-3 text-left group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-bold shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <span className="font-display font-extrabold text-base">A</span>
            </div>
            <div>
              <span className="font-display font-bold text-base text-white tracking-wider">
                AGRIORA
              </span>
              <span className="block text-[9px] uppercase tracking-[0.25em] text-amber-300 font-mono">
                ESTATE INTELLIGENCE
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links (Translated) */}
          <div className="hidden lg:flex items-center gap-6">
            <button
              onClick={() => handleNavClick('hero')}
              className="text-xs uppercase tracking-[0.15em] text-slate-300 hover:text-amber-300 transition-colors font-medium"
            >
              {t.nav.estateTwin}
            </button>
            <button
              onClick={() => handleNavClick('problem')}
              className="text-xs uppercase tracking-[0.15em] text-slate-300 hover:text-amber-300 transition-colors font-medium"
            >
              {t.nav.challenges}
            </button>
            <button
              onClick={() => handleNavClick('intelligence')}
              className="text-xs uppercase tracking-[0.15em] text-slate-300 hover:text-amber-300 transition-colors font-medium"
            >
              {t.nav.intelligence}
            </button>
            <button
              onClick={() => handleNavClick('copilot')}
              className="text-xs uppercase tracking-[0.15em] text-slate-300 hover:text-amber-300 transition-colors font-medium"
            >
              {t.nav.copilot}
            </button>
            <button
              onClick={() => handleNavClick('journey')}
              className="text-xs uppercase tracking-[0.15em] text-slate-300 hover:text-amber-300 transition-colors font-medium"
            >
              {t.nav.flow}
            </button>
            <button
              onClick={() => handleNavClick('market')}
              className="text-xs uppercase tracking-[0.15em] text-slate-300 hover:text-amber-300 transition-colors font-medium"
            >
              {t.nav.market}
            </button>
          </div>

          {/* Right Action Buttons & Language Switcher */}
          <div className="hidden sm:flex items-center gap-3">
            
            {/* Language Selector Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="px-3 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.12] text-xs font-medium text-slate-200 flex items-center gap-2 transition-all"
                title="Change Language"
              >
                <Globe className="w-3.5 h-3.5 text-amber-400" />
                <span>{currentLangObj.native}</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-44 rounded-2xl luxury-glass border border-white/10 shadow-2xl p-1.5 z-50 animate-in fade-in zoom-in-95 duration-200">
                  {LANGUAGES_LIST.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`w-full px-3 py-2 rounded-xl text-left text-xs transition-colors flex items-center justify-between ${
                        currentLanguage === lang.code
                          ? 'bg-amber-400/20 text-amber-300 font-bold'
                          : 'text-slate-300 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <span>{lang.native}</span>
                      <span className="text-[10px] text-slate-400 font-mono">{lang.code.toUpperCase()}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Launch Console Button */}
            <button
              onClick={onOpenPlatform}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-xs tracking-wider uppercase transition-all shadow-md shadow-amber-400/20 flex items-center gap-2 active:scale-95"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>{t.nav.launchConsole}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mx-4 mt-2 p-6 luxury-glass rounded-2xl border border-white/10 space-y-4 shadow-2xl">
          {/* Mobile Language Switcher Row */}
          <div className="pb-3 border-b border-white/10">
            <div className="text-[10px] uppercase font-mono text-amber-300 tracking-wider mb-2">
              SELECT LANGUAGE / மொழி / भाषा
            </div>
            <div className="grid grid-cols-3 gap-1.5">
              {LANGUAGES_LIST.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-medium text-center transition-colors ${
                    currentLanguage === lang.code
                      ? 'bg-amber-400 text-slate-950 font-bold'
                      : 'bg-white/5 text-slate-300 hover:bg-white/10'
                  }`}
                >
                  {lang.native}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => handleNavClick('hero')}
            className="block w-full text-left text-sm text-slate-200 py-2 border-b border-white/5"
          >
            {t.nav.estateTwin}
          </button>
          <button
            onClick={() => handleNavClick('problem')}
            className="block w-full text-left text-sm text-slate-200 py-2 border-b border-white/5"
          >
            {t.nav.challenges}
          </button>
          <button
            onClick={() => handleNavClick('intelligence')}
            className="block w-full text-left text-sm text-slate-200 py-2 border-b border-white/5"
          >
            {t.nav.intelligence}
          </button>
          <button
            onClick={() => handleNavClick('copilot')}
            className="block w-full text-left text-sm text-slate-200 py-2 border-b border-white/5"
          >
            {t.nav.copilot}
          </button>
          <button
            onClick={() => handleNavClick('journey')}
            className="block w-full text-left text-sm text-slate-200 py-2 border-b border-white/5"
          >
            {t.nav.flow}
          </button>
          <button
            onClick={() => handleNavClick('market')}
            className="block w-full text-left text-sm text-slate-200 py-2 border-b border-white/5"
          >
            {t.nav.market}
          </button>
          <button
            onClick={() => {
              onOpenPlatform();
              setMobileMenuOpen(false);
            }}
            className="w-full py-3 rounded-xl bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider text-center"
          >
            {t.nav.launchConsole}
          </button>
        </div>
      )}
    </nav>
  );
};
