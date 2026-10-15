import React from 'react';

interface FooterProps {
  onSelectSection: (section: string) => void;
  onOpenSubscribe: () => void;
  onOpenGames: (game: 'wordle' | 'connections' | 'mini' | 'spellingBee') => void;
  onOpenCooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectSection,
  onOpenSubscribe,
  onOpenGames,
  onOpenCooking,
}) => {
  return (
    <footer
      className="w-full max-w-[1280px] mx-auto px-4 lg:px-6 pt-6 pb-12 border-double-top text-[#121212] select-none"
      data-purpose="footer"
    >
      {/* Footer Logo */}
      <div className="flex justify-between items-center pb-4 hairline-b">
        <span className="font-nyt-blackletter text-2xl font-bold cursor-pointer" onClick={() => onSelectSection('all')}>
          The New York Times
        </span>
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            onSelectSection('all');
          }}
          className="text-xs font-semibold text-[#567b95] hover:underline"
        >
          Go to Home Page ›
        </button>
      </div>

      {/* Navigation Columns */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-6 py-6 text-xs font-sans">
        <div>
          <h5 className="font-bold uppercase tracking-wider mb-2 text-[11px] text-[#121212]">News</h5>
          <ul className="space-y-1.5 text-[#5a5a5a]">
            <li>
              <button onClick={() => onSelectSection('all')} className="hover:underline text-left">
                Home Page
              </button>
            </li>
            <li>
              <button onClick={() => onSelectSection('world')} className="hover:underline text-left">
                World
              </button>
            </li>
            <li>
              <button onClick={() => onSelectSection('us')} className="hover:underline text-left">
                U.S. Politics
              </button>
            </li>
            <li>
              <button onClick={() => onSelectSection('us')} className="hover:underline text-left">
                New York
              </button>
            </li>
            <li>
              <button onClick={() => onSelectSection('business')} className="hover:underline text-left">
                Business
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold uppercase tracking-wider mb-2 text-[11px] text-[#121212]">Opinion</h5>
          <ul className="space-y-1.5 text-[#5a5a5a]">
            <li>
              <button onClick={() => onSelectSection('opinion')} className="hover:underline text-left">
                Today's Opinion
              </button>
            </li>
            <li>
              <button onClick={() => onSelectSection('opinion')} className="hover:underline text-left">
                Columnists
              </button>
            </li>
            <li>
              <button onClick={() => onSelectSection('opinion')} className="hover:underline text-left">
                Editorials
              </button>
            </li>
            <li>
              <button onClick={() => onSelectSection('opinion')} className="hover:underline text-left">
                Guest Essays
              </button>
            </li>
            <li>
              <button onClick={() => onSelectSection('opinion')} className="hover:underline text-left">
                Sunday Opinion
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold uppercase tracking-wider mb-2 text-[11px] text-[#121212]">Arts</h5>
          <ul className="space-y-1.5 text-[#5a5a5a]">
            <li>
              <button onClick={() => onSelectSection('arts')} className="hover:underline text-left">
                Today's Arts
              </button>
            </li>
            <li>
              <button onClick={() => onSelectSection('arts')} className="hover:underline text-left">
                Books
              </button>
            </li>
            <li>
              <button onClick={() => onSelectSection('arts')} className="hover:underline text-left">
                Best Sellers
              </button>
            </li>
            <li>
              <button onClick={() => onSelectSection('arts')} className="hover:underline text-left">
                Dance & Movies
              </button>
            </li>
            <li>
              <button onClick={() => onSelectSection('arts')} className="hover:underline text-left">
                Music
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold uppercase tracking-wider mb-2 text-[11px] text-[#121212]">Living</h5>
          <ul className="space-y-1.5 text-[#5a5a5a]">
            <li>
              <button onClick={() => onOpenGames('wordle')} className="hover:underline text-left font-medium text-black">
                Games
              </button>
            </li>
            <li>
              <button onClick={onOpenCooking} className="hover:underline text-left font-medium text-black">
                Food & Cooking
              </button>
            </li>
            <li>
              <button onClick={() => onSelectSection('lifestyle')} className="hover:underline text-left">
                Education
              </button>
            </li>
            <li>
              <button onClick={() => onSelectSection('lifestyle')} className="hover:underline text-left">
                Health
              </button>
            </li>
            <li>
              <button onClick={() => onSelectSection('business')} className="hover:underline text-left">
                Real Estate
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold uppercase tracking-wider mb-2 text-[11px] text-[#121212]">More</h5>
          <ul className="space-y-1.5 text-[#5a5a5a]">
            <li>
              <button onClick={() => onSelectSection('wirecutter')} className="hover:underline text-left">
                Wirecutter
              </button>
            </li>
            <li>
              <button onClick={onOpenCooking} className="hover:underline text-left">
                Cooking
              </button>
            </li>
            <li>
              <button onClick={() => onSelectSection('athletic')} className="hover:underline text-left">
                The Athletic
              </button>
            </li>
            <li>
              <button onClick={() => onSelectSection('audio')} className="hover:underline text-left">
                Podcasts & Audio
              </button>
            </li>
            <li>
              <span className="text-[#5a5a5a]">TimesMachine</span>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold uppercase tracking-wider mb-2 text-[11px] text-[#121212]">Subscribe</h5>
          <ul className="space-y-1.5 text-[#5a5a5a]">
            <li>
              <button
                onClick={onOpenSubscribe}
                className="hover:underline font-semibold text-[#121212] text-left"
              >
                Home Delivery
              </button>
            </li>
            <li>
              <button
                onClick={onOpenSubscribe}
                className="hover:underline font-semibold text-[#121212] text-left"
              >
                Digital Subscriptions
              </button>
            </li>
            <li>
              <button onClick={() => onOpenGames('wordle')} className="hover:underline text-left">
                Games Access
              </button>
            </li>
            <li>
              <button onClick={onOpenCooking} className="hover:underline text-left">
                Cooking Access
              </button>
            </li>
            <li>
              <button onClick={onOpenSubscribe} className="hover:underline text-left">
                Gift Subscriptions
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright & Legal Footnote */}
      <div className="pt-6 hairline-t text-center text-[11px] text-[#727272] font-sans space-y-2">
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
          <span className="hover:underline cursor-pointer">© 2024 The New York Times Company</span>
          <span className="hover:underline cursor-pointer">NYTCo</span>
          <span className="hover:underline cursor-pointer">Contact Us</span>
          <span className="hover:underline cursor-pointer">Accessibility</span>
          <span className="hover:underline cursor-pointer">Work with us</span>
          <span className="hover:underline cursor-pointer">Advertise</span>
          <span className="hover:underline cursor-pointer">T Brand Studio</span>
          <span className="hover:underline cursor-pointer">Your Ad Choices</span>
          <span className="hover:underline cursor-pointer">Privacy Policy</span>
          <span className="hover:underline cursor-pointer">Terms of Service</span>
          <span className="hover:underline cursor-pointer">Site Map</span>
        </div>
      </div>
    </footer>
  );
};
