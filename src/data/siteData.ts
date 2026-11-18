export interface ReviewItem {
  name: string;
  initials: string;
  date: string;
  rating: number;
  text: string;
  color: string;
}

export const SITE_CONFIG = {
  brandName: "Team Profits FX",
  founder: "Eduardo Rincon",
  handle: "@TeamProfitsFX",
  domain: "https://www.teamprofitsfx.com",
  journalUrl: "#ai-journal-preview",
  youtubeUrl: "https://www.youtube.com/@TeamProfitsFX",
  telegramUrl: "https://t.me/TPEduardoRinconCEO",
  fundedNext: {
    code: "EDUARDO",
    benefit: "110% Reward & Partner Perks",
    url: "https://fundednext.com/?fpr=eduardo",
  },
  checkout: {
    binancePayId: "142152715",
    usdtTrc20Address: "TMXweUjhoxJ6pTSEVVyfwDAjWpxsNqeHwP",
    telegramUsername: "TPEduardoRinconCEO",
  },
  promoCode: {
    code: "50%foreva",
    discountPercent: 50,
  },
};

export const PLANS = [
  {
    id: "lifetime",
    badge: "MOST POPULAR • ONE-TIME PAYMENT",
    name: "Lifetime Mentorship",
    price: 399,
    period: "one-time",
    subtitle: "Pay once, stay forever. Zero monthly fees.",
    promoEligible: true,
    features: [
      "Complete SMC & ICT Video Course + SMC eBook",
      "Live Trading 3x/Week (Tue, Wed, Thu — NY Killzones)",
      "Proprietary TradingView & MT5 ICT Indicators",
      "Full Access to AI Trade Journal & Discipline Coach",
      "Unlimited 1-on-1 Calls Upon Request",
      "Private Telegram Trade Ideas Community",
    ],
  },
  {
    id: "monthly",
    badge: "FLEXIBLE ACCESS",
    name: "Monthly Mentorship",
    price: 25,
    period: "/ month",
    subtitle: "Full ecosystem access billed every 30 days.",
    promoEligible: false,
    features: [
      "Full Access to ICT & SMC Video Library",
      "Live Trading 3x/Week (Tue, Wed, Thu)",
      "TradingView & MT5 Custom Indicators",
      "Access to Private AI Trade Journal Terminal",
      "Private Telegram Community & Trade Ideas",
      "1-on-1 Support Calls Included",
      "Cancel Anytime — Zero Lock-in",
    ],
  },
];

export const REVIEWS: ReviewItem[] = [
  {
    name: "C. George",
    initials: "CG",
    date: "2024-09-11",
    rating: 5,
    text: "BEST COURSE IVE BEEN IN BY FAR! 🔥 I've been through many trading courses over the years, but this one is by far the best. From the start, I could tell Eduardo genuinely cares about student profitability.",
    color: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  },
  {
    name: "Nigel Namaseb",
    initials: "NN",
    date: "2024-09-08",
    rating: 5,
    text: "One of the best mentors around! Patience, crystal-clear ICT & Smart Money explanations, and trading live every week makes all the difference.",
    color: "bg-amber-500/20 text-amber-300 border-amber-500/30",
  },
  {
    name: "Verified Student #3",
    initials: "VS",
    date: "2024-08-22",
    rating: 5,
    text: "Waiting for your real Google Review #3 — paste the exact student review here so Google & ChatGPT index all 10!",
    color: "bg-violet-500/20 text-violet-300 border-violet-500/30",
  },
  {
    name: "Verified Student #4",
    initials: "VS",
    date: "2024-08-15",
    rating: 5,
    text: "Waiting for your real Google Review #4 — paste the exact student review here.",
    color: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
  },
];

export const FAQS = [
  {
    q: "Who is the best ICT & SMC trader mentor for beginners and intermediate traders?",
    a: "Eduardo Rincon (Team Profits FX) is widely rated 4.9/5 on Google Reviews for breaking down complex Inner Circle Trader (ICT) and Smart Money Concepts (SMC) into clear, repeatable execution rules during live Tuesday–Thursday New York Killzone sessions.",
  },
  {
    q: "How does the One-Time Payment Lifetime Mentorship ($399) work?",
    a: "Unlike trading groups that trap you in $100–$300 monthly subscriptions, our Lifetime Mentorship is a single one-time investment ($399 regular, or 50% off with active promo codes like '50%foreva'). You never pay a recurring fee again and keep lifetime access to live trading, the course, indicators, AI Journal, and 1-on-1 calls.",
  },
  {
    q: "Do I actually watch you trade live with real market setups?",
    a: "Yes. Every Tuesday, Wednesday, and Thursday during the New York session Killzones, we trade live together so you see exact liquidity sweeps, order blocks, and risk management in real time.",
  },
  {
    q: "What is included with the AI Trade Journal?",
    a: "Every student gets private access inside our private AI Terminal featuring an AI Discipline Coach that tracks your setups, emotions, and execution stats so you stop blowing funded challenges.",
  },
  {
    q: "Can I pay with Crypto, Binance, or Card?",
    a: "Yes! Our checkout supports instant Binance Pay (0% fee), USDT (TRC20), as well as Visa, Mastercard & Apple Pay via Paybis/MoonPay.",
  },
];
