import React from 'react';
import { X, Radio, MapPin, Clock, RefreshCw, Share2 } from 'lucide-react';
import { LiveUpdateItem } from '../types/news';

interface LiveUpdatesModalProps {
  isOpen: boolean;
  onClose: () => void;
  headline: string;
  summary: string;
  lastUpdated: string;
  items: LiveUpdateItem[];
}

export const LiveUpdatesModal: React.FC<LiveUpdatesModalProps> = ({
  isOpen,
  onClose,
  headline,
  summary,
  lastUpdated,
  items,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
      <div className="bg-white max-w-2xl w-full rounded-lg shadow-2xl border border-neutral-300 flex flex-col max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-neutral-200 bg-red-50/50 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-red-700">
              Live Updates
            </span>
            <span className="text-neutral-400">•</span>
            <span className="text-xs text-neutral-500 font-sans">Updated {lastUpdated}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 hover:bg-neutral-200/50 rounded text-neutral-600 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Title area */}
        <div className="px-6 py-4 border-b border-neutral-200 bg-white space-y-1.5">
          <h2 className="font-headline text-2xl font-bold text-neutral-900 leading-tight">
            {headline}
          </h2>
          <p className="font-nytserif text-sm text-neutral-600 leading-normal">
            {summary}
          </p>
        </div>

        {/* Timeline updates */}
        <div className="overflow-y-auto px-6 py-6 space-y-6">
          <div className="relative border-l-2 border-neutral-200 ml-3 space-y-6">
            {items.map((item) => (
              <div key={item.id} className="relative pl-6 space-y-1.5">
                {/* Timeline circle */}
                <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-red-600 border-2 border-white shadow-xs"></div>

                <div className="flex flex-wrap items-center gap-2 text-xs font-sans text-neutral-500">
                  <span className="font-mono font-bold text-neutral-900">{item.timestamp}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1 font-medium text-neutral-700">
                    <MapPin className="w-3 h-3 text-red-600" />
                    {item.location}
                  </span>
                  <span>•</span>
                  <span>By {item.author}</span>
                </div>

                <h3 className="font-headline font-bold text-base text-neutral-900 leading-snug">
                  {item.headline}
                </h3>

                <p className="font-nytserif text-sm text-neutral-700 leading-relaxed">
                  {item.summary}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-neutral-200 bg-neutral-50 flex items-center justify-between text-xs font-sans text-neutral-500">
          <span className="flex items-center gap-1">
            <RefreshCw className="w-3.5 h-3.5 animate-spin" /> Auto-refreshing feed
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-neutral-900 text-white rounded font-medium hover:bg-neutral-800"
          >
            Close Feed
          </button>
        </div>
      </div>
    </div>
  );
};
