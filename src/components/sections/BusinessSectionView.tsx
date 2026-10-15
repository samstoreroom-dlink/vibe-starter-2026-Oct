import React from 'react';
import { Article, StockTicker } from '../../types/news';
import { TrendingUp, TrendingDown, ArrowRight, DollarSign, Activity } from 'lucide-react';

interface BusinessSectionViewProps {
  articles: Article[];
  tickers: StockTicker[];
  onSelectArticle: (article: Article) => void;
}

export const BusinessSectionView: React.FC<BusinessSectionViewProps> = ({
  articles,
  tickers,
  onSelectArticle,
}) => {
  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Header */}
      <div className="border-b-2 border-[#121212] pb-3 flex items-baseline justify-between">
        <div>
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight text-[#121212]">
            Business & Financial Markets
          </h2>
          <p className="font-nytserif text-xs text-[#5a5a5a] italic mt-0.5">
            Global economy, corporate earnings, technology trends and personal finance
          </p>
        </div>
        <span className="text-[11px] font-sans text-[#727272] uppercase tracking-wider hidden sm:inline">
          Markets Continuous Real-Time Feed
        </span>
      </div>

      {/* Financial Market Dashboard Table */}
      <div className="border border-[#e2e2e2] rounded-xs bg-slate-50/50 p-4 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Activity className="w-4 h-4 text-[#567b95]" />
            <span className="font-bold text-xs uppercase tracking-wider text-neutral-900 font-sans">
              Market Indices & Commodities
            </span>
          </div>
          <span className="text-[10px] text-neutral-500 font-mono">Quotes updated Oct. 16, 2024</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {tickers.map((t) => (
            <div
              key={t.symbol}
              className="bg-white p-3 rounded border border-neutral-200 hover:border-black transition font-sans text-xs space-y-1 shadow-2xs"
            >
              <div className="flex items-center justify-between text-neutral-500 text-[11px]">
                <span className="font-bold text-neutral-900">{t.symbol}</span>
                <span className={`font-semibold flex items-center ${t.isPositive ? 'text-emerald-700' : 'text-red-600'}`}>
                  {t.isPositive ? <TrendingUp className="w-3 h-3 mr-0.5" /> : <TrendingDown className="w-3 h-3 mr-0.5" />}
                  {t.change}
                </span>
              </div>
              <div className="font-mono text-base font-bold text-neutral-950">{t.value}</div>
              <div className="text-[9px] text-neutral-400">52W: {t.low52} - {t.high52}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Business Articles Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Lead Business story */}
        {articles[0] && (
          <div
            onClick={() => onSelectArticle(articles[0])}
            className="lg:col-span-8 space-y-4 cursor-pointer group lg:pr-6 hairline-r"
          >
            {articles[0].image && (
              <div className="aspect-16/9 rounded-xs overflow-hidden border border-[#e2e2e2] bg-neutral-100">
                <img
                  src={articles[0].image}
                  alt={articles[0].title}
                  className="w-full h-full object-cover group-hover:opacity-95 transition"
                />
              </div>
            )}
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#567b95] font-sans">
                {articles[0].category}
              </span>
              <h3 className="font-headline text-2xl md:text-3xl font-bold text-[#121212] group-hover:text-[#5a5a5a] transition leading-tight">
                {articles[0].title}
              </h3>
              <p className="font-nytserif text-base text-[#5a5a5a] leading-relaxed">
                {articles[0].summary}
              </p>
              <div className="text-xs font-sans text-[#727272] flex items-center gap-2 pt-1">
                <span>By {articles[0].author}</span>
                <span>•</span>
                <span>{articles[0].readTime}</span>
              </div>
            </div>
          </div>
        )}

        {/* Right Column: Other Business Briefs */}
        <div className="lg:col-span-4 space-y-5">
          <div className="text-xs font-bold uppercase tracking-wider text-[#121212] pb-1 border-b border-[#121212]">
            Industry & Economy
          </div>
          {articles.slice(1).map((art) => (
            <div
              key={art.id}
              onClick={() => onSelectArticle(art)}
              className="space-y-1.5 pb-4 hairline-b cursor-pointer group"
            >
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#727272] font-sans">
                {art.category}
              </span>
              <h4 className="font-headline font-bold text-base text-[#121212] group-hover:underline leading-snug">
                {art.title}
              </h4>
              <p className="font-nytserif text-xs text-[#5a5a5a] line-clamp-2">
                {art.summary}
              </p>
              <span className="text-[11px] text-[#727272] font-sans block">{art.readTime}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
