import React, { useState } from 'react';
import { Code2, Copy, Check, Terminal, LayoutGrid, Layers, Sparkles, Box, CheckCircle2 } from 'lucide-react';
import { SHORTCODE_EXAMPLES } from '../data/mockSteamData';

interface ShortcodeElementorProps {
  isRtl: boolean;
}

export const ShortcodeElementor: React.FC<ShortcodeElementorProps> = ({ isRtl }) => {
  const [selectedField, setSelectedField] = useState<'price' | 'trailer' | 'requirements' | 'matrix'>('price');
  const [selectedRegion, setSelectedRegion] = useState<'TR' | 'AR' | 'UA' | 'US'>('TR');
  const [selectedCurrency, setSelectedCurrency] = useState<'IRT' | 'TRY' | 'USD'>('IRT');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  // Generate dynamic shortcode based on user selection
  const generateDynamicShortcode = () => {
    if (selectedField === 'price') {
      return `[steam_data field="price" region="${selectedRegion}" currency="${selectedCurrency}"]`;
    }
    if (selectedField === 'trailer') {
      return `[steam_data field="trailer" autoplay="0" responsive="true"]`;
    }
    if (selectedField === 'requirements') {
      return `[steam_data field="requirements" type="recommended" layout="card"]`;
    }
    return `[steam_regional_matrix app_id="1091500" regions="TR,AR,UA,US"]`;
  };

  const currentShortcode = generateDynamicShortcode();

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  return (
    <section id="shortcodes" className="py-24 bg-[#0b0e14] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#171d25] border border-[#2a475e] text-xs font-bold text-blue-400 mb-4 tracking-wider uppercase">
            <Code2 className="w-3.5 h-3.5" />
            <span>{isRtl ? 'شورت‌کدها و المنتور' : 'Shortcodes & Elementor Showcase'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6">
            {isRtl ? (
              <>
                طراحی بی‌نهایت صفحات محصول با <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                  شورت‌کدها و ویجت المنتور
                </span>
              </>
            ) : (
              <>
                Flexible Shortcodes & Built-In <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                  Elementor Widgets
                </span>
              </>
            )}
          </h2>

          <p className="text-base sm:text-lg text-slate-400">
            {isRtl
              ? 'نمایش قیمت‌های منطقه‌ای، ویدیو تریلر، و مشخصات سخت‌افزاری بازی‌ها در هر کجای قالب ووکامرس یا برگه‌ساز المنتور تنها با یک کپی ساده.'
              : 'Effortlessly output regional prices, trailers, and system specs anywhere on your product pages using shortcodes or Elementor.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Shortcode Builder */}
          <div className="lg:col-span-7 bg-[#171d25] border border-[#2a475e] rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-[#2a475e] pb-4">
              <div className="flex items-center gap-2 text-white font-bold text-lg">
                <Terminal className="w-5 h-5 text-blue-400" />
                <span>{isRtl ? 'سازنده شورت‌کد زنده' : 'Interactive Shortcode Generator'}</span>
              </div>
              <span className="text-xs px-2.5 py-1 rounded bg-blue-500/20 text-blue-300 font-mono">
                [steam_data]
              </span>
            </div>

            {/* Field Type Selector */}
            <div className="space-y-2">
              <label className="text-xs text-slate-400 font-semibold block uppercase tracking-wider">
                {isRtl ? '۱. فیلد مورد نظر را انتخاب کنید:' : '1. Select Field Type:'}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <button
                  onClick={() => setSelectedField('price')}
                  className={`px-3 py-2 rounded-xl text-xs font-bold transition-all border ${
                    selectedField === 'price'
                      ? 'bg-blue-600 text-white border-blue-500 shadow-[0_0_15px_rgba(37,99,235,0.4)]'
                      : 'bg-[#0b0e14] text-slate-300 border-[#2a475e] hover:border-blue-500/50'
                  }`}
                >
                  Price Badge
                </button>
                <button
                  onClick={() => setSelectedField('trailer')}
                  className={`px-3 py-2 rounded-xl text-xs font-bold transition-all border ${
                    selectedField === 'trailer'
                      ? 'bg-blue-600 text-white border-blue-500 shadow-[0_0_15px_rgba(37,99,235,0.4)]'
                      : 'bg-[#0b0e14] text-slate-300 border-[#2a475e] hover:border-blue-500/50'
                  }`}
                >
                  Trailer Video
                </button>
                <button
                  onClick={() => setSelectedField('requirements')}
                  className={`px-3 py-2 rounded-xl text-xs font-bold transition-all border ${
                    selectedField === 'requirements'
                      ? 'bg-blue-600 text-white border-blue-500 shadow-[0_0_15px_rgba(37,99,235,0.4)]'
                      : 'bg-[#0b0e14] text-slate-300 border-[#2a475e] hover:border-blue-500/50'
                  }`}
                >
                  System Specs
                </button>
                <button
                  onClick={() => setSelectedField('matrix')}
                  className={`px-3 py-2 rounded-xl text-xs font-bold transition-all border ${
                    selectedField === 'matrix'
                      ? 'bg-blue-600 text-white border-blue-500 shadow-[0_0_15px_rgba(37,99,235,0.4)]'
                      : 'bg-[#0b0e14] text-slate-300 border-[#2a475e] hover:border-blue-500/50'
                  }`}
                >
                  Region Matrix
                </button>
              </div>
            </div>

            {/* Region & Currency Selector if field === 'price' */}
            {selectedField === 'price' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="space-y-1.5">
                  <label className="text-xs text-slate-400">Steam Region:</label>
                  <select
                    value={selectedRegion}
                    onChange={(e) => setSelectedRegion(e.target.value as any)}
                    className="w-full bg-[#0b0e14] text-white border border-[#2a475e] rounded-xl px-3 py-2 text-xs outline-none focus:border-blue-500"
                  >
                    <option value="TR">🇹🇷 Turkey (TRY)</option>
                    <option value="AR">🇦🇷 Argentina (LATAM USD)</option>
                    <option value="UA">🇺🇦 Ukraine (UAH)</option>
                    <option value="US">🇺🇸 United States (USD)</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs text-slate-400">Display Currency:</label>
                  <select
                    value={selectedCurrency}
                    onChange={(e) => setSelectedCurrency(e.target.value as any)}
                    className="w-full bg-[#0b0e14] text-white border border-[#2a475e] rounded-xl px-3 py-2 text-xs outline-none focus:border-blue-500"
                  >
                    <option value="IRT">Iranian Tomans (IRT)</option>
                    <option value="TRY">Raw Lira / USD</option>
                  </select>
                </div>
              </div>
            )}

            {/* Generated Code Block */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>{isRtl ? 'کد شورت‌کد تولید شده:' : 'Generated Shortcode Code:'}</span>
                <span className="text-cyan-400 font-mono">100% WordPress Ready</span>
              </div>

              <div className="relative bg-[#0b0e14] border border-[#2a475e] rounded-2xl p-4 font-mono text-sm text-blue-300 flex items-center justify-between gap-3 shadow-inner">
                <code className="break-all">{currentShortcode}</code>
                <button
                  onClick={() => handleCopy(currentShortcode)}
                  className="px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shrink-0 flex items-center gap-1.5 shadow-[0_0_15px_rgba(37,99,235,0.3)]"
                >
                  {copiedCode === currentShortcode ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Live Result Output Preview */}
            <div className="p-4 rounded-2xl bg-[#0b0e14] border border-[#2a475e] space-y-2">
              <span className="text-xs text-slate-400 font-mono block">Live Frontend Output Preview:</span>
              <div className="p-3 bg-[#171d25] rounded-xl border border-[#2a475e] text-sm text-white font-bold flex items-center justify-between">
                <span>
                  {selectedField === 'price' && `🇹🇷 Turkey Region Price: 1,672,300 تومان`}
                  {selectedField === 'trailer' && `🎬 Embedded 1080p Steam Official Trailer Player`}
                  {selectedField === 'requirements' && `💻 Recommended: Core i7-12700 | 16GB RAM | RTX 3080`}
                  {selectedField === 'matrix' && `📊 Regional Table: 🇹🇷 TR: ₺799 | 🇦🇷 AR: $29.99 | 🇺🇸 US: $59.99`}
                </span>
                <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-normal">
                  Rendered
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Elementor Widget Showcase */}
          <div className="lg:col-span-5 bg-[#171d25] border border-[#2a475e] rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 p-0.5 flex items-center justify-center text-white shrink-0">
                <Box className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  {isRtl ? 'ویجت اختصاصی المنتور' : 'Elementor Pro Regional Widget'}
                </h3>
                <span className="text-xs text-slate-400">
                  {isRtl ? 'کشتن و رها کردن (Drag & Drop)' : 'Native Elementor Drag & Drop Controls'}
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              {isRtl
                ? 'افزونه Steam Woo Sync همراه با ویجت‌های آماده برای المنتور عرضه می‌شود. شما می‌توانید جدول مقایسه قیمت ریجن‌ها، باکس سیستم درخواستی و پلیر ویدیو را بدون نوشتن حتی یک خط کد در برگه محصول قرار دهید.'
                : 'Steam Woo Sync ships with built-in Elementor widgets including "Steam Regional Prices" and "Steam Hardware Specs" for visual site building.'}
            </p>

            <div className="space-y-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-[#0b0e14] border border-[#2a475e] flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                <span className="text-xs text-white">
                  {isRtl ? 'سازگار با صفحه ساز Elementor Pro و Gutenberg' : 'Compatible with Elementor Pro & Gutenberg Block Editor'}
                </span>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#0b0e14] border border-[#2a475e] flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                <span className="text-xs text-white">
                  {isRtl ? 'استایل‌دهی کامل فونت، رنگ و دکمه‌های خرید' : 'Full Customization for Fonts, Colors, & Buy Buttons'}
                </span>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#0b0e14] border border-[#2a475e] flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                <span className="text-xs text-white">
                  {isRtl ? 'بارگذاری فوق سریع بدون کندی در سرعت سایت' : 'Ultra Lightweight JavaScript Engine with Zero Slowdown'}
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-[#2a475e]">
              <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-between">
                <span className="text-xs text-blue-300 font-mono">
                  [steam_data field="price" region="TR"]
                </span>
                <span className="text-[10px] px-2 py-1 rounded bg-blue-600 text-white font-bold uppercase tracking-wider">
                  Example Tag
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
