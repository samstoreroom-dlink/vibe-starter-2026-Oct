import React, { useState } from 'react';
import { X, CheckCircle2, RotateCcw } from 'lucide-react';

interface GamesHubModalProps {
  gameType: 'connections' | 'mini' | 'spellingBee' | null;
  onClose: () => void;
}

export const GamesHubModal: React.FC<GamesHubModalProps> = ({ gameType, onClose }) => {
  // Mini Connections Game
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [solvedCategories, setSolvedCategories] = useState<string[]>([]);
  const [connectionsMistakes, setConnectionsMistakes] = useState(4);

  // Mini Crossword State
  const [miniGrid, setMiniGrid] = useState<string[]>(['', '', '', '', '']);

  if (!gameType) return null;

  const connectionsGroups = [
    {
      name: 'NEWSPAPER SECTIONS',
      color: 'bg-amber-100 border-amber-300 text-amber-900',
      words: ['ARTS', 'OPINION', 'BUSINESS', 'LIFESTYLE'],
    },
    {
      name: 'JOURNALISM ROLES',
      color: 'bg-emerald-100 border-emerald-300 text-emerald-900',
      words: ['EDITOR', 'REPORTER', 'COLUMNIST', 'ANCHOR'],
    },
  ];

  const handleToggleWord = (word: string) => {
    if (selectedWords.includes(word)) {
      setSelectedWords(selectedWords.filter((w) => w !== word));
    } else {
      if (selectedWords.length < 4) {
        setSelectedWords([...selectedWords, word]);
      }
    }
  };

  const handleConnectionsSubmit = () => {
    if (selectedWords.length !== 4) return;
    for (const group of connectionsGroups) {
      if (!solvedCategories.includes(group.name)) {
        const matchesAll = group.words.every((w) => selectedWords.includes(w));
        if (matchesAll) {
          setSolvedCategories([...solvedCategories, group.name]);
          setSelectedWords([]);
          return;
        }
      }
    }
    // mistake
    setConnectionsMistakes((m) => Math.max(0, m - 1));
    setSelectedWords([]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
      <div className="bg-white max-w-lg w-full rounded-lg shadow-2xl border border-neutral-300 flex flex-col max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-neutral-200">
          <div className="flex items-center space-x-2">
            {gameType === 'connections' && (
              <span className="w-6 h-6 rounded bg-purple-600 text-white font-bold flex items-center justify-center text-xs">
                C
              </span>
            )}
            {gameType === 'mini' && (
              <span className="w-6 h-6 rounded bg-blue-500 text-white font-bold flex items-center justify-center text-xs">
                M
              </span>
            )}
            {gameType === 'spellingBee' && (
              <span className="w-6 h-6 rounded bg-amber-400 text-black font-bold flex items-center justify-center text-xs">
                🐝
              </span>
            )}
            <div>
              <h3 className="font-bold text-neutral-900 leading-tight">
                {gameType === 'connections' && 'Connections'}
                {gameType === 'mini' && 'The Mini Crossword'}
                {gameType === 'spellingBee' && 'Spelling Bee'}
              </h3>
              <p className="text-[11px] text-neutral-500 font-sans">
                {gameType === 'connections' && 'Group words that share a common thread'}
                {gameType === 'mini' && 'Today’s 5x5 Quick Solve'}
                {gameType === 'spellingBee' && 'How many words can you make with 7 letters?'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-neutral-100 rounded text-neutral-600 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          {gameType === 'connections' && (
            <div className="space-y-4">
              <p className="text-xs text-neutral-600 text-center">
                Find groups of four items that share something in common.
              </p>

              {/* Solved Groups */}
              {solvedCategories.map((cat) => {
                const group = connectionsGroups.find((g) => g.name === cat)!;
                return (
                  <div
                    key={cat}
                    className={`p-3 rounded-md text-center border font-sans animate-in zoom-in-95 ${group.color}`}
                  >
                    <div className="font-bold text-xs uppercase tracking-wider">{group.name}</div>
                    <div className="text-xs mt-0.5">{group.words.join(', ')}</div>
                  </div>
                );
              })}

              {/* Available words */}
              <div className="grid grid-cols-4 gap-2 font-bold text-xs">
                {connectionsGroups
                  .flatMap((g) => (solvedCategories.includes(g.name) ? [] : g.words))
                  .map((word) => {
                    const isSelected = selectedWords.includes(word);
                    return (
                      <button
                        key={word}
                        onClick={() => handleToggleWord(word)}
                        className={`h-16 rounded-md uppercase tracking-wider border transition-all duration-150 flex items-center justify-center text-center p-1 ${
                          isSelected
                            ? 'bg-neutral-800 text-white border-neutral-800 scale-95 shadow-inner'
                            : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-800 border-neutral-200'
                        }`}
                      >
                        {word}
                      </button>
                    );
                  })}
              </div>

              {/* Footer controls */}
              <div className="flex items-center justify-between pt-4 border-t border-neutral-200 text-xs">
                <span className="text-neutral-500">
                  Mistakes remaining: {'● '.repeat(connectionsMistakes)}
                </span>
                <div className="space-x-2">
                  <button
                    onClick={() => setSelectedWords([])}
                    className="px-3 py-1.5 border border-neutral-300 rounded text-neutral-700 hover:bg-neutral-50"
                  >
                    Deselect All
                  </button>
                  <button
                    onClick={handleConnectionsSubmit}
                    disabled={selectedWords.length !== 4}
                    className="px-4 py-1.5 bg-neutral-900 text-white rounded font-medium disabled:opacity-40 hover:bg-neutral-800"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          )}

          {gameType === 'mini' && (
            <div className="space-y-4 text-center">
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-md text-left text-xs font-sans">
                <span className="font-bold text-blue-900 block mb-1">1-Across Clue:</span>
                <p className="text-blue-800 font-serif text-sm">"Printed publication with morning headlines (5 letters)"</p>
              </div>

              <div className="flex justify-center gap-2 py-4">
                {['P', 'A', 'P', 'E', 'R'].map((letter, idx) => (
                  <div
                    key={idx}
                    className="w-12 h-12 border-2 border-neutral-800 bg-white font-bold text-xl flex items-center justify-center shadow-xs"
                  >
                    {letter}
                  </div>
                ))}
              </div>

              <div className="p-3 bg-neutral-50 rounded border text-xs text-neutral-600">
                <span className="font-semibold text-emerald-700 flex items-center justify-center gap-1">
                  <CheckCircle2 className="w-4 h-4" /> Solved! Time: 0:24
                </span>
              </div>
            </div>
          )}

          {gameType === 'spellingBee' && (
            <div className="space-y-4 text-center">
              <p className="text-xs text-neutral-600">
                Center letter is <strong className="text-amber-600">E</strong>. Must be in every word.
              </p>

              <div className="relative w-48 h-48 mx-auto flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-amber-400 text-black font-bold text-xl flex items-center justify-center shadow-md z-10">
                  E
                </div>
                {/* Surrounding letters */}
                {['R', 'P', 'O', 'T', 'S', 'N'].map((char, i) => {
                  const angle = (i * 60 * Math.PI) / 180;
                  const x = Math.round(55 * Math.cos(angle));
                  const y = Math.round(55 * Math.sin(angle));
                  return (
                    <div
                      key={char}
                      style={{ transform: `translate(${x}px, ${y}px)` }}
                      className="absolute w-12 h-12 rounded-full bg-neutral-200 text-neutral-900 font-bold text-base flex items-center justify-center shadow-xs hover:bg-neutral-300 transition"
                    >
                      {char}
                    </div>
                  );
                })}
              </div>

              <div className="p-3 bg-amber-50/60 border border-amber-200 rounded text-xs text-neutral-700">
                Rank: <strong className="text-amber-900">Solid (18 pts)</strong> • Words found: REPORTERS,
                OPENS, POSTER, TENOR
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
