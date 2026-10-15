import React from 'react';
import { Sparkles, Trophy, Flame, Play, HelpCircle } from 'lucide-react';

interface GamesSectionViewProps {
  onPlayWordle: () => void;
  onPlayHub: (game: 'connections' | 'mini' | 'spellingBee') => void;
}

export const GamesSectionView: React.FC<GamesSectionViewProps> = ({
  onPlayWordle,
  onPlayHub,
}) => {
  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Header */}
      <div className="border-b-2 border-[#121212] pb-3 flex items-baseline justify-between">
        <div>
          <div className="flex items-center space-x-2">
            <span className="font-bold text-xs uppercase tracking-widest text-emerald-900 bg-emerald-100 px-2 py-0.5 rounded">
              NYT Games
            </span>
            <span className="text-xs text-[#727272]">• Daily word and logic puzzles</span>
          </div>
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight text-[#121212] mt-1">
            Play Today’s Puzzles
          </h2>
        </div>

        <div className="flex items-center space-x-3 text-xs font-sans">
          <div className="flex items-center text-amber-600 font-bold bg-amber-50 px-2.5 py-1 rounded border border-amber-200">
            <Flame className="w-3.5 h-3.5 mr-1 fill-amber-500" />
            <span>Daily Streak: 14 Days</span>
          </div>
        </div>
      </div>

      {/* Featured Games Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Wordle Card */}
        <div
          onClick={onPlayWordle}
          className="border border-[#e2e2e2] rounded-xs p-5 bg-white hover:border-black cursor-pointer transition flex flex-col justify-between group shadow-2xs"
        >
          <div className="space-y-3">
            <div className="w-12 h-12 rounded bg-emerald-600 text-white font-bold text-2xl flex items-center justify-center shadow-xs group-hover:scale-105 transition">
              W
            </div>
            <div>
              <h3 className="font-headline font-bold text-xl text-[#121212]">Wordle</h3>
              <p className="text-xs text-[#5a5a5a] font-nytserif mt-1">
                Guess the 5-letter word in 6 tries. A new puzzle is released every day.
              </p>
            </div>
          </div>

          <div className="pt-4 hairline-t mt-4 flex items-center justify-between text-xs font-sans">
            <span className="text-neutral-500 font-medium">Puzzle #1,215</span>
            <button className="bg-emerald-600 text-white px-3 py-1.5 rounded font-semibold group-hover:bg-emerald-700 transition flex items-center gap-1">
              <Play className="w-3 h-3 fill-current" /> Play
            </button>
          </div>
        </div>

        {/* Connections Card */}
        <div
          onClick={() => onPlayHub('connections')}
          className="border border-[#e2e2e2] rounded-xs p-5 bg-white hover:border-black cursor-pointer transition flex flex-col justify-between group shadow-2xs"
        >
          <div className="space-y-3">
            <div className="w-12 h-12 rounded bg-purple-600 text-white font-bold text-2xl flex items-center justify-center shadow-xs group-hover:scale-105 transition">
              C
            </div>
            <div>
              <h3 className="font-headline font-bold text-xl text-[#121212]">Connections</h3>
              <p className="text-xs text-[#5a5a5a] font-nytserif mt-1">
                Group four words that share a common thread without making four mistakes.
              </p>
            </div>
          </div>

          <div className="pt-4 hairline-t mt-4 flex items-center justify-between text-xs font-sans">
            <span className="text-neutral-500 font-medium">Daily Edition</span>
            <button className="bg-purple-600 text-white px-3 py-1.5 rounded font-semibold group-hover:bg-purple-700 transition flex items-center gap-1">
              <Play className="w-3 h-3 fill-current" /> Play
            </button>
          </div>
        </div>

        {/* The Mini Card */}
        <div
          onClick={() => onPlayHub('mini')}
          className="border border-[#e2e2e2] rounded-xs p-5 bg-white hover:border-black cursor-pointer transition flex flex-col justify-between group shadow-2xs"
        >
          <div className="space-y-3">
            <div className="w-12 h-12 rounded bg-blue-500 text-white font-bold text-2xl flex items-center justify-center shadow-xs group-hover:scale-105 transition">
              M
            </div>
            <div>
              <h3 className="font-headline font-bold text-xl text-[#121212]">The Mini</h3>
              <p className="text-xs text-[#5a5a5a] font-nytserif mt-1">
                Quick, bite-sized 5x5 crossword puzzle. Test your speed in under a minute.
              </p>
            </div>
          </div>

          <div className="pt-4 hairline-t mt-4 flex items-center justify-between text-xs font-sans">
            <span className="text-neutral-500 font-medium">Wednesday Mini</span>
            <button className="bg-blue-600 text-white px-3 py-1.5 rounded font-semibold group-hover:bg-blue-700 transition flex items-center gap-1">
              <Play className="w-3 h-3 fill-current" /> Play
            </button>
          </div>
        </div>

        {/* Spelling Bee Card */}
        <div
          onClick={() => onPlayHub('spellingBee')}
          className="border border-[#e2e2e2] rounded-xs p-5 bg-white hover:border-black cursor-pointer transition flex flex-col justify-between group shadow-2xs"
        >
          <div className="space-y-3">
            <div className="w-12 h-12 rounded bg-amber-400 text-black font-bold text-2xl flex items-center justify-center shadow-xs group-hover:scale-105 transition">
              🐝
            </div>
            <div>
              <h3 className="font-headline font-bold text-xl text-[#121212]">Spelling Bee</h3>
              <p className="text-xs text-[#5a5a5a] font-nytserif mt-1">
                How many words can you make with 7 letters? Find the daily pangram!
              </p>
            </div>
          </div>

          <div className="pt-4 hairline-t mt-4 flex items-center justify-between text-xs font-sans">
            <span className="text-neutral-500 font-medium">Rank: Solid</span>
            <button className="bg-amber-500 text-black px-3 py-1.5 rounded font-semibold group-hover:bg-amber-600 transition flex items-center gap-1">
              <Play className="w-3 h-3 fill-current" /> Play
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
