import React, { useState } from 'react';
import { RecipeData } from '../../types/news';
import { Clock, Star, Users, Search, Bookmark, ArrowRight, Utensils } from 'lucide-react';

interface CookingSectionViewProps {
  recipes: RecipeData[];
  onOpenRecipe: (recipe: RecipeData) => void;
  savedRecipeIds: string[];
}

export const CookingSectionView: React.FC<CookingSectionViewProps> = ({
  recipes,
  onOpenRecipe,
  savedRecipeIds,
}) => {
  const [filter, setFilter] = useState<string>('All');
  const [search, setSearch] = useState<string>('');

  const categories = ['All', 'Dinner', 'Weeknight', 'Vegetarian', 'Baking'];

  const filtered = recipes.filter((r) => {
    const matchesCat = filter === 'All' || r.category === filter;
    const matchesSearch =
      !search.trim() ||
      r.title.toLowerCase().includes(search.toLowerCase()) ||
      r.description.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Cooking Masthead banner */}
      <div className="border-b-2 border-[#121212] pb-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="font-bold text-xs uppercase tracking-widest text-amber-900 bg-amber-100 px-2 py-0.5 rounded">
              NYT Cooking
            </span>
            <span className="text-xs text-[#727272]">• Tested, trusted recipes for every kitchen</span>
          </div>
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight text-[#121212] mt-1">
            What to Cook This Week
          </h2>
        </div>

        {/* Recipe Search & Filter */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-neutral-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search recipes, ingredients..."
              className="pl-9 pr-3 py-1.5 border border-neutral-300 rounded text-xs focus:outline-none focus:border-neutral-900 w-52"
            />
          </div>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition ${
              filter === cat
                ? 'bg-neutral-900 text-white'
                : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Recipe Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filtered.map((recipe) => {
          const isSaved = savedRecipeIds.includes(recipe.id);
          return (
            <div
              key={recipe.id}
              onClick={() => onOpenRecipe(recipe)}
              className="border border-[#e2e2e2] rounded-xs overflow-hidden bg-white hover:border-black cursor-pointer transition flex flex-col group shadow-2xs"
            >
              <div className="aspect-16/10 overflow-hidden bg-neutral-100 relative">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                <span className="absolute top-2 left-2 bg-black/70 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                  {recipe.time}
                </span>
                {isSaved && (
                  <span className="absolute top-2 right-2 bg-red-600 text-white p-1 rounded-full shadow">
                    <Bookmark className="w-3 h-3 fill-current" />
                  </span>
                )}
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <span className="text-[10px] uppercase tracking-wider text-[#727272] font-semibold block font-sans">
                    By {recipe.author}
                  </span>
                  <h3 className="font-headline font-bold text-lg text-[#121212] group-hover:underline leading-snug">
                    {recipe.title}
                  </h3>
                  <p className="font-nytserif text-xs text-[#5a5a5a] line-clamp-2 leading-relaxed">
                    {recipe.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 hairline-t text-xs font-sans text-[#727272]">
                  <div className="flex items-center text-amber-700 font-semibold space-x-1">
                    <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    <span>{recipe.rating}</span>
                    <span className="text-[#727272]">({recipe.reviewsCount.toLocaleString()})</span>
                  </div>
                  <span className="font-medium text-[#121212] group-hover:underline flex items-center gap-1">
                    View Recipe <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
