import React from 'react';
import { Search, Bookmark, ChevronDown, TrendingUp, TrendingDown, Volume2, User } from 'lucide-react';
import { StockTicker } from '../types/news';

interface HeaderProps {
  currentSection: string;
  onSelectSection: (section: string) => void;
  selectedEdition: string;
  onSelectEdition: (edition: string) => void;
  savedCount: number;
  onOpenSavedDrawer: () => void;
  onOpenSearch: () => void;
  onOpenSubscribe: () => void;
  onOpenLogin: () => void;
  isLoggedIn: boolean;
  userEmail: string;
  isSubscribed: boolean;
  tickers: StockTicker[];
}

export const Header: React.FC<HeaderProps> = ({
  currentSection,
  onSelectSection,
  selectedEdition,
  onSelectEdition,
  savedCount,
  onOpenSavedDrawer,
  onOpenSearch,
  onOpenSubscribe,
  onOpenLogin,
  isLoggedIn,
  userEmail,
  isSubscribed,
  tickers,
}) => {
  const sections = [
    { name: 'U.S.', id: 'us', hasDropdown: true },
    { name: 'World', id: 'world', hasDropdown: true },
    { name: 'Business', id: 'business', hasDropdown: true },
    { name: 'Arts', id: 'arts', hasDropdown: true },
    { name: 'Lifestyle', id: 'lifestyle', hasDropdown: true },
    { name: 'Opinion', id: 'opinion', hasDropdown: true },
    { name: 'Audio', id: 'audio', hasDropdown: true },
    { name: 'Games', id: 'games', hasDropdown: true },
    { name: 'Cooking', id: 'cooking', hasDropdown: true },
    { name: 'Wirecutter', id: 'wirecutter', hasDropdown: false },
    { name: 'The Athletic', id: 'athletic', hasDropdown: true },
  ];

  const editions = ['U.S.', 'International', 'Canada', 'Español', '中文'];

  return (
    <header className="w-full max-w-[1280px] mx-auto px-4 lg:px-6 pt-2 select-none" data-purpose="site-header">
      {/* Top Utility Bar: Dates, Editions, Market Watch & User Actions */}
      <div
        className="flex items-center justify-between text-[11px] pb-2 hairline-b text-[#5a5a5a]"
        data-purpose="utility-bar"
      >
        {/* Left side: Search & Date & Today's Paper */}
        <div className="flex items-center space-x-3">
          <button
            onClick={onOpenSearch}
            aria-label="Search"
            className="hover:text-black p-1 -ml-1 text-[#121212] transition cursor-pointer flex items-center gap-1"
            title="Search articles (Cmd+K)"
          >
            <Search className="w-3.5 h-3.5" />
          </button>
          <span className="font-bold text-[#121212]">Wednesday, October 16, 2024</span>
          <button
            onClick={() => onSelectSection('all')}
            className="hover:underline text-[#121212] font-medium"
          >
            Today’s Paper
          </button>
          {savedCount > 0 && (
            <button
              onClick={onOpenSavedDrawer}
              className="flex items-center gap-1 text-[#121212] font-semibold hover:underline bg-neutral-100 px-2 py-0.5 rounded text-[10px]"
            >
              <Bookmark className="w-3 h-3 fill-current" />
              <span>Saved ({savedCount})</span>
            </button>
          )}
        </div>

        {/* Center: Editions & Market Snapshot */}
        <div className="hidden md:flex items-center space-x-4">
          <nav aria-label="Editions" className="flex items-center space-x-2 font-medium">
            {editions.map((edition, idx) => (
              <React.Fragment key={edition}>
                <button
                  onClick={() => onSelectEdition(edition)}
                  className={`hover:underline transition ${
                    selectedEdition === edition ? 'text-black font-semibold' : 'text-[#5a5a5a]'
                  }`}
                >
                  {edition}
                </button>
                {idx < editions.length - 1 && <span className="text-[#e2e2e2]">|</span>}
              </React.Fragment>
            ))}
          </nav>

          <span className="text-[#e2e2e2]">|</span>

          {/* Live Market Snapshot */}
          <div className="flex items-center space-x-3 text-[10px]">
            {tickers.slice(0, 3).map((ticker) => (
              <span key={ticker.symbol} title={`${ticker.name}: ${ticker.value}`}>
                <strong className="font-semibold text-[#121212]">{ticker.symbol}</strong>{' '}
                {ticker.change}{' '}
                <span className={ticker.isPositive ? 'text-emerald-700' : 'text-red-600'}>
                  {ticker.isPositive ? '▲' : '▼'}
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* Right side: Subscription & Login Buttons */}
        <div className="flex items-center space-x-3">
          {!isSubscribed ? (
            <button
              onClick={onOpenSubscribe}
              className="bg-[#567b95] hover:bg-[#326891] text-white px-3 py-1.5 rounded-xs font-semibold tracking-tight transition duration-150 uppercase text-[10px]"
            >
              Subscribe for $1/week
            </button>
          ) : (
            <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-1 rounded text-[10px] font-bold uppercase">
              Subscriber Access
            </span>
          )}

          <button
            onClick={onOpenLogin}
            className="border border-[#567b95] text-[#567b95] hover:bg-slate-50 px-3 py-1.5 rounded-xs font-semibold tracking-tight transition duration-150 uppercase text-[10px] flex items-center gap-1"
          >
            {isLoggedIn ? (
              <>
                <User className="w-3 h-3" />
                <span>Account</span>
              </>
            ) : (
              <span>Log In</span>
            )}
          </button>
        </div>
      </div>

      {/* The Historic Masthead */}
      <div className="py-3 text-center" data-purpose="masthead">
        <button
          onClick={() => onSelectSection('all')}
          className="inline-block group focus:outline-none"
        >
          <h1 className="font-nyt-blackletter text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#121212] leading-tight hover:opacity-90 transition">
            The New York Times
          </h1>
        </button>
      </div>

      {/* Category Navigation */}
      <nav
        aria-label="Sections Navigation"
        className="border-t border-b border-[#121212] py-1.5 mb-1"
        data-purpose="main-navigation"
      >
        <ul className="flex items-center justify-between text-[11px] font-sans font-medium text-[#121212] overflow-x-auto whitespace-nowrap scrollbar-none px-1">
          {sections.map((sec) => {
            const isActive = currentSection === sec.id;
            return (
              <li key={sec.id}>
                <button
                  onClick={() => onSelectSection(sec.id)}
                  className={`hover:underline flex items-center transition py-0.5 px-1 rounded ${
                    isActive ? 'font-bold bg-neutral-100 text-black' : ''
                  }`}
                >
                  <span>{sec.name}</span>
                  {sec.hasDropdown && (
                    <ChevronDown className="w-2.5 h-2.5 ml-0.5 opacity-60 stroke-[2.5]" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom Border hairline rule */}
      <div className="border-b border-[#121212] mb-3"></div>

      {/* Free-to-read Announcement Banner */}
      <div
        className="py-1 text-center border-b border-[#e2e2e2] mb-4 text-[12px] text-[#5a5a5a] font-serif italic flex items-center justify-center gap-2"
        data-purpose="announcement"
      >
        <span>
          These top stories are <span className="font-semibold text-[#121212] not-italic">free to read</span>.
        </span>
      </div>
    </header>
  );
};
