import React from 'react';
import { WirecutterReview } from '../../types/news';
import { Award, Check, Sparkles, Clock, ShieldCheck, ArrowRight } from 'lucide-react';

interface WirecutterSectionViewProps {
  reviews: WirecutterReview[];
}

export const WirecutterSectionView: React.FC<WirecutterSectionViewProps> = ({ reviews }) => {
  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Wirecutter Header */}
      <div className="border-b-2 border-[#121212] pb-3 flex items-baseline justify-between">
        <div>
          <div className="flex items-center space-x-2">
            <span className="font-bold text-xs uppercase tracking-widest text-emerald-900 bg-emerald-100 px-2 py-0.5 rounded">
              Wirecutter
            </span>
            <span className="text-xs text-[#727272]">• Product reviews you can trust</span>
          </div>
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight text-[#121212] mt-1">
            The Best Gear, Lab Tested & Verified
          </h2>
        </div>
        <span className="text-[11px] font-sans text-[#727272] uppercase tracking-wider hidden sm:inline">
          Independent Testing Laboratory
        </span>
      </div>

      {/* Reviews list */}
      <div className="space-y-12">
        {reviews.map((rev) => (
          <article
            key={rev.id}
            className="border border-[#e2e2e2] rounded-xs p-6 bg-white space-y-6 shadow-2xs"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-7 space-y-3">
                <div className="flex items-center space-x-3 text-xs font-sans text-[#727272]">
                  <span className="font-semibold text-neutral-900">{rev.category}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    Tested for {rev.testedHours} hours
                  </span>
                  <span>•</span>
                  <span>Updated {rev.updatedDate}</span>
                </div>

                <h3 className="font-headline text-2xl md:text-3xl font-bold text-[#121212] leading-snug">
                  {rev.title}
                </h3>

                <p className="font-nytserif text-sm text-[#5a5a5a] leading-relaxed">
                  {rev.leadSummary}
                </p>
                <div className="text-xs font-sans text-[#727272]">By {rev.author}</div>
              </div>

              <div className="lg:col-span-5">
                <div className="aspect-16/10 rounded overflow-hidden border border-[#e2e2e2] bg-neutral-100">
                  <img src={rev.image} alt={rev.title} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Top Picks comparison cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 hairline-t">
              {/* Our Pick */}
              <div className="p-4 bg-emerald-50/50 border border-emerald-200 rounded space-y-2">
                <div className="flex items-center justify-between">
                  <span className="bg-emerald-700 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                    {rev.topPick.badge}
                  </span>
                  <span className="font-bold text-base text-neutral-900">{rev.topPick.price}</span>
                </div>
                <h4 className="font-headline font-bold text-lg text-neutral-900">
                  {rev.topPick.name}
                </h4>
                <p className="font-nytserif text-xs text-neutral-700 leading-relaxed">
                  {rev.topPick.whyWeLikeIt}
                </p>
                <ul className="space-y-1 text-[11px] font-sans text-neutral-600 pt-1">
                  {rev.topPick.pros.map((p, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Budget Pick */}
              <div className="p-4 bg-neutral-50 border border-neutral-200 rounded space-y-2">
                <div className="flex items-center justify-between">
                  <span className="bg-neutral-800 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                    {rev.budgetPick.badge}
                  </span>
                  <span className="font-bold text-base text-neutral-900">{rev.budgetPick.price}</span>
                </div>
                <h4 className="font-headline font-bold text-lg text-neutral-900">
                  {rev.budgetPick.name}
                </h4>
                <p className="font-nytserif text-xs text-neutral-700 leading-relaxed">
                  {rev.budgetPick.whyWeLikeIt}
                </p>
                <ul className="space-y-1 text-[11px] font-sans text-neutral-600 pt-1">
                  {rev.budgetPick.pros.map((p, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-neutral-700 shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
