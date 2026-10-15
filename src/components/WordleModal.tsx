import React, { useState, useEffect, useCallback } from 'react';
import { X, RotateCcw, Share2, Award, HelpCircle } from 'lucide-react';

interface WordleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TARGET_WORDS = ['PRESS', 'MEDIA', 'TIMES', 'PAPER', 'TRUTH', 'STORY', 'CHIEF'];
const DAILY_WORD = 'PRESS'; // Authentic newspaper-themed Wordle

type LetterStatus = 'correct' | 'present' | 'absent' | 'empty';

export const WordleModal: React.FC<WordleModalProps> = ({ isOpen, onClose }) => {
  const [targetWord] = useState(DAILY_WORD);
  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState<string>('');
  const [gameStatus, setGameStatus] = useState<'IN_PROGRESS' | 'WON' | 'LOST'>('IN_PROGRESS');
  const [message, setMessage] = useState<string>('');
  const [shakeRow, setShakeRow] = useState<number | null>(null);

  const maxAttempts = 6;
  const wordLength = 5;

  const showToast = (msg: string) => {
    setMessage(msg);
    setTimeout(() => setMessage(''), 2500);
  };

  const handleKeyPress = useCallback(
    (key: string) => {
      if (gameStatus !== 'IN_PROGRESS') return;

      if (key === 'ENTER') {
        if (currentGuess.length !== wordLength) {
          setShakeRow(guesses.length);
          setTimeout(() => setShakeRow(null), 500);
          showToast('Not enough letters');
          return;
        }

        const newGuesses = [...guesses, currentGuess];
        setGuesses(newGuesses);
        setCurrentGuess('');

        if (currentGuess === targetWord) {
          setGameStatus('WON');
          showToast('Genius! You solved Wordle No. 1,215 🎉');
        } else if (newGuesses.length >= maxAttempts) {
          setGameStatus('LOST');
          showToast(`The word was ${targetWord}`);
        }
      } else if (key === 'BACKSPACE' || key === 'DELETE') {
        setCurrentGuess((prev) => prev.slice(0, -1));
      } else if (/^[A-Z]$/.test(key)) {
        if (currentGuess.length < wordLength) {
          setCurrentGuess((prev) => prev + key);
        }
      }
    },
    [currentGuess, guesses, gameStatus, targetWord]
  );

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toUpperCase();
      if (key === 'ENTER' || key === 'BACKSPACE') {
        handleKeyPress(key);
      } else if (/^[A-Z]$/.test(key)) {
        handleKeyPress(key);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleKeyPress]);

  if (!isOpen) return null;

  const getTileStatus = (rowIndex: number, colIndex: number): LetterStatus => {
    if (rowIndex < guesses.length) {
      const guessedWord = guesses[rowIndex];
      const letter = guessedWord[colIndex];
      if (letter === targetWord[colIndex]) {
        return 'correct';
      }
      if (targetWord.includes(letter)) {
        // Count frequencies for double letter accuracy
        const targetOccurrences = targetWord.split('').filter((c) => c === letter).length;
        const correctOccurrences = targetWord
          .split('')
          .filter((c, i) => c === letter && guessedWord[i] === letter).length;
        let priorPresentOccurrences = 0;
        for (let i = 0; i < colIndex; i++) {
          if (guessedWord[i] === letter && guessedWord[i] !== targetWord[i]) {
            priorPresentOccurrences++;
          }
        }
        if (priorPresentOccurrences < targetOccurrences - correctOccurrences) {
          return 'present';
        }
      }
      return 'absent';
    }
    return 'empty';
  };

  const getKeyStatus = (char: string): LetterStatus => {
    let status: LetterStatus = 'empty';
    for (const guess of guesses) {
      for (let i = 0; i < 5; i++) {
        if (guess[i] === char) {
          if (targetWord[i] === char) {
            return 'correct';
          }
          if (targetWord.includes(char)) {
            status = 'present';
          } else if (status === 'empty') {
            status = 'absent';
          }
        }
      }
    }
    return status;
  };

  const keyboardRows = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'BACKSPACE'],
  ];

  const resetGame = () => {
    setGuesses([]);
    setCurrentGuess('');
    setGameStatus('IN_PROGRESS');
    setMessage('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
      <div className="bg-white max-w-md w-full rounded-lg shadow-2xl border border-neutral-300 flex flex-col max-h-[92vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-200">
          <div className="flex items-center space-x-2">
            <span className="w-6 h-6 rounded bg-emerald-600 text-white font-bold flex items-center justify-center text-xs">
              W
            </span>
            <div>
              <h3 className="font-bold text-neutral-900 leading-tight">Wordle</h3>
              <p className="text-[10px] text-neutral-500 font-sans">No. 1,215 • Daily Puzzle</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={resetGame}
              title="Reset Puzzle"
              className="p-1.5 hover:bg-neutral-100 rounded text-neutral-600 transition"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 hover:bg-neutral-100 rounded text-neutral-600 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Message Toast */}
        {message && (
          <div className="bg-neutral-900 text-white text-xs font-semibold py-1.5 px-4 rounded text-center mx-auto mt-2 shadow-lg animate-bounce">
            {message}
          </div>
        )}

        {/* Word Grid */}
        <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col items-center justify-center">
          <div className="grid grid-rows-6 gap-1.5 max-w-[280px] w-full">
            {Array.from({ length: maxAttempts }).map((_, rowIndex) => {
              const isCurrentRow = rowIndex === guesses.length;
              const rowWord = isCurrentRow ? currentGuess : guesses[rowIndex] || '';
              const isShaking = shakeRow === rowIndex;

              return (
                <div
                  key={rowIndex}
                  className={`grid grid-cols-5 gap-1.5 ${isShaking ? 'animate-shake' : ''}`}
                >
                  {Array.from({ length: wordLength }).map((_, colIndex) => {
                    const letter = rowWord[colIndex] || '';
                    const status = getTileStatus(rowIndex, colIndex);

                    let bgClass = 'border-2 border-neutral-300 bg-white text-black';
                    if (rowIndex < guesses.length) {
                      if (status === 'correct') bgClass = 'bg-emerald-600 text-white border-emerald-600';
                      else if (status === 'present') bgClass = 'bg-amber-500 text-white border-amber-500';
                      else if (status === 'absent') bgClass = 'bg-neutral-500 text-white border-neutral-500';
                    } else if (letter) {
                      bgClass = 'border-2 border-neutral-800 bg-white text-black scale-105';
                    }

                    return (
                      <div
                        key={colIndex}
                        className={`w-12 h-12 flex items-center justify-center font-bold text-xl uppercase transition-all duration-150 select-none ${bgClass}`}
                      >
                        {letter}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>

            {gameStatus !== 'IN_PROGRESS' && (
              <div className="mt-4 p-3 bg-neutral-100 border border-neutral-300 rounded text-center max-w-[280px] w-full">
                <p className="text-sm font-bold text-neutral-800">
                  {gameStatus === 'WON' ? 'Splendid victory!' : `Word: ${targetWord}`}
                </p>
                <p className="text-xs text-neutral-600 mt-0.5">
                  Solved in {guesses.length}/{maxAttempts} tries
                </p>
                <button
                  onClick={resetGame}
                  className="mt-2.5 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-1.5 px-3 rounded text-xs transition"
                >
                  Play Again
                </button>
              </div>
            )}
        </div>

        {/* Virtual Keyboard */}
        <div className="bg-neutral-50 p-2 border-t border-neutral-200">
          <div className="space-y-1.5 max-w-[340px] mx-auto">
            {keyboardRows.map((row, rIdx) => (
              <div key={rIdx} className="flex justify-center gap-1">
                {row.map((key) => {
                  const status = getKeyStatus(key);
                  let keyColor = 'bg-neutral-200 text-neutral-800 hover:bg-neutral-300';
                  if (status === 'correct') keyColor = 'bg-emerald-600 text-white';
                  else if (status === 'present') keyColor = 'bg-amber-500 text-white';
                  else if (status === 'absent') keyColor = 'bg-neutral-400 text-white opacity-75';

                  const isWide = key === 'ENTER' || key === 'BACKSPACE';

                  return (
                    <button
                      key={key}
                      onClick={() => handleKeyPress(key)}
                      className={`h-10 text-xs font-bold rounded flex items-center justify-center transition active:scale-95 select-none ${keyColor} ${
                        isWide ? 'px-2.5 text-[10px]' : 'w-8'
                      }`}
                    >
                      {key === 'BACKSPACE' ? '⌫' : key}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
