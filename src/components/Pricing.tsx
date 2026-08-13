import React, { useState } from 'react';
import { Check, ShieldCheck, Zap, Download, Sparkles, HelpCircle, ArrowRight } from 'lucide-react';
import { PRICING_PLANS } from '../data/mockSteamData';

interface PricingProps {
  isRtl: boolean;
  onSelectPlan: (planId: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ isRtl, onSelectPlan }) => {
  const [selectedPlanId, setSelectedPlanId] = useState<string>('pro');

  return (
    <section id="pricing" className="py-24 bg-[#0b0e14] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#171d25] border border-[#2a475e] text-xs font-bold text-blue-400 mb-4 tracking-wider uppercase">
            <Zap className="w-3.5 h-3.5" />
            <span>{isRtl ? 'پلن‌های لایسنس و خرید' : 'Transparent Pricing & Licensing'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6">
            {isRtl ? (
              <>
                یک بار خرید، بدون هزینه ماهانه <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                  دانلود آنی فایل افزونه و لایسنس
                </span>
              </>
            ) : (
              <>
                Pay Once, Use Forever <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                  Instant ZIP Download & Lifetime License
                </span>
              </>
            )}
          </h2>

          <p className="text-base sm:text-lg text-slate-400">
            {isRtl
              ? 'تمام پلن‌ها شامل به‌روزرسانی‌های خودکار، اتصال لایو به صرافی نوبیتکس و پشتیبانی اختصاصی می‌باشند.'
              : 'Choose the license tier that fits your store network. All plans include 1-click automatic updates and live Nobitex API access.'}
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {PRICING_PLANS.map((plan) => {
            const isPopular = plan.popular;
            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? 'bg-[#171d25] border-2 border-blue-500 shadow-[0_0_30px_rgba(37,99,235,0.2)] transform lg:-translate-y-2'
                    : 'bg-[#171d25] border border-[#2a475e] hover:border-blue-500/50 shadow-xl'
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-600 text-white font-black text-xs rounded-full shadow-lg uppercase tracking-wider flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{isRtl ? 'پیشنهاد ویژه فروشندگان' : 'Most Popular Choice'}</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                    <span className="text-xs text-slate-400 font-mono">{plan.billingPeriod}</span>
                  </div>

                  <p className="text-xs text-slate-400 mb-6 min-h-[36px]">
                    {plan.description}
                  </p>

                  <div className="flex items-baseline gap-2 mb-8 border-b border-[#2a475e] pb-6">
                    <span className="text-5xl font-black text-white tracking-tight">${plan.price}</span>
                    <span className="text-xs text-slate-400">USD / One-time</span>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3.5 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs text-slate-300">
                        <div className="w-4 h-4 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3" />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onSelectPlan(plan.id)}
                  className={`w-full py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg ${
                    isPopular
                      ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]'
                      : 'bg-[#0b0e14] hover:bg-blue-600 hover:text-white border border-[#2a475e] text-white'
                  }`}
                >
                  <Download className="w-4 h-4" />
                  <span>{plan.ctaText}</span>
                  <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
                </button>
              </div>
            );
          })}
        </div>

        {/* Guarantee & Trust Badge */}
        <div className="max-w-3xl mx-auto p-6 rounded-3xl bg-[#171d25] border border-[#2a475e] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-8 h-8 text-emerald-400" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">
                {isRtl ? 'ضمانت بازگشت وجه ۱۴ روزه بدون قید و شرط' : 'Risk-Free 14-Day Money Back Guarantee'}
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                {isRtl
                  ? 'اگر افزونه با فروشگاه شما سازگار نبود یا ناراضی بودید، تا ۱۴ روز تمام وجه شما بدون سوال عودت داده می‌شود.'
                  : 'If Steam Woo Sync does not perform as promised on your store, we will refund your purchase 100% within 14 days.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
