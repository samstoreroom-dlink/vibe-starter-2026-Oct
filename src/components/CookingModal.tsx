import React, { useState, useEffect } from 'react';
import { X, Clock, Users, Star, Bookmark, Share2, Play, Pause, RotateCcw, Check, Sparkles } from 'lucide-react';
import { RecipeData } from '../types/news';

interface CookingModalProps {
  recipe: RecipeData | null;
  onClose: () => void;
  onSaveRecipe?: (recipeId: string) => void;
  isSaved?: boolean;
}

export const CookingModal: React.FC<CookingModalProps> = ({
  recipe,
  onClose,
  onSaveRecipe,
  isSaved = false,
}) => {
  if (!recipe) return null;

  const [servings, setServings] = useState<number>(recipe.servings);
  const [checkedIngredients, setCheckedIngredients] = useState<Record<number, boolean>>({});
  const [timerSeconds, setTimerSeconds] = useState<number>(15 * 60); // 15 mins simmer
  const [timerActive, setTimerActive] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    let interval: any = null;
    if (timerActive && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev - 1);
      }, 1000);
    } else if (timerSeconds === 0) {
      setTimerActive(false);
    }
    return () => clearInterval(interval);
  }, [timerActive, timerSeconds]);

  const toggleIngredient = (idx: number) => {
    setCheckedIngredients((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const formatTimer = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scaleFactor = servings / recipe.servings;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
      <div className="bg-white max-w-3xl w-full rounded-lg shadow-2xl border border-neutral-300 flex flex-col max-h-[92vh] overflow-hidden">
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-3.5 border-b border-neutral-200 bg-neutral-50/50">
          <div className="flex items-center space-x-2">
            <span className="text-[11px] font-bold tracking-widest uppercase text-amber-900 bg-amber-100 px-2 py-0.5 rounded">
              NYT Cooking
            </span>
            <span className="text-xs text-neutral-400">•</span>
            <span className="text-xs text-neutral-600 font-medium">Recipe by {recipe.author}</span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => onSaveRecipe?.(recipe.id)}
              className={`p-1.5 rounded transition ${
                isSaved ? 'text-red-600 bg-red-50' : 'text-neutral-600 hover:bg-neutral-100'
              }`}
              title={isSaved ? 'Saved to Recipe Box' : 'Save to Recipe Box'}
            >
              <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
            </button>
            <button
              onClick={handleShare}
              className="p-1.5 rounded text-neutral-600 hover:bg-neutral-100 transition"
              title="Copy link"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded text-neutral-600 hover:bg-neutral-100 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Recipe Body */}
        <div className="overflow-y-auto px-6 py-6 space-y-6">
          {/* Hero Section */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-7 space-y-3">
              <h1 className="font-headline text-2xl md:text-3xl font-bold text-neutral-950 leading-tight">
                {recipe.title}
              </h1>
              <p className="font-nytserif text-neutral-600 text-sm leading-relaxed">
                {recipe.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs font-sans text-neutral-700 pt-1">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-neutral-400" />
                  <span>{recipe.time}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span className="font-bold">5.0</span>
                  <span className="text-neutral-500">({recipe.reviewsCount.toLocaleString()})</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4 text-neutral-400" />
                  <span>{servings} servings</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="aspect-4/3 overflow-hidden rounded-md border border-neutral-200 bg-neutral-100 shadow-xs">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Interactive Cooking Timer Bar */}
          <div className="p-4 bg-amber-50 border border-amber-200/80 rounded-lg flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-amber-500 text-white rounded-full">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-900 block">
                  Simmer Timer
                </span>
                <span className="font-mono text-2xl font-bold text-neutral-900">
                  {formatTimer(timerSeconds)}
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => setTimerActive(!timerActive)}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-xs font-semibold shadow-xs transition ${
                  timerActive
                    ? 'bg-amber-600 text-white hover:bg-amber-700'
                    : 'bg-neutral-900 text-white hover:bg-neutral-800'
                }`}
              >
                {timerActive ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                <span>{timerActive ? 'Pause' : 'Start Timer'}</span>
              </button>
              <button
                onClick={() => {
                  setTimerActive(false);
                  setTimerSeconds(15 * 60);
                }}
                className="p-1.5 border border-neutral-300 rounded-md text-neutral-600 hover:bg-white text-xs"
                title="Reset to 15 min"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Main Grid: Ingredients & Preparation */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-2 hairline-t">
            {/* Ingredients Column */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-neutral-200">
                <h3 className="font-headline font-bold text-lg text-neutral-900">Ingredients</h3>
                <div className="flex items-center space-x-1 text-xs">
                  <span className="text-neutral-500 mr-1">Yield:</span>
                  {[2, 4, 6].map((s) => (
                    <button
                      key={s}
                      onClick={() => setServings(s)}
                      className={`px-2 py-0.5 rounded border text-xs font-medium transition ${
                        servings === s
                          ? 'bg-neutral-900 text-white border-neutral-900'
                          : 'border-neutral-200 text-neutral-600 hover:bg-neutral-100'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <p className="text-[11px] text-neutral-400 font-sans italic">
                Check off items as you prep in your kitchen:
              </p>

              <ul className="space-y-2.5 text-xs font-sans">
                {recipe.ingredients.map((ing, idx) => {
                  const isChecked = !!checkedIngredients[idx];
                  return (
                    <li
                      key={idx}
                      onClick={() => toggleIngredient(idx)}
                      className={`flex items-start space-x-2.5 cursor-pointer p-1.5 rounded transition ${
                        isChecked ? 'bg-neutral-50 text-neutral-400 line-through' : 'hover:bg-neutral-50 text-neutral-800'
                      }`}
                    >
                      <div
                        className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center shrink-0 transition ${
                          isChecked
                            ? 'bg-emerald-600 border-emerald-600 text-white'
                            : 'border-neutral-300 bg-white'
                        }`}
                      >
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span className="leading-snug">
                        <strong className="font-semibold text-neutral-900">{ing.amount}</strong>{' '}
                        {ing.item}
                      </span>
                    </li>
                  );
                })}
              </ul>

              {/* Nutrition summary */}
              <div className="p-3 bg-neutral-50 border border-neutral-200 rounded text-xs space-y-1">
                <span className="font-bold text-[11px] uppercase tracking-wider text-neutral-500 block">
                  Per Serving
                </span>
                <div className="flex justify-between text-neutral-700">
                  <span>Calories: <strong>{recipe.nutrition.calories}</strong></span>
                  <span>Protein: <strong>{recipe.nutrition.protein}</strong></span>
                  <span>Carbs: <strong>{recipe.nutrition.carbs}</strong></span>
                  <span>Fat: <strong>{recipe.nutrition.fat}</strong></span>
                </div>
              </div>
            </div>

            {/* Preparation Steps Column */}
            <div className="md:col-span-7 space-y-4">
              <h3 className="font-headline font-bold text-lg text-neutral-900 pb-2 border-b border-neutral-200">
                Preparation
              </h3>

              <ol className="space-y-5">
                {recipe.steps.map((step, idx) => (
                  <li key={idx} className="flex items-start space-x-3.5">
                    <span className="font-headline font-bold text-sm bg-neutral-100 text-neutral-800 w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="font-nytserif text-neutral-800 text-sm leading-relaxed">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-3 border-t border-neutral-200 bg-neutral-50 flex items-center justify-between text-xs font-sans">
          <span className="text-neutral-500">
            {copied ? '✓ Link copied to clipboard' : 'The New York Times Cooking Edition'}
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-neutral-900 text-white rounded font-medium hover:bg-neutral-800 transition"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
