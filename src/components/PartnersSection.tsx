import { Award, ExternalLink, ShieldCheck, Zap } from "lucide-react";
import { Reveal } from "./Reveal";

export function PartnersSection() {
  const partners = [
    {
      name: "FundedNext",
      tagline: "Official Prop Firm Partner",
      desc: "Scale your capital with one of the most trusted prop firms in the industry. Use our exclusive VIP partner reward code upon checkout.",
      badge: "110% REWARD PERK",
      code: "EDUARDO",
      link: "https://fundednext.com/?fpr=profitfx",
      logo: "/images/fundednext-logo.jpg",
      accent: "from-violet-600/20 via-cyan-500/10 to-transparent border-cyan-500/30 text-cyan-300",
      btnBg: "bg-gradient-to-r from-violet-600 to-cyan-500 text-white hover:brightness-110",
    },
    {
      name: "FundYourFX",
      tagline: "Prime Team Profits Partnership",
      desc: "Get instant funding and trade your strategy without strict time limits. Join through our direct prime partnership link below.",
      badge: "PRIME PARTNER",
      code: "TEAMPROFITS",
      link: "https://fundyourfx.com/prime-teamprofits",
      logo: "/images/fundyourfx-logo.jpg",
      accent: "from-blue-600/20 via-indigo-500/10 to-transparent border-blue-500/30 text-blue-300",
      btnBg: "bg-gradient-to-r from-blue-600 to-indigo-500 text-white hover:brightness-110",
    },
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-400">
              Verified Ecosystem Partners
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Funded Trading Partners
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Scale your approved ICT &amp; SMC strategies with our official broker &amp; prop firm partners.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {partners.map((p, idx) => (
            <Reveal key={p.name} delay={idx * 100}>
              <div className={`carbon-card rounded-3xl p-7 h-full flex flex-col justify-between border bg-gradient-to-br ${p.accent} relative group`}>
                <div>
                  <div className="flex items-center justify-between mb-6">
                    {/* Contenedor de Tamaño Fijo y Simetría Perfecta */}
                    <div className="w-36 h-11 px-3 py-1.5 rounded-2xl bg-black/70 border border-white/10 flex items-center justify-center overflow-hidden shadow-inner">
                      <img
                        src={p.logo}
                        alt={`${p.name} Logo`}
                        className="max-h-7 max-w-full w-auto object-contain mix-blend-screen"
                      />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-cyan-300 tracking-wider">
                      {p.badge}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-white mb-1">
                    {p.name}
                  </h3>
                  <p className="text-xs font-mono text-violet-400 mb-3">{p.tagline}</p>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {p.desc}
                  </p>
                </div>

                <div className="space-y-4">
                  {p.code && (
                    <div className="flex items-center justify-between p-3 rounded-2xl bg-black/40 border border-white/10">
                      <div>
                        <p className="text-[10px] font-mono text-slate-400">EXCLUSIVE COUPON</p>
                        <p className="font-mono font-bold text-cyan-300 text-sm tracking-widest">
                          {p.code}
                        </p>
                      </div>
                      <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5" /> Verified
                      </span>
                    </div>
                  )}

                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 rounded-2xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition active:scale-95 shadow-lg ${p.btnBg}`}
                  >
                    <Zap className="w-4 h-4" />
                    Access {p.name} Partner Link
                    <ExternalLink className="w-3.5 h-3.5" />
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
