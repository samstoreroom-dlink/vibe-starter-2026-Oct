import { Article, LiveUpdateItem, RecipeData, StockTicker } from '../types/news';

export const STOCK_TICKERS: StockTicker[] = [
  { symbol: 'S&P 500', name: 'S&P 500', change: '+0.47%', isPositive: true, value: '5,842.47' },
  { symbol: 'Dow', name: 'Dow Jones', change: '+0.79%', isPositive: true, value: '43,077.70' },
  { symbol: 'Nasdaq', name: 'Nasdaq Composite', change: '+0.28%', isPositive: true, value: '18,367.08' },
  { symbol: '10-Yr Bond', name: '10-Year Treasury', change: '+0.03%', isPositive: true, value: '4.03%' },
  { symbol: 'Crude Oil', name: 'WTI Crude', change: '-1.12%', isPositive: false, value: '$70.58' },
  { symbol: 'Gold', name: 'Gold Comex', change: '+0.41%', isPositive: true, value: '$2,678.90' },
];

export const MAIN_SPOTLIGHT_ARTICLE: Article = {
  id: 'spotlight-press-secretary',
  title: 'Trump’s New Press Secretary: Not Quite Attorney at Law',
  summary:
    'Karoline Leavitt and legal confidantes have confronted swift shifts in communication strategies, leaving seasoned party strategists to parse whether courtroom rhetoric can seamlessly translate to the White House briefing podium.',
  category: 'U.S. Politics',
  readTime: '6 MIN READ',
  author: 'Jonathan Swan and Maggie Haberman',
  date: 'Oct. 16, 2024',
  image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1200&q=80',
  imageCaption: 'Alina Habba addressing reporters on Capitol Hill.',
  imageCredit: 'DOUG MILLS / THE NEW YORK TIMES',
  tag: 'White House Transition',
  commentsCount: 482,
  content: [
    'WASHINGTON — In the ornate marble corridors of Capitol Hill and across the campaign battlegrounds, the transition operation has operated with the kinetic energy of an unceasing courtroom drama.',
    'Karoline Leavitt and legal confidantes have confronted swift shifts in communication strategies, leaving seasoned party strategists to parse whether courtroom rhetoric can seamlessly translate to the White House briefing podium.',
    'Unlike previous administrative handovers that favored bureaucratic veterans steeped in procedural decorum, the emerging communications cadre draws heavily from attorneys and adversarial spokespeople honed in the glare of cable news and federal indictments.',
    '“The style is unabashedly combative, direct, and unscripted,” said a senior strategist involved in the briefings. “The priority isn’t placating the press corps; it is delivering an undiluted message directly to the base and testing institutional guardrails in real time.”',
    'As Capitol Hill committees prepare for confirmation hearings, the central challenge remains whether the aggressive legal postures struck during months of litigation can pivot to policy articulation, federal agency oversight, and international diplomacy.',
  ],
};

export const LEFT_COLUMN_ARTICLES: Article[] = [
  {
    id: 'left-1-women-leaving',
    title: 'High-Ranking Women Are Leaving the Trump Administration',
    summary:
      'As the president’s second term looms, those heading for the exits are female officials who had balanced traditional conservatism with fierce personal loyalty.',
    category: 'Politics',
    readTime: '5 MIN READ',
    author: 'Maggie Haberman',
    date: 'Oct. 16, 2024',
    commentsCount: 312,
    content: [
      'WASHINGTON — Across key executive branch agencies, several prominent female officials are quietly stepping down or declining roles in the incoming administration.',
      'For four years, these leaders navigated the razor-thin divide between orthodox policy implementation and the demands of an unpredictable West Wing hierarchy.',
      'Their departures mark a notable transition point, depleting the administration of institutional memory and seasoned liaisons who frequently smoothed over friction with Congressional leadership.',
      'Colleagues describe an atmosphere where tenure has increasingly grown dependent on ideological conformity rather than programmatic achievements.',
    ],
  },
  {
    id: 'left-2-guilfoyle',
    title: 'The Steep Rise and Sudden Fall of Kimberly Guilfoyle',
    summary:
      'Her path from local prosecutor to inner sanctum powerhouse reflected the changing dynamics of national politics.',
    category: 'National',
    readTime: '7 MIN READ',
    author: 'Michael C. Bender',
    date: 'Oct. 16, 2024',
    commentsCount: 198,
    content: [
      'From her early days in the San Francisco District Attorney’s office to prime-time television and the innermost circle of national party fundraising, Kimberly Guilfoyle charted an audacious political trajectory.',
      'Yet the same relentless theatricality that fueled her ascendance has also exposed vulnerabilities as factional rivalries inside the inner circle intensify ahead of inauguration planning.',
      'Interviews with more than a dozen campaign operatives reveal how changing power centers have rearranged loyalties in Washington, leaving once-untouchable figures competing for diminishing administrative influence.',
    ],
  },
  {
    id: 'left-3-swing-state-polling',
    title: 'Why Swing-State Polling Still Shows a Nation on a Razor\'s Edge',
    summary:
      'Despite record turnout in early voting, key demographics in Michigan and Pennsylvania remain historically divided.',
    category: 'Elections',
    readTime: '4 MIN READ',
    author: 'Nate Cohn',
    badge: 'ANALYSIS',
    date: 'Oct. 16, 2024',
    commentsCount: 524,
    content: [
      'A battery of state-level surveys released this week confirms what campaign pollsters have privately acknowledged for months: the 2024 presidential contest remains locked within the margin of error across all seven major battlegrounds.',
      'In Pennsylvania and Michigan, blue-collar suburban counties that swung heavily in previous election cycles are displaying conflicting crosscurrents. While suburban women show heightened enthusiasm, working-class men across the Rust Belt continue drifting toward conservative populist appeals.',
      'With early ballots already being processed in record volumes, turnout models are being tested like never before in modern electoral history.',
    ],
  },
];

