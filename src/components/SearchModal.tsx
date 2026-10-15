import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, Clock } from 'lucide-react';
import { Article } from '../types/news';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  articles: Article[];
  onSelectArticle: (article: Article) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  articles,
  onSelectArticle,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const filtered = query.trim()
    ? articles.filter(
        (a) =>
          a.title.toLowerCase().includes(query.toLowerCase()) ||
          a.summary.toLowerCase().includes(query.toLowerCase()) ||
          a.author.toLowerCase().includes(query.toLowerCase()) ||
          a.category.toLowerCase().includes(query.toLowerCase())
      )
    : articles.slice(0, 5);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 backdrop-blur-xs p-4 pt-16 animate-in fade-in duration-200">
      <div className="bg-white max-w-xl w-full rounded-lg shadow-2xl border border-neutral-300 flex flex-col max-h-[80vh] overflow-hidden">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3 border-b border-neutral-200 gap-3">
          <Search className="w-5 h-5 text-neutral-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search The New York Times (e.g. Trump, polling, wages, recipes)..."
            className="w-full text-sm font-sans focus:outline-none text-neutral-900 placeholder:text-neutral-400"
          />
          {query && (
            <button onClick={() => setQuery('')} className="text-neutral-400 hover:text-neutral-600">
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs font-sans text-neutral-500 hover:text-neutral-900 border px-2 py-1 rounded"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-4 space-y-3">
          <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 font-sans px-1">
            {query.trim() ? `Search Results (${filtered.length})` : 'Featured Stories'}
          </div>

          {filtered.length === 0 ? (
            <div className="py-8 text-center text-neutral-500 text-sm font-nytserif">
              No articles found matching "{query}". Try searching for political figures, economic news, or recipes.
            </div>
          ) : (
            filtered.map((art) => (
              <div
                key={art.id}
                onClick={() => {
                  onSelectArticle(art);
                  onClose();
                }}
                className="p-3 rounded border border-neutral-100 hover:border-neutral-800 hover:bg-neutral-50 cursor-pointer transition flex items-start justify-between group"
              >
                <div className="space-y-1 pr-3">
                  <div className="flex items-center space-x-2 text-[10px] uppercase tracking-wider text-neutral-500 font-sans">
                    <span className="font-semibold text-neutral-700">{art.category}</span>
                    <span>•</span>
                    <span>{art.readTime}</span>
                  </div>
                  <h4 className="font-headline font-bold text-sm text-neutral-900 group-hover:underline leading-snug">
                    {art.title}
                  </h4>
                  <p className="font-nytserif text-xs text-neutral-600 line-clamp-1">
                    {art.summary}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-neutral-300 group-hover:text-neutral-800 shrink-0 mt-2 transition" />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
