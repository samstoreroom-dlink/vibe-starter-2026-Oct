import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, RotateCw, Volume2, VolumeX, X, ChevronUp, ChevronDown, Headphones } from 'lucide-react';
import { PodcastEpisode } from '../types/news';

interface DailyPodcastPlayerProps {
  podcast: PodcastEpisode;
  isOpen: boolean;
  onClose: () => void;
}

export const DailyPodcastPlayer: React.FC<DailyPodcastPlayerProps> = ({ podcast, isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [seconds, setSeconds] = useState(145);
  const [speed, setSpeed] = useState<number>(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    let interval: any = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setSeconds((prev) => {
          if (prev >= podcast.durationSec) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000 / speed);
    }
    return () => clearInterval(interval);
  }, [isPlaying, speed, podcast.durationSec]);

  if (!isOpen) return null;

  const formatTime = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progressPercent = Math.min(100, (seconds / podcast.durationSec) * 100);

  const cycleSpeed = () => {
    const speeds = [1, 1.25, 1.5, 2];
    const nextIdx = (speeds.indexOf(speed) + 1) % speeds.length;
    setSpeed(speeds[nextIdx]);
  };

  return (
    <aside
      aria-label="The Daily podcast player"
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#121212] text-white border-t border-neutral-700 shadow-2xl transition-all duration-300"
    >
      {/* Top progress scrubber */}
      <div
        className="w-full bg-neutral-800 h-1 cursor-pointer relative group"
        onClick={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const clickX = e.clientX - rect.left;
          const newPct = clickX / rect.width;
          setSeconds(Math.floor(newPct * podcast.durationSec));
        }}
      >
        <div
          className="bg-[#567b95] h-full transition-all duration-150 group-hover:bg-[#85a8c2]"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <div className="max-w-[1280px] mx-auto px-4 py-2.5 flex items-center justify-between text-xs font-sans">
        {/* Left: Podcast info */}
        <div className="flex items-center space-x-3 min-w-0 pr-4">
          <div className="w-10 h-10 rounded-xs overflow-hidden shrink-0 border border-neutral-700 relative group cursor-pointer" onClick={() => setIsPlaying(!isPlaying)}>
            <img src={podcast.coverImage} alt={podcast.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              {isPlaying ? <Pause className="w-4 h-4 text-white" /> : <Play className="w-4 h-4 text-white" />}
            </div>
          </div>
          <div className="truncate">
            <div className="flex items-center space-x-2">
              <span className="font-bold text-[10px] tracking-widest uppercase text-[#85a8c2]">
                {podcast.show}
              </span>
              <span className="text-neutral-500">•</span>
              <span className="text-[10px] text-neutral-400">Host: {podcast.host}</span>
            </div>
            <h5 className="font-headline font-semibold text-sm text-neutral-100 truncate hover:underline cursor-pointer">
              {podcast.title}
            </h5>
          </div>
        </div>

        {/* Center: Controls */}
        <div className="flex items-center space-x-4 shrink-0">
          {/* Skip backward 15s */}
          <button
            onClick={() => setSeconds((s) => Math.max(0, s - 15))}
            className="text-neutral-400 hover:text-white transition p-1"
            title="Rewind 15 seconds"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          {/* Play / Pause button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-8 h-8 rounded-full bg-white hover:bg-neutral-200 text-black flex items-center justify-center transition shadow-md"
            title={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
          </button>

          {/* Skip forward 30s */}
          <button
            onClick={() => setSeconds((s) => Math.min(podcast.durationSec, s + 30))}
            className="text-neutral-400 hover:text-white transition p-1"
            title="Fast forward 30 seconds"
          >
            <RotateCw className="w-4 h-4" />
          </button>

          {/* Timers */}
          <div className="hidden sm:flex items-center space-x-1 font-mono text-[11px] text-neutral-400">
            <span>{formatTime(seconds)}</span>
            <span>/</span>
            <span>{formatTime(podcast.durationSec)}</span>
          </div>
        </div>

        {/* Right: Audio utilities & close */}
        <div className="flex items-center space-x-3 shrink-0">
          {/* Speed button */}
          <button
            onClick={cycleSpeed}
            className="px-2 py-0.5 rounded border border-neutral-700 text-[10px] font-bold text-neutral-300 hover:border-neutral-500 hover:text-white transition"
            title="Playback speed"
          >
            {speed}x
          </button>

          {/* Mute button */}
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="text-neutral-400 hover:text-white transition p-1 hidden sm:block"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>

          {/* Dismiss */}
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-white transition p-1"
            title="Close audio player"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
};
