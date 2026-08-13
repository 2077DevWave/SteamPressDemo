import React, { useState } from 'react';
import { Calculator, DollarSign, Percent, TrendingUp, RefreshCw, ShoppingCart, Sparkles, Check } from 'lucide-react';
import { MOCK_GAMES } from '../data/mockSteamData';
import { CurrencyRates } from '../types';

interface LiveCalculatorProps {
  currencyRates: CurrencyRates;
  isRtl: boolean;
  onOpenLiveDemo: () => void;
}

export const LiveCalculator: React.FC<LiveCalculatorProps> = ({
  currencyRates,
  isRtl,
  onOpenLiveDemo,
}) => {
  const [selectedGameId, setSelectedGameId] = useState<number>(1091500); // Cyberpunk 2077
  const [selectedRegionCode, setSelectedRegionCode] = useState<'TR' | 'AR' | 'UA' | 'US'>('TR');
  const [profitMargin, setProfitMargin] = useState<number>(15); // +15%
  const [customLiraRate, setCustomLiraRate] = useState<number>(currencyRates.tryIrt);

  const selectedGame = MOCK_GAMES.find((g) => g.appId === selectedGameId) || MOCK_GAMES[0];
  const selectedRegion =
    selectedGame.regionalPrices.find((r) => r.regionCode === selectedRegionCode) ||
    selectedGame.regionalPrices[0];

  // Raw Steam Regional Price
  const rawSteamPrice = selectedRegion.rawPrice;

  // Calculate Base Cost in Tomans / IRT
  let baseCostIrt = 0;
  if (selectedRegion.currency === 'TRY') {
    baseCostIrt = Math.round(rawSteamPrice * customLiraRate);
  } else if (selectedRegion.currency === 'USD') {
    baseCostIrt = Math.round(rawSteamPrice * currencyRates.usdIrt);
  } else if (selectedRegion.currency === 'UAH') {
    baseCostIrt = Math.round(rawSteamPrice * currencyRates.uahIrt);
  } else {
    baseCostIrt = Math.round(rawSteamPrice * currencyRates.usdIrt);
  }

  // Profit markup amount in Tomans
  const profitAmountIrt = Math.round(baseCostIrt * (profitMargin / 100));

  // Final WooCommerce listing price in Tomans
  const finalPriceIrt = baseCostIrt + profitAmountIrt;

  return (
    <section id="calculator" className="py-24 bg-[#0b0e14] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#171d25] border border-[#2a475e] text-xs font-bold text-blue-400 mb-4 tracking-wider uppercase">
            <Calculator className="w-3.5 h-3.5" />
            <span>{isRtl ? 'محاسبه‌گر زنده سود فروشگاه' : 'Live Store Profit Calculator'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6">
            {isRtl ? (
              <>
                تست آنلاین محاسبه قیمت و <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  سود خالص محصول ووکامرس
                </span>
              </>
            ) : (
              <>
                Test Live Pricing & Net Profit <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  For Your WooCommerce Store
                </span>
              </>
            )}
          </h2>

          <p className="text-base sm:text-lg text-slate-400">
            {isRtl
              ? 'بازی دلخواه، ریجن خرید و درصد سود فروشگاه خود را تغییر دهید تا فرمول محاسبه قیمت لیر به تومان را به صورت زنده مشاهده کنید.'
              : 'Select any game, pick a region, and slide your target profit margin to watch real-time conversion into Iranian Tomans.'}
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="bg-[#171d25] border border-[#2a475e] rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Controls Input Side */}
            <div className="lg:col-span-7 space-y-6">
              {/* Game Selector */}
              <div className="space-y-2">
                <label className="text-xs text-slate-400 font-bold block uppercase tracking-wider">
                  {isRtl ? '۱. انتخاب بازی از دیتابیس استیم:' : '1. Select Steam Game:'}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {MOCK_GAMES.map((game) => (
                    <button
                      key={game.appId}
                      onClick={() => setSelectedGameId(game.appId)}
                      className={`p-3 rounded-2xl border text-left flex items-center gap-3 transition-all ${
                        selectedGameId === game.appId
                          ? 'bg-[#0b0e14] border-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.3)]'
                          : 'bg-[#0b0e14]/60 border-[#2a475e] text-slate-300 hover:border-blue-500/50'
                      }`}
                    >
                      <img
                        src={game.headerImage}
                        alt={game.title}
                        referrerPolicy="no-referrer"
                        className="w-12 h-12 rounded-xl object-cover shrink-0"
                      />
                      <div className="overflow-hidden">
                        <span className="text-xs font-bold block truncate">{game.title}</span>
                        <span className="text-[10px] text-slate-400 block font-mono">AppID: {game.appId}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Region Selector */}
              <div className="space-y-2">
                <label className="text-xs text-slate-400 font-bold block uppercase tracking-wider">
                  {isRtl ? '۲. انتخاب ریجن استیم:' : '2. Select Steam Region:'}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {selectedGame.regionalPrices.map((price) => (
                    <button
                      key={price.regionCode}
                      onClick={() => setSelectedRegionCode(price.regionCode as any)}
                      className={`p-2.5 rounded-2xl border text-center transition-all ${
                        selectedRegionCode === price.regionCode
                          ? 'bg-blue-600 text-white border-blue-500 font-bold shadow-[0_0_15px_rgba(37,99,235,0.4)]'
                          : 'bg-[#0b0e14] text-slate-300 border-[#2a475e] hover:border-blue-500/40'
                      }`}
                    >
                      <span className="text-xs block">{price.flag} {price.regionCode}</span>
                      <span className="text-xs font-extrabold block mt-0.5">
                        {price.symbol}{price.rawPrice}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Profit Margin Slider */}
              <div className="space-y-2 p-4 rounded-2xl bg-[#0b0e14] border border-[#2a475e]">
                <div className="flex items-center justify-between text-xs font-bold text-white">
                  <span>{isRtl ? '۳. درصد سود خالص فروشگاه:' : '3. Store Target Profit Margin:'}</span>
                  <span className="text-emerald-400 font-extrabold text-base">+{profitMargin}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="50"
                  step="1"
                  value={profitMargin}
                  onChange={(e) => setProfitMargin(Number(e.target.value))}
                  className="w-full accent-blue-500 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                  <span>0% (Cost Price)</span>
                  <span>+15% (Standard)</span>
                  <span>+30% (High)</span>
                  <span>+50% (Max)</span>
                </div>
              </div>

              {/* Live Nobitex Rate adjustment */}
              <div className="flex flex-col sm:flex-row items-center justify-between p-3.5 rounded-2xl bg-[#0b0e14] border border-[#2a475e] gap-3">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <RefreshCw className="w-4 h-4 text-emerald-400 animate-spin" />
                  <span>{isRtl ? 'نرخ همگام‌سازی صرافی نوبیتکس:' : 'Nobitex Auto Sync Rate:'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-emerald-400 font-bold">
                    1 TRY = {customLiraRate.toLocaleString()} تومان
                  </span>
                </div>
              </div>
            </div>

            {/* Live Output Card Side */}
            <div className="lg:col-span-5 bg-[#0b0e14] border border-blue-500/50 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 px-3.5 py-1 bg-blue-600 text-white font-black text-[10px] rounded-bl-2xl uppercase tracking-wider">
                WooCommerce Output
              </div>

              <div className="text-xs text-slate-400 font-mono mb-2">Live Store Calculation</div>
              <h3 className="text-xl font-bold text-white mb-6">
                {selectedGame.title}
              </h3>

              <div className="space-y-4 border-t border-b border-[#2a475e] py-4">
                <div className="flex justify-between text-xs text-slate-300">
                  <span>{isRtl ? 'قیمت خام استیم:' : 'Raw Steam Price:'}</span>
                  <span className="font-mono text-white font-bold">
                    {selectedRegion.symbol}{selectedRegion.rawPrice} {selectedRegion.currency}
                  </span>
                </div>

                <div className="flex justify-between text-xs text-slate-300">
                  <span>{isRtl ? 'قیمت تمام شده (خرید):' : 'Estimated Base Cost:'}</span>
                  <span className="font-mono text-blue-400 font-bold">
                    {baseCostIrt.toLocaleString()} تومان
                  </span>
                </div>

                <div className="flex justify-between text-xs text-emerald-400 font-bold">
                  <span>{isRtl ? `مبلغ سود خالص (+${profitMargin}٪):` : `Store Net Profit (+${profitMargin}%):`}</span>
                  <span className="font-mono">
                    +{profitAmountIrt.toLocaleString()} تومان
                  </span>
                </div>
              </div>

              {/* Final Listing Price */}
              <div className="pt-6 text-center">
                <span className="text-xs text-slate-400 block mb-1">
                  {isRtl ? 'قیمت نهایی فروش در ووکامرس:' : 'Final Listing Price on WooCommerce:'}
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent font-mono my-2">
                  {finalPriceIrt.toLocaleString()} تومان
                </div>

                <button
                  onClick={onOpenLiveDemo}
                  className="w-full mt-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>{isRtl ? 'مشاهده پیش‌نمایش در دموی زنده' : 'View WooCommerce Demo Product'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
