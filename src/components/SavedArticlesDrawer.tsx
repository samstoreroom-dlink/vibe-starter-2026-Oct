import React from 'react';
import { X, Bookmark, Trash2, ArrowRight } from 'lucide-react';
import { Article } from '../types/news';

interface SavedArticlesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedArticles: Article[];
  onSelectArticle: (article: Article) => void;
  onRemoveArticle: (articleId: string) => void;
}

export const SavedArticlesDrawer: React.FC<SavedArticlesDrawerProps> = ({
  isOpen,
  onClose,
  savedArticles,
  onSelectArticle,
  onRemoveArticle,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-md h-full shadow-2xl flex flex-col border-l border-neutral-300 animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 bg-neutral-50">
          <div className="flex items-center space-x-2">
            <Bookmark className="w-5 h-5 text-neutral-800 fill-current" />
            <h3 className="font-headline font-bold text-lg text-neutral-900">Your Reading List</h3>
            <span className="text-xs font-sans text-neutral-500 bg-neutral-200 px-2 py-0.5 rounded-full">
              {savedArticles.length}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-neutral-200 rounded text-neutral-600 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {savedArticles.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <Bookmark className="w-10 h-10 text-neutral-300 mx-auto" />
              <p className="font-headline font-bold text-neutral-700">No saved stories yet</p>
              <p className="font-nytserif text-xs text-neutral-500 max-w-xs mx-auto leading-relaxed">
                Click the bookmark icon on any headline or inside an article to save stories for later offline reading.
              </p>
            </div>
          ) : (
            savedArticles.map((art) => (
              <div
                key={art.id}
                className="p-4 border border-neutral-200 rounded-sm hover:border-neutral-900 transition space-y-2 group bg-white shadow-2xs"
              >
                <div className="flex items-center justify-between text-[10px] font-sans text-neutral-500 uppercase tracking-wider">
                  <span className="font-semibold text-neutral-800">{art.category}</span>
                  <div className="flex items-center space-x-2">
                    <span>{art.readTime}</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onRemoveArticle(art.id);
                      }}
                      className="text-neutral-400 hover:text-red-600 transition"
                      title="Remove"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <h4
                  onClick={() => {
                    onSelectArticle(art);
                    onClose();
                  }}
                  className="font-headline font-bold text-sm text-neutral-900 group-hover:underline cursor-pointer leading-snug"
                >
                  {art.title}
                </h4>

                <p className="font-nytserif text-xs text-neutral-600 line-clamp-2">
                  {art.summary}
                </p>

                <div
                  onClick={() => {
                    onSelectArticle(art);
                    onClose();
                  }}
                  className="pt-1 flex items-center text-xs font-sans text-neutral-700 font-semibold cursor-pointer group-hover:text-black gap-1"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {savedArticles.length > 0 && (
          <div className="p-4 border-t border-neutral-200 bg-neutral-50 text-xs font-sans text-neutral-500 flex justify-between items-center">
            <span>Synchronized across your devices</span>
            <button
              onClick={() => {
                savedArticles.forEach((a) => onRemoveArticle(a.id));
              }}
              className="text-red-700 hover:underline"
            >
              Clear All
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
