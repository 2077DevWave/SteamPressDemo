import React, { useState, useEffect } from 'react';
import { Gamepad2, Menu, X, ArrowLeft, Download } from 'lucide-react';

interface NavbarProps {
  onScrollToSection: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onScrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="main-nav-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 pt-4 ${
        isScrolled ? 'pb-2' : 'pb-4'
      }`}
    >
      <div className={`max-w-6xl mx-auto px-6 py-3.5 bg-[#171d25]/95 backdrop-blur-xl border border-[#2a475e] rounded-2xl shadow-2xl flex items-center justify-between transition-all duration-300 ${
        isScrolled ? 'shadow-[0_0_25px_rgba(0,0,0,0.8)] border-blue-500/40' : ''
      }`}>
        {/* Plugin Logo */}
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 cursor-pointer group"
          id="nav-logo"
        >
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center font-black text-white shadow-[0_0_15px_rgba(37,99,235,0.5)] group-hover:scale-105 transition-transform shrink-0">
            <Gamepad2 className="w-6 h-6" />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-black text-lg tracking-tight text-white">
                استیم‌پرس پرو
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30 font-mono">
                SteamPress Pro
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8" id="desktop-nav">
          <button
            onClick={() => onScrollToSection('intro')}
            className="text-sm font-bold text-slate-300 hover:text-blue-400 transition-colors"
          >
            ۱. معرفی افزونه
          </button>
          <button
            onClick={() => onScrollToSection('features')}
            className="text-sm font-bold text-slate-300 hover:text-blue-400 transition-colors"
          >
            ۲. ویژگی‌های کلیدی
          </button>
          <button
            onClick={() => onScrollToSection('admin-panel')}
            className="text-sm font-bold text-slate-300 hover:text-blue-400 transition-colors"
          >
            ۳. پنل مدیریت
          </button>
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onScrollToSection('admin-panel')}
            className="hidden sm:flex items-center gap-2 px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all transform hover:scale-105"
          >
            <span>بررسی اسکرین‌شات‌ها</span>
            <ArrowLeft className="w-4 h-4" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-[#0b0e14] border border-[#2a475e] text-slate-300"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden max-w-6xl mx-auto bg-[#171d25] border border-[#2a475e] rounded-2xl p-4 mt-2 flex flex-col gap-3 shadow-2xl animate-in fade-in">
          <button
            onClick={() => {
              onScrollToSection('intro');
              setMobileMenuOpen(false);
            }}
            className="text-right text-sm font-bold text-slate-300 py-2 border-b border-[#2a475e]"
          >
            ۱. معرفی افزونه
          </button>
          <button
            onClick={() => {
              onScrollToSection('features');
              setMobileMenuOpen(false);
            }}
            className="text-right text-sm font-bold text-slate-300 py-2 border-b border-[#2a475e]"
          >
            ۲. ویژگی‌های کلیدی
          </button>
          <button
            onClick={() => {
              onScrollToSection('admin-panel');
              setMobileMenuOpen(false);
            }}
            className="text-right text-sm font-bold text-slate-300 py-2"
          >
            ۳. پنل مدیریت
          </button>
        </div>
      )}
    </header>
  );
};

