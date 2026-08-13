import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockSteamData';

interface TestimonialsProps {
  isRtl: boolean;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ isRtl }) => {
  return (
    <section className="py-24 bg-[#0b0e14] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#171d25] border border-[#2a475e] text-xs font-bold text-blue-400 mb-4 tracking-wider uppercase">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>{isRtl ? 'نظرات مدیران فروشگاه' : 'Store Owner Reviews'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6">
            {isRtl ? (
              <>
                رضایت بیش از ۱,۲۰۰ فروشگاه <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                  گیفت کارت و گیمینگ در ایران و جهان
                </span>
              </>
            ) : (
              <>
                Trusted by 1,200+ Active <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                  WooCommerce Game Key Retailers
                </span>
              </>
            )}
          </h2>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#171d25] border border-[#2a475e] rounded-3xl p-8 flex flex-col justify-between shadow-xl relative group hover:border-blue-500/50 transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-[#2a475e]/40 absolute top-6 right-6 pointer-events-none" />

              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mb-8 italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center gap-4 pt-4 border-t border-[#2a475e]">
                <img
                  src={t.avatar}
                  alt={t.author}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full object-cover border-2 border-blue-500"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-bold text-white">{t.author}</span>
                    {t.verified && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" title="Verified Customer" />
                    )}
                  </div>
                  <span className="text-xs text-slate-400 block">
                    {t.role} • <span className="text-blue-400">{t.storeName}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
