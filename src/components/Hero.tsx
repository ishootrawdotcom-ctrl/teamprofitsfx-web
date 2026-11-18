import { ArrowRight, Play, ShieldCheck, Star, Terminal, Zap } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteData";

export function Hero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-violet-600/20 blur-[120px] animate-pulse-slow" />
      <div className="pointer-events-none absolute top-40 -right-24 w-96 h-96 rounded-full bg-cyan-500/15 blur-[120px] animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-xs font-mono text-violet-200">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>LIVE NY KILLZONES • TUE / WED / THU</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-white">
              Watch me trade live{" "}
              <span className="text-cyan-400">
                Tuesdays, Wednesdays and Thursdays
              </span>{" "}
              <span className="block mt-3 text-slate-300 text-2xl sm:text-3xl lg:text-4xl font-semibold">
                — or go watch Netflix and work 9-5.
              </span>
            </h1>

            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Master <strong className="text-white">ICT & Smart Money Concepts</strong> with{" "}
              <span className="text-cyan-300 font-medium">Eduardo Rincon</span>. No overpriced monthly traps—get our complete video library, custom TradingView/MT5 indicators, unlimited 1-on-1 calls, and our private{" "}
              <strong className="text-violet-300">AI Trade Journal</strong>.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#pricing"
                className="btn-cyber px-7 py-4 rounded-2xl font-bold text-white text-sm sm:text-base flex items-center justify-center gap-2"
              >
                <Zap className="w-4 h-4" />
                Unlock Lifetime Access
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={SITE_CONFIG.journalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-2xl border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 font-semibold text-sm sm:text-base flex items-center justify-center gap-2 transition active:scale-95"
              >
                <Terminal className="w-4 h-4 text-cyan-400" />
                Launch AI Journal
              </a>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 text-xs sm:text-sm text-slate-400">
              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="text-white font-semibold">4.9/5</span>
                <span>Google Reviews</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Play className="w-4 h-4 text-red-400" />
                <span>
                  <strong className="text-white">18.9K+</strong> YouTube Traders
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>
                  FundedNext Code: <strong className="text-cyan-300 font-mono">EDUARDO</strong>
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative carbon-card rounded-3xl p-3 sm:p-4 animate-float-subtle">
              <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-tr from-violet-500/30 to-cyan-500/30 blur opacity-40 -z-10" />
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-square bg-[#0b0e1a]">
                <img
                  src="/images/eduardo-desk.jpg"
                  alt="Eduardo Rincon trading ICT & SMC setups"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05060b] via-transparent to-transparent" />

                <div className="absolute bottom-3 inset-x-3 rounded-2xl border border-white/15 bg-[#070914]/85 backdrop-blur-md p-3.5 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                      Founder & Lead Mentor
                    </p>
                    <p className="font-display font-bold text-white text-base">
                      Eduardo Rincon
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-2.5 py-1 rounded-lg bg-violet-500/20 border border-violet-400/30 text-violet-200 text-xs font-mono">
                      5+ Yrs Live
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
