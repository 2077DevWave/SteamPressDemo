import React, { useState } from 'react';
import { LayoutDashboard, X, ChevronRight, ChevronLeft, Maximize2, Sparkles, CheckCircle2 } from 'lucide-react';

import img1 from '../assets/images/1.png';
import img2 from '../assets/images/2.png';
import img3 from '../assets/images/3.png';
import img4 from '../assets/images/4.png';
import img5 from '../assets/images/5.png';
import img6 from '../assets/images/6.png';
import img7 from '../assets/images/7.png';
import img8 from '../assets/images/8.png';
import img9 from '../assets/images/9.png';

interface SectionImage {
  id: number;
  src: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  highlights: string[];
}

export const AdminPanelSection: React.FC = () => {
  const [selectedImgIndex, setSelectedImgIndex] = useState<number | null>(null);

  const adminSections: SectionImage[] = [
    {
      id: 1,
      src: img9,
      title: 'صفحه جستجو و ایمپورت بازی‌ها',
      subtitle: 'Search & Import Page',
      description: 'در این بخش با وارد کردن نام بازی یا AppID استیم، تمامی اطلاعات از جمله عنوان، سازنده، تصاویر کاور، ویدیوهای تریلر و جدول قیمت‌های ریجن‌های مختلف فراخوانی شده و تنها با یک کلیک به عنوان محصول ووکامرس افزوده می‌شود.',
      badge: 'هسته اصلی',
      highlights: ['ایمپورت تک‌کلیکه', 'جستجو بر اساس AppID استیم', 'دریافت گالری تصاویر و پوستر']
    },
    {
      id: 2,
      src: img1,
      title: 'مدیریت شورت‌کدها و المنتور',
      subtitle: 'Shortcodes & Elementor Widgets',
      description: 'ارائه شورت‌کدهای هوشمند و قدرتمند جهت نمایش جدول قیمت ریجن‌ها، ویدیو تریلر، و مشخصات سیستم مورد نیاز در هر قسمت از برگه محصول یا المان‌های المنتور.',
      badge: 'ابزار طراحی',
      highlights: ['شورت‌کد اختصاصی قیمت‌ها', 'سازگاری کامل با المنتور پرو', 'نمایش تریلر HD بازی']
    },
    {
      id: 3,
      src: img2,
      title: 'تنظیمات نرخ ارز و صرافی نوبیتکس',
      subtitle: 'Exchange Rate & Nobitex API',
      description: 'امکان اتصال مستقیم به API صرافی نوبیتکس جهت استعلام زنده و خودکار نرخ ارزهایی مانند لیر ترکیه، دلار، یورو و تبدیل لحظه‌ای آنها به تومان با احتساب درصد سود دلخواه.',
      badge: 'اتصال زنده',
      highlights: ['استعلام زنده API نوبیتکس', 'تعیین درصد سود فروشگاه', 'تبدیل لحظه‌ای به تومان']
    },
    {
      id: 4,
      src: img3,
      title: 'قابلیت حذف و یا اضافه کردن ریجن جدید',
      subtitle: 'Regional Pricing & Region Management',
      description: 'قابلیت مدیریت کامل، حذف و یا اضافه کردن ریجن جدید در استیم.',
      badge: 'مدیریت ریجن',
      highlights: ['قابلیت حذف و اضافه کردن ریجن جدید', 'پشتیبانی از تمام ریجن‌های استیم']
    },
    {
      id: 5,
      src: img5,
      title: 'امکان مشخص کردن فیلدهایی که پلاگین آپدیت می‌کند',
      subtitle: 'Selectable Auto-Update Fields',
      description: 'امکان انتخاب و مشخص کردن دقیق فیلدهایی که پلاگین در زمان بروزرسانی‌های دوره‌ای آپدیت می‌کند (نظیر قیمت، مشخصات سیستم، گالری تصاویر یا متون).',
      badge: 'تنظیمات آپدیت',
      highlights: ['مشخص کردن فیلدهای قابل آپدیت', 'جلوگیری از اوررایت اطلاعات دلخواه', 'همگام‌سازی هوشمند فیلدها']
    },
    {
      id: 6,
      src: img4,
      title: 'زمان‌بندی بروزرسانی خودکار (Cron)',
      subtitle: 'Cron & Auto-Sync Schedule',
      description: 'پیکربندی کرون‌جاب‌های زمان‌بندی‌شده وردپرس جهت استعلام دوره‌ای آخرین تغییرات قیمت و بروزرسانی خودکار تمام محصولات بدون کندی سرور.',
      badge: 'اتوماسیون کامل',
      highlights: ['بروزرسانی زمان‌بندی‌شده', 'بهینه‌سازی شده برای سرور']
    },
    {
      id: 7,
      src: img6,
      title: 'انتخاب قالب محتوای دریافتی از استیم',
      subtitle: 'Steam Content Template Builder',
      description: 'انتخاب قالب محتوای دریافتی از استیم. امکان ایجاد یک قالب اختصاصی برای هر فیلد دریافتی جهت شخصی‌سازی کامل نحوه نمایش اطلاعات بازی‌ها در ووکامرس.',
      badge: 'قالب محتوا',
      highlights: ['انتخاب قالب محتوای دریافتی', 'ایجاد یک قالب برای هر فیلد دریافتی', 'شخصی‌سازی کامل متون و محتوا']
    },
    {
      id: 8,
      src: img7,
      title: 'پشتیبانی کامل از کاستوم فیلدهای ووکامرس و امکان مپ کردن فیلدها',
      subtitle: 'Custom Fields & Data Mapping',
      description: 'قابلیت نگاشت (Mapping) اطلاعات استیم روی کاستوم فیلدهای دلخواه ووکامرس (مانند ACF یا فیلدهای اختصاصی قالب) برای سازگاری بی‌نقص با انواع پوسته‌ها.',
      badge: 'انعطاف‌پذیری داده',
      highlights: ['سازگاری با ACF و فیلدهای قالب', 'نگاشت هوشمند داده‌های استیم', 'سازگاری با انواع پوسته‌ها']
    },
    {
      id: 9,
      src: img8,
      title: 'گزارشات و لاگ‌های سیستم',
      subtitle: 'System Activity Logs',
      description: 'ثبت و مشاهده تاریخچه کامل عملیات همگام‌سازی، گزارش ایمپورت محصولات، و بررسی دقیق خطاهای ارتباطی شبکه یا API برای مدیریت و پشتیبانی آسان.',
      badge: 'عیب‌یابی',
      highlights: ['ثبت لاگ‌های همگام‌سازی', 'مانیتورینگ خطاهای API', 'تاریخچه کامل ایمپورت']
    }
  ];

  const currentModalImg = selectedImgIndex !== null ? adminSections[selectedImgIndex] : null;

  return (
    <section id="admin-panel" className="py-20 bg-[#0b0e14] relative border-t border-[#2a475e]/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#171d25] border border-[#2a475e] text-xs font-bold text-blue-400">
            <LayoutDashboard className="w-3.5 h-3.5" />
            <span>معرفی پنل مدیریت افزونه استیم‌پرس پرو</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            نگاهی به بخش‌های مختلف تنظیمات
          </h2>
          
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            در ادامه تصویر و توضیحات کامل هر ۹ بخش اصلی پنل تنظیمات افزونه استیم‌پرس پرو آورده شده است. برای مشاهده تصویر بزرگتر روی هر اسکرین‌شات کلیک کنید.
          </p>
        </div>

        {/* Left-Right Side-by-Side Sections List */}
        <div className="space-y-12">
          {adminSections.map((item, index) => (
            <div
              key={item.id}
              className="bg-[#171d25] border border-[#2a475e] rounded-3xl p-6 sm:p-8 hover:border-blue-500/60 shadow-xl hover:shadow-[0_0_30px_rgba(37,99,235,0.15)] transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Right Side (Text & Explanations in RTL) */}
                <div className="lg:col-span-5 order-2 lg:order-1 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-blue-600/20 to-indigo-600/10 border border-blue-500/30 shadow-[0_0_15px_rgba(37,99,235,0.15)]">
                      <span className="w-6 h-6 rounded-lg bg-blue-600 text-white font-black text-xs flex items-center justify-center shadow-sm shrink-0">
                        {item.id}
                      </span>
                      <span className="text-xs font-extrabold text-blue-200">
                        بخش {item.id} از ۹
                      </span>
                    </div>

                    <span className="text-[11px] font-bold px-3 py-1 rounded-xl bg-[#0b0e14] text-slate-300 border border-[#2a475e]">
                      {item.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-white leading-snug">
                      {item.title}
                    </h3>
                    <span className="text-xs text-slate-400 font-mono dir-ltr block mt-1">
                      {item.subtitle}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                    {item.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="pt-2 space-y-2">
                    {item.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Left Side (Screenshot Image in RTL) */}
                <div className="lg:col-span-7 order-1 lg:order-2">
                  <div
                    onClick={() => setSelectedImgIndex(index)}
                    className="relative group cursor-pointer overflow-hidden rounded-2xl border border-[#2a475e] bg-[#0b0e14] shadow-2xl hover:border-blue-500 transition-all duration-300"
                  >
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-auto object-cover object-top group-hover:scale-102 transition-transform duration-500"
                    />
                    
                    {/* Dark gradient overlay on hover */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold flex items-center gap-2 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all">
                        <Maximize2 className="w-4 h-4" />
                        <span>مشاهده تصویر بزرگ‌تر</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {currentModalImg && selectedImgIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-5xl bg-[#171d25] border border-[#2a475e] rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="bg-[#0b0e14] px-6 py-4 border-b border-[#2a475e] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-xs">
                  {currentModalImg.id}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">{currentModalImg.title}</h3>
                  <span className="text-xs text-slate-400 font-mono dir-ltr block">{currentModalImg.subtitle}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSelectedImgIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : adminSections.length - 1))}
                  className="p-2 rounded-xl bg-[#171d25] border border-[#2a475e] text-slate-300 hover:text-white"
                  title="تصویر قبلی"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setSelectedImgIndex((prev) => (prev !== null && prev < adminSections.length - 1 ? prev + 1 : 0))}
                  className="p-2 rounded-xl bg-[#171d25] border border-[#2a475e] text-slate-300 hover:text-white"
                  title="تصویر بعدی"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setSelectedImgIndex(null)}
                  className="p-2 rounded-xl bg-blue-600 text-white hover:bg-blue-500 transition-colors"
                  title="بستن"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Image Area */}
            <div className="p-4 bg-[#0b0e14] overflow-auto flex-1 flex items-center justify-center">
              <img
                src={currentModalImg.src}
                alt={currentModalImg.title}
                className="max-w-full max-h-[65vh] object-contain rounded-2xl border border-[#2a475e] shadow-2xl"
              />
            </div>

            {/* Modal Footer Description */}
            <div className="bg-[#171d25] p-6 border-t border-[#2a475e] space-y-2">
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {currentModalImg.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {currentModalImg.highlights.map((h, idx) => (
                  <span key={idx} className="text-xs font-bold px-2.5 py-1 rounded-lg bg-blue-600/15 text-blue-300 border border-blue-500/30">
                    ✓ {h}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
