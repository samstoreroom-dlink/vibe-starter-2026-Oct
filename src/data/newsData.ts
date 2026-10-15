import {
  Article,
  LiveUpdateItem,
  RecipeData,
  StockTicker,
  WirecutterReview,
  PodcastEpisode,
} from '../types/news';

export const STOCK_TICKERS: StockTicker[] = [
  { symbol: 'S&P 500', name: 'S&P 500 Index', change: '+0.47%', isPositive: true, value: '5,842.47', high52: '5,871.30', low52: '4,103.78', volume: '3.82B' },
  { symbol: 'Dow', name: 'Dow Jones Industrial', change: '+0.79%', isPositive: true, value: '43,077.70', high52: '43,215.10', low52: '32,327.40', volume: '388M' },
  { symbol: 'Nasdaq', name: 'Nasdaq Composite', change: '+0.28%', isPositive: true, value: '18,367.08', high52: '18,671.07', low52: '12,543.86', volume: '5.14B' },
  { symbol: '10-Yr Bond', name: 'U.S. 10-Year Treasury', change: '+0.03%', isPositive: true, value: '4.03%', high52: '5.02%', low52: '3.62%', volume: '-' },
  { symbol: 'Crude Oil', name: 'WTI Crude Futures', change: '-1.12%', isPositive: false, value: '$70.58', high52: '$95.03', low52: '$66.80', volume: '1.2M' },
  { symbol: 'Gold', name: 'Gold Comex', change: '+0.41%', isPositive: true, value: '$2,678.90', high52: '$2,688.00', low52: '$1,810.20', volume: '240K' },
];

export const DAILY_PODCAST: PodcastEpisode = {
  id: 'the-daily-briefing-room',
  show: 'The Daily',
  title: 'The Battle for the White House Briefing Room',
  host: 'Michael Barbaro',
  duration: '26 mins',
  durationSec: 1560,
  date: 'Wednesday, Oct. 16, 2024',
  coverImage: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=600&q=80',
  description:
    'As the president-elect prepares an unconventional transition team, veteran reporters parse whether confrontational legal courtroom rhetoric can survive under the historic scrutiny of the James S. Brady Press Briefing Room.',
};

export const MAIN_SPOTLIGHT_ARTICLE: Article = {
  id: 'spotlight-press-secretary',
  title: 'Trump’s New Press Secretary: Not Quite Attorney at Law',
  summary:
    'Karoline Leavitt and legal confidantes have confronted swift shifts in communication strategies, leaving seasoned party strategists to parse whether courtroom rhetoric can seamlessly translate to the White House briefing podium.',
  category: 'U.S. Politics',
  readTime: '6 MIN READ',
  author: 'Jonathan Swan and Maggie Haberman',
  date: 'Oct. 16, 2024',
  section: 'us',
  isLead: true,
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
    section: 'us',
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
    section: 'us',
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
    section: 'us',
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
    section: 'us',
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
    section: 'business',
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
    authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    date: 'Oct. 16, 2024',
    section: 'opinion',
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
    authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    date: 'Oct. 16, 2024',
    section: 'opinion',
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
    authorAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
    date: 'Oct. 16, 2024',
    section: 'opinion',
    commentsCount: 410,
    content: [
      'Across campuses this autumn, faculty lounges are consumed by anxiety over the accelerating collapse of liberal arts enrollments and the opaque aftermath of affirmative action bans.',
      'When education becomes solely transactional—measured strictly by first-year starting compensation in finance or software—the broader civic purpose of universities ceases to function.',
      'We risk raising a generation proficient in technical execution but bereft of historical perspective and ethical reflection.',
    ],
  },
  {
    id: 'opinion-stephens',
    title: 'The Perils of Strategic Ambiguity in Modern Deterrence',
    summary:
      'From Eastern Europe to the Taiwan Strait, adversaries test whether defensive treaties retain real military teeth.',
    category: 'Opinion',
    readTime: '5 MIN READ',
    author: 'Bret Stephens',
    authorRole: 'COLUMNIST',
    authorInitials: 'BS',
    date: 'Oct. 16, 2024',
    section: 'opinion',
    commentsCount: 290,
    content: [
      'Deterrence fails not when a nation lacks military hardware, but when its perceived will to use that power wavers.',
      'When red lines are drawn with invisible ink, regional revisionists will inevitably push past them.',
    ],
  },
];

