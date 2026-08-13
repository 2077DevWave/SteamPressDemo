import React, { useState } from 'react';
import {
  Play,
  Zap,
  CheckCircle2,
  Globe2,
  RefreshCw,
  ShoppingBag,
  ShieldCheck,
  Search,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Sliders,
  DollarSign,
  Layers,
  Database
} from 'lucide-react';
import { CurrencyRates } from '../types';

interface HeroProps {
  currencyRates: CurrencyRates;
  isRtl: boolean;
  onOpenLiveDemo: () => void;
  onScrollToSection: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  currencyRates,
  isRtl,
  onOpenLiveDemo,
  onScrollToSection,
}) => {
  const [activeTab, setActiveTab] = useState<'importer' | 'regions' | 'currency' | 'cron'>('importer');
  const [searchQuery, setSearchQuery] = useState('Cyberpunk 2077');
  const [selectedRegion, setSelectedRegion] = useState('TR');
  const [marginValue, setMarginValue] = useState(15);

  const heroImageBanner = '/src/assets/images/steam_woo_hero_banner_1786638718816.jpg';
  const dashboardMockupImage = '/src/assets/images/steam_woo_dashboard_mockup_1786638730543.jpg';

  return (
    <section id="hero" className="relative pt-28 pb-16 overflow-hidden bg-[#0b0e14]">
      {/* Background Radial Glow & Grid Line Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-blue-500/10 via-[#1b2838]/30 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bento Grid Top Showcase Container */}
        <div className="grid grid-cols-12 gap-4 mb-8">
          {/* Bento Card 1: Hero Main Text (col-span-12 lg:col-span-7) */}
          <div className="col-span-12 lg:col-span-7 bg-gradient-to-br from-[#1b2838] to-[#171a21] border border-[#2a475e] rounded-3xl p-8 sm:p-10 flex flex-col justify-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] pointer-events-none" />
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs text-blue-300 mb-4 w-fit">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span>{isRtl ? 'نسخه ۲.۴ منتشر شد • ووکامرس ۹.۰+' : 'Version 2.4 Released • WooCommerce 9.0+'}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black leading-tight mb-4 tracking-tight text-white">
              {isRtl ? (
                <>
                  اتصال حرفه‌ای <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">استیم به ووکامرس</span>
                </>
              ) : (
                <>
                  The Ultimate <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Steam to WooCommerce</span> Integration
                </>
              )}
            </h1>

            <p className="text-slate-400 text-sm sm:text-base max-w-lg mb-8 leading-relaxed">
              {isRtl
                ? 'جستجو و ایمپورت یک‌کلیکه بازی‌ها از استیم، همگام‌سازی قیمت‌های چند منطقه‌ای (ترکیه، آرژانتین، آمریکا)، تبدیل خودکار ارز با API نوبیتکس و تنظیم درصد سود.'
                : 'Import games, sync multi-region prices, and automate your game key store in seconds with live currency exchange & background auto-sync.'}
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={onOpenLiveDemo}
                className="bg-blue-600 hover:bg-blue-500 text-white px-6 sm:px-8 py-3 rounded-xl font-bold shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all flex items-center gap-2"
                id="hero-live-demo-btn"
              >
                <Zap className="w-4 h-4 text-cyan-300" />
                <span>{isRtl ? 'مشاهده دموی زنده' : 'View Live Demo'}</span>
              </button>

              <button
                onClick={() => onScrollToSection('pricing')}
                className="bg-white/10 hover:bg-white/20 border border-white/10 text-white px-6 sm:px-8 py-3 rounded-xl font-bold transition-all flex items-center gap-2"
                id="hero-buy-now-btn"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>{isRtl ? 'خرید آنی ($49)' : 'Buy Now ($49)'}</span>
              </button>
            </div>
          </div>

          {/* Bento Card 2: How It Works Timeline (col-span-12 lg:col-span-5) */}
          <div className="col-span-12 lg:col-span-5 bg-[#171d25] border border-[#2a475e] rounded-3xl p-6 flex flex-col justify-between overflow-hidden shadow-inner relative">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs uppercase tracking-widest text-blue-400 font-bold">How It Works</span>
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
              </div>
            </div>

            <div className="space-y-4 relative py-2">
              <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-[#2a475e]"></div>

              <div className="relative pl-10">
                <div className="absolute left-0 top-1 w-6 h-6 bg-blue-500 rounded-full border-4 border-[#171d25] flex items-center justify-center text-[10px] font-bold text-white">1</div>
                <h4 className="text-sm font-bold text-white">{isRtl ? 'جستجو و ایمپورت' : 'Search & Import'}</h4>
                <p className="text-xs text-slate-400">{isRtl ? 'جستجوی دیتابیس استیم و ایمپورت با یک کلیک.' : 'Search game database and import in one click.'}</p>
              </div>

              <div className="relative pl-10">
                <div className="absolute left-0 top-1 w-6 h-6 bg-blue-500 rounded-full border-4 border-[#171d25] flex items-center justify-center text-[10px] font-bold text-white">2</div>
                <h4 className="text-sm font-bold text-white">{isRtl ? 'تنظیمات منطقه‌ای' : 'Regional Settings'}</h4>
                <p className="text-xs text-slate-400">{isRtl ? 'تنظیم قوانین قیمت ریجن‌های TR, AR, US و تومان.' : 'Configure TR, AR, US, and IRT pricing rules.'}</p>
              </div>

              <div className="relative pl-10">
                <div className="absolute left-0 top-1 w-6 h-6 bg-blue-500 rounded-full border-4 border-[#171d25] flex items-center justify-center text-[10px] font-bold text-white">3</div>
                <h4 className="text-sm font-bold text-white">{isRtl ? 'همگام‌سازی خودکار' : 'Automated Sync'}</h4>
                <p className="text-xs text-slate-400">{isRtl ? 'به‌روزرسانی قیمت‌ها با کرون جاب روزانه.' : 'Prices update via background cron daily.'}</p>
              </div>
            </div>

            <div className="mt-4 bg-[#0b0e14] rounded-xl border border-[#2a475e] p-2.5 flex items-center justify-between text-xs font-mono text-blue-300">
              <span>1,200+ Active Stores</span>
              <span className="text-emerald-400 font-bold">✓ 99.9% Uptime</span>
            </div>
          </div>

          {/* Bento Card 3: Multi-Region Woo */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-3 bg-[#171d25] border border-[#2a475e] rounded-2xl p-4 flex flex-col justify-between gap-2">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-8 h-8 rounded bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-white">Multi-Region Woo</h3>
            </div>
            <p className="text-xs text-slate-400">{isRtl ? 'تولید متغیرهای ترکیه‌ای، آرژانتین و آمریکا.' : 'Generate variations for TR, AR, UA instantly.'}</p>
            <div className="mt-auto flex gap-1 pt-2">
              <span className="px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-[10px] text-blue-300 font-mono">$ USD</span>
              <span className="px-2 py-0.5 rounded bg-green-500/10 border border-green-500/20 text-[10px] text-green-300 font-mono">₺ TRY</span>
            </div>
          </div>

          {/* Bento Card 4: Live Currency API */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-3 bg-[#171d25] border border-[#2a475e] rounded-2xl p-4 flex flex-col justify-between gap-2">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-8 h-8 rounded bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                <TrendingUp className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-white">Live Currency API</h3>
            </div>
            <p className="text-xs text-slate-400">{isRtl ? 'اتصال مستقیم به API نوبیتکس و TGJU.' : 'Global and Nobitex integration for real-time rates.'}</p>
            <div className="mt-auto font-mono text-[11px] text-emerald-400 font-bold">
              1 TRY = {currencyRates.tryIrt.toLocaleString()} IRT
            </div>
          </div>

          {/* Bento Card 5: Shortcode Preview */}
          <div className="col-span-12 lg:col-span-4 bg-slate-900 border border-slate-700 rounded-2xl p-4 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-slate-500">shortcode.php</span>
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
            </div>
            <pre className="text-[11px] font-mono text-blue-300 space-y-1">
              <div>[<span className="text-cyan-300">steam_data</span> field=<span className="text-yellow-400">"price"</span> region=<span className="text-yellow-400">"TR"</span>]</div>
              <div>[<span className="text-cyan-300">steam_data</span> field=<span className="text-yellow-400">"trailer"</span>]</div>
            </pre>
            <div className="mt-auto pt-2 border-t border-slate-800 flex items-center justify-between">
              <span className="text-[10px] text-slate-500 uppercase font-bold">Elementor Widget Included</span>
              <span className="text-blue-400">⚡</span>
            </div>
          </div>

          {/* Bento Card 6: RTL Ready */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-2 bg-[#171d25] border border-[#2a475e] rounded-2xl p-4 flex flex-col items-center justify-center text-center">
            <div className="text-3xl mb-1">🇮🇷</div>
            <h3 className="text-xs font-bold uppercase tracking-tighter mb-1 text-white">RTL READY</h3>
            <p className="text-[10px] text-slate-400">{isRtl ? 'ترجمه رسمی فارسی موجود است.' : 'Native Persian translation included.'}</p>
          </div>
        </div>

        {/* Large Hero Interactive Dashboard Showcase Image Container */}
        <div className="relative mx-auto max-w-6xl rounded-2xl p-1 bg-gradient-to-b from-[#66c0f4]/50 via-[#2a475e]/30 to-[#1b2838] shadow-2xl shadow-black/80 group">
          <div className="relative rounded-xl bg-[#171a21] overflow-hidden border border-[#2a475e]">
            {/* Top Bar simulating WordPress Admin Header */}
            <div className="bg-[#1b2838] px-4 py-3 border-b border-[#2a475e] flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
                </div>
                <div className="h-4 w-px bg-[#2a475e] mx-2"></div>
                <span className="text-xs font-bold text-white flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5 text-[#66c0f4]" />
                  Steam Woo Sync v2.4 • Admin Panel
                </span>
              </div>

              {/* Interactive Tabs */}
              <div className="flex items-center gap-1 bg-[#171a21] p-1 rounded-lg border border-[#2a475e]">
                <button
                  onClick={() => setActiveTab('importer')}
                  className={`px-3 py-1 rounded-md text-xs font-semibold transition-all ${
                    activeTab === 'importer'
                      ? 'bg-[#66c0f4] text-[#171a21] font-bold'
                      : 'text-[#c7d5e0] hover:text-white'
                  }`}
                >
                  {isRtl ? 'جستجو و ایمپورت' : 'Game Importer'}
                </button>
                <button
                  onClick={() => setActiveTab('regions')}
                  className={`px-3 py-1 rounded-md text-xs font-semibold transition-all ${
                    activeTab === 'regions'
                      ? 'bg-[#66c0f4] text-[#171a21] font-bold'
                      : 'text-[#c7d5e0] hover:text-white'
                  }`}
                >
                  {isRtl ? 'نرخ منطقه‌ای (TR/AR)' : 'Multi-Region'}
                </button>
                <button
                  onClick={() => setActiveTab('currency')}
                  className={`px-3 py-1 rounded-md text-xs font-semibold transition-all ${
                    activeTab === 'currency'
                      ? 'bg-[#66c0f4] text-[#171a21] font-bold'
                      : 'text-[#c7d5e0] hover:text-white'
                  }`}
                >
                  {isRtl ? 'ارز نوبیتکس' : 'Nobitex API'}
                </button>
                <button
                  onClick={() => setActiveTab('cron')}
                  className={`px-3 py-1 rounded-md text-xs font-semibold transition-all ${
                    activeTab === 'cron'
                      ? 'bg-[#66c0f4] text-[#171a21] font-bold'
                      : 'text-[#c7d5e0] hover:text-white'
                  }`}
                >
                  {isRtl ? 'کرون جاب' : 'Cron Auto-Sync'}
                </button>
              </div>
            </div>

            {/* Dashboard Visual View Area */}
            <div className="relative">
              {/* Background Mockup Image */}
              <div className="relative min-h-[420px] sm:min-h-[500px] w-full">
                <img
                  src={dashboardMockupImage}
                  alt="Steam Woo Sync Dashboard Screenshot"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top filter brightness-95 hover:brightness-100 transition-all duration-500"
                />

                {/* Overlaid Interactive Glass Panel based on active tab */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#171a21] via-[#171a21]/80 to-transparent p-4 sm:p-8 flex flex-col justify-end">
                  <div className="bg-[#1b2838]/95 border border-[#2a475e] rounded-xl p-4 sm:p-6 backdrop-blur-xl shadow-2xl">
                    {activeTab === 'importer' && (
                      <div className="space-y-4">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-[#2a475e]/60 pb-3">
                          <div className="flex items-center gap-2">
                            <Search className="w-5 h-5 text-[#66c0f4]" />
                            <span className="text-sm font-bold text-white">
                              {isRtl ? 'جستجوی هوشمند دیتابیس استیم' : 'Live Steam Database Search'}
                            </span>
                          </div>
                          <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-medium">
                            ✓ Instant Metadata Extraction
                          </span>
                        </div>

                        <div className="flex items-center gap-3 bg-[#171a21] p-2 rounded-lg border border-[#2a475e]">
                          <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="bg-transparent text-sm text-white px-3 py-1 flex-1 outline-none"
                            placeholder="Enter game title or AppID..."
                          />
                          <button className="px-4 py-2 bg-[#66c0f4] text-[#171a21] rounded-md font-bold text-xs hover:bg-[#00f2fe]">
                            {isRtl ? 'ایمپورت به ووکامرس' : 'Import to WooCommerce'}
                          </button>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                          <div className="p-2.5 rounded bg-[#171a21]/80 border border-[#2a475e]">
                            <span className="text-[#8f98a0] block">Game AppID:</span>
                            <span className="text-white font-mono font-bold">1091500</span>
                          </div>
                          <div className="p-2.5 rounded bg-[#171a21]/80 border border-[#2a475e]">
                            <span className="text-[#8f98a0] block">TR Price:</span>
                            <span className="text-[#66c0f4] font-bold">₺799 (1,454,180 تومان)</span>
                          </div>
                          <div className="p-2.5 rounded bg-[#171a21]/80 border border-[#2a475e]">
                            <span className="text-[#8f98a0] block">Shop Margin:</span>
                            <span className="text-emerald-400 font-bold">+{marginValue}% Applied</span>
                          </div>
                          <div className="p-2.5 rounded bg-[#171a21]/80 border border-[#2a475e]">
                            <span className="text-[#8f98a0] block">Woo Product Status:</span>
                            <span className="text-purple-300 font-bold">Variable (Ready)</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === 'regions' && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between border-b border-[#2a475e]/60 pb-3">
                          <span className="text-sm font-bold text-white flex items-center gap-2">
                            <Globe2 className="w-5 h-5 text-[#66c0f4]" />
                            {isRtl ? 'جدول قیمت مناطق مختلف استیم' : 'Multi-Region Regional Pricing Matrix'}
                          </span>
                          <span className="text-xs text-[#66c0f4] font-mono">Real-time Currency Conversion</span>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-xs">
                          <div className="p-2.5 rounded bg-[#171a21] border border-[#66c0f4]/50">
                            <div className="flex items-center gap-1 font-bold text-white">🇹🇷 Turkey (TRY)</div>
                            <div className="text-[#66c0f4] font-semibold mt-1">₺799 TRY</div>
                            <div className="text-[10px] text-emerald-400">1,454,180 تومان</div>
                          </div>
                          <div className="p-2.5 rounded bg-[#171a21] border border-[#2a475e]">
                            <div className="flex items-center gap-1 font-bold text-white">🇦🇷 Argentina (USD)</div>
                            <div className="text-[#66c0f4] font-semibold mt-1">$29.99 USD</div>
                            <div className="text-[10px] text-emerald-400">1,844,385 تومان</div>
                          </div>
                          <div className="p-2.5 rounded bg-[#171a21] border border-[#2a475e]">
                            <div className="flex items-center gap-1 font-bold text-white">🇺🇦 Ukraine (UAH)</div>
                            <div className="text-[#66c0f4] font-semibold mt-1">₴1099 UAH</div>
                            <div className="text-[10px] text-emerald-400">1,670,480 تومان</div>
                          </div>
                          <div className="p-2.5 rounded bg-[#171a21] border border-[#2a475e]">
                            <div className="flex items-center gap-1 font-bold text-white">🇺🇸 United States</div>
                            <div className="text-[#66c0f4] font-semibold mt-1">$59.99 USD</div>
                            <div className="text-[10px] text-emerald-400">3,689,385 تومان</div>
                          </div>
                          <div className="p-2.5 rounded bg-[#171a21] border border-[#2a475e]">
                            <div className="flex items-center gap-1 font-bold text-white">🇪🇺 Europe (EUR)</div>
                            <div className="text-[#66c0f4] font-semibold mt-1">€59.99 EUR</div>
                            <div className="text-[10px] text-emerald-400">4,031,328 تومان</div>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === 'currency' && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between border-b border-[#2a475e]/60 pb-3">
                          <span className="text-sm font-bold text-white flex items-center gap-2">
                            <TrendingUp className="w-5 h-5 text-emerald-400" />
                            {isRtl ? 'اتصال مستقیم به صرافی نوبیتکس و TGJU' : 'Live Nobitex & Iranian Currency API Sync'}
                          </span>
                          <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono">
                            Status: Active
                          </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                          <div className="p-3 rounded bg-[#171a21] border border-[#2a475e]">
                            <span className="text-[#8f98a0]">Turkish Lira (TRY / IRT):</span>
                            <div className="text-lg font-extrabold text-white mt-1">
                              1 TRY = {currencyRates.tryIrt.toLocaleString()} تومان
                            </div>
                            <span className="text-[10px] text-emerald-400">Synced 2m ago via Nobitex</span>
                          </div>
                          <div className="p-3 rounded bg-[#171a21] border border-[#2a475e]">
                            <span className="text-[#8f98a0]">US Dollar (USDT / IRT):</span>
                            <div className="text-lg font-extrabold text-white mt-1">
                              1 USD = {currencyRates.usdIrt.toLocaleString()} تومان
                            </div>
                            <span className="text-[10px] text-emerald-400">TGJU Free Market API</span>
                          </div>
                          <div className="p-3 rounded bg-[#171a21] border border-[#2a475e]">
                            <span className="text-[#8f98a0]">Custom Profit Margin:</span>
                            <div className="text-lg font-extrabold text-[#00f2fe] mt-1">
                              +{marginValue}% Margin Rule
                            </div>
                            <span className="text-[10px] text-[#8f98a0]">Auto-Added to WooCommerce</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === 'cron' && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between border-b border-[#2a475e]/60 pb-3">
                          <span className="text-sm font-bold text-white flex items-center gap-2">
                            <RefreshCw className="w-5 h-5 text-purple-400 animate-spin" />
                            {isRtl ? 'برنامه‌ریزی کرون‌جاب خودکار' : 'Automated Background Cron Job Log'}
                          </span>
                          <span className="text-xs text-purple-300 font-mono">Interval: Every 60 Minutes</span>
                        </div>

                        <div className="bg-[#171a21] p-3 rounded font-mono text-[11px] text-gray-300 space-y-1">
                          <p className="text-emerald-400">[09:30:12] INFO: Nobitex API rate refreshed: TRY = 1,820 IRT</p>
                          <p className="text-blue-300">[09:30:14] BATCH: Updating 120 products with region TR...</p>
                          <p className="text-gray-400">[09:30:18] SUCCESS: AppID 1091500 (Cyberpunk 2077) price updated to 1,454,180 IRT</p>
                          <p className="text-emerald-400">[09:30:20] COMPLETED: 120 WooCommerce product prices auto-synced successfully.</p>
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
    </section>
  );
};
