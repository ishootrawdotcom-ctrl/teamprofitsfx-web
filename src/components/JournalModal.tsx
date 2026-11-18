"use client";

import { useEffect, useState } from "react";
import {
  X,
  BrainCircuit,
  LineChart,
  ListChecks,
  Lock,
  Sparkles,
  ArrowUpRight,
  ShieldAlert,
  CheckCircle2,
} from "lucide-react";
import { SITE_CONFIG } from "@/data/siteData";

export function JournalModal() {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<"coach" | "trades" | "curve">("coach");

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;
      if (
        anchor.href.includes("journal.teamprofitsfx.com") &&
        !anchor.dataset.directLogin
      ) {
        e.preventDefault();
        setOpen(true);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  if (!open) return null;

  const mockTrades = [
    {
      pair: "NAS100",
      session: "NY AM Killzone",
      setup: "Liq. Sweep + 5m FVG",
      rr: "+3.4R",
      status: "WIN",
    },
    {
      pair: "XAUUSD",
      session: "NY Open",
      setup: "MSS + Order Block",
      rr: "+2.1R",
      status: "WIN",
    },
    {
      pair: "EURUSD",
      session: "Silver Bullet",
      setup: "SMT Divergence + IFVG",
      rr: "+1.8R",
      status: "WIN",
    },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="w-full sm:max-w-2xl rounded-t-3xl sm:rounded-3xl border border-violet-500/30 bg-[#080b16] shadow-[0_0_60px_-15px_rgba(139,92,246,0.45)] overflow-hidden">
        {/* Header */}
        <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-cyan-500/15 border border-cyan-400/30 text-cyan-300">
              <BrainCircuit className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-display font-bold text-white text-sm sm:text-base">
                  Team Profits AI Journal
                </h3>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/15 border border-amber-400/30 text-[10px] font-mono text-amber-300">
                  <Lock className="w-2.5 h-2.5" /> MEMBERS ONLY
                </span>
              </div>
              <p className="text-[11px] font-mono text-slate-400">
                Interactive Terminal Preview • journal.teamprofitsfx.com
              </p>
            </div>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Interactive Tabs */}
        <div className="px-5 pt-4">
          <div className="grid grid-cols-3 gap-1.5 p-1 rounded-2xl bg-black/50 border border-white/10">
            <button
              onClick={() => setTab("coach")}
              className={`py-2 px-2 rounded-xl text-[11px] sm:text-xs font-bold flex items-center justify-center gap-1.5 transition ${
                tab === "coach"
                  ? "bg-gradient-to-r from-violet-600 to-cyan-500 text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <BrainCircuit className="w-3.5 h-3.5" /> AI Coach
            </button>
            <button
              onClick={() => setTab("trades")}
              className={`py-2 px-2 rounded-xl text-[11px] sm:text-xs font-bold flex items-center justify-center gap-1.5 transition ${
                tab === "trades"
                  ? "bg-gradient-to-r from-violet-600 to-cyan-500 text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <ListChecks className="w-3.5 h-3.5" /> ICT Log
            </button>
            <button
              onClick={() => setTab("curve")}
              className={`py-2 px-2 rounded-xl text-[11px] sm:text-xs font-bold flex items-center justify-center gap-1.5 transition ${
                tab === "curve"
                  ? "bg-gradient-to-r from-violet-600 to-cyan-500 text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <LineChart className="w-3.5 h-3.5" /> Analytics
            </button>
          </div>
        </div>

        {/* Dynamic Terminal Body */}
        <div className="p-5 space-y-4">
          {tab === "coach" && (
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-2.5">
                <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10">
                  <p className="text-[10px] font-mono text-slate-400">WIN RATE</p>
                  <p className="font-display text-xl sm:text-2xl font-bold text-emerald-400">
                    68.4%
                  </p>
                </div>
                <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10">
                  <p className="text-[10px] font-mono text-slate-400">PROFIT FACTOR</p>
                  <p className="font-display text-xl sm:text-2xl font-bold text-cyan-300">
                    2.41
                  </p>
                </div>
                <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10">
                  <p className="text-[10px] font-mono text-slate-400">DISCIPLINE</p>
                  <p className="font-display text-xl sm:text-2xl font-bold text-violet-300">
                    96/100
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-gradient-to-br from-violet-500/15 to-cyan-500/10 border border-violet-400/30 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-300">
                  <Sparkles className="w-3.5 h-3.5" /> AI DISCIPLINE COACH INSIGHT
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  “Your win rate during <strong className="text-white">NY AM Killzone (9:30–11:00 EST)</strong> is +22% higher than Asian session. Revenge trading dropped to 0% after enabling daily 2-trade lock.”
                </p>
              </div>

              <div className="flex items-center gap-2 p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-xs text-rose-200">
                <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0" />
                <span>Auto-Protector alerts you before breaking prop firm daily drawdown rules.</span>
              </div>
            </div>
          )}

          {tab === "trades" && (
            <div className="space-y-2.5">
              {mockTrades.map((t) => (
                <div
                  key={t.pair}
                  className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between gap-3"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-display font-bold text-white text-sm">
                        {t.pair}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-violet-500/20 text-violet-200">
                        {t.session}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5">{t.setup}</p>
                  </div>
                  <div className="text-right">
                    <span className="font-mono font-bold text-emerald-400 text-sm">
                      {t.rr}
                    </span>
                    <p className="text-[10px] font-mono text-emerald-300/80 flex items-center justify-end gap-1">
                      <CheckCircle2 className="w-3 h-3" /> {t.status}
                    </p>
                  </div>
                </div>
              ))}
              <p className="text-[11px] text-center text-slate-500 font-mono pt-1">
                Tag ICT setups, screenshots, emotions & session edge in seconds.
              </p>
            </div>
          )}

          {tab === "curve" && (
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-mono text-slate-400">EQUITY GROWTH CURVE</p>
                  <p className="font-display font-bold text-white text-lg">
                    +18.6% <span className="text-xs font-mono text-emerald-400">Funded Phase Passed</span>
                  </p>
                </div>
                <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-400/30">
                  ICT MODEL
                </span>
              </div>

              <svg viewBox="0 0 400 120" className="w-full h-28 overflow-visible">
                <defs>
                  <linearGradient id="curveGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#22d3ee" />
                  </linearGradient>
                  <linearGradient id="fillGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.28" />
                    <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,105 L55,95 L95,98 L145,74 L195,80 L250,48 L305,52 L355,22 L400,12 L400,120 L0,120 Z"
                  fill="url(#fillGrad)"
                />
                <path
                  d="M0,105 L55,95 L95,98 L145,74 L195,80 L250,48 L305,52 L355,22 L400,12"
                  fill="none"
                  stroke="url(#curveGrad)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="400" cy="12" r="5" fill="#22d3ee" />
              </svg>
            </div>
          )}

          {/* CTAs */}
          <div className="pt-2 space-y-2.5">
            <a
              href="#pricing"
              onClick={() => setOpen(false)}
              className="btn-cyber w-full py-3.5 rounded-2xl font-bold text-sm text-white flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              Unlock Full AI Journal Access (Join Mentorship)
            </a>

            <div className="text-center">
              <a
                href={SITE_CONFIG.journalUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-direct-login="true"
                className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-cyan-300 transition py-1"
              >
                Already a paid student? Login to Terminal
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
