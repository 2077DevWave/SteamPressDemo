import React from 'react';
import { 
  Search, 
  DollarSign, 
  RefreshCw, 
  Code2, 
  Monitor, 
  ShieldCheck, 
  Cpu, 
  Video, 
  Sparkles 
} from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Search,
      title: 'جستجو و ایمپورت هوشمند بازی‌ها',
      description: 'کافیست نام بازی یا AppID استیم را وارد کنید تا تمام اطلاعات، کاور، گالری تصاویر و قیمت‌ها ظرف چند ثانیه به ووکامرس اضافه شوند.',
      badge: 'سرعت فوق‌العاده'
    },
    {
      icon: DollarSign,
      title: 'محاسبه قیمت ریجن‌های مختلف',
      description: 'پشتیبانی کامل از ریجن‌های محبوب استیم مانند ترکیه (TRY)، آرژانتین (USD)، برزیل و... با امکان اعمال درصد سود اختصاصی فروشگاه.',
      badge: 'دقت بالا'
    },
    {
      icon: RefreshCw,
      title: 'همگام‌سازی زنده با صرافی نوبیتکس',
      description: 'اتصال خودکار به API صرافی‌های معتبر جهت دریافت نرخ جدید لیر و دلار و بروزرسانی لحظه‌ای قیمت محصولات بدون دخالت دست.',
      badge: 'خودکار و هوشمند'
    },
    {
      icon: Code2,
      title: 'شورت‌کدها و ویجت‌های المنتور',
      description: 'ارائه شورت‌کدهای متنوع و ویجت اختصاصی المنتور برای جاگذاری آسان جدول قیمت‌ها، ویدیو تریلر و مشخصات سخت‌افزاری در برگه محصول.',
      badge: 'سازگار با المنتور'
    },
    {
      icon: Video,
      title: 'استخراج اتوماتیک تریلر و رسانه',
      description: 'دریافت مستقیم ویدیوهای تریلر با کیفیت ۱۰۸۰p و گالری اسکرین‌شات‌های رسمی بازی‌ها و جایگذاری در گالری محصول یا باکس ویدیو.',
      badge: 'کیفیت HD'
    },
    {
      icon: Cpu,
      title: 'جدول مشخصات سیستم درخواستی',
      description: 'دریافت خودکار حداقل سیستم مورد نیاز (Minimum) و سیستم پیشنهادی (Recommended) به صورت مرتب و شکیل در برگه محصول.',
      badge: 'اطلاعات کامل'
    }
  ];

  return (
    <section id="features" className="py-20 bg-[#0b0e14] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#171d25] border border-[#2a475e] text-xs font-bold text-blue-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ویژگی‌های کلیدی افزونه</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            چرا استیم‌پرس پرو انتخابی بی‌رقیب است؟
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            امکانات پیشرفته و در عین حال ساده افزونه استیم‌پرس پرو، تمام نیازهای فروشندگان گیفت‌کارت و سی‌دی‌کی بازی در وردپرس را برطرف می‌کند.
          </p>
        </div>

        {/* Feature Boxes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#171d25] border border-[#2a475e] rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-blue-500/50 hover:shadow-[0_0_25px_rgba(37,99,235,0.15)] transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-blue-600/10 border border-blue-500/30 text-blue-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#0b0e14] text-slate-300 border border-[#2a475e]">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
