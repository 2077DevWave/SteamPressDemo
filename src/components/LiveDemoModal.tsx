import React, { useState } from 'react';
import {
  X,
  Search,
  Check,
  RefreshCw,
  ShoppingBag,
  Sparkles,
  Gamepad2,
  Play,
  Globe2,
  Sliders,
  Database,
  ArrowRight,
  ExternalLink,
  Code
} from 'lucide-react';
import { MOCK_GAMES } from '../data/mockSteamData';
import { CurrencyRates } from '../types';

interface LiveDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  currencyRates: CurrencyRates;
  isRtl: boolean;
}

export const LiveDemoModal: React.FC<LiveDemoModalProps> = ({
  isOpen,
  onClose,
  currencyRates,
  isRtl,
}) => {
  const [selectedGameId, setSelectedGameId] = useState<number>(1091500);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegions, setSelectedRegions] = useState<string[]>(['TR', 'AR', 'US']);
  const [margin, setMargin] = useState<number>(15);
  const [importing, setImporting] = useState(false);
  const [imported, setImported] = useState(false);
  const [activePreviewTab, setActivePreviewTab] = useState<'admin' | 'storefront' | 'shortcodes'>('admin');

  if (!isOpen) return null;

  const selectedGame = MOCK_GAMES.find((g) => g.appId === selectedGameId) || MOCK_GAMES[0];

  const toggleRegion = (regionCode: string) => {
    if (selectedRegions.includes(regionCode)) {
      if (selectedRegions.length > 1) {
        setSelectedRegions(selectedRegions.filter((r) => r !== regionCode));
      }
    } else {
      setSelectedRegions([...selectedRegions, regionCode]);
    }
  };

  const handleRunImport = () => {
    setImporting(true);
    setImported(false);
    setTimeout(() => {
      setImporting(false);
      setImported(true);
      setActivePreviewTab('storefront');
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-[#171d25] border border-[#2a475e] rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header Bar */}
        <div className="bg-[#0b0e14] px-6 py-4 border-b border-[#2a475e] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold">
              <Gamepad2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span>Steam Woo Sync v2.4</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono">
                  Live Admin Simulator
                </span>
              </h3>
              <span className="text-xs text-slate-400">
                {isRtl ? 'دموی تعاملی پنل مدیریت ووکامرس' : 'Interactive WordPress Plugin Demo'}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Nav Tabs */}
            <div className="hidden sm:flex bg-[#171d25] p-1 rounded-xl border border-[#2a475e] text-xs">
              <button
                onClick={() => setActivePreviewTab('admin')}
                className={`px-3 py-1 rounded-lg font-bold transition-all ${
                  activePreviewTab === 'admin' ? 'bg-blue-600 text-white' : 'text-slate-300'
                }`}
              >
                {isRtl ? '۱. تنظیمات ایمپورت' : '1. Plugin Config'}
              </button>
              <button
                onClick={() => setActivePreviewTab('storefront')}
                className={`px-3 py-1 rounded-lg font-bold transition-all ${
                  activePreviewTab === 'storefront' ? 'bg-blue-600 text-white' : 'text-slate-300'
                }`}
              >
                {isRtl ? '۲. پیش‌نمایش فروشگاه' : '2. Woo Product Page'}
              </button>
              <button
                onClick={() => setActivePreviewTab('shortcodes')}
                className={`px-3 py-1 rounded-lg font-bold transition-all ${
                  activePreviewTab === 'shortcodes' ? 'bg-blue-600 text-white' : 'text-slate-300'
                }`}
              >
                {isRtl ? '۳. شورت‌کدها' : '3. Generated Codes'}
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-[#0b0e14] border border-[#2a475e] text-slate-300 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {activePreviewTab === 'admin' && (
            <div className="space-y-6">
              {/* Game Search Box */}
              <div className="space-y-2">
                <label className="text-xs text-slate-400 font-bold block uppercase tracking-wider">
                  {isRtl ? '۱. انتخاب یا جستجوی بازی استیم:' : '1. Choose Game to Import:'}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {MOCK_GAMES.map((game) => (
                    <div
                      key={game.appId}
                      onClick={() => {
                        setSelectedGameId(game.appId);
                        setImported(false);
                      }}
                      className={`p-3 rounded-2xl border cursor-pointer flex items-center gap-3 transition-all ${
                        selectedGameId === game.appId
                          ? 'bg-[#0b0e14] border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.3)]'
                          : 'bg-[#0b0e14]/60 border-[#2a475e] hover:border-blue-500/50'
                      }`}
                    >
                      <img
                        src={game.headerImage}
                        alt={game.title}
                        referrerPolicy="no-referrer"
                        className="w-14 h-14 rounded-xl object-cover"
                      />
                      <div>
                        <h4 className="text-sm font-bold text-white">{game.title}</h4>
                        <span className="text-xs text-blue-400 font-mono">AppID: {game.appId}</span>
                        <span className="text-[10px] text-slate-400 block mt-0.5">{game.developer}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Target Regions Checklist */}
              <div className="space-y-2">
                <label className="text-xs text-slate-400 font-bold block uppercase tracking-wider">
                  {isRtl ? '۲. انتخاب ریجن‌های مورد نظر:' : '2. Enabled Regions:'}
                </label>
                <div className="flex flex-wrap gap-2">
                  {selectedGame.regionalPrices.map((p) => {
                    const isSelected = selectedRegions.includes(p.regionCode);
                    return (
                      <button
                        key={p.regionCode}
                        onClick={() => toggleRegion(p.regionCode)}
                        className={`px-3.5 py-2 rounded-xl text-xs font-bold border flex items-center gap-2 transition-all ${
                          isSelected
                            ? 'bg-blue-600 text-white border-blue-500 shadow-[0_0_10px_rgba(37,99,235,0.3)]'
                            : 'bg-[#0b0e14] text-slate-300 border-[#2a475e]'
                        }`}
                      >
                        <span>{p.flag}</span>
                        <span>{p.regionName}</span>
                        <span className="font-mono">({p.symbol}{p.rawPrice})</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Margin & Rate */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-[#0b0e14] border border-[#2a475e] space-y-2">
                  <div className="flex justify-between text-xs font-bold text-white">
                    <span>Store Profit Margin:</span>
                    <span className="text-emerald-400">+{margin}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="40"
                    value={margin}
                    onChange={(e) => setMargin(Number(e.target.value))}
                    className="w-full accent-blue-500 cursor-pointer"
                  />
                </div>

                <div className="p-4 rounded-2xl bg-[#0b0e14] border border-[#2a475e] flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-400 block">Exchange API:</span>
                    <span className="text-xs font-bold text-white">Nobitex API (Live)</span>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 font-bold">
                    1 TRY = {currencyRates.tryIrt.toLocaleString()} IRT
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={handleRunImport}
                  disabled={importing}
                  className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-black text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.4)] disabled:opacity-50 transition-all"
                >
                  {importing ? (
                    <>
                      <RefreshCw className="w-5 h-5 animate-spin" />
                      <span>Fetching Steam Metadata & Converting Regional Prices...</span>
                    </>
                  ) : (
                    <>
                      <Database className="w-5 h-5" />
                      <span>{isRtl ? 'اجرای تست ایمپورت محصول به ووکامرس' : 'Run Test Product Import'}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {activePreviewTab === 'storefront' && (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between">
                <span className="text-xs text-emerald-400 font-bold flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  <span>Product successfully imported to WooCommerce! Here is your live customer product page:</span>
                </span>
                <button
                  onClick={() => setActivePreviewTab('admin')}
                  className="text-xs text-blue-400 underline"
                >
                  Edit Settings
                </button>
              </div>

              {/* Simulated WooCommerce Product Page */}
              <div className="bg-[#0b0e14] border border-[#2a475e] rounded-2xl p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                  {/* Product Poster */}
                  <div className="md:col-span-5">
                    <img
                      src={selectedGame.headerImage}
                      alt={selectedGame.title}
                      referrerPolicy="no-referrer"
                      className="w-full rounded-2xl object-cover shadow-xl border border-[#2a475e]"
                    />
                  </div>

                  {/* Product Details & Regional Variations */}
                  <div className="md:col-span-7 space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-mono">
                        AppID: {selectedGame.appId}
                      </span>
                      <span className="text-xs text-slate-400">Developer: {selectedGame.developer}</span>
                    </div>

                    <h2 className="text-2xl font-extrabold text-white">{selectedGame.title}</h2>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {selectedGame.description}
                    </p>

                    {/* Regional Dropdown */}
                    <div className="space-y-2 pt-2 border-t border-[#2a475e]">
                      <label className="text-xs text-white font-bold block">
                        Select Steam Region / Key Variety:
                      </label>
                      <select className="w-full bg-[#171d25] text-white border border-blue-500 rounded-xl px-3 py-2.5 text-xs font-bold outline-none">
                        {selectedGame.regionalPrices
                          .filter((p) => selectedRegions.includes(p.regionCode))
                          .map((p) => {
                            let priceIrt = 0;
                            if (p.currency === 'TRY') priceIrt = Math.round(p.rawPrice * currencyRates.tryIrt * (1 + margin / 100));
                            else priceIrt = Math.round(p.rawPrice * currencyRates.usdIrt * (1 + margin / 100));

                            return (
                              <option key={p.regionCode}>
                                {p.flag} {p.regionName} — {priceIrt.toLocaleString()} تومان ({p.symbol}{p.rawPrice})
                              </option>
                            );
                          })}
                      </select>
                    </div>

                    {/* Buy Button */}
                    <div className="pt-2 flex items-center gap-3">
                      <button className="flex-1 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all">
                        <ShoppingBag className="w-4 h-4" />
                        <span>افزودن به سبد خرید</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Specs Tab */}
                <div className="border-t border-[#2a475e] pt-4 space-y-2">
                  <h4 className="text-xs font-bold text-blue-400">Recommended System Requirements (Auto-Extracted):</h4>
                  <div className="p-3 bg-[#171d25] rounded-xl font-mono text-xs text-slate-300 border border-[#2a475e]">
                    {selectedGame.requirements.recommended}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activePreviewTab === 'shortcodes' && (
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-white">Generated Shortcodes for This Game:</h4>
              <div className="space-y-2">
                <div className="p-3 bg-[#0b0e14] rounded-xl border border-[#2a475e] font-mono text-xs text-blue-400">
                  [steam_data field="price" region="TR" app_id="{selectedGame.appId}"]
                </div>
                <div className="p-3 bg-[#0b0e14] rounded-xl border border-[#2a475e] font-mono text-xs text-blue-400">
                  [steam_data field="trailer" app_id="{selectedGame.appId}"]
                </div>
                <div className="p-3 bg-[#0b0e14] rounded-xl border border-[#2a475e] font-mono text-xs text-blue-400">
                  [steam_regional_matrix app_id="{selectedGame.appId}"]
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
