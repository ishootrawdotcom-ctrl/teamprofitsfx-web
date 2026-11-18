import {
  Radio,
  BookOpen,
  LineChart,
  BrainCircuit,
  PhoneCall,
  Award,
  Copy,
  ArrowUpRight,
} from "lucide-react";
import { SITE_CONFIG } from "@/data/siteData";
import { Reveal } from "./Reveal";

export function Ecosystem() {
  const pillars = [
    {
      icon: Radio,
      tag: "LIVE EXECUTION",
      title: "Live Trading 3x Every Week",
      desc: "Trade side-by-side with me every Tuesday, Wednesday, and Thursday during New York Killzones. Zero hindsight—real entries, real risk management.",
      accent: "text-rose-400 bg-rose-500/10 border-rose-500/20",
    },
    {
      icon: BookOpen,
      tag: "STRUCTURED LIBRARY",
      title: "Full ICT & SMC Course + eBook",
      desc: "Step-by-step video curriculum, downloadable SMC eBook, and Saturday live Zoom Q&A breakdowns so no question goes unanswered.",
      accent: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    },
    {
      icon: LineChart,
      tag: "PROPRIETARY TOOLS",
      title: "Free TradingView & MT5 Indicators",
      desc: "Unlock our custom-built ICT/SMC indicators for both TradingView and MetaTrader 5 to spot liquidity pools, killzones, and FVGs instantly.",
      accent: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    },
    {
      icon: BrainCircuit,
      tag: "PRIVATE TERMINAL",
      title: "AI Trade Journal & Discipline Coach",
      desc: "Direct access to our private AI Terminal. Log trades effortlessly and let our AI Coach diagnose emotional leaks and boost your win rate.",
      accent: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
      link: SITE_CONFIG.journalUrl,
    },
    {
      icon: PhoneCall,
      tag: "DIRECT ACCESS",
      title: "Unlimited 1-on-1 Calls + Telegram",
      desc: "Stuck on a concept? Book 1-on-1 mentorship calls whenever you need, plus get daily setups inside our 200+ student Telegram group.",
      accent: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    },
  ];

  return (
    <section id="ecosystem" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 space-y-3">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-400">
              Complete Trading Ecosystem
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Everything you need to pass challenges & stay profitable
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Built for fast execution on both desktop terminals and your mobile phone.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={idx * 70}>
                <div className="carbon-card rounded-3xl p-6 h-full flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className={`p-3 rounded-2xl border ${item.accent}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-mono text-slate-400 tracking-wider">
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-white mb-2.5 group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>

                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300"
                    >
                      Open Terminal <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </Reveal>
            );
          })}

          <Reveal delay={350}>
            <div className="rounded-3xl p-6 h-full flex flex-col justify-between border border-cyan-500/30 bg-gradient-to-br from-violet-950/60 via-[#0a0d1a] to-cyan-950/50 relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-2xl bg-cyan-500/15 border border-cyan-400/30 text-cyan-300">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-[10px] font-mono text-cyan-300">
                    OFFICIAL PARTNER
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-2">
                  FundedNext Prop Firm Perks
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  Ready to scale your capital? Use our official partner coupon for{" "}
                  <strong className="text-white">{SITE_CONFIG.fundedNext.benefit}</strong>.
                </p>
              </div>

              <div className="relative z-10 flex items-center justify-between gap-3 p-3 rounded-2xl bg-black/40 border border-white/10">
                <div>
                  <p className="text-[10px] font-mono text-slate-400">COUPON CODE</p>
                  <p className="font-mono font-bold text-cyan-300 text-base tracking-wider">
                    {SITE_CONFIG.fundedNext.code}
                  </p>
                </div>
                <a
                  href={SITE_CONFIG.fundedNext.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs flex items-center gap-1 hover:bg-cyan-400 transition active:scale-95"
                >
                  <Copy className="w-3.5 h-3.5" />
                  Claim 110%
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
