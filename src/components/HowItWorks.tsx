import React, { useState } from 'react';
import { Search, Settings, Rocket, Check, ArrowRight, Play, Gamepad2, Sparkles, Filter, Sliders } from 'lucide-react';

interface HowItWorksProps {
  isRtl: boolean;
  onOpenLiveDemo: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ isRtl, onOpenLiveDemo }) => {
  const [activeStep, setActiveStep] = useState<1 | 2 | 3>(1);

  const steps = [
    {
      stepNumber: 1,
      icon: Search,
      badge: isRtl ? 'گام اول' : 'Step 1',
      title: isRtl ? 'جستجو و انتخاب بازی از استیم' : 'Search for a Game',
      description: isRtl
        ? 'عنوان بازی (مانند Cyberpunk 2077 یا Elden Ring) یا آیدی محصول در استیم (AppID) را وارد کنید تا تمام اطلاعات رسمی از دیتابیس استیم فراخوانی شود.'
        : 'Enter any Steam game title or Steam AppID in the WordPress admin panel. The plugin fetches live metadata, high-res posters, HD trailers, and global pricing.',
      previewText: 'AppID: 1091500 • Cyberpunk 2077',
      mockupImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
    },
    {
      stepNumber: 2,
      icon: Settings,
      badge: isRtl ? 'گام دوم' : 'Step 2',
      title: isRtl ? 'تنظیم ریجن‌ها، درصد سود و ارز صرافی' : 'Choose Import Settings & Regions',
      description: isRtl
        ? 'ریجن‌های دلخواه (ترکیه TR، آرژانتین AR، آمریکا US)، درصد سود فروشگاه خود (مثلاً +15٪) و نرخ صرافی نوبیتکس را انتخاب کنید.'
        : 'Select targeted Steam regions (Turkey, Argentina, Ukraine, US), set your custom store profit margin (+15%), and configure auto currency rates.',
      previewText: 'Turkey TRY (₺799) + Argentina USD ($29.99) • Margin: +15%',
      mockupImage: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1200&q=80',
    },
    {
      stepNumber: 3,
      icon: Rocket,
      badge: isRtl ? 'گام سوم' : 'Step 3',
      title: isRtl ? 'شروع فروش اتوماتیک با آپدیت روزانه' : 'Start Selling with Automated Price Syncs',
      description: isRtl
        ? 'محصول ووکامرس شما فوراً منتشر می‌شود! کرون جاب‌های هوشمند افزونه، قیمت‌های لیر و تومان را روزانه بر اساس آخرین نرخ نوبیتکس به‌روزرسانی می‌کنند.'
        : 'Publish products automatically as WooCommerce variable items! Scheduled cron jobs continuously update regional prices based on live exchange rates.',
      previewText: 'Published to WooCommerce Store • Daily Cron Auto-Sync Active',
      mockupImage: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80',
    },
  ];

  const current = steps.find((s) => s.stepNumber === activeStep)!;

  return (
    <section id="how-it-works" className="py-24 bg-[#0b0e14] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#171d25] border border-[#2a475e] text-xs font-bold text-blue-400 mb-4 tracking-wider uppercase">
            <Rocket className="w-3.5 h-3.5" />
            <span>{isRtl ? 'راهنمای گام به گام' : 'Step-by-Step Workflow'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6">
            {isRtl ? (
              <>
                تنها ۳ گام ساده تا <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                  اتوماسیون کامل فروشگاه سی‌دی‌کی
                </span>
              </>
            ) : (
              <>
                How Steam Woo Sync Works in <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                  3 Simple Steps
                </span>
              </>
            )}
          </h2>

          <p className="text-base sm:text-lg text-slate-400">
            {isRtl
              ? 'فرآیند صفر تا صد راه اندازی و فروش اتوماتیک محصولات استیم در ووکامرس بدون نیاز به دانش برنامه‌نویسی.'
              : 'Launch and automate game key product listings effortlessly without any coding.'}
          </p>
        </div>

        {/* Step Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {steps.map((step) => {
            const Icon = step.icon;
            const isActive = step.stepNumber === activeStep;
            return (
              <button
                key={step.stepNumber}
                onClick={() => setActiveStep(step.stepNumber as 1 | 2 | 3)}
                className={`text-left p-6 rounded-3xl border transition-all duration-300 relative overflow-hidden ${
                  isActive
                    ? 'bg-[#171d25] border-blue-500 shadow-[0_0_25px_rgba(59,130,246,0.2)] transform -translate-y-1'
                    : 'bg-[#171d25]/60 border-[#2a475e] hover:bg-[#171d25] hover:border-[#2a475e]/80'
                }`}
              >
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-cyan-400" />
                )}

                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest ${
                    isActive ? 'bg-blue-600 text-white' : 'bg-[#2a475e]/50 text-slate-400'
                  }`}>
                    {step.badge}
                  </span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    isActive ? 'bg-blue-500/20 text-blue-400' : 'bg-[#2a475e]/30 text-slate-400'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h3 className={`text-lg font-bold mb-2 ${isActive ? 'text-white' : 'text-slate-300'}`}>
                  {step.title}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2">
                  {step.description}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Step Display Canvas / Mockup Showcase */}
        <div className="rounded-3xl bg-[#171d25] border border-[#2a475e] p-6 sm:p-10 shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Info Text */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-500/10 text-blue-300 border border-blue-500/20 text-xs font-bold">
                <span>{current.badge}</span>
                <span>•</span>
                <span>Active Showcase</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                {current.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                {current.description}
              </p>

              <div className="p-4 rounded-2xl bg-[#0b0e14] border border-[#2a475e] space-y-2">
                <span className="text-xs text-slate-400 font-mono block">Configuration Preview:</span>
                <span className="text-sm font-bold text-emerald-400 block font-mono">
                  {current.previewText}
                </span>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenLiveDemo}
                  className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all"
                >
                  <span>{isRtl ? 'اجرای عملی در دموی زنده' : 'Test This Step Live'}</span>
                  <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>

            {/* Right Interactive Mockup Image Frame */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden border border-[#2a475e] shadow-2xl bg-[#0b0e14] group">
                <div className="bg-[#171d25] px-4 py-2 border-b border-[#2a475e] flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                    <span>Steam Woo Sync Step {current.stepNumber} UI Mockup</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[#2a475e] text-blue-300 font-mono">
                    Interactive Sandbox
                  </span>
                </div>

                <div className="relative h-[320px] sm:h-[400px]">
                  <img
                    src={current.mockupImage}
                    alt={current.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* UI Overlay Card simulating WordPress plugin controls */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e14] via-transparent to-black/40 p-6 flex flex-col justify-between">
                    <div className="flex justify-end">
                      <span className="px-3 py-1 rounded-lg bg-[#0b0e14]/90 backdrop-blur-md border border-[#2a475e] text-xs font-mono text-cyan-300">
                        ✓ Steam API Connected
                      </span>
                    </div>

                    <div className="bg-[#171d25]/95 border border-[#2a475e] p-4 rounded-2xl backdrop-blur-md space-y-3">
                      {current.stepNumber === 1 && (
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">
                              <Gamepad2 className="w-5 h-5" />
                            </div>
                            <div>
                              <span className="text-xs font-bold text-white block">Cyberpunk 2077</span>
                              <span className="text-[10px] text-slate-400">CD PROJEKT RED • 91/100 Score</span>
                            </div>
                          </div>
                          <span className="px-3 py-1 rounded bg-emerald-500/20 text-emerald-400 text-xs font-bold">
                            Data Fetched
                          </span>
                        </div>
                      )}

                      {current.stepNumber === 2 && (
                        <div className="space-y-2 text-xs">
                          <div className="flex items-center justify-between text-slate-400">
                            <span>Regions Enabled:</span>
                            <span className="text-white font-bold">🇹🇷 TR, 🇦🇷 AR, 🇺🇸 US</span>
                          </div>
                          <div className="flex items-center justify-between text-slate-400">
                            <span>Exchange Rate Provider:</span>
                            <span className="text-blue-400 font-bold">Nobitex API (Live)</span>
                          </div>
                          <div className="flex items-center justify-between text-slate-400">
                            <span>Profit Margin Percentage:</span>
                            <span className="text-emerald-400 font-bold">+15% Markup</span>
                          </div>
                        </div>
                      )}

                      {current.stepNumber === 3 && (
                        <div className="space-y-2 text-xs">
                          <div className="flex items-center justify-between text-emerald-400 font-bold">
                            <span>WooCommerce Product ID: #10482</span>
                            <span>Published ✓</span>
                          </div>
                          <div className="flex items-center justify-between text-slate-400">
                            <span>Next Scheduled Price Sync:</span>
                            <span className="text-blue-400 font-mono">In 52 minutes (Auto Cron)</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
