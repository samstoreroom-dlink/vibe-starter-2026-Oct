/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ArticleModal } from './components/ArticleModal';
import { LiveUpdatesModal } from './components/LiveUpdatesModal';
import { CookingModal } from './components/CookingModal';
import { WordleModal } from './components/WordleModal';
import { GamesHubModal } from './components/GamesHubModal';
import { SearchModal } from './components/SearchModal';
import { SavedArticlesDrawer } from './components/SavedArticlesDrawer';
import { AuthAndSubscribeModals } from './components/AuthAndSubscribeModals';
import { DailyPodcastPlayer } from './components/DailyPodcastPlayer';

// Section Views
import { OpinionSectionView } from './components/sections/OpinionSectionView';
import { CookingSectionView } from './components/sections/CookingSectionView';
import { WirecutterSectionView } from './components/sections/WirecutterSectionView';
import { BusinessSectionView } from './components/sections/BusinessSectionView';
import { WorldSectionView } from './components/sections/WorldSectionView';
import { GamesSectionView } from './components/sections/GamesSectionView';

import {
  STOCK_TICKERS,
  DAILY_PODCAST,
  MAIN_SPOTLIGHT_ARTICLE,
  LEFT_COLUMN_ARTICLES,
  MORE_NEWS_BRIEFS,
  CENTER_SUB_FEATURES,
  OPINION_PIECES,
  MOST_POPULAR_LIST,
  COOKING_RECIPES,
  WIRECUTTER_REVIEWS,
  WORLD_ARTICLES,
  BUSINESS_ARTICLES,
  LIVE_UPDATES_DATA,
} from './data/newsData';
import { Article, RecipeData } from './types/news';