export const MORE_NEWS_BRIEFS: { id: string; title: string; category: string; readTime: string }[] = [
  {
    id: 'brief-1-fed',
    title: 'Federal Reserve Signals Cautious Path Ahead on Interest Rate Adjustments',
    category: 'Business',
    readTime: '3 min read',
  },
  {
    id: 'brief-2-europe',
    title: 'European Leaders Gather to Address Renewable Transition Stalls',
    category: 'World',
    readTime: '4 min read',
  },
  {
    id: 'brief-3-tech',
    title: 'Tech Stocks Rally Following Key Semiconductor Earnings Reports',
    category: 'Technology',
    readTime: '2 min read',
  },
  {
    id: 'brief-4-supply',
    title: 'Global Freight Rates Rebound as Red Sea Transit Reroutes Become Permanent',
    category: 'Global Trade',
    readTime: '5 min read',
  },
];

export const CENTER_SUB_FEATURES: Article[] = [
  {
    id: 'center-border-negotiations',
    title: 'Behind the Closed-Door Negotiations Over Border Legislation',
    summary:
      'Bipartisan lawmakers worked through the night on compromise language that now faces severe hurdles in the House.',
    category: 'Congress',
    readTime: '3 MIN READ',
    author: 'Luke Broadwater',
    date: 'Oct. 16, 2024',
    commentsCount: 167,
    content: [
      'WASHINGTON — In the basement corridors of the Capitol, negotiators labored until 4 a.m. refining statutory thresholds for humanitarian parole and expedited deportation processing.',
      'While the Senate group reached tentative consensus, leadership in the House promptly warned that any measure omitting mandatory asylum suspensions would be declared dead on arrival.',
      'The stalemate underscores the deep ideological gulf that has paralyzed major immigration overhauls on Capitol Hill for two decades.',
    ],
  },
  {
    id: 'center-ai-data-centers',
    title: 'The Artificial Intelligence Boom Is Reshaping Data Center Real Estate',
    summary:
      'Small rural towns with access to massive electrical grids find themselves at the center of a high-stakes land rush.',
    category: 'Technology & Real Estate',
    readTime: '4 MIN READ',
    author: 'Karen Weise',
    date: 'Oct. 16, 2024',
    commentsCount: 220,
    content: [
      'BOYDTON, Va. — In quiet agricultural valleys once dominated by tobacco farms and dairy barns, multi-gigawatt computing campuses are reshaping the economic and physical landscape.',
      'Tech giants are pouring billions into land acquisitions where high-voltage transmission lines intersect with municipal water supplies required to cool next-generation server clusters.',
      'Local communities are wrestling with soaring property tax revenues alongside sudden strains on public utilities and surging electricity rates for residential customers.',
    ],
  },
];

