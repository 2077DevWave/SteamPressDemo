import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { FAQ_ITEMS } from '../data/mockSteamData';

interface FaqProps {
  isRtl: boolean;
}

export const Faq: React.FC<FaqProps> = ({ isRtl }) => {
  const [openId, setOpenId] = useState<string>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? '' : id);
  };

  return (
    <section id="faq" className="py-24 bg-[#0b0e14] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#171d25] border border-[#2a475e] text-xs font-bold text-blue-400 mb-4 tracking-wider uppercase">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{isRtl ? 'سوالات متداول' : 'Frequently Asked Questions'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            {isRtl ? 'پاسخ به سوالات شما' : 'Got Questions? We Have Answers'}
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            {isRtl
              ? 'هر آنچه باید درباره راه‌اندازی، اتصال به نوبیتکس و امنیت لایسنس استیم وو سینک بدانید.'
              : 'Everything you need to know about Steam API limits, Nobitex setup, proxies, and licensing.'}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#171d25] border-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.15)]'
                    : 'bg-[#171d25] border-[#2a475e] hover:border-blue-500/50'
                }`}
              >
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-white"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs px-2.5 py-1 rounded-lg bg-[#0b0e14] text-blue-400 border border-[#2a475e] font-mono font-normal shrink-0">
                      {item.category}
                    </span>
                    <span>{item.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-blue-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm text-slate-300 leading-relaxed border-t border-[#2a475e] animate-in fade-in duration-200">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
