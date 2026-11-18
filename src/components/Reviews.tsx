import { Star } from "lucide-react";
import { REVIEWS } from "@/data/siteData";
import { Reveal } from "./Reveal";

export function Reviews() {
  return (
    <section id="reviews" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-400">
                Verified Google Reviews
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-2">
                Trusted by real traders worldwide
              </h2>
            </div>

            <div className="inline-flex items-center gap-4 px-5 py-3 rounded-2xl carbon-card self-start">
              <div className="text-3xl font-display font-bold text-white">4.9</div>
              <div>
                <div className="flex text-amber-400 gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-slate-400 mt-0.5">Based on 10 Google Reviews</p>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="flex md:grid md:grid-cols-2 gap-5 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4 md:pb-0">
          {REVIEWS.map((rev, i) => (
            <Reveal key={i} delay={i * 80} className="min-w-[85vw] sm:min-w-[380px] md:min-w-0 snap-center">
              <div className="carbon-card rounded-3xl p-6 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-full border flex items-center justify-center font-bold text-sm ${rev.color}`}
                      >
                        {rev.initials}
                      </div>
                      <div>
                        <p className="font-semibold text-white text-sm">{rev.name}</p>
                        <p className="text-xs text-slate-500 font-mono">{rev.date}</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10">
                      Google G
                    </span>
                  </div>

                  <div className="flex text-amber-400 gap-0.5 mb-3">
                    {[...Array(rev.rating)].map((_, idx) => (
                      <Star key={idx} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed">“{rev.text}”</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
