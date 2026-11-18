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
  socials: {
    instagram: "https://www.instagram.com/edwardteamprofits/",
    tiktok: "https://www.tiktok.com/@teamprofits?lang=en",
    telegramChannel: "https://t.me/+dJBq3jsXzpI4Mjkx",
    telegramVip: "https://t.me/c/3241873901/1",
    x: "https://x.com/TPFXCORP",
    youtube: "https://www.youtube.com/@TeamProfitsFX",
  },
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
    startNY: "2026-11-19T00:00:00-05:00",
    endNY: "2026-11-28T00:00:00-05:00",
    discountPercent: 80,
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
    color: "bg
