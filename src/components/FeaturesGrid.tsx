import React from 'react';
import {
  MousePointerClick,
  Globe2,
  TrendingUp,
  Clock,
  Percent,
  Languages,
  ArrowUpRight,
  Check,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

interface FeaturesGridProps {
  isRtl: boolean;
  onScrollToSection: (id: string) => void;
}

export const FeaturesGrid: React.FC<FeaturesGridProps> = ({ isRtl, onScrollToSection }) => {
  const features = [
    {
      id: 'feature-1',
      icon: MousePointerClick,
      color: 'from-blue-500 to-cyan-400',
      badge: isRtl ? 'سرعت فوق‌العاده' : '1-CLICK INSTANT',
      title: isRtl ? 'ایمپورت سریع با یک کلیک' : 'One-Click Import',
      description: isRtl
        ? 'جستجوی نام هر بازی یا AppID استیم و وارد کردن عنوان، توضیحات کامل، تریلرهای رسمی باکیفیت و حداقل/حداکثر سیستم مورد نیاز به عنوان محصول ووکامرس در چند ثانیه.'
        : 'Search any game and import Title, Descriptions, Trailers, Screenshots, and System Requirements instantly into WooCommerce.',
      details: [
        isRtl ? 'استخراج کامل کاورها و گالری تصاویر' : 'Full HD Media & Gallery Extraction',
        isRtl ? 'پشتیبانی از تریلر و ویدیوهای استیم' : 'Official HD Steam Trailer Video Embeds',
        isRtl ? 'دسته بندی و تگ گذاری خودکار' : 'Automatic Category & Tag Mapping',
      ],
    },
    {
      id: 'feature-2',
      icon: Globe2,
      color: 'from-blue-400 to-indigo-500',
      badge: isRtl ? 'چند منطقه‌ای' : 'MULTI-REGION VARIATIONS',
      title: isRtl ? 'محصولات متغیر چند منطقه‌ای' : 'Multi-Region Variable Products',
      description: isRtl
        ? 'ایجاد خودکار متغیرهای محصول برای ریجن‌های محبوب استیم (ترکیه TR، آرژانتین AR، اوکراین UA، آمریکا US و اروپا) همراه با قیمت‌های محلی هر ریجن روی صفحه محصول.'
        : 'Automatically generate WooCommerce variations for different regions (TR, AR, UA, US, EU) with region-locked local prices.',
      details: [
        isRtl ? 'تنوع قیمت لیر ترکی، دلار آرژانتین و گریونا' : 'Support TRY, USD-LATAM, UAH, EUR',
        isRtl ? 'انتخاب ریجن توسط خریدار در صفحه محصول' : 'User Region Selection Dropdown on Front-end',
        isRtl ? 'کنترل عدم موجودی بر اساس ریجن' : 'Region-specific Stock Control',
      ],
    },
    {
      id: 'feature-3',
      icon: TrendingUp,
      color: 'from-emerald-400 to-teal-500',
      badge: isRtl ? 'نرخ زنده صرافی' : 'NOBITEX & TGJU API',
      title: isRtl ? 'تبدیل خودکار ارز با صرافی نوبیتکس' : 'Live Currency Conversion',
      description: isRtl
        ? 'اتصال مستقیم به API صرافی‌های معتبر مانند نوبیتکس (Nobitex)، TGJU و بن‌بست جهت تبدیل خودکار قیمت‌های دلار/لیر/یورو به تومان و ریال ایران به صورت لحظه‌ای.'
        : 'Built-in integration with Global APIs and Iranian Free-Market APIs (Nobitex/TGJU/Bonbast) to convert USD/EUR/TRY to your local currency (IRT/Tomans).',
      details: [
        isRtl ? 'به‌روزرسانی خودکار نرخ لیر و تتر' : 'Live USDT/IRT & TRY/IRT Exchange Sync',
        isRtl ? 'تنظیم منبع صرافی دلخواه' : 'Multiple Rate Provider Options',
        isRtl ? 'گرد کردن خودکار قیمت تومان' : 'Custom Price Rounding Rules',
      ],
    },
    {
      id: 'feature-4',
      icon: Clock,
      color: 'from-purple-500 to-pink-500',
      badge: isRtl ? 'ضد بن IP' : 'RATE LIMITING & PROXY',
      title: isRtl ? 'همگام‌سازی خودکار و مدیریت نرخ درخواست' : 'Auto-Sync & Rate Limiting',
      description: isRtl
        ? 'اجرای کرون جاب‌های پس‌زمینه برای به‌روزرسانی قیمت‌ها به صورت روزانه/ساعتی بدون ریسک مسدود شدن یا لیمیت شدن IP سرور شما توسط استیم.'
        : 'Background cron jobs update prices daily or hourly with proxy support without getting your server IP banned by Steam rate limits.',
      details: [
        isRtl ? 'سیستم صفی هوشمند برای آپدیت قیمت‌ها' : 'Smart Request Queue Manager',
        isRtl ? 'پشتیبانی کامل از پروکسی سرور' : 'Full HTTP/SOCKS Proxy Support',
        isRtl ? 'گزارش‌گیری دقیق و لاگ تغییرات قیمت' : 'Detailed Auto-Sync Audit Logs',
      ],
    },
    {
      id: 'feature-5',
      icon: Percent,
      color: 'from-amber-400 to-orange-500',
      badge: isRtl ? 'سود هوشمند' : 'AUTOMATED MARGINS',
      title: isRtl ? 'محاسبه خودکار درصد سود فروشگاه' : 'Shop Profit Margin Rules',
      description: isRtl
        ? 'افزودن خودکار درصد سود اختصاصی شما (مثلاً ۱۰٪ یا ۱۵٪ + کارمزد ثابت) روی قیمت‌های تبدیل شده استیم قبل از انتشار در ووکامرس.'
        : 'Add your custom profit percentage (e.g., +10%) or fixed markup on top of converted Steam prices automatically.',
      details: [
        isRtl ? 'تعریف درصد سود کلی یا دسته‌ای' : 'Global & Category Profit Percentage Rules',
        isRtl ? 'افزودن کارمزد ثابت به قیمت نهایی' : 'Fixed Handling Fee Additions',
        isRtl ? 'پیش‌نمایش سود خالص در پنل مدیریت' : 'Live Net Profit Preview in Admin',
      ],
    },
    {
      id: 'feature-6',
      icon: Languages,
      color: 'from-cyan-400 to-blue-600',
      badge: isRtl ? 'کاملاً راست‌چین' : '100% NATIVE RTL',
      title: isRtl ? 'پشتیبانی کامل از راست‌چین و زبان فارسی' : '100% RTL & Persian Ready',
      description: isRtl
        ? 'ترجمه کامل محیط مدیریت افزونه، شورت‌کدها و ویجت‌های المنتور به زبان فارسی با پشتیبانی ۱۰۰٪ از فونت‌های وزیرمتن و ایران‌سنس.'
        : 'Native Farsi translation files (.mo/.po) and full RTL dashboard layout included out of the box for Middle Eastern stores.',
      details: [
        isRtl ? 'فایل‌های ترجمه آماده mo و po' : 'Included Complete .mo / .po Translation Files',
        isRtl ? 'سازگار با تمام قالب‌های راست‌چین ووکامرس' : 'Compatible with all RTL WooCommerce Themes',
        isRtl ? 'پشتیبانی اختصاصی به زبان فارسی' : 'Native Persian Customer Support',
      ],
    },
  ];

  return (
    <section id="features" className="py-24 bg-[#0b0e14] relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#171d25] border border-[#2a475e] text-xs font-bold text-blue-400 mb-4 tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isRtl ? 'قابلیت‌های کلیدی افزونه' : 'Powerful Core Features'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6">
            {isRtl ? (
              <>
                تمام ابزارهای مورد نیاز برای <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                  فروشگاه حرفه‌ای گیفت کارت و سی‌دی‌کی
                </span>
              </>
            ) : (
              <>
                Everything You Need to <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                  Automate Your Game Store
                </span>
              </>
            )}
          </h2>

          <p className="text-base sm:text-lg text-slate-400">
            {isRtl
              ? 'افزونه استیم وو سینک تمام فرآیند استعلام قیمت، تبدیل نرخ ارز، ایمپورت محصولات و به‌روزرسانی قیمت‌ها را به صورت کاملاً خودکار انجام می‌دهد.'
              : 'Steam Woo Sync eliminates manual work by automating metadata fetching, regional price conversions, profit margin adjustments, and daily cron syncing.'}
          </p>
        </div>

        {/* Bento Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="group relative rounded-3xl bg-[#171d25] border border-[#2a475e] p-8 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)] flex flex-col justify-between"
                id={feature.id}
              >
                <div>
                  {/* Top Bar inside card */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${feature.color} p-0.5 shadow-lg`}>
                      <div className="w-full h-full bg-[#0b0e14] rounded-[14px] flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20 uppercase tracking-widest">
                      {feature.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {feature.description}
                  </p>
                </div>

                {/* Details Checklist */}
                <div className="border-t border-[#2a475e] pt-4 space-y-2">
                  {feature.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner inside features */}
        <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-[#171d25] via-[#1b2838] to-[#171d25] border border-[#2a475e] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">
                {isRtl ? '۱۰۰٪ مطمئن و بدون لیمیت استیم' : '100% Steam Safe & Rate Limit Free'}
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                {isRtl
                  ? 'الگوریتم هوشمند بافرینگ و پروکسی مانع از مسدودسازی آدرس آی‌پی سرور شما می‌شود.'
                  : 'Intelligent request queuing & proxy support guarantees your server IP remains safe.'}
              </p>
            </div>
          </div>

          <button
            onClick={() => onScrollToSection('calculator')}
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm transition-all whitespace-nowrap flex items-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.3)]"
          >
            <span>{isRtl ? 'تست محاسبه سود آنلاین' : 'Try Profit Calculator'}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
