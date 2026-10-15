export interface Article {
  id: string;
  title: string;
  summary: string;
  content: string[];
  category: string;
  readTime: string;
  author: string;
  authorRole?: string;
  authorInitials?: string;
  authorAvatar?: string;
  date: string;
  image?: string;
  imageCaption?: string;
  imageCredit?: string;
  tag?: string;
  badge?: string;
  isOpinion?: boolean;
  isLead?: boolean;
  commentsCount?: number;
  section?: 'us' | 'world' | 'business' | 'opinion' | 'arts' | 'lifestyle' | 'wirecutter' | 'athletic';
}

export interface LiveUpdateItem {
  id: string;
  timestamp: string;
  headline: string;
  summary: string;
  author: string;
  location: string;
}

export interface RecipeData {
  id: string;
  title: string;
  subtitle: string;
  time: string;
  difficulty: string;
  rating: number;
  reviewsCount: number;
  author: string;
  image: string;
  description: string;
  servings: number;
  category?: 'Dinner' | 'Weeknight' | 'Vegetarian' | 'Baking' | 'Soup';
  ingredients: { amount: string; item: string }[];
  steps: string[];
  nutrition: { calories: number; protein: string; carbs: string; fat: string };
}

export interface WirecutterReview {
  id: string;
  title: string;
  category: string;
  testedHours: number;
  updatedDate: string;
  author: string;
  image: string;
  leadSummary: string;
  topPick: {
    name: string;
    price: string;
    badge: 'Our Pick' | 'Budget Pick' | 'Upgrade Pick';
    whyWeLikeIt: string;
    pros: string[];
  };
  budgetPick: {
    name: string;
    price: string;
    badge: 'Budget Pick';
    whyWeLikeIt: string;
    pros: string[];
  };
}

export interface StockTicker {
  symbol: string;
  name: string;
  change: string;
  isPositive: boolean;
  value: string;
  high52: string;
  low52: string;
  volume: string;
}

export interface PodcastEpisode {
  id: string;
  show: string;
  title: string;
  host: string;
  duration: string;
  durationSec: number;
  description: string;
  date: string;
  coverImage: string;
}
