import React from 'react';
import { Gamepad2, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onScrollToSection: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToSection }) => {
  return (
    <footer className="bg-[#0b0e14] border-t border-[#2a475e] pt-16 pb-12 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#2a475e]">
          
          {/* Plugin Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold">
                <Gamepad2 className="w-5 h-5" />
              </div>
              <span className="font-black text-xl text-white">استیم‌پرس پرو (SteamPress Pro)</span>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              افزونه تخصصی اتصال فروشگاه وردپرس و ووکامرس به دیتابیس استیم. اتوماسیون کامل وارد کردن بازی‌ها، قیمت‌های منطقه‌ای، نرخ ارز نوبیتکس و مشخصات سیستم.
            </p>
          </div>

          {/* Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">بخش‌های اصلی</h4>
            <ul className="space-y-2 text-xs text-slate-400 font-semibold">
              <li>
                <button onClick={() => onScrollToSection('intro')} className="hover:text-blue-400 transition-colors">
                  ۱. معرفی افزونه
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('features')} className="hover:text-blue-400 transition-colors">
                  ۲. ویژگی‌های کلیدی
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('admin-panel')} className="hover:text-blue-400 transition-colors">
                  ۳. پنل مدیریت
                </button>
              </li>
            </ul>
          </div>

          {/* Compatibility Badge */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">سازگاری و نیازمندی‌ها</h4>
            <div className="p-4 rounded-2xl bg-[#171d25] border border-[#2a475e] space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2 font-bold text-white">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>سازگار با المنتور و ووکامرس</span>
              </div>
              <p className="text-slate-400 text-[11px]">
                پشتیبانی کامل از وردپرس +6.0، المنتور پرو، صرافی نوبیتکس و قالب‌های استاندارد ووکامرس.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} تمامی حقوق برای افزونه استیم‌پرس پرو (SteamPress Pro) محفوظ است.</p>
          <p className="flex items-center gap-1.5">
            <span>طراحی شده با</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            <span>برای فروشگاه‌های وردپرسی</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
