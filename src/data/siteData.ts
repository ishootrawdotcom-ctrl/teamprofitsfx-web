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
  blackFriday: {
    // Horarios oficiales de Nueva York (UTC-5)
    startNY: "2026-11-19T00:00:00-05:00", // Medianoche de hoy
    endNY: "2026-11-28T00:00:00-05:00",   // Medianoche al terminar el 27 de Noviembre
    discountPercent: 80,                 // 80% de descuento
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
    text: "BEST COURSE IVE BEEN IN BY FAR! 🔥 I've been through many trading courses over the years, but this one is by far the best.",
    color: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  },
  {
    name: "Nigel Namaseb",
    initials: "NN",
    date: "2024-09-08",
    rating: 5,
    text: "One of the best mentors around !",
    color: "bg-amber-500/20 text-amber-300 border-amber-500/30",
  },
  {
    name: "Charlene Inderjeeth",
    initials: "CI",
    date: "2024-09-07",
    rating: 5,
    text: "Eduardo is a great mentor! His educational trading videos are easy to understand and in-depth. He's always available to assist with any questions and supplies daily guidance. My understanding of ICT has improved a lot since I joined. His mentorship program is totally worth it!",
    color: "bg-rose-500/20 text-rose-300 border-rose-500/30",
  },
  {
    name: "Ali Haider",
    initials: "AH",
    date: "2024-09-05",
    rating: 5,
    text: "The mentorship is on another level like he tech each and everything very supportive person. personally i am very lucky to have teacher like this thanku sir you are great",
    color: "bg-lime-500/20 text-lime-300 border-lime-500/30",
  },
  {
    name: "Sherwood Titus",
    initials: "ST",
    date: "2024-09-05",
    rating: 5,
    text: "He is one of the few genuine traders out there trying to make a difference in young and aspiring trader's journey through real education. He trades live with his students so nothing is really done in hindsight. Keep up the good work Eduardo 💪💪",
    color: "bg-orange-500/20 text-orange-300 border-orange-500/30",
  },
  {
    name: "Muhammad Abdullah",
    initials: "MA",
    date: "2024-09-04",
    rating: 5,
    text: "Verified 5-star Google review.",
    color: "bg-slate-500/20 text-slate-300 border-slate-500/30",
  },
  {
    name: "Edward Mashwabi",
    initials: "EM",
    date: "2024-09-02",
    rating: 5,
    text: "Best mentor.",
    color: "bg-violet-500/20 text-violet-300 border-violet-500/30",
  },
  {
    name: "Wellington Mapope",
    initials: "WM",
    date: "2024-09-02",
    rating: 5,
    text: "Shoutout to one of the best mentor and Forex trader I've had the privilege of learning from! I've grown significantly under his guidance and mentorship. What makes him exceptional is his transparency - he doesn't hold back any information, making it easy to learn from him. Much love and respect all the way from South Africa! we love your work",
    color: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
  },
  {
    name: "Xolani Ndlovu",
    initials: "XN",
    date: "2024-09-02",
    rating: 4,
    text: "I have learned lot about trading smc, smt, ict lot risk management. His explanation very good",
    color: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  },
  {
    name: "Edgar Castro",
    initials: "EC",
    date: "2024-09-02",
    rating: 5,
    text: "Sencillamente es el mejor... Un profesor único y con una paciencia infinita... Un ser muy comprometido con la enseñanza... Muchas gracias Profe... (He is simply the best... A unique teacher with infinite patience... Thank you very much Professor...)",
    color: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
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
