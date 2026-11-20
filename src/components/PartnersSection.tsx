import { ExternalLink, ShieldCheck, Zap, Flame } from "lucide-react";
import { Reveal } from "./Reveal";

export function PartnersSection() {
  const partners = [
    {
      name: "FundedNext",
      tagline: "Official Prop Firm Partner",
      desc: "Use code EDUARDO to claim 110% Reward on your funded challenge checkout.",
      badge: "110% REWARD PERK",
      code: "EDUARDO",
      link: "https://fundednext.com/?fpr=profitfx",
      cardStyle: "border-cyan-500/50 bg-gradient-to-b from-[#0e1628] via-[#080b16] to-[#05060b] shadow-[0_0_40px_-10px_rgba(34,211,238,0.3)] hover:shadow-[0_0_60px_-5px_rgba(34,211,238,0.5)]",
      btnBg: "bg-gradient-to-r from-violet-600 via-cyan-500 to-blue-600 text-white hover:brightness-120 shadow-lg shadow-cyan-500/25",
      // Logo corporativo limpio en alta definición
      logoGraphic: (
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 font-black text-lg">
            N
          </div>
          <span className="font-display font-black tracking-wider text-2xl sm:text-3xl text-white">
            FUNDED<span className="text-cyan-400">NEXT</span>
          </span>
        </div>
      ),
    },
    {
      name: "FundYourFX",
      tagline: "Prime Team Profits Partnership",
      desc: "Get only the best deals through our direct prime partnership link below.",
      badge: "PRIME PARTNER",
      code: "TEAMPROFITS",
      link: "https://fundyourfx.com/prime-teamprofits",
      cardStyle: "border-blue-500/50 bg-gradient-to-b from-[#0a1128] via-[#070b17] to-[#05060b] shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)] hover:shadow-[0_0_60px_-5px_rgba(59,130,246,0.5)]",
      btnBg: "bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white hover:brightness-120 shadow-lg shadow-blue-500/25",
      // Logo corporativo limpio en alta definición
      logoGraphic: (
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-blue-400 font-black text-lg">
            FX
          </div>
          <span className="font-display font-bold tracking-tight text-2xl sm:text-3xl text-white">
            Fund<span className="text-blue-400 font-extrabold">Your</span>FX
          </span>
        </div>
      ),
    },
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-violet-600/10 blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.2em] text-cyan-400 bg-cyan-500/10 border border-cyan-400/30 px-3.5 py-1 rounded-full">
              <Flame className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              Verified Ecosystem Partners
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Funded Trading Partners
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Scale your approved ICT &amp; SMC strategies with our official prop firm partners.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {partners.map((p, idx) => (
            <Reveal key={p.name} delay={idx * 120}>
              <div
                className={`rounded-3xl p-8 h-full flex flex-col justify-between border-2 transition-all duration-300 hover:-translate-y-2 relative group ${p.cardStyle}`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    {/* Logotipo nítido en alta definición */}
                    <div className="py-1 flex items-center justify-start overflow-visible">
                      {p.logoGraphic}
                    </div>
                    <span className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[10px] font-mono font-bold text-cyan-300 tracking-wider shrink-0 shadow-md">
                      {p.badge}
                    </span>
                  </div>

                  <p className="text-xs font-mono uppercase tracking-wider text-violet-400 mb-2 font-semibold">
                    {p.tagline}
                  </p>
                  <p className="text-slate-200 text-base sm:text-lg font-medium leading-relaxed mb-8">
                    {p.desc}
                  </p>
                </div>

                <div className="space-y-4">
                  {p.code && (
                    <div className="flex items-center justify-between p-4 rounded-2xl bg-black/70 border border-white/15 shadow-inner">
                      <div>
                        <p className="text-[10px] font-mono text-slate-400 tracking-wider">EXCLUSIVE COUPON</p>
                        <p className="font-mono font-bold text-cyan-300 text-base sm:text-lg tracking-widest mt-0.5">
                          {p.code}
                        </p>
                      </div>
                      <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-xl">
                        <ShieldCheck className="w-4 h-4" /> Verified
                      </span>
                    </div>
                  )}

                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-4 rounded-2xl font-extrabold text-sm sm:text-base flex items-center justify-center gap-2.5 transition active:scale-95 ${p.btnBg}`}
                  >
                    <Zap className="w-4 h-4 fill-white" />
                    Access {p.name} Partner Link
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
