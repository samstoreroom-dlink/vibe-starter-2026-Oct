import React, { useState, useEffect } from 'react';
import {
  X,
  Bookmark,
  Share2,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Type,
  MessageSquare,
  ThumbsUp,
  Clock,
  Send,
  Sparkles,
} from 'lucide-react';
import { Article } from '../types/news';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
  onSaveArticle?: (article: Article) => void;
  isSaved?: boolean;
  onSelectArticle?: (article: Article) => void;
  relatedArticles?: Article[];
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  onClose,
  onSaveArticle,
  isSaved = false,
  onSelectArticle,
  relatedArticles = [],
}) => {
  if (!article) return null;

  const [fontSize, setFontSize] = useState<'normal' | 'medium' | 'large'>('normal');
  const [fontFamily, setFontFamily] = useState<'serif' | 'sans'>('serif');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioProgress, setAudioProgress] = useState(15);
  const [copied, setCopied] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [userComments, setUserComments] = useState<{ name: string; time: string; text: string; likes: number }[]>([
    {
      name: 'Eleanor Vance',
      time: '1 hour ago',
      text: 'Remarkable reporting as always. The institutional shifts being highlighted here reveal the deep cultural reconfiguration within federal agencies.',
      likes: 42,
    },
    {
      name: 'Marcus Brody',
      time: '3 hours ago',
      text: 'What stands out most is the contrast between traditional procedural law and public-relations-first litigation tactics.',
      likes: 19,
    },
  ]);

  // Audio simulator
  useEffect(() => {
    let timer: any = null;
    if (isPlayingAudio) {
      timer = setInterval(() => {
        setAudioProgress((prev) => {
          if (prev >= 100) {
            setIsPlayingAudio(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isPlayingAudio]);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    setUserComments([
      {
        name: 'You (Reader)',
        time: 'Just now',
        text: newComment.trim(),
        likes: 1,
      },
      ...userComments,
    ]);
    setNewComment('');
  };

  const fontClass =
    fontSize === 'normal'
      ? 'text-base leading-relaxed'
      : fontSize === 'medium'
      ? 'text-lg leading-relaxed'
      : 'text-xl leading-loose';

  const familyClass = fontFamily === 'serif' ? 'font-nytserif' : 'font-sans';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-2 sm:p-4 animate-in fade-in duration-200">
      <div className="bg-white max-w-3xl w-full rounded-lg shadow-2xl border border-neutral-300 flex flex-col max-h-[95vh] overflow-hidden">
        {/* Sticky Utility Header */}
        <div className="flex items-center justify-between px-6 py-3 border-b border-neutral-200 bg-white/95 backdrop-blur-xs shrink-0">
          <div className="flex items-center space-x-3 text-xs font-sans text-neutral-600">
            <span className="font-bold tracking-wider uppercase text-neutral-900">
              {article.category}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-neutral-500">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
          </div>

          {/* Action Toolbar */}
          <div className="flex items-center space-x-1.5 sm:space-x-3 text-neutral-600">
            {/* Audio Toggle */}
            <button
              onClick={() => setIsPlayingAudio(!isPlayingAudio)}
              className={`flex items-center space-x-1 px-2.5 py-1 rounded text-xs transition ${
                isPlayingAudio ? 'bg-neutral-900 text-white' : 'hover:bg-neutral-100'
              }`}
              title="Listen to article"
            >
              {isPlayingAudio ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{isPlayingAudio ? 'Playing' : 'Listen'}</span>
            </button>

            {/* Typography Controls */}
            <div className="flex items-center border border-neutral-200 rounded px-1.5 py-0.5 text-xs">
              <button
                onClick={() => setFontFamily(fontFamily === 'serif' ? 'sans' : 'serif')}
                className="px-1.5 hover:text-black font-serif font-bold"
                title="Toggle font style (Serif / Sans)"
              >
                {fontFamily === 'serif' ? 'Serif' : 'Sans'}
              </button>
              <span className="text-neutral-300">|</span>
              <button
                onClick={() =>
                  setFontSize((s) => (s === 'normal' ? 'medium' : s === 'medium' ? 'large' : 'normal'))
                }
                className="px-1.5 hover:text-black font-bold"
                title="Change font size"
              >
                A±
              </button>
            </div>

            {/* Bookmark button */}
            <button
              onClick={() => onSaveArticle?.(article)}
              className={`p-1.5 rounded transition ${
                isSaved ? 'text-red-600 bg-red-50' : 'hover:bg-neutral-100'
              }`}
              title={isSaved ? 'Saved in Reading List' : 'Save article'}
            >
              <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
            </button>

            {/* Share */}
            <button
              onClick={handleShare}
              className="p-1.5 rounded hover:bg-neutral-100 transition relative"
              title="Share article link"
            >
              <Share2 className="w-4 h-4" />
              {copied && (
                <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-0.5 rounded shadow">
                  Copied!
                </span>
              )}
            </button>

            {/* Close */}
            <button
              onClick={onClose}
              className="p-1.5 rounded hover:bg-neutral-100 text-neutral-800 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Audio Player Bar if active */}
        {isPlayingAudio && (
          <div className="bg-neutral-900 text-white px-6 py-2.5 flex items-center justify-between text-xs animate-in slide-in-from-top-2">
            <div className="flex items-center space-x-3">
              <Volume2 className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span className="font-sans">
                Narrated reading: <strong className="font-semibold">{article.title.slice(0, 45)}...</strong>
              </span>
            </div>
            <div className="flex items-center space-x-3 w-1/3">
              <div className="w-full bg-neutral-700 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-emerald-400 h-full transition-all duration-300"
                  style={{ width: `${audioProgress}%` }}
                ></div>
              </div>
              <span className="font-mono text-[10px] text-neutral-300">03:12</span>
            </div>
          </div>
        )}

        {/* Article Body Content */}
        <div className="overflow-y-auto px-6 sm:px-12 py-8 space-y-6">
          {/* Article Header */}
          <div className="space-y-4 max-w-2xl mx-auto">
            {article.badge && (
              <span className="text-[11px] font-bold tracking-widest uppercase text-red-700 block">
                {article.badge}
              </span>
            )}
            <h1 className="font-headline text-3xl sm:text-4xl lg:text-[40px] font-bold text-neutral-950 headline-leading">
              {article.title}
            </h1>
            <p className="font-nytserif text-lg text-neutral-600 leading-snug">
              {article.summary}
            </p>

            <div className="flex items-center justify-between pt-3 hairline-b pb-4 text-xs font-sans text-neutral-500">
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-neutral-900">By {article.author}</span>
                <span>•</span>
                <span>{article.date}</span>
              </div>
              <button
                onClick={() => setShowComments(!showComments)}
                className="flex items-center space-x-1.5 hover:text-neutral-900 text-neutral-600"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>{(article.commentsCount || userComments.length).toLocaleString()} Comments</span>
              </button>
            </div>
          </div>

          {/* Hero Image if present */}
          {article.image && (
            <figure className="max-w-2xl mx-auto space-y-1.5">
              <div className="border border-neutral-200 overflow-hidden bg-neutral-100 rounded-xs">
                <img
                  src={article.image}
                  alt={article.imageCaption || article.title}
                  className="w-full max-h-[440px] object-cover"
                />
              </div>
              {article.imageCaption && (
                <figcaption className="text-[11px] text-neutral-500 font-sans flex justify-between px-1">
                  <span>{article.imageCaption}</span>
                  {article.imageCredit && (
                    <span className="text-[10px] uppercase text-neutral-400">{article.imageCredit}</span>
                  )}
                </figcaption>
              )}
            </figure>
          )}

          {/* Story Paragraphs */}
          <div className={`max-w-2xl mx-auto space-y-5 text-neutral-900 ${familyClass} ${fontClass}`}>
            {article.content.map((paragraph, idx) => (
              <p
                key={idx}
                className={idx === 0 ? 'first-letter:text-5xl first-letter:font-headline first-letter:font-bold first-letter:float-left first-letter:mr-2.5 first-letter:leading-none' : ''}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Comments Section */}
          <div className="max-w-2xl mx-auto pt-8 hairline-t space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-headline font-bold text-xl text-neutral-900 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-neutral-600" />
                Reader Comments ({userComments.length})
              </h3>
              <span className="text-xs text-neutral-400 font-sans">Moderated for civil discourse</span>
            </div>

            {/* Comment Form */}
            <form onSubmit={handleAddComment} className="space-y-2">
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Share your perspective on this report..."
                rows={3}
                className="w-full border border-neutral-300 rounded p-3 text-sm focus:outline-none focus:border-neutral-900 font-sans resize-none"
              ></textarea>
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={!newComment.trim()}
                  className="flex items-center space-x-1.5 bg-neutral-900 hover:bg-neutral-800 text-white px-4 py-1.5 rounded text-xs font-semibold disabled:opacity-40 transition"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Post Comment</span>
                </button>
              </div>
            </form>

            {/* Comments List */}
            <div className="space-y-4 pt-2">
              {userComments.map((comment, i) => (
                <div key={i} className="p-4 bg-neutral-50 border border-neutral-200 rounded text-xs space-y-1.5">
                  <div className="flex justify-between items-baseline font-sans">
                    <span className="font-bold text-neutral-900">{comment.name}</span>
                    <span className="text-neutral-400 text-[11px]">{comment.time}</span>
                  </div>
                  <p className="font-nytserif text-sm text-neutral-800 leading-relaxed">
                    {comment.text}
                  </p>
                  <div className="flex items-center space-x-1 text-neutral-500 pt-1">
                    <ThumbsUp className="w-3 h-3 hover:text-neutral-900 cursor-pointer" />
                    <span className="text-[11px]">{comment.likes}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Related Articles Strip */}
          {relatedArticles.length > 0 && (
            <div className="max-w-2xl mx-auto pt-8 hairline-t space-y-4">
              <h4 className="font-headline font-bold text-base text-neutral-900 uppercase tracking-wider">
                Related Coverage
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedArticles.slice(0, 2).map((rel) => (
                  <div
                    key={rel.id}
                    onClick={() => onSelectArticle?.(rel)}
                    className="p-3 border border-neutral-200 hover:border-neutral-900 cursor-pointer transition rounded-xs space-y-1.5 bg-neutral-50/50"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 font-sans">
                      {rel.category}
                    </span>
                    <h5 className="font-headline font-bold text-sm text-neutral-900 hover:underline leading-snug">
                      {rel.title}
                    </h5>
                    <span className="text-[11px] text-neutral-400 block font-sans">{rel.readTime}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