export default function App() {
  // Navigation & Edition state
  const [currentSection, setCurrentSection] = useState<string>('all');
  const [selectedEdition, setSelectedEdition] = useState<string>('U.S.');
  const [isPrintMode, setIsPrintMode] = useState<boolean>(false);

  // Modals & Drawers state
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [selectedRecipe, setSelectedRecipe] = useState<RecipeData | null>(null);
  const [isLiveUpdatesOpen, setIsLiveUpdatesOpen] = useState<boolean>(false);
  const [isWordleOpen, setIsWordleOpen] = useState<boolean>(false);
  const [activeGameHub, setActiveGameHub] = useState<'connections' | 'mini' | 'spellingBee' | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isSavedDrawerOpen, setIsSavedDrawerOpen] = useState<boolean>(false);
  const [isSubscribeOpen, setIsSubscribeOpen] = useState<boolean>(false);
  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);
  const [isPodcastOpen, setIsPodcastOpen] = useState<boolean>(false);

  // User state
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userEmail, setUserEmail] = useState<string>('reader@nytimes.com');
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);

  // Saved Articles state with LocalStorage sync
  const [savedArticles, setSavedArticles] = useState<Article[]>(() => {
    try {
      const saved = localStorage.getItem('nyt_saved_articles');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('nyt_saved_articles', JSON.stringify(savedArticles));
    } catch (e) {
      console.error(e);
    }
  }, [savedArticles]);

  // Keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleToggleSaveArticle = (article: Article) => {
    setSavedArticles((prev) => {
      const exists = prev.some((a) => a.id === article.id);
      if (exists) {
        return prev.filter((a) => a.id !== article.id);
      } else {
        return [article, ...prev];
      }
    });
  };

  const handleRemoveSavedArticle = (articleId: string) => {
    setSavedArticles((prev) => prev.filter((a) => a.id !== articleId));
  };

  const allArticlesList: Article[] = [
    MAIN_SPOTLIGHT_ARTICLE,
    ...LEFT_COLUMN_ARTICLES,
    ...CENTER_SUB_FEATURES,
    ...OPINION_PIECES,
    ...WORLD_ARTICLES,
    ...BUSINESS_ARTICLES,
  ];

  // Quick helper to open article by brief/title
  const openArticleByTitle = (title: string, category: string = 'General News') => {
    const found = allArticlesList.find((a) => a.title.toLowerCase().includes(title.toLowerCase()));
    if (found) {
      setSelectedArticle(found);
    } else {
      setSelectedArticle({
        id: `article-${Date.now()}`,
        title,
        summary: `Special report filed by The New York Times newsroom regarding ${title}.`,
        category,
        readTime: '4 MIN READ',
        author: 'Staff Report',
        date: 'Oct. 16, 2024',
        content: [
          `WASHINGTON — Developing developments continue as federal and international observers analyze ${title.toLowerCase()}.`,
          'Senior officials indicated that administrative discussions are expected to proceed through the weekend, with formal policy statements anticipated in upcoming press briefings.',
          'Economists and industry stakeholders are closely monitoring market reactions and policy implications as further details emerge.',
        ],
      });
    }
  };

  return (
    <div
      className={`min-h-screen antialiased selection:bg-[#567b95] selection:text-white font-sans flex flex-col transition-colors duration-200 ${
        isPrintMode ? 'bg-[#fbf7ee] text-[#1c1a16]' : 'bg-white text-[#121212]'
      }`}
    >
      {/* Newspaper Print Mode Top Volume Banner */}
      {isPrintMode && (
        <div className="bg-[#f2ece0] border-b border-[#ded7c8] py-1 text-center text-[10px] font-serif tracking-widest text-neutral-700 uppercase">
          “All the News That's Fit to Print” • Vol. CLXXIV No. 60,305 • $3.00 at Newsstands
        </div>
      )}

      {/* BEGIN: MainHeader */}
      <Header
        currentSection={currentSection}
        onSelectSection={(sec) => {
          setCurrentSection(sec);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        selectedEdition={selectedEdition}
        onSelectEdition={setSelectedEdition}
        savedCount={savedArticles.length}
        onOpenSavedDrawer={() => setIsSavedDrawerOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenSubscribe={() => setIsSubscribeOpen(true)}
        onOpenLogin={() => setIsLoginOpen(true)}
        isLoggedIn={isLoggedIn}
        userEmail={userEmail}
        isSubscribed={isSubscribed}
        tickers={STOCK_TICKERS}
        onOpenPodcast={() => setIsPodcastOpen(true)}
        isPrintMode={isPrintMode}
        onTogglePrintMode={() => setIsPrintMode(!isPrintMode)}
      />
      {/* END: MainHeader */}

      {/* Breadcrumb indicator when a section is active */}
      {currentSection !== 'all' && (
        <div className="w-full max-w-[1280px] mx-auto px-4 lg:px-6 mb-4">
          <div className="bg-neutral-100/80 border border-neutral-200 py-2 px-4 rounded text-xs flex items-center justify-between">
            <span className="font-semibold text-neutral-800 uppercase tracking-wider font-sans">
              Section: <strong className="text-black font-bold">{currentSection.toUpperCase()}</strong>
            </span>
            <button
              onClick={() => setCurrentSection('all')}
              className="text-[#567b95] hover:underline font-semibold"
            >
              ← Back to Today's Front Page (Page A1)
            </button>
          </div>
        </div>
      )}

      {/* BEGIN: MainContent Area */}
      <main className="w-full max-w-[1280px] mx-auto px-4 lg:px-6 flex-1 pb-12">
        {/* Render Dedicated Section if active, else render the 3-Column Front Page */}
        {currentSection === 'opinion' ? (
          <OpinionSectionView
            opinions={OPINION_PIECES}
            onSelectArticle={(art) => setSelectedArticle(art)}
          />
        ) : currentSection === 'cooking' ? (
          <CookingSectionView
            recipes={COOKING_RECIPES}
            onOpenRecipe={(rec) => setSelectedRecipe(rec)}
            savedRecipeIds={savedArticles.map((a) => a.id)}
          />
        ) : currentSection === 'wirecutter' ? (
          <WirecutterSectionView reviews={WIRECUTTER_REVIEWS} />
        ) : currentSection === 'business' ? (
          <BusinessSectionView
            articles={[CENTER_SUB_FEATURES[1], ...BUSINESS_ARTICLES]}
            tickers={STOCK_TICKERS}
            onSelectArticle={(art) => setSelectedArticle(art)}
          />
        ) : currentSection === 'world' ? (
          <WorldSectionView
            articles={WORLD_ARTICLES}
            onSelectArticle={(art) => setSelectedArticle(art)}
          />
        ) : currentSection === 'games' ? (
          <GamesSectionView
            onPlayWordle={() => setIsWordleOpen(true)}
            onPlayHub={(game) => setActiveGameHub(game)}
          />
        ) : (
          /* ================= Flagship 3-Column Editorial Grid ================= */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Column: News Digest & Lead Headlines */}
            <section className="lg:col-span-3 space-y-5 lg:pr-5 hairline-r" data-purpose="left-column-news">
              {/* Lead Story Left */}
              <article
                onClick={() => setSelectedArticle(LEFT_COLUMN_ARTICLES[0])}
                className="space-y-2 pb-5 hairline-b group cursor-pointer"
              >
                <h2 className="font-headline text-[22px] font-bold text-[#121212] headline-leading group-hover:text-[#5a5a5a] transition">
                  {LEFT_COLUMN_ARTICLES[0].title}
                </h2>
                <p className="font-nytserif text-[14px] text-[#5a5a5a] leading-snug">
                  {LEFT_COLUMN_ARTICLES[0].summary}
                </p>
                <div className="text-[11px] text-[#727272] font-sans flex items-center space-x-2 pt-1">
                  <span>{LEFT_COLUMN_ARTICLES[0].readTime}</span>
                  <span>•</span>
                  <span className="hover:underline">By {LEFT_COLUMN_ARTICLES[0].author}</span>
                </div>
              </article>

              {/* Sub Story 1 */}
              <article
                onClick={() => setSelectedArticle(LEFT_COLUMN_ARTICLES[1])}
                className="space-y-2 pb-5 hairline-b group cursor-pointer"
              >
                <h3 className="font-headline text-[18px] font-bold text-[#121212] headline-leading group-hover:text-[#5a5a5a] transition">
                  {LEFT_COLUMN_ARTICLES[1].title}
                </h3>
                <p className="font-nytserif text-[13px] text-[#5a5a5a] leading-snug">
                  {LEFT_COLUMN_ARTICLES[1].summary}
                </p>
                <div className="text-[11px] text-[#727272] font-sans">
                  <span>{LEFT_COLUMN_ARTICLES[1].readTime}</span>
                </div>
              </article>

              {/* Sub Story 2: Analysis */}
              <article
                onClick={() => setSelectedArticle(LEFT_COLUMN_ARTICLES[2])}
                className="space-y-2 pb-5 hairline-b group cursor-pointer"
              >
                <span className="text-[10px] font-bold tracking-widest uppercase text-red-700 block">
                  Analysis
                </span>
                <h3 className="font-headline text-[17px] font-bold text-[#121212] headline-leading group-hover:text-[#5a5a5a] transition">
                  {LEFT_COLUMN_ARTICLES[2].title}
                </h3>
                <p className="font-nytserif text-[13px] text-[#5a5a5a] leading-snug">
                  {LEFT_COLUMN_ARTICLES[2].summary}
                </p>
                <div className="text-[11px] text-[#727272] font-sans">
                  <span>{LEFT_COLUMN_ARTICLES[2].readTime}</span>
                </div>
              </article>

              {/* Sub Story 3: Briefs list */}
              <div className="space-y-3 pt-1">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#121212] pb-1 border-b border-[#121212]">
                  More News
                </div>
                {MORE_NEWS_BRIEFS.map((brief) => (
                  <article
                    key={brief.id}
                    onClick={() => openArticleByTitle(brief.title, brief.category)}
                    className="text-sm font-headline font-bold hover:underline cursor-pointer transition text-[#121212]"
                  >
                    <a
                      href={`#${brief.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        openArticleByTitle(brief.title, brief.category);
                      }}
                    >
                      {brief.title}
                    </a>
                  </article>
                ))}
              </div>
            </section>

            {/* Center Column: Visual Lead Spotlight */}
            <section className="lg:col-span-6 space-y-4 lg:px-2" data-purpose="center-column-spotlight">
              {/* Primary Spotlight Article with Visual */}
              <article className="space-y-3 pb-6 hairline-b">
                {/* Featured Image Container */}
                <figure
                  onClick={() => setSelectedArticle(MAIN_SPOTLIGHT_ARTICLE)}
                  className="w-full overflow-hidden bg-slate-100 border border-[#e2e2e2] cursor-pointer group"
                >
                  <img
                    alt="Alina Habba addressing reporters on Capitol Hill"
                    className="w-full h-auto object-cover max-h-[380px] group-hover:opacity-95 transition duration-200"
                    src={MAIN_SPOTLIGHT_ARTICLE.image}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg';
                    }}
                  />
                  <figcaption className="text-[11px] text-[#727272] pt-1.5 px-1 flex justify-between font-sans">
                    <span>Alina Habba addressing reporters on Capitol Hill.</span>
                    <span className="text-[10px] uppercase">Doug Mills/The New York Times</span>
                  </figcaption>
                </figure>

                {/* Main Article Headline & Copy */}
                <div
                  onClick={() => setSelectedArticle(MAIN_SPOTLIGHT_ARTICLE)}
                  className="space-y-2 pt-1 cursor-pointer group"
                >
                  <h2 className="font-headline text-3xl md:text-[34px] font-bold text-[#121212] headline-leading group-hover:text-[#5a5a5a] transition">
                    {MAIN_SPOTLIGHT_ARTICLE.title}
                  </h2>
                  <p className="font-nytserif text-base text-[#121212] leading-relaxed">
                    {MAIN_SPOTLIGHT_ARTICLE.summary}
                  </p>
                  <div className="text-[11px] text-[#727272] font-sans flex items-center space-x-2 pt-1">
                    <span>{MAIN_SPOTLIGHT_ARTICLE.readTime}</span>
                    <span>•</span>
                    <span className="hover:underline">By {MAIN_SPOTLIGHT_ARTICLE.author}</span>
                  </div>
                </div>
              </article>

              {/* Secondary 2-Col Module within Center */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                {/* Left sub-feature */}
                <article
                  onClick={() => setSelectedArticle(CENTER_SUB_FEATURES[0])}
                  className="space-y-2 hairline-b md:hairline-b-0 md:hairline-r md:pr-4 pb-4 md:pb-0 cursor-pointer group"
                >
                  <h4 className="font-headline text-[17px] font-bold text-[#121212] headline-leading group-hover:underline">
                    {CENTER_SUB_FEATURES[0].title}
                  </h4>
                  <p className="font-nytserif text-[13px] text-[#5a5a5a] leading-snug">
                    {CENTER_SUB_FEATURES[0].summary}
                  </p>
                  <span className="text-[11px] text-[#727272] font-sans block">
                    {CENTER_SUB_FEATURES[0].readTime}
                  </span>
                </article>

                {/* Right sub-feature */}
                <article
                  onClick={() => setSelectedArticle(CENTER_SUB_FEATURES[1])}
                  className="space-y-2 cursor-pointer group"
                >
                  <h4 className="font-headline text-[17px] font-bold text-[#121212] headline-leading group-hover:underline">
                    {CENTER_SUB_FEATURES[1].title}
                  </h4>
                  <p className="font-nytserif text-[13px] text-[#5a5a5a] leading-snug">
                    {CENTER_SUB_FEATURES[1].summary}
                  </p>
                  <span className="text-[11px] text-[#727272] font-sans block">
                    {CENTER_SUB_FEATURES[1].readTime}
                  </span>
                </article>
              </div>

              {/* NYT Interactive Games Spotlight Strip */}
              <div className="pt-6 hairline-t" data-purpose="nyt-games-widget">
                <div className="flex items-center justify-between pb-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#121212] font-sans">
                    Play & Games
                  </span>
                  <button
                    onClick={() => setCurrentSection('games')}
                    className="text-[11px] font-semibold text-[#567b95] hover:underline"
                  >
                    All Games ›
                  </button>
                </div>

                <div className="grid grid-cols-4 gap-2 text-center text-xs font-sans">
                  {/* Wordle */}
                  <button
                    onClick={() => setIsWordleOpen(true)}
                    className="border border-[#e2e2e2] p-2 rounded hover:border-black transition flex flex-col items-center group cursor-pointer bg-white"
                  >
                    <span className="w-8 h-8 rounded bg-emerald-600 text-white font-bold flex items-center justify-center text-sm mb-1 group-hover:scale-105 transition">
                      W
                    </span>
                    <span className="font-bold text-[#121212]">Wordle</span>
                    <span className="text-[10px] text-[#5a5a5a]">No. 1,215</span>
                  </button>

                  {/* Connections */}
                  <button
                    onClick={() => setActiveGameHub('connections')}
                    className="border border-[#e2e2e2] p-2 rounded hover:border-black transition flex flex-col items-center group cursor-pointer bg-white"
                  >
                    <span className="w-8 h-8 rounded bg-purple-600 text-white font-bold flex items-center justify-center text-sm mb-1 group-hover:scale-105 transition">
                      C
                    </span>
                    <span className="font-bold text-[#121212]">Connections</span>
                    <span className="text-[10px] text-[#5a5a5a]">Group words</span>
                  </button>

                  {/* The Mini */}
                  <button
                    onClick={() => setActiveGameHub('mini')}
                    className="border border-[#e2e2e2] p-2 rounded hover:border-black transition flex flex-col items-center group cursor-pointer bg-white"
                  >
                    <span className="w-8 h-8 rounded bg-blue-500 text-white font-bold flex items-center justify-center text-sm mb-1 group-hover:scale-105 transition">
                      M
                    </span>
                    <span className="font-bold text-[#121212]">The Mini</span>
                    <span className="text-[10px] text-[#5a5a5a]">Quick solve</span>
                  </button>

                  {/* Spelling Bee */}
                  <button
                    onClick={() => setActiveGameHub('spellingBee')}
                    className="border border-[#e2e2e2] p-2 rounded hover:border-black transition flex flex-col items-center group cursor-pointer bg-white"
                  >
                    <span className="w-8 h-8 rounded bg-amber-400 text-black font-bold flex items-center justify-center text-sm mb-1 group-hover:scale-105 transition">
                      🐝
                    </span>
                    <span className="font-bold text-[#121212]">Spelling Bee</span>
                    <span className="text-[10px] text-[#5a5a5a]">Play now</span>
                  </button>
                </div>
              </div>
            </section>

            {/* Right Column: Opinion, Live Feed & Trending */}
            <section className="lg:col-span-3 space-y-6 lg:pl-5 hairline-l" data-purpose="right-column-opinion-feed">
              {/* Live Updates / Fast Briefs Card */}
              <div
                onClick={() => setIsLiveUpdatesOpen(true)}
                className="bg-slate-50 border border-[#e2e2e2] p-3.5 rounded-xs cursor-pointer hover:border-neutral-400 transition"
                data-purpose="live-briefing"
              >
                <div className="flex items-center space-x-2 text-red-700 font-bold text-xs uppercase tracking-wider mb-2">
                  <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
                  <span>Live Updates</span>
                </div>
                <h4 className="font-headline font-bold text-[15px] leading-tight text-[#121212] hover:underline mb-1.5">
                  {LIVE_UPDATES_DATA.headline}
                </h4>
                <p className="text-xs text-[#5a5a5a] font-nytserif leading-snug mb-2">
                  {LIVE_UPDATES_DATA.summary}
                </p>
                <span className="text-[10px] text-[#727272] font-sans block">
                  Updated {LIVE_UPDATES_DATA.lastUpdated}
                </span>
              </div>

              {/* NYT Opinion Columnists Header */}
              <div className="space-y-4">
                <div className="border-b-2 border-[#121212] pb-1 flex justify-between items-baseline">
                  <h3
                    onClick={() => setCurrentSection('opinion')}
                    className="font-headline font-bold text-lg text-[#121212] cursor-pointer hover:underline"
                  >
                    Opinion
                  </h3>
                  <button
                    onClick={() => setCurrentSection('opinion')}
                    className="text-[10px] uppercase font-sans text-[#727272] tracking-wider hover:text-black"
                  >
                    Editorials & Columns ›
                  </button>
                </div>

                {/* Opinion Items */}
                {OPINION_PIECES.slice(0, 3).map((op, idx) => (
                  <article
                    key={op.id}
                    onClick={() => setSelectedArticle(op)}
                    className={`flex items-start space-x-3 cursor-pointer group ${
                      idx < 2 ? 'pb-3 hairline-b' : 'pb-1'
                    }`}
                  >
                    <div className="flex-1 space-y-1">
                      <span className="text-[10px] uppercase tracking-wider text-[#5a5a5a] font-bold block">
                        {op.authorRole}
                      </span>
                      <h4 className="font-headline font-bold text-[14px] leading-snug group-hover:underline text-[#121212]">
                        {op.title}
                      </h4>
                      <p className="text-[11px] text-[#727272]">By {op.author}</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-slate-200 flex-shrink-0 overflow-hidden border border-[#e2e2e2] flex items-center justify-center">
                      <div className="text-xs font-serif text-[#5a5a5a] font-bold">
                        {op.authorInitials}
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* The Most Popular / Trending Ranked List */}
              <div className="space-y-3 pt-2" data-purpose="trending-list">
                <div className="border-b border-[#121212] pb-1">
                  <h3 className="font-headline font-bold text-sm text-[#121212] uppercase tracking-wider">
                    Most Popular
                  </h3>
                </div>
                <ol className="space-y-3 font-nytserif text-sm">
                  {MOST_POPULAR_LIST.map((pop) => (
                    <li
                      key={pop.id}
                      onClick={() => {
                        if (pop.id === 'pop-4') setCurrentSection('wirecutter');
                        else if (pop.id === 'pop-1') setCurrentSection('cooking');
                        else openArticleByTitle(pop.title, pop.category);
                      }}
                      className="flex items-start space-x-3 cursor-pointer group"
                    >
                      <span className="font-headline text-lg font-bold text-[#e2e2e2] group-hover:text-[#121212] leading-none transition">
                        {pop.rank}
                      </span>
                      <span className="group-hover:underline font-headline font-semibold text-xs leading-snug text-[#121212]">
                        {pop.title}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* NYT Cooking Mini Spotlight */}
              <div
                onClick={() => setSelectedRecipe(COOKING_RECIPES[0])}
                className="border border-[#e2e2e2] p-3 rounded-xs bg-orange-50/40 cursor-pointer hover:border-amber-400 transition"
                data-purpose="cooking-spotlight"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-900 block">
                    NYT Cooking
                  </span>
                  <span className="text-[10px] text-[#567b95] font-semibold hover:underline">
                    Browse All ›
                  </span>
                </div>
                <h4 className="font-headline font-bold text-sm text-[#121212] leading-tight hover:underline mb-1">
                  {COOKING_RECIPES[0].title}
                </h4>
                <p className="text-[11px] text-[#5a5a5a] font-sans mb-2">
                  {COOKING_RECIPES[0].subtitle}
                </p>
                <div className="flex items-center text-[10px] text-amber-700 font-semibold space-x-1">
                  <span>★★★★★</span>
                  <span className="text-[#5a5a5a]">({COOKING_RECIPES[0].reviewsCount.toLocaleString()} reviews)</span>
                </div>
              </div>
            </section>
          </div>
        )}
      </main>
      {/* END: MainContent */}

      {/* BEGIN: SiteFooter */}
      <Footer
        onSelectSection={(sec) => {
          setCurrentSection(sec);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenSubscribe={() => setIsSubscribeOpen(true)}
        onOpenGames={(game) => {
          if (game === 'wordle') setIsWordleOpen(true);
          else setActiveGameHub(game as any);
        }}
        onOpenCooking={() => {
          setCurrentSection('cooking');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
      {/* END: SiteFooter */}

      {/* --- Interactive Modals & Drawers --- */}

      {/* Article Reader Modal */}
      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onSaveArticle={handleToggleSaveArticle}
        isSaved={selectedArticle ? savedArticles.some((a) => a.id === selectedArticle.id) : false}
        onSelectArticle={(art) => setSelectedArticle(art)}
        relatedArticles={allArticlesList.filter((a) => a.id !== selectedArticle?.id)}
      />

      {/* Live Updates Modal */}
      <LiveUpdatesModal
        isOpen={isLiveUpdatesOpen}
        onClose={() => setIsLiveUpdatesOpen(false)}
        headline={LIVE_UPDATES_DATA.headline}
        summary={LIVE_UPDATES_DATA.summary}
        lastUpdated={LIVE_UPDATES_DATA.lastUpdated}
        items={LIVE_UPDATES_DATA.items}
      />

      {/* NYT Cooking Recipe Modal */}
      <CookingModal
        recipe={selectedRecipe}
        onClose={() => setSelectedRecipe(null)}
        isSaved={selectedRecipe ? savedArticles.some((a) => a.id === selectedRecipe.id) : false}
        onSaveRecipe={(recipeId) => {
          const r = COOKING_RECIPES.find((rec) => rec.id === recipeId);
          if (r) {
            handleToggleSaveArticle({
              id: r.id,
              title: r.title,
              summary: r.description,
              category: 'Cooking',
              readTime: r.time,
              author: r.author,
              date: 'Oct. 16, 2024',
              content: r.steps,
            });
          }
        }}
      />

      {/* Wordle Game Modal */}
      <WordleModal
        isOpen={isWordleOpen}
        onClose={() => setIsWordleOpen(false)}
      />

      {/* Connections / The Mini / Spelling Bee Modal */}
      <GamesHubModal
        gameType={activeGameHub}
        onClose={() => setActiveGameHub(null)}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        articles={allArticlesList}
        onSelectArticle={(art) => setSelectedArticle(art)}
      />

      {/* Saved Articles Drawer */}
      <SavedArticlesDrawer
        isOpen={isSavedDrawerOpen}
        onClose={() => setIsSavedDrawerOpen(false)}
        savedArticles={savedArticles}
        onSelectArticle={(art) => setSelectedArticle(art)}
        onRemoveArticle={handleRemoveSavedArticle}
      />

      {/* Auth & Subscribe Modals */}
      <AuthAndSubscribeModals
        isSubscribeOpen={isSubscribeOpen}
        isLoginOpen={isLoginOpen}
        onCloseSubscribe={() => setIsSubscribeOpen(false)}
        onCloseLogin={() => setIsLoginOpen(false)}
        isSubscribed={isSubscribed}
        isLoggedIn={isLoggedIn}
        userEmail={userEmail}
        onSubscribeSuccess={() => setIsSubscribed(true)}
        onLoginSuccess={(email) => {
          setIsLoggedIn(true);
          setUserEmail(email);
        }}
        onLogout={() => {
          setIsLoggedIn(false);
          setIsSubscribed(false);
        }}
      />

      {/* Daily Podcast Floating Audio Bar */}
      <DailyPodcastPlayer
        podcast={DAILY_PODCAST}
        isOpen={isPodcastOpen}
        onClose={() => setIsPodcastOpen(false)}
      />
    </div>
  );
}