export const OPINION_PIECES: Article[] = [
  {
    id: 'opinion-friedman',
    title: 'Why Democracy Depends on the Fragile Art of Agreement',
    summary:
      'Compromise is neither cowardice nor weakness; in a polyglot democracy, it is the sole operating system capable of preventing societal fracture.',
    category: 'Opinion',
    readTime: '6 MIN READ',
    author: 'Thomas L. Friedman',
    authorRole: 'GUEST ESSAY',
    authorInitials: 'TF',
    date: 'Oct. 16, 2024',
    commentsCount: 640,
    content: [
      'We have arrived at a perilous inflection point where the willingness to negotiate is treated in both parties as a form of ideological treason.',
      'Great civilizations do not fall primarily from external conquest; they crumble when their internal coalitions lose the capacity to solve basic collective problems.',
      'If we cannot rediscover the courage to give ground on secondary principles to protect primary constitutional norms, the fragile experiment in self-governance will unravel under the weight of purity tests.',
    ],
  },
  {
    id: 'opinion-krugman',
    title: 'What the Economic Numbers Aren’t Telling Us About Real Wages',
    summary:
      'Headline inflation has plummeted and employment remains robust, yet voter sentiment tells a profoundly disconnected story.',
    category: 'Opinion',
    readTime: '5 MIN READ',
    author: 'Paul Krugman',
    authorRole: 'COLUMNIST',
    authorInitials: 'PK',
    date: 'Oct. 16, 2024',
    commentsCount: 890,
    content: [
      'Economists look at real wage growth adjusted for the Consumer Price Index and see a soft landing that defies standard historical precedents.',
      'Yet ordinary households do not evaluate their financial well-being through annualized rate-of-change statistics; they feel the cumulative 22 percent increase in grocery and shelter costs since 2020 every time they visit the supermarket.',
      'Closing that perception gap requires policy makers to acknowledge cumulative price shock rather than lecturing the public on macroeconomic graphs.',
    ],
  },
  {
    id: 'opinion-goldberg',
    title: 'The Quiet Crisis in Higher Education Admissions',
    summary:
      'The aftershocks of the Supreme Court ruling and plummeting humanities enrollments are reshaping university life in ways few anticipated.',
    category: 'Opinion',
    readTime: '5 MIN READ',
    author: 'Michelle Goldberg',
    authorRole: 'GUEST ESSAY',
    authorInitials: 'MG',
    date: 'Oct. 16, 2024',
    commentsCount: 410,
    content: [
      'Across campuses this autumn, faculty lounges are consumed by anxiety over the accelerating collapse of liberal arts enrollments and the opaque aftermath of affirmative action bans.',
      'When education becomes solely transactional—measured strictly by first-year starting compensation in finance or software—the broader civic purpose of universities ceases to function.',
      'We risk raising a generation proficient in technical execution but bereft of historical perspective and ethical reflection.',
    ],
  },
];

export const MOST_POPULAR_LIST: { id: string; rank: number; title: string; category: string; readTime: string }[] = [
  {
    id: 'pop-1',
    rank: 1,
    title: 'The Secret to Roasting Vegetables Until Sweet and Caramelized',
    category: 'Food & Cooking',
    readTime: '4 min read',
  },
  {
    id: 'pop-2',
    rank: 2,
    title: 'A 15-Minute Daily Routine for Core Mobility and Posture',
    category: 'Well',
    readTime: '5 min read',
  },
  {
    id: 'pop-3',
    rank: 3,
    title: 'How to Watch the Upcoming Comet Visible to the Naked Eye',
    category: 'Science',
    readTime: '3 min read',
  },
  {
    id: 'pop-4',
    rank: 4,
    title: 'The Best Ergonomic Office Chairs, Tested by Wirecutter',
    category: 'Wirecutter',
    readTime: '8 min read',
  },
  {
    id: 'pop-5',
    rank: 5,
    title: 'Why Scientists Are Re-examining the Speed of Brain Aging',
    category: 'Health',
    readTime: '6 min read',
  },
];

