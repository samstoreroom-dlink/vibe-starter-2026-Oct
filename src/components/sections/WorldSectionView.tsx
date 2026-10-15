import React from 'react';
import { Article } from '../../types/news';
import { Globe2, ArrowRight } from 'lucide-react';

interface WorldSectionViewProps {
  articles: Article[];
  onSelectArticle: (article: Article) => void;
}

export const WorldSectionView: React.FC<WorldSectionViewProps> = ({
  articles,
  onSelectArticle,
}) => {
  const lead = articles[0];
  const others = articles.slice(1);

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Header */}
      <div className="border-b-2 border-[#121212] pb-3 flex items-baseline justify-between">
        <div>
          <div className="flex items-center space-x-2">
            <Globe2 className="w-4 h-4 text-[#567b95]" />
            <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight text-[#121212]">
              World News
            </h2>
          </div>
          <p className="font-nytserif text-xs text-[#5a5a5a] italic mt-0.5">
            International reporting from correspondents in over 150 countries
          </p>
        </div>
        <div className="flex space-x-3 text-xs font-sans text-neutral-600 font-medium">
          <span className="hover:underline cursor-pointer">Middle East</span>
          <span>•</span>
          <span className="hover:underline cursor-pointer">Europe</span>
          <span>•</span>
          <span className="hover:underline cursor-pointer">Asia Pacific</span>
          <span>•</span>
          <span className="hover:underline cursor-pointer">Americas</span>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {lead && (
          <div
            onClick={() => onSelectArticle(lead)}
            className="lg:col-span-8 space-y-4 cursor-pointer group lg:pr-6 hairline-r"
          >
            {lead.image && (
              <figure className="space-y-1">
                <div className="aspect-16/9 rounded-xs overflow-hidden border border-[#e2e2e2] bg-neutral-100">
                  <img
                    src={lead.image}
                    alt={lead.title}
                    className="w-full h-full object-cover group-hover:opacity-95 transition"
                  />
                </div>
                {lead.imageCaption && (
                  <figcaption className="text-[11px] text-[#727272] font-sans">
                    {lead.imageCaption}
                  </figcaption>
                )}
              </figure>
            )}
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-red-700 font-sans">
                {lead.category}
              </span>
              <h3 className="font-headline text-2xl md:text-3xl font-bold text-[#121212] group-hover:text-[#5a5a5a] transition leading-tight">
                {lead.title}
              </h3>
              <p className="font-nytserif text-base text-[#5a5a5a] leading-relaxed">
                {lead.summary}
              </p>
              <div className="text-xs font-sans text-[#727272] flex items-center gap-2 pt-1">
                <span>By {lead.author}</span>
                <span>•</span>
                <span>{lead.readTime}</span>
              </div>
            </div>
          </div>
        )}

        <div className="lg:col-span-4 space-y-6">
          <div className="text-xs font-bold uppercase tracking-wider text-[#121212] pb-1 border-b border-[#121212]">
            Global Dispatches
          </div>
          {others.map((art) => (
            <div
              key={art.id}
              onClick={() => onSelectArticle(art)}
              className="space-y-2 pb-5 hairline-b cursor-pointer group"
            >
              {art.image && (
                <div className="aspect-16/9 rounded-xs overflow-hidden border border-[#e2e2e2] bg-neutral-100 mb-2">
                  <img src={art.image} alt={art.title} className="w-full h-full object-cover" />
                </div>
              )}
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
