import React, { useState } from 'react';
import { X, Check, ShieldCheck, Newspaper, Sparkles, CreditCard, Lock } from 'lucide-react';

interface AuthModalsProps {
  isSubscribeOpen: boolean;
  isLoginOpen: boolean;
  onCloseSubscribe: () => void;
  onCloseLogin: () => void;
  isSubscribed: boolean;
  isLoggedIn: boolean;
  userEmail: string;
  onSubscribeSuccess: () => void;
  onLoginSuccess: (email: string) => void;
  onLogout: () => void;
}

export const AuthAndSubscribeModals: React.FC<AuthModalsProps> = ({
  isSubscribeOpen,
  isLoginOpen,
  onCloseSubscribe,
  onCloseLogin,
  isSubscribed,
  isLoggedIn,
  userEmail,
  onSubscribeSuccess,
  onLoginSuccess,
  onLogout,
}) => {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [selectedPlan, setSelectedPlan] = useState<'weekly' | 'annual'>('weekly');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      onSubscribeSuccess();
      onCloseSubscribe();
    }, 800);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput) return;
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      onLoginSuccess(emailInput);
      onCloseLogin();
    }, 600);
  };

  return (
    <>
      {/* Subscribe Modal */}
      {isSubscribeOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
          <div className="bg-white max-w-lg w-full rounded-lg shadow-2xl border border-neutral-300 flex flex-col max-h-[92vh] overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 bg-neutral-50">
              <div className="flex items-center space-x-2">
                <span className="font-nyt-blackletter text-2xl font-bold text-neutral-900">
                  The New York Times
                </span>
              </div>
              <button
                onClick={onCloseSubscribe}
                className="p-1.5 hover:bg-neutral-200 rounded text-neutral-600 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              <div className="text-center space-y-2">
                <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-[11px] font-bold uppercase tracking-wider">
                  Limited Time Introductory Offer
                </span>
                <h3 className="font-headline text-2xl sm:text-3xl font-bold text-neutral-950 leading-tight">
                  Independent journalism worth supporting.
                </h3>
                <p className="font-nytserif text-neutral-600 text-sm">
                  Unlimited access to News, Games, Cooking, Wirecutter, and The Athletic.
                </p>
              </div>

              {/* Plan Cards */}
              <div className="grid grid-cols-2 gap-3 text-xs font-sans">
                <div
                  onClick={() => setSelectedPlan('weekly')}
                  className={`p-4 border-2 rounded-lg cursor-pointer transition relative ${
                    selectedPlan === 'weekly'
                      ? 'border-[#326891] bg-blue-50/40 shadow-xs'
                      : 'border-neutral-200 hover:border-neutral-400 bg-white'
                  }`}
                >
                  <span className="font-bold text-sm block text-neutral-900">All Access</span>
                  <div className="mt-2">
                    <span className="text-2xl font-bold text-neutral-950">$1</span>
                    <span className="text-neutral-500 font-medium"> / week</span>
                  </div>
                  <p className="text-[11px] text-neutral-500 mt-1">Billed every 4 weeks for 1 year</p>
                </div>

                <div
                  onClick={() => setSelectedPlan('annual')}
                  className={`p-4 border-2 rounded-lg cursor-pointer transition relative ${
                    selectedPlan === 'annual'
                      ? 'border-[#326891] bg-blue-50/40 shadow-xs'
                      : 'border-neutral-200 hover:border-neutral-400 bg-white'
                  }`}
                >
                  <span className="bg-emerald-600 text-white text-[9px] font-bold uppercase px-1.5 py-0.5 rounded absolute -top-2.5 right-3">
                    Best Value
                  </span>
                  <span className="font-bold text-sm block text-neutral-900">Annual</span>
                  <div className="mt-2">
                    <span className="text-2xl font-bold text-neutral-950">$40</span>
                    <span className="text-neutral-500 font-medium"> / year</span>
                  </div>
                  <p className="text-[11px] text-neutral-500 mt-1">Billed annually, cancel anytime</p>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-2 text-xs font-sans text-neutral-700 bg-neutral-50 p-4 rounded-md">
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Full access to breaking investigations and daily newsletters</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Complete NYT Games archive (Wordle, Connections, The Crossword)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Over 21,000 tested recipes with NYT Cooking step-by-step guides</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Unbiased product reviews & gear tests from Wirecutter</span>
                </div>
              </div>

              {/* Subscribe button */}
              <button
                onClick={handleSubscribe}
                disabled={isProcessing}
                className="w-full bg-[#567b95] hover:bg-[#326891] text-white py-3 rounded-md font-bold text-xs uppercase tracking-wider transition shadow-sm flex items-center justify-center space-x-2"
              >
                <Lock className="w-4 h-4" />
                <span>{isProcessing ? 'Processing...' : 'Subscribe Now — Cancel Anytime'}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Login Modal */}
      {isLoginOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
          <div className="bg-white max-w-sm w-full rounded-lg shadow-2xl border border-neutral-300 flex flex-col overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 bg-neutral-50">
              <span className="font-nyt-blackletter text-xl font-bold text-neutral-900">
                The New York Times
              </span>
              <button
                onClick={onCloseLogin}
                className="p-1 hover:bg-neutral-200 rounded text-neutral-600 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              {isLoggedIn ? (
                <div className="text-center space-y-4 py-2">
                  <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-800 font-bold flex items-center justify-center mx-auto text-lg">
                    {userEmail.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 text-sm">Welcome back</h4>
                    <p className="text-xs text-neutral-500 font-sans">{userEmail}</p>
                    {isSubscribed && (
                      <span className="mt-2 inline-block px-2.5 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-bold rounded-full uppercase">
                        All-Access Subscriber
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => {
                      onLogout();
                      onCloseLogin();
                    }}
                    className="w-full border border-neutral-300 hover:bg-neutral-50 py-2 rounded text-xs font-semibold text-neutral-700 transition"
                  >
                    Log Out
                  </button>
                </div>
              ) : (
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="text-center space-y-1">
                    <h4 className="font-headline font-bold text-xl text-neutral-950">Log In or Sign Up</h4>
                    <p className="text-xs text-neutral-500 font-sans">
                      Enter your email to access your account and saved articles.
                    </p>
                  </div>

                  <div className="space-y-2 font-sans text-xs">
                    <div>
                      <label className="block text-neutral-700 font-semibold mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        value={emailInput}
                        onChange={(e) => setEmailInput(e.target.value)}
                        placeholder="you@example.com"
                        className="w-full border border-neutral-300 rounded p-2.5 focus:outline-none focus:border-neutral-900 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-neutral-700 font-semibold mb-1">Password</label>
                      <input
                        type="password"
                        required
                        value={passwordInput}
                        onChange={(e) => setPasswordInput(e.target.value)}
                        placeholder="••••••••"
                        className="w-full border border-neutral-300 rounded p-2.5 focus:outline-none focus:border-neutral-900 text-sm"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full bg-[#567b95] hover:bg-[#326891] text-white py-2.5 rounded font-bold text-xs uppercase tracking-wider transition"
                  >
                    {isProcessing ? 'Verifying...' : 'Continue'}
                  </button>

                  <div className="text-center pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        setEmailInput('reader@nytimes.com');
                        setPasswordInput('subscriber2024');
                      }}
                      className="text-[11px] text-blue-600 hover:underline font-sans"
                    >
                      Fill Demo Subscriber Account
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
