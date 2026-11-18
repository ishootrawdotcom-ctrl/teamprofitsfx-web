import { CheckCircle2, Youtube } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteData";
import { Reveal } from "./Reveal";

export function AboutMentor() {
  const highlights = [
    "5+ years live experience in ICT & Smart Money Concepts",
    "580+ free educational trading videos & 18.9K+ YouTube subscribers",
    "No monthly subscription traps — lifetime mentorship built for real growth",
  ];

  return (
    <section id="mentor" className="py-16 md:py-24 border-y border-white/5 bg-white/[0.015]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <Reveal className="lg:col-span-5">
            <div className="carbon-card rounded-3xl p-3 max-w-md mx-auto">
              <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-[#0b1224]">
                <img
                  src="/images/eduardo-suit.jpg"
                  alt="Eduardo Rincon - Team Profits FX Founder"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-violet-400">
              Meet Your Mentor
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight">
              “I provide the roadmap and personal support. I only ask for your discipline.”
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              My name is <strong className="text-white">Eduardo Rincon</strong>. The trading industry is flooded with expensive recurring monthly fees and mentors who never show a live chart. I changed the game: complete ICT & SMC education, 3x weekly live NY trading, AI trade journaling, and unlimited 1-on-1 calls until you succeed.
            </p>

            <div className="space-y-3 pt-2">
              {highlights.map((text) => (
                <div key={text} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-slate-200 text-sm sm:text-base">{text}</span>
                </div>
              ))}
            </div>

            <div className="pt-3">
              <a
                href={SITE_CONFIG.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl border border-red-500/30 bg-red-500/10 text-red-300 font-semibold text-sm hover:bg-red-500/20 transition active:scale-95"
              >
                <Youtube className="w-5 h-5 text-red-400" />
                Watch 580+ Free Videos on YouTube
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