export const WORLD_ARTICLES: Article[] = [
  {
    id: 'world-1-mideast',
    title: 'Diplomatic Envoys Meet in Cairo to Safeguard Red Sea Commercial Corridors',
    summary: 'A coalition of maritime nations pledges coordinated naval escorts as shipping lanes face ongoing drone threats.',
    category: 'Middle East',
    readTime: '5 MIN READ',
    author: 'Vivian Yee and Edward Wong',
    date: 'Oct. 16, 2024',
    section: 'world',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=80',
    imageCaption: 'Container vessels queued in maritime approaches.',
    content: [
      'CAIRO — International maritime delegations concluded marathon closed-door deliberations regarding shared insurance risk pools and synchronized naval patrols.',
      'The economic ramifications of persistent circumnavigation around the Cape of Good Hope have begun trickling into European port inventories.',
    ],
  },
  {
    id: 'world-2-ukraine',
    title: 'European Defense Ministers Pledge Accelerated Artillery Production Ahead of Winter',
    summary: 'Joint industrial consortiums in Germany and Poland aim to bridge critical ammunition shortfalls for frontline garrisons.',
    category: 'Europe',
    readTime: '6 MIN READ',
    author: 'Steven Erlanger',
    date: 'Oct. 16, 2024',
    section: 'world',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80',
    imageCaption: 'Industrial defense facility outside Munich.',
    content: [
      'BRUSSELS — With freezing temperatures approaching, European Union defense officials finalized multi-billion euro procurement contracts designed to guarantee continuous supply lines.',
    ],
  },
  {
    id: 'world-3-asia',
    title: 'East Asian Semiconductor Hubs Accelerate Onshore Power Infrastructure Upgrades',
    summary: 'Taiwan and South Korea invest heavily in dedicated nuclear and offshore wind grids to power advanced fabrication plants.',
    category: 'Asia Pacific',
    readTime: '4 MIN READ',
    author: 'Choe Sang-Hun',
    date: 'Oct. 16, 2024',
    section: 'world',
    content: [
      'TAIPEI — The relentless electrical demand of 2-nanometer chip fabrication has made energy reliability the paramount national security concern across the Pacific.',
    ],
  },
];