export const COOKING_SPOTLIGHT: RecipeData = {
  id: 'recipe-tomato-white-bean-stew',
  title: 'Creamy Tomato and White Bean Stew With Garlic Toast',
  subtitle: '35 minutes • Easy weeknight meal',
  time: '35 minutes',
  difficulty: 'Easy',
  rating: 5,
  reviewsCount: 2410,
  author: 'Ali Slagle',
  image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1000&q=80',
  description:
    'A comforting, velvety stew made from canned cannellini beans, rich San Marzano crushed tomatoes, smoked paprika, and a swirl of heavy cream or coconut milk. Served alongside thick slices of country sourdough rubbed with raw garlic and toasted in olive oil.',
  servings: 4,
  ingredients: [
    { amount: '3 tbsp', item: 'Extra-virgin olive oil' },
    { amount: '5 cloves', item: 'Garlic, thinly sliced (plus 1 whole clove for toast)' },
    { amount: '1 tsp', item: 'Smoked paprika or ground cumin' },
    { amount: '1/2 tsp', item: 'Crushed red-pepper flakes' },
    { amount: '2 cans (15 oz)', item: 'Cannellini or Great Northern beans, rinsed and drained' },
    { amount: '1 can (28 oz)', item: 'Crushed San Marzano tomatoes' },
    { amount: '1 cup', item: 'Low-sodium vegetable or chicken broth' },
    { amount: '1/3 cup', item: 'Heavy cream or full-fat coconut milk' },
    { amount: '2 cups', item: 'Baby spinach or roughly chopped Tuscan kale' },
    { amount: '4 thick slices', item: 'Crusty sourdough or country loaf' },
    { amount: 'To taste', item: 'Kosher salt and freshly cracked black pepper' },
    { amount: 'For garnish', item: 'Grated Parmigiano-Reggiano and fresh basil leaves' },
  ],
  steps: [
    'Heat 2 tablespoons of olive oil in a large Dutch oven or deep skillet over medium heat. Add the sliced garlic, smoked paprika, and red-pepper flakes. Sauté for 1 to 2 minutes until aromatic and golden, being careful not to burn.',
    'Add the drained beans, crushed tomatoes, and broth. Season generously with 1 teaspoon of kosher salt and black pepper. Bring to a vigorous simmer.',
    'Reduce the heat to medium-low and let simmer uncovered for 15 to 18 minutes, stirring occasionally. Using the back of a wooden spoon or potato masher, gently crush about half of the beans against the side of the pot to naturally thicken the stew.',
    'Stir in the heavy cream and spinach/kale. Cook for 2 to 3 minutes until the greens are gently wilted and the broth turns rich and silky.',
    'Meanwhile, brush the sourdough bread slices with the remaining olive oil. Toast on a hot skillet or grill pan until deeply golden and charred at the edges. Immediately rub one side of each warm slice with the cut side of the whole garlic clove.',
    'Ladle the warm stew into shallow bowls. Drizzle with extra-virgin olive oil, shower with freshly grated parmesan, and serve with the warm garlic toast for dipping.',
  ],
  nutrition: {
    calories: 420,
    protein: '16g',
    carbs: '54g',
    fat: '15g',
  },
};

export const LIVE_UPDATES_DATA: { headline: string; summary: string; lastUpdated: string; items: LiveUpdateItem[] } = {
  headline: 'Mideast Diplomatic Efforts Accelerate Amid Rising Regional Tensions',
  summary: 'Secretary of State engages in high-stakes talks with regional allies in Cairo and Doha.',
  lastUpdated: '12m ago',
  items: [
    {
      id: 'live-1',
      timestamp: '10:48 AM EDT',
      headline: 'Special Envoy Arrives in Doha for Bilateral Talks on Cease-Fire Framework',
      summary:
        'Negotiators from Qatar and the United States met behind closed doors to review revisions to hostage-exchange logistics and humanitarian aid corridors.',
      author: 'Edward Wong',
      location: 'Doha, Qatar',
    },
    {
      id: 'live-2',
      timestamp: '10:15 AM EDT',
      headline: 'Security Council Convenes Emergency Session in New York',
      summary:
        'Representatives discussed maritime security in the Red Sea and urged all parties to avoid escalatory strikes against commercial shipping infrastructure.',
      author: 'Farnaz Fassihi',
      location: 'United Nations, N.Y.',
    },
    {
      id: 'live-3',
      timestamp: '9:30 AM EDT',
      headline: 'Aid Convoys Move Through Rafah Following Temporary Security Clearance',
      summary:
        'Forty trucks carrying medical supplies and clean drinking water crossed into southern distribution centers after hours of security inspections.',
      author: 'Raja Abdulrahim',
      location: 'Cairo, Egypt',
    },
    {
      id: 'live-4',
      timestamp: '8:45 AM EDT',
      headline: 'Joint Statement Highlights Commitment to De-escalation Channels',
      summary:
        'Foreign ministers issued a communique reiterating the urgent need for verifiable pauses and humanitarian relief access across conflict zones.',
      author: 'Vivian Yee',
      location: 'Amman, Jordan',
    },
  ],
};
