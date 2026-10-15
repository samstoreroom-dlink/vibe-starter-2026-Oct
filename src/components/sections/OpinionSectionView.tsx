import React from 'react';
import { Article } from '../../types/news';
import { MessageSquare, ArrowRight, Sparkles } from 'lucide-react';

interface OpinionSectionViewProps {
  opinions: Article[];
  onSelectArticle: (article: Article) => void;
}

export const OpinionSectionView: React.FC<OpinionSectionViewProps> = ({
  opinions,
  onSelectArticle,
}) => {
  const leadOpinion = opinions[0];
  const otherOpinions = opinions.slice(1);

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Section Header */}
      <div className="border-b-2 border-[#121212] pb-2 flex items-baseline justify-between">
        <div>
          <h2 className="font-headline text-3xl font-bold tracking-tight text-[#121212]">Opinion</h2>
          <p className="font-nytserif text-xs text-[#5a5a5a] italic mt-0.5">
            Columns, Guest Essays and Editorials from around the world
          </p>
        </div>
        <span className="text-[11px] font-sans uppercase tracking-widest text-[#727272]">
          Editorials & Commentary
        </span>
      </div>

      {/* Opinion Broadsheet Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Lead Opinion Column */}
        {leadOpinion && (
          <div
            onClick={() => onSelectArticle(leadOpinion)}
            className="lg:col-span-7 space-y-4 cursor-pointer group lg:pr-6 hairline-r"
          >
            <div className="flex items-center space-x-2 text-xs font-sans">
              <span className="font-bold uppercase tracking-wider text-red-700 bg-red-50 px-2 py-0.5 rounded">
                {leadOpinion.authorRole || 'Guest Essay'}
              </span>
              <span className="text-[#727272]">•</span>
              <span className="font-semibold text-neutral-800">By {leadOpinion.author}</span>
            </div>

            <h3 className="font-headline text-3xl md:text-4xl font-bold text-[#121212] headline-leading group-hover:text-[#5a5a5a] transition">
              {leadOpinion.title}
            </h3>

            <p className="font-nytserif text-lg text-[#5a5a5a] leading-relaxed">
              {leadOpinion.summary}
            </p>

            <div className="flex items-center justify-between pt-2 hairline-t text-xs font-sans text-[#727272]">
              <span>{leadOpinion.readTime}</span>
              <span className="flex items-center gap-1 group-hover:text-black">
                Read full column <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        )}

        {/* Columnists Roster */}
        <div className="lg:col-span-5 space-y-6">
          <div className="text-xs font-bold uppercase tracking-wider text-[#121212] pb-1 border-b border-[#121212]">
            Featured Columnists
          </div>

          <div className="space-y-5">
            {otherOpinions.map((op) => (
              <div
                key={op.id}
                onClick={() => onSelectArticle(op)}
                className="flex items-start space-x-4 cursor-pointer group pb-4 hairline-b"
              >
                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border border-[#e2e2e2] bg-slate-100 flex items-center justify-center font-serif font-bold text-sm text-[#5a5a5a]">
                  {op.authorAvatar ? (
                    <img src={op.authorAvatar} alt={op.author} className="w-full h-full object-cover" />
                  ) : (
                    op.authorInitials || op.author.charAt(0)
                  )}
                </div>

                <div className="flex-1 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#727272] block">
                    {op.authorRole || 'Columnist'} • {op.author}
                  </span>
                  <h4 className="font-headline font-bold text-base text-[#121212] group-hover:underline leading-snug">
                    {op.title}
                  </h4>
                  <p className="font-nytserif text-xs text-[#5a5a5a] line-clamp-2">
                    {op.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Editorial Board Box */}
          <div className="p-4 bg-neutral-50 border border-[#e2e2e2] rounded-xs space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#121212] block">
              The Editorial Board
            </span>
            <p className="font-headline font-bold text-sm text-[#121212] leading-snug hover:underline cursor-pointer">
              Protecting Civil Liberties Amid Constitutional Stress Tests
            </p>
            <p className="font-nytserif text-xs text-[#5a5a5a]">
              The editorial board represents the collective opinion of Times journalists dedicated to institutional balance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