export const BUSINESS_ARTICLES: Article[] = [
  {
    id: 'biz-1-semiconductors',
    title: 'Chipmakers Race to Secure High-Bandwidth Memory Contracts Through 2026',
    summary: 'Unprecedented demand from hyper-scaler AI training clusters leads to multi-year forward supply commitments.',
    category: 'Markets',
    readTime: '5 MIN READ',
    author: 'Tripp Mickle',
    date: 'Oct. 16, 2024',
    section: 'business',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80',
    imageCaption: 'Cleanroom testing wafer yields in Silicon Valley.',
    content: [
      'SAN JOSE, Calif. — The semiconductor market has divided cleanly between specialized AI accelerators and commoditized consumer electronics, creating wild divergence in quarterly earnings.',
    ],
  },
  {
    id: 'biz-2-housing',
    title: 'Mortgage Rate Stabilization Sparks Cautious Autumn Rebound in Home Listings',
    summary: 'Sellers who delayed moves due to the "lock-in effect" are gradually re-entering suburban metropolitan markets.',
    category: 'Real Estate',
    readTime: '4 MIN READ',
    author: 'Conor Dougherty',
    date: 'Oct. 16, 2024',
    section: 'business',
    content: [
      'Across Phoenix, Atlanta, and Dallas, real estate brokerages reported a noticeable uptick in buyer foot traffic as 30-year fixed loan rates settled below 6.5 percent.',
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

export const COOKING_RECIPES: RecipeData[] = [
  {
    id: 'recipe-tomato-white-bean-stew',
    title: 'Creamy Tomato and White Bean Stew With Garlic Toast',
    subtitle: '35 minutes • Easy weeknight meal',
    time: '35 minutes',
    difficulty: 'Easy',
    rating: 5,
    reviewsCount: 2410,
    author: 'Ali Slagle',
    category: 'Dinner',
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
      'Heat 2 tablespoons of olive oil in a large Dutch oven or deep skillet over medium heat. Add the sliced garlic, smoked paprika, and red-pepper flakes. Sauté for 1 to 2 minutes until aromatic and golden.',
      'Add the drained beans, crushed tomatoes, and broth. Season generously with kosher salt and black pepper. Bring to a vigorous simmer.',
      'Reduce the heat to medium-low and simmer uncovered for 15 minutes, stirring occasionally. Crush half of the beans against the side of the pot to thicken.',
      'Stir in the heavy cream and spinach/kale. Cook for 2 to 3 minutes until gently wilted.',
      'Toast sourdough slices, rub with raw garlic clove, and serve alongside piping hot stew.',
    ],
    nutrition: { calories: 420, protein: '16g', carbs: '54g', fat: '15g' },
  },
  {
    id: 'recipe-crispy-gnocchi',
    title: 'Sheet-Pan Crisp Gnocchi With Burst Tomatoes and Mozzarella',
    subtitle: '25 minutes • Vegetarian dinner',
    time: '25 minutes',
    difficulty: 'Easy',
    rating: 4.9,
    reviewsCount: 1890,
    author: 'Hetty Lui McKinnon',
    category: 'Vegetarian',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1000&q=80',
    description:
      'Roasting shelf-stable potato gnocchi straight from the package without boiling yields a shatteringly crisp exterior and a pillowy center, drenched in blistered cherry tomato juices and melted fresh mozzarella.',
    servings: 4,
    ingredients: [
      { amount: '1 lb', item: 'Shelf-stable potato gnocchi (uncooked)' },
      { amount: '2 pints', item: 'Cherry or grape tomatoes' },
      { amount: '1/4 cup', item: 'Extra-virgin olive oil' },
      { amount: '8 oz', item: 'Fresh mozzarella, torn into bite-sized chunks' },
      { amount: '1 bunch', item: 'Fresh basil leaves, torn' },
      { amount: '1 tsp', item: 'Dried oregano and flaky sea salt' },
    ],
    steps: [
      'Preheat oven to 425°F (220°C). On a large rimmed baking sheet, toss the uncooked gnocchi, cherry tomatoes, and olive oil with salt and oregano.',
      'Roast for 20 minutes without stirring until gnocchi are crisp and golden and tomatoes burst.',
      'Scatter torn mozzarella over the sheet pan. Return to the oven for 3 to 4 minutes until cheese melts and bubbles.',
      'Garnish with fresh basil and freshly ground black pepper.',
    ],
    nutrition: { calories: 480, protein: '18g', carbs: '62g', fat: '18g' },
  },
  {
    id: 'recipe-salted-cookies',
    title: 'Giant Salted Chocolate Chunk Cookies',
    subtitle: '45 minutes • Classic Baking',
    time: '45 minutes',
    difficulty: 'Medium',
    rating: 5,
    reviewsCount: 4620,
    author: 'Melissa Clark',
    category: 'Baking',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1000&q=80',
    description:
      'The benchmark chocolate chip cookie: ringed with rippling crispy edges, a gooey fudgy center, and bittersweet chocolate pools topped with crunchy Maldon flakes.',
    servings: 12,
    ingredients: [
      { amount: '2 cups', item: 'All-purpose flour' },
      { amount: '1 cup', item: 'Unsalted brown butter, cooled' },
      { amount: '3/4 cup', item: 'Dark brown sugar, packed' },
      { amount: '1/2 cup', item: 'Granulated cane sugar' },
      { amount: '2 large', item: 'Eggs at room temperature' },
      { amount: '10 oz', item: 'Bittersweet chocolate (70%), hand-chopped' },
      { amount: '1 tbsp', item: 'Maldon flaky sea salt' },
    ],
    steps: [
      'Whisk browned butter with brown and granulated sugars until fluffy and pale.',
      'Beat in eggs and pure vanilla extract.',
      'Fold in flour mixture and chopped chocolate pools.',
      'Bake at 350°F for 12 to 14 minutes. Bang sheet pan on counter at minute 10 for ripples. Sprinkle with Maldon salt.',
    ],
    nutrition: { calories: 340, protein: '4g', carbs: '42g', fat: '17g' },
  },
];

export const WIRECUTTER_REVIEWS: WirecutterReview[] = [
  {
    id: 'wc-chairs',
    title: 'The Best Ergonomic Office Chairs for Long Working Days',
    category: 'Home Office',
    testedHours: 120,
    updatedDate: 'Oct 14, 2024',
    author: 'Samira Farah',
    image: 'https://images.unsplash.com/photo-1580481077195-c3a82145be60?auto=format&fit=crop&w=1000&q=80',
    leadSummary:
      'After 120 hours of posture testing with ergonomic consultants and a dozen diverse body types, the Steelcase Gesture remains our unmatched favorite for adjustability and back support.',
    topPick: {
      name: 'Steelcase Gesture',
      price: '$1,380',
      badge: 'Our Pick',
      whyWeLikeIt:
        'The ball-and-socket armrests move in 360 degrees to support any seating posture, from phone texting to upright typing.',
      pros: ['Exceptional lumbar contouring', 'Ultra-breathable woven textile', '12-year manufacturer warranty'],
    },
    budgetPick: {
      name: 'HON Ignition 2.0',
      price: '$395',
      badge: 'Budget Pick',
      whyWeLikeIt:
        'Delivers 85 percent of the ergonomic adjustability of thousand-dollar chairs at a third of the investment.',
      pros: ['Solid synchro-tilt mechanism', 'Height-adjustable arms', 'Quick 15-minute assembly'],
    },
  },
  {
    id: 'wc-espresso',
    title: 'The Best Espresso Machines for Authentic Home Cafés',
    category: 'Kitchen Gear',
    testedHours: 95,
    updatedDate: 'Oct 10, 2024',
    author: 'Margot Cavin',
    image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=1000&q=80',
    leadSummary:
      'We pulled more than 400 double shots with dark and light roasts to discover which machine balances pressure stability with commercial steam wand power.',
    topPick: {
      name: 'Breville Bambino Plus',
      price: '$499',
      badge: 'Our Pick',
      whyWeLikeIt:
        'Reaches optimal 200°F extraction temperature in just 3 seconds with thermo-jet technology and micro-foam auto milk steaming.',
      pros: ['Compact 7-inch footprint', 'Commercial 54mm portafilter', 'Automatic milk texturing sensor'],
    },
    budgetPick: {
      name: 'De\'Longhi Dedica Deluxe',
      price: '$249',
      badge: 'Budget Pick',
      whyWeLikeIt: 'Slim, dependable 15-bar pump unit that fits tight counters and pulls reliable morning espresso.',
      pros: ['Manual frother control', 'Fast heat-up', 'Affordable replacement parts'],
    },
  },
];

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
