import React from 'react';
import { Gamepad2, ArrowLeft, CheckCircle2, ShieldCheck, Zap, Layers } from 'lucide-react';

interface IntroSectionProps {
  onScrollToSection: (id: string) => void;
}

export const IntroSection: React.FC<IntroSectionProps> = ({ onScrollToSection }) => {
  return (
    <section id="intro" className="relative pt-32 pb-20 overflow-hidden bg-[#0b0e14]">
      {/* Background glow effects */}
      <div className="absolute top-20 right-1/2 translate-x-1/2 w-[600px] h-[350px] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#171d25] border border-[#2a475e] text-xs font-bold text-blue-400 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>افزونه حرفه‌ای وردپرس و ووکامرس</span>
            <span className="bg-blue-600/30 text-blue-300 text-[10px] px-2 py-0.5 rounded-full font-mono">نسخه پرو v1.0.0</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            استیم‌پرس پرو <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
              (SteamPress Pro)
            </span>
          </h1>

          {/* Short Description */}
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-medium max-w-2xl mx-auto">
            کامل‌ترین و هوشمندترین افزونه اتصال استیم به ووکامرس. با استیم‌پرس پرو می‌توانید به سادگی تمام بازی‌های استیم، قیمت‌های منطقه‌ای، مشخصات سیستم درخواستی و تریلرها را مستقیماً وارد فروشگاه وردپرسی خود کنید و نرخ ارز را بر اساس صرافی همگام سازید.
          </p>

          {/* Key Quick Badges */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-300 font-semibold">
            <div className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#171d25] border border-[#2a475e]">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>ایمپورت یک‌کلیکه از دیتابیس استیم</span>
            </div>
            <div className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#171d25] border border-[#2a475e]">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>همگام‌سازی آنلاین نرخ ارز نوبیتکس</span>
            </div>
            <div className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#171d25] border border-[#2a475e]">
              <Layers className="w-4 h-4 text-blue-400" />
              <span>سازگار با وردپرس +6.0 (تست‌شده در WP 7.0.3)</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onScrollToSection('admin-panel')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-[0_0_25px_rgba(37,99,235,0.4)] transition-all transform hover:-translate-y-0.5"
            >
              <Gamepad2 className="w-5 h-5" />
              <span>مشاهده بخش‌های پنل مدیریت</span>
              <ArrowLeft className="w-4 h-4" />
            </button>

            <button
              onClick={() => onScrollToSection('features')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#171d25] hover:bg-[#202834] text-slate-200 border border-[#2a475e] font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all"
            >
              <ShieldCheck className="w-5 h-5 text-blue-400" />
              <span>ویژگی‌های کلیدی افزونه</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
